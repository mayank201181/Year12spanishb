import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms", ibLevel?: "SL" | "HL"): Drill {
  const bank = [
    ["Present subjunctive of 'tener' (yo)?", "tenga"],
    ["Preposition for recipient/deadline?", "para"],
    ["Preposition for cause/exchange?", "por"],
    ["Spanish term for 'flashback'?", "analepsis"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake Spanish B drill",
    level,
    ibLevel,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.wordcount`,
    topicId,
    title: "Fake Paper 1 word-count drill",
    level: 1,
    generate(rng) {
      const target = rng.pick([250, 400, 450, 600]);
      return {
        prompt: `What is the target number ${target}?`,
        answer: { type: "number", value: target, tolerance: 0 },
        solution: [`${target}`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are IB Spanish B strands plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["themes13", "themes45", "grammar", "skills", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("paper4"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; SL hides HL drills", () => {
  const t1 = firstTopic("Prescribed Themes 1–3");
  const g1 = firstTopic("Grammar & Text Types");
  const drills = [
    bankDrill(t1, 1, "sl", "SL"),
    bankDrill(t1, 2, "hl", "HL"),
    bankDrill(t1, 3, "hard", "SL"),
    bankDrill(g1, 2, "g", "SL"),
    bankDrill("not-a-topic", 1),
  ];
  assert.deepEqual(sprintPool("themes13", drills, "HL").map((d) => d.id), [`${t1}.sl`, `${t1}.hl`]);
  assert.deepEqual(sprintPool("themes13", drills, "SL").map((d) => d.id), [`${t1}.sl`]);
  assert.deepEqual(sprintPool("grammar", drills, "HL").map((d) => d.id), [`${g1}.g`]);
  assert.deepEqual(sprintPool("mixed", drills, "SL").map((d) => d.id).sort(), [`${t1}.sl`, `${g1}.g`].sort());
});

test("items carry a checkable answer, preserve tolerance, and display the correct answer", () => {
  const t1 = firstTopic("Prescribed Themes 1–3");
  const pool = sprintPool("themes13", [numberDrill(t1)], "HL");
  const rng = makeRng(42);
  for (let i = 0; i < 30; i++) {
    const it = sprintItem(pool, rng)!;
    assert.ok(it && it.prompt && it.answerText);
    assert.equal(checkAnswer(it.answer, it.answerText).status, "correct", it.answerText);
  }
});

test("a drill that throws is skipped, not fatal", () => {
  const t1 = firstTopic("Prescribed Themes 1–3");
  const broken: Drill = {
    id: `${t1}.broken`,
    topicId: t1,
    title: "Broken",
    level: 1,
    generate() {
      throw new Error("boom");
    },
  };
  assert.equal(sprintItem([broken], makeRng(1)), null);
  const ok = sprintItem([broken, bankDrill(t1, 1)], makeRng(2));
  assert.ok(ok && ok.answerText);
});
