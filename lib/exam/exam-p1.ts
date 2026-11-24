import type { ExamPaper, MarkBand } from "../types.ts";

const P1_SL_MARKBANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor:
      "Equivalent IB Paper 1: 0/30 (Criterion A: 0/12 · Criterion B: 0/12 · Criterion C: 0/6). The response does not reach a standard described by the descriptors below or does not address the prompt.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor:
      "Equivalent IB Paper 1: 1–9/30 (Criterion A: 1–3/12 · Criterion B: 1–3/12 · Criterion C: 1–2/6). Basic, repetitive IGCSE-level vocabulary with frequent agreement/tense errors that impede communication; ideas are brief or below the 250-word SL floor; inappropriate text type or register.",
    indicators: [
      "Limited mostly to present indicative and basic connectors (y, pero, porque).",
      "Missing core structural conventions of the chosen text type.",
    ],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor:
      "Equivalent IB Paper 1: 10–18/30 (Criterion A: 4–6/12 · Criterion B: 4–6/12 · Criterion C: 3–4/6). Generally understandable Spanish with some complex attempts (e.g. occasional subjunctive or past-tense contrasts), relevant ideas covering most prompt elements, and an acceptable text type with partially consistent register.",
    indicators: [
      "Addresses the prompt clearly within ~220–400 words, though some arguments remain general.",
      "Mostly consistent tú/usted register with a few slips in tone or formatting.",
    ],
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor:
      "Equivalent IB Paper 1: 19–24/30 (Criterion A: 7–9/12 · Criterion B: 7–9/12 · Criterion C: 5/6). Effective, varied B2 Spanish with accurate tense/mood control (subjunctive, conditionals, por/para), well-developed paragraphs with clear examples, and an appropriate text type showing strong Audience/Purpose awareness.",
    indicators: [
      "Hits the 250–400 word SL target comfortably with cohesive paragraphing.",
      "Most text-type conventions (headline/salutation, subheadings, closing) are applied accurately.",
    ],
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor:
      "Equivalent IB Paper 1: 25–30/30 (Criterion A: 10–12/12 · Criterion B: 10–12/12 · Criterion C: 6/6). Idiomatic, accurate B2–C1 Spanish with natural subjunctive/concessive structures and orthography; perceptive, fully developed ideas anchored in Hispanic cultural context; optimal text type with effortless command of Audience, Context, Purpose, Meaning, and Variation.",
    indicators: [
      "Uses authentic B2–C1 discourse markers (no obstante, dado que, cabe destacar, de ahí que + subj.).",
      "Every convention and register nuance matches the exact target audience from opening line to sign-off.",
    ],
  },
];

const P1_HL_MARKBANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor:
      "Equivalent IB HL Paper 1: 0/30 (Criterion A: 0/12 · Criterion B: 0/12 · Criterion C: 0/6). Does not reach a standard described below.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor:
      "Equivalent IB HL Paper 1: 1–9/30 (Criterion A: 1–3/12 · Criterion B: 1–3/12 · Criterion C: 1–2/6). Narrow lexical range and frequent errors obscure complex arguments; severely under the 450-word HL minimum; inappropriate text type or register mismatch.",
    indicators: [
      "Lacks counter-arguments or nuanced synthesis expected at HL.",
      "Text-type conventions and formal/semi-formal register are largely absent.",
    ],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor:
      "Equivalent IB HL Paper 1: 10–18/30 (Criterion A: 4–6/12 · Criterion B: 4–6/12 · Criterion C: 3–4/6). Clear B2 communication with occasional C1 attempts; relevant points developed across paragraphs, though counter-arguments or Hispanic cultural specificity remain uneven; acceptable text type.",
    indicators: [
      "Approaches 450 words with logical organisation but occasional slips in subjunctive or accentuation.",
      "Recognises Audience and Purpose, though tone fluctuates slightly.",
    ],
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor:
      "Equivalent IB HL Paper 1: 19–24/30 (Criterion A: 7–9/12 · Criterion B: 7–9/12 · Criterion C: 5/6). Varied, precise B2–C1 expression including accurate subjunctive, relative pronouns, and concessive frames; well-reasoned arguments weighing multiple perspectives within 450–600 words; strong text-type execution.",
    indicators: [
      "Sustains critical analysis across 450–600 words without padding or repetition.",
      "Strong command of formal/semi-formal register and authentic conventions.",
    ],
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor:
      "Equivalent IB HL Paper 1: 25–30/30 (Criterion A: 10–12/12 · Criterion B: 10–12/12 · Criterion C: 6/6). Sophisticated, idiomatic C1 Spanish with seamless control of complex syntax (si bien es cierto que, de ahí que + subj., cuyo/a, Type 2/3 conditionals); compelling, balanced evaluation anchored in Hispanophone realities; optimal text type demonstrating full mastery of all 5 Conceptual Understandings.",
    indicators: [
      "Integrates explicit counter-arguments and nuanced rebuttal naturally.",
      "Impeccable Hispanic orthography, register precision, and purposeful rhetorical cohesion throughout 450–600 words.",
    ],
  },
];

