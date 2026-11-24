import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p2-listening",
  title: "IB Spanish B Paper 2 Mock — Listening Comprehension (Audio Scripts)",
  level: "SL",
  paperType: "Paper 2 · Listening Comprehension (TTS Audio Scripts · 25m)",
  calculator: false,
  minutes: 45,
  questions: [
    // ===================== AUDIO A (Q01–Q05): SPAIN PODCAST — SUSTAINABLE CITIES (SL) =====================
    {
      id: "exam-p2-listening-q01",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-listening-strategies",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Track spoken self-correction markers («bueno, no, perdona, me confundo con...»)",
      question:
        "🎧 **[Audio Script — Texto A: Podcast de España (*Ciudades a pie: supermanzanas y centros peatonales*)]**\n\n**Mateo:** «Fíjate, Clara, siempre creí que Pontevedra había cerrado su casco histórico a los coches en 2005... bueno, no, perdona, me confundo con la red de carriles bici. En realidad el centro histórico se peatonalizó en 1999 y luego ampliaron la zona restringida en 2011.»\n**Clara:** «Exacto, y hoy más de la mitad de los desplazamientos urbanos allí se hacen a pie.»\n\nSegún el diálogo, ¿en qué año se cerró por primera vez el casco histórico de Pontevedra a los coches?",
      options: [
        "En 2005",
        "En 2011",
        "En 1999",
        "En 2015",
      ],
      answerIndex: 2,
      hints: [
        "Do not lock onto the very first year Mateo utters («siempre creí que...»): listen for his spoken correction right after.",
        "Distinguish three dates in the clip: the bike-lane plan (2005), the initial pedestrianisation, and the later expansion (2011).",
      ],
      explanation:
        "Mateo explicitly self-corrects («bueno, no, perdona, me confundo con la red de carriles bici. En realidad el centro histórico se peatonalizó en 1999»). «2005» refers to the bike-lane network and «2011» marks the subsequent expansion of the restricted zone.",
    },
    {
      id: "exam-p2-listening-q02",
      kind: "short",
      topicId: "5-compartir-el-planeta",
      guideRef: "globalizacion-etica-entorno-urbano",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      strategy: "Separate initial projections («esperaban...») from verified measurements («confirmaron...»)",
      question:
        "🎧 **[Audio Script — Texto A: Podcast de España (*Ciudades a pie: supermanzanas y centros peatonales*)]**\n\n**Clara:** «Lo que más sorprendió a los vecinos de las supermanzanas de Barcelona fue el silencio. Al principio los técnicos municipales esperaban una reducción del ruido ambiental del 15%, pero las mediciones oficiales tras tres años confirmaron un descenso real del 32%, mientras que el tráfico de paso cayó casi a la mitad.»\n\nState the **confirmed percentage reduction** in urban noise after three years. Enter the **number only** (without the % sign).",
      answer: {
        type: "number",
        value: 32,
        display: "32",
      },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "15% was only the initial forecast («al principio... esperaban»). Look for the confirmed official measurement after «pero»!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "3 refers to the number of years («tras tres años»), not the percentage drop in noise.",
        },
      ],
      hints: [
        "Notice the contrast marker «pero»: IB Listening scripts routinely put an expectation before «pero» and the actual result after it.",
        "Read the phrase «confirmaron un descenso real del...» to locate the verified percentage.",
      ],
      solution: [
        "Discard the preliminary estimate («esperaban una reducción... del 15%»).",
        "Identify the verified measurement introduced after «pero»: «confirmaron un descenso real del **32%**».",
        "Enter **32**.",
      ],
      commonError: "Writing down the first percentage heard (15) before waiting for the speaker's contrast clause («pero...»).",
    },
    {
      id: "exam-p2-listening-q03",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-listening-strategies",
      difficulty: "core",
      level: "SL",
      commandTerm: "Interpret",
      strategy: "Track temporal attitude shifts («al comienzo... sin embargo, pasados dos años...»)",
      question:
        "🎧 **[Audio Script — Texto A: Podcast de España (*Ciudades a pie: supermanzanas y centros peatonales*)]**\n\n**Mateo:** «Claro, al comienzo muchos comerciantes protestaron muchísimo porque temían perder a los clientes que aparcaban frente a la tienda.»\n**Clara:** «Totalmente comprensible. Sin embargo, pasados dos años, la propia asociación de tenderos del barrio publicó una encuesta mostrando que las ventas habían subido porque la gente pasea más despacio y entra en las librerías y cafeterías locales.»\n\n¿Cómo evolucionó la actitud de los comerciantes locales hacia la zona peatonal?",
      options: [
        "Pasaron del temor inicial a perder clientela a respaldar la medida al comprobar mayores ventas",
        "Apoyaron con entusiasmo el proyecto desde el primer día antes de ver ningún dato comercial",
        "Mantuvieron su rechazo absoluto tras dos años porque el tráfico lento redujo el consumo vecinal",
        "Cerraron la mayoría de las librerías y cafeterías locales para mudarse a centros comerciales",
      ],
      answerIndex: 0,
      hints: [
        "Notice the two-stage timeline: «al comienzo... temían» followed by «Sin embargo, pasados dos años...».",
        "Check what the shopkeepers' own association survey revealed about sales and pedestrian browsing.",
      ],
      explanation:
        "Shopkeepers shifted from initial protests and fear of losing drive-in shoppers («al comienzo... temían perder a los clientes») to positive evidence-backed support after two years, when their own association's survey showed rising sales driven by slower pedestrian foot traffic.",
    },
    {
      id: "exam-p2-listening-q04",
      kind: "short",
      topicId: "4-organizacion-social",
      guideRef: "relaciones-comunidad-voluntariado",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Filter target demographic details (elderly residents vs university commuters)",
      question:
        "🎧 **[Audio Script — Texto A: Podcast de España (*Ciudades a pie: supermanzanas y centros peatonales*)]**\n\n**Mateo:** «Oye, ¿y qué pasa con las personas mayores o con movilidad reducida cuando quitan los coches del centro?»\n**Clara:** «Buena pregunta. Para los universitarios y trabajadores pusieron bicicletas de alquiler en las estaciones periféricas, pero específicamente para los vecinos mayores el ayuntamiento habilitó microbuses eléctricos gratuitos que paran cada diez minutos frente al mercado y el centro de salud.»\n\n¿Qué medio de transporte gratuito habilitó específicamente el ayuntamiento para los vecinos mayores? Escribe el sustantivo exacto (en singular o plural, en español).",
      answer: {
        type: "text",
        accept: [
          "microbuses",
          "microbús",
          "microbuses eléctricos",
          "microbús eléctrico",
          "microbuses eléctricos gratuitos",
          "un microbús",
          "unos microbuses",
        ],
        display: "microbuses eléctricos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["bicicletas", "bicicletas de alquiler", "la bicicleta"] },
          feedback: "Careful! Rental bicycles («bicicletas de alquiler») were introduced for university students and commuters — look right after «pero específicamente para los vecinos mayores».",
        },
        {
          spec: { type: "text", accept: ["coches", "los coches"] },
          feedback: "Private cars were removed from the centre, not provided as a free municipal service for seniors.",
        },
      ],
      hints: [
        "Separate the two user groups Clara mentions: commuters/students vs elderly residents («vecinos mayores»).",
        "Read directly after «pero específicamente para los vecinos mayores el ayuntamiento habilitó...».",
      ],
      solution: [
        "Filter out the distractor («bicicletas de alquiler» for university students and commuters).",
        "Identify the service dedicated specifically to elderly residents: **microbuses eléctricos** (free electric minibuses stopping every 10 minutes at the market and clinic).",
      ],
      commonError: "Catching the familiar word *bicicletas* and writing it down without checking which group of residents it served.",
    },
    {
      id: "exam-p2-listening-q05",
      kind: "written",
      topicId: "5-compartir-el-planeta",
      guideRef: "globalizacion-etica-entorno-urbano",
      difficulty: "core",
      level: "SL",
      commandTerm: "Outline",
      strategy: "Extract three distinct spoken points cleanly across environmental, social, and economic dimensions",
      marks: 3,
      question:
        "🎧 **[Audio Script — Texto A: Podcast de España (*Ciudades a pie: supermanzanas y centros peatonales*)]**\n\n**Clara:** «Si resumimos lo que han conseguido las supermanzanas, yo destacaría tres cambios muy visibles: primero, respiramos un aire mucho más limpio gracias a la drástica bajada de emisiones de dióxido de nitrógeno; segundo, las plazas recuperadas se han llenado de bancos, árboles y zonas de juego donde niños y abuelos conviven sin peligro de atropellos; y tercero, los pequeños negocios familiares del barrio han ganado vitalidad frente a las grandes superficies de las afueras.»\n\n**IB Listening — Resumen (3 marks):** Outline **in English (in your own words)** the three benefits of urban pedestrianisation highlighted by Clara.",
      modelAnswer:
        "1. **Cleaner urban air quality:** A sharp drop in nitrogen-dioxide exhaust emissions makes the neighbourhood air much healthier to breathe.\n2. **Safer intergenerational public space:** Reclaimed squares with benches, trees, and play areas allow children and older adults to socialise without traffic danger.\n3. **Stronger local independent commerce:** Family-run neighbourhood shops regain vitality and compete better against large out-of-town retail complexes.",
      markScheme: [
        {
          point: "Environmental benefit: cleaner air / major drop in nitrogen-dioxide vehicle emissions.",
          keywords: ["air", "emissions", "nitrogen", "cleaner", "pollution", "healthier"],
        },
        {
          point: "Social/safety benefit: reclaimed green plazas/seating where children and grandparents socialise safely free from car accidents.",
          keywords: ["safer", "children", "play", "socialise", "socialize", "benches", "reclaimed", "traffic danger"],
        },
        {
          point: "Economic benefit: small family-owned neighbourhood shops thrive against out-of-town shopping centres.",
          keywords: ["shops", "commerce", "family-run", "local", "businesses", "vitality", "retail"],
        },
      ],
      hints: [
        "Clara signposts all three answers explicitly using spoken sequence markers: «primero... segundo... y tercero...».",
        "Cover all three angles briefly in your own English words: (1) air/emissions, (2) safe green spaces for kids & elders, (3) small family businesses.",
      ],
      commonError: "Combining two details into one vague sentence («cities become nicer») instead of clearly listing all three distinct benefits.",
    },

    // ===================== AUDIO B (Q06–Q10): MEXICAN RADIO INTERVIEW — YOUTH & AI (SL) =====================
    {
      id: "exam-p2-listening-q06",
      kind: "mcq",
      topicId: "3-ingenio-humano",
      guideRef: "tecnologia-innovacion-cientifica",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Distinguish past abandoned habits («al comienzo la usaba...») from current practice («ahora solo...»)",
      question:
        "🎧 **[Audio Script — Texto B: Entrevista radiofónica de México (*Jóvenes, pantallas e IA en Ciudad de México*)]**\n\n**Valeria (locutora):** «Diego, dime con sinceridad: ¿cómo utilizas las herramientas de inteligencia artificial cuando estudias para tus exámenes de preparatoria?»\n**Diego (17 años):** «Pues mira, al comienzo la usaba para que me resumiera capítulos enteros la noche anterior, pero reprobé un parcial de historia porque en clase no recordaba nada. Ahora leo primero mis apuntes y solo le pido a la aplicación que me formule preguntas de autoevaluación para comprobar si de verdad entendí el tema.»\n\n¿Cómo utiliza Diego **actualmente** la inteligencia artificial para estudiar?",
      options: [
        "Para que le redacte ensayos completos de historia la noche previa a cada entrega",
        "Para resumir capítulos extensos sin tener que leer sus apuntes personales primero",
        "Para sustituir las explicaciones de sus profesores durante las clases de preparatoria",
        "Para generar preguntas de autoevaluación después de haber leído él mismo sus apuntes",
      ],
      answerIndex: 3,
      hints: [
        "Track the tense pivot from imperfect («al comienzo la usaba...») to present («Ahora leo primero... y solo le pido...»).",
        "Eliminate Diego's abandoned shortcut that caused him to fail his history midterm («reprobé un parcial»).",
      ],
      explanation:
        "Diego stopped using AI for last-minute chapter summaries after failing a history midterm («reprobé un parcial»). Currently («Ahora...»), he reads his own notes first and uses AI strictly to generate self-testing questions («preguntas de autoevaluación») to verify genuine comprehension.",
    },
    {
      id: "exam-p2-listening-q07",
      kind: "mcq",
      topicId: "1-identidades",
      guideRef: "lengua-identidad-hispanohablante",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      strategy: "Map common Mexican Spanish lexical items accurately to Peninsular Spanish equivalents",
      question:
        "🎧 **[Audio Script — Texto B: Entrevista radiofónica de México (*Jóvenes, pantallas e IA en Ciudad de México*)]**\n\n**Diego:** «La verdad es que a veces me distraigo mucho porque platico con mis amigos por el celular mientras tengo abierta la computadora con las tareas.»\n\n**Variación léxica hispanohablante:** ¿Cuál es la equivalencia exacta en español peninsular (de España) de los tres términos mexicanos empleados por Diego (**platicar · celular · computadora**)?",
      options: [
        "discutir · portátil · tableta",
        "charlar · móvil · ordenador",
        "gritar · teléfono fijo · pantalla",
        "leer · correo · teclado",
      ],
      answerIndex: 1,
      hints: [
        "Check each term one by one: in Mexico «platicar» means to chat casually with friends.",
        "Contrast Latin American «celular / computadora» with the standard Peninsular Spanish terms used in Madrid or Barcelona.",
      ],
      explanation:
        "Mexican Spanish «platicar» (to chat), «el celular» (mobile phone), and «la computadora» (computer) correspond directly to Peninsular Spanish «charlar», «el móvil», and «el ordenador». Recognising high-frequency regional equivalents is vital for IB Paper 2 Listening across Spain and Latin America.",
    },
    {
      id: "exam-p2-listening-q08",
      kind: "short",
      topicId: "3-ingenio-humano",
      guideRef: "comunicacion-medios-redes",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      strategy: "Separate self-reported confidence («dijo verificar») from measured performance («supo distinguir»)",
      question:
        "🎧 **[Audio Script — Texto B: Entrevista radiofónica de México (*Jóvenes, pantallas e IA en Ciudad de México*)]**\n\n**Dr. Morales:** «El semestre pasado encuestamos a 1.200 estudiantes de secundaria en la capital. Un dato nos llamó muchísimo la atención: aunque el 78% aseguró comprobar siempre la fiabilidad de las noticias que comparte en redes, apenas el 24% supo distinguir en la prueba práctica un titular manipulado de una fuente periodística contrastada.»\n\nAccording to Dr. Morales's study, what percentage of surveyed students could **actually distinguish** a manipulated headline from a verified journalistic source? Enter the **number only** (without the % sign).",
      answer: {
        type: "number",
        value: 24,
        display: "24",
      },
      traps: [
        {
          spec: { type: "number", value: 78 },
          feedback: "78% is the percentage who CLAIMED they check news («aseguró comprobar»), NOT the percentage who actually succeeded in the practical test!",
        },
        {
          spec: { type: "number", value: 1200 },
          feedback: "1200 is the total number of students surveyed, whereas the question asks for the percentage who identified the manipulated headline.",
        },
      ],
      hints: [
        "Listen carefully to the contrast structure: «aunque el 78% aseguró..., apenas el ___ supo distinguir...».",
        "«Apenas» («barely / only») introduces the sobering empirical result.",
      ],
      solution: [
        "Filter out the sample size (1,200 students) and the self-reported claim (78% who said they verify news).",
        "Locate the tested performance figure after «apenas»: **24%** actually distinguished a manipulated headline from a verified source.",
        "Enter **24**.",
      ],
      commonError: "Selecting 78% by hearing «verificar / comprobar la fiabilidad» and missing the concessive «aunque... apenas...».",
    },
    {
      id: "exam-p2-listening-q09",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-listening-strategies",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Interpret tú vs usted register switches in authentic Hispanic broadcast interviews",
      question:
        "🎧 **[Audio Script — Texto B: Entrevista radiofónica de México (*Jóvenes, pantallas e IA en Ciudad de México*)]**\n\n**Valeria (locutora):** «Doctor Morales, ¿usted considera que los colegios deben reformar sus métodos de evaluación? ... Muchas gracias por su análisis. Y ahora paso contigo, Diego: ¿tú qué opinas de lo que acaba de explicar el doctor?»\n\n¿Qué refleja el cambio de tratamiento de **«usted»** a **«tú»** por parte de la locutora?",
      options: [
        "Adapta el registro a la edad y jerarquía profesional de cada invitado según las normas de cortesía",
        "Muestra enfado con el investigador y falta de respeto profesional hacia el estudiante adolescente",
        "Comete un error gramatical involuntario por mezclar el español mexicano con el voseo argentino",
        "Indica que el programa cambia bruscamente de un debate informativo serio a una comedia teatral",
      ],
      answerIndex: 0,
      hints: [
        "Consider the two guests' roles in Mexican radio culture: an academic expert («Doctor Morales») versus a 17-year-old high-schooler («Diego»).",
        "Link this shift to the IB Conceptual Understandings of Audience and Variation.",
      ],
      explanation:
        "Addressing an academic specialist with «usted» («Doctor Morales, ¿usted considera...?») while smoothly switching to «tú» with a 17-year-old student («contigo, Diego: ¿tú qué opinas...?») demonstrates purposeful sociolinguistic register adaptation (Audience & Variation) standard in Hispanophone media interviews.",
    },
    {
      id: "exam-p2-listening-q10",
      kind: "written",
      topicId: "4-organizacion-social",
      guideRef: "educacion-mundo-laboral",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Explain",
      strategy: "Address both parts of a two-part IB Listening prompt (why bans fail + recommended alternative)",
      marks: 3,
      question:
        "🎧 **[Audio Script — Texto B: Entrevista radiofónica de México (*Jóvenes, pantallas e IA en Ciudad de México*)]**\n\n**Dr. Morales:** «Prohibir tajantemente la inteligencia artificial en los colegios resulta contraproducente por dos motivos claros: por un lado, los chavos la seguirán utilizando en casa sin ninguna orientación adulta; por otro, una prohibición absoluta impide enseñarles a detectar errores, sesgos y alucinaciones del algoritmo. Lo que proponemos es integrarla en talleres de alfabetización mediática donde el estudiante deba contrastar cada respuesta con fuentes académicas reales y explicar su propio razonamiento oralmente.»\n\n**IB Listening — Comprensión razonada (3 marks):** Explain **in English (in your own words)** **two reasons** why Dr. Morales considers banning AI in schools counterproductive, and **one concrete approach** he recommends instead.",
      modelAnswer:
        "1. **Unsupervised use continues anyway:** Teenagers will simply keep using AI tools at home without adult mentorship or safeguards.\n2. **Missed critical-thinking training:** A total ban prevents schools from teaching students how to spot algorithmic mistakes, biases, and fabricated claims.\n3. **Recommended alternative:** Integrate AI into media-literacy workshops where learners must cross-check outputs against genuine academic sources and defend their reasoning orally.",
      markScheme: [
        {
          point: "Reason 1: Students will still use AI unsupervised at home without adult guidance.",
          keywords: ["home", "unsupervised", "guidance", "mentorship", "without adult", "keep using"],
        },
        {
          point: "Reason 2: Bans prevent students from learning to spot algorithmic errors, bias, or hallucinations.",
          keywords: ["biases", "bias", "errors", "mistakes", "hallucinations", "fabricated", "spot"],
        },
        {
          point: "Recommended alternative: Media-literacy workshops requiring source verification / cross-checking against real academic sources and/or oral defence of reasoning.",
          keywords: ["media-literacy", "media literacy", "workshops", "cross-check", "verify", "verification", "sources", "orally"],
        },
      ],
      hints: [
        "Dr. Morales structures his critique explicitly with «por un lado... por otro...» — that gives you the first two marks cleanly.",
        "Listen to the final sentence («Lo que proponemos es...») to capture the third mark: his recommended educational alternative.",
      ],
      commonError: "Giving only why bans fail and forgetting to answer the second half of the question (the alternative Dr. Morales recommends).",
    },

    // ===================== AUDIO C [HL] (Q11–Q15): COLOMBIAN CULTURAL RADIO — MIGRATION & MUSIC =====================
    {
      id: "exam-p2-listening-q11",
      kind: "mcq",
      topicId: "2-experiencias",
      guideRef: "historias-vida-migracion",
      difficulty: "core",
      level: "HL",
      commandTerm: "Interpret",
      strategy: "Read tonal irony behind a cheerful playlist label juxtaposed with trauma",
      question:
        "🎧 **[Audio Script — Texto C [HL]: Programa cultural de Colombia (*Ritmos que cruzan fronteras: Medellín–Madrid*)]**\n\n**Andrés (cantautor afrocolombiano):** «Me da cierta risa amarga cuando veo mis canciones clasificadas automáticamente en listas llamadas “Vibras tropicales para la playa”, aunque la letra narre el exilio de mi abuela cuando tuvo que abandonar su río en el Chocó por el conflicto armado. Para el algoritmo todo ritmo caribeño sirve de fondo festivo para las vacaciones.»\n\n**[HL] IB Listening — Actitud e ironía:** ¿Qué critica Andrés con su comentario irónico («risa amarga»)?",
      options: [
        "Que las playas colombianas prohíban escuchar música tradicional afrocolombiana en verano",
        "Que su abuela prefiriera las listas digitales modernas frente a las canciones de su región",
        "Que las plataformas reduzcan testimonios dolorosos de desplazamiento a mero exotismo superficial",
        "Que los algoritmos recomienden exclusivamente música europea y bloqueen artistas latinos",
      ],
      answerIndex: 2,
      hints: [
        "Notice the emotional oxymoron «risa amarga» («bitter laugh») and the stark clash between «Vibras tropicales para la playa» and «el exilio de mi abuela».",
        "Focus on how automated streaming categorisation strips away the serious human-rights context of Caribbean/Afro-Colombian music.",
      ],
      explanation:
        "Andrés uses bitter irony («risa amarga») to critique how streaming algorithms flatten songs bearing witness to forced displacement and armed conflict into shallow, exoticised holiday background music («Vibras tropicales para la playa»). He is not claiming Latin artists are blocked from platforms, nor critiquing his grandmother's taste.",
    },
    {
      id: "exam-p2-listening-q12",
      kind: "short",
      topicId: "2-experiencias",
      guideRef: "memoria-identidad-migratoria-hl",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      strategy: "Avoid an explicitly excluded distractor instrument («dejé fuera...») in HL Listening",
      question:
        "🎧 **[Audio Script — Texto C [HL]: Programa cultural de Colombia (*Ritmos que cruzan fronteras: Medellín–Madrid*)]**\n\n**Sofía (presentadora):** «En tu nuevo disco grabado entre Medellín y Madrid sorprende la sonoridad tan desnuda. ¿Qué instrumento tradicional sostiene el pulso central del álbum?»\n**Andrés:** «Mucha gente esperaba el acordeón vallenato de mis trabajos anteriores, pero esta vez lo dejé fuera a propósito; quise que el corazón rítmico fuera la tambora, ese tambor tradicional caribeño cuya vibración me recuerda los patios de mi infancia.»\n\n**[HL] IB Listening — Detalle específico:** ¿Qué instrumento tradicional colocó Andrés como el corazón rítmico de su nuevo álbum? Escribe el nombre exacto del instrumento en español (una o dos palabras).",
      answer: {
        type: "text",
        accept: ["la tambora", "tambora"],
        display: "la tambora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["el acordeón", "acordeón", "el acordeón vallenato", "acordeón vallenato"] },
          feedback: "Classic IB Listening distractor! Andrés explicitly says «esta vez lo dejé fuera a propósito» — he deliberately left the accordion OUT on this album!",
        },
      ],
      hints: [
        "Watch out for the excluded distractor introduced by «Mucha gente esperaba..., pero esta vez lo dejé fuera a propósito».",
        "Read the exact traditional Caribbean percussion instrument named directly after «quise que el corazón rítmico fuera...».",
      ],
      solution: [
        "Eliminate «el acordeón vallenato», which Andrés says he intentionally omitted («lo dejé fuera a propósito»).",
        "Identify the instrument placed at the rhythmic core of the album: **la tambora**.",
      ],
      commonError: "Writing *el acordeón* simply because it appears first and is widely associated with Colombian vallenato.",
    },
    {
      id: "exam-p2-listening-q13",
      kind: "mcq",
      topicId: "3-ingenio-humano",
      guideRef: "entretenimiento-expresiones-artisticas",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      strategy: "Distinguish an attributed purist fear from the speaker's evidence-based conclusion",
      question:
        "🎧 **[Audio Script — Texto C [HL]: Programa cultural de Colombia (*Ritmos que cruzan fronteras: Medellín–Madrid*)]**\n\n**Dra. Restrepo (etnomusicóloga):** «Hace una década, ciertos sectores puristas auguraban que fusionar la cumbia o el bullerengue con sintetizadores electrónicos borraría irremediablemente las raíces populares. Sin embargo, al observar los conciertos abarrotados de jóvenes en Bogotá, Ciudad de México y Madrid, comprobamos justo lo contrario: esa hibridación funciona como puerta de entrada que despierta la curiosidad por los maestros tradicionales.»\n\n**[HL] IB Listening — Conclusión de la hablante:** ¿Qué concluye la Dra. Restrepo sobre la fusión de ritmos tradicionales con música electrónica?",
      options: [
        "Que los sintetizadores han borrado definitivamente el interés juvenil por el folclore colombiano",
        "Que la hibridación musical acerca a nuevas generaciones hacia el conocimiento de las raíces tradicionales",
        "Que los conciertos internacionales en Madrid han sustituido la música tradicional en Bogotá",
        "Que los puristas tenían razón al advertir que la electrónica destruye la autenticidad popular",
      ],
      answerIndex: 1,
      hints: [
        "Separate what «ciertos sectores puristas auguraban» from Dra. Restrepo's own evidence introduced by «Sin embargo... comprobamos justo lo contrario».",
        "Notice the metaphor «puerta de entrada» («gateway») — what does hybrid fusion open the door to?",
      ],
      explanation:
        "Dra. Restrepo refutes the purists' prophecy («comprobamos justo lo contrario»): packed youth concerts across Bogotá, Mexico City, and Madrid show that blending traditional rhythms with electronic elements acts as a gateway («puerta de entrada») drawing younger listeners toward traditional masters and roots.",
    },
    {
      id: "exam-p2-listening-q14",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-listening-strategies",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Interpret",
      strategy: "Synthesise shared ground and nuance across two different speakers in HL audio",
      question:
        "🎧 **[Audio Script — Texto C [HL]: Programa cultural de Colombia (*Ritmos que cruzan fronteras: Medellín–Madrid*)]**\n\n**Andrés:** «No voy a negar que gracias a las plataformas digitales hoy nos escuchan migrantes colombianos en Europa y Japón sin pasar por una gran discográfica, aunque sigo echando de menos espacio para contar la historia de cada canción.»\n**Dra. Restrepo:** «Coincido plenamente contigo, Andrés. La distribución global democratiza el alcance, pero si el oyente solo consume pistas sueltas sin contexto histórico ni territorio, corre el riesgo de oír el ritmo sin comprender su memoria.»\n\n**[HL] IB Listening — Convergencia entre hablantes:** ¿En qué coinciden tanto Andrés como la Dra. Restrepo sobre las plataformas digitales?",
      options: [
        "En que deben sustituirse por grandes discográficas tradicionales para proteger la calidad sonora",
        "En que impiden por completo que los migrantes latinoamericanos escuchen música de sus países",
        "En que ofrecen explicaciones históricas demasiado extensas que aburren a los oyentes jóvenes",
        "En que amplían el alcance internacional pero requieren mayor contexto para preservar el sentido cultural",
      ],
      answerIndex: 3,
      hints: [
        "Look at Dra. Restrepo's explicit agreement cue: «Coincido plenamente contigo, Andrés».",
        "Notice BOTH speakers follow a balanced «benefit + caveat» structure («gracias a... aunque...» and «democratiza el alcance, pero...»).",
      ],
      explanation:
        "Both speakers share a nuanced stance: digital platforms widen global reach and let independent artists connect with diaspora audiences without major labels, yet both warn that stripping songs of their historical and territorial narrative risks turning living cultural memory into decontextualised background tracks.",
    },
    {
      id: "exam-p2-listening-q15",
      kind: "written",
      topicId: "2-experiencias",
      guideRef: "memoria-identidad-migratoria-hl",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      strategy: "Weave both personal artistic testimony and academic analysis into a cohesive 6-mark HL synthesis",
      marks: 6,
      question:
        "🎧 **[Audio Script — Texto C [HL]: Programa cultural de Colombia (*Ritmos que cruzan fronteras: Medellín–Madrid*)]**\n\n**Andrés:** «Cuando emigré a Madrid hace seis años, llevar conmigo los toques de tambora y las coplas de mi abuela fue mi manera de no desaparecer en una ciudad enorme. Al tocar en pequeños centros culturales con músicos flamencos y senegaleses, descubrí que nuestras nostalgias dialogaban: no perdí mi acento chocoano, sino que aprendí a tejerlo con otras orillas.»\n**Dra. Restrepo:** «Precisamente ahí reside la fuerza de la música migrante. Funciona al mismo tiempo como archivo sonoro de la memoria colectiva —guardando nombres de ríos, heridas y resistencias que no siempre entran en los libros oficiales— y como laboratorio vivo de hibridación cultural donde la identidad se renueva sin renunciar a su dignidad.»\n\n**[HL] Extended Listening Synthesis (6 marks):** Based on the radio excerpt, discuss **in English** how music simultaneously **preserves migrant memory** and **creates cultural hybridity**, integrating both **Andrés's personal experience** and **Dra. Restrepo's academic perspective**.",
      modelAnswer:
        "1. **Personal anchor against erasure in exile:** For Andrés, bringing traditional percussion (*tambora*) and his grandmother's folk verses to Madrid prevented him from feeling invisible or losing his regional Afro-Colombian identity in a vast foreign metropolis.\n2. **Sound archive of unspoken history:** Dra. Restrepo frames migrant music academically as a collective sonic archive preserving rivers, collective traumas, and acts of resilience that official written history textbooks often omit.\n3. **Intercultural dialogue across diasporas:** Collaborating in Madrid community venues with flamenco and Senegalese musicians revealed shared experiences of longing, turning homesickness into artistic exchange.\n4. **Identity enrichment without assimilation:** Andrés emphasises that collaborating across borders did not erase his Chocó roots; instead, it wove his heritage together with other cultural traditions.\n5. **Music as a living laboratory of renewal:** Dra. Restrepo conceptualises this creative fusion as a dynamic laboratory of cultural hybridity where heritage evolves organically rather than remaining frozen.\n6. **Dual balance of continuity and dignity:** Together, both voices demonstrate that memory and hybridity are complementary rather than contradictory: diaspora music safeguards cultural dignity while continuously reinventing belonging.",
      markScheme: [
        {
          point: "Andrés (memory): Explains how traditional percussion/grandmother's verses helped him anchor his regional identity and avoid erasure/invisibility in Madrid.",
          keywords: ["invisibility", "invisible", "erasure", "anchor", "grandmother", "verses", "percussion"],
        },
        {
          point: "Dra. Restrepo (memory): Explains her concept of music as a collective sonic/sound archive recording rivers, wounds/trauma, and resilience omitted from official textbooks.",
          keywords: ["sonic archive", "sound archive", "textbooks", "resilience", "traumas", "omit", "unspoken"],
        },
        {
          point: "Andrés (hybridity): Highlights his collaboration with flamenco and Senegalese musicians in community spaces creating dialogue across shared longing.",
          keywords: ["flamenco", "senegalese", "collaborating", "collaboration", "dialogue", "longing", "exchange"],
        },
        {
          point: "Andrés (nuance): Notes that cross-cultural collaboration enriched rather than erased his Chocó heritage/accent (no forced assimilation).",
          keywords: ["assimilation", "wove", "enriched", "roots", "chocó", "choco", "erase"],
        },
        {
          point: "Dra. Restrepo (hybridity): Explains her metaphor of a living laboratory where cultural identity evolves/renews dynamically.",
          keywords: ["laboratory", "evolves", "renewal", "fusion", "frozen", "dynamic"],
        },
        {
          point: "Integrated synthesis: Connects both speakers explicitly to show memory and hybridity work together to sustain belonging and cultural dignity.",
          keywords: ["dignity", "complementary", "contradictory", "belonging", "both voices", "safeguards"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant discussion or significant miscomprehension of the audio excerpt.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Brief or one-sided summary mentioning only one speaker or addressing only memory OR hybridity superficially.",
          indicators: ["Lists isolated facts without linking Andrés's testimony to Dra. Restrepo's concepts."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear discussion covering both memory preservation and cultural hybridity with accurate references to both speakers, though conceptual synthesis remains partly developed.",
          indicators: ["Captures key ideas like «sonic archive» and Madrid collaborations accurately."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Insightful, balanced HL synthesis integrating Andrés's lived experience (preservation of Chocó heritage + intercultural collaboration) with Dra. Restrepo's conceptual framing (sonic archive of unwritten history + living laboratory of dignified renewal).",
          indicators: [
            "Explicitly explains why memory and hybridity reinforce rather than contradict each other.",
            "Distinguishes enrichment from cultural erasure/assimilation with textual precision.",
          ],
        },
      ],
      hints: [
        "Organise your 6-mark synthesis around BOTH speakers AND BOTH concepts: how Andrés and Dra. Restrepo each view (a) preserving migrant memory and (b) creating cultural hybridity.",
        "Capture Dra. Restrepo's two memorable metaphors: music as a «sonic archive» (preserving history left out of textbooks) and as a «living laboratory» of renewal.",
        "Conclude by synthesising how both speakers show that blending traditions with flamenco and Senegalese artists strengthens dignity and belonging rather than erasing Chocó roots.",
      ],
      commonError: "Summarising only Andrés's personal anecdote while ignoring Dra. Restrepo's academic framing of «archivo sonoro» and «laboratorio vivo».",
    },
  ],
};
