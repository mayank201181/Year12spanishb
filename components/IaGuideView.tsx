"use client";
// Interactive IB Internal Assessment (IA) Guide powered by lib/ia.ts.
import Link from "next/link";
import { useCallback, useMemo, useSyncExternalStore } from "react";
import { IA_GUIDE } from "@/lib/ia";
import { SUBJECT } from "@/lib/subject";
import { RichInline } from "./Rich";

const CHECK_KEY = `${SUBJECT.storageKey}.ia.checklist.v1`;
const CHECK_EVENT = `${SUBJECT.storageKey}:iaChecklist`;

function subscribeChecklist(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (!e.key || e.key === CHECK_KEY) cb();
  };
  window.addEventListener(CHECK_EVENT, cb);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHECK_EVENT, cb);
    window.removeEventListener("storage", onStorage);
  };
}

function readChecklistRaw(): string {
  try {
    return localStorage.getItem(CHECK_KEY) ?? "{}";
  } catch {
    return "{}";
  }
}

export function IaGuideView() {
  const raw = useSyncExternalStore(subscribeChecklist, readChecklistRaw, () => "{}");
  const checked = useMemo<Record<string, boolean>>(() => {
    try {
      return JSON.parse(raw) as Record<string, boolean>;
    } catch {
      return {};
    }
  }, [raw]);

  const toggle = useCallback(
    (idx: number) => {
      const next = { ...checked, [String(idx)]: !checked[String(idx)] };
      try {
        localStorage.setItem(CHECK_KEY, JSON.stringify(next));
        window.dispatchEvent(new Event(CHECK_EVENT));
      } catch {
        /* ignore storage error */
      }
    },
    [checked],
  );

  const doneCount = IA_GUIDE.checklist.filter((_, i) => checked[String(i)]).length;

  return (
    <div className="space-y-6">
      <section className="card overflow-hidden p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip border-0 bg-brand text-brand-ink text-xs">{SUBJECT.badge}</span>
          <span className="chip text-xs">SL {IA_GUIDE.weightSL} · HL {IA_GUIDE.weightHL}</span>
          <span className="chip text-xs">{IA_GUIDE.totalMarks} marks</span>
          {IA_GUIDE.wordLimit ? <span className="chip text-xs">Max {IA_GUIDE.wordLimit.toLocaleString()} words</span> : null}
        </div>
        <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">🧪 {IA_GUIDE.title}</h1>
        <p className="mt-1 text-sm text-ink-2">{IA_GUIDE.subtitle}</p>
        <p className="mt-3 rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink-2">{IA_GUIDE.hoursNote}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" className="btn btn-secondary btn-sm no-print" onClick={() => window.print()}>
            🖨️ Print IA Checklist
          </button>
          <Link href="/formulas" className="btn btn-ghost btn-sm no-print">
            {SUBJECT.vaultIcon} {SUBJECT.vaultShort}
          </Link>
        </div>
      </section>

      {IA_GUIDE.keyChanges2025.length > 0 ? (
        <section className="card border-brand/30 bg-brand-soft/40 p-5">
          <h2 className="section-title">⚡ Key Official IBO Rules to Know</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {IA_GUIDE.keyChanges2025.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-black text-brand" aria-hidden>•</span>
                <span><RichInline text={item} /></span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="space-y-4">
        <h2 className="section-title">📋 Marking Criteria &amp; Top-Band Descriptors</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {IA_GUIDE.criteria.map((c) => (
            <article key={c.code} className="card p-4 sm:p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="chip border-0 bg-brand-soft text-brand text-xs">Criterion {c.code}</span>
                  <h3 className="mt-1 text-lg font-extrabold">{c.name}</h3>
                </div>
                <span className="chip shrink-0 font-black">{c.maxMarks} marks</span>
              </div>
              <p className="text-sm text-ink-2">{c.summary}</p>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wide text-good">Top-band essentials</div>
                <ul className="mt-1.5 space-y-1 text-sm">
                  {c.topBandMustHave.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-good font-bold" aria-hidden>✓</span>
                      <span><RichInline text={m} /></span>
                    </li>
                  ))}
                </ul>
              </div>
              <details className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
                <summary className="cursor-pointer font-bold">View official markband descriptors</summary>
                <div className="mt-2 space-y-2">
                  {c.bands.map((b, i) => (
                    <div key={i} className="rounded-lg border border-line bg-surface p-2.5">
                      <span className="font-extrabold text-brand">{b.marks} marks: </span>
                      <span className="text-ink-2">{b.descriptor}</span>
                    </div>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="card p-5 space-y-4">
        <h2 className="section-title">🗓️ Tanglin DP1 → DP2 Milestone Timeline</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {IA_GUIDE.milestones.map((m, i) => (
            <div key={i} className="rounded-xl border border-line bg-surface-2 p-4">
              <div className="text-xs font-extrabold uppercase tracking-wide text-brand">{m.timing}</div>
              <h3 className="mt-0.5 font-extrabold">{m.phase}</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-ink-2">
                {m.tasks.map((t, j) => (
                  <li key={j} className="flex gap-2">
                    <span aria-hidden>→</span>
                    <span><RichInline text={t} /></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-5 space-y-3">
        <h2 className="section-title">🏗️ Exemplar Structure &amp; Word-Budget Plan</h2>
        <div className="space-y-2.5">
          {IA_GUIDE.exemplarStructure.map((s, i) => (
            <div key={i} className="rounded-xl border border-line bg-surface-2 p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-extrabold">{s.heading}</h3>
                <span className="chip text-xs">{s.targetWords}</span>
              </div>
              <p className="mt-1 text-sm text-ink-2"><RichInline text={s.whatToInclude} /></p>
            </div>
          ))}
        </div>
      </section>

      <section className="card border-bad/30 bg-bad-soft/40 p-5 space-y-3">
        <h2 className="section-title">🚨 Common IB Moderator Traps (Avoid These!)</h2>
        <ul className="space-y-2 text-sm">
          {IA_GUIDE.moderatorTraps.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="font-black text-bad" aria-hidden>✗</span>
              <span><RichInline text={t} /></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="section-title">✅ Final Pre-Submission Checklist</h2>
          <span className="chip border-0 bg-good-soft text-good text-xs">
            {doneCount}/{IA_GUIDE.checklist.length} checked
          </span>
        </div>
        <p className="text-xs text-ink-2">Saved automatically on this device so Vanishree can tick items off from DP1 planning to DP2 submission.</p>
        <ul className="space-y-2">
          {IA_GUIDE.checklist.map((item, i) => {
            const on = !!checked[String(i)];
            return (
              <li key={i}>
                <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${on ? "border-good/40 bg-good-soft/40" : "border-line bg-surface-2"}`}>
                  <input
                    type="checkbox"
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--brand)]"
                    checked={on}
                    onChange={() => toggle(i)}
                  />
                  <span className={`text-sm ${on ? "line-through text-ink-2" : "font-medium"}`}>
                    <RichInline text={item} />
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
