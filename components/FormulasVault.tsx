"use client";
import { useState } from "react";
import Link from "next/link";
import type { FormulaFact, IBLevel, Misconception } from "@/lib/types";
import { IB_COMMAND_TERMS, SUBJECT, VAULT_QUICK_CARDS } from "@/lib/subject";
import { STRANDS } from "@/lib/topics/meta";
import { useStore } from "@/lib/store";
import { Rich, RichInline } from "./Rich";
import { PrintButton } from "./Certificate";

export interface VaultTopicData {
  id: string;
  title: string;
  icon: string;
  strand: string;
  level: IBLevel;
  misconceptions: Misconception[];
  examMistakes: string[];
  formulas: FormulaFact[];
}

type ViewTab = "all" | "traps" | "cheatsheet" | "commands";

export function FormulasVault({ topics }: { topics: VaultTopicData[] }) {
  const { ibLevel } = useStore();
  const [tab, setTab] = useState<ViewTab>("all");
  const [strandFilter, setStrandFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const levelTopics = ibLevel === "SL" ? topics.filter((t) => t.level !== "HL") : topics;
  const visibleTopics = levelTopics.filter((t) => (strandFilter === "All" ? true : t.strand === strandFilter));
  const quickCards = ibLevel === "SL" ? VAULT_QUICK_CARDS.filter((c) => c.level !== "HL") : VAULT_QUICK_CARDS;

  const totalTraps = levelTopics.reduce((s, t) => s + t.misconceptions.filter((m) => ibLevel === "HL" || m.level !== "HL").length, 0);
  const totalMistakes = levelTopics.reduce((s, t) => s + t.examMistakes.length, 0);
  const totalFormulas = levelTopics.reduce((s, t) => s + t.formulas.filter((f) => ibLevel === "HL" || f.level !== "HL").length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <span className="chip border-0 bg-bad-soft text-bad">❌→✅ {totalTraps} Mark-Scheme Swaps</span>
            <span className="chip border-0 bg-accent-soft text-warn">⚠️ {totalMistakes} Examiner Warnings</span>
            <span className="chip border-0 bg-brand-soft text-brand">
              {SUBJECT.vaultIcon} {totalFormulas} Key Equations &amp; Rules ({ibLevel})
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl print:text-xl">
            {SUBJECT.vaultIcon} {SUBJECT.vaultTitle}
          </h1>
          <p className="mt-1 max-w-3xl text-ink-2 print:hidden">{SUBJECT.vaultBlurb}</p>
        </div>
        <PrintButton label="Print Reference Sheet" />
      </header>

      {/* High-Yield Quick-Reference Cards */}
      <section aria-label="Quick Reference Cards" className="grid gap-3 md:grid-cols-2">
        {quickCards.map((c) => (
          <article key={c.title} className="card border-l-4 border-brand p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-extrabold text-ink">{c.title}</h2>
              <span className={`chip shrink-0 border-0 text-xs ${c.level === "HL" ? "bg-accent-soft text-warn" : "bg-brand-soft text-brand"}`}>{c.badge}</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-2">
              {c.lines.map((line, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="font-bold text-brand">
                    •
                  </span>
                  <span className="min-w-0 flex-1">
                    <RichInline text={line} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Filters */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-3">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Vault view">
          <button type="button" role="tab" aria-selected={tab === "all"} onClick={() => setTab("all")} className={`btn btn-sm ${tab === "all" ? "btn-primary" : "btn-secondary"}`}>
            All ({totalTraps + totalFormulas})
          </button>
          <button type="button" role="tab" aria-selected={tab === "cheatsheet"} onClick={() => setTab("cheatsheet")} className={`btn btn-sm ${tab === "cheatsheet" ? "btn-primary" : "btn-secondary"}`}>
            {SUBJECT.vaultIcon} Formulas &amp; Rules ({totalFormulas})
          </button>
          <button type="button" role="tab" aria-selected={tab === "traps"} onClick={() => setTab("traps")} className={`btn btn-sm ${tab === "traps" ? "btn-primary" : "btn-secondary"}`}>
            ❌→✅ Mark-Scheme Swaps ({totalTraps})
          </button>
          <button type="button" role="tab" aria-selected={tab === "commands"} onClick={() => setTab("commands")} className={`btn btn-sm ${tab === "commands" ? "btn-primary" : "btn-secondary"}`}>
            🎯 Command Terms ({IB_COMMAND_TERMS.length})
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {["All", ...STRANDS].map((s) => (
            <button key={s} type="button" onClick={() => setStrandFilter(s)} className={`chip cursor-pointer text-xs ${strandFilter === s ? "border-brand bg-brand-soft text-brand" : ""}`}>
              {s === "All" ? "All Themes" : s.split(":")[0]}
            </button>
          ))}
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={SUBJECT.vaultSearchPlaceholder}
            aria-label="Filter reference vault"
            className="input h-9 w-52 text-sm"
          />
        </div>
      </div>

      {/* IB Command Terms Panel */}
      {tab === "commands" || tab === "all" ? (
        <section className="card space-y-3 p-4 sm:p-5">
          <h2 className="text-lg font-black">🎯 Official IB Command Terms ({SUBJECT.shortName})</h2>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {IB_COMMAND_TERMS.filter((c) => !q || c.term.toLowerCase().includes(q) || c.meaning.toLowerCase().includes(q) || c.examTip.toLowerCase().includes(q)).map((c) => (
              <div key={c.term} className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <strong className="font-black text-brand">{c.term}</strong>
                  <span className="chip text-[0.7rem]">{c.ao}</span>
                </div>
                <p className="mt-1 text-xs text-ink">{c.meaning}</p>
                <p className="mt-1 text-xs text-ink-2">
                  <strong>Tip:</strong> {c.examTip}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Topic-by-Topic Exam Vault */}
      {tab !== "commands" ? (
        <div className="space-y-6">
          {visibleTopics.map((t) => {
            const traps = t.misconceptions
              .filter((m) => ibLevel === "HL" || m.level !== "HL")
              .filter((m) => !q || m.wrong.toLowerCase().includes(q) || m.right.toLowerCase().includes(q));
            const mistakes = t.examMistakes.filter((m) => !q || m.toLowerCase().includes(q));
            const formulas = t.formulas
              .filter((f) => ibLevel === "HL" || f.level !== "HL")
              .filter((f) => !q || f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || (f.note ?? "").toLowerCase().includes(q));

            const showTraps = tab !== "cheatsheet" && (traps.length > 0 || mistakes.length > 0);
            const showFormulas = tab !== "traps" && formulas.length > 0;
            if (!showTraps && !showFormulas) return null;

            return (
              <section key={t.id} id={`vault-${t.id}`} className="card break-inside-avoid space-y-4 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wide text-brand">{t.strand}</span>
                      {t.level === "HL" ? <span className="chip border-0 bg-accent-soft text-warn text-[0.7rem]">HL Only</span> : null}
                    </div>
                    <h2 className="text-xl font-black">
                      <span aria-hidden>{t.icon} </span>
                      {t.title}
                    </h2>
                  </div>
                  <div className="no-print flex flex-wrap gap-2">
                    <Link href={`/topic/${t.id}?tab=revise`} className="btn btn-secondary btn-sm">
                      🧠 Flashcards &amp; Revise
                    </Link>
                    <Link href={`/topic/${t.id}?tab=practise`} className="btn btn-primary btn-sm">
                      ✏️ Practise →
                    </Link>
                  </div>
                </div>

                {showFormulas && formulas.length > 0 ? (
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-brand">📖 Key Formulas, Laws &amp; Definitions</h3>
                    <dl className="mt-2 grid gap-3 sm:grid-cols-2">
                      {formulas.map((f, idx) => (
                        <div key={idx} className="min-w-0 rounded-xl border border-line bg-surface p-3.5">
                          <dt className="flex items-center justify-between gap-2 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                            <span>
                              <RichInline text={f.name} />
                            </span>
                            {f.level === "HL" ? <span className="chip border-0 bg-accent-soft text-warn text-[0.65rem]">HL</span> : null}
                          </dt>
                          <dd className="mt-1 overflow-x-auto">
                            <Rich text={f.formula} className="text-[0.98rem] font-semibold text-ink" />
                            {f.note ? <Rich text={f.note} className="mt-0.5 text-xs text-ink-2" /> : null}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ) : null}

                {showTraps && traps.length > 0 ? (
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-bad">❌ Never Write This → ✅ Write This Instead (IB Examiner Precision)</h3>
                    <ul className="mt-2 space-y-2.5">
                      {traps.map((m, idx) => (
                        <li key={idx} className="grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
                          <div className="bg-bad-soft p-3.5 text-sm">
                            <div className="text-xs font-black uppercase tracking-wider text-bad">❌ Loses Marks — Never Write</div>
                            <p className="mt-1 line-through decoration-bad/60">
                              <RichInline text={m.wrong} />
                            </p>
                          </div>
                          <div className="bg-good-soft p-3.5 text-sm">
                            <div className="text-xs font-black uppercase tracking-wider text-good">✅ Earns Marks — Write Instead</div>
                            <p className="mt-1 font-semibold">
                              <RichInline text={m.right} />
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {showTraps && mistakes.length > 0 ? (
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-warn">⚠️ Examiner Report Warnings</h3>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {mistakes.map((x, idx) => (
                        <li key={idx} className="flex gap-2.5 rounded-xl border border-line bg-surface-2 p-3 text-sm">
                          <span aria-hidden className="font-black text-warn">
                            !
                          </span>
                          <span className="min-w-0 flex-1">
                            <RichInline text={x} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
