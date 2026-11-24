import type { Metadata } from "next";
import { Suspense } from "react";
import { TopicsBrowser } from "@/components/TopicsBrowser";
import { topicSummaries } from "@/lib/server/content";
import { SUBJECT } from "@/lib/subject";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `All ${SUBJECT.shortName} Topics`,
  description: `Every ${SUBJECT.fullName} topic with SL/HL filtering, AoPS lessons, interactive widgets, drills and practice papers.`,
};

function TopicsFallback() {
  return (
    <div className="space-y-2" role="status">
      <h1 className="text-2xl font-black tracking-tight sm:text-3xl">All {SUBJECT.shortName} Topics</h1>
      <p className="text-ink-2">Loading topics…</p>
    </div>
  );
}

export default function TopicsPage() {
  return (
    <Suspense fallback={<TopicsFallback />}>
      <TopicsBrowser summaries={topicSummaries()} />
    </Suspense>
  );
}
