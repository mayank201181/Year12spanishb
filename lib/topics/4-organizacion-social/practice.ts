import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "4-organizacion-social-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "relaciones-comunidad-voluntariado",
      question:
        "Convert ONLY the verb **colaboras** from informal *tú* to formal **usted** in: *«Sabemos que usted ______ con el banco de alimentos.»* (Present indicative, 1 word.)",
      answer: { type: "text", accept: ["colabora"], display: "colabora" },
      traps: [
        { spec: { type: "text", accept: ["colaboras"] }, feedback: "Drop the final -s when shifting from tú to usted." },
        { spec: { type: "text", accept: ["colabore"] }, feedback: "Wait—this gap asks for the present indicative (usted form of colaboras); colabore is present subjunctive." },
      ],
      hints: [
        "Formal *usted* always uses the **3rd person singular** verb ending.",
        "Drop the *-s* from *colaboras*.",
      ],
      solution: [
        "Identify the present indicative *tú* form: **colaboras**.",
        "Switch to 3rd person singular for *usted*: **colabora**.",
      ],
      commonError: "Leaving the final *-s* from *tú* (*colaboras*) inside a formal *usted* sentence.",
    },
    {
      id: "4-organizacion-social-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "relaciones-comunidad-voluntariado",
      question:
        "Write the formal **usted** affirmative imperative of **apoyar** (1 word) in: *«Por favor, ______ nuestra iniciativa vecinal.»*",
      answer: { type: "text", accept: ["apoye"], display: "apoye" },
      traps: [
        { spec: { type: "text", accept: ["apoya"] }, feedback: "«Apoya» is the informal tú imperative; usted uses the present subjunctive." },
        { spec: { type: "text", accept: ["apoyes"] }, feedback: "Drop the -s: «apoyes» is informal tú subjunctive." },
      ],
      hints: [
        "Formal *usted* imperatives always take the **present subjunctive** (3rd person singular).",
        "For *-ar* verbs like *apoyar*, swap the vowel to *-e*.",
      ],
      solution: [
        "Start from *apoyar* (an *-ar* verb).",
        "Use the 3rd person singular present subjunctive for the *usted* imperative: **apoye**.",
      ],
      commonError: "Using the informal *tú* command (*apoya*) instead of the subjunctive *usted* command (*apoye*).",
    },
    {
      id: "4-organizacion-social-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "educacion-mundo-laboral",
      question:
        "Give the standard Spanish infinitive (1 word) that replaces the Anglicism *«aplicar para»* when applying for a job or scholarship: *«Deseo ______ una plaza de prácticas.»*",
      answer: { type: "text", accept: ["solicitar", "postular", "postularse"], display: "solicitar" },
      traps: [
        { spec: { type: "text", accept: ["aplicar"] }, feedback: "«Aplicar» is an Anglicism in job contexts; use the authentic Spanish transitive verb." },
        { spec: { type: "text", accept: ["realizar"] }, feedback: "«Realizar» means to carry out/achieve, not to apply for a position." },
      ],
      hints: [
        "It is a direct transitive verb requiring NO *para* after it (*______ una beca / un puesto*).",
        "Think of the noun *la solicitud* (application).",
      ],
      solution: [
        "Avoid the calque *aplicar para*.",
        "Use the pan-Hispanic formal verb **solicitar** (also *postular / postularse* in Latin America).",
      ],
      commonError: "Writing *aplicar para un trabajo*, a direct calque from English.",
    },
    {
      id: "4-organizacion-social-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "educacion-mundo-laboral",
      question:
        "Complete the authentic Spanish noun phrase for *youth unemployment* (2 words, without article): *«España intenta reducir el ______ mediante la Formación Profesional Dual.»*",
      answer: { type: "text", accept: ["paro juvenil", "desempleo juvenil"], display: "paro juvenil" },
      traps: [
        { spec: { type: "text", accept: ["desempleo de jóvenes", "paro de jóvenes"] }, feedback: "Use the concise adjective «juvenil» rather than «de jóvenes» for authentic B2 phrasing." },
      ],
      hints: [
        "Use the Spanish noun for unemployment (*paro* or *desempleo*) followed by the adjective for 'youth'.",
        "The adjective comes from *juventud* and ends in *-il*.",
      ],
      solution: [
        "Combine *paro* (or *desempleo*) with the adjective *juvenil*.",
        "Result: **paro juvenil** (or **desempleo juvenil**).",
      ],
      commonError: "Translating word-for-word as *desempleo de jóvenes* instead of the collocation *paro juvenil*.",
    },
    {
      id: "4-organizacion-social-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ley-orden-ciudadania",
      question:
        "Complete this **Type 1** `si`-clause with the correct form of **invertir** (1 word): *«Si el ayuntamiento ______ en bibliotecas públicas, aumentará la participación juvenil.»*",
      answer: { type: "text", accept: ["invierte"], display: "invierte" },
      traps: [
        { spec: { type: "text", accept: ["invierta"] }, feedback: "Never use the present subjunctive directly after «si»! Type 1 takes the present indicative." },
        { spec: { type: "text", accept: ["invertirá"] }, feedback: "Do not put the future tense inside the «si»-clause; use the present indicative." },
      ],
      hints: [
        "Main clause *aumentará* (future) tells you this is a **Type 1** real/likely `si`-clause.",
        "Conjugate stem-changing *invertir* (*e → ie*) in the 3rd person singular **present indicative**.",
      ],
      solution: [
        "Type 1 formula: `Si + presente de indicativo → futuro simple`.",
        "*Invertir* (e → ie) in 3rd person singular present indicative is **invierte**.",
      ],
      commonError: "Using present subjunctive (*invierta*) or future (*invertirá*) directly after *si*.",
    },
    {
      id: "4-organizacion-social-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ley-orden-ciudadania",
      question:
        "Complete this **Type 2** hypothetical `si`-clause with the imperfect subjunctive of **tener** (1 word): *«Si los centros educativos ______ más mediadores, bajaría el acoso escolar.»*",
      answer: { type: "text", accept: ["tuvieran", "tuviesen"], display: "tuvieran" },
      traps: [
        { spec: { type: "text", accept: ["tendrían"] }, feedback: "Never place the conditional directly after «si»! Use the imperfect subjunctive." },
        { spec: { type: "text", accept: ["tengan"] }, feedback: "Never place the present subjunctive after «si»." },
      ],
      hints: [
        "Main clause *bajaría* (conditional) signals a **Type 2** hypothetical `si`-clause.",
        "Start from 3rd-person plural preterite **tuvieron**, drop *-ron*, and add *-ran* (or *-sen*).",
      ],
      solution: [
        "Type 2 formula: `Si + imperfecto de subjuntivo → condicional simple`.",
        "From *tuvieron* → **tuvieran** (or **tuviesen**).",
      ],
      commonError: "Putting the conditional (*tendrían*) directly after *si*.",
    },
    {
      id: "4-organizacion-social-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ley-orden-ciudadania",
      question:
        "Complete the main clause of this **Type 2** policy proposal with the simple conditional of **poder** (1 word): *«Si se ampliaran las becas de transporte, más estudiantes rurales ______ asistir a la universidad.»*",
      answer: { type: "text", accept: ["podrían"], display: "podrían" },
      traps: [
        { spec: { type: "text", accept: ["pueden"] }, feedback: "Match the imperfect subjunctive «ampliaran» with the simple conditional, not present indicative." },
        { spec: { type: "text", accept: ["poderían"] }, feedback: "«Poder» has an irregular conditional stem: drop the -e- (podr- + -ían)." },
      ],
      hints: [
        "After *Si + imperfecto de subjuntivo* (*ampliaran*), the main clause takes the **condicional simple**.",
        "*Poder* uses the irregular stem **podr-** plus the 3rd-person plural ending **-ían** (with accent!).",
      ],
      solution: [
        "Identify the irregular conditional stem of *poder*: **podr-**.",
        "Add 3rd-person plural ending *-ían*: **podrían**.",
      ],
      commonError: "Writing regularised *poderían* or omitting the accent mark on *í*.",
    },
    {
      id: "4-organizacion-social-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "relaciones-comunidad-voluntariado",
      question:
        "Convert the bolded negative imperative + pronoun from *tú* to formal **usted** (3 words): *«**No te olvides** de confirmar su asistencia al acto solidario.»*",
      answer: { type: "text", accept: ["No se olvide", "no se olvide"], display: "No se olvide" },
      traps: [
        { spec: { type: "text", accept: ["no te olvide", "No te olvide"] }, feedback: "Remember to change the reflexive pronoun too: te → se for usted." },
        { spec: { type: "text", accept: ["no se olvides", "No se olvides"] }, feedback: "Drop the -s on the verb for 3rd person singular usted." },
      ],
      hints: [
        "Shift BOTH the reflexive pronoun (*te → se*) and the subjunctive verb (*olvides → olvide*).",
        "In negative imperatives, pronouns stay BEFORE the verb.",
      ],
      solution: [
        "Keep *No* at the front and convert reflexive *te* → **se**.",
        "Convert *olvides* (2nd sing.) → **olvide** (3rd sing. subjunctive): **No se olvide**.",
      ],
      commonError: "Changing the verb while forgetting to convert *te* into *se*.",
    },
    {
      id: "4-organizacion-social-quiz-q09",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "instituciones-desigualdad-hl",
      question:
        "[HL] Complete this **Type 3** policy critique with the **condicional compuesto** of **reducir** (2 words): *«Si el gobierno hubiera impulsado la FP Dual en 2012, ______ el paro juvenil de forma notable.»*",
      answer: { type: "text", accept: ["habría reducido"], display: "habría reducido" },
      traps: [
        { spec: { type: "text", accept: ["hubiera reducido"] }, feedback: "Use «habría» (conditional compound) in the main clause; «hubiera» belongs in the si-clause." },
        { spec: { type: "text", accept: ["había reducido"] }, feedback: "«Había reducido» is pluperfect indicative, not conditional compound." },
      ],
      hints: [
        "Type 3 main clauses use `habría + participio`.",
        "Check the past participle of *-ir* verb *reducir* (regular: *-ido*).",
      ],
      solution: [
        "Subject is *el gobierno* (3rd person singular) → **habría**.",
        "Add regular past participle of *reducir* (*reducido*): **habría reducido**.",
      ],
      commonError: "Confusing *hubiera* and *habría* or inventing an irregular participle for *reducir*.",
    },
    {
      id: "4-organizacion-social-quiz-q10",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "instituciones-desigualdad-hl",
      question:
        "[HL] Complete this C1 consequence clause using the correct present-subjunctive form of **ser** (1 word): *«La economía sumergida priva de derechos a miles de jóvenes; de ahí que ______ urgente reformar la inspección laboral.»*",
      answer: { type: "text", accept: ["sea"], display: "sea" },
      traps: [
        { spec: { type: "text", accept: ["es"] }, feedback: "«De ahí que» ALWAYS triggers the subjunctive, never the indicative!" },
        { spec: { type: "text", accept: ["será"] }, feedback: "«De ahí que» requires the subjunctive mood, not the future indicative." },
      ],
      hints: [
        "Recall the mandatory grammatical rule for **de ahí que**.",
        "Conjugate *ser* in the 3rd person singular **present subjunctive**.",
      ],
      solution: [
        "**De ahí que** ALWAYS requires the subjunctive mood.",
        "3rd person singular present subjunctive of *ser* is **sea**.",
      ],
      commonError: "Using indicative *es* after *de ahí que* by analogy with *por eso es*.",
    },
  ],
  papers: [
    {
      id: "4-organizacion-social-p1",
      title: "Practice Paper 1 · SL Core: Register, Education, Law & Structured Writing",
      level: "SL",
      questions: [
        {
          id: "4-organizacion-social-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "relaciones-comunidad-voluntariado",
          question:
            "Write the formal **usted** affirmative imperative of **hacer** (1 word) in: *«Por favor, ______ todo lo posible por difundir esta convocatoria solidaria.»*",
          answer: { type: "text", accept: ["haga"], display: "haga" },
          traps: [
            { spec: { type: "text", accept: ["haz"] }, feedback: "«Haz» is informal tú imperative; usted uses the present subjunctive." },
            { spec: { type: "text", accept: ["hace"] }, feedback: "«Hace» is present indicative, not the usted imperative." },
          ],
          hints: [
            "Form the *usted* imperative from the *yo* present indicative stem (*hago* → *hag-*).",
            "Swap the *-er* vowel to *-a*.",
          ],
          solution: [
            "Take *yo* present indicative **hago** → drop *-o* → add *-a*: **haga**.",
          ],
          commonError: "Writing *haz* (informal *tú*) or *hace* (indicative).",
        },
        {
          id: "4-organizacion-social-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "relaciones-comunidad-voluntariado",
          question:
            "Convert the informal possessive and pronoun in *«Espero recibir **tu** respuesta para agradecer**te** el gesto»* into formal **usted**. Write ONLY the two formal replacements separated by a comma (e.g. `su, enviarle`).",
          answer: {
            type: "text",
            accept: ["su, agradecerle", "su,agradecerle"],
            display: "su, agradecerle",
          },
          traps: [
            { spec: { type: "text", accept: ["tu, agradecerle"] }, feedback: "Remember to convert the possessive too: tu → su for formal usted." },
            { spec: { type: "text", accept: ["su, te agradezco"] }, feedback: "Keep the infinitive + enclitic pronoun structure: agradecerle (not te agradezco)." },
          ],
          hints: [
            "Convert *tu* (informal possessive) to its formal *usted* equivalent.",
            "Convert the attached indirect object pronoun *-te* on *agradecerte* to *-le*.",
          ],
          solution: [
            "Possessive: *tu* → **su**.",
            "Infinitive + indirect object pronoun: *agradecerte* → **agradecerle**.",
            "Combined: **su, agradecerle**.",
          ],
          commonError: "Converting *tu → su* while leaving *-te* attached to the infinitive.",
        },
        {
          id: "4-organizacion-social-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "educacion-mundo-laboral",
          question:
            "Replace the false friend *«realicé»* with the exact 1st-person preterite phrase (4 words, including the preposition before *que*) meaning *«I realized»*: *«Ayer ______ ______ ______ ______ que la FP Dual ofrece grandes salidas.»*",
          answer: {
            type: "text",
            accept: ["me di cuenta de", "me di cuenta de que"],
            display: "me di cuenta de",
          },
          traps: [
            { spec: { type: "text", accept: ["me realicé de"] }, feedback: "«Realizarse» means to fulfil oneself; use the idiom «darse cuenta de»." },
            { spec: { type: "text", accept: ["me di cuenta"] }, feedback: "Do not drop the mandatory preposition «de» before «que»!" },
          ],
          hints: [
            "Use the reflexive idiom *darse cuenta de* in the 1st person singular preterite (*yo*).",
            "Remember *dar* is irregular in the preterite (*di*) and ALWAYS takes the preposition *de* before *que*.",
          ],
          solution: [
            "Conjugate *darse cuenta de* in 1st person singular preterite: **me di cuenta de** (followed by *que*).",
          ],
          commonError: "Omitting *de* (*queísmo*) or misusing *realizarse*.",
        },
        {
          id: "4-organizacion-social-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "educacion-mundo-laboral",
          question:
            "Give the standard Spanish workplace term (without article) for *remote work / telecommuting* that sparked debates over *la desconexión digital*.",
          answer: {
            type: "text",
            accept: ["teletrabajo", "el teletrabajo", "trabajo remoto", "trabajo a distancia"],
            display: "teletrabajo",
          },
          hints: [
            "Wait—the most common Spanish term is actually a single compound noun (*tele-* + *trabajo*), though *trabajo remoto* / *trabajo a distancia* are also used.",
            "It literally combines the Greek prefix *tele-* (far) with *trabajo*.",
          ],
          solution: [
            "Standard IB Spanish B term: **teletrabajo** (also *trabajo remoto* or *trabajo a distancia*).",
          ],
          commonError: "Writing English *home office* instead of authentic Spanish *teletrabajo*.",
        },
        {
          id: "4-organizacion-social-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ley-orden-ciudadania",
          question:
            "Complete this **Type 2** hypothetical `si`-clause with the imperfect subjunctive of **hacer** (1 word): *«Si el ayuntamiento ______ una consulta vecinal, el parque respondería a las necesidades reales.»*",
          answer: { type: "text", accept: ["hiciera", "hiciese"], display: "hiciera" },
          traps: [
            { spec: { type: "text", accept: ["haría"] }, feedback: "Never use the conditional directly after «si»! Use the imperfect subjunctive." },
            { spec: { type: "text", accept: ["haga"] }, feedback: "Never use the present subjunctive directly after «si»." },
          ],
          hints: [
            "Start from the 3rd-person plural preterite of *hacer* (**hicieron**).",
            "Drop *-ron* and add the 3rd-person singular ending *-ra* (or *-se*).",
          ],
          solution: [
            "3rd-person plural preterite: *hicieron*.",
            "Drop *-ron* → **hiciera** (or **hiciese**).",
          ],
          commonError: "Forming a regularised stem (*haciera*) instead of irregular *hiciera*.",
        },
        {
          id: "4-organizacion-social-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ley-orden-ciudadania",
          question:
            "Complete this **Type 1** civic proposal with the simple future of **disminuir** (1 word): *«Si ampliamos los centros juveniles de barrio, ______ la delincuencia menor.»*",
          answer: { type: "text", accept: ["disminuirá"], display: "disminuirá" },
          traps: [
            { spec: { type: "text", accept: ["disminuiría"] }, feedback: "«Ampliamos» is present indicative (Type 1), so pair it with the simple future, not the conditional." },
          ],
          hints: [
            "Type 1 pairs present indicative (*ampliamos*) with the **simple future**.",
            "Subject is singular *la delincuencia menor* → infinitive + *-á* (with accent!).",
          ],
          solution: [
            "Infinitive *disminuir* + 3rd-person singular future ending *-á* → **disminuirá**.",
          ],
          commonError: "Mixing Type 1 (*ampliamos*) with Type 2 conditional (*disminuiría*) or dropping the accent on *-á*.",
        },
        {
          id: "4-organizacion-social-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ley-orden-ciudadania",
          question:
            "Complete this **Type 3** `si`-clause with the pluperfect subjunctive of **aprobar** (2 words): *«Si el parlamento ______ ______ la ley de reinserción en 2018, habría bajado la reincidencia.»*",
          answer: {
            type: "text",
            accept: ["hubiera aprobado", "hubiese aprobado"],
            display: "hubiera aprobado",
          },
          traps: [
            { spec: { type: "text", accept: ["habría aprobado"] }, feedback: "Never use «habría» inside the si-clause; Type 3 requires «hubiera/hubiese + participio»." },
          ],
          hints: [
            "Main clause *habría bajado* signals **Type 3** past counterfactual.",
            "Combine *hubiera* (or *hubiese*) + regular past participle of *aprobar*.",
          ],
          solution: [
            "Pluperfect subjunctive of *aprobar* (3rd person singular): **hubiera aprobado** (or **hubiese aprobado**).",
          ],
          commonError: "Using *habría aprobado* after *si*.",
        },
        {
          id: "4-organizacion-social-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "relaciones-comunidad-voluntariado",
          question:
            "Complete this formal `usted` imperative of **buscar** (applying the *-car* orthographic rule, 1 word): *«Señor concejal, ______ soluciones dialogadas con las asociaciones del barrio.»*",
          answer: { type: "text", accept: ["busque"], display: "busque" },
          traps: [
            { spec: { type: "text", accept: ["busca"] }, feedback: "«Busca» is informal tú imperative; usted uses the present subjunctive." },
            { spec: { type: "text", accept: ["busce"] }, feedback: "Watch the spelling rule: -car verbs change c → qu before e to preserve the hard /k/ sound." },
          ],
          hints: [
            "Formal *usted* imperative uses the present subjunctive (*-ar* verbs take *-e*).",
            "To preserve the hard /k/ sound before *-e*, change **c → qu**.",
          ],
          solution: [
            "*Buscar* (*-car* → *-qu-*) + *-e* = **busque**.",
          ],
          commonError: "Writing *busca* (informal) or misspelling as *busce*.",
        },
        {
          id: "4-organizacion-social-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "relaciones-comunidad-voluntariado",
          marks: 2,
          question:
            "Read this short extract: *«En nuestra ciudad, el programa Hogares Compartidos une a jubilados que disponen de habitaciones vacías con universitarios de bajos ingresos, quienes ofrecen compañía a cambio de un alquiler simbólico.»* Explain **two** distinct benefits of this intergenerational initiative (in English or Spanish).",
          modelAnswer:
            "First, retired elderly residents overcome social isolation and gain regular daily companionship. Second, low-income university students gain affordable housing at a symbolic rent instead of facing unaffordable city prices.",
          markScheme: [
            {
              point: "Benefit for elderly residents: reduces isolation / loneliness through companionship",
              keywords: ["isolation", "companionship", "soledad", "acompañamiento"],
            },
            {
              point: "Benefit for university students: affordable housing / lower rent costs",
              keywords: ["affordable", "housing", "asequible", "vivienda"],
            },
          ],
          hints: [
            "Identify what each of the two groups (*jubilados* and *universitarios*) gains from the arrangement.",
            "Paraphrase concisely rather than merely copying the Spanish sentence.",
          ],
          commonError: "Mentioning only one group (e.g. cheaper rent for students) and forgetting the emotional benefit for older residents.",
        },
        {
          id: "4-organizacion-social-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "educacion-mundo-laboral",
          marks: 3,
          question:
            "Explain **three** concrete reasons why *la Formación Profesional Dual (FP Dual)* is increasingly recommended to combat youth unemployment across Spain.",
          modelAnswer:
            "First, FP Dual combines technical classroom modules with paid workplace placements inside companies, so graduates enter employment with real practical experience. Second, training tracks align closely with high-demand sectors like renewable energy and cybersecurity, preventing skills mismatches. Third, companies frequently hire their apprentices permanently afterwards, lowering precarious temporary contracts.",
          markScheme: [
            {
              point: "Combines classroom study with paid practical experience inside partner companies",
              keywords: ["placements", "practical", "prácticas", "remuneradas"],
            },
            {
              point: "Aligns skills with high-demand labour sectors, reducing mismatch / overqualification",
              keywords: ["high-demand", "mismatch", "demanda", "sobrecualificación"],
            },
            {
              point: "Leads to higher job placement / permanent hiring and reduces precarious contracts",
              keywords: ["permanently", "precarious", "inserción", "precariedad"],
            },
          ],
          hints: [
            "Contrast purely theoretical university lectures with learning directly inside companies.",
            "Mention employability, alignment with real sector demand, and smoother transition into stable contracts.",
          ],
          commonError: "Giving three vague variations of 'it helps students get a job' without naming practical placements, sector alignment, or contract stability.",
        },
        {
          id: "4-organizacion-social-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "relaciones-comunidad-voluntariado",
          marks: 4,
          question:
            "Rewrite this informal Spanish note into a **formal `carta formal`** excerpt addressed to *Sra. Directora Morales*, ensuring full **usted** consistency across greeting, pronouns, verbs, and sign-off:\n*«Hola directora, te escribo para pedirte tu ayuda con nuestro proyecto solidario. Ven al instituto el viernes y dinos tus ideas. Un abrazo, Lucía.»*",
          modelAnswer:
            "Estimada Sra. Morales:\nLe escribo para solicitarle su valiosa colaboración con nuestro proyecto solidario. Le agradecería que acudiera al centro el viernes y nos comunicara sus propuestas (o: Venga al centro el viernes y díganos sus opiniones). Quedo a su disposición y le saludo atentamente,\nLucía",
          markScheme: [
            {
              point: "Accurate formal salutation with Spanish colon (Estimada Sra. Morales:)",
              keywords: ["estimada", "morales:"],
            },
            {
              point: "Pronouns and possessives fully shifted to usted (le, su, sus)",
              keywords: ["solicitarle", "pedirle", "le escribo"],
            },
            {
              point: "Imperatives / polite verbs correctly converted to usted (venga / acudiera / díganos)",
              keywords: ["venga", "díganos", "acudiera"],
            },
            {
              point: "Appropriate formal closing replacing 'Un abrazo' (Atentamente / Le saludo atentamente)",
              keywords: ["atentamente", "disposición"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No register conversion attempted or remains informal.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Partial formalization: changes greeting or closing, but retains tú pronouns, possessives, or commands.",
              indicators: ["Uses comma instead of colon", "Mixes te/tu with usted verbs"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Consistent, authentic formal usted register across greeting (:), pronouns, verbs/imperatives, and sign-off.",
              indicators: ["Zero tú leaks", "Accurate subjunctive usted imperatives or conditional of courtesy"],
            },
          ],
          hints: [
            "Audit all five **S-P-V-I-C** layers: Saludo (:), Pronombres, Verbos, Imperativos, Cierre.",
            "Remember *ven → venga*, *dinos → díganos*, *te → le*, *tu/tus → su/sus*, and replace *Un abrazo* with *Atentamente,*.",
          ],
          commonError: "Converting the greeting and closing while leaving *pedirte* or *dinos* in informal *tú*.",
        },
        {
          id: "4-organizacion-social-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "educacion-mundo-laboral",
          marks: 4,
          question:
            "Compare and contrast **two** advantages and **two** drawbacks of remote working for young professionals in Hispanophone cities.",
          modelAnswer:
            "On the positive side, remote work saves daily commuting time and lowers urban transport expenses, while also improving work-life balance and enabling young adults to relocate to cheaper rural towns. On the downside, constant connectivity threatens the right to switch off after hours, and limited face-to-face mentoring can trigger professional isolation and slower career growth.",
          markScheme: [
            {
              point: "Advantage 1: saves commuting time / transport costs or allows rural relocation",
              keywords: ["commuting", "relocate", "desplazamiento", "rural"],
            },
            {
              point: "Advantage 2: improves work-life balance / flexibility",
              keywords: ["balance", "flexibility", "conciliación", "flexibilidad"],
            },
            {
              point: "Drawback 1: blurs boundaries / threatens right to digital disconnection",
              keywords: ["disconnection", "switch off", "desconexión", "horarios"],
            },
            {
              point: "Drawback 2: causes workplace isolation / weaker mentoring for junior staff",
              keywords: ["isolation", "mentoring", "aislamiento", "compañeros"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant workplace points made.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "One-sided list or generic comments lacking specific IB workplace concepts.",
              indicators: ["Covers only pros or only cons"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Balanced comparison of two clear advantages and two distinct drawbacks with precise concepts.",
              indicators: ["Addresses commuting, conciliation, digital disconnection, and isolation/mentoring"],
            },
          ],
          hints: [
            "Balance two clear positives (*conciliación, ahorro de desplazamientos / España vaciada*) with two real risks (*desconexión digital, aislamiento / falta de mentoría*).",
            "Make sure each point is distinct rather than repeating the same idea.",
          ],
          commonError: "Writing four advantages without balancing them against clear drawbacks.",
        },
        {
          id: "4-organizacion-social-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "ley-orden-ciudadania",
          marks: 5,
          question:
            "In Spanish (approx. 100–130 words), write a balanced paragraph debating whether juvenile justice systems should prioritize harsher punishment or social rehabilitation. Include **at least one Type 2 `si`-clause** and **two connectors of contrast**.",
          modelAnswer:
            "Aunque numerosos sectores sociales exigen penas de cárcel más severas ante la delincuencia juvenil, sin embargo, las investigaciones criminológicas demuestran que el castigo exclusivamente punitivo rara vez frena la reincidencia. Por el contrario, los programas de justicia restaurativa, mediación familiar y formación laboral dentro de los centros de menores ofrecen herramientas concretas para la reinserción social. Si los gobiernos invirtieran mayores recursos en prevención educativa y acompañamiento psicológico en lugar de construir más prisiones, disminuiría notablemente el número de jóvenes reincidentes. No obstante, las medidas educativas deben acompañarse de responsabilidad clara hacia las víctimas para garantizar la confianza ciudadana.",
          markScheme: [
            {
              point: "Presents both perspectives: punitive approach vs. restorative rehabilitation",
              keywords: ["punitivo", "restaurativa", "reinserción"],
            },
            {
              point: "Accurate Type 2 si-clause (Si + imperfecto de subjuntivo → condicional simple)",
              keywords: ["invirtieran", "disminuiría"],
            },
            {
              point: "Uses at least two authentic connectors of contrast (aunque / sin embargo / por el contrario / no obstante)",
              keywords: ["sin embargo", "no obstante", "por el contrario"],
            },
            {
              point: "Accurate B2 justice lexicon (delincuencia juvenil, reincidencia, mediación)",
              keywords: ["reincidencia", "mediación"],
            },
            {
              point: "Nuanced concluding synthesis balancing rehabilitation with victim accountability",
              keywords: ["responsabilidad", "víctimas", "confianza"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Off-topic or incomprehensible Spanish.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "One-sided basic opinion; Type 2 si-clause missing or contains conditional after si.",
              indicators: ["Basic B1 vocabulary", "Grammatical slips obscure meaning"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear two-sided discussion in Spanish with mostly accurate Type 2 si-clause and contrast connectors.",
              indicators: ["Uses reinserción / reincidencia", "Minor agreement or accent slips"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Cohesive, balanced B2+ Spanish integrating flawless Type 2 conditional syntax, contrast connectors, and nuanced conclusion.",
              indicators: ["Natural register", "Accurate subjunctive–conditional pairing"],
            },
          ],
          hints: [
            "Open by acknowledging the punitive view (*Aunque muchos ciudadanos exigen...*) before pivoting (*sin embargo / por el contrario*).",
            "Check your Type 2 `si`-clause against **SI-RA → Í-A**: *Si los gobiernos invirtieran..., disminuiría...*.",
          ],
          commonError: "Writing *Si los gobiernos invertirían...* (placing the conditional directly after *si*).",
        },
        {
          id: "4-organizacion-social-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Suggest",
          guideRef: "educacion-mundo-laboral",
          marks: 6,
          question:
            "Draft a concise **informe** section in Spanish (130–160 words) for your school's careers department evaluating youth employability and proposing two concrete reforms. Use **impersonal report structures**, **clear subheadings**, and **at least one `si`-clause**.",
          modelAnswer:
            "**Informe: Mejora de la empleabilidad juvenil en el último ciclo de secundaria**\n\n**1. Diagnóstico actual**\nSegún las encuestas realizadas al alumnado, se constata una marcada preocupación por el paro juvenil y la sobrecualificación universitaria. Cabe destacar que la mayoría desconoce las salidas laborales de la Formación Profesional Dual y carece de orientación práctica sobre cómo redactar un currículo o solicitar prácticas remuneradas.\n\n**2. Recomendaciones concretas**\nEn vista de lo expuesto, se recomienda implantar dos medidas prioritarias:\n- **Ferias de orientación mixta:** Invitar tanto a universidades como a empresas de FP Dual para ampliar las opciones profesionales.\n- **Talleres de inserción laboral:** Ofrecer simulacros de entrevistas y formación en competencias digitales. Si el departamento pusiera en marcha estos talleres el próximo trimestre, el alumnado afrontaría el mercado laboral con mayor seguridad.\n\n**3. Conclusión**\nUna orientación temprana y diversificada reduciría la brecha entre el aula y el primer empleo.",
          markScheme: [
            {
              point: "Authentic informe layout with title and numbered subheadings",
              keywords: ["diagnóstico", "recomendaciones", "conclusión"],
            },
            {
              point: "Impersonal objective register (se constata / cabe destacar / se recomienda)",
              keywords: ["se constata", "cabe destacar", "se recomienda"],
            },
            {
              point: "Accurate education & labour vocabulary (paro juvenil, FP Dual, inserción laboral)",
              keywords: ["paro juvenil", "inserción laboral", "sobrecualificación"],
            },
            {
              point: "Two concrete, distinct actionable measures proposed",
              keywords: ["ferias", "talleres", "simulacros"],
            },
            {
              point: "Grammatically accurate si-clause supporting a recommendation",
              keywords: ["pusiera", "afrontaría"],
            },
            {
              point: "Cohesive formal conclusion linking education to labour-market readiness",
              keywords: ["brecha", "orientación", "primer empleo"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Does not resemble a report or fails to address the task.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Personal/chatty tone ('creo que...'), minimal formatting, vague ideas.",
              indicators: ["No subheadings", "Basic IGCSE phrasing"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear report structure with mostly objective tone and relevant labour vocabulary.",
              indicators: ["Uses some impersonal frames", "One minor si-clause or agreement slip"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authentic IB informe conventions, consistent impersonal voice, precise B2 lexicon, and accurate si-clause.",
              indicators: ["Numbered subheadings + bullet recommendations", "Sustained objective register"],
            },
          ],
          hints: [
            "Format like a genuine report: **Title → 1. Diagnóstico → 2. Recomendaciones → 3. Conclusión**.",
            "Replace *yo creo que* with *se constata que*, *cabe destacar que*, and *se recomienda*.",
            "Include one clean Type 1 or Type 2 `si`-clause showing the projected impact of your reforms.",
          ],
          commonError: "Writing a personal opinion essay (*En mi opinión, creo que...*) instead of using an objective *informe* voice.",
        },
        {
          id: "4-organizacion-social-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "relaciones-comunidad-voluntariado",
          marks: 6,
          question:
            "Write a persuasive **folleto** excerpt in Spanish (140–170 words) inviting residents of a Spanish-speaking city to join a weekend youth-and-senior civic volunteering campaign. Include a **catchy title**, **two subheadings**, **practical details**, and **consistent respectful audience address**.",
          modelAnswer:
            "**¡Barrio Vivo: construyamos juntos una comunidad más solidaria!**\n\n**¿Por qué participar este fin de semana?**\nLa soledad no deseada y el deterioro de nuestros espacios verdes nos afectan a todos. Cuando vecinos de distintas generaciones colaboramos en el tejido asociativo, transformamos las calles en lugares más humanos y seguros. Si usted dedica solo tres horas este sábado, contribuirá directamente a mejorar la convivencia local.\n\n**¿Cómo puede colaborar?**\n- **Banco de alimentos vecinal:** Clasificación y reparto solidario para familias del distrito.\n- **Acompañamiento intergeneracional:** Talleres de apoyo digital donde jóvenes ayudan a personas mayores con trámites en línea.\n\n**Información práctica**\n- **Fecha y hora:** Sábado 18 de octubre, de 10:00 a 13:00.\n- **Lugar:** Centro Cívico Alameda.\n- **Inscripción:** Escriba a voluntarios@barriovivo.org o acérquese el mismo día.\n\n¡Su compromiso marca la diferencia: participe y corra la voz!",
          markScheme: [
            {
              point: "Engaging leaflet title suitable for a community public audience",
              keywords: ["construyamos", "solidaria"],
            },
            {
              point: "Clear scannable subheadings / visual organisation typical of a folleto",
              keywords: ["¿por qué", "¿cómo", "información práctica"],
            },
            {
              point: "Theme 4 community lexicon (soledad no deseada, tejido asociativo, convivencia)",
              keywords: ["soledad no deseada", "tejido asociativo", "convivencia"],
            },
            {
              point: "Concrete volunteering activities specified (food bank / intergenerational digital help)",
              keywords: ["banco de alimentos", "intergeneracional", "acompañamiento"],
            },
            {
              point: "Practical logistics included (date/time, location, registration)",
              keywords: ["centro cívico", "inscripción", "sábado"],
            },
            {
              point: "Consistent respectful address (usted / inclusive nosotros) and persuasive call to action",
              keywords: ["participe", "escriba", "compromiso"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Not recognizable as a leaflet or fails to address community volunteering.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Dense block of prose lacking visual signposting, practical info, or clear register.",
              indicators: ["No bullet points or logistics", "Unstable tú/usted switching"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Recognizable folleto with clear community ideas, practical details, and mostly consistent register.",
              indicators: ["Includes headings and call to action", "Minor accuracy slips"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authentic, persuasive IB folleto with crisp subheadings, scannable bullets, rich Theme 4 lexicon, and flawless usted/nosotros register.",
              indicators: ["Zero tú/usted confusion", "Strong cultural authenticity"],
            },
          ],
          hints: [
            "Make it look like a **folleto**: catchy headline, question-style subheadings, bullet points, and a practical info box.",
            "Since residents include all ages, use respectful **usted** (*Si usted dedica..., participe, escriba*) plus inclusive **nosotros** (*construyamos*).",
            "Ground the volunteering in concrete civic tasks (*banco de alimentos, apoyo digital intergeneracional*).",
          ],
          commonError: "Writing a dense essay with no subheadings, dates, or venue—missing core *folleto* conventions under Criterion C.",
        },
      ],
    },
    {
      id: "4-organizacion-social-p2",
      title: "Practice Paper 2 · B2–C1 & HL Synthesis: Policy, Justice & Formal Proposals",
      level: "HL",
      questions: [
        {
          id: "4-organizacion-social-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ley-orden-ciudadania",
          question:
            "Complete this sentence with the irregular imperfect subjunctive of **poder** (1 word): *«Si todos los municipios ______ ofrecer transporte gratuito a estudiantes, disminuiría el abandono escolar.»*",
          answer: { type: "text", accept: ["pudieran", "pudiesen"], display: "pudieran" },
          traps: [
            { spec: { type: "text", accept: ["podrían"] }, feedback: "Never place the conditional directly after «si»! Use imperfect subjunctive." },
            { spec: { type: "text", accept: ["puedan"] }, feedback: "Never place the present subjunctive after «si»." },
          ],
          hints: [
            "Start from 3rd-person plural preterite **pudieron**.",
            "Drop *-ron* and add *-ran* (or *-sen*).",
          ],
          solution: [
            "3rd-person plural preterite *pudieron* → **pudieran** (or **pudiesen**).",
          ],
          commonError: "Writing *podieran* (wrong stem vowel) or *podrían* (conditional after *si*).",
        },
        {
          id: "4-organizacion-social-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ley-orden-ciudadania",
          question:
            "Complete this **como si** clause with the imperfect subjunctive of **existir** (1 word): *«Algunas empresas fijan horarios abusivos como si no ______ el derecho a la desconexión digital.»*",
          answer: { type: "text", accept: ["existiera", "existiese"], display: "existiera" },
          traps: [
            { spec: { type: "text", accept: ["existe"] }, feedback: "«Como si» ALWAYS takes the imperfect (or pluperfect) subjunctive, never the indicative." },
            { spec: { type: "text", accept: ["exista"] }, feedback: "«Como si» NEVER takes the present subjunctive." },
          ],
          hints: [
            "**Como si** always demands the **imperfect (or pluperfect) subjunctive**.",
            "Subject is singular *el derecho a la desconexión digital*.",
          ],
          solution: [
            "*Existir* → preterite *existieron* → 3rd-person singular imperfect subjunctive: **existiera** (or **existiese**).",
          ],
          commonError: "Using present subjunctive *exista* because the main verb *fijan* is in the present.",
        },
        {
          id: "4-organizacion-social-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "instituciones-desigualdad-hl",
          question:
            "[HL] Complete this **condicional compuesto** using the irregular past participle of **abrir** (2 words): *«De haber recibido financiación municipal, la asociación ______ ______ un centro de mediación en enero.»*",
          answer: { type: "text", accept: ["habría abierto"], display: "habría abierto" },
          traps: [
            { spec: { type: "text", accept: ["habría abrido"] }, feedback: "«Abrir» has an irregular past participle ending in -ierto (abierto)." },
            { spec: { type: "text", accept: ["hubiera abierto"] }, feedback: "Main clauses in Type 3 conditionals take «habría», not «hubiera»." },
          ],
          hints: [
            "Subject is singular *la asociación* → **habría**.",
            "Recall the irregular participle of *abrir* (similar to *cubrir → cubierto*).",
          ],
          solution: [
            "Combine *habría* + irregular participle **abierto** → **habría abierto**.",
          ],
          commonError: "Regularising the participle as *abrido*.",
        },
        {
          id: "4-organizacion-social-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "instituciones-desigualdad-hl",
          question:
            "[HL] Rewrite the bolded Type 3 `si`-clause using the C1 condensed frame **De haber + participio** (3 words): *«**Si hubieran regulado** los alquileres turísticos, las familias jóvenes habrían permanecido en el barrio.»*",
          answer: {
            type: "text",
            accept: ["De haber regulado", "de haber regulado"],
            display: "De haber regulado",
          },
          traps: [
            { spec: { type: "text", accept: ["De regular"] }, feedback: "«De regular» is Type 2 (present/future hypothetical), whereas «Si hubieran regulado» is past Type 3." },
          ],
          hints: [
            "Replace *Si hubieran* with **De haber** (always invariable infinitive *haber*!).",
            "Keep the exact past participle *regulado*.",
          ],
          solution: [
            "Replace *Si hubieran* with **De haber** + past participle *regulado* → **De haber regulado**.",
          ],
          commonError: "Trying to conjugate *haber* after *De* (e.g. *De hubieran*) instead of using the infinitive *haber*.",
        },
        {
          id: "4-organizacion-social-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "instituciones-desigualdad-hl",
          question:
            "[HL] Complete this formal institutional recommendation with the present subjunctive of **garantizar** (1 word, respecting orthographic changes): *«Instamos al Ayuntamiento a que ______ becas de transporte para todo el alumnado rural.»*",
          answer: { type: "text", accept: ["garantice"], display: "garantice" },
          traps: [
            { spec: { type: "text", accept: ["garantiza"] }, feedback: "«Instar a que» expresses formal influence and requires the present subjunctive." },
            { spec: { type: "text", accept: ["garantizará"] }, feedback: "Use the present subjunctive (garantice), not the future indicative." },
          ],
          hints: [
            "*Instamos a que...* triggers the **present subjunctive**.",
            "Remember the *-zar* spelling rule: **z → c** before *-e*.",
          ],
          solution: [
            "*Garantizar* (*z → c* before *-e*) in 3rd-person singular present subjunctive = **garantice**.",
          ],
          commonError: "Spelling with *z* (*garantize*) or dropping into indicative (*garantiza*).",
        },
        {
          id: "4-organizacion-social-p2-q06",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "instituciones-desigualdad-hl",
          question:
            "[HL] Complete this mixed conditional (past cause → present consequence) using the simple conditional of **tener** (1 word): *«Si se hubieran construido viviendas públicas hace veinte años, los jóvenes españoles hoy ______ una emancipación más temprana.»*",
          answer: { type: "text", accept: ["tendrían"], display: "tendrían" },
          traps: [
            { spec: { type: "text", accept: ["habrían tenido"] }, feedback: "Notice the time marker «hoy»! A present consequence requires the simple conditional, not conditional compound." },
            { spec: { type: "text", accept: ["tuvieran"] }, feedback: "«Tuvieran» is imperfect subjunctive, which belongs inside the si-clause, not the main clause." },
          ],
          hints: [
            "Spot the time marker **hoy** in the main clause—this is a **mixed conditional**.",
            "Conjugate irregular *tener* (stem *tendr-*) in 3rd-person plural **simple conditional**.",
          ],
          solution: [
            "Past condition (*hubieran construido*) + present consequence (*hoy*) → simple conditional: **tendrían**.",
          ],
          commonError: "Defaulting mechanically to *habrían tenido* and ignoring the present marker *hoy*.",
        },
        {
          id: "4-organizacion-social-p2-q07",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "instituciones-desigualdad-hl",
          question:
            "[HL] Complete this passive-`se` policy evaluation using the **condicional compuesto** of **evitar** (3 words, including `se`): *«De haberse inspeccionado los contratos temporales a tiempo, ______ ______ ______ numerosos abusos laborales.»*",
          answer: {
            type: "text",
            accept: ["se habrían evitado"],
            display: "se habrían evitado",
          },
          traps: [
            { spec: { type: "text", accept: ["se habría evitado"] }, feedback: "Check agreement! The grammatical subject «numerosos abusos laborales» is PLURAL, so use «habrían»." },
          ],
          hints: [
            "Check the grammatical subject of passive *se*: **numerosos abusos laborales** (plural!).",
            "Use plural **se habrían** + past participle *evitado*.",
          ],
          solution: [
            "Passive *se* agrees in number with plural *numerosos abusos laborales* → **se habrían evitado**.",
          ],
          commonError: "Using singular *se habría evitado* with a plural subject.",
        },
        {
          id: "4-organizacion-social-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Interpret",
          guideRef: "ley-orden-ciudadania",
          marks: 2,
          question:
            "Read this Paper 2-style excerpt: *«En Medellín, las autoridades comprobaron que invertir en bibliotecas parque y transporte por cable en las laderas marginadas logró reducir los índices de violencia juvenil mucho más eficazmente que el mero aumento de patrullas.»* State whether the following claim is **True or False**, give the **minimal Spanish quote**, and explain in one sentence why it contradicts the passage: *«Expanding police patrols proved better than building libraries and cable-car transit.»*",
          modelAnswer:
            "False. Minimal quote: «invertir en bibliotecas parque y transporte por cable en las laderas marginadas logró reducir los índices de violencia juvenil mucho más eficazmente que el mero aumento de patrullas.» In other words, civic infrastructure and public transit cut urban youth violence far more successfully than simply deploying extra officers.",
          markScheme: [
            {
              point: "Correctly identifies the claim as False",
              keywords: ["false", "falso"],
            },
            {
              point: "Justifies accurately that social infrastructure / transit reduced violence more successfully than extra police",
              keywords: ["successfully", "deploying", "civic infrastructure", "eficacia"],
            },
          ],
          hints: [
            "Compare the direction of the comparison (*mucho más eficazmente que*) carefully.",
            "Copy only the clause that directly refutes the claim—no unnecessary filler.",
          ],
          commonError: "Misreading *más eficazmente que* and answering True, or paraphrasing instead of quoting the exact text.",
        },
        {
          id: "4-organizacion-social-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "educacion-mundo-laboral",
          marks: 3,
          question:
            "Read this excerpt: *«La combinación de alquileres desorbitados, sueldos estancados y contratos encadenados retrasa la emancipación en España por encima de los treinta años, empujando a miles de graduados hacia el extranjero.»* Identify **three** distinct socioeconomic factors driving youth emigration in this passage.",
          modelAnswer:
            "1. Unaffordable housing rents (*alquileres desorbitados*). 2. Stagnant salaries (*sueldos estancados*). 3. Consecutive temporary/unstable contracts (*contratos encadenados*) that delay leaving the parental home past age thirty.",
          markScheme: [
            {
              point: "Factor 1: skyrocketing / unaffordable housing rents",
              keywords: ["unaffordable", "rents", "desorbitados", "vivienda"],
            },
            {
              point: "Factor 2: stagnant / low wages",
              keywords: ["stagnant", "salaries", "wages", "estancados"],
            },
            {
              point: "Factor 3: chained temporary / insecure employment contracts delaying independence",
              keywords: ["temporary", "unstable", "precarious", "encadenados"],
            },
          ],
          hints: [
            "Locate the three noun phrases grouped after *La combinación de...*.",
            "Explain each concisely in your own words without merging two factors into one.",
          ],
          commonError: "Combining stagnant salaries and temporary contracts into a single generic point ('bad jobs').",
        },
        {
          id: "4-organizacion-social-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "instituciones-desigualdad-hl",
          marks: 4,
          question:
            "[HL] Explain how **Uruguay's Plan Ceibal** and **tuition-free public universities** (such as UBA in Argentina or UNAM in Mexico) promote social mobility, and identify **two** structural limitations that can still hinder low-income students.",
          modelAnswer:
            "Plan Ceibal narrows the digital divide by giving every public-school pupil a laptop and internet access regardless of rural location or family income, while tuition-free public universities remove upfront registration fees so lower-income students can pursue degrees. Nevertheless, two structural hurdles persist: first, indirect living expenses such as transport, textbooks, and urban rent often force students to work part-time; second, uneven quality in early secondary schooling and lack of family academic networks continue to affect graduation rates.",
          markScheme: [
            {
              point: "Plan Ceibal reduces digital divide via universal devices/connectivity for public students",
              keywords: ["digital divide", "laptop", "connectivity", "brecha digital"],
            },
            {
              point: "Tuition-free universities remove direct enrolment fee barrier",
              keywords: ["registration fees", "upfront", "matrícula", "gratuidad"],
            },
            {
              point: "Limitation 1: indirect living costs (transport, rent, need to work while studying)",
              keywords: ["indirect", "living expenses", "part-time", "costes indirectos"],
            },
            {
              point: "Limitation 2: unequal prior schooling quality / lack of family networks or cultural capital",
              keywords: ["uneven", "networks", "graduation", "capital cultural"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant cultural or structural analysis.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes one initiative superficially without evaluating persistent structural barriers.",
              indicators: ["Mentions free laptops or free tuition only"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Nuanced HL evaluation linking concrete Hispanophone policies to persistent socioeconomic constraints.",
              indicators: ["Covers both policies AND two distinct structural limitations"],
            },
          ],
          hints: [
            "Separate the direct benefit of each policy (*conectividad universal* and *eliminación de matrícula*) from hidden barriers (*costes indirectos, desigualdad educativa previa*).",
            "Think about why free tuition does not automatically equalize graduation rates.",
          ],
          commonError: "Assuming free university tuition automatically guarantees equal graduation rates across all income brackets.",
        },
        {
          id: "4-organizacion-social-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "instituciones-desigualdad-hl",
          marks: 4,
          question:
            "[HL] Upgrade this Band 6–7 Spanish paragraph into **Band 11–12 HL institutional prose** (approx. 80–100 words), incorporating **De haber + participio**, **condicional compuesto**, **de ahí que + subjuntivo**, and **nominalisation**:\n*«Si el gobierno hubiera controlado los contratos falsos antes, muchos jóvenes no habrían perdido sus derechos. Por eso es muy importante cambiar la ley laboral ahora para proteger a la gente.»*",
          modelAnswer:
            "De haberse reforzado la inspección laboral con anterioridad frente a la economía sumergida y los falsos autónomos, se habrían salvaguardado los derechos sociales de miles de jóvenes trabajadores. La persistente precariedad frena la emancipación y debilita el ascensor social; de ahí que resulte imprescindible acometer una reforma estructural del estatuto laboral que garantice contratos estables y protección efectiva.",
          markScheme: [
            {
              point: "Accurate C1 condensed conditional (De haber / De haberse + participio)",
              keywords: ["de haber", "de haberse"],
            },
            {
              point: "Accurate condicional compuesto evaluating past policy impact",
              keywords: ["habrían salvaguardado", "habrían protegido", "habrían evitado", "habría"],
            },
            {
              point: "Accurate use of de ahí que followed by subjunctive (resulte / sea)",
              keywords: ["de ahí que resulte", "de ahí que sea"],
            },
            {
              point: "Elevated C1 nominalisation & lexicon (economía sumergida, precariedad, reforma estructural)",
              keywords: ["economía sumergida", "reforma estructural", "ascensor social", "precariedad"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Remains unedited or contains severe grammatical breakdown.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Attempts one or two upgrades, but misses subjunctive after de ahí que or keeps conversational phrasing.",
              indicators: ["Writes de ahí que es", "Minimal lexical upgrade"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Authoritative C1 prose combining all four requested HL devices smoothly and accurately.",
              indicators: ["Natural nominalisation", "Flawless compound conditional and subjunctive"],
            },
          ],
          hints: [
            "Swap *Si el gobierno hubiera...* for **De haber(se) + participio**.",
            "Convert *cambiar la ley laboral* into the nominalised phrase **una reforma estructural del estatuto laboral**.",
            "Verify that **de ahí que** is followed immediately by the **subjunctive** (*resulte* or *sea*).",
          ],
          commonError: "Writing *de ahí que es imprescindible* (indicative instead of subjunctive) after *de ahí que*.",
        },
        {
          id: "4-organizacion-social-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "ley-orden-ciudadania",
          marks: 6,
          question:
            "Write a short **artículo de opinión** excerpt in Spanish (140–170 words) evaluating whether lowering the optional voting age to 16 (as in Argentina and Ecuador) strengthens civic democracy. Include a **headline**, **two contrasting viewpoints**, **one Type 2 `si`-clause**, and a **clear personal conclusion**.",
          modelAnswer:
            "**¿Votar a los dieciséis? El reto de rejuvenecer la democracia**\n\nEn países como Argentina y Ecuador, los adolescentes de dieciséis años ya pueden acudir a las urnas de forma voluntaria. Quienes defienden esta medida sostienen que los jóvenes pagan impuestos indirectos, sufren las consecuencias de las reformas educativas y merecen voz propia en las decisiones que moldearán su futuro. Asimismo, la participación temprana fomenta hábitos cívicos duraderos.\n\nNo obstante, los críticos advierten que, sin una sólida formación en pensamiento crítico y verificación de bulos, el electorado adolescente podría resultar vulnerable a la manipulación en redes sociales. Si los institutos integraran talleres obligatorios de debate cívico y alfabetización mediática desde los catorce años, el voto juvenil fortalecería la calidad democrática en lugar de polarizarla.\n\nEn definitiva, ampliar el derecho al voto a los dieciséis años solo dará frutos si camina de la mano de una educación cívica rigurosa.",
          markScheme: [
            {
              point: "Engaging opinion-article headline framing the debate",
              keywords: ["rejuvenecer", "democracia"],
            },
            {
              point: "Cultural reference to authentic Hispanophone precedent (Argentina / Ecuador)",
              keywords: ["argentina", "ecuador"],
            },
            {
              point: "Substantive argument in favour (stake in education / lifelong civic habits)",
              keywords: ["hábitos cívicos", "voz propia", "reformas educativas"],
            },
            {
              point: "Substantive counter-argument (media literacy / manipulation risk on social networks)",
              keywords: ["bulos", "manipulación", "redes sociales"],
            },
            {
              point: "Accurate Type 2 si-clause proposing an educational safeguard",
              keywords: ["integraran", "fortalecería"],
            },
            {
              point: "Balanced, persuasive editorial conclusion synthesizing both sides",
              keywords: ["en definitiva", "educación cívica", "frutos"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Off-topic or does not engage with the voting-age debate.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic one-sided opinion lacking article conventions or accurate hypothetical grammar.",
              indicators: ["No headline", "Repeats 'es bueno/malo'"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear opinion article with headline, two viewpoints, and mostly accurate B2 Spanish.",
              indicators: ["Mentions both sides", "Minor subjunctive/conditional slips"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Compelling IB artículo de opinión blending Hispanophone cultural context, nuanced counter-argument, flawless Type 2 si-clause, and crisp synthesis.",
              indicators: ["Authentic journalistic register", "Cohesive discourse markers"],
            },
          ],
          hints: [
            "Open with an engaging journalistic headline (*¿Votar a los dieciséis?...*).",
            "Anchor your argument in real Latin American precedents (Argentina & Ecuador).",
            "Link the debate to civic education and media literacy using a Type 2 `si`-clause.",
          ],
          commonError: "Forgetting the journalistic headline or failing to represent the counter-argument fairly.",
        },
        {
          id: "4-organizacion-social-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "instituciones-desigualdad-hl",
          marks: 6,
          question:
            "[HL] Write the **counter-argument and feasibility section** (130–160 words) of a formal HL *propuesta* advocating paid internships (*prácticas remuneradas*) and banning unpaid corporate traineeships. Use **Si bien es cierto que...**, **no obstante**, **de ahí que + subjuntivo**, and **condicional de cortesía**.",
          modelAnswer:
            "**Viabilidad económica y respuesta a posibles objeciones**\n\nSi bien es cierto que la obligatoriedad de remunerar todas las prácticas laborales supondría un coste adicional para las pequeñas y medianas empresas, no obstante, mantener esquemas gratuitos perpetúa una brecha socioeconómica inadmisible: solo quienes cuentan con respaldo familiar pueden permitirse trabajar sin ingresos. A medio plazo, las empresas que retribuyen dignamente a sus becarios registran menor rotación y retienen talento cualificado.\n\nPor consiguiente, convendría establecer bonificaciones fiscales temporales para las pymes que contraten estudiantes en prácticas, así como una supervisión estricta contra la economía sumergida. De ahí que resulte indispensable que el Ministerio coordine incentivos económicos con la regulación laboral, garantizando que el mérito —y no el origen familiar— determine el acceso al primer empleo.",
          markScheme: [
            {
              point: "Concedes budgetary/SME objection politely with Si bien es cierto que + conditional",
              keywords: ["si bien es cierto", "supondría", "pymes"],
            },
            {
              point: "Pivots using no obstante to critique socioeconomic exclusion of unpaid internships",
              keywords: ["no obstante", "brecha socioeconómica", "respaldo familiar"],
            },
            {
              point: "Presents economic/retention benefit for employers to strengthen feasibility",
              keywords: ["rotación", "talento cualificado", "medio plazo"],
            },
            {
              point: "Uses conditional of courtesy (convendría / cabría / sería oportuno) to suggest tax incentives",
              keywords: ["convendría", "bonificaciones fiscales"],
            },
            {
              point: "Uses de ahí que + subjunctive accurately (resulte / sea)",
              keywords: ["de ahí que resulte", "indispensable"],
            },
            {
              point: "Links reform to meritocracy / social mobility at closing",
              keywords: ["mérito", "origen familiar", "primer empleo"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No counter-argument or feasibility evaluation presented.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Dismissive or one-sided tone; omits requested HL connectors or misuses mood.",
              indicators: ["Uses informal/blunt phrasing", "Indicative after de ahí que"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Sound formal refutation addressing SME costs with mostly accurate C1 structures.",
              indicators: ["Includes concession + pivot", "Minor lexical or agreement slips"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Band 10–12 HL institutional persuasion: diplomatic concession, concrete fiscal feasibility, flawless C1 syntax, and social-mobility framing.",
              indicators: ["Zero register leaks", "Seamless cohesion"],
            },
          ],
          hints: [
            "Acknowledge small-business cost concerns (*pymes*) before showing why unpaid work excludes lower-income graduates.",
            "Offer a realistic feasibility bridge (*bonificaciones fiscales*) using **convendría**.",
            "Finish with **de ahí que + subjuntivo** connecting the reform to meritocracy.",
          ],
          commonError: "Dismissing employer concerns aggressively instead of conceding and offering a practical fiscal compromise.",
        },
        {
          id: "4-organizacion-social-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "instituciones-desigualdad-hl",
          marks: 8,
          question:
            "[HL] Draft a structured **carta formal** in Spanish (220–260 words, condensed HL exam model) addressed to the *Consejero de Vivienda y Juventud* proposing two policies to tackle delayed youth emancipation (*emancipación tardía*). Include: full formal header/salutation (`:`), **usted** consistency, **Type 3 / `De haber + participio` critique**, **two numbered policies**, **counter-argument**, and **diplomatic closing**.",
          modelAnswer:
            "Valencia, 14 de noviembre de 2026\n\nSr. D. Javier Serrano\nConsejero de Vivienda y Juventud\n\nAsunto: Propuesta ciudadana para facilitar la emancipación juvenil\n\nEstimado Sr. Consejero:\n\nMe dirijo a usted en representación del Consejo Estudiantil Autonómico para trasladarle nuestra profunda inquietud ante la crisis habitacional que afronta la juventud. Según los últimos datos oficiales, el coste del alquiler absorbe más de la mitad del salario medio juvenil, bloqueando el ascensor social. De haberse promovido un parque estable de vivienda pública hace una década, se habría mitigado drásticamente el retraso de la emancipación por encima de los treinta años.\n\nPor consiguiente, nos permitimos someter a su consideración dos medidas prioritarias:\n1. **Ampliación del alquiler social juvenil:** Rehabilitar inmuebles municipales vacíos con rentas limitadas al treinta por ciento de los ingresos netos.\n2. **Avales públicos sin intereses:** Eliminar la barrera de las fianzas iniciales para jóvenes con contrato de FP Dual o primer empleo.\n\nSi bien es cierto que ambas iniciativas exigirían una reasignación presupuestaria inicial, no obstante, fomentarían la retención de talento y frenarían la fuga de cerebros. De ahí que resulte urgente que su Consejería abra una mesa de diálogo con las asociaciones juveniles.\n\nAgradeciendo de antemano su atención, quedo a su entera disposición para mantener una reunión informativa.\n\nLe saluda atentamente,\nClara Mendoza\nPortavoz del Consejo Estudiantil",
          markScheme: [
            {
              point: "Complete formal letter layout (place/date, recipient, Asunto, salutation with colon)",
              keywords: ["asunto:", "estimado sr."],
            },
            {
              point: "100% consistent formal usted register throughout (le, su, usted)",
              keywords: ["me dirijo a usted", "trasladarle", "su consideración"],
            },
            {
              point: "Accurate C1 past policy critique using De haber(se) + participio and condicional compuesto",
              keywords: ["de haberse promovido", "se habría mitigado"],
            },
            {
              point: "Policy 1 clearly formulated and numbered (social housing / capped rents)",
              keywords: ["alquiler social", "inmuebles municipales"],
            },
            {
              point: "Policy 2 clearly formulated and numbered (public guarantees / deposit support)",
              keywords: ["avales públicos", "fianzas iniciales"],
            },
            {
              point: "Balanced counter-argument & refutation (Si bien es cierto que..., no obstante...)",
              keywords: ["si bien es cierto", "fuga de cerebros"],
            },
            {
              point: "Accurate C1 subjunctive trigger (de ahí que resulte urgente que... abra)",
              keywords: ["de ahí que resulte", "mesa de diálogo"],
            },
            {
              point: "Authentic diplomatic closing and institutional signature",
              keywords: ["entera disposición", "saluda atentamente"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Fails to adopt formal letter conventions or address youth housing.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Informal or inconsistent register; lacks formal layout and complex verb structures.",
              indicators: ["Uses comma after greeting", "Mixes tú and usted"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Recognizable carta formal with relevant housing ideas, though lacking HL C1 structures or balanced counter-argument.",
              indicators: ["Basic B1–B2 syntax", "No De haber + participio or counter-argument"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Strong formal letter with consistent usted, numbered policies, and mostly accurate complex structures.",
              indicators: ["Minor tense or accent slips", "Clear institutional tone"],
            },
            {
              band: "7–8",
              marks: [7, 8],
              descriptor: "Exemplary Band 10–12 HL carta formal: complete layout, flawless usted register, C1 counterfactual critique, nuanced feasibility refutation, and authoritative cohesion.",
              indicators: ["Zero register leaks", "Authentic Hispanophone socioeconomic framing"],
            },
          ],
          hints: [
            "Start with **City + Date**, **Recipient**, **Asunto:**, and **Estimado Sr. Consejero:** (colon!).",
            "Weave **De haberse + participio → se habría + participio** into the diagnosis paragraph.",
            "Present two clearly numbered, realistic housing reforms before conceding budget constraints with **Si bien es cierto que..., no obstante...**.",
            "Finish with **Quedo a su entera disposición** + **Le saluda atentamente,**.",
          ],
          commonError: "Omitting the *Asunto* line, slipping into *tú* in the closing, or forgetting the subjunctive after *de ahí que*.",
        },
        {
          id: "4-organizacion-social-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "To what extent",
          guideRef: "instituciones-desigualdad-hl",
          marks: 8,
          question:
            "[HL] *«La meritocracia educativa es un mito mientras persista la desigualdad socioeconómica.»* To what extent do you agree with this statement in the context of Spain and Latin America? Write an analytical response in Spanish (220–260 words) integrating **two Hispanophone examples**, **one mixed or Type 3 `si`-clause**, and **balanced evaluation**.",
          modelAnswer:
            "El ideal de la meritocracia sostiene que el esfuerzo académico permite a cualquier joven progresar con independencia de su origen. Sin embargo, al examinar la realidad de España y América Latina, resulta evidente que este principio funciona solo parcialmente mientras persistan profundas asimetrías estructurales.\n\nPor un lado, sería injusto negar que la educación pública ha impulsado históricamente la movilidad social. Iniciativas como el Plan Ceibal en Uruguay —que democratizó el acceso a ordenadores y conectividad en centros públicos— o la gratuidad de universidades emblemáticas como la UBA en Argentina y la UNAM en México han abierto las puertas de la formación superior a generaciones enteras de primera generación universitaria.\n\nNo obstante, el punto de partida dista mucho de ser equitativo. Las familias con mayores recursos acceden a clases particulares, idiomas en el extranjero y prácticas no remuneradas que multiplican las opciones laborales, mientras que miles de estudiantes de rentas bajas deben compatibilizar los estudios con empleos precarios en la economía sumergida. Si los Estados hubieran acompañado la gratuidad de la matrícula con becas salario suficientes y refuerzo escolar temprano en barrios vulnerables, hoy observaríamos un ascensor social mucho más ágil.\n\nEn conclusión, la meritocracia educativa no es completamente ilusoria, pero seguirá siendo incompleta hasta que las políticas públicas compensen las desigualdades de origen.",
          markScheme: [
            {
              point: "Defines the meritocratic ideal and establishes a nuanced thesis (partially valid, not absolute)",
              keywords: ["esfuerzo académico", "parcialmente", "asimetrías estructurales"],
            },
            {
              point: "Acknowledges genuine social-mobility successes of public education",
              keywords: ["movilidad social", "primera generación"],
            },
            {
              point: "Hispanophone example 1 (e.g. Plan Ceibal in Uruguay)",
              keywords: ["plan ceibal", "uruguay", "conectividad"],
            },
            {
              point: "Hispanophone example 2 (e.g. UBA in Argentina / UNAM in Mexico / FP Dual in Spain)",
              keywords: ["uba", "unam", "gratuidad"],
            },
            {
              point: "Analyses unequal starting points (private tutoring, unpaid internships vs. informal work)",
              keywords: ["clases particulares", "prácticas no remuneradas", "economía sumergida"],
            },
            {
              point: "Accurate mixed or Type 3 si-clause evaluating structural policy",
              keywords: ["hubieran acompañado", "observaríamos"],
            },
            {
              point: "Cohesive C1 register and discourse markers (sin embargo, no obstante, en conclusión)",
              keywords: ["no obstante", "en conclusión", "ascensor social"],
            },
            {
              point: "Balanced final judgement directly answering 'To what extent'",
              keywords: ["ilusoria", "incompleta", "desigualdades de origen"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Fails to address educational meritocracy or inequality.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Simplistic yes/no opinion with no Hispanophone examples and weak language control.",
              indicators: ["Generic English-transferred generalizations"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear points on both sides with one cultural example, though limited C1 syntax.",
              indicators: ["B1–B2 register", "Superficial conclusion"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Well-structured balanced argument with two cultural examples and accurate complex grammar.",
              indicators: ["Good Theme 4 lexicon", "Minor errors in subjunctive/conditional"],
            },
            {
              band: "7–8",
              marks: [7, 8],
              descriptor: "Outstanding HL synthesis: deeply informed Hispanophone evidence, nuanced 'to what extent' judgement, flawless mixed/Type 3 si-clause, and idiomatic C1 Spanish.",
              indicators: ["Explicitly weighs where meritocracy succeeds AND where structural barriers persist"],
            },
          ],
          hints: [
            "For **To what extent**, NEVER give a simplistic 100% agree/disagree—evaluate where public education succeeds AND where hidden barriers persist.",
            "Ground your analysis in two real Hispanophone cases (e.g. *Plan Ceibal* in Uruguay, *UBA / UNAM*, or *FP Dual* in Spain).",
            "Include a clean **mixed `si`-clause** (*Si los Estados hubieran... → hoy observaríamos...*) to show Band 11–12 control.",
          ],
          commonError: "Writing a purely abstract essay with zero Spanish-speaking cultural examples, or failing to make an explicit 'to what extent' judgement.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "4-organizacion-social-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "relaciones-comunidad-voluntariado",
      question:
        "Convert this entire bolded informal affirmative imperative + enclitic pronoun into formal **usted** with exact accentuation (1 word): *«Señora concejala, **cuéntanos** qué medidas aprobará el Ayuntamiento.»*",
      answer: { type: "text", accept: ["cuéntenos"], display: "cuéntenos" },
      traps: [
        { spec: { type: "text", accept: ["cuentenos"] }, feedback: "Accent mark required! Attaching «nos» creates an esdrújula word: cuéntenos." },
        { spec: { type: "text", accept: ["nos cuente"] }, feedback: "In affirmative imperatives, pronouns MUST attach to the end of the verb: cuéntenos." },
      ],
      hints: [
        "Form the *usted* imperative of stem-changing *contar* (*o → ue*): **cuente**.",
        "Attach **nos** directly to the affirmative imperative and preserve the stress on *cuén-* with a written tilde.",
      ],
      solution: [
        "*Contar* (usted imperative) = **cuente**.",
        "Attach pronoun *nos* → esdrújula stress on *cuén-* → **cuéntenos**.",
      ],
      commonError: "Forgetting the written accent on *cuéntenos* or leaving the *-a-* vowel from *tú* (*cuéntanos*).",
    },
    {
      id: "4-organizacion-social-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "instituciones-desigualdad-hl",
      question:
        "[HL] Complete this complex policy evaluation combining **condicional compuesto** of **poner** (irregular participle) + **en marcha** (2 words for the verb only): *«De haber contado con consenso parlamentario en 2021, el ministerio ______ ______ en marcha la reforma de la FP mucho antes.»*",
      answer: { type: "text", accept: ["habría puesto"], display: "habría puesto" },
      traps: [
        { spec: { type: "text", accept: ["habría ponido"] }, feedback: "«Poner» has an irregular past participle: puesto." },
        { spec: { type: "text", accept: ["hubiera puesto"] }, feedback: "Use «habría» in the main clause, not «hubiera»." },
      ],
      hints: [
        "Main clause after *De haber contado* takes **habría + participio**.",
        "Use the irregular participle of *poner* (**puesto**).",
      ],
      solution: [
        "3rd person singular conditional of *haber* (**habría**) + irregular participle **puesto** = **habría puesto**.",
      ],
      commonError: "Using *hubiera puesto* in the main clause or regularising *puesto* as *ponido*.",
    },
    {
      id: "4-organizacion-social-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "ley-orden-ciudadania",
      question:
        "Complete this **nosotros** imperfect subjunctive form of irregular **reducir** (1 word, with exact Spanish accent): *«Si ______ la brecha salarial en un diez por ciento, crecería el bienestar familiar.»*",
      answer: { type: "text", accept: ["redujéramos", "redujésemos"], display: "redujéramos" },
      traps: [
        { spec: { type: "text", accept: ["reducieramos", "reduciéramos"] }, feedback: "*-ducir* verbs use the irregular preterite stem *-duj-* (redujeron → redujéramos, no 'c' or 'i')." },
        { spec: { type: "text", accept: ["redujeramos"] }, feedback: "Every nosotros imperfect subjunctive form carries a mandatory accent before -ramos: redujéramos." },
      ],
      hints: [
        "Start from 3rd-person plural preterite of *reducir*: **redujeron** (irregular *-duj-* stem!).",
        "Drop *-ron*, add *-ramos* (or *-semos*), and place the mandatory tilde on the **é**.",
      ],
      solution: [
        "Preterite *ellos redujeron* → stem *reduje-* → *nosotros* form with mandatory esdrújula accent: **redujéramos** (or **redujésemos**).",
      ],
      commonError: "Writing *reduciéramos* (forgetting *-duj-*) or omitting the accent mark on *é*.",
    },
    {
      id: "4-organizacion-social-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "relaciones-comunidad-voluntariado",
      marks: 6,
      question:
        "Critically evaluate the statement: *«El voluntariado juvenil resuelve la desigualdad social mejor que las políticas públicas.»* Write a cohesive Spanish response (150–180 words) weighing the strengths of NGOs (such as TECHO or Cruz Roja) against the structural obligations of the State.",
      modelAnswer:
        "El voluntariado juvenil desempeña un papel insustituible en la cohesión comunitaria. Organizaciones como TECHO en América Latina o Cruz Roja Juventud en España responden con agilidad ante emergencias, fortalecen el tejido asociativo y despiertan una conciencia cívica profunda entre los adolescentes que difícilmente se aprende solo en el aula.\n\nSin embargo, afirmar que la acción voluntaria sustituye eficazmente a las políticas públicas resulta arriesgado. Mientras que las ONGs dependen de donaciones variables y esfuerzos puntuales, únicamente el Estado posee la capacidad fiscal y legal para garantizar derechos universales como la vivienda digna, la sanidad o las becas educativas. Si la sociedad delegara toda la protección social en el asistencialismo voluntario, se cronificaría la desigualdad estructural.\n\nEn suma, el voluntariado y las instituciones públicas no compiten entre sí, sino que deben complementarse: el primero aporta cercanía humana e innovación social, mientras que el segundo asegura justicia redistributiva permanente.",
      markScheme: [
        {
          point: "Recognizes genuine strengths of youth volunteering (agility, civic awareness, tejido asociativo)",
          keywords: ["tejido asociativo", "agilidad", "conciencia cívica"],
        },
        {
          point: "Cites authentic Hispanophone NGO example (TECHO / Cruz Roja / Cáritas)",
          keywords: ["techo", "cruz roja"],
        },
        {
          point: "Identifies structural limits of NGOs (variable funding / short-term scope)",
          keywords: ["donaciones", "esfuerzos puntuales", "variables"],
        },
        {
          point: "Explains unique fiscal/legal capacity of public institutions to guarantee universal rights",
          keywords: ["capacidad fiscal", "derechos universales", "vivienda"],
        },
        {
          point: "Uses accurate Type 2 si-clause highlighting risk of relying solely on charity/asistencialismo",
          keywords: ["delegara", "asistencialismo", "cronificaría"],
        },
        {
          point: "Draws a nuanced synthesis concluding complementarity rather than replacement",
          keywords: ["complementarse", "justicia redistributiva", "en suma"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Does not evaluate volunteering versus public policy.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Unbalanced praise or dismissal with basic vocabulary.",
          indicators: ["No NGO examples", "No structural critique"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Balanced SL evaluation citing at least one NGO and contrasting it with state responsibilities.",
          indicators: ["Clear structure", "Some B2 civic lexicon"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Incisive B2–C1 evaluation distinguishing solidarity from asistencialismo with authentic Hispanophone NGOs and flawless conditional syntax.",
          indicators: ["Explicit complementarity synthesis", "Precise socio-political lexicon"],
        },
      ],
      hints: [
        "Praise real NGO strengths (*TECHO, Cruz Roja, tejido asociativo*) first so your evaluation is fair.",
        "Contrast temporary charitable efforts (*asistencialismo*) with permanent universal rights funded through taxes.",
        "Conclude that NGOs and the State are **complementary**, not mutually exclusive.",
      ],
      commonError: "Attacking volunteering outright instead of explaining why NGOs complement—but cannot replace—public institutions.",
    },
    {
      id: "4-organizacion-social-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      guideRef: "educacion-mundo-laboral",
      marks: 6,
      question:
        "Write an analytical Spanish response (150–180 words) comparing a **four-day working week** (*jornada laboral de cuatro días*) with **flexible remote work** (*teletrabajo flexible*) as strategies for improving *la conciliación laboral y familiar* in Spain.",
      modelAnswer:
        "Ante el creciente agotamiento profesional, tanto la jornada laboral de cuatro días como el teletrabajo flexible se plantean como vías para mejorar la conciliación laboral y familiar en España, aunque presentan alcances distintos.\n\nPor una parte, la semana de cuatro días reduce de forma tangible las horas trabajadas, concediendo un día completo libre que beneficia la salud mental, el cuidado familiar y el consumo local. Además, puede aplicarse en sectores presenciales como el comercio o la industria donde trabajar desde casa resulta inviable. No obstante, concentrar objetivos en menos días puede elevar la presión diaria o exigir costes adicionales a las pymes.\n\nPor otra parte, el teletrabajo flexible ahorra desplazamientos urbanos y permite repoblar la España vaciada sin reducir la jornada total; sin embargo, sin un estricto cumplimiento del derecho a la desconexión digital, diluye la frontera entre oficina y hogar.\n\nEn conclusión, un modelo híbrido adaptado a cada sector lograría una conciliación más equitativa que aplicar una fórmula única.",
      markScheme: [
        {
          point: "Analyses concrete advantage of 4-day week (mental health / care time / works for in-person sectors)",
          keywords: ["salud mental", "presenciales", "cuidado familiar"],
        },
        {
          point: "Identifies limitation of 4-day week (daily work intensity / cost pressure on SMEs)",
          keywords: ["presión diaria", "pymes", "costes adicionales"],
        },
        {
          point: "Analyses concrete advantage of flexible remote work (commuting / revitalizing rural España vaciada)",
          keywords: ["desplazamientos", "españa vaciada", "repoblar"],
        },
        {
          point: "Identifies risk of remote work (erosion of right to digital disconnection / blurred boundaries)",
          keywords: ["desconexión digital", "frontera", "hogar"],
        },
        {
          point: "Uses explicit comparative discourse markers (por una parte / por otra parte / sin embargo)",
          keywords: ["por una parte", "por otra parte", "no obstante"],
        },
        {
          point: "Synthesizes a nuanced sector-specific or hybrid conclusion",
          keywords: ["modelo híbrido", "cada sector", "en conclusión"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Fails to compare the two workplace reforms.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Describes only one reform or lists brief points without direct comparison.",
          indicators: ["No drawback analysis"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear comparison covering pros and cons of both reforms in accurate B2 Spanish.",
          indicators: ["Uses comparative connectors", "Mentions conciliación"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sophisticated B2–C1 comparison factoring in in-person vs. office sectors, España vaciada, desconexión digital, and SME feasibility.",
          indicators: ["Strong lexical range", "Balanced hybrid synthesis"],
        },
      ],
      hints: [
        "Highlight one key contrast: a 4-day week can reach **in-person workers** (*sectores presenciales*), whereas remote work mostly reaches office workers.",
        "Link remote work to **la España vaciada** and **el derecho a la desconexión digital**.",
      ],
      commonError: "Describing each policy in isolation without contrasting their applicability across different job sectors.",
    },
    {
      id: "4-organizacion-social-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Synthesize",
      guideRef: "ley-orden-ciudadania",
      marks: 6,
      question:
        "[HL] Draft a persuasive **discurso** excerpt in Spanish (150–180 words) to be delivered to a regional youth parliament arguing for **participatory municipal budgets** (*presupuestos participativos*) open to citizens from age 16. Include **direct oral address**, **rhetorical questions**, and **both a Type 1 and a Type 2 `si`-clause**.",
      modelAnswer:
        "Estimados representantes y jóvenes parlamentarios:\n\n¿Cuántas veces hemos oído que a nuestra generación no le interesa la política, mientras se nos excluye de las decisiones que transforman nuestros barrios? Hoy vengo a defender una reforma sencilla pero transformadora: abrir los presupuestos participativos municipales a partir de los dieciséis años.\n\nNo pedimos privilegios, sino corresponsabilidad. Quienes utilizamos diariamente las bibliotecas, las pistas deportivas y el transporte urbano conocemos de primera mano sus carencias. Si los ayuntamientos nos permitieran proponer y votar proyectos vecinales desde el instituto, disminuiría drásticamente la desafección institucional que hoy preocupa a toda Europa. Asimismo, si aprobamos esta medida piloto en diez municipios este año, demostraremos con datos reales que la juventud responde con madurez cuando se confía en ella.\n\nSeñorías, la democracia no se hereda pasivamente: se practica. Concedamos a los jóvenes una voz vinculante y construiremos ciudades más justas para todos. Muchas gracias.",
      markScheme: [
        {
          point: "Authentic speech opening addressing a parliamentary/youth audience",
          keywords: ["estimados representantes", "parlamentarios"],
        },
        {
          point: "Effective rhetorical question engaging listeners orally",
          keywords: ["¿cuántas veces", "excluye"],
        },
        {
          point: "Accurate Type 2 si-clause (Si + imperfecto de subjuntivo → condicional simple)",
          keywords: ["permitieran", "disminuiría"],
        },
        {
          point: "Accurate Type 1 si-clause (Si + presente de indicativo → futuro simple)",
          keywords: ["aprobamos", "demostraremos"],
        },
        {
          point: "High-level civic lexicon (corresponsabilidad, desafección institucional, voz vinculante)",
          keywords: ["corresponsabilidad", "desafección institucional", "vinculante"],
        },
        {
          point: "Memorable oral closing with inclusive nosotros imperative and thank-you",
          keywords: ["concedamos", "muchas gracias", "señorías"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Does not adopt speech conventions or address participatory budgets.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Reads like a flat essay without oral audience engagement or accurate si-clauses.",
          indicators: ["No salutation or thank-you", "Missing rhetorical devices"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Recognizable speech with clear arguments and one accurate si-clause.",
          indicators: ["Direct audience address", "Minor tense or register slips"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Compelling HL discurso combining rhetorical flair, inclusive call to action, C1 civic lexicon, and both Type 1 and Type 2 si-clauses flawlessly.",
          indicators: ["Strong oral cadence", "Zero grammatical slips in conditional structures"],
        },
      ],
      hints: [
        "Make it SOUND spoken: open with *Estimados representantes:* / *Señorías*, include a rhetorical question, and close with an inclusive call to action + *Muchas gracias*.",
        "Check BOTH conditionals carefully: Type 2 (`permitieran → disminuiría`) AND Type 1 (`aprobamos → demostraremos`).",
      ],
      commonError: "Writing a silent analytical essay with zero direct audience address or oral closing.",
    },
    {
      id: "4-organizacion-social-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Examine",
      guideRef: "instituciones-desigualdad-hl",
      marks: 8,
      question:
        "[HL] Examine the social and institutional consequences of **la economía sumergida / informal** across Latin America and Spain, and outline **two** realistic policy strategies to promote formal employment. Write in Spanish (220–260 words) using **at least one `De haber + participio` clause**, **pasiva refleja**, and **C1 connectors**.",
      modelAnswer:
        "La economía sumergida —conocida en América Latina como sector informal— constituye uno de los mayores obstáculos para la cohesión social y el estado de derecho en el mundo hispanohablante. En numerosos países latinoamericanos supera el cuarenta por ciento de la población activa, y en España persiste especialmente en sectores estacionales como la hostelería o los cuidados.\n\nSus consecuencias resultan doblemente nocivas. En el plano individual, se priva a millones de trabajadores de cotizaciones a la seguridad social, pensiones futuras, baja médica y protección frente al despido arbitrario, perpetuando la precariedad intergeneracional. En el plano institucional, la evasión fiscal reduce drásticamente la recaudación estatal, debilitando la financiación de hospitales, escuelas públicas y becas. De haberse simplificado los trámites administrativos y fortalecido la inspección hace décadas, se habrían integrado en la legalidad centenares de miles de microempresas familiares.\n\nPor consiguiente, combatir la informalidad exige superar las medidas puramente sancionadoras mediante una doble estrategia:\n1. **Incentivos progresivos a la formalización:** Reducir las cuotas iniciales para jóvenes emprendedores y microempresas durante sus dos primeros años.\n2. **Digitalización transparente y control laboral:** Facilitar altas rápidas en línea acompañadas de inspecciones focalizadas en sectores vulnerables.\n\nDe ahí que convenga combinar apoyo fiscal y vigilancia eficaz para transformar el trabajo precario en ciudadanía plena.",
      markScheme: [
        {
          point: "Contextualizes informal economy across both Latin America and Spain accurately",
          keywords: ["sector informal", "hostelería", "población activa"],
        },
        {
          point: "Explains individual worker consequences (no social security, pensions, or dismissal protection)",
          keywords: ["seguridad social", "pensiones", "despido arbitrario"],
        },
        {
          point: "Explains institutional consequences (lower tax revenue hurting schools, healthcare, grants)",
          keywords: ["evasión fiscal", "recaudación", "hospitales"],
        },
        {
          point: "Uses pasiva refleja / impersonal voice accurately (se priva / se habrían integrado)",
          keywords: ["se priva", "se habrían integrado"],
        },
        {
          point: "Uses C1 De haber(se) + participio paired with condicional compuesto",
          keywords: ["de haberse simplificado", "microempresas"],
        },
        {
          point: "Proposes Policy 1: progressive fiscal/social-contribution incentives for young/small businesses",
          keywords: ["cuotas iniciales", "emprendedores", "incentivos progresivos"],
        },
        {
          point: "Proposes Policy 2: digital simplification plus targeted labour inspection",
          keywords: ["digitalización", "inspecciones focalizadas", "altas rápidas"],
        },
        {
          point: "Closes with C1 connector de ahí que + subjunctive (convenga / resulte)",
          keywords: ["de ahí que convenga", "ciudadanía plena"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Does not examine the informal economy or its institutional impacts.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Minimal definition of unregistered work without economic or policy depth.",
          indicators: ["No Spain/Latin America contrast", "Basic B1 syntax"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Identifies clear worker and state impacts with one policy idea, mostly accurate B2 Spanish.",
          indicators: ["Misses C1 counterfactual or pasiva refleja"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Well-developed HL analysis addressing both individual and fiscal consequences with two concrete reforms.",
          indicators: ["Accurate complex structures with minor slips"],
        },
        {
          band: "7–8",
          marks: [7, 8],
          descriptor: "Exceptional C1 HL analysis integrating cross-regional insight, flawless De haber + participio, pasiva refleja, realistic dual policy strategy, and de ahí que + subjunctive.",
          indicators: ["Balances incentives with enforcement", "Authoritative economic lexicon"],
        },
      ],
      hints: [
        "Split consequences into **individual workers** (*cotizaciones, baja médica, despido*) and **public institutions** (*recaudación fiscal, sanidad, educación*).",
        "Avoid recommending 'just punish everyone'—combine **progressive tax/registration incentives** with **targeted inspection**.",
        "Audit your C1 markers: `De haberse + participio → se habrían + participio` and `de ahí que + subjuntivo`.",
      ],
      commonError: "Focusing only on lost taxes while overlooking workers' loss of pensions, healthcare, and labour rights.",
    },
    {
      id: "4-organizacion-social-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "instituciones-desigualdad-hl",
      marks: 8,
      question:
        "[HL] Draft a complete condensed **propuesta** (230–270 words) to your city's *Concejalía de Juventud y Educación* to launch a joint **intergenerational civic & vocational mentoring network** tackling both *la soledad no deseada* and *el paro juvenil*. Follow the full **E-D-M-V-C** HL architecture.",
      modelAnswer:
        "**PROPUESTA DE INTERVENCIÓN MUNICIPAL**\n**Destinatario:** Ilma. Sra. Concejala de Juventud y Educación\n**Remitente:** Plataforma Juvenil por la Cohesión Vecinal\n**Asunto:** Creación de la Red Intergeneracional de Mentoría Laboral «Puentes Activos»\n\n**1. Diagnóstico y antecedentes**\nNuestro municipio afronta simultáneamente dos desafíos estructurales: una elevada tasa de paro juvenil entre egresados de bachillerato y FP, y un aumento preocupante de la soledad no deseada entre profesionales recién jubilados con décadas de experiencia. De haberse articulado canales formales de intercambio entre ambos colectivos años atrás, se habría aprovechado un capital humano incalculable.\n\n**2. Medidas concretas**\n- **Mentoría profesional en centros cívicos:** Emparejar a jubilados de sectores técnicos y empresariales con jóvenes solicitantes de primer empleo para revisar currículos, ensayar entrevistas y orientar itinerarios de FP Dual.\n- **Reciprocidad digital comunitaria:** A cambio, los participantes jóvenes impartirían talleres semanales de competencias digitales y gestiones bancarias en línea para las personas mayores del distrito.\n\n**3. Viabilidad y contraargumento**\nSi bien es cierto que la coordinación inicial requeriría una partida modesta para dinamizadores sociales, no obstante, el aprovechamiento de centros cívicos ya existentes mantendría el gasto bajo mínimos y generaría un alto retorno social en inserción laboral y bienestar emocional. De ahí que resulte plenamente viable iniciar una fase piloto de seis meses.\n\n**4. Cierre**\nQuedamos a su entera disposición para presentar el presupuesto detallado en una reunión técnica. Le saludamos atentamente,\nComité Coordinador de Puentes Activos",
      markScheme: [
        {
          point: "E — Institutional header (Destinatario, Remitente, Asunto)",
          keywords: ["destinatario:", "remitente:", "asunto:"],
        },
        {
          point: "D — Diagnosis linking both social problems (paro juvenil & soledad no deseada)",
          keywords: ["soledad no deseada", "profesionales recién jubilados"],
        },
        {
          point: "C1 counterfactual critique (De haberse + participio → se habría + participio)",
          keywords: ["de haberse articulado", "se habría aprovechado"],
        },
        {
          point: "M1 — Concrete vocational mentoring measure (CVs, interviews, FP Dual guidance)",
          keywords: ["mentoría profesional", "revisar currículos", "ensayar entrevistas"],
        },
        {
          point: "M2 — Reciprocal youth contribution (digital literacy workshops for seniors)",
          keywords: ["reciprocidad digital", "gestiones bancarias"],
        },
        {
          point: "V — Feasibility & diplomatic counter-argument (Si bien es cierto que..., no obstante...)",
          keywords: ["si bien es cierto", "dinamizadores sociales", "retorno social"],
        },
        {
          point: "C1 consequence subjunctive (de ahí que resulte) proposing pilot phase",
          keywords: ["de ahí que resulte", "fase piloto"],
        },
        {
          point: "C — Diplomatic formal closing with full usted consistency",
          keywords: ["entera disposición", "presupuesto detallado", "saludamos atentamente"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Fails to follow proposal conventions or link both community issues.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Informal or essay-like response lacking header, numbered sections, or concrete reciprocity.",
          indicators: ["Missing E-D-M-V-C structure", "Weak register"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear proposal addressing both issues with relevant vocabulary, though missing counter-argument or HL conditional structures.",
          indicators: ["Basic B2 cohesion", "Limited institutional authority"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Strong HL propuesta following E-D-M-V-C with consistent usted register, creative reciprocal measures, and mostly flawless complex grammar.",
          indicators: ["Clear feasibility paragraph", "Minor lexical/accent slips"],
        },
        {
          band: "7–8",
          marks: [7, 8],
          descriptor: "Model Band 11–12 HL propuesta: authentic institutional layout, innovative two-way intergenerational design, flawless De haberse + participio, diplomatic counter-argument, and de ahí que + subjunctive.",
          indicators: ["Zero tú/usted slips", "High rhetorical authority and cultural resonance"],
        },
      ],
      hints: [
        "Follow the **E-D-M-V-C** blueprint visibly using bold numbered headings.",
        "Make the programme **reciprocal** (retired professionals mentor youth for *FP Dual / entrevistas*, while youth teach digital skills to seniors).",
        "Reuse existing *centros cívicos* in your feasibility section to rebut cost objections persuasively.",
      ],
      commonError: "Proposing a one-way charity scheme instead of reciprocal mentoring, or omitting the formal header (*Destinatario / Remitente / Asunto*).",
    },
  ],
};
