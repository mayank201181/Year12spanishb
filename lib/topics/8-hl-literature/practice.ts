import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ: 10 auto-marked HL checkpoint questions
  // ===========================================================================
  quiz: [
    {
      id: "8-hl-literature-quiz-q01",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "State",
      guideRef: "analisis-extracto-300-palabras",
      strategy: "Official HL vs SL IO prep window",
      question:
        "How many **minutes** of supervised preparation time do IB Spanish B **HL** candidates receive before their Individual Oral? (Enter a whole number.)",
      answer: { type: "number", value: 20, display: "20" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "15 minutes is the **SL** visual-stimulus prep window — HL gets 5 extra minutes (20 minutes) to dissect a ~300-word literary extract!",
        },
      ],
      hints: ["Remember HL candidates get 5 minutes longer than SL candidates (15 minutes)."],
      solution: [
        "SL Individual Oral preparation = 15 minutes (visual stimulus).",
        "HL Individual Oral preparation = **20 minutes** (~300-word literary extract).",
      ],
    },
    {
      id: "8-hl-literature-quiz-q02",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "State",
      guideRef: "analisis-extracto-300-palabras",
      strategy: "Cue-card limit",
      question:
        "What is the **maximum number of brief bullet points** an HL candidate may write on their preparation notes for the Individual Oral? (Enter a whole number.)",
      answer: { type: "number", value: 10, display: "10" },
      hints: ["The IB sets a strict cap on brief keyword cues — no full prose paragraphs allowed."],
      solution: [
        "IB regulations allow up to **10 brief bullet points** (keywords or short phrases, ideally 4–8 words each).",
      ],
    },
    {
      id: "8-hl-literature-quiz-q03",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Identify",
      guideRef: "recursos-literarios-metalenguaje",
      strategy: "Spanish narrative-time terminology",
      question:
        "Write the exact single-word Spanish literary term for a **flashback** (a jump backward in narrative time to reveal past events or trauma).",
      answer: { type: "text", accept: ["analepsis", "la analepsis"], display: "analepsis" },
      traps: [
        {
          spec: { type: "text", accept: ["prolepsis", "la prolepsis"] },
          feedback: "*Prolepsis* jumps **forward** in time (flash-forward). Look for the term that jumps **backward** (*ana-* = back/again).",
        },
      ],
      hints: ["It begins with *ana-* and ends in *-lepsis* (opposite of *prolepsis*)."],
      solution: [
        "**Analepsis** = flashback (moving backward in time).",
        "**Prolepsis** = flash-forward (moving forward in time).",
      ],
    },
    {
      id: "8-hl-literature-quiz-q04",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Identify",
      guideRef: "recursos-literarios-metalenguaje",
      strategy: "Authentic Spanish literary metalanguage",
      question:
        "Write the exact single-word Spanish literary term for **foreshadowing** (an early textual clue or omen hinting at a future crisis).",
      answer: { type: "text", accept: ["presagio", "el presagio"], display: "presagio" },
      hints: ["Avoid English calques! Think of the Spanish noun linked to *presagiar* (to forebode)."],
      solution: [
        "The authentic Spanish literary noun for foreshadowing is **presagio** (or *el presagio*).",
      ],
    },
    {
      id: "8-hl-literature-quiz-q05",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Identify",
      guideRef: "analisis-extracto-300-palabras",
      strategy: "Drama extract metalanguage",
      question:
        "In a theatrical play extract (such as Lorca's *La casa de Bernarda Alba* `[Example work — not a set text]`), what is the plural Spanish term for **stage directions** (usually italicised instructions about lighting, gestures, or silences)?",
      answer: { type: "text", accept: ["acotaciones", "las acotaciones"], display: "acotaciones" },
      hints: [
        "In drama extracts, this feature replaces much of a novelistic narrator's role.",
        "Starts with *acot-* and ends in *-ciones*.",
      ],
      solution: [
        "Stage directions in Spanish drama are called **acotaciones** (singular: *acotación*).",
      ],
    },
    {
      id: "8-hl-literature-quiz-q06",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Distinguish",
      guideRef: "recursos-literarios-metalenguaje",
      strategy: "Eliminate literary false friends",
      question:
        "Translate **fictional character** into exact, authentic Spanish literary terminology (one word — avoid the English false friend *carácter*!).",
      answer: { type: "text", accept: ["personaje", "el personaje"], display: "personaje" },
      traps: [
        {
          spec: { type: "text", accept: ["carácter", "el carácter"] },
          feedback: "False-friend alert! *El carácter* means temperament/personality — a fictional figure in a novel or play is **el personaje**.",
        },
      ],
      hints: [
        "*Carácter* refers to someone's personality or nature, not a figure in a story.",
        "Starts with *person-*.",
      ],
      solution: [
        "A fictional character in Spanish is **personaje** (*el personaje principal / secundario*).",
      ],
    },
    {
      id: "8-hl-literature-quiz-q07",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "State",
      guideRef: "puente-extracto-obra-tema",
      strategy: "Subjunctive after C1 bridge triggers",
      question:
        "Complete this Band 10–12 literary bridge sentence with the exact present-subjunctive form of *evidenciar*: *«De ahí que este diálogo breve _______ (evidenciar) la fractura entre ambas generaciones.»* (Write the single conjugated verb only.)",
      answer: { type: "text", accept: ["evidencie"], display: "evidencie" },
      traps: [
        {
          spec: { type: "text", accept: ["evidencia"] },
          feedback: "*Evidencia* is indicative! The C1 consequence connector **de ahí que** ALWAYS triggers the **subjunctive** (*evidencie*).",
        },
      ],
      hints: [
        "Identify the mood triggered by *de ahí que*.",
        "*Evidenciar* is a regular *-ar* verb; swap the thematic *-a* to *-e* for 3rd-person singular present subjunctive.",
      ],
      solution: [
        "*De ahí que* always requires the subjunctive mood.",
        "3rd-person singular present subjunctive of *evidenciar* (*este diálogo*) = **evidencie**.",
      ],
    },
    {
      id: "8-hl-literature-quiz-q08",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "State",
      guideRef: "discusion-io-hl-criterios",
      strategy: "HL IO 30-mark criterion breakdown",
      question:
        "Out of the **30 total marks** in the HL Individual Oral, how many marks are awarded for **Criterion A (Language)**? (Enter a whole number.)",
      answer: { type: "number", value: 12, display: "12" },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "6 marks each applies to Criteria B1, B2, and C — Criterion A (Language) carries double weight!",
        },
      ],
      hints: [
        "Criterion A represents 40% of the 30-mark oral.",
        "Recall the breakdown: A + B1 (6) + B2 (6) + C (6) = 30.",
      ],
      solution: [
        "Criterion A (Language) = **12** marks (with B1 = 6, B2 = 6, C = 6 → total 30 marks).",
      ],
    },
    {
      id: "8-hl-literature-quiz-q09",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "State",
      guideRef: "discusion-io-hl-criterios",
      strategy: "HL IO Part 1 ceiling",
      question:
        "What is the **maximum allowed duration (in minutes)** for **Part 1 (Presentation)** of the HL Individual Oral before the teacher must interrupt? (Enter a whole number.)",
      answer: { type: "number", value: 4, display: "4" },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "4–5 minutes is **Part 2** (Follow-up Discussion). Part 1 presentation is strictly **3–4 minutes**!",
        },
      ],
      hints: [
        "Remember the three-part sequence: 3–4 min · 4–5 min · 5–6 min.",
        "Part 1 has a strict upper ceiling so Parts 2 and 3 keep enough time.",
      ],
      solution: [
        "Part 1 (Presentation) lasts **3–4 minutes** (hard ceiling = **4** minutes; target 3:30–3:50).",
      ],
    },
    {
      id: "8-hl-literature-quiz-q10",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "State",
      guideRef: "puente-extracto-obra-tema",
      strategy: "HL literary curriculum core rule",
      question:
        "How many **complete literary works originally written in Spanish** must every IB Spanish B HL candidate study (with zero prescribed IB set-text list)? (Enter a whole number.)",
      answer: { type: "number", value: 2, display: "2" },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "IB Spanish B HL requires **2** literary works originally written in Spanish (you receive 1 extract from each during IO prep and pick 1).",
        },
      ],
      hints: [
        "During the 20-minute IO prep, you receive two ~300-word extracts — one from each studied work.",
        "This number has remained 2 in the FA2029 brief.",
      ],
      solution: [
        "IB Spanish B HL requires studying **2** literary works originally written in Spanish, chosen freely by the teacher.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS: EXACTLY 2 papers (p1, p2) × 15 questions each
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER P1: Close Reading, Literary Metalanguage & Textual Evidence (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "8-hl-literature-p1",
      title: "Practice Paper 1 · Close Reading, Metalanguage & Extract Dissection (HL)",
      level: "HL",
      questions: [
        {
          id: "8-hl-literature-p1-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Identify figurative comparison",
          question:
            "Read this original Spanish literary line:\n> *«La plaza vacía ardía bajo el sol de julio como una sartén olvidada sobre el fuego.»*\n\nName the exact single-word Spanish literary device signalled by *como* (include the Spanish accent mark).",
          answer: { type: "text", accept: ["símil", "el símil", "comparación", "la comparación"], display: "símil" },
          traps: [
            {
              spec: { type: "text", accept: ["metáfora", "la metáfora"] },
              feedback: "Because the explicit link *como* is present, this is a **símil**, not a *metáfora* (which omits *como*).",
            },
          ],
          hints: ["Notice the explicit comparative conjunction *como*."],
          solution: [
            "An explicit comparison linked by *como* / *igual que* is a **símil** (or *comparación*).",
          ],
        },
        {
          id: "8-hl-literature-p1-q02",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Identify sensory blending",
          question:
            "In the original line *«Su despedida dejó un eco frío y dulce en la escalera»*, which single-word Spanish literary device combines auditory (*eco*), tactile (*frío*), and gustatory (*dulce*) impressions?",
          answer: { type: "text", accept: ["sinestesia", "la sinestesia"], display: "sinestesia" },
          hints: ["Hearing + touch + taste merged inside one phrase has a specific Greek-origin name."],
          solution: [
            "Fusing perceptions from two or more distinct senses is **sinestesia** (*la sinestesia*).",
          ],
        },
        {
          id: "8-hl-literature-p1-q03",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Identify narrative perspective",
          question:
            "Read this original opening:\n> *«Yo observaba desde la esquina del café cómo Andrés doblaba la carta sin atreverse a leer la última página. Jamás sabré qué nombre figuraba en la firma.»*\n\nWrite the exact two-word Spanish term for this first-person observer narrator.",
          answer: { type: "text", accept: ["narrador testigo", "el narrador testigo"], display: "narrador testigo" },
          traps: [
            {
              spec: { type: "text", accept: ["narrador protagonista", "el narrador protagonista"] },
              feedback: "Although it uses *yo*, the speaker is merely observing Andrés's drama from the sidelines (*«Jamás sabré…»*) — that makes them a **narrador testigo**!",
            },
            {
              spec: { type: "text", accept: ["narrador omnisciente", "el narrador omnisciente"] },
              feedback: "A *narrador omnisciente* uses third person and knows everything; here the speaker uses *yo* and admits *«Jamás sabré»*.",
            },
          ],
          hints: [
            "Notice the first-person voice (*yo observaba*), yet the focal drama belongs to Andrés.",
            "The narrator explicitly admits limited knowledge (*Jamás sabré*).",
          ],
          solution: [
            "A first-person observer narrating someone else's actions with limited knowledge is a **narrador testigo**.",
          ],
        },
        {
          id: "8-hl-literature-p1-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Identify oxímoron",
          question:
            "In a poetic prose extract, the author describes an estranged couple's dinner as *«una cercanía abismal»* and *«un estruendo silencioso»*. Name the single-word Spanish literary device (with accent mark) joining two directly contradictory terms.",
          answer: { type: "text", accept: ["oxímoron", "el oxímoron"], display: "oxímoron" },
          hints: [
            "Look at *estruendo* (roar) + *silencioso* (silent) sitting directly next to each other.",
            "Remember the tilde on the *í*!",
          ],
          solution: [
            "Placing two directly opposite words together in one paradoxical expression is an **oxímoron**.",
          ],
        },
        {
          id: "8-hl-literature-p1-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Identify flash-forward",
          question:
            "Read this original narrative line:\n> *«Aquel domingo de sol, Clara ignoraba aún que, exactamente doce años después, esa misma llave le abriría la puerta de un exilio definitivo.»*\n\nName the single-word Spanish term for this deliberate leap forward in narrative time.",
          answer: { type: "text", accept: ["prolepsis", "la prolepsis"], display: "prolepsis" },
          traps: [
            {
              spec: { type: "text", accept: ["analepsis", "la analepsis"] },
              feedback: "*Analepsis* looks backward (flashback). Here the narrator leaps 12 years **forward** — that is **prolepsis**!",
            },
          ],
          hints: [
            "Check the direction of the time jump: *doce años después*.",
            "Starts with *pro-* (forward) and ends in *-lepsis*.",
          ],
          solution: [
            "Jumping forward to reveal a future outcome (*doce años después*) is **prolepsis** (flash-forward).",
          ],
        },
        {
          id: "8-hl-literature-p1-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Identify lexical cluster",
          question:
            "While annotating an extract in Minutes 2–7, you group the words *ceniza, ruina, óxido, polvo, abandono* to prove how diction builds a mood of decay. Write the exact two-word Spanish term (with accent mark) for a cluster of related words.",
          answer: { type: "text", accept: ["campo semántico", "el campo semántico", "un campo semántico"], display: "campo semántico" },
          hints: [
            "Think of the *C* in the **V–E–C–P** close-reading checklist.",
            "Two words: *campo* + adjective meaning 'of meaning' (with accent on the *á*).",
          ],
          solution: [
            "A cluster of vocabulary sharing a conceptual domain is a **campo semántico** (*campo semántico de la decadencia*).",
          ],
        },
        {
          id: "8-hl-literature-p1-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "State",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Subjunctive in literary interpretation",
          question:
            "Complete this Band 10–12 Spanish commentary sentence with the exact present-subjunctive form of *recurrir*: *«Es revelador que la autora _______ (recurrir) al silencio para sugerir la censura familiar.»* (Write the single conjugated verb only.)",
          answer: { type: "text", accept: ["recurra"], display: "recurra" },
          traps: [
            {
              spec: { type: "text", accept: ["recurre"] },
              feedback: "*Recurre* is indicative! Impersonal value judgements like *es revelador que* require the present subjunctive (**recurra**).",
            },
          ],
          hints: [
            "*Es revelador que* is an impersonal WEIRDO trigger demanding subjunctive.",
            "*Recurrir* is a regular *-ir* verb → 3rd-person singular present subjunctive ends in *-a*.",
          ],
          solution: [
            "*Es revelador que* triggers present subjunctive: *la autora* → **recurra**.",
          ],
        },
        {
          id: "8-hl-literature-p1-q08",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Analyse",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "T–E–M triangle on original prose",
          marks: 3,
          question:
            "Read this original Spanish literary line:\n> *«El reloj del comedor tragaba los minutos con hambre insaciable mientras la mesa permanecía intacta, cubierta de platos fríos.»*\n\nUsing the **T–E–M** approach (*Técnica + Cita → Efecto → Mensaje*), write 2–3 sentences in Spanish or English analysing how the writer transforms waiting into emotional anguish. (3 marks)",
          hints: [
            "Name the device giving the clock human hunger (*tragaba*, *hambre insaciable*) and embed a short quote.",
            "Explain the sensory/emotional contrast with *platos fríos* and *mesa intacta*.",
            "Link the mood to a broader meaning (e.g. abandonment, unresolved family absence, or oppressive domestic routine).",
          ],
          modelAnswer:
            "Mediante la personificación del reloj que «tragaba los minutos con hambre insaciable», el autor convierte el transcurso del tiempo en una fuerza voraz y amenazante. Este dinamismo agresivo contrasta con la inmovilidad gélida de los «platos fríos», acentuando un tono de desamparo y espera frustrada que revela la fractura afectiva dentro del hogar.",
          markScheme: [
            {
              point: "Correctly identifies personificación / personification with an embedded brief quote (e.g. «tragaba los minutos» / «hambre insaciable»).",
              keywords: ["personificación", "personification", "voraz", "amenazante"],
            },
            {
              point: "Analyses the tonal/sensory contrast (aggressive devouring time vs static cold plates) and emotional effect (anguish, abandonment, frustration).",
              keywords: ["contrasta", "contrasts", "inmovilidad", "desamparo", "espera frustrada", "anguish", "abandonment"],
            },
            {
              point: "Connects stylistic craft to wider thematic/interpersonal meaning (family breakdown, absence, oppressive routine).",
              keywords: ["fractura afectiva", "hogar", "family", "absence", "routine", "doméstic"],
            },
          ],
        },
        {
          id: "8-hl-literature-p1-q09",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Distinguish",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Contrast two types of irony",
          marks: 3,
          question:
            "Distinguish clearly between **verbal irony** and **dramatic irony** in Hispanic literary extracts, giving one concise original example of how dramatic irony shapes a reader's emotional response. (3 marks)",
          hints: [
            "Define how the speaker's intent operates in verbal irony (saying the opposite of what is meant).",
            "Explain the knowledge gap between reader/audience and character in dramatic irony.",
            "Show the emotional or critical impact (tension, pathos, or social critique) through a brief example.",
          ],
          modelAnswer:
            "En la ironía verbal, el hablante expresa deliberadamente lo contrario de lo que piensa para criticar o burlarse con sarcasmo. En cambio, la ironía dramática surge cuando el lector o espectador posee información decisiva que el personaje desconoce. Por ejemplo, si un protagonista celebra la lealtad de un socio que el lector ya sabe traidor, esa asimetría intensifica la tensión trágica y la compasión.",
          markScheme: [
            {
              point: "Accurately defines verbal irony (speaker intentionally says the opposite of literal meaning, often satirical/sarcastic).",
              keywords: ["contrario", "opposite", "sarcasmo", "sarcastic", "burlarse"],
            },
            {
              point: "Accurately defines dramatic irony (knowledge asymmetry: audience/reader knows a crucial truth hidden from the character).",
              keywords: ["desconoce", "asimetría", "hidden", "unaware", "información decisiva", "knowledge gap"],
            },
            {
              point: "Illustrates dramatic irony with a concrete example and explains its effect on reader tension, pathos, or critique.",
              keywords: ["traidor", "betray", "compasión", "pathos", "tensión trágica", "suspense"],
            },
          ],
        },
        {
          id: "8-hl-literature-p1-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Analyse",
          guideRef: "analisis-extracto-300-palabras",
          strategy: "Drama close reading (acotaciones + turns)",
          marks: 4,
          question:
            "Read this original short dramatic excerpt:\n> **DOÑA INÉS:** *(Sin apartar la vista del bordado, con voz helada)* Las ventanas de esta casa miran hacia adentro, Sofía. Lo que ocurre en la calle no nos pertenece.\n> **SOFÍA:** *(Deja caer las tijeras sobre la mesa; el golpe metálico resuena en la sala)* Pero el aire sí entra por las rendijas, madre. Aunque tape usted cada cristal.\n\nAnalyse how the playwright constructs generational conflict through **stage directions**, **spatial symbolism**, and **dialogue register**. (4 marks)",
          hints: [
            "Examine the italicised *acotaciones*: avoiding eye contact vs dropping the scissors loudly.",
            "Contrast enclosed interior space (*hacia adentro*, *cristal*) with unstoppable outside force (*el aire*, *rendijas*).",
            "Notice Sofía's formal *usted* paired with defiant interruption — what does that mix reveal about authority and rebellion?",
          ],
          modelAnswer:
            "Las acotaciones oponen el autocontrol autoritario de la madre («sin apartar la vista», «voz helada») a la ruptura abrupta de la hija mediante el «golpe metálico» de las tijeras, que quiebra sonoramente la sumisión doméstica. En el plano simbólico, las ventanas cerradas encarnan la clausura patriarcal, mientras el «aire» que se cuela por las «rendijas» simboliza un deseo imparable de emancipación. Finalmente, el uso del tratamiento formal «usted» combinado con la réplica desafiante evidencia cómo la rebeldía juvenil todavía negocia con códigos tradicionales de obediencia.",
          markScheme: [
            {
              point: "Analyses the contrast inside the acotaciones (mother's icy detachment vs loud metallic impact of scissors breaking silence).",
              keywords: ["acotaciones", "autocontrol", "autoritario", "sonoramente", "sumisión", "breaks silence", "detachment"],
            },
            {
              point: "Interprets the enclosed interior/windows as a symbol of control, seclusion, or patriarchal/traditional repression.",
              keywords: ["clausura", "patriarcal", "represión", "confinement", "control", "encierro"],
            },
            {
              point: "Interprets the air slipping through cracks as unstoppable freedom, agency, or generational change.",
              keywords: ["emancipación", "imparable", "freedom", "libertad", "agency", "autonomía"],
            },
            {
              point: "Comments on Sofía's register (formal usted paired with bold challenge showing tension between respect norms and defiance).",
              keywords: ["tratamiento formal", "réplica desafiante", "obediencia", "rebeldía", "defiance", "respect"],
            },
          ],
        },
        {
          id: "8-hl-literature-p1-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "analisis-extracto-300-palabras",
          strategy: "Cue-card engineering under 20-minute prep",
          marks: 3,
          question:
            "A classmate prepares for the HL Individual Oral by writing 10 dense paragraphs (220 words total) on their note sheet and plans to read them smoothly during Part 1. Explain **three distinct reasons** why this strategy will damage their marks across **Criteria A, B1, and C**. (3 marks)",
          hints: [
            "Think about pronunciation, natural intonation, and spontaneity on Criterion A.",
            "Consider IB rules on brief bullet cues and how reading off a sheet harms authentic textual engagement (B1).",
            "Think about eye contact, cognitive flexibility, and the shock of transitioning into unscripted Part 2 interaction (C).",
          ],
          modelAnswer:
            "En primer lugar, leer oraciones completas destruye la entonación natural y la fluidez espontánea, penalizando directamente el Criterio A. En segundo lugar, infringir el formato de viñetas breves fomenta una recitación mecánica que impide reaccionar con flexibilidad a los detalles del fragmento (Criterio B1). Por último, depender de un guion memorizado rompe el contacto visual y genera un contraste brusco al pasar a la interacción no ensayada de las Partes 2 y 3, debilitando el Criterio C.",
          markScheme: [
            {
              point: "Criterion A impact: reading full prose creates monotone/unnatural delivery and undermines authentic spoken fluency.",
              keywords: ["entonación", "fluidez espontánea", "intonation", "monotone", "natural delivery"],
            },
            {
              point: "Rule/Criterion B1 impact: violates brief bullet-cue format and produces rigid recitation instead of agile textual analysis.",
              keywords: ["viñetas breves", "recitación mecánica", "bullet", "recitation", "rigid"],
            },
            {
              point: "Criterion C impact: breaks eye contact/rapport and causes a jarring collapse when unscripted Parts 2–3 interaction begins.",
              keywords: ["contacto visual", "interacción", "no ensayada", "eye contact", "unscripted", "spontaneous"],
            },
          ],
        },
        {
          id: "8-hl-literature-p1-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Analyse",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Identify and interpret realismo mágico",
          marks: 4,
          question:
            "Read this original magical-realist passage:\n> *«Desde el día en que cerraron la mina del valle, las campanas de la iglesia comenzaron a sonar solas cada mediodía sin que nadie tirara de la cuerda. El párroco anotó el horario en su libreta con resignación y los vecinos aprendieron a sincronizar sus relojes con aquel lamento de bronce.»*\n\nAnalyse how the writer deploys **realismo mágico** and **tone** to convey collective memory and economic loss. (4 marks)",
          hints: [
            "Point out the impossible event (bells ringing untouched every noon) paired with deadpan bureaucratic normality (*anotó el horario en su libreta*, *sincronizar sus relojes*).",
            "Analyse the personifying metaphor *«lamento de bronce»* (bronze lament).",
            "Connect the closed mine to collective trauma, rural abandonment, or historical memory.",
          ],
          modelAnswer:
            "El pasaje ejemplifica el realismo mágico al integrar un prodigio inexplicable —las campanas tañendo solas— dentro de la rutina burocrática sin asombro alguno, como prueba el gesto pragmático de anotar el horario y sincronizar relojes. Mediante un tono sereno y aparentemente objetivo, la metáfora «lamento de bronce» transforma el sonido mecánico en duelo colectivo personificado. Así, lo sobrenatural materializa el trauma económico y la memoria persistente de una comunidad herida por el cierre industrial.",
          markScheme: [
            {
              point: "Explains the core mechanism of realismo mágico: an impossible event presented calmly as everyday routine without astonishment.",
              keywords: ["sin asombro", "prodigio", "rutina", "matter-of-fact", "everyday", "astonishment", "normalidad"],
            },
            {
              point: "Cites concrete textual proof of deadpan normality (priest noting the schedule / neighbours syncing watches).",
              keywords: ["burocrática", "pragmático", "horarios", "relojes", "syncing", "resignation", "calmly"],
            },
            {
              point: "Analyses the metaphor/personification «lamento de bronce» as grief or collective mourning.",
              keywords: ["duelo colectivo", "metáfora", "personificad", "mourning", "grief", "lament"],
            },
            {
              point: "Links the device to wider socio-economic meaning (industrial closure, persistent historical trauma, rural decline).",
              keywords: ["trauma económico", "cierre industrial", "comunidad herida", "economic decline", "abandonment", "persistente"],
            },
          ],
        },
        {
          id: "8-hl-literature-p1-q13",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Interpret",
          guideRef: "recursos-literarios-metalenguaje",
          strategy: "Upgrade Band 5–6 commentary into Band 10–12 Spanish",
          marks: 3,
          question:
            "Upgrade this weak Band 5 commentary into **two polished Band 10–12 Spanish sentences** using accurate literary metalanguage, a C1 analytical verb, and a subjunctive trigger:\n> *«El autor usa muchas palabras tristes como sombra y frío. Esto muestra que el carácter principal está muy triste y es muy interesante para el lector.»*\n\n(3 marks)",
          hints: [
            "Replace *«palabras tristes»* with *campo semántico* and fix the false friend *carácter* → *personaje*.",
            "Replace *«muestra»* / *«muy interesante»* with C1 verbs (*construye, agudiza, evidencia, cristaliza*).",
            "Include a genuine subjunctive structure such as *de ahí que + subj.*, *es revelador que + subj.*, or *para que + subj.*.",
          ],
          modelAnswer:
            "Mediante un campo semántico de la desolación articulado en torno a «sombra» y «frío», el autor construye una atmósfera opresiva que cristaliza el desamparo del personaje principal. De ahí que esta elección léxica suscite una profunda empatía en el lector, subrayando el aislamiento emocional que atraviesa toda la escena.",
          markScheme: [
            {
              point: "Replaces vague phrasing with authentic Spanish metalanguage (campo semántico + personaje instead of false friend carácter).",
              keywords: ["campo semántico", "personaje"],
            },
            {
              point: "Uses high-band C1 analytical verbs and precise emotional nouns (e.g. cristaliza, agudiza, evidencia, desamparo, opresiva, aislamiento).",
              keywords: ["cristaliza", "agudiza", "evidencia", "construye", "desamparo", "aislamiento", "opresiva"],
            },
            {
              point: "Incorporates an accurate subjunctive structure (e.g. de ahí que + subj., es revelador que + subj., para que + subj.).",
              keywords: ["suscite", "genere", "evidencie", "refleje", "acentúe", "transmita", "provoque", "perciba"],
            },
          ],
        },
        {
          id: "8-hl-literature-p1-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Analyse",
          guideRef: "analisis-extracto-300-palabras",
          strategy: "Full 4-Layer Close Analysis of an Original ~200-Word Extract",
          marks: 6,
          question:
            "Read this original self-contained Spanish literary extract (~190 words):\n> *«Cada domingo, Mateo acompañaba a su padre al puerto viejo para reparar las redes rasgadas. El anciano apenas hablaba; sus dedos curtidos por la sal conocían cada nudo con una paciencia que Mateo jamás había logrado imitar. Desde el muelle se divisaban ya las grúas metálicas del nuevo puerto comercial, gigantes de acero que avanzaban sobre la bahía como una marea imparable.*\n> *—Antes el mar nos daba el nombre —dijo el padre sin alzar la cabeza—. Ahora solo nos deja el ruido.*\n> *Mateo observó su propio teléfono vibrando en el bolsillo con un mensaje de la oficina de arquitectura en Valencia. ¿Cómo explicarle a aquel hombre de manos agrietadas que él mismo había dibujado los planos de una de aquellas torres de cristal? Guardó el aparato con un gesto brusco, tomó la aguja de madera y fingió concentrarse en la malla rota, sabiendo que el hilo entre sus dedos ya no bastaba para coser dos mundos que se alejaban.»*\n\nWrite a structured **HL literary close analysis** (in Spanish or English) covering: (1) narrative perspective & focalisation, (2) two contrasting symbols/metaphors with brief quotes, (3) semantic field & tone, and (4) the central thematic bridge to one IB Prescribed Theme. (6 marks)",
          hints: [
            "Check who we see inside: third-person *narrador equisciente* focalised through Mateo + *estilo indirecto libre* (*«¿Cómo explicarle…?»*).",
            "Contrast traditional craft symbols (*redes rasgadas, aguja de madera, dedos curtidos*) with industrial modernity (*grúas metálicas, gigantes de acero, torres de cristal, teléfono vibrando*).",
            "Analyse the closing metaphor (*«el hilo… ya no bastaba para coser dos mundos»*) and connect to *Identidades* or *Organización social* / *Compartir el planeta*.",
          ],
          modelAnswer:
            "El fragmento emplea un narrador equisciente en tercera persona focalizado en Mateo, recurriendo al estilo indirecto libre en la pregunta angustiada («¿Cómo explicarle…?») para sumergirnos en su dilema íntimo de culpa y lealtad. El texto se articula mediante una antítesis simbólica entre la tradición artesanal —encarnada en las «redes rasgadas», las «manos agrietadas» y la «aguja de madera»— y la modernización urbana, personificada y comparada en el símil de los «gigantes de acero» que avanzan «como una marea imparable». A ello se suma el contraste léxico del padre entre «el nombre» (identidad y pertenencia) y «el ruido» (alienación), que imprime un tono melancólico y crepuscular. La metáfora final del «hilo» incapaz de «coser dos mundos» sintetiza el punto de inflexión moral del protagonista, quien oculta su participación profesional en la transformación del litoral. Así, el pasaje dialoga con el tema prescrito de Identidades y Compartir el planeta, cuestionando el coste humano y cultural del progreso económico frente al patrimonio tradicional hispano.",
          markScheme: [
            {
              point: "Identifies limited third-person focalisation (narrador equisciente) and/or estilo indirecto libre in Mateo's internal question.",
              keywords: ["equisciente", "estilo indirecto libre", "focalizad", "free indirect", "internal question"],
            },
            {
              point: "Analyses symbols of traditional maritime craft/heritage with embedded quote (torn nets, wooden needle, weathered hands).",
              keywords: ["artesanal", "tradición", "patrimonio", "craft", "heritage", "manos agrietadas"],
            },
            {
              point: "Analyses contrasting imagery of industrial modernity (steel giants / unstoppable tide simile / glass towers / vibrating phone).",
              keywords: ["modernización", "antítesis", "símil", "simile", "industrial", "urban"],
            },
            {
              point: "Examines the father's aphorism or diction/tone (nombre vs ruido → melancholy, alienation, loss of identity).",
              keywords: ["melancólico", "alienación", "pertenencia", "melancholic", "alienation", "crepuscular"],
            },
            {
              point: "Interprets the final metaphor of the thread unable to stitch two worlds together as irreconcilable generational/ethical rupture.",
              keywords: ["ruptura", "punto de inflexión", "culpa", "irreconcil", "guilt", "moral"],
            },
            {
              point: "Bridges convincingly to an IB Prescribed Theme (Identidades / Compartir el planeta / Organización social) and Hispanic socio-cultural tension.",
              keywords: ["identidades", "compartir el planeta", "organización social", "progreso económico", "socio-cultural", "coste humano"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "The response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic plot paraphrase of the harbour scene with minimal literary terminology and little connection to theme.",
              indicators: ["Summarises Mateo and his father without analysing imagery or narrative voice.", "Quotes are absent or copied in long blocks without explanation."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Sound identification of key contrasts and tone with some embedded quotes and a relevant thematic link, though interpretation stays partly descriptive.",
              indicators: ["Notes tradition vs modernity and the father's sadness.", "Names 1–2 devices accurately with moderate analytical development."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Insightful, tightly anchored HL analysis fusing narrative voice, contrasting symbols, tone, and the closing metaphor into a nuanced thematic and cultural bridge.",
              indicators: ["Identifies focalisation / estilo indirecto libre and applies T–E–M seamlessly.", "Connects the micro-details directly to Prescribed Theme and Hispanic modernisation tensions."],
            },
          ],
        },
        {
          id: "8-hl-literature-p1-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Synthesize",
          guideRef: "analisis-extracto-300-palabras",
          strategy: "Convert an extract into a compliant ≤10-bullet HL IO cue card",
          marks: 6,
          question:
            "Using the original **harbour extract (*Mateo y su padre*)** from Question 14, design an IB-compliant **HL Individual Oral cue card** containing **8 concise bullet points (each strictly ≤ 8 words, zero full prose sentences)** organised explicitly across the **4 presentation blocks** (Contexto/Tesis · Análisis cercano · Obra y cultura · Tema y reflexión). (6 marks)",
          hints: [
            "Allocate roughly 1–2 bullets to Block 1, 3–4 bullets to Block 2 (the close-reading core!), 2 bullets to Block 3, and 1 bullet to Block 4.",
            "Keep every bullet crisp and telegraphic (nouns, arrows `→`, 2–4 word quotes — NO long conjugated prose!).",
            "Include literary metalanguage (*equisciente, símil, antítesis, metáfora*) and a concrete Hispanic cultural angle + Prescribed Theme.",
          ],
          modelAnswer:
            "**Bloque 1 · Contexto y tesis (0:00–0:40)**\n- Puerto viejo: choque generacional y progreso urbano.\n- Tesis: lealtad familiar frente a transformación litoral.\n\n**Bloque 2 · Análisis cercano (0:40–2:10)**\n- Narrador equisciente + estilo indirecto libre («¿Cómo explicarle?»).\n- Antítesis simbólica: «aguja de madera» vs «gigantes de acero».\n- Contraste léxico: «nombre» (raíces) frente a «ruido» (alienación).\n- Metáfora cierre: «hilo» roto → ruptura moral irreversible.\n\n**Bloque 3 · Obra y cultura hispana (2:10–3:10)**\n- Eco obra: silencio paterno previo → revelación final.\n- Contexto hispano: gentrificación costera y relevo generacional.\n\n**Bloque 4 · Tema y reflexión (3:10–3:45)**\n- Identidades y Compartir el planeta: ¿progreso sin desarraigo?",
          markScheme: [
            {
              point: "Includes Block 1 (Contexto y tesis) with crisp telegraphic framing of the central tension.",
              keywords: ["bloque 1", "tesis", "choque generacional", "lealtad familiar", "central tension"],
            },
            {
              point: "Devotes the largest share of bullets (3–4 cues) to Block 2 (Análisis cercano) with authentic Spanish metalanguage.",
              keywords: ["bloque 2", "equisciente", "estilo indirecto libre", "antítesis", "metáfora"],
            },
            {
              point: "Embeds ultra-short textual anchors (2–4 word quotes) rather than long copied lines.",
              keywords: ["aguja de madera", "gigantes de acero", "nombre", "ruido", "hilo"],
            },
            {
              point: "Includes Block 3 linking to wider work evolution and a specific Hispanic socio-cultural reality (e.g. coastal gentrification / rural-urban shift).",
              keywords: ["bloque 3", "gentrificación", "relevo generacional", "eco obra", "contexto hispano", "cultural"],
            },
            {
              point: "Includes Block 4 naming an IB Prescribed Theme and planting a reflective question/hook for Part 2.",
              keywords: ["bloque 4", "identidades", "compartir el planeta", "desarraigo", "reflexión"],
            },
            {
              point: "Maintains strict IB cue-card discipline (8–10 telegraphic bullets, arrow/keyword format, zero full prose paragraphs).",
              keywords: ["→", "vs", "frente a", "cierre"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "The response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Writes long prose sentences or omits major blocks, making the cue card unusable or non-compliant in an IB oral.",
              indicators: ["Bullets exceed 12–15 words or read like a memorised essay.", "Missing either close-reading quotes or cultural/thematic link."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Generally concise cue card covering most blocks, though analytical terminology or whole-work/cultural specificity is thin.",
              indicators: ["Stays under 10 bullets with readable structure.", "Includes basic theme reference but limited literary metalanguage."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Exam-ready HL cue architecture: 8–10 razor-sharp telegraphic cues balanced across all 4 blocks, loaded with quotes, metalanguage, culture, and a Part 2 hook.",
              indicators: ["Every bullet scans in under 2 seconds while preserving eye contact.", "Explicit 4-block timing flow prioritising close analysis (~40%)."],
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER P2: Extract → Work → Theme Bridges & FA2029 HL IO Criteria (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "8-hl-literature-p2",
      title: "Practice Paper 2 · Extract-to-Theme Bridges & FA2029 IO Mastery (HL)",
      level: "HL",
      questions: [
        {
          id: "8-hl-literature-p2-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "State",
          guideRef: "discusion-io-hl-criterios",
          strategy: "HL IO weighting in final diploma grade",
          question:
            "What **percentage (%)** of the total IB Spanish B HL final grade does the Individual Oral represent? (Enter the number only, without the % sign.)",
          answer: { type: "number", value: 25, display: "25" },
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback: "30 is the total **marks** of the Individual Oral — its final grade **weighting** is **25%** (Paper 1 = 25%, Paper 2 = 50%, IO = 25%).",
            },
          ],
          hints: ["Recall the external/internal split: Paper 1 = 25%, Paper 2 = 50%, Internal Assessment (IO) = ?"],
          solution: [
            "Paper 1 (25%) + Paper 2 (50%) + Individual Oral IA (**25%**) = 100%.",
          ],
        },
        {
          id: "8-hl-literature-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "State",
          guideRef: "discusion-io-hl-criterios",
          strategy: "Criterion B1 mark allocation",
          question:
            "How many marks are allocated specifically to **Criterion B1 (Message — Literary Extract)** in the HL Individual Oral? (Enter a whole number.)",
          answer: { type: "number", value: 6, display: "6" },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "12 marks is Criterion A (Language). Criterion B is split into B1 (6 marks) and B2 (6 marks)!",
            },
          ],
          hints: ["Remember Criterion B is split evenly between B1 (Extract) and B2 (Conversation)."],
          solution: [
            "Criterion B1 = **6** marks (A = 12, B1 = 6, B2 = 6, C = 6; total = 30).",
          ],
        },
        {
          id: "8-hl-literature-p2-q03",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "puente-extracto-obra-tema",
          strategy: "Map literary motif to Prescribed Theme",
          question:
            "An original ~300-word extract shows an indigenous grandmother fighting an international mining company to protect her river's water supply. Write the exact Spanish name of the **IB Prescribed Theme** that matches environmental justice and human rights.",
          answer: { type: "text", accept: ["Compartir el planeta", "Cómo compartimos el planeta"], display: "Compartir el planeta / Cómo compartimos el planeta" },
          hints: ["Recall the 5 Prescribed Themes: *Identidades, Experiencias, Ingenio humano, Organización social, Compartir el planeta* (*Cómo compartimos el planeta*)."],
          solution: [
            "Environmental protection, sustainability, and indigenous land/human rights sit directly under **Compartir el planeta** (official IBO Spanish title: **Cómo compartimos el planeta**).",
          ],
        },
        {
          id: "8-hl-literature-p2-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "State",
          guideRef: "puente-extracto-obra-tema",
          strategy: "Subjunctive in C1 cultural bridge",
          question:
            "Complete this C1 bridge sentence with the exact present-subjunctive form of *invitar*: *«De ahí que el fragmento nos _______ (invitar) a replantear los límites entre tradición y autonomía.»* (Write the single conjugated verb only.)",
          answer: { type: "text", accept: ["invite"], display: "invite" },
          traps: [
            {
              spec: { type: "text", accept: ["invita"] },
              feedback: "*Invita* is indicative! After **de ahí que**, you MUST conjugate in the subjunctive (**invite**).",
            },
          ],
          hints: [
            "Subject = *el fragmento* (3rd-person singular).",
            "*De ahí que* always requires the subjunctive mood.",
          ],
          solution: [
            "3rd-person singular present subjunctive of *invitar* after *de ahí que* = **invite**.",
          ],
        },
        {
          id: "8-hl-literature-p2-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "State",
          guideRef: "discusion-io-hl-criterios",
          strategy: "Imperfect subjunctive in hypothetical Part 2 discussion",
          question:
            "In Part 2, the teacher asks what you would do in the protagonist's place. Complete this Type 2 *si*-clause with the exact imperfect-subjunctive form of *estar* (`-ra` or `-se` form accepted): *«Si yo _______ (estar) en su lugar, rompería el silencio mucho antes.»* (Write the single conjugated verb only.)",
          answer: { type: "text", accept: ["estuviera", "estuviese"], display: "estuviera" },
          traps: [
            {
              spec: { type: "text", accept: ["estaba"] },
              feedback: "Never use imperfect indicative after hypothetical *si*! Use the imperfect subjunctive (**estuviera** / **estuviese**).",
            },
          ],
          hints: [
            "Hypothetical *si*-clauses take the *imperfecto de subjuntivo* built from the 3rd-person plural preterite (*estuvieron*).",
            "Drop *-ron* and add *-ra* (or *-se*).",
          ],
          solution: [
            "*Estuvieron* → stem *estuvie-* → **estuviera** (or *estuviese*).",
          ],
        },
        {
          id: "8-hl-literature-p2-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "State",
          guideRef: "discusion-io-hl-criterios",
          strategy: "Maximum total HL IO recording time",
          question:
            "What is the **maximum total duration (in minutes)** of an IB Spanish B HL Individual Oral recording across all three parts combined? (Enter a whole number.)",
          answer: { type: "number", value: 15, display: "15" },
          traps: [
            {
              spec: { type: "number", value: 20 },
              feedback: "20 minutes is the **preparation time**! The actual oral recording lasts **12–15 minutes** (max 15).",
            },
          ],
          hints: [
            "Remember the three-part oral timing: Part 1 is 3–4 min, Part 2 is 4–5 min, and Part 3 is 5–6 min.",
            "Add the upper limits of all three parts (4 + 5 + 6).",
          ],
          solution: [
            "4 + 5 + 6 = **15** minutes maximum (official range: 12–15 minutes).",
          ],
        },
        {
          id: "8-hl-literature-p2-q07",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "puente-extracto-obra-tema",
          strategy: "Map literary motif to Prescribed Theme",
          question:
            "An original extract follows a teen migrating from Bogotá to Madrid, recording the culture shock of his first winter and his nostalgia for family meals. Write the exact single-word Spanish name of the **IB Prescribed Theme** centred on life stories, migration, and rites of passage.",
          answer: { type: "text", accept: ["experiencias", "Experiencias"], display: "Experiencias" },
          hints: [
            "Recall the 5 Prescribed Themes: *Identidades, Experiencias, Ingenio humano, Organización social, Compartir el planeta*.",
            "*Historias de vida y migración* belongs to Theme 2.",
          ],
          solution: [
            "Migration narratives, life stories, and personal rites of passage sit directly under **Experiencias**.",
          ],
        },
        {
          id: "8-hl-literature-p2-q08",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "puente-extracto-obra-tema",
          strategy: "Surgical Backward-Forward whole-work bridge",
          marks: 3,
          question:
            "Explain how the **Backward-Forward Pair** strategy lets an HL candidate demonstrate deep whole-work knowledge in ~35 seconds during Block 3 without lapsing into chronological plot summary. (3 marks)",
          hints: [
            "Explain the *backward* anchor (identifying one prior event/cause that makes the extract's tension meaningful).",
            "Explain the *forward* anchor (tracing how a symbol, conflict, or character attitude evolves toward the ending).",
            "Explain why this keeps the speech analytical and protects Criterion B1 timing.",
          ],
          modelAnswer:
            "En lugar de narrar cada capítulo cronológicamente, el candidato selecciona únicamente un antecedente clave previo al fragmento que explique el origen emocional del conflicto actual. A continuación, vincula ese mismo motivo o rasgo del personaje con su transformación posterior hacia el desenlace. De este modo demuestra dominio integral del libro en apenas medio minuto, manteniendo un enfoque estrictamente interpretativo y respetando el techo de cuatro minutos.",
          markScheme: [
            {
              point: "Explains the backward link: selecting one pivotal earlier cause/moment that illuminates the extract's tension.",
              keywords: ["antecedente", "previo", "origen", "earlier cause", "prior moment", "before"],
            },
            {
              point: "Explains the forward link: tracing the evolution or resolution of that motif/character toward the ending.",
              keywords: ["transformación", "desenlace", "posterior", "evolution", "resolution", "ending"],
            },
            {
              point: "Explains the exam advantage: proves full-book mastery analytically within ~35s while avoiding plot-dumping / timing overrun.",
              keywords: ["dominio integral", "interpretativo", "cuatro minutos", "plot-dumping", "analytical", "timing"],
            },
          ],
        },
        {
          id: "8-hl-literature-p2-q09",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Evaluate",
          guideRef: "puente-extracto-obra-tema",
          strategy: "Replace cultural stereotypes with specific Hispanic context",
          marks: 3,
          question:
            "Read this weak Part 1 cultural link:\n> *«Este libro representa muy bien la cultura española porque los personajes viven en un pueblo pequeño y en España las familias siempre se pelean mucho por las tradiciones.»*\n\nIdentify **one flaw** in this cultural commentary and rewrite it as **two Band 10–12 Spanish sentences** rooted in concrete Hispanic socio-historical nuance. (3 marks)",
          hints: [
            "Diagnose the reductive cultural stereotype (*siempre se pelean mucho*) and lack of historical/social precision.",
            "Rewrite using nuanced phrasing (e.g. tension between rural continuity and youth mobility, *España vaciada*, or generational shifts in values).",
            "Use a Band 10–12 connector (*más allá del plano individual*, *si bien*, or *de ahí que + subj.*).",
          ],
          modelAnswer:
            "El defecto principal es recurrir a un estereotipo reduccionista («siempre se pelean») que homogeniza a toda una sociedad sin rigor histórico. Reescritura: «Más allá del ámbito doméstico, el conflicto ilustra las tensiones reales de la España rural contemporánea, donde el despoblamiento y el acceso a la educación superior redefinen los roles familiares tradicionales. De ahí que la escena refleje un choque histórico de valores más que una simple disputa personal.»",
          markScheme: [
            {
              point: "Correctly diagnoses the stereotyping / sweeping overgeneralisation lacking historical or sociological specificity.",
              keywords: ["estereotipo", "reduccionista", "homogeniza", "stereotype", "overgeneralisation", "generalización"],
            },
            {
              point: "Provides a concrete, nuanced Hispanic socio-cultural lens (e.g. rural depopulation, generational/educational transition, postwar/historical dynamics).",
              keywords: ["despoblamiento", "educación superior", "roles familiares", "choque histórico", "rural", "socio-históric"],
            },
            {
              point: "Employs authentic C1 discourse framing/connectors (e.g. más allá de, de ahí que + subj., si bien, no obstante).",
              keywords: ["más allá", "de ahí que", "refleje", "si bien", "no obstante", "evidencie"],
            },
          ],
        },
        {
          id: "8-hl-literature-p2-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Compare and contrast",
          guideRef: "discusion-io-hl-criterios",
          strategy: "Map Criterion B1 vs B2 vs C cleanly",
          marks: 4,
          question:
            "Compare and contrast what examiners assess in **Criterion B1**, **Criterion B2**, and **Criterion C** of the HL Individual Oral, noting how the **FA2029 subject brief** refines expectations in the top bands. (4 marks)",
          hints: [
            "State B1's scope: Part 1 presentation anchored on the ~300-word extract, whole work, and target culture (6 marks).",
            "State B2's scope: Parts 2 & 3 conversation — relevant, developed, critical responses across literature and an additional Prescribed Theme (6 marks).",
            "State C's scope: Interactive Skills — comprehension, spontaneity, natural flow, and active two-way reciprocity (6 marks).",
            "Mention the FA2029 refinement emphasising genuine spontaneous depth, critical thinking, and active conversational leadership.",
          ],
          modelAnswer:
            "El Criterio B1 (6 puntos) evalúa exclusivamente la calidad del mensaje en la Parte 1: rigor analítico sobre el fragmento literario, vínculo con la obra completa y sensibilidad cultural hispana. En cambio, el Criterio B2 (6 puntos) valora la profundidad, relevancia y pensamiento crítico de las respuestas durante el diálogo de las Partes 2 y 3, incluyendo el salto a otro tema prescrito. Por su parte, el Criterio C (6 puntos) mide las destrezas interactivas: comprensión fluida, espontaneidad y capacidad para mantener viva la comunicación. El resumen curricular FA2029 afina las bandas superiores de B2 y C para premiar la iniciativa conversacional genuina y la argumentación matizada frente a respuestas pasivas o memorizadas.",
          markScheme: [
            {
              point: "Accurately defines Criterion B1 (6 marks: Part 1 message, close extract analysis, whole-work & Hispanic cultural links).",
              keywords: ["parte 1", "fragmento literario", "obra completa", "6 puntos", "close extract", "whole-work"],
            },
            {
              point: "Accurately defines Criterion B2 (6 marks: Parts 2–3 conversation content, depth, relevance, critical insight, additional theme).",
              keywords: ["partes 2 y 3", "pensamiento crítico", "otro tema prescrito", "conversation", "additional theme", "depth"],
            },
            {
              point: "Accurately defines Criterion C (6 marks: comprehension, spontaneity, natural two-way interactive communication).",
              keywords: ["destrezas interactivas", "espontaneidad", "comprensión", "interactive", "spontaneity", "reciprocity"],
            },
            {
              point: "Highlights FA2029 top-band refinement (active conversational initiative, nuanced spontaneous argument vs passive/memorised replies).",
              keywords: ["iniciativa conversacional", "matizada", "memorizadas", "passive", "genuine", "initiative"],
            },
          ],
        },
        {
          id: "8-hl-literature-p2-q11",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Discuss",
          guideRef: "discusion-io-hl-criterios",
          strategy: "Apply P–E–E–C to a Part 2 literary follow-up question",
          marks: 4,
          question:
            "During **Part 2** (based on the original *San Lorenzo* extract where Elena hesitates to open her Salamanca university envelope beside her silent grandmother), the teacher asks:\n> *«¿Crees que la autora presenta el pueblo rural únicamente como un lugar negativo, o existe también un valor afectivo en las raíces?»*\n\nWrite a natural **Band 5–6 (B2 & C) Spanish oral turn** (70–100 words) applying all four steps of **P–E–E–C**. (4 marks)",
          hints: [
            "**P:** Acknowledge the nuance of the question warmly.",
            "**E:** Weigh both sides using a concessive structure (*si bien…, no obstante…* / *aunque…*).",
            "**E:** Cite concrete details from the extract (*cal de los muros, brasero, puntadas, promesa muda* vs *sobre azul*).",
            "**C:** Return a natural conversational hook to the teacher (*¿no le parece…?*).",
          ],
          modelAnswer:
            "Qué matiz tan pertinente; de hecho, creo que reducir el pueblo a una cárcel simplificaría demasiado la mirada de la autora. Si bien la atmósfera resulta opresiva por el «silencio pesado» y el tiempo estancado, no obstante detalles entrañables como la abuela cosiendo junto al brasero revelan un arraigo genuino y un deseo de proteger la memoria familiar. Precisamente esa ambivalencia hace tan dolorosa la decisión frente al sobre azul. Al fin y al cabo, marcharse duele solo cuando uno ama lo que deja atrás, ¿no le parece?",
          markScheme: [
            {
              point: "P (Paraphrase/Acknowledge): Opens with natural interactive validation of the teacher's nuance.",
              keywords: ["pertinente", "matiz", "simplificaría", "buena pregunta", "sugerente"],
            },
            {
              point: "E (Evaluate with concession): Balances claustrophobia against emotional rootedness using concessive C1 syntax.",
              keywords: ["si bien", "no obstante", "ambivalencia", "sin embargo", "aunque"],
            },
            {
              point: "E (Evidence): Grounds the balanced judgement in specific imagery/details from the extract.",
              keywords: ["brasero", "cosiendo", "arraigo", "memoria familiar", "silencio pesado"],
            },
            {
              point: "C (Connect back): Sustains authentic two-way exchange by inviting the teacher's perspective naturally.",
              keywords: ["¿no le parece", "¿usted cree", "¿cree usted", "otra lectura", "opina"],
            },
          ],
        },
        {
          id: "8-hl-literature-p2-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Discuss",
          guideRef: "discusion-io-hl-criterios",
          strategy: "Part 3 thematic pivot with intercultural comparison",
          marks: 4,
          question:
            "In **Part 3 (General Discussion)**, the teacher shifts to **Ingenio humano** and asks:\n> *«En la era de las redes sociales y la inteligencia artificial, ¿crees que la literatura sigue siendo necesaria para los jóvenes hispanohablantes?»*\n\nWrite a **Band 5–6 (B2 & C) Spanish response** (80–110 words) combining a concessive argument, a concrete Hispanophone cultural touchpoint, a thoughtful intercultural comparison, and an interactive closing hook. (4 marks)",
          hints: [
            "Acknowledge digital distraction (*si bien los algoritmos fragmentan la atención…*) before defending literature's irreplaceable empathy.",
            "Include a real Hispanophone cultural touchpoint (e.g. *Feria del Libro de Madrid / Guadalajara*, BookTok en español, contemporary Latin American short stories, or literary podcasts).",
            "Draw a brief comparison with international youth life (e.g. Singapore's fast-paced academic culture) and end conversationally.",
          ],
          modelAnswer:
            "Es una cuestión fascinante y muy actual. Si bien es cierto que el consumo acelerado de vídeos cortos reduce la concentración, no obstante la literatura ofrece un espacio irremplazable de empatía y pensamiento crítico que ningún algoritmo puede sustituir. De hecho, en el mundo hispano fenómenos como la Feria Internacional del Libro de Guadalajara o las comunidades juveniles de lectores digitales demuestran que los jóvenes siguen buscando relatos profundos. Aquí en Singapur observo una paradoja parecida: cuanto más acelerada es nuestra vida académica, más valoramos las historias que nos permiten detenernos. ¿Nota usted ese mismo fenómeno entre sus estudiantes?",
          markScheme: [
            {
              point: "Uses concessive evaluation acknowledging digital/AI tension while defending literature's critical/empathic value.",
              keywords: ["si bien", "no obstante", "empatía", "algoritmo", "concentración"],
            },
            {
              point: "Anchors argument in a concrete Hispanophone literary/cultural touchpoint (e.g. FIL Guadalajara, Feria de Madrid, BookTok hispano, podcasts).",
              keywords: ["guadalajara", "madrid", "comunidades juveniles", "feria", "hispan"],
            },
            {
              point: "Adds a nuanced intercultural comparison (e.g. international/Singapore student context without stereotyping).",
              keywords: ["singapur", "paradoja", "intercultural", "vida académica", "nuestro contexto"],
            },
            {
              point: "Closes with an authentic interactive question/hook to sustain Criterion C reciprocity.",
              keywords: ["¿nota usted", "¿no cree", "¿cree usted", "¿le parece", "estudiantes"],
            },
          ],
        },
        {
          id: "8-hl-literature-p2-q13",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Suggest",
          guideRef: "discusion-io-hl-criterios",
          strategy: "Real-time interactive recovery scripts",
          marks: 3,
          question:
            "Provide **three distinct, natural Band 10–12 Spanish phrases** for three high-pressure HL Individual Oral moments:\n1. Politely asking the teacher to clarify a fast or complex Part 3 question;\n2. Calmly self-repairing a mood slip (indicative instead of subjunctive) mid-sentence;\n3. Buying 3 seconds of natural thinking time before tackling an unexpected ethical question. (3 marks)",
          hints: [
            "Keep register respectful and natural (*usted* or consistent polite register).",
            "For self-repair, show a brief recast (*«perdón, quiero decir que + subjuntivo»*).",
            "For buying time, avoid empty *«ehhh... no sé»*; use reflective discourse markers (*«Es una pregunta muy sugerente…»*).",
          ],
          modelAnswer:
            "1. Aclaración cortés: «Disculpe, ¿podría matizar si se refiere al plano simbólico o al contexto histórico?»\n2. Autorreparación serena: «…es imprescindible que el protagonista toma —perdón, tome— una postura firme.»\n3. Ganar tiempo con naturalidad: «Qué ángulo tan interesante; nunca lo había contemplado exactamente así, pero diría que…»",
          markScheme: [
            {
              point: "Polite, natural Spanish clarification request protecting Criterion C without switching to English.",
              keywords: ["disculpe", "matizar", "podría repetir", "se refiere", "reformular"],
            },
            {
              point: "Smooth mid-sentence self-repair explicitly recasting indicative into accurate subjunctive.",
              keywords: ["perdón", "quiero decir", "tome", "hubiera", "sea", "tenga", "es decir"],
            },
            {
              point: "Idiomatic C1 reflective opening that buys thinking time gracefully instead of silent hesitation.",
              keywords: ["ángulo tan interesante", "nunca lo había", "sugerente", "diría que", "pensándolo bien"],
            },
          ],
        },
        {
          id: "8-hl-literature-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Synthesize",
          guideRef: "puente-extracto-obra-tema",
          strategy: "Drafting a complete 4-Block Band 10–12 Spanish Part 1 script",
          marks: 6,
          question:
            "Read this original self-contained Spanish literary extract (~165 words, set in a fictional postwar Spanish coastal town):\n> *«En la trastienda de la farmacia, don Álvaro guardaba tras los frascos de jarabe tres novelas prohibidas envueltas en papel de estraza. Cada jueves, al caer la tarde, Beatriz entraba fingiendo buscar pastillas para la tos y salía con un volumen escondido bajo el abrigo gris. Nadie hablaba en voz alta de aquellos préstamos clandestinos; bastaba un leve asentimiento detrás del mostrador.*\n> *—Las palabras no caducan, Beatriz —le susurró una noche el boticario, limpiándose las gafas con el pañuelo—. Si dejan de circular, nos quedamos ciegos aunque tengamos los ojos abiertos.*\n> *Al cruzar la plaza rumbo a casa, bajo la mirada inmóvil del busto de piedra y las farolas amarillas, Beatriz sintió que el peso del libro contra sus costillas latía como un segundo corazón. Por primera vez en aquel invierno interminable, el frío del puerto no consiguió calarle los huesos.»*\n\nDraft a **Band 10–12 Spanish HL IO Part 1 mini-presentation** (160–220 words) that flows seamlessly through **all four blocks**: (1) Contexto/Tesis, (2) Close T–E–M analysis with ≥ 3 short quotes, (3) Cultural/historical bridge to censorship & postwar memory in the Hispanic world, and (4) Prescribed Theme synthesis + Part 2 hook. (6 marks)",
          hints: [
            "Spot the core symbols: *novelas envueltas en papel de estraza*, *ceguera con los ojos abiertos* (paradox), *peso del libro… como un segundo corazón* (símil + vital heat vs *invierno interminable*).",
            "Spot the atmospheric surveillance symbols: *busto de piedra*, *farolas amarillas*, *susurró*, *asentimiento*.",
            "Include C1 subjunctive (*de ahí que*, *es significativo que*) and end with a thoughtful question/tension linking to *Ingenio humano* or *Organización social* / *Compartir el planeta*.",
          ],
          modelAnswer:
            "Este fragmento retrata un intercambio clandestino de libros censurados y plantea una tesis contundente: la lectura funciona como acto de resistencia moral frente al autoritarismo. Desde una narración en tercera persona focalizada en Beatriz, el campo semántico de la clandestinidad —«trastienda», «fingiendo», «susurró»— construye un tono de vigilancia opresiva reforzado por el simbolismo pétreo del «busto de piedra». Frente a ese control, la paradoja del boticario («nos quedamos ciegos aunque tengamos los ojos abiertos») desvela que la censura mutila la conciencia cívica. El punto de inflexión emocional llega con el símil vital del libro que «latía como un segundo corazón», contrapuesto al «invierno interminable» para sugerir que el pensamiento libre otorga calor y agencia interior. Más allá de esta escena, el episodio refleja la realidad histórica de la censura en dictaduras hispanas del siglo XX —tanto en la posguerra española como en el Cono Sur—, donde libreros y lectores protegieron la memoria cultural en secreto. De ahí que el pasaje dialogue directamente con Ingenio humano y Compartir el planeta (derechos humanos), dejándonos la pregunta de si hoy, sin censura oficial, la indiferencia digital amenaza esa misma libertad lectora.",
          markScheme: [
            {
              point: "Block 1: Establishes clear context and a sharp interpretive thesis connecting reading/literature to resistance against censorship.",
              keywords: ["resistencia", "autoritarismo", "tesis", "clandestino", "censurados"],
            },
            {
              point: "Block 2a: Analyses diction/semantic field of secrecy and/or oppressive surveillance symbolism with embedded quotes.",
              keywords: ["campo semántico", "vigilancia", "busto de piedra", "susurró", "trastienda"],
            },
            {
              point: "Block 2b: Analyses the apothecary's paradox (blindness with open eyes) AND/OR the closing simile (second heart vs endless winter).",
              keywords: ["paradoja", "símil", "segundo corazón", "invierno interminable", "ciegos"],
            },
            {
              point: "Block 3: Bridges convincingly to Hispanic socio-historical context (20th-century censorship in Spain and/or Latin America).",
              keywords: ["dictaduras", "posguerra", "cono sur", "siglo xx", "memoria cultural"],
            },
            {
              point: "Block 4: Synthesises with an explicit IB Prescribed Theme and plants a reflective closing hook for Part 2.",
              keywords: ["ingenio humano", "derechos humanos", "compartir el planeta", "organización social", "pregunta de si", "libertad lectora"],
            },
            {
              point: "Demonstrates Band 10–12 Spanish grammar & lexical precision (e.g. de ahí que + subjunctive, C1 analytical verbs like desvela/refuerza/construye).",
              keywords: ["de ahí que", "dialogue", "desvela", "construye", "agencia"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "The response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Mainly retells the plot of Beatriz visiting the pharmacy in simple B1 Spanish with minimal analysis or cultural context.",
              indicators: ["Repeats what happens without explaining metaphors or symbolism.", "Lacks Prescribed Theme or Hispanic historical framing."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Covers most blocks clearly with accurate observations on censorship and 1–2 devices, though C1 cohesion and deeper nuance are uneven.",
              indicators: ["Mentions secrecy and the 'second heart' image.", "Links broadly to dictatorship/censorship with functional B2 Spanish."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Seamless Band 10–12 HL presentation: razor-sharp thesis, layered T–E–M close reading, authentic Hispanic historical depth, explicit theme bridge, and C1 Spanish fluency.",
              indicators: ["Weaves 3+ micro-quotes naturally inside complex clauses including subjunctive.", "Ends with a rich critical hook tailor-made for Part 2."],
            },
          ],
        },
        {
          id: "8-hl-literature-p2-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Evaluate",
          guideRef: "discusion-io-hl-criterios",
          strategy: "Examiner calibration — diagnosing a flawed HL IO transcript",
          marks: 6,
          question:
            "Read this short **examiner observation note** on a mock HL Individual Oral:\n> *Candidate spoke for 4:25 before being stopped; spent 2:40 summarising Chapters 1–8 of the novel; named «metáfora» and «simbolismo» once without quoting a single line from the 300-word extract; gave brief 1-sentence answers in Part 2 waiting passively for prompts; used mostly present/preterite accurately with few complex structures; in Part 3 kept circling back to the same novel instead of engaging with the teacher's new theme of environmental ethics.*\n\nAct as an IB Spanish B HL examiner: evaluate this performance across **Criterion A (12)**, **Criterion B1 (6)**, **Criterion B2 (6)**, and **Criterion C (6)**, and give **two concrete, high-impact fixes** to lift the candidate into the top bands. (6 marks)",
          hints: [
            "Criterion A: accurate basics but lacks B2–C1 complexity (subjunctive, concessives, idiomatic literary register) → middle band (~6–7/12).",
            "Criterion B1: exceeded 4:00, plot-dumped 2:40, zero extract quotes → capped low (~2–3/6).",
            "Criterion B2: minimal Part 2 development + failed to shift into Part 3's new Prescribed Theme → capped low (~2–3/6).",
            "Criterion C: passive 1-sentence replies failing FA2029 interactive reciprocity → capped low-mid (~2–3/6).",
          ],
          modelAnswer:
            "En el Criterio A (12 puntos), aunque la precisión básica es aceptable, la ausencia de estructuras complejas (subjuntivo, concesivas, léxico literario C1) sitúa al candidato en una banda media (aprox. 6–7/12). En el Criterio B1 (6 puntos), sobrepasar el techo de cuatro minutos, desperdiciar dos minutos y medio en resumen argumental y no citar ni una frase del fragmento limita gravemente la nota (2–3/6). En el Criterio B2 (6 puntos), las respuestas monosilábicas en la Parte 2 y la negativa a transitar hacia el nuevo tema prescrito en la Parte 3 impiden demostrar amplitud cultural y pensamiento crítico (2–3/6). En el Criterio C (6 puntos), esperar pasivamente cada turno incumple la espontaneidad e iniciativa interactiva exigidas en las bandas altas FA2029 (2–3/6). Como mejoras urgentes: primero, reestructurar la Parte 1 al esquema de cuatro bloques dedicando ~90 segundos a citas breves mediante T–E–M y cerrando a los 3:45; segundo, entrenar turnos conversacionales P–E–E–C con ejemplos culturales concretos preparados para los cinco temas prescritos.",
          markScheme: [
            {
              point: "Evaluates Criterion A accurately (middle band ~6–8/12: basic accuracy present, but missing C1/B2 range, subjunctive, and literary register).",
              keywords: ["estructuras complejas", "subjuntivo", "banda media", "middle band", "complexity", "léxico literario"],
            },
            {
              point: "Evaluates Criterion B1 accurately (low band ~2–3/6: over 4:00 ceiling, plot summary dominates, zero extract quotes/close analysis).",
              keywords: ["techo de cuatro minutos", "resumen argumental", "sin citar", "no citar", "plot summary", "zero quotes"],
            },
            {
              point: "Evaluates Criterion B2 accurately (low band ~2–3/6: underdeveloped Part 2 answers + failure to pivot to Part 3's additional Prescribed Theme).",
              keywords: ["amplitud cultural", "nuevo tema prescrito", "transitar", "additional theme", "underdeveloped", "pivot"],
            },
            {
              point: "Evaluates Criterion C accurately (low-mid ~2–3/6: passive waiting breaks authentic two-way interaction under FA2029 top bands).",
              keywords: ["pasivamente", "iniciativa interactiva", "espontaneidad", "reciprocity", "passive", "two-way"],
            },
            {
              point: "Recommends a concrete Part 1 fix (4-block timing closing at 3:30–3:50, ~40% close reading with embedded quotes via T–E–M).",
              keywords: ["cuatro bloques", "3:45", "3:30", "citas breves", "t–e–m", "t-e-m"],
            },
            {
              point: "Recommends a concrete Parts 2–3 fix (P–E–E–C conversational turns + prepared Hispanic cultural anchors across all 5 Prescribed Themes).",
              keywords: ["p–e–e–c", "p-e-e-c", "cinco temas", "ejemplos culturales", "cultural anchors", "turnos conversacionales"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "The response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Gives general advice ('speak better Spanish', 'answer longer') without diagnosing all four IB criteria accurately.",
              indicators: ["Confuses Criterion B1, B2, and C roles.", "Offers vague tips rather than structured HL IO protocols."],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Diagnoses most criteria accurately and suggests sensible improvements, though lacks FA2029 precision or concrete structural fixes.",
              indicators: ["Spots the plot-summary error and Part 3 failure.", "Gives 1–2 solid practical fixes."],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authoritative examiner-grade calibration diagnosing A, B1, B2, and C with realistic band placement and surgical, high-leverage fixes.",
              indicators: ["Separates all four criteria cleanly (12/6/6/6) with FA2029 B2/C insight.", "Proposes concrete timing, T–E–M, and P–E–E–C interventions."],
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET: 8 high-level HL synthesis & critical analysis tasks
  // ===========================================================================
  challenge: [
    {
      id: "8-hl-literature-ch-q01",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Analyse",
      guideRef: "recursos-literarios-metalenguaje",
      strategy: "Unmasking an unreliable first-person narrator",
      marks: 6,
      question:
        "Read this original psychological-realism passage:\n> *«Aseguran mis hermanas que jamás quise a nuestro padre, pero eso solo demuestra lo ingrata que es la memoria ajena. Yo fui el único que cerró con doble llave su despacho la noche misma de su partida, para que nadie revolviera sus papeles ni cambiara de sitio una sola pluma. Si quemé sus cartas antiguas al amanecer fue por pura piedad filial: el polvo de los años enferma a los vivos. Nadie más tuvo el valor de proteger así su reputación.»*\n\nAnalyse how the writer exposes a **narrador poco fiable** (*unreliable narrator*) through **defensive rhetoric**, **ironic contradiction**, and **symbolic action**, and connect the extract to one IB Prescribed Theme. (6 marks)",
      hints: [
        "Contrast what the narrator *claims* (*piedad filial*, *proteger su reputación*) with what he *actually did* (double-locking the study immediately and burning his father's old letters at dawn!).",
        "Examine the controlling absolutes (*jamás, el único, nadie más*) and self-justifying metaphor (*el polvo de los años enferma a los vivos*).",
        "Notice how **ironía dramática** emerges as the reader sees through his cover-up, linking cleanly to *Identidades* (self-deception/memory) or *Organización social* (secrecy/power in families).",
      ],
      modelAnswer:
        "El texto construye un magistral narrador poco fiable cuya retórica defensiva desmiente sus propias intenciones. Desde el arranque, los absolutos categóricos («yo fui el único», «nadie más») y la descalificación de sus hermanas revelan un afán obsesivo por monopolizar el relato familiar. Se produce así una aguda ironía dramática: mientras el hablante invoca la «piedad filial» y la defensa de la reputación, sus acciones concretas —echar «doble llave» esa misma noche y quemar las cartas al amanecer— delatan censura, ocultamiento y posible culpabilidad. La metáfora pseudomédica de que «el polvo de los años enferma a los vivos» racionaliza la destrucción de la verdad histórica bajo una máscara de virtud. Al leer entre líneas, el fragmento dialoga con el tema de Identidades y Experiencias, cuestionando cómo el poder familiar manipula la memoria colectiva para fabricar versiones convenientes del pasado.",
      markScheme: [
        {
          point: "Identifies unreliable narration (narrador poco fiable) driven by self-justifying / defensive rhetoric.",
          keywords: ["poco fiable", "unreliable", "defensiva", "desmiente", "self-justifying"],
        },
        {
          point: "Analyses controlling/absolutist diction («el único», «nadie más», discrediting sisters) revealing obsession with narrative control.",
          keywords: ["absolutos", "monopolizar", "hermanas", "control", "obsesivo"],
        },
        {
          point: "Exposes the sharp ironic contradiction between claimed filial piety and concrete acts (double-locking study, burning letters at dawn).",
          keywords: ["ironía dramática", "ocultamiento", "censura", "contradicción", "burning", "cover-up"],
        },
        {
          point: "Interprets the metaphor «el polvo de los años enferma a los vivos» as moral rationalisation of erasing inconvenient truth.",
          keywords: ["racionaliza", "destrucción", "verdad histórica", "máscara", "rationalis", "erasing"],
        },
        {
          point: "Connects to the reader's active role (reading between the lines / suspecting hidden guilt).",
          keywords: ["culpabilidad", "entre líneas", "guilt", "between the lines", "delatan"],
        },
        {
          point: "Bridges convincingly to an IB Prescribed Theme (Identidades / Experiencias / Organización social) via manipulation of memory.",
          keywords: ["identidades", "experiencias", "organización social", "memoria colectiva", "manipula"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "The response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Takes the narrator at face value or only vaguely notes he seems suspicious without textual proof.",
          indicators: ["Believes he genuinely acted out of filial love.", "Does not analyse irony or controlling diction."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Recognises unreliability and the burning of the letters, with some literary commentary and a relevant theme link.",
          indicators: ["Contrasts words vs deeds clearly.", "Partial analysis of metaphor and rhetorical control."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Incisive HL literary critique unpacking unreliable voice, absolutist rhetoric, dramatic irony, rationalising metaphor, and thematic memory politics.",
          indicators: ["Uses T–E–M across multiple layers seamlessly.", "Links psychological self-deception to wider Hispanic/human memory themes."],
        },
      ],
    },
    {
      id: "8-hl-literature-ch-q02",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Compare and contrast",
      guideRef: "recursos-literarios-metalenguaje",
      strategy: "Comparative stylistic analysis of two miniature extracts",
      marks: 6,
      question:
        "Compare and contrast how **Extract A** and **Extract B** (both original sample passages on migration) create opposite emotional effects through **narrative voice**, **imagery**, and **tone**:\n- **Extract A:** *«Mi maleta pesa menos que la carta arrugada de mi abuela. En el metro gris de la capital, nadie mira a los ojos; cada estación me arranca una sílaba del acento que traje de mi tierra.»*\n- **Extract B:** *«Conviene celebrar la eficiencia ejemplar de nuestras fronteras modernas: tres sellos azules, dos horas en fila silenciosa y, ¡milagro burocrático!, un ser humano queda reducido a un número impecable en la pantalla.»*\n\n(6 marks)",
      hints: [
        "Contrast Voice: intimate 1st-person *narrador protagonista* in A vs detached/impersonal satirical voice (*conviene celebrar*) in B.",
        "Contrast Imagery & Devices: lyric hyperbole/metaphor of losing one's accent (*me arranca una sílaba*) in A vs biting *ironía verbal* (*eficiencia ejemplar*, *¡milagro burocrático!*) and dehumanising numerical reduction in B.",
        "Connect both extracts to *Experiencias* / *Identidades* / *Organización social* — personal identity erosion vs institutional dehumanisation.",
      ],
      modelAnswer:
        "Aunque ambos fragmentos abordan la experiencia migratoria, emplean estrategias estilísticas opuestas para conmover al lector. El Extracto A adopta un narrador protagonista en primera persona íntima, creando un tono elegíaco y vulnerable; mediante la hipérbole afectiva del peso de la carta y la metáfora dolorosa de que el metro «arranca una sílaba del acento», encarna la erosión progresiva de la identidad lingüística y emocional. Por el contrario, el Extracto B recurre a una voz impersonal y distante («conviene celebrar») cargada de ironía verbal mordaz y sarcasmo («eficiencia ejemplar», «¡milagro burocrático!»). En lugar de explorar la nostalgia íntima, denuncia la deshumanización institucional al contraponer «un ser humano» con «un número impecable». Así, mientras A ilumina el prisma personal de Identidades y Experiencias, B articula una sátira política vinculada a Organización social y derechos humanos.",
      markScheme: [
        {
          point: "Contrasts narrative perspective: intimate 1st-person protagonist in A vs detached/impersonal ironic voice in B.",
          keywords: ["protagonista", "íntima", "impersonal", "distante", "first-person", "detached"],
        },
        {
          point: "Contrasts tone accurately: melancholic/elegiac/vulnerable in A vs biting/satirical/sarcastic in B.",
          keywords: ["elegíaco", "vulnerable", "mordaz", "sarcasmo", "satíric", "melancholic"],
        },
        {
          point: "Analyses Extract A's lyrical imagery (heavy letter / metro stripping away syllables of accent → linguistic identity loss).",
          keywords: ["identidad lingüística", "erosión", "hipérbole", "metáfora", "accent", "linguistic identity"],
        },
        {
          point: "Analyses Extract B's verbal irony («¡milagro burocrático!», «eficiencia ejemplar») exposing institutional dehumanisation.",
          keywords: ["ironía verbal", "deshumanización", "institucional", "verbal irony", "dehumanis", "bureaucratic"],
        },
        {
          point: "Maintains explicit comparative structure throughout (e.g. mientras que, por el contrario, aunque ambos).",
          keywords: ["por el contrario", "mientras", "en lugar de", "whereas", "by contrast", "opuestas"],
        },
        {
          point: "Links both extracts to distinct IB Prescribed Themes (Identidades/Experiencias vs Organización social/derechos humanos).",
          keywords: ["identidades", "experiencias", "organización social", "derechos humanos", "sátira política"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "The response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Describes Extract A and Extract B separately with surface comments ('A is sad, B is angry') and minimal literary terminology.",
          indicators: ["No comparative connectors.", "Misses the verbal irony in Extract B."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear comparison noting tone and main devices in both passages, though stylistic depth or thematic synthesis is partly developed.",
          indicators: ["Identifies irony in B and sadness/identity loss in A.", "Uses some embedded quotations."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sophisticated integrated comparison contrasting voice, tone, figurative mechanics, and Prescribed Theme lenses across both extracts seamlessly.",
          indicators: ["Balances both extracts in woven comparative sentences.", "Demonstrates authentic Spanish literary metalanguage."],
        },
      ],
    },
    {
      id: "8-hl-literature-ch-q03",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "State",
      guideRef: "discusion-io-hl-criterios",
      strategy: "Pluperfect subjunctive in Part 2 counterfactual analysis",
      question:
        "During Part 2, you speculate about an alternate ending to your literary work using a Type 3 *si*-clause: *«Si la madre _______ (escuchar) a su hija a tiempo, la tragedia final no habría estallado.»* Write the exact two-word **pluperfect subjunctive** (*pluscuamperfecto de subjuntivo*) verb form (`-ra` or `-se` auxiliary accepted).",
      answer: { type: "text", accept: ["hubiera escuchado", "hubiese escuchado"], display: "hubiera escuchado" },
      traps: [
        {
          spec: { type: "text", accept: ["había escuchado"] },
          feedback: "*Había escuchado* is indicative! Past counterfactual *si*-clauses ALWAYS demand **hubiera / hubiese + participio**.",
        },
        {
          spec: { type: "text", accept: ["habría escuchado"] },
          feedback: "Never put conditional (*habría*) directly inside the *si*-clause! Use **hubiera escuchado** after *si* and *habría* in the result clause.",
        },
      ],
      hints: [
        "Type 3 *si*-clause formula: `Si + pluscuamperfecto de subjuntivo → condicional compuesto`.",
        "Auxiliary *haber* in imperfect subjunctive (3rd sing.) + past participle of *escuchar*.",
      ],
      solution: [
        "Imperfect subjunctive of *haber* (*ella*) = *hubiera* (or *hubiese*).",
        "Past participle of *escuchar* = *escuchado* → **hubiera escuchado**.",
      ],
    },
    {
      id: "8-hl-literature-ch-q04",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Analyse",
      guideRef: "analisis-extracto-300-palabras",
      strategy: "Interpreting structural silence & elipsis in drama",
      marks: 6,
      question:
        "Read this original theatrical closing scene:\n> **TOMÁS:** *(De pie junto a la puerta abierta, maleta en mano)* Dime una sola palabra, papá. Solo una, y dejo la maleta aquí.\n> *(Silencio espeso. El padre permanece de espaldas mirando el reloj parado de la pared. Afuera pasa un tren lejano cuyo silbido llena toda la estancia.)*\n> **PADRE:** *(Sin volverse, en voz muy baja)* Cierra bien el pestillo al salir. Esta noche refresca.\n> *(Tomás duda un instante, baja la mirada y sale. Oscuro lento.)*\n\nAnalyse how **acotaciones**, **elipsis emocional**, **lighting/sound staging**, and **symbolism** (*puerta abierta, reloj parado, tren lejano, pestillo*) construct the tragedy of unspoken affection. (6 marks)",
      hints: [
        "Note how the father never answers Tomás's emotional plea directly — deflecting into practical domestic trivia (*«Cierra bien el pestillo… refresca»*) creates devastating **subtexto / elipsis emocional**.",
        "Interpret the physical staging (*de espaldas*, *puerta abierta*, *silencio espeso*, *oscuro lento*).",
        "Contrast the **reloj parado** (father trapped in rigid past) with the **tren lejano** (inevitable departure/future).",
      ],
      modelAnswer:
        "La fuerza trágica de la escena descansa más en las acotaciones y los silencios que en el diálogo explícito. El contraste espacial entre la «puerta abierta» y el padre «de espaldas» visualiza una barrera afectiva infranqueable, mientras el simbolismo del «reloj parado» encarna el estancamiento emocional paterno frente al «tren lejano», presagio auditivo de una separación definitiva. El clímax llega mediante una devastadora elipsis emocional: ante la súplica de «una sola palabra», el padre rehúye toda ternura refugiándose en una orden trivial («cierra bien el pestillo»), cuyo subtexto oculta tanto orgullo inflexible como incapacidad generacional para expresar afecto. Finalmente, la acotación «oscuro lento» prolonga el vacío escénico, invitando al espectador a reflexionar —bajo el tema de Identidades— sobre el coste irreversible de las masculinidades silenciosas en la tradición familiar.",
      markScheme: [
        {
          point: "Analyses visual/physical staging in acotaciones (open door vs father turning his back / thick silence creating emotional barrier).",
          keywords: ["acotaciones", "barrera afectiva", "de espaldas", "visualiza", "physical barrier", "staging"],
        },
        {
          point: "Interprets the stopped wall clock as emotional stagnation / rigid entrapment in the past.",
          keywords: ["estancamiento", "reloj parado", "stagnation", "trapped in the past", "inmovil"],
        },
        {
          point: "Interprets the distant train whistle as auditory foreshadowing / inevitability of departure.",
          keywords: ["presagio", "separación definitiva", "foreshadow", "inevitab", "auditivo"],
        },
        {
          point: "Analyses the father's evasive domestic reply as devastating emotional ellipsis / subtext masking inability to express love.",
          keywords: ["elipsis emocional", "subtexto", "orden trivial", "incapacidad", "subtext", "evasion"],
        },
        {
          point: "Comments on the closing stage direction («oscuro lento») lingering on grief/emptiness.",
          keywords: ["oscuro lento", "vacío escénico", "slow blackout", "emptiness", "prolonga"],
        },
        {
          point: "Links the domestic tragedy to a Prescribed Theme (Identidades / Experiencias) and cultural codes of repressed emotion.",
          keywords: ["identidades", "experiencias", "masculinidades", "tradición familiar", "repressed", "generacional"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "The response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Summarises that Tomás leaves because his father is cold, largely ignoring stage directions and auditory/visual symbolism.",
          indicators: ["Treats the extract as dialogue only.", "Misses the symbolism of the clock, train, and blackout."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains the father's cold deflection and 2 symbols clearly, with some awareness of theatrical staging.",
          indicators: ["Recognises subtext in the latch line.", "Mentions stage directions with moderate depth."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Masterful theatrical close reading integrating proxemics, sound, lighting, contrasting symbols, emotional ellipsis, and cultural gender/family themes.",
          indicators: ["Treats acotaciones as primary literary language.", "Connects micro-staging cleanly to IB Prescribed Theme."],
        },
      ],
    },
    {
      id: "8-hl-literature-ch-q05",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Discuss",
      guideRef: "discusion-io-hl-criterios",
      strategy: "High-level Part 2 cross-work synthesis turn",
      marks: 6,
      question:
        "Imagine you studied **two contrasting Hispanic literary works** — Work 1, a rural domestic tragedy where rigid honour codes crush young women (similar in tradition to Lorca's *La casa de Bernarda Alba* `[Example work — not a set text]`), and Work 2, a magical-realist family novel where cooking and emotion subvert repression (similar in tradition to Esquivel's *Como agua para chocolate* `[Example work — not a set text]`).\n\nIn **Part 2**, your teacher asks:\n> *«Al comparar las dos obras que hemos estudiado este año, ¿dirías que el espacio doméstico siempre funciona como prisión, o puede transformarse en espacio de resistencia?»*\n\nWrite a **Band 6 (B2 & C) Spanish comparative oral response** (110–150 words) demonstrating concessive nuance, concrete thematic contrast between both works, C1 grammar, and an interactive closing turn. (6 marks)",
      hints: [
        "Open warmly, validating the comparative depth of the prompt.",
        "Contrast Work 1 (domestic space as surveillance, rigid honour, suffocating silence) with Work 2 (kitchen/domesticity reclaimed as creative, subversive sanctuary through magical realism).",
        "Weave in at least one Band 10–12 subjunctive or conditional structure (*si bien…, no obstante…, aunque parezca…, de ahí que…*) and close interactively.",
      ],
      modelAnswer:
        "Me encanta esa comparación porque ilumina precisamente la evolución del símbolo doméstico en la literatura hispana. Si bien en la primera obra la casa cerrada actúa como una cárcel vigilada por el código del honor y el miedo al qué dirán —anulando cualquier voz disidente—, no obstante en la segunda novela presenciamos una subversión fascinante: la cocina, tradicionalmente asociada a la sumisión femenina, se transforma mediante el realismo mágico en un laboratorio de identidad, memoria y rebeldía afectiva. De ahí que el espacio doméstico no posea un significado fijo, sino que dependa de quién controle la palabra y la creatividad dentro de sus muros. Personalmente, esa dualidad me hace pensar que la resistencia a menudo nace dentro de las mismas estructuras que intentan silenciarnos, ¿no cree usted?",
      markScheme: [
        {
          point: "Opens with warm, natural interactive engagement validating the comparative angle.",
          keywords: ["me encanta", "ilumina", "comparación", "sugerente", "fascinante"],
        },
        {
          point: "Analyses Work 1's domestic setting as surveillance, rigid honour codes, and silencing confinement.",
          keywords: ["cárcel", "código del honor", "qué dirán", "vigilada", "voz disidente"],
        },
        {
          point: "Contrasts Work 2's domestic/culinary setting reclaimed as creative identity, memory, or subversive resistance.",
          keywords: ["subversión", "cocina", "laboratorio", "rebeldía", "realismo mágico", "creatividad"],
        },
        {
          point: "Synthesises an overarching critical thesis (domestic meaning is not static; depends on voice/agency).",
          keywords: ["significado fijo", "controle la palabra", "dualidad", "mismas estructuras", "agency"],
        },
        {
          point: "Uses accurate Band 10–12 C1 grammar (concessive si bien… no obstante… AND subjunctive trigger such as de ahí que + subj.).",
          keywords: ["si bien", "no obstante", "de ahí que", "posea", "dependa", "controle"],
        },
        {
          point: "Sustains Criterion C reciprocity with a natural closing question/invitation to the teacher.",
          keywords: ["¿no cree", "¿no le parece", "¿opina usted", "¿piensa usted"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "The response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Gives a brief or one-sided reply summarising one work without real comparative analysis.",
          indicators: ["Agrees simply without contrasting both works.", "Basic B1 Spanish with little critical synthesis."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly contrasts confinement in Work 1 with resistance in Work 2 using competent B2 Spanish, though deeper synthesis or conversational sparkle is partial.",
          indicators: ["Covers both works accurately.", "Uses basic contrast connectors (*pero*, *en cambio*)."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Outstanding Band 6 B2/C comparative oral turn: nuanced conceptual synthesis, C1 subjunctive/concessive mastery, and authentic conversational leadership.",
          indicators: ["Synthesises a transferable literary principle beyond plot.", "Invites genuine reciprocal dialogue effortlessly."],
        },
      ],
    },
    {
      id: "8-hl-literature-ch-q06",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Identify",
      guideRef: "recursos-literarios-metalenguaje",
      strategy: "Distinguish hipérbaton, elipsis, anáfora, and metonimia",
      question:
        "Read this original poetic Spanish line:\n> *«Callaron las calles, callaron los patios, callaron incluso las campanas del alba.»*\n\nName the exact single-word Spanish rhetorical device (with accent mark) created by repeating *callaron* at the start of three successive clauses to hammer home collective fear.",
      answer: { type: "text", accept: ["anáfora", "la anáfora"], display: "anáfora" },
      traps: [
        {
          spec: { type: "text", accept: ["aliteración", "la aliteración"] },
          feedback: "*Aliteración* repeats a single sound/phoneme; repeating the exact same word at the start of successive clauses is **anáfora**!",
        },
      ],
      hints: [
        "Notice the exact verb *callaron* repeated at the opening of all three parallel clauses.",
        "Starts with *aná-* (accent on the second *a*).",
      ],
      solution: [
        "Repeating the same word(s) at the beginning of consecutive clauses/lines is **anáfora** (*la anáfora*), reinforcing hypnotic urgency or oppressive silence.",
      ],
    },
    {
      id: "8-hl-literature-ch-q07",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "puente-extracto-obra-tema",
      strategy: "Choosing the higher-yield extract during Minutes 0–2",
      marks: 4,
      question:
        "At the start of your **20-minute HL IO preparation**, you are handed two ~300-word extracts from your two studied works:\n- **Extract 1:** A fast-paced car chase across Madrid with twelve short lines of action dialogue, minimal imagery, and no clear cultural specificity.\n- **Extract 2:** A quiet funeral breakfast in an Andean town where an estranged daughter notices her mother's cracked porcelain cup, recalls an earlier betrayal (*analepsis*), and silently refuses to wear the black veil expected by the neighbours.\n\nEvaluate which extract you should select in **Minutes 0–2** and justify your decision using **four concrete IB assessment criteria arguments**. (4 marks)",
      hints: [
        "Assess literary device density (symbolism of cracked porcelain & black veil, analepsis, silence) → Criterion B1.",
        "Assess Hispanic cultural specificity (mourning codes, community scrutiny, generational/gender expectations) → Criterion B1 & B2.",
        "Assess opportunities for Band 10–12 Spanish grammar (speculation, subjunctive, nuanced psychological vocabulary) → Criterion A.",
        "Assess Part 2 discussion hooks (moral ambiguity of defying community mourning norms) → Criterion B2 & C.",
      ],
      modelAnswer:
        "Sin duda conviene seleccionar el Extracto 2 durante los dos primeros minutos. En primer lugar, ofrece una densidad estilística superior —simbolismo del velo negro y la taza agrietada, analepsis y silencio cargado— que permite aplicar T–E–M con citas breves en lugar de resumir acción superficial (Criterio B1). En segundo lugar, integra un anclaje cultural hispano específico en torno a los códigos de luto y la presión comunitaria andina, evitando tópicos vacíos. En tercer lugar, la complejidad psicológica exige léxico abstracto y estructuras C1 como el subjuntivo valorativo, impulsando el Criterio A. Por último, la rebeldía silenciosa de la hija siembra dilemas éticos fértiles que garantizan un diálogo espontáneo profundo en la Parte 2 (Criterios B2 y C).",
      markScheme: [
        {
          point: "Selects Extract 2 and justifies via higher stylistic/symbolic density (cracked cup, black veil, analepsis) avoiding plot-summary trap on B1.",
          keywords: ["extracto 2", "densidad estilística", "t–e–m", "velo negro", "taza agrietada", "symbolism"],
        },
        {
          point: "Justifies via authentic Hispanic socio-cultural lens (mourning rituals, communal expectations) supporting B1/B2 cultural depth.",
          keywords: ["anclaje cultural", "luto", "presión comunitaria", "mourning", "cultural specificity"],
        },
        {
          point: "Justifies via Criterion A linguistic opportunity (abstract psychological diction, subjunctive/concessive structures vs flat action verbs).",
          keywords: ["léxico abstracto", "subjuntivo", "criterio a", "psychological", "complex structures"],
        },
        {
          point: "Justifies via Part 2 conversational richness (ethical ambiguity providing fertile hooks for Criteria B2 & C).",
          keywords: ["dilemas éticos", "parte 2", "criterios b2 y c", "ambiguity", "discussion hooks"],
        },
      ],
    },
    {
      id: "8-hl-literature-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "To what extent",
      guideRef: "discusion-io-hl-criterios",
      strategy: "Extended Band 10–12 Part 3 debate synthesis (FA2029 focus)",
      marks: 8,
      question:
        "In **Part 3 (General Discussion)** under **Compartir el planeta** and **Identidades**, your teacher poses a challenging synthesis question:\n> *«¿Hasta qué punto pueden la literatura y el arte transformar realmente las injusticias sociales en el mundo hispanohablante, o se limitan únicamente a reflejarlas sin cambiar la realidad?»*\n\nWrite a **Band 10–12 Spanish extended argumentative response** (180–230 words) as a model synthesis demonstrating: (1) balanced concessive framing (*hasta qué punto*), (2) limitations of art/literature alone, (3) transformative power of literature in empathy & historical memory, (4) at least two concrete Hispanophone cultural/literary traditions (tagging any named work `[Example work — not a set text]`), (5) Band 10–12 grammatical range (subjunctive + conditional/concessive), and (6) a nuanced personal conclusion inviting further dialogue. (8 marks)",
      hints: [
        "Structure as a balanced critical debate: concede limits first (books don't directly pass laws or abolish poverty overnight), then demonstrate indirect structural power (awakening empathy, preserving silenced historical memory, questioning norms).",
        "Reference authentic Hispanophone movements (e.g., *el teatro social de Lorca* / *La casa de Bernarda Alba* `[Example work — not a set text]`, *el Boom latinoamericano* & historical memory, *el muralismo mexicano*, or contemporary Hispanic documentary/youth poetry).",
        "Include at least two high-band grammar structures (`aunque + subj.`, `de ahí que + subj.`, `si bien… no obstante…`, `si no existiera… habría…`).",
      ],
      modelAnswer:
        "Se trata de una cuestión tan profunda como necesaria, porque exige evitar tanto el cinismo absoluto como el idealismo ingenuo. Si bien es innegable que una novela o una obra teatral no aprueban leyes ni erradican la desigualdad material de la noche a la mañana, no obstante reducir la literatura a un espejo pasivo subestimaría su fuerza transformadora a largo plazo. En el mundo hispanohablante, la ficción y el arte han funcionado históricamente como conciencia crítica y archivo de la memoria silenciada: desde la denuncia del autoritarismo patriarcal en obras como *La casa de Bernarda Alba* [Example work — not a set text] hasta la crítica de la impunidad política en el realismo mágico latinoamericano o el muralismo mexicano de posrevolución. Aunque una página por sí sola no derribe injusticias estructurales, despierta empatía radical, cuestiona normas normalizadas y forma ciudadanos más críticos; de ahí que las dictaduras siempre hayan temido y censurado a los escritores. En definitiva, si no existiera esa imaginación ética que la literatura cultiva, difícilmente surgiría la voluntad colectiva para impulsar reformas reales. Así pues, creo que el arte no sustituye a la acción política, pero sí enciende la chispa cultural que la vuelve posible, ¿no le parece?",
      markScheme: [
        {
          point: "Frames the 'to what extent' debate with balanced critical poise, explicitly rejecting simplistic extremes.",
          keywords: ["cinismo", "idealismo", "equilibri", "extremos", "avoid both"],
        },
        {
          point: "Concedes realistic limitations (literature alone does not directly legislate or abolish structural poverty overnight).",
          keywords: ["no aprueban leyes", "erradican", "desigualdad material", "noche a la mañana", "legislation", "overnight"],
        },
        {
          point: "Argues literature's long-term transformative power (awakening empathy, questioning normalised norms, preserving silenced memory).",
          keywords: ["conciencia crítica", "memoria silenciada", "empatía radical", "normas normalizadas", "empathy"],
        },
        {
          point: "Cites at least two authentic Hispanophone literary/artistic traditions (with any named work tagged [Example work — not a set text]).",
          keywords: ["example work", "muralismo", "realismo mágico", "posrevolución", "teatro"],
        },
        {
          point: "Reinforces argument with persuasive historical logic (dictatorships censor writers precisely because words hold real political power).",
          keywords: ["dictaduras", "censurado", "temido", "censor", "escritores"],
        },
        {
          point: "Deploys accurate C1 concessive and subjunctive grammar (e.g. si bien… no obstante…, aunque + subj., de ahí que + subj.).",
          keywords: ["si bien", "no obstante", "derribe", "de ahí que", "hayan temido"],
        },
        {
          point: "Uses hypothetical/conditional reasoning accurately (e.g. si no existiera… surgiría…).",
          keywords: ["si no existiera", "surgiría", "subestimaría", "impulsar reformas"],
        },
        {
          point: "Concludes with a nuanced personal judgement (art sparks the cultural shift enabling political action) + natural interactive close.",
          keywords: ["chispa cultural", "acción política", "¿no le parece", "en definitiva", "sustituye"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "The response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "One-sided opinion ('literature is important') with generic claims, minimal Hispanic cultural grounding, and basic B1 language.",
          indicators: ["No counter-argument or concession.", "No specific Hispanophone artistic/literary context."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Presents both sides briefly with one relevant Hispanic reference and generally clear B2 Spanish, though reasoning stays predictable.",
          indicators: ["Mentions empathy and some limits of art.", "Functional connectors without C1 subjunctive/conditional control."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Well-developed, nuanced discussion balancing limits and transformative impact with solid Hispanophone references and varied B2–C1 structures.",
          indicators: ["Clear concessive argument and concrete historical insight.", "Accurate subjunctive/conditional usage in most places."],
        },
        {
          band: "7–8",
          marks: [7, 8],
          descriptor: "Exceptional Band 10–12 HL synthesis: intellectually sophisticated judgement, vivid Hispanophone cultural literacy, effortless C1 grammar, and authentic interactive polish.",
          indicators: ["Weaves multiple Hispanic traditions and historical censorship evidence seamlessly.", "Natural, memorable concluding synthesis inviting further exchange."],
        },
      ],
    },
  ],
};
