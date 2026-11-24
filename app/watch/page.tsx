import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { WatchHub } from "@/components/WatchHub";
import { SUBJECT } from "@/lib/subject";

export const metadata: Metadata = {
  title: `Watch — ${SUBJECT.sitcomSeriesName}`,
  description: SUBJECT.sitcomBlurb,
};

export default function WatchPage() {
  const items = TOPICS.map((t, idx) => ({
    id: t.id,
    num: idx + 1,
    title: t.title,
    icon: t.icon,
    strand: t.strand,
    summary: t.summary,
  }));
  return <WatchHub topics={items} />;
}
