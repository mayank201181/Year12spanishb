import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { PrintStyles } from "@/components/Certificate";
import { FormulasVault, type VaultTopicData } from "@/components/FormulasVault";
import { SUBJECT } from "@/lib/subject";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: SUBJECT.vaultTitle,
  description: SUBJECT.vaultBlurb,
};

export default function FormulasPage() {
  const vaultTopics: VaultTopicData[] = TOPICS.map((t) => ({
    id: t.id,
    title: t.title,
    icon: t.icon,
    strand: t.strand,
    level: t.level ?? "SL",
    misconceptions: t.learn?.misconceptions ?? [],
    examMistakes: t.learn?.examMistakes ?? [],
    formulas: t.learn?.formulas ?? [],
  }));

  return (
    <>
      <PrintStyles orientation="portrait" margin="12mm" />
      <FormulasVault topics={vaultTopics} />
    </>
  );
}
