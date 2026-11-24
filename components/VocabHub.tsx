"use client";
// Dedicated /vocab hub: 1,000+ post-IGCSE B1–C1 Spanish vocabulary items across all
// 5 IB Prescribed Themes + Connectors + HL Literary terms, with es-ES Web Speech audio
// (normal 1.0x & slow 0.72x), flashcard quiz mode with accent keypad & gentle accent-slip
// checking, plus irregular & subjunctive verb reference tables.
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { VOCAB_ITEMS, VERB_TABLES } from "@/lib/vocab";
import { VOCAB_THEMES, type CefrLevel, type VocabEntry, type VocabTheme } from "@/lib/vocabTypes";
import { checkAnswer } from "@/lib/answerCheck";
import { useStore } from "@/lib/store";
import { AnswerInput } from "./AnswerInput";

type HubTab = "browse" | "quiz" | "verbs";

const PAGE_SIZE = 60;
const noopSub = () => () => {};

function useSpanishSpeech() {
  const supported = useSyncExternalStore(
    noopSub,
    () => "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function",
    () => false,
  );
  const [speakingKey, setSpeakingKey] = useState<string | null>(null);

  useEffect(() => {
    if (!supported) return;
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const speak = useCallback(
    (text: string, rate: number, key: string) => {
      if (!supported) return;
      const synth = window.speechSynthesis;
      synth.cancel();
      const voices = synth.getVoices();
      const voice =
        voices.find((v) => v.lang?.toLowerCase() === "es-es") ??
        voices.find((v) => v.lang?.toLowerCase().startsWith("es"));
      const u = new SpeechSynthesisUtterance(text);
      u.lang = voice?.lang ?? "es-ES";
      if (voice) u.voice = voice;
      u.rate = rate;
      u.onend = () => setSpeakingKey((cur) => (cur === key ? null : cur));
      u.onerror = () => setSpeakingKey((cur) => (cur === key ? null : cur));
      setSpeakingKey(key);
      synth.speak(u);
    },
    [supported],
  );

  return { supported, speakingKey, speak };
}

function stripArticleForAccept(es: string): string[] {
  const cleaned = es.replace(/\s*\([^)]*\)/g, "").trim();
  const variants = new Set<string>([cleaned]);
  const noArt = cleaned.replace(/^(?:el|la|los|las|un|una|el\/la)\s+/i, "").trim();
  if (noArt && noArt !== cleaned) variants.add(noArt);
  return [...variants];
}

export function VocabHub() {
  const { ibLevel } = useStore();
  const speech = useSpanishSpeech();

  const [tab, setTab] = useState<HubTab>("browse");
  const [theme, setTheme] = useState<VocabTheme | "ALL">("ALL");
  const [cefr, setCefr] = useState<CefrLevel | "ALL">("ALL");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [verbCat, setVerbCat] = useState<string>("ALL");

  // Flashcard quiz state
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizDir, setQuizDir] = useState<"en-es" | "es-en">("en-es");
  const [typed, setTyped] = useState("");
  const [quizMsg, setQuizMsg] = useState<{ status: "correct" | "close" | "incorrect" | "invalid"; text: string } | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ right: 0, total: 0 });
  const [seedOffset, setSeedOffset] = useState(0);

  const visiblePool = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VOCAB_ITEMS.filter((item) => {
      if (ibLevel === "SL" && item.hl) return false;
      if (theme !== "ALL" && item.theme !== theme) return false;
      if (cefr !== "ALL" && item.cefr !== cefr) return false;
      if (!q) return true;
      return (
        item.es.toLowerCase().includes(q) ||
        item.en.toLowerCase().includes(q) ||
        item.theme.toLowerCase().includes(q) ||
        item.pos.toLowerCase().includes(q)
      );
    });
  }, [ibLevel, theme, cefr, query]);

  const totalPages = Math.max(1, Math.ceil(visiblePool.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const pageItems = useMemo(
    () => visiblePool.slice(safePage * PAGE_SIZE, (safePage + 1) * PAGE_SIZE),
    [visiblePool, safePage],
  );

  // Deterministic shuffled deck for quiz mode based on visiblePool + seedOffset
  const quizDeck = useMemo<VocabEntry[]>(() => {
    const arr = [...visiblePool];
    let s = (seedOffset + 1) * 2654435761;
    for (let i = arr.length - 1; i > 0; i--) {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      const j = s % (i + 1);
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }, [visiblePool, seedOffset]);

  const currentCard = quizDeck.length ? quizDeck[quizIdx % quizDeck.length] : null;

  const filteredVerbs = useMemo(
    () => (verbCat === "ALL" ? VERB_TABLES : VERB_TABLES.filter((v) => v.category === verbCat)),
    [verbCat],
  );

  function resetQuizCard(nextIndex: number) {
    setQuizIdx(nextIndex);
    setTyped("");
    setQuizMsg(null);
    setRevealed(false);
  }

  function handleCheckQuiz() {
    if (!currentCard || revealed) return;
    if (quizDir === "en-es") {
      const accept = stripArticleForAccept(currentCard.es);
      const res = checkAnswer({ type: "text", accept, display: currentCard.es }, typed);
      if (res.status === "correct") {
        setQuizMsg({ status: "correct", text: res.feedback ?? `¡Exacto! ${currentCard.es}` });
        setRevealed(true);
        setScore((s) => ({ right: s.right + 1, total: s.total + 1 }));
      } else if (res.status === "close") {
        setQuizMsg({
          status: "close",
          text: res.feedback ?? "Almost! Check the Spanish accent mark(s) or ñ and try again.",
        });
      } else if (res.status === "invalid") {
        setQuizMsg({ status: "invalid", text: res.feedback ?? "Type an answer first." });
      } else {
        setQuizMsg({ status: "incorrect", text: `Answer: ${currentCard.es}` });
        setRevealed(true);
        setScore((s) => ({ right: s.right, total: s.total + 1 }));
      }
    } else {
      const accept = currentCard.en
        .split(/[;/,]/)
        .map((x) => x.replace(/\([^)]*\)/g, "").trim())
        .filter(Boolean);
      const res = checkAnswer({ type: "text", accept: accept.length ? accept : [currentCard.en], display: currentCard.en }, typed);
      if (res.status === "correct") {
        setQuizMsg({ status: "correct", text: `¡Bien hecho! ${currentCard.en}` });
        setRevealed(true);
        setScore((s) => ({ right: s.right + 1, total: s.total + 1 }));
      } else if (res.status === "invalid") {
        setQuizMsg({ status: "invalid", text: res.feedback ?? "Type an answer first." });
      } else {
        setQuizMsg({ status: "incorrect", text: `Meaning: ${currentCard.en}` });
        setRevealed(true);
        setScore((s) => ({ right: s.right, total: s.total + 1 }));
      }
    }
  }

  const themeCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of VOCAB_ITEMS) {
      if (ibLevel === "SL" && item.hl) continue;
      map.set(item.theme, (map.get(item.theme) ?? 0) + 1);
    }
    return map;
  }, [ibLevel]);

  return (
    <div className="space-y-6">
      <header className="card border-2 border-brand/30 bg-gradient-to-br from-brand-soft/80 via-surface to-accent-soft/40 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip border-0 bg-brand text-brand-ink text-xs">Post-IGCSE B1 → B2/C1</span>
              <span className="chip text-xs">{VOCAB_ITEMS.length.toLocaleString()} total entries</span>
              <span className="chip text-xs">{VERB_TABLES.length} key verb paradigms</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">🗣️ IB Spanish B Vocab &amp; Verb Hub</h1>
            <p className="text-sm text-ink-2">
              Curated across all 5 IB Prescribed Themes, C1 discourse connectors, and HL literary metalanguage. Tap{" "}
              <strong className="text-ink">🔊</strong> for normal speed or <strong className="text-ink">🐢</strong> for slow{" "}
              <code>es-ES</code> pronunciation.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Vocab hub sections">
            {(
              [
                { id: "browse", label: "📚 Lexicon" },
                { id: "quiz", label: "🎯 Flashcard Quiz" },
                { id: "verbs", label: "⚙️ Verb Tables" },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`btn btn-sm ${tab === t.id ? "btn-primary" : "btn-secondary"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Filter bar (shared by Lexicon & Quiz) */}
      {tab !== "verbs" ? (
        <section className="card space-y-3 p-4" aria-label="Vocabulary filters">
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="block text-xs font-bold text-ink-2 sm:col-span-2">
              Search Spanish or English
              <input
                type="search"
                className="input mt-1 text-sm"
                placeholder="e.g. sostenibilidad, sin embargo, metáfora, health…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(0);
                  resetQuizCard(0);
                }}
              />
            </label>
            <label className="block text-xs font-bold text-ink-2">
              CEFR Tier
              <select
                className="input mt-1 text-sm"
                value={cefr}
                onChange={(e) => {
                  setCefr(e.target.value as CefrLevel | "ALL");
                  setPage(0);
                  resetQuizCard(0);
                }}
              >
                <option value="ALL">All tiers (B1–C1)</option>
                <option value="B1">B1 (Post-IGCSE Bridge)</option>
                <option value="B2">B2 (IB Core SL/HL)</option>
                <option value="C1">C1 (Band 10–12 / HL Stretch)</option>
              </select>
            </label>
          </div>

          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by IB Prescribed Theme">
            <button
              type="button"
              onClick={() => {
                setTheme("ALL");
                setPage(0);
                resetQuizCard(0);
              }}
              className={`chip cursor-pointer text-xs ${theme === "ALL" ? "border-brand bg-brand text-brand-ink" : "hover:bg-surface-2"}`}
            >
              All ({VOCAB_ITEMS.filter((i) => ibLevel === "HL" || !i.hl).length})
            </button>
            {VOCAB_THEMES.filter((t) => ibLevel === "HL" || t !== "Literatura HL").map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTheme(t);
                  setPage(0);
                  resetQuizCard(0);
                }}
                className={`chip cursor-pointer text-xs ${theme === t ? "border-brand bg-brand text-brand-ink" : "hover:bg-surface-2"}`}
              >
                {t} ({themeCounts.get(t) ?? 0})
              </button>
            ))}
          </div>
          <p className="text-xs text-ink-2">
            Showing <strong className="text-ink">{visiblePool.length.toLocaleString()}</strong> matching entries
            {ibLevel === "SL" ? " (HL-only literary entries hidden in SL view — toggle HL in the header to show all)." : "."}
          </p>
        </section>
      ) : null}

      {/* TAB 1: SEARCHABLE LEXICON */}
      {tab === "browse" ? (
        <section className="space-y-4">
          {pageItems.length === 0 ? (
            <div className="card p-8 text-center text-sm text-ink-2">No vocabulary entries match those filters. Clear the search box to browse all items.</div>
          ) : (
            <div className="grid gap-2.5 sm:grid-cols-2">
              {pageItems.map((item, idx) => {
                const keyNorm = `n-${safePage}-${idx}`;
                const keySlow = `s-${safePage}-${idx}`;
                return (
                  <article key={`${item.es}-${idx}`} className="card flex min-w-0 items-center justify-between gap-3 p-3.5">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-extrabold text-ink">{item.es}</span>
                        <span className="rounded bg-surface-2 px-1.5 py-0.5 text-[0.68rem] font-bold text-ink-2">{item.pos}</span>
                        <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[0.68rem] font-bold text-brand">{item.cefr}</span>
                        {item.hl ? (
                          <span className="rounded bg-warn-soft px-1.5 py-0.5 text-[0.68rem] font-bold text-warn">HL</span>
                        ) : null}
                      </div>
                      <p className="mt-0.5 text-sm text-ink-2">{item.en}</p>
                      <p className="mt-0.5 text-[0.7rem] font-semibold text-ink-2/80">{item.theme}</p>
                    </div>
                    {speech.supported ? (
                      <div className="flex shrink-0 items-center gap-1">
                        <button
                          type="button"
                          onClick={() => speech.speak(item.es, 1.0, keyNorm)}
                          className={`btn btn-ghost h-9 w-9 p-0 text-base ${speech.speakingKey === keyNorm ? "bg-brand-soft text-brand" : ""}`}
                          title={`Listen in Spanish (1.0x): ${item.es}`}
                          aria-label={`Play normal audio for ${item.es}`}
                        >
                          🔊
                        </button>
                        <button
                          type="button"
                          onClick={() => speech.speak(item.es, 0.72, keySlow)}
                          className={`btn btn-ghost h-9 w-9 p-0 text-base ${speech.speakingKey === keySlow ? "bg-accent-soft text-accent" : ""}`}
                          title={`Listen slowly (0.72x): ${item.es}`}
                          aria-label={`Play slow audio for ${item.es}`}
                        >
                          🐢
                        </button>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          )}

          {totalPages > 1 ? (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                disabled={safePage === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              >
                ← Previous
              </button>
              <span className="text-xs font-bold text-ink-2">
                Page {safePage + 1} of {totalPages}
              </span>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                disabled={safePage >= totalPages - 1}
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              >
                Next →
              </button>
            </div>
          ) : null}
        </section>
      ) : null}

      {/* TAB 2: FLASHCARD QUIZ MODE */}
      {tab === "quiz" ? (
        <section className="card mx-auto max-w-2xl space-y-4 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                className={`btn btn-sm ${quizDir === "en-es" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => {
                  setQuizDir("en-es");
                  resetQuizCard(quizIdx);
                }}
              >
                EN → ES (Active Recall)
              </button>
              <button
                type="button"
                className={`btn btn-sm ${quizDir === "es-en" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => {
                  setQuizDir("es-en");
                  resetQuizCard(quizIdx);
                }}
              >
                ES → EN (Reading)
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className="chip">
                Score: {score.right}/{score.total}
              </span>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  setSeedOffset((s) => s + 1);
                  resetQuizCard(0);
                }}
              >
                🔀 Shuffle
              </button>
            </div>
          </div>

          {currentCard ? (
            <div className="space-y-4 rounded-2xl border border-line bg-surface-2/40 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="chip bg-brand-soft text-brand border-0">{currentCard.theme}</span>
                  <span className="chip">{currentCard.cefr}</span>
                  <span className="chip">{currentCard.pos}</span>
                </div>
                {speech.supported && (quizDir === "es-en" || revealed) ? (
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => speech.speak(currentCard.es, 1.0, "quiz-n")}
                    >
                      🔊 1.0x
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => speech.speak(currentCard.es, 0.72, "quiz-s")}
                    >
                      🐢 0.72x
                    </button>
                  </div>
                ) : null}
              </div>

              <div className="py-2 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-2">
                  {quizDir === "en-es" ? "Translate into IB Spanish (accents required!)" : "Give the English meaning"}
                </p>
                <p className="mt-1 text-2xl font-black text-ink">
                  {quizDir === "en-es" ? currentCard.en : currentCard.es}
                </p>
              </div>

              <AnswerInput
                type="text"
                value={typed}
                onChange={setTyped}
                onSubmit={handleCheckQuiz}
                disabled={revealed}
                label={quizDir === "en-es" ? "Spanish answer" : "English meaning"}
              />

              {quizMsg ? (
                <div
                  role="status"
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-bold ${
                    quizMsg.status === "correct"
                      ? "bg-good-soft text-good"
                      : quizMsg.status === "close"
                        ? "bg-warn-soft text-warn"
                        : "bg-bad-soft text-bad"
                  }`}
                >
                  {quizMsg.text}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-2">
                {!revealed ? (
                  <>
                    <button type="button" className="btn btn-primary" onClick={handleCheckQuiz}>
                      Check answer
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => {
                        setRevealed(true);
                        setQuizMsg({
                          status: "incorrect",
                          text: `Answer: ${quizDir === "en-es" ? currentCard.es : currentCard.en}`,
                        });
                        setScore((s) => ({ right: s.right, total: s.total + 1 }));
                      }}
                    >
                      Reveal answer
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => resetQuizCard(quizIdx + 1)}
                  >
                    Next card →
                  </button>
                )}
              </div>
            </div>
          ) : (
            <p className="text-sm text-ink-2">No cards in the current filter.</p>
          )}
        </section>
      ) : null}

      {/* TAB 3: IRREGULAR & SUBJUNCTIVE VERB REFERENCE TABLES */}
      {tab === "verbs" ? (
        <section className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {["ALL", "Irregular Core", "Subjunctive Stem-Change", "Spelling-Change", "High-Frequency B2–C1"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setVerbCat(c)}
                className={`chip cursor-pointer text-xs ${verbCat === c ? "border-brand bg-brand text-brand-ink" : "hover:bg-surface-2"}`}
              >
                {c === "ALL" ? `All Verbs (${VERB_TABLES.length})` : c}
              </button>
            ))}
          </div>

          <div className="card overflow-x-auto p-0">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-line bg-surface-2/70 text-ink-2">
                  <th className="px-3 py-2.5 font-extrabold">Infinitive</th>
                  <th className="px-3 py-2.5 font-extrabold">Pres. (yo)</th>
                  <th className="px-3 py-2.5 font-extrabold">Pret. (yo / él)</th>
                  <th className="px-3 py-2.5 font-extrabold">Imperf.</th>
                  <th className="px-3 py-2.5 font-extrabold">Fut./Cond. Stem</th>
                  <th className="px-3 py-2.5 font-extrabold text-brand">Pres. Subj. (yo)</th>
                  <th className="px-3 py-2.5 font-extrabold text-brand">Imp. Subj. (-ra)</th>
                  <th className="px-3 py-2.5 font-extrabold">Participle</th>
                </tr>
              </thead>
              <tbody>
                {filteredVerbs.map((v) => (
                  <tr key={v.infinitive} className="border-b border-line/60 last:border-b-0 hover:bg-surface-2/30">
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-ink">{v.infinitive}</span>
                        {speech.supported ? (
                          <button
                            type="button"
                            className="text-xs hover:opacity-80"
                            onClick={() => speech.speak(`${v.infinitive}. ${v.presSubjYo}. ${v.impSubjYo}.`, 0.9, `v-${v.infinitive}`)}
                            aria-label={`Hear ${v.infinitive} forms`}
                          >
                            🔊
                          </button>
                        ) : null}
                      </div>
                      <span className="block text-[0.7rem] text-ink-2">{v.meaning}</span>
                    </td>
                    <td className="px-3 py-2.5 font-semibold">{v.presentYo}</td>
                    <td className="px-3 py-2.5 font-semibold">
                      {v.preteriteYo} / {v.preteriteEl}
                    </td>
                    <td className="px-3 py-2.5">{v.imperfect}</td>
                    <td className="px-3 py-2.5 font-mono text-xs">{v.futureStem}</td>
                    <td className="px-3 py-2.5 font-bold text-brand">{v.presSubjYo}</td>
                    <td className="px-3 py-2.5 font-bold text-brand">{v.impSubjYo}</td>
                    <td className="px-3 py-2.5">{v.participle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </div>
  );
}
