import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: Paper 1 Prompt Decoding, Text-Type Selection & Criterion C (SL)
  // Spread: 0×4, 1×4, 2×4, 3×3
  // ===========================================================================
  {
    id: "7-paper1-paper2-skills-m1",
    title: "MCQ Paper 1 · Paper 1 Prompt Decoding & Text-Type Selection",
    level: "SL",
    questions: [
      {
        id: "7-paper1-paper2-skills-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "T-A-P-R Prompt Decoder",
        question:
          "Paper 1 prompt: *«En tu colegio se desperdicia demasiada comida en el comedor escolar. Escribe al consejo directivo para exponer el problema con datos y plantear un plan viable de reducción de residuos.»* Which text type is the **single most appropriate** choice?",
        options: [
          "Un diario personal escrito al regresar a casa por la tarde",
          "Un correo electrónico informal enviado a un compañero de clase",
          "Una propuesta formal con objetivos, medidas concretas y cierre",
          "Una reseña breve sobre la calidad del menú del comedor",
        ],
        answerIndex: 2,
        explanation:
          "Addressing a school governing board (*el consejo directivo*) to present a structured waste-reduction action plan directly fits **una propuesta formal** (objective, rationale, concrete measures, formal register). A diary or informal email clashes with an institutional audience, and a review (*reseña*) evaluates food quality rather than proposing policy.",
        hints: [
          "Identify the Audience (*el consejo directivo*) and Purpose (*plantear un plan viable*).",
          "Which Professional text type is specifically built around objectives and concrete action steps?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "paper1-prompt-decoding",
        strategy: "Paper 1 Assessment Architecture",
        question:
          "How are the **30 marks** of IB Spanish B Paper 1 distributed across Criteria A (Language), B (Message), and C (Conceptual Understanding)?",
        options: [
          "Criterion A: 12 marks · Criterion B: 12 marks · Criterion C: 6 marks",
          "Criterion A: 10 marks · Criterion B: 10 marks · Criterion C: 10 marks",
          "Criterion A: 15 marks · Criterion B: 10 marks · Criterion C: 5 marks",
          "Criterion A: 12 marks · Criterion B: 10 marks · Criterion C: 8 marks",
        ],
        answerIndex: 0,
        explanation:
          "IB Spanish B Paper 1 is marked out of 30: **A (Language) = 12**, **B (Message) = 12**, and **C (Conceptual Understanding) = 6** (worth 20% directly, while also shaping register and audience fit across A and B).",
        hints: [
          "Language and Message carry equal weight (40% each of Paper 1).",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "Word-Count Zone Control",
        question:
          "Which combination accurately states the target word-count zones and exam durations for **SL** and **HL** Paper 1?",
        options: [
          "SL: 200–350 words (1h 00m) · HL: 400–550 words (1h 15m)",
          "SL: 250–400 words (1h 15m) · HL: 450–600 words (1h 30m)",
          "SL: 300–450 words (1h 30m) · HL: 500–700 words (2h 00m)",
          "SL: 250–400 words (1h 30m) · HL: 450–600 words (1h 45m)",
        ],
        answerIndex: 1,
        explanation:
          "Under the FA2029 IB Spanish B subject brief, **SL Paper 1** is **250–400 words in 1h 15m**, and **HL Paper 1** is **450–600 words in 1h 30m**. Aiming for 330–380w (SL) or 510–570w (HL) leaves time to proofread.",
        hints: [
          "SL sits at 75 minutes and HL sits at 90 minutes, with a 200-word jump between minimum thresholds.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "T-A-P-R Prompt Decoder",
        question:
          "Paper 1 prompt: *«Has asistido recientemente a una exposición de cine latinoamericano contemporáneo en tu ciudad y quieres valorar sus puntos fuertes y débiles para orientar a los lectores de la revista juvenil del instituto.»* Which text type is **most appropriate**?",
        options: [
          "Un informe técnico dirigido al ministerio de cultura",
          "Una carta formal de protesta dirigida al director del festival",
          "Un diario personal con anotaciones privadas de aquella noche",
          "Una reseña cultural con valoración equilibrada y recomendación",
        ],
        answerIndex: 3,
        explanation:
          "Evaluating strengths and weaknesses (*valorar sus puntos fuertes y débiles*) of a cultural event to guide magazine readers is the exact communicative purpose of **una reseña** (review). A formal complaint letter or ministry report mismatches both audience and purpose.",
        hints: [
          "Look at the verb *valorar sus puntos fuertes y débiles* and the publication channel (*la revista juvenil*).",
          "Which Mass Media text type gives a balanced appraisal and recommendation of a film, book, or exhibition?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "paper1-prompt-decoding",
        strategy: "Audience & Register Consistency",
        question:
          "A student writing a **carta formal** to a city mayor (*el alcalde*) opens with *«Estimado Sr. Alcalde:»* and ends with *«Espero que tengas en cuenta mis sugerencias, un abrazo fuerte»*. What is the primary exam consequence?",
        options: [
          "A serious register breakdown that reduces Criterion C and Criterion A",
          "Only a minor spelling deduction because the meaning remains clear",
          "An automatic zero on Criterion B for exceeding the word count",
          "No penalty at all because Spanish letters often mix informal closings",
        ],
        answerIndex: 0,
        explanation:
          "Switching from formal `usted` (*Estimado Sr. Alcalde*) to informal `tú` (*tengas*, *un abrazo fuerte*) violates **Audience** and **Variation** (Conceptual Understandings), directly damaging **Criterion C** as well as register appropriateness in **Criterion A**. A formal letter must close with `usted` (*Espero que tenga en cuenta...*, *Atentamente,*).",
        hints: [
          "Check the grammatical person of *tengas* and the tone of *un abrazo fuerte*.",
          "Which assessment criteria evaluate register consistency with the target Audience?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "Text-Type Conventions",
        question:
          "Paper 1 prompt: *«Tu localidad quiere atraer a jóvenes turistas responsables durante el verano. Diseña un texto informativo y atractivo que presente rutas ecológicas, consejos prácticos y normas de respeto ambiental.»* Which text type fits best?",
        options: [
          "Una entrevista periodística con un hotelero local",
          "Un editorial institucional de un diario nacional",
          "Un folleto turístico con secciones claras y consejos prácticos",
          "Un diario personal relatando una excursión en bicicleta",
        ],
        answerIndex: 2,
        explanation:
          "Presenting routes, practical tips, and environmental rules attractively to incoming visitors is the classic role of **un folleto** (brochure/leaflet), featuring a slogan, clear subheadings, bulleted recommendations, and a call to action. An interview or editorial serves a different journalistic function.",
        hints: [
          "Notice the prompt asks for an attractive informative guide listing routes, practical tips, and eco-rules.",
          "Which Professional text type uses slogans, short scannable boxes, and bulleted tips for visitors?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "paper1-prompt-decoding",
        strategy: "Mass Media Genre Precision",
        question:
          "How does **un editorial** differ most decisively from **un artículo de opinión** for Criterion C conventions?",
        options: [
          "Un editorial always uses informal tú and ends with reader hashtags",
          "Un editorial represents the institutional voice of a publication without a personal byline",
          "Un editorial is written privately in a notebook with a personal date header",
          "Un editorial must be formatted strictly as alternating questions and answers",
        ],
        answerIndex: 1,
        explanation:
          "**Un editorial** articulates the collective stance of a newspaper or magazine (typically using institutional `nosotros`, e.g., *Desde esta redacción sostenemos que...*) and carries no individual personal signature, whereas *un artículo de opinión* reflects a named columnist's individual viewpoint.",
        hints: [
          "Think about *who* speaks in an editorial compared to a signed newspaper column.",
          "Does an editorial usually carry a single journalist's byline or speak for the whole publication?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "Criterion C Convention Check",
        question:
          "You have been invited to address all Year 12 and Year 13 students at a school assembly to persuade them to join a mental-health peer-support network. Which opening best signals the **most appropriate** text type (*un discurso*)?",
        options: [
          "«A quien corresponda: mediante la presente solicito información sobre el programa.»",
          "«Querido diario: hoy me sentí bastante agobiado antes de los exámenes finales.»",
          "«Por Lucía Morales · 14 de marzo · Entradilla: El estrés juvenil crece cada año.»",
          "«Buenos días a todos: ¿alguna vez habéis sentido que el estrés académico os supera?»",
        ],
        answerIndex: 3,
        explanation:
          "A **discurso** (speech) delivered to a live student audience opens with a direct vocative greeting (*Buenos días a todos*) and an engaging rhetorical question addressing the crowd (`habéis` / `han`), immediately signalling spoken performance. The other openings belong to a formal letter, diary, and newspaper article.",
        hints: [
          "The communicative context is a live spoken address at a school assembly.",
          "Look for spoken vocative address to a live room plus rhetorical engagement.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "paper1-prompt-decoding",
        strategy: "Criterion C Markband Logic",
        question:
          "Each IB Paper 1 prompt lists **three** text types. What typically happens to **Criterion C (out of 6)** if a candidate selects the **acceptable** (second-best) text type instead of the single **most appropriate** one?",
        options: [
          "Criterion C is generally capped in the middle band (around 3–4/6) even if well written",
          "Criterion C automatically scores 0/6 and Criteria A and B are not marked",
          "Criterion C still awards 6/6 as long as the essay exceeds 350 words",
          "Criterion C awards 5/6 automatically whenever the prompt theme is mentioned",
        ],
        answerIndex: 0,
        explanation:
          "In IB Paper 1 marking, choosing the **most appropriate** text type is required to unlock the top band (**5–6/6**) on Criterion C. Choosing the merely *acceptable* option typically places Criterion C in the middle band (**3–4/6**), while an *inappropriate* choice caps it at **1–2/6**.",
        hints: [
          "The three offered text types correspond roughly to the three tiers of Criterion C fit.",
          "Does picking the second-best format cause a total zero, or does it cap the Conceptual Understanding band?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "Personal vs Mass Media Genres",
        question:
          "Which set of conventions belongs specifically to **un blog** rather than **un diario personal**?",
        options: [
          "A private confession, no headline, and closing with «Buenas noches, querido diario»",
          "Sender postal address, formal «Estimado señor», and closing with «Atentamente»",
          "An engaging title, direct questions to online readers, and an invitation to leave comments",
          "Numbered budget appendices, neutral third-person verbs, and formal executive summary",
        ],
        answerIndex: 2,
        explanation:
          "Although both *blog* and *diario personal* sit in the Personal/reflective spectrum, **un blog** is published for an interactive online readership — so it includes a catchy headline, direct engagement with readers (*¿Y vosotros qué opináis?*), and a comments prompt/tags, whereas a diary is strictly private.",
        hints: [
          "Compare the Audience of a blog (public online readers) versus a personal diary (only yourself).",
          "Which features signal digital interactivity with readers?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "Conceptual Understandings A-C-P-M-V",
        question:
          "Which five concepts form the official IB Language B **Conceptual Understandings** underpinning Paper 1 Criterion C?",
        options: [
          "Grammar, Vocabulary, Pronunciation, Translation, and Memorisation",
          "Audience, Context, Purpose, Meaning, and Variation",
          "Identity, Experiences, Ingenuity, Organization, and Planet",
          "Reading, Writing, Listening, Speaking, and Literature",
        ],
        answerIndex: 1,
        explanation:
          "The five IB Language B Conceptual Understandings are **Audience, Context, Purpose, Meaning, and Variation** (**A-C-P-M-V**). *Identity, Experiences, Ingenuity, Organization, and Planet* are the 5 Prescribed Themes, not the Conceptual Understandings.",
        hints: [
          "Distinguish between the 5 Prescribed Themes (what you write *about*) and the 5 Conceptual Understandings (how language shifts with situation).",
          "Use the mnemonic A-C-P-M-V.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "Professional Text-Type Selection",
        question:
          "Paper 1 prompt: *«Como representante estudiantil, has realizado una encuesta entre doscientos alumnos sobre los hábitos de sueño y el uso de pantallas. Presenta de forma objetiva los resultados y las conclusiones principales al equipo directivo.»* Which text type is **most appropriate**?",
        options: [
          "Un informe estructurado con introducción, hallazgos y recomendaciones",
          "Una entrada de blog con anécdotas divertidas y preguntas a los lectores",
          "Un discurso emotivo pronunciado durante la ceremonia de graduación",
          "Una carta informal enviada a un amigo que estudia en otra ciudad",
        ],
        answerIndex: 0,
        explanation:
          "Presenting survey data objectively (*de forma objetiva los resultados y las conclusiones*) to school leadership (*al equipo directivo*) matches **un informe** (report), organised with a clear title, methodology/intro, subheaded findings, and evidence-based recommendations.",
        hints: [
          "Highlight *encuesta entre doscientos alumnos* and *de forma objetiva los resultados*.",
          "Which Professional genre reports factual findings under objective subheadings?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper1-prompt-decoding",
        strategy: "Criterion B Full Task Coverage",
        question:
          "A Paper 1 prompt instructs: *«Analiza las causas del abandono del deporte entre adolescentes y propón dos iniciativas realistas para tu municipio.»* A student writes 360 words of immaculate Spanish explaining four causes in depth, but adds only one rushed final sentence mentioning initiatives. Which criterion suffers **most directly**?",
        options: [
          "Criterion C, because 360 words is outside the SL target range",
          "Criterion A, because mentioning four causes uses too many connectors",
          "Criterion C, because discussing causes requires a personal diary",
          "Criterion B, because the second core requirement of the prompt is underdeveloped",
        ],
        answerIndex: 3,
        explanation:
          "**Criterion B (Message)** evaluates whether every element of the prompt is thoroughly, logically, and relevantly developed. Neglecting half the task (*propón dos iniciativas realistas*) leaves the message unbalanced and caps Criterion B even when Criterion A grammar is strong.",
        hints: [
          "Check how many required subtasks appear in the prompt (causes + two realistic municipal initiatives).",
          "Which criterion assesses relevance, depth, and full coverage of ideas?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "paper1-prompt-decoding",
        strategy: "Authentic Spanish Genre Features",
        question:
          "Paper 1 prompt: *«Has conversado con una arquitecta chilena premiada por diseñar viviendas sociales sostenibles y quieres publicar esa conversación en el periódico digital de tu colegio.»* Which structural feature is essential for the optimal text type (**una entrevista**)?",
        options: [
          "Formal postal addresses at the top left and a closing «Sin otro particular»",
          "Date stamps for three separate evenings and reflective monologue paragraphs",
          "A brief contextual lead-in followed by clearly labelled alternating Q&A turns",
          "Numbered financial tables and an impersonal third-person executive summary",
        ],
        answerIndex: 2,
        explanation:
          "Publishing a conversation with an expert requires **una entrevista** (interview): headline, a brief introductory profile (*entradilla*) introducing the interviewee and achievement, alternating clearly labelled question-and-answer turns (maintaining consistent `usted` or polite semi-formal register), and a brief closing wrap-up.",
        hints: [
          "Notice the prompt explicitly states *has conversado con una arquitecta... publicar esa conversación*.",
          "What makes an interview immediately recognisable visually and structurally on the page?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "paper1-prompt-decoding",
        strategy: "Time & Word-Count Budgeting",
        question:
          "At **Standard Level (1h 15m, 250–400 words)**, which drafting strategy best protects both **Criterion A** and **Criterion B**?",
        options: [
          "Start writing immediately without an outline and aim for 550 words to show fluency",
          "Spend 6–7 minutes decoding T-A-P-R, draft ~350 balanced words, and keep 7–8 minutes to proofread",
          "Spend 25 minutes writing a word-for-word English draft first, then translate rapidly at the end",
          "Stop at exactly 250 words after 30 minutes and leave the exam room early to avoid errors",
        ],
        answerIndex: 1,
        explanation:
          "A disciplined **7 min plan → 60 min draft (~350w in the upper SL green zone) → 8 min proofread** budget guarantees full task development (Criterion B), genre precision (Criterion C), and clean grammar/accent accuracy (Criterion A). Translating from English causes calques, and over-writing past 400w destroys editing time.",
        hints: [
          "Compare the risks of writing in English first, rushing past 400 words, or stopping bare-minimum at 250 words.",
          "Think about how much time you need to plan T-A-P-R and still proofread at the end.",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: Paper 2 Reading & Listening Micro-Extracts (SL Core)
  // Spread: 0×4, 1×3, 2×4, 3×4
  // ===========================================================================
  {
    id: "7-paper1-paper2-skills-m2",
    title: "MCQ Paper 2 · Paper 2 Reading & Listening Micro-Extracts",
    level: "SL",
    questions: [
      {
        id: "7-paper1-paper2-skills-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-reading-strategies",
        strategy: "Minimal Justification Quote (M-I-N-I)",
        question:
          "Read the extract: *«El festival de teatro callejero de Medellín, creado en 2014 por estudiantes voluntarios, dejó de cobrar entrada hace dos años para garantizar que las familias con menos ingresos pudieran asistir.»*\n\nStatement: **«Actualmente, el acceso al festival es gratuito para el público.»** — **Verdadero.** Which justification quote earns the Paper 2 mark?",
        options: [
          "«creado en 2014 por estudiantes voluntarios»",
          "«dejó de cobrar entrada hace dos años»",
          "«El festival de teatro callejero de Medellín, creado en 2014 por estudiantes voluntarios»",
          "«para garantizar que las familias con menos ingresos pudieran asistir»",
        ],
        answerIndex: 1,
        explanation:
          "**«dejó de cobrar entrada hace dos años»** (*stopped charging admission two years ago*) directly and minimally proves that admission is currently free. Mentioning its 2014 founding does not prove free entry, and citing only the goal (*para garantizar...*) omits the fact that entry is actually free.",
        hints: [
          "Ask: which exact Spanish phrase proves *el acceso es gratuito* right now?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-reading-strategies",
        strategy: "Part-of-Speech Lock for Synonyms",
        question:
          "Read the extract: *«Ante la sequía prolongada en Andalucía, varias cooperativas agrícolas han decidido fomentar cultivos autóctonos que requieren menos riego y resisten mejor el calor extremo.»*\n\nWhich word in the extract is an exact synonym of **«impulsar / promover»**?",
        options: [
          "prolongada",
          "autóctonos",
          "requieren",
          "fomentar",
        ],
        answerIndex: 3,
        explanation:
          "**`fomentar`** (infinitive verb meaning 'to promote/encourage') matches both the meaning and grammatical class (infinitive verb) of `impulsar / promover`. `prolongada` and `autóctonos` are adjectives, and `requieren` means 'require'.",
        hints: [
          "Match the grammatical category: `impulsar / promover` are infinitive verbs.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-reading-strategies",
        strategy: "Pronoun Referent Gender/Number Filter",
        question:
          "Read the extract: *«El informe municipal destaca el aumento de las zonas peatonales en el casco antiguo, pero **estas** todavía no cuentan con suficientes bancos ni fuentes de agua para las personas mayores.»*\n\nWhat does **«estas»** refer to?",
        options: [
          "las zonas peatonales",
          "el informe municipal",
          "el casco antiguo",
          "las personas mayores",
        ],
        answerIndex: 0,
        explanation:
          "`estas` is **feminine plural** and precedes the verb *no cuentan con* ('do not have'). Filtering backwards by gender and number eliminates masculine singular *el informe* and *el casco antiguo*; *las personas mayores* appears *after* the pronoun and cannot 'have benches and fountains'. Only **las zonas peatonales** fits grammatically and logically.",
        hints: [
          "Check the gender and number of `estas` (feminine plural).",
          "Look strictly *before* the pronoun for a feminine plural noun phrase that can possess benches and fountains.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "paper2-reading-strategies",
        strategy: "Neutral Pronoun Referent (lo cual)",
        question:
          "Read the extract: *«Durante el último trimestre, tres fábricas textiles locales redujeron sus emisiones de carbono en un cuarenta por ciento, **lo cual** animó al gobierno regional a ampliar las subvenciones verdes.»*\n\nWhat does **«lo cual»** refer to?",
        options: [
          "únicamente al gobierno regional y su presupuesto",
          "exclusivamente a las subvenciones verdes del trimestre",
          "al hecho de que tres fábricas redujeran sus emisiones en un 40%",
          "solamente a la contaminación generada por el sector textil",
        ],
        answerIndex: 2,
        explanation:
          "Neutral relative **`lo cual`** summarises the **entire preceding event/clause** — namely, the fact that three local textile factories cut their carbon emissions by 40%, which in turn prompted the regional government to expand green subsidies.",
        hints: [
          "Remember that neutral `lo` and `lo cual` do not match a single masculine or feminine noun.",
          "Ask: *what event* encouraged the regional government to expand subsidies?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-reading-strategies",
        strategy: "False-Friend Elimination",
        question:
          "Read the sentence: *«Aunque el proyecto piloto de bicicletas públicas tuvo un enorme **éxito** en Sevilla, **actualmente** el ayuntamiento estudia cómo **realizar** mejoras en los barrios periféricos.»*\n\nWhich English translation is completely accurate?",
        options: [
          "had a huge exit in Seville; actually the council studies how to realise improvements",
          "had a huge problem in Seville; recently the council studies how to understand improvements",
          "had a huge exit in Seville; currently the council studies how to realise improvements",
          "had a huge success in Seville; currently the council is studying how to carry out improvements",
        ],
        answerIndex: 3,
        explanation:
          "Three classic IB Spanish B false friends appear here: **`éxito`** = *success* (not *exit*), **`actualmente`** = *currently/nowadays* (not *actually*), and **`realizar`** = *to carry out/implement* (not *to realise* = `darse cuenta de`).",
        hints: [
          "Test each bolded Spanish word against the classic English false-friend list.",
          "Remember: *to realise* in Spanish is `darse cuenta de`, never `realizar`.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-reading-strategies",
        strategy: "Gap-Fill Cohesion & Logic",
        question:
          "Read the gap-fill sentence: *«La digitalización ha agilizado miles de trámites sanitarios; [ _____ ], todavía deja en situación de vulnerabilidad a quienes no disponen de conexión estable a internet.»*\n\nWhich connector fits the logical relationship best?",
        options: [
          "sin embargo",
          "por consiguiente",
          "es decir",
          "asimismo",
        ],
        answerIndex: 0,
        explanation:
          "Clause 1 highlights a clear benefit (*ha agilizado miles de trámites*), while Clause 2 introduces an opposing drawback (*deja en situación de vulnerabilidad*). Only an adversative/contrastive connector — **`sin embargo`** ('however') — links a positive gain to a negative limitation. `por consiguiente` signals consequence, `es decir` clarifies, and `asimismo` adds a parallel point.",
        hints: [
          "Determine the polarity of Clause 1 (positive benefit) vs Clause 2 (negative vulnerability).",
          "Choose the connector that signals contrast rather than consequence or addition.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "paper2-listening-strategies",
        strategy: "Self-Correction Pivot Tracking",
        question:
          "Listening transcript (Radio Valparaíso): *«En un primer momento anunciamos que la limpieza de la playa empezaría a las ocho y media de la mañana, pero debido a la marea alta hemos decidido retrasarla hasta las diez menos cuarto.»*\n\nAt what time will the beach clean-up **actually** begin?",
        options: [
          "A las ocho y media (8:30)",
          "A las diez y cuarto (10:15)",
          "A las nueve y cuarenta y cinco (9:45)",
          "A las nueve menos cuarto (8:45)",
        ],
        answerIndex: 2,
        explanation:
          "The initial time (*ocho y media* = 8:30) is cancelled after **`pero debido a la marea alta hemos decidido retrasarla hasta las diez menos cuarto`**. In Spanish time-telling, *las diez menos cuarto* = quarter to ten = **9:45** (not 10:15, which is *las diez y cuarto*).",
        hints: [
          "Wait past the pivot *pero debido a... hemos decidido retrasarla*.",
          "Carefully convert *las diez menos cuarto* (ten minus a quarter).",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "paper2-listening-strategies",
        strategy: "Eliminating Rejected Options",
        question:
          "Listening transcript (Interview with a Madrid chef): *«Muchos clientes suponen que dejé la alta cocina por el horario agotador o por la presión mediática; a decir verdad, lo que me impulsó a abrir una pequeña escuela comunitaria fue el deseo de enseñar a jóvenes en riesgo de exclusión.»*\n\nWhat was the speaker's **real reason** for opening the community cooking school?",
        options: [
          "Escaping the exhausting working hours of fine dining",
          "Wanting to teach young people at risk of social exclusion",
          "Avoiding constant pressure from culinary journalists",
          "Increasing profits by charging higher tuition fees",
        ],
        answerIndex: 1,
        explanation:
          "Both *el horario agotador* and *la presión mediática* are false assumptions planted after *«Muchos clientes suponen que...»*. The pivot **`a decir verdad`** ('to tell the truth') reveals the true motivation: **teaching young people at risk of exclusion** (*enseñar a jóvenes en riesgo de exclusión*).",
        hints: [
          "Notice the distancing opener *Muchos clientes suponen que...* — those are distractors!",
          "Listen closely to what follows the pivot phrase *a decir verdad*.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-listening-strategies",
        strategy: "Peninsular vs Latin American Lexis",
        question:
          "Listening transcript (Podcast from Mexico City): *«Ayer se me descompuso la **computadora** justo antes de entregar la tesis, así que tuve que ir en **camión** a la biblioteca y consultar mis notas desde el **celular**.»*\n\nWhich Peninsular Spanish trio matches the three bolded words in exact order?",
        options: [
          "la tableta · el tren · el cargador",
          "el teclado · el coche · el portátil",
          "el ordenador · el coche · el fijo",
          "el ordenador · el autobús · el móvil",
        ],
        answerIndex: 3,
        explanation:
          "In Mexican Spanish, **`la computadora`** = *el ordenador* (Spain), **`el camión`** (urban transit context!) = *el autobús* (Spain), and **`el celular`** = *el móvil* (Spain). Recognising regional everyday vocabulary avoids mishearing key listening details.",
        hints: [
          "Map `computadora` and `celular` to Peninsular Spanish first.",
          "In Mexico, taking a *camión* across the city means taking the city bus, not a freight lorry!",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-listening-strategies",
        strategy: "Rioplatense Phonology & Voseo",
        question:
          "During Track B of Paper 2 Listening, a speaker from Buenos Aires says: *«Si **vos querés** participar en la radio escolar, **vení** el martes a la **calle** Corrientes»* — pronouncing `calle` close to *«cashe»*. What regional features are you hearing?",
        options: [
          "Argentine voseo verb forms combined with Rioplatense sheísmo on ll/y",
          "Castilian distinción combined with formal vosotros plural imperatives",
          "Andalusian ceceo combined with formal usted subjunctive endings",
          "Mexican seseo combined with impersonal passive reflexive endings",
        ],
        answerIndex: 0,
        explanation:
          "`vos querés` and the imperative `vení` are classic **Rioplatense *voseo*** (standard in Argentina and Uruguay), while pronouncing `ll`/`y` as `/ʃ/` (*«cashe»*) is **sheísmo** — a signature phonological feature of Buenos Aires Spanish tested in authentic IB listening tracks.",
        hints: [
          "Look at the pronoun `vos`, the accent on `querés`/`vení`, and the `/ʃ/` sound on `ll`.",
          "Connect Buenos Aires (Río de la Plata) to its two most distinctive linguistic features.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "paper2-reading-strategies",
        strategy: "Author Stance vs Quoted Counter-View",
        question:
          "Read the extract (Text C): *«Algunos defensores del turismo de cruceros aseguran que cada escala inyecta riqueza inmediata en los puertos históricos. Conviene, sin embargo, preguntarse qué queda realmente en el comercio de barrio cuando miles de visitantes apenas permanecen cuatro horas y consumen a bordo.»*\n\nWhat is the **author's tone** regarding cruise tourism?",
        options: [
          "Entusiasta y optimista sobre el crecimiento económico portuario",
          "Completamente indiferente y puramente estadístico",
          "Escéptico y crítico ante sus supuestos beneficios locales",
          "Nostálgico por los viajes marítimos de principios del siglo XX",
        ],
        answerIndex: 2,
        explanation:
          "The author distances themselves from pro-cruise claims (*Algunos defensores... aseguran que...*) and then deploys a pointed rhetorical question introduced by **`sin embargo`** (*¿qué queda realmente en el comercio de barrio...?*), revealing a **sceptical and critical** tone.",
        hints: [
          "Do not mistake the opening sentence (*Algunos defensores aseguran...*) for the author's own opinion.",
          "Examine the rhetorical question after `sin embargo` and words like *apenas* ('barely').",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Justify",
        guideRef: "paper2-reading-strategies",
        strategy: "Extreme Qualifier Trap in True/False",
        question:
          "Read the extract: *«Casi todos los institutos públicos de Navarra han integrado talleres de robótica en secundaria, aunque en algunas escuelas rurales todavía faltan equipos actualizados.»*\n\nStatement: **«Todos los institutos públicos navarros disponen ya de equipamiento moderno de robótica.»** What is the correct verdict and why?",
        options: [
          "Verdadero, porque casi todos han integrado talleres de robótica",
          "Verdadero, porque la robótica es obligatoria en toda secundaria",
          "Falso, porque ningún instituto rural imparte clases de tecnología",
          "Falso, porque en algunas escuelas rurales todavía faltan equipos actualizados",
        ],
        answerIndex: 3,
        explanation:
          "Watch out for the extreme qualifier **`Todos`**! The extract says *casi todos* (almost all) and explicitly adds **`en algunas escuelas rurales todavía faltan equipos actualizados`**, proving the statement **Falso**.",
        hints: [
          "Compare *Todos* in the statement against *Casi todos* and *algunas escuelas rurales* in the text.",
          "Remember: extreme words like *todos, siempre, nunca* frequently turn a statement False.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "paper2-listening-strategies",
        strategy: "Speaker Attribution in Dialogues",
        question:
          "Listening dialogue:\n— **Sofía:** *«Yo prohibiría los patinetes eléctricos en el centro porque circulan demasiado rápido por las aceras.»*\n— **Mateo:** *«Entiendo tu frustración, pero vetarlos por completo perjudicaría a quienes van al trabajo sin coche; yo preferiría crear carriles exclusivos y exigir casco obligatorio.»*\n\nWhat does **Mateo** propose?",
        options: [
          "Banning electric scooters completely across the city centre",
          "Building dedicated lanes and making helmets compulsory",
          "Replacing all commuter cars with municipal electric scooters",
          "Allowing scooters to ride freely on pedestrian pavements",
        ],
        answerIndex: 1,
        explanation:
          "A classic dialogue attribution trap: Sofía wants a total ban (*prohibiría*), whereas Mateo explicitly rejects banning (*vetarlos por completo perjudicaría...*) and proposes **dedicated lanes and mandatory helmets** (*crear carriles exclusivos y exigir casco obligatorio*).",
        hints: [
          "Check the question stem carefully: it asks what **Mateo** proposes, not Sofía.",
          "Ignore the concession *Entiendo tu frustración* and focus on Mateo's *yo preferiría...*.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-listening-strategies",
        strategy: "Two-Play Listening Protocol",
        question:
          "What is the smartest use of the **4-minute pre-reading window** before Track A begins in Paper 2 Listening?",
        options: [
          "Underline keywords, speaker names, and time anchors while predicting each answer's grammatical type",
          "Write down guesses for all 25 marks immediately so you can relax during the first playback",
          "Translate every question sentence word-for-word into English in the exam margins",
          "Skip reading Track A questions and focus exclusively on memorising the Track C instructions",
        ],
        answerIndex: 0,
        explanation:
          "Active pre-reading primes your ear before the recording starts: marking speaker names (`Sofía` vs `Mateo`), time anchors (`antes` vs `ahora`), and expected answer types (number, reason, attitude) dramatically increases accuracy during Play 1 and Play 2.",
        hints: [
          "Ask what helps your brain filter relevant details in real time when native Spanish audio begins.",
          "Translating whole sentences wastes time; predicting answer categories focuses attention.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "paper2-reading-strategies",
        strategy: "Time Allocation Across 3 Reading Texts",
        question:
          "In the **1-hour Paper 2 Reading exam (40 marks across Texts A, B, and C)**, which pacing plan best reflects how text difficulty scales?",
        options: [
          "25 minutes Text A · 20 minutes Text B · 15 minutes Text C",
          "10 minutes Text A · 10 minutes Text B · 40 minutes Text C",
          "15 minutes Text A · 20 minutes Text B · 25 minutes Text C",
          "20 minutes reading all three texts silently before answering any questions",
        ],
        answerIndex: 2,
        explanation:
          "IB Paper 2 Reading progresses from accessible (**Text A**) to dense inferential/nuanced (**Text C**). Budgeting **~15 min on Text A, ~20 min on Text B, and ~25 min on Text C** protects enough time for Text C's tricky inference, referent, and minimal-quote items.",
        hints: [
          "Remember that Text A is the most accessible and Text C is the longest and most inferential.",
          "Which split progressively increases time as textual complexity rises?",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: Mixed Mastery & [HL] Proofreading + Band 10–12 Calibration
  // Spread: 0×3, 1×4, 2×4, 3×4
  // ===========================================================================
  {
    id: "7-paper1-paper2-skills-m3",
    title: "MCQ Set 3 · [HL] Proofreading Sweep & Band 10–12 Calibration",
    level: "HL",
    questions: [
      {
        id: "7-paper1-paper2-skills-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "editing-calibracion-hl",
        strategy: "T-C-S-P-V Pass C (Concordancia)",
        question:
          "[HL] During Pass C (*Concordancia*) of your 5-minute HL proofreading sweep, you spot this sentence: *«El programa educativa municipal ha resuelto un problema bastante compleja en el área urbana.»* Which correction fixes **every** gender-agreement error?",
        options: [
          "La programa educativa municipal... una problema bastante compleja",
          "El programa educativo municipal... un problema bastante compleja",
          "El programa educativa municipal... un problema bastante complejo",
          "El programa educativo municipal... un problema bastante complejo",
        ],
        answerIndex: 3,
        explanation:
          "Both `el programa` and `el problema` are **masculine** Greek `-ma` nouns despite ending in `-a`, so their adjectives must be masculine: **`educativo`** and **`complejo`**. Meanwhile `el área urbana` is already correct (`área` is feminine, taking `el` solely before a stressed `a-` while keeping feminine adjective `urbana`).",
        hints: [
          "Check the grammatical gender of Greek-origin `-ma` nouns (`el programa`, `el problema`).",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "editing-calibracion-hl",
        strategy: "T-C-S-P-V Pass S (Subjuntivo after C1 Connectors)",
        question:
          "[HL] Which version of this C1 Paper 1 sentence uses **100% accurate mood** after the consequence connector **`de ahí que`**?",
        options: [
          "La desinformación se propaga en segundos; de ahí que los colegios enseñan pensamiento crítico.",
          "La desinformación se propaga en segundos; de ahí que los colegios deban enseñar pensamiento crítico.",
          "La desinformación se propaga en segundos; de ahí que los colegios enseñarán pensamiento crítico.",
          "La desinformación se propaga en segundos; de ahí que los colegios habían enseñado pensamiento crítico.",
        ],
        answerIndex: 1,
        explanation:
          "Unlike `por consiguiente` or `por lo tanto` (which take the indicative), **`de ahí que`** ALWAYS triggers the **subjunctive** (`deban enseñar`). Mastering this contrast is a signature Band 10–12 Criterion A marker.",
        hints: [
          "Recall the rule for `de ahí que`: indicative or subjunctive?",
          "Spot which option conjugates the verb after `de ahí que` in the present subjunctive.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "editing-calibracion-hl",
        strategy: "T-C-S-P-V Pass T (Diacritic Tildes)",
        question:
          "[HL] Pass T (*Tildes*): Read this sentence from an HL essay: *«Aun no sabemos si el gobierno invertira mas fondos, pero el ministro afirmo que si apoyara el plan.»* Which list shows **all six** words that MUST carry a written accent mark here?",
        options: [
          "Aún · sí (first) · invertirá · más · afirmó · apoyará",
          "Aun · sí (second) · invertirá · más · afirmó · apoyará",
          "Aún · invertirá · más · afirmó · sí (second) · apoyará",
          "Aún · él (first) · invertirá · más · afirmó · apoyará",
        ],
        answerIndex: 2,
        explanation:
          "Every accent matters for meaning: **`Aún`** (= *todavía*, 'still'), **`invertirá`** (future), **`más`** ('more'), **`afirmó`** (3rd-person preterite), the second **`sí`** (= 'yes/indeed', whereas the first `si` = 'if' takes NO accent!), and **`apoyará`** (future). Notice `el` before `gobierno` and `ministro` is a definite article (no accent!).",
        hints: [
          "Distinguish `si` ('if' — no tilde) from `sí` ('yes/indeed' — tilde), and `el` (article) from `él` (pronoun).",
          "Check `aún` (= 'still') plus every future and third-person preterite verb.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "editing-calibracion-hl",
        strategy: "T-C-S-P-V Pass P (Por vs Para)",
        question:
          "[HL] Pass P (*Por vs Para*): Which sentence uses **`por`** and **`para`** with 100% accuracy in an HL formal *propuesta*?",
        options: [
          "Por falta de recursos digitales, solicitamos financiación para adquirir ordenadores portátiles.",
          "Para falta de recursos digitales, solicitamos financiación por adquirir ordenadores portátiles.",
          "Por falta de recursos digitales, solicitamos financiación por adquirir ordenadores portátiles.",
          "Para falta de recursos digitales, solicitamos financiación para adquirir ordenadores portátiles.",
        ],
        answerIndex: 0,
        explanation:
          "**`Por`** expresses cause/reason (**`Por falta de`** = 'due to a lack of'), while **`para`** expresses purpose/goal before an infinitive (**`para adquirir`** = 'in order to purchase'). Swapping either preposition is a classic post-IGCSE slip caught in Pass P.",
        hints: [
          "Identify which clause expresses a *cause/reason* (`por`) and which expresses a *purpose/goal* (`para`).",
          "Test `por falta de` ('because of a lack of') vs `para + infinitive` ('in order to').",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "editing-calibracion-hl",
        strategy: "Band 10–12 Lexical Upgrade (Pass V)",
        question:
          "[HL] Which revision best upgrades the Band 7 sentence *«Hacer esta decisión es muy importante porque las cosas van mal en el medio ambiente»* into **Band 11–12 C1 Spanish**?",
        options: [
          "Hacer esta decisión es sumamente importante porque las cosas empeoran en la naturaleza.",
          "Adoptar esta medida resulta apremiante dado el rápido deterioro medioambiental.",
          "Tomar esta decisión es muy bueno porque el problema ambiental es súper grave.",
          "Realizar una gran cosa resulta muy importante por el motivo de que el planeta está malo.",
        ],
        answerIndex: 1,
        explanation:
          "**«Adoptar esta medida resulta apremiante dado el rápido deterioro medioambiental»** eliminates the English calque *hacer una decisión*, replaces vague B1 words (`muy importante`, `las cosas van mal`), and employs natural C1 nominalisation (*el rápido deterioro medioambiental*) with `dado`. The other options preserve calques (`hacer una decisión`), informal fillers (`súper`), or wrong verbs (`está malo`).",
        hints: [
          "Eliminate English calques like *hacer una decisión* and vague fillers like *cosa* or *súper*.",
          "Look for precise C1 verb collocations (`adoptar una medida`, `resulta apremiante`) and nominalisation.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper2-reading-strategies",
        strategy: "Relative Pronoun Referent (cuyo/a)",
        question:
          "Read the extract: *«La cooperativa cafetera de Huila, **cuyas** cosechas orgánicas se exportan a Europa, invierte parte de sus beneficios en escuelas rurales.»*\n\nWhy is **`cuyas`** feminine plural here?",
        options: [
          "Because it agrees with «Europa» and «escuelas rurales» at the end",
          "Because «la cooperativa cafetera» is treated as a plural collective noun",
          "Because «sus beneficios» is plural even though «beneficios» is masculine",
          "Because «cuyo/a/os/as» always agrees in gender and number with the possessed noun «cosechas»",
        ],
        answerIndex: 3,
        explanation:
          "In Spanish, the relative possessive **`cuyo / cuya / cuyos / cuyas`** ('whose') ALWAYS agrees with the **noun that follows it** (the thing possessed — here feminine plural **`cosechas`**), never with the owner (*la cooperativa*, singular).",
        hints: [
          "Check the gender and number of the noun standing directly after `cuyas`.",
          "Remember: `cuyo/a/os/as` behaves like a possessive adjective agreeing with the possessed noun.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "editing-calibracion-hl",
        strategy: "Concessive Counter-Argument (Criterion B HL)",
        question:
          "[HL] Which sentence structure most effectively integrates a **nuanced counter-argument and rebuttal** in an HL 450–600w essay on remote work (*teletrabajo*)?",
        options: [
          "Es cierto que el teletrabajo reduce los desplazamientos; no obstante, puede acentuar el aislamiento laboral si no se regulan los horarios.",
          "El teletrabajo es bueno porque ahorra tiempo y también es malo porque a veces uno está solo en casa.",
          "Aunque el teletrabajo tiene ventajas, yo pienso que todo el mundo debería trabajar siempre desde la oficina.",
          "En primer lugar el teletrabajo ayuda mucho; en segundo lugar hay problemas; en conclusión depende de cada persona.",
        ],
        answerIndex: 0,
        explanation:
          "**`Si bien es cierto que..., no obstante...`** paired with a conditional qualification (*si no se regulan los horarios*) demonstrates authentic C1 critical evaluation (Band 10–12 on Criteria A and B). The other options sound either simplistic/B1 (*es bueno... es malo*) or rigidly one-sided.",
        hints: [
          "Look for a high-band concessive frame that acknowledges a valid counterpoint before refining it.",
          "Avoid vague B1 adjectives (*bueno/malo*) and simplistic absolutes (*todo el mundo siempre*).",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "paper2-listening-strategies",
        strategy: "Implicit Attitude & Irony in Track C",
        question:
          "Listening transcript (Track C panel debate on fast fashion): *«Claro, comprar una camiseta por tres euros y tirarla al mes siguiente parece un chollo fantástico... siempre y cuando no nos importe quién la cosió ni dónde acaba ese poliéster.»*\n\nWhich adjective best describes the speaker's tone?",
        options: [
          "Entusiasta ante los precios accesibles de la moda rápida",
          "Neutro y estrictamente descriptivo del proceso textil",
          "Irónico y crítico hacia el consumo textil irresponsable",
          "Indeciso sobre si comprar ropa barata resulta ético",
        ],
        answerIndex: 2,
        explanation:
          "Opening with exaggerated praise (*«Claro... parece un chollo fantástico»*) only to undercut it with a biting ethical condition (*«siempre y cuando no nos importe quién la cosió...»*) is textbook **ironic and critical** tone (*irónico y crítico*).",
        hints: [
          "Do not take *chollo fantástico* ('fantastic bargain') literally!",
          "Read how the second half (*siempre y cuando no nos importe...*) flips the surface praise.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "editing-calibracion-hl",
        strategy: "Type 2 & Type 3 Si-Clauses in HL Paper 1",
        question:
          "[HL] Which sentence demonstrates a **grammatically accurate Type 3 (past counterfactual) `si`-clause** suitable for Band 11–12 Criterion A?",
        options: [
          "Si las autoridades habrían invertido antes en prevención, los incendios no hubieran destruido tanto bosque.",
          "Si las autoridades hubieran invertido antes en prevención, los incendios no habrían destruido tanto bosque.",
          "Si las autoridades habían invertido antes en prevención, los incendios no destruirán tanto bosque.",
          "Si las autoridades invirtieran antes en prevención, los incendios no han destruido tanto bosque.",
        ],
        answerIndex: 1,
        explanation:
          "A **Type 3 `si`-clause** uses **pluperfect subjunctive (`hubieran invertido`) inside the `si`-clause** and **conditional perfect (`habrían destruido`) in the main clause**. Never put conditional (`habrían`) right after `si`!",
        hints: [
          "Remember the strict Spanish rule: NEVER place the conditional tense immediately after `si`.",
          "Pair pluperfect subjunctive (`hubiera/hubieran + participio`) with conditional perfect (`habría/habrían + participio`).",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "editing-calibracion-hl",
        strategy: "Spotting Hidden False Calques (Pass V)",
        question:
          "[HL] During Pass V of your HL proofreading sweep, you spot this sentence: *«Cuando realicé que el ayuntamiento no soportaba la iniciativa juvenil, apliqué para una beca alternativa.»* How many **English calques / false friends** need replacing?",
        options: [
          "Zero — all three verbs are idiomatic C1 Spanish",
          "One — only «soportaba» needs to be changed",
          "Two — «realicé» and «soportaba» only; «aplicar para» is standard",
          "Three — «realicé» (me di cuenta de), «soportaba» (apoyaba), and «apliqué para» (solicité)",
        ],
        answerIndex: 3,
        explanation:
          "All **three** verbs are English calques that drag HL Criterion A down to Band 7–8: **`me di cuenta de que`** (not *realicé que*), **`apoyaba`** (not *soportaba* = 'tolerated'), and **`solicité una beca`** (not *apliqué para*).",
        hints: [
          "Test all three verbs: `realizar`, `soportar`, and `aplicar para una beca`.",
          "In standard IB Spanish, what is the idiomatic verb for 'apply for a grant/scholarship'?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "paper1-prompt-decoding",
        strategy: "Audience & Channel Precision (HL/SL)",
        question:
          "Paper 1 prompt: *«Un periódico nacional ha publicado un artículo criticando injustamente la falta de compromiso cívico de los jóvenes. Escribe una respuesta pública defendiendo la implicación de tu generación y pidiendo que se publique tu punto de vista.»* Which text type is the **single most appropriate**?",
        options: [
          "Un folleto informativo sobre clubes de voluntariado",
          "Un informe científico con gráficos de participación",
          "Una carta al director dirigida a la sección de opinión del periódico",
          "Una entrevista con el periodista que redactó el artículo original",
        ],
        answerIndex: 2,
        explanation:
          "Responding publicly to a specific newspaper article and requesting publication of your viewpoint in the press is the textbook communicative scenario for **una carta al director** (letter to the editor), using formal/semi-formal `usted` (`Estimado Sr. Director:`), explicit reference to the original article, persuasive defence, and name/city sign-off.",
        hints: [
          "Highlight *Un periódico nacional ha publicado un artículo... respuesta pública... pidiendo que se publique*.",
          "Which classic Mass Media / Professional hybrid genre directly answers a published newspaper article?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "editing-calibracion-hl",
        strategy: "Why Multi-Pass Editing Beats General Re-Reading",
        question:
          "[HL] Why does the **5-minute single-target T-C-S-P-V sweep** catch significantly more errors than simply re-reading an HL Paper 1 essay from start to finish?",
        options: [
          "Scanning one grammatical layer at a time prevents top-down meaning prediction from glossing over missing tildes and agreement slips",
          "General re-reading is banned by IB invigilators during the last five minutes of Paper 1",
          "Single-target scanning lets you add 150 extra words after the 600-word limit has been reached",
          "Checking only accents guarantees Band 12 on Criterion A even if verb tenses are inaccurate",
        ],
        answerIndex: 0,
        explanation:
          "When you read your own prose for meaning, your brain predicts what you *meant* to write and skips missing accents, wrong adjective genders, or indicative verbs after `que`. Isolating **one feature per minute** (Tildes → Concordancia → Subjuntivo → Por/Para → Variedad) forces accurate bottom-up error detection.",
        hints: [
          "Think about why writers often fail to spot their own typos when reading normally.",
          "Compare top-down reading for meaning against targeted bottom-up visual scanning.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Justify",
        guideRef: "paper2-reading-strategies",
        strategy: "Exact Minimal Quote vs Paraphrase Trap",
        question:
          "In Paper 2 Reading, a question asks: *«Indica si la afirmación es verdadera o falsa y **justifica tu respuesta usando las palabras exactas del texto**.»* A candidate checks the right box (**Falso**) and writes an accurate Spanish **paraphrase** in their own words instead of quoting the passage. What mark do they earn?",
        options: [
          "Full 1 mark, because the paraphrase proves complete comprehension",
          "0 marks, because the rubric explicitly requires an exact verbatim quote from the text",
          "Half a mark (0.5), rounded up at the end of Text B",
          "Full 1 mark at SL, though 0 marks at HL",
        ],
        answerIndex: 1,
        explanation:
          "Whenever Paper 2 Reading instructs *«usando las palabras exactas del texto»*, **paraphrasing forfeits the mark** (0 marks, even if the Verdadero/Falso box is right!). Always lift the exact minimal Spanish wording verbatim.",
        hints: [
          "Re-read the exact rubric instruction: *usando las palabras exactas del texto*.",
          "Remember that IB Paper 2 awards integer marks only (1 or 0), requiring BOTH halves to satisfy the rubric.",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "editing-calibracion-hl",
        strategy: "Subjunctive vs Indicative with Aunque",
        question:
          "[HL] Compare these two HL Paper 1 sentences:\n1. *«Aunque **existe** una brecha digital en las zonas rurales, los docentes innovan cada día.»*\n2. *«Aunque **existan** obstáculos iniciales, el proyecto acabará consolidándose.»*\n\nWhy does Sentence 1 use indicative while Sentence 2 uses subjunctive?",
        options: [
          "Sentence 1 is informal register while Sentence 2 is strictly formal register",
          "Sentence 1 has a singular subject while Sentence 2 has a plural subject",
          "Sentence 1 is grammatically wrong because «aunque» never takes the indicative",
          "Sentence 1 states a known, established fact while Sentence 2 frames a hypothetical or future concession",
        ],
        answerIndex: 3,
        explanation:
          "With **`aunque`**, the **indicative** (`existe`) concedes a **known factual reality** ('even though a digital divide *does* exist'), whereas the **subjunctive** (`existan`) concedes a **hypothetical, uncertain, or future possibility** ('even if initial obstacles *should* arise'). Controlling this nuance is classic Band 10–12 Spanish.",
        hints: [
          "Distinguish 'even though [established fact]' from 'even if [hypothetical/future possibility]'.",
          "Does `aunque` ALWAYS take the subjunctive, or does mood shift with certainty?",
        ],
      },
      {
        id: "7-paper1-paper2-skills-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "editing-calibracion-hl",
        strategy: "Band 10–12 Self-Calibration (HL 450–600w)",
        question:
          "[HL] Two HL candidates write 530-word *propuestas* on reducing single-use plastics. Candidate X includes rare dictionary nouns that distort clarity and forgets formal `usted` in paragraph 4. Candidate Y uses natural C1 connectors (`de ahí que + subj.`, `si bien es cierto que`), consistent `usted`, a realistic counter-argument, and zero agreement slips. How do IB examiners calibrate them?",
        options: [
          "Candidate X scores higher on Criterion A because rarer vocabulary always outweighs clarity and register",
          "Both score identically because both hit the 530-word HL sweet spot",
          "Candidate Y reaches Band 10–12 because natural, accurate, audience-aligned sophistication outscores forced vocabulary",
          "Candidate Y is capped at Band 8 because including a counter-argument weakens a proposal",
        ],
        answerIndex: 2,
        explanation:
          "IB Band 10–12 rewards **effective, natural, idiomatically controlled Spanish** paired with consistent register and critical nuance. Forced dictionary words that obscure meaning hurt Criterion A, and slipping out of `usted` undermines Criterion C — whereas anticipating and answering a counter-argument strengthens Criterion B.",
        hints: [
          "Consider how IB Criterion A treats forced, unnatural vocabulary that damages clarity.",
          "Think about whether addressing a realistic counter-argument helps or hurts an HL proposal.",
        ],
      },
    ],
  },
];
