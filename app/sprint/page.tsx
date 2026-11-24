import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";
import { SUBJECT } from "@/lib/subject";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "60s Fluency Sprint",
  description: `60-second Fluency Sprint — rapid-fire ${SUBJECT.shortName} recall across every syllabus theme.`,
};

export default function SprintPage() {
  return <SprintRunner />;
}
