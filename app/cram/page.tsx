import { Suspense } from "react";
import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";
import { SUBJECT } from "@/lib/subject";

export const metadata: Metadata = {
  title: `Exam Cram Sheet — ${SUBJECT.fullName}`,
  description: `Select any topics in your test for an instant ${SUBJECT.shortName} Exam Cram & Mark-Savers Sheet.`,
};

export default function CramPage() {
  const packs = TOPICS.map(buildTopicCramPack);
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Building {SUBJECT.shortName} Exam Cram Sheet…</p>}>
      <CramSheet packs={packs} subjectLabel={SUBJECT.fullName} />
    </Suspense>
  );
}
