// ---------------------------------------------------------------------------
// Content data model for Year 12–13 IB Diploma Spanish B (SL & HL, FA2029 Subject Brief — Provisional).
//
// Audited exam content lives in lib/topics/<id>/{guide,mcq,practice}.ts.
// Engagement extras live in lib/extras/<id>.ts and never touch audited files.
// Procedural skill drills live in lib/drills/<id>.ts.
//
// TEXT FORMAT ("markdown-lite + maths markup") — used by every string field
// that is rendered as text (bodies, questions, options, steps, hints …):
//   **bold**   *italic*   `code`
//   blank line = new paragraph;  "- " bullet lines;  "1. " numbered lines
//   | a | b |  pipe tables (first row = header, second row may be |---|---|)
//   {{ … }}    inline maths, rendered as real maths (MathML) when needed
//   Full Spanish orthography (á é í ó ú ñ ü ¿ ¡) supported natively.
// ---------------------------------------------------------------------------

export type IBLevel = "SL" | "HL";

export type Strand =
  | "Prescribed Themes 1–3"
  | "Prescribed Themes 4–5"
  | "Grammar & Text Types"
  | "Exam Skills & HL Literature";

export type Difficulty = "warmup" | "core" | "challenge";

export type IBCommandTerm =
  | "Define"
  | "Identify"
  | "List"
  | "State"
  | "Outline"
  | "Describe"
  | "Distinguish"
  | "Explain"
  | "Interpret"
  | "Justify"
  | "Analyse"
  | "Compare"
  | "Compare and contrast"
  | "Comment"
  | "Discuss"
  | "Evaluate"
  | "Examine"
  | "Synthesize"
  | "Suggest"
  | "To what extent";

/** AoPS discovery opener: a problem to attempt BEFORE the idea is explained. */
export interface Discovery {
  problem: string;
  /** Revealed after the learner has had a go. */
  idea: string;
}

/** One illuminating method for a worked solution (AoPS: multiple paths). */
export interface SolutionMethod {
  label: string;
  steps: string[];
}

/** Holistic / analytical IB markband descriptor for extended responses. */
export interface MarkBand {
  /** e.g. "0", "1–2", "3–4", "5–6" */
  band: string;
  /** Inclusive [min, max] mark range. */
  marks: [number, number];
  /** Examiner level descriptor for this band. */
  descriptor: string;
  /** Concrete indicators separating this band from the one below. */
  indicators?: string[];
}

// ---------------------------------------------------------------------------
// Auto-marked answers
// ---------------------------------------------------------------------------

export type AnswerSpec =
  | {
      type: "number";
      value: number;
      tolerance?: number;
      allowFraction?: boolean;
      standardForm?: boolean;
      display?: string;
    }
  | {
      type: "fraction";
      n: number;
      d: number;
      simplest?: boolean;
      form?: "any" | "mixed" | "improper";
      allowDecimal?: boolean;
      display?: string;
    }
  | {
      type: "list";
      values: number[];
      ordered?: boolean;
      tolerance?: number;
      display?: string;
    }
  | {
      type: "ratio";
      parts: number[];
      simplest?: boolean;
      display?: string;
    }
  | {
      type: "expression";
      expr: string;
      form?: "any" | "factorised" | "expanded" | "simplified";
      display?: string;
    }
  | {
      type: "text";
      accept: string[];
      display?: string;
    };

// ---------------------------------------------------------------------------
// Questions
// ---------------------------------------------------------------------------

interface QuestionBase {
  /** Globally unique, e.g. "a1-mechanics-m1-q01". */
  id: string;
  question: string;
  /** Optional inline SVG (viewBox, xmlns, role="img", aria-label; no backticks, no "${"). */
  diagram?: string;
  difficulty: Difficulty;
  /** "SL" = core studied by both SL & HL (default); "HL" = HL-only content. */
  level?: IBLevel;
  /** Official IB command term tested by this question. */
  commandTerm?: IBCommandTerm;
  /** id of the GuideSection this practises (for "back to the guide"). */
  guideRef?: string;
  /** AoPS hint ladder, revealed one at a time: nudge → bigger hint → key step. */
  hints: string[];
  /** Named problem-solving strategy, e.g. "Conservation of energy". */
  strategy?: string;
  /** Exam questions only: the topic id this question tests. */
  topicId?: string;
}

