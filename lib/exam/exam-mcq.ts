import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-mcq",
  title: "IB Spanish B Core Mock — Cross-Syllabus MCQ (SL & HL)",
  level: "SL",
  paperType: "Core Grammar, Theme & Text-Type MCQ",
  calculator: false,
  minutes: 35,
  questions: [
    {
      id: "exam-mcq-q01",
      kind: "mcq",
      topicId: "1-identidades",
      guideRef: "estilos-vida-salud",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      strategy: "WEIRDO impersonal trigger + irregular -go verb in present subjunctive",
      question:
        "Completa la recomendación sobre salud mental adolescente:\n\n«Según los especialistas del sueño, es imprescindible que los jóvenes ___ una rutina de descanso constante durante el curso escolar.»",
      options: [
        "mantienen",
        "mantengan",
        "mantendrán",
        "mantenían",
      ],
      answerIndex: 1,
      hints: [
        "Look at the opening clause: «es imprescindible que...» expresses necessity rather than a neutral fact.",
        "Impersonal expressions of necessity with «que» + a specific subject («los jóvenes») trigger the present subjunctive.",
        "Start from the «yo» present indicative of «mantener» («mantengo»), drop «-o», and add «-er» subjunctive endings.",
      ],
      explanation:
        "«Es imprescindible que» is a classic WEIRDO impersonal trigger requiring the present subjunctive when followed by a conjugated subject («los jóvenes»). Because «mantener» has an irregular «yo» stem («manteng-»), the third-person plural present subjunctive is «mantengan». «Mantienen» (present indicative) ignores the subjunctive trigger, while «mantendrán» and «mantenían» use indicative future and imperfect forms.",
    },
    {
      id: "exam-mcq-q02",
      kind: "mcq",
      topicId: "1-identidades",
      guideRef: "lengua-identidad-hispanohablante",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Map Hispanophone regional morphology (voseo vs tuteo vs vosotros)",
      question:
        "En un diálogo juvenil ambientado en Buenos Aires, una estudiante le dice a su amigo: «Che, ¿vos sabés a qué hora empieza el taller de teatro?». ¿Qué rasgo lingüístico del mundo hispanohablante ilustra la forma verbal «vos sabés»?",
      options: [
        "El uso formal de «usted» propio de las cartas administrativas hispanoamericanas",
        "El pronombre plural «vosotros» exclusivo de la variedad peninsular estándar",
        "El fenómeno fonético del «seseo» que iguala los sonidos de la «z» y la «s»",
        "El «voseo» rioplatense que emplea «vos» con acentuación aguda en presente",
      ],
      answerIndex: 3,
      hints: [
        "Notice the pronoun «vos» paired with «sabés» (stressed on the final syllable) in Buenos Aires.",
        "Rule out features that describe pronunciation only («seseo») or plural informal address in Spain («vosotros»).",
      ],
      explanation:
        "«Vos sabés» exemplifies Rioplatense «voseo» (characteristic of Argentina and Uruguay, and also widespread in Central America), where «vos» replaces «tú» in informal singular address and present-tense verbs carry final-syllable stress («sabés», «tenés», «querés»). «Seseo» is a pronunciation feature rather than a pronoun/verb conjugation system, and «vosotros» is informal plural in Spain.",
    },
    {
      id: "exam-mcq-q03",
      kind: "mcq",
      topicId: "1-identidades",
      guideRef: "creencias-valores-subculturas",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      strategy: "Interpret Hispanic cultural practices with B2 intercultural precision",
      question:
        "En un ensayo sobre *Identidades*, un alumno explica la importancia de «la sobremesa» en las familias hispanohablantes. ¿Qué enunciado describe con mayor precisión cultural esta costumbre?",
      options: [
        "Prolongar la charla alrededor de la mesa tras comer para fortalecer los vínculos familiares",
        "Rezar colectivamente antes de cenar durante las celebraciones religiosas del calendario anual",
        "Preparar platos rápidos individuales para ahorrar tiempo durante la jornada laboral urbana",
        "Intercambiar regalos simbólicos al concluir los almuerzos dominicales entre vecinos del barrio",
      ],
      answerIndex: 0,
      hints: [
        "Think about the literal elements of the word: «sobre» (after/over) + «mesa» (table).",
        "Focus on social cohesion and unhurried conversation after the meal has finished.",
      ],
      explanation:
        "«La sobremesa» is the cherished Hispanophone custom of lingering at the table after eating to converse, debate, and nurture intergenerational bonds. It is neither a strictly religious ritual nor a gift-giving practice, and it stands in direct contrast to rushed individual meals.",
    },
    {
      id: "exam-mcq-q04",
      kind: "mcq",
      topicId: "2-experiencias",
      guideRef: "ocio-viajes-turismo",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Contrast background imperfecto with interrupting pretérito indefinido",
      question:
        "Elige la forma verbal adecuada para esta crónica sobre el turismo masivo en Palma de Mallorca:\n\n«Mientras nosotros ___ tranquilamente por el casco antiguo el sábado pasado, cientos de vecinos ___ de repente una protesta pacífica contra el encarecimiento de la vivienda.»",
      options: [
        "paseamos / iniciaban",
        "paseábamos / iniciaban",
        "paseábamos / iniciaron",
        "paseamos / iniciaron",
      ],
      answerIndex: 2,
      hints: [
        "«Mientras» introduces an ongoing background action in progress in the past.",
        "«De repente» + «el sábado pasado» mark a sudden, completed interrupting event.",
      ],
      explanation:
        "An ongoing background action introduced by «mientras» requires the imperfect («paseábamos»), whereas the sudden completed event («de repente», «el sábado pasado») requires the preterite («iniciaron»). Putting both in the imperfect misses the sudden interrupting action, while reversing the pair misidentifies the background action.",
    },
    {
      id: "exam-mcq-q05",
      kind: "mcq",
      topicId: "2-experiencias",
      guideRef: "costumbres-tradiciones-ritos",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      strategy: "Avoid cultural stereotypes when contrasting Hispanic traditions",
      question:
        "Al comparar el Día de los Muertos en México con Halloween en una prueba oral de IB, ¿qué análisis demuestra una comprensión intercultural auténtica y libre de estereotipos?",
      options: [
        "Ambos festejos comparten idéntico origen celta y buscan asustar a los niños del vecindario",
        "El Día de los Muertos prohíbe la música alegre porque exige un luto silencioso y solemne",
        "Halloween sustituyó legalmente al Día de los Muertos en todo el territorio mexicano actual",
        "El Día de los Muertos combina raíces indígenas y católicas para honrar con afecto a los difuntos",
      ],
      answerIndex: 3,
      hints: [
        "Consider the emotional tone of Mexican «ofrendas» (marigolds, favourite foods, photographs) and their historical roots.",
        "Eliminate claims that equate the festival with fear, silent mourning, or legal replacement.",
      ],
      explanation:
        "Recognised by UNESCO as Intangible Cultural Heritage, «el Día de los Muertos» synthesises pre-Hispanic indigenous cosmology and Catholic All Souls' traditions to lovingly remember deceased relatives through «ofrendas», «cempasúchil» flowers, and music. Treating it as a Mexican version of Halloween or as gloomy silent mourning is a common cultural misconception.",
    },
    {
      id: "exam-mcq-q06",
      kind: "mcq",
      topicId: "2-experiencias",
      guideRef: "historias-vida-migracion",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Sequence an earlier past event using el pluscuamperfecto de indicativo",
      question:
        "Completa este fragmento de un testimonio migratorio:\n\n«Cuando Elena aterrizó en Madrid en 2019, ya ___ durante cuatro años para costear sus estudios de posgrado.»",
      options: [
        "ha trabajado",
        "había trabajado",
        "trabajaría",
        "hubiera trabajado",
      ],
      answerIndex: 1,
      hints: [
        "Check the time anchor: «aterrizó en 2019» is already in the completed past.",
        "You need the past-before-the-past tense («had worked») in the indicative mood, as this is a stated fact.",
      ],
      explanation:
        "Because working for four years occurred prior to another past action («aterrizó en 2019»), Spanish requires the pluperfect indicative («había trabajado»). «Ha trabajado» links to the present, «trabajaría» expresses conditional speculation, and «hubiera trabajado» is pluperfect subjunctive without any subjunctive trigger here.",
    },
    {
      id: "exam-mcq-q07",
      kind: "mcq",
      topicId: "3-ingenio-humano",
      guideRef: "comunicacion-medios-redes",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Verify subject-verb agreement in pasiva refleja («se» + plural noun)",
      question:
        "¿Qué oración utiliza correctamente la pasiva refleja en un artículo periodístico sobre la desinformación digital?",
      options: [
        "Cada día se difunden miles de bulos en las redes sociales sin verificación previa",
        "Cada día se difunde miles de bulos en las redes sociales sin verificación previa",
        "Cada día se difundió miles de bulos en las redes sociales sin verificación previa",
        "Cada día se difundiera miles de bulos en las redes sociales sin verificación previa",
      ],
      answerIndex: 0,
      hints: [
        "In a «pasiva refleja» («se» + verb + noun), the verb must agree in number with the grammatical subject.",
        "Identify whether «miles de bulos» is singular or plural, and note the habitual marker «Cada día».",
      ],
      explanation:
        "In the «pasiva refleja», the noun phrase «miles de bulos» is plural, so the verb must also be plural: «se difunden». Using singular «se difunde» is a frequent post-IGCSE agreement slip when confusing «pasiva refleja» with impersonal «se», while «se difundió» clashes with habitual «Cada día» and «difundiera» lacks a subjunctive trigger.",
    },
    {
      id: "exam-mcq-q08",
      kind: "mcq",
      topicId: "3-ingenio-humano",
      guideRef: "tecnologia-innovacion-cientifica",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      strategy: "Separate purpose/goal (para) from cause/reason (por)",
      question:
        "Completa la frase con la combinación correcta de preposiciones:\n\n«Esta aplicación educativa fue creada ___ reducir la brecha digital, pero ___ falta de conectividad apenas llegó a las escuelas rurales.»",
      options: [
        "por / para",
        "por / por",
        "para / por",
        "para / para",
      ],
      answerIndex: 2,
      hints: [
        "Ask what follows the first blank: «reducir la brecha digital» is the goal or intended purpose of the app.",
        "Ask what follows the second blank: «falta de conectividad» is the cause or reason why it failed to reach rural schools.",
      ],
      explanation:
        "«Para» introduces an intended goal or purpose before an infinitive («para reducir»), whereas «por» introduces a cause or motive («por falta de conectividad» = because of a lack of connectivity). Reversing them confuses destination/purpose with cause.",
    },
    {
      id: "exam-mcq-q09",
      kind: "mcq",
      topicId: "3-ingenio-humano",
      guideRef: "etica-ia-creatividad-hl",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Interpret",
      strategy: "Detect verbal irony and implicit critique in HL opinion editorials",
      question:
        "[HL] Lee este fragmento de una columna sobre inteligencia artificial generativa:\n\n«Qué alivio comprobar que ya no necesitamos perder horas leyendo ni escribiendo con voz propia: basta pulsar un botón para producir textos impecablemente vacíos en tres segundos.»\n\n¿Qué recurso estilístico y postura autoral predominan en la cita?",
      options: [
        "Entusiasmo tecnológico genuino que celebra la eficiencia educativa de los modelos digitales",
        "Neutralidad informativa objetiva que describe procedimientos técnicos sin emitir juicio alguno",
        "Nostalgia histórica moderada que propone prohibir inmediatamente todas las computadoras escolares",
        "Ironía mordaz que critica la pérdida de originalidad y esfuerzo intelectual en la escritura",
      ],
      answerIndex: 3,
      hints: [
        "Look closely at the clash between «Qué alivio» and the oxymoronic phrase «impecablemente vacíos».",
        "When an author appears to praise something while calling its output «empty», ask whether the praise is literal or ironic.",
      ],
      explanation:
        "The juxtaposition of mock relief («Qué alivio») with the biting oxymoron «impecablemente vacíos» signals sharp irony («ironía mordaz») aimed at critiquing superficial, automated writing. Reading the opening exclamation literally misinterprets the editorial's critical stance.",
    },
    {
      id: "exam-mcq-q10",
      kind: "mcq",
      topicId: "4-organizacion-social",
      guideRef: "relaciones-comunidad-voluntariado",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Match formal usted pronoun consistency and closing formula to an official recipient",
      question:
        "Estás redactando una carta formal dirigida a la alcaldesa de tu ciudad para solicitar financiación para un proyecto de voluntariado juvenil. ¿Qué cierre mantiene el registro adecuado?",
      options: [
        "Agradezco de antemano su atención y quedo a su disposición. Le saluda atentamente,",
        "Gracias por leerme, espero tu respuesta pronto para charlar. Un abrazo fuerte,",
        "Te agradezco mucho su colaboración en este proyecto genial. Hasta luego,",
        "Muchas gracias por todo, alcaldesa, nos vemos la próxima semana. Saludos cordiales,",
      ],
      answerIndex: 0,
      hints: [
        "Addressing a city mayor («la alcaldesa») in a formal funding letter requires consistent «usted» pronouns («su», «le»).",
        "Watch out for mixed-register traps that combine «te» with «su» in the same sentence.",
      ],
      explanation:
        "A formal letter to an elected official demands uniform «usted» forms («su atención», «su disposición», «le saluda») and a conventional formal sign-off («atentamente»). Mixing «te» and «su» breaks register consistency, while «un abrazo» and «nos vemos» belong to informal personal correspondence.",
    },
    {
      id: "exam-mcq-q11",
      kind: "mcq",
      topicId: "4-organizacion-social",
      guideRef: "educacion-mundo-laboral",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Apply Type 2 si-clause sequence: Si + imperfecto de subjuntivo → condicional simple",
      question:
        "Completa esta hipótesis sobre el paro juvenil en España y América Latina:\n\n«Si las empresas ___ más contratos de prácticas remuneradas, menos titulados ___ emigrar al extranjero.»",
      options: [
        "ofrecerían / tendrían que",
        "ofrecieran / tendrían que",
        "ofrecen / tendrían que",
        "ofrezcan / tendrán que",
      ],
      answerIndex: 1,
      hints: [
        "This sentence imagines a hypothetical present/future reform that is not currently happening (Type 2 «si»-clause).",
        "Remember the golden Spanish rule: never put the conditional («-ría») or present subjunctive directly after «si» in a conditional clause.",
      ],
      explanation:
        "Hypothetical Type 2 «si»-clauses pair «si» + imperfect subjunctive («ofrecieran» or «ofreciesen») with the simple conditional («tendrían que») in the main clause. Placing the conditional directly after «si» («si ofrecerían») is a classic interference error, and «si» never takes the present subjunctive («ofrezcan»).",
    },
    {
      id: "exam-mcq-q12",
      kind: "mcq",
      topicId: "4-organizacion-social",
      guideRef: "ley-orden-ciudadania",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Apply Type 3 si-clause for counterfactual past policy analysis",
      question:
        "Completa esta evaluación retrospectiva de una política municipal:\n\n«Si el ayuntamiento ___ antes en el transporte público gratuito, la congestión vehicular ___ disminuido notablemente el año pasado.»",
      options: [
        "invirtió / habría",
        "habría invertido / hubiera",
        "hubiera invertido / habría",
        "haya invertido / habrá",
      ],
      answerIndex: 2,
      hints: [
        "Notice «el año pasado»: this is a counterfactual regret about an unrealised past event (Type 3 «si»-clause).",
        "In Type 3 «si»-clauses, the «si»-clause takes pluperfect subjunctive («hubiera/hubiese + participio») and the result clause takes conditional perfect («habría + participio»).",
      ],
      explanation:
        "A counterfactual past condition requires «si» + pluperfect subjunctive («hubiera invertido») paired with the conditional perfect («habría disminuido»). Putting «habría invertido» inside the «si»-clause reverses the two clauses incorrectly, and «haya invertido» (present perfect subjunctive) never follows «si».",
    },
    {
      id: "exam-mcq-q13",
      kind: "mcq",
      topicId: "5-compartir-el-planeta",
      guideRef: "medio-ambiente-sostenibilidad",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      strategy: "Distinguish aunque + indicative (known fact) vs aunque + subjunctive (hypothetical future)",
      question:
        "Completa la declaración de una activista climática sobre un escenario futuro incierto:\n\n«Aunque las temperaturas ___ aún más el próximo verano, seguiremos exigiendo una transición energética justa.»",
      options: [
        "subieron",
        "subían",
        "suben",
        "suban",
      ],
      answerIndex: 3,
      hints: [
        "Look at the time reference «el próximo verano»: the rise in temperature is presented as a hypothetical future possibility («even if»), not an already observed fact.",
        "When «aunque» means «even if» regarding an uncertain or future event, which mood does Spanish require?",
      ],
      explanation:
        "«Aunque» triggers the present subjunctive («suban») when referring to an uncertain, hypothetical, or future concession («even if temperatures rise even further next summer»). By contrast, «aunque» + indicative («suben», «subieron») states an established fact already known to speaker and listener.",
    },
    {
      id: "exam-mcq-q14",
      kind: "mcq",
      topicId: "5-compartir-el-planeta",
      guideRef: "globalizacion-etica-entorno-urbano",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Pair Spain's rural depopulation lexis with «de ahí que» + subjuntivo",
      question:
        "Completa este argumento sobre el fenómeno conocido como «la España vaciada»:\n\n«Durante décadas muchos pueblos del interior perdieron escuelas y centros médicos; de ahí que hoy ___ inversiones urgentes para atraer a familias jóvenes.»",
      options: [
        "necesiten",
        "necesitan",
        "necesitaban",
        "necesitarán",
      ],
      answerIndex: 0,
      hints: [
        "Focus on the high-band discourse connector «de ahí que» («hence / that is why»).",
        "Even though it introduces a logical consequence, «de ahí que» ALWAYS requires a specific grammatical mood in Spanish.",
      ],
      explanation:
        "«De ahí que» is an authentic B2–C1 consecutive connector that obligatorily governs the subjunctive mood («necesiten»), even when stating a real consequence. Using indicative forms («necesitan», «necesitarán») after «de ahí que» is a frequent grammar slip on Paper 1.",
    },
    {
      id: "exam-mcq-q15",
      kind: "mcq",
      topicId: "5-compartir-el-planeta",
      guideRef: "derechos-humanos-igualdad-paz",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      strategy: "Contrast inherent characteristic (ser) with resulting emotional state (estar + participio)",
      question:
        "Selecciona la opción que aplica correctamente el contraste entre «ser» y «estar» en una crónica sobre derechos humanos:\n\n«La desigualdad salarial ___ un problema estructural, por lo que gran parte de la ciudadanía ___ decidida a impulsar reformas.»",
      options: [
        "está / es",
        "está / está",
        "es / está",
        "es / es",
      ],
      answerIndex: 2,
      hints: [
        "The first blank defines what wage inequality inherently is («un problema estructural» — noun predicate).",
        "The second blank links «la ciudadanía» with a past participle expressing a resulting stance or state («decidida»).",
      ],
      explanation:
        "«Ser» is always used to classify or define with a noun («es un problema estructural»), whereas «estar» combines with the past participle «decidida» to express a resultant state or firm readiness («está decidida»). Using «estar» before a classifying noun is ungrammatical in Spanish.",
    },
    {
      id: "exam-mcq-q16",
      kind: "mcq",
      topicId: "6-grammar-text-types",
      guideRef: "subjuntivo-completo",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Apply ESCAPA conjunctions that obligatorily trigger the subjunctive",
      question:
        "Completa la oración con la forma verbal gramaticalmente correcta:\n\n«No lograremos frenar la deforestación amazónica a menos que los gobiernos regionales ___ leyes vinculantes de protección.»",
      options: [
        "adoptan",
        "adopten",
        "adoptarán",
        "adoptaron",
      ],
      answerIndex: 1,
      hints: [
        "Recall the ESCAPA mnemonic: En caso de que, Sin que, Con tal de que, Antes de que, Para que, A menos que.",
        "«A menos que» («unless») sets a condition that is not yet fulfilled and ALWAYS triggers the subjunctive.",
      ],
      explanation:
        "«A menos que» belongs to the ESCAPA adverbial conjunctions that invariably require the subjunctive mood, giving «adopten» (third-person plural present subjunctive of «adoptar»). Indicative tenses («adoptan», «adoptarán», «adoptaron») are never grammatical after «a menos que».",
    },
    {
      id: "exam-mcq-q17",
      kind: "mcq",
      topicId: "6-grammar-text-types",
      guideRef: "subjuntivo-completo",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Use subjunctive in adjective clauses modifying an indefinite/sought antecedent",
      question:
        "Completa el anuncio de una asociación estudiantil:\n\n«Buscamos una plataforma digital gratuita que ___ noticias verificadas en español sin publicidad invasiva.»",
      options: [
        "ofrece",
        "ofrecerá",
        "ofreció",
        "ofrezca",
      ],
      answerIndex: 3,
      hints: [
        "Ask yourself: does the association already know which specific platform they have found, or are they still searching for one that meets these criteria?",
        "Adjective clauses modifying a sought-after, indefinite, or hypothetical antecedent take the subjunctive («ofrecer» → «yo ofrezco»).",
      ],
      explanation:
        "Because «una plataforma digital gratuita» is an indefinite antecedent whose existence is not yet confirmed to the speaker («Buscamos...»), the relative clause takes the present subjunctive: «ofrezca» (derived from irregular «yo ofrezco»). Indicative «ofrece» would imply they already have one specific, known platform in mind.",
    },
    {
      id: "exam-mcq-q18",
      kind: "mcq",
      topicId: "6-grammar-text-types",
      guideRef: "tipos-de-texto-convenciones",
      difficulty: "core",
      level: "SL",
      commandTerm: "Justify",
      strategy: "Match IB Paper 1 Professional text types to institutional Audience & Purpose",
      question:
        "Una consigna de Prueba 1 te pide presentar al ayuntamiento un plan estructurado con objetivos, presupuesto estimado y beneficios comunitarios para construir carriles bici seguros. ¿Cuál es el tipo de texto MÁS adecuado?",
      options: [
        "Una propuesta formal con apartados claros, justificación y plan de acción",
        "Un diario personal escrito en primera persona con tono íntimo y espontáneo",
        "Una reseña cultural con puntuación final dirigida a lectores aficionados al ocio",
        "Una entrada de blog coloquial centrada en anécdotas personales de tus vacaciones",
      ],
      answerIndex: 0,
      hints: [
        "Identify the Audience (the city council) and Purpose (persuading officials to fund a structured project with a budget).",
        "Match that institutional context to the Professional text-type category rather than Personal or Mass Media entertainment formats.",
      ],
      explanation:
        "«Una propuesta» (Professional category) is specifically designed to persuade a decision-making body using structured subheadings, rationale, budget/resources, and actionable steps in a formal register. A diary, cultural review, or casual holiday blog mismatches both the institutional audience and persuasive project-planning purpose.",
    },
    {
      id: "exam-mcq-q19",
      kind: "mcq",
      topicId: "6-grammar-text-types",
      guideRef: "estilo-c1-conectores-hl",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      strategy: "Agree relative possessive cuyo/cuya with the possessed noun, not the owner",
      question:
        "[HL] Completa esta oración de nivel C1 con el pronombre relativo posesivo adecuado:\n\n«El biólogo colombiano, ___ investigación sobre los páramos andinos transformó la política hídrica, recibió el premio nacional.»",
      options: [
        "cuyo",
        "cuya",
        "cuyos",
        "de quien",
      ],
      answerIndex: 1,
      hints: [
        "Do NOT match the gender of «cuyo/a» to «el biólogo» (the possessor).",
        "Match «cuyo/a/os/as» in gender and number to the noun immediately following it: «investigación» (feminine singular).",
      ],
      explanation:
        "In Spanish, «cuyo/cuya/cuyos/cuyas» («whose») agrees in gender and number with the possessed noun that follows it («la investigación» — feminine singular), NOT with the possessor («el biólogo»). Therefore «cuya» is required; «cuyo» mistakenly agrees with «el biólogo», and «de quien» cannot stand directly before a bare noun here.",
    },
    {
      id: "exam-mcq-q20",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper1-prompt-decoding",
      difficulty: "core",
      level: "SL",
      commandTerm: "Analyse",
      strategy: "Link Paper 1 register slips to the 5 IB Conceptual Understandings (Criterion C)",
      question:
        "En la Prueba 1, un estudiante escribe una carta formal al decano de una universidad hispanohablante usando «tú», emoticonos y expresiones coloquiales como «qué guay», aunque su gramática sea precisa. ¿Qué criterio y conceptos quedan principalmente perjudicados?",
      options: [
        "El Criterio A (Lengua), porque no empleó ninguna oración condicional ni pasiva refleja",
        "El Criterio B (Mensaje), porque el texto superó el mínimo de doscientas cincuenta palabras",
        "El Criterio C (Comprensión conceptual), por desajuste de audiencia, registro y variación",
        "El Criterio B2 (Conversación), porque no formuló preguntas espontáneas al interlocutor",
      ],
      answerIndex: 2,
      hints: [
        "Notice the prompt states the student's grammar is accurate — the breakdown is in how the text addresses a university dean.",
        "Paper 1 assesses three criteria: Criterion A (Language, 12), Criterion B (Message, 12), and Criterion C (Conceptual Understanding, 6).",
      ],
      explanation:
        "Criterion C (Conceptual Understanding, 6 marks) directly evaluates how well the candidate adapts text-type conventions, register, tone, and variation to the specified Audience, Context, and Purpose. Using «tú» and slang to a university dean severely caps Criterion C even if Criterion A grammatical accuracy is strong. Criterion B2 belongs to the Individual Oral, not Paper 1.",
    },
    {
      id: "exam-mcq-q21",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-reading-strategies",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      strategy: "Apply the exact minimal-quote justification protocol in Paper 2 Reading",
      question:
        "En una pregunta de Verdadero/Falso con justificación de la Prueba 2 (Comprensión de lectura), ¿qué técnica evita perder puntos innecesariamente?",
      options: [
        "Traducir el párrafo completo al inglés para demostrar comprensión profunda del argumento",
        "Copiar dos o tres oraciones seguidas del texto para cubrir cualquier posible matiz relevante",
        "Parafrasear libremente la idea con sinónimos propios sin citar ninguna palabra del texto original",
        "Transcribir únicamente la frase mínima exacta del texto que demuestra de forma directa el veredicto",
      ],
      answerIndex: 3,
      hints: [
        "IB Paper 2 Reading markschemes require textual proof verbatim from the passage, not translation or free paraphrase.",
        "Copying extra unrelated or contradictory clauses into a justification box often invalidates the mark.",
      ],
      explanation:
        "On IB Paper 2 Reading True/False + Justification items, examiners award the mark ONLY when the verdict matches an exact, minimal verbatim quote from the passage that directly proves it. Copying extra sentences risks including irrelevant or contradicting details, while paraphrasing or translating fails the verbatim justification rule.",
    },
    {
      id: "exam-mcq-q22",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-listening-strategies",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Track self-correction markers («en un principio... aunque...») in IB Listening",
      question:
        "🎧 [Extracto de audio — Aviso municipal]:\n«En un principio pensábamos inaugurar el centro cultural juvenil el lunes 12, aunque tras consultar con las asociaciones vecinales decidimos trasladar la apertura al jueves 15; las inscripciones, eso sí, cierran el martes 13.»\n\n¿Qué día se inaugurará finalmente el centro cultural?",
      options: [
        "El jueves 15",
        "El lunes 12",
        "El martes 13",
        "El miércoles 14",
      ],
      answerIndex: 0,
      hints: [
        "Listen past the first date mentioned: «En un principio pensábamos...» signals a classic IB Listening distractor.",
        "Separate the date for «la apertura» (opening) from the date when «las inscripciones cierran» (registration closes).",
      ],
      explanation:
        "The speaker self-corrects the original plan («lunes 12») using «aunque... decidimos trasladar la apertura al jueves 15». «Martes 13» is a second distractor referring to the registration deadline rather than the opening day.",
    },
    {
      id: "exam-mcq-q23",
      kind: "mcq",
      topicId: "8-hl-literature",
      guideRef: "recursos-literarios-metalenguaje",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      strategy: "Use precise Spanish literary metalanguage for recurring imagery and thematic fields",
      question:
        "[HL] Al analizar un fragmento de *La casa de Bernarda Alba* [Example work — not a set text] donde se repiten imágenes de muros encalados, puertas cerradas con llave y calor asfixiante, ¿qué término literario describe con mayor precisión este recurso?",
      options: [
        "La analepsis cronológica que interrumpe la acción para narrar la infancia de un personaje",
        "El simbolismo y el campo semántico del encierro que reflejan la represión social y doméstica",
        "El narrador omnisciente en tercera persona que juzga abiertamente a las hijas desde el escenario",
        "La hipérbole cómica empleada para ridiculizar el clima veraniego de la Andalucía rural",
      ],
      answerIndex: 1,
      hints: [
        "Notice how multiple concrete images (whitewashed walls, locked doors, stifling heat) share one thematic domain and represent an abstract idea.",
        "Eliminate narrative flashback («analepsis») and omniscient narrator — Lorca's work is a play (drama), not a third-person novel.",
      ],
      explanation:
        "Grouping whitewashed walls, locked doors, and suffocating heat constructs a lexical field («campo semántico») of confinement paired with symbolism («simbolismo») representing patriarchal repression in *La casa de Bernarda Alba* [Example work — not a set text]. «Analepsis» denotes a flashback, and drama lacks an omniscient prose narrator.",
    },
    {
      id: "exam-mcq-q24",
      kind: "mcq",
      topicId: "8-hl-literature",
      guideRef: "analisis-extracto-300-palabras",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "State",
      strategy: "Confirm exact FA2029 IB Spanish B HL Individual Oral structure and rules",
      question:
        "[HL] Según el formato del Examen Oral Individual (IO) de Español B Nivel Superior (HL), ¿cómo se organiza la preparación y el estímulo de la Parte 1?",
      options: [
        "Quince minutos de preparación sobre una fotografía cultural sin título vinculada a un tema prescrito",
        "Treinta minutos de preparación sobre una lista fija de dos novelas obligatorias impuestas por el IB",
        "Veinte minutos de preparación sobre un fragmento literario de unas 300 palabras de una obra estudiada",
        "Diez minutos de lectura silenciosa sobre un artículo periodístico reciente elegido libremente por el alumno",
      ],
      answerIndex: 2,
      hints: [
        "Distinguish SL Individual Oral (15 min prep, visual stimulus) from HL Individual Oral (literary stimulus).",
        "Remember that IB Spanish B HL has ZERO prescribed set texts — teachers select two works originally written in Spanish.",
      ],
      explanation:
        "At IB Spanish B HL, candidates receive 20 minutes of supervised preparation on a ~300-word literary extract taken from one of the two Hispanic works studied in class (there are zero IB-prescribed set texts). Fifteen minutes on a visual stimulus is the SL format, not HL.",
    },
    {
      id: "exam-mcq-q25",
      kind: "mcq",
      topicId: "8-hl-literature",
      guideRef: "puente-extracto-obra-tema",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      strategy: "Elevate HL IO commentary from plot summary to literary-thematic synthesis",
      question:
        "[HL] En la Parte 1 del Oral Individual sobre un extracto de *Como agua para chocolate* [Example work — not a set text], ¿qué intervención refleja mejor la banda superior de análisis literario y conexión temática?",
      options: [
        "Resumir cronológicamente todos los capítulos de la novela desde el nacimiento de Tita hasta el final",
        "Recitar la biografía completa de Laura Esquivel dedicando tres minutos a fechas de publicación",
        "Enumerar diez figuras retóricas aisladas del fragmento sin explicar qué efecto producen en la escena",
        "Vincular las metáforas culinarias del pasaje con la rebelión de Tita y el tema de *Identidades*",
      ],
      answerIndex: 3,
      hints: [
        "Top-band HL commentary avoids both pure plot retelling and mechanical feature-spotting.",
        "Look for the response that bridges close textual craft → character/whole-work arc → Prescribed Theme.",
      ],
      explanation:
        "High-scoring HL IO commentary weaves close textual analysis (culinary metaphors in the ~300-word extract) directly into the wider arc of the work (Tita's autonomy) and a Prescribed Theme (*Identidades*). Retelling the whole plot, reciting author biography, or listing rhetorical terms without analytical effect caps Criterion B1.",
    },
  ],
};
