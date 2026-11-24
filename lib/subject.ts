// ---------------------------------------------------------------------------
// Central subject configuration for Year 12–13 IB Diploma Spanish B (SL/HL).
// Provisional: aligned to published FA2029 subject brief; full guide due Feb 2027.
// Post-IGCSE Language B (B1 → B2/C1) — NOT ab initio.
// ---------------------------------------------------------------------------
import type { IBCommandTerm, IBLevel, Strand } from "./types.ts";

export interface VaultQuickCard {
  title: string;
  badge: string;
  level?: IBLevel;
  lines: string[];
}

export interface ExamTip {
  icon: string;
  title: string;
  text: string;
}

export interface CommandTermDef {
  term: IBCommandTerm;
  ao: "AO1" | "AO2" | "AO3";
  meaning: string;
  examTip: string;
}

export interface ExamPaperMeta {
  id: string;
  expectedCount: number;
  level: IBLevel;
  paperType: string;
}

export const SUBJECT = {
  storageKey: "y12spanishb",
  cookieName: "y12spanishb_session",
  shortName: "IB Spanish B",
  fullName: "Year 12–13 IB Diploma Spanish B (SL/HL)",
  shortTitle: "IB DP Spanish B",
  badge: "IB DP Spanish B · FA2029 Brief (Provisional)",
  groupLabel: "Group 2 · Language Acquisition",
  icon: "Ñ",
  themeColorLight: "#c2410c",
  themeColorDark: "#2b1208",
  provisionalBanner: "Provisional: aligned to FA2029 subject brief; full guide due Feb 2027" as string | null,
  tutorName: "Profesora Cervantes",
  tutorEmoji: "🇪🇸",
  tutorScope: "IB Diploma Spanish B (SL & HL, post-IGCSE B1→B2/C1, FA2029 Subject Brief)",
  tutorSystemPrompt: `You are Profesora Cervantes, a warm, rigorous IB Diploma Spanish B (SL & HL — Provisional: aligned to FA2029 subject brief; full guide due Feb 2027) tutor inside Vanishree's Year 12–13 revision hub at Tanglin Trust School, Singapore.

How you teach (discovery-first IB Language B pedagogy, post-IGCSE B1 → B2/C1 — NOT ab initio):
- If the learner asks about a question they are working on, do NOT dump the full translation or final answer immediately. Offer one crisp grammatical or conceptual nudge first (e.g. "Notice the WEIRDO trigger \`es imprescindible que\` — does that demand indicative or present subjunctive?", "Check the target audience in this Paper 1 prompt: would a city mayor expect \`tú\` or \`usted\`?"), then let them reason.
- Only give the full model answer if they explicitly ask for it or the context says they have already answered.
- Respect the **FA2029 IB Language B Subject Brief** strictly:
  1. **5 Prescribed Themes:** *Identidades, Experiencias, Ingenio humano, Organización social, Compartir el planeta* (across diverse Hispanophone cultures: Spain & Latin America).
  2. **5 Conceptual Understandings:** *Audience, Context, Purpose, Meaning, Variation* — central to Paper 1 Criterion C (6 marks).
  3. **External & Internal Assessment:** Paper 1 Writing (25%, 30m: A12/B12/C6; SL 250–400 words / HL 450–600 words), Paper 2 Receptive Skills (50%, 65m: Listening 25m + Reading 40m), Individual Oral IA (25%, 30m: A12/B1 6/B2 6/C6; SL 15m prep visual stimulus / HL 20m prep ~300-word literary extract from 1 of 2 studied Hispanic works).
  4. **Zero prescribed set texts at HL:** Any named Hispanic work (Lorca, Esquivel, Rulfo, Matute, Allende, etc.) is explicitly an example work only.
- Always enforce authentic Spanish orthography (\`á é í ó ú ñ ü ¿ ¡\`) and distinguish subtle grammatical contrasts (\`por/para\`, \`ser/estar\`, \`pretérito/imperfecto\`, \`indicativo/subjuntivo\`).

Style:
- Concise: usually 2–6 sentences. Clear British English explanations paired with natural, idiomatic IB B2–C1 Spanish examples.
- You may use **bold**, inline \`code\`, and simple "- " bullet lists.

Safety and scope:
- Only help with IB Diploma Spanish B (themes, grammar, text types, Paper 1/2, Individual Oral, HL Literature, vocabulary). For anything else, kindly steer back to Spanish B.
- Never ask for or repeat personal information.`,
  vaultTitle: "IB Spanish B Grammar, Connectors & Text-Type Blueprint Vault",
  vaultShort: "Grammar Vault",
  vaultIcon: "📖",
  vaultBlurb: "Post-IGCSE B2–C1 grammar quick reference (Subjunctive WEIRDO, Si-clauses, Por vs Para), C1 connectors, and all 15+ IB Paper 1 text-type blueprints.",
  vaultSearchPlaceholder: "Filter e.g. subjuntivo, por/para, artículo, carta formal, reseña, conectores…",
  examTitle: "IB Spanish B Mock Papers (Paper 1 Writing & Paper 2 Reading / Listening)",
  examShort: "Mock Papers",
  examBlurb: "Aligned to the FA2029 Subject Brief: Core MCQ Drills, Paper 1 Writing (3 text-type choices, SL 250–400w / HL 450–600w), Paper 2 Reading & Paper 2 Listening (TTS scripts + transcripts).",
  iaNavLabel: "Individual Oral",
  iaTitle: "IB Spanish B Individual Oral (SL Visual Stimulus & HL Literary Extract)",
  cramBanner: "FA2029 Exam Savers: Match Paper 1 text-type conventions to Audience + Register (tú vs usted) for Criterion C (6/6); hit SL 250–400w / HL 450–600w; on Paper 2 copy ONLY the exact justification phrase (zero extra words!); and weave subjunctive + Hispanic cultural links into every oral!",
  searchPlaceholder: "Search, e.g. “subjuntivo”, “por vs para”, “carta formal”, “Identidades”, “Lorca” or “IO”",
  sitcomSeriesName: "IB Spanish B Studio (Phase C)",
  sitcomBlurb: "Narrated IB Spanish B episodes and vertical Immersion Shorts will arrive in Phase C once the Year 9 video batch finishes rendering.",
} as const;

