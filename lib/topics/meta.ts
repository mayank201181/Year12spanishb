// ---------------------------------------------------------------------------
// Topic registry for Year 12–13 IB Diploma Spanish B (SL & HL)
// Provisional: aligned to published FA2029 subject brief; full guide due Feb 2027.
// Post-IGCSE Language B (B1 → B2/C1) — NOT ab initio.
// ---------------------------------------------------------------------------
import type { IBLevel, Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  level?: IBLevel;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  level: IBLevel;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Prescribed Themes 1–3",
  "Prescribed Themes 4–5",
  "Grammar & Text Types",
  "Exam Skills & HL Literature",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== PRESCRIBED THEMES 1–3 =============================
  {
    id: "1-identidades",
    title: "Theme 1: Identidades (Identities)",
    strand: "Prescribed Themes 1–3",
    icon: "🧬",
    level: "SL",
    curriculum: "IB Spanish B FA2029 Brief — Prescribed Theme 1: Identidades (SL & HL)",
    sections: [
      {
        id: "estilos-vida-salud",
        heading: "Estilos de vida, salud y bienestar (Lifestyles, Health & Well-being)",
        level: "SL",
        covers: "Mediterranean vs Latin American dietary habits, mental health & youth pressure, sports culture, healthy living advice using impersonal subjunctive triggers (es imprescindible que...).",
      },
      {
        id: "creencias-valores-subculturas",
        heading: "Creencias, valores y subculturas (Beliefs, Values & Subcultures)",
        level: "SL",
        covers: "Family structures, secularism vs religious traditions across Spain & Latin America, urban youth subcultures, fashion & generational identity.",
      },
      {
        id: "lengua-identidad-hispanohablante",
        heading: "Lengua e identidad en el mundo hispanohablante (Language & Identity)",
        level: "SL",
        covers: "Regional varieties of Spanish (voseo, seseo, léxico regional), co-official languages in Spain (catalán, euskera, gallego), indigenous languages in Latin America (quechua, guaraní, náhuatl), Spanglish & bilingual identity.",
      },
      {
        id: "identidad-registro-hl",
        heading: "[HL] Critical Perspectives on Cultural Identity & Register Precision",
        level: "HL",
        covers: "Debating linguistic purism (RAE) vs inclusive/evolving language, diaspora identity, and upgrading IGCSE phrasing to Band 10–12 idiomatic expression.",
      },
    ],
  },
  {
    id: "2-experiencias",
    title: "Theme 2: Experiencias (Experiences)",
    strand: "Prescribed Themes 1–3",
    icon: "🧳",
    level: "SL",
    curriculum: "IB Spanish B FA2029 Brief — Prescribed Theme 2: Experiencias (SL & HL)",
    sections: [
      {
        id: "ocio-viajes-turismo",
        heading: "Ocio, vacaciones y turismo sostenible (Leisure, Travel & Sustainable Tourism)",
        level: "SL",
        covers: "Mass tourism vs ecotourism in Spain & Latin America (overtourism in Barcelona/Mallorca, Galápagos, Machu Picchu), cultural exchange, and narrative past tenses (pretérito vs imperfecto).",
      },
      {
        id: "costumbres-tradiciones-ritos",
        heading: "Costumbres, tradiciones y ritos de paso (Customs, Traditions & Rites of Passage)",
        level: "SL",
        covers: "Hispanic festivals & milestones (Día de los Muertos, quinceañera, Las Fallas, Semana Santa, sobremesa), cultural preservation vs modernisation.",
      },
      {
        id: "historias-vida-migracion",
        heading: "Historias de vida y migración (Life Stories & Migration)",
        level: "SL",
        covers: "Push/pull factors in Latin American & Spanish migration, cultural adaptation, nostalgia, remittances, and sequencing complex narratives with pluscuamperfecto & temporal connectors.",
      },
      {
        id: "memoria-identidad-migratoria-hl",
        heading: "[HL] Analysing Personal Testimony, Empathy & Cultural Hybridity",
        level: "HL",
        covers: "Evaluating bias and perspective in migration memoirs and interviews, nuanced subjunctive in past reflection (imperfecto de subjuntivo), and intercultural comparison.",
      },
    ],
  },
  {
    id: "3-ingenio-humano",
    title: "Theme 3: Ingenio humano (Human Ingenuity)",
    strand: "Prescribed Themes 1–3",
    icon: "💡",
    level: "SL",
    curriculum: "IB Spanish B FA2029 Brief — Prescribed Theme 3: Ingenio humano (SL & HL)",
    sections: [
      {
        id: "entretenimiento-expresiones-artisticas",
        heading: "Entretenimiento y expresiones artísticas (Entertainment & Artistic Expression)",
        level: "SL",
        covers: "Hispanic cinema (Almodóvar, Cuarón, Del Toro), muralism (Rivera, Kahlo), architecture (Gaudí), music & streaming culture, writing a high-scoring reseña (review).",
      },
      {
        id: "comunicacion-medios-redes",
        heading: "Comunicación, medios y redes sociales (Communication, Media & Social Networks)",
        level: "SL",
        covers: "Digital journalism vs print press, desinformación / bulos (fake news), influencer culture, privacy, and distinguishing artículo, editorial, blog & entrevista.",
      },
      {
        id: "tecnologia-innovacion-cientifica",
        heading: "Tecnología e innovación científica (Technology & Scientific Innovation)",
        level: "SL",
        covers: "Artificial intelligence, biotechnology, renewable engineering, digital divide (brecha digital), passive voice & se impersonal / pasiva refleja in scientific reporting.",
      },
      {
        id: "etica-ia-creatividad-hl",
        heading: "[HL] Critical Evaluation of AI, Media Bias & Artistic Censorship",
        level: "HL",
        covers: "Debating algorithmic bias, copyright & human creativity in Hispanic arts, detecting subtle irony and persuasion in opinion editorials.",
      },
    ],
  },

  // ===================== PRESCRIBED THEMES 4–5 =============================
  {
    id: "4-organizacion-social",
    title: "Theme 4: Organización social (Social Organization)",
    strand: "Prescribed Themes 4–5",
    icon: "🏛️",
    level: "SL",
    curriculum: "IB Spanish B FA2029 Brief — Prescribed Theme 4: Organización social (SL & HL)",
    sections: [
      {
        id: "relaciones-comunidad-voluntariado",
        heading: "Relaciones sociales, comunidad y compromiso social (Community & Volunteering)",
        level: "SL",
        covers: "Civic engagement, youth volunteering (ONGs), intergenerational solidarity, formal vs informal register (tú vs usted) in community outreach & proposals.",
      },
      {
        id: "educacion-mundo-laboral",
        heading: "Educación y el mundo laboral (Education & the Working World)",
        level: "SL",
        covers: "University vs vocational pathways (FP), youth unemployment (paro juvenil), remote work (teletrabajo), work-life balance, writing formal cover letters & informes.",
      },
      {
        id: "ley-orden-ciudadania",
        heading: "Ley, orden y participación ciudadana (Law, Order & Civic Participation)",
        level: "SL",
        covers: "Justice & rehabilitation vs punishment, youth civic rights, public policy debates, conditional & si-clauses (Types 1, 2 & 3) for proposing social reforms.",
      },
      {
        id: "instituciones-desigualdad-hl",
        heading: "[HL] Structural Mobility, Policy Proposals & Formal Persuasion",
        level: "HL",
        covers: "Drafting authoritative HL propuestas and cartas formales (450–600 words), critically evaluating educational equity and labour reforms across Hispanophone societies.",
      },
    ],
  },
  {
    id: "5-compartir-el-planeta",
    title: "Theme 5: Compartir el planeta (Sharing the Planet)",
    strand: "Prescribed Themes 4–5",
    icon: "🌍",
    level: "SL",
    curriculum: "IB Spanish B FA2029 Brief — Prescribed Theme 5: Compartir el planeta (SL & HL)",
    sections: [
      {
        id: "medio-ambiente-sostenibilidad",
        heading: "El medio ambiente y la crisis climática (Environment & Sustainability)",
        level: "SL",
        covers: "Deforestation in the Amazon, desertification in Spain, water scarcity, circular economy, renewable transition, and concessive structures (aunque + indicative vs subjunctive).",
      },
      {
        id: "derechos-humanos-igualdad-paz",
        heading: "Derechos humanos, igualdad y paz (Human Rights, Equality & Peace)",
        level: "SL",
        covers: "Gender equality, indigenous land rights, freedom of expression, conflict resolution & historical memory across Spain and Latin America.",
      },
      {
        id: "globalizacion-etica-entorno-urbano",
        heading: "Globalización, ética y entorno urbano-rural (Globalization, Ethics & Urban/Rural)",
        level: "SL",
        covers: "Fair trade (comercio justo), fast fashion & ethical consumption, España vaciada (rural depopulation) vs Latin American megacities.",
      },
      {
        id: "argumentacion-etica-global-hl",
        heading: "[HL] Nuanced Global Argumentation & Counter-Argument Mastery",
        level: "HL",
        covers: "Weaving counter-arguments (si bien es cierto que..., no obstante..., de ahí que + subj.) into 450–600w HL essays and nuanced IO Part 3 debates.",
      },
    ],
  },

  // ===================== GRAMMAR & TEXT TYPES ==============================
  {
    id: "6-grammar-text-types",
    title: "IB Grammar Mastery & Text-Type Conventions",
    strand: "Grammar & Text Types",
    icon: "⚙️",
    level: "SL",
    curriculum: "IB Spanish B FA2029 Brief — Post-IGCSE B2–C1 Grammar & 3 Text-Type Categories",
    sections: [
      {
        id: "subjuntivo-completo",
        heading: "Mastering the Subjunctive (Present, Imperfect, Perfect & Pluperfect)",
        level: "SL",
        covers: "WEIRDO noun clauses, ESCAPA adverbial clauses, time clauses (cuando/hasta que), indefinite/non-existent adjective clauses, and sequence of tenses into imperfect/pluperfect subjunctive.",
      },
      {
        id: "contrastes-clave-por-para-ser-estar",
        heading: "High-Stakes Contrasts: Por vs Para, Ser vs Estar, Past Tenses & Si-Clauses",
        level: "SL",
        covers: "Eliminating persistent post-IGCSE slips: por/para, ser/estar meaning shifts, pretérito vs imperfecto vs pluscuamperfecto, si-clauses (Types 1/2/3), perífrasis verbales, and passive se.",
      },
      {
        id: "tipos-de-texto-convenciones",
        heading: "The 3 IB Text-Type Categories & Conceptual Understandings",
        level: "SL",
        covers: "Audience, Context, Purpose, Meaning & Variation across Personal (diario, carta informal, blog), Professional (carta formal, informe, propuesta, folleto), and Mass Media (artículo, editorial, entrevista, discurso, reseña).",
      },
      {
        id: "estilo-c1-conectores-hl",
        heading: "[HL] C1 Cohesion, Idioms, Relative Pronouns & Nominalisation",
        level: "HL",
        covers: "Using cuyo/a, lo cual, el que, de ahí que + subjuntivo, nominalisation, and idiomatic Hispanic expressions to unlock Band 10–12 on Criterion A.",
      },
    ],
  },

  // ===================== EXAM SKILLS & HL LITERATURE =======================
  {
    id: "7-paper1-paper2-skills",
    title: "Paper 1 (Writing) & Paper 2 (Reading & Listening)",
    strand: "Exam Skills & HL Literature",
    icon: "📝",
    level: "SL",
    curriculum: "IB Spanish B FA2029 Brief — External Assessment Mastery (75% Total)",
    sections: [
      {
        id: "paper1-prompt-decoding",
        heading: "Paper 1: Decoding Prompts, Selecting the Optimal Text Type & Planning",
        level: "SL",
        covers: "Spotting the single MOST appropriate text type out of 3 offered, mapping Audience/Context/Purpose, hitting SL 250–400w / HL 450–600w, and maximising Criteria A (12), B (12), C (6).",
      },
      {
        id: "paper2-reading-strategies",
        heading: "Paper 2 Reading: Synonyms, True/False + Justification Quotes & Inference",
        level: "SL",
        covers: "Mastering exact IB Paper 2 Reading item types (40 marks, 1h): minimal justification quotes, lexical synonym matching, pronoun referents, tone/purpose inference, and gap-fill cohesion.",
      },
      {
        id: "paper2-listening-strategies",
        heading: "Paper 2 Listening: Distractor Traps, Register & Accent Variation",
        level: "SL",
        covers: "Navigating 3 authentic listening tracks (25 marks): pre-reading stems in the 4-min window, self-correction distractors (sin embargo, en realidad...), and Peninsular vs Latin American phonology.",
      },
      {
        id: "editing-calibracion-hl",
        heading: "[HL] Proofreading Protocol & Band 10–12 Self-Calibration (450–600w)",
        level: "HL",
        covers: "The 5-minute HL proofreading sweep (tildes, concordancia de género/número, subjuntivo, por/para) and diagnosing Band 7–9 vs Band 10–12 scripts.",
      },
    ],
  },
  {
    id: "8-hl-literature",
    title: "HL Literature & Literary Extract Analysis (HL Only)",
    strand: "Exam Skills & HL Literature",
    icon: "🎭",
    level: "HL",
    curriculum: "IB Spanish B FA2029 Brief — HL Component: 2 Studied Literary Works & HL Individual Oral",
    sections: [
      {
        id: "analisis-extracto-300-palabras",
        heading: "[HL] Dissecting a ~300-Word Literary Extract in 20 Minutes",
        level: "HL",
        covers: "Zero prescribed set texts (all examples marked [Example work — not a set text]): annotating narrative voice, setting, character tension, symbolism & lexical fields under 20-min HL IO prep.",
      },
      {
        id: "recursos-literarios-metalenguaje",
        heading: "[HL] Spanish Literary Terminology & Stylistic Precision",
        level: "HL",
        covers: "Deploying authentic Spanish literary metalanguage (narrador omnisciente, metáfora, simbolismo, analepsis, ironía, tono, campo semántico, realismo mágico) naturally without listing features.",
      },
      {
        id: "puente-extracto-obra-tema",
        heading: "[HL] Bridging Extract → Whole Work → Prescribed Theme & Hispanic Culture",
        level: "HL",
        covers: "Building a structured 3–4 minute HL IO presentation that moves smoothly from close textual evidence to the wider arc of the work and one of the 5 Prescribed Themes.",
      },
      {
        id: "discusion-io-hl-criterios",
        heading: "[HL] Sustaining Spontaneous Literary & Thematic Discussion (Criteria B2 & C)",
        level: "HL",
        covers: "Handling probing Part 2 literary follow-up questions and pivoting naturally into Part 3 general thematic discussion aligned to the FA2029 refined B2 & C top bands.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
