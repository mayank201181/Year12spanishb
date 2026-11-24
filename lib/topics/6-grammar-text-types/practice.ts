import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ (10 AUTO-MARKED SHORT QUESTIONS)
  // =========================================================================
  quiz: [
    {
      id: "6-grammar-text-types-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "subjuntivo-completo",
      question:
        "Conjugate *tener* in the **present subjunctive** (*nosotros*) to complete: *Es fundamental que todos nosotros ______ (tener) acceso a agua limpia.*",
      answer: { type: "text", accept: ["tengamos"], display: "tengamos" },
      traps: [
        {
          spec: { type: "text", accept: ["tenemos"] },
          feedback: "*Tenemos* is present indicative — *es fundamental que* triggers the present subjunctive from the *yo* stem *teng-*.",
        },
        {
          spec: { type: "text", accept: ["tendremos"] },
          feedback: "*Tendremos* is future indicative — *es fundamental que* requires the present subjunctive (**tengamos**).",
        },
      ],
      hints: [
        "Start from the *yo* present indicative of *tener* (*tengo*) and drop *-o*.",
        "Add the opposite *-er* subjunctive ending for *nosotros* (*-amos*).",
      ],
      solution: [
        "1. *Es fundamental que* is a WEIRDO impersonal trigger in the Present Zone → **present subjunctive**.",
        "2. *yo* present indicative: *tengo* → stem *teng-* + *-amos* = **tengamos**.",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "subjuntivo-completo",
      question:
        "Give the exact **present subjunctive** (*ellos/ellas*) of the DISHES irregular verb *saber*: *No creo que ellos ______ (saber) las consecuencias del proyecto.*",
      answer: { type: "text", accept: ["sepan"], display: "sepan" },
      traps: [
        {
          spec: { type: "text", accept: ["saben"] },
          feedback: "*Saben* is indicative; negated certainty (*no creo que*) triggers the subjunctive.",
        },
        {
          spec: { type: "text", accept: ["saban"] },
          feedback: "*Saber* is a DISHES irregular verb whose subjunctive stem is *sep-*.",
        },
      ],
      hints: [
        "*No creo que* expresses doubt/denial (WEIRDO).",
        "*Saber* is the final **S** in **DISHES** (*dé, vaya, sea, haya, esté, sepa*).",
      ],
      solution: [
        "1. *No creo que* triggers the **present subjunctive**.",
        "2. Irregular DISHES stem for *saber* is *sep-* → *ellos* form: **sepan**.",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "contrastes-clave-por-para-ser-estar",
      question:
        "Type **por** or **para** to complete the deadline phrase: *El comité debe entregar el informe ambiental ______ el próximo lunes.*",
      answer: { type: "text", accept: ["para"], display: "para" },
      traps: [
        {
          spec: { type: "text", accept: ["por"] },
          feedback: "*Por* expresses duration or cause; a specific future **deadline** ALWAYS takes **para**.",
        },
      ],
      hints: [
        "Is *el próximo lunes* a duration/cause or a specific future deadline?",
      ],
      solution: [
        "Deadlines (“by next Monday”) point forward to a target limit → **para**.",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "contrastes-clave-por-para-ser-estar",
      question:
        "Type **por** or **para** to complete the cause phrase: *Tuvieron que cancelar el concierto al aire libre ______ la lluvia torrencial.*",
      answer: { type: "text", accept: ["por"], display: "por" },
      traps: [
        {
          spec: { type: "text", accept: ["para"] },
          feedback: "*Para* points to a goal or purpose; the **cause/reason** behind an event takes **por**.",
        },
      ],
      hints: [
        "Replace the blank with “because of” — which preposition expresses cause or motive?",
      ],
      solution: [
        "Cause/reason (“because of the torrential rain”) ALWAYS takes **por**.",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "contrastes-clave-por-para-ser-estar",
      question:
        "Conjugate *ser* or *estar* in the present tense (*3rd person singular*) for an **event location**: *La ceremonia de graduación ______ en el auditorio municipal.*",
      answer: { type: "text", accept: ["es"], display: "es" },
      traps: [
        {
          spec: { type: "text", accept: ["está"] },
          feedback: "Physical buildings take *estar*, but **events** (“takes place at”) ALWAYS take **ser** (*es*).",
        },
      ],
      hints: [
        "Is *la ceremonia de graduación* a physical object or a scheduled event?",
        "Recall the IB rule: events take *ser*; physical locations take *estar*.",
      ],
      solution: [
        "Because *la ceremonia* is an event (“takes place in the auditorium”), Spanish requires **ser** → **es**.",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "subjuntivo-completo",
      question:
        "Complete the future time clause with the exact verb form: *Empezaremos la campaña de reciclaje tan pronto como ______ (llegar) los contenedores nuevos.*",
      answer: { type: "text", accept: ["lleguen"], display: "lleguen" },
      traps: [
        {
          spec: { type: "text", accept: ["llegarán"] },
          feedback: "Never use the future tense directly after *tan pronto como / cuando* — use the **present subjunctive**!",
        },
        {
          spec: { type: "text", accept: ["llegan"] },
          feedback: "*Llegan* is indicative (habitual/present fact); an uncompleted future action requires subjunctive.",
        },
        {
          spec: { type: "text", accept: ["llegen"] },
          feedback: "Watch the *-gar* orthographic change before *-e*: *g → gu* → **lleguen**.",
        },
      ],
      hints: [
        "*Empezaremos* is future, so *tan pronto como* introduces an uncompleted future event.",
        "Remember the *-gar* spelling change (*g → gu* before *e*) for *llegar* (*ellos*).",
      ],
      solution: [
        "1. Future time clause after *tan pronto como* → **present subjunctive**.",
        "2. *llegar* (*-gar* → *-gu-*) in 3rd person plural (*los contenedores*) → **lleguen**.",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "contrastes-clave-por-para-ser-estar",
      question:
        "Complete the Type 2 hypothetical *si*-clause with the exact **imperfect subjunctive** of *poder* (*yo*): *Si ______ (poder) estudiar en Salamanca, mejoraría mi español rápidamente.*",
      answer: { type: "text", accept: ["pudiera", "pudiese"], display: "pudiera" },
      traps: [
        {
          spec: { type: "text", accept: ["podría"] },
          feedback: "NEVER put the conditional right after *si*! Use imperfect subjunctive (*pudiera* / *pudiese*).",
        },
        {
          spec: { type: "text", accept: ["pueda"] },
          feedback: "*Pueda* is present subjunctive — never used after *si* in conditional sentences!",
        },
      ],
      hints: [
        "The result clause *mejoraría* (conditional) marks a Type 2 *si*-clause.",
        "Build the imperfect subjunctive from *ellos* preterite *pudieron* minus *-ron*.",
      ],
      solution: [
        "1. Type 2 *si*-clause formula: *Si + imperfecto de subjuntivo → condicional*.",
        "2. *pudieron* − *-ron* + *-ra* (or *-se*) = **pudiera** (or **pudiese**).",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "tipos-de-texto-convenciones",
      question:
        "Identify the **single MOST appropriate IB text type** (one Spanish word) when asked to write a balanced critical evaluation and recommendation of a Spanish-language film for a school magazine. (Options: *informe*, *reseña*, *diario*)",
      answer: { type: "text", accept: ["reseña", "una reseña"], display: "reseña" },
      traps: [
        {
          spec: { type: "text", accept: ["informe", "un informe"] },
          feedback: "An *informe* presents objective institutional data/findings, not a cultural film critique.",
        },
        {
          spec: { type: "text", accept: ["diario", "un diario"] },
          feedback: "A *diario* is private personal reflection, not a published review for magazine readers.",
        },
      ],
      hints: [
        "Match Purpose (critical evaluation + recommendation) and Audience (magazine readers).",
        "Which Mass Media text type means 'review' in Spanish (watch the *ñ*)?",
      ],
      solution: [
        "A published critique + verdict of a film, book, or exhibition is a **reseña** (Mass Media category).",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "estilo-c1-conectores-hl",
      question:
        "[HL] Complete with the exact form of *cuyo/cuya/cuyos/cuyas*: *Analizamos un poema de Federico García Lorca ______ metáforas evocan el destino trágico.*",
      answer: { type: "text", accept: ["cuyas"], display: "cuyas" },
      traps: [
        {
          spec: { type: "text", accept: ["cuyo"] },
          feedback: "*Cuyo* does NOT agree with *poema* or *Lorca* — it agrees with the noun that follows it (*metáforas* = fem. pl.)!",
        },
        {
          spec: { type: "text", accept: ["cuyos"] },
          feedback: "Check the gender of *las metáforas* (feminine plural) → **cuyas**.",
        },
      ],
      hints: [
        "*Cuyo* always agrees in gender and number with the **possessed noun immediately after it**.",
        "What is the gender and number of *metáforas*?",
      ],
      solution: [
        "*Metáforas* is feminine plural (*las metáforas*), so *cuyo* takes the form **cuyas**.",
      ],
    },
    {
      id: "6-grammar-text-types-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "estilo-c1-conectores-hl",
      question:
        "[HL] Conjugate *resultar* accurately after *de ahí que*: *El consumo excesivo de pantallas afecta al descanso juvenil; de ahí que ______ (resultar) urgente establecer límites.*",
      answer: { type: "text", accept: ["resulte"], display: "resulte" },
      traps: [
        {
          spec: { type: "text", accept: ["resulta"] },
          feedback: "**De ahí que** ALWAYS demands the **subjunctive** (*resulte*), never indicative *resulta*!",
        },
      ],
      hints: [
        "Remember the HL mood rule for the consecutive connector *de ahí que*.",
        "Main verb *afecta* is in the Present Zone; conjugate *resultar* (3rd sg.) in the present subjunctive.",
      ],
      solution: [
        "*De ahí que* ALWAYS requires the **subjunctive** → present subjunctive of *resultar* (3rd sg.): **resulte**.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 PAPERS × 15 QUESTIONS = 30 QUESTIONS)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: CORE GRAMMAR & TEXT-TYPE PRECISION (SL & HL)
    // -----------------------------------------------------------------------
    {
      id: "6-grammar-text-types-p1",
      title: "Practice Paper 1 · Subjunctive, Contrasts & Text-Type Conventions (SL/HL)",
      level: "SL",
      questions: [
        {
          id: "6-grammar-text-types-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subjuntivo-completo",
          question:
            "Complete the ESCAPA clause with the exact present subjunctive of *poder* (*nosotros*): *Debemos reservar la sala hoy para que ______ (poder, nosotros) ensayar mañana.*",
          answer: { type: "text", accept: ["podamos"], display: "podamos" },
          traps: [
            {
              spec: { type: "text", accept: ["puedamos"] },
              feedback: "*-er* stem-changers like *poder* do NOT stem-change in *nosotros/vosotros* in the present subjunctive → **podamos**.",
            },
            {
              spec: { type: "text", accept: ["podemos"] },
              feedback: "*Podemos* is indicative; *para que* (ESCAPA) ALWAYS requires the subjunctive.",
            },
          ],
          hints: [
            "*Para que* is an ESCAPA trigger → subjunctive.",
            "Remember: *-ar* and *-er* stem-changing verbs keep their original stem vowel in *nosotros*.",
          ],
          solution: [
            "*Para que* requires present subjunctive; *poder* does not stem-change in *nosotros* → **podamos**.",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subjuntivo-completo",
          question:
            "Complete the present subjunctive (*tú*) of *dar* (don't forget the diacritic if needed!): *Espero que me ______ (dar, tú) tu opinión sincera sobre el borrador.*",
          answer: { type: "text", accept: ["des"], display: "des" },
          traps: [
            {
              spec: { type: "text", accept: ["das"] },
              feedback: "*Das* is indicative; *espero que* with a subject change triggers the subjunctive.",
            },
            {
              spec: { type: "text", accept: ["dés"] },
              feedback: "Only *yo* (*dé*) and *él/ella/usted* (*dé*) carry an accent to distinguish them from the preposition *de*; *des* has NO accent!",
            },
          ],
          hints: [
            "*Dar* is the **D** in DISHES (*dé, des, dé, demos, deis, den*).",
            "Does *des* need a written accent mark to distinguish it from another word?",
          ],
          solution: [
            "Present subjunctive of *dar* (*tú*) is **des** (no accent, since only *dé* clashes with preposition *de*).",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subjuntivo-completo",
          question:
            "Conjugate *sentir* in the **present subjunctive** (*nosotros*): *Ojalá no ______ (sentir, nosotros) nunca indiferencia ante la injusticia social.*",
          answer: { type: "text", accept: ["sintamos"], display: "sintamos" },
          traps: [
            {
              spec: { type: "text", accept: ["sentamos"] },
              feedback: "*Sentir* is an *-ir* stem-changer (*e → ie* in boot, *e → i* in *nosotros*) → **sintamos**!",
            },
            {
              spec: { type: "text", accept: ["sentimos"] },
              feedback: "*Sentimos* is present indicative; *ojalá* requires the subjunctive with the *-ir* *nosotros* shift (*e → i*): **sintamos**.",
            },
          ],
          hints: [
            "*Ojalá* always triggers the subjunctive.",
            "*Sentir* is an *-ir* stem-changer — recall how *e* shifts in the *nosotros* present subjunctive.",
          ],
          solution: [
            "In present subjunctive, *-ir* stem-changers take *e → i* in *nosotros*: *sentir → **sintamos***.",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subjuntivo-completo",
          question:
            "Complete with the exact **imperfect subjunctive** (*nosotros*, including accent mark!) of *hacer*: *El tutor nos sugirió que ______ (hacer, nosotros) un cuestionario anónimo.*",
          answer: { type: "text", accept: ["hiciéramos", "hiciésemos"], display: "hiciéramos" },
          traps: [
            {
              spec: { type: "text", accept: ["hagamos"] },
              feedback: "Main verb *sugirió* is in the Past Zone (preterite) → shift to **imperfect subjunctive** (*hiciéramos*).",
            },
          ],
          hints: [
            "*Sugirió* is preterite (Past Zone), so sequence of tenses calls for the imperfect subjunctive.",
            "Take *ellos* preterite *hicieron*, drop *-ron*, add *-ramos* (or *-semos*), and accent the vowel before *-ramos*.",
          ],
          solution: [
            "1. Past-Zone trigger (*sugirió*) → **imperfect subjunctive**.",
            "2. *hicieron* − *-ron* + *-´ramos* = **hiciéramos** (or **hiciésemos**).",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "contrastes-clave-por-para-ser-estar",
          question:
            "Complete with **por** or **para**: *Para mejorar mi pronunciación, converso con mi compañera de intercambio en Valparaíso ______ videollamada cada domingo.*",
          answer: { type: "text", accept: ["por"], display: "por" },
          traps: [
            {
              spec: { type: "text", accept: ["para"] },
              feedback: "Means of communication or transport (*por teléfono, por correo, por videollamada*) ALWAYS takes **por**.",
            },
          ],
          hints: [
            "What grammatical role does *videollamada* play here (goal, deadline, or channel/means)?",
            "Means of communication and transport use the same preposition.",
          ],
          solution: [
            "Means of communication (*by video call*) ALWAYS uses **por**.",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "contrastes-clave-por-para-ser-estar",
          question:
            "Complete with the accurate present-tense form of **ser** or **estar** (*nosotros*): *Aunque el trayecto en tren es largo, ______ seguros de que merece la pena reducir las emisiones.*",
          answer: { type: "text", accept: ["estamos"], display: "estamos" },
          traps: [
            {
              spec: { type: "text", accept: ["somos"] },
              feedback: "*Ser seguro* means “to be safe”; “to be **sure/certain**” ALWAYS uses **estar seguro** → **estamos**.",
            },
          ],
          hints: [
            "Does *seguros de que…* mean “safe” or “sure/certain”?",
            "Check the *ser vs estar* meaning-shift table for *seguro/a*.",
          ],
          solution: [
            "**Estar seguro/a de que** = to be sure/certain → *nosotros*: **estamos**.",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "contrastes-clave-por-para-ser-estar",
          question:
            "Use the *perífrasis verbal* **acabar de + infinitivo** (*yo*, present tense) to complete: *______ (just publish, yo) una reseña sobre el último festival de cine iberoamericano.*",
          answer: { type: "text", accept: ["acabo de publicar"], display: "Acabo de publicar" },
          traps: [
            {
              spec: { type: "text", accept: ["acabé de publicar"] },
              feedback: "“Have just done” uses **present tense** *acabo de + infinitivo* (preterite *acabé de* means “I finished doing”).",
            },
          ],
          hints: [
            "To express “have just [done]”, conjugate *acabar* in the **present tense** + *de* + infinitive.",
            "What is the Spanish infinitive for “to publish”?",
          ],
          solution: [
            "Present tense *acabo* + *de* + infinitive *publicar* = **Acabo de publicar**.",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "tipos-de-texto-convenciones",
          question:
            "A Paper 1 prompt asks you to write on behalf of your school newspaper's **board** taking an official institutional stance (*nosotros*) against cyberbullying, with NO personal anecdotes. Name the single MOST appropriate IB text type (one Spanish word).",
          answer: { type: "text", accept: ["editorial", "un editorial"], display: "editorial" },
          traps: [
            {
              spec: { type: "text", accept: ["artículo", "un artículo"] },
              feedback: "An *artículo* represents an individual reporter/writer with a byline, whereas an institutional publication stance belongs to an **editorial**.",
            },
            {
              spec: { type: "text", accept: ["blog", "un blog"] },
              feedback: "A *blog* uses an informal, personal interactive voice rather than an institutional newspaper voice.",
            },
          ],
          hints: [
            "It belongs to the **Mass Media** category.",
            "Which newspaper text type speaks for the whole publication in an authoritative institutional voice?",
          ],
          solution: [
            "An institutional newspaper stance using *nosotros* or impersonal voice is an **editorial**.",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subjuntivo-completo",
          question:
            "Complete the **indefinite adjective clause** accurately: *En nuestra localidad todavía no hay ninguna asociación juvenil que ______ (ofrecer) clases gratuitas de programación.*",
          answer: { type: "text", accept: ["ofrezca"], display: "ofrezca" },
          traps: [
            {
              spec: { type: "text", accept: ["ofrece"] },
              feedback: "*No hay ninguna asociación que…* denies the antecedent's existence — a **non-existent antecedent** ALWAYS triggers the subjunctive!",
            },
          ],
          hints: [
            "Notice the negated antecedent *no hay ninguna asociación*.",
            "Form the present subjunctive of *ofrecer* from its irregular *yo* form *ofrezco*.",
          ],
          solution: [
            "Non-existent antecedent (*no hay ninguna…*) → present subjunctive of *ofrecer* (*ofrezco* → **ofrezca**).",
          ],
        },
        {
          id: "6-grammar-text-types-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "subjuntivo-completo",
          marks: 3,
          question:
            "Compare these two clauses and account for the grammatical mood shift and real-world meaning difference:\n(1) *Buscamos una guía que **conoce** las rutas indígenas de Oaxaca.*\n(2) *Buscamos una guía que **conozca** las rutas indígenas de Oaxaca.*",
          hints: [
            "Name the mood used in each sentence (indicative vs subjunctive).",
            "Explain whether the speaker already has a specific known person in mind or is advertising for any qualified candidate.",
          ],
          modelAnswer:
            "Sentence 1 uses the indicative mood (*conoce*), signaling a specific, known guide whose existence is already established and whom the group is trying to locate. Sentence 2 uses the present subjunctive (*conozca*), signaling an indefinite, hypothetical antecedent — any qualified guide who meets the requirement, without certainty that one is available.",
          markScheme: [
            {
              point: "Correctly identifies indicative in (1) and subjunctive in (2).",
              keywords: ["indicative", "subjunctive"],
            },
            {
              point: "Explains that (1) refers to a specific, known existing guide.",
              keywords: ["specific", "known", "established"],
            },
            {
              point: "Explains that (2) refers to an indefinite/hypothetical candidate whose existence is uncertain.",
              keywords: ["indefinite", "hypothetical", "uncertain"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "contrastes-clave-por-para-ser-estar",
          marks: 4,
          question:
            "A classmate wrote: *“El debate escolar está en la biblioteca. Debemos preparar nuestros argumentos por mejorar la convivencia y entregar el resumen por el jueves. Si tendríamos más tiempo, invitaríamos a un experto.”* Identify and correct ALL FOUR grammatical errors in Spanish, briefly explaining each correction.",
          hints: [
            "Scan the passage systematically for: (1) event location (*ser/estar*), (2) purpose + infinitive (*por/para*), (3) deadline (*por/para*), and (4) Type 2 *si*-clause.",
            "Remember the golden rule: never put conditional after *si*!",
          ],
          modelAnswer:
            "1. **es en la biblioteca** (not *está*): an event location always takes *ser*. 2. **para mejorar** (not *por*): purpose before an infinitive (“in order to”) requires *para*. 3. **para el jueves** (not *por*): a future deadline requires *para*. 4. **Si tuviéramos** (or *tuviésemos*, not *tendríamos*): a Type 2 conditional clause requires the imperfect subjunctive after *si*, never the conditional.",
          markScheme: [
            {
              point: "Corrects *está* → *es* because events take *ser*.",
              keywords: ["es en la biblioteca", "event"],
            },
            {
              point: "Corrects *por mejorar* → *para mejorar* (purpose + infinitive).",
              keywords: ["para mejorar", "purpose"],
            },
            {
              point: "Corrects *por el jueves* → *para el jueves* (deadline).",
              keywords: ["para el jueves", "deadline"],
            },
            {
              point: "Corrects *tendríamos* → *tuviéramos / tuviésemos* (imperfect subjunctive in Type 2 si-clause).",
              keywords: ["tuviéramos", "tuviésemos", "imperfect subjunctive"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "tipos-de-texto-convenciones",
          marks: 4,
          question:
            "Paper 1 scenario: *Your city council is considering cutting late-night bus routes that students and hospitality workers rely on. Write to the transport councillor urging her to preserve the service and suggesting two practical timetable adjustments.* Three options appear on the exam: **Carta formal**, **Diario personal**, and **Reseña**. Select the single best format and justify your choice using the IB Conceptual Understandings.",
          hints: [
            "Name the optimal text type clearly and explain Audience, Purpose, and Register (*usted*).",
            "Briefly explain why the two rejected choices fail Conceptual Understanding.",
          ],
          modelAnswer:
            "The optimal format is a **carta formal**. Regarding audience and variation, the recipient is an official councillor, requiring consistent formal *usted* register, polite modal phrasing, and Spanish salutation punctuation (*Estimada Sra. Concejala:* with a colon and *Atentamente,* closing). Regarding purpose and context, a formal letter directly persuades a decision-maker in an institutional civic context to keep the routes and adopt timetable adjustments. Both rejected formats fail Criterion C: a diary is private reflection with no external addressee, while a review evaluates a cultural work for magazine readers.",
          markScheme: [
            {
              point: "Selects *carta formal* as the single most appropriate text type.",
              keywords: ["carta formal"],
            },
            {
              point: "Links institutional addressee to consistent formal *usted* register and letter conventions (colon, *Estimada*, *Atentamente*).",
              keywords: ["usted", "estimada", "colon", "atentamente"],
            },
            {
              point: "Connects purpose/context to directly persuading a civic decision-maker.",
              keywords: ["persuades", "decision-maker", "institutional"],
            },
            {
              point: "Explains why the private diary and cultural review fail audience/purpose.",
              keywords: ["private", "cultural", "rejected"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Describe",
          guideRef: "tipos-de-texto-convenciones",
          marks: 3,
          question:
            "Outline three distinct structural conventions that make an IB **entrevista** immediately recognisable to a Paper 1 examiner.",
          hints: [
            "Think from top to bottom of the printed magazine/newspaper page.",
            "How does an interview open before the first question, how are turns shown, and how does it close?",
          ],
          modelAnswer:
            "First, it opens with an engaging headline and a short introductory paragraph presenting the interviewee's biography, relevance, and context of the conversation. Second, the body alternates clearly labelled question-and-answer turns (e.g., *Periodista:* / *Entrevistado:*) using realistic spoken follow-ups. Third, it concludes with a brief closing thank-you or final editorial wrap-up line.",
          markScheme: [
            {
              point: "Headline plus brief contextual introduction presenting the interviewee.",
              keywords: ["headline", "introductory", "biography"],
            },
            {
              point: "Clearly labelled alternating question-and-answer turns (*Periodista / Entrevistado*).",
              keywords: ["question-and-answer", "periodista", "alternates"],
            },
            {
              point: "Closing thank-you or concise concluding wrap-up remark.",
              keywords: ["thank-you", "wrap-up", "concludes"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "contrastes-clave-por-para-ser-estar",
          marks: 4,
          question:
            "Draft a cohesive 4-sentence Spanish paragraph (for a school eco-campaign *folleto*) incorporating ALL FOUR of the following accurately: (1) a **WEIRDO subjunctive**, (2) an **ESCAPA conjunction + subjunctive**, (3) **llevar + tiempo + gerundio**, and (4) a **pasiva refleja** with plural verb agreement.",
          hints: [
            "Keep the tone engaging and practical for a public school *folleto*.",
            "Check each structure explicitly: e.g. *Es imprescindible que…*, *para que / antes de que…*, *Llevamos dos años…*, and *Se reciclan / Se organizan…*.",
          ],
          modelAnswer:
            "¡Transformemos nuestro instituto hoy! Llevamos dos años organizando talleres verdes y cada mes se recogen cientos de botellas reutilizables en los patios. Sin embargo, es imprescindible que todos los estudiantes reduzcan los envases de un solo uso para que nuestra comunidad alcance el objetivo de residuo cero antes de junio. ¡Súmate al cambio sostenible!",
          markScheme: [
            {
              point: "Uses a WEIRDO trigger + accurate subjunctive conjugation (e.g. *es imprescindible que… reduzcan*).",
              keywords: ["es imprescindible que", "reduzcan", "es necesario que"],
            },
            {
              point: "Uses an ESCAPA conjunction + accurate subjunctive (e.g. *para que… alcance*).",
              keywords: ["para que", "antes de que", "a menos que", "alcance"],
            },
            {
              point: "Uses *llevar + time + gerundio* idiomatically (e.g. *llevamos dos años organizando*).",
              keywords: ["llevamos", "lleva", "organizando", "trabajando"],
            },
            {
              point: "Uses *pasiva refleja* with accurate plural agreement (e.g. *se recogen cientos* / *se organizan*).",
              keywords: ["se recogen", "se reciclan", "se organizan", "se venden"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Synthesize",
          guideRef: "tipos-de-texto-convenciones",
          marks: 6,
          question:
            "Paper 1 Mini-Task (SL/HL ~120–160 words in Spanish): *Write the opening and structured action section of a **propuesta** addressed to your headteacher recommending a weekly Hispanic Cultural Exchange Café at school.* Demonstrate authentic **propuesta** conventions, consistent **usted** register, at least **two subjunctive structures**, and **one Type 2 *si*-clause**.",
          hints: [
            "Include visual *propuesta* architecture: formal title, metadata (`Para / De / Fecha`), objective, and numbered concrete action points.",
            "Maintain *usted* throughout (*Le presento*, *su apoyo*) and embed WEIRDO/ESCAPA + *Si + imperfecto de subjuntivo → condicional*.",
          ],
          modelAnswer:
            "**Propuesta para la creación del Café de Intercambio Cultural Hispano**\n**Para:** Sra. Directora | **De:** Representantes de Lenguas Modernas | **Fecha:** 14 de octubre de 2026\n\n**1. Objetivo**\nEstimada Sra. Directora: Me dirijo a usted con el fin de proponer la apertura de un espacio semanal de conversación en español para que el alumnado practique la lengua en un entorno auténtico.\n\n**2. Plan de acción**\n- Organizar encuentros los miércoles en la biblioteca con música, prensa latinoamericana y meriendas de comercio justo.\n- Invitar a padres y antiguos alumnos hispanohablantes con el propósito de que compartan tradiciones regionales.\n\n**3. Beneficios previstos**\nEs imprescindible que fomentemos la competencia intercultural fuera del aula. Si el centro aprobara esta iniciativa, los estudiantes ganarían fluidez oral y confianza antes de sus exámenes del Diploma. Quedo a su disposición para ampliar detalles. Atentamente, Elena Ruiz.",
          markScheme: [
            {
              point: "Displays authentic *propuesta* header architecture (clear title + *Para / De / Fecha* metadata).",
              keywords: ["para:", "de:", "fecha:"],
            },
            {
              point: "Uses clear numbered subheadings (*Objetivo*, *Plan de acción*, *Beneficios previstos*).",
              keywords: ["objetivo", "plan de acción", "beneficios"],
            },
            {
              point: "Maintains consistent formal *usted* register, Spanish colon salutation, and formal closing (*Atentamente*).",
              keywords: ["estimada", "me dirijo a usted", "atentamente"],
            },
            {
              point: "Integrates accurate subjunctive after ESCAPA/purpose (*para que… practique* / *con el propósito de que… compartan*).",
              keywords: ["practique", "compartan", "para que"],
            },
            {
              point: "Integrates accurate WEIRDO subjunctive (*es imprescindible que fomentemos*).",
              keywords: ["es imprescindible que", "fomentemos"],
            },
            {
              point: "Uses an accurate Type 2 *si*-clause (*Si el centro aprobara…, ganarían*).",
              keywords: ["aprobara", "ganarían", "apoyara"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "The response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Limited awareness of *propuesta* format; noticeable register slips (*tú/usted* mix) and missing or flawed complex grammar.",
              indicators: ["Generic paragraph with no subheadings", "Conditional used after *si* or indicative after WEIRDO"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear *propuesta* structure and mostly consistent formal register; attempts required subjunctive and conditional forms with minor lapses.",
              indicators: ["Title and subheadings present", "At least one accurate subjunctive and mostly consistent *usted*"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authoritative *propuesta* conventions, seamless *usted* register, and accurate, idiomatic deployment of multiple subjunctive triggers and a Type 2 *si*-clause.",
              indicators: ["Complete header + numbered sections + formal colon/closing", "Natural Band 10–12 Spanish grammar and orthography"],
            },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: APPLIED DISCOURSE, PAST NARRATION & [HL] C1 COHESION
    // -----------------------------------------------------------------------
    {
      id: "6-grammar-text-types-p2",
      title: "Practice Paper 2 · Past Tenses, Si-Clauses & [HL] C1 Craft",
      level: "HL",
      questions: [
        {
          id: "6-grammar-text-types-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "contrastes-clave-por-para-ser-estar",
          question:
            "Complete the **Type 3 past counterfactual *si*-clause** with the *nosotros* pluperfect subjunctive of *actuar*: *Si ______ (actuar, nosotros) diez años antes, habríamos salvado gran parte del bosque.*",
          answer: {
            type: "text",
            accept: ["hubiéramos actuado", "hubiésemos actuado"],
            display: "hubiéramos actuado",
          },
          traps: [
            {
              spec: { type: "text", accept: ["habríamos actuado"] },
              feedback: "NEVER put *habríamos* in the *si*-clause — *habríamos* belongs in the result clause, while *si* takes **hubiéramos / hubiésemos**!",
            },
            {
              spec: { type: "text", accept: ["habíamos actuado"] },
              feedback: "*Habíamos* is indicative pluperfect; Type 3 *si*-clauses require **pluperfect subjunctive** (*hubiéramos actuado*).",
            },
          ],
          hints: [
            "Type 3 *si*-clause formula: *Si + pluscuamperfecto de subjuntivo → condicional compuesto*.",
            "Remember the written accent on *nosotros* (*hubiéramos* / *hubiésemos*).",
          ],
          solution: [
            "Pluperfect subjunctive (*nosotros*) of *actuar* = **hubiéramos actuado** (or **hubiésemos actuado**).",
          ],
        },
        {
          id: "6-grammar-text-types-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "contrastes-clave-por-para-ser-estar",
          question:
            "Complete after **como si** with the exact form of *saber* (*él*): *Habla sobre la historia de Bolivia como si lo ______ (saber) todo, aunque nunca ha visitado el país.*",
          answer: { type: "text", accept: ["supiera", "supiese"], display: "supiera" },
          traps: [
            {
              spec: { type: "text", accept: ["sabe"] },
              feedback: "*Como si* ALWAYS takes imperfect or pluperfect subjunctive, never indicative!",
            },
            {
              spec: { type: "text", accept: ["sepa"] },
              feedback: "Present subjunctive is never used after *como si* — shift to **imperfect subjunctive** (*supiera* / *supiese*).",
            },
          ],
          hints: [
            "*Como si* ALWAYS triggers a past subjunctive, even after present-tense *habla*.",
            "Take *ellos* preterite of *saber* (*supieron*) minus *-ron*.",
          ],
          solution: [
            "*Como si* + imperfect subjunctive (*supieron* → **supiera** / **supiese**).",
          ],
        },
        {
          id: "6-grammar-text-types-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "subjuntivo-completo",
          question:
            "Complete the **present perfect subjunctive** (*tú*) of *escribir* (irregular past participle!): *Me sorprende que todavía no ______ (escribir, tú) tu reseña para el periódico.*",
          answer: { type: "text", accept: ["hayas escrito"], display: "hayas escrito" },
          traps: [
            {
              spec: { type: "text", accept: ["has escrito"] },
              feedback: "*Has escrito* is indicative; *me sorprende que* (WEIRDO emotion) requires **present perfect subjunctive** (*hayas escrito*).",
            },
            {
              spec: { type: "text", accept: ["hayas escribido"] },
              feedback: "*Escribir* has an irregular past participle: **escrito**.",
            },
          ],
          hints: [
            "Main verb *me sorprende* is in the Present Zone; the subordinate verb refers to a recent completed/uncompleted action.",
            "Pair present subjunctive of *haber* (*hayas*) with the irregular past participle of *escribir*.",
          ],
          solution: [
            "Present subjunctive *haber* (*hayas*) + irregular participle *escrito* = **hayas escrito**.",
          ],
        },
        {
          id: "6-grammar-text-types-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "estilo-c1-conectores-hl",
          question:
            "[HL] Insert the exact possessive relative pronoun (*cuyo/a/os/as*): *Colaboramos con una fundación peruana ______ programas educativos llegan a comunidades andinas.*",
          answer: { type: "text", accept: ["cuyos"], display: "cuyos" },
          traps: [
            {
              spec: { type: "text", accept: ["cuya"] },
              feedback: "*Cuyo* agrees with the **following noun** (*programas* = masculine plural), NOT with *fundación*!",
            },
            {
              spec: { type: "text", accept: ["cuyas"] },
              feedback: "Watch out! *El programa* is masculine (Greek *-ma* noun), so *los programas* takes **cuyos**.",
            },
          ],
          hints: [
            "Identify the noun immediately following the blank (*programas*).",
            "Remember the gender of Spanish *-ma* nouns of Greek origin (*el programa, el problema, el tema, el sistema*).",
          ],
          solution: [
            "*Programas* is masculine plural (*los programas*) → **cuyos**.",
          ],
        },
        {
          id: "6-grammar-text-types-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "estilo-c1-conectores-hl",
          question:
            "[HL] Insert the exact two-word neuter relative pronoun that refers back to the entire previous clause: *Cada vez más jóvenes comparten noticias sin verificar la fuente, ______ alimenta la desinformación.*",
          answer: { type: "text", accept: ["lo cual", "lo que"], display: "lo cual" },
          traps: [
            {
              spec: { type: "text", accept: ["la cual"] },
              feedback: "There is no single feminine antecedent; referring to the whole preceding clause requires the neuter **lo cual** (or *lo que*).",
            },
            {
              spec: { type: "text", accept: ["el cual"] },
              feedback: "Referring to an entire idea/clause requires the neuter **lo cual**, not masculine *el cual*.",
            },
          ],
          hints: [
            "Notice the comma: the pronoun sums up the entire situation described before it.",
            "Use the neuter article *lo* + relative pronoun.",
          ],
          solution: [
            "Neuter clausal relative after a comma = **lo cual** (also acceptable: **lo que**).",
          ],
        },
        {
          id: "6-grammar-text-types-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "estilo-c1-conectores-hl",
          question:
            "[HL] Insert the exact articulated relative pronoun (*el cual / la cual / los cuales / las cuales*) after the compound preposition: *La iniciativa ciudadana a través de ______ se recuperó el parque histórico recibió un premio nacional.*",
          answer: { type: "text", accept: ["la cual", "la que"], display: "la cual" },
          traps: [
            {
              spec: { type: "text", accept: ["el cual"] },
              feedback: "Check the antecedent noun: *la iniciativa ciudadana* is feminine singular → **la cual**.",
            },
          ],
          hints: [
            "Find the exact antecedent noun (*la iniciativa ciudadana*).",
            "Match gender and number after *a través de*.",
          ],
          solution: [
            "Antecedent *la iniciativa* (feminine singular) after compound preposition *a través de* → **la cual** (or **la que**).",
          ],
        },
        {
          id: "6-grammar-text-types-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "estilo-c1-conectores-hl",
          question:
            "[HL] Conjugate *haber* accurately after *de ahí que* in the present tense zone: *Los alquileres en el casco histórico se han duplicado; de ahí que ______ (haber) tantas protestas vecinales.*",
          answer: { type: "text", accept: ["haya"], display: "haya" },
          traps: [
            {
              spec: { type: "text", accept: ["hay"] },
              feedback: "*De ahí que* ALWAYS requires the **subjunctive** (*haya*), never indicative *hay*!",
            },
            {
              spec: { type: "text", accept: ["hayan"] },
              feedback: "Existential *haber* (“there is / there are”) is ALWAYS singular even with a plural noun (*protestas*) → **haya**!",
            },
          ],
          hints: [
            "*De ahí que* demands the subjunctive; *haber* is the **H** in DISHES.",
            "Remember that existential *haber* (“there are”) never pluralises — stay in the 3rd person singular!",
          ],
          solution: [
            "1. *De ahí que* → subjunctive. 2. Existential *haber* stays singular regardless of plural *protestas* → **haya**.",
          ],
        },
        {
          id: "6-grammar-text-types-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "contrastes-clave-por-para-ser-estar",
          marks: 3,
          question:
            "Explain the exact difference in meaning between these two past-tense Spanish sentences:\n(1) *Mis abuelos no **quisieron** vender la finca familiar.*\n(2) *Mis abuelos no **querían** vender la finca familiar.*",
          hints: [
            "Identify the tense used in each sentence (*pretérito indefinido* vs *imperfecto*).",
            "Recall how *no querer* shifts from an ongoing feeling/desire to a definite act of refusal in the preterite.",
          ],
          modelAnswer:
            "Sentence 1 uses the preterite (*no quisieron*), expressing a completed, decisive act of refusal: the grandparents explicitly refused to sell the estate. Sentence 2 uses the imperfect (*no querían*), describing an ongoing mental state or inclination: they did not want to sell, without confirming whether a final refusal occurred.",
          markScheme: [
            {
              point: "Identifies preterite in (1) and imperfect in (2).",
              keywords: ["preterite", "imperfect"],
            },
            {
              point: "Explains that *no quisieron* means a decisive act of refusal (“refused”).",
              keywords: ["refusal", "refused", "decisive"],
            },
            {
              point: "Explains that *no querían* describes an ongoing background desire/state (“did not want”).",
              keywords: ["ongoing", "state", "did not want"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Synthesize",
          guideRef: "estilo-c1-conectores-hl",
          marks: 4,
          question:
            "[HL] Combine these three choppy B1 sentences into ONE seamless Band 10–12 Spanish sentence using **cuyo/a/os/as**, **lo cual**, and **de ahí que + subjuntivo**:\n*“Muchas regiones rurales pierden habitantes. Sus escuelas cierran cada año. Esto destruye la comunidad local. Por eso debemos invertir en teletrabajo rural.”*",
          hints: [
            "Link *regiones rurales* and *escuelas* with the feminine plural possessive relative (*cuyas escuelas*).",
            "Link the closing of schools to community damage with *, lo cual…*, then finish with *; de ahí que debamos / sea imprescindible…*.",
          ],
          modelAnswer:
            "Muchas regiones rurales, cuyas escuelas locales cierran anualmente, sufren una grave despoblación, lo cual debilita el tejido comunitario; de ahí que debamos invertir decididamente en el teletrabajo rural.",
          markScheme: [
            {
              point: "Uses *cuyas* agreeing accurately with feminine plural *escuelas*.",
              keywords: ["cuyas"],
            },
            {
              point: "Uses neuter clausal relative *, lo cual* (or *lo que*) smoothly linking the consequence.",
              keywords: ["lo cual", "lo que"],
            },
            {
              point: "Uses *de ahí que* followed accurately by a present subjunctive verb (*debamos / sea / resulte / invirtamos*).",
              keywords: ["de ahí que"],
            },
            {
              point: "Accurate subjunctive verb form after *de ahí que*.",
              keywords: ["debamos", "resulte", "invirtamos", "sea"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Synthesize",
          guideRef: "estilo-c1-conectores-hl",
          marks: 3,
          question:
            "[HL] Apply **nominalisation** in Spanish to transform these three wordy verb clauses into concise C1 noun phrases:\n(a) *cuando las temperaturas suben globalmente*\n(b) *porque faltan viviendas asequibles*\n(c) *si prohibimos la publicidad engañosa*",
          hints: [
            "Convert each key verb into its cognate abstract Spanish noun (*subir → aumento / subida*; *faltar → escasez / falta*; *prohibir → prohibición*).",
            "Include definite articles (*el / la*) and *de* to join the nominal phrase smoothly.",
          ],
          modelAnswer:
            "(a) El aumento global de las temperaturas (o el calentamiento global). (b) La escasez de vivienda asequible (o la falta de viviendas asequibles). (c) La prohibición de la publicidad engañosa.",
          markScheme: [
            {
              point: "Nominalises (a) accurately (*el aumento / el incremento / la subida / el calentamiento*).",
              keywords: ["aumento", "incremento", "subida", "calentamiento"],
            },
            {
              point: "Nominalises (b) accurately (*la escasez / la falta de vivienda*).",
              keywords: ["escasez", "falta de"],
            },
            {
              point: "Nominalises (c) accurately (*la prohibición de*).",
              keywords: ["prohibición"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "tipos-de-texto-convenciones",
          marks: 4,
          question:
            "Compare and contrast how an IB **blog** and a newspaper **artículo** differ across **voice/register**, **structural layout**, and **reader interaction**, even when both cover the exact same theme (sustainable fashion).",
          hints: [
            "Contrast informal/conversational *tú* engagement vs journalistic semi-formal/formal third-person distance.",
            "Mention specific visible format markers on the page (hashtags/comments prompt vs headline/byline/quotes).",
          ],
          modelAnswer:
            "Both formats use an engaging title and clear thematic paragraphs, yet they diverge sharply in voice, layout, and interaction. In voice and register, a personal-public blog adopts a conversational, subjective first-person tone addressing readers directly with *tú*, whereas a journalistic article maintains semi-formal or formal objectivity with third-person reporting and evidence. Structurally, an article displays a formal headline, individual author byline (*Por…*), punchy lead, and subheadings, while a blog features publication metadata, casual sub-sections, and topical hashtags. Finally, a blog explicitly invites two-way interaction via a comments prompt, whereas an article closes with a reflective takeaway rather than asking for replies.",
          markScheme: [
            {
              point: "Notes shared journalistic/thematic similarity (engaging title and structured paragraphs).",
              keywords: ["engaging title", "paragraphs", "both"],
            },
            {
              point: "Contrasts conversational subjective *tú* voice (blog) vs objective journalistic third-person register (article).",
              keywords: ["conversational", "subjective", "objectivity"],
            },
            {
              point: "Contrasts visible format conventions (byline/lead vs hashtags/metadata).",
              keywords: ["byline", "hashtags", "lead"],
            },
            {
              point: "Highlights explicit comments invitation / two-way interaction as unique to the blog.",
              keywords: ["comments", "two-way", "replies"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p2-q12",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "estilo-c1-conectores-hl",
          marks: 4,
          question:
            "[HL] Explain why using *“La tecnología nos toma el pelo y cuesta un ojo de la cara”* inside a formal **informe** to a ministry of education would penalise a candidate's Criterion A and C marks, and rewrite the idea using TWO register-appropriate C1 idioms or formal phrases in Spanish.",
          hints: [
            "Diagnose the **Variation / Register** mismatch: colloquial spoken idioms clash with an objective institutional *informe*.",
            "Replace with elevated formal expressions such as *arma de doble filo*, *coste desorbitado*, *brillar por su ausencia*, or *hacer oídos sordos*.",
          ],
          modelAnswer:
            "Although those two expressions are genuine Hispanic idioms, both are highly colloquial and conversational, creating a jarring register clash inside an objective institutional *informe* addressed to government officials — which undermines Variation (Criterion C) and stylistic appropriateness (Criterion A). A register-matched C1 rewrite: *“La digitalización escolar constituye un arma de doble filo cuyo elevado coste presupuestario exige una evaluación rigurosa, pues la formación docente suele brillar por su ausencia.”*",
          markScheme: [
            {
              point: "Diagnoses that the original idioms are colloquial/conversational and clash with an objective institutional *informe*.",
              keywords: ["colloquial", "clash", "objective"],
            },
            {
              point: "Links register appropriateness explicitly to Variation / Criterion C and Criterion A.",
              keywords: ["variation", "stylistic"],
            },
            {
              point: "Provides an accurate, formal C1 Spanish idiom #1 (e.g. *arma de doble filo* / *hacer oídos sordos*).",
              keywords: ["arma de doble filo", "oídos sordos", "antes y un después"],
            },
            {
              point: "Provides a second formal C1 expression or cohesive device (e.g. *brillar por su ausencia* / *cuyo* / elevated phrasing).",
              keywords: ["brillar por su ausencia", "cuyo", "presupuestario"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Synthesize",
          guideRef: "subjuntivo-completo",
          marks: 4,
          question:
            "Rewrite this present-tense paragraph completely in the **past**, updating EVERY main verb and subordinate subjunctive verb to maintain accurate Spanish **sequence of tenses (*concordancia temporal*)**:\n*“La directora pide que los alumnos respeten el silencio en la biblioteca, espera que nadie deje basura y recomienda que todos traigan botellas reutilizables antes de que empiece el trimestre.”*",
          hints: [
            "Shift the three main verbs (*pide, espera, recomienda*) to the preterite or imperfect (*pidió / esperaba / recomendó*).",
            "Shift ALL FOUR present subjunctive verbs (*respeten, deje, traigan, empiece*) into the **imperfect subjunctive** (*-ra / -se* — watch *traer → trajeron → trajeran*!).",
          ],
          modelAnswer:
            "La directora pidió que los alumnos respetaran el silencio en la biblioteca, esperaba que nadie dejara basura y recomendó que todos trajeran botellas reutilizables antes de que empezara el trimestre.",
          markScheme: [
            {
              point: "Shifts main verbs cleanly into past tenses (*pidió*, *esperaba/esperó*, *recomendó*).",
              keywords: ["pidió", "recomendó"],
            },
            {
              point: "Shifts *respeten* → *respetaran* (or *respetasen*) and *deje* → *dejara* (or *dejase*).",
              keywords: ["respetaran", "respetasen", "dejara", "dejase"],
            },
            {
              point: "Accurately forms irregular imperfect subjunctive of *traer*: *trajeran* (or *trajesen*).",
              keywords: ["trajeran", "trajesen"],
            },
            {
              point: "Shifts *empiece* after *antes de que* → *empezara* (or *empezase*).",
              keywords: ["empezara", "empezase"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "estilo-c1-conectores-hl",
          marks: 6,
          question:
            "[HL] Write a cohesive 130–170 word Spanish **editorial** excerpt for a Hispanic daily newspaper evaluating whether artificial intelligence should be regulated in creative arts. Demonstrate: (1) authentic **editorial** institutional voice (*nosotros* / impersonal, headline, zero personal anecdotes), (2) a **Si bien…, no obstante…** counter-argument, (3) **de ahí que + subjuntivo**, and (4) **cuyo/a/os/as** OR **lo cual**.",
          hints: [
            "Open with an authoritative headline and institutional framing (*Desde este diario consideramos…*).",
            "Concede a real benefit of AI with *Si bien es cierto que + indicativo*, pivot with *no obstante*, weave in *cuyo/lo cual*, and conclude with *de ahí que + subjuntivo*.",
          ],
          modelAnswer:
            "**La creatividad humana ante el desafío algorítmico**\n\nEl auge de la inteligencia artificial generativa ha transformado las industrias culturales, lo cual abre un debate ineludible sobre los derechos de autor. Si bien es cierto que estas herramientas democratizan la producción artística y agilizan procesos técnicos, no obstante amenazan el sustento de creadores cuyas obras entrenan modelos comerciales sin consentimiento previo.\n\nDesde este periódico consideramos que la innovación tecnológica nunca debe avanzar a costa de la dignidad cultural; constituye un arma de doble filo que exige reglas transparentes. De ahí que resulte imperativo que los gobiernos hispanohablantes aprueben marcos legales claros antes de que el patrimonio artístico pierda su protección jurídica.",
          markScheme: [
            {
              point: "Includes an authentic newspaper editorial headline.",
              keywords: ["desafío", "creatividad humana", "algorítmico"],
            },
            {
              point: "Maintains institutional editorial voice (*Desde este periódico consideramos…* / impersonal) with no personal anecdotes.",
              keywords: ["desde este periódico", "consideramos", "este diario"],
            },
            {
              point: "Uses *Si bien (es cierto que) + indicative* followed by *no obstante* counter-argument pivot.",
              keywords: ["si bien", "no obstante"],
            },
            {
              point: "Deploys *lo cual* or *cuyo/a/os/as* accurately with full agreement.",
              keywords: ["lo cual", "cuyas obras", "cuyo", "cuya"],
            },
            {
              point: "Deploys *de ahí que* followed accurately by a subjunctive verb (*resulte / sea / aprueben*).",
              keywords: ["de ahí que", "resulte", "imperativo"],
            },
            {
              point: "Demonstrates C1 nominalisation and/or register-matched formal idiom (*el auge de*, *arma de doble filo*).",
              keywords: ["el auge", "arma de doble filo", "patrimonio"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "The response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Weak editorial voice (relies on personal *yo* opinions) and basic B1 connectors with frequent grammatical slips.",
              indicators: ["Uses *en mi opinión* instead of institutional voice", "Indicative mistakenly used after *de ahí que*"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Recognisable formal newspaper tone and balanced viewpoint; attempts C1 connectors and relatives with occasional errors.",
              indicators: ["Headline and formal register maintained", "Counter-argument present; minor agreement or mood lapse"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authoritative Band 10–12 HL editorial seamlessly blending institutional *nosotros* voice, concessive balance, C1 relatives, nominalisation, and *de ahí que + subjuntivo*.",
              indicators: ["Zero personal anecdotes; crisp headline", "All four C1 syntactic targets executed with full accuracy"],
            },
          ],
        },
        {
          id: "6-grammar-text-types-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Synthesize",
          guideRef: "tipos-de-texto-convenciones",
          marks: 8,
          question:
            "[HL] Extended Paper 1 Diagnostic & Drafting Task (~170–220 words in Spanish): *You are delivering a closing **discurso** at a bilingual youth sustainability summit in Madrid attended by delegates from Spain and Latin America.* Draft an inspiring opening and concluding section that demonstrates: (1) authentic spoken **discurso** conventions (vocative greeting, rhetorical question, tricolon, inclusive *nosotros*, closing thanks), (2) a **Type 3 past counterfactual *si*-clause**, (3) **como si + imperfect subjunctive**, (4) **nominalisation**, and (5) **de ahí que + subjuntivo**.",
          hints: [
            "Open with a formal-inspiring vocative (*Estimados delegados, organizadores y jóvenes comprometidos:*).",
            "Build rhetorical rhythm with a tricolon (three parallel phrases) and a piercing rhetorical question.",
            "Weave in *Si hubiéramos… habríamos…*, *como si no existiera…*, nominal nouns (*la transición energética, el deterioro ambiental*), and *de ahí que sea urgente…*, ending with *Muchas gracias por su atención.*",
          ],
          modelAnswer:
            "Estimados delegados, organizadores y jóvenes comprometidos de España y América Latina:\n\n¿Acaso podemos permanecer indiferentes mientras el deterioro ambiental amenaza nuestro porvenir común? Hoy nos reunimos aquí para escuchar, para cooperar y para actuar con valentía. Durante décadas, demasiadas industrias explotaron los recursos naturales como si el planeta fuera inagotable. Si las generaciones anteriores hubieran impulsado la transición energética hace treinta años, hoy habríamos evitado gran parte de la crisis hídrica que golpea nuestras regiones.\n\nNo obstante, todavía estamos a tiempo de marcar un antes y un después. La protección de la biodiversidad y la reducción del consumo superfluo dependen de decisiones colectivas valientes; de ahí que resulte inaplazable que transformemos cada promesa en políticas medibles. Juntos, desde Madrid hasta Bogotá y Santiago, demostremos que nuestra generación no hace oídos sordos al futuro. Muchas gracias por su atención.",
          markScheme: [
            {
              point: "Opens with an authentic direct vocative greeting suited to a live pan-Hispanic summit.",
              keywords: ["estimados delegados", "jóvenes comprometidos"],
            },
            {
              point: "Uses a rhetorical question engaging the live audience directly.",
              keywords: ["¿acaso", "permanecer indiferentes"],
            },
            {
              point: "Uses a rhetorical tricolon or parallel cadence plus inclusive *nosotros* (*para escuchar, para cooperar y para actuar*).",
              keywords: ["para escuchar", "nos reunimos", "nuestra generación"],
            },
            {
              point: "Uses *como si + imperfect subjunctive* accurately (*como si el planeta fuera*).",
              keywords: ["como si", "fuera", "fuese"],
            },
            {
              point: "Uses a fully accurate Type 3 *si*-clause (*Si… hubieran impulsado…, habríamos evitado*).",
              keywords: ["hubieran", "habríamos"],
            },
            {
              point: "Demonstrates C1 nominalisation (*el deterioro ambiental*, *la transición energética*, *la reducción del consumo*).",
              keywords: ["deterioro", "transición energética", "reducción"],
            },
            {
              point: "Deploys *de ahí que + subjuntivo* accurately (*de ahí que resulte / sea*).",
              keywords: ["de ahí que", "resulte", "inaplazable"],
            },
            {
              point: "Concludes with formal spoken closing thanks (*Muchas gracias por su atención*) and register-safe idioms.",
              keywords: ["muchas gracias", "oídos sordos", "antes y un después"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "The response does not reach a standard described below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Reads like a silent essay rather than a live speech; limited grammatical complexity and frequent mood/tense errors.",
              indicators: ["Missing vocative opening or closing thanks", "Fails Type 3 *si*-clause or *como si* mood"],
            },
            {
              band: "3–5",
              marks: [3, 5],
              descriptor: "Clear spoken speech conventions and persuasive tone; accurately executes several target structures with minor slips in accents or cohesion.",
              indicators: ["Vocative + closing thanks present", "3–4 of the 5 grammatical targets accurate"],
            },
            {
              band: "6–8",
              marks: [6, 8],
              descriptor: "Commanding Band 10–12 HL *discurso* combining vivid oral rhetoric, pan-Hispanic awareness, exact Type 3 *si*-clause, *como si*, nominalisation, idioms, and *de ahí que + subjuntivo*.",
              indicators: ["Natural rhetorical cadence (question + tricolon + inclusive *nosotros*)", "All five complex grammatical targets accurate with authentic Spanish orthography"],
            },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 CHALLENGE QUESTIONS — MIX OF SHORT & WRITTEN)
  // =========================================================================
  challenge: [
    {
      id: "6-grammar-text-types-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "subjuntivo-completo",
      question:
        "Complete the **double-negation mood trap** with the exact present-tense form of *tener* (*tú*): *No dudo en absoluto de que tú ______ (tener) la preparación necesaria para el puesto.*",
      answer: { type: "text", accept: ["tienes"], display: "tienes" },
      traps: [
        {
          spec: { type: "text", accept: ["tengas"] },
          feedback: "Careful! *Dudar que* expresses doubt (subjunctive), but **no dudar (de) que** removes doubt = **certainty** → **indicative** (*tienes*)!",
        },
      ],
      hints: [
        "Translate *no dudo en absoluto de que* literally: “I have zero doubt that…”.",
        "Does zero doubt express uncertainty or strong certainty?",
      ],
      solution: [
        "Negating *dudar* (*no dudar de que*) restores **certainty**, so Spanish returns to the **indicative**: **tienes**.",
      ],
    },
    {
      id: "6-grammar-text-types-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "subjuntivo-completo",
      question:
        "Complete the **past-tense time clause** with the exact verb form of *llegar* (*yo*): *Ayer, en cuanto ______ (llegar, yo) al aeropuerto de Ciudad de México, llamé a mi familia anfitriona.*",
      answer: { type: "text", accept: ["llegué"], display: "llegué" },
      traps: [
        {
          spec: { type: "text", accept: ["llegue"] },
          feedback: "*En cuanto* only takes subjunctive for **future** actions; *ayer* marks a completed **past** event → preterite indicative (**llegué**)!",
        },
        {
          spec: { type: "text", accept: ["llegara"] },
          feedback: "A completed factual past event after *en cuanto* takes **pretérito indefinido** (*llegué*), not imperfect subjunctive!",
        },
      ],
      hints: [
        "Spot the time anchor *Ayer* and the main verb *llamé* — is this a future projection or a completed past fact?",
        "Remember the *-gar* spelling change (*g → gu* before *é*) in 1st-person singular preterite!",
      ],
      solution: [
        "Completed past action after *en cuanto* → **pretérito indefinido** (*llegar* → **llegué**).",
      ],
    },
    {
      id: "6-grammar-text-types-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "estilo-c1-conectores-hl",
      question:
        "[HL] Complete with the exact **present subjunctive** (*nosotros*) of *seguir* after the C1 concessive trigger: *Por mucho que ______ (seguir, nosotros) aplazando el debate, la transición ecológica es inevitable.*",
      answer: { type: "text", accept: ["sigamos"], display: "sigamos" },
      traps: [
        {
          spec: { type: "text", accept: ["seguimos"] },
          feedback: "*Por mucho que* + hypothetical/concessive effort takes the **subjunctive** (*sigamos*), not indicative *seguimos*.",
        },
        {
          spec: { type: "text", accept: ["siguamos"] },
          feedback: "Drop the silent *u* before *a* in *seguir*: *yo sigo → **sigamos*** (no *u* after *g* before *a*!).",
        },
      ],
      hints: [
        "*Por mucho que* (“no matter how much…”) triggers the present subjunctive here.",
        "Start from *yo* indicative *sigo* (notice the *u* disappears before *o/a*!) and add *-amos*.",
      ],
      solution: [
        "From *yo* present indicative *sigo*, drop *-o* and add *-amos* → **sigamos**.",
      ],
    },
    {
      id: "6-grammar-text-types-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "contrastes-clave-por-para-ser-estar",
      question:
        "Complete this tricky **estar por vs estar para** distinction with **por** or **para**: *Los voluntarios están ______ organizar otra colecta este fin de semana porque todavía faltan alimentos.* (Meaning: “are in favour of / inclined to”)",
      answer: { type: "text", accept: ["por"], display: "por" },
      traps: [
        {
          spec: { type: "text", accept: ["para"] },
          feedback: "*Estar para + inf.* means “to be **about to** (imminent)”; *estar **por** + inf.* means “to be **in favour of / inclined to**”!",
        },
      ],
      hints: [
        "Contrast *estar para + inf.* (“about to”) with *estar por + inf.* (“in favour of / yet to be done”).",
        "Notice the meaning cue in brackets: “in favour of / inclined to” — pick the preposition that matches inclination rather than imminence.",
      ],
      solution: [
        "**Estar por + infinitivo** expresses being inclined / in favour of doing something → **por**.",
      ],
    },
    {
      id: "6-grammar-text-types-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "contrastes-clave-por-para-ser-estar",
      marks: 4,
      question:
        "Explain the exact grammatical and semantic difference between these two passive Spanish sentences:\n(1) *El museo **fue cerrado** por el ayuntamiento en noviembre.*\n(2) *El museo **está cerrado** desde noviembre.*",
      hints: [
        "Contrast the **action passive** (*ser + participio*) with the **resultant-state construction** (*estar + participio*).",
        "Notice how sentence (1) names an agent (*por el ayuntamiento*) while sentence (2) describes an ongoing condition.",
      ],
      modelAnswer:
        "Sentence 1 uses the dynamic action passive (*ser + past participle*, *fue cerrado*), focusing on the completed event/process of shutting the museum down and explicitly introducing the agent (*por el ayuntamiento*). Sentence 2 uses the stative resultant construction (*estar + past participle*, *está cerrado*), describing the resulting current condition in which the museum remains since November, without highlighting who performed the action.",
      markScheme: [
        {
          point: "Identifies (1) as the dynamic/action passive (*ser + participio*).",
          keywords: ["action passive", "dynamic", "process"],
        },
        {
          point: "Notes that (1) focuses on the completed act and accommodates an explicit agent (*por*).",
          keywords: ["agent", "event", "shutting"],
        },
        {
          point: "Identifies (2) as the stative/resultant-state construction (*estar + participio*).",
          keywords: ["resultant", "stative", "condition"],
        },
        {
          point: "Explains that (2) focuses on the ongoing state rather than the actor who caused it.",
          keywords: ["remains", "ongoing", "without highlighting"],
        },
      ],
    },
    {
      id: "6-grammar-text-types-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "estilo-c1-conectores-hl",
      marks: 4,
      question:
        "[HL] Spot and fix ALL FOUR subtle C1 errors in this HL draft paragraph, briefly stating the rule for each fix:\n*“Visitamos una aldea andaluza cuyo historia nos conmovió, el cual demuestra el valor del patrimonio rural. Aunque el transporte público brilla por su ausencia, de ahí que muchos vecinos se marchan a la capital.”*",
      hints: [
        "Check: (1) gender agreement on *cuyo*, (2) neuter clausal relative vs masculine *el cual*, (3) double conjunction clash (*Aunque… de ahí que…* leaves no main clause!), and (4) mood after *de ahí que*.",
        "Fix the syntax cleanly so both clauses balance and *de ahí que* takes the subjunctive.",
      ],
      modelAnswer:
        "1. **cuya historia** (not *cuyo*): *cuyo* agrees with feminine singular *historia*. 2. **lo cual demuestra** (not *el cual*): referring to the entire preceding clause requires the neuter relative *lo cual*. 3. Remove the faulty *Aunque* fragment (use **Dado que / Puesto que** or make it a standalone main clause: *El transporte público brilla por su ausencia; de ahí que…*) because pairing *aunque* with *de ahí que* leaves the sentence without an independent main clause. 4. **se marchen** (not *se marchan*): *de ahí que* strictly mandates the subjunctive.",
      markScheme: [
        {
          point: "Fixes *cuyo historia* → *cuya historia* (agreement with following feminine noun).",
          keywords: ["cuya historia", "feminine"],
        },
        {
          point: "Fixes *el cual* → *lo cual* (neuter relative referring to whole preceding clause).",
          keywords: ["lo cual", "neuter", "entire"],
        },
        {
          point: "Diagnoses the structural fragment caused by pairing *aunque* with *de ahí que* and resolves the main clause.",
          keywords: ["fragment", "main clause", "puesto que", "dado que"],
        },
        {
          point: "Fixes *se marchan* → *se marchen* (mandatory subjunctive after *de ahí que*).",
          keywords: ["se marchen", "mandates the subjunctive", "subjunctive"],
        },
      ],
    },
    {
      id: "6-grammar-text-types-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      guideRef: "tipos-de-texto-convenciones",
      marks: 6,
      question:
        "A Paper 1 candidate must respond to this prompt: *“Your school wants to ban smartphones during break times to improve student mental health. Write a text reflecting on your personal reactions after the first week of the trial.”* The three choices offered are **Diario personal**, **Informe**, and **Folleto**. Rank ALL THREE choices from MOST appropriate to LEAST appropriate and justify each ranking systematically using all 5 IB Conceptual Understandings.",
      hints: [
        "Match **personal reactions** + **reflection** first → which Personal text type wins outright?",
        "Evaluate which of the two remaining Professional text types could be partially adapted (even imperfectly) vs which completely mismatches reflective purpose.",
        "Explicitly weave **Audience, Context, Purpose, Meaning, and Variation** into your evaluation.",
      ],
      modelAnswer:
        "**1st (Most appropriate): Diario personal.** It aligns seamlessly with every Conceptual Understanding: the **audience** is the self, the **context** is an intimate end-of-week check-in, and the **purpose** is authentic emotional reflection on personal reactions. In terms of **variation** and **meaning**, an informal first-person voice with dates (*Querido diario:*), candid observations, and rhetorical self-questioning conveys genuine lived experience for full Criterion C marks.\n\n**2nd (Partially acceptable / suboptimal): Informe.** While an *informe* could evaluate the trial's first week for school leadership using structured subheadings, its objective formal **register (variation)** and institutional **audience** clash with “personal reactions,” forcing a dry analytical tone that weakens personal reflection.\n\n**3rd (Least appropriate): Folleto.** A brochure's **purpose** is to persuade or inform a public readership visually through slogans, bulleted tips, and calls to action — completely incompatible with private introspective reflection on a completed week's trial.",
      markScheme: [
        {
          point: "Ranks *Diario personal* 1st as the single most appropriate choice.",
          keywords: ["diario personal", "1st"],
        },
        {
          point: "Justifies *Diario personal* via Audience (self), Context (end-of-week check-in), and Purpose (emotional reflection).",
          keywords: ["self", "emotional reflection", "intimate"],
        },
        {
          point: "Links *Diario personal* to Variation/Meaning (informal 1st-person register, date, candid voice).",
          keywords: ["querido diario", "informal", "candid"],
        },
        {
          point: "Evaluates *Informe* accurately as suboptimal due to institutional audience and dry objective register clashing with personal feelings.",
          keywords: ["suboptimal", "objective", "leadership"],
        },
        {
          point: "Ranks *Folleto* last and explains why promotional slogans/public persuasion mismatch introspective reflection.",
          keywords: ["slogans", "persuade", "incompatible"],
        },
        {
          point: "Explicitly integrates all five IB Conceptual Understandings across the ranking.",
          keywords: ["audience", "context", "purpose", "meaning", "variation"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "The response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies *diario personal* but offers superficial reasoning without applying the IB Conceptual Understandings clearly.",
          indicators: ["Brief preference without analysing rejected choices", "Omits Variation/Register analysis"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Logical ranking of all three formats with sound reference to Audience, Purpose, and Register.",
          indicators: ["Clearly distinguishes Personal vs Professional categories", "Explains why *folleto* is unsuitable"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Insightful, examiner-level conceptual justification systematically integrating all 5 Conceptual Understandings across every ranked format.",
          indicators: ["Nuanced distinction between suboptimal *informe* and inappropriate *folleto*", "Specific Spanish format conventions cited"],
        },
      ],
    },
    {
      id: "6-grammar-text-types-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Synthesize",
      guideRef: "estilo-c1-conectores-hl",
      marks: 6,
      question:
        "[HL] Register-Transformation Masterclass: Rewrite this informal teenage **blog** snippet into an authoritative formal **carta formal** paragraph (~110–140 words in Spanish) addressed to the mayor of Valencia (*Sr. Alcalde*) urging protection of local neighbourhood shops (*comercio local*). Eliminate all informal slang, switch consistently to **usted**, and integrate **nominalisation**, **cuyo/a/os/as**, **un subjuntivo**, and **por vs para** accurately:\n*“¡Hola a todos! Estoy súper enfadado porque las tiendas de toda la vida están cerrando por todas partes y los alquileres cuestan un ojo de la cara. Si el alcalde no hace nada, nuestro barrio va a perder su alma. ¡Dejad un comentario si pensáis igual!”*",
      hints: [
        "Open with Spanish formal-letter metadata/salutation (`Valencia, …`, `Estimado Sr. Alcalde:` with colon) and polite purpose formula (*Me dirijo a usted…*).",
        "Transform *están cerrando* → *el cierre progresivo del comercio local*; *alquileres cuestan un ojo de la cara* → *el encarecimiento de los alquileres*; weave in *cuyo/cuya*, a Type 2 *si*-clause or WEIRDO subjunctive, and close formally (*Atentamente,*).",
      ],
      modelAnswer:
        "Valencia, 20 de noviembre de 2026\n\nEstimado Sr. Alcalde:\n\nMe dirijo a usted con profunda preocupación por el cierre progresivo del comercio local en nuestro distrito, un problema agravado por el encarecimiento de los alquileres comerciales. Estos pequeños negocios, cuya labor cotidiana sostiene la cohesión vecinal, resultan esenciales para preservar la identidad del barrio. Si el ayuntamiento no adoptara medidas fiscales de apoyo antes de que desaparezcan más establecimientos, Valencia perdería parte irreemplazable de su patrimonio urbano. Por consiguiente, le solicito respetuosamente que impulse ayudas específicas para los comerciantes tradicionales. Quedo a su entera disposición. Atentamente, Marcos Serrano.",
      markScheme: [
        {
          point: "Uses authentic *carta formal* framing (city/date, *Estimado Sr. Alcalde:* with colon, and formal *Atentamente* closing).",
          keywords: ["estimado sr. alcalde:", "atentamente"],
        },
        {
          point: "Maintains 100% consistent formal *usted* register with zero residual slang or blog imperatives.",
          keywords: ["me dirijo a usted", "le solicito", "su entera disposición"],
        },
        {
          point: "Applies C1 nominalisation accurately (*el cierre progresivo*, *el encarecimiento*).",
          keywords: ["cierre", "encarecimiento"],
        },
        {
          point: "Integrates *cuyo/a/os/as* accurately agreeing with the following noun (*cuya labor*).",
          keywords: ["cuya labor", "cuyos", "cuya", "cuyo"],
        },
        {
          point: "Integrates accurate subjunctive (WEIRDO *solicito que impulse*, ESCAPA *antes de que desaparezcan*, or Type 2 *si adoptara*).",
          keywords: ["impulse", "desaparezcan", "adoptara"],
        },
        {
          point: "Applies *por* (cause: *por el cierre / por el encarecimiento*) and *para* (purpose/recipient: *para preservar / para los comerciantes*) accurately.",
          keywords: ["para preservar", "por el cierre", "para los comerciantes"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "The response does not reach a standard described below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Partial register upgrade; retains informal phrases, mixes *tú/usted*, or misses key letter conventions.",
          indicators: ["Uses comma instead of colon after greeting", "Retains *súper* or *ojo de la cara*"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Consistent formal letter format and register; accurately deploys most C1 targets with minor slips.",
          indicators: ["Clear *usted* voice and formal opening/closing", "2–3 grammatical targets accurately integrated"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Seamless Band 10–12 register transformation preserving the persuasive core while showcasing formal *carta* architecture, nominalisation, *cuyo*, subjunctive, and exact *por/para* control.",
          indicators: ["Authentic Spanish formal letter punctuation and sign-off", "All C1 syntactic targets woven naturally"],
        },
      ],
    },
  ],
};
