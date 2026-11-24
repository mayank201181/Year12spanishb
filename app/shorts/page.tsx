import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortsHub } from "@/components/ShortsHub";
import { SUBJECT } from "@/lib/subject";

export const metadata: Metadata = {
  title: `Concept Shorts — ${SUBJECT.shortName}`,
  description: SUBJECT.sitcomBlurb,
};

export default function ShortsPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading Concept Shorts…</p>}>
      <ShortsHub subjectLabel={SUBJECT.shortName} />
    </Suspense>
  );
}
