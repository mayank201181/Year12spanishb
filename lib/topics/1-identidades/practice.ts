import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 short auto-marked questions — exact Spanish orthography)
  // ===========================================================================
  quiz: [
    {
      id: "1-identidades-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "estilos-vida-salud",
      question:
        "Conjugate **fomentar** (*nosotros*, present subjunctive) to complete this healthy-lifestyle recommendation:\n\n*«Es imprescindible que _____ hábitos alimentarios equilibrados desde pequeños.»*",
      answer: {
        type: "text",
        accept: ["fomentemos"],
        display: "fomentemos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["fomentar"] },
          feedback: "Because *que* introduces a conjugated clause, you cannot use the infinitive here — use the *nosotros* present subjunctive (*fomentemos*).",
        },
      ],
      commonError:
        "Writing indicative *fomentamos* instead of present subjunctive *fomentemos* after *Es imprescindible que*.",
      solution: [
        "*Es imprescindible que* is an impersonal necessity trigger requiring the **present subjunctive**.",
        "For an *-ar* verb (*fomentar*), take stem *foment-* + *-emos* → **fomentemos**.",
      ],
      hints: [
        "Notice the impersonal necessity trigger *Es imprescindible que*.",
        "In the present subjunctive, *-ar* verbs take *-e-* endings (*nosotros* → *-emos*).",
      ],
    },
    {
      id: "1-identidades-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "estilos-vida-salud",
      question:
        "Complete with the exact present subjunctive form of **reducir** (*nosotros*):\n\n*«Urge que _____ el consumo diario de alimentos ultraprocesados.»*",
      answer: {
        type: "text",
        accept: ["reduzcamos"],
        display: "reduzcamos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["reducimos"] },
          feedback: "*Reducimos* is indicative. Start from *yo reduzco* to build the present subjunctive stem (*reduzcamos*).",
        },
        {
          spec: { type: "text", accept: ["reducir"] },
          feedback: "Because *que* introduces a conjugated clause, do not leave *reducir* in the infinitive.",
        },
      ],
      commonError:
        "Omitting the *-zc-* stem from *yo reduzco* (*reducamos* instead of *reduzcamos*).",
      solution: [
        "Start from the *yo* present indicative of *reducir*: *reduzco*.",
        "Drop *-o* → *reduzc-* + *-amos* → **reduzcamos**.",
      ],
      hints: [
        "Remember the *yo*-stem rule for *-cer/-cir* verbs (*conozco, produzco, reduzco*).",
        "Keep *-zc-* and add the *-ir* subjunctive *nosotros* ending *-amos*.",
      ],
    },
    {
      id: "1-identidades-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "estilos-vida-salud",
      question:
        "Conjugate **aumentar** (3rd person singular) in the correct mood (indicative or subjunctive):\n\n*«Es innegable que la falta crónica de sueño _____ la ansiedad en los adolescentes.»*",
      answer: {
        type: "text",
        accept: ["aumenta"],
        display: "aumenta",
      },
      traps: [
        {
          spec: { type: "text", accept: ["aumente"] },
          feedback: "Careful! *Es innegable que* ('it is undeniable that') affirms 100% certainty, so it takes the **indicative**, not the subjunctive.",
        },
      ],
      solution: [
        "*Es innegable que* expresses affirmative certainty (just like *es evidente que* and *es obvio que*).",
        "Therefore use the 3rd-person singular present indicative: **aumenta**.",
      ],
      hints: [
        "Check whether *innegable* expresses doubt or complete certainty.",
      ],
    },
    {
      id: "1-identidades-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "estilos-vida-salud",
      question:
        "Give the exact Spanish noun (with its definite article) for the unhurried post-meal conversation around the table central to Hispanic well-being and family cohesion.",
      answer: {
        type: "text",
        accept: ["la sobremesa", "sobremesa"],
        display: "la sobremesa",
      },
      traps: [
        {
          spec: { type: "text", accept: ["la siesta", "siesta"] },
          feedback: "*La siesta* is an afternoon rest/nap; the post-meal table conversation has a different name.",
        },
      ],
      solution: [
        "The Spanish cultural practice of lingering at the table to converse after eating is **la sobremesa**.",
      ],
      hints: [
        "Literally combines *sobre* ('over/at') + *mesa* ('table').",
      ],
    },
    {
      id: "1-identidades-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "creencias-valores-subculturas",
      question:
        "Complete this negated opinion statement using the present subjunctive of **destruir** (3rd person plural):\n\n*«No creo que las subculturas urbanas _____ la cohesión familiar.»*",
      answer: {
        type: "text",
        accept: ["destruyan"],
        display: "destruyan",
      },
      traps: [
        {
          spec: { type: "text", accept: ["destruir"] },
          feedback: "After *no creo que* + subject, you need the conjugated present subjunctive (*destruyan*), not the infinitive.",
        },
      ],
      commonError:
        "Using indicative *destruyen* instead of present subjunctive *destruyan* after negated *no creo que*.",
      solution: [
        "*No creo que* expresses denial/doubt and requires the present subjunctive.",
        "From *yo destruyo*, drop *-o* → *destruy-* + *-an* → **destruyan**.",
      ],
      hints: [
        "Negative opinion (*no creo que*) triggers the subjunctive.",
        "Verbs ending in *-uir* keep the *-y-* stem (*destruyo → destruy-*).",
      ],
    },
    {
      id: "1-identidades-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "lengua-identidad-hispanohablante",
      question:
        "Give the exact Rioplatense **voseo** present indicative form of **tener** (include the written accent):\n\n*«Vos _____ que cuidar mejor tu salud mental.»*",
      answer: {
        type: "text",
        accept: ["tenés"],
        display: "tenés",
      },
      traps: [
        {
          spec: { type: "text", accept: ["tienes"] },
          feedback: "*Tienes* is the *tú* form. Rioplatense *voseo* drops the diphthong and stresses the final syllable.",
        },
        {
          spec: { type: "text", accept: ["tienés"] },
          feedback: "Present indicative *voseo* NEVER keeps the *e → ie* diphthong (*tenés*, not *tienés*).",
        },
      ],
      solution: [
        "Drop *-r* from *tener* (no stem diphthong!), add *-s*, and place the tilde on the final *-e-*: **tenés**.",
      ],
      hints: [
        "Remember: *voseo* present indicative removes stem changes like *e → ie*.",
        "End with an accented *-és*.",
      ],
    },
    {
      id: "1-identidades-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "lengua-identidad-hispanohablante",
      question:
        "Name the pre-Roman **language isolate** co-official in Spain's País Vasco and northern Navarra (one Spanish word).",
      answer: {
        type: "text",
        accept: ["euskera", "el euskera", "vasco", "el vasco"],
        display: "euskera",
      },
      traps: [
        {
          spec: { type: "text", accept: ["catalán", "el catalán", "gallego", "el gallego"] },
          feedback: "*Catalán* and *gallego* are Romance languages descended from Latin, not pre-Roman language isolates.",
        },
      ],
      solution: [
        "Spain's non-Indo-European co-official language isolate is **euskera** (also called *vasco*).",
      ],
      hints: [
        "It is spoken in Bilbao and San Sebastián (Donostia).",
        "Unlike *catalán* and *gallego*, it has no Latin origin.",
      ],
    },
    {
      id: "1-identidades-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "lengua-identidad-hispanohablante",
      question:
        "Name the indigenous language that enjoys nationwide co-official status alongside Spanish in **Paraguay** (include exact Spanish accent).",
      answer: {
        type: "text",
        accept: ["guaraní", "el guaraní"],
        display: "guaraní",
      },
      traps: [
        {
          spec: { type: "text", accept: ["quechua", "el quechua"] },
          feedback: "*Quechua* is primarily Andean (Peru, Bolivia, Ecuador), not Paraguay's nationwide majority co-official language.",
        },
        {
          spec: { type: "text", accept: ["náhuatl", "el náhuatl"] },
          feedback: "*Náhuatl* is indigenous to Mexico, not Paraguay.",
        },
      ],
      solution: [
        "**Guaraní** (with a tilde on the final *í*) is co-official nationwide in Paraguay and spoken by the majority of its citizens.",
      ],
      hints: [
        "It blends with Spanish in Paraguay's everyday bilingual speech (*jopará*).",
        "Remember the written accent on the final syllable (*-í*).",
      ],
    },
    {
      id: "1-identidades-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "lengua-identidad-hispanohablante",
      question:
        "Give the exact Rioplatense **voseo** affirmative imperative of **venir** (include the written accent):\n\n*«¡_____ a merendar con nosotros!»*",
      answer: {
        type: "text",
        accept: ["vení"],
        display: "vení",
      },
      traps: [
        {
          spec: { type: "text", accept: ["ven"] },
          feedback: "*Ven* is the *tú* imperative. For *voseo*, drop the final *-r* from the infinitive and accent the final vowel.",
        },
      ],
      solution: [
        "Take the infinitive *venir*, drop *-r*, and place the tilde on the stressed final *-í*: **vení**.",
      ],
      hints: [
        "Apply the *voseo* imperative formula: infinitive minus *-r* + accent on the last vowel.",
        "Unlike *tú* (*ven*), *venir* is completely regular in the *voseo* imperative!",
      ],
    },
    {
      id: "1-identidades-quiz-q10",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "identidad-registro-hl",
      question:
        "[HL] Complete this Band 11 sentence after the C1 connector **`de ahí que`** using the present subjunctive of **ser** (3rd person singular):\n\n*«La lengua refleja la memoria colectiva; de ahí que _____ vital salvaguardar las variedades locales.»*",
      answer: {
        type: "text",
        accept: ["sea"],
        display: "sea",
      },
      traps: [
        {
          spec: { type: "text", accept: ["es"] },
          feedback: "`De ahí que` ALWAYS demands the subjunctive mood — never indicative *es*!",
        },
      ],
      solution: [
        "The C1 consecutive connector **`de ahí que`** ('hence / which is why') always triggers the subjunctive.",
        "The 3rd-person singular present subjunctive of *ser* is **sea**.",
      ],
      hints: [
        "Check the mood rule for the HL consecutive connector *de ahí que*.",
        "Recall the DISHES irregular present subjunctive of *ser*.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 papers × 15 questions = 30 questions)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: Estilos de vida, salud, creencias y subculturas (15 questions)
    // -------------------------------------------------------------------------
    {
      id: "1-identidades-p1",
      title: "Practice Paper 1: Salud, estilos de vida, creencias y subculturas",
      level: "SL",
      questions: [
        {
          id: "1-identidades-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "estilos-vida-salud",
          question:
            "Complete this sentence with the exact present subjunctive of **dormir** (*nosotros*):\n\n*«Conviene que todos _____ lo suficiente para rendir bien en los estudios.»*",
          answer: {
            type: "text",
            accept: ["durmamos"],
            display: "durmamos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dormimos"] },
              feedback: "*Dormimos* is present indicative. *Conviene que* triggers the present subjunctive, and *-ir* stem-changers shift *o → u* in *nosotros* (*durmamos*).",
            },
            {
              spec: { type: "text", accept: ["dormir"] },
              feedback: "Because *que* + subject (*todos*) appears, conjugate *dormir* in the present subjunctive (*durmamos*).",
            },
          ],
          commonError:
            "Writing *dormamos* or *duermamos* instead of the *-ir* *nosotros* shift *durmamos*.",
          solution: [
            "*Conviene que* triggers the present subjunctive.",
            "For *-ir* stem-changing *dormir*, *nosotros* shifts *o → u*: **durmamos**.",
          ],
          hints: [
            "Recall how *-ir* stem-changing verbs behave in the *nosotros* present subjunctive.",
            "The vowel shifts *o → u*, NOT *o → ue*.",
          ],
        },
        {
          id: "1-identidades-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "estilos-vida-salud",
          question:
            "Complete with the exact present subjunctive of **garantizar** (3rd person plural — watch Spanish spelling before *e*):\n\n*«Resulta fundamental que los colegios _____ acceso gratuito a psicólogos escolares.»*",
          answer: {
            type: "text",
            accept: ["garanticen"],
            display: "garanticen",
          },
          traps: [
            {
              spec: { type: "text", accept: ["garantizan"] },
              feedback: "*Garantizan* is indicative; *Resulta fundamental que* requires the subjunctive (*garanticen*).",
            },
            {
              spec: { type: "text", accept: ["garantizar"] },
              feedback: "After *que* + specific subject, conjugate *garantizar* in the present subjunctive (*garanticen*).",
            },
          ],
          commonError:
            "Forgetting the Spanish orthographic change `z → c` before `e` (*garantizen* instead of *garanticen*).",
          solution: [
            "*Resulta fundamental que* triggers the present subjunctive.",
            "Change `z → c` before `e`: **garanticen**.",
          ],
          hints: [
            "Spot the impersonal necessity trigger *Resulta fundamental que*.",
            "Remember the *-zar* spelling change before *-e* (`z → c`).",
          ],
        },
        {
          id: "1-identidades-p1-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "estilos-vida-salud",
          question:
            "Replace the false friend in brackets with the exact Spanish infinitive meaning **'to support'**:\n\n*«Las familias deben _____ [NOT soportar] a los jóvenes que piden ayuda psicológica.»*",
          answer: {
            type: "text",
            accept: ["apoyar", "respaldar"],
            display: "apoyar",
          },
          traps: [
            {
              spec: { type: "text", accept: ["soportar"] },
              feedback: "*Soportar* means 'to endure / tolerate', not 'to support' emotionally.",
            },
          ],
          solution: [
            "The natural Spanish verb meaning 'to support' is **apoyar** (or formal **respaldar**).",
          ],
          hints: [
            "Think of the Spanish noun *el apoyo* ('support').",
          ],
        },
        {
          id: "1-identidades-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "estilos-vida-salud",
          question:
            "Complete with the correct mood of **bastar** (3rd person singular):\n\n*«No es cierto que hacer ejercicio por sí solo _____ para prevenir todo tipo de agotamiento.»*",
          answer: {
            type: "text",
            accept: ["baste"],
            display: "baste",
          },
          traps: [
            {
              spec: { type: "text", accept: ["basta"] },
              feedback: "*Basta* is indicative. Because *es cierto que* is negated (*No es cierto que*), you must switch to the subjunctive.",
            },
          ],
          solution: [
            "Negated certainty (*No es cierto que*) triggers the present subjunctive.",
            "*Bastar* (*-ar*) → 3rd person singular present subjunctive **baste**.",
          ],
          hints: [
            "Look at the negative word *No* before *es cierto que*.",
            "Swap the *-ar* ending to *-e* in the present subjunctive.",
          ],
        },
        {
          id: "1-identidades-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "estilos-vida-salud",
          question:
            "In Spanish, give the exact three-word masculine plural phrase (without article) for the mandatory black octagonal nutrition warning labels introduced in Chile and Mexico: *«los _____ de _____»* (write the full phrase with *de*, e.g. *X de Y*).",
          answer: {
            type: "text",
            accept: ["sellos de advertencia", "los sellos de advertencia", "octógonos de advertencia", "los octógonos de advertencia"],
            display: "sellos de advertencia",
          },
          solution: [
            "The black octagonal front-of-pack warning labels in Chile, Mexico, Argentina, and Colombia are called **sellos de advertencia**.",
          ],
          hints: [
            "Think of the Spanish words for 'stamps/seals' (*sellos*) and 'warning' (*advertencia*).",
            "Combine them with *de*.",
          ],
        },
        {
          id: "1-identidades-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "estilos-vida-salud",
          marks: 4,
          question:
            "In English (or Spanish), **explain** two reasons why Latin American nutrition warning labels and Spain's *sobremesa* offer complementary perspectives on healthy lifestyles for an IB Spanish B Individual Oral (4 marks).",
          modelAnswer:
            "First, mandatory octagonal front-of-pack warning stickers in Chile and Mexico demonstrate structural public-health intervention: by flagging excessive sugar and sodium transparently on packaging, governments empower consumers to cut back on ultraprocessed snacks rather than relying purely on individual willpower. Second, the Spanish ritual of lingering around the dining table after eating highlights the psychosocial dimension of wellbeing: unhurried shared conversation nurtures family cohesion, counters frantic urban schedules, and supports emotional balance alongside wholesome Mediterranean ingredients.",
          markScheme: [
            {
              point: "Explains structural public-health regulation via front-of-pack sugar/sodium warning stickers in Chile/Mexico",
              keywords: ["octagonal", "sugar", "sodium", "ultraprocessed", "chile", "mexico"],
            },
            {
              point: "Links regulation to empowering informed consumer choices beyond individual willpower",
              keywords: ["consumers", "public-health", "packaging", "willpower"],
            },
            {
              point: "Explains the psychosocial role of lingering post-meal conversation in nurturing cohesion",
              keywords: ["conversation", "cohesion", "psychosocial", "emotional"],
            },
            {
              point: "Connects unhurried eating to Mediterranean dietary habits or resisting hurried urban routines",
              keywords: ["mediterranean", "unhurried", "urban", "wholesome"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant cultural or analytical point made.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes one practice generically without connecting policy and psychosocial well-being.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly contrasts structural nutrition policy in Latin America with the psychosocial well-being dimension of Spanish table culture.",
            },
          ],
          hints: [
            "Contrast top-down consumer policy (Chile/Mexico) with everyday social ritual (Spain).",
            "Connect physical nutrition (*ultraprocessados, azúcar/sodio*) with emotional/community cohesion.",
          ],
        },
        {
          id: "1-identidades-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "creencias-valores-subculturas",
          question:
            "Complete this sentence stating a **verified statistical fact** with the correct mood of **crecer** (3rd person singular present):\n\n*«Aunque el número de bodas civiles _____ cada año en España, las celebraciones familiares conservan gran peso social.»*",
          answer: {
            type: "text",
            accept: ["crece"],
            display: "crece",
          },
          traps: [
            {
              spec: { type: "text", accept: ["crezca"] },
              feedback: "Here the sentence concedes a real observable fact ('even though it genuinely grows'), so *aunque* takes the **indicative** (*crece*).",
            },
          ],
          solution: [
            "When *aunque* states a known real fact, Spanish uses the **indicative**.",
            "3rd person singular present indicative of *crecer* → **crece**.",
          ],
          hints: [
            "Check whether the stem describes a real fact or an imaginary 'even if' scenario.",
            "Known fact after *aunque* stays in the indicative.",
          ],
        },
        {
          id: "1-identidades-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "creencias-valores-subculturas",
          question:
            "Complete this **hypothetical concession** ('even if') with the present subjunctive of **ser** (3rd person singular):\n\n*«Aunque un ciudadano no _____ practicante, puede valorar el patrimonio artístico de la Semana Santa.»*",
          answer: {
            type: "text",
            accept: ["sea"],
            display: "sea",
          },
          traps: [
            {
              spec: { type: "text", accept: ["es"] },
              feedback: "With an indefinite hypothetical person (*un ciudadano* = 'even if a citizen is not...'), *aunque* requires the **subjunctive** (*sea*).",
            },
          ],
          solution: [
            "Hypothetical concession ('even if') after *aunque* triggers the present subjunctive.",
            "3rd person singular present subjunctive of *ser* → **sea**.",
          ],
          hints: [
            "Notice *un ciudadano* introduces a hypothetical case ('even if someone is not...').",
            "Use the irregular present subjunctive of *ser*.",
          ],
        },
        {
          id: "1-identidades-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "creencias-valores-subculturas",
          question:
            "Give the exact Spanish term (two words, no article) for the historical fusion of Catholic rituals with indigenous and Afro-descendant spiritualities in Latin America.",
          answer: {
            type: "text",
            accept: ["sincretismo religioso", "el sincretismo religioso"],
            display: "sincretismo religioso",
          },
          solution: [
            "The blending of Catholic liturgy with indigenous and Afro-descendant traditions is **sincretismo religioso**.",
          ],
          hints: [
            "Starts with *sincret-* ('merging / synthesis') + the adjective for 'religious'.",
            "Think of how *Día de los Muertos* merges Catholic and Mesoamerican traditions.",
          ],
        },
        {
          id: "1-identidades-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "creencias-valores-subculturas",
          question:
            "Complete this stereotype-refuting C1 clause with the exact verb form of **debilitar**:\n\n*«Lejos de _____ los lazos familiares, la diversidad cultural los fortalece.»*",
          answer: {
            type: "text",
            accept: ["debilitar"],
            display: "debilitar",
          },
          traps: [
            {
              spec: { type: "text", accept: ["debilitando"] },
              feedback: "English uses '-ing' after 'far from', but Spanish ALWAYS uses the **infinitive** directly after a preposition (*lejos de + infinitivo*).",
            },
            {
              spec: { type: "text", accept: ["debilite"] },
              feedback: "After *lejos de* (without *que*), use the infinitive (*debilitar*), not a conjugated verb.",
            },
          ],
          solution: [
            "In Spanish, prepositions (*de, sin, antes de, lejos de*) ALWAYS govern the **infinitive**.",
            "Therefore: *Lejos de **debilitar***.",
          ],
          hints: [
            "Beware English interference ('far from weakening' → do NOT use *-ando*!).",
            "What verb form always follows Spanish prepositions like *de*?",
          ],
        },
        {
          id: "1-identidades-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "estilos-vida-salud",
          marks: 4,
          question:
            "Read this Paper 2 Reading mini-extract:\n\n> *«Cada domingo, la Ciclovía de Bogotá cierra más de ciento veinte kilómetros de avenidas al tráfico motorizado. Lo que nació en 1974 como protesta ciudadana contra la contaminación se ha convertido hoy en un ritual democrático donde conviven ciclistas, familias y corredores de todos los barrios.»*\n\nIn Spanish or English, **analyse** two contrasting ideas in this extract: (a) how the initiative originally began, and (b) why the author calls it *«un ritual democrático»* (4 marks).",
          modelAnswer:
            "(a) The scheme began in 1974 as a grassroots civic demonstration protesting air pollution and car-dominated urban avenues. (b) Calling it a democratic ritual highlights social inclusion across class divides: closing major roads to vehicles creates free, open public space where residents from every neighbourhood gather side by side for shared recreation and physical wellness.",
          markScheme: [
            {
              point: "Identifies the 1974 origin as a civic/citizen protest against pollution",
              keywords: ["protest", "demonstration", "pollution", "grassroots"],
            },
            {
              point: "Explains the historical evolution from protest into an established weekly cultural tradition",
              keywords: ["car-dominated", "avenues", "roads", "vehicles"],
            },
            {
              point: "Explains 'democratic' as free, egalitarian access cutting across class/neighbourhood divides",
              keywords: ["inclusion", "class", "neighbourhood", "egalitarian"],
            },
            {
              point: "Links shared physical space to community recreation and collective wellness",
              keywords: ["recreation", "wellness", "shared", "residents"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Misreads extract or copies text without analysis.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies only the basic origin or gives a surface paraphrase of 'democratic'.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly unpacks both the 1974 anti-pollution civic roots and the egalitarian, cross-neighbourhood inclusion implied by 'ritual democrático'.",
            },
          ],
          hints: [
            "Look at *nació en 1974 como...* for the origin.",
            "Unpack what *de todos los barrios* implies about class barriers and public space.",
          ],
        },
        {
          id: "1-identidades-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "estilos-vida-salud",
          question:
            "Complete this Paper 1 sentence using the exact present subjunctive of **ofrecer** (3rd person plural):\n\n*«Es aconsejable que los comedores escolares _____ más legumbres y fruta de temporada.»*",
          answer: {
            type: "text",
            accept: ["ofrezcan"],
            display: "ofrezcan",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ofrecen"] },
              feedback: "*Ofrecen* is indicative. *Es aconsejable que* triggers the present subjunctive (*yo ofrezco → ofrezcan*).",
            },
          ],
          solution: [
            "Start from *yo ofrezco* (*-cer* → *-zc-*), drop *-o*, and add *-an* → **ofrezcan**.",
          ],
          hints: [
            "Derive the stem from the *yo* present indicative of *ofrecer*.",
            "Add the *-er* subjunctive 3rd-person plural ending *-an*.",
          ],
        },
        {
          id: "1-identidades-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "creencias-valores-subculturas",
          marks: 4,
          question:
            "In Spanish (approx. 50–70 words), write a short paragraph for a school **artículo** discussing whether secularisation erases cultural traditions in Spain. You must include: (1) one `aunque` clause, (2) one B2–C1 belief/identity noun, and (3) a balanced conclusion avoiding stereotypes (4 marks).",
          modelAnswer:
            "Aunque la práctica religiosa institucional ha disminuido notablemente entre la juventud española, resulta erróneo afirmar que el patrimonio comunitario haya desaparecido. Fiestas como la Semana Santa o las verbenas locales conservan un hondo valor afectivo y cívico, demostrando que las costumbres heredadas evolucionan sin exigir una fe idéntica a cada generación.",
          markScheme: [
            {
              point: "Uses a grammatically accurate `aunque` clause balancing declining formal practice against continuity",
              keywords: ["disminuido", "juventud", "erróneo"],
            },
            {
              point: "Deploys precise B2–C1 Spanish identity/belief vocabulary",
              keywords: ["patrimonio", "comunitario", "costumbres"],
            },
            {
              point: "Provides a concrete Hispanic cultural example (e.g. Semana Santa, fiestas locales)",
              keywords: ["semana santa", "verbenas", "fiestas"],
            },
            {
              point: "Concludes with a nuanced, non-stereotyping evaluation of generational evolution",
              keywords: ["evolucionan", "generación", "afectivo"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant Spanish response.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic IGCSE phrasing with one-sided generalisations or mood errors.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurate B2–C1 Spanish deploying `aunque`, authentic cultural anchors, and balanced generational nuance.",
            },
          ],
          hints: [
            "Use *aunque* + indicative for the real statistical trend (*ha disminuido*).",
            "Distinguish institutional church attendance from *el patrimonio cultural* (*Semana Santa, fiestas patronales*).",
          ],
        },
        {
          id: "1-identidades-p1-q14",
          kind: "short",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "estilos-vida-salud",
          question:
            "Complete this ESCAPA purpose clause with the exact present subjunctive of **poder** (3rd person plural):\n\n*«El ayuntamiento inaugura pistas deportivas gratuitas con el fin de que todos los jóvenes _____ practicar deporte sin barreras económicas.»*",
          answer: {
            type: "text",
            accept: ["puedan"],
            display: "puedan",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pueden"] },
              feedback: "*Con el fin de que* (= *para que*, ESCAPA) ALWAYS triggers the subjunctive (*puedan*).",
            },
          ],
          solution: [
            "*Con el fin de que* is a high-register synonym for *para que* and always demands the subjunctive.",
            "3rd person plural present subjunctive of *poder* (*yo puedo → pued-*) + *-an* → **puedan**.",
          ],
          hints: [
            "Recognise *con el fin de que* as a B2–C1 equivalent of *para que*.",
            "Keep the *o → ue* boot stem change in 3rd person plural (*ellos*).",
          ],
        },
        {
          id: "1-identidades-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "estilos-vida-salud",
          marks: 6,
          question:
            "**Paper 1 Mini-Task (SL/HL):** Your school magazine has asked you to write the opening two paragraphs (approx. 90–120 words in Spanish) of a **blog educativo** advising Year 12 students how to protect their mental well-being during exam pressure. Include: (a) engaging blog conventions (catchy headline + direct address), (b) at least **two** impersonal subjunctive structures, (c) one concrete Hispanophone reference, and (d) B2–C1 health lexis (6 marks).",
          modelAnswer:
            "**¿Estudiar hasta el agotamiento? ¡Basta ya de romantizar el insomnio!**\n\n¿Alguna vez te has sentido culpable por cerrar los apuntes antes de medianoche? En pleno Bachillerato Internacional, la ansiedad académica suele disfrazarse de ambición, pero conviene que prioricemos nuestro equilibrio emocional antes de quemarnos por completo.\n\nEn España, la acogida del teléfono 024 demuestra que romper el tabú sobre el malestar psicológico salva vidas. Por eso, resulta imprescindible que establezcamos pausas reales — al estilo de una buena sobremesa sin móviles — y que pidamos apoyo a tiempo. ¿Qué hábito saludable te ayuda a desconectar? ¡Cuéntamelo en los comentarios!",
          markScheme: [
            {
              point: "Opens with an engaging blog headline and direct interactive address (`tú` / rhetorical question)",
              keywords: ["romantizar", "insomnio", "culpable"],
            },
            {
              point: "Accurately uses a first impersonal subjunctive trigger (`conviene que + subj.`)",
              keywords: ["conviene que", "prioricemos"],
            },
            {
              point: "Accurately uses a second impersonal subjunctive trigger (`resulta imprescindible que + subj.`)",
              keywords: ["imprescindible que", "establezcamos", "pidamos"],
            },
            {
              point: "Integrates a concrete Hispanophone cultural/health anchor (e.g. Spain's 024 helpline or *sobremesa*)",
              keywords: ["024", "sobremesa", "españa"],
            },
            {
              point: "Deploys B2–C1 health/well-being collocations beyond IGCSE level",
              keywords: ["ansiedad", "equilibrio", "tabú", "malestar"],
            },
            {
              point: "Closes with an authentic interactive blog convention inviting reader comments",
              keywords: ["comentarios", "cuéntamelo", "desconectar"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No meaningful Spanish produced or off-topic.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic IGCSE advice with indicative errors after triggers and missing blog conventions.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear B2 Spanish with appropriate blog tone and at least one accurate subjunctive structure, though cultural link or lexis remains general.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authentic Band 10–12 blog voice: catchy headline, interactive *tú* engagement, accurate dual subjunctives, concrete Hispanophone anchor, and crisp B2–C1 health lexis.",
            },
          ],
          hints: [
            "A *blog* needs a punchy title, warm direct address (*tú*), and a closing invitation to comment.",
            "Plan two distinct triggers (*conviene que + subj.*, *resulta imprescindible que + subj.*) before writing.",
            "Drop in a specific Hispanic cultural touchstone (*teléfono 024, la sobremesa, la Ciclovía*).",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: Lengua, diversidad hispanohablante y registro [SL & HL] (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "1-identidades-p2",
      title: "Practice Paper 2: Diversidad lingüística y registro B2–C1 [SL & HL]",
      level: "HL",
      questions: [
        {
          id: "1-identidades-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "lengua-identidad-hispanohablante",
          question:
            "Convert standard *tú hablas* into its exact Rioplatense **voseo** present indicative form (include the tilde): *vos _____*.",
          answer: {
            type: "text",
            accept: ["hablás"],
            display: "hablás",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hablas"] },
              feedback: "Check the stress! Without the accent, *hablas* is standard *tú*; Rioplatense *voseo* stresses the final syllable (*hablás*).",
            },
          ],
          solution: [
            "Drop *-r* from *hablar*, add *-s*, and stress the final *-á-*: **hablás**.",
          ],
          hints: [
            "Drop *-r*, add *-s*, and accent the final vowel.",
          ],
        },
        {
          id: "1-identidades-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "lengua-identidad-hispanohablante",
          question:
            "Give the irregular Rioplatense **voseo** present indicative form of **ser** (*vos _____*):",
          answer: {
            type: "text",
            accept: ["sos"],
            display: "sos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["eres"] },
              feedback: "*Eres* is the *tú* form. *Ser* has a unique 3-letter *voseo* form!",
            },
          ],
          solution: [
            "*Ser* is irregular in Rioplatense *voseo*: **vos sos** (e.g. *¿De dónde sos?*).",
          ],
          hints: [
            "It is only three letters long and rhymes with *vos*!",
          ],
        },
        {
          id: "1-identidades-p2-q03",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "lengua-identidad-hispanohablante",
          question:
            "What single Spanish linguistics term names the pronunciation feature shared by over 90% of Spanish speakers (Latin America + Canary Islands), where `z`, `ce/ci`, and `s` are all pronounced `/s/`?",
          answer: {
            type: "text",
            accept: ["seseo", "el seseo"],
            display: "seseo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ceceo", "el ceceo"] },
              feedback: "*Ceceo* pronounces everything with `/θ/`; merging `z/ce/ci/s` into `/s/` is **seseo**.",
            },
            {
              spec: { type: "text", accept: ["distinción", "la distinción"] },
              feedback: "*Distinción* separates `/θ/` and `/s/` (northern/central Spain), rather than merging them into `/s/`.",
            },
          ],
          solution: [
            "Pronouncing `z`, `ce/ci`, and `s` alike as `/s/` is called **seseo**.",
          ],
          hints: [
            "The word literally starts with the letter name of *s* (*ese*).",
          ],
        },
        {
          id: "1-identidades-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "lengua-identidad-hispanohablante",
          question:
            "Give the everyday Mexican Spanish word (with article) for 'city bus' — a false-friend regionalism that means 'truck/lorry' in Spain (include exact accent).",
          answer: {
            type: "text",
            accept: ["el camión", "camión"],
            display: "el camión",
          },
          traps: [
            {
              spec: { type: "text", accept: ["el colectivo", "colectivo"] },
              feedback: "*El colectivo* is Rioplatense (Argentina/Uruguay), not Mexican Spanish.",
            },
            {
              spec: { type: "text", accept: ["la guagua", "guagua"] },
              feedback: "*La guagua* is Canary Islands / Caribbean Spanish, not Mexican Spanish.",
            },
          ],
          solution: [
            "In Mexico, taking the city bus is *tomar **el camión*** (with a tilde on the *ó*).",
          ],
          hints: [
            "In Spain this word means 'truck', whereas in Mexico it is the standard word for a city bus.",
            "Remember the written accent on *-ón*.",
          ],
        },
        {
          id: "1-identidades-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "lengua-identidad-hispanohablante",
          question:
            "Name the major Andean indigenous language spoken across Peru, Bolivia, and Ecuador that gave Spanish words such as *cancha, papa,* and *cóndor*.",
          answer: {
            type: "text",
            accept: ["quechua", "el quechua"],
            display: "quechua",
          },
          traps: [
            {
              spec: { type: "text", accept: ["náhuatl", "el náhuatl"] },
              feedback: "*Náhuatl* is Mexican (giving *chocolate, aguacate, tomate*), not Andean.",
            },
            {
              spec: { type: "text", accept: ["guaraní", "el guaraní"] },
              feedback: "*Guaraní* is Paraguay's co-official language, not the primary Inca/Andean language behind *cancha* and *cóndor*.",
            },
          ],
          solution: [
            "The primary Andean indigenous language behind *cancha, papa,* and *cóndor* is **quechua**.",
          ],
          hints: [
            "Think of the historical language of the Inca Empire still spoken by 8–10 million Andean speakers.",
            "Starts with *qu-* and is spoken widely in Cusco, Peru and Bolivia.",
          ],
        },
        {
          id: "1-identidades-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "lengua-identidad-hispanohablante",
          question:
            "Convert the Peninsular plural greeting *«¿Cómo estáis vosotros?»* into the universal Latin American informal plural equivalent (give ONLY the conjugated verb for *ustedes*, with accent): *«¿Cómo _____ ustedes?»*",
          answer: {
            type: "text",
            accept: ["están"],
            display: "están",
          },
          traps: [
            {
              spec: { type: "text", accept: ["estáis"] },
              feedback: "*Estáis* belongs strictly to Peninsular *vosotros*, not *ustedes*.",
            },
          ],
          solution: [
            "*Ustedes* takes 3rd-person plural endings across all tenses: **están** (tilde on the *á*!).",
          ],
          hints: [
            "Remember *ustedes* always uses the same verb ending as *ellos/ellas*.",
            "Do not forget the written accent on the final syllable!",
          ],
        },
        {
          id: "1-identidades-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "lengua-identidad-hispanohablante",
          marks: 4,
          question:
            "**Compare and contrast** the status of co-official languages in Spain (*catalán, gallego, euskera*) with indigenous bilingualism in Paraguay (*guaraní*), highlighting one similarity and one structural difference for Theme 1 (4 marks).",
          modelAnswer:
            "Both contexts demonstrate constitutional protection of multilingual identity alongside Castilian: neither Spain nor Paraguay treats Spanish as the sole marker of citizenship, instead recognising regional or ancestral tongues in education and public administration. Structurally, however, Spain's co-official languages are geographically territorial — confined to specific autonomous communities such as Catalonia, Galicia, or the Basque Country — whereas Paraguay's bilingual model is nationwide, with an indigenous tongue spoken across both urban and rural populations by a majority of non-indigenous and indigenous citizens alike.",
          markScheme: [
            {
              point: "Identifies shared constitutional/official recognition protecting multilingual identity alongside Spanish",
              keywords: ["constitutional", "multilingual", "education", "administration"],
            },
            {
              point: "Notes that Spain's co-official languages operate territorially inside specific autonomous communities",
              keywords: ["territorial", "autonomous", "catalonia", "basque"],
            },
            {
              point: "Contrasts Paraguay's nationwide co-official scope across the entire country",
              keywords: ["nationwide", "entire", "urban", "rural"],
            },
            {
              point: "Highlights that Paraguay's indigenous language is spoken broadly by a non-indigenous majority as well",
              keywords: ["majority", "non-indigenous", "citizens", "ancestral"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid comparison provided.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Describes one country accurately or lists languages without comparing territorial vs nationwide scope.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly identifies both constitutional multilingual protection and the key structural contrast between territorial autonomy and nationwide majority bilingualism.",
            },
          ],
          hints: [
            "Similarity: legal/constitutional protection and cultural pride alongside Spanish.",
            "Difference: Spain's languages are regional (autonomous communities), while Paraguay's bilingualism is nationwide and spoken by a majority.",
          ],
        },
        {
          id: "1-identidades-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "identidad-registro-hl",
          question:
            "[HL] Give the crisp two-word Spanish equivalent recommended by FundéuRAE to replace the unadapted anglicism *«el bullying»* (without article):",
          answer: {
            type: "text",
            accept: ["acoso escolar", "el acoso escolar"],
            display: "acoso escolar",
          },
          solution: [
            "FundéuRAE recommends **acoso escolar** (and *ciberacoso* for cyberbullying) instead of unadapted *bullying*.",
          ],
          hints: [
            "Pair the Spanish noun for harassment (*acoso*) with the adjective for 'school' (*escolar*).",
            "Do not keep the unadapted English word in formal IB Spanish prose.",
          ],
        },
        {
          id: "1-identidades-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "identidad-registro-hl",
          question:
            "[HL] Complete this balanced C1 sentence with the correct mood of **favorecer** (3rd person singular) after **`Si bien`**:\n\n*«Si bien la tecnología _____ el contacto inmediato con la diáspora, no sustituye el arraigo presencial.»*",
          answer: {
            type: "text",
            accept: ["favorece"],
            display: "favorece",
          },
          traps: [
            {
              spec: { type: "text", accept: ["favorezca"] },
              feedback: "Careful! Unlike hypothetical *aunque*, the formal concessive **`si bien`** introduces an acknowledged real fact and takes the **indicative** (*favorece*).",
            },
          ],
          solution: [
            "`Si bien` ('although / while it is true that') takes the **indicative** mood: **favorece**.",
          ],
          hints: [
            "Remember the strict mood rule for the formal connector *si bien*.",
            "It states a conceded factual point → indicative.",
          ],
        },
        {
          id: "1-identidades-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "identidad-registro-hl",
          question:
            "[HL] Replace clunky *«los/as alumnos/as»* with the single standard Spanish collective noun (with definite article) meaning 'the student body':",
          answer: {
            type: "text",
            accept: ["el alumnado", "alumnado"],
            display: "el alumnado",
          },
          solution: [
            "**El alumnado** encompasses all students cleanly without repetitive gendered doublets or slashes (just like *el profesorado* and *la ciudadanía*).",
          ],
          hints: [
            "Built from *alumno* + the collective suffix *-ado* (compare *profesor → el profesorado*).",
            "Include the masculine singular definite article *el*.",
          ],
        },
        {
          id: "1-identidades-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "identidad-registro-hl",
          question:
            "[HL] Complete this C1 consecutive clause after **`de ahí que`** with the exact present subjunctive of **convenir** (3rd person singular):\n\n*«Las variedades regionales enriquecen el patrimonio común; de ahí que _____ erradicar la glotofobia desde la escuela.»*",
          answer: {
            type: "text",
            accept: ["convenga"],
            display: "convenga",
          },
          traps: [
            {
              spec: { type: "text", accept: ["conviene"] },
              feedback: "*Conviene* is indicative; `de ahí que` ALWAYS triggers the subjunctive (*convenga*).",
            },
            {
              spec: { type: "text", accept: ["convenir"] },
              feedback: "After `de ahí que`, you must conjugate *convenir* in the subjunctive (*convenga*), not leave it in the infinitive.",
            },
          ],
          commonError:
            "Confusing *convenga* (*convenir*, 'to be advisable') with *convenza* (*convencer*, 'to convince').",
          solution: [
            "`De ahí que` requires the subjunctive; *convenir* follows *venir* (*yo convengo* → **convenga**).",
          ],
          hints: [
            "*Convenir* is conjugated like *venir* (*yo vengo → yo convengo*).",
            "`De ahí que` always requires the subjunctive.",
          ],
        },
        {
          id: "1-identidades-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "identidad-registro-hl",
          marks: 4,
          question:
            "[HL] **Evaluate** the IGCSE draft below by rewriting it into a single cohesive **Band 10–12 Spanish** sentence (approx. 25–40 words):\n\n> *«Creo que hablar espanglish no es malo porque ayuda a mucha gente en Estados Unidos a sentir sus dos culturas.»*\n\nUse: (1) a C1 stereotype-refuting or concessive opener, (2) precise sociolinguistic nouns, and (3) zero IGCSE fillers (*creo que, malo, mucha gente*).",
          modelAnswer:
            "Lejos de constituir una carencia gramatical, la alternancia de códigos conocida como espanglish encarna una identidad híbrida que fortalece el arraigo bicultural de millones de hispanohablantes estadounidenses.",
          markScheme: [
            {
              point: "Eliminates IGCSE clichés with a sleek C1 opener (`Lejos de...` or `Si bien...`)",
              keywords: ["lejos de", "constituir", "carencia"],
            },
            {
              point: "Deploys accurate sociolinguistic terminology for code-switching or linguistic competence",
              keywords: ["alternancia", "códigos", "gramatical"],
            },
            {
              point: "Reframes US Hispanic bilingualism as hybrid or bicultural belonging rather than deficit",
              keywords: ["híbrida", "bicultural", "arraigo"],
            },
            {
              point: "Uses high-register active verbs (`encarna / fortalece / refleja`) and precise noun phrasing",
              keywords: ["encarna", "fortalece", "hispanohablantes"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Unchanged IGCSE phrasing or major comprehension errors.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Replaces some basic words but retains repetitive B1 sentence architecture.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Elegant Band 10–12 C1 synthesis uniting `Lejos de + inf.`, accurate sociolinguistic lexis, and crisp nominalisation.",
            },
          ],
          hints: [
            "Open with *Lejos de suponer / constituir una carencia...*",
            "Upgrade *hablar espanglish* to *la alternancia de códigos* and *sentir sus dos culturas* to *el arraigo bicultural* or *la identidad híbrida*.",
          ],
        },
        {
          id: "1-identidades-p2-q13",
          kind: "short",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "lengua-identidad-hispanohablante",
          question:
            "Complete this Rioplatense *voseo* present indicative sentence with the exact form of **querer** (include tilde):\n\n*«¿Por qué vos siempre _____ estudiar con música tan alta?»*",
          answer: {
            type: "text",
            accept: ["querés"],
            display: "querés",
          },
          traps: [
            {
              spec: { type: "text", accept: ["quieres"] },
              feedback: "*Quieres* is standard *tú*. Rioplatense *voseo* drops the *e → ie* diphthong and accents the final *-és*.",
            },
            {
              spec: { type: "text", accept: ["quierés"] },
              feedback: "Never keep the stem diphthong in present indicative *voseo* (*querés*, not *quierés*).",
            },
          ],
          solution: [
            "Drop *-r* from *querer* (zero stem change!), add *-s*, and stress the final *-é-*: **querés**.",
          ],
          hints: [
            "Apply the no-diphthong rule for *voseo* present indicative.",
            "Accent the final *-és*.",
          ],
        },
        {
          id: "1-identidades-p2-q14",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "identidad-registro-hl",
          question:
            "[HL] Complete this negated idiom sentence using the present subjunctive of **sobrevivir** (3rd person plural):\n\n*«No podemos dar por sentado que las lenguas originarias _____ sin inversión educativa.»*",
          answer: {
            type: "text",
            accept: ["sobrevivan"],
            display: "sobrevivan",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sobrevivir"] },
              feedback: "After *no dar por sentado que* + subject, conjugate *sobrevivir* in the **present subjunctive** (*sobrevivan*), not the infinitive.",
            },
          ],
          commonError:
            "Using indicative *sobreviven* instead of present subjunctive *sobrevivan* after negated *no podemos dar por sentado que*.",
          solution: [
            "Negated certainty (*No podemos dar por sentado que*) triggers the subjunctive.",
            "*Sobrevivir* (*-ir*) → 3rd person plural present subjunctive **sobrevivan**.",
          ],
          hints: [
            "*Dar por sentado* = 'to take for granted'; when negated, it expresses uncertainty.",
            "An *-ir* verb switches to *-a-* endings in the present subjunctive.",
          ],
        },
        {
          id: "1-identidades-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "identidad-registro-hl",
          marks: 6,
          question:
            "**[HL] Paper 1 Extended Paragraph (approx. 100–130 words in Spanish):** Draft the core analytical argument for a formal **artículo de opinión** debating whether the RAE should resist English loanwords or embrace natural evolution. You must integrate: (a) **`Si bien...`** + indicative, (b) **`no obstante`** counter-argument, (c) **`de ahí que`** + subjunctive, (d) reference to ASALE's pan-Hispanic approach, and (e) one idiomatic C1 expression (6 marks).",
          modelAnswer:
            "Si bien resulta legítimo que la Real Academia Española vele por la cohesión del idioma ante avalanchas de términos extranjeros superfluos, no obstante conviene matizar que ningún idioma vivo permanece inmóvil en una vitrina. De hecho, la política panhispánica impulsada junto a las veintidós academias hermanas de ASALE demuestra que el español siempre se ha nutrido del mestizaje léxico, desde el árabe hasta el náhuatl y el quechua. Conviene, pues, distinguir entre los anglicismos innecesarios y aquellos préstamos adaptados que enriquecen la comunicación moderna; los extranjerismos son un arma de doble filo, de ahí que sea imprescindible fomentar una educación lingüística crítica y consciente en el alumnado.",
          markScheme: [
            {
              point: "Deploys `Si bien` accurately with the indicative to establish a fair initial concession",
              keywords: ["si bien", "cohesión", "extranjeros"],
            },
            {
              point: "Pivots smoothly with `no obstante` to argue that living languages naturally evolve",
              keywords: ["no obstante", "matizar", "vitrina"],
            },
            {
              point: "Integrates ASALE's pan-Hispanic policy and historical lexical enrichment (Arabic/indigenous roots)",
              keywords: ["panhispánica", "veintidós", "mestizaje", "náhuatl"],
            },
            {
              point: "Distinguishes unnecessary anglicisms from adapted, enriching borrowings with nuanced judgment",
              keywords: ["anglicismos", "préstamos", "adaptados"],
            },
            {
              point: "Weaves a natural C1 idiom (`arma de doble filo`) seamlessly into formal prose",
              keywords: ["arma de doble filo", "extranjerismos"],
            },
            {
              point: "Concludes with `de ahí que` + accurate subjunctive (`sea`) and epicene noun (`el alumnado`)",
              keywords: ["de ahí que sea", "alumnado", "crítica"],
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
              descriptor: "One-sided IGCSE argument with mood slips after C1 connectors and limited cultural depth.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Balanced B2 argument referencing the RAE and borrowings, with mostly accurate grammar but occasional register flattening.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authoritative Band 10–12 HL prose uniting `Si bien`, `no obstante`, `de ahí que + subj.`, ASALE pan-Hispanic insight, idiomatic precision, and epicene register control.",
            },
          ],
          hints: [
            "Use the S · N · D engine: *Si bien* (+ indicative) → *no obstante* → *de ahí que* (+ subjunctive).",
            "Mention that Spanish historically absorbed Arabic, Náhuatl, and Quechua words before English!",
            "Avoid clunky *los/as estudiantes*; use *el alumnado* or *la ciudadanía*.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 challenging IB B2–C1 / HL questions — all "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "1-identidades-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "estilos-vida-salud",
      question:
        "Complete this complex health sentence using the **imperfect subjunctive** (`-ra` form) of **priorizar** (3rd person plural) after a past-tense trigger:\n\n*«Los médicos insistieron en que los centros escolares _____ el descanso y la salud emocional.»*",
      answer: {
        type: "text",
        accept: ["priorizaran", "priorizasen"],
        display: "priorizaran",
      },
      traps: [
        {
          spec: { type: "text", accept: ["prioricen"] },
          feedback: "Watch sequence of tenses! Because *insistieron* is in the preterite (past), the subordinate clause shifts to the **imperfect subjunctive** (*priorizaran*).",
        },
      ],
      solution: [
        "Past-tense trigger (*insistieron en que*) → **imperfect subjunctive**.",
        "Take 3rd-person plural preterite *priorizaron*, drop *-ron*, add *-ran* → **priorizaran** (or *-sen*: *priorizasen*).",
      ],
      hints: [
        "Check the tense of the main verb *insistieron* (preterite).",
        "Form the imperfect subjunctive from *ellos priorizaron* minus *-ron* + *-ran*.",
      ],
    },
    {
      id: "1-identidades-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "lengua-identidad-hispanohablante",
      question:
        "Give the single **irregular** Rioplatense *voseo* affirmative imperative of **ir** (used constantly in Argentina/Uruguay instead of *¡ve!*, include exact accent):",
      answer: {
        type: "text",
        accept: ["andá"],
        display: "andá",
      },
      traps: [
        {
          spec: { type: "text", accept: ["ve"] },
          feedback: "*Ve* is the *tú* imperative. In Rioplatense *voseo*, *ir* borrows its imperative from *andar*!",
        },
        {
          spec: { type: "text", accept: ["i", "í"] },
          feedback: "*Ir* is the sole verb that does NOT simply drop *-r* in the *voseo* imperative — it uses the *andar* form instead.",
        },
      ],
      solution: [
        "*Ir* is the unique irregular affirmative *voseo* imperative, borrowing from *andar*: **¡andá!** (e.g. *¡Andá tranquilo!*).",
      ],
      hints: [
        "It comes from the verb *andar* ('to walk/go').",
        "Drop *-r* from *andar* and place a tilde on the final *-á*.",
      ],
    },
    {
      id: "1-identidades-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "identidad-registro-hl",
      question:
        "[HL] Complete this formal essay sentence with the exact 3rd-person singular present tense of the C1 verb **menoscabar** ('to undermine / erode'):\n\n*«La burla hacia los acentos rurales _____ la dignidad de sus hablantes.»*",
      answer: {
        type: "text",
        accept: ["menoscaba"],
        display: "menoscaba",
      },
      solution: [
        "3rd person singular present indicative of *menoscabar* ('to undermine') is **menoscaba**.",
      ],
      hints: [
        "*Menoscabar* is a completely regular *-ar* verb.",
        "Subject is singular (*la burla*).",
      ],
    },
    {
      id: "1-identidades-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "identidad-registro-hl",
      question:
        "[HL] Complete this formal Spanish sentence with the exact present subjunctive of **haber** (impersonal 'there is/are') after **`de ahí que`**:\n\n*«Las subculturas evolucionan con rapidez; de ahí que _____ tanta diversidad estética en las ciudades hispanas.»*",
      answer: {
        type: "text",
        accept: ["haya"],
        display: "haya",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hay"] },
          feedback: "*Hay* is indicative. After `de ahí que`, impersonal *haber* must shift to **haya**.",
        },
      ],
      solution: [
        "`De ahí que` always triggers the subjunctive; the impersonal present subjunctive of *haber* is **haya**.",
      ],
      hints: [
        "Recall the DISHES irregular present subjunctive of impersonal *haber* (*hay → ?*).",
        "Never use indicative *hay* after *de ahí que*.",
      ],
    },
    {
      id: "1-identidades-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "creencias-valores-subculturas",
      marks: 4,
      question:
        "Read these two nearly identical sentences:\n\n- **Sentence 1:** *Aunque los jóvenes rechazan ciertas normas antiguas, respetan a sus abuelos.*\n- **Sentence 2:** *Aunque los jóvenes rechacen ciertas normas antiguas, respetan a sus abuelos.*\n\n**Distinguish** precisely how the mood shift alters the speaker's pragmatic meaning and explain when an IB candidate should pick each version (4 marks).",
      modelAnswer:
            "Sentence 1 uses the indicative (*rechazan*) to concede an established, verified fact: the writer knows and asserts that teenagers genuinely discard older norms, yet still honour their grandparents. Sentence 2 shifts into the subjunctive (*rechacen*) to frame a hypothetical or open-ended concession ('even if they happen to discard...'): the speaker either does not know for certain whether young people push back against tradition or treats the scenario as irrelevant to intergenerational affection. An IB candidate should pick the indicative when citing observable cultural statistics and the subjunctive when advancing universal hypothetical principles.",
      markScheme: [
        {
          point: "Explains that Sentence 1 (indicative) concedes a verified, real-world fact",
          keywords: ["indicative", "verified", "established", "genuinely"],
        },
        {
          point: "Explains that Sentence 2 (subjunctive) frames a hypothetical or 'even if' scenario",
          keywords: ["subjunctive", "hypothetical", "even if", "irrelevant"],
        },
        {
          point: "Recommends indicative when grounding arguments in observable demographic or cultural trends",
          keywords: ["observable", "statistics", "trends", "citing"],
        },
        {
          point: "Recommends subjunctive when proposing universal ethical principles regardless of specific cases",
          keywords: ["universal", "principles", "intergenerational", "affection"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Fails to identify the mood contrast.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies indicative vs subjunctive labels without explaining pragmatic meaning shift.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Articulates both the fact vs hypothetical 'even if' nuance and strategic Paper 1/IO deployment.",
        },
      ],
      hints: [
        "Compare 'Although they do...' (real fact) with 'Even if they were to...' (hypothetical).",
        "Link each mood to an authentic IB writing/speaking purpose.",
      ],
    },
    {
      id: "1-identidades-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "lengua-identidad-hispanohablante",
      marks: 4,
      question:
        "[HL] Read this short sociolinguistic quote:\n\n> *«Cuando a un niño quechuahablante se le prohíbe usar su lengua materna en el patio escolar, no solo se silencia un diccionario: se mutila su historia familiar.»*\n\nIn Spanish or English, **analyse** the rhetorical effect of the contrast between *«un diccionario»* and *«su historia familiar»*, and link it to **la glotofobia** and intercultural education (4 marks).",
      modelAnswer:
        "Contrasting a sterile reference book (*diccionario*) against living kinship memory (*historia familiar*) dismantles the utilitarian myth that languages are interchangeable tools. The stark verb *mutila* portrays linguistic discrimination (*glotofobia*) as psychological violence that severs children from ancestral roots and self-worth. Consequently, bilingual intercultural schooling (*educación intercultural bilingüe*) across the Andes becomes an ethical imperative — preserving both ecological worldview (*cosmovisión*) and equal civic dignity.",
      markScheme: [
        {
          point: "Unpacks the metaphor contrasting a mechanical reference book against lived ancestral memory",
          keywords: ["sterile", "interchangeable", "kinship", "memory"],
        },
        {
          point: "Analyses the violent connotation of the verb *mutila* to frame linguistic prejudice as psychological harm",
          keywords: ["mutila", "violence", "psychological", "self-worth"],
        },
        {
          point: "Links the quote explicitly to *glotofobia* (accent/language-based discrimination)",
          keywords: ["glotofobia", "discrimination", "ancestral"],
        },
        {
          point: "Connects to Andean bilingual intercultural education and preservation of worldview (*cosmovisión*)",
          keywords: ["intercultural", "andes", "cosmovisión", "dignity"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Pure translation or off-topic summary.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Notes that banning native languages is sad without analysing diction or cultural context.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Dissects the *diccionario* vs *historia familiar* contrast and violent diction *mutila*, linking insightfully to *glotofobia* and Andean bilingual schooling.",
        },
      ],
      hints: [
        "Focus on why the writer specifically chose the cold word *diccionario* and the harsh verb *mutila*.",
        "Connect to *educación intercultural bilingüe* and *cosmovisión*.",
      ],
    },
    {
      id: "1-identidades-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Examine",
      guideRef: "identidad-registro-hl",
      marks: 6,
      question:
        "**[HL] Criterion C Register Transformation Challenge:** Rewrite the casual blog snippet below into a formal **carta formal al Ministerio de Educación** (approx. 95–120 words in Spanish) using consistent **usted** register, official letter framing, epicene nouns, and at least one `de ahí que + subjuntivo` clause (6 marks).\n\n> *«¡Hola! Quiero contaros que en mi cole nadie habla de las lenguas indígenas de América ni del euskera o el catalán. Es súper triste porque así los chicos/as creen que solo existe el español de Madrid. ¡Tenéis que cambiar el programa ya!»*",
      modelAnswer:
        "Estimado/a Sr./Sra. Ministro/a de Educación:\n\nLe escribo en calidad de representante del alumnado con el propósito de poner de relieve una carencia preocupante en el currículo actual: la escasa atención prestada a la riqueza plurilingüe del mundo hispanohablante, desde el euskera, el catalán y el gallego hasta lenguas originarias como el quechua o el guaraní.\n\nSi bien el dominio del castellano constituye un pilar esencial, omitir esta diversidad perpetúa prejuicios lingüísticos y visiones reduccionistas; de ahí que resulte imprescindible que su ministerio incorpore módulos interculturales obligatorios.\n\nAgradeciendo de antemano su atención, queda a su disposición,\nAtentamente,\n[Nombre y apellidos]",
      markScheme: [
        {
          point: "Opens with formal ministerial salutation and explicit formal purpose (`Estimado/a... Le escribo...`)",
          keywords: ["estimado", "le escribo", "propósito"],
        },
        {
          point: "Maintains consistent `usted` / formal third-person ministerial address (`su ministerio, su atención`)",
          keywords: ["su ministerio", "su atención", "disposición"],
        },
        {
          point: "Eliminates clunky slashes via smooth epicene collective noun (`el alumnado`)",
          keywords: ["alumnado", "currículo", "carencia"],
        },
        {
          point: "Integrates accurate plurilingual examples across both Spain and Latin America",
          keywords: ["plurilingüe", "gallego", "quechua", "guaraní"],
        },
        {
          point: "Deploys `Si bien...` + `de ahí que + subjuntivo` accurately (`de ahí que resulte`)",
          keywords: ["si bien", "de ahí que resulte", "imprescindible"],
        },
        {
          point: "Closes with formal Spanish epistolary sign-off (`Atentamente`)",
          keywords: ["agradeciendo", "antemano", "atentamente"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Fails to transform register or remains informal.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Attempts formal greeting but slips back into *tú/vosotros* or casual slang.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Consistent *usted* formal letter with solid B2 vocabulary, though missing one structural target.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Exemplary HL Band 10–12 *carta formal*: authoritative ministerial tone, epicene lexis, rich plurilingual references, `Si bien` + `de ahí que + subj.`, and crisp epistolary conventions.",
        },
      ],
      hints: [
        "Never mix *vosotros* (*tenéis, contaros*) into a formal letter — convert completely to *usted* (*Le escribo, su ministerio*).",
        "Replace *los chicos/as* with *el alumnado* and *es súper triste* with *constituye una carencia preocupante*.",
        "Include formal closing conventions (*Agradeciendo de antemano su atención... Atentamente*).",
      ],
    },
    {
      id: "1-identidades-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "To what extent",
      guideRef: "identidad-registro-hl",
      marks: 6,
      question:
        "**[HL] Individual Oral Part 3 Preparation:** *«¿Hasta qué punto las redes sociales globales amenazan o enriquecen la identidad cultural de los jóvenes hispanohablantes?»* Draft a structured **Band 10–12 spoken-register response** in Spanish (approx. 100–130 words) balancing BOTH threat and enrichment with concrete Hispanic examples and at least two C1 discourse markers (6 marks).",
      modelAnswer:
        "A mi juicio, las plataformas digitales constituyen un verdadero arma de doble filo para la identidad juvenil hispanohablante. Por un lado, es innegable que la presión estética algorítmica y la avalancha de anglicismos superfluos pueden homogeneizar los gustos locales y menoscabar la autoestima adolescente. No obstante, lejos de limitarse a imponer modelos ajenos, las redes también han abierto espacios vibrantes de reivindicación cultural: hoy jóvenes indígenas en México y Bolivia difunden el náhuatl, el quechua y el arte textil tradicional en vídeos breves que alcanzan a millones de personas. En definitiva, el impacto depende del uso crítico; de ahí que convenga fomentar la alfabetización digital y el orgullo pluricultural desde la infancia.",
      markScheme: [
        {
          point: "Frames balanced thesis immediately using a C1 idiom (`arma de doble filo`) and opinion opener",
          keywords: ["a mi juicio", "arma de doble filo", "plataformas"],
        },
        {
          point: "Evaluates the threat accurately (algorithmic aesthetic pressure, homogenisation, anglicisms, `es innegable que` + indicative)",
          keywords: ["innegable", "algorítmica", "homogeneizar", "menoscabar"],
        },
        {
          point: "Pivots clearly with C1 connectors (`No obstante, lejos de...`) to the enrichment counter-argument",
          keywords: ["no obstante", "lejos de", "reivindicación"],
        },
        {
          point: "Grounds enrichment in concrete Hispanophone examples (indigenous youth reviving Náhuatl/Quechua/textiles digitally)",
          keywords: ["méxico", "bolivia", "náhuatl", "textil"],
        },
        {
          point: "Concludes incisively with `En definitiva` and `de ahí que` + subjunctive (`convenga`)",
          keywords: ["en definitiva", "de ahí que convenga", "alfabetización"],
        },
        {
          point: "Sustains natural, articulate Band 10–12 spoken Spanish register throughout",
          keywords: ["pluricultural", "autoestima", "crítico"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No meaningful thematic response.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "One-sided IGCSE list of pros/cons without Hispanic cultural anchors.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Balanced B2 oral response covering both threat and benefit with clear connectors.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Band 10–12 HL IO mastery: idiomatic framing, balanced critique, vivid Latin American cultural proof, and flawless C1 discourse architecture (`es innegable que`, `no obstante`, `lejos de`, `de ahí que + subj.`).",
        },
      ],
      hints: [
        "Balance threat (*presión estética, homogeneización, anglicismos*) against digital cultural revitalisation (*jóvenes que difunden quechua/náhuatl y moda artesanal*).",
        "Include natural spoken C1 transitions: *A mi juicio, Por un lado, No obstante, En definitiva, de ahí que convenga...*",
      ],
    },
  ],
};