export const paper: ExamPaper = {
  id: "exam-p1",
  title: "IB Spanish B Paper 1 Mock — Productive Skills (Writing)",
  level: "SL",
  paperType: "Paper 1 · Productive Writing (SL 250–400w / HL 450–600w · 30m)",
  calculator: false,
  minutes: 90,
  questions: [
    // ===================== PART A: PROMPT DECODING, TEXT TYPES & REGISTER (Q01–Q08) =====================
    {
      id: "exam-p1-q01",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper1-prompt-decoding",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Justify",
      strategy: "Map Audience (elected official) + Purpose (persuade directly) to the single MOST appropriate text type",
      question:
        "**Paper 1 Prompt Decoding (Criterion C):**\n\n*«Los carriles bici de tu barrio en Valencia terminan abruptamente junto a una avenida peligrosa. Quieres dirigirte directamente al concejal de Movilidad del ayuntamiento para exponer el problema y solicitar una ampliación segura.»*\n\nText-type choices offered: **un diario personal · un artículo de opinión · una carta formal**.\n\nWhich choice is the single **MOST appropriate** text type and why?",
      options: [
        "Un diario personal, porque permite desahogarse con espontaneidad sin restricciones formales",
        "Un artículo de opinión, porque los concejales nunca leen correspondencia individual ciudadana",
        "Una carta formal, porque se dirige directamente a una autoridad municipal con registro de «usted»",
        "Un artículo de opinión, porque el formato exige saludos personales y despedida «Atentamente»",
      ],
      answerIndex: 2,
      hints: [
        "Notice the phrase «dirigirte directamente al concejal de Movilidad del ayuntamiento» — you are communicating directly with a named institutional official.",
        "Between the three choices, one is Private/Personal (inappropriate), one is Mass Media (acceptable at best, indirect), and one is Professional direct correspondence.",
      ],
      explanation:
        "Because the prompt asks you to address the municipal mobility councillor directly to request official action, «una carta formal» is the single most appropriate text type (using institutional headings, formal «usted» register, clear problem-solution structure, and «Atentamente»). «Un artículo de opinión» addresses the general public rather than the councillor directly (acceptable at best), and «un diario personal» is private and completely inappropriate.",
    },
    {
      id: "exam-p1-q02",
      kind: "mcq",
      topicId: "6-grammar-text-types",
      guideRef: "tipos-de-texto-convenciones",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Match private, introspective Audience & Purpose to Personal text-type conventions",
      question:
        "**Paper 1 Prompt Decoding (Audience & Context):**\n\n*«Acabas de completar tu primera semana de intercambio escolar en Salamanca. Aunque te fascina la ciudad, has sentido nostalgia y cierto choque cultural. Quieres reflexionar en privado sobre tus emociones y fijarte metas personales para el resto del mes.»*\n\nText-type choices offered: **un diario personal · un informe oficial · un editorial**.\n\nWhich text type is the **MOST appropriate**?",
      options: [
        "Un diario personal, por su carácter íntimo, fechado y orientado a la autorreflexión",
        "Un informe oficial, por sus apartados numerados y tono estrictamente objetivo",
        "Un editorial, por su voz institucional en primera persona del plural para la prensa",
        "Un informe oficial, por su capacidad para expresar sentimientos privados con humor coloquial",
      ],
      answerIndex: 0,
      hints: [
        "Look at the explicit Audience cue in the prompt: «reflexionar en privado sobre tus emociones».",
        "Eliminate Professional and Mass Media genres designed for institutional or public readership.",
      ],
      explanation:
        "«Un diario personal» matches a private, introspective purpose («reflexionar en privado»), featuring a date/place header, candid first-person voice, emotional honesty, and personal goals. «Un informe oficial» demands objective institutional analysis, while «un editorial» (masculine = newspaper editorial; feminine «la editorial» = publishing house) expresses a newspaper's collective stance on a public issue.",
    },
    {
      id: "exam-p1-q03",
      kind: "short",
      topicId: "6-grammar-text-types",
      guideRef: "tipos-de-texto-convenciones",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      strategy: "Verify formal singular address pronoun for Professional text types",
      question:
        "**Register & Variation Check:**\n\nIn a Paper 1 *propuesta* addressed to *la directora de una ONG medioambiental en Bogotá*, which Spanish second-person singular subject pronoun must you use consistently to maintain formal register? Write **one word** in Spanish.",
      answer: {
        type: "text",
        accept: ["usted", "Ud.", "Vd."],
        display: "usted",
      },
      traps: [
        {
          spec: { type: "text", accept: ["tú", "tu"] },
          feedback: "«Tú» is informal singular — using it with an NGO director in a formal proposal damages Criterion C (register and Audience).",
        },
        {
          spec: { type: "text", accept: ["vos"] },
          feedback: "«Vos» is an informal regional pronoun — formal proposals across Spain and Latin America require «usted».",
        },
        {
          spec: { type: "text", accept: ["ustedes"] },
          feedback: "Careful: «ustedes» is plural, whereas the prompt specifies a single recipient («la directora»).",
        },
      ],
      hints: [
        "Think about the singular formal pronoun in Spanish used when writing to an authority figure you do not know personally.",
        "It pairs with third-person singular verb forms (e.g. «espero que ___ considere esta iniciativa»).",
      ],
      solution: [
        "Identify the recipient: *la directora de una ONG* (one institutional authority figure, not a close peer).",
        "Select the formal singular Spanish address pronoun: **usted** (paired with third-person singular verbs and possessives *su / sus* and object pronoun *le*).",
      ],
      commonError: "Switching midway from «usted» in the salutation to «tú» in the closing paragraph, which immediately lowers Criterion C.",
    },
    {
      id: "exam-p1-q04",
      kind: "mcq",
      topicId: "6-grammar-text-types",
      guideRef: "tipos-de-texto-convenciones",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      strategy: "Recognise evaluative Mass Media genres (reseña) vs informational/administrative genres",
      question:
        "**Paper 1 Text-Type Distinction:**\n\n*«Has asistido al estreno de un documental mexicano sobre música indígena contemporánea. El portal cultural de tu colegio te pide evaluar sus puntos fuertes y débiles y recomendar si merece la pena verlo.»*\n\nText-type choices offered: **un folleto informativo · una carta al director · una reseña**.\n\nWhich choice best satisfies Audience and Purpose, and what key conventions must it include?",
      options: [
        "Un folleto informativo con horarios de taquilla, mapa del cine y normas de acceso",
        "Una carta al director con dirección postal completa, queja formal y «Atentamente»",
        "Un folleto informativo con eslogan publicitario breve sin emitir ninguna crítica negativa",
        "Una reseña con título llamativo, breve sinopsis sin destripes, análisis equilibrado y valoración final",
      ],
      answerIndex: 3,
      hints: [
        "Look at the core Purpose verbs: «evaluar sus puntos fuertes y débiles y recomendar si merece la pena verlo».",
        "Match that evaluative cultural critique for a school portal to the exact Spanish name for a review.",
      ],
      explanation:
        "«Una reseña» (cultural review) is designed specifically to summarise a film, book, or exhibition briefly without spoiling the ending, evaluate artistic strengths and weaknesses critically, and conclude with a clear recommendation or rating. A brochure («folleto») promotes/informs rather than critiquing balanced flaws, and a letter to the editor («carta al director») responds to a public news controversy.",
    },
    {
      id: "exam-p1-q05",
      kind: "short",
      topicId: "6-grammar-text-types",
      guideRef: "estilo-c1-conectores-hl",
      difficulty: "core",
      level: "HL",
      commandTerm: "State",
      strategy: "Deploy C1 subjunctive-governing consequence connectors (de ahí que + subjuntivo)",
      question:
        "**[HL] Upgrading Cohesion to Band 10–12 (Criterion A):**\n\nComplete this formal Paper 1 sentence with the **three-word** Spanish consecutive connector (meaning *«hence / that is why»*) that obligatorily triggers the subjunctive verb *«decidan»*:\n\n«El precio del alquiler en los centros históricos resulta inasumible para los jóvenes; ___ ___ ___ muchos decidan trasladarse a la periferia.»\n\nType ONLY the three missing Spanish words (with accurate accent mark).",
      answer: {
        type: "text",
        accept: ["de ahí que"],
        display: "de ahí que",
      },
      traps: [
        {
          spec: { type: "text", accept: ["por lo tanto", "por consiguiente", "así que", "por eso"] },
          feedback: "Those connectors govern the INDICATIVE («deciden»), not the subjunctive («decidan»). You need the three-word C1 connector that ALWAYS takes the subjunctive!",
        },
        {
          spec: { type: "text", accept: ["a pesar de que"] },
          feedback: "«A pesar de que» expresses concession (although), whereas this sentence expresses a logical consequence.",
        },
      ],
      hints: [
        "Notice the verb following the blank is in the present subjunctive: «decidan».",
        "Think of the high-band three-word connector starting with «de ... que» that introduces a logical consequence.",
        "Remember the accent mark on the middle adverb («there»): «ahí».",
      ],
      solution: [
        "Recognise the logical relationship: unaffordable rents → consequence (young people move to the suburbs).",
        "Because the following verb «decidan» is in the present subjunctive, indicative connectors like *por lo tanto* or *por eso* cannot fit.",
        "Insert **de ahí que**, which obligatorily governs the subjunctive and signals Band 10–12 C1 cohesion.",
      ],
      commonError: "Omitting the written accent on «ahí» (*de ahi que*) or following «de ahí que» with indicative «deciden».",
    },
    {
      id: "exam-p1-q06",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper1-prompt-decoding",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      strategy: "Distinguish IB Paper 1 Criteria A (12), B (12), and C (6) in examiner diagnosis",
      question:
        "**Paper 1 Examiner Calibration:**\n\nA student selects *un folleto* (brochure) to inform new international students about healthy habits and mental-health support at a school in Quito. Their Spanish grammar, subjunctive accuracy, and vocabulary are strong (330 words), **but** they write one unbroken four-paragraph academic essay with no catchy slogan, no bulleted advice boxes, no subheadings, and no contact call to action.\n\nWhich IB Paper 1 criterion will suffer the sharpest penalty?",
      options: [
        "Criterion A — Language (12 marks), because brochures forbid complex subjunctive verbs",
        "Criterion C — Conceptual Understanding (6 marks), because text-type conventions and Audience fit are neglected",
        "Criterion B — Message (12 marks), because 330 words falls below the SL Paper 1 minimum word count",
        "Criterion A — Language (12 marks), because every brochure must be written strictly in the past tense",
      ],
      answerIndex: 1,
      hints: [
        "Check the SL Paper 1 word-count zone first: 330 words sits squarely inside 250–400 words.",
        "Ask which criterion evaluates text-type conventions, formatting for the target Audience, and Purpose.",
      ],
      explanation:
        "Criterion C — Conceptual Understanding (6 marks) specifically assesses adherence to text-type conventions, register, tone, and audience design. Turning a brochure («folleto») into an unbroken academic essay leaves readers without scannable headings, slogan, or call to action, capping Criterion C even when Criterion A language quality is high and the 330-word length sits comfortably inside the 250–400 SL band.",
    },
    {
      id: "exam-p1-q07",
      kind: "short",
      topicId: "7-paper1-paper2-skills",
      guideRef: "editing-calibracion-hl",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      strategy: "Execute the 5-minute HL proofreading sweep: WEIRDO subjunctive + c→qu orthographic shift",
      question:
        "**[HL] Proofreading Sweep (Criterion A Precision):**\n\nSpot and fix the single verb mood/spelling error in this HL Paper 1 sentence:\n\n*«Es fundamental que las autoridades educativas buscan soluciones reales contra la brecha digital en las zonas rurales.»*\n\nType ONLY the **one** corrected Spanish verb form.",
      answer: {
        type: "text",
        accept: ["busquen"],
        display: "busquen",
      },
      traps: [
        {
          spec: { type: "text", accept: ["buscen"] },
          feedback: "Right mood, spelling slip! Verbs ending in «-car» change «c» to «qu» before «e» in the present subjunctive: «busquen».",
        },
        {
          spec: { type: "text", accept: ["buscan"] },
          feedback: "«Buscan» is present indicative — after «Es fundamental que» + a subject, Spanish requires the present subjunctive.",
        },
        {
          spec: { type: "text", accept: ["buscar"] },
          feedback: "The infinitive only works when there is no «que» + new subject («Es fundamental buscar...»). With «que las autoridades...», you need a conjugated subjunctive verb.",
        },
      ],
      hints: [
        "Check the trigger clause: «Es fundamental que» expresses necessity with a distinct subject («las autoridades educativas»).",
        "Conjugate «buscar» in the third-person plural present subjunctive.",
        "Watch the orthographic change required for «-car» verbs before the letter «e» («c → qu»).",
      ],
      solution: [
        "«Es fundamental que» + a conjugated subject («las autoridades educativas») triggers the present subjunctive.",
        "For «-ar» verbs, take the stem and add «-en» for «ellos/ellas»; because «buscar» ends in «-car», apply the spelling rule **c → qu** before «e» to preserve the hard /k/ sound.",
        "The corrected form is **busquen**.",
      ],
      commonError: "Writing *buscen* — forgetting that «-car» verbs shift to «-qu-» before «e» in the subjunctive (*expliquen, practiquen, busquen*).",
    },
    {
      id: "exam-p1-q08",
      kind: "short",
      topicId: "6-grammar-text-types",
      guideRef: "tipos-de-texto-convenciones",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      strategy: "Recall standard Professional formal letter sign-off conventions",
      question:
        "**Text-Type Convention Check (Carta formal):**\n\nYou are closing a formal letter addressed to *«Estimado señor director:»*. Write the standard **one-word** Spanish formal closing adverb beginning with the letter **A** (equivalent to *Yours sincerely / Yours faithfully*).",
      answer: {
        type: "text",
        accept: ["Atentamente", "atentamente"],
        display: "Atentamente",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Abrazos", "Un abrazo"] },
          feedback: "«Un abrazo / Abrazos» belongs to informal personal letters to friends or family, never to a formal institutional letter.",
        },
        {
          spec: { type: "text", accept: ["Adiós", "Adios"] },
          feedback: "«Adiós» is spoken/casual farewell, not a formal Spanish epistolary closing.",
        },
      ],
      hints: [
        "It is formed from the adjective «atento/a» + «-mente».",
        "It commonly appears either alone («___,») or inside «Le saluda ___,».",
      ],
      solution: [
        "In a Spanish *carta formal*, standard formal closings use «Atentamente,» (or «Le saluda atentamente,»).",
        "The required single adverb starting with A is **Atentamente**.",
      ],
      commonError: "Ending a formal Spanish letter with *Sinceramente* (an English calque rarely used as a standalone Spanish formal valediction) or *Un abrazo*.",
    },

    // ===================== PART B: FULL IB PAPER 1 PRODUCTIVE WRITING TASKS (Q09–Q15) =====================
    {
      id: "exam-p1-q09",
      kind: "written",
      topicId: "1-identidades",
      guideRef: "estilos-vida-salud",
      difficulty: "core",
      level: "SL",
      commandTerm: "Discuss",
      strategy: "SL Paper 1 Article (250–400w): catchy headline, engaging lead, subheadings, WEIRDO advice",
      marks: 10,
      question:
        "**[SL Paper 1 Task · Theme 1: Identidades · Target: 250–400 words]**\n\n*Official IB weighting: Criterion A Language (12) · Criterion B Message (12) · Criterion C Conceptual Understanding (6) — 30 IB marks total (10 self-marking checkpoints).*\n\n**Prompt:** Your international school in Madrid has noticed increasing sleep deprivation and academic anxiety among Year 12 students linked to late-night smartphone scrolling. Write a text for the **school magazine** discussing why digital overload affects teenage well-being and offering realistic habits to restore balance.\n\nChoose the **most appropriate** text type from these three options and write your full Spanish response:\n- **Un artículo**\n- **Un blog**\n- **Una carta formal**",
      modelAnswer:
        "**Pantallas encendidas, mentes agotadas: cómo recuperar el descanso en Bachillerato**\n*Por Lucía Navarro · Redacción escolar*\n\n¿Cuántas veces hemos mirado el móvil después de medianoche «solo cinco minutos» y hemos terminado durmiendo apenas cinco horas? En nuestro instituto de Madrid, el cansancio crónico se ha convertido en el compañero silencioso de demasiados alumnos del Diploma. Si bien la tecnología facilita la investigación académica y la conexión con nuestros amigos, su uso nocturno descontrolado está pasando una factura preocupante a nuestra salud mental.\n\n**El coste oculto de la hiperconexión**\nDormir mal no solo reduce la concentración en clase; también intensifica la irritabilidad y el estrés ante los exámenes. Según diversos estudios sobre bienestar juvenil, la luz azul inhibe la melatonina y mantiene el cerebro en estado de alerta constante. Además, la comparación continua en las redes sociales alimenta una presión estética y académica que impide desconectar emocionalmente al final del día.\n\n**Hábitos realistas para recuperar el equilibrio**\nNo se trata de demonizar el teléfono ni de volver al siglo pasado, sino de establecer límites sensatos. En primer lugar, es imprescindible que dejemos el dispositivo cargando fuera del dormitorio al menos cuarenta minutos antes de acostarnos. Asimismo, conviene que sustituyamos el desplazamiento infinito en redes por una rutina relajante, como leer unas páginas en papel, escuchar música tranquila o preparar la mochila del día siguiente. Finalmente, recomiendo que organicemos tardes de deporte al aire libre o charlas sin pantallas en la cafetería escolar para fortalecer vínculos reales.\n\n**Una decisión cotidiana**\nCuidar nuestro bienestar no significa renunciar al rendimiento escolar; al contrario, un descanso reparador potencia la memoria y la creatividad. Ojalá aprovechemos este trimestre para demostrar que controlamos nuestras herramientas digitales y no al revés. ¿Te animas a probar siete noches sin móvil en la mesilla?",
      markScheme: [
        {
          point: "[Criterion A — 1/4] Uses accurate present subjunctive after an impersonal or recommendation trigger (e.g. «es imprescindible que dejemos», «conviene que sustituyamos», «recomiendo que», «ojalá»).",
          keywords: ["es imprescindible que", "conviene que", "recomiendo que", "ojalá", "es necesario que", "es importante que"],
        },
        {
          point: "[Criterion A — 2/4] Deploys varied B2 discourse markers to structure contrast and progression (e.g. «si bien», «no obstante», «sin embargo», «además», «asimismo», «al contrario»).",
          keywords: ["si bien", "no obstante", "sin embargo", "asimismo", "al contrario", "en primer lugar"],
        },
        {
          point: "[Criterion A — 3/4] Uses precise Spanish thematic lexis on health and digital habits (e.g. «cansancio», «bienestar», «descanso», «desconectar», «hiperconexión», «melatonina»).",
          keywords: ["bienestar", "descanso", "desconectar", "cansancio", "hiperconexión", "melatonina"],
        },
        {
          point: "[Criterion A — 4/4] Sustains idiomatic, accurate Spanish phrasing and negative/contrastive structures (e.g. «no solo... sino», «no se trata de... sino de», «pasar factura»).",
          keywords: ["no se trata de", "no solo", "factura", "al revés", "sino de", "sino también"],
        },
        {
          point: "[Criterion B — 1/4] Clearly diagnoses the problem of late-night screen overuse and sleep loss among students.",
          keywords: ["medianoche", "dormir", "sueño", "pantallas", "móvil", "teléfono"],
        },
        {
          point: "[Criterion B — 2/4] Explains specific psychological or academic consequences (stress, irritability, concentration loss, social-media comparison).",
          keywords: ["estrés", "concentración", "comparación", "presión", "ansiedad", "irritabilidad"],
        },
        {
          point: "[Criterion B — 3/4] Offers at least two concrete, realistic digital-balance habits (device outside bedroom, offline evening routine, outdoor sport).",
          keywords: ["dormitorio", "rutina", "deporte", "límites", "mesilla", "aire libre"],
        },
        {
          point: "[Criterion B — 4/4] Reaches a balanced, persuasive conclusion linking rest directly to stronger learning and autonomy (within 250–400 words).",
          keywords: ["memoria", "creatividad", "equilibrio", "rendimiento", "herramientas digitales", "decisión"],
        },
        {
          point: "[Criterion C — 1/2] Selects the MOST appropriate text type (Un artículo) and applies clear journalistic conventions (headline, byline, subheadings, engaging rhetorical lead).",
          keywords: ["redacción", "por ", "¿cuántas veces", "coste oculto", "hábitos realistas", "decisión cotidiana"],
        },
        {
          point: "[Criterion C — 2/2] Maintains an inclusive semi-formal peer magazine voice (nosotros / tú) with direct reader engagement at opening and close.",
          keywords: ["¿te animas", "nuestros", "nuestro instituto", "compañeros", "aprovechemos", "controlamos"],
        },
      ],
      markbands: P1_SL_MARKBANDS,
      hints: [
        "Decode Audience & Purpose first: you are writing for a **school magazine** aimed at peers → **Un artículo** is MOST appropriate (semi-formal, engaging, with headline, byline, subheadings, and a lively hook). *Un blog* is only acceptable; *Una carta formal* is inappropriate.",
        "Plan 4 tight paragraphs totalling ~300 words: (1) catchy rhetorical hook + context, (2) why late-night phones harm sleep & mental health, (3) 2–3 practical habits using subjunctive triggers («es imprescindible que...», «recomiendo que...»), (4) upbeat closing challenge to readers.",
        "Check register consistency: keep a warm, semi-formal student-journalist voice (*nosotros* / *tú*) without slipping into stiff *usted* or text-message slang.",
      ],
      commonError: "Picking *una carta formal* for a school magazine or writing a bare list of tips without journalistic headline, byline, or subheadings (which caps Criterion C).",
    },
    {
      id: "exam-p1-q10",
      kind: "written",
      topicId: "2-experiencias",
      guideRef: "ocio-viajes-turismo",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      strategy: "SL Paper 1 Blog Post (250–400w): lively title, date/tags, narrative past tenses, interactive comment call",
      marks: 10,
      question:
        "**[SL Paper 1 Task · Theme 2: Experiencias · Target: 250–400 words]**\n\n*Official IB weighting: Criterion A Language (12) · Criterion B Message (12) · Criterion C Conceptual Understanding (6) — 30 IB marks total (10 self-marking checkpoints).*\n\n**Prompt:** You recently returned from a two-week cultural volunteer trip to Oaxaca, Mexico. While you loved learning about traditional textiles and gastronomy, you noticed that rapid international tourism is pushing up local prices and commercialising sacred crafts. Share your personal reflection and practical guidelines for respectful travellers on an **online youth travel platform**.\n\nChoose the **most appropriate** text type from these three options and write your full Spanish response:\n- **Una entrada de blog**\n- **Un artículo**\n- **Un informe oficial**",
      modelAnswer:
        "**Más allá de la foto perfecta: lo que aprendí viajando a Oaxaca**\n*Publicado el 18 de octubre · Etiquetas: #TurismoResponsable #Oaxaca #ViajarConConciencia*\n\n¡Hola, comunidad viajera! Acabo de regresar de dos semanas inolvidables como voluntario en un taller textil cerca de Oaxaca, y todavía tengo el aroma del cacao recién molido en la memoria. Sin embargo, este viaje me dejó una pregunta incómoda que quiero compartir con vosotros: ¿estamos apoyando de verdad a las comunidades que visitamos o las estamos convirtiendo en un simple decorado para nuestras redes?\n\nCuando llegué al valle de Teotitlán, me impresionó ver cómo familias zapotecas teñían la lana con pigmentos naturales como la grana cochinilla. Mientras conversaba con doña Elena, una maestra tejedora, me contó que antes los visitantes escuchaban con paciencia la historia de cada tapete. Ahora, en cambio, muchos turistas regatean agresivamente o buscan imitaciones industriales más baratas, al tiempo que los alquileres turísticos encarecen el centro histórico para los vecinos de toda la vida.\n\nA pesar de estas tensiones, el turismo no tiene por qué ser perjudicial si cambiamos nuestra actitud. Si cada viajero investigara un poco antes de hacer la maleta, evitaría estereotipos dañinos. Por eso, aquí van tres claves que me llevo en la mochila:\n- **Compra directamente a los artesanos** y paga un precio justo sin regatear su trabajo manual.\n- **Aprende expresiones locales y respeta los espacios sagrados:** pregunta siempre antes de sacar fotografías.\n- **Elige alojamientos y mercados familiares** para que tus ingresos se queden en la economía del barrio.\n\nViajar debería transformarnos por dentro, no vaciar de sentido las tradiciones ajenas. ¿Habéis vivido alguna experiencia parecida en vuestros viajes? ¡Dejadme vuestras recomendaciones y opiniones abajo en los comentarios!",
      markScheme: [
        {
          point: "[Criterion A — 1/4] Contrasts past narrative tenses accurately (pretérito indefinido vs imperfecto, e.g. «cuando llegué... teñían / conversaba... me contó»).",
          keywords: ["llegué", "conversaba", "contó", "teñían", "escuchaban", "impresionó"],
        },
        {
          point: "[Criterion A — 2/4] Uses complex B2 grammar accurately (e.g. Type 2 conditional «si cada viajero investigara... evitaría», «para que» + subjunctive «se queden», or imperative advice).",
          keywords: ["investigara", "evitaría", "para que", "se queden", "si cada viajero", "debería"],
        },
        {
          point: "[Criterion A — 3/4] Employs authentic Spanish travel & cultural lexis (e.g. «artesanos», «regatear», «alquileres», «tradiciones», «estereotipos», «pigmentos»).",
          keywords: ["artesanos", "regatear", "alquileres", "tradiciones", "estereotipos", "alojamientos"],
        },
        {
          point: "[Criterion A — 4/4] Connects contrasting perspectives naturally using B2 linkers («sin embargo», «en cambio», «a pesar de», «por eso»).",
          keywords: ["sin embargo", "en cambio", "a pesar de", "por eso", "al tiempo que"],
        },
        {
          point: "[Criterion B — 1/4] Grounds the reflection in concrete Oaxacan cultural experiences (textiles/weaving, Zapotec artisans, local cuisine).",
          keywords: ["taller textil", "zapotecas", "cacao", "tejedora", "tapete", "cochinilla"],
        },
        {
          point: "[Criterion B — 2/4] Evaluates negative impacts of mass tourism honestly (rising rents/gentrification, aggressive haggling, mass-produced imitations).",
          keywords: ["encarecen", "imitaciones", "decorado", "tensiones", "perjudicial", "vecinos"],
        },
        {
          point: "[Criterion B — 3/4] Provides concrete, actionable ethical guidelines for respectful travellers (fair payment, asking before photographing, local businesses).",
          keywords: ["precio justo", "fotografías", "mercados", "economía del barrio", "tres claves", "espacios sagrados"],
        },
        {
          point: "[Criterion B — 4/4] Concludes with a thoughtful evaluative reflection on meaningful travel (within 250–400 words).",
          keywords: ["transformarnos", "actitud", "conciencia", "sentido", "viajeros", "comunidades"],
        },
        {
          point: "[Criterion C — 1/2] Selects the MOST appropriate text type (Una entrada de blog) with authentic digital conventions (catchy title, publication date, hashtags/tags, scannable tips).",
          keywords: ["publicado", "etiquetas", "#turismoresponsable", "¡hola", "comunidad viajera"],
        },
        {
          point: "[Criterion C — 2/2] Maintains a warm, personal interactive blog voice that explicitly invites readers to respond in the comments.",
          keywords: ["comentarios", "dejadme", "dejen", "compartir", "¿habéis vivido", "¿han vivido"],
        },
      ],
      markbands: P1_SL_MARKBANDS,
      hints: [
        "Notice the digital context: an **online youth travel platform** inviting personal reflection + tips → **Una entrada de blog** is MOST appropriate (title, date, hashtags, warm direct address, comments prompt). *Un artículo* is acceptable; *Un informe oficial* is too dry and institutional.",
        "Show off Theme 2 grammar: weave *pretérito indefinido* and *imperfecto* in your anecdote from Oaxaca, plus a Type 2 *si*-clause or *para que* + subjunctive in your ethical travel tips.",
        "Always close a Spanish blog post by inviting reader interaction («¡Dejadme/Déjenme vuestros/sus comentarios abajo!»).",
      ],
      commonError: "Forgetting blog-specific conventions (date/tags, direct greeting, closing invitation to comment) so the script reads like a generic school essay.",
    },
    {
      id: "exam-p1-q11",
      kind: "written",
      topicId: "3-ingenio-humano",
      guideRef: "entretenimiento-expresiones-artisticas",
      difficulty: "core",
      level: "SL",
      commandTerm: "Evaluate",
      strategy: "SL Paper 1 Review (250–400w): headline, brief metadata/rating, spoiler-free synopsis, balanced critique, verdict",
      marks: 10,
      question:
        "**[SL Paper 1 Task · Theme 3: Ingenio humano · Target: 250–400 words]**\n\n*Official IB weighting: Criterion A Language (12) · Criterion B Message (12) · Criterion C Conceptual Understanding (6) — 30 IB marks total (10 self-marking checkpoints).*\n\n**Prompt:** You recently watched a new Spanish-language documentary (*«Pincel y algoritmo»*) exploring how artificial intelligence is reshaping cinema, music, and graphic design across Latin America. Write an evaluation for your **school cultural portal** weighing its strengths and weaknesses and recommending whether classmates should watch it.\n\nChoose the **most appropriate** text type from these three options and write your full Spanish response:\n- **Una reseña**\n- **Un artículo**\n- **Un diario personal**",
      modelAnswer:
        "**«Pincel y algoritmo»: una mirada lúcida sobre el arte en la era de la IA**\n*Dirección: Valeria Mendoza (México/Colombia, 2025) · Duración: 84 min · Valoración: 4/5 estrellas*\n\n¿Puede un algoritmo conmover a un público del mismo modo que un artista humano? Ese es el interrogante central de *Pincel y algoritmo*, un documental ágil y provocador que acaba de llegar a las plataformas educativas. A través de entrevistas con ilustradores de Bogotá, compositores de Ciudad de México e ingenieros de datos, la directora examina cómo la inteligencia artificial generativa está transformando el panorama creativo latinoamericano.\n\nEl mayor acierto de la película reside en su enfoque equilibrado y visualmente hipnótico. Lejos de caer en el alarmismo fácil, Mendoza contrapone la experiencia de un joven estudio de animación —que utiliza herramientas digitales para reducir costes— con el testimonio sincero de una diseñadora gráfica que teme perder sus derechos de autor. Además, la banda sonora combina percusión tradicional andina con texturas electrónicas, reforzando de manera brillante la tesis del filme sobre el diálogo entre tradición e innovación.\n\nNo obstante, el documental presenta algunos puntos débiles que impiden otorgarle la máxima calificación. En la segunda mitad, el ritmo decae debido a explicaciones técnicas algo densas que podrían resultar confusas para quienes no dominan el vocabulario informático. Asimismo, se echa en falta una voz más crítica sobre el impacto ambiental de los centros de datos, un asunto que apenas se menciona durante dos minutos.\n\nEn definitiva, pese a ciertos altibajos narrativos, *Pincel y algoritmo* constituye una obra imprescindible para cualquier estudiante interesado en el arte, la ética y la tecnología. Recomiendo encarecidamente que la veáis en grupo y que abráis después un debate en clase: aunque la máquina imite el trazo, la intención humana sigue marcando la diferencia.",
      markScheme: [
        {
          point: "[Criterion A — 1/4] Uses evaluative cultural metalanguage accurately (e.g. «enfoque equilibrado», «banda sonora», «ritmo», «mayor acierto», «altibajos narrativos»).",
          keywords: ["enfoque", "banda sonora", "ritmo", "acierto", "altibajos", "tesis"],
        },
        {
          point: "[Criterion A — 2/4] Deploys accurate subjunctive or concessive structures (e.g. «recomiendo... que la veáis/vean», «aunque... imite», «pese a»).",
          keywords: ["veáis", "vean", "imite", "abráis", "abran", "pese a"],
        },
        {
          point: "[Criterion A — 3/4] Uses sophisticated evaluative connectors to pivot smoothly from praise to critique and conclusion («no obstante», «asimismo», «en definitiva»).",
          keywords: ["no obstante", "asimismo", "en definitiva", "sin embargo", "lejos de"],
        },
        {
          point: "[Criterion A — 4/4] Applies accurate grammatical structures such as relative pronouns («quienes»), conditional («podrían»), or passive/impersonal «se» («se echa en falta», «se menciona»).",
          keywords: ["quienes", "podrían", "se echa en falta", "se menciona", "derechos de autor"],
        },
        {
          point: "[Criterion B — 1/4] Summarises the documentary's premise and Hispanophone focus clearly without revealing spoilers.",
          keywords: ["entrevistas", "ilustradores", "bogotá", "ciudad de méxico", "compositores", "animación"],
        },
        {
          point: "[Criterion B — 2/4] Analyses concrete strengths of the documentary (balanced perspectives, visual style, soundtrack, copyright debate).",
          keywords: ["alarmismo", "derechos de autor", "percusión", "tradición", "innovación", "hipnótico"],
        },
        {
          point: "[Criterion B — 3/4] Identifies specific, well-reasoned weaknesses (slower pacing, dense technical jargon, brief environmental coverage).",
          keywords: ["puntos débiles", "decae", "confusas", "impacto ambiental", "centros de datos", "técnicas"],
        },
        {
          point: "[Criterion B — 4/4] Concludes with a clear, justified recommendation for classmates (within 250–400 words).",
          keywords: ["imprescindible", "recomiendo", "debate", "ética", "intención humana", "diferencia"],
        },
        {
          point: "[Criterion C — 1/2] Selects the MOST appropriate text type (Una reseña) and includes review conventions (evaluative title, brief production metadata, star/score rating).",
          keywords: ["valoración", "estrellas", "duración", "dirección", "calificación"],
        },
        {
          point: "[Criterion C — 2/2] Sustains an engaging, authoritative semi-formal cultural-critic register tailored to a school portal readership.",
          keywords: ["¿puede un algoritmo", "cualquier estudiante", "en clase", "público", "provocador"],
        },
      ],
      markbands: P1_SL_MARKBANDS,
      hints: [
        "Evaluating strengths and weaknesses of a documentary and recommending whether classmates should watch it calls directly for **Una reseña** (review).",
        "Include quick review metadata at the top (director, country, duration, star rating out of 5) — examiners immediately reward authentic Criterion C conventions!",
        "Keep the critique genuinely balanced: devote one paragraph to concrete strengths (soundtrack, balanced interviews) and one paragraph to specific weaknesses (pacing, jargon, missing angle) before your final recommendation.",
      ],
      commonError: "Writing a purely positive plot summary instead of a balanced critique with explicit weaknesses and a justified final verdict.",
    },
    {
      id: "exam-p1-q12",
      kind: "written",
      topicId: "4-organizacion-social",
      guideRef: "relaciones-comunidad-voluntariado",
      difficulty: "core",
      level: "SL",
      commandTerm: "Suggest",
      strategy: "SL Paper 1 Proposal (250–400w): formal institutional header, numbered sections (Objetivo, Justificación, Plan, Presupuesto), usted register",
      marks: 10,
      question:
        "**[SL Paper 1 Task · Theme 4: Organización social · Target: 250–400 words]**\n\n*Official IB weighting: Criterion A Language (12) · Criterion B Message (12) · Criterion C Conceptual Understanding (6) — 30 IB marks total (10 self-marking checkpoints).*\n\n**Prompt:** As president of your bilingual youth association, you wish to persuade the municipal mayor (*alcaldesa*) to approve and fund a weekend intergenerational digital-literacy initiative where teenagers help older residents use online banking, medical appointments, and family video calls safely.\n\nChoose the **most appropriate** text type from these three options and write your full Spanish response:\n- **Una propuesta**\n- **Una carta formal**\n- **Un correo electrónico informal**",
      modelAnswer:
        "**PROPUESTA MUNICIPAL: Programa Intergeneracional «Puentes Digitales»**\n*Dirigida a:* Excma. Sra. Alcaldesa y Concejalía de Bienestar Social\n*Presentada por:* Presidencia de la Asociación Juvenil Bilingüe · *Fecha:* 14 de noviembre\n\n**1. Objetivo general**\nLa presente propuesta tiene como finalidad solicitar el respaldo institucional y una subvención municipal para poner en marcha «Puentes Digitales», un programa de voluntariado que vincule a jóvenes de bachillerato con personas mayores del municipio para combatir la brecha digital y la soledad no deseada.\n\n**2. Justificación del proyecto**\nActualmente, numerosos trámites esenciales —como pedir cita médica o realizar gestiones bancarias— se llevan a cabo casi exclusivamente por internet. Por consiguiente, muchos vecinos mayores quedan excluidos de servicios básicos o expuestos a estafas telefónicas. Si el ayuntamiento apoyara esta iniciativa, no solo mejoraría la autonomía de nuestros mayores, sino que también fomentaría la solidaridad intergeneracional entre la juventud local.\n\n**3. Plan de acción y funcionamiento**\nProponemos celebrar talleres gratuitos de noventa minutos cada sábado por la mañana en la biblioteca municipal durante seis meses. Cada voluntario, previamente formado en ciberseguridad básica, acompañaría a dos participantes de forma personalizada. Asimismo, se elaborarían guías impresas con letra grande para que los asistentes puedan repasar paso a paso en casa cómo hacer videollamadas o verificar mensajes sospechosos.\n\n**4. Recursos estimados y beneficios comunitarios**\nDado que los voluntarios participarían de manera altruista y la biblioteca ya dispone de conexión wifi, el presupuesto requerido sería modesto: aproximadamente 1.200 euros destinados a material impreso, diez tabletas de préstamo y un seguro básico. A cambio, el municipio reduciría la saturación en las oficinas de atención presencial y fortalecería la cohesión vecinal.\n\n**5. Conclusión**\nConfiamos en que usted considere favorablemente este proyecto y quedamos a su entera disposición para mantener una reunión informativa. Le saluda atentamente, la Presidencia de la Asociación Juvenil.",
      markScheme: [
        {
          point: "[Criterion A — 1/4] Uses formal subjunctive triggers accurately (e.g. «para que... puedan», «confiamos en que usted considere», «que vincule»).",
          keywords: ["puedan", "considere", "vincule", "apoyen", "respalde"],
        },
        {
          point: "[Criterion A — 2/4] Applies Type 2 conditional / conditional forms smoothly for policy projection («si el ayuntamiento apoyara... mejoraría / fomentaría», «acompañaría», «sería»).",
          keywords: ["apoyara", "mejoraría", "fomentaría", "acompañaría", "sería", "reduciría"],
        },
        {
          point: "[Criterion A — 3/4] Uses authoritative institutional & social lexis («subvención», «trámites», «estafas», «altruista», «presupuesto», «cohesión vecinal»).",
          keywords: ["subvención", "trámites", "estafas", "presupuesto", "cohesión", "altruista"],
        },
        {
          point: "[Criterion A — 4/4] Employs formal discourse connectors cleanly («por consiguiente», «dado que», «asimismo», «a cambio»).",
          keywords: ["por consiguiente", "dado que", "asimismo", "a cambio", "actualmente"],
        },
        {
          point: "[Criterion B — 1/4] States a clear project objective connecting teenagers and elderly residents.",
          keywords: ["puentes digitales", "soledad", "brecha digital", "voluntariado", "finalidad"],
        },
        {
          point: "[Criterion B — 2/4] Justifies community need with concrete digital hurdles (medical appointments, online banking, fraud prevention).",
          keywords: ["cita médica", "gestiones bancarias", "ciberseguridad", "videollamadas", "excluidos"],
        },
        {
          point: "[Criterion B — 3/4] Outlines a practical, feasible operational plan (venue, schedule, training, printed large-print guides).",
          keywords: ["biblioteca", "sábado", "talleres", "letra grande", "guías impresas", "tabletas"],
        },
        {
          point: "[Criterion B — 4/4] Addresses realistic costs/budget and reciprocal municipal benefits (within 250–400 words).",
          keywords: ["1.200", "euros", "wifi", "saturación", "beneficios", "reunión"],
        },
        {
          point: "[Criterion C — 1/2] Selects the MOST appropriate text type (Una propuesta) with formal metadata header and numbered structural sections.",
          keywords: ["dirigida a", "1. objetivo", "2. justificación", "3. plan", "4. recursos", "5. conclusión"],
        },
        {
          point: "[Criterion C — 2/2] Maintains impeccable formal «usted» register and institutional closing throughout.",
          keywords: ["excma", "usted", "entera disposición", "le saluda atentamente", "respaldo institucional"],
        },
      ],
      markbands: P1_SL_MARKBANDS,
      hints: [
        "When persuading a council to approve and fund a concrete project with objectives, logistics, and budget, **Una propuesta** is the single MOST appropriate text type (*Una carta formal* is acceptable; *Un correo electrónico informal* is inappropriate).",
        "Structure your proposal with a clean header (*Dirigida a / Presentada por / Fecha*) and numbered sections (*1. Objetivo, 2. Justificación, 3. Plan de acción, 4. Presupuesto/Recursos, 5. Conclusión*).",
        "Maintain strict formal register (*usted*, *su*, *le saluda atentamente*) and use Type 2 conditional (*Si el ayuntamiento apoyara..., mejoraría...*) to sound authoritative.",
      ],
      commonError: "Omitting budget/logistical feasibility or slipping into informal «tú» address when proposing a programme to a city mayor.",
    },
    {
      id: "exam-p1-q13",
      kind: "written",
      topicId: "5-compartir-el-planeta",
      guideRef: "medio-ambiente-sostenibilidad",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      strategy: "SL Paper 1 Speech (250–400w): vocative greeting, rhetorical questions & triads, inclusive nosotros, inspiring call to action & closing thanks",
      marks: 10,
      question:
        "**[SL Paper 1 Task · Theme 5: Compartir el planeta · Target: 250–400 words]**\n\n*Official IB weighting: Criterion A Language (12) · Criterion B Message (12) · Criterion C Conceptual Understanding (6) — 30 IB marks total (10 self-marking checkpoints).*\n\n**Prompt:** You have been invited to speak at a regional youth sustainability summit in San José, Costa Rica. Deliver a persuasive address to fellow secondary students examining the hidden environmental and human cost of fast fashion (*la moda rápida*) and urging them to embrace circular-economy habits.\n\nChoose the **most appropriate** text type from these three options and write your full Spanish response:\n- **Un discurso**\n- **Un artículo**\n- **Un folleto turístico**",
      modelAnswer:
        "Buenos días, queridos delegados, organizadores y compañeros venidos de toda la región. Es un verdadero honor estar hoy aquí, en San José, compartiendo escenario con una generación que se niega a mirar hacia otro lado frente a la crisis climática.\n\nAntes de empezar, os propongo un gesto sencillo: pensad en la última prenda que comprasteis por internet porque estaba rebajada. ¿Cuántas veces os la habéis puesto realmente? Detrás de cada camiseta de cinco dólares se esconde una realidad que rara vez aparece en la etiqueta: miles de litros de agua dulce contaminados, ríos teñidos de tintes tóxicos y talleres textiles donde millones de personas trabajan en condiciones precarias. En el desierto de Atacama, en Chile, ya existen montañas visibles desde el espacio formadas por ropa descartada que nadie volverá a usar.\n\nSi bien es cierto que la industria textil impulsa campañas de publicidad irresistibles en las redes sociales, no podemos seguir escudándonos en la comodidad. Aunque algunos afirmen que un gesto individual no cambia el planeta, nuestra voz colectiva como consumidores jóvenes sí transforma el mercado. No lograremos frenar este despilfarro a menos que cambiemos nuestra manera de comprar, reparar y compartir.\n\nPor eso, hoy os reto a liderar la economía circular desde nuestros propios institutos. Organicemos ferias trimestrales de intercambio de ropa, apoyemos a los comercios de segunda mano y exijamos a las marcas que publiquen cadenas de suministro transparentes. Reutilizar, reparar y repensar: tres verbos sencillos capaces de reducir nuestra huella ecológica sin renunciar a la creatividad ni al estilo.\n\nEl futuro sostenible no se espera sentado; se construye con cada decisión diaria. Actuemos con coherencia, contagiemos este compromiso en nuestras comunidades y demostremos que la verdadera tendencia es cuidar la Tierra. Muchas gracias por vuestra atención.",
      markScheme: [
        {
          point: "[Criterion A — 1/4] Uses accurate ESCAPA / concessive / command subjunctive forms (e.g. «a menos que cambiemos», «aunque... afirmen», «exijamos... que publiquen», «organicemos»).",
          keywords: ["a menos que", "cambiemos", "afirmen", "publiquen", "organicemos", "actuemos"],
        },
        {
          point: "[Criterion A — 2/4] Deploys persuasive rhetorical devices appropriate to oratory (rhetorical question, rule-of-three triad, antithesis).",
          keywords: ["reutilizar, reparar", "¿cuántas veces", "no se espera", "tres verbos", "mirar hacia otro lado"],
        },
        {
          point: "[Criterion A — 3/4] Uses rich environmental & ethical lexis («huella ecológica», «despilfarro», «condiciones precarias», «cadenas de suministro», «tintes tóxicos»).",
          keywords: ["huella ecológica", "despilfarro", "precarias", "suministro", "tóxicos", "crisis climática"],
        },
        {
          point: "[Criterion A — 4/4] Incorporates high-band discourse framing («si bien es cierto que», «detrás de cada», «por eso»).",
          keywords: ["si bien es cierto que", "detrás de", "por eso", "frente a", "sin renunciar"],
        },
        {
          point: "[Criterion B — 1/4] Connects fast fashion directly to environmental damage (water waste, toxic dyes, Atacama textile landfill in Chile).",
          keywords: ["atacama", "litros de agua", "etiqueta", "ropa descartada", "contaminados"],
        },
        {
          point: "[Criterion B — 2/4] Highlights the human/ethical dimension of fast-fashion labour alongside youth social-media consumer pressure.",
          keywords: ["talleres textiles", "publicidad", "consumidores", "camiseta", "industria textil"],
        },
        {
          point: "[Criterion B — 3/4] Proposes concrete circular-economy student actions (school clothes swaps, second-hand shops, demanding supply-chain transparency).",
          keywords: ["intercambio", "segunda mano", "ferias", "transparentes", "economía circular", "reparar"],
        },
        {
          point: "[Criterion B — 4/4] Delivers a memorable, motivating call to action linking personal coherence to collective change (within 250–400 words).",
          keywords: ["coherencia", "compromiso", "tendencia", "tierra", "colectiva"],
        },
        {
          point: "[Criterion C — 1/2] Selects the MOST appropriate text type (Un discurso) with spoken opening vocative greeting and formal spoken closing thanks.",
          keywords: ["buenos días", "queridos delegados", "muchas gracias por", "honor estar hoy"],
        },
        {
          point: "[Criterion C — 2/2] Sustains direct oral audience connection throughout (second-person plural «vosotros/ustedes» + inclusive «nosotros» imperatives).",
          keywords: ["os propongo", "les propongo", "os reto", "les reto", "vuestra atención", "su atención"],
        },
      ],
      markbands: P1_SL_MARKBANDS,
      hints: [
        "Addressing delegates live at a youth summit calls clearly for **Un discurso** (spoken vocative opening, live rhetorical engagement, triads, closing thanks). *Un artículo* is acceptable only if adapted, while *Un folleto turístico* is totally inappropriate.",
        "Anchor Theme 5 in authentic Hispanophone detail — for example, the real-world discarded-clothing mountains in Chile's Atacama Desert alongside water pollution and garment-worker rights.",
        "Weave in high-band oral rhetoric: a live opening question to the audience, a concessive rebuttal («Aunque algunos afirmen...»), an ESCAPA trigger («a menos que cambiemos...»), and a punchy rule-of-three closing.",
      ],
      commonError: "Writing a speech with journalistic subheadings or forgetting to greet the audience at the start and thank them at the end.",
    },
    {
      id: "exam-p1-q14",
      kind: "written",
      topicId: "1-identidades",
      guideRef: "identidad-registro-hl",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Examine",
      strategy: "HL Paper 1 Opinion Article (450–600w): nuanced thesis, explicit counter-arguments, C1 cohesion, pan-Hispanic cultural breadth",
      marks: 10,
      question:
        "**[HL Paper 1 Task · Theme 1: Identidades & Theme 3: Ingenio humano · Target: 450–600 words]**\n\n*Official IB HL weighting: Criterion A Language (12) · Criterion B Message (12) · Criterion C Conceptual Understanding (6) — 30 IB marks total (10 self-marking checkpoints).*\n\n**Prompt:** A major pan-Hispanic cultural newspaper (*El Mirador Hispánico*) has invited guest writers to examine whether the rapid spread of English loanwords (*anglicismos*) on social media and debates over inclusive Spanish threaten the shared unity of the Spanish language — or demonstrate its living vitality across Spain and Latin America.\n\nChoose the **most appropriate** text type from these three options and write your full HL Spanish response:\n- **Un artículo de opinión**\n- **Un discurso**\n- **Un diario personal**",
      modelAnswer:
        "**¿Se fractura el español o respira con el siglo XXI? Entre el purismo y la lengua viva**\n*Por Clara Domínguez · Opinión · Cultura y Sociedad*\n\nHace apenas unos días, escuché a dos estudiantes madrileños comentar que habían hecho *scrolling* toda la tarde tras un *briefing* agotador, mientras en un pódcast de Ciudad de México una periodista debatía apasionadamente sobre el lenguaje inclusivo en la prensa universitaria. Escenas como estas despiertan reacciones encontradas: para algunos puristas, el español atraviesa una erosión imparable provocada por el inglés globalizado y las reformas gramaticales; para otros lingüistas, en cambio, presenciamos el síntoma más saludable de un idioma hablado por casi seiscientos millones de personas.\n\n**El temor legítimo a la pérdida de precisión**\nSi bien es cierto que las lenguas siempre han incorporado préstamos extranjeros —basta recordar la profunda huella del árabe o de las lenguas indígenas como el náhuatl y el quechua en nuestro léxico cotidiano—, conviene no minimizar la inquietud actual. El problema no radica en adoptar un término técnico cuando no existe equivalente, sino en desplazar palabras castellanas de enorme riqueza expresiva por mera moda digital. Cuando un joven escribe *random* en lugar de «aleatorio» o *feedback* en vez de «retroalimentación», el empobrecimiento léxico se vuelve tangible. De ahí que instituciones como la Real Academia Española y la Asociación de Academias de la Lengua Española insistan en proponer alternativas panhispánicas comprensibles desde Montevideo hasta Bilbao.\n\n**Identidad, inclusión y mestizaje lingüístico**\nNo obstante, reducir la evolución del idioma a una supuesta amenaza ignora que la lengua nunca pertenece únicamente a los diccionarios, sino a quienes la habitan cada día. El debate en torno al lenguaje inclusivo, por ejemplo, refleja una transformación social genuina en la que numerosas generaciones buscan visibilizar identidades históricamente relegadas. Aunque resulte comprensible que formas como la terminación en «-e» generen resistencia gramatical y dificulten la lectura oficial, existen recursos plenamente normativos —como los sustantivos colectivos «el alumnado» o «la ciudadanía»— que concilian la elegancia estilística con la sensibilidad social. Asimismo, fenómenos fronterizos como el *spanglish* en Estados Unidos o el vigor del voseo rioplatense demuestran que la diversidad regional jamás ha impedido la mutua comprensión; al contrario, ha multiplicado la potencia literaria y musical del mundo hispanohablante. De hecho, las plataformas de series, la literatura contemporánea y la música urbana permiten hoy que un adolescente de Bogotá comprenda sin esfuerzo expresiones madrileñas, porteñas o mexicanas, tejiendo una comunidad cultural más abierta que en cualquier época anterior.\n\n**Unidad en la pluralidad**\nEn definitiva, si defendiéramos un español inmóvil encerrado en una vitrina, acabaríamos condenándolo a la irrelevancia cultural. La verdadera amenaza no proviene del cambio natural, sino de la falta de lectura crítica y de educación lingüística. Ojalá sepamos cultivar una conciencia idiomática capaz de acoger la innovación sin renunciar al rigor: solo así el español seguirá siendo, a la vez, puente común entre continentes y espejo fiel de nuestra identidad contemporánea.",
      markScheme: [
        {
          point: "[Criterion A — 1/4] Commands C1 subjunctive and hypothetical syntax accurately («de ahí que... insistan», «aunque resulte», «si defendiéramos... acabaríamos», «ojalá sepamos»).",
          keywords: ["de ahí que", "insistan", "resulte", "defendiéramos", "acabaríamos", "ojalá sepamos"],
        },
        {
          point: "[Criterion A — 2/4] Uses sophisticated C1 concessive and analytical connectors («si bien es cierto que», «no obstante», «en cambio», «asimismo», «en definitiva»).",
          keywords: ["si bien es cierto que", "no obstante", "en cambio", "asimismo", "en definitiva"],
        },
        {
          point: "[Criterion A — 3/4] Deploys precise linguistic and cultural C1 lexis («puristas», «préstamos», «empobrecimiento léxico», «panhispánicas», «mestizaje lingüístico», «conciencia idiomática»).",
          keywords: ["puristas", "préstamos", "léxico", "panhispánicas", "mestizaje", "conciencia idiomática"],
        },
        {
          point: "[Criterion A — 4/4] Uses complex subordinate clauses and nominalisation naturally («quienes la habitan», «en torno a», «el temor legítimo», «el problema no radica en... sino en»).",
          keywords: ["quienes", "en torno a", "radica en", "en lugar de", "sino en"],
        },
        {
          point: "[Criterion B — 1/4] Frames the linguistic debate with concrete Hispanophone examples across both Spain and Latin America.",
          keywords: ["madrileños", "ciudad de méxico", "montevideo", "bilbao", "seiscientos millones"],
        },
        {
          point: "[Criterion B — 2/4] Evaluates concerns about unnecessary anglicisms with historical nuance (Arabic/indigenous roots vs digital lexical loss, RAE/ASALE role).",
          keywords: ["náhuatl", "quechua", "real academia", "aleatorio", "retroalimentación", "árabe"],
        },
        {
          point: "[Criterion B — 3/4] Analyses the inclusive-language and regional-variation debate fairly (e.g. grammatical resistance vs collective nouns, Spanglish/voseo).",
          keywords: ["alumnado", "ciudadanía", "spanglish", "voseo", "resistencia gramatical", "visibilizar"],
        },
        {
          point: "[Criterion B — 4/4] Synthesises a nuanced HL thesis reconciling linguistic unity with cultural vitality (within 450–600 words).",
          keywords: ["vitrina", "lectura crítica", "puente común", "pluralidad", "rigor"],
        },
        {
          point: "[Criterion C — 1/2] Selects the MOST appropriate text type (Un artículo de opinión) with newspaper headline, byline/section tag, and thematic subheadings.",
          keywords: ["opinión", "cultura y sociedad", "el temor legítimo", "unidad en la pluralidad"],
        },
        {
          point: "[Criterion C — 2/2] Maintains an authoritative, engaging semi-formal intellectual newspaper column register suited to an educated pan-Hispanic readership.",
          keywords: ["hace apenas", "reacciones encontradas", "nuestra identidad", "espejo fiel", "siglo xxi"],
        },
      ],
      markbands: P1_HL_MARKBANDS,
      hints: [
        "A guest column for a major pan-Hispanic cultural newspaper clearly demands **Un artículo de opinión** (provocative headline, byline + section tag, thematic subheadings, sophisticated voice).",
        "At HL (450–600 words), avoid a one-sided rant: give serious weight to BOTH sides — why unnecessary digital loanwords worry linguists (RAE/ASALE) AND why historical borrowings (Arabic, Náhuatl, Quechua), regional diversity (*voseo*, *spanglish*), and inclusive collective nouns (*el alumnado*) prove Spanish is alive.",
        "Aim for C1 Criterion A landmarks: *si bien es cierto que...*, *de ahí que + subjuntivo*, Type 2 *si*-clause (*si defendiéramos... acabaríamos...*), and sharp concrete examples.",
      ],
      commonError: "Writing a short SL-length response (~300 words) or adopting an overly casual blog tone instead of an authoritative cultural newspaper column.",
    },
    {
      id: "exam-p1-q15",
      kind: "written",
      topicId: "5-compartir-el-planeta",
      guideRef: "argumentacion-etica-global-hl",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "To what extent",
      strategy: "HL Paper 1 Formal Report (450–600w): objective executive structure, evidence-based evaluation of limitations, actionable recommendations",
      marks: 10,
      question:
        "**[HL Paper 1 Task · Theme 4: Organización social & Theme 5: Compartir el planeta · Target: 450–600 words]**\n\n*Official IB HL weighting: Criterion A Language (12) · Criterion B Message (12) · Criterion C Conceptual Understanding (6) — 30 IB marks total (10 self-marking checkpoints).*\n\n**Prompt:** As youth representative to a regional council in Castilla y León, Spain, you have been asked to evaluate **to what extent** remote work (*el teletrabajo*) and green public investment can genuinely reverse rural depopulation (*la España vaciada*), and to submit formal policy conclusions and recommendations.\n\nChoose the **most appropriate** text type from these three options and write your full HL Spanish response:\n- **Un informe**\n- **Una propuesta**\n- **Una reseña**",
      modelAnswer:
        "**INFORME DE EVALUACIÓN: Teletrabajo e inversión verde frente a la despoblación en Castilla y León**\n*Para:* Comisión Regional de Cohesión Territorial\n*De:* Representación Juvenil ante el Consejo Regional · *Fecha:* 20 de noviembre\n\n**1. Introducción y propósito**\nEl presente informe analiza en qué medida la expansión del teletrabajo y las inversiones públicas en sostenibilidad pueden frenar el declive demográfico de las comarcas rurales de Castilla y León. Durante las últimas cuatro décadas, miles de municipios del interior han perdido población joven, servicios sanitarios y escuelas, generando un desequilibrio territorial que compromete tanto el desarrollo económico como la conservación del entorno natural.\n\n**2. Alcance y límites del teletrabajo**\nTras la transformación laboral reciente, numerosos ayuntamientos confiaron en que el empleo a distancia revirtiera por sí solo el éxodo rural. Si bien es cierto que el despliegue parcial de fibra óptica ha atraído a profesionales urbanos en busca de vivienda asequible y mayor calidad de vida, los resultados siguen siendo insuficientes. En primer lugar, una proporción elevada de los empleos en sectores clave —como la sanidad, la industria agroalimentaria o el comercio local— no puede ejercerse en remoto. En segundo lugar, sin consultorios médicos estables, guarderías ni transporte público frecuente, las familias jóvenes rara vez permanecen a largo plazo, por muy rápida que sea la conexión a internet. De ahí que el teletrabajo deba concebirse como un complemento útil, pero jamás como una panacea.\n\n**3. Potencial de la inversión verde pública**\nFrente a esas limitaciones, la transición ecológica ofrece un motor estructural más sólido. Castilla y León posee recursos excepcionales para la energía solar y eólica, la gestión forestal sostenible —crucial para prevenir incendios veraniegos— y la agricultura ecológica de proximidad. No obstante, para que estos proyectos generen arraigo real y no beneficien únicamente a grandes corporaciones externas, es imprescindible que la financiación pública priorice cooperativas locales, formación profesional verde y empleo estable para residentes de la zona. Cuando los beneficios energéticos y fiscales se reinvierten en el propio territorio, las comunidades recuperan dinamismo y esperanza.\n\n**4. Recomendaciones prioritarias**\nA la luz del análisis expuesto, esta representación formula tres medidas concretas:\n- **Garantizar servicios básicos antes que campañas promocionales:** blindar rutas de transporte comarcal, atención primaria y colegios rurales abiertos.\n- **Vincular las subvenciones verdes al empleo local:** exigir que las plantas renovables contraten y formen a jóvenes de la provincia, cuyo talento suele emigrar tras graduarse.\n- **Crear viveros de vivienda y espacios de cotrabajo:** rehabilitar casas municipales vacías para ofrecer alquileres protegidos a emprendedores y familias.\n\n**5. Conclusión**\nEn conclusión, el teletrabajo y la inversión verde solo revertirán de forma duradera la despoblación en la medida en que se integren dentro de una estrategia pública integral. Si las administraciones coordinaran infraestructura digital, servicios esenciales y economía ecológica local, el medio rural dejaría de percibirse como un territorio olvidado para convertirse en un modelo sostenible de futuro.",
      markScheme: [
        {
          point: "[Criterion A — 1/4] Sustains C1 subjunctive and complex subordination («confiaron en que... revirtiera», «por muy rápida que sea», «de ahí que... deba», «para que... generen», «es imprescindible que... priorice»).",
          keywords: ["revirtiera", "por muy rápida que sea", "de ahí que", "generen", "priorice", "cuyo talento"],
        },
        {
          point: "[Criterion A — 2/4] Applies Type 2 conditional and relative pronoun «cuyo/a» cleanly («si las administraciones coordinaran... dejaría», «cuyo talento»).",
          keywords: ["coordinaran", "dejaría", "cuyo", "convertirse", "exigir que"],
        },
        {
          point: "[Criterion A — 3/4] Employs formal policy and socioeconomic C1 lexis («declive demográfico», «desequilibrio territorial», «éxodo rural», «arraigo», «atención primaria», «alquileres protegidos»).",
          keywords: ["declive demográfico", "desequilibrio territorial", "éxodo rural", "arraigo", "atención primaria", "panacea"],
        },
        {
          point: "[Criterion A — 4/4] Organises formal evaluation with precision connectors («si bien es cierto que», «frente a esas limitaciones», «no obstante», «a la luz del análisis», «en la medida en que»).",
          keywords: ["si bien es cierto que", "frente a", "no obstante", "a la luz del", "en la medida en que"],
        },
        {
          point: "[Criterion B — 1/4] Evaluates BOTH benefits AND clear structural limits of remote work (fibre optics/cheaper housing vs non-remote jobs and missing clinics/schools/transit).",
          keywords: ["fibra óptica", "consultorios", "guarderías", "agroalimentaria", "complemento"],
        },
        {
          point: "[Criterion B — 2/4] Evaluates green public investment critically (renewables, forestry/wildfire prevention, organic farming vs risk of profits leaving to outside corporations).",
          keywords: ["energía solar", "incendios", "cooperativas", "corporaciones", "formación profesional"],
        },
        {
          point: "[Criterion B — 3/4] Formulates concrete, coherent policy recommendations (basic public services, local hiring conditions, rehabilitated municipal housing).",
          keywords: ["vivienda", "cotrabajo", "rehabilitar", "transporte comarcal", "subvenciones verdes"],
        },
        {
          point: "[Criterion B — 4/4] Directly answers the «To what extent» judgement in a balanced conclusion (within 450–600 words).",
          keywords: ["estrategia pública integral", "duradera", "territorio olvidado", "modelo sostenible"],
        },
        {
          point: "[Criterion C — 1/2] Selects the MOST appropriate text type (Un informe) with formal institutional memo header and numbered analytical sections.",
          keywords: ["informe de evaluación", "comisión regional", "1. introducción", "2. alcance", "4. recomendaciones", "5. conclusión"],
        },
        {
          point: "[Criterion C — 2/2] Sustains an objective, impersonal third-person institutional register throughout (zero colloquialisms or informal address).",
          keywords: ["el presente informe", "esta representación", "se reinvierten", "se integren", "en conclusión"],
        },
      ],
      markbands: P1_HL_MARKBANDS,
      hints: [
        "When asked by a regional council to evaluate *to what extent* policies work and submit formal findings + recommendations, **Un informe** (analytical report) is the single MOST appropriate text type (*Una propuesta* is acceptable if pitched as a single initiative; *Una reseña* is inappropriate).",
        "Keep the voice strictly objective and impersonal (*El presente informe analiza...*, *A la luz del análisis expuesto...*) with formal metadata (*Para / De / Fecha*) and numbered sections.",
        "To unlock HL Band 10–12 on a *To what extent* evaluation, explicitly weigh limitations (remote work cannot fix missing clinics or non-remote rural jobs; green investment fails if profits flow solely to external corporations) before concluding with a conditional synthesis.",
      ],
      commonError: "Turning a formal report into a subjective opinion piece with exclamation marks or failing to judge *to what extent* each solution actually works.",
    },
  ],
};
