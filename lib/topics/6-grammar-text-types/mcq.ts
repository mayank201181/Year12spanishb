import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: SUBJUNCTIVE MASTERY & HIGH-STAKES CONTRASTS (SL & HL CORE)
  // =========================================================================
  {
    id: "6-grammar-text-types-m1",
    title: "MCQ Paper 1 · Subjunctive Triggers, Por/Para & Ser/Estar (SL/HL)",
    level: "SL",
    questions: [
      {
        id: "6-grammar-text-types-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "subjuntivo-completo",
        question:
          "Complete the sentence accurately: *Es imprescindible que los ciudadanos ______ (reducir) su huella de carbono cuanto antes.*",
        options: ["reducen", "reducirán", "reduzcan", "reducieran"],
        answerIndex: 2,
        hints: [
          "Check the impersonal trigger *Es imprescindible que* — does it express certainty or necessity/judgement?",
          "The main verb *es* is in the Present Zone, and *reducir* has a *-zco* *yo*-stem (*reduzco*).",
        ],
        explanation:
          "*Es imprescindible que* is a WEIRDO impersonal judgement in the present tense, triggering the **present subjunctive**. From the *yo* form *reduzco*, drop *-o* and add *-an* → **reduzcan**. *Reducen* is indicative, *reducirán* is future indicative, and *reducieran* breaks sequence of tenses (and has a wrong stem; imperfect subjunctive is *redujeran*).",
      },
      {
        id: "6-grammar-text-types-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "subjuntivo-completo",
        question:
          "Which verb form correctly completes this sentence with NO subject change? *Mis compañeros esperan ______ (terminar) el documental antes del viernes.*",
        options: ["terminar", "terminen", "terminan", "terminaran"],
        answerIndex: 0,
        hints: [
          "Count how many distinct subjects appear: who hopes, and who finishes the documentary?",
          "When both verbs share the same subject, Spanish omits *que* and uses a non-finite form.",
        ],
        explanation:
          "Because the subject does NOT change (*mis compañeros* both hope and finish), Spanish uses the **infinitive** (**terminar**) with no *que*. Subjunctive (*terminen*) would only be used if *esperan que* introduced a second subject.",
      },
      {
        id: "6-grammar-text-types-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "subjuntivo-completo",
        question:
          "Choose the grammatically accurate form for a **future** time clause: *Te enviaré el enlace en cuanto ______ (recibir, yo) la confirmación del festival.*",
        options: ["recibiré", "recibo", "recibía", "reciba"],
        answerIndex: 3,
        hints: [
          "Notice the main verb *enviaré* places the action in the future.",
          "Spanish NEVER puts the future tense directly after *cuando*, *en cuanto*, or *tan pronto como*.",
        ],
        explanation:
          "Time conjunctions (*cuando, en cuanto, tan pronto como, hasta que*) describing an **uncompleted future action** ALWAYS require the **present subjunctive** → **reciba**. Using *recibiré* is a classic English-interference error, while *recibo* only describes a habitual routine.",
      },
      {
        id: "6-grammar-text-types-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "subjuntivo-completo",
        question:
          "Select the exact *nosotros* present subjunctive of *dormir*: *La psicóloga escolar aconseja que todos ______ (dormir) sin pantallas en la habitación.*",
        options: ["dormamos", "durmamos", "duermamos", "dormimos"],
        answerIndex: 1,
        hints: [
          "*Dormir* is an *-ir* stem-changing verb (*o → ue* in the boot).",
          "Unlike *-ar/-er* stem-changers, *-ir* verbs undergo a vowel reduction (*o → u*) in *nosotros* and *vosotros*.",
        ],
        explanation:
          "In the present subjunctive, *-ir* stem-changing verbs shift *o → u* or *e → i* in the *nosotros/vosotros* forms: *dormir → **durmamos*** (just like *sentir → sintamos* and *pedir → pidamos*). *Dormamos* omits the shift, *duermamos* overapplies the boot diphthong, and *dormimos* is indicative.",
      },
      {
        id: "6-grammar-text-types-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "subjuntivo-completo",
        question:
          "Which sentence correctly expresses that you are looking for **any** job with flexible hours, without knowing whether one currently exists?",
        options: [
          "Busco un empleo que ofrece horario flexible.",
          "Busco un empleo que ofrecerá horario flexible.",
          "Busco un empleo que ofrezca horario flexible.",
          "Busco un empleo que ofreció horario flexible.",
        ],
        answerIndex: 2,
        hints: [
          "Ask whether the antecedent (*un empleo*) is a known specific job or an unknown hypothetical one.",
          "Indefinite or non-existent antecedents in adjective clauses trigger the subjunctive.",
        ],
        explanation:
          "An **indefinite/hypothetical antecedent** (*un empleo* that may or may not exist) requires the **subjunctive** (*ofrezca*). Using indicative *ofrece* would imply you already know a particular vacancy exists and you are locating it.",
      },
      {
        id: "6-grammar-text-types-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "subjuntivo-completo",
        question:
          "Identify the ONE clause below that requires the **indicative** rather than the subjunctive:",
        options: [
          "Es innegable que el turismo masivo ______ (encarecer) la vivienda.",
          "No creo que el turismo masivo ______ (beneficiar) a todos los barrios.",
          "Dudo que las nuevas normas ______ (frenar) el problema de inmediato.",
          "Es lamentable que tantos vecinos ______ (abandonar) el centro histórico.",
        ],
        answerIndex: 0,
        hints: [
          "Test each main-clause trigger for **certainty** vs **doubt / emotion**.",
          "*Innegable* means 'undeniable' — stating a fact rather than questioning it.",
        ],
        explanation:
          "**Es innegable que** asserts certainty (“it is undeniable that”), so it takes the **indicative** (*encarece*). By contrast, *no creo que* (denial), *dudo que* (doubt), and *es lamentable que* (emotional evaluation) all belong to WEIRDO and require the subjunctive.",
      },
      {
        id: "6-grammar-text-types-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "subjuntivo-completo",
        question:
          "Complete the ESCAPA clause correctly: *No lograremos proteger el arrecife a menos que las autoridades ______ (imponer) límites estrictos.*",
        options: ["imponen", "impongan", "impondrán", "impusieron"],
        answerIndex: 1,
        hints: [
          "*A menos que* ('unless') is the final **A** in the ESCAPA acronym.",
          "Build the present subjunctive of *imponer* from its irregular *yo* form *impongo*.",
        ],
        explanation:
          "*A menos que* is an **ESCAPA** conjunction and ALWAYS triggers the subjunctive. Since the main verb *lograremos* is in the Present/Future zone, use the present subjunctive from *impongo* → **impongan**.",
      },
      {
        id: "6-grammar-text-types-m1-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "subjuntivo-completo",
        question:
          "Choose the verb that correctly expresses emotion NOW about a recently completed action: *Me alegra muchísimo que tu hermana ______ (conseguir) la beca esta semana.*",
        options: ["consiga", "consiguió", "consiguiera", "haya conseguido"],
        answerIndex: 3,
        hints: [
          "Check the tense of the main verb (*me alegra* = Present Zone) and the timing of the subordinate action (*esta semana* = recently completed).",
          "Which compound subjunctive tense pairs with a present-tense WEIRDO trigger?",
        ],
        explanation:
          "When a **present-tense** emotional trigger (*me alegra que*) evaluates a **completed past action**, Spanish uses the **present perfect subjunctive**: **haya conseguido**. *Consiga* refers to present/future, while *consiguió* is indicative (forbidden after *me alegra que*).",
      },
      {
        id: "6-grammar-text-types-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Select the pair of prepositions that completes both blanks accurately: *Suspendieron el partido ______ la tormenta, así que pospusimos la final ______ el domingo.*",
        options: ["por / para", "para / por", "por / por", "para / para"],
        answerIndex: 0,
        hints: [
          "Blank 1 explains the **cause/reason** why the match was cancelled.",
          "Blank 2 sets a specific **future deadline/scheduled target date**.",
        ],
        explanation:
          "**Por** introduces cause or reason (*por la tormenta* = because of the storm), whereas **para** marks a future deadline or rescheduled target date (*para el domingo* = for Sunday).",
      },
      {
        id: "6-grammar-text-types-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "What does the sentence *“A pesar de su corta experiencia, la candidata es muy lista, aunque todavía no está lista para dirigir la sucursal”* mean?",
        options: [
          "She is ready to work, though she is not yet clever enough to manage the branch.",
          "She is wealthy enough to invest, though she is not yet prepared for the branch.",
          "She is very clever, though she is not yet ready to manage the branch.",
          "She is very attentive, though she is not yet certain about managing the branch.",
        ],
        answerIndex: 2,
        hints: [
          "Contrast *ser listo/a* (inherent personal trait) with *estar listo/a* (current state of preparation).",
          "Check the order in the Spanish sentence: *es muy lista* comes first, *no está lista* comes second.",
        ],
        explanation:
          "**Ser listo/a** means *clever/sharp*, whereas **estar listo/a** means *ready/prepared*. Swapping the two copulas flips the logic completely.",
      },
      {
        id: "6-grammar-text-types-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Choose the accurate verb combination for an event and a building: *La entrega de premios ______ en el Centro Cultural, que ______ cerca de la plaza mayor.*",
        options: [
          "está / está",
          "es / está",
          "es / es",
          "está / es",
        ],
        answerIndex: 1,
        hints: [
          "*La entrega de premios* is an **event** (“takes place at”), not a physical object.",
          "*El Centro Cultural* is a **physical building** located near the square.",
        ],
        explanation:
          "In Spanish, **where an event takes place** ALWAYS uses **ser** (*La entrega de premios **es** en…*), whereas the **physical location** of people, objects, or buildings ALWAYS uses **estar** (*que **está** cerca de…*).",
      },
      {
        id: "6-grammar-text-types-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Which Spanish sentence accurately conveys *“I bought the concert tickets on behalf of my cousin (she asked me to queue for her) for forty euros”*?",
        options: [
          "Compré las entradas por mi prima por cuarenta euros.",
          "Compré las entradas para mi prima para cuarenta euros.",
          "Compré las entradas para mi prima por cuarenta euros.",
          "Compré las entradas por mi prima para cuarenta euros.",
        ],
        answerIndex: 0,
        hints: [
          "Does *on behalf of / in place of someone* use *por* or *para*?",
          "Does monetary exchange/price (*for forty euros*) use *por* or *para*?",
        ],
        explanation:
          "Both contexts require **por**: **por mi prima** expresses substitution/acting on someone's behalf (whereas *para mi prima* would mean a gift intended for her), and **por cuarenta euros** expresses monetary exchange/price.",
      },
      {
        id: "6-grammar-text-types-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Select the most natural Band 10–12 Spanish *perífrasis verbal* for *“Our eco-committee has been organising workshops for three years”*:",
        options: [
          "Nuestro comité ecológico está organizando talleres por tres años.",
          "Nuestro comité ecológico acaba de organizar talleres hace tres años.",
          "Nuestro comité ecológico volvió a organizar talleres durante tres años.",
          "Nuestro comité ecológico lleva tres años organizando talleres.",
        ],
        answerIndex: 3,
        hints: [
          "Which *perífrasis verbal* expresses an action that began in the past and continues into the present?",
          "Recall the pattern: *llevar + [period of time] + gerundio*.",
        ],
        explanation:
          "**Llevar + [time] + gerundio** (*lleva tres años organizando*) is the idiomatic B2–C1 Spanish equivalent of “has been [doing] for [time]”. *Acabar de* means “has just”, *volver a* means “did again”, and *está organizando por* is an English calque.",
      },
      {
        id: "6-grammar-text-types-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Which sentence uses the **pasiva refleja** with completely accurate verb agreement?",
        options: [
          "En el mercado local se vende frutas ecológicas todos los sábados.",
          "En la universidad se ofrece dos becas nuevas para idiomas.",
          "En esta región se cultivan productos tradicionales sin pesticidas.",
          "En los parques públicos se prohíben tirar residuos al suelo.",
        ],
        answerIndex: 2,
        hints: [
          "In *pasiva refleja*, the verb must agree in number with the grammatical noun subject (*productos*, *frutas*, *becas*).",
          "When an infinitive (*tirar residuos*) is the subject, the verb stays singular (*se prohíbe tirar*).",
        ],
        explanation:
          "*Productos tradicionales* is plural, so the verb correctly takes plural agreement: **se cultivan**. By contrast, *se vende frutas* and *se ofrece dos becas* lack plural agreement (*se venden / se ofrecen*), while *se prohíben tirar* wrongly pluralises before an infinitive subject (*se prohíbe tirar*).",
      },
      {
        id: "6-grammar-text-types-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "subjuntivo-completo",
        question:
          "How does the meaning shift between (1) *“Aunque llueve, iremos a la marcha”* and (2) *“Aunque llueva, iremos a la marcha”*?",
        options: [
          "Sentence 1 expresses a past habit, whereas Sentence 2 expresses a completed event.",
          "Sentence 1 states that it is actually raining now, whereas Sentence 2 treats rain as hypothetical.",
          "Sentence 1 is informal spoken Spanish, whereas Sentence 2 is strictly formal legal Spanish.",
          "Sentence 1 expresses doubt about the march, whereas Sentence 2 expresses certainty about rain.",
        ],
        answerIndex: 1,
        hints: [
          "*Aunque* can take either indicative or subjunctive depending on whether the speaker treats the condition as a known fact.",
          "Match indicative (*llueve*) to reality and subjunctive (*llueva*) to hypothesis (“even if”).",
        ],
        explanation:
          "**Aunque + indicativo** (*llueve*) acknowledges a **known real fact** (“even though it IS raining”). **Aunque + subjuntivo** (*llueva*) frames the condition as **hypothetical or uncertain** (“even if it rains”).",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: IB TEXT TYPES, REGISTER & CONCEPTUAL UNDERSTANDINGS (SL/HL)
  // =========================================================================
  {
    id: "6-grammar-text-types-m2",
    title: "MCQ Paper 2 · IB Text-Type Categories & Conceptual Understandings (SL/HL)",
    level: "SL",
    questions: [
      {
        id: "6-grammar-text-types-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Which set lists ALL FIVE IB Diploma Language B **Conceptual Understandings** assessed under Paper 1 Criterion C?",
        options: [
          "Grammar, Vocabulary, Cohesion, Structure, Pronunciation",
          "Audience, Context, Purpose, Meaning, Variation",
          "Personal, Professional, Mass Media, Academic, Literary",
          "Introduction, Development, Counter-argument, Conclusion, Sign-off",
        ],
        answerIndex: 1,
        hints: [
          "Think of the mnemonic **A-C-P-M-V** used in IB Language B Paper 1 planning.",
          "Criterion C measures how well your text fits who reads it, where, why, how meaning lands, and register choices.",
        ],
        explanation:
          "The 5 official IB Language B Conceptual Understandings are **Audience, Context, Purpose, Meaning, and Variation**. Together they govern text-type selection, register (*tú/usted*), tone, and format conventions on Criterion C (6 marks).",
      },
      {
        id: "6-grammar-text-types-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Which of the following IB text types belongs strictly to the **Professional** category?",
        options: [
          "Diario personal",
          "Reseña cinematográfica",
          "Editorial periodístico",
          "Propuesta formal",
        ],
        answerIndex: 3,
        hints: [
          "Recall the 3 IB categories: Personal (*diario, carta informal, blog*), Professional (*carta formal, informe, propuesta, folleto*), Mass Media (*artículo, editorial, entrevista, discurso, reseña*).",
          "Which option pitches a structured institutional action plan to an organisation or authority?",
        ],
        explanation:
          "**Propuesta formal** belongs to the **Professional** text-type category alongside *carta formal*, *informe*, and *folleto/guía*. *Diario personal* is Personal, while *reseña* and *editorial* belong to Mass Media.",
      },
      {
        id: "6-grammar-text-types-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Justify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Prompt: *You conducted a survey of 120 students about cafeteria food waste and must present your objective findings and data-backed conclusions to the school governing board.* Which text type is MOST appropriate?",
        options: [
          "Informe",
          "Blog",
          "Carta informal",
          "Reseña",
        ],
        answerIndex: 0,
        hints: [
          "Focus on the purpose: presenting **objective survey findings** to an institutional governing board.",
          "Which Professional text type uses factual subheadings (*Introducción, Resultados, Conclusiones*)?",
        ],
        explanation:
          "An **informe** (report) is designed specifically to present objective findings, survey data, and structured recommendations to an authority using formal register and numbered subheadings. A *blog* or *carta informal* clashes with the institutional audience, and a *reseña* critiques cultural works.",
      },
      {
        id: "6-grammar-text-types-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Which salutation follows authentic **Spanish** formal-letter punctuation and register conventions?",
        options: [
          "Querida Sra. Directora,",
          "Estimada Sra. Directora,",
          "Estimada Sra. Directora:",
          "Hola Sra. Directora:",
        ],
        answerIndex: 2,
        hints: [
          "Check TWO features: formal lexical choice (*Estimada* vs *Querida/Hola*) AND Spanish punctuation after greetings.",
          "English uses a comma after greetings, whereas Spanish orthography requires a different mark.",
        ],
        explanation:
          "In Spanish, ALL letter and email salutations end with a **colon (:)** (*dos puntos*), NEVER a comma, and formal recipients take **Estimado/a** (or *Distinguido/a*) rather than *Querido/a* or *Hola*.",
      },
      {
        id: "6-grammar-text-types-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "What is the defining stylistic difference between an **editorial** and an **artículo de opinión** in IB Mass Media conventions?",
        options: [
          "An editorial is always written as a dialogue of questions and answers with a specialist.",
          "An editorial uses informal *tú* slang and asks readers to leave comments and hashtags.",
          "An editorial must include a star rating out of five and a spoiler-free plot summary.",
          "An editorial expresses the newspaper's institutional stance using *nosotros* or impersonal voice without personal anecdotes.",
        ],
        answerIndex: 3,
        hints: [
          "Ask whose voice speaks in a newspaper editorial: an individual columnist or the publication as an institution?",
          "Eliminate conventions belonging to *entrevista*, *blog*, and *reseña*.",
        ],
        explanation:
          "An **editorial** represents the collective institutional viewpoint of the newspaper (*desde este diario consideramos…*), maintaining authoritative formal register without personal first-person anecdotes or an individual byline.",
      },
      {
        id: "6-grammar-text-types-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Prompt: *Your town is launching a weekend eco-market and you are asked to create a concise public guide with a catchy slogan, practical bulleted tips, and contact details to attract local families.* Which text type is MOST appropriate?",
        options: [
          "Diario personal",
          "Folleto / Guía",
          "Carta formal",
          "Editorial",
        ],
        answerIndex: 1,
        hints: [
          "Spot the structural clues: catchy slogan, scannable sections, practical bulleted tips, call to action.",
          "Which Professional text type informs and attracts the general public visually?",
        ],
        explanation:
          "A **folleto / guía** (brochure/pamphlet) combines an eye-catching title and slogan, short scannable subheadings, bulleted practical tips, persuasive imperatives, and a clear call to action/contact block.",
      },
      {
        id: "6-grammar-text-types-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Which combination of structural conventions is ESSENTIAL for a top-band IB **discurso** (speech) delivered at a youth climate summit?",
        options: [
          "Direct vocative greeting to the audience, rhetorical devices, inclusive *nosotros*, and closing thanks.",
          "Date at top right, header fields (`De / Para / Asunto`), bulleted budget table, and formal signature.",
          "Catchy headline, individual byline (*Por…*), star rating, and invitation to leave comments below.",
          "Chronological private reflection, emotional diary entry date, and intimate sign-off to oneself.",
        ],
        answerIndex: 0,
        hints: [
          "Remember that a *discurso* is written to be **spoken aloud** to a live audience.",
          "Look for oral markers: addressing listeners directly at the start, persuasive rhythm, and thanking them at the end.",
        ],
        explanation:
          "A **discurso** must sound spoken and interactive: open with a direct vocative (*Estimados asistentes…*), weave in rhetorical questions/tricolons and inclusive *nosotros*, and finish with a clear call to action and closing thanks (*Muchas gracias por su atención*).",
      },
      {
        id: "6-grammar-text-types-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Which closing phrase matches a **carta formal** addressed to a university dean in *usted* register?",
        options: [
          "¡Un besazo y escríbeme pronto!",
          "¡Déjame tu opinión en los comentarios!",
          "Atentamente, le saluda con toda consideración,",
          "Querido diario, mañana seguiré escribiendo.",
        ],
        answerIndex: 2,
        hints: [
          "Check register consistency: the dean requires formal **usted** conventions.",
          "Eliminate closings designed for informal letters, blogs, and diaries.",
        ],
        explanation:
          "**Atentamente, le saluda con toda consideración,** (or *Reciba un cordial saludo, Atentamente,*) matches formal *usted* register in a *carta formal*, followed by the writer's full name.",
      },
      {
        id: "6-grammar-text-types-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "A candidate writing a **blog** about ethical fast-fashion choices for Hispanic teenagers forgets ONE signature convention that separates a blog from a standard magazine article. Which feature is uniquely characteristic of an IB blog?",
        options: [
          "Organising ideas into clear paragraphs with cohesive discourse markers.",
          "Including an engaging title relevant to the chosen prescribed theme.",
          "Using accurate present subjunctive forms to recommend sustainable habits.",
          "Inviting interactive reader engagement via a comments prompt and topical tags.",
        ],
        answerIndex: 3,
        hints: [
          "Three of the choices apply equally to an *artículo*, *propuesta*, or *editorial*.",
          "What makes an online **blog** interactive and personal-public in format?",
        ],
        explanation:
          "An IB **blog** specifically signals its digital interactive context through direct conversational address (*¿Y tú qué opinas?*), an invitation to comment (*¡Deja tu comentario abajo!*), and optional metadata such as publication date and hashtags.",
      },
      {
        id: "6-grammar-text-types-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Which opening demonstrates the clearest register inconsistency (**Variation** penalty under Criterion C)?",
        options: [
          "Estimado Sr. Director: te escribo para comentarte que su colegio necesita mejorar el reciclaje.",
          "Estimado Sr. Director: me dirijo a usted con el fin de proponer una campaña de reciclaje escolar.",
          "Querida Marta: te escribo desde Bogotá para contarte cómo funciona nuestro club ecológico.",
          "Estimados vecinos: les invitamos cordialmente a participar en la jornada de limpieza del sábado.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the greeting pronoun/formality with the verb and possessive pronouns in the sentence that follows.",
          "Look for an abrupt switch between *usted* and *tú*.",
        ],
        explanation:
          "*Estimado Sr. Director:* and *su colegio* use formal **usted**, but *te escribo para comentarte* abruptly drops into informal **tú**. Mixing *tú* and *usted* for the same addressee is a classic Criterion C penalty.",
      },
      {
        id: "6-grammar-text-types-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Prompt: *After interviewing a Mexican robotics engineer for your school newspaper, publish the conversation so readers learn both her background and her views on AI ethics.* Which text type is MOST appropriate?",
        options: [
          "Propuesta",
          "Entrevista",
          "Reseña",
          "Folleto",
        ],
        answerIndex: 1,
        hints: [
          "Notice the prompt explicitly asks you to publish the **conversation** with the engineer.",
          "Which Mass Media text type pairs a contextual intro paragraph with formatted Q&A turns?",
        ],
        explanation:
          "An **entrevista** (interview) opens with a catchy headline and brief contextual introduction explaining who the interviewee is and why she matters, followed by clearly labelled Q&A turns (*Periodista / Ingeniera*) and a brief closing line.",
      },
      {
        id: "6-grammar-text-types-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "A student writes an **informe** and a **propuesta** during mock exams. Which statement accurately distinguishes their primary **Purpose** under IB conventions?",
        options: [
          "An *informe* is strictly informal and personal, whereas a *propuesta* is always written for mass media.",
          "An *informe* uses Q&A dialogue format, whereas a *propuesta* requires a headline and author byline.",
          "An *informe* avoids subheadings to flow like a narrative, whereas a *propuesta* uses diary dates.",
          "An *informe* objectively presents findings and analysis, whereas a *propuesta* pitches an actionable plan to persuade decision-makers.",
        ],
        answerIndex: 3,
        hints: [
          "Both *informe* and *propuesta* are **Professional** texts that use formal register and clear subheadings.",
          "Contrast *reporting what happened / what data shows* vs *pitching concrete future measures and benefits*.",
        ],
        explanation:
          "Both belong to the Professional category and use formal register and subheadings, but an **informe** prioritises objective reporting of findings/data while a **propuesta** prioritises persuading an authority to adopt a structured, feasible action plan.",
      },
      {
        id: "6-grammar-text-types-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "When writing an IB **reseña** of a Spanish-language documentary or novel, which element MUST be included alongside a brief synopsis to earn full Criterion C marks?",
        options: [
          "A complete plot summary revealing the ending twist in chronological detail.",
          "The sender's postal address, official subject line, and formal *Atentamente* closing.",
          "A balanced critical evaluation of strengths and limitations ending with a clear recommendation.",
          "A numbered budget breakdown estimating how much the production cost to film.",
        ],
        answerIndex: 2,
        hints: [
          "A *reseña* is NOT just a plot summary — its core purpose is critical evaluation.",
          "Think about what helps a reader decide whether to watch the documentary or read the book.",
        ],
        explanation:
          "A strong IB **reseña** keeps the synopsis brief and spoiler-free so that most of the text delivers a **balanced critique** (themes, style, strengths, minor flaws) concluding with a clear verdict or recommendation.",
      },
      {
        id: "6-grammar-text-types-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "In IB Spanish B Paper 1 (FA2029 subject brief), what are the target word-count ranges for **SL** and **HL** respectively?",
        options: [
          "SL: 250–400 words · HL: 450–600 words",
          "SL: 150–250 words · HL: 250–400 words",
          "SL: 400–550 words · HL: 650–800 words",
          "SL: 200–300 words · HL: 350–450 words",
        ],
        answerIndex: 0,
        hints: [
          "IB Spanish B requires substantially deeper development than IGCSE (which typically sits around 130–140 words).",
          "HL essays demand ~200 words more than SL to sustain complex argumentation and counter-arguments.",
        ],
        explanation:
          "IB Spanish B Paper 1 expects **250–400 words at SL** and **450–600 words at HL**. Falling noticeably short restricts Criterion B (Message) development, while writing far over the upper limit eats into essential proofreading time.",
      },
      {
        id: "6-grammar-text-types-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tipos-de-texto-convenciones",
        question:
          "Which set of header metadata is mandatory when formatting a formal **correo electrónico** to a Hispanic NGO coordinator?",
        options: [
          "Headline, individual byline (*Por…*), publication section, and pull-quote.",
          "`De:`, `Para:`, `Asunto:`, formal greeting with colon, concise body, and formal sign-off.",
          "City and date only, informal greeting with comma, hashtags, and comment prompt.",
          "Vocative audience greeting, rhetorical triad, stage pause cues, and closing thanks.",
        ],
        answerIndex: 1,
        hints: [
          "Think about what distinguishes an *email* layout visually from a printed letter or newspaper article.",
          "Which three compact header labels open every authentic Spanish email?",
        ],
        explanation:
          "A **correo electrónico** immediately signals its text type through email headers (**De / Para / Asunto**), followed by a register-appropriate salutation with a colon, focused paragraphs, and a matching sign-off.",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: PAST TENSES, SI-CLAUSES & [HL] C1 COHESION
  // =========================================================================
  {
    id: "6-grammar-text-types-m3",
    title: "MCQ Set 3 · Past Tenses, Si-Clauses & [HL] C1 Cohesion",
    level: "HL",
    questions: [
      {
        id: "6-grammar-text-types-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Complete the **Type 2 hypothetical *si*-clause** accurately: *Si el ayuntamiento ______ (invertir) más en carriles bici, menos vecinos usarían el coche.*",
        options: [
          "invertiría",
          "invierta",
          "invierte",
          "invirtiera",
        ],
        answerIndex: 3,
        hints: [
          "Look at the result clause (*usarían* = conditional simple) — this signals a Type 2 hypothetical *si*-clause.",
          "NEVER put conditional after *si*; form the imperfect subjunctive from *ellos* preterite *invirtieron*.",
        ],
        explanation:
          "Type 2 *si*-clauses follow **Si + imperfecto de subjuntivo → condicional simple**. From *ellos* preterite *invirtieron*, drop *-ron* and add *-ra* → **invirtiera** (or *invirtiese*). *Invertiría* after *si* is ungrammatical.",
      },
      {
        id: "6-grammar-text-types-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Select the exact verb pair for a **Type 3 past counterfactual *si*-clause**: *Si nosotros ______ (planificar) mejor la campaña, ______ (recaudar) el doble de fondos.*",
        options: [
          "planificáramos / recaudaríamos",
          "hubiéramos planificado / habríamos recaudado",
          "habíamos planificado / habremos recaudado",
          "habríamos planificado / hubiéramos recaudado",
        ],
        answerIndex: 1,
        hints: [
          "Type 3 expresses regret about an **unchangeable past event** (“If we had planned…, we would have raised…”).",
          "Check which clause takes *hubiéramos* (pluperfect subjunctive) and which takes *habríamos* (conditional perfect).",
        ],
        explanation:
          "Type 3 *si*-clauses pair **Si + pluscuamperfecto de subjuntivo** (**hubiéramos planificado**) with **condicional compuesto** (**habríamos recaudado**). Reversing *habríamos* into the *si*-clause is a common error.",
      },
      {
        id: "6-grammar-text-types-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Choose the verb form required after **como si** (“as if”): *Algunas empresas contaminan los ríos como si el agua ______ (ser) un recurso infinito.*",
        options: ["es", "sea", "fuera", "sería"],
        answerIndex: 2,
        hints: [
          "*Como si* always introduces an unreal/contrary-to-fact comparison.",
          "Even when the main verb (*contaminan*) is in the present tense, *como si* ALWAYS takes a past subjunctive.",
        ],
        explanation:
          "**Como si** ALWAYS triggers the **imperfect** (or pluperfect) **subjunctive**, regardless of the main-clause tense → **fuera** (or *fuese*). Neither present subjunctive (*sea*) nor indicative (*es*) is grammatical after *como si*.",
      },
      {
        id: "6-grammar-text-types-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "How do the verbs *supe* and *sabía* differ in meaning in these sentences: (1) *Ayer **supe** la verdad* vs (2) *Antes yo ya **sabía** la verdad*?",
        options: [
          "*Supe* means “I found out / learned” at a specific moment, whereas *sabía* means “I already knew” as a state.",
          "*Supe* means “I already knew” continuously, whereas *sabía* means “I suddenly discovered” the truth.",
          "*Supe* refers to knowing a person personally, whereas *sabía* refers exclusively to knowing factual data.",
          "*Supe* is formal written Spanish, whereas *sabía* is strictly used in spoken informal dialogue.",
        ],
        answerIndex: 0,
        hints: [
          "Recall how state verbs (*saber, conocer, poder, querer*) shift meaning when compressed into the *pretérito indefinido*.",
          "*Ayer* marks a specific moment of entry into knowledge.",
        ],
        explanation:
          "In the *pretérito indefinido*, **saber** (*supe*) expresses the moment of discovery (“I found out”), whereas in the *imperfecto* (**sabía**) it expresses an ongoing background state of knowledge (“I knew”).",
      },
      {
        id: "6-grammar-text-types-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "subjuntivo-completo",
        question:
          "Maintain accurate **sequence of tenses** when shifting into the past: *La alcaldesa exigió que todas las fábricas ______ (instalar) filtros antes de junio.*",
        options: ["instalen", "instalaran", "instalan", "instalarían"],
        answerIndex: 1,
        hints: [
          "The main verb *exigió* is in the **preterite** (Past Zone).",
          "Which subjunctive tense pairs with a Past-Zone WEIRDO trigger?",
        ],
        explanation:
          "Because the WEIRDO trigger *exigió* is in the **Past Zone** (preterite), sequence of tenses shifts the subordinate clause to the **imperfect subjunctive** → **instalaran** (or *instalasen*).",
      },
      {
        id: "6-grammar-text-types-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "estilo-c1-conectores-hl",
        question:
          "[HL] Select the exact form of *cuyo* to complete this sentence: *Entrevistamos a un periodista colombiano ______ crónicas retratan la vida rural.*",
        options: ["cuyo", "cuya", "cuyos", "cuyas"],
        answerIndex: 3,
        hints: [
          "Does *cuyo* agree with the possessor (*un periodista*) or with the possessed noun that follows it?",
          "Check the gender and number of *crónicas*.",
        ],
        explanation:
          "**Cuyo/a/os/as** ALWAYS agrees in gender and number with the **noun immediately following it** (*crónicas* = feminine plural) — NEVER with the owner (*un periodista*, masculine singular) → **cuyas**.",
      },
      {
        id: "6-grammar-text-types-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "estilo-c1-conectores-hl",
        question:
          "[HL] Complete with the exact mood required by the C1 consecutive connector: *La tasa de reciclaje ha caído drásticamente; de ahí que el municipio ______ (lanzar) una nueva campaña educativa.*",
        options: ["lanza", "lanzará", "lance", "lanzó"],
        answerIndex: 2,
        hints: [
          "**De ahí que** (“hence / that is why”) is a high-band HL mood trap.",
          "With a Present-Zone main verb (*ha caído*) and spelling change *-zar → -ce*, which form is required?",
        ],
        explanation:
          "**De ahí que** ALWAYS demands the **subjunctive**. Because the main verb (*ha caído*) is in the Present Zone, use present subjunctive of *lanzar* (*z → c* before *e*) → **lance**.",
      },
      {
        id: "6-grammar-text-types-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "estilo-c1-conectores-hl",
        question:
          "[HL] Choose the relative pronoun that smoothly summarises the **entire preceding clause**: *El acceso a internet rural sigue siendo desigual, ______ limita las oportunidades educativas de miles de jóvenes.*",
        options: ["lo cual", "el cual", "cuyo", "quien"],
        answerIndex: 0,
        hints: [
          "There is no single masculine/feminine noun antecedent here — the pronoun refers to the whole situation described before the comma.",
          "Which neuter relative pronoun refers back to an entire clause?",
        ],
        explanation:
          "**Lo cual** (or *lo que*) is the neuter relative pronoun used after a comma to refer to an **entire preceding clause or idea**. *El cual* refers only to a specific masculine singular noun, *cuyo* marks possession, and *quien* refers to people.",
      },
      {
        id: "6-grammar-text-types-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "estilo-c1-conectores-hl",
        question:
          "[HL] Select the exact relative pronoun required after a compound preposition: *Aprobó una ley mediante ______ se protegen las lenguas indígenas en la enseñanza pública.*",
        options: ["que", "lo cual", "cuya", "la cual"],
        answerIndex: 3,
        hints: [
          "Identify the antecedent noun (*una ley* = feminine singular) and notice the multi-syllable preposition **mediante**.",
          "Compound and multi-syllable prepositions (*mediante, durante, según, a través de*) require the full articulated relative pronoun.",
        ],
        explanation:
          "After multi-syllable or compound prepositions (*mediante, durante, a través de*), formal Spanish requires **el cual / la cual / los cuales / las cuales** (or *el que / la que*) agreeing with the antecedent *una ley* (fem. sg.) → **la cual**.",
      },
      {
        id: "6-grammar-text-types-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "estilo-c1-conectores-hl",
        question:
          "[HL] Which sentence correctly applies **nominalisation** to elevate *“Cuando emigran muchos profesionales jóvenes, el país pierde talento”* into C1 academic prose?",
        options: [
          "Porque muchos profesionales jóvenes emigran cada año, el país pierde muchísimo talento.",
          "Si emigran demasiados profesionales jóvenes ahora, el país perderá todo su talento.",
          "La emigración de profesionales jóvenes conlleva una preocupante fuga de talento nacional.",
          "Emigrando los profesionales jóvenes hacia fuera, el país está perdiendo bastante talento.",
        ],
        answerIndex: 2,
        hints: [
          "Nominalisation converts verb clauses (*cuando emigran…*, *pierde talento*) into crisp abstract noun phrases.",
          "Look for abstract nouns (*la emigración*, *fuga de talento*) linked by an elevated formal verb (*conlleva*).",
        ],
        explanation:
          "Converting *cuando emigran…* into **la emigración de profesionales jóvenes** and *pierde talento* into **una preocupante fuga de talento** (linked by *conlleva*) exemplifies C1 **nominalisation**, compressing wordy clauses into authoritative HL prose.",
      },
      {
        id: "6-grammar-text-types-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "estilo-c1-conectores-hl",
        question:
          "[HL] Which concessive structure takes the **indicative** to concede a known reality before pivoting to a counter-argument?",
        options: [
          "Por más que ______ (insistir) las empresas, la ley entrará en vigor.",
          "Si bien es cierto que el teletrabajo ______ (reducir) los desplazamientos, también aísla al empleado.",
          "Por mucho que ______ (ahorrar) agua en casa, la agricultura consume la mayoría.",
          "A menos que ______ (cambiar) el modelo energético, las emisiones seguirán subiendo.",
        ],
        answerIndex: 1,
        hints: [
          "Check each connector: *por más que*, *por mucho que*, and *a menos que* all push toward the subjunctive.",
          "Which classic HL counter-argument opener concedes an established fact in the indicative?",
        ],
        explanation:
          "**Si bien (es cierto que)** concedes a real, acknowledged fact and ALWAYS takes the **indicative** (*reduce*). By contrast, *por más que*, *por mucho que*, and *a menos que* (ESCAPA) require the subjunctive.",
      },
      {
        id: "6-grammar-text-types-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "estilo-c1-conectores-hl",
        question:
          "[HL] You are writing a formal **editorial** for a national Hispanic newspaper critiquing algorithmic bias. Which idiomatic expression best fits this formal register?",
        options: [
          "La inteligencia artificial constituye un arma de doble filo cuyos sesgos brillan por su ausencia en el debate público.",
          "La inteligencia artificial cuesta un ojo de la cara y las empresas nos están tomando el pelo a todos.",
          "Las empresas tecnológicas tienen que ponerse las pilas ya porque esto me importa un pepino.",
          "El debate sobre los algoritmos es súper guay, aunque la gente no tiene pelos en la lengua.",
        ],
        answerIndex: 0,
        hints: [
          "Evaluate both grammatical accuracy and **register appropriateness** for a national newspaper editorial.",
          "Eliminate colloquial expressions (*tomar el pelo*, *ponerse las pilas*, *súper guay*, *me importa un pepino*).",
        ],
        explanation:
          "**Ser un arma de doble filo** (“be a double-edged sword”) and **brillar por su ausencia** (“be conspicuous by its absence”) are elevated, register-appropriate Hispanic idioms ideal for formal journalistic prose, paired cleanly with *cuyos sesgos*.",
      },
      {
        id: "6-grammar-text-types-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "estilo-c1-conectores-hl",
        question:
          "[HL] Complete the evaluative clause with *el hecho de que*: *El hecho de que todavía ______ (existir) brechas educativas entre regiones exige una respuesta estructural.*",
        options: ["existieron", "existirán", "existan", "existirían"],
        answerIndex: 2,
        hints: [
          "When *el hecho de que* introduces a backgrounded theme that the main verb (*exige*) evaluates, Spanish favours the subjunctive.",
          "Check the grammatical subject of the subordinate verb: *brechas educativas* (plural) in the Present Zone.",
        ],
        explanation:
          "When *el hecho de que* opens an evaluative C1 sentence (*exige una respuesta estructural*), the **present subjunctive** agreeing with plural *brechas educativas* (**existan**) is the authoritative Band 10–12 form.",
      },
      {
        id: "6-grammar-text-types-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "contrastes-clave-por-para-ser-estar",
        question:
          "Choose the exact past-tense narrative sequence: *Cuando ______ (llegar, nosotros) al refugio de montaña, la nieve ya ______ (cubrir) todos los senderos y el viento ______ (soplar) con fuerza.*",
        options: [
          "llegábamos / cubrió / sopló",
          "habíamos llegado / cubría / sopló",
          "llegamos / cubrió / sopló",
          "llegamos / había cubierto / soplaba",
        ],
        answerIndex: 3,
        hints: [
          "Map the 3 time layers: (1) completed arrival event, (2) action already completed *before* arrival (*ya*), (3) ongoing background weather.",
          "Match completed event → *pretérito*, earlier past → *pluscuamperfecto*, background scene → *imperfecto*.",
        ],
        explanation:
          "**Llegamos** (*pretérito*) marks the completed arrival, **había cubierto** (*pluscuamperfecto*) marks the snow that had ALREADY covered the trails earlier, and **soplaba** (*imperfecto*) sets the ongoing background weather.",
      },
      {
        id: "6-grammar-text-types-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "subjuntivo-completo",
        question:
          "[HL] Which *nosotros* **imperfect subjunctive** form carries the exact required written accent mark (*tilde*)?",
        options: [
          "tuvieramos",
          "tuviéramos",
          "tuvierámos",
          "túvieramos",
        ],
        answerIndex: 1,
        hints: [
          "Every *nosotros* imperfect subjunctive form is an *esdrújula* word (stressed on the third-to-last syllable).",
          "In Spanish, *esdrújula* words ALWAYS carry a written accent on the stressed vowel immediately before *-ramos / -semos*.",
        ],
        explanation:
          "In the *nosotros* imperfect subjunctive, stress falls on the vowel immediately preceding *-ramos / -semos* (an *esdrújula*), making the accent mark mandatory: **tuviéramos** (or **tuviésemos**), just like *habláramos*, *pudiéramos*, and *fuéramos*.",
      },
    ],
  },
];
