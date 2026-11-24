import type { Metadata } from "next";
import { SkillsMap } from "@/components/SkillsMap";
import { TOPICS } from "@/lib/server/content";
import { SUBJECT } from "@/lib/subject";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Skills & Procedural Drills",
  description: `Every ${SUBJECT.fullName} procedural skill drill with adaptive tiers and instant feedback.`,
};

export default function SkillsPage() {
  return <SkillsMap readyTopicIds={TOPICS.map((t) => t.id)} />;
}