export const EXAM_PAPERS_META: readonly ExamPaperMeta[] = [
  { id: "exam-mcq", expectedCount: 25, level: "SL", paperType: "Core Grammar, Theme & Text-Type MCQ" },
  { id: "exam-p1", expectedCount: 15, level: "SL", paperType: "Paper 1 · Productive Writing (SL 250–400w / HL 450–600w · 30m)" },
  { id: "exam-p2-reading", expectedCount: 15, level: "SL", paperType: "Paper 2 · Reading Comprehension (1h · 40m)" },
  { id: "exam-p2-listening", expectedCount: 15, level: "SL", paperType: "Paper 2 · Listening Comprehension (TTS Audio Scripts · 25m)" },
] as const;

export const STRAND_STYLES_MAP: Record<Strand, { slug: string; text: string; bg: string; soft: string; border: string }> = {
  "Prescribed Themes 1–3": { slug: "themes-1-3", text: "text-s-number", bg: "bg-s-number", soft: "bg-s-number/15", border: "border-s-number" },
  "Prescribed Themes 4–5": { slug: "themes-4-5", text: "text-s-ratio", bg: "bg-s-ratio", soft: "bg-s-ratio/15", border: "border-s-ratio" },
  "Grammar & Text Types": { slug: "grammar-text", text: "text-s-algebra", bg: "bg-s-algebra", soft: "bg-s-algebra/15", border: "border-s-algebra" },
  "Exam Skills & HL Literature": { slug: "exam-hl-lit", text: "text-s-stats", bg: "bg-s-stats", soft: "bg-s-stats/15", border: "border-s-stats" },
};

