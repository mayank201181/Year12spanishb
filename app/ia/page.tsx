import type { Metadata } from "next";
import { IaGuideView } from "@/components/IaGuideView";
import { SUBJECT } from "@/lib/subject";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: SUBJECT.iaTitle,
  description: `Complete ${SUBJECT.fullName} Internal Assessment criteria, markbands, Tanglin timeline, exemplar structure, moderator traps and interactive checklist.`,
};

export default function IaPage() {
  return <IaGuideView />;
}
