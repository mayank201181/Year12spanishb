import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "3-ingenio-humano-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "comunicacion-medios-redes",
      question:
        "Escribe en español el sustantivo singular (sin artículo) que designa una noticia falsa o engaño viral difundido en redes sociales.",
      answer: { type: "text", accept: ["bulo", "el bulo"], display: "bulo" },
      solution: [
        "El término estándar del español para *fake news* / engaño viral es **bulo** (*los bulos*).",
      ],
      hints: [
        "Es una palabra de cuatro letras usada por plataformas como *Maldita.es*.",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "tecnologia-innovacion-cientifica",
      question:
        "Completa la **pasiva refleja** en presente (escribe solo `se` + el verbo conjugado): *«En Madrid ________ (desarrollar) nuevos sensores médicos cada año.»*",
      answer: { type: "text", accept: ["se desarrollan", "Se desarrollan"], display: "se desarrollan" },
      traps: [
        {
          spec: { type: "text", accept: ["se desarrolla", "Se desarrolla"] },
          feedback: "Revisa el número: *nuevos sensores médicos* es plural e inanimado, así que la pasiva refleja exige 3.ª persona del plural (*se desarrollan*).",
        },
      ],
      solution: [
        "El sujeto paciente inanimado es *nuevos sensores médicos* (plural).",
        "En pasiva refleja, el verbo concuerda en número con el sustantivo inanimado: **se desarrollan**.",
      ],
      hints: [
        "¿Es *nuevos sensores médicos* singular o plural?",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "tecnologia-innovacion-cientifica",
      question:
        "Completa el **se impersonal** en pretérito indefinido (escribe solo `se` + el verbo conjugado): *«Ayer ________ (entrevistar) a cuatro científicas latinoamericanas.»*",
      answer: { type: "text", accept: ["se entrevistó", "Se entrevistó"], display: "se entrevistó" },
      traps: [
        {
          spec: { type: "text", accept: ["se entrevistaron", "Se entrevistaron"] },
          feedback: "¡Cuidado! Con objeto directo humano precedido de *a* personal (*a cuatro científicas*), el *se impersonal* SIEMPRE va en 3.ª persona singular: **se entrevistó**.",
        },
      ],
      solution: [
        "*A cuatro científicas* lleva *a* personal, por lo que es objeto directo humano y NO puede ser sujeto.",
        "El *se impersonal* exige obligatoriamente 3.ª persona del singular en pretérito: **se entrevistó**.",
      ],
      hints: [
        "Observa la preposición *a* delante de *cuatro científicas*.",
        "Con objeto humano + *a* personal, ¿el verbo con *se* va en singular o en plural?",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "tecnologia-innovacion-cientifica",
      question:
        "Completa la **pasiva perifrástica** en pretérito (verbo *ser* + participio + preposición del agente, 3 palabras): *«La vacuna ________ (crear) ________ investigadoras españolas.»*",
      answer: { type: "text", accept: ["fue creada por"], display: "fue creada por" },
      traps: [
        {
          spec: { type: "text", accept: ["fue creado por"] },
          feedback: "*La vacuna* es femenino singular; el participio debe concordar en femenino: **creada**.",
        },
        {
          spec: { type: "text", accept: ["fue creada para", "fue creada de"] },
          feedback: "El complemento agente de la voz pasiva en español siempre se introduce con **por**, nunca con *para* ni *de*.",
        },
      ],
      solution: [
        "*La vacuna* es femenino singular → pretérito de *ser*: **fue**.",
        "Participio femenino singular de *crear*: **creada**.",
        "Preposición obligatoria del agente pasivo: **por** → **fue creada por**.",
      ],
      hints: [
        "Comprueba género y número de *la vacuna*.",
        "Recuerda que la preposición del agente pasivo es siempre *por*.",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "comunicacion-medios-redes",
      question:
        "¿Qué tipo de texto periodístico del BI (una sola palabra en español) expresa la postura oficial sin firma de la redacción usando la voz institucional *nosotros*?",
      answer: { type: "text", accept: ["editorial", "el editorial", "un editorial"], display: "editorial" },
      traps: [
        {
          spec: { type: "text", accept: ["artículo", "el artículo", "blog", "el blog"] },
          feedback: "El *artículo* lleva firma individual y el *blog* usa voz personal cercana; la postura institucional colectiva corresponde al **editorial**.",
        },
      ],
      solution: [
        "El **editorial** representa la opinión institucional del periódico sin firma personal y emplea la primera persona del plural (*nosotros*).",
      ],
      hints: [
        "Es un texto de medios de comunicación que aparece sin firma de autor individual.",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "entretenimiento-expresiones-artisticas",
      question:
        "Escribe el tipo de texto del BI (una sola palabra con `ñ`) adecuado para evaluar críticamente una película de Pedro Almodóvar sin destripar el final.",
      answer: { type: "text", accept: ["reseña", "la reseña", "una reseña"], display: "reseña" },
      solution: [
        "La crítica estructurada de una película, exposición o libro se denomina **reseña**.",
      ],
      hints: [
        "En inglés equivale a *review* y sigue la estructura F-A-V-O-R.",
        "Lleva la letra *ñ*.",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "entretenimiento-expresiones-artisticas",
      question:
        "Conjuga en **presente de subjuntivo** para completar esta crítica de una *reseña*: *«Sorprende que el director ________ (lograr) tanta tensión sin efectos digitales.»*",
      answer: { type: "text", accept: ["logre"], display: "logre" },
      traps: [
        {
          spec: { type: "text", accept: ["logra"] },
          feedback: "*Sorprende que* es un disparador emocional (WEIRDO), por lo que exige subjuntivo (**logre**), no indicativo.",
        },
      ],
      solution: [
        "*Sorprende que* expresa una valoración emocional (WEIRDO) con cambio de sujeto.",
        "Presente de subjuntivo de *lograr* (3.ª persona singular): **logre**.",
      ],
      hints: [
        "¿*Sorprende que* pide indicativo o subjuntivo?",
        "Cambia la vocal temática de *-ar* a *-e*.",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "tecnologia-innovacion-cientifica",
      question:
        "Escribe en español la expresión de dos palabras (sin artículo) que denomina la desigualdad en el acceso a internet y tecnologías entre zonas urbanas y rurales.",
      answer: { type: "text", accept: ["brecha digital", "la brecha digital"], display: "brecha digital" },
      solution: [
        "La desigualdad en conectividad, dispositivos y competencias tecnológicas se denomina **brecha digital**.",
      ],
      hints: [
        "La primera palabra significa 'gap / divide' (*b...*).",
        "Combínala con el adjetivo *digital*.",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "etica-ia-creatividad-hl",
      question:
        "[HL] Completa con la forma verbal obligatoria tras **de ahí que**: *«El algoritmo reproduce estereotipos; de ahí que ________ (ser) urgente auditarlo.»*",
      answer: { type: "text", accept: ["sea"], display: "sea" },
      traps: [
        {
          spec: { type: "text", accept: ["es"] },
          feedback: "El conector consecutivo C1 **de ahí que** exige SIEMPRE subjuntivo: **sea**.",
        },
      ],
      solution: [
        "**De ahí que** rige obligatoriamente el modo subjuntivo en español.",
        "Presente de subjuntivo de *ser* (3.ª persona singular): **sea**.",
      ],
      hints: [
        "Recuerda la regla invariable de *de ahí que*.",
        "Presente de subjuntivo irregular de *ser*.",
      ],
    },
    {
      id: "3-ingenio-humano-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "State",
      guideRef: "etica-ia-creatividad-hl",
      question:
        "[HL] ¿Cómo se llama en español (dos palabras, sin artículo) el prejuicio sistemático que reproduce un sistema de inteligencia artificial debido a datos de entrenamiento desequilibrados?",
      answer: { type: "text", accept: ["sesgo algorítmico", "el sesgo algorítmico"], display: "sesgo algorítmico" },
      solution: [
        "El prejuicio reproducido por modelos de IA se llama **sesgo algorítmico** (recuerda la tilde en *algorítmico*).",
      ],
      hints: [
        "En inglés es *algorithmic bias*: empieza por *sesgo...*",
        "No olvides la tilde en la palabra esdrújula *algorítmico*.",
      ],
    },
  ],
  papers: [
    {
      id: "3-ingenio-humano-p1",
      title: "Practice Paper 1: Arts, Cinema, Digital Media & Paper 2 Reading (SL Core)",
      level: "SL",
      questions: [
        {
          id: "3-ingenio-humano-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "entretenimiento-expresiones-artisticas",
          question:
            "Escribe el sustantivo técnico en español (sin artículo) que designa el final o resolución de una película o novela (útil en una *reseña*).",
          answer: { type: "text", accept: ["desenlace", "el desenlace"], display: "desenlace" },
          solution: [
            "**Desenlace** es el término literario y cinematográfico de nivel B2–C1 para el final de una obra (*un desenlace predecible / conmovedor*).",
          ],
          hints: [
            "Viene de *desenlazar* ('untying the knot' of the plot).",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "entretenimiento-expresiones-artisticas",
          question:
            "Completa el participio irregular concordado en esta *reseña* de *Roma*: *«La fotografía en blanco y negro está ________ (hacer) con una sensibilidad extraordinaria.»*",
          answer: { type: "text", accept: ["hecha"], display: "hecha" },
          traps: [
            {
              spec: { type: "text", accept: ["hecho"] },
              feedback: "*La fotografía* es femenino singular, así que el participio con *estar* debe concordar: **hecha**.",
            },
            {
              spec: { type: "text", accept: ["hacida"] },
              feedback: "*Hacer* tiene participio irregular (*hecho/hecha*), nunca `*hacida*`.",
            },
          ],
          solution: [
            "El participio irregular de *hacer* es *hecho*.",
            "Concuerda en femenino singular con *la fotografía*: **hecha**.",
          ],
          hints: [
            "¿Cuál es el participio irregular de *hacer*?",
            "Comprueba el género de *la fotografía*.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "comunicacion-medios-redes",
          question:
            "Sustituye el anglicismo *clickbait* por el término recomendado en español (una sola palabra, sin artículo).",
          answer: { type: "text", accept: ["ciberanzuelo", "el ciberanzuelo"], display: "ciberanzuelo" },
          solution: [
            "FundéuRAE recomienda **ciberanzuelo** (*ciber-* + *anzuelo*, 'bait') como equivalente preciso de *clickbait*.",
          ],
          hints: [
            "Combina el prefijo *ciber-* con la palabra española para 'fishing hook/bait' (*anzuelo*).",
            "Se escribe en una sola palabra sin guion.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "comunicacion-medios-redes",
          question:
            "Lee este fragmento de lectura (Prueba 2): *«Cada comentario, fotografía o búsqueda que publicamos permanece archivado durante años y puede condicionar futuras entrevistas de trabajo.»* ¿Qué expresión de dos palabras (sin artículo) resume este rastro permanente en internet?",
          answer: { type: "text", accept: ["huella digital", "la huella digital", "rastro digital", "el rastro digital"], display: "huella digital" },
          solution: [
            "El conjunto permanente de datos que dejamos en línea se conoce como **huella digital** (o *rastro digital*).",
          ],
          hints: [
            "En inglés es *digital footprint*.",
            "La primera palabra significa 'footprint' (*h...*).",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "comunicacion-medios-redes",
          question:
            "Un texto del examen tiene: titular con cita entrecomillada, breve presentación biográfica de una cineasta chilena y turnos alternos de preguntas y respuestas. ¿Qué tipo de texto es (una sola palabra)?",
          answer: { type: "text", accept: ["entrevista", "la entrevista", "una entrevista"], display: "entrevista" },
          solution: [
            "La estructura de introducción biográfica seguida de turnos de preguntas y respuestas corresponde a una **entrevista**.",
          ],
          hints: [
            "Pertenece a la categoría de Medios de Comunicación (Mass Media).",
            "El periodista formula preguntas directas a un invitado.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "comunicacion-medios-redes",
          question:
            "Paper 2 Reading — Synonym Match. Lee: *«Antes de reenviar cualquier audio alarmista por WhatsApp, conviene **verificar** su procedencia en medios fiables.»* Escribe el verbo infinitivo B2–C1 de tu guía que significa exactamente *comprobar comparando varias fuentes* (ej.: *________ las fuentes*).",
          answer: { type: "text", accept: ["contrastar", "contrastar las fuentes"], display: "contrastar" },
          solution: [
            "**Contrastar** (*contrastar las fuentes*) es la colocación periodística exacta de nivel B2–C1 para verificar información cruzando distintas fuentes.",
          ],
          hints: [
            "Empieza por *con-* y suele acompañar al sustantivo *las fuentes*.",
            "En inglés equivale a *to cross-check / verify against multiple sources*.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Justify",
          guideRef: "comunicacion-medios-redes",
          question:
            "**Paper 2 Reading Practice.** Lee el extracto:\n*«En América Latina, plataformas colaborativas como Chequeado y Verificado han demostrado que desmentir un engaño viral exige rapidez, transparencia metodológica y lenguaje accesible. Sin embargo, los estudios muestran que las correcciones rara vez alcanzan el mismo alcance viral que la mentira inicial, pues la indignación emocional se difunde mucho más deprisa que los datos rigurosos.»*\n\nResponde en español o inglés (3 puntos):\n1. ¿Es **Verdadero** o **Falso** que las correcciones suelen difundirse igual de rápido que los engaños iniciales? Justifica copiando la frase mínima exacta del texto.\n2. Según el extracto, ¿por qué se propagan más velozmente los engaños que los datos rigurosos?",
          modelAnswer:
            "1. **Falso**. Justificación exacta: «las correcciones rara vez alcanzan el mismo alcance viral que la mentira inicial» (es decir, los desmentidos casi nunca igualan la difusión masiva del bulo original).\n2. Porque la rabia y las reacciones impulsivas del público generan mucha más interacción y circulan con mayor velocidad que los datos contrastados.",
          markScheme: [
            {
              point: "Correct verdict: Falso.",
              keywords: ["falso", "false"],
            },
            {
              point: "Identifies exact justification quote / confirms corrections rarely match the viral spread of the original hoax.",
              keywords: ["desmentidos", "casi nunca", "difusión masiva", "bulo original"],
            },
            {
              point: "Explains cause: public anger / impulsive emotional reactions travel faster than verified facts.",
              keywords: ["rabia", "impulsivas", "mayor velocidad", "contrastados", "outrage"],
            },
          ],
          hints: [
            "Fíjate en el conector adversativo *Sin embargo* en la segunda oración.",
            "Recuerda copiar SOLO la cláusula mínima que prueba *Falso*, sin añadir frases extra.",
            "Para la segunda pregunta, busca el conector causal *pues*.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "entretenimiento-expresiones-artisticas",
          question:
            "Explica en español (80–110 palabras) cómo **Antoni Gaudí** o **Frida Kahlo** ejemplifican el tema prescrito *Ingenio humano*, conectando sus técnicas creativas con el patrimonio cultural hispanohablante.",
          modelAnswer:
            "Antoni Gaudí encarna el ingenio humano mediante la biomímesis arquitectónica en La Sagrada Família de Barcelona. Inspirado en árboles y arcos catenarios naturales, diseñó columnas ramificadas que sostienen grandes cargas sin contrafuertes pesados, logrando interiores bañados en luz simbólica. Hoy, arquitectos contemporáneos emplean impresión 3D y diseño paramétrico para completar su visión, uniendo tradición artesanal e ingeniería digital. De forma paralela, Frida Kahlo convirtió el autorretrato en un vehículo de resiliencia y mexicanidad, entrelazando simbología indígena y denuncia íntima que sigue inspirando el arte mundial.",
          markScheme: [
            {
              point: "Names concrete work/domain of Gaudí (Sagrada Família / Barcelona) or Kahlo (autorretratos / mexicanidad).",
              keywords: ["sagrada família", "sagrada familia", "autorretrato", "mexicanidad"],
            },
            {
              point: "Explains a specific creative/engineering technique (biomímesis, arcos catenarios, simbología indígena).",
              keywords: ["biomímesis", "catenarios", "columnas", "simbología", "indígena"],
            },
            {
              point: "Links past artistic genius to contemporary innovation or lasting cultural legacy.",
              keywords: ["impresión 3d", "paramétrico", "tradición", "resiliencia", "inspirando"],
            },
            {
              point: "Deploys accurate B2–C1 thematic Spanish lexis beyond basic adjectives.",
              keywords: ["arquitectónica", "ingeniería", "simbólica", "vehículo", "denuncia"],
            },
          ],
          hints: [
            "Evita descripciones turísticas simples como «es un edificio bonito».",
            "Menciona técnicas concretas: *biomímesis, arcos catenarios, diseño paramétrico* (Gaudí) o *autorretrato, simbología indígena, mexicanidad* (Kahlo).",
            "Conecta el arte con el patrimonio y la innovación actual.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Distinguish",
          guideRef: "comunicacion-medios-redes",
          question:
            "Compara y distingue un **artículo periodístico** frente a un **blog personal** en la Prueba 1 del BI según cuatro criterios: (1) voz/registro, (2) destinatario, (3) propósito comunicativo y (4) convenciones estructurales clave.",
          modelAnswer:
            "1. **Voz y registro:** El artículo emplea un registro semiformal en tercera persona (u objetividad analítica), mientras que el blog adopta un tono cercano, subjetivo y conversacional en primera persona dirigiéndose directamente al lector con «tú» o «vosotros».\n2. **Destinatario:** El artículo apunta al público amplio de un medio informativo; el blog se dirige a una comunidad digital afín con intereses compartidos.\n3. **Propósito:** El artículo busca informar, contextualizar y analizar con datos y citas; el blog comparte reflexiones personales para fomentar el diálogo interactivo.\n4. **Convenciones:** El artículo incluye titular, entradilla, firma de autor y subtítulos temáticos; el blog integra título atractivo, fecha o apodo digital, preguntas directas, etiquetas (#) e invitación explícita a dejar comentarios.",
          markScheme: [
            {
              point: "Distinguishes voice/register: semi-formal/3rd person vs conversational 1st person addressing tú/vosotros.",
              keywords: ["tercera persona", "semiformal", "primera persona", "conversacional"],
            },
            {
              point: "Contrasts target audience: broad press readership vs niche/shared-interest online community.",
              keywords: ["público amplio", "comunidad digital", "lectores"],
            },
            {
              point: "Distinguishes purpose: inform/analyse with evidence vs share personal reflection and spark interaction.",
              keywords: ["informar", "datos", "reflexiones", "diálogo", "interactivo"],
            },
            {
              point: "Lists accurate structural conventions for both (titular/firma/entradilla vs etiquetas/comentarios).",
              keywords: ["entradilla", "etiquetas", "comentarios", "firma"],
            },
          ],
          hints: [
            "Piensa en los 5 Conceptos Clave del BI: *Audience, Context, Purpose, Meaning, Variation*.",
            "Incluye al menos dos convenciones visuales concretas de cada tipo de texto.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "entretenimiento-expresiones-artisticas",
          question:
            "Completa esta valoración con subjuntivo para una *reseña* musical de Rosalía: *«Merece la pena que el público internacional ________ (conocer) las raíces del flamenco tradicional.»*",
          answer: { type: "text", accept: ["conozca"], display: "conozca" },
          traps: [
            {
              spec: { type: "text", accept: ["conoce"] },
              feedback: "*Merece la pena que* es una expresión impersonal valorativa (WEIRDO), por lo que exige subjuntivo (**conozca**).",
            },
          ],
          solution: [
            "*Merece la pena que* activa el presente de subjuntivo.",
            "Verbo irregular en raíz de *yo* (*conozco*) → 3.ª persona singular del subjuntivo: **conozca**.",
          ],
          hints: [
            "Forma el presente de subjuntivo a partir de la 1.ª persona singular *yo conozco*.",
            "Cambia *-o* por *-a* para los verbos en *-er*.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "comunicacion-medios-redes",
          question:
            "Corrige el falso amigo en negrita escribiendo la expresión española correcta (dos palabras): *«Muchos creen que el periodismo impreso ha muerto, pero **actualmente** (intended: 'actually / in reality') sobrevive en ediciones de fin de semana.»*",
          answer: { type: "text", accept: ["en realidad"], display: "en realidad" },
          traps: [
            {
              spec: { type: "text", accept: ["actualmente"] },
              feedback: "*Actualmente* significa *currently* ('at the moment'), no *actually* ('in reality'). Usa **en realidad**.",
            },
          ],
          solution: [
            "*Actualmente* = *currently*. Para traducir *actually / in reality*, el español emplea **en realidad**.",
          ],
          hints: [
            "Evita el falso amigo *actualmente* (= *currently*).",
            "Expresión de dos palabras que empieza por *en...*",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Discuss",
          guideRef: "comunicacion-medios-redes",
          question:
            "Discute en español (90–120 palabras) **dos ventajas** y **dos riesgos** de las redes sociales como fuente principal de noticias para los jóvenes hispanohablantes. Utiliza al menos dos conectores de contraste.",
          modelAnswer:
            "Por un lado, las redes sociales ofrecen acceso inmediato y gratuito a noticias globales, permitiendo que jóvenes de distintos países hispanohablantes sigan acontecimientos en tiempo real. Además, impulsan el periodismo ciudadano y dan visibilidad a causas sociales ignoradas por medios tradicionales. Sin embargo, esta rapidez conlleva riesgos graves: la proliferación de bulos sin verificar distorsiona la realidad y genera alarma social. Asimismo, los algoritmos crean cámaras de eco que refuerzan el sesgo de confirmación y polarizan el debate público. No obstante, con una sólida alfabetización mediática, los jóvenes pueden aprovechar estas plataformas con espíritu crítico.",
          markScheme: [
            {
              point: "Explains a clear advantage (speed/real-time access or democratised citizen journalism/visibility).",
              keywords: ["inmediato", "tiempo real", "periodismo ciudadano", "visibilidad"],
            },
            {
              point: "Explains a second distinct advantage or nuance (media literacy / global reach).",
              keywords: ["gratuito", "alfabetización mediática", "espíritu crítico", "causas"],
            },
            {
              point: "Explains concrete risks (viral bulos/disinformation AND algorithmic echo chambers/polarisation).",
              keywords: ["bulos", "cámaras de eco", "sesgo de confirmación", "polarizan"],
            },
            {
              point: "Uses authentic B2–C1 contrast/structuring connectors (sin embargo, no obstante, por un lado).",
              keywords: ["sin embargo", "no obstante", "por un lado", "asimismo"],
            },
          ],
          hints: [
            "Equilibra dos beneficios concretos con dos peligros reales (evita una respuesta unilateral).",
            "Integra vocabulario temático: *periodismo ciudadano, bulos, cámara de eco, alfabetización mediática*.",
            "Usa conectores como *por un lado..., sin embargo..., no obstante...*",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 6,
          commandTerm: "Discuss",
          guideRef: "entretenimiento-expresiones-artisticas",
          question:
            "**Paper 1 Guided Task (SL · Reseña — ~180–220 palabras de muestra).**\nTu revista cultural estudiantil en español te pide una **reseña** sobre una película hispanohablante reciente o clásica (por ejemplo, *El laberinto del fauno*, *Roma* o *Volver*) para convencer a otros alumnos de verla de forma crítica.\n\nRedacta la reseña cumpliendo todas las convenciones del tipo de texto (titular atractivo, ficha técnica breve, sinopsis sin *spoilers*, valoración técnica con léxico B2–C1, objeción matizada con conector concesivo y recomendación final con puntuación).",
          modelAnswer:
            "**Laberintos de memoria: cuando la fantasía desnuda la dictadura**\n*Ficha técnica: «El laberinto del fauno» | Dirección: Guillermo del Toro | España-México, 2006 | Género: Fantasía oscura / Drama histórico*\n\nAmbientada en la España de 1944, la cinta sigue a Ofelia, una niña apasionada por los cuentos que descubre un antiguo laberinto junto al campamento militar dirigido por su cruel padrastro. Mientras el bosque oculta pruebas mágicas, la resistencia antifranquista lucha por sobrevivir en las montañas cercanas.\n\nLo más sobrecogedor de la obra radica en su puesta en escena y dirección artística: cada criatura funciona como alegoría moral frente a la obediencia ciega. Sorprende que Del Toro logre entrelazar el folclore mítico con la brutalidad de la posguerra sin trivializar el dolor histórico, apoyado en una fotografía de tonos azulados y una banda sonora inolvidable.\n\nSi bien es cierto que algunas escenas resultan extremadamente crudas para espectadores sensibles y el ritmo decae brevemente en el tramo intermedio, tales matices no empañan la fuerza del guion. En definitiva, resulta imprescindible para estudiantes interesados en cómo el cine hispano convierte la imaginación en memoria histórica.\n*Valoración: ★★★★☆ (4,5/5)*",
          markScheme: [
            {
              point: "Includes an engaging critical headline and brief ficha técnica (director, year/country, genre).",
              keywords: ["ficha técnica", "dirección", "género", "fantasía"],
            },
            {
              point: "Provides a concise present-tense synopsis without spoiling the ending.",
              keywords: ["ambientada", "ofelia", "campamento", "resistencia"],
            },
            {
              point: "Analyses specific cinematic techniques with B2–C1 artistic metalanguage.",
              keywords: ["puesta en escena", "fotografía", "banda sonora", "alegoría"],
            },
            {
              point: "Incorporates accurate subjunctive in an evaluative clause.",
              keywords: ["sorprende que", "logre"],
            },
            {
              point: "Offers balanced critique via a concessive structure (si bien / aunque + nuanced objection).",
              keywords: ["si bien", "crudas", "ritmo", "guion"],
            },
            {
              point: "Concludes with a clear audience recommendation and rating/verdict.",
              keywords: ["imprescindible", "valoración", "memoria histórica"],
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
              descriptor: "Basic plot retelling with mostly A2/B1 vocabulary and minimal review conventions.",
              indicators: ["Spoils the ending or writes purely chronologically", "Generic adjectives (*buena, interesante*) dominate"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Recognisable *reseña* with headline, brief summary, and some evaluation, though balance or language precision is uneven.",
              indicators: ["Includes ficha técnica and rating", "Attempts technical terms but limited subjunctive or concession"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authentic Band 10–12 IB *reseña* uniting vivid artistic metalanguage, cultural-historical depth, balanced concession, and flawless conventions.",
              indicators: ["Spoiler-free synopsis (~20%)", "Precise technical critique + accurate subjunctive + nuanced target-audience verdict"],
            },
          ],
          hints: [
            "Aplica el acrónimo **F-A-V-O-R**: Ficha técnica, Argumento breve, Valoración técnica, Objeción matizada, Recomendación.",
            "Usa presente histórico para la sinopsis y nunca reveles el desenlace final.",
            "Incluye al menos un disparador de subjuntivo (*Sorprende que...*, *Cabe lamentar que...*) y una concesión (*Si bien es cierto que...*).",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q14",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "comunicacion-medios-redes",
          question:
            "Escribe la colocación española de dos palabras (sin artículo) equivalente a *media literacy*, clave para frenar la desinformación escolar.",
          answer: { type: "text", accept: ["alfabetización mediática", "la alfabetización mediática"], display: "alfabetización mediática" },
          solution: [
            "**Alfabetización mediática** designa la formación crítica para verificar fuentes, detectar sesgos y consumir medios con criterio.",
          ],
          hints: [
            "La primera palabra deriva de *alfabeto* (*literacy* = *alfabetización*).",
            "El adjetivo femenino para 'media' lleva tilde: *mediática*.",
          ],
        },
        {
          id: "3-ingenio-humano-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 6,
          commandTerm: "Evaluate",
          guideRef: "comunicacion-medios-redes",
          question:
            "**Paper 1 Guided Task (SL · Editorial — ~180–220 palabras de muestra).**\nComo consejo de redacción de la revista digital de tu instituto, redacta un **editorial** evaluando si los colegios deberían prohibir totalmente los teléfonos inteligentes o integrarlos con educación mediática. Demuestra las convenciones exactas de un editorial (sin firma personal, voz institucional *nosotros*, tesis clara, contraargumento y llamada a la acción).",
          modelAnswer:
            "**Más allá de la prohibición: educar para la autonomía digital**\n\nEn las últimas semanas, el debate sobre la prohibición absoluta de los teléfonos móviles en los centros educativos ha polarizado a familias y docentes. Desde esta redacción consideramos que retirar las pantallas por decreto ofrece un alivio inmediato, pero resulta insuficiente si no se acompaña de una sólida alfabetización mediática.\n\nSi bien es cierto que las notificaciones constantes fragmentan la atención y alimentan la ansiedad escolar, aislar por completo al alumnado de la tecnología durante seis horas no le enseña a contrastar fuentes ni a proteger su huella digital fuera del aula. Prohibir sin formar pospone el problema hasta que suena el timbre de salida.\n\nPor consiguiente, abogamos por una vía equilibrada: restringir el uso recreativo durante las clases lectivas mientras se incorporan talleres obligatorios sobre verificación de bulos y bienestar digital. Exhortamos a la dirección y a las familias a que impulsen este pacto educativo compartido; solo formando ciudadanos críticos convertiremos el teléfono en herramienta de aprendizaje y no de distracción.",
          markScheme: [
            {
              point: "Uses an authoritative analytical headline and omits any personal signature.",
              keywords: ["autonomía digital", "prohibición"],
            },
            {
              point: "Sustains authentic institutional 1st-person plural voice (*nosotros*).",
              keywords: ["desde esta redacción", "consideramos", "abogamos", "exhortamos"],
            },
            {
              point: "Presents a clear, nuanced editorial thesis rather than a simple one-sided ban.",
              keywords: ["insuficiente", "alfabetización mediática", "vía equilibrada"],
            },
            {
              point: "Integrates a counter-argument cleanly using a B2–C1 concessive connector.",
              keywords: ["si bien es cierto", "fragmentan", "huella digital"],
            },
            {
              point: "Proposes concrete civic/school action using subjunctive accurately.",
              keywords: ["por consiguiente", "impulsen", "talleres"],
            },
            {
              point: "Maintains formal persuasive editorial register throughout (zero informal slang or blog tags).",
              keywords: ["pacto educativo", "ciudadanos críticos", "contrastar"],
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
              descriptor: "Lacks editorial voice (uses personal *yo* or informal register); presents simplistic points.",
              indicators: ["Signs off personally or uses casual *tú* slang", "No counter-argument included"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear opinion piece with relevant arguments, though institutional *nosotros* voice or structural polish fluctuates.",
              indicators: ["Addresses pros/cons of phones", "Some connectors used but limited persuasive rhetoric"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Persuasive Band 10–12 IB *editorial*: sustained institutional *nosotros* voice, nuanced thesis, counter-argument, accurate subjunctive, and resonant call to action.",
              indicators: ["Zero personal signature", "Seamless concession + concrete institutional recommendation"],
            },
          ],
          hints: [
            "Nunca firmes un editorial con tu nombre ni uses «Yo pienso que...»: usa *Desde esta redacción consideramos...*, *Abogamos por...*",
            "Reconoce el argumento contrario (*Si bien es cierto que...*) antes de defender tu propuesta equilibrada.",
            "Cierra con un llamamiento formal a la comunidad escolar (*Exhortamos a que + subjuntivo*).",
          ],
        },
      ],
    },
    {
      id: "3-ingenio-humano-p2",
      title: "Practice Paper 2: Innovation, Passive Voice & [HL] AI Ethics / Bias",
      level: "HL",
      questions: [
        {
          id: "3-ingenio-humano-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "tecnologia-innovacion-cientifica",
          question:
            "Transforma a **pasiva refleja** en presente (escribe solo `se` + verbo conjugado): *«En Costa Rica la gente produce casi toda la electricidad con fuentes renovables.»*",
          answer: { type: "text", accept: ["se produce", "Se produce"], display: "se produce" },
          traps: [
            {
              spec: { type: "text", accept: ["se producen", "Se producen"] },
              feedback: "El sujeto paciente inanimado es *casi toda la electricidad* (singular), por tanto el verbo va en singular: **se produce**.",
            },
          ],
          solution: [
            "*Casi toda la electricidad* es sustantivo inanimado singular → pasiva refleja en 3.ª persona singular: **se produce**.",
          ],
          hints: [
            "Identifica el sustantivo inanimado que recibe la acción (*toda la electricidad*).",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "tecnologia-innovacion-cientifica",
          question:
            "Completa la **pasiva perifrástica** en pretérito (solo las dos palabras `ser` + participio): *«Los telescopios de Atacama ________ (construir) por un consorcio internacional.»*",
          answer: { type: "text", accept: ["fueron construidos"], display: "fueron construidos" },
          traps: [
            {
              spec: { type: "text", accept: ["fueron construido", "fue construido"] },
              feedback: "*Los telescopios* es masculino plural; tanto el verbo *ser* como el participio deben ir en plural: **fueron construidos**.",
            },
            {
              spec: { type: "text", accept: ["estuvieron construidos", "estaban construidos"] },
              feedback: "Al haber agente explícito (*por un consorcio*) que realiza la acción, se exige *ser + participio*: **fueron construidos**.",
            },
          ],
          solution: [
            "*Los telescopios* es masculino plural → pretérito de *ser* (**fueron**) + participio masculino plural (**construidos**).",
          ],
          hints: [
            "Comprueba la existencia del agente *por un consorcio* → usa *ser*, no *estar*.",
            "Concuerda el participio con *los telescopios* (masculino plural).",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "tecnologia-innovacion-cientifica",
          question:
            "Corrige el error de concordancia escribiendo las dos palabras correctas (`se` + verbo): *«En la cumbre de Valencia **se premiaron** a diez ingenieras solares.»*",
          answer: { type: "text", accept: ["se premió", "Se premió"], display: "se premió" },
          traps: [
            {
              spec: { type: "text", accept: ["se premiaron", "Se premiaron"] },
              feedback: "Delante de *diez ingenieras* hay una *a* personal; el verbo en *se impersonal* nunca puede ir en plural.",
            },
          ],
          solution: [
            "*A diez ingenieras solares* es objeto directo humano con *a* personal → **se impersonal** obligatorio en 3.ª singular: **se premió**.",
          ],
          hints: [
            "Detecta la preposición *a* antes de *diez ingenieras*.",
            "El *se impersonal* siempre se conjuga en singular.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "tecnologia-innovacion-cientifica",
          question:
            "Elige `ser` o `estar` (presente, 3.ª persona plural) para expresar el **estado resultante**: *«Todos los servidores del hospital ________ protegidos mediante doble cifrado.»*",
          answer: { type: "text", accept: ["están"], display: "están" },
          traps: [
            {
              spec: { type: "text", accept: ["son"] },
              feedback: "Aquí describimos el estado resultante de protección (no una acción en curso con agente), por lo que corresponde **están**.",
            },
          ],
          solution: [
            "Para expresar un estado resultante (*pasiva de resultado*) se usa *estar + participio* → **están** (con tilde).",
          ],
          hints: [
            "¿Describe una acción realizada por alguien o la condición actual de los servidores?",
            "No olvides la tilde en la 3.ª persona plural de *estar*.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "tecnologia-innovacion-cientifica",
          question:
            "Completa el participio irregular concordado en esta pasiva perifrástica: *«Las muestras de ADN fueron ________ (descubrir) por el equipo de Margarita Salas.»*",
          answer: { type: "text", accept: ["descubiertas"], display: "descubiertas" },
          traps: [
            {
              spec: { type: "text", accept: ["descubierta", "descubierto"] },
              feedback: "*Las muestras* es femenino plural; el participio debe concordar en género y número: **descubiertas**.",
            },
            {
              spec: { type: "text", accept: ["descubridas"] },
              feedback: "*Descubrir* tiene participio irregular (*descubierto/a*), nunca `*descubridas*`.",
            },
          ],
          solution: [
            "Participio irregular de *descubrir* = *descubierto*.",
            "En concordancia con *las muestras* (femenino plural) → **descubiertas**.",
          ],
          hints: [
            "Es un compuesto de *cubrir* (*cubierto*).",
            "Comprueba género y número de *las muestras*.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "etica-ia-creatividad-hl",
          question:
            "[HL] Completa esta cláusula C1 con el pronombre relativo posesivo exacto: *«Auditamos una plataforma ________ algoritmos penalizaban dialectos latinoamericanos.»*",
          answer: { type: "text", accept: ["cuyos"], display: "cuyos" },
          traps: [
            {
              spec: { type: "text", accept: ["cuya"] },
              feedback: "*Cuyo/a/os/as* concuerda con el sustantivo poseído que le sigue (*algoritmos*, masculino plural), NO con *plataforma*: **cuyos**.",
            },
            {
              spec: { type: "text", accept: ["cuyo"] },
              feedback: "*Algoritmos* es masculino plural → **cuyos**.",
            },
          ],
          solution: [
            "El relativo posesivo *cuyo* concuerda con el sustantivo que lo sigue inmediatamente: *algoritmos* (masculino plural) → **cuyos**.",
          ],
          hints: [
            "Usa el relativo posesivo formal equivalente a *whose*.",
            "Recuerda: concuerda con *algoritmos* (masculino plural), no con *plataforma*.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "etica-ia-creatividad-hl",
          question:
            "[HL] Completa la cláusula de consecuencia C1 en presente de subjuntivo: *«Ningún artista autorizó el uso de sus cuadros; de ahí que el sindicato ________ (exigir) una indemnización.»*",
          answer: { type: "text", accept: ["exija"], display: "exija" },
          traps: [
            {
              spec: { type: "text", accept: ["exige"] },
              feedback: "**De ahí que** siempre exige modo subjuntivo (**exija**), nunca indicativo.",
            },
            {
              spec: { type: "text", accept: ["exiga"] },
              feedback: "Cambio ortográfico necesario para mantener el sonido /x/ ante *-a*: *g* cambia a *j* → **exija**.",
            },
          ],
          solution: [
            "*De ahí que* rige subjuntivo.",
            "Presente de subjuntivo de *exigir* (3.ª sing., con cambio ortográfico *g → j*): **exija**.",
          ],
          hints: [
            "Tras *de ahí que* siempre va subjuntivo.",
            "Recuerda la ortografía de los verbos en *-gir* (*exijo* → *exija*).",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "tecnologia-innovacion-cientifica",
          question:
            "Explica en español (80–110 palabras) por qué la **brecha digital** en zonas rurales de América Latina o de *la España vaciada* afecta tanto a la educación como al desarrollo económico, y sugiere dos medidas concretas usando pasiva refleja (`se + verbo`).",
          modelAnswer:
            "La falta de fibra óptica y equipos actualizados en aldeas andinas o pueblos de la España vaciada impide que el alumnado rural acceda a bibliotecas digitales, clases híbridas y formación universitaria en igualdad de condiciones. En el plano económico, las pequeñas cooperativas agrícolas quedan excluidas del comercio electrónico y de la telemedicina, acelerando la despoblación juvenil. Para revertir esta fractura, se deben financiar redes públicas de conectividad de alta velocidad en municipios aislados. Asimismo, se recomienda crear centros comunitarios de préstamo tecnológico y capacitación digital gratuita para todas las generaciones.",
          markScheme: [
            {
              point: "Explains concrete educational impact (online resources, hybrid classes, unequal university prep).",
              keywords: ["alumnado", "bibliotecas", "clases", "igualdad", "universitaria"],
            },
            {
              point: "Explains concrete economic/demographic impact (e-commerce exclusion, depopulation, telemedicine).",
              keywords: ["cooperativas", "comercio electrónico", "despoblación", "telemedicina"],
            },
            {
              point: "Proposes first actionable measure using accurate *pasiva refleja* (e.g. *se deben financiar*, *se instalan*).",
              keywords: ["se deben", "financiar", "conectividad", "fibra"],
            },
            {
              point: "Proposes second actionable measure using *se* structure (e.g. *se recomienda*, *se crean*).",
              keywords: ["se recomienda", "capacitación", "préstamo", "centros comunitarios"],
            },
          ],
          hints: [
            "Conecta la desigualdad tecnológica con un impacto escolar y otro económico.",
            "Asegúrate de incluir dos verbos en *pasiva refleja* con concordancia exacta (*se deben financiar redes...*, *se recomienda crear...*).",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 4,
          commandTerm: "Analyse",
          guideRef: "etica-ia-creatividad-hl",
          question:
            "**[HL] Paper 2 Reading — Analysing Framing & Irony.** Lee este fragmento de una columna de opinión:\n*«La multinacional presume de haber logrado una “democratización histórica del arte” tras sustituir a treinta traductores literarios por un programa automático. ¡Qué gesta tan altruista ahorrar salarios mientras el algoritmo recicla gratuitamente décadas de literatura hispanoamericana!»*\n\nAnaliza **dos recursos estilísticos** que demuestran la actitud crítica e irónica del autor.",
          modelAnswer:
            "En primer lugar, el empleo de comillas de distanciamiento en «democratización histórica del arte» sirve para cuestionar el eufemismo corporativo y exponer que la empresa encubre despidos laborales bajo un discurso falsamente progresista. En segundo lugar, la exclamación antifrástica «¡Qué gesta tan altruista ahorrar salarios!» combina un elogio fingido con el choque semántico de «recicla gratuitamente», creando un sarcasmo mordaz que denuncia la explotación económica y la vulneración de los derechos de autor de escritores hispanoamericanos.",
          markScheme: [
            {
              point: "Identifies distancing/ironic scare quotes around the corporate claim.",
              keywords: ["comillas", "distanciamiento", "eufemismo"],
            },
            {
              point: "Explains how those quotes expose corporate spin hiding layoffs.",
              keywords: ["despidos", "encubre", "cuestionar", "falsamente"],
            },
            {
              point: "Identifies antiphrasis / ironic exclamation mocking false altruism.",
              keywords: ["exclamación", "antifrástica", "sarcasmo", "elogio fingido"],
            },
            {
              point: "Connects the irony to copyright/exploitation of Hispanic writers.",
              keywords: ["derechos de autor", "explotación", "vulneración", "mordaz"],
            },
          ],
          hints: [
            "Fíjate en las comillas alrededor de *«democratización histórica del arte»*.",
            "Observa el choque entre *¡Qué gesta tan altruista!* y *ahorrar salarios / recicla gratuitamente*.",
            "No te limites a nombrar «ironía»: explica qué critica exactamente.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 4,
          commandTerm: "Compare and contrast",
          guideRef: "etica-ia-creatividad-hl",
          question:
            "[HL] Compara la **censura artística estatal histórica** en el mundo hispanohablante con la **censura algorítmica y autocensura contemporánea** en plataformas digitales (90–120 palabras).",
          modelAnswer:
            "Durante dictaduras como el franquismo en España o los regímenes militares del Cono Sur, la censura era explícita e institucional: funcionarios estatales prohibían libros o recortaban películas, lo que llevó a cineastas y novelistas a recurrir al exilio, la metáfora y la alegoría. En cambio, en el entorno digital actual la restricción suele operar de modo invisible mediante moderación opaca que reduce el alcance de contenidos incómodos sin explicación transparente. Asimismo, la presión comercial de las plataformas y el temor a campañas de linchamiento fomentan la autocensura, limitando la audacia creativa sin necesidad de un censor oficial.",
          markScheme: [
            {
              point: "Characterises historical Hispanic state censorship with concrete reference (Francoism / Southern Cone regimes).",
              keywords: ["franquismo", "dictaduras", "institucional", "funcionarios"],
            },
            {
              point: "Notes artistic resistance strategies used historically (metaphor, allegory, exile).",
              keywords: ["alegoría", "metáfora", "exilio"],
            },
            {
              point: "Contrasts with invisible/opaque modern algorithmic moderation throttling reach.",
              keywords: ["moderación opaca", "invisible", "alcance", "transparente"],
            },
            {
              point: "Identifies commercial pressure or online backlash driving self-censorship.",
              keywords: ["presión comercial", "linchamiento", "audacia", "oficial"],
            },
          ],
          hints: [
            "Menciona un contexto histórico hispano concreto (franquismo / dictaduras del Cono Sur) y el recurso de la alegoría.",
            "Contrasta el censor visible del pasado con la *moderación opaca* y la presión comercial actual.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q11",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "etica-ia-creatividad-hl",
          question:
            "[HL] Escribe la forma verbal gramaticalmente adecuada de **(resolver)** en esta refutación C1: *«Lejos de ________ la brecha educativa, los programas mal diseñados pueden agravarla.»*",
          answer: { type: "text", accept: ["resolver"], display: "resolver" },
          traps: [
            {
              spec: { type: "text", accept: ["resuelva", "resuelve", "resolviendo"] },
              feedback: "La preposición *de* en **lejos de** exige SIEMPRE infinitivo: **resolver**.",
            },
          ],
          solution: [
            "La locución **lejos de** siempre se construye con infinitivo (*lejos de + infinitivo*): **resolver**.",
          ],
          hints: [
            "Después de cualquier preposición (*de*), ¿qué forma no personal del verbo se usa en español?",
            "Recuerda la fórmula *Lejos de + infinitivo*.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "tecnologia-innovacion-cientifica",
          question:
            "Reescribe en una sola palabra (participio irregular masculino plural) para completar: *«Los conflictos éticos sobre privacidad todavía no han sido ________ (resolver) por la ley.»*",
          answer: { type: "text", accept: ["resueltos"], display: "resueltos" },
          traps: [
            {
              spec: { type: "text", accept: ["resolvidos"] },
              feedback: "*Resolver* tiene participio irregular (*resuelto/resueltos*), nunca `*resolvidos*`.",
            },
            {
              spec: { type: "text", accept: ["resuelto"] },
              feedback: "En voz pasiva con *ser*, el participio debe concordar en plural con *los conflictos*: **resueltos**.",
            },
          ],
          solution: [
            "El participio irregular de *resolver* es *resuelto*.",
            "Concordado con *los conflictos éticos* (masculino plural) → **resueltos**.",
          ],
          hints: [
            "¿Cuál es el participio irregular de *resolver*?",
            "Concuerda el participio con *los conflictos*.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Evaluate",
          guideRef: "tecnologia-innovacion-cientifica",
          question:
            "Evalúa en español (85–115 palabras) el impacto ambiental y ético de la **obsolescencia programada** en la industria tecnológica actual, proponiendo soluciones prácticas basadas en la economía circular.",
          modelAnswer:
            "La obsolescencia programada constituye una contradicción ética del progreso tecnológico: en lugar de diseñar aparatos duraderos, numerosos fabricantes dificultan la reparación y dejan sin actualizaciones equipos aún funcionales. Como consecuencia, millones de toneladas de basura electrónica contaminan suelos y ríos, a menudo trasladadas a países en vías de desarrollo, mientras se agotan minerales escasos como el litio y el cobalto. Frente a este modelo insostenible, resulta indispensable consolidar el derecho a reparar mediante componentes modulares y garantías ampliadas. Asimismo, se deben fomentar mercados de dispositivos reacondicionados y reciclar rigurosamente las baterías.",
          markScheme: [
            {
              point: "Explains how manufacturers shorten lifespan (hard repairs, dropped software updates).",
              keywords: ["duraderos", "reparación", "actualizaciones", "fabricantes"],
            },
            {
              point: "Details environmental/ethical harm (e-waste pollution, scarce mineral extraction).",
              keywords: ["basura electrónica", "contamin", "litio", "cobalto"],
            },
            {
              point: "Proposes legal/design circular solution (right to repair, modular components, warranties).",
              keywords: ["derecho a reparar", "modulares", "garantías"],
            },
            {
              point: "Proposes second circular/consumer measure (refurbished devices, battery recycling).",
              keywords: ["reacondicionados", "reciclar", "baterías"],
            },
          ],
          hints: [
            "Explica el mecanismo técnico (baterías selladas, falta de actualizaciones) y su coste ecológico (*basura electrónica*).",
            "Incluye soluciones concretas: *derecho a reparar, diseño modular, dispositivos reacondicionados*.",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          marks: 6,
          commandTerm: "Discuss",
          guideRef: "etica-ia-creatividad-hl",
          question:
            "**[HL] Paper 1 Extended Paragraph Plan & Draft (Propuesta / Ensayo argumentativo — ~200–240 palabras).**\nUn congreso iberoamericano de cultura y tecnología debate si las obras creadas parcialmente con inteligencia artificial generativa deberían recibir premios nacionales de arte o literatura. Redacta un texto persuasivo de Nivel Superior que integre: (a) una concesión inicial matizada, (b) el argumento ético sobre derechos de autor y sesgo lingüístico en español, (c) una cláusula C1 con **de ahí que + subjuntivo**, y (d) una recomendación reguladora concreta.",
          modelAnswer:
            "**Hacia una ética de la autoría en la era algorítmica**\n\nSi bien es innegable que la inteligencia artificial generativa constituye una valiosa herramienta de experimentación técnica —capaz de asistir en el boceto arquitectónico o la restauración audiovisual—, equiparar una pieza sintetizada mediante patrones estadísticos con una creación nacida de la vivencia humana desvirtúa el propósito de los certámenes culturales.\n\nEn primer lugar, numerosos modelos comerciales se han entrenado extrayendo millones de textos e ilustraciones protegidos sin consentimiento ni remuneración, lo cual vulnera frontalmente los derechos de autor y agrava la precariedad de los creadores emergentes. Además, al predominar los corpus en inglés, los resultados suelen arrastrar un sesgo lingüístico y cultural que empobrece la riqueza dialectal del español y margina las lenguas indígenas latinoamericanas.\n\nLejos de prohibir toda innovación, los jurados deben trazar fronteras transparentes. De ahí que resulte imperativo que las bases de los premios nacionales exijan una declaración obligatoria de trazabilidad tecnológica y reserven los galardones literarios y artísticos principales a obras de autoría humana verificable, abriendo en paralelo categorías experimentales específicas para el arte híbrido.",
          markScheme: [
            {
              point: "Opens with a balanced C1 concession acknowledging genuine creative/technical assistance of AI.",
              keywords: ["si bien es innegable", "herramienta", "experimentación"],
            },
            {
              point: "Contrasts statistical synthesis with human lived experience/authorship.",
              keywords: ["estadísticos", "vivencia humana", "desvirtúa"],
            },
            {
              point: "Analyses copyright/IP breach (unconsented scraping, no remuneration, creative precarity).",
              keywords: ["consentimiento", "remuneración", "precariedad", "vulnera"],
            },
            {
              point: "Addresses Hispanic linguistic/cultural algorithmic bias (English dominance, Spanish/indigenous diversity).",
              keywords: ["corpus", "riqueza dialectal", "indígenas", "margina"],
            },
            {
              point: "Deploys *de ahí que* accurately followed by subjunctive.",
              keywords: ["resulte imperativo", "exijan"],
            },
            {
              point: "Proposes concrete nuanced policy (mandatory traceability disclosure + separate hybrid category).",
              keywords: ["trazabilidad", "verificable", "categorías experimentales", "híbrido"],
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
              descriptor: "Simplistic for/against opinion with basic connectors and frequent agreement or mood errors.",
              indicators: ["Fails to use subjunctive after *de ahí que*", "Ignores Hispanic cultural or linguistic context"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Coherent argument addressing AI and copyright, with occasional C1 phrasing but underdeveloped counter-argument or policy detail.",
              indicators: ["Mentions copyright clearly", "Some bias awareness, though syntax remains mostly B2"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authoritative HL Band 10–12 prose: seamless concession-rebuttal flow, Hispanic linguistic equity insight, flawless *de ahí que + subj.*, and nuanced policy proposal.",
              indicators: ["Nominalisation and C1 frames (*Si bien..., Lejos de..., De ahí que...*)", "Balanced solution avoiding Luddite rejection"],
            },
          ],
          hints: [
            "Empieza reconociendo una utilidad real de la IA (*Si bien es innegable que...*) antes de refutar su equiparación con el arte humano.",
            "Conecta el sesgo algorítmico específicamente con la lengua española y las lenguas indígenas.",
            "Comprueba que el verbo tras *de ahí que* esté en subjuntivo (*resulte / sea / deba*).",
          ],
        },
        {
          id: "3-ingenio-humano-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          marks: 8,
          commandTerm: "To what extent",
          guideRef: "etica-ia-creatividad-hl",
          question:
            "**[HL] Extended Synthesis (Paper 1 Discurso / IO Part 3 Prep — ~240–280 palabras).**\n*«¿Hasta qué punto la tecnología moderna fortalece o amenaza la libertad creativa y el pensamiento crítico en las sociedades hispanohablantes?»*\n\nRedacta un fragmento extenso de **discurso** dirigido a estudiantes universitarios y profesores en un foro hispanoamericano. Incluye: apertura con vocativo y recurso retórico, al menos un ejemplo cultural/científico hispanohablante real, dos estructuras pasivas o impersonales exactas, una cláusula condicional hipotética o concesiva avanzada, y un cierre apelativo memorable.",
          modelAnswer:
            "**Estimados docentes, investigadoras y compañeros de toda Iberoamérica:**\n\n¿Estamos construyendo la generación mejor informada de la historia o la más vulnerable a la manipulación invisible? Hoy quiero invitarles a mirar la tecnología sin triunfalismo ingenuo ni nostalgia paralizante.\n\nPor una parte, sería injusto negar que la innovación digital ha democratizado el talento hispanohablante. Gracias a las plataformas globales y al diseño paramétrico, se difunde cine independiente latinoamericano en cinco continentes y se completa con precisión milimétrica la visión orgánica de Antoni Gaudí en Barcelona. Incluso en el ámbito periodístico, redes colaborativas como Maldita.es y Chequeado demuestran que la tecnología, puesta al servicio ciudadano, puede desmontar bulos en cuestión de horas.\n\nNo obstante, el entusiasmo se quiebra cuando el lucro algorítmico secuestra nuestra atención. Se encierra a millones de jóvenes en cámaras de eco diseñadas para provocar indignación, mientras sistemas opacos entrenados sin permiso amenazan los derechos de autor de nuestros escritores e ilustradores. Si delegáramos nuestra curiosidad y nuestro juicio ético en una máquina, perderíamos la esencia misma del ingenio humano: dudar, crear y disentir.\n\nPor eso les propongo un compromiso triple: contrastar antes de compartir, defender la transparencia algorítmica y proteger a quienes crean con voz propia. Porque las máquinas procesan datos, pero solo los seres humanos otorgamos sentido, memoria y conciencia a la cultura. Muchas gracias.",
          markScheme: [
            {
              point: "Opens with appropriate formal-engaging *discurso* vocative for academic audience.",
              keywords: ["estimados", "docentes", "compañeros", "iberoamérica"],
            },
            {
              point: "Deploys oral rhetorical devices (opening rhetorical question, antitheses, or concluding triad).",
              keywords: ["triunfalismo", "nostalgia", "compromiso triple", "sentido, memoria"],
            },
            {
              point: "Integrates authentic Hispanic cultural/scientific/media examples (Gaudí, Maldita.es, Chequeado).",
              keywords: ["gaudí", "maldita.es", "chequeado", "paramétrico"],
            },
            {
              point: "Uses accurate *pasiva refleja* or *se impersonal* structures.",
              keywords: ["se difunde", "se completa", "se encierra"],
            },
            {
              point: "Balances benefits against ethical threats (echo chambers, unconsented AI copyright).",
              keywords: ["cámaras de eco", "indignación", "derechos de autor", "lucro"],
            },
            {
              point: "Uses an accurate Type 2 hypothetical *si*-clause (*imperfecto de subjuntivo → condicional*).",
              keywords: ["delegáramos", "perderíamos"],
            },
            {
              point: "Concludes with a memorable spoken call to action and closing thanks.",
              keywords: ["contrastar", "transparencia", "voz propia", "muchas gracias"],
            },
            {
              point: "Sustains C1 discourse cohesion, lexical richness, and audience engagement throughout.",
              keywords: ["democratizado", "no obstante", "disentir", "conciencia"],
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
              descriptor: "Limited speech conventions; general remarks about technology lacking Hispanic evidence or complex syntax.",
              indicators: ["Reads like a generic list rather than a live speech", "Frequent B1 grammatical slips"],
            },
            {
              band: "3–5",
              marks: [3, 5],
              descriptor: "Effective speech addressing both sides with clear structure and some B2–C1 lexis, though rhetoric or grammatical range is inconsistent.",
              indicators: ["Includes vocative and closing thanks", "Mentions Hispanic examples but limited rhetorical flair or complex clauses"],
            },
            {
              band: "6–8",
              marks: [6, 8],
              descriptor: "Commanding HL Band 10–12 *discurso*: captivating oral rhetoric (rhetorical questions, triads), concrete Hispanic examples, flawless passive and hypothetical subjunctive syntax, and subtle critical evaluation.",
              indicators: ["Seamless audience engagement (*les propongo...*)", "Rich C1 nuance distinguishing data processing from human cultural meaning"],
            },
          ],
          hints: [
            "Recuerda las señas de un gran **discurso**: vocativo inicial, preguntas retóricas, paralelismos/tríadas y agradecimiento final.",
            "Combina un ejemplo positivo hispano (*Maldita.es, Gaudí, Chequeado*) con amenazas reales (*cámaras de eco, derechos de autor*).",
            "Incluye una condicional hipotética de tipo 2 (*Si + imperfecto subjuntivo → condicional*) y verbos en pasiva refleja.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "3-ingenio-humano-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "tecnologia-innovacion-cientifica",
      question:
        "Transforma esta oración activa a **pasiva refleja** en futuro simple (escribe solo las dos palabras `se` + verbo): *«El próximo año las universidades españolas publicarán tres informes abiertos sobre IA.»*",
      answer: { type: "text", accept: ["se publicarán", "Se publicarán"], display: "se publicarán" },
      traps: [
        {
          spec: { type: "text", accept: ["se publicará", "Se publicará"] },
          feedback: "*Tres informes abiertos* es plural e inanimado; la pasiva refleja exige 3.ª persona plural en futuro: **se publicarán**.",
        },
      ],
      solution: [
        "El sujeto inanimado *tres informes abiertos* es plural → futuro simple 3.ª persona plural: **se publicarán** (recuerda la tilde en *-án*).",
      ],
      hints: [
        "Identifica el tiempo verbal (*futuro simple*) y el número de *tres informes abiertos*.",
        "No olvides la tilde aguda en la terminación *-án*.",
      ],
    },
    {
      id: "3-ingenio-humano-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "etica-ia-creatividad-hl",
      question:
        "[HL] Completa esta cláusula concesiva hipotética tras **aun cuando** (presente de subjuntivo, 3.ª pl. pasiva refleja — 2 palabras): *«Aun cuando ________ (aprobar) leyes estrictas en Europa, las plataformas globales seguirán operando desde otros continentes.»*",
      answer: { type: "text", accept: ["se aprueben"], display: "se aprueben" },
      traps: [
        {
          spec: { type: "text", accept: ["se aprobaron", "se aprobarán"] },
          feedback: "*Aun cuando* con valor hipotético ('even if') exige presente de subjuntivo (**se aprueben**), no indicativo.",
        },
        {
          spec: { type: "text", accept: ["se apruebe"] },
          feedback: "*Leyes estrictas* es sujeto inanimado plural → **se aprueben**.",
        },
      ],
      solution: [
        "*Aun cuando* ('even if') exige subjuntivo; *leyes estrictas* es inanimado plural; *aprobar* diptonga *o → ue*: **se aprueben**.",
      ],
      hints: [
        "Combina dos reglas: *aun cuando* hipotético (+ subjuntivo) + pasiva refleja plural con *leyes estrictas*.",
        "Recuerda el cambio vocálico de *aprobar* (*o → ue*).",
      ],
    },
    {
      id: "3-ingenio-humano-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "etica-ia-creatividad-hl",
      question:
        "[HL] Completa esta oración condicional de tipo 3 (pretérito pluscuamperfecto de subjuntivo, 3.ª persona plural, forma `-ra`): *«Si los medios ________ (contrastar) la filtración antes de publicarla, no se habría desatado el pánico bursátil.»*",
      answer: { type: "text", accept: ["hubieran contrastado", "hubiesen contrastado"], display: "hubieran contrastado" },
      traps: [
        {
          spec: { type: "text", accept: ["habrían contrastado"] },
          feedback: "Nunca se usa condicional después de *si*. La condicional de tipo 3 exige pluscuamperfecto de subjuntivo: **hubieran contrastado**.",
        },
        {
          spec: { type: "text", accept: ["hayan contrastado"] },
          feedback: "El perfecto de subjuntivo (*hayan*) no se usa en cláusulas *si* irreales del pasado; usa **hubieran contrastado**.",
        },
      ],
      solution: [
        "Condicional irreal del pasado (tipo 3): *Si + pluscuamperfecto de subjuntivo* → **hubieran contrastado** (o *hubiesen contrastado*).",
      ],
      hints: [
        "Observa el condicional compuesto en la cláusula principal (*no se habría desatado*).",
        "Tipo 3 = *Si* + *hubieran* + participio.",
      ],
    },
    {
      id: "3-ingenio-humano-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "tecnologia-innovacion-cientifica",
      question:
        "Transforma esta oración activa a **pasiva perifrástica** manteniendo el agente (escribe únicamente las 3 palabras centrales `ser + participio + por`): *«La cineasta española escribió el guion original.»* → *«El guion original ________ (escribir, pretérito) ________ la cineasta española.»*",
      answer: { type: "text", accept: ["fue escrito por"], display: "fue escrito por" },
      traps: [
        {
          spec: { type: "text", accept: ["fue escribido por"] },
          feedback: "*Escribir* tiene participio irregular (*escrito*), nunca `*escribido*`.",
        },
        {
          spec: { type: "text", accept: ["fue escrito para", "fue escrito de"] },
          feedback: "El agente pasivo se introduce siempre con **por**.",
        },
      ],
      solution: [
        "*El guion original* (masculino singular) + pretérito de *ser* (**fue**) + participio irregular (**escrito**) + **por**.",
      ],
      hints: [
        "Recuerda que *escribir* tiene participio irregular.",
        "Comprueba la preposición obligatoria del agente.",
      ],
    },
    {
      id: "3-ingenio-humano-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 4,
      commandTerm: "Analyse",
      guideRef: "etica-ia-creatividad-hl",
      question:
        "**[HL] Headline Framing & Hidden Agency Analysis.** Compara estos dos titulares sobre un fallo de privacidad en una aplicación médica:\n- **Titular X:** *«Se produjeron incidencias puntuales en la gestión externa de historiales clínicos.»*\n- **Titular Y:** *«La empresa MedSalud filtró los historiales médicos de 80 000 pacientes por falta de cifrado.»*\n\nAnaliza en español cómo **dos mecanismos lingüísticos** del Titular X reducen la responsabilidad corporativa frente al Titular Y.",
      modelAnswer:
        "En primer lugar, el Titular X recurre a la pasiva refleja sin agente («se produjeron») y a la nominalización abstracta («gestión externa»), ocultando completamente al sujeto responsable y presentando el fallo como un fenómeno espontáneo en vez de una negligencia concreta de la compañía. En segundo lugar, sustituye el verbo acusatorio «filtró» y la cifra concreta de afectados por el eufemismo minimizador «incidencias puntuales», atenuando deliberadamente la gravedad ética y legal de la vulneración de datos sanitarios.",
      markScheme: [
        {
          point: "Identifies agentless *pasiva refleja* (*se produjeron*) or nominalisation hiding who caused the leak.",
          keywords: ["pasiva refleja", "sin agente", "nominalización", "ocultando"],
        },
        {
          point: "Explains the pragmatic effect: frames negligence as a spontaneous/accidental event.",
          keywords: ["espontáneo", "negligencia", "responsable"],
        },
        {
          point: "Identifies minimising euphemism replacing blunt verb/exact casualty figure.",
          keywords: ["eufemismo", "minimizador", "cifra"],
        },
        {
          point: "Explains how this softens ethical/legal severity of the privacy breach.",
          keywords: ["atenuando", "gravedad", "vulneración"],
        },
      ],
      hints: [
        "Aplica la técnica **T-E-S-T**: ¿quién desaparece como sujeto en el Titular X?",
        "Compara el verbo activo *filtró* + *80 000 pacientes* con el eufemismo *incidencias puntuales*.",
      ],
    },
    {
      id: "3-ingenio-humano-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 6,
      commandTerm: "Evaluate",
      guideRef: "entretenimiento-expresiones-artisticas",
      question:
        "**Challenge Cultural Evaluation (SL/HL IO Part 3 & Paper 1 Prep).**\n*«El algoritmo de las grandes plataformas de streaming salva al cine y la música en español porque los lleva a todo el planeta.»*\n\nEvalúa esta afirmación en español (160–200 palabras) sopesando tanto el **impulso internacional** como el riesgo de **homogeneización cultural y lingüística**, e incorporando al menos dos referentes hispanohablantes reales.",
      modelAnswer:
        "La afirmación capta una verdad parcial innegable: plataformas globales como Netflix y Spotify han multiplicado el alcance de creadores hispanohablantes que hace dos décadas rara vez superaban sus fronteras nacionales. Producciones como *Roma* de Alfonso Cuarón o la fusión contemporánea de Rosalía demuestran que el español no necesita traducirse al inglés para conquistar audiencias internacionales y generar orgullo lingüístico.\n\nNo obstante, atribuir al algoritmo un papel salvador resulta excesivamente optimista. Al priorizar métricas de retención inmediata, los sistemas de recomendación suelen favorecer fórmulas predecibles y ritmos comerciales homogéneos, relegando el cine de autor independiente o los géneros folclóricos regionales a un segundo plano invisible. Asimismo, algunos guionistas denuncian presiones para neutralizar modismos locales con el fin de agradar a un mercado global estandarizado.\n\nEn conclusión, el streaming ofrece un altavoz extraordinario, pero su valor cultural depende de cuotas de apoyo al cine independiente y de espectadores dispuestos a explorar más allá de la portada algorítmica.",
      markScheme: [
        {
          point: "Evaluates the claim with nuanced partial agreement rather than absolute yes/no.",
          keywords: ["verdad parcial", "alcance", "fronteras"],
        },
        {
          point: "Cites at least two authentic Hispanic artistic figures/works (e.g., Cuarón/Roma, Rosalía, Almodóvar, Del Toro).",
          keywords: ["cuarón", "rosalía", "roma"],
        },
        {
          point: "Analyses algorithmic bias toward predictable commercial formulas over independent/regional art.",
          keywords: ["métricas", "fórmulas predecibles", "cine de autor", "folclóricos"],
        },
        {
          point: "Evaluates linguistic standardisation/flattening of local Spanish dialects and idioms.",
          keywords: ["neutralizar", "modismos", "estandarizado"],
        },
        {
          point: "Deploys C1 contrast and evaluation structures (*no obstante, asimismo, en conclusión*).",
          keywords: ["no obstante", "asimismo", "en conclusión"],
        },
        {
          point: "Offers a balanced final judgement with constructive cultural conditions (independent quotas / active audiences).",
          keywords: ["altavoz", "cuotas", "explorar", "portada"],
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
          descriptor: "Descriptive remarks about streaming with minimal cultural evidence or evaluation.",
              indicators: ["Agrees or disagrees blindly", "No real Hispanic creators cited"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Balanced response citing at least one Hispanic example, with clear structure but moderate B2 precision.",
          indicators: ["Discusses global reach vs commercialism", "Limited attention to dialect/regional nuance"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Sophisticated Band 10–12 evaluation weighing global Hispanic projection against algorithmic homogenisation and dialect neutralisation.",
          indicators: ["2+ authentic Hispanic references integrated analytically", "Nuanced concluding judgement"],
        },
      ],
      hints: [
        "No respondas simplemente «sí» o «no»: evalúa *hasta qué punto* la frase acierta y dónde falla.",
        "Usa referentes concretos (*Roma*, Rosalía, Almodóvar, cine independiente latinoamericano).",
        "Menciona el riesgo de neutralizar modismos locales o relegar géneros minoritarios.",
      ],
    },
    {
      id: "3-ingenio-humano-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 6,
      commandTerm: "Synthesize",
      guideRef: "etica-ia-creatividad-hl",
      question:
        "**[HL] Cross-Skill Synthesis: Nominalisation & Passive Upgrade.** Reescribe este borrador de nivel B1 en un párrafo cohesionado de **editorial de Nivel Superior** (80–110 palabras) utilizando obligatoriamente: (1) al menos dos **nominalizaciones** abstractas, (2) una **pasiva refleja**, (3) el relativo **cuyo/a/os/as**, y (4) **de ahí que + subjuntivo**.\n\n*Borrador B1: «Muchas empresas crean programas de IA muy rápido y nadie revisa si tienen errores. La gente pierde confianza en las noticias porque hay demasiadas fotos falsas. Por eso los gobiernos tienen que hacer leyes claras ahora.»*",
      modelAnswer:
        "La acelerada proliferación de herramientas generativas sin auditoría previa erosiona la credibilidad informativa en nuestras sociedades. Actualmente, se difunden imágenes manipuladas cuya verosimilitud dificulta que la ciudadanía distinga los hechos verificados de la propaganda sintética. Desde esta redacción sostenemos que la autorregulación voluntaria de las plataformas ha fracasado; de ahí que sea urgente que los parlamentos aprueben marcos legales vinculantes que garanticen la transparencia algorítmica y el etiquetado obligatorio de todo contenido artificial.",
      markScheme: [
        {
          point: "Integrates at least two academic abstract nominalisations (e.g. *proliferación, credibilidad, autorregulación, transparencia, etiquetado*).",
          keywords: ["proliferación", "credibilidad", "autorregulación", "transparencia"],
        },
        {
          point: "Uses an accurate *pasiva refleja* (e.g. *se difunden imágenes*).",
          keywords: ["se difunden", "imágenes manipuladas"],
        },
        {
          point: "Deploys possessive relative *cuyo/a/os/as* with accurate agreement.",
          keywords: ["cuya verosimilitud", "cuyo", "cuyos", "cuyas"],
        },
        {
          point: "Uses *de ahí que* followed accurately by subjunctive.",
          keywords: ["sea urgente", "aprueben"],
        },
        {
          point: "Sustains institutional *editorial* voice (*desde esta redacción / nuestras sociedades*).",
          keywords: ["desde esta redacción", "sostenemos", "ciudadanía"],
        },
        {
          point: "Preserves and elevates all core ideas from the B1 draft into crisp C1 prose.",
          keywords: ["auditoría", "vinculantes", "etiquetado"],
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
          descriptor: "Minimal rewriting; stays close to B1 syntax and misses most required C1 structures.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Incorporates 2–3 required C1 structures accurately with improved vocabulary, though editorial cohesion is uneven.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Seamless C1 editorial transformation executing nominalisation, *pasiva refleja*, *cuyo/a*, and *de ahí que + subj.* with natural elegance.",
        },
      ],
      hints: [
        "Transforma «crean muy rápido» en un sustantivo abstracto: *la acelerada proliferación / el vertiginoso despliegue*.",
        "Transforma «hay fotos falsas» en pasiva refleja: *se difunden imágenes manipuladas*.",
        "Conecta con *cuya verosimilitud...* y cierra con *de ahí que sea urgente que + subjuntivo*.",
      ],
    },
    {
      id: "3-ingenio-humano-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 8,
      commandTerm: "Evaluate",
      guideRef: "etica-ia-creatividad-hl",
      question:
        "**[HL] Capstone Paper 1 Simulation — Selecting & Drafting an Optimal Text Type (450–600w style condensation: ~240–280w model).**\nPrompt: *«Un municipio español ha anunciado que sustituirá parte de las becas para artistas locales jóvenes por licencias de software de inteligencia artificial generativa. Como redactor cultural de un periódico regional, escribe un texto dirigido a lectores adultos informados para analizar críticamente la medida, exponer sus implicaciones éticas sobre la creatividad y el patrimonio, y proponer alternativas constructivas.»*\n\n1. Indica y justifica en 2 líneas cuál de estos tres tipos de texto es el **más apropiado**: **Artículo de opinión**, **Carta informal**, **Folleto turístico**.\n2. Redacta el texto completo en español de Nivel Superior cumpliendo todas las convenciones del tipo elegido.",
      modelAnswer:
        "1. **Tipo de texto más apropiado: Artículo de opinión** (categoría Medios de Comunicación). Se ajusta al rol de redactor cultural de un periódico regional, al público adulto informado (registro semiformal-formal) y al propósito analítico-persuasivo; la *carta informal* falla en registro/audiencia y el *folleto turístico* contradice la finalidad crítica.\n\n2. **¿Becas o algoritmos? El error de confundir herramienta con talento**\n*Por Elena Morales · Sección Cultura y Sociedad*\n\n*La decisión municipal de recortar becas artísticas para financiar suscripciones de inteligencia artificial reabre una pregunta decisiva: ¿puede un programa sustituir la mirada viva de una generación creativa?*\n\nCuando un ayuntamiento invierte en cultura, no compra únicamente imágenes decorativas, sino tejido comunitario y memoria compartida. Si bien es innegable que el software generativo agiliza prototipos técnicos, recortar ayudas directas a pintores, cineastas y músicos emergentes supone debilitar la raíz misma de la innovación regional. De hecho, los modelos comerciales cuya arquitectura depende de bases de datos globales rara vez reflejan los matices dialectales ni el patrimonio histórico de nuestros barrios.\n\n### La trampa de la falsa eficiencia\nEn los informes oficiales se presenta esta medida como un ahorro modernizador. No obstante, lejos de democratizar la creación, reemplazar subvenciones humanas por licencias privadas desvía dinero público hacia corporaciones tecnológicas externas mientras agrava la precariedad juvenil. Asimismo, se ignora el conflicto ético de los derechos de autor sobre las obras con que fueron entrenados dichos sistemas.\n\n### Una alternativa integradora\nRechazar este recorte no equivale a temer el progreso. Al contrario: de ahí que convenga mantener íntegras las becas creativas y complementarlas con talleres públicos de ética digital e IA abierta —como los impulsados en proyectos españoles transparentes— para que los jóvenes dominen la tecnología sin verse desplazados por ella.",
      markScheme: [
        {
          point: "Selects Artículo de opinión and justifies choice via Audience, Context, and Purpose while eliminating wrong options.",
          keywords: ["artículo de opinión", "rol", "semiformal", "contradice"],
        },
        {
          point: "Executes authentic *artículo* conventions: engaging headline, author byline (*Por...*), lead (*entradilla*), and subheadings.",
          keywords: ["por elena", "sección cultura", "falsa eficiencia", "alternativa integradora"],
        },
        {
          point: "Uses nuanced C1 concession (*si bien es innegable*) before critiquing the subsidy cut.",
          keywords: ["si bien es innegable", "prototipos", "debilitar"],
        },
        {
          point: "Connects algorithmic homogenisation to loss of local Hispanic heritage/dialect using *cuyo/a*.",
          keywords: ["cuya arquitectura", "matices dialectales", "tejido comunitario"],
        },
        {
          point: "Exposes economic/ethical flaws (public funds to private tech, youth precarity, copyright) using *lejos de* + passive.",
          keywords: ["lejos de democratizar", "precariedad", "derechos de autor", "fueron entrenados"],
        },
        {
          point: "Proposes a constructive integrative alternative (preserving human grants + transparent open AI workshops).",
          keywords: ["mantener íntegras", "talleres públicos", "transparentes"],
        },
        {
          point: "Applies *de ahí que* accurately with present subjunctive.",
          keywords: ["convenga", "desplazados"],
        },
        {
          point: "Sustains polished Band 10–12 journalistic Spanish register and coherent thematic flow.",
          keywords: ["ayuntamiento", "ahorro modernizador", "no obstante"],
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
          descriptor: "Incorrect or poorly justified text type; minimal article layout and basic B1 opinions.",
        },
        {
          band: "3–5",
          marks: [3, 5],
          descriptor: "Correct *artículo* choice with recognisable conventions and solid critique, though C1 cohesion or alternative policy lacks depth.",
        },
        {
          band: "6–8",
          marks: [6, 8],
          descriptor: "Exemplary HL Band 10–12 *artículo de opinión*: incisive justification of text type, complete journalistic architecture (titular, firma, entradilla, subtítulos), sophisticated C1 grammar (*cuya, lejos de, de ahí que + subj., pasiva*), and nuanced cultural ethics.",
        },
      ],
      hints: [
        "Descarta primero los dos tipos de texto incompatibles con el público adulto informado y el rol de redactor regional.",
        "Estructura el artículo con: **Titular** + **Firma (*Por...*)** + **Entradilla** + **Subtítulos temáticos**.",
        "Integra al menos tres rasgos C1: *si bien..., lejos de + infinitivo, cuya..., de ahí que + subjuntivo* y una pasiva exacta.",
      ],
    },
  ],
};
