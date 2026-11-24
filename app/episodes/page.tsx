import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";
import { SUBJECT } from "@/lib/subject";

export const metadata: Metadata = {
  title: `Sitcom TV — ${SUBJECT.sitcomSeriesName}`,
  description: SUBJECT.sitcomBlurb,
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
