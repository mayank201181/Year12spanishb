export type VocabTheme =
  | "Identidades"
  | "Experiencias"
  | "Ingenio humano"
  | "Organización social"
  | "Compartir el planeta"
  | "Conectores y Gramática"
  | "Literatura HL";

export type CefrLevel = "B1" | "B2" | "C1";

export interface VocabEntry {
  es: string;
  en: string;
  theme: VocabTheme;
  cefr: CefrLevel;
  pos: string;
  hl?: boolean;
}

export interface VerbTableRow {
  infinitive: string;
  meaning: string;
  category: "Irregular Core" | "Subjunctive Stem-Change" | "Spelling-Change" | "High-Frequency B2–C1";
  presentYo: string;
  preteriteYo: string;
  preteriteEl: string;
  imperfect: string;
  futureStem: string;
  presSubjYo: string;
  impSubjYo: string;
  participle: string;
}

export const VOCAB_THEMES: readonly VocabTheme[] = [
  "Identidades",
  "Experiencias",
  "Ingenio humano",
  "Organización social",
  "Compartir el planeta",
  "Conectores y Gramática",
  "Literatura HL",
] as const;
