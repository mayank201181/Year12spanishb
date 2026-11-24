import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: Estilos de vida, salud, bienestar y subjuntivo
  // Spread: 0×4, 1×4, 2×4, 3×3
  // ===========================================================================
  {
    id: "1-identidades-m1",
    title: "MCQ Paper 1: Estilos de vida, salud y subjuntivo",
    level: "SL",
    questions: [
      {
        id: "1-identidades-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Complete this sentence for an IB Paper 1 *artículo* on youth nutrition:\n\n*«Es imprescindible que los centros educativos _____ el consumo de bebidas azucaradas.»*",
        options: [
          "limiten",
          "limitan",
          "limitar",
          "limitaban",
        ],
        answerIndex: 0,
        explanation:
          "*Es imprescindible que* is an impersonal expression of necessity followed by `que` and a specific subject (*los centros educativos*), so it requires the **present subjunctive** (*limiten*). Using the indicative (*limitan*) ignores the WEIRDO trigger, while an infinitive (*limitar*) cannot follow `que` here.",
        hints: [
          "Spot the impersonal necessity trigger *Es imprescindible que* plus a specific subject.",
          "An *-ar* verb switches its vowel to *-e-* in the present subjunctive.",
        ],
      },
      {
        id: "1-identidades-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Which verb form accurately completes this impersonal certainty statement?\n\n*«Es innegable que el sedentarismo prolongado _____ el riesgo de enfermedades cardiovasculares.»*",
        options: [
          "aumente",
          "aumenta",
          "aumentara",
          "aumentando",
        ],
        answerIndex: 1,
        explanation:
          "Despite the prefix *in-*, *es innegable que* ('it is undeniable that') affirms 100% certainty, so it requires the **present indicative** (*aumenta*). Subjunctive (*aumente*) would only be triggered if certainty were negated (*No es innegable que...*).",
        hints: [
          "Translate *innegable* carefully: does it express doubt or certainty?",
          "Affirmative expressions of certainty (*es evidente que, es obvio que, es innegable que*) keep the indicative.",
        ],
      },
      {
        id: "1-identidades-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Choose the grammatically correct form to complete this general healthy-living slogan:\n\n*«Para proteger la salud mental, conviene _____ una rutina de sueño regular.»*",
        options: [
          "mantengamos",
          "mantenemos",
          "mantener",
          "mantuvimos",
        ],
        answerIndex: 2,
        explanation:
          "Notice there is **no `que`** and no specific subject after *conviene*: a general impersonal recommendation takes the **infinitive** (*mantener*). If `que` were inserted (*conviene que nosotros...*), then *mantengamos* would be required.",
        hints: [
          "Check carefully whether the conjunction *que* appears after *conviene*.",
          "Without *que* and a personal subject, impersonal advice uses the unconjugated verb.",
        ],
      },
      {
        id: "1-identidades-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Which irregular present subjunctive form correctly completes this health campaign sentence?\n\n*«Urge que nosotros _____ el tiempo que pasamos frente a las pantallas antes de dormir.»*",
        options: [
          "reducimos",
          "reducemos",
          "reduciamos",
          "reduzcamos",
        ],
        answerIndex: 3,
        explanation:
          "Verbs ending in *-cer/-cir* preceded by a vowel insert *-zc-* in the *yo* present indicative (*reduzco*). Dropping *-o* gives the subjunctive stem *reduzc-*, yielding *nosotros **reduzcamos*** after *urge que*.",
        hints: [
          "Derive the present subjunctive from the 1st-person singular (*yo*) present indicative of *reducir*.",
          "*Yo reduzco* keeps its *-zc-* stem across all six present subjunctive persons.",
        ],
      },
      {
        id: "1-identidades-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "estilos-vida-salud",
        question:
          "In Spanish cultural identity, what does **la sobremesa** specifically refer to?",
        options: [
          "The unhurried conversation shared around the dining table after finishing a meal.",
          "The traditional midday nap taken in rural Andalusia during hot summer afternoons.",
          "The selection of small savoury appetisers served alongside drinks before lunch.",
          "The set three-course weekday lunch menu offered at fixed prices in local cafés.",
        ],
        answerIndex: 0,
        explanation:
          "*La sobremesa* is the cherished post-meal conversation that transforms eating into a relaxed social ritual supporting community cohesion and emotional well-being. The midday nap is *la siesta*, appetisers are *las tapas*, and the weekday set lunch is *el menú del día*.",
        hints: [
          "Break down the literal compound *sobre* + *mesa*: staying around the table after eating.",
          "Do not confuse it with *la siesta*, *las tapas*, or *el menú del día*.",
        ],
      },
      {
        id: "1-identidades-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Which public-health policy pioneered by Chile (2016) and adopted across Mexico, Argentina, and Colombia targets ultraprocessed food consumption?",
        options: [
          "Banning all olive oil imports in favour of locally produced sunflower cooking oil.",
          "Placing mandatory black octagonal front-of-pack warning labels on high-sugar or high-sodium foods.",
          "Requiring every supermarket shopper to display a national medical fitness certificate at checkout.",
          "Eliminating traditional staples such as maize and beans from public primary school cafeterias.",
        ],
        answerIndex: 1,
        explanation:
          "Chile's landmark 2016 *Ley de Etiquetado* introduced stark black octagonal front-of-pack warning seals (*los sellos de advertencia*: *«ALTO EN AZÚCARES»*, *«EXCESO DE SODIO»*) alongside marketing restrictions, inspiring similar legislation across Latin America.",
        hints: [
          "Think of the bold black stop-sign shapes printed on packaged snacks in Mexico and Chile.",
          "In Spanish these labels are called *los sellos de advertencia*.",
        ],
      },
      {
        id: "1-identidades-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Which verb accurately avoids an English false-friend error in this Paper 1 sentence?\n\n*«Los institutos deben _____ emocionalmente al alumnado que sufre ansiedad académica.»*",
        options: [
          "soportar",
          "atenderse",
          "apoyar",
          "asistir",
        ],
        answerIndex: 2,
        explanation:
          "*Apoyar* (or *respaldar*) means 'to support'. *Soportar* is a notorious false friend meaning 'to endure / put up with', while *asistir* without *a* rarely means 'support' in this context (usually *asistir a* = 'to attend').",
        hints: [
          "Watch out for the classic false friend *soportar*, which means 'to tolerate/endure'.",
          "Choose the natural Spanish verb meaning 'to support' emotionally.",
        ],
      },
      {
        id: "1-identidades-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "estilos-vida-salud",
        question:
          "Complete both verbs accurately in this contrast about mental health:\n\n*«Es evidente que la presión estética _____ a muchos adolescentes, pero no es cierto que las redes sociales _____ la única causa.»*",
        options: [
          "afecte … son",
          "afecte … sean",
          "afecta … son",
          "afecta … sean",
        ],
        answerIndex: 3,
        explanation:
          "Clause 1 (*Es evidente que*) states affirmative certainty → indicative **afecta**. Clause 2 (*no es cierto que*) negates certainty, creating doubt/denial → present subjunctive **sean**.",
        hints: [
          "Test each trigger separately: affirmative certainty vs negated certainty.",
          "Only the negated half (*no es cierto que*) flips into the subjunctive.",
        ],
      },
      {
        id: "1-identidades-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "How does Bogotá's famous Sunday **Ciclovía** illustrate Theme 1 (*Identidades*) in an Individual Oral?",
        options: [
          "It turns over 120 km of urban streets into car-free corridors fostering inclusive sport and community well-being.",
          "It restricts central avenues exclusively to professional racing cyclists preparing for international road tours.",
          "It charges private club fees to residents who wish to use downtown parks for weekend exercise sessions.",
          "It replaces metropolitan bus routes permanently with elevated electric trains connecting rural farming towns.",
        ],
        answerIndex: 0,
        explanation:
          "Every Sunday since 1974, Bogotá closes over 120 km of major avenues to cars so more than 1.5 million citizens of all ages and backgrounds can cycle, walk, and exercise together — a prime Hispanophone example of public space advancing inclusive health.",
        hints: [
          "Think of how Bogotá transforms urban avenues every Sunday morning.",
          "Consider whether it promotes elite racing or egalitarian community well-being.",
        ],
      },
      {
        id: "1-identidades-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Which verb form correctly handles the stem-changing verb **dormir** in the *nosotros* present subjunctive?\n\n*«Resulta aconsejable que todos _____ al menos ocho horas antes de los exámenes.»*",
        options: [
          "dormamos",
          "durmamos",
          "duermamos",
          "dormimos",
        ],
        answerIndex: 1,
        explanation:
          "Stem-changing *-ir* verbs (*dormir, morir, sentir, pedir*) undergo a reduced vowel shift (*o → u* or *e → i*) in the *nosotros/vosotros* present subjunctive: *duerma, duermas, duerma, **durmamos**, durmáis, duerman*.",
        hints: [
          "Unlike *-ar* and *-er* stem-changers, *-ir* stem-changing verbs also change their vowel in *nosotros* subjunctive.",
          "For *dormir*, the *nosotros* subjunctive vowel reduces *o → u*, NOT *o → ue*.",
        ],
      },
      {
        id: "1-identidades-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "estilos-vida-salud",
        question:
          "Which sentence best upgrades the IGCSE phrase *«El deporte es muy bueno para no estar estresado»* into natural IB Band 10–12 Spanish?",
        options: [
          "Hacer ejercicio físico es sumamente bueno porque quita el estrés muy rápidamente.",
          "Practicar muchos deportes es una cosa excelente para las personas que tienen problemas.",
          "La práctica regular de actividad física contribuye decisivamente a mitigar la ansiedad cotidiana.",
          "El deporte ayuda un montón a los chicos jóvenes cuando se sienten nerviosos en clase.",
        ],
        answerIndex: 2,
        explanation:
          "*La práctica regular de actividad física contribuye decisivamente a mitigar la ansiedad cotidiana* employs nominalisation (*la práctica regular*), a precise academic verb (*contribuye a mitigar*), and elevated health lexis (*ansiedad cotidiana*), whereas the distractors rely on IGCSE fillers (*una cosa excelente, un montón, sumamente bueno*).",
        hints: [
          "Eliminate any choice using vague fillers like *una cosa*, *un montón*, or repetitive *muy bueno*.",
          "Look for nominalisation plus a precise verb pairing (*contribuir a mitigar*).",
        ],
      },
      {
        id: "1-identidades-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Read this short Paper 2 Reading excerpt:\n\n> *«En España, la puesta en marcha del teléfono 024 supuso un punto de inflexión al visibilizar el malestar psicológico juvenil.»*\n\nIn this context, what is the closest meaning of **un punto de inflexión**?",
        options: [
          "A temporary budgetary setback for public clinics.",
          "A formal warning issued to secondary schools.",
          "A recurring statistical error in health surveys.",
          "A decisive turning point marking lasting change.",
        ],
        answerIndex: 3,
        explanation:
          "*Un punto de inflexión* is a high-frequency B2–C1 Spanish expression meaning 'a turning point / watershed moment', here highlighting how launching Spain's 024 helpline shifted public openness about youth mental health.",
        hints: [
          "Think of the mathematical and metaphorical sense of an *inflection point* where a curve changes direction.",
          "The sentence praises the 024 helpline for making youth distress visible.",
        ],
      },
      {
        id: "1-identidades-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "estilos-vida-salud",
        question:
          "Choose the exact spelling and mood to complete this policy recommendation:\n\n*«Es fundamental que las autoridades sanitarias _____ campañas preventivas desde la infancia.»*",
        options: [
          "organicen",
          "organizen",
          "organizan",
          "organizasen",
        ],
        answerIndex: 0,
        explanation:
          "Verbs ending in *-zar* (*organizar, garantizar, sensibilizar*) change `z → c` before `e` in the present subjunctive to preserve Spanish orthography: **organicen** (never *organizen*). The main clause (*Es fundamental*) is present tense, calling for present subjunctive.",
        hints: [
          "Check Spanish spelling rules for *-zar* verbs before the letter *e*.",
          "In Spanish, *z* becomes *c* before *e* or *i* (*garanticen, organicen*).",
        ],
      },
      {
        id: "1-identidades-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "estilos-vida-salud",
        question:
          "Which Spanish adjective correctly translates 'sensible' in the sentence *«It is sensible to balance academic ambition with daily rest»*?",
        options: [
          "sensible",
          "sensato",
          "sencillo",
          "sentimental",
        ],
        answerIndex: 1,
        explanation:
          "**Sensato** means 'sensible / level-headed'. *Sensible* is a classic false friend meaning 'sensitive' (*un tema sensible* = a sensitive issue), while *sencillo* means 'simple / straightforward'.",
        hints: [
          "Beware of direct English lookalikes: *sensible* in Spanish means 'sensitive'!",
          "Look for the adjective meaning 'wise / level-headed'.",
        ],
      },
      {
        id: "1-identidades-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "estilos-vida-salud",
        question:
          "Which sentence accurately uses **para que** + subjunctive to link a public-health measure to its intended goal?",
        options: [
          "El colegio amplió el horario del gimnasio para que los alumnos pueden entrenar gratis.",
          "El colegio amplió el horario del gimnasio para que entrenar mejor cada tarde.",
          "El colegio amplía el horario del gimnasio para que los alumnos puedan entrenar sin coste.",
          "El colegio amplía el horario del gimnasio para los alumnos puedan entrenar sin coste.",
        ],
        answerIndex: 2,
        explanation:
          "*Para que* ALWAYS triggers the subjunctive when introducing a new subject (*el colegio* vs *los alumnos*): **amplía … para que los alumnos puedan**. Indicative (*pueden*) fails the ESCAPA rule, *para que + infinitive* is ungrammatical, and omitting *que* before a conjugated verb breaks clause structure.",
        hints: [
          "Recall ESCAPA: *para que* ALWAYS demands the subjunctive when a second subject follows.",
          "Check both the presence of *que* and the mood of *poder*.",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: Creencias, subculturas y diversidad lingüística
  // Spread: 0×4, 1×4, 2×3, 3×4
  // ===========================================================================
  {
    id: "1-identidades-m2",
    title: "MCQ Paper 2: Creencias, subculturas y diversidad lingüística",
    level: "SL",
    questions: [
      {
        id: "1-identidades-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "creencias-valores-subculturas",
        question:
          "What does **el sincretismo religioso** describe in Latin American cultural identity?",
        options: [
          "The historical blending of Catholic traditions with indigenous and Afro-descendant spiritual practices.",
          "The constitutional prohibition of all public religious processions across Central and South America.",
          "The complete replacement of local harvest festivals with commercial North American consumer holidays.",
          "The strict architectural standardisation of colonial cathedrals built exclusively in European Baroque style.",
        ],
        answerIndex: 0,
        explanation:
          "*El sincretismo religioso* describes the creative fusion of Catholic elements with Mesoamerican, Andean, or Afro-Caribbean cosmologies — famously reflected in Mexico's *Día de los Muertos*, Andean reverence for *la Pachamama*, and Cuban *santería*.",
        hints: [
          "Think of how *el Día de los Muertos* merges Catholic *Todos los Santos* with pre-Hispanic ancestor veneration.",
          "Focus on cultural and spiritual fusion rather than prohibition or standardisation.",
        ],
      },
      {
        id: "1-identidades-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "creencias-valores-subculturas",
        question:
          "Select the exact verb form to express a **known, observable fact** after `aunque`:\n\n*«Aunque la asistencia semanal a misa _____ en España durante las últimas décadas, las fiestas locales siguen uniendo a los barrios.»*",
        options: [
          "haya disminuido",
          "ha disminuido",
          "disminuya",
          "disminuyera",
        ],
        answerIndex: 1,
        explanation:
          "When **`aunque`** concedes a **verified real fact** ('although / even though it is true that...'), Spanish uses the **indicative** (*ha disminuido*). Subjunctive (*haya disminuido / disminuya*) would turn the clause into a hypothetical or unverified possibility ('even if').",
        hints: [
          "Check the stem: is the writer stating a real statistical trend or an imaginary scenario?",
          "Known real fact after *aunque* → indicative; hypothetical 'even if' → subjunctive.",
        ],
      },
      {
        id: "1-identidades-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "creencias-valores-subculturas",
        question:
          "Complete this **hypothetical concession** ('even if') with the grammatically accurate verb form:\n\n*«Aunque un joven no _____ las mismas ideas políticas que sus abuelos, puede mantener un vínculo afectivo muy estrecho con ellos.»*",
        options: [
          "comparte",
          "compartió",
          "comparta",
          "compartía",
        ],
        answerIndex: 2,
        explanation:
          "Here *un joven* is indefinite and the clause introduces a hypothetical concession ('even if a young person does not share...'), so **`aunque`** requires the **present subjunctive** (**comparta**).",
        hints: [
          "Notice the indefinite article *un joven*: this is a hypothetical 'even if' scenario.",
          "Drop *-o* from *comparto* and add the *-ir* subjunctive ending *-a*.",
        ],
      },
      {
        id: "1-identidades-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "creencias-valores-subculturas",
        question:
          "Complete this negated opinion statement accurately:\n\n*«No creo que las subculturas juveniles _____ necesariamente los valores familiares tradicionales.»*",
        options: [
          "destruyen",
          "destruir",
          "destruyaron",
          "destruyan",
        ],
        answerIndex: 3,
        explanation:
          "*No creo que* expresses denial/doubt and requires the **present subjunctive**. Verbs ending in *-uir* (*destruir, construir, influir*) add *-y-* to the stem (*destruyo → destruy-* + *-an* → **destruyan**).",
        hints: [
          "Negative opinion triggers (*no creo que, no pienso que*) require the subjunctive.",
          "Remember that *-uir* verbs keep the *-y-* from the *yo* form (*destruyo*).",
        ],
      },
      {
        id: "1-identidades-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "creencias-valores-subculturas",
        question:
          "What social phenomenon in contemporary Spain does **la emancipación tardía** describe?",
        options: [
          "Young adults remaining in the parental home until nearly thirty due to housing prices and precarious jobs.",
          "Teenagers leaving secondary education at sixteen to open independent agricultural cooperatives in rural towns.",
          "Elderly grandparents moving abroad permanently immediately after retiring from public sector employment.",
          "Local municipalities abolishing civil wedding ceremonies in favour of shorter digital registration procedures.",
        ],
        answerIndex: 0,
        explanation:
          "*La emancipación tardía* refers to the delayed age (averaging around 30 in Spain) at which young adults can afford to leave the parental home due to *el encarecimiento de la vivienda* (rising housing costs) and *la precariedad laboral* — a key Theme 1/4 generational issue.",
        hints: [
          "In Spanish sociology, *emanciparse* means moving out to live financially independently from one's parents.",
          "Combine that meaning with *tardía* ('late / delayed').",
        ],
      },
      {
        id: "1-identidades-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "Which phonological feature is shared by over **90% of native Spanish speakers worldwide** (all of Latin America, the Canary Islands, and parts of Andalusia)?",
        options: [
          "Distinción: pronouncing `z` and `ce/ci` as `/θ/` while keeping `s` as `/s/`.",
          "Seseo: pronouncing `z`, `ce/ci`, and `s` alike as `/s/` (so *caza* and *casa* sound identical).",
          "Ceceo: pronouncing every `s`, `z`, and `ce/ci` exclusively as an interdental `/θ/` sound.",
          "Rotacismo: replacing every syllable-initial `l` with a rolled trill `/r/` in formal speech.",
        ],
        answerIndex: 1,
        explanation:
          "**El seseo** is the majority pronunciation of the Hispanophone world (all of Latin America, the Canary Islands, and large parts of Andalusia), merging `z, ce/ci, s` into `/s/`. *Distinción* is characteristic of northern and central Peninsular Spain.",
        hints: [
          "Think of how *gracias* and *corazón* are pronounced across Mexico, Colombia, Peru, and Argentina.",
          "Its name literally echoes the letter *s*.",
        ],
      },
      {
        id: "1-identidades-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "Which Rioplatense **voseo** present indicative verb form accurately corresponds to standard *tú puedes*?",
        options: [
          "vos puedés",
          "vos puedes",
          "vos podés",
          "vos podís",
        ],
        answerIndex: 2,
        explanation:
          "Present indicative *voseo* does **not** undergo stem diphthongisation (*o → ue*): drop *-r* from *poder*, add *-s*, and stress the final vowel → **vos podés** (just like *vos tenés, vos querés, vos volvés*).",
        hints: [
          "Check the golden *voseo* rule: never diphthongise the stem in the present indicative!",
          "An *-er* verb takes the accented ending *-és*.",
        ],
      },
      {
        id: "1-identidades-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "Which co-official language of Spain is Europe's oldest living **language isolate**, completely unrelated to Latin or any Indo-European language?",
        options: [
          "El gallego",
          "El catalán",
          "El valenciano",
          "El euskera",
        ],
        answerIndex: 3,
        explanation:
          "**El euskera** (Basque), co-official in the País Vasco and northern Navarra, predates Roman arrival in Iberia and has no proven genealogical link to any other language family. *Catalán/valenciano* and *gallego* are Romance languages descended from Latin.",
        hints: [
          "Eliminate the Romance languages derived from Latin (*gallego, catalán/valenciano*).",
          "Recall the ancestral language spoken in Bilbao and San Sebastián (Donostia).",
        ],
      },
      {
        id: "1-identidades-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "Which South American country is uniquely renowned for nationwide co-official Spanish–indigenous bilingualism spoken by a majority of its citizens?",
        options: [
          "Paraguay, where *el guaraní* holds full co-official status alongside Spanish across urban and rural life.",
          "Uruguay, where *el náhuatl* is taught as the compulsory primary language in all coastal universities.",
          "Chile, where *el catalán* serves as the official administrative language of parliament and courts.",
          "Argentina, where *el euskera* is spoken as a native everyday language by over seventy percent of citizens.",
        ],
        answerIndex: 0,
        explanation:
          "In **Paraguay**, *el guaraní* is co-official nationwide under the 1992 Constitution and is spoken by the vast majority of both indigenous and non-indigenous Paraguayans (often interwoven with Spanish in *jopará*).",
        hints: [
          "Match the country to *el guaraní* — not *náhuatl* (Mexico) or European languages.",
          "It is a landlocked South American nation bordering Argentina, Brazil, and Bolivia.",
        ],
      },
      {
        id: "1-identidades-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "Which everyday set of Spanish words entered the language from **el náhuatl** (Mexico)?",
        options: [
          "almohada, ojalá, azúcar",
          "chocolate, aguacate, tomate",
          "cancha, cóndor, carpa",
          "fútbol, estrés, líder",
        ],
        answerIndex: 1,
        explanation:
          "*Chocolate* (*xocolātl*), *aguacate* (*āhuacatl*), and *tomate* (*tomatl*) all stem from Mexican **náhuatl**. *Almohada/ojalá/azúcar* are Arabic loanwords (*arabismos*), *cancha/cóndor/carpa* come from Andean **quechua**, and *fútbol/estrés/líder* are adapted English borrowings (*anglicismos*).",
        hints: [
          "Look for Mesoamerican food words whose original roots often ended in *-tl*.",
          "Separate Arabic (*al-*), Quechua (Andean), and English borrowings.",
        ],
      },
      {
        id: "1-identidades-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "In a Paper 2 Listening recording from Buenos Aires, a speaker says: *«¡Che, vení rápido que ya pasa el colectivo!»* What is the speaker urging their friend to do?",
        options: [
          "Come quickly because the local commuter train has just been cancelled.",
          "Come quickly because the shared community picnic is starting in the park.",
          "Come quickly because the city bus is already arriving at the stop.",
          "Come quickly because the neighbourhood cinema has sold out its tickets.",
        ],
        answerIndex: 2,
        explanation:
          "In Rioplatense Spanish, *¡che!* is an informal vocative ('hey!'), *¡vení!* is the *voseo* affirmative imperative of *venir* ('come!'), and **el colectivo** is the everyday Argentine word for a city bus (compare *autobús* in Spain, *camión* in Mexico, *guagua* in the Caribbean).",
        hints: [
          "Recall regional words for 'bus' across Spain, Mexico, Argentina, and the Caribbean.",
          "*¡Vení!* is the *voseo* imperative of *venir*.",
        ],
      },
      {
        id: "1-identidades-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "Why does a Paper 1 *blog* written for teenagers in Mexico City use **ustedes** rather than **vosotros** when addressing the audience?",
        options: [
          "Because Mexican bloggers are legally required to use formal aristocratic titles online.",
          "Because *vosotros* is restricted solely to literary poetry written before the nineteenth century.",
          "Because *ustedes* can only be used in Mexico when addressing strangers older than fifty.",
          "Because across all of Latin America, *ustedes* serves as both the formal and informal plural 'you'.",
        ],
        answerIndex: 3,
        explanation:
          "Across all of Latin America (and the Canary Islands), **ustedes** is the sole plural second-person pronoun for both informal friends and formal audiences; *vosotros* is used in Peninsular Spain for informal plural address.",
        hints: [
          "Check where *vosotros* is used geographically across the Hispanophone world.",
          "Does Latin American Spanish distinguish formal vs informal in the plural?",
        ],
      },
      {
        id: "1-identidades-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "creencias-valores-subculturas",
        question:
          "Which C1 sentence cleanly refutes a generational stereotype using **`Lejos de`** ('far from')?",
        options: [
          "Lejos de rechazar sus raíces, muchos jóvenes indígenas reinterpretan los tejidos tradicionales en la moda urbana.",
          "Lejos de rechazan sus raíces, muchos jóvenes indígenas reinterpretan los tejidos tradicionales en la moda urbana.",
          "Lejos de que rechazar sus raíces, muchos jóvenes indígenas reinterpretan los tejidos tradicionales en la moda urbana.",
          "Lejos de rechazando sus raíces, muchos jóvenes indígenas reinterpretan los tejidos tradicionales en la moda urbana.",
        ],
        answerIndex: 0,
        explanation:
          "The preposition phrase **`lejos de`** ('far from') takes an **infinitive** (*Lejos de rechazar...*) — never a conjugated verb, a gerund (*-ando*), or `que` + infinitive.",
        hints: [
          "In Spanish, prepositions (*de, sin, antes de, lejos de*) are followed by the infinitive, never a gerund.",
          "Check which option puts the plain infinitive directly after *lejos de*.",
        ],
      },
      {
        id: "1-identidades-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "How do modern sociolinguists evaluate **el espanglish** (*code-switching* and lexical adaptations such as *«Te llamo cuando parquee el carro»*) among US bilingual communities?",
        options: [
          "As evidence of cognitive confusion proving that children should avoid growing up bilingual.",
          "As a rule-governed expression of bicultural identity rather than a lack of grammatical competence.",
          "As an official constitutional language adopted by the Real Academia Española for legal statutes.",
          "As a temporary slang confined exclusively to elderly first-generation migrants in rural areas.",
        ],
        answerIndex: 1,
        explanation:
          "Sociolinguistic research confirms that fluent *alternancia de códigos* (*code-switching*) obeys strict syntactic rules and expresses authentic **bicultural identity** among US Hispanic communities, rather than linguistic deficiency.",
        hints: [
          "Separate prescriptivist myths ('broken Spanish') from empirical sociolinguistics.",
          "Notice that *code-switching* is neither an official legal language nor a sign of confusion.",
        ],
      },
      {
        id: "1-identidades-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "creencias-valores-subculturas",
        question:
          "In a Paper 2 Reading text on changing values in Madrid, the writer states: *«Las nuevas generaciones optan cada vez más por la ropa de segunda mano como acto de reivindicación ética.»* What does **reivindicación ética** mean here?",
        options: [
          "Unthinking conformity to seasonal luxury fashion advertisements.",
          "Legal punishment imposed by courts on textile manufacturers.",
          "Nostalgic imitation of nineteenth-century aristocratic dress codes.",
          "Principled ethical assertion or stand against wasteful consumerism.",
        ],
        answerIndex: 3,
        explanation:
          "*Reivindicación* is a high-frequency IB B2–C1 noun meaning 'claiming, asserting, or taking a principled stand for a right or value' — here framing second-hand fashion (*moda de segunda mano*) as deliberate ethical identity against *fast fashion*.",
        hints: [
          "Connect *reivindicar* to standing up for / reclaiming a cause or ethical principle.",
          "Second-hand clothing is presented as a conscious moral statement.",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: Variación, precisión léxica y registro C1 [SL & HL]
  // Spread: 0×3, 1×4, 2×4, 3×4
  // ===========================================================================
  {
    id: "1-identidades-m3",
    title: "MCQ Paper 3: Registro C1, RAE e identidad crítica [SL & HL]",
    level: "HL",
    questions: [
      {
        id: "1-identidades-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Complete this Band 11 sentence using the signature C1 consecutive connector **`de ahí que`**:\n\n*«La lengua moldea nuestra visión del mundo; de ahí que _____ esencial proteger las lenguas minoritarias.»*",
        options: [
          "sea",
          "es",
          "será",
          "siendo",
        ],
        answerIndex: 0,
        explanation:
          "The high-register connector **`de ahí que`** ('hence / which is why') ALWAYS triggers the **subjunctive** (**sea** or *resulte*). Using indicative (*es / será*) is one of the most common HL Criterion A errors.",
        hints: [
          "Recall the strict mood rule for *de ahí que*.",
          "What is the 3rd-person singular present subjunctive of *ser*?",
        ],
      },
      {
        id: "1-identidades-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Which set consists entirely of natural Spanish **epicene / collective nouns** that achieve gender inclusivity smoothly in a formal HL essay?",
        options: [
          "los/as chicos/as, todes, los amigos/as",
          "el alumnado, la ciudadanía, el profesorado",
          "los estudiantes varones, las chicas, los señores",
          "la gente buena, las cosas, los individuos todos",
        ],
        answerIndex: 1,
        explanation:
          "*El alumnado* (the student body), *la ciudadanía* (citizenship/citizens), and *el profesorado* (the teaching staff) are standard collective nouns endorsed by RAE and style guides to write inclusively while maintaining seamless academic prose.",
        hints: [
          "Look for grammatically standard collective nouns that encompass everyone without slashes or neologisms.",
          "Eliminate clunky *los/as* slashes and informal fillers (*cosas*).",
        ],
      },
      {
        id: "1-identidades-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] What does the **política panhispánica** pursued jointly by the **RAE** and **ASALE** (23 academies) affirm?",
        options: [
          "That Madrid's Castilian accent is the sole authentic standard taught in Latin American schools.",
          "That every English loanword must be legally banned from newspapers and university textbooks.",
          "That Spanish is a pluricentric language shaped collaboratively by Spain, Latin America, and the diaspora.",
          "That Spain's co-official languages should merge into a single unified Iberian vocabulary list.",
        ],
        answerIndex: 2,
        explanation:
          "Through *ASALE* (*Asociación de Academias de la Lengua Española*), the RAE and 22 sister academies across Latin America, the US, the Philippines, and Equatorial Guinea co-author dictionaries and grammars under a **pan-Hispanic, pluricentric policy** respecting educated regional norms.",
        hints: [
          "Look at the prefix *pan-* ('all / across all') + *hispánica*.",
          "Notice that 23 academies — not just Madrid — shape modern Spanish norms.",
        ],
      },
      {
        id: "1-identidades-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Which crisp Spanish alternative does **FundéuRAE** recommend in formal IB prose to replace the unadapted anglicism *«el bullying»*?",
        options: [
          "el choque juvenil",
          "la crítica académica",
          "el debate estudiantil",
          "el acoso escolar",
        ],
        answerIndex: 3,
        explanation:
          "**El acoso escolar** (and *el ciberacoso* for cyberbullying) is the natural, precise Spanish equivalent recommended by FundéuRAE and used across Hispanic legislation and journalism.",
        hints: [
          "Recall the Spanish noun for harassment (*el acoso*) paired with the adjective for school.",
          "Using native Spanish equivalents instead of unadapted English terms boosts Criterion A.",
        ],
      },
      {
        id: "1-identidades-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Which sentence demonstrates the strongest **Band 10–12 HL nominalisation and verb precision** for an essay on cultural identity?",
        options: [
          "La preservación de las lenguas originarias incide directamente en la cohesión identitaria de las comunidades andinas.",
          "Guardar las lenguas antiguas es una cosa súper importante que afecta mucho a toda la gente de los Andes.",
          "Creo que es muy bueno cuando las personas de los Andes hablan sus idiomas de antes con sus familias.",
          "Hay muchas razones buenas por las cuales los idiomas antiguos importan un montón hoy en día en Sudamérica.",
        ],
        answerIndex: 0,
        explanation:
          "Nominalising the subject (*La preservación de las lenguas originarias*) and pairing it with the C1 verb phrase *incidir directamente en* ('to have a direct impact on') delivers authoritative HL register, whereas the distractors rely on IGCSE fillers (*una cosa súper importante, un montón, creo que es muy bueno*).",
        hints: [
          "Check which option opens with a crisp abstract noun phrase (*La preservación de...*) rather than *Creo que* or *Hay*.",
          "Look for the precise verb *incidir en* instead of *afectar mucho*.",
        ],
      },
      {
        id: "1-identidades-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] In an HL *editorial*, what does the idiomatic expression **ser un arma de doble filo** mean when evaluating social media's impact on youth identity?",
        options: [
          "To have become completely obsolete among contemporary teenagers.",
          "To carry simultaneous benefits and serious risks depending on how it is used.",
          "To require immediate government censorship before causing any debate.",
          "To affect only older generations unfamiliar with smartphone apps.",
        ],
        answerIndex: 1,
        explanation:
          "*Ser un arma de doble filo* ('to be a double-edged sword') is a crisp, natural Band 10–12 idiom ideal for balanced HL evaluation — for example, noting that social media fosters global subcultural belonging while simultaneously intensifying aesthetic pressure.",
        hints: [
          "Translate *doble filo* literally: two sharp edges on a blade.",
          "Think about an expression capturing both positive empowerment and hidden danger.",
        ],
      },
      {
        id: "1-identidades-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Complete this balanced HL counter-argument sentence with the right mood after **`Si bien`** (stating a conceded fact):\n\n*«Si bien la globalización _____ el acceso a referentes culturales diversos, conviene evitar la homogeneización lingüística.»*",
        options: [
          "facilite",
          "facilitara",
          "facilita",
          "facilitar",
        ],
        answerIndex: 2,
        explanation:
          "Unlike `aunque`, which can take either mood, the formal concessive connector **`si bien`** ('although / while it is true that') ALWAYS takes the **indicative** (**facilita**) because it introduces an acknowledged fact before your counter-argument.",
        hints: [
          "*Si bien* is a formal C1 concessive introducing a real admitted point.",
          "Unlike *aunque*, *si bien* is consistently paired with the indicative mood.",
        ],
      },
      {
        id: "1-identidades-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "Which exact regional vocabulary set correctly pairs **Spain / Mexico / Argentina** for the everyday concept 'bus'?",
        options: [
          "el ordenador / la computadora / el celular",
          "el coche / la guagua / el auto",
          "el móvil / el carro / la pollera",
          "el autobús / el camión / el colectivo",
        ],
        answerIndex: 3,
        explanation:
          "City bus vocabulary is a classic Hispanophone lexical marker: **el autobús** (Spain), **el camión** (Mexico), and **el colectivo** (Argentina) — alongside *la guagua* in the Canary Islands and Hispanic Caribbean.",
        hints: [
          "Make sure all three words refer to a **bus**, not a car or computer!",
          "Recall how *camión* means 'truck' in Spain yet commonly means 'city bus' in Mexico.",
        ],
      },
      {
        id: "1-identidades-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Which Spanish verb phrase accurately translates 'to highlight / throw into sharp relief' in a formal HL *informe*?",
        options: [
          "poner de relieve",
          "quitar importancia a",
          "pasar por alto",
          "dar por sentado",
        ],
        answerIndex: 0,
        explanation:
          "**Poner de relieve** (alongside *hacer hincapié en*) means 'to highlight / bring into sharp relief'. By contrast, *quitar importancia* means 'to downplay', *pasar por alto* means 'to overlook', and *dar por sentado* means 'to take for granted'.",
        hints: [
          "Think of sculptural *relief* (*relieve*) standing out from a flat surface.",
          "Eliminate phrases meaning 'overlook', 'downplay', or 'take for granted'.",
        ],
      },
      {
        id: "1-identidades-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "lengua-identidad-hispanohablante",
        question:
          "Which Rioplatense **voseo** affirmative imperative accurately translates 'Speak honestly with your family!' (*hablar*)?",
        options: [
          "¡Habla con sinceridad con tu familia!",
          "¡Hablá con sinceridad con tu familia!",
          "¡Hablad con sinceridad con tu familia!",
          "¡Hables con sinceridad con tu familia!",
        ],
        answerIndex: 1,
        explanation:
          "To form the affirmative *voseo* imperative, drop the final *-r* from the infinitive and place a written accent on the final vowel: *hablar → **¡hablá!*** (*tener → ¡tené!*, *venir → ¡vení!*). *¡Habla!* is *tú*, while *¡hablad!* is Peninsular *vosotros*.",
        hints: [
          "Apply the *voseo* imperative formula: infinitive minus *-r*, with a tilde on the final syllable.",
          "Notice the written accent distinguishes *voseo* (*hablá*) from *tuteo* (*habla*).",
        ],
      },
      {
        id: "1-identidades-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Read this original opinion extract on diaspora identity:\n\n> *«Crecer entre dos idiomas no nos parte por la mitad; al contrario, duplica el espejo desde el cual miramos el mundo.»*\n\nWhich analytical commentary best captures the author's stance for Paper 2 Reading / IO?",
        options: [
          "The author warns that raising children bilingually halves their cultural loyalty to their parents' homeland.",
          "The author complains that migrants must abandon their heritage language to succeed in European schools.",
          "The author reframes hybrid diaspora identity as an expanded perspective rather than a divided deficit.",
          "The author argues that national academies should ban all translations between Spanish and English.",
        ],
        answerIndex: 2,
        explanation:
          "By rejecting fragmentation (*no nos parte por la mitad*) and deploying the metaphor *duplica el espejo* ('doubles the mirror'), the writer positively reframes **la identidad híbrida** as cognitive and cultural enrichment rather than loss (*carencia*).",
        hints: [
          "Look at the contrast pivoted by *al contrario*: rejecting splitting in half in favour of 'doubling the mirror'.",
          "Is the writer framing bilingual diaspora life as a loss or an asset?",
        ],
      },
      {
        id: "1-identidades-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Choose the sentence that uses **dar por sentado** accurately with the correct mood when negated:",
        options: [
          "No debemos dar por sentado que las lenguas indígenas sobreviven sin inversión pública.",
          "No debemos dar por sentado que las lenguas indígenas sobrevivir sin inversión pública.",
          "Debemos dar por sentado que las lenguas indígenas sobrevivan sin inversión pública.",
          "No debemos dar por sentado que las lenguas indígenas sobrevivan sin inversión pública.",
        ],
        answerIndex: 3,
        explanation:
          "*No dar por sentado que* ('not to take for granted that') negates certainty and triggers the **present subjunctive** (**sobrevivan**). Affirmative *dar por sentado que* would take indicative, and *que + infinitive* is ungrammatical.",
        hints: [
          "*Dar por sentado* means 'to take for granted'; negating it introduces uncertainty/denial.",
          "Negated certainty + *que* demands the subjunctive mood (*sobrevivan*).",
        ],
      },
      {
        id: "1-identidades-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] An HL Paper 1 prompt asks you to write a **formal *carta al director*** to a Madrid newspaper critiquing *glotofobia* (discrimination against regional accents). Which opening best matches **Criterion C (Audience, Register & Purpose)**?",
        options: [
          "Estimado Sr. Director: Le escribo con motivo del reciente artículo sobre los acentos regionales para denunciar la persistencia de la glotofobia en los medios audiovisuales.",
          "¡Hola a todos los lectores! Hoy quiero contaros en mi carta por qué me parece súper injusto que la gente se burle de cómo hablan los andaluces o los argentinos.",
          "Querido director: Te mando este mensajito rápido porque pienso que todos los acentos del español molan muchísimo y hay que respetarlos un montón.",
          "A quien corresponda: Este informe analiza en tres capítulos estadísticos los fonemas del español peninsular y propone una reforma escolar obligatoria.",
        ],
        answerIndex: 0,
        explanation:
          "A formal *carta al director* addressed to a newspaper editor requires **usted** (*Estimado Sr. Director: Le escribo...*), explicit reference to the prompt/article (*con motivo del reciente artículo*), and measured formal vocabulary (*denunciar la persistencia de la glotofobia*). Casual *tú/vosotros* slang (*súper injusto, molan*) destroys Criterion C, while the *informe* opening violates the text type.",
        hints: [
          "Check three Criterion C pillars: exact text type (*carta al director*), formal *usted* register, and clear purpose.",
          "Eliminate informal *vosotros/tú* slang and the wrong genre (*informe*).",
        ],
      },
      {
        id: "1-identidades-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Which high-register Spanish verb correctly completes this academic thesis on language and power?\n\n*«Discriminar a un hablante por su acento regional _____ su autoestima y perpetúa jerarquías sociales obsoletas.»*",
        options: [
          "fomenta",
          "menoscaba",
          "respalda",
          "enaltece",
        ],
        answerIndex: 1,
        explanation:
          "**Menoscaba** (from *menoscabar*, 'to undermine / erode / diminish') fits the negative impact on self-esteem (*autoestima*) cleanly in C1 prose. *Fomentar* (promote), *respaldar* (support), and *enaltecer* (exalt/praise) carry the opposite positive polarity.",
        hints: [
          "Check the semantic polarity: does accent discrimination strengthen or erode self-esteem?",
          "Look for the C1 verb meaning 'to undermine / diminish'.",
        ],
      },
      {
        id: "1-identidades-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "identidad-registro-hl",
        question:
          "[HL] Complete this nuanced HL conclusion combining **`de ahí que`** with an irregular present subjunctive of **convenir** (*3rd person singular*):\n\n*«La identidad cultural nunca es estática; de ahí que _____ fomentar un diálogo abierto entre tradición y modernidad.»*",
        options: [
          "conviene",
          "convenía",
          "convenga",
          "convenza",
        ],
        answerIndex: 2,
        explanation:
          "`De ahí que` ALWAYS demands the subjunctive. *Convenir* conjugates like *venir* (*yo vengo → convengo* → **convenga**). Do not confuse *convenga* (*convenir*, 'to be advisable') with *convenza* (*convencer*, 'to convince')!",
        hints: [
          "*Convenir* is built on *venir* (*yo convengo* → drop *-o* + *-a*).",
          "Beware the lookalike *convenza*, which comes from *convencer* ('to convince').",
        ],
      },
    ],
  },
];
