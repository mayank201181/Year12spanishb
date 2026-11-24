import type { Metadata } from "next";
import { getExamPapers, topicSummaries } from "@/lib/server/content";
import { TOPIC_META } from "@/lib/topics/meta";
import { ExamView } from "@/components/ExamView";
import { SUBJECT } from "@/lib/subject";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: SUBJECT.examTitle,
  description: SUBJECT.examBlurb,
};

export default function ExamPage() {
  const papers = getExamPapers();
  const topicTitles = Object.fromEntries(TOPIC_META.map((t) => [t.id, t.title]));
  const practiceTopics = topicSummaries()
    .filter((t) => t.ready && t.paperIds.length > 0)
    .map((t) => ({ id: t.id, title: t.title, icon: t.icon }));
  return <ExamView papers={papers} topicTitles={topicTitles} practiceTopics={practiceTopics} />;
}