export const VAULT_QUICK_CARDS: readonly VaultQuickCard[] = [
  {
    title: "1. Subjunctive Mood Triggers (WEIRDO + ESCAPA + Concessives)",
    badge: "B2–C1 Core",
    level: "SL",
    lines: [
      "**WEIRDO (2 different subjects + `que`):** Wishes (`querer que`), Emotions (`me preocupa que`), Impersonal (`es imprescindible que`), Recommendations (`aconsejar que`), Doubt/Denial (`no creo que`, `dudar que`), `Ojalá (que)`.",
      "**ALWAYS Subjunctive (ESCAPA):** `En caso de que`, `Sin que`, `Con tal de que`, `Antes de que`, `Para que`, `A menos que`.",
      "**Indicative vs Subjunctive:** `Cuando / Tan pronto como / Hasta que` → **Subjunctive** for *future* actions (`cuando llegues`); **Indicative** for *habitual/past* facts (`cuando llegaste`). `Aunque` → Indicative for known fact vs Subjunctive for hypothetical/concessive.",
    ],
  },
  {
    title: "2. The 3 IB Paper 1 Text-Type Categories (Criterion C = 6/30)",
    badge: "Paper 1 Key",
    level: "SL",
    lines: [
      "**Personal (tú / informal–semi-formal):** `Diario personal` (date, reflective tone), `Carta informal / Correo electrónico` (salutation, sign-off), `Blog` (catchy title, interactive direct address, tags/comments prompt).",
      "**Professional (usted / formal–objective):** `Carta formal` (addresses, date, `Estimado/a...`, `Atentamente`), `Informe` (title, intro, numbered subheadings, recommendations), `Propuesta` (objective, rationale, action plan), `Folleto / Guía` (slogan, bullet boxes, call to action).",
      "**Mass Media (semi-formal–formal, persuasive):** `Artículo` (headline, byline, subheadings, engaging lead), `Editorial` (institutional *nosotros* voice, stance), `Entrevista` (intro, Q&A turns), `Discurso` (vocative opening, rhetorical triads, closing thanks), `Reseña` (title, rating/summary, balanced critique).",
    ],
  },
  {
    title: "3. High-Band Discourse Markers & Si-Clauses (Band 10–12 Language)",
    badge: "Band 10–12",
    level: "SL",
    lines: [
      "**Contrast & Concession:** `Si bien es cierto que...`, `No obstante`, `Sin embargo`, `A pesar de que`, `Mientras que`, `Por el contrario`.",
      "**Cause, Consequence & Synthesis:** `Dado que`, `Puesto que`, `Por consiguiente`, `De ahí que (+ subjuntivo!)`, `En definitiva`, `Cabe destacar que`.",
      "**3 Si-Clauses:** Type 1 (likely): `Si + presente → futuro`; Type 2 (hypothetical): `Si + imperfecto subjuntivo (-ra/-se) → condicional simple`; Type 3 (past regret): `Si + pluscuamperfecto subjuntivo (hubiera...) → condicional compuesto (habría...)`.",
    ],
  },
  {
    title: "4. HL Literary Analysis Toolkit & Individual Oral (20m Prep)",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**HL IO Format:** 20 minutes prep on a **~300-word literary extract** from 1 of 2 studied works originally written in Spanish (zero prescribed set texts — always link to the whole work + a Prescribed Theme!).",
      "**Core Literary Metalanguage:** `el narrador omnisciente / en primera persona`, `el simbolismo`, `la metáfora`, `el tono`, `la ironía`, `el presagio (foreshadowing)`, `la analepsis (flashback)`, `el campo semántico`, `la crítica social`.",
      "**FA2029 Brief Reminder:** Provisional alignment to FA2029 subject brief (refined oral B2 & C top bands; full guide due Feb 2027).",
    ],
  },
];

