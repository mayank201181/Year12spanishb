import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "4-organizacion-social-m1",
    title: "MCQ Paper 1 · Community, Volunteering & Register (Tú vs. Usted)",
    level: "SL",
    questions: [
      {
        id: "4-organizacion-social-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "You are opening a formal *carta formal* to the Mayor (*Sra. Martínez*) requesting municipal funding for a youth food bank. Which salutation and punctuation follow authentic Spanish conventions?",
        options: [
          "Estimada Sra. Martínez:",
          "Estimada Sra. Martínez,",
          "Querida Alcaldesa Martínez,",
          "Hola Sra. Martínez:",
        ],
        answerIndex: 0,
        hints: [
          "Check both the lexical formality of the greeting and the punctuation mark used after Spanish salutations.",
          "Unlike English letters, formal Spanish salutations do not end with a comma.",
        ],
        explanation:
          "Authentic formal Spanish salutations pair *Estimado/a + título + apellido* with a **colon (:)**, not a comma. *Querida* is too personal for an official request, and *Hola* is informal.",
      },
      {
        id: "4-organizacion-social-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Convert this informal community request to formal **usted**: *«Te escribo para pedirte tu apoyo en la campaña solidaria.»*",
        options: [
          "Le escribo para pedirte su apoyo en la campaña solidaria.",
          "Le escribo para pedirle su apoyo en la campaña solidaria.",
          "Te escribo para pedirle su apoyo en la campaña solidaria.",
          "Se escribo para pedirle tu apoyo en la campaña solidaria.",
        ],
        answerIndex: 1,
        hints: [
          "Count all three pronouns/possessives that must shift from *tú* to *usted*.",
          "Both indirect object pronouns (*te → le*) and the possessive (*tu → su*) must change together.",
        ],
        explanation:
          "Register consistency requires converting every 2nd-person singular pronoun and possessive: *te → le*, *pedirte → pedirle*, and *tu → su*. Leaving even one *te* or *tu* creates a register slip penalized under Criterion C, while *se escribo* is ungrammatical.",
      },
      {
        id: "4-organizacion-social-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Choose the grammatically accurate formal **usted** imperative to close a formal letter to an NGO coordinator: *«______ en ponerse en contacto conmigo si necesita más información.»*",
        options: [
          "No dudas",
          "No dudes",
          "No dude",
          "No duda",
        ],
        answerIndex: 2,
        hints: [
          "Formal *usted* imperatives always use the 3rd person singular present subjunctive.",
          "Since *dudar* is an *-ar* verb, switch the thematic vowel to *-e* and omit the *-s*.",
        ],
        explanation:
          "Both affirmative and negative *usted* imperatives use the 3rd-person singular present subjunctive: **no dude**. *No dudes* is negative *tú* imperative, while *no dudas* and *no duda* are indicative statements rather than commands.",
      },
      {
        id: "4-organizacion-social-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "In a Spanish article about youth volunteering, what does **«el tejido asociativo»** refer to?",
        options: [
          "The textile industry employing local artisans",
          "The strict legal code governing city councils",
          "The financial budget assigned to private firms",
          "The network of community civic associations",
        ],
        answerIndex: 3,
        hints: [
          "Think metaphorically: *tejido* means 'fabric' or 'weave', and *asociativo* comes from *asociación*.",
          "Consider what connects neighbourhood groups, youth clubs, and local NGOs.",
        ],
        explanation:
          "**El tejido asociativo** literally means the 'associational fabric'—the interconnected network of neighbourhood associations, charities, and civic groups that sustains community solidarity. Taking *tejido* literally as textiles is a classic Paper 2 Reading distractor.",
      },
      {
        id: "4-organizacion-social-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Select the correctly conjugated formal **usted** imperative with an attached pronoun meaning *«Tell us your opinion»* (*decir + nos*):",
        options: [
          "Dinos su opinión",
          "Díganos su opinión",
          "Decidnos su opinión",
          "Diga nos su opinión",
        ],
        answerIndex: 1,
        hints: [
          "First form the *usted* imperative of *decir* (from *yo digo* → *diga*).",
          "Pronouns attach directly to affirmative imperatives, adding a written accent to preserve the original stress.",
        ],
        explanation:
          "The *usted* imperative of *decir* is **diga**; attaching **nos** makes it esdrújula (stressed on the third-to-last syllable), requiring an accent: **Díganos**. *Dinos* is informal *tú*, *decidnos* is Peninsular *vosotros*, and *diga nos* leaves the pronoun detached.",
      },
      {
        id: "4-organizacion-social-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Read this excerpt from a Spanish social programme leaflet: *«El proyecto Convive empareja a universitarios con personas mayores que viven solas para combatir la soledad no deseada y aliviar el coste del alquiler.»* Which statement best captures the dual aim of the scheme?",
        options: [
          "Replacing university dormitories with municipal care homes",
          "Funding medical insurance for retired public employees",
          "Reducing elderly isolation while lowering student housing costs",
          "Training senior citizens to manage local youth hostels",
        ],
        answerIndex: 2,
        hints: [
          "Identify the two infinitive clauses introduced by *para* and *y*.",
          "Connect *la soledad no deseada* (unwanted loneliness) and *aliviar el coste del alquiler* (ease rent costs).",
        ],
        explanation:
          "The leaflet explicitly states two mutually beneficial aims: combating **la soledad no deseada** among older residents and easing **el coste del alquiler** for university students. None of the other options reflects intergenerational flat-sharing.",
      },
      {
        id: "4-organizacion-social-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "An IB Paper 1 prompt asks you to persuade local residents to sign up for a weekend neighbourhood clean-up and food drive. The three choices are **folleto**, **diario personal**, and **informe**. Which is the most appropriate text type and why?",
        options: [
          "Diario personal, because it explores your private civic feelings",
          "Informe, because it summarizes statistics for the city council",
          "Diario personal, because it uses informal slang to engage peers",
          "Folleto, because it informs and mobilizes a broad local public",
        ],
        answerIndex: 3,
        hints: [
          "Match the **audience** (local residents) and **purpose** (persuade them to sign up).",
          "Only one of the three text types belongs to public promotional/persuasive communication.",
        ],
        explanation:
          "A **folleto** (leaflet/brochure) is designed to inform and persuade a community audience using accessible subheadings, practical logistics, and a call to action. A *diario personal* is private, and an *informe* is an analytical institutional document.",
      },
      {
        id: "4-organizacion-social-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Which sentence accurately explains the regional difference between **vosotros** and **ustedes** across the Hispanophone world?",
        options: [
          "Latin America uses ustedes for all plurals; Spain reserves vosotros for informal plural",
          "Spain uses ustedes for informal peers; Latin America uses vosotros in formal letters",
          "Both Spain and Latin America use vosotros whenever writing formal policy proposals",
          "Latin America restricts ustedes to elderly listeners; Spain bans ustedes in speeches",
        ],
        answerIndex: 0,
        hints: [
          "Recall how plural 'you' functions in Peninsular Spanish compared with Mexico, Colombia, or Argentina.",
          "Think about which pronoun is used everywhere in Latin America for both friends and officials.",
        ],
        explanation:
          "In **Latin America**, *ustedes* serves as both the formal and informal plural 'you', whereas in **Spain** (except parts of Andalusia/Canaries), *vosotros* is informal plural and *ustedes* is formal plural. Consistency with one regional norm is key in IB Spanish B.",
      },
      {
        id: "4-organizacion-social-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Complete this polite formal request with the accurate orthographic spelling of **organizar** in the *usted* imperative: *«Por favor, ______ una reunión con los vecinos antes del viernes.»*",
        options: [
          "organizas",
          "organize",
          "organice",
          "organiza",
        ],
        answerIndex: 2,
        hints: [
          "The *usted* imperative comes from the present subjunctive (-ar verbs take *-e*).",
          "In Spanish orthography, verbs ending in *-zar* change **z → c** before the letter **e**.",
        ],
        explanation:
          "Because Spanish never writes *ze* in conjugated verb endings, *-zar* verbs undergo an orthographic shift **z → c** before *-e*: **organice**. *Organiza* is informal *tú*, and *organize* is an English-influenced spelling error.",
      },
      {
        id: "4-organizacion-social-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "educacion-mundo-laboral",
        question:
          "Which verb correctly replaces the Anglicism **«aplicar para»** in: *«Quiero ______ una beca de estudios en la Universidad de Salamanca»*?",
        options: [
          "realizar",
          "atender",
          "soportar",
          "solicitar",
        ],
        answerIndex: 3,
        hints: [
          "Watch out for four famous English–Spanish false friends!",
          "*Atender* means to attend to/serve, *soportar* means to tolerate, and *realizar* means to carry out.",
        ],
        explanation:
          "**Solicitar** is the authentic direct-transitive Spanish verb for applying for a grant, job, or internship (*solicitar una beca*, without *para*). *Realizar* (to carry out), *atender* (to serve/assist), and *soportar* (to endure) are all false friends here.",
      },
      {
        id: "4-organizacion-social-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "educacion-mundo-laboral",
        question:
          "What does **«la fuga de cerebros»** describe in articles about the Spanish and Latin American labour market?",
        options: [
          "The emigration of highly qualified graduates seeking better jobs abroad",
          "The rapid burnout of university students before final entrance exams",
          "The shortage of vocational workshops in rural secondary schools",
          "The replacement of administrative staff by automated software tools",
        ],
        answerIndex: 0,
        hints: [
          "Translate literally: *fuga* = flight/escape; *cerebros* = brains.",
          "Link this phenomenon to high *paro juvenil* and low entry-level salaries.",
        ],
        explanation:
          "**La fuga de cerebros** means *brain drain*—the departure of doctors, engineers, and researchers trained domestically who emigrate due to *paro juvenil* or *precariedad laboral*. The other choices confuse it with stress, schooling, or automation.",
      },
      {
        id: "4-organizacion-social-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "educacion-mundo-laboral",
        question:
          "Which phrase accurately expresses *«I didn't realize that youth unemployment was so high»* without falling for a false friend?",
        options: [
          "No me realicé de que el paro juvenil era tan alto.",
          "No me di cuenta de que el paro juvenil era tan alto.",
          "No realicé que el paro juvenil estaba tan alto.",
          "No me asistí de que el paro juvenil fuera tan alto.",
        ],
        answerIndex: 1,
        hints: [
          "Avoid *realizar(se)*, which means 'to carry out' or 'to fulfil oneself'.",
          "Use the reflexive idiomatic expression meaning 'to notice / realize', plus its mandatory preposition *de*.",
        ],
        explanation:
          "**Darse cuenta de que** means *to realize that* (*No me di cuenta de que...*). Using *realizar* is a very common post-IGCSE Anglicism, and *asistirse* is unrelated (*asistir a* means to attend).",
      },
      {
        id: "4-organizacion-social-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Read this criticism from an opinion column: *«El voluntariado juvenil pierde su valor transformador cuando se limita al asistencialismo puntual y sustituye las obligaciones básicas del Estado.»* What is the author's main warning?",
        options: [
          "Teenagers lack the technical skills to collaborate with local NGOs.",
          "Volunteering programmes should be funded exclusively by private firms.",
          "Charitable initiatives always increase municipal tax rates for families.",
          "Short-term handouts should not replace structural public responsibility.",
        ],
        answerIndex: 3,
        hints: [
          "Unpack the two key phrases: *asistencialismo puntual* (one-off handout charity) and *sustituye las obligaciones básicas del Estado*.",
          "Notice the author does NOT oppose volunteering itself—only a specific misuse of it.",
        ],
        explanation:
          "The author warns that youth volunteering loses its transformative power if reduced to short-term handouts (*asistencialismo puntual*) that let the State shirk its basic duties. The column critiques dependency, not teenagers' skills or taxes.",
      },
      {
        id: "4-organizacion-social-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Which closing formula matches a formal *carta formal* addressed to a single official (*usted*)?",
        options: [
          "Quedo a su entera disposición y le saludo atentamente,",
          "Quedo a tu entera disposición y te saludo atentamente,",
          "Espero que me contestes pronto; un fuerte abrazo,",
          "Quedamos a vuestra disposición; hasta la próxima,",
        ],
        answerIndex: 0,
        hints: [
          "Verify that EVERY pronoun and possessive aligns with formal singular **usted**.",
          "Check both the verb (*saludo*), possessive (*su*), and object pronoun (*le*).",
        ],
        explanation:
          "*Quedo a **su** entera disposición y **le** saludo atentamente,* keeps 100% singular formal *usted* alignment. Mixing *tu/te* breaks formal register, *un fuerte abrazo* is personal, and *vuestra* + *hasta la próxima* mixes informal Peninsular plural with casual farewell.",
      },
      {
        id: "4-organizacion-social-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "relaciones-comunidad-voluntariado",
        question:
          "Convert the bolded reflexive phrase in this formal outreach letter from *tú* to **usted**: *«Agradecemos que **te comprometas** con los vecinos del distrito.»*",
        options: [
          "le comprometa",
          "se comprometes",
          "se comprometa",
          "se compromete",
        ],
        answerIndex: 2,
        hints: [
          "First check the mood: *Agradecemos que...* (emotion/appreciation) triggers the **present subjunctive**.",
          "Then shift both the reflexive pronoun (*te → se*) and the verb ending (2nd → 3rd person singular subjunctive).",
        ],
        explanation:
          "*Agradecemos que* triggers the present subjunctive, and formal *usted* uses reflexive **se** + 3rd-person singular subjunctive: **se comprometa**. *Se compromete* drops into indicative, *se comprometes* keeps the *-s* of *tú*, and *le* is non-reflexive.",
      },
    ],
  },
  {
    id: "4-organizacion-social-m2",
    title: "MCQ Paper 2 · Education, Work, Law & Si-Clauses (Types 1–3)",
    level: "SL",
    questions: [
      {
        id: "4-organizacion-social-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "Complete this Type 1 (likely) civic reform sentence: *«Si el ayuntamiento ______ más carriles bici, disminuirá el tráfico en el centro.»*",
        options: [
          "construya",
          "construye",
          "construiría",
          "construyera",
        ],
        answerIndex: 1,
        hints: [
          "Look at the main clause verb: *disminuirá* (simple future) signals a **Type 1** real/likely `si`-clause.",
          "Type 1 `si`-clauses ALWAYS take the **present indicative** directly after *si*.",
        ],
        explanation:
          "A Type 1 *si*-clause pairs **Si + presente de indicativo** (*construye*) with the simple future (*disminuirá*). Present subjunctive (*construya*) and conditional (*construiría*) are strictly forbidden after *si*, and *construyera* belongs with Type 2 (*disminuiría*).",
      },
      {
        id: "4-organizacion-social-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "Complete this Type 2 (hypothetical) reform: *«Si los colegios ______ más educación cívica, los jóvenes votarían con mayor conciencia.»*",
        options: [
          "ofrecieran",
          "ofrecerían",
          "ofrezcan",
          "ofrecen",
        ],
        answerIndex: 0,
        hints: [
          "Check the main clause: *votarían* is the **conditional simple**, signalling a **Type 2** hypothetical condition.",
          "Use the **SI-RA → Í-A** rule: after *si*, place the imperfect subjunctive.",
        ],
        explanation:
          "With conditional *votarían* in the main clause, Type 2 requires the **imperfect subjunctive** after *si*: **ofrecieran** (or *ofreciesen*). Never put the conditional (*ofrecerían*) or present subjunctive (*ofrezcan*) directly after *si*.",
      },
      {
        id: "4-organizacion-social-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "educacion-mundo-laboral",
        question:
          "What is the defining feature of **la Formación Profesional Dual (FP Dual)** in Spain?",
        options: [
          "Completing two separate university degrees at once in Madrid",
          "Studying all secondary subjects half in Spanish and half in English",
          "Taking two national university entrance exams after Bachillerato",
          "Combining classroom vocational study with paid company placements",
        ],
        answerIndex: 3,
        hints: [
          "Think about why *Dual* refers to **two learning environments** rather than two languages or two exams.",
          "Link *FP Dual* to practical employability and workplace experience.",
        ],
        explanation:
          "**La FP Dual** combines technical training at an educational centre with practical, remunerated placements inside partner companies—directly bridging the gap between education and stable employment.",
      },
      {
        id: "4-organizacion-social-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "educacion-mundo-laboral",
        question:
          "In workplace legislation debates across Spain, what does **«el derecho a la desconexión digital»** protect?",
        options: [
          "The right of teenagers to delete old social-media accounts",
          "The right of companies to block internet browsing in offices",
          "The right of employees not to answer work messages off-duty",
          "The right of rural towns to receive subsidized fibre cables",
        ],
        answerIndex: 2,
        hints: [
          "Connect *desconexión digital* with the rise of **el teletrabajo** and **la conciliación laboral**.",
          "Ask what boundary blurs when people work remotely from home.",
        ],
        explanation:
          "As remote work (*teletrabajo*) expanded, Spain legislated **el derecho a la desconexión digital** so workers are not obliged to reply to emails, calls, or WhatsApp messages outside their contracted working hours.",
      },
      {
        id: "4-organizacion-social-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "Complete this Type 2 hypothetical policy proposal using the irregular verb **haber**: *«Si ______ menos contratos temporales, la emancipación juvenil sería más viable.»*",
        options: [
          "hubiera",
          "habría",
          "haya",
          "había",
        ],
        answerIndex: 0,
        hints: [
          "Identify the impersonal existence verb (*hay* → preterite *hubo* → 3rd plural stem *hubie-*).",
          "Main clause *sería* (conditional) requires the **imperfect subjunctive** after *si*.",
        ],
        explanation:
          "Impersonal *haber* in the imperfect subjunctive is always singular **hubiera** (or *hubiese*), even before a plural noun (*menos contratos*). *Habría* is conditional, *haya* is present subjunctive, and *había* is imperfect indicative.",
      },
      {
        id: "4-organizacion-social-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "Which Spanish sentence correctly expresses a **Type 3** past counterfactual critique about justice reform?",
        options: [
          "Si el tribunal habría aplicado la mediación, el joven no reincidiría.",
          "Si el tribunal aplicara la mediación ayer, el joven no habría reincidido.",
          "Si el tribunal haya aplicado la mediación, el joven no habría reincidido.",
          "Si el tribunal hubiera aplicado la mediación, el joven no habría reincidido.",
        ],
        answerIndex: 3,
        hints: [
          "Recall the Type 3 formula: `Si + pluscuamperfecto de subjuntivo → condicional compuesto`.",
          "Check which auxiliary sits after *si* (**hubiera/hubiese**) versus in the main clause (**habría**).",
        ],
        explanation:
          "Type 3 pairs **hubiera/hubiese + participio** in the *si*-clause with **habría + participio** in the main clause: *Si el tribunal hubiera aplicado..., no habría reincidido.* Putting *habría* or *haya* after *si* is ungrammatical.",
      },
      {
        id: "4-organizacion-social-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "educacion-mundo-laboral",
        question:
          "Which sentence shows the most appropriate objective tone for an IB **informe** on remote work?",
        options: [
          "¡Qué maravilla es el teletrabajo! Yo siempre prefiero quedarme en casa.",
          "A mí me parece fatal que los jefes llamen a sus empleados por la noche.",
          "Se observa que el teletrabajo favorece la conciliación, aunque exige límites claros.",
          "Oye, si tú trabajas desde casa, seguro que ahorras muchísimo tiempo diario.",
        ],
        answerIndex: 2,
        hints: [
          "An *informe* (report) belongs to the **Professional** text-type category.",
          "Look for impersonal phrasing (*se observa que*), balanced analysis, and zero exclamation marks or colloquial *tú*.",
        ],
        explanation:
          "An IB **informe** requires objective, impersonal analysis—ideally using *se impersonal / pasiva refleja* (**Se observa que...**) and balanced evaluation. Exclamations, first-person slang (*me parece fatal*), and direct *Oye, tú* destroy report register.",
      },
      {
        id: "4-organizacion-social-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "In criminal justice debates, how does **«la justicia restaurativa»** differ from a purely punitive model?",
        options: [
          "It eliminates all legal consequences for non-violent offences.",
          "It prioritizes repairing harm, mediation, and social reintegration.",
          "It transfers sentencing power from judges to local police chiefs.",
          "It automatically doubles prison terms for repeat young offenders.",
        ],
        answerIndex: 1,
        hints: [
          "Look at the root word *restaurar* (to restore/repair).",
          "Connect it to victim-offender mediation, community service, and **reinserción social**.",
        ],
        explanation:
          "**La justicia restaurativa** seeks to repair harm done to victims and the community through dialogue, accountability, community service, and rehabilitation (*reinserción*), rather than relying solely on incarceration.",
      },
      {
        id: "4-organizacion-social-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "Choose the correctly accented **nosotros** form of the imperfect subjunctive in: *«Si ______ (tener) presupuestos participativos en el instituto, mejoraríamos las instalaciones.»*",
        options: [
          "tuvieramos",
          "tendríamos",
          "tengamos",
          "tuviéramos",
        ],
        answerIndex: 3,
        hints: [
          "Main clause *mejoraríamos* requires the **imperfect subjunctive** after *si*.",
          "Every *nosotros* imperfect subjunctive form is esdrújula and MUST carry a written tilde on the vowel before *-ramos*.",
        ],
        explanation:
          "From preterite *tuvieron*, drop *-ron* and add *-ramos* with the mandatory accent mark on the stressed antepenultimate vowel: **tuviéramos** (or *tuviésemos*). Omitting the accent (*tuvieramos*) is a frequent Paper 1 orthography slip.",
      },
      {
        id: "4-organizacion-social-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "educacion-mundo-laboral",
        question:
          "What does the Spanish word **«carrera»** mean in: *«Estudió la carrera de Derecho antes de buscar prácticas»*?",
        options: [
          "A lifelong executive corporate trajectory",
          "A competitive sports scholarship programme",
          "A full university degree programme",
          "A short weekend vocational workshop",
        ],
        answerIndex: 2,
        hints: [
          "This is a classic false friend with English *career*.",
          "Notice the verb **estudió** (studied) paired with *de Derecho* (Law).",
        ],
        explanation:
          "In academic contexts, **una carrera (universitaria)** means a university degree programme (e.g., *estudiar la carrera de Medicina / Derecho*), whereas an English 'career' is better translated as **trayectoria profesional** or **vida laboral**.",
      },
      {
        id: "4-organizacion-social-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "Complete this sentence containing **como si** (*as if*): *«Algunos políticos debaten sobre el paro juvenil como si no ______ un problema urgente.»*",
        options: [
          "es",
          "fuera",
          "sea",
          "sería",
        ],
        answerIndex: 1,
        hints: [
          "**Como si** expresses an unreal comparison and ALWAYS triggers one specific past subjunctive mood.",
          "Even when the main verb (*debaten*) is in the present tense, *como si* NEVER takes the present subjunctive or indicative.",
        ],
        explanation:
          "**Como si** ALWAYS triggers the **imperfect (or pluperfect) subjunctive** regardless of the main verb's tense: *como si no **fuera / fuese** un problema urgente*. Using *sea*, *es*, or *sería* after *como si* is always incorrect.",
      },
      {
        id: "4-organizacion-social-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "educacion-mundo-laboral",
        question:
          "Read this Paper 2-style excerpt: *«Aunque la tasa de graduados universitarios en España supera la media europea, casi un tercio desempeña empleos que no exigen titulación superior.»* Which exact IB concept does this sentence illustrate?",
        options: [
          "La sobrecualificación en el mercado laboral",
          "La falta de acceso a la educación secundaria",
          "El descenso del teletrabajo en las ciudades",
          "La prohibición de las prácticas remuneradas",
        ],
        answerIndex: 0,
        hints: [
          "Focus on *empleos que no exigen titulación superior* (jobs that do not require a university degree) held by *graduados universitarios*.",
          "Look for the Spanish noun meaning 'overqualification'.",
        ],
        explanation:
          "Graduates working in jobs that do not require higher qualifications is the exact definition of **la sobrecualificación**, a central driver of both *precariedad laboral* and *fuga de cerebros* in Spain.",
      },
      {
        id: "4-organizacion-social-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "Identify the **mixed `si`-clause** (past cause → present consequence) that is 100% grammatically sound:",
        options: [
          "Si el municipio invirtiera en 2010, hoy habríamos tenido mejores escuelas.",
          "Si el municipio hubiera invertido en 2010, hoy tendríamos mejores escuelas.",
          "Si el municipio habría invertido en 2010, hoy tenemos mejores escuelas.",
          "Si el municipio invirtió en 2010, hoy tendríamos mejores escuelas.",
        ],
        answerIndex: 1,
        hints: [
          "For a past unreal condition (*en 2010*), the *si*-clause needs the **pluperfect subjunctive**.",
          "For a present unreal result (*hoy*), the main clause uses the **simple conditional** (*tendríamos*).",
        ],
        explanation:
          "A mixed conditional pairs a past unreal condition (**Si + hubiera/hubiese + participio**) with a present hypothetical outcome (**hoy + condicional simple**): *Si el municipio hubiera invertido en 2010, hoy tendríamos mejores escuelas.*",
      },
      {
        id: "4-organizacion-social-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "ley-orden-ciudadania",
        question:
          "Read this excerpt: *«En los presupuestos participativos de la ciudad, la abstención juvenil cayó diez puntos desde que se habilitó la votación digital en institutos públicos.»* What can be strictly inferred from the text?",
        options: [
          "Youth voting became legally compulsory in all public schools.",
          "Older citizens stopped participating after online voting launched.",
          "Digital voting completely eliminated youth political apathy.",
          "Youth participation rose after schools offered online voting.",
        ],
        answerIndex: 3,
        hints: [
          "Carefully decode **la abstención cayó diez puntos** (non-voting fell by ten points).",
          "Avoid extreme distractors with words like *compulsory*, *stopped*, or *completely eliminated*.",
        ],
        explanation:
          "If **la abstención** (non-voting) fell by ten points, youth participation necessarily **rose** after online voting was enabled in public high schools. The text says nothing about compulsion, older voters, or total elimination of apathy.",
      },
      {
        id: "4-organizacion-social-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ley-orden-ciudadania",
        question:
          "Complete this Type 2 hypothetical clause with the irregular imperfect subjunctive of **reducir**: *«Si las empresas ______ la jornada laboral a cuatro días, aumentaría la productividad.»*",
        options: [
          "reducieran",
          "reducirían",
          "redujeran",
          "reduzcan",
        ],
        answerIndex: 2,
        hints: [
          "Derive the imperfect subjunctive from the **ellos preterite** of *reducir* (a *-ducir → -duj-* verb).",
          "*Ellos redujeron* → drop *-ron* → add *-ran* (note there is NO *-i-* after *j*!).",
        ],
        explanation:
          "All *-ducir* verbs (*reducir, producir, conducir*) have irregular preterite stems in **-duj-** (*redujeron*), producing **redujeran / redujesen** (never *reducieran*!). *Reduzcan* is present subjunctive and *reducirían* is conditional.",
      },
    ],
  },
  {
    id: "4-organizacion-social-m3",
    title: "MCQ Paper 3 · Policy Proposals, Structural Mobility & C1 Precision (SL/HL)",
    level: "HL",
    questions: [
      {
        id: "4-organizacion-social-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Which C1 condensed structure accurately replaces *«Si el ministerio hubiera ampliado las becas en 2020»* in a formal HL *propuesta*?",
        options: [
          "De ampliar las becas en 2020",
          "Al haber ampliado las becas en 2020",
          "De haber ampliado las becas en 2020",
          "Para haber ampliado las becas en 2020",
        ],
        answerIndex: 2,
        hints: [
          "Look for the preposition **De** followed by the compound infinitive (*haber + participio*).",
          "Check the difference in meaning: *Al haber ampliado* means 'upon having expanded' (factual), not 'had it expanded' (counterfactual).",
        ],
        explanation:
          "**De haber + participio** is the exact C1 equivalent of a Type 3 *Si hubiera + participio* clause. *De ampliar* matches Type 2 (*Si ampliara*), while *Al haber ampliado* states a real completed action rather than a counterfactual.",
      },
      {
        id: "4-organizacion-social-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Complete this HL sentence with the mandatory mood after **de ahí que**: *«El precio del alquiler supera la mitad del salario mínimo juvenil; de ahí que ______ imprescindible regular el mercado.»*",
        options: [
          "es",
          "será",
          "sería",
          "resulte",
        ],
        answerIndex: 3,
        hints: [
          "Recall the strict grammatical rule for the C1 consequence connector **de ahí que**.",
          "Unlike *por eso* or *por consiguiente*, **de ahí que** ALWAYS triggers the **subjunctive**.",
        ],
        explanation:
          "**De ahí que** (*hence / which is why*) ALWAYS requires the **subjunctive**: **de ahí que resulte** (or *sea*). Using indicative (*es, será*) or conditional (*sería*) after *de ahí que* is one of the most common HL Criterion A slips.",
      },
      {
        id: "4-organizacion-social-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Complete this HL policy evaluation with the **condicional compuesto** of **resolver**: *«De haberse abierto una mesa de diálogo a tiempo, se ______ la huelga educativa.»*",
        options: [
          "habría resuelto",
          "habría resolvido",
          "hubiera resuelto",
          "habrían resuelto",
        ],
        answerIndex: 0,
        hints: [
          "Check three details: (1) irregular past participle of *resolver*, (2) main clause takes *habría* (not *hubiera*), and (3) passive *se* agrees with singular *la huelga*.",
          "Remember the irregular participle pair: *volver → vuelto*, *resolver → resuelto*.",
        ],
        explanation:
          "*Resolver* has the irregular participle **resuelto** (never *resolvido*). Because *la huelga educativa* is singular, passive *se* takes singular **habría resuelto** in the main clause.",
      },
      {
        id: "4-organizacion-social-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "In socioeconomic analysis of Spain and Latin America, what does **«el ascensor social se ha averiado»** signify?",
        options: [
          "Municipal offices lack accessible lifts for elderly residents.",
          "Upward mobility across generations has stalled or weakened.",
          "Public transit fares have risen faster than urban wages.",
          "Private universities now enroll more students than state ones.",
        ],
        answerIndex: 1,
        hints: [
          "Read **el ascensor social** (the social elevator) as a sociological metaphor.",
          "Ask what happens when family background—not effort or education—fixes someone's economic future.",
        ],
        explanation:
          "**El ascensor social** denotes intergenerational upward mobility. Saying it has broken down (*se ha averiado / ralentizado*) means young people from lower-income families struggle to improve their socioeconomic status even with higher education.",
      },
      {
        id: "4-organizacion-social-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Which phrase best introduces a diplomatic HL **counter-argument** inside a formal *propuesta* without sounding dismissive?",
        options: [
          "Los críticos están totalmente equivocados cuando hablan del presupuesto;",
          "Es obvio que nadie inteligente rechazaría nuestra propuesta escolar;",
          "A mí no me importa cuánto cueste el programa si ayuda a los alumnos;",
          "Si bien es cierto que la reforma exige financiación inicial, no obstante,",
        ],
        answerIndex: 3,
        hints: [
          "Top-band HL persuasion concedes a valid point before pivoting to a stronger long-term argument.",
          "Look for formal concessive syntax (*Si bien es cierto que...*) paired with an elevated pivot (*no obstante*).",
        ],
        explanation:
          "**Si bien es cierto que..., no obstante,...** is a hallmark Band 10–12 HL rhetorical structure: it shows critical nuance by acknowledging cost constraints before refuting them with stronger evidence.",
      },
      {
        id: "4-organizacion-social-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "What does **«la economía sumergida»** (or *economía informal*) refer to in labour-policy debates across Hispanophone countries?",
        options: [
          "Unregistered economic activity lacking legal contracts or social protection",
          "Maritime logistics and port trade along the Atlantic and Pacific coasts",
          "State-owned enterprises running temporary budget deficits during crises",
          "Digital start-ups operating exclusively through remote online platforms",
        ],
        answerIndex: 0,
        hints: [
          "*Sumergida* means 'submerged / underground'—invisible to tax and labour registries.",
          "Think about workers paid cash-in-hand without pension, healthcare, or contract rights.",
        ],
        explanation:
          "**La economía sumergida** (Spain) or **economía informal** (Latin America) refers to undeclared employment outside legal regulation and social security—leaving workers vulnerable to exploitation and reducing public tax revenue.",
      },
      {
        id: "4-organizacion-social-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Select the most authoritative institutional call to action for an HL *propuesta* addressed to a Ministry:",
        options: [
          "Exigimos que ustedes arreglan este desastre escolar mañana mismo.",
          "Instamos al Ministerio a que impulse un plan plurianual de becas.",
          "Queremos que el Ministerio impulsa un buen plan de becas pronto.",
          "Deberían hacer algo mejor con las becas porque la gente se queja.",
        ],
        answerIndex: 1,
        hints: [
          "Check BOTH register (formal diplomacy, not aggression or vagueness) AND grammar (verb of influence + *que* + **subjunctive**).",
          "Look for *instar a [institución] a que + presente de subjuntivo*.",
        ],
        explanation:
          "**Instamos al Ministerio a que impulse...** combines formal C1 institutional diction (*instar a que*, *plan plurianual*) with accurate present subjunctive (*impulse*). Both indicative forms (*arreglan, impulsa*) are ungrammatical after verbs of influence, and *hacer algo mejor* is vague.",
      },
      {
        id: "4-organizacion-social-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Which sentence uses **nominalisation** and formal syntax to upgrade *«Si damos mejores becas, menos alumnos dejarán el instituto»*?",
        options: [
          "Si damos más dinero a todos, los chicos van a estudiar muchísimo más.",
          "Dar becas buenas sirve para que los estudiantes no se vayan del colegio.",
          "La ampliación de las becas contribuiría a frenar el abandono escolar.",
          "Cuando haya becas más grandes, nadie pensará en salir de las clases.",
        ],
        answerIndex: 2,
        hints: [
          "Nominalisation converts verb clauses (*dar becas, dejar el instituto*) into precise abstract nouns (*la ampliación de las becas, el abandono escolar*).",
          "Notice the diplomatic conditional (*contribuiría a*) replacing blunt assertion.",
        ],
        explanation:
          "Turning verb phrases into abstract nouns (**la ampliación de las becas**, **el abandono escolar**) paired with *contribuiría a frenar* elevates prose from B1 conversational style to crisp C1 institutional Spanish.",
      },
      {
        id: "4-organizacion-social-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Interpret",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Read this HL excerpt: *«Aunque la gratuidad universitaria en países como Argentina elimina la barrera de la matrícula, los costes indirectos de transporte y vivienda siguen filtrando al alumnado según su origen socioeconómico.»* What is the author's nuanced conclusion?",
        options: [
          "Tuition-free policies remove one barrier yet leave indirect inequalities intact.",
          "Free public universities fail to attract applicants from working-class areas.",
          "Raising university tuition fees would help fund urban student transport.",
          "Argentine higher education depends primarily on private student loans.",
        ],
        answerIndex: 0,
        hints: [
          "Track the two-part logic: *elimina la barrera de la matrícula* vs. *los costes indirectos... siguen filtrando*.",
          "Avoid exaggerations saying free universities fail completely or should raise fees.",
        ],
        explanation:
          "The excerpt balances recognition and critique: free tuition removes direct fees (*matrícula*), yet indirect living costs (*transporte y vivienda*) continue to filter students by socioeconomic background—showing why maintenance grants (*becas salario*) matter.",
      },
      {
        id: "4-organizacion-social-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Choose the grammatically exact **condicional compuesto** with an irregular past participle (*poner*): *«Si el consistorio hubiera escuchado a las asociaciones, habría ______ en marcha el centro juvenil en mayo.»*",
        options: [
          "ponido",
          "puesto",
          "puso",
          "poniendo",
        ],
        answerIndex: 1,
        hints: [
          "Recall the verb phrase *poner en marcha* (to launch/set in motion).",
          "*Poner* has an irregular past participle ending in *-sto*.",
        ],
        explanation:
          "The irregular past participle of *poner* is **puesto** (*habría puesto en marcha*). *Ponido* does not exist in standard Spanish, *puso* is preterite, and *poniendo* is a gerund.",
      },
      {
        id: "4-organizacion-social-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Which Paper 1 text-type layout is REQUIRED to score Band 5–6 on Criterion C for an HL **propuesta** (450–600 words)?",
        options: [
          "Date, «Querido diario», personal anecdotes, and an emotional sign-off",
          "Catchy magazine headline, pull-quotes, informal anecdotes, and reader poll",
          "Recipient/Subject header, problem diagnosis, numbered measures, and formal close",
          "Two-speaker Q&A transcript with biographical intro and brief closing remarks",
        ],
        answerIndex: 2,
        hints: [
          "Recall the **E-D-M-V-C** architecture of an institutional *propuesta*.",
          "Distinguish a formal *propuesta* from a *diario*, an *artículo*, and an *entrevista*.",
        ],
        explanation:
          "An authoritative IB **propuesta** features an institutional header (*Destinatario, Remitente, Fecha, Asunto*), concise problem diagnosis, clearly numbered actionable measures with feasibility/benefits, and a polite formal sign-off.",
      },
      {
        id: "4-organizacion-social-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Complete this C1 causal clause accurately: *«______ la persistente brecha digital en zonas rurales, resulta prioritario ampliar el programa de préstamos tecnológicos.»*",
        options: [
          "A pesar de que",
          "Sin embargo",
          "Con tal de que",
          "Habida cuenta de",
        ],
        answerIndex: 3,
        hints: [
          "Notice what follows the gap: a **noun phrase** (*la persistente brecha digital*), NOT a conjugated verb!",
          "You need a formal C1 prepositional phrase meaning *«Given / Taking into account»*.",
        ],
        explanation:
          "**Habida cuenta de + sustantivo** (*Given / Considering...*) introduces a formal cause followed directly by a noun phrase. *A pesar de que* and *Con tal de que* require a conjugated verb clause and express concession/condition, while *Sin embargo* marks contrast.",
      },
      {
        id: "4-organizacion-social-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Interpret",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Read this excerpt on Medellín's civic transformation: *«Lejos de limitarse a reforzar la presencia policial, el municipio apostó por parques biblioteca y transporte público en las laderas marginadas, logrando reducir drásticamente la violencia juvenil.»* What does **«Lejos de limitarse a...»** signal rhetorically?",
        options: [
          "A shift from narrow policing toward broader social investment",
          "A complete withdrawal of public safety services from hillside areas",
          "A geographic distance separating libraries from public cable cars",
          "A criticism that library parks cost more than municipal policing",
        ],
        answerIndex: 0,
        hints: [
          "*Lejos de + infinitivo* means 'Far from [doing X]'—contrasting an expected narrow approach with a wider strategy.",
          "Check what the city chose instead (*apostó por parques biblioteca y transporte público*).",
        ],
        explanation:
          "**Lejos de limitarse a...** (*Far from restricting itself to...*) highlights that Medellín went beyond purely punitive policing by investing in libraries and transit (*urbanismo social*) to tackle root causes of youth violence.",
      },
      {
        id: "4-organizacion-social-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "Which verb form accurately completes this formal HL recommendation using **en detrimento de**: *«Recortar las becas de comedor actuaría en detrimento de la equidad; por consiguiente, cabría ______ nuevas partidas presupuestarias.»*",
        options: [
          "habilite",
          "habilitar",
          "habilitara",
          "habilitando",
        ],
        answerIndex: 1,
        hints: [
          "Examine the impersonal C1 expression **cabría + ...** (*it would be appropriate/possible to...*).",
          "Notice there is NO *que* after *cabría*, so it takes a non-finite verb form directly.",
        ],
        explanation:
          "The C1 courtesy frame **cabría + infinitivo** (*cabría habilitar, cabría plantearse, cabría destacar*) always takes the **infinitive** directly (*It would be appropriate to allocate...*). Without *que*, subjunctive forms cannot follow.",
      },
      {
        id: "4-organizacion-social-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "instituciones-desigualdad-hl",
        question:
          "In a 450–600w HL *carta formal* critiquing unpaid internships (*prácticas no remuneradas*), which sentence combines passive **se**, *pluscuamperfecto de subjuntivo*, and *condicional compuesto* with zero errors?",
        options: [
          "Si se habrían prohibido las prácticas gratuitas, se hubiera fomentado la equidad.",
          "Si se prohibieran las prácticas gratuitas en 2015, se habría fomentado la equidad.",
          "Si se hayan prohibido las prácticas gratuitas, se habría fomentado la equidad.",
          "Si se hubieran prohibido las prácticas gratuitas, se habría fomentado la equidad.",
        ],
        answerIndex: 3,
        hints: [
          "Check agreement AND tense: plural subject *las prácticas gratuitas* takes plural **hubieran** in the *si*-clause; singular subject *la equidad* takes singular **habría** in the main clause.",
          "Verify that *habría* NEVER appears after *si*.",
        ],
        explanation:
          "Passive *se* agrees with its grammatical subject in each clause: plural **se hubieran prohibido** (*las prácticas gratuitas*) in the *si*-clause, paired with singular **se habría fomentado** (*la equidad*) in the main clause—flawless Type 3 syntax.",
      },
    ],
  },
];
