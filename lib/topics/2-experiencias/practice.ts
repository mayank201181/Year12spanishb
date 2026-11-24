import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "2-experiencias-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ocio-viajes-turismo",
      strategy: "Meaning-Changing Preterite Verbs",
      question:
        "Complete the sentence with the exact 3rd-person singular past form of **conocer** to mean *'met for the first time'*:\n*«Durante su voluntariado en Costa Rica, Mateo _____ a una bióloga marina que cambió su vocación.»*",
      answer: { type: "text", accept: ["conoció"] },
      traps: [
        {
          spec: { type: "text", accept: ["conocía"] },
          feedback: "*Conocía* (imperfecto) means he already knew her beforehand; meeting for the first time takes the *indefinido* (**conoció**).",
        },
      ],
      solution: [
        "Meeting someone for the first time is a bounded change-of-state event, not an ongoing state.",
        "Therefore *conocer* takes the *pretérito indefinido* (3rd-person singular): **conoció** (remember the tilde on the final *ó*).",
      ],
      commonError: "Using *conocía* ('knew') instead of *conoció* ('met'), or omitting the accent mark.",
      hints: [
        "Does *meeting for the first time* represent an ongoing state or a single point of change?",
      ],
    },
    {
      id: "2-experiencias-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ocio-viajes-turismo",
      strategy: "Imperfecto for Ongoing Backdrop",
      question:
        "Complete with the 1st-person plural *imperfecto* of **recorrer** to describe the ongoing backdrop:\n*«Mientras _____ los senderos de Machu Picchu, una niebla densa cubrió la montaña.»*",
      answer: { type: "text", accept: ["recorríamos"] },
      traps: [
        {
          spec: { type: "text", accept: ["recorrimos"] },
          feedback: "*Recorrimos* is *pretérito indefinido*; after *mientras* for an interrupted background action, use the *imperfecto* (**recorríamos**).",
        },
      ],
      solution: [
        "*Mientras* sets the continuous background action interrupted by *cubrió* (*indefinido*).",
        "The 1st-person plural *imperfecto* of *-er* verb *recorrer* is **recorríamos** (with a tilde on the *í*).",
      ],
      commonError: "Using *recorrimos* instead of the ongoing *imperfecto* **recorríamos**.",
      hints: [
        "Look at *mientras* paired with the sudden interruption *cubrió*.",
      ],
    },
    {
      id: "2-experiencias-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ocio-viajes-turismo",
      strategy: "Theme 2 Tourism Lexis",
      question:
        "Give the exact two-word Spanish noun phrase (without article) for the **environmental footprint** left by long-haul travel (starts with *huella...*).",
      answer: { type: "text", accept: ["huella ecológica", "la huella ecológica", "huella ambiental", "la huella ambiental", "huella de carbono", "la huella de carbono"] },
      solution: [
        "In IB Spanish B sustainability texts, 'ecological/environmental footprint' is **huella ecológica** (and *huella de carbono* for carbon footprint).",
        "Pair it with verbs like *reducir*, *compensar*, or *minimizar* in Paper 1 essays.",
      ],
      hints: [
        "The first noun is *huella* ('footprint').",
        "Add the feminine singular adjective meaning 'ecological' (don't forget the accent mark!).",
      ],
    },
    {
      id: "2-experiencias-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "costumbres-tradiciones-ritos",
      strategy: "Defective Verb Soler",
      question:
        "Complete this sentence about a childhood family custom using the 1st-person plural *imperfecto* of **soler**:\n*«Cada noviembre, mis padres y yo _____ colocar fotos de los abuelos en la ofrenda.»*",
      answer: { type: "text", accept: ["solíamos"] },
      traps: [
        {
          spec: { type: "text", accept: ["solimos"] },
          feedback: "*Soler* is defective and NEVER takes the *pretérito indefinido*; past habits always use **solíamos**.",
        },
        {
          spec: { type: "text", accept: ["usábamos"] },
          feedback: "*Usar* means 'to use an object', not 'used to' for past habits; use **solíamos**.",
        },
      ],
      solution: [
        "Expressing 'used to' in Spanish uses the imperfect of *soler* + infinitive.",
        "For *mis padres y yo* (*nosotros*), the form is **solíamos**.",
      ],
      hints: [
        "Remember *soler* only conjugates in present and imperfect.",
        "Match *mis padres y yo* (*nosotros*) in the *-er* imperfect ending: *-íamos*.",
      ],
    },
    {
      id: "2-experiencias-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "costumbres-tradiciones-ritos",
      strategy: "Pasiva Refleja Number Agreement",
      question:
        "Complete with the present-tense *pasiva refleja* (two words: *se* + verb) of **quemar**:\n*«La noche del 19 de marzo, _____ cientos de monumentos satíricos durante Las Fallas de Valencia.»*",
      answer: { type: "text", accept: ["se queman"] },
      traps: [
        {
          spec: { type: "text", accept: ["se quema"] },
          feedback: "Check subject-verb agreement: *cientos de monumentos satíricos* is plural, so the verb must be plural (**se queman**).",
        },
      ],
      solution: [
        "Identify the passive grammatical subject: *cientos de monumentos satíricos* (plural).",
        "In a *pasiva refleja*, the verb agrees with a plural subject: **se queman**.",
      ],
      hints: [
        "Is the noun phrase *cientos de monumentos satíricos* singular or plural?",
        "Make the verb after *se* match that number.",
      ],
    },
    {
      id: "2-experiencias-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "costumbres-tradiciones-ritos",
      strategy: "Hispanic Cultural Vocabulary",
      question:
        "Name the single Spanish noun (with or without article) for the cherished custom of lingering at the table after a shared meal for unhurried conversation.",
      answer: { type: "text", accept: ["sobremesa", "la sobremesa"] },
      solution: [
        "The unhurried after-meal conversation central to Hispanic family and social life is **la sobremesa**.",
        "Literally 'over/around the table', it reflects relational time and community cohesion.",
      ],
      hints: [
        "It combines *sobre* ('over/upon') + *mesa* ('table').",
      ],
    },
    {
      id: "2-experiencias-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "historias-vida-migracion",
      strategy: "Pluscuamperfecto Irregular Participle",
      question:
        "Complete with the 3rd-person singular *pretérito pluscuamperfecto* (two words) of **volver**:\n*«Cuando entrevistaron a Javier en Quito, ya _____ de España hacía cinco años.»*",
      answer: { type: "text", accept: ["había vuelto"] },
      traps: [
        {
          spec: { type: "text", accept: ["había volvido"] },
          feedback: "*Volver* has an irregular past participle (**vuelto**, never *volvido*).",
        },
      ],
      solution: [
        "Returning occurred *before* the interview (*entrevistaron*) → *pretérito pluscuamperfecto*.",
        "3rd-person singular *imperfecto de haber* (**había**) + irregular participle of *volver* (**vuelto**) = **había vuelto**.",
      ],
      hints: [
        "Use *había* + the past participle of *volver*.",
        "Recall the irregular participle in **REVV MAC PHDD**: *volver → vuelto*.",
      ],
    },
    {
      id: "2-experiencias-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "historias-vida-migracion",
      strategy: "Migration Lexis Precision",
      question:
        "Write the exact plural Spanish noun (with or without article) for the money migrants send back to support their families in their country of origin.",
      answer: { type: "text", accept: ["remesas", "las remesas"] },
      solution: [
        "Money transferred home by migrants is called **las remesas** (remittances).",
        "In Latin America, *las remesas* are a key macroeconomic pillar discussed in IB Paper 2 articles.",
      ],
      hints: [
        "Think of the Spanish cognate close to 'remittances'.",
        "It is a feminine plural noun ending in *-as*.",
      ],
    },
    {
      id: "2-experiencias-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "memoria-identidad-migratoria-hl",
      strategy: "Como Si + Imperfect Subjunctive",
      question:
        "[HL] Complete with the 3rd-person singular *imperfecto de subjuntivo* of **vivir**:\n*«Mi abuela recordaba su pueblo andaluz como si todavía _____ frente a la plaza mayor.»*",
      answer: { type: "text", accept: ["viviera", "viviese"] },
      traps: [
        {
          spec: { type: "text", accept: ["vivía"] },
          feedback: "**Como si** NEVER takes the indicative; it always triggers the *imperfecto* (or *pluscuamperfecto*) de subjuntivo (**viviera / viviese**).",
        },
        {
          spec: { type: "text", accept: ["viva"] },
          feedback: "Present subjunctive (*viva*) is never used after *como si*; shift to the *imperfecto de subjuntivo* (**viviera / viviese**).",
        },
      ],
      solution: [
        "**Como si** always governs the *imperfecto* or *pluscuamperfecto de subjuntivo*.",
        "Take *ellos* preterite (*vivieron*) → drop *-ron* → add *-ra* or *-se*: **viviera** / **viviese**.",
      ],
      hints: [
        "Remember the invariant rule for **como si**.",
        "Start from *vivieron*, remove *-ron*, and attach the 3rd-person singular ending.",
      ],
    },
    {
      id: "2-experiencias-quiz-q10",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "memoria-identidad-migratoria-hl",
      strategy: "Nosotros Imperfect Subjunctive + Tilde",
      question:
        "[HL] Complete with the 1st-person plural *imperfecto de subjuntivo* of **tener**:\n*«A mis padres les conmovió que nosotros _____ tanto interés por la historia de su emigración.»*",
      answer: { type: "text", accept: ["tuviéramos", "tuviésemos"] },
      traps: [
        {
          spec: { type: "text", accept: ["tengamos"] },
          feedback: "The main trigger (*les conmovió que*) is in the past, so sequence of tenses requires *imperfecto de subjuntivo* (**tuviéramos / tuviésemos**), not present subjunctive.",
        },
        {
          spec: { type: "text", accept: ["teníamos"] },
          feedback: "Emotion triggers (*conmover que*) require the subjunctive mood, not the indicative *teníamos*.",
        },
      ],
      solution: [
        "Past emotion (*les conmovió que*) triggers the *imperfecto de subjuntivo*.",
        "From *ellos* preterite *tuvieron* → *tuvie-* + *-´ramos* = **tuviéramos** (or **tuviésemos**), with a mandatory tilde on the *é*.",
      ],
      hints: [
        "Check both mood (past emotion → subjunctive) and tense (past trigger → imperfect subjunctive).",
        "Derive the stem from *tuvieron* and remember the mandatory *nosotros* accent mark.",
      ],
    },
  ],
  papers: [
    {
      id: "2-experiencias-p1",
      title: "Practice Paper 1 — Sustainable Tourism, Traditions & Past Narration (SL)",
      level: "SL",
      questions: [
        {
          id: "2-experiencias-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ocio-viajes-turismo",
          strategy: "Meaning-Changing Preterite Verbs",
          question:
            "Complete with the exact 1st-person singular past form of **saber** to mean *'found out'*:\n*«Ayer _____ que el Ayuntamiento de Barcelona limitará aún más las licencias de pisos turísticos.»*",
          answer: { type: "text", accept: ["supe"] },
          traps: [
            {
              spec: { type: "text", accept: ["sabía"] },
              feedback: "*Sabía* means 'I already knew'; finding out yesterday (*ayer*) requires the *indefinido* (**supe**).",
            },
          ],
          solution: [
            "The time marker *ayer* + sudden discovery ('found out') requires the *pretérito indefinido* of *saber*.",
            "Irregular stem *sup-* + *-e* (no accent mark!) = **supe**.",
          ],
          hints: [
            "Look at *ayer* and the meaning 'found out'.",
          ],
        },
        {
          id: "2-experiencias-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ocio-viajes-turismo",
          strategy: "Meaning-Changing Preterite (No Poder = Failed)",
          question:
            "Complete with the exact 3rd-person plural past form of **poder** to convey that they *failed to* enter:\n*«Los viajeros no _____ entrar en Machu Picchu porque el cupo diario ya estaba completo.»*",
          answer: { type: "text", accept: ["pudieron"] },
          traps: [
            {
              spec: { type: "text", accept: ["podían"] },
              feedback: "*No podían* expresses ongoing general inability, whereas a completed failed attempt takes the *indefinido* (**pudieron**).",
            },
          ],
          solution: [
            "Being turned away because the daily quota was full is a completed outcome (*failed to enter*).",
            "Irregular 3rd-person plural *pretérito indefinido* of *poder* = **pudieron**.",
          ],
          hints: [
            "Check whether the sentence describes general past capability or a specific completed failure.",
            "Remember the irregular preterite stem of *poder*: *pud-*.",
          ],
        },
        {
          id: "2-experiencias-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ocio-viajes-turismo",
          strategy: "Paper 2 Reading Synonym Match",
          question:
            "Read this sentence from a Spanish press article: *«La **saturación** de visitantes en el centro histórico ha encarecido los alquileres de forma alarmante.»*\nWrite ONE single Spanish noun from Theme 2 meaning *overcrowding / mass concentration* (starts with *m...* and ends in *-ción*).",
          answer: { type: "text", accept: ["masificación", "la masificación"] },
          solution: [
            "The exact IB Spanish B synonym for visitor overcrowding (*saturación*) is **masificación** (*la masificación turística*).",
            "Remember the accent mark on the final *-ón*.",
          ],
          hints: [
            "Think of the noun formed from *masa* (mass) used with *turística*.",
            "It has five syllables and ends in *-ción*.",
          ],
        },
        {
          id: "2-experiencias-p1-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "ocio-viajes-turismo",
          strategy: "Paper 2 Reading Comprehension",
          marks: 3,
          question:
            "Read this short extract from a Balearic newspaper and answer in English:\n\n*«En Mallorca, el turismo genera cerca de la mitad del empleo regional; sin embargo, numerosos médicos y docentes renuncian a trabajar en la isla porque sus salarios no alcanzan para pagar un piso cerca de su centro de trabajo.»*\n\n**Explain** the paradox affecting Mallorca described in the extract. *(3 marks)*",
          modelAnswer:
            "Tourism drives almost half of the island's job market, creating major economic prosperity. However, soaring housing costs caused by visitor demand mean essential workers such as doctors and teachers cannot afford rent near their workplaces, leading them to decline posts on the island and weakening public services.",
          markScheme: [
            {
              point: "Notes the major economic benefit: tourism generates nearly half of regional employment.",
              keywords: ["half", "job market", "employment", "prosperity"],
            },
            {
              point: "Identifies the housing affordability crisis driven by visitor demand.",
              keywords: ["housing costs", "afford rent", "cannot afford"],
            },
            {
              point: "Explains the consequence: essential professionals (doctors/teachers) turn down jobs on the island, straining public services.",
              keywords: ["doctors", "teachers", "decline posts", "public services"],
            },
          ],
          commonError: "Only translating one half of the sentence (either jobs OR housing) without explaining why the two facts form a paradox.",
          hints: [
            "A paradox requires stating BOTH sides connected by *sin embargo*.",
            "Mention specifically which professions are affected (*médicos y docentes*) and why they turn down positions.",
          ],
        },
        {
          id: "2-experiencias-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Suggest",
          guideRef: "ocio-viajes-turismo",
          strategy: "Policy Solutions in Authentic Spanish",
          marks: 4,
          question:
            "In **Spanish** (approx. 60–80 words), **suggest** two concrete measures a coastal Spanish city could adopt to curb mass tourism without collapsing its local economy. Use at least two Theme 2 technical terms.",
          modelAnswer:
            "En primer lugar, el ayuntamiento podría impulsar la desestacionalización mediante rutas culturales y gastronómicas durante la temporada baja, lo cual estabilizaría el empleo anual. En segundo lugar, resultaría eficaz aplicar una tasa turística progresiva cuyos ingresos financien el transporte público y regulen los pisos turísticos, respetando así la capacidad de carga del casco histórico sin perjudicar al comercio local.",
          markScheme: [
            {
              point: "Proposes a first concrete, viable measure (e.g., off-peak diversification / desestacionalización).",
              keywords: ["desestacionalización", "temporada baja", "rutas culturales"],
            },
            {
              point: "Proposes a second concrete measure (e.g., progressive tourist tax or regulating short-term rentals).",
              keywords: ["tasa turística", "pisos turísticos", "regulen"],
            },
            {
              point: "Explains how the measures protect the local economy or residents (year-round jobs, funding public transport, protecting local shops).",
              keywords: ["empleo anual", "transporte público", "comercio local"],
            },
            {
              point: "Deploys accurate B2–C1 sustainability vocabulary and conditional/evaluative phrasing.",
              keywords: ["capacidad de carga", "podría", "resultaría"],
            },
          ],
          commonError: "Proposing banning tourists completely rather than balancing sustainability with local economic stability.",
          hints: [
            "Use conditional structures (*podría impulsar, resultaría eficaz*) appropriate for making suggestions.",
            "Include precise lexis such as *desestacionalización*, *tasa turística*, *pisos turísticos*, or *capacidad de carga*.",
          ],
        },
        {
          id: "2-experiencias-p1-q06",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "costumbres-tradiciones-ritos",
          strategy: "Pasiva Refleja Agreement",
          question:
            "Complete with the present-tense *pasiva refleja* (two words) of **colocar**:\n*«En los altares del Día de los Muertos, _____ velas, fotografías y flores de cempasúchil.»*",
          answer: { type: "text", accept: ["se colocan"] },
          traps: [
            {
              spec: { type: "text", accept: ["se coloca"] },
              feedback: "The subject (*velas, fotografías y flores*) is plural, so the *pasiva refleja* requires plural **se colocan**.",
            },
          ],
          solution: [
            "The compound subject *velas, fotografías y flores de cempasúchil* is plural.",
            "Therefore use 3rd-person plural *pasiva refleja*: **se colocan**.",
          ],
          hints: [
            "Check whether the objects placed on the altar are singular or plural.",
          ],
        },
        {
          id: "2-experiencias-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "costumbres-tradiciones-ritos",
          strategy: "Hispanic Festival Terminology",
          question:
            "Name the single Spanish noun (singular or plural, with or without article) for the giant satirical papier-mâché figures created and burned during *Las Fallas* in Valencia.",
          answer: { type: "text", accept: ["ninots", "los ninots", "ninot", "el ninot"] },
          solution: [
            "The satirical figures displayed in Valencian *Fallas* monuments are called **ninots** (singular: *ninot*, a Valencian/Catalan loanword used in Spanish).",
            "One voted figure (*el ninot indultat*) is spared from the flames of *la Cremà* each year.",
          ],
          hints: [
            "It is a short loanword from Valencian starting with *n-*.",
            "Only one of them is pardoned (*indultado*) from the fire each March.",
          ],
        },
        {
          id: "2-experiencias-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "costumbres-tradiciones-ritos",
          strategy: "Ritual → Value → Tension (R-V-T)",
          marks: 4,
          question:
            "**Distinguish** between *Día de los Muertos* in Mexico and Halloween in terms of origin, emotional tone, and core cultural purpose. Answer in clear English or Spanish (4–6 sentences).",
          modelAnswer:
            "Día de los Muertos blends pre-Hispanic Mesoamerican reverence for ancestors with Catholic All Souls' traditions, whereas Halloween derives primarily from the Celtic festival of Samhain and modern Anglo-American commercial culture. Emotionally, Día de los Muertos is warm, colourful, and celebratory, welcoming departed relatives home through marigolds, candles, and favourite dishes rather than invoking horror or fear. Its core purpose is preserving intergenerational memory and family continuity, not trick-or-treating or spooky costumes.",
          markScheme: [
            {
              point: "Contrasts cultural/historical origins (Mesoamerican + Catholic fusion vs Celtic Samhain/Anglo commercial roots).",
              keywords: ["mesoamerican", "catholic", "celtic", "samhain"],
            },
            {
              point: "Contrasts emotional tone (joyful/warm celebration vs horror/fear).",
              keywords: ["warm", "celebratory", "horror", "fear"],
            },
            {
              point: "Cites authentic Mexican cultural practices (marigolds, altars/ofrendas, candles, favourite food).",
              keywords: ["marigolds", "candles", "favourite dishes", "ofrendas"],
            },
            {
              point: "Identifies the deeper value of intergenerational memory and continuity.",
              keywords: ["intergenerational memory", "continuity", "ancestors"],
            },
          ],
          commonError: "Listing decorations without stating the contrasting origins or underlying attitude toward mortality.",
          hints: [
            "Make sure you address all three aspects asked for: origin, emotional tone, and core purpose.",
            "Include specific Mexican ritual details to ground your contrast.",
          ],
        },
        {
          id: "2-experiencias-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ocio-viajes-turismo",
          strategy: "Narrating Interrupted Past Scenes",
          question:
            "Rewrite the verb in brackets in the correct past tense (*indefinido* or *imperfecto*):\n*«El sol (ponerse) _____ sobre el Pacífico cuando el capitán anunció que habíamos avistado ballenas.»*",
          answer: { type: "text", accept: ["se ponía"] },
          traps: [
            {
              spec: { type: "text", accept: ["se puso"] },
              feedback: "The sun was *in the middle of setting* (scenic backdrop) when the captain interrupted (*anunció*); use the *imperfecto* (**se ponía**).",
            },
          ],
          solution: [
            "Setting the visual atmosphere while another completed event (*anunció*) takes place uses the *imperfecto*.",
            "Reflexive pronoun *se* + 3rd-person singular imperfect of *poner* = **se ponía**.",
          ],
          hints: [
            "Apply the Camera Test: is the sunset the panning scenic background or the sudden announcement?",
            "Remember to keep the reflexive pronoun *se* before the verb.",
          ],
        },
        {
          id: "2-experiencias-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "costumbres-tradiciones-ritos",
          strategy: "Past Habit vs Single Completed Event",
          question:
            "Choose the exact 3rd-person plural past form of **celebrar** for this single completed historical event:\n*«En 2016, los valencianos _____ con entusiasmo la declaración de Las Fallas como Patrimonio Inmaterial por la UNESCO.»*",
          answer: { type: "text", accept: ["celebraron"] },
          traps: [
            {
              spec: { type: "text", accept: ["celebraban"] },
              feedback: "The specific year *En 2016* marks a single completed historical milestone, requiring the *pretérito indefinido* (**celebraron**).",
            },
          ],
          solution: [
            "*En 2016* anchors the sentence to one specific completed event in history.",
            "3rd-person plural *pretérito indefinido* of *celebrar* = **celebraron**.",
          ],
          hints: [
            "Notice the exact date marker *En 2016*.",
            "Is this an open-ended childhood routine or a single historical milestone?",
          ],
        },
        {
          id: "2-experiencias-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "costumbres-tradiciones-ritos",
          strategy: "IO Intercultural Comparison",
          marks: 4,
          question:
            "In **Spanish** (approx. 70–90 words), **compare** the values expressed by *la quinceañera* in Latin America with how young people in your community (or modern cities) mark the transition toward adulthood. Include one modern debate.",
          modelAnswer:
            "Tradicionalmente, la quinceañera simboliza el paso de la niñez a la madurez mediante la participación de toda la familia extensa y los padrinos, lo cual refuerza la solidaridad comunitaria. En cambio, en muchas ciudades modernas la transición suele celebrarse de forma más individual, como al cumplir dieciocho años o graduarse. No obstante, hoy existe un vivo debate sobre el endeudamiento que supone una fiesta ostentosa y sobre los roles de género tradicionales, por lo que numerosas jóvenes prefieren viajar o invertir en sus estudios.",
          markScheme: [
            {
              point: "Explains the core symbolic meaning of the quinceañera (coming of age + extended family/padrinos solidarity).",
              keywords: ["madurez", "padrinos", "solidaridad comunitaria"],
            },
            {
              point: "Draws an explicit intercultural or generational comparison using a contrastive marker.",
              keywords: ["en cambio", "dieciocho años", "graduarse"],
            },
            {
              point: "Introduces a contemporary tension (financial debt / gender expectations).",
              keywords: ["endeudamiento", "roles de género", "ostentosa"],
            },
            {
              point: "Notes how youth adapt the rite today (travelling or funding education instead).",
              keywords: ["prefieren viajar", "invertir en sus estudios", "no obstante"],
            },
          ],
          commonError: "Describing the dress and cake without explaining community solidarity (*padrinos*) or modern youth reinterpretations.",
          hints: [
            "Use the R-V-T structure: Ritual → Value (*solidaridad, madurez*) → Tension (*endeudamiento, género*).",
            "Link the two cultural contexts with *en cambio*, *mientras que*, or *no obstante*.",
          ],
        },
        {
          id: "2-experiencias-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "ocio-viajes-turismo",
          strategy: "Preterite Irregulars in Travel Recounts",
          question:
            "Complete with the 1st-person plural *pretérito indefinido* of **tener** to recount a completed setback:\n*«El verano pasado _____ un retraso de seis horas en el aeropuerto de Lima.»*",
          answer: { type: "text", accept: ["tuvimos"] },
          traps: [
            {
              spec: { type: "text", accept: ["teníamos"] },
              feedback: "A single completed event (*El verano pasado*, one six-hour delay) takes the *pretérito indefinido* (**tuvimos**).",
            },
          ],
          solution: [
            "*El verano pasado* + a bounded event (*un retraso de seis horas*) requires the *pretérito indefinido*.",
            "Irregular preterite stem of *tener* (*tuv-*) + *-imos* = **tuvimos**.",
          ],
          hints: [
            "Does *un retraso de seis horas* describe a completed event or background scenery?",
            "Recall the *u*-stem preterite of *tener*.",
          ],
        },
        {
          id: "2-experiencias-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "ocio-viajes-turismo",
          strategy: "Paper 2 Reading Tone & Implied Meaning",
          marks: 4,
          question:
            "Read this excerpt from a Galápagos conservation guide:\n\n*«Quien visita este archipiélago buscando lujo de cinco estrellas y compras nocturnas se equivoca de destino; aquí el verdadero privilegio consiste en caminar en silencio a dos metros de una iguana marina sin alterar su hábitat.»*\n\n**Analyse** how the writer defines responsible travel and how the language persuades the reader. Answer in English *(4 marks)*.",
          modelAnswer:
            "The writer opens with a blunt contrast that disqualifies consumerist, luxury-seeking tourism as completely misplaced in the archipelago. Instead, authentic travel is redefined as humility, quiet observation, and ecological non-interference. By elevating silent proximity to a marine iguana as the 'true privilege', the author flips conventional status symbols so that restraint and environmental respect feel far more exclusive and rewarding than five-star amenities.",
          markScheme: [
            {
              point: "Notes the explicit rejection of luxury/consumerist mass tourism ('five-star luxury and nightlife shopping').",
              keywords: ["consumerist", "luxury-seeking", "disqualifies"],
            },
            {
              point: "Defines responsible travel as quiet observation and non-interference with wildlife habitats.",
              keywords: ["quiet observation", "non-interference", "humility"],
            },
            {
              point: "Analyses the persuasive reframing of 'true privilege' to invert status symbols.",
              keywords: ["true privilege", "status symbols", "flips"],
            },
            {
              point: "Links the rhetorical contrast to encouraging ecological respect over material indulgence.",
              keywords: ["restraint", "environmental respect", "exclusive"],
            },
          ],
          commonError: "Simply translating the quote into English without analysing *how* the contrast and word choice ('verdadero privilegio') persuade the reader.",
          hints: [
            "Notice the rhetorical structure: rejecting one mindset (*se equivoca de destino*) before elevating another (*el verdadero privilegio*).",
            "Explain *why* calling silent wildlife observation a 'privilege' is persuasive.",
          ],
        },
        {
          id: "2-experiencias-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "ocio-viajes-turismo",
          strategy: "Paper 1 Blog Entry — Authentic Voice & Past Narration",
          marks: 6,
          question:
            "**Paper 1 Guided Task (SL · Blog Entry):** You recently spent a week volunteering on a community ecotourism project in Costa Rica or Oaxaca. Write a **150–180 word Spanish blog post** (*entrada de blog*) for fellow students in which you:\n- recount one vivid moment using *imperfecto* and *pretérito indefinido* accurately,\n- **discuss** one benefit and one limitation of ecotourism for local residents,\n- apply authentic blog conventions (title, date/author, reader engagement).",
          modelAnswer:
            "**Más allá de la postal: una semana de ecoturismo en Oaxaca**\n*Por Valentina Rojas · 14 de octubre*\n\n¿Alguna vez os habéis preguntado adónde va realmente el dinero de vuestras vacaciones? La semana pasada participé en un proyecto de turismo comunitario en la sierra de Oaxaca y mi visión cambió por completo.\n\nRecuerdo perfectamente la primera mañana: lloviznaba suavemente y las artesanas tejían lana teñida con grana cochinilla mientras conversaban en zapoteco. De pronto, doña Elena me invitó a probar el telar y comprendí cuántas horas exige cada pieza.\n\nSin duda, este modelo ofrece una ventaja decisiva: los ingresos permanecen en la comunidad y protegen el patrimonio local frente a la masificación. No obstante, también percibí una limitación importante: el acceso limitado y los precios justos hacen que pocos viajeros jóvenes puedan permitírselo, y existe el riesgo de convertir costumbres íntimas en espectáculo.\n\nY vosotros, ¿elegiríais viajar menos pero de forma más consciente? ¡Dejad vuestra opinión en los comentarios!",
          markScheme: [
            {
              point: "Uses authentic blog conventions (catchy title, author/date line, direct rhetorical engagement and call for comments).",
              keywords: ["más allá de la postal", "comentarios", "preguntado"],
            },
            {
              point: "Recounts a vivid scene blending *imperfecto* backdrop with *pretérito indefinido* turning point.",
              keywords: ["lloviznaba", "tejían", "invitó", "comprendí"],
            },
            {
              point: "Anchors the reflection in a concrete Hispanic cultural/geographical context (Oaxaca, Zapotec artisans, cochineal weaving).",
              keywords: ["zapoteco", "grana cochinilla", "telar"],
            },
            {
              point: "Discusses a clear benefit of ecotourism for local communities (local revenue retention, heritage protection).",
              keywords: ["ingresos permanecen", "patrimonio local", "masificación"],
            },
            {
              point: "Discusses a genuine limitation or tension (higher cost / accessibility or risk of staging culture).",
              keywords: ["limitación importante", "precios justos", "espectáculo"],
            },
            {
              point: "Sustains B2–C1 cohesion and register (connectors *sin duda, no obstante*, natural peer tone).",
              keywords: ["sin duda", "no obstante", "consciente"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant Spanish response or completely off-task.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic IGCSE-style holiday recount with frequent past-tense errors, weak blog conventions, and little discussion of ecotourism tensions.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear blog structure and mostly accurate preterite/imperfect contrast; mentions both a benefit and limitation with developing Theme 2 vocabulary.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Engaging Band 10–12 blog voice with seamless aspect control (*imperfecto + indefinido*), nuanced Hispanic context, balanced evaluation, and precise B2–C1 connectors.",
            },
          ],
          commonError: "Forgetting blog conventions (title, interactive closing inviting comments) or writing purely positive praise with zero critical limitation.",
          hints: [
            "Open with a catchy headline, byline, and a direct question to hook student readers.",
            "Show—don't just tell—your experience by pairing an *imperfecto* scene with a sudden *indefinido* moment.",
            "Use *sin duda... no obstante...* to balance one clear benefit against one realistic limitation.",
          ],
        },
        {
          id: "2-experiencias-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "costumbres-tradiciones-ritos",
          strategy: "Balanced Cultural Evaluation (Paper 1 Editorial)",
          marks: 6,
          question:
            "**Evaluate** the statement: *«La globalización amenaza inevitablemente la supervivencia de las tradiciones hispanas como Las Fallas, la sobremesa o el Día de los Muertos.»*\n\nWrite a balanced analytical paragraph in **Spanish** (140–170 words) weighing threats against ways globalisation can also revitalise traditions.",
          modelAnswer:
            "Resulta innegable que la globalización somete a numerosas costumbres hispanas a presiones constantes. Por un lado, el ritmo acelerado de la vida urbana y el uso incesante de las pantallas acortan la sobremesa familiar, mientras que la mercantilización turística corre el peligro de vaciar de sentido espiritual los altares del Día de los Muertos. Sin embargo, afirmar que su desaparición es inevitable sería simplificar una realidad mucho más dinámica. De hecho, las redes sociales y el reconocimiento internacional de la UNESCO han despertado el orgullo cultural entre las nuevas generaciones, permitiendo que artesanos valencianos y comunidades mexicanas difundan su patrimonio y obtengan recursos para preservarlo. Además, la diáspora hispana recrea estas celebraciones en el extranjero, demostrando su enorme capacidad de adaptación. En conclusión, la globalización no condena automáticamente las tradiciones, siempre y cuando las comunidades conserven el protagonismo sobre su propio legado.",
          markScheme: [
            {
              point: "Acknowledges genuine threats posed by globalisation (urban pace/screens shortening *sobremesa*, commercial tourism).",
              keywords: ["pantallas", "mercantilización turística", "vaciar de sentido"],
            },
            {
              point: "Challenges the word 'inevitable' with a clear counter-argument pivot (*sin embargo, simplificar*).",
              keywords: ["simplificar", "sin embargo", "dinámica"],
            },
            {
              point: "Explains how global visibility / UNESCO / digital media can strengthen youth pride and artisan funding.",
              keywords: ["unesco", "orgullo cultural", "recursos para preservarlo"],
            },
            {
              point: "Notes adaptation across the Hispanic diaspora as proof of resilience.",
              keywords: ["diáspora hispana", "capacidad de adaptación", "extranjero"],
            },
            {
              point: "Reaches a nuanced concluding judgment conditional on community agency.",
              keywords: ["en conclusión", "siempre y cuando", "protagonismo"],
            },
            {
              point: "Demonstrates Band 10–12 cohesion and grammar (*siempre y cuando + subjuntivo*, formal register).",
              keywords: ["conserven", "legado", "resulta innegable"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant argument or incomprehensible Spanish.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "One-sided opinion agreeing or disagreeing simplistically with limited examples and repetitive vocabulary.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Addresses both sides with relevant Hispanic examples and generally clear B1–B2 Spanish.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Nuanced, well-structured B2–C1 evaluation directly interrogating 'inevitably', weaving concrete Hispanic traditions with sophisticated discourse markers and subjunctive accuracy.",
            },
          ],
          commonError: "Agreeing 100% with the quote without evaluating how global platforms, UNESCO status, or diaspora youth can revitalise heritage.",
          hints: [
            "Interrogate the absolute adverb *inevitablemente*—that is your signal to construct a nuanced two-sided evaluation.",
            "Include at least one concrete threat (*mercantilización, pantallas*) AND one counter-force (*UNESCO, diáspora, orgullo juvenil*).",
            "End with a conditional synthesis using *siempre y cuando + subjuntivo*.",
          ],
        },
      ],
    },
    {
      id: "2-experiencias-p2",
      title: "Practice Paper 2 — Migration, Sequencing & [HL] Testimony Analysis",
      level: "HL",
      questions: [
        {
          id: "2-experiencias-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "historias-vida-migracion",
          strategy: "Pluperfect Irregular Participles",
          question:
            "Complete with the 3rd-person singular *pretérito pluscuamperfecto* (two words) of **hacer**:\n*«Antes de embarcar hacia Buenos Aires, mi bisabuelo ya _____ una maleta de madera con sus herramientas.»*",
          answer: { type: "text", accept: ["había hecho"] },
          traps: [
            {
              spec: { type: "text", accept: ["había hacido"] },
              feedback: "*Hacer* has an irregular past participle: **hecho** (never *hacido*).",
            },
          ],
          solution: [
            "Packing the trunk occurred *prior* to boarding (*antes de embarcar*) → *pluscuamperfecto*.",
            "*Había* + irregular participle of *hacer* (**hecho**) = **había hecho**.",
          ],
          hints: [
            "Remember the irregular past participle of *hacer*.",
          ],
        },
        {
          id: "2-experiencias-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "historias-vida-migracion",
          strategy: "Pluperfect Irregular Participles",
          question:
            "Complete with the 1st-person plural *pretérito pluscuamperfecto* (two words) of **ver**:\n*«Cuando llegamos a Salamanca en enero, nunca antes _____ un invierno tan frío.»*",
          answer: { type: "text", accept: ["habíamos visto"] },
          traps: [
            {
              spec: { type: "text", accept: ["habíamos vido"] },
              feedback: "The irregular past participle of *ver* is **visto** (never *vido*).",
            },
          ],
          solution: [
            "Having never seen such a cold winter predates arriving in Salamanca (*llegamos*).",
            "1st-person plural *imperfecto de haber* (**habíamos**) + irregular participle (**visto**) = **habíamos visto**.",
          ],
          hints: [
            "Match *nosotros* (*llegamos*) with the correct imperfect form of *haber*.",
            "Check the irregular participle of *ver*.",
          ],
        },
        {
          id: "2-experiencias-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "historias-vida-migracion",
          strategy: "Migration Vocabulary Antonyms",
          question:
            "In migration texts, **el arraigo** refers to a deep sense of belonging and rootedness. Write the exact single Spanish noun (with or without article) for its antonym—**uprootedness**.",
          answer: { type: "text", accept: ["desarraigo", "el desarraigo"] },
          solution: [
            "Adding the negative prefix *des-* to *arraigo* produces **el desarraigo** (uprootedness / feeling severed from one's roots).",
            "Pair it with verbs like *superar el desarraigo* or *combatir el desarraigo*.",
          ],
          hints: [
            "Add a standard Spanish negative prefix directly before *arraigo*.",
            "It means feeling cut off from one's homeland.",
          ],
        },
        {
          id: "2-experiencias-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "historias-vida-migracion",
          strategy: "Pluperfect Irregular Participles (Resolver)",
          question:
            "Complete with the 3rd-person plural *pretérito pluscuamperfecto* (two words) of **resolver**:\n*«Al cabo de un año, los abogados todavía no _____ el expediente de homologación.»*",
          answer: { type: "text", accept: ["habían resuelto"] },
          traps: [
            {
              spec: { type: "text", accept: ["habían resolvido"] },
              feedback: "*Resolver* shares the irregular participle pattern of *volver*: **resuelto** (never *resolvido*).",
            },
          ],
          solution: [
            "Looking back from *al cabo de un año*, the dossier still had not been resolved → *pluscuamperfecto*.",
            "3rd-person plural *habían* + irregular participle **resuelto** = **habían resuelto**.",
          ],
          hints: [
            "What is the irregular past participle of *volver*? Apply the same pattern to *resolver*.",
            "Match plural *los abogados* with *habían*.",
          ],
        },
        {
          id: "2-experiencias-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "historias-vida-migracion",
          strategy: "Paper 2 Reading Comprehension & Contrast Pivots",
          marks: 4,
          question:
            "Read this excerpt from an interview with a Colombian architect in Barcelona:\n\n*«Muchos suponen que me fui de Medellín por falta de trabajo, pero en realidad tenía un buen estudio allí; acepté la beca de máster en urbanismo porque quería investigar modelos de vivienda sostenible. Lo que no anticipaba era la burocracia interminable para renovar mi permiso cada año.»*\n\nIn **English**, **explain** (a) why people's assumption about her move is incorrect, (b) her actual motivation for going to Barcelona, and (c) the unexpected obstacle she encountered there. *(4 marks)*",
          modelAnswer:
            "Although many people assume she left Medellín due to joblessness, she actually already ran a successful architectural practice there. Her genuine motivation was academic and professional: she accepted an urban-planning master's scholarship to research sustainable housing models. Once settled in Barcelona, however, she faced an unforeseen hurdle—exhausting, endless red tape required every year just to renew her residence permit.",
          markScheme: [
            {
              point: "Refutes the common assumption: she was not unemployed and already had a thriving practice in Colombia.",
              keywords: ["joblessness", "successful architectural practice", "already ran"],
            },
            {
              point: "Identifies her real pull factor: accepting a master's scholarship in urban planning.",
              keywords: ["urban-planning", "master's scholarship", "academic"],
            },
            {
              point: "Specifies her research goal: investigating sustainable housing models.",
              keywords: ["sustainable housing", "research"],
            },
            {
              point: "Explains the unforeseen obstacle: endless red tape every year to renew her residence permit.",
              keywords: ["red tape", "renew her residence permit", "unforeseen hurdle"],
            },
          ],
          commonError: "Misreading *«Muchos suponen que me fui por falta de trabajo»* as the speaker's actual reason instead of noticing the pivot *pero en realidad*.",
          hints: [
            "Watch out for Paper 2 contrast pivots like *pero en realidad*—they overturn the distractor before them!",
            "Make sure you address all three parts: the false assumption, her true academic motive, and the annual renewal obstacle.",
          ],
        },
        {
          id: "2-experiencias-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "memoria-identidad-migratoria-hl",
          strategy: "Past Emotion Trigger + Imperfect Subjunctive",
          question:
            "[HL] Complete with the 3rd-person singular *imperfecto de subjuntivo* of **mantener**:\n*«Me emocionó profundamente que mi madre _____ intacto su acento porteño tras treinta años en España.»*",
          answer: { type: "text", accept: ["mantuviera", "mantuviese"] },
          traps: [
            {
              spec: { type: "text", accept: ["mantenga"] },
              feedback: "Because *me emocionó* is in the past, sequence of tenses requires the *imperfecto de subjuntivo* (**mantuviera / mantuviese**).",
            },
            {
              spec: { type: "text", accept: ["mantenía"] },
              feedback: "*Me emocionó que* is a subjunctive emotion trigger, not indicative.",
            },
          ],
          solution: [
            "Past emotion trigger (*me emocionó que*) → *imperfecto de subjuntivo*.",
            "*Mantener* conjugates like *tener*: *ellos* preterite *mantuvieron* → drop *-ron* → **mantuviera** / **mantuviese**.",
          ],
          hints: [
            "Compound verbs based on *tener* (*mantener, obtener, sostener*) share *tener*'s preterite stem (*tuv-*).",
            "Drop *-ron* from *mantuvieron* and add the 3rd-person singular ending.",
          ],
        },
        {
          id: "2-experiencias-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "memoria-identidad-migratoria-hl",
          strategy: "Irregular Imperfect Subjunctive of Saber",
          question:
            "[HL] Complete with the 3rd-person plural *imperfecto de subjuntivo* of **saber**:\n*«Era improbable que los lectores europeos _____ las causas históricas de aquel éxodo sin escuchar a los protagonistas.»*",
          answer: { type: "text", accept: ["supieran", "supiesen"] },
          traps: [
            {
              spec: { type: "text", accept: ["sabían"] },
              feedback: "*Era improbable que* expresses past improbability and requires the *imperfecto de subjuntivo* (**supieran / supiesen**).",
            },
            {
              spec: { type: "text", accept: ["sepan"] },
              feedback: "Match the past trigger *era improbable que* with *imperfecto de subjuntivo*, not present subjunctive *sepan*.",
            },
          ],
          solution: [
            "Impersonal doubt/improbability in the past (*Era improbable que*) triggers the *imperfecto de subjuntivo*.",
            "*Ellos* preterite of *saber* is *supieron* → drop *-ron* → **supieran** / **supiesen**.",
          ],
          hints: [
            "Identify the *ellos* preterite of *saber* (*supieron*).",
            "Remove *-ron* and attach the 3rd-person plural imperfect subjunctive ending.",
          ],
        },
        {
          id: "2-experiencias-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "memoria-identidad-migratoria-hl",
          strategy: "Como Si + Irregular Imperfect Subjunctive (Ser)",
          question:
            "[HL] Complete with the 3rd-person singular *imperfecto de subjuntivo* of **ser**:\n*«Hablaba de Cartagena de Indias como si aún _____ una niña corriendo junto a la muralla.»*",
          answer: { type: "text", accept: ["fuera", "fuese"] },
          traps: [
            {
              spec: { type: "text", accept: ["era"] },
              feedback: "**Como si** always demands the *imperfecto* or *pluscuamperfecto de subjuntivo* (**fuera / fuese**), never indicative *era*.",
            },
            {
              spec: { type: "text", accept: ["sea"] },
              feedback: "*Sea* is present subjunctive; **como si** strictly takes past subjunctive (**fuera / fuese**).",
            },
          ],
          solution: [
            "*Como si* expresses a contrary-to-fact metaphor → *imperfecto de subjuntivo*.",
            "From *ellos* preterite *fueron* → drop *-ron* → **fuera** / **fuese**.",
          ],
          hints: [
            "Recall the invariable mood/tense rule after *como si*.",
            "Use the *ellos* preterite of *ser* (*fueron*) as your base stem.",
          ],
        },
        {
          id: "2-experiencias-p2-q09",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "memoria-identidad-migratoria-hl",
          strategy: "Nosotros Imperfect Subjunctive (Poder)",
          question:
            "[HL] Complete with the 1st-person plural *imperfecto de subjuntivo* of **poder**:\n*«Mis abuelos ahorraron durante décadas para que nosotros _____ estudiar en la universidad sin deudas.»*",
          answer: { type: "text", accept: ["pudiéramos", "pudiésemos"] },
          traps: [
            {
              spec: { type: "text", accept: ["podamos"] },
              feedback: "Because *ahorraron* is in the past, *para que* pulls the verb into the *imperfecto de subjuntivo* (**pudiéramos / pudiésemos**).",
            },
          ],
          solution: [
            "*Para que* (ESCAPA) ALWAYS takes subjunctive; past main clause (*ahorraron*) shifts it to *imperfecto de subjuntivo*.",
            "From *pudieron* → *pudie-* + *-´ramos* = **pudiéramos** (or **pudiésemos**), keeping the mandatory tilde on *é*.",
          ],
          hints: [
            "Check *para que* (always subjunctive) + past main verb *ahorraron*.",
            "Do not forget the written accent mark on the *nosotros* imperfect subjunctive!",
          ],
        },
        {
          id: "2-experiencias-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "historias-vida-migracion",
          strategy: "Conceptual Distinction in Migration",
          marks: 4,
          question:
            "**Compare and contrast** *factores de expulsión* (push factors) and *factores de atracción* (pull factors) in Latin American and Spanish migration, giving two concrete Hispanic examples for each. Answer in clear English or Spanish.",
          modelAnswer:
            "Both push and pull factors operate together in shaping migration journeys across the Hispanophone world, yet they act from opposite ends of the decision. Push factors compel people to leave home due to hardship—such as post-2008 youth unemployment in Spain or acute economic inflation and insecurity in parts of Central America and Venezuela. Pull factors attract newcomers to specific destinations—such as shared language and family reunification networks in Madrid or higher-education scholarships and stable salaries in Europe or North America.",
          markScheme: [
            {
              point: "Identifies the shared function (both jointly drive migration decisions) while contrasting their directional role.",
              keywords: ["opposite ends", "jointly", "operate together"],
            },
            {
              point: "Explains push factors with two concrete Hispanic examples (e.g., Spanish youth unemployment, inflation/insecurity).",
              keywords: ["youth unemployment", "inflation", "insecurity"],
            },
            {
              point: "Explains pull factors with two concrete Hispanic examples (e.g., family reunification, shared language, scholarships/stable salaries).",
              keywords: ["family reunification", "shared language", "scholarships"],
            },
            {
              point: "Anchors examples in authentic Spanish-speaking geographies (Spain, Central America, Venezuela, Madrid).",
              keywords: ["central america", "venezuela", "madrid"],
            },
          ],
          commonError: "Listing only economic reasons without including social, educational, or linguistic pull factors (*afinidad lingüística, reagrupación familiar*).",
          hints: [
            "Remember that 'Compare and contrast' asks for BOTH a similarity (how they interact) AND differences.",
            "Include two distinct Hispanic examples for push factors and two for pull factors.",
          ],
        },
        {
          id: "2-experiencias-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "memoria-identidad-migratoria-hl",
          strategy: "HL Testimony Voice & Lexical Bias",
          marks: 4,
          question:
            "[HL] Read these two descriptions of the same cross-border bus station:\n\n- **Text A (News brief):** *«El municipio afronta una presión migratoria récord tras la llegada masiva de foráneos sin recursos.»*\n- **Text B (Oral testimony):** *«Cada mochila guardaba una fotografía, un título doblado y la esperanza obstinada de volver a abrazar a los hijos.»*\n\n**Analyse** how register, imagery, and lexical choice produce sharply different emotional effects on the reader. *(4 marks)*",
          modelAnswer:
            "Text A adopts a detached, bureaucratic register ('presión migratoria récord', 'foráneos') that frames human beings as an impersonal burden straining municipal capacity, fostering distance and anxiety. In contrast, Text B uses intimate, concrete imagery—a folded university diploma and a family photograph inside a backpack—to individualise migrants as skilled parents driven by love and determination ('esperanza obstinada'). While Text A evokes institutional alarm, Text B cultivates empathy and highlights human dignity.",
          markScheme: [
            {
              point: "Identifies Text A's impersonal, bureaucratic register and alienating terms ('foráneos', 'presión').",
              keywords: ["bureaucratic", "impersonal burden", "distance"],
            },
            {
              point: "Explains the emotional effect of Text A (alarm, anxiety, framing newcomers as a strain).",
              keywords: ["alarm", "anxiety", "straining"],
            },
            {
              point: "Analyses Text B's intimate concrete objects (folded diploma, photograph) to individualise migrants' skills and family bonds.",
              keywords: ["folded university diploma", "individualise", "skilled parents"],
            },
            {
              point: "Contrasts the persuasive outcomes (institutional fear vs empathy and dignity).",
              keywords: ["empathy", "dignity", "determination"],
            },
          ],
          commonError: "Commenting only on what the texts are about instead of dissecting *specific words and images* and their effect on the reader.",
          hints: [
            "Contrast the abstract collective nouns in Text A with the tangible personal objects in Text B.",
            "Explain what the *título doblado* (folded degree) subtly contradicts in Text A (*sin recursos*).",
          ],
        },
        {
          id: "2-experiencias-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "memoria-identidad-migratoria-hl",
          strategy: "Antes de Que + Imperfect Subjunctive",
          question:
            "[HL] Complete with the 3rd-person singular *imperfecto de subjuntivo* of **desaparecer**:\n*«El documental recogió los testimonios de los emigrantes asturianos antes de que _____ aquella generación.»*",
          answer: { type: "text", accept: ["desapareciera", "desapareciese"] },
          traps: [
            {
              spec: { type: "text", accept: ["desapareció"] },
              feedback: "**Antes de que** ALWAYS triggers the subjunctive; with past main verb *recogió*, use *imperfecto de subjuntivo* (**desapareciera / desapareciese**).",
            },
            {
              spec: { type: "text", accept: ["desaparezca"] },
              feedback: "*Recogió* is in the past, so shift *antes de que* into the *imperfecto de subjuntivo* (**desapareciera / desapareciese**).",
            },
          ],
          solution: [
            "*Antes de que* always requires the subjunctive mood (ESCAPA).",
            "Because *recogió* is past, derive from *ellos* preterite *desaparecieron* → **desapareciera** / **desapareciese**.",
          ],
          hints: [
            "Does *antes de que* ever take the indicative?",
            "Match the tense of *recogió* using the *ellos* preterite stem of *desaparecer*.",
          ],
        },
        {
          id: "2-experiencias-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Examine",
          guideRef: "memoria-identidad-migratoria-hl",
          strategy: "Cultural Hybridity & Second-Generation Voice",
          marks: 5,
          question:
            "[HL] **Examine** why second-generation Hispanic youth (*la segunda generación*) often experience both tension and creative empowerment in forging an **identidad híbrida**. Write in **Spanish** (100–130 words) and include at least one *imperfecto de subjuntivo* structure.",
          modelAnswer:
            "Los jóvenes de segunda generación suelen crecer entre expectativas culturales divergentes: en casa heredan el idioma, la gastronomía y los valores familiares de sus padres, mientras que en la escuela adoptan los códigos de la sociedad receptora. En ocasiones, esta dualidad genera inseguridad, como si pertenecieran solo a medias a ambos entornos y temieran decepcionar a sus mayores. No obstante, lejos de constituir una carencia, esa identidad híbrida se convierte con frecuencia en una ventaja creativa y empática. Al dominar distintos registros culturales y lingüísticos, estos jóvenes actúan como puentes interculturales que cuestionan los estereotipos y enriquecen tanto su comunidad de origen como el país donde crecieron.",
          markScheme: [
            {
              point: "Explains the dual domestic vs public/school cultural expectations shaping second-generation life.",
              keywords: ["expectativas culturales", "sociedad receptora", "códigos"],
            },
            {
              point: "Identifies the emotional tension or feeling of incomplete belonging.",
              keywords: ["inseguridad", "a medias", "decepcionar"],
            },
            {
              point: "Reframes hybridity as a creative, empathetic strength ('intercultural bridges').",
              keywords: ["ventaja creativa", "puentes interculturales", "estereotipos"],
            },
            {
              point: "Uses at least one accurate *imperfecto de subjuntivo* form in context.",
              keywords: ["pertenecieran", "temieran", "como si"],
            },
            {
              point: "Maintains cohesive C1-oriented Spanish discourse (*en ocasiones, no obstante, lejos de*).",
              keywords: ["lejos de", "no obstante", "enriquecen"],
            },
          ],
          commonError: "Portraying bicultural identity purely as a crisis without examining how bilingual youth turn hybridity into creative agency.",
          hints: [
            "Balance the friction (*sentirse a medias*) with empowerment (*puentes interculturales*).",
            "Weave in *como si + imperfecto de subjuntivo* naturally to satisfy the HL grammar target.",
          ],
        },
        {
          id: "2-experiencias-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Describe",
          guideRef: "historias-vida-migracion",
          strategy: "Paper 1 Personal Diary — Three-Tense Narrative Control",
          marks: 6,
          question:
            "**Paper 1 Guided Task (SL · Personal Diary):** Write a **150–180 word Spanish diary entry** (*entrada de diario*) written by a young person one month after moving from Bogotá or Quito to Madrid for university. You must:\n- weave together *pluscuamperfecto*, *imperfecto*, and *pretérito indefinido* cleanly,\n- express cultural shock (*choque cultural*) and homesickness (*morriña / echar de menos*),\n- apply authentic personal diary conventions (date, salutation, intimate reflective voice).",
          modelAnswer:
            "*Madrid, 18 de octubre*\n\nQuerido diario:\n\nHoy cumplo exactamente un mes lejos de Quito y todavía me cuesta creer cuánto ha cambiado mi rutina. Antes de subir al avión, ya había investigado el plano del metro y había practicado hasta las expresiones madrileñas, convencido de que la adaptación sería facilísima.\n\n¡Qué equivocado estaba! Durante las dos primeras semanas, el ritmo acelerado de la ciudad me abrumaba y echaba muchísimo de menos las sobremesas interminables con mis abuelos y el olor del café recién hecho. Incluso el idioma me provocó un pequeño choque cultural cuando pedí un «esfero» en clase y nadie me entendió.\n\nSin embargo, ayer ocurrió algo que me devolvió el ánimo: mientras estudiaba solo en la biblioteca, una compañera sevillana me invitó a cenar con su grupo y compartimos música andina hasta medianoche. Sigo sintiendo punzadas de morriña, claro, pero por primera vez percibo que este lugar también puede convertirse en mi hogar.\n\nHasta mañana,\nMateo",
          markScheme: [
            {
              point: "Applies authentic personal diary conventions (place/date, *Querido diario*, intimate first-person sign-off).",
              keywords: ["querido diario", "hasta mañana", "18 de octubre"],
            },
            {
              point: "Uses *pretérito pluscuamperfecto* accurately for preparations prior to departure.",
              keywords: ["había investigado", "había practicado", "antes de subir"],
            },
            {
              point: "Uses *imperfecto* accurately for ongoing feelings and adaptation background.",
              keywords: ["abrumaba", "echaba muchísimo de menos", "estudiaba"],
            },
            {
              point: "Uses *pretérito indefinido* for completed turning-point events.",
              keywords: ["ocurrió", "invitó", "compartimos", "pedí"],
            },
            {
              point: "Portrays authentic linguistic/cultural shock and homesickness naturally (*esfero, sobremesas, morriña*).",
              keywords: ["esfero", "sobremesas", "morriña"],
            },
            {
              point: "Shows emotional arc from initial disorientation toward emerging belonging (*hogar*).",
              keywords: ["devolvió el ánimo", "hogar", "sin embargo"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No relevant Spanish diary response.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Weak diary voice with flat tense control (only preterite or frequent tense confusion) and superficial emotional detail.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear diary format and generally effective past-tense mixing; expresses homesickness and culture shock clearly.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authentic, emotionally resonant Band 10–12 diary seamlessly integrating *pluscuamperfecto*, *imperfecto*, and *indefinido*, regional Hispanic lexis, and a nuanced arc of adaptation.",
            },
          ],
          commonError: "Writing like a formal essay instead of an intimate diary, or forgetting to anchor *pluscuamperfecto* clearly before departure.",
          hints: [
            "Open with city, date, and *Querido diario:* to lock in Criterion C text-type marks immediately.",
            "Use *Antes de subir al avión, ya había...* for your *pluscuamperfecto* layer.",
            "Include a specific regional Spanish lexical slip (like *esfero* vs *bolígrafo*) to show authentic cultural insight.",
          ],
        },
        {
          id: "2-experiencias-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "memoria-identidad-migratoria-hl",
          strategy: "HL Paper 1 Opinion Article (Persuasion + Past Subjunctive)",
          marks: 8,
          question:
            "[HL] **Paper 1 Extended Task (HL · Opinion Article):** Write a **200–240 word Spanish opinion article** (*artículo de opinión*) for a Hispanic youth magazine discussing whether society should prioritise **integración cultural** over **asimilación** when welcoming migrant families.\nYou must:\n- deploy authentic article conventions (engaging headline, lead/byline, persuasive analytical tone),\n- argue convincingly with at least one counter-argument (*si bien es cierto que...*),\n- include at least two accurate **imperfecto de subjuntivo** structures and one **pluscuamperfecto** or C1 consecutive connector (*de ahí que + subjuntivo*).",
          modelAnswer:
            "**Puentes, no moldes: por qué la integración supera a la asimilación**\n*Por Lucía Mendoza · Revista Voces Iberoamericanas*\n\nCuando una familia cruza una frontera, no llega con las manos vacías: trae consigo oficios, historias y lenguas que enriquecen a cualquier sociedad. Sin embargo, el debate público suele confundir dos modelos radicalmente opuestos: la asimilación y la integración.\n\nSi bien es cierto que algunos sectores defienden la asimilación creyendo que la uniformidad cultural garantizaría la cohesión social, la experiencia histórica demuestra lo contrario. En décadas pasadas, era frecuente que las instituciones exigieran a los recién llegados que ocultaran su acento o sus costumbres, como si su memoria supusiera una amenaza. Aquellas políticas solo profundizaron el desarraigo de quienes ya habían sacrificado todo por prosperar.\n\nLa verdadera integración, en cambio, constituye un pacto bidireccional. Por un lado, las comunidades migrantes participan en la vida cívica y respetan las leyes comunes; por otro, la sociedad receptora agiliza la homologación de títulos y celebra la diversidad cultural. De ahí que las ciudades más dinámicas del mundo hispanohablante apuesten por escuelas interculturales y bibliotecas multilingües.\n\nEn definitiva, exigir que alguien borre sus raíces no construye convivencia; solo cuando reconocemos la riqueza de las identidades híbridas logramos sociedades verdaderamente justas.",
          markScheme: [
            {
              point: "Uses authentic opinion-article conventions (punchy thematic headline, byline/publication, engaging journalistic voice).",
              keywords: ["puentes, no moldes", "voces iberoamericanas", "en definitiva"],
            },
            {
              point: "Clearly distinguishes *asimilación* (one-way uniformity/erasure) from *integración* (bidirectional civic pact).",
              keywords: ["uniformidad cultural", "pacto bidireccional", "borre sus raíces"],
            },
            {
              point: "Weaves in a genuine counter-argument and refutes it analytically (*si bien es cierto que...*).",
              keywords: ["si bien es cierto que", "cohesión social", "demuestra lo contrario"],
            },
            {
              point: "Uses concrete migration policies/examples (homologación de títulos, intercultural schools, multilingual libraries).",
              keywords: ["homologación de títulos", "escuelas interculturales", "bibliotecas multilingües"],
            },
            {
              point: "Deploys a first accurate *imperfecto de subjuntivo* structure triggered by past evaluation.",
              keywords: ["exigieran", "ocultaran", "era frecuente que"],
            },
            {
              point: "Deploys a second accurate *imperfecto de subjuntivo* structure (*como si + supusiera*).",
              keywords: ["como si", "supusiera"],
            },
            {
              point: "Uses *pluscuamperfecto* accurately to frame prior migrant sacrifice.",
              keywords: ["habían sacrificado", "desarraigo"],
            },
            {
              point: "Deploys a Band 10–12 C1 connector with subjunctive (*de ahí que + apuesten*) and affirms hybrid identity.",
              keywords: ["de ahí que", "apuesten", "identidades híbridas"],
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
              descriptor: "Superficial opinion lacking article structure, clear conceptual distinction, or past-subjunctive control.",
            },
            {
              band: "3–5",
              marks: [3, 5],
              descriptor: "Clear article format and solid distinction between assimilation and integration; attempts complex grammar with occasional mood/tense slips.",
            },
            {
              band: "6–8",
              marks: [6, 8],
              descriptor: "Authoritative HL Band 10–12 opinion article featuring persuasive journalistic craft, counter-argument refutation, concrete Hispanic policy lexis, and seamless mastery of *imperfecto de subjuntivo*, *pluscuamperfecto*, and *de ahí que*.",
            },
          ],
          commonError: "Listing moral slogans without addressing a counter-argument or failing to sustain sequence of tenses into the *imperfecto de subjuntivo*.",
          hints: [
            "Craft a concise metaphorical headline plus byline to establish *artículo de opinión* immediately.",
            "Concede the counter-view using *Si bien es cierto que...* before dismantling it with historical past-subjunctive reflection (*era frecuente que exigieran... como si supusiera...*).",
            "Finish strong by connecting concrete integration measures (*homologación de títulos*) with *de ahí que + subjuntivo*.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "2-experiencias-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "ocio-viajes-turismo",
      strategy: "Meaning-Changing Preterite Quartet",
      question:
        "Complete with the exact 3rd-person singular past form of **querer** to express an active refusal:\n*«A pesar de las protestas vecinales, la cadena hotelera no _____ cancelar la construcción en la costa protegida.»*",
      answer: { type: "text", accept: ["quiso"] },
      traps: [
        {
          spec: { type: "text", accept: ["quería"] },
          feedback: "*No quería* merely expresses reluctance/lack of desire; active refusal requires the *pretérito indefinido* (**quiso**).",
        },
      ],
      solution: [
        "Refusing to cancel a project is a decisive, completed act (*no querer* in *indefinido* = 'refused').",
        "Irregular 3rd-person singular preterite of *querer* = **quiso**.",
      ],
      hints: [
        "Compare the meaning shift between *no quería* and *no quiso*.",
        "Remember the irregular *i*-stem preterite of *querer*: *quis-* (no accent on *quiso*!).",
      ],
    },
    {
      id: "2-experiencias-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "memoria-identidad-migratoria-hl",
      strategy: "Ojalá + Pluperfect Subjunctive for Past Regret",
      question:
        "[HL] Complete with the exact two-word 1st-person plural *pluscuamperfecto de subjuntivo* of **aprender** to express an unfulfilled past regret:\n*«Ojalá _____ guaraní con nuestra abuela antes de mudarnos a Buenos Aires.»*",
      answer: { type: "text", accept: ["hubiéramos aprendido", "hubiésemos aprendido"] },
      traps: [
        {
          spec: { type: "text", accept: ["habíamos aprendido"] },
          feedback: "*Ojalá* NEVER takes indicative (*habíamos*); past regret demands *pluscuamperfecto de subjuntivo* (**hubiéramos aprendido**).",
        },
        {
          spec: { type: "text", accept: ["aprendiéramos"] },
          feedback: "*Ojalá + imperfecto de subjuntivo* expresses a present/future unlikely wish; an unchangeable past regret requires *pluscuamperfecto de subjuntivo* (**hubiéramos aprendido**).",
        },
      ],
      solution: [
        "Regretting something that did not happen prior to a past move requires *ojalá + pluscuamperfecto de subjuntivo*.",
        "1st-person plural imperfect subjunctive of *haber* (**hubiéramos / hubiésemos**, with tilde!) + participle (**aprendido**).",
      ],
      hints: [
        "Which compound subjunctive tense expresses an unchangeable past regret after *ojalá*?",
        "Form the *nosotros* imperfect subjunctive of *haber* from *hubieron* and add the tilde.",
      ],
    },
    {
      id: "2-experiencias-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "memoria-identidad-migratoria-hl",
      strategy: "De Ahí Que + Subjunctive",
      question:
        "[HL] Complete with the 3rd-person singular *imperfecto de subjuntivo* of **decidir** following *de ahí que* in a historical context:\n*«La crisis industrial redujo drásticamente el empleo en el norte; de ahí que mi abuelo _____ emigrar a Montevideo en 1954.»*",
      answer: { type: "text", accept: ["decidiera", "decidiese"] },
      traps: [
        {
          spec: { type: "text", accept: ["decidió"] },
          feedback: "**De ahí que** ALWAYS requires the subjunctive mood (never indicative *decidió*); in a 1954 past context, use **decidiera / decidiese**.",
        },
        {
          spec: { type: "text", accept: ["decida"] },
          feedback: "Because the event happened in 1954 (*redujo*), shift the subjunctive to *imperfecto de subjuntivo* (**decidiera / decidiese**).",
        },
      ],
      solution: [
        "**De ahí que** ('hence / which is why') always governs the subjunctive.",
        "Because the cause occurred in 1954, use *imperfecto de subjuntivo*: **decidiera** (or **decidiese**).",
      ],
      hints: [
        "Remember the golden HL rule: *de ahí que* ALWAYS triggers the subjunctive.",
        "Match the subordinate subjunctive tense to the historical anchor *en 1954*.",
      ],
    },
    {
      id: "2-experiencias-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "ocio-viajes-turismo",
      strategy: "Paper 2 Reading — Detecting Editorial Framing",
      marks: 4,
      question:
        "Read this excerpt from a Spanish opinion column on coastal overtourism:\n\n*«Llamar “turismofobia” a las pancartas de los vecinos que no pueden pagar su alquiler es una maniobra cómoda: desvía la culpa de la especulación inmobiliaria y convierte a los ciudadanos desplazados en villanos intolerantes.»*\n\n**Analyse** why the columnist objects to the label *turismofobia* and how their argument reframes the debate. Answer in English *(4 marks)*.",
          modelAnswer:
            "The columnist argues that branding residents' housing protests as 'turismofobia' is a strategic distraction ('maniobra cómoda'). First, it deflects accountability away from property speculation and unregulated rental markets. Second, it unfairly casts displaced locals as intolerant villains rather than citizens defending a basic right to housing. By exposing the label as politically loaded, the writer reframes the conflict as an economic governance failure rather than hostility toward foreign visitors.",
      markScheme: [
        {
          point: "Identifies the columnist's critique of the label as a convenient distraction or rhetorical manoeuvre.",
          keywords: ["strategic distraction", "loaded", "branding"],
        },
        {
          point: "Notes that it deflects blame away from real-estate speculation.",
          keywords: ["property speculation", "accountability", "unregulated"],
        },
        {
          point: "Explains how it unfairly demonises displaced residents as intolerant villains.",
          keywords: ["intolerant villains", "displaced locals", "right to housing"],
        },
        {
          point: "Concludes that the columnist reframes the crisis as economic/policy failure rather than anti-visitor xenophobia.",
          keywords: ["governance failure", "hostility", "reframes"],
        },
      ],
      commonError: "Summarising general overtourism problems without analysing the writer's specific linguistic critique of the word *turismofobia*.",
      hints: [
        "Focus on the columnist's meta-argument about *naming* (*Llamar «turismofobia»... es una maniobra cómoda*).",
        "Identify both shifts of blame named in the sentence: who gets let off the hook, and who gets demonised?",
      ],
    },
    {
      id: "2-experiencias-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "memoria-identidad-migratoria-hl",
      strategy: "HL Source Evaluation — Memoir vs Statistics",
      marks: 6,
      question:
        "[HL] **Evaluate** the respective strengths and limitations of **personal migration testimonies** (*testimonios orales y memorias*) versus **official demographic reports** (*informes estadísticos*) when studying Theme 2: *Experiencias*. Answer in **Spanish** (130–160 words).",
      modelAnswer:
        "Para comprender la complejidad de la experiencia migratoria, conviene contrastar los testimonios personales con los informes estadísticos oficiales. Por un lado, las memorias y entrevistas revelan la dimensión íntima que los números silencian: el desarraigo, la resiliencia cotidiana y la evolución de la identidad híbrida, despertando una empatía genuina en el lector. No obstante, al reconstruirse desde la distancia temporal, la memoria individual resulta inevitablemente selectiva y subjetiva, por lo que no permite extraer conclusiones generales por sí sola. En cambio, los informes demográficos ofrecen rigor cuantitativo sobre las remesas, los flujos laborales y las tasas de escolarización, herramientas indispensables para diseñar políticas públicas eficaces. Sin embargo, si nos limitáramos exclusivamente a las cifras, correríamos el riesgo de reducir a personas reales a simples porcentajes. En conclusión, ambos enfoques son complementarios: los datos aportan escala estructural, mientras que los testimonios devuelven rostro y dignidad a la historia.",
      markScheme: [
        {
          point: "Explains the core strength of personal testimony (intimate emotional truth, empathy, resilience, hybrid identity).",
          keywords: ["dimensión íntima", "empatía genuina", "resiliencia"],
        },
        {
          point: "Evaluates the limitation of retrospective personal testimony (selectivity, subjectivity, lack of generalisability).",
          keywords: ["selectiva", "subjetiva", "distancia temporal"],
        },
        {
          point: "Explains the strength of statistical reports (quantitative rigour on remittances/flows, policy utility).",
          keywords: ["rigor cuantitativo", "remesas", "políticas públicas"],
        },
        {
          point: "Evaluates the limitation of statistics alone (reducing human lives to dehumanised percentages).",
          keywords: ["porcentajes", "reducir", "exclusivamente"],
        },
        {
          point: "Uses HL conditional/subjunctive syntax accurately (*si nos limitáramos... correríamos*).",
          keywords: ["limitáramos", "correríamos"],
        },
        {
          point: "Synthesises a balanced conclusion arguing for methodological complementarity.",
          keywords: ["complementarios", "escala estructural", "rostro y dignidad"],
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
          descriptor: "Describes only one source type or makes unsupported assertions with basic B1 vocabulary.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Compares strengths and weaknesses of both source types clearly with generally accurate B2 Spanish.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sophisticated HL evaluation balancing empathy vs subjectivity and rigour vs reductionism, deploying accurate *si*-clause imperfect subjunctive and C1 synthesis.",
        },
      ],
      commonError: "Declaring one source type 'better' instead of weighing strengths AND limitations of both before synthesising their complementarity.",
      hints: [
        "Build a symmetrical evaluation: Testimony (strength + limitation) ↔ Statistics (strength + limitation) → Complementarity.",
        "Elevate your HL grammar with a Type 2 *si*-clause (*si nos limitáramos..., correríamos el riesgo de...*).",
      ],
    },
    {
      id: "2-experiencias-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Synthesize",
      guideRef: "costumbres-tradiciones-ritos",
      strategy: "IO Visual Stimulus Mini-Presentation (SL/HL)",
      marks: 6,
      question:
        "**Individual Oral Simulation (SL/HL):** Imagine your IO photograph shows an elderly Mexican woman and her teenage granddaughter building a *Día de los Muertos* altar together while the teenager films a short clip on her phone.\nWrite a structured **Spanish oral presentation script** (140–170 words) that moves through all three IB layers: (1) concise visual anchor, (2) Hispanic cultural significance, and (3) contemporary debate on youth, technology, and heritage.",
      modelAnswer:
        "En esta fotografía observamos una escena cargada de simbolismo: una abuela mexicana y su nieta adolescente preparan juntas un altar del Día de los Muertos adornado con flores de cempasúchil y fotografías familiares, mientras la joven graba el proceso con su móvil.\n\nMás allá del colorido visual, esta imagen refleja la esencia de una tradición que concibe la muerte no como una ruptura definitiva, sino como un diálogo afectuoso con los antepasados. El gesto compartido simboliza la transmisión intergeneracional del patrimonio cultural y el valor de la memoria colectiva en México.\n\nSin embargo, el teléfono móvil introduce una tensión muy actual dentro del tema Experiencias. Por un lado, algunos críticos temen que las redes sociales conviertan un rito íntimo en un espectáculo superficial. No obstante, en mi opinión, si la joven comparte el significado auténtico de la ofrenda con respeto, la tecnología puede convertirse en una aliada para mantener viva la cultura entre las nuevas generaciones.",
      markScheme: [
        {
          point: "Anchors concisely in the visual details of the photo without over-describing.",
          keywords: ["escena cargada de simbolismo", "flores de cempasúchil", "graba el proceso"],
        },
        {
          point: "Articulates the deeper Mexican cultural significance (affectionate dialogue with ancestors, intergenerational transmission).",
          keywords: ["diálogo afectuoso", "antepasados", "transmisión intergeneracional"],
        },
        {
          point: "Explicitly links the visual tension (the smartphone) to Prescribed Theme 2 issues.",
          keywords: ["tensión muy actual", "espectáculo superficial", "rito íntimo"],
        },
        {
          point: "Balances critical concern against a constructive personal viewpoint on digital heritage.",
          keywords: ["en mi opinión", "aliada", "mantener viva"],
        },
        {
          point: "Uses appropriate oral presentation signposting (*En esta fotografía, Más allá de, Sin embargo, No obstante*).",
          keywords: ["más allá del colorido", "sin embargo", "no obstante"],
        },
        {
          point: "Demonstrates rich B2–C1 Spanish lexis and natural spoken flow.",
          keywords: ["memoria colectiva", "patrimonio cultural", "ruptura definitiva"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant response or off-topic.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mostly literal photo description ('hay flores, hay una chica') with minimal cultural depth or thematic expansion.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear transition from photo to Mexican cultural values and a brief mention of modern technology; accurate B1–B2 language.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Exemplary IB IO presentation structure (20% description, 40% Hispanic values, 40% nuanced debate) delivered in idiomatic, well-signposted B2–C1 Spanish.",
        },
      ],
      commonError: "Spending 80% of the presentation describing clothing and colours instead of pivoting promptly to cultural values and generational debate.",
      hints: [
        "Follow the 20–40–40 rule: one concise descriptive paragraph, one deep cultural-values paragraph, one nuanced debate paragraph.",
        "Use the smartphone detail as your natural bridge into modernisation vs authenticity.",
      ],
    },
    {
      id: "2-experiencias-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "To what extent",
      guideRef: "ocio-viajes-turismo",
      strategy: "HL Critical Synthesis — Travel & Intercultural Empathy",
      marks: 6,
      question:
        "[HL] **To what extent** does international travel genuinely cultivate intercultural empathy rather than reinforcing stereotypes? Write a nuanced response in **Spanish** (150–180 words) referencing at least one Hispanic context and using at least one *imperfecto de subjuntivo* or C1 concessive structure.",
      modelAnswer:
        "Suele repetirse que viajar amplía horizontes de manera automática; sin embargo, la realidad demuestra que el desplazamiento geográfico por sí solo no garantiza la empatía intercultural. Cuando predomina el turismo relámpago de «todo incluido» en enclaves masificados, muchos visitantes apenas interactúan con la población local y reducen culturas complejas a postales folclóricas, lo cual puede incluso consolidar prejuicios previos.\n\nNo obstante, el viaje sí posee un extraordinario potencial transformador cuando se practica desde la escucha y la humildad. Experiencias como el turismo comunitario en los Andes peruanos o un intercambio lingüístico prolongado obligan al viajero a cuestionar sus propios supuestos. Recuerdo a compañeros que, antes de convivir con familias anfitrionas, dudaban que pudieran adaptarse a otro ritmo de vida, y regresaron con una sensibilidad completamente renovada.\n\nEn conclusión, viajar fomenta una empatía auténtica solo en la medida en que sustituyamos el consumo rápido de destinos por un encuentro respetuoso y consciente.",
      markScheme: [
        {
          point: "Interrogates the common assumption that travel automatically creates empathy.",
          keywords: ["amplía horizontes", "por sí solo", "no garantiza"],
        },
        {
          point: "Analyses how superficial/all-inclusive mass travel can reinforce folkloric stereotypes.",
          keywords: ["todo incluido", "postales folclóricas", "prejuicios previos"],
        },
        {
          point: "Evaluates conditions under which travel genuinely transforms perspective (community tourism, prolonged immersion).",
          keywords: ["andes peruanos", "intercambio lingüístico", "humildad"],
        },
        {
          point: "Uses an accurate HL *imperfecto de subjuntivo* structure in context (*dudaban que pudieran*).",
          keywords: ["dudaban que", "pudieran"],
        },
        {
          point: "Uses precise C1 synthesis syntax (*en la medida en que + subjuntivo: sustituyamos*).",
          keywords: ["en la medida en que", "sustituyamos"],
        },
        {
          point: "Directly answers 'To what extent' with a clear, nuanced qualifying thesis.",
          keywords: ["consumo rápido", "encuentro respetuoso", "en conclusión"],
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
          descriptor: "Clichéd praise of travel ('viajar es divertido y abrimos la mente') with no critical qualification.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Distinguishes mass tourism from meaningful cultural exchange with relevant examples and solid B2 control.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sharp HL critical judgment directly calibrating 'to what extent', contrasting superficial consumption with authentic immersion via concrete Hispanic examples and flawless C1/subjunctive accuracy.",
        },
      ],
      commonError: "Answering 'To what extent' with a flat yes/no instead of specifying the exact conditions under which empathy grows vs fails.",
      hints: [
        "Contrast *turismo relámpago / todo incluido* with *inmersión / turismo comunitario*.",
        "Qualify your judgment directly in the conclusion using *solo en la medida en que + subjuntivo*.",
      ],
    },
    {
      id: "2-experiencias-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "memoria-identidad-migratoria-hl",
      strategy: "HL Formal Speech — Interweaving All Theme 2 Strands",
      marks: 8,
      question:
        "[HL] **Paper 1 Capstone Speech (HL · Discurso):** Your school is hosting an annual *Jornada de la Memoria y la Diversidad*. Write a **200–240 word Spanish speech** (*discurso*) evaluating how journeys—whether through migration, travel, or preserving ancestral traditions—shape our shared humanity.\nInclude authentic speech rhetoric (audience address, anaphora/rhetorical question, closing call to action), accurate past-tense layering (*pluscuamperfecto + indefinido + imperfecto*), and at least two *imperfecto de subjuntivo* forms.",
      modelAnswer:
        "Estimados profesores, compañeros y familias: buenas tardes.\n\nSi miramos alrededor en este auditorio, descubriremos que cada apellido esconde un viaje. Unos llegaron hace generaciones tras cruzar un océano; otros aterrizaron recientemente con una maleta repleta de sueños e incertidumbre. ¿Acaso no somos todos, en el fondo, herederos de quienes alguna vez se atrevieron a partir?\n\nPienso hoy en mi bisabuela, quien antes de dejar su aldea gallega ya había guardado en un cofre de latón las recetas y coplas de su infancia. Mientras trabajaba largas jornadas en Buenos Aires, el cansancio la vencía, pero nunca abandonó las sobremesas dominicales ni el acento que la unía a su origen. A muchos vecinos les sorprendía que conservara aquella alegría pese al desarraigo, como si llevara consigo una patria portátil.\n\nNo olvidemos, sin embargo, que nuestras experiencias contemporáneas también nos exigen responsabilidad. No basta con celebrar las tradiciones ajenas en las redes ni viajar acumulando sellos en el pasaporte: debemos practicar un turismo ético y construir comunidades acogedoras donde nadie tenga que renunciar a su historia para pertenecer.\n\nOs invito hoy a escuchar con atención las historias de quienes nos rodean, porque solo comprendiendo el viaje del otro descubriremos quiénes somos realmente. Muchas gracias.",
      markScheme: [
        {
          point: "Opens and closes with authentic formal speech conventions (salutation to audience, concluding call to action and thanks).",
          keywords: ["estimados profesores", "buenas tardes", "muchas gracias"],
        },
        {
          point: "Uses effective rhetorical devices (rhetorical question, direct collective 'nosotros' appeal).",
          keywords: ["¿acaso no somos", "auditorio", "os invito"],
        },
        {
          point: "Integrates *pretérito pluscuamperfecto* cleanly for pre-migration heritage preservation.",
          keywords: ["había guardado", "cofre de latón"],
        },
        {
          point: "Blends *imperfecto* backdrop and *pretérito indefinido* completed events naturally.",
          keywords: ["trabajaba", "vencía", "abandonó", "aterrizaron"],
        },
        {
          point: "Deploys first accurate *imperfecto de subjuntivo* triggered by past emotion (*les sorprendía que conservara*).",
          keywords: ["sorprendía que", "conservara"],
        },
        {
          point: "Deploys second accurate *imperfecto de subjuntivo* after *como si* (*como si llevara*).",
          keywords: ["como si", "llevara", "patria portátil"],
        },
        {
          point: "Synthesises all Theme 2 strands (migration memory, customs/*sobremesas*, and ethical travel).",
          keywords: ["sobremesas dominicales", "turismo ético", "desarraigo"],
        },
        {
          point: "Delivers an inspiring, nuanced call to civic empathy using accurate present subjunctive (*donde nadie tenga que*).",
          keywords: ["donde nadie tenga", "renunciar a su historia", "comprendiendo el viaje"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant Spanish speech or completely off-task.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Lacks speech conventions, relies on simple present/preterite narration, and treats Theme 2 superficially.",
        },
        {
          band: "3–5",
          marks: [3, 5],
          descriptor: "Clear speech structure addressing the audience; combines migration and traditions with solid B2 grammar and emerging rhetorical flair.",
        },
        {
          band: "6–8",
          marks: [6, 8],
          descriptor: "Compelling HL Band 10–12 speech seamlessly uniting rhetoric, evocative imagery (*patria portátil*), full past-tense layering (*pluscuamperfecto + imperfecto + indefinido*), and flawless *imperfecto de subjuntivo*.",
        },
      ],
      commonError: "Writing a flat essay without addressing a live audience (*Estimados..., Os invito...*) or failing to connect personal family narrative back to a broader ethical call to action.",
      hints: [
        "Anchor the speech in a concrete human story (*mi bisabuela... ya había guardado...*) before zooming out to collective responsibility.",
        "Include a rhetorical question (*¿Acaso no somos...?*) and a direct call to action (*Os invito hoy a...*) to lock in Criterion C marks.",
        "Double-check your two *imperfecto de subjuntivo* triggers: past emotion (*sorprendía que*) and *como si*.",
      ],
    },
  ],
};
