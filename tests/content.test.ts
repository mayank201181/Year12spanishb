// Every topic, drill set and exam paper passes structural + answer-key self-checks,
// and question ids are unique across the whole app.
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { TOPIC_META } from "../lib/topics/meta.ts";
import { EXAM_PAPERS_META } from "../lib/subject.ts";
import { validateAnswerIndexBalance, validateExamPaper, validateTopic, type Issue } from "../lib/validate.ts";
import type { Paper, Topic, TopicGuide, TopicPractice, ExamPaper } from "../lib/types.ts";
import type { Drill } from "../lib/drills/types.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { specSelfCheck } from "../lib/answerCheck.ts";
import { VOCAB_ITEMS, VERB_TABLES } from "../lib/vocab.ts";
import { VOCAB_THEMES } from "../lib/vocabTypes.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

test("all topics validate, MCQ answerIndex is globally balanced, and ids are globally unique", async () => {
  const seen = new Set<string>();
  const problems: string[] = [];
  const globalSpread = [0, 0, 0, 0];
  for (const m of TOPIC_META) {
    const guide = await load<TopicGuide>(`lib/topics/${m.id}/guide.ts`, "guide");
    if (!guide) continue;
    const practice = await load<TopicPractice>(`lib/topics/${m.id}/practice.ts`, "practice");
    const topic: Topic = {
      ...guide,
      quiz: practice?.quiz ?? [],
      mcqPapers: (await load<Paper[]>(`lib/topics/${m.id}/mcq.ts`, "mcqPapers")) ?? [],
      practicePapers: [...(practice?.papers ?? []), ...((await load<Paper[]>(`lib/topics/${m.id}/practice2.ts`, "morePapers")) ?? [])],
      challenge: practice?.challenge ?? [],
    };
    const { issues, counts } = validateTopic(topic, seen);
    for (let i = 0; i < 4; i++) globalSpread[i] += counts.answerIndexSpread[i] ?? 0;
    for (const i of issues) problems.push(`${i.where}: ${i.problem}`);
  }
  const sections = Object.fromEntries(TOPIC_META.map((t) => [t.id, t.sections.map((s) => s.id)]));
  for (const e of EXAM_PAPERS_META) {
    const paper = await load<ExamPaper>(`lib/exam/${e.id}.ts`, "paper");
    if (!paper) continue;
    const { issues, answerIndexSpread } = validateExamPaper(paper, sections, e.expectedCount);
    for (let i = 0; i < 4; i++) globalSpread[i] += answerIndexSpread[i] ?? 0;
    for (const i of issues) problems.push(`${i.where}: ${i.problem}`);
    for (const q of paper.questions) {
      if (seen.has(q.id)) problems.push(`${q.id}: duplicate id`);
      seen.add(q.id);
    }
  }
  const balanceIssues: Issue[] = [];
  validateAnswerIndexBalance(globalSpread, "global.mcqBalance", balanceIssues, 0.2, 0.3);
  for (const i of balanceIssues) problems.push(`${i.where}: ${i.problem}`);
  assert.deepEqual(problems.slice(0, 30), []);
});

test("all drills generate valid, self-consistent items across 200 seeds x 3 tiers", async () => {
  const problems: string[] = [];
  const ids = new Set<string>();
  for (const m of TOPIC_META) {
    const drills = await load<Drill[]>(`lib/drills/${m.id}.ts`, "drills");
    if (!drills) continue;
    for (const d of drills) {
      if (ids.has(d.id)) problems.push(`${d.id}: duplicate drill id`);
      ids.add(d.id);
      for (const tier of [1, 2, 3] as const) {
        for (let seed = 1; seed <= 200; seed++) {
          try {
            const item = d.generate(makeRng(seed * 104729 + tier), tier);
            const r = specSelfCheck(item.answer);
            if (r.status !== "correct") problems.push(`${d.id} t${tier} s${seed}: answer fails self-check`);
            if (!item.prompt || !item.solution?.length) problems.push(`${d.id} t${tier} s${seed}: empty prompt/solution`);
          } catch (e) {
            problems.push(`${d.id} t${tier} s${seed}: threw ${(e as Error).message}`);
          }
        }
      }
    }
  }
  assert.deepEqual(problems.slice(0, 30), []);
});

test("vocab hub has >= 1,000 unique post-IGCSE B1–C1 entries across all themes and >= 25 verb paradigms", () => {
  assert.ok(VOCAB_ITEMS.length >= 1000, `Expected >= 1000 vocab items, got ${VOCAB_ITEMS.length}`);
  assert.ok(VERB_TABLES.length >= 25, `Expected >= 25 verb paradigms, got ${VERB_TABLES.length}`);
  const seenEs = new Set<string>();
  const themeCounts = new Map<string, number>();
  for (const item of VOCAB_ITEMS) {
    assert.ok(item.es.trim().length > 0 && item.en.trim().length > 0, `Empty vocab row: ${JSON.stringify(item)}`);
    const key = item.es.trim().toLowerCase();
    assert.ok(!seenEs.has(key), `Duplicate Spanish vocab key: ${item.es}`);
    seenEs.add(key);
    themeCounts.set(item.theme, (themeCounts.get(item.theme) ?? 0) + 1);
  }
  for (const th of VOCAB_THEMES) {
    assert.ok((themeCounts.get(th) ?? 0) >= 60, `Theme ${th} has too few entries: ${themeCounts.get(th) ?? 0}`);
  }
});