export interface MCQ extends QuestionBase {
  kind: "mcq";
  /** Exactly 4 options. Never refer to options by letter/position in text. */
  options: string[];
  answerIndex: number;
  /** Why the answer is right AND why a tempting distractor is wrong. */
  explanation: string;
}

export interface Trap {
  spec: AnswerSpec;
  feedback: string;
}

export interface ShortQ extends QuestionBase {
  kind: "short";
  answer: AnswerSpec;
  traps?: Trap[];
  solution: string[];
  solutions?: SolutionMethod[];
  commonError?: string;
}

export interface MarkPoint {
  point: string;
  keywords: string[];
}

export interface WrittenQ extends QuestionBase {
  kind: "written";
  /** = markScheme.length (or ≤ markScheme.length). */
  marks: number;
  modelAnswer: string;
  markScheme: MarkPoint[];
  /** IB level-based markbands for extended-response questions. */
  markbands?: MarkBand[];
  commonError?: string;
  solutions?: SolutionMethod[];
}

export type Question = MCQ | ShortQ | WrittenQ;

export interface Paper {
  id: string;
  title: string;
  level?: IBLevel;
  questions: Question[];
}

// ---------------------------------------------------------------------------
// Guide & learn-smart
// ---------------------------------------------------------------------------

export interface WorkedExample {
  title?: string;
  problem: string;
  steps: string[];
  answer: string;
  yourTurn?: {
    question: string;
    answer: AnswerSpec;
    solution: string;
  };
}

export interface GuideSection {
  id: string;
  heading: string;
  /** "SL" = SL & HL core (default); "HL" = HL-only section/extension. */
  level?: IBLevel;
  discovery?: Discovery;
  body: string;
  diagram?: string;
  diagramCaption?: string;
  workedExamples?: WorkedExample[];
  keyPoints?: string[];
  whyItWorks?: string;
  strategies?: string[];
  thinkDeeper?: string;
}

export interface Flashcard {
  front: string;
  back: string;
  level?: IBLevel;
}

export interface Misconception {
  wrong: string;
  right: string;
  level?: IBLevel;
}

export interface Mnemonic {
  topic: string;
  device: string;
  explanation: string;
  level?: IBLevel;
}

export interface RealWorld {
  title: string;
  detail: string;
  emoji?: string;
}

export interface VideoLink {
  title: string;
  channel: string;
  url: string;
}

export interface FormulaFact {
  name: string;
  formula: string;
  note?: string;
  level?: IBLevel;
}

export interface LearnSmart {
  flashcards: Flashcard[];
  mustKnow: string[];
  misconceptions: Misconception[];
  examMistakes: string[];
  mnemonics: Mnemonic[];
  realWorld: RealWorld[];
  videos: VideoLink[];
  formulas: FormulaFact[];
}

export interface TopicGuide {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** "SL" = SL & HL core (default); "HL" = entirely HL-only topic. */
  level?: IBLevel;
  summary: string;
  intro: string;
  guide: GuideSection[];
  learn: LearnSmart;
}

export interface TopicPractice {
  quiz: Question[];
  papers: Paper[];
  challenge: Question[];
}

export interface Topic extends TopicGuide {
  quiz: Question[];
  mcqPapers: Paper[];
  practicePapers: Paper[];
  challenge: Question[];
  stretch?: boolean;
}

// ---------------------------------------------------------------------------
// Comprehensive cross-topic exam
// ---------------------------------------------------------------------------

export interface ExamPaper extends Paper {
  calculator: boolean;
  minutes: number;
  /** e.g. "Paper 1A · MCQ", "Paper 1B · Data-Based", "Paper 2 (HL)" */
  paperType?: string;
}

// ---------------------------------------------------------------------------
// Engagement extras (separate from audited content)
// ---------------------------------------------------------------------------

export interface Activity {
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  maths: string;
}

export interface BonusDiagram {
  title: string;
  svg: string;
  caption?: string;
}

export interface TopicExtras {
  hook?: string;
  didYouKnow?: string[];
  activities?: Activity[];
  bonusDiagrams?: BonusDiagram[];
  history?: { title: string; story: string };
}

// ---------------------------------------------------------------------------
// Global question index entry
// ---------------------------------------------------------------------------

export type QuestionSource = "quiz" | "mcq" | "practice" | "challenge" | "exam";

export interface IndexedQuestion {
  qid: string;
  topicId: string;
  source: QuestionSource;
  paperId?: string;
  question: Question;
}
