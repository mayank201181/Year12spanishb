"use client";
import { setDpYearFilter } from "@/lib/dpYear";

export function DpYearBanner({
  dp2Count,
  dp1Count,
  noun = "topics",
}: {
  dp2Count: number;
  dp1Count: number;
  noun?: string;
}) {
  return (
    <div
      data-dp-year-banner="2"
      className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-brand/30 bg-brand-soft/60 px-4 py-2.5 text-sm"
    >
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <span className="inline-flex shrink-0 items-center rounded-full bg-brand px-2.5 py-0.5 text-xs font-extrabold text-brand-ink">
          IB DP2 · Year 13
        </span>
        <span className="text-ink">
          Showing <strong>{dp2Count} DP2 {noun}</strong> first. {dp1Count} DP1 {noun} stay unlocked below for May 2029 revision.
        </span>
      </div>
      <button
        type="button"
        data-dp-year-reset
        onClick={() => setDpYearFilter(null)}
        className="btn btn-ghost btn-sm shrink-0 text-xs font-bold text-brand hover:underline"
      >
        Show all equally
      </button>
    </div>
  );
}

export function Dp1ReviewDivider({
  count,
  noun = "topics",
}: {
  count: number;
  noun?: string;
}) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="h-px flex-1 bg-line" aria-hidden />
      <span className="max-w-full rounded-full border border-line bg-surface-2 px-3 py-1 text-center text-xs font-bold text-ink-2">
        DP1 Review · {count} Year 12 {noun} (unlocked)
      </span>
      <div className="h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}
