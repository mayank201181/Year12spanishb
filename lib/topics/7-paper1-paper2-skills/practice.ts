import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ: 10 auto-marked short questions (SL & HL)
  // ===========================================================================
  quiz: [
    {
      id: "7-paper1-paper2-skills-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "paper1-prompt-decoding",
      strategy: "Paper 1 Criteria Marks",
      question:
        "In IB Spanish B Paper 1 (30 marks total), how many marks are allocated specifically to **Criterion C (Conceptual Understanding)**? Type a single number.",
      answer: { type: "number", value: 6, display: "6" },
      traps: [
        { spec: { type: "number", value: 12 }, feedback: "12 marks is for Criterion A (Language) or Criterion B (Message) — Criterion C carries 6 marks (20% of Paper 1)." },
        { spec: { type: "number", value: 10 }, feedback: "Not 10 — Paper 1 splits 30 marks as A = 12, B = 12, and C = 6." },
      ],
      solution: [
        "Paper 1 totals 30 marks: Criterion A (Language) = 12, Criterion B (Message) = 12, Criterion C (Conceptual Understanding) = **6**.",
      ],
      hints: [
        "Criterion A and Criterion B are each worth 12 marks out of 30.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "paper1-prompt-decoding",
      strategy: "Word-Count Zone Control",
      question:
        "What is the **minimum** target word count (in words) for **SL** Paper 1? Type a single number.",
      answer: { type: "number", value: 250, display: "250" },
      traps: [
        { spec: { type: "number", value: 450 }, feedback: "450 words is the **HL** minimum — at SL the range is 250–400 words." },
        { spec: { type: "number", value: 400 }, feedback: "400 words is the SL *upper* limit — the SL minimum is 250 words." },
      ],
      solution: [
        "SL Paper 1 targets **250–400 words** in 1h 15m (HL targets 450–600 words in 1h 30m).",
      ],
      hints: [
        "SL Paper 1 spans 150 words up to a maximum of 400 words.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper1-prompt-decoding",
      strategy: "Audience & Register Matching",
      question:
        "You are writing a Paper 1 *propuesta formal* addressed directly to the mayor of Madrid (*el alcalde*). Which Spanish second-person singular pronoun must you maintain consistently throughout (`tú` or `usted`)?",
      answer: { type: "text", accept: ["usted"], display: "usted" },
      traps: [
        { spec: { type: "text", accept: ["tú", "tu"] }, feedback: "Informal `tú` clashes with an official municipal recipient (*el alcalde*) and lowers Criterion C." },
      ],
      solution: [
        "Addressing an institutional authority (*el alcalde*) demands formal **`usted`** consistently from greeting to sign-off.",
      ],
      hints: [
        "Check whether a city mayor requires informal or formal address.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "paper2-reading-strategies",
      strategy: "Paper 2 Exam Structure",
      question:
        "How many total marks is **Paper 2 Reading Comprehension** worth (across Texts A, B, and C in 1 hour)? Type a single number.",
      answer: { type: "number", value: 40, display: "40" },
      traps: [
        { spec: { type: "number", value: 25 }, feedback: "25 marks is Paper 2 **Listening** — Paper 2 **Reading** is out of 40 marks." },
        { spec: { type: "number", value: 65 }, feedback: "65 marks is Reading (40) + Listening (25) combined." },
      ],
      solution: [
        "Paper 2 Reading Comprehension carries **40 marks** (25% of the final grade) in 1 hour.",
      ],
      hints: [
        "Paper 2 totals 65 marks: 25 for Listening and the rest for Reading.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper2-reading-strategies",
      strategy: "Part-of-Speech Lock for Synonyms",
      question:
        "Read the extract: *«La red de bibliotecas móviles ha logrado acercar la lectura a pueblos aislados y frenar la desigualdad educativa.»* Type the exact Spanish **infinitive verb** in the extract that is a synonym of *«detener / ralentizar»*.",
      answer: { type: "text", accept: ["frenar"], display: "frenar" },
      traps: [
        { spec: { type: "text", accept: ["acercar"] }, feedback: "`acercar` means 'to bring closer', not 'to halt/slow down' (`frenar`)." },
      ],
      solution: [
        "Apply the part-of-speech lock: we need an infinitive verb meaning 'to stop / slow down'.",
        "Of the two infinitives (`acercar`, `frenar`), **`frenar`** matches *detener / ralentizar*.",
      ],
      hints: [
        "Only two infinitive verbs appear in the extract: `acercar` and `frenar`.",
        "Which one literally relates to 'putting on the brakes' to slow something down?",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper2-reading-strategies",
      strategy: "Pronoun Referent Gender/Number Filter",
      question:
        "Read the sentence: *«El ministerio aprobó dos becas para investigar energías marinas, pero **estas** solo cubren el primer curso.»* What exact Spanish noun (with or without `las` / `dos`) does **`estas`** refer to?",
      answer: {
        type: "text",
        accept: ["becas", "las becas", "dos becas"],
        display: "las becas",
      },
      traps: [
        { spec: { type: "text", accept: ["energías marinas", "energías", "las energías marinas"] }, feedback: "Check logic! Marine energies do not 'cover the first academic year' (*cubren el primer curso*) — **las becas** (scholarships) do." },
        { spec: { type: "text", accept: ["el ministerio", "ministerio"] }, feedback: "`el ministerio` is masculine singular, whereas `estas` is feminine plural." },
      ],
      solution: [
        "`estas` is feminine plural, eliminating masculine singular *el ministerio*.",
        "Between *dos becas* and *energías marinas*, only **`las becas`** logically 'cover the first year' (*cubren el primer curso*).",
      ],
      hints: [
        "Filter backwards for feminine plural nouns before `estas`.",
        "Test which feminine plural noun can logically perform the verb *cubren el primer curso*.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper2-listening-strategies",
      strategy: "Self-Correction Distractor Decoding",
      question:
        "Listening transcript: *«Al principio reservamos veinticuatro plazas para la excursión a Toledo; sin embargo, al sumarse el grupo de intercambio, finalmente contratamos un autobús de cuarenta plazas.»* How many seats did they **finally** book? Type a single number.",
      answer: { type: "number", value: 40, display: "40" },
      traps: [
        { spec: { type: "number", value: 24 }, feedback: "24 was the initial bait before the pivot *«sin embargo... finalmente»*!" },
      ],
      solution: [
        "`24` is introduced with *Al principio* (abandoned initial reservation).",
        "After the pivot **`sin embargo... finalmente`**, the confirmed figure is **40** (*cuarenta plazas*).",
      ],
      hints: [
        "Hold off locking the first number you read (`veinticuatro`).",
        "Look at the number stated after `sin embargo` and `finalmente`.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper2-listening-strategies",
      strategy: "Peninsular vs Latin American Lexis",
      question:
        "In a Paper 2 Listening clip from Lima, a student says: *«Olvidé mi **celular** en el salón.»* What is the standard **Peninsular Spanish** equivalent of **`celular`** (one word, without article)?",
      answer: { type: "text", accept: ["móvil", "el móvil"], display: "móvil" },
      traps: [
        { spec: { type: "text", accept: ["ordenador", "el ordenador"] }, feedback: "`ordenador` corresponds to `computadora`, whereas `celular` corresponds to **`móvil`**." },
      ],
      solution: [
        "In Latin America, a mobile phone is `el celular`; in Peninsular Spain, it is **`el móvil`** (mind the accent on the `ó`!).",
      ],
      hints: [
        "Think of the 5-letter Peninsular Spanish word for a mobile phone.",
        "Don't forget the written accent on the penultimate syllable (`ó`)!",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "editing-calibracion-hl",
      strategy: "T-C-S-P-V Pass S (Subjuntivo)",
      question:
        "[HL] Fix the single mood error in this HL sentence: *«El ruido nocturno afecta al rendimiento escolar; de ahí que el ayuntamiento **debe** restringir el tráfico pesado.»* Type only the corrected Spanish verb.",
      answer: { type: "text", accept: ["deba"], display: "deba" },
      traps: [
        { spec: { type: "text", accept: ["debe"] }, feedback: "`debe` is indicative — **`de ahí que`** ALWAYS demands the subjunctive (`deba`)!" },
        { spec: { type: "text", accept: ["deban"] }, feedback: "Check subject number: `el ayuntamiento` is singular, so use **`deba`**, not plural `deban`." },
      ],
      solution: [
        "`de ahí que` is a C1 consequence connector that obligatorily triggers the **subjunctive**.",
        "With singular subject `el ayuntamiento`, present subjunctive of `deber` is **`deba`**.",
      ],
      hints: [
        "Which grammatical mood MUST follow `de ahí que`?",
        "Conjugate `deber` in third-person singular present subjunctive.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "editing-calibracion-hl",
      strategy: "T-C-S-P-V Pass C (Concordancia)",
      question:
        "[HL] Fix the gender-agreement slip in this HL *informe*: *«Hemos detectado un problema muy **compleja** en la distribución de becas.»* Type only the corrected Spanish adjective.",
      answer: { type: "text", accept: ["complejo"], display: "complejo" },
      traps: [
        { spec: { type: "text", accept: ["compleja"] }, feedback: "`el problema` is a masculine Greek `-ma` noun — the adjective cannot stay feminine `compleja`." },
        { spec: { type: "text", accept: ["complejos"] }, feedback: "`un problema` is singular, so keep the adjective singular: **`complejo`**." },
      ],
      solution: [
        "`el problema` is **masculine singular** despite ending in `-a`.",
        "Therefore the agreeing adjective is **`complejo`**.",
      ],
      hints: [
        "Notice the masculine indefinite article `un` before `problema`.",
        "Make `compleja` agree with a masculine singular noun.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS: p1 & p2 × 15 QUESTIONS EACH)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER P1: Paper 1 Prompt Decoding & Paper 2 Reading Practice (SL · 15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "7-paper1-paper2-skills-p1",
      title: "Practice Paper 1 · Paper 1 Decoding & Paper 2 Reading Precision",
      level: "SL",
      questions: [
        {
          id: "7-paper1-paper2-skills-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper1-prompt-decoding",
          strategy: "T-A-P-R Prompt Decoder",
          question:
            "Paper 1 prompt: *«Acabas de ver un documental hispano sobre la música urbana en Medellín y quieres valorarlo, explicar sus puntos fuertes y débiles, y recomendarlo (o no) en la revista cultural del colegio.»* Offered choices: `un folleto`, `una reseña`, `una carta formal`. Type the single **most appropriate** Spanish text type (without article).",
          answer: { type: "text", accept: ["reseña", "una reseña"], display: "reseña" },
          traps: [
            { spec: { type: "text", accept: ["folleto", "un folleto"] }, feedback: "A `folleto` promotes/guides an event or place rather than reviewing a documentary critically." },
            { spec: { type: "text", accept: ["carta formal", "una carta formal"] }, feedback: "A formal letter addresses an individual official, not the readers of a school cultural magazine." },
          ],
          solution: [
            "Evaluating strengths and weaknesses (*puntos fuertes y débiles*) of a film/documentary for magazine readers uniquely matches **`reseña`** (review).",
          ],
          hints: [
            "Which Mass Media text type gives a critical appraisal and recommendation of a film or documentary?",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper1-prompt-decoding",
          strategy: "T-A-P-R Prompt Decoder",
          question:
            "Paper 1 prompt: *«Tu instituto va a recibir a un grupo de estudiantes de intercambio de Quito. La coordinadora te pide redactar una guía práctica y visualmente atractiva con normas básicas, consejos de transporte y lugares culturales de la ciudad.»* Offered choices: `un editorial`, `un folleto`, `un diario personal`. Type the single **most appropriate** text type (without article).",
          answer: { type: "text", accept: ["folleto", "un folleto"], display: "folleto" },
          traps: [
            { spec: { type: "text", accept: ["editorial", "un editorial"] }, feedback: "An `editorial` argues a newspaper's institutional viewpoint, not practical visitor logistics." },
            { spec: { type: "text", accept: ["diario personal", "un diario personal"] }, feedback: "A private diary cannot serve as an informative guide distributed to visiting students." },
          ],
          solution: [
            "An attractive practical guide with tips, rules, and local highlights for visiting exchange students is **`folleto`** (leaflet/brochure).",
          ],
          hints: [
            "Look at *guía práctica y visualmente atractiva* with tips and local highlights.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-reading-strategies",
          strategy: "Part-of-Speech Lock for Synonyms",
          question:
            "Read the extract (Text A): *«El nuevo mercado vecinal de Zaragoza pretende respaldar a los pequeños agricultores locales y ofrecer alimentos frescos sin envases plásticos.»* Type the exact Spanish **infinitive verb** in the extract meaning **«apoyar»**.",
          answer: { type: "text", accept: ["respaldar"], display: "respaldar" },
          traps: [
            { spec: { type: "text", accept: ["ofrecer"] }, feedback: "`ofrecer` means 'to offer', whereas **`respaldar`** means 'to back / support' (`apoyar`)." },
          ],
          solution: [
            "Match grammatical category: `apoyar` is an infinitive verb.",
            "In the extract, **`respaldar`** directly translates 'to back/support' small local farmers.",
          ],
          hints: [
            "Check the infinitive verbs in the extract (`respaldar`, `ofrecer`).",
            "Think of the root *espalda* ('back') → 'to back someone up'!",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-reading-strategies",
          strategy: "Pronoun Referent Gender/Number Filter",
          question:
            "Read the extract: *«El barrio renovó tres plazas históricas durante el invierno, aunque **aquellas** situadas junto a la estación todavía esperan iluminación LED.»* Type the exact Spanish noun phrase (two words with article, or single noun) to which **`aquellas`** refers.",
          answer: {
            type: "text",
            accept: ["plazas", "las plazas", "tres plazas", "plazas históricas", "las plazas históricas"],
            display: "las plazas",
          },
          traps: [
            { spec: { type: "text", accept: ["la estación", "estación"] }, feedback: "`la estación` is singular and comes *after* `aquellas`." },
            { spec: { type: "text", accept: ["el barrio", "barrio"] }, feedback: "`el barrio` is masculine singular, whereas `aquellas` is feminine plural." },
          ],
          solution: [
            "`aquellas` is feminine plural.",
            "Scanning backwards, the matching feminine plural noun is **`las plazas`** (*tres plazas históricas*).",
          ],
          hints: [
            "Identify the gender and number of `aquellas` (feminine plural).",
            "Look before `aquellas` for a feminine plural noun.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "paper2-reading-strategies",
          strategy: "Verdadero / Falso Verdict",
          question:
            "Read the extract: *«A diferencia de hace una década, cuando apenas existían carriles exclusivos, hoy más del sesenta por ciento de los estudiantes universitarios de Valencia se desplaza en bicicleta o transporte público.»*\n\nStatement: **«Hace diez años, Valencia ya contaba con una extensa red de carriles exclusivos para bicicletas.»** Type **Verdadero** or **Falso**.",
          answer: { type: "text", accept: ["Falso"], display: "Falso" },
          traps: [
            { spec: { type: "text", accept: ["Verdadero"] }, feedback: "Check *«apenas existían carriles exclusivos»* — `apenas` means 'barely/hardly', contradicting *extensa red*!" },
          ],
          solution: [
            "`hace una década` = ten years ago, when **`apenas existían carriles exclusivos`** ('exclusive lanes barely existed').",
            "Therefore the statement is **Falso**.",
          ],
          hints: [
            "Translate the high-frequency Paper 2 adverb `apenas` carefully.",
            "Compare *apenas existían* with *extensa red*.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "paper2-reading-strategies",
          strategy: "Minimal Justification Quote (M-I-N-I)",
          question:
            "Using the exact same extract from the previous question — *«A diferencia de hace una década, cuando apenas existían carriles exclusivos, hoy más del sesenta por ciento de los estudiantes universitarios de Valencia se desplaza en bicicleta o transporte público.»* — copy ONLY the **exact 4-word Spanish phrase** proving that *«Hace diez años, Valencia ya contaba con una extensa red de carriles exclusivos»* is **Falso**.",
          answer: {
            type: "text",
            accept: [
              "apenas existían carriles exclusivos",
              "cuando apenas existían carriles exclusivos",
            ],
            display: "apenas existían carriles exclusivos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["a diferencia de hace una década"] },
              feedback: "Too incomplete! That phrase does not say whether lanes existed or not.",
            },
          ],
          solution: [
            "Apply M-I-N-I: lift ONLY the exact proving phrase without the unrelated clause about today's university students.",
            "Exact 4-word minimal justification: **`apenas existían carriles exclusivos`**.",
          ],
          hints: [
            "Find the exact 4 words right after `cuando` that contradict *extensa red*.",
            "Do not copy the second half of the sentence about *hoy más del sesenta por ciento...*.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-reading-strategies",
          strategy: "Gap-Fill Cohesion & Logic",
          question:
            "Gap-fill (Text B): *«El museo amplió su horario nocturno los viernes; [ _____ ], el número de visitantes jóvenes se duplicó en solo tres meses.»* Choose the exact Spanish connector from the box that fits the logical relationship: `sin embargo` / `en cambio` / `por consiguiente` / `a pesar de ello`.",
          answer: { type: "text", accept: ["por consiguiente"], display: "por consiguiente" },
          traps: [
            { spec: { type: "text", accept: ["sin embargo", "en cambio", "a pesar de ello"] }, feedback: "Doubling youth visitors is a direct *result* of extending Friday night hours, not a contrast — use a consequence connector!" },
          ],
          solution: [
            "Cause: extending Friday night opening hours. Direct consequence: youth attendance doubled.",
            "Only **`por consiguiente`** ('consequently/therefore') expresses cause → result.",
          ],
          hints: [
            "Ask whether Clause 2 contradicts Clause 1 or results directly from Clause 1.",
            "Eliminate the three adversative/contrastive connectors.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "paper1-prompt-decoding",
          strategy: "T-A-P-R Prompt Analysis",
          marks: 4,
          question:
            "Analyse this Paper 1 prompt using T-A-P-R:\n*«Muchos alumnos de tu instituto tiran sus teléfonos móviles antiguos a la basura común. Escribe a la directora para concienciarla sobre el impacto ambiental de los residuos electrónicos y proponer la instalación de puntos de recogida y reciclaje en el centro.»*\nOffered options: *un blog*, *una propuesta*, *un diario personal*.\n\nIn English, explain: (1) the single optimal choice, (2) the required Spanish pronoun/tone, (3) why the private option fails, and (4) two structural conventions required for Criterion C. [4 marks]",
          modelAnswer:
            "1. The optimal genre is a formal **proposal** (*propuesta*) because the writer pitches a concrete institutional recycling scheme to a decision-maker. 2. Because the recipient is a school headteacher, the text must sustain formal **usted** address and objective, respectful language throughout. 3. A **diary** is completely unsuitable because private personal entries never reach or persuade school leadership. 4. Essential Criterion C layout elements include clear section **headings** (e.g., objective, rationale, implementation steps) and an explicit concluding **recommendation** inviting approval.",
          markScheme: [
            { point: "Identifies formal proposal (propuesta) as optimal choice for institutional action plan", keywords: ["proposal", "action plan", "scheme", "concrete"] },
            { point: "Specifies formal usted register/tone matching the headteacher recipient", keywords: ["usted", "respectful", "objective", "formal"] },
            { point: "Explains why the diary fails (private reflection cannot persuade institutional leadership)", keywords: ["diary", "private", "personal", "leadership"] },
            { point: "Names two concrete Criterion C structural conventions (subheadings/headings, objective, implementation steps, recommendation)", keywords: ["headings", "subheadings", "recommendation", "implementation"] },
          ],
          hints: [
            "Cover all 4 numbered parts cleanly so you earn every mark.",
            "Match each point to Audience (`la directora`), Purpose (action plan), and genre conventions.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-reading-strategies",
          strategy: "Synonym Precision in Context",
          question:
            "Read the extract (Text B): *«El auge del alquiler turístico ha provocado un encarecimiento desmesurado de la vivienda en el centro de Palma, obligando a numerosos residentes a trasladarse a otros municipios.»* Copy the exact Spanish **adjective** in the extract meaning **«excesivo / exagerado»**.",
          answer: { type: "text", accept: ["desmesurado"], display: "desmesurado" },
          traps: [
            { spec: { type: "text", accept: ["numerosos"] }, feedback: "`numerosos` means 'numerous/many', not 'excessive/disproportionate'." },
            { spec: { type: "text", accept: ["encarecimiento"] }, feedback: "`encarecimiento` is a noun ('rise in cost'), not an adjective!" },
          ],
          solution: [
            "Part-of-speech lock: we need a masculine singular adjective matching `excesivo`.",
            "**`desmesurado`** (*des- + mesura* = 'beyond measure / excessive') fits both meaning and grammar.",
          ],
          hints: [
            "Ignore nouns like `encarecimiento` and check only adjectives.",
            "Break the word down: `des-` (without) + `mesura` (measure/moderation).",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-reading-strategies",
          strategy: "Clitic Pronoun Referent (`les`)",
          question:
            "Read the extract: *«Los talleres intergeneracionales de informática en Salamanca reúnen cada sábado a jubilados y adolescentes; la experiencia **les** ayuda a combatir la soledad y a derribar prejuicios mutuos.»* Who does **`les`** refer to (answer in Spanish, naming both groups joined by `y`)?",
          answer: {
            type: "text",
            accept: [
              "jubilados y adolescentes",
              "a jubilados y adolescentes",
              "los jubilados y los adolescentes",
              "a los jubilados y a los adolescentes",
              "adolescentes y jubilados",
            ],
            display: "jubilados y adolescentes",
          },
          traps: [
            { spec: { type: "text", accept: ["los talleres", "talleres"] }, feedback: "Workshops cannot feel loneliness (*combatir la soledad*) — `les` refers to the people participating!" },
          ],
          solution: [
            "`les` is a plural indirect object pronoun referring to people who experience mutual benefits (*derribar prejuicios mutuos*).",
            "Both groups together: **`jubilados y adolescentes`**.",
          ],
          hints: [
            "Notice the adjective *mutuos* ('mutual') — that proves `les` refers to BOTH participating groups, not just one!",
            "Lift the two plural human nouns from the first clause.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "paper2-reading-strategies",
          strategy: "Trimming an Over-Long Justification Quote",
          marks: 3,
          question:
            "Read this Paper 2 passage:\n*«Inaugurada en 2018 con fondos europeos, la biblioteca nocturna de Bilbao ofrece conexión gratuita de fibra óptica, aunque su principal atractivo para los universitarios consiste en las salas insonorizadas para preparar exámenes en grupo.»*\n\nStatement: **«Lo que más valoran los estudiantes de la biblioteca es el wifi gratuito.»** A candidate writes *Falso* and copies the **entire 36-word sentence**. Explain in English: (1) why copying everything risks losing the mark, (2) which exact minimal Spanish clause proves *Falso*, and (3) what specific detail refutes the statement. [3 marks]",
          modelAnswer:
            "1. Copying the full passage includes irrelevant opening facts about European funding and opening year, failing to prove precision under IB markschemes. 2. The concise verbatim proof trims everything before the main attraction clause: **«su principal atractivo para los universitarios consiste en las salas insonorizadas»** (starting at the main attraction and ending at the soundproof rooms). 3. This directly contradicts the claim because soundproof group study rooms — rather than internet access — are the top draw.",
          markScheme: [
            { point: "Explains that lifting irrelevant/excess opening details fails to show pinpoint comprehension", keywords: ["irrelevant", "excess", "precision", "funding"] },
            { point: "Trims the quote precisely to the verbatim main-attraction clause ending at the soundproof rooms", keywords: ["concise verbatim", "trims", "main attraction"] },
            { point: "Explains how soundproof rooms refute internet/wifi being the main draw", keywords: ["soundproof", "contradicts", "refutes", "top draw"] },
          ],
          hints: [
            "Apply the M-I-N-I quote rule to trim out the 2018 EU-funding clause.",
            "Show what actually sits as *su principal atractivo* in the passage.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper1-prompt-decoding",
          strategy: "Authentic Spanish Closing Formula",
          question:
            "You are closing a formal Paper 1 *carta formal* addressed to a museum director (*Estimada Sra. Directora:*). Choose the **only** register-appropriate closing from these four: `Un besazo,` / `¡Nos vemos pronto!` / `Atentamente,` / `Chao,`. Type the exact Spanish word (comma optional).",
          answer: { type: "text", accept: ["Atentamente", "Atentamente,"], display: "Atentamente," },
          traps: [
            { spec: { type: "text", accept: ["Un besazo", "Un besazo,", "Chao", "Chao,"] }, feedback: "Too informal! A formal letter to a museum director requires an institutional closing like **`Atentamente,`**." },
          ],
          solution: [
            "**`Atentamente,`** (or `Le saluda atentamente,`) maintains formal `usted` register required for Criterion C.",
          ],
          hints: [
            "Match formal `usted` register with a standard professional Spanish sign-off.",
            "Eliminate affectionate or conversational closings.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Interpret",
          guideRef: "paper2-reading-strategies",
          strategy: "Inferring Tone & Distancing Language (Text C)",
          marks: 4,
          question:
            "Read this Text C extract:\n*«Las grandes plataformas prometen que sus algoritmos recomiendan únicamente contenido que enriquece nuestros intereses. Resulta llamativo, no obstante, comprobar cómo las publicaciones que despiertan indignación multiplican por seis su alcance frente a los reportajes rigurosos.»*\n\nIn English, identify the author's tone/attitude toward platform algorithms and analyse **three** specific Spanish lexical or structural cues that reveal it. [4 marks]",
          modelAnswer:
            "The writer conveys a **sceptical, ironic** attitude challenging corporate claims. First, using **«prometen»** frames the companies' message as an unverified marketing pledge rather than proven fact. Second, the adversative pivot **«no obstante»** sharply undercuts that claim to introduce contradictory evidence. Third, the understated ironic phrase **«Resulta llamativo»** ('it is striking') paired with the stark contrast between outrage (**«indignación»**) going six times further than rigorous journalism (**«reportajes rigurosos»**) exposes hypocrisy.",
          markScheme: [
            { point: "Identifies sceptical / critical / ironic attitude toward corporate claims", keywords: ["sceptical", "critical", "ironic", "skeptical"] },
            { point: "Analyses distancing verb 'prometen' as signalling unverified marketing claim", keywords: ["prometen", "unverified", "pledge", "marketing"] },
            { point: "Identifies contrastive pivot 'no obstante' reversing the opening claim", keywords: ["no obstante", "undercuts", "contradictory", "pivot"] },
            { point: "Analyses ironic understatement 'resulta llamativo' or outrage vs rigorous journalism contrast", keywords: ["llamativo", "indignación", "hypocrisy", "outrage"] },
          ],
          hints: [
            "Do not accept the opening sentence at face value — look at the verb used (`prometen`).",
            "Track how `no obstante` and `Resulta llamativo` expose the gap between promise and reality.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "paper1-prompt-decoding",
          strategy: "Drafting a Band 5–6 Criterion C Opening in Spanish",
          marks: 6,
          question:
            "Paper 1 Mini-Task (SL/HL Core): *«Tu municipio quiere construir un centro comercial sobre el último parque arbolado del barrio. Escribe una carta al director del diario local para expresar tu oposición, argumentar el valor ecológico y social del parque, y animar a los vecinos a apoyar una alternativa sostenible.»*\n\nWrite in **Spanish** (~85–110 words) a complete **opening + first body paragraph** of a *carta al director* demonstrating Criterion C conventions, formal register, a WEIRDO subjunctive trigger, a concessive connector, and a clear stance. [6 marks]",
          modelAnswer:
            "Madrid, 14 de noviembre de 2026\n\nEstimado Sr. Director:\n\nLe escribo con profunda preocupación tras conocer el proyecto urbanístico que amenaza nuestro último pulmón verde. Si bien es cierto que el barrio precisa dinamizar su comercio, no obstante considero inaceptable sacrificar un espacio comunitario insustituible por otro edificio de hormigón. Es imprescindible que las autoridades escuchen a la ciudadanía y protejan la biodiversidad urbana, dado que este parque fomenta el bienestar mental y la convivencia intergeneracional. Insto a los vecinos a respaldar la creación de un mercado ecológico al aire libre que armonice economía y sostenibilidad.",
          markScheme: [
            { point: "Includes authentic carta al director header (city/date) and formal salutation (Estimado/a Sr./Sra. Director/a)", keywords: ["estimado", "director", "noviembre", "madrid"] },
            { point: "Maintains consistent formal usted register (e.g., Le escribo)", keywords: ["le escribo", "usted", "su ", "profunda preocupación"] },
            { point: "States immediate opposition and clearly references the threatened green space", keywords: ["pulmón verde", "inaceptable", "sacrificar", "amenaza"] },
            { point: "Deploys a high-band concessive structure (Si bien es cierto que / no obstante / aunque)", keywords: ["si bien", "no obstante", "sin embargo", "aunque"] },
            { point: "Uses an accurate WEIRDO / impersonal subjunctive structure (e.g., es imprescindible que... escuchen / protejan)", keywords: ["imprescindible", "escuchen", "protejan", "necesario que"] },
            { point: "Develops ecological/social argument and proposes a sustainable alternative with causal connector (dado que / puesto que)", keywords: ["dado que", "biodiversidad", "convivencia", "mercado ecológico"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant Spanish response or completely off-task." },
            { band: "1–2", marks: [1, 2], descriptor: "Missing genre conventions or informal register clash (`tú`); basic B1 phrasing without subjunctive or clear stance." },
            { band: "3–4", marks: [3, 4], descriptor: "Recognisable formal letter conventions and clear opposition, though limited complex connectors or minor mood/register slips." },
            { band: "5–6", marks: [5, 6], descriptor: "Authentic *carta al director* header/salutation, seamless formal `usted`, accurate WEIRDO subjunctive, nuanced concessive connector, and compelling ecological/social argument." },
          ],
          hints: [
            "Start with City + Date and `Estimado Sr. Director:` + `Le escribo...` to lock Criterion C immediately.",
            "Include one concessive frame (`Si bien es cierto que..., no obstante...`) and one WEIRDO subjunctive (`Es imprescindible que las autoridades escuchen...`).",
            "Connect ecological value (*biodiversidad*) and social well-being (*convivencia*) using `dado que`.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "paper2-reading-strategies",
          strategy: "Full Paper 2 Reading Diagnostic Breakdown",
          marks: 6,
          question:
            "Read this authentic Text B paragraph:\n*«Aunque el teletrabajo prometía conciliar mejor la vida familiar y profesional, diversos estudios realizados en Bogotá y Barcelona revelan que casi la mitad de los empleados conectados desde casa alarga su jornada laboral sin remuneración adicional. **Ello** ha reabierto el debate sobre el derecho legal a la desconexión digital.»*\n\nAnswer all 3 parts concisely:\n(a) State whether *«El trabajo remoto ha eliminado las horas extras no pagadas»* is Verdadero or Falso and give the **exact minimal Spanish justification quote** (2m).\n(b) Identify the exact Spanish **verb** meaning *«prolonga / extiende»* and explain what **«Ello»** refers to (2m).\n(c) Explain two Paper 2 Reading strategies that protect marks on this paragraph (2m). [6 marks]",
          modelAnswer:
            "(a) **Falso** — trim out the concessive opener and lift only the concise verbatim proof: **«casi la mitad de los empleados conectados desde casa alarga su jornada laboral sin remuneración adicional»** (directly disproving the claim that unpaid overtime disappeared).\n(b) Exact equivalent verb: **«alarga»** (3rd-person singular matching *prolonga*). Neutral pronoun **«Ello»** refers to the entire preceding situation: nearly half of remote workers extending their workday without extra pay.\n(c) Two protective strategies: (1) apply the **M-I-N-I quote rule** so you exclude the unrelated concessive opener about work-life balance, and (2) apply the **grammatical class lock** (conjugating 3rd-person verb *alarga* to match *prolonga*) alongside recognising that neutral pronouns like *ello/lo* summarise a whole clause rather than a single noun.",
          markScheme: [
            { point: "Correctly judges Falso", keywords: ["falso"] },
            { point: "Supplies exact trimmed verbatim quote disproving unpaid overtime disappeared", keywords: ["concise verbatim", "disproving", "overtime", "trim out"] },
            { point: "Identifies exact conjugated verb 'alarga'", keywords: ["alarga"] },
            { point: "Explains neutral 'Ello' refers to the whole preceding clause (half of remote workers extending unpaid hours)", keywords: ["entire preceding", "whole clause", "extending", "unpaid"] },
            { point: "Explains minimal-quote trimming strategy (excluding unrelated opening clause)", keywords: ["m-i-n-i", "exclude", "unrelated", "minimal"] },
            { point: "Explains part-of-speech lock or neutral-pronoun clause-reference rule", keywords: ["class lock", "grammatical", "neutral", "summarise"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid comprehension or strategy demonstrated." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies Falso or one lexical detail, but quote is over-long/paraphrased and strategy analysis is vague." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurate T/F verdict, synonym, and partial referent explanation with at least one clear exam strategy." },
            { band: "5–6", marks: [5, 6], descriptor: "Surgical minimal verbatim quote, exact conjugated synonym (`alarga`), complete clause-level referent for `Ello`, and two concrete Paper 2 strategies." },
          ],
          hints: [
            "Trim the justification quote to start right at *casi la mitad...* — drop the opening *Aunque...* clause!",
            "Match the exact tense/person of *prolonga* (3rd person singular present indicative).",
            "Remember that `ello` behaves just like neutral `lo` / `lo cual`.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER P2: Paper 2 Listening & [HL] Proofreading / Band 10–12 Calibration
    // -------------------------------------------------------------------------
    {
      id: "7-paper1-paper2-skills-p2",
      title: "Practice Paper 2 · Listening Distractors & [HL] Band 10–12 Calibration",
      level: "HL",
      questions: [
        {
          id: "7-paper1-paper2-skills-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-listening-strategies",
          strategy: "Self-Correction Distractor Decoding",
          question:
            "Listening transcript (Radio Bilbao): *«Al principio planeábamos cobrar doce euros por la entrada al festival de cortometrajes solidarios; sin embargo, gracias al patrocinio de la biblioteca municipal, el precio definitivo será de cinco euros.»* What is the **final** ticket price in euros? Type a single number.",
          answer: { type: "number", value: 5, display: "5" },
          traps: [
            { spec: { type: "number", value: 12 }, feedback: "12 euros was the initial plan before the pivot *«sin embargo... precio definitivo»*!" },
          ],
          solution: [
            "Ignore the initial figure (`12`) introduced by *Al principio planeábamos*.",
            "After `sin embargo`, the final price is **5** euros.",
          ],
          hints: [
            "Spot the pivot connector `sin embargo` and look at the number following `precio definitivo`.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-listening-strategies",
          strategy: "Peninsular vs Latin American Lexis",
          question:
            "In a Paper 2 Listening track from Seville, a speaker mentions: *«Me tomé un **zumo** de naranja antes de encender el **ordenador**.»* Type the common **Latin American** equivalent of **`zumo`** (one word, without article).",
          answer: { type: "text", accept: ["jugo", "el jugo"], display: "jugo" },
          traps: [
            { spec: { type: "text", accept: ["computadora", "la computadora"] }, feedback: "`computadora` matches `ordenador`; the question asks for the Latin American equivalent of **`zumo`**." },
          ],
          solution: [
            "Peninsular `zumo` corresponds to Latin American **`jugo`** (while `ordenador` corresponds to `computadora`).",
          ],
          hints: [
            "Think of the 4-letter Latin American Spanish word for fruit juice.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-listening-strategies",
          strategy: "Double-Pivot Listening Tracking",
          question:
            "Listening transcript (Podcast from Montevideo): *«El club de debate escolar solía reunirse los lunes por la tarde. El semestre pasado lo cambiamos al miércoles, pero como varios alumnos tienen entrenamiento deportivo, a partir de abril nos juntaremos los jueves.»* On which **day of the week** (in Spanish, without article) will the club meet from April onward?",
          answer: { type: "text", accept: ["jueves", "los jueves"], display: "jueves" },
          traps: [
            { spec: { type: "text", accept: ["lunes", "los lunes"] }, feedback: "Mondays (`lunes`) was the old routine (*solía reunirse*)." },
            { spec: { type: "text", accept: ["miércoles", "los miércoles"] }, feedback: "Wednesdays (`miércoles`) was last semester before the pivot *«pero... a partir de abril»*!" },
          ],
          solution: [
            "Track the timeline with arrows: `lunes` (old habit) → `miércoles` (last semester) → pivot `pero... a partir de abril` → **`jueves`**.",
          ],
          hints: [
            "Draw a timeline of all three days mentioned (`lunes` → `miércoles` → ?).",
            "Anchor strictly to the phrase *a partir de abril*.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "editing-calibracion-hl",
          strategy: "T-C-S-P-V Pass T (Diacritic Tildes)",
          question:
            "[HL] Pass T (*Tildes*): Spot the single word missing a **diacritic accent** in this HL sentence: *«Aunque la campaña educativa funcionó bien, necesitamos mas financiación para las escuelas rurales.»* Type the corrected Spanish word with its accent.",
          answer: { type: "text", accept: ["más"], display: "más" },
          traps: [
            { spec: { type: "text", accept: ["mas"] }, feedback: "Without a tilde, `mas` is a literary synonym for 'but' (`pero`) — 'more' MUST carry an accent: **`más`**!" },
          ],
          solution: [
            "`mas` (no accent) = 'but'; **`más`** (with tilde) = 'more'.",
          ],
          hints: [
            "Check the difference between `mas` and `más` in Spanish orthography.",
            "Make sure you type the exact accented vowel `á`.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "editing-calibracion-hl",
          strategy: "T-C-S-P-V Pass S (WEIRDO Subjunctive)",
          question:
            "[HL] Pass S (*Subjuntivo*): Correct the verb after the negative belief trigger in this HL draft: *«No creo que el turismo masivo **beneficia** a los comercios tradicionales del centro histórico.»* Type only the corrected Spanish verb.",
          answer: { type: "text", accept: ["beneficie"], display: "beneficie" },
          traps: [
            { spec: { type: "text", accept: ["beneficia"] }, feedback: "Affirmative `creo que` takes indicative, but negative **`no creo que`** triggers the subjunctive (`beneficie`)!" },
            { spec: { type: "text", accept: ["beneficien"] }, feedback: "Check the subject: `el turismo masivo` is singular, so use **`beneficie`**." },
          ],
          solution: [
            "`no creo que` expresses doubt/denial (WEIRDO), triggering present subjunctive.",
            "For `-ar` verb `beneficiar` with singular subject `el turismo masivo`, the subjunctive is **`beneficie`**.",
          ],
          hints: [
            "Negated opinion verbs (`no creo que`, `no pienso que`) trigger the subjunctive.",
            "Swap the `-a` indicative ending of `beneficiar` to `-e` for singular subjunctive.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "editing-calibracion-hl",
          strategy: "T-C-S-P-V Pass P (Por vs Para)",
          question:
            "[HL] Pass P (*Por vs Para*): Correct the erroneous preposition in this HL *informe* sentence: *«El proyecto se retrasó **para** falta de coordinación entre los departamentos.»* Type only the single correct Spanish preposition.",
          answer: { type: "text", accept: ["por"], display: "por" },
          traps: [
            { spec: { type: "text", accept: ["para"] }, feedback: "`para` indicates purpose/deadline — here we express **cause/reason** ('due to a lack of'), which requires **`por`**." },
          ],
          solution: [
            "Cause/motive ('due to / because of a lack of') always takes **`por`**: `por falta de coordinación`.",
          ],
          hints: [
            "Ask whether *falta de coordinación* is the *goal* of the delay or the *cause* of the delay.",
            "Recall: cause/reason = `por`; goal/purpose = `para`.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "editing-calibracion-hl",
          strategy: "T-C-S-P-V Pass V (Eliminating Calques)",
          question:
            "[HL] Pass V (*Variedad C1*): Replace the bolded English calque in *«El comité debe **hacer** una decisión definitiva antes del viernes»* with the exact idiomatic Spanish infinitive verb (one word).",
          answer: { type: "text", accept: ["tomar", "adoptar"], display: "tomar" },
          traps: [
            { spec: { type: "text", accept: ["hacer"] }, feedback: "*Hacer una decisión* is a literal English calque ('to make a decision') — Spanish says **`tomar una decisión`** (or `adoptar`)." },
          ],
          solution: [
            "Idiomatic Spanish never says *hacer una decisión*; use **`tomar una decisión`** (or **`adoptar una decisión`**).",
          ],
          hints: [
            "In Spanish you literally 'take' (or 'adopt') a decision, never 'make' one.",
            "Type the infinitive verb (`tomar` or `adoptar`).",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "paper2-listening-strategies",
          strategy: "Listening Dialogue Attribution & Regional Cue",
          marks: 4,
          question:
            "Read this Paper 2 Listening transcript (Buenos Aires youth podcast):\n— **Lucía:** *«Al principio pensé que prohibir los celulares en el recreo iba a generar protestas; sin embargo, al mes notamos que los chicos conversaban mucho más cara a cara.»*\n— **Tomás:** *«Che, vos tenés razón en parte, pero en mi curso algunos se aburrían sin escuchar música y empezaron a traer auriculares a escondidas.»*\n\nIn English: (1) explain Lucía's initial expectation vs actual observation, (2) summarise Tomás's contrasting reservation, and (3) identify one Rioplatense linguistic feature present in Tomás's turn. [4 marks]",
          modelAnswer:
            "1. Initially, Lucía expected the lunchtime phone ban to trigger student protests, yet after a month she observed peers talking far more face-to-face. 2. Tomás partially agrees, then highlights a drawback: several classmates grew bored without music and began sneaking headphones into school. 3. Tomás uses authentic Argentine features including the interjection **«che»** and **voseo** (**«vos tenés»** instead of standard *tú tienes*), alongside Latin American lexical **«celulares»**.",
          markScheme: [
            { point: "Identifies Lucía's initial expectation (student protests)", keywords: ["protests", "trigger", "expected"] },
            { point: "Identifies Lucía's post-pivot observation (more face-to-face conversation)", keywords: ["face-to-face", "talking", "conversation"] },
            { point: "Summarises Tomás's counterpoint (boredom without music / sneaking headphones)", keywords: ["bored", "music", "sneaking", "headphones"] },
            { point: "Names a Rioplatense / Latin American feature (voseo 'vos tenés', interjection 'che', or 'celulares')", keywords: ["voseo", "vos tenés", "argentine", "che"] },
          ],
          hints: [
            "Separate Lucía's before-pivot (*Al principio*) and after-pivot (*sin embargo*) points cleanly.",
            "Spot both the Argentine pronoun/verb (`vos tenés`) and the exclamation (`Che`) in Tomás's line.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "editing-calibracion-hl",
          strategy: "Type 2 Si-Clause Accuracy",
          question:
            "[HL] Pass S (*Subjuntivo*): Fix the erroneous verb tense inside the `si`-clause of this HL conditional sentence: *«Si las ciudades **invertirían** más en transporte nocturno, disminuirían los accidentes de tráfico.»* Type the correct imperfect subjunctive (`-ra` or `-se` form).",
          answer: { type: "text", accept: ["invirtieran", "invirtiesen"], display: "invirtieran" },
          traps: [
            { spec: { type: "text", accept: ["invertirían"] }, feedback: "Never put the conditional tense directly after `si`! Type 2 `si`-clauses require the **imperfect subjunctive** (`invirtieran`)." },
            { spec: { type: "text", accept: ["inviertan"] }, feedback: "`inviertan` is present subjunctive — with a conditional main clause (`disminuirían`), use **imperfect subjunctive** (`invirtieran`)." },
          ],
          solution: [
            "Type 2 hypothetical `si`-clause formula: `Si + imperfecto de subjuntivo → condicional simple`.",
            "3rd-person plural preterite stem of `invertir` is `invirtieron` → drop `-ron`, add `-ran` → **`invirtieran`** (or `invirtiesen`).",
          ],
          hints: [
            "Remember the golden rule: NEVER place the conditional (`-ría`) inside the `si`-clause.",
            "Take the 3rd-person plural preterite `invirtieron` and swap `-ron` for `-ran`.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "editing-calibracion-hl",
          strategy: "Relative Possessive Cuyo/a Agreement",
          question:
            "[HL] Complete this Band 11–12 sentence with the exact agreeing form of **`cuyo`**: *«Visitamos una fundación bogotana _____ proyectos culturales benefician a quinientos adolescentes.»* Type one Spanish word.",
          answer: { type: "text", accept: ["cuyos"], display: "cuyos" },
          traps: [
            { spec: { type: "text", accept: ["cuya"] }, feedback: "`cuyo/a/os/as` agrees with the **following possessed noun** (`proyectos`, masculine plural), NOT with `una fundación`!" },
            { spec: { type: "text", accept: ["cuyas"] }, feedback: "`proyectos` is masculine plural, so use **`cuyos`**, not feminine `cuyas`." },
          ],
          solution: [
            "The noun immediately following the blank is **`proyectos`** (masculine plural).",
            "Therefore the relative possessive must agree in masculine plural: **`cuyos`**.",
          ],
          hints: [
            "Check the gender and number of the noun standing *after* the blank (`proyectos`), not *before* it!",
            "Match masculine plural.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "editing-calibracion-hl",
          strategy: "Running the T-C-S-P-V Sweep on a Draft Paragraph",
          marks: 5,
          question:
            "[HL] Apply the **T-C-S-P-V** proofreading sweep to this 42-word HL draft paragraph:\n*«Es fundamental que los ciudadanos protegen el agua limpia, porque el tema medioambiental resulta sumamente compleja. Ademas, muchas empresas contaminan los rios para ahorrar costes; de ahi que el gobierno debe aplicar sanciones mas estrictas.»*\n\nRewrite the **entire paragraph in corrected Spanish**, fixing all **5 error categories** (subjunctive after WEIRDO, adjective agreement, missing tildes, subjunctive after `de ahí que`, and verifying `para`). [5 marks]",
          modelAnswer:
            "«Es fundamental que los ciudadanos **protejan** el agua limpia, porque el tema medioambiental resulta sumamente **complejo**. **Además**, muchas empresas contaminan los **ríos** para ahorrar costes; de **ahí** que el gobierno **deba** aplicar sanciones **más** estrictas.» (Note: `para ahorrar` is already accurate because it expresses purpose/goal.)",
          markScheme: [
            { point: "Corrects WEIRDO subjunctive: protegen → protejan", keywords: ["protejan"] },
            { point: "Corrects masculine Greek -ma agreement: compleja → complejo", keywords: ["complejo"] },
            { point: "Restores mandatory tildes on Además and ríos", keywords: ["además", "ríos"] },
            { point: "Restores tildes on ahí and más (diacritic)", keywords: ["ahí", "más"] },
            { point: "Corrects subjunctive after de ahí que: debe → deba", keywords: ["deba"] },
          ],
          hints: [
            "Run one pass at a time: first Tildes (`Además`, `ríos`, `ahí`, `más`), then Concordancia (`el tema... complejo`), then every verb after `que` (`protejan`, `deba`).",
            "Watch out: `para ahorrar costes` is a purpose clause, so `para` is already correct — do not break it!",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q12",
          kind: "short",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "paper2-listening-strategies",
          strategy: "Negation & Double-Trap Listening Comprehension",
          question:
            "Listening transcript (Radio interview on urban gardens): *«Mucha gente imagina que el mayor obstáculo es la falta de agua o el precio de las semillas; no obstante, ni lo uno ni lo otro nos frena: el verdadero cuello de botella es la burocracia para conseguir permisos municipales.»* According to the speaker, what single Spanish noun names the **real obstacle** (*el verdadero cuello de botella*)? Type one Spanish word (without article).",
          answer: { type: "text", accept: ["burocracia", "la burocracia"], display: "burocracia" },
          traps: [
            { spec: { type: "text", accept: ["agua", "semillas", "precio"] }, feedback: "Watch the double negation *«ni lo uno ni lo otro nos frena»* — both water and seed prices are explicitly rejected!" },
          ],
          solution: [
            "`ni lo uno ni lo otro nos frena` eliminates both *falta de agua* and *precio de las semillas*.",
            "The idiomatic metaphor `cuello de botella` ('bottleneck') introduces the real barrier: **`burocracia`**.",
          ],
          hints: [
            "Translate `ni lo uno ni lo otro nos frena` ('neither one nor the other holds us back').",
            "Look directly after the colon (`:`) for the single noun identifying the real bottleneck.",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "editing-calibracion-hl",
          strategy: "Upgrading Band 7–8 Prose to Band 11–12 C1 Style",
          marks: 6,
          question:
            "[HL] Upgrade this Band 7–8 paragraph (from an HL *artículo* on social media and youth mental health) into **Band 11–12 C1 Spanish** (~65–90 words):\n*«Las redes sociales son muy populares hoy y tienen cosas buenas porque ayudan a hablar con amigos. Pero también son muy malas porque muchos jóvenes se sienten tristes cuando miran fotos perfectas. Por eso los padres tienen que controlar el tiempo de pantalla.»*\n\nYour upgraded Spanish version MUST eliminate `muy`, `cosas`, `buenas/malas`, and `pero`, and integrate: (1) a concessive frame (`Si bien es cierto que...`), (2) precise B2–C1 vocabulary, (3) `de ahí que + subjuntivo`, and (4) cohesive formal/semi-formal journalistic register. [6 marks]",
          modelAnswer:
            "Si bien es cierto que las plataformas digitales ofrecen indudables ventajas al estrechar vínculos afectivos a distancia, no obstante entrañan graves riesgos para el equilibrio emocional adolescente. La exposición constante a imágenes idealizadas alimenta la comparación tóxica y merma la autoestima juvenil; de ahí que resulte prioritario que las familias acompañen activamente el uso responsable de las pantallas en lugar de limitarse a prohibirlo.",
          markScheme: [
            { point: "Opens with a high-band concessive frame (Si bien es cierto que / Aunque...) + adversative pivot (no obstante / sin embargo)", keywords: ["si bien", "no obstante", "sin embargo"] },
            { point: "Replaces 'redes sociales / cosas buenas / hablar con amigos' with precise C1 phrasing (plataformas digitales / ventajas / vínculos)", keywords: ["plataformas", "ventajas", "vínculos"] },
            { point: "Replaces 'muy malas / se sienten tristes' with nuanced emotional/psychological lexis (equilibrio emocional / autoestima / comparación)", keywords: ["equilibrio emocional", "autoestima", "comparación"] },
            { point: "Uses nominalisation or elevated verb phrasing (La exposición constante / alimenta / merma / entrañan)", keywords: ["exposición", "idealizadas", "merma", "entrañan"] },
            { point: "Deploys accurate 'de ahí que + subjunctive' (resulte / deban / acompañen)", keywords: ["de ahí que", "resulte", "acompañen"] },
            { point: "Adds critical nuance to the parental role (active guidance vs mere prohibition)", keywords: ["uso responsable", "familias", "prohibirlo", "prioritario"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No meaningful upgrade or remains basic B1 Spanish." },
            { band: "1–2", marks: [1, 2], descriptor: "Swaps a few adjectives but retains repetitive B1 syntax (`pero`, `muy`, `cosas`) or introduces major subjunctive errors." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear B2 improvement with stronger connectors and vocabulary, though missing `de ahí que + subj.` or nuanced framing." },
            { band: "5–6", marks: [5, 6], descriptor: "Effortless Band 11–12 C1 prose: seamless concessive frame, rich nominalisation and psychological lexis, accurate `de ahí que + subjuntivo`, and nuanced conclusion." },
          ],
          hints: [
            "Open with `Si bien es cierto que las plataformas digitales...` and pivot with `no obstante`.",
            "Replace *cuando miran fotos perfectas* using nominalisation: `La exposición constante a imágenes idealizadas...`.",
            "Finish with `; de ahí que resulte prioritario que...` (checking BOTH subjunctives!).",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "paper2-listening-strategies",
          strategy: "Paper 2 Listening Exam Protocol Design",
          marks: 6,
          question:
            "A Year 12 Spanish B classmate says: *«I understand almost every Spanish word when I read, yet I consistently score below 55% on Paper 2 Listening because I freeze on Latin American accents and write down wrong details.»*\n\nIn English, design a concrete **3-stage exam strategy** covering: (1) how to exploit the pre-reading windows, (2) how to defeat self-correction distractors and speaker swaps across Play 1 and Play 2, and (3) how to build ear resilience for Peninsular vs Latin American variation before exam day. [6 marks]",
          modelAnswer:
            "1. **Pre-reading windows (4 min / 2 min):** Never sit passively — underline time anchors (*antes*, *actualmente*), speaker names, and extreme qualifiers, then predict each gap's grammatical class (number, date, reason, attitude) so the ear filters selectively from second one.\n2. **Play 1 & Play 2 anti-distractor loop:** Treat early concrete figures or plans as provisional bait, jotting quick arrow shorthand (e.g., `mar → mié`) whenever pivot signals (*sin embargo, en realidad, al final, a decir verdad*) or negations (*ni lo uno ni lo otro*) overturn an initial option. Use Play 2 strictly to verify disputed turns, confirm who holds which opinion in dialogues, and fill any remaining blanks since there is no negative marking.\n3. **Regional variation training:** Build daily 5-minute exposure to contrasting Hispanophone podcasts (Peninsular *distinción* / `vosotros` alongside Latin American *seseo*, Rioplatense *sheísmo/voseo*, and high-frequency lexical swaps such as *ordenador/computadora* and *móvil/celular*), listening first without transcripts before replaying to verify missed pivots.",
          markScheme: [
            { point: "Explains active pre-reading: underlining time anchors / speaker names", keywords: ["anchors", "speaker names", "underline"] },
            { point: "Explains predicting answer grammatical category/type before audio plays", keywords: ["predict", "category", "grammatical", "filters"] },
            { point: "Explains tracking self-correction pivot connectors with shorthand arrows during Play 1", keywords: ["pivot", "sin embargo", "shorthand", "provisional"] },
            { point: "Explains Play 2 verification, speaker attribution checking, and leaving zero blanks", keywords: ["verify", "attribution", "negative marking", "blanks"] },
            { point: "Specifies phonological contrasts across regions (distinción vs seseo / Rioplatense sheísmo or voseo)", keywords: ["distinción", "seseo", "voseo", "sheísmo"] },
            { point: "Recommends targeted regional lexical awareness (ordenador/computadora, móvil/celular) and authentic podcast practice", keywords: ["podcasts", "computadora", "celular", "transcripts"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No actionable listening strategy provided." },
            { band: "1–2", marks: [1, 2], descriptor: "Generic advice ('listen carefully', 'watch Spanish TV') without IB Paper 2 structure or Spanish linguistic specifics." },
            { band: "3–4", marks: [3, 4], descriptor: "Covers pre-reading and pivot connectors accurately, though regional phonology/lexis or Play 1 vs Play 2 roles are underdeveloped." },
            { band: "5–6", marks: [5, 6], descriptor: "Comprehensive, exam-ready 3-stage Paper 2 Listening system naming exact Spanish pivots, two-play note coding, and Peninsular vs Latin American phonological/lexical features." },
          ],
          hints: [
            "Divide your answer into the 3 explicit stages asked in the prompt.",
            "Include specific Spanish pivot words (*sin embargo, en realidad*) and specific regional features (*seseo, distinción, voseo, computadora/ordenador*).",
          ],
        },
        {
          id: "7-paper1-paper2-skills-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "editing-calibracion-hl",
          strategy: "HL Criterion A/B/C Examiner Calibration",
          marks: 8,
          question:
            "[HL] Imagine you are an IB Spanish B HL examiner calibrating two 520-word Paper 1 scripts written for the same prompt (a *propuesta* to a municipal council requesting greener public transport):\n- **Script Alpha:** Selects *un blog*, uses friendly `tú` throughout, stays mostly accurate in present/past tenses with connectors like *primero, además, pero*, presents three one-sided arguments, and leaves 7 missing tildes + 3 gender slips (`la problema`).\n- **Script Beta:** Selects *una propuesta*, sustains formal `usted` with clear subheadings, includes `si bien es cierto que..., no obstante...`, `de ahí que + subjuntivo`, and a Type 2 `si`-clause, anticipates budget objections with a phased solution, and has only 1 minor slip.\n\nEvaluate both scripts across **Criteria A (12m), B (12m), and C (6m)**, assigning realistic IB markbands to each and prescribing **two concrete editing fixes** that would move Script Alpha up at least one full grade boundary. [8 marks]",
          modelAnswer:
            "**Criterion C (Conceptual Understanding / 6):** Script Alpha chose an inappropriate/poorly aligned format (*blog* + casual `tú`) for a municipal council policy pitch, capping it around **1–2/6** (or at best 2/6). Script Beta chose the optimal genre (*propuesta*), maintained consistent formal `usted`, and used executive subheadings, earning **5–6/6**.\n**Criterion A (Language / 12):** Script Alpha sits in **Band 7–8/12** — communicative B1–B2 control, yet predictable connectors, limited subjunctive range, and recurring accent/Greek `-ma` agreement slips (`la problema` → `el problema`) prevent top-band accuracy. Script Beta reaches **Band 11–12/12** through controlled, idiomatic C1 structures (`de ahí que + subj.`, hypothetical `si`-clause) and near-zero errors.\n**Criterion B (Message / 12):** Script Alpha's one-sided points sit in **Band 7–8/12**, whereas Script Beta reaches **Band 10–12/12** by critically anticipating fiscal objections and proposing a phased counter-solution.\n**Two high-impact fixes for Script Alpha:** (1) Run a **T-A-P-R decode** before drafting to lock the optimal formal genre, `usted` register, and a dedicated counter-argument paragraph; (2) reserve 5 minutes at the end for the **T-C-S-P-V sweep** to eliminate missing accents, fix Greek `-ma` masculine nouns, and swap repetitive B1 words for C1 connectors.",
          markScheme: [
            { point: "Calibrates Script Alpha Criterion C accurately low (1–2/6) due to blog + tú audience clash", keywords: ["1–2", "1-2", "audience clash", "capping"] },
            { point: "Calibrates Script Beta Criterion C in top band (5–6/6) for optimal genre, usted, and subheadings", keywords: ["5–6", "5-6", "optimal genre", "executive"] },
            { point: "Calibrates Script Alpha Criterion A in middle band (7–8 or 7–9/12) citing basic connectors & Greek -ma / accent errors", keywords: ["7–8", "7-8", "7–9", "predictable"] },
            { point: "Calibrates Script Beta Criterion A in top band (10–12 / 11–12) citing accurate C1 structures & near-zero slips", keywords: ["11–12", "10–12", "idiomatic", "near-zero"] },
            { point: "Contrasts Criterion B bands: Alpha one-sided (~7–8) vs Beta critical counter-argument / phased fiscal rebuttal (10–12)", keywords: ["fiscal", "phased", "rebuttal", "critically"] },
            { point: "Prescribes pre-writing T-A-P-R decoding to fix genre, register, and counter-argument balance", keywords: ["t-a-p-r", "decode", "dedicated counter-argument"] },
            { point: "Prescribes the 5-minute T-C-S-P-V sweep to eradicate accents and Greek -ma agreement errors", keywords: ["t-c-s-p-v", "greek", "eradicate", "masculine"] },
            { point: "Explicitly links lexical upgrading (swapping B1 connectors for C1 precision) to crossing grade boundaries", keywords: ["c1 connectors", "repetitive", "swap"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant calibration or comparison of the two scripts." },
            { band: "1–2", marks: [1, 2], descriptor: "States simply that Script Beta is better without using IB Criteria A, B, and C mark ranges." },
            { band: "3–4", marks: [3, 4], descriptor: "Compares scripts across some criteria accurately, though numerical markbands or concrete remedial protocols are incomplete." },
            { band: "5–6", marks: [5, 6], descriptor: "Clear, justified A/B/C calibration of both scripts with accurate band estimates and at least one actionable upgrade plan." },
            { band: "7–8", marks: [7, 8], descriptor: "Examiner-level calibration across Criteria A (12), B (12), and C (6), contrasting critical counter-argument and C1 control, plus both T-A-P-R and T-C-S-P-V prescriptions." },
          ],
          hints: [
            "Address Criteria C (out of 6), A (out of 12), and B (out of 12) explicitly for BOTH scripts with numerical bands.",
            "Highlight how anticipating fiscal objections pushes Script Beta into Band 10–12 on Criterion B.",
            "Tie your two remedial fixes to named frameworks (T-A-P-R before writing + T-C-S-P-V at the end).",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET: 8 high-rigour challenge questions (SL & HL)
  // ===========================================================================
  challenge: [
    {
      id: "7-paper1-paper2-skills-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Justify",
      guideRef: "paper2-reading-strategies",
      strategy: "Surgical Minimal Quote Extraction",
      question:
        "Read this dense Text C sentence:\n*«Pese a las millonarias inversiones en publicidad turística, los habitantes de Venecia y Barcelona coinciden en que la llegada descontrolada de visitantes encarece los alquileres y vacía los barrios históricos de comercio tradicional.»*\n\nStatement: **«El turismo masivo favorece la supervivencia de las tiendas de barrio.»** — **Falso.** Copy ONLY the exact **7-word verbatim Spanish phrase** that directly disproves this statement.",
      answer: {
        type: "text",
        accept: [
          "vacía los barrios históricos de comercio tradicional",
        ],
        display: "vacía los barrios históricos de comercio tradicional",
      },
      traps: [
        {
          spec: { type: "text", accept: ["encarece los alquileres"] },
          feedback: "*encarece los alquileres* concerns housing rent, NOT neighbourhood shops (*tiendas de barrio*)!",
        },
      ],
      solution: [
        "Ignore *encarece los alquileres* (rent, not local shops) and ignore the opening clause about tourism ad spending.",
        "The exact 7-word phrase contradicting *favorece la supervivencia de las tiendas de barrio* is: **`vacía los barrios históricos de comercio tradicional`**.",
      ],
      hints: [
        "Focus tightly on *tiendas de barrio* ('neighbourhood shops') — NOT housing rent!",
        "Look at the final clause starting with the verb `vacía` ('empties').",
      ],
    },
    {
      id: "7-paper1-paper2-skills-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper2-reading-strategies",
      strategy: "C1 Lexical Synonym Lock",
      question:
        "Read this Text C extract: *«Si la transición energética no contempla ayudas directas para proteger a las familias rurales, corre el riesgo de ahondar la brecha socioeconómica entre el campo y la capital.»* Copy the exact Spanish **infinitive verb** meaning **«profundizar / agravar»**.",
      answer: { type: "text", accept: ["ahondar"], display: "ahondar" },
      traps: [
        { spec: { type: "text", accept: ["contempla"] }, feedback: "`contempla` is conjugated (not infinitive) and means 'takes into account / considers'." },
        { spec: { type: "text", accept: ["corre"] }, feedback: "`corre` is part of the idiom *correr el riesgo de* ('to run the risk of'), not 'deepen/worsen'." },
      ],
      solution: [
        "Part-of-speech lock: we need an infinitive verb meaning 'to deepen / intensify'.",
        "**`ahondar`** (from *hondo* = deep) literally means 'to deepen' a gap or divide.",
      ],
      hints: [
        "Look for the only infinitive verb in the sentence.",
        "Spot the adjective *hondo* ('deep') hidden inside the verb!",
      ],
    },
    {
      id: "7-paper1-paper2-skills-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "paper2-listening-strategies",
      strategy: "Triple-Number Listening Pivot",
      question:
        "Listening transcript (Track C radio documentary from Quito): *«La reserva comunitaria comenzó en 2012 protegiendo cuatrocientas hectáreas de bosque nublado. Cinco años después lograron duplicar esa superficie; sin embargo, un incendio forestal en 2021 arrasó ciento cincuenta hectáreas que aún están en proceso de reforestación.»* How many **hectares of undamaged cloud forest** remain intact today (calculated from the speaker's figures)? Type a single number.",
      answer: { type: "number", value: 650, display: "650" },
      traps: [
        { spec: { type: "number", value: 800 }, feedback: "800 hectares was the peak after doubling 400 — don't forget to subtract the 150 hectares destroyed by the 2021 fire!" },
        { spec: { type: "number", value: 250 }, feedback: "Careful! You subtracted 150 from the initial 400 instead of from the doubled area (`400 × 2 = 800`, then `800 − 150 = 650`)." },
      ],
      solution: [
        "2012 baseline: `400` hectares.",
        "2017 (`duplicar esa superficie`): `400 × 2 = 800` hectares.",
        "After the 2021 fire (`arrasó 150 hectáreas`): `800 − 150 =` **650** hectares remaining intact.",
      ],
      hints: [
        "Track every numerical shift in order: start at 400, apply `duplicar`, then apply the fire loss.",
        "Compute `400 × 2 − 150`.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "editing-calibracion-hl",
      strategy: "Type 3 Pluperfect Subjunctive Proofreading",
      question:
        "[HL] Fix the erroneous verb in this Type 3 counterfactual `si`-clause: *«Si el ayuntamiento **habría** consultado a los vecinos antes de aprobar el plan, se habrían evitado las manifestaciones.»* Type only the corrected auxiliary verb (`-ra` or `-se` form).",
      answer: { type: "text", accept: ["hubiera", "hubiese"], display: "hubiera" },
      traps: [
        { spec: { type: "text", accept: ["habría"] }, feedback: "Never use conditional `habría` directly inside a `si`-clause — use pluperfect subjunctive **`hubiera`** (or `hubiese`)!" },
        { spec: { type: "text", accept: ["había"] }, feedback: "`había` is pluperfect indicative; a past counterfactual `si`-clause requires pluperfect **subjunctive** (`hubiera`)." },
      ],
      solution: [
        "Type 3 `si`-clause structure: `Si + hubiera/hubiese + participio → habría + participio`.",
        "Replace `habría` with **`hubiera`** (or **`hubiese`**).",
      ],
      hints: [
        "The conditional auxiliary `habría` belongs ONLY in the main clause, never directly after `si`.",
        "Give the 3rd-person singular imperfect subjunctive of `haber`.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "editing-calibracion-hl",
      strategy: "Concessive Mood Nuance (Aunque + Subjunctive)",
      question:
        "[HL] Complete this Band 11–12 hypothetical concession with the exact **present subjunctive** form of **`surgir`**: *«Aunque _______ dificultades económicas durante el primer año, el programa de becas seguirá adelante.»* Type one Spanish verb.",
      answer: { type: "text", accept: ["surjan"], display: "surjan" },
      traps: [
        { spec: { type: "text", accept: ["surgen"] }, feedback: "`surgen` is indicative (known present fact); here we refer to uncertain future difficulties (*durante el primer año... seguirá*), requiring subjunctive **`surjan`**!" },
        { spec: { type: "text", accept: ["surgan"] }, feedback: "Watch Spanish orthography! Verbs ending in `-gir` change `g → j` before `a` to keep the `/x/` sound: **`surjan`**." },
      ],
      solution: [
        "Hypothetical/future concession with `aunque` triggers the **subjunctive**.",
        "`surgir` undergoes the `g → j` spelling change before `-a`: 3rd-person plural present subjunctive is **`surjan`** (agreeing with plural subject `dificultades económicas`).",
      ],
      hints: [
        "Notice the future tense `seguirá adelante` — the difficulties are hypothetical/future, so use present subjunctive.",
        "Remember the orthographic shift for `-gir` verbs (`elegir → elijan`, `surgir → ?`).",
      ],
    },
    {
      id: "7-paper1-paper2-skills-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      guideRef: "paper1-prompt-decoding",
      strategy: "Genre Differentiation Under Ambiguous Prompts",
      marks: 6,
      question:
        "A Paper 1 prompt about youth over-reliance on AI homework tools offers **three** plausible text types: **un artículo de opinión**, **un editorial**, and **un discurso**. Imagine the specific scenario says: *«El periódico escolar quiere fijar su postura institucional sobre el uso ético de la inteligencia artificial en los trabajos académicos.»*\n\nIn English, evaluate all three options — explaining which **single** choice unlocks Criterion C Band 5–6, why the second is merely *acceptable* (Band 3–4), why the third is *inappropriate* here (Band 1–2), and listing **three concrete Spanish genre features** required for the optimal choice. [6 marks]",
      modelAnswer:
        "1. **Most Appropriate (Band 5–6): *un editorial*** — the prompt asks the publication itself to declare its official collective stance (*postura institucional*), which is the exact purpose of a newspaper editorial.\n2. **Acceptable (Band 3–4): *un artículo de opinión*** — it also appears in print media and debates the topic persuasively, yet it communicates one named journalist's personal viewpoint rather than the collective institutional policy of the paper.\n3. **Inappropriate (Band 1–2): *un discurso*** — a speech is an oral address delivered live to a physical room, clashing directly with the written press channel specified.\n4. **Three Spanish conventions for *un editorial*:** (i) an authoritative headline (*titular*) with **no individual byline**, (ii) collective first-person plural voice (**«Desde esta redacción consideramos que...»** / **«nuestra comunidad educativa»**), and (iii) formal, persuasive policy recommendations ending with a cohesive collective call for ethical standards.",
      markScheme: [
        { point: "Selects editorial as single optimal choice linked to collective institutional stance", keywords: ["collective", "official", "declares", "publication itself"] },
        { point: "Classifies opinion article as merely acceptable because it voices an individual signed columnist", keywords: ["named journalist", "personal viewpoint", "signed", "individual"] },
        { point: "Classifies speech as inappropriate due to oral/live performance channel mismatch", keywords: ["oral", "live", "physical room", "channel"] },
        { point: "Names authentic editorial convention 1: headline with no personal byline/signature", keywords: ["byline", "headline", "titular", "signature"] },
        { point: "Names authentic editorial convention 2: institutional plural 'nosotros' voice (Desde esta redacción...)", keywords: ["redacción", "nosotros", "plural voice"] },
        { point: "Names authentic editorial convention 3: formal persuasive recommendations / ethical call", keywords: ["recommendations", "ethical standards", "persuasive"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Fails to rank the three text types or misunderstands the scenario." },
        { band: "1–2", marks: [1, 2], descriptor: "Identifies one text type correctly without clear Criterion C justification or conventions." },
        { band: "3–4", marks: [3, 4], descriptor: "Ranks all three genres logically and explains the main difference, though fewer than three concrete Spanish editorial conventions are specified." },
        { band: "5–6", marks: [5, 6], descriptor: "Precision Criterion C ranking (5–6 vs 3–4 vs 1–2) contrasting collective vs personal vs oral channels, plus three authentic Spanish editorial conventions." },
      ],
      hints: [
        "Focus on the clue *postura institucional* inside the scenario — who is speaking?",
        "Rank each of the three choices explicitly as Optimal (5–6), Acceptable (3–4), and Inappropriate (1–2).",
        "Include Spanish phrasing like `Desde esta redacción consideramos que...` and mention the absence of a personal byline.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "paper2-reading-strategies",
      strategy: "HL Text C Subtle Irony, Inference & Referent Mastery",
      marks: 6,
      question:
        "[HL] Read this Text C commentary extract:\n*«Resulta enternecedor observar cómo ciertas multinacionales tecnológicas celebran el Día de la Tierra cambiando el color de su logotipo durante veinticuatro horas, mientras sus centros de datos consumen tanta electricidad como una ciudad mediana. No sorprende que muchos jóvenes tilden **esta maniobra** de mero maquillaje verde; **lo** que reclaman ya no son eslóganes efímeros, sino auditorías independientes.»*\n\nAnswer all 3 parts in English (quoting brief Spanish cues where relevant):\n(a) Explain how the adjective **«enternecedor»** ('heartwarming') functions ironically here (2m).\n(b) State precisely what **«esta maniobra»** and neutral **«lo»** refer to (2m).\n(c) Infer the author's view on corporate environmental slogans versus accountability, citing one exact Spanish phrase as evidence (2m). [6 marks]",
      modelAnswer:
        "(a) **«enternecedor»** literally praises something as touching or heartwarming, yet the author deploys it with biting sarcasm to mock tokenistic greenwashing — exposing the glaring hypocrisy between changing a logo colour for one day and massive energy consumption by data centres.\n(b) **«esta maniobra»** refers specifically to tech multinationals temporarily recolouring their logo on Earth Day to look eco-friendly. Neutral **«lo»** (in *lo que reclaman*) refers to the substantive action young people actually demand: independent audits (**«auditorías independientes»**).\n(c) The writer clearly dismisses symbolic PR stunts as superficial greenwashing (**«mero maquillaje verde»** / **«eslóganes efímeros»**) and strongly endorses verifiable external oversight (**«auditorías independientes»**).",
      markScheme: [
        { point: "Explains ironic contrast of 'enternecedor' (surface praise mocking corporate tokenism)", keywords: ["sarcasm", "mock", "tokenistic", "greenwashing"] },
        { point: "Links irony to contradiction between 24-hour logo change and huge data-centre electricity demand", keywords: ["hypocrisy", "logo", "electricity", "data centres"] },
        { point: "Identifies referent of 'esta maniobra' as temporarily recolouring corporate logos on Earth Day", keywords: ["recolouring", "temporarily", "earth day"] },
        { point: "Identifies referent of neutral 'lo' as the real demand — independent audits", keywords: ["independent audits", "auditorías independientes", "substantive"] },
        { point: "Infers author rejects superficial PR gestures while supporting verifiable accountability", keywords: ["dismisses", "superficial", "oversight", "verifiable"] },
        { point: "Cites exact Spanish lexical proof ('mero maquillaje verde' or 'eslóganes efímeros')", keywords: ["maquillaje verde", "eslóganes efímeros"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Misreads irony literally or omits referents." },
        { band: "1–2", marks: [1, 2], descriptor: "Grasps general environmental topic but misses sarcasm in *enternecedor* or gives inaccurate referents." },
        { band: "3–4", marks: [3, 4], descriptor: "Recognises irony and identifies at least one referent accurately, with partial textual support." },
        { band: "5–6", marks: [5, 6], descriptor: "Incisive HL inference unpacking ironic understatement, pinpoint identification of both referents, and exact Spanish lexical proof." },
      ],
      hints: [
        "Contrast the warm surface meaning of *enternecedor* with the harsh reality after *mientras*.",
        "For *lo que reclaman*, read the parallel *no son X, sino Y* structure at the end of the extract.",
      ],
    },
    {
      id: "7-paper1-paper2-skills-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Synthesize",
      guideRef: "editing-calibracion-hl",
      strategy: "Band 11–12 HL Counter-Argument & Synthesis Paragraph",
      marks: 8,
      question:
        "[HL] Paper 1 Extended Craft Task: Write a single cohesive **counter-argument & synthesis paragraph in Spanish** (~110–140 words) for an HL **450–600w *propuesta*** addressed to a regional education ministry (*Consejería de Educación*) arguing for mandatory financial-and-digital literacy in secondary schools.\n\nTo achieve Band 10–12 calibration, your Spanish paragraph MUST accurately integrate:\n1. Formal institutional register (`usted`/impersonal `se`),\n2. A concessive counter-argument conceding curriculum crowding (*Si bien es cierto que...*), followed by a strong rebuttal (*no obstante / sin embargo*),\n3. **`de ahí que` + subjuntivo**,\n4. A **Type 2 `si`-clause** (imperfect subjunctive + conditional) OR **`cuyo/a/os/as`**,\n5. Authentic C1 lexis and zero B1 fillers (`muy`, `cosa`, `bueno/malo`). [8 marks]",
      modelAnswer:
        "Si bien es cierto que varios sectores docentes advierten sobre la saturación del currículo actual y el coste logístico de incorporar nuevas asignaturas, no obstante resulta arriesgado posponer una formación que repercute directamente en la autonomía juvenil. Numerosos adolescentes gestionan suscripciones digitales, datos personales y microcréditos sin contar con herramientas críticas, lo cual incrementa su vulnerabilidad ante el fraude en línea; de ahí que se recomiende integrar la alfabetización financiera y digital de manera transversal dentro de materias ya existentes, cuyos contenidos pueden actualizarse sin sobrecargar el horario lectivo. Si su Consejería impulsara un programa piloto el próximo curso, los centros públicos lograrían reducir la desigualdad informativa y preparar ciudadanos plenamente responsables a largo plazo.",
      markScheme: [
        { point: "Opens with a realistic counter-argument using 'Si bien es cierto que' (curriculum crowding / logistical cost)", keywords: ["si bien es cierto", "saturación", "currículo", "coste"] },
        { point: "Pivots smoothly to a nuanced rebuttal (no obstante / resulta arriesgado)", keywords: ["no obstante", "arriesgado", "posponer", "autonomía"] },
        { point: "Maintains formal institutional register (impersonal 'se' / formal 'su Consejería')", keywords: ["se recomiende", "su consejería", "programas", "centros públicos"] },
        { point: "Deploys accurate 'de ahí que + subjunctive' (e.g., de ahí que se recomiende / sea)", keywords: ["de ahí que", "recomiende", "resulte"] },
        { point: "Integrates accurate relative 'cuyo/a/os/as' OR 'lo cual' with correct agreement", keywords: ["cuyos", "lo cual"] },
        { point: "Integrates accurate Type 2 si-clause (imperfect subjunctive + conditional: impulsara... lograrían)", keywords: ["impulsara", "lograrían", "adoptara", "podrían"] },
        { point: "Proposes a realistic practical compromise (transversal integration without overloading timetable)", keywords: ["transversal", "sobrecargar", "horario", "piloto"] },
        { point: "Sustains rich C1 lexical precision with zero B1 fillers (vulnerabilidad, alfabetización, desigualdad informativa)", keywords: ["vulnerabilidad", "alfabetización", "desigualdad", "repercute"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Off-task or incomprehensible Spanish." },
        { band: "1–2", marks: [1, 2], descriptor: "Basic B1 opinion statement with no real counter-argument, informal register slips, or missing required C1 structures." },
        { band: "3–4", marks: [3, 4], descriptor: "Addresses the prompt in B2 Spanish with partial concession, but misses `de ahí que + subj.` or contains major mood/agreement errors." },
        { band: "5–6", marks: [5, 6], descriptor: "Strong B2+/C1 formal paragraph with clear counter-argument and most target structures accurate, though minor register or stylistic stiffness remains." },
        { band: "7–8", marks: [7, 8], descriptor: "Exemplary Band 11–12 HL Spanish: seamless formal register, incisive curriculum rebuttal, accurate `de ahí que + subj.`, `cuyos`/`lo cual`, Type 2 `si`-clause, and natural C1 lexical control." },
      ],
      hints: [
        "Concede curriculum overload first (`Si bien es cierto que... la saturación del currículo...`) before offering transversal integration as your smart synthesis.",
        "Double-check your verb mood right after `de ahí que` (must be subjunctive!) and after `si` (imperfect subjunctive `-ra/-se`, paired with conditional `-ría`).",
        "Run a quick mental T-C-S-P-V sweep on every `tildes` (`currículo`, `autonomía`, `línea`, `ahí`, `lograrían`) before submitting!",
      ],
    },
  ],
};
