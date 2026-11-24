// ---------------------------------------------------------------------------
// Internal Assessment (IA) Guidance — IB Diploma Spanish B (SL & HL)
// Provisional: aligned to published FA2029 subject brief; full guide due Feb 2027.
//
// Individual Oral (IO) — 25% of final grade · 30 marks:
//   A: Language (12) · B1: Message — Stimulus (6) · B2: Message — Conversation (6)
//   C: Interactive Skills — Communication (6)
//   SL: 15 min prep · Visual stimulus (photo) + 12–15 min oral
//   HL: 20 min prep · ~300-word literary extract (from 1 of 2 works) + 12–15 min oral
// ---------------------------------------------------------------------------

export interface IaCriterionBand {
  marks: string;
  descriptor: string;
}

export interface IaCriterion {
  code: string;
  name: string;
  maxMarks: number;
  summary: string;
  topBandMustHave: string[];
  bands: IaCriterionBand[];
}

export interface IaMilestone {
  phase: string;
  timing: string;
  tasks: string[];
}

export interface IaSectionGuide {
  heading: string;
  targetWords: string;
  whatToInclude: string;
}

export const IA_GUIDE = {
  title: "IB Spanish B Individual Oral (IO — SL Visual Stimulus & HL Literary Extract)",
  subtitle: "Provisional: aligned to FA2029 subject brief (full guide due Feb 2027) · 30 marks · 25% · SL 15m prep / HL 20m prep",
  hoursNote: "The Individual Oral is a 12–15 minute recorded conversation with your teacher (externally moderated by the IBO). Note the crucial SL vs HL difference: SL candidates get 15 minutes to prepare a visual stimulus (photo) linked to a Prescribed Theme; HL candidates get 20 minutes to prepare a ~300-word literary extract from 1 of their 2 studied Hispanic works (IBO official prep is 20 min at HL!).",
  wordLimit: 0,
  totalMarks: 30,
  weightSL: "25%",
  weightHL: "25%",
  keyChanges2025: [
    "**Provisional Notice (FA2029 Subject Brief):** Assessment weighting (25%, 30 marks: A 12 · B1 6 · B2 6 · C 6) and SL/HL stimuli continue under FA2029, with **refined top-band wording on Criteria B2 & C** and strengthened **critical thinking**. Final exact markband descriptors will be locked in once the full guide launches in February 2027.",
    "**SL vs HL Prep & Stimulus:** **SL** receives 2 unseen photos (choose 1) with **15 min prep** and up to **10 brief bullet notes** (max ~10 words each, NO paragraphs!). **HL** receives 2 unseen ~300-word literary extracts (1 from each studied work, choose 1) with **20 min prep** and up to **10 brief bullet notes**.",
    "**Exact 3-Part Timing (12–15 min total):** Part 1 Presentation (**3–4 min** uninterrupted) → Part 2 Follow-up Discussion on the stimulus & its theme (**4–5 min**) → Part 3 General Discussion on at least **one additional Prescribed Theme** (**5–6 min**).",
    "**Zero Memorised Monologues:** Reading off notes or reciting a pre-memorised essay destroys Criterion C (Interactive Skills). Keep notes as crisp Spanish cue-words and engage naturally with your teacher's follow-up questions!",
  ],
  criteria: [
    {
      code: "A",
      name: "Language (Command of Spoken Spanish)",
      maxMarks: 12,
      summary: "Assesses range and accuracy of vocabulary (including idiomatic B2–C1 expressions), grammatical complexity (subjunctive, compound tenses, connectors), and pronunciation/intonation.",
      topBandMustHave: [
        "Accurate, natural deployment of complex structures (present & imperfect subjunctive, si-clauses, discourse markers like `si bien es cierto que`, `de ahí que + subj.`).",
        "Topic-specific Hispanic vocabulary and authentic idioms rather than translated English calques.",
        "Clear, fluent pronunciation and natural intonation that never impedes communication (minor slips do not disrupt flow).",
      ],
      bands: [
        { marks: "10–12", descriptor: "Wide range of idiomatic vocabulary and complex grammar used effectively; high accuracy; clear pronunciation & natural intonation." },
        { marks: "7–9", descriptor: "Varied vocabulary and some complex structures; generally accurate though occasional errors occur in complex clauses." },
        { marks: "4–6", descriptor: "Basic to adequate vocabulary; simple structures generally accurate, but complex tenses/subjunctive often falter." },
        { marks: "1–3", descriptor: "Limited vocabulary and frequent grammatical/pronunciation errors that impede understanding." },
      ],
    },
    {
      code: "B1",
      name: "Message — Stimulus (SL Visual / HL Literary Extract)",
      maxMarks: 6,
      summary: "Assesses how effectively Part 1 (3–4 min) analyses the stimulus, connects it explicitly to the target Hispanic culture(s) (SL) or the whole literary work (HL), and links to the Prescribed Theme.",
      topBandMustHave: [
        "**SL:** Briefly describe what is literally visible (~45s), then analyse deeper cultural significance in a specific Hispanophone context and link clearly to the Prescribed Theme + personal perspective.",
        "**HL:** Analyse the ~300-word extract closely (narrative voice, symbolism, tone, character conflict), situate it in the wider plot/themes of the whole literary work, and connect to Hispanic cultural context.",
        "Maintain tight focus on the ACTUAL stimulus throughout Part 1 rather than drifting into a generic memorised speech.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Perceptive, well-developed presentation tightly anchored to the stimulus, with insightful Hispanic cultural/literary links and clear personal interpretation." },
        { marks: "3–4", descriptor: "Relevant description and some interpretation; cultural or whole-work links are present but partially developed." },
        { marks: "1–2", descriptor: "Mostly literal description or generic commentary weakly connected to the stimulus." },
      ],
    },
    {
      code: "B2",
      name: "Message — Conversation (Parts 2 & 3 · FA2029 Refined)",
      maxMarks: 6,
      summary: "Assesses depth, relevance, critical thinking, and development of ideas across both Part 2 (follow-up) and Part 3 (general discussion on a second Prescribed Theme).",
      topBandMustHave: [
        "Answers go beyond one-sentence reactions: state a clear stance, explain WHY, give a concrete Hispanophone example, and consider a counter-perspective (FA2029 critical thinking focus!).",
        "Makes thoughtful intercultural comparisons without stereotyping.",
        "Develops ideas consistently across both the stimulus theme (Part 2) and the second Prescribed Theme (Part 3).",
      ],
      bands: [
        { marks: "5–6", descriptor: "Consistently relevant, nuanced, critically developed responses across both themes, supported by clear examples and personal reflection (FA2029 refined top band)." },
        { marks: "3–4", descriptor: "Generally relevant responses with reasonable explanations, though some answers remain brief or uneven across themes." },
        { marks: "1–2", descriptor: "Minimal, repetitive, or superficial responses requiring frequent prompting." },
      ],
    },
    {
      code: "C",
      name: "Interactive Skills — Communication (FA2029 Refined)",
      maxMarks: 6,
      summary: "Assesses comprehension of the teacher's questions and ability to sustain an authentic, spontaneous two-way conversation in Spanish.",
      topBandMustHave: [
        "Comprehends nuanced questions immediately without needing constant repetition or simplification.",
        "Contributes proactively to the dialogue (reacting naturally with `¡Qué buena pregunta!`, `Desde mi punto de vista...`, `Permíteme añadir un matiz...`, or inviting a follow-up perspective).",
        "Self-corrects slips smoothly in real time without freezing or breaking conversational flow.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Comprehension and interaction are sustained effortlessly and spontaneously; actively advances a natural, engaging conversation (FA2029 refined top band)." },
        { marks: "3–4", descriptor: "Understands most questions and interacts adequately, though occasionally hesitant or reliant on teacher prompts." },
        { marks: "1–2", descriptor: "Struggles to comprehend or sustain interaction beyond short, prompted replies." },
      ],
    },
  ] as IaCriterion[],
  exemplarStructure: [
    {
      heading: "Prep Room Blueprint (SL 15 min / HL 20 min · Max 10 Short Bullets)",
      targetWords: "10 brief cue-points",
      whatToInclude: "Use a 4-box template on your blank note sheet: (1) Opening & Context (2 bullets), (2) 2–3 Close Details / Literary Devices (3 bullets), (3) Hispanic Cultural / Whole-Work Link + Prescribed Theme (3 bullets), (4) Personal Evaluation + 2 High-Level Idioms/Subjunctives to weave in (2 bullets).",
    },
    {
      heading: "Part 1: Presentation (3–4 Minutes Uninterrupted)",
      targetWords: "~380–480 spoken words",
      whatToInclude: "SL: 45s concise visual description → 90s cultural significance in Spain/Latin America → 75s theme link & critical personal stance. HL: 30s situate extract in work → 120s close analysis of 2–3 textual/stylistic quotes → 75s connect to wider work, Hispanic context & Prescribed Theme.",
    },
    {
      heading: "Part 2: Follow-Up Discussion on Stimulus (4–5 Minutes)",
      targetWords: "Interactive Q&A",
      whatToInclude: "Use the **P-E-C** frame for every reply: **Postura** (clear stance with subjunctive/opinion marker) → **Ejemplo** (specific Hispanic cultural or textual evidence) → **Contrapunto** (`si bien es cierto que..., no obstante...`).",
    },
    {
      heading: "Part 3: General Discussion — Second Prescribed Theme (5–6 Minutes)",
      targetWords: "Interactive Q&A",
      whatToInclude: "Pivot briskly when your teacher shifts to a different Prescribed Theme (e.g. from *Identidades* to *Compartir el planeta*). Draw on current Hispanophone affairs, intercultural contrasts (Spain/Latin America vs Singapore/international context), and nuanced evaluation.",
    },
  ] as IaSectionGuide[],
  milestones: [
    {
      phase: "Phase 1: Theme Bank & Cultural Case Studies (DP1 Terms 1–3)",
      timing: "Year 12 Terms 1–3 (Tanglin 5-Term Spiral)",
      tasks: [
        "Build a 2-page Hispanic cultural case-study sheet for each of the 5 Prescribed Themes (Spain + at least 2 Latin American countries per theme).",
        "Master 12 versatile B2–C1 speaking frames (subjunctive triggers, concessives, natural conversation fillers).",
        "[HL] Begin annotating Literary Work #1 (e.g. an example Hispanic play or novel — zero prescribed set texts) for themes, character arcs, and key ~300-word extracts.",
      ],
    },
    {
      phase: "Phase 2: Timed Mock IO Practice (DP1 Term 3 → DP2 Term 4)",
      timing: "Year 12 Summer – Year 13 Term 4",
      tasks: [
        "Complete at least 3 full timed mock IOs under strict prep timing (SL 15m / HL 20m) using only 10 short cue-words.",
        "[HL] Complete Literary Work #2 and practise bridging extracts from BOTH works smoothly into all 5 Prescribed Themes.",
        "Record yourself and self-score against Criteria A (12), B1 (6), B2 (6), and C (6), targeting pronunciation rhythm and spontaneous expansion.",
      ],
    },
    {
      phase: "Phase 3: Official Recorded Individual Oral (DP2 Term 5)",
      timing: "Year 13 Term 5 (Feb–Mar before May 2029 Exams)",
      tasks: [
        "Review your 5-theme cultural facts, HL extract-analysis metalanguage, and key irregular subjunctive forms.",
        "Sit the official 12–15 min recorded Individual Oral — stay calm, keep eye contact, listen closely, and treat Parts 2 & 3 as a genuine conversation!",
      ],
    },
  ] as IaMilestone[],
  moderatorTraps: [
    "Spending 3 of your 4 minutes in SL Part 1 describing clothes and colours literally instead of analysing Hispanic cultural significance!",
    "[HL] Retelling the entire plot of the novel instead of closely analysing the ACTUAL ~300-word extract printed on the page.",
    "Writing full scripted sentences on your prep sheet and reading them robotically — moderators immediately drop Criterion A & C.",
    "Giving 5-second yes/no answers in Parts 2 & 3 instead of developing reasoned opinions with examples and counter-arguments.",
    "Confusing SL (15 min) vs HL (20 min) prep times or failing to link the stimulus explicitly to Hispanic target culture(s).",
    "Forgetting to check the post-Feb 2027 full FA2029 guide update for exact final B2 & C top-band phrasing.",
  ],
  checklist: [
    "I know my exact prep duration (SL: 15 min photo / HL: 20 min ~300-word literary extract) and note limit (10 brief cue-bullets, zero paragraphs).",
    "My Part 1 presentation fits cleanly within 3–4 minutes without rushing or running dry.",
    "I connect my stimulus explicitly to specific Hispanophone cultural perspectives (Spain and/or Latin America), not vague generalisations.",
    "[HL Only] I quote/analyse specific stylistic & literary features inside the ~300-word extract before zooming out to the whole work.",
    "I naturally weave at least 3 complex structures (subjunctive, si-clause, concessive connector) into my spoken responses.",
    "In Parts 2 & 3, I expand every answer with Stance + Hispanic/Real-World Example + Nuanced Counter-Point (FA2029 critical thinking).",
    "I can transition smoothly into a second Prescribed Theme in Part 3 and engage spontaneously with follow-up questions.",
  ],
};