export const EXAM_TIPS: readonly ExamTip[] = [
  {
    icon: "🎯",
    title: "Paper 1: Always Pick the Single MOST Appropriate Text Type",
    text: "Each Paper 1 prompt gives 3 text types: one is **most appropriate**, one is acceptable, and one is clearly inappropriate for the audience/purpose. Picking the wrong register (`tú` to a mayor!) caps Criterion C (6 marks) immediately.",
  },
  {
    icon: "📏",
    title: "Respect the Word-Count Zone (SL 250–400w / HL 450–600w)",
    text: "Going significantly below the minimum caps Criterion B (Message) because ideas stay underdeveloped; writing far beyond the maximum wastes proofreading time needed to fix gender/number agreement and accent marks (`á é í ó ú ñ`).",
  },
  {
    icon: "🔎",
    title: "Paper 2 Reading: Exact Justification Quotes Only!",
    text: "On True/False + Justification items, copy ONLY the exact minimal phrase from the text that proves your answer. Copying a whole extra sentence that contains irrelevant or contradictory detail can forfeit the mark!",
  },
  {
    icon: "🎙️",
    title: "Individual Oral: Never Recite a Memorised Essay",
    text: "Part 1 is 3–4 minutes focused tightly on the stimulus (SL photo / HL ~300-word literary extract) + Hispanic cultural connection. Parts 2 & 3 reward spontaneous interaction (Criteria B2 & C) — ask clarifying questions, react naturally, and justify opinions!",
  },
];

export const IB_COMMAND_TERMS: readonly CommandTermDef[] = [
  { term: "Identify", ao: "AO1", meaning: "Provide a specific answer from a number of possibilities (e.g. audience, tone, synonym, or rhetorical device).", examTip: "Be concise and cite the exact Spanish word/phrase from the stimulus text." },
  { term: "State", ao: "AO1", meaning: "Give a specific name, fact, or brief answer without explanation.", examTip: "For Paper 2 Reading short-answer items, lift the exact detail accurately without changing meaning." },
  { term: "Outline", ao: "AO1", meaning: "Give a brief account or summary of main points.", examTip: "Hit 2–3 clear points directly linked to the prescribed theme." },
  { term: "Describe", ao: "AO1", meaning: "Give a detailed account of a stimulus, experience, or cultural practice.", examTip: "In SL IO Part 1, spend ~1 minute describing the visual stimulus, then immediately pivot to cultural analysis!" },
  { term: "Distinguish", ao: "AO2", meaning: "Make clear the differences between two or more concepts, registers, or grammatical moods.", examTip: "Contrast both sides explicitly (e.g. `por` = cause/exchange vs `para` = goal/recipient)." },
  { term: "Explain", ao: "AO2", meaning: "Give a detailed account including reasons or causes.", examTip: "Use B2–C1 causal connectors (`dado que`, `puesto que`, `de ahí que + subj.`)." },
  { term: "Interpret", ao: "AO2", meaning: "Use knowledge and understanding to infer implied meaning, tone, irony, or authorial intent.", examTip: "Essential in Paper 2 Reading & HL Literature — read between the lines, not just literal facts!" },
  { term: "Justify", ao: "AO2", meaning: "Give valid reasons or textual evidence to support an answer or decision.", examTip: "For Paper 2 True/False + Justification, quote the exact minimal phrase proving your choice." },
  { term: "Analyse", ao: "AO3", meaning: "Break down a text or literary extract to show how language, structure, and cultural context create meaning.", examTip: "For HL IO, connect specific literary techniques in the ~300-word extract to the wider work & theme." },
  { term: "Compare and contrast", ao: "AO3", meaning: "Give an account of similarities and differences between two cultural contexts or viewpoints.", examTip: "Link Hispanic cultural traditions to your own international/Singapore context without stereotyping." },
  { term: "Discuss", ao: "AO3", meaning: "Offer a considered and balanced review that includes a range of arguments and perspectives.", examTip: "Use concessive frames (`si bien es cierto que..., no obstante...`) to show critical thinking (FA2029 focus!)." },
  { term: "Evaluate", ao: "AO3", meaning: "Make an appraisal by weighing up the strengths, limitations, and ethical implications of an issue.", examTip: "Ideal for Band 10–12 Paper 1 essays & IO Part 3 general discussion — conclude with a nuanced personal judgement." },
];
