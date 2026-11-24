import type { Metadata } from "next";
import { VocabHub } from "@/components/VocabHub";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Vocab & Verb Hub (1,000+ B1–C1 Items)",
  description:
    "Searchable 1,000+ post-IGCSE B1–C1 IB Spanish B vocabulary hub across all 5 Prescribed Themes + HL literary terms, es-ES Web Speech audio, flashcard quiz, and irregular/subjunctive verb tables.",
};

export default function VocabPage() {
  return <VocabHub />;
}
