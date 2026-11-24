import type { Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";

// =============================================================================
// DRILL 1: Paper 1 Text-Type Selector from 3 Offered Options (SL Core, Level 1)
// =============================================================================

interface TextTypeScenario {
  theme: string;
  contexts: string[];
  audience: string;
  purpose: string;
  optimal: { name: string; accept: string[]; why: string };
  acceptable: { name: string; accept: string[]; whyNot: string };
  inappropriate: { name: string; accept: string[]; whyNot: string };
  registerTip: string;
}

const P1_TIER1: TextTypeScenario[] = [
  {
    theme: "Organización social",
    contexts: [
      "el cierre de la biblioteca pública de tu barrio en Valencia",
      "la falta de iluminación nocturna en el parque municipal de Zaragoza",
      "la reducción de frecuencias del autobús escolar en Sevilla",
      "el mal estado del polideportivo juvenil en Málaga",
      "la eliminación de becas de comedor en tu distrito de Bilbao",
    ],
    audience: "directamente a la alcaldesa de tu ciudad",
    purpose: "expresar tu desacuerdo respetuosamente y pedir que reconsidere la medida",
    optimal: {
      name: "carta formal",
      accept: ["carta formal", "una carta formal"],
      why: "Direct official correspondence to a named civic authority (*la alcaldesa*) requires **carta formal** with consistent formal `usted`.",
    },
    acceptable: {
      name: "correo electrónico",
      accept: ["correo electrónico", "un correo electrónico"],
      whyNot: "`correo electrónico` is only *acceptable* (secondary) unless clearly framed as formal institutional correspondence; **carta formal** is the stronger direct official channel.",
    },
    inappropriate: {
      name: "diario personal",
      accept: ["diario personal", "un diario personal"],
      whyNot: "`diario personal` is *inappropriate* because private reflections are never sent to persuade a mayor!",
    },
    registerTip: "Use formal `usted` (`Estimada Sra. Alcaldesa:`, `Atentamente,`).",
  },
  {
    theme: "Experiencias",
    contexts: [
      "un mes de voluntariado ecológico en Costa Rica",
      "un intercambio cultural de tres semanas en Oaxaca",
      "un viaje sostenible en tren por el norte de España",
      "tu participación en un campamento de música andina en Cusco",
      "una estancia lingüística con una familia anfitriona en Montevideo",
    ],
    audience: "a otros jóvenes viajeros hispanohablantes en internet",
    purpose: "compartir anécdotas personales, fotos mentales y consejos interactivos",
    optimal: {
      name: "blog",
      accept: ["blog", "un blog", "entrada de blog"],
      why: "Sharing personal travel stories and tips interactively online with peers uniquely matches **blog** (catchy title, `tú`/`vosotros`, comments call-to-action).",
    },
    acceptable: {
      name: "artículo",
      accept: ["artículo", "un artículo"],
      whyNot: "`artículo` is *acceptable* for informing readers, yet less personal and interactive than **blog** for online youth travel stories.",
    },
    inappropriate: {
      name: "informe",
      accept: ["informe", "un informe"],
      whyNot: "`informe` is *inappropriate* because an objective institutional report clashes with personal travel anecdotes on the internet.",
    },
    registerTip: "Use engaging semi-formal/informal `tú`/`vosotros` and invite reader comments.",
  },
  {
    theme: "Ingenio humano",
    contexts: [
      "una exposición de muralismo mexicano en el centro cultural",
      "un documental colombiano sobre música urbana contemporánea",
      "una película argentina recién estrenada en el festival escolar",
      "una obra de teatro juvenil sobre la inteligencia artificial",
      "una novela gráfica chilena sobre el cambio climático",
    ],
    audience: "a los lectores de la revista cultural de tu instituto",
    purpose: "valorar sus puntos fuertes y débiles y decidir si la recomiendas",
    optimal: {
      name: "reseña",
      accept: ["reseña", "una reseña"],
      why: "Evaluating strengths and weaknesses of a cultural work with a clear recommendation for magazine readers is the exact purpose of **reseña**.",
    },
    acceptable: {
      name: "blog",
      accept: ["blog", "un blog"],
      whyNot: "`blog` is *acceptable* for sharing opinions, but **reseña** fits a school cultural magazine critique far more precisely.",
    },
    inappropriate: {
      name: "carta formal",
      accept: ["carta formal", "una carta formal"],
      whyNot: "`carta formal` is *inappropriate* because a one-to-one official letter does not fit a public cultural review for school readers.",
    },
    registerTip: "Include title/creator context, balanced critique, and a clear recommendation.",
  },
  {
    theme: "Compartir el planeta",
    contexts: [
      "rutas de senderismo ecológico en las Islas Canarias",
      "consejos de turismo responsable para visitantes en Cartagena de Indias",
      "normas prácticas de reciclaje para los nuevos alumnos de tu colegio",
      "guía de transporte sostenible y mercados locales en Barcelona",
      "medidas cotidianas de ahorro de agua para turistas en Mendoza",
    ],
    audience: "a visitantes y jóvenes que desean orientarse rápidamente",
    purpose: "ofrecer información práctica, normas claras y consejos atractivos",
    optimal: {
      name: "folleto",
      accept: ["folleto", "un folleto"],
      why: "Presenting scannable practical guidance, eco-rules, and visitor tips attractively is the textbook role of **folleto** (slogan, subheadings, bulleted advice).",
    },
    acceptable: {
      name: "artículo",
      accept: ["artículo", "un artículo"],
      whyNot: "`artículo` is *acceptable*, though continuous journalistic prose is less suited to quick visitor guidelines than **folleto**.",
    },
    inappropriate: {
      name: "diario personal",
      accept: ["diario personal", "un diario personal"],
      whyNot: "`diario personal` is *inappropriate* because private self-reflection cannot serve as a practical guide for visitors.",
    },
    registerTip: "Use a punchy slogan, short subheadings, imperatives/recommendations, and contact info.",
  },
  {
    theme: "Identidades",
    contexts: [
      "el estrés académico antes de los exámenes finales",
      "la importancia de crear una red estudiantil de bienestar mental",
      "la defensa del plurilingüismo en la comunidad escolar",
      "el valor del voluntariado juvenil durante las vacaciones",
      "el respeto hacia las diversas identidades culturales del centro",
    ],
    audience: "en persona a todos los alumnos reunidos en el salón de actos",
    purpose: "motivar al público en directo e inspirar una participación inmediata",
    optimal: {
      name: "discurso",
      accept: ["discurso", "un discurso"],
      why: "Addressing a live assembly in person to motivate students directly demands **discurso** (vocative opening, rhetorical questions, inclusive `nosotros`).",
    },
    acceptable: {
      name: "artículo",
      accept: ["artículo", "un artículo"],
      whyNot: "`artículo` is *acceptable* in theme, yet misses the live oral assembly context (*en el salón de actos*) where **discurso** shines.",
    },
    inappropriate: {
      name: "informe",
      accept: ["informe", "un informe"],
      whyNot: "`informe` is *inappropriate* because a dry factual report fails to energise a live school assembly.",
    },
    registerTip: "Open with a spoken greeting (`Buenos días a todos`) and use rhetorical triads.",
  },
  {
    theme: "Experiencias",
    contexts: [
      "tu primer día en un colegio nuevo tras mudarte a Madrid",
      "una discusión familiar difícil sobre elegir carrera universitaria",
      "tus emociones contradictorias al terminar tu último verano en el pueblo",
      "el miedo escénico que superaste antes de tu primer recital",
      "la nostalgia que sentiste al dejar tu ciudad natal por estudios",
    ],
    audience: "únicamente para ti mismo, sin intención de publicarlo",
    purpose: "desahogarte con sinceridad y reflexionar íntimamente sobre lo ocurrido",
    optimal: {
      name: "diario personal",
      accept: ["diario personal", "un diario personal", "diario"],
      why: "Intimate, unpublished self-reflection strictly for yourself is the defining scenario for **diario personal** (`Querido diario`, introspective first-person tone).",
    },
    acceptable: {
      name: "blog",
      accept: ["blog", "un blog"],
      whyNot: "`blog` is written for public online readers, clashing with *sin intención de publicarlo*.",
    },
    inappropriate: {
      name: "propuesta",
      accept: ["propuesta", "una propuesta"],
      whyNot: "`propuesta` is *inappropriate* because an institutional action pitch has zero place in private emotional reflection.",
    },
    registerTip: "Include a date stamp, `Querido diario`, and sincere first-person reflection.",
  },
];

const P1_TIER2: TextTypeScenario[] = [
  {
    theme: "Compartir el planeta",
    contexts: [
      "implantar un comedor escolar libre de plásticos de un solo uso",
      "crear un huerto ecológico gestionado por alumnos en el patio",
      "instalar aparcamientos seguros para bicicletas en el instituto",
      "organizar un sistema de intercambio de libros y uniformes usados",
      "instalar puntos de recogida de residuos electrónicos en el centro",
    ],
    audience: "al consejo directivo del instituto",
    purpose: "convencerlo mediante objetivos claros, fases de aplicación y beneficios medibles",
    optimal: {
      name: "propuesta",
      accept: ["propuesta", "una propuesta", "propuesta formal"],
      why: "Pitching an actionable plan with objectives, implementation steps, and benefits to leadership is the exact function of **propuesta**.",
    },
    acceptable: {
      name: "carta formal",
      accept: ["carta formal", "una carta formal"],
      whyNot: "`carta formal` is *acceptable* in register, yet lacks the structured objective/phases/impact layout that makes **propuesta** optimal.",
    },
    inappropriate: {
      name: "blog",
      accept: ["blog", "un blog"],
      whyNot: "`blog` is *inappropriate* for pitching an official multi-stage plan to a school board.",
    },
    registerTip: "Use objective formal register, structured headings (*Objetivo*, *Plan de acción*), and `se recomienda que + subj.`",
  },
  {
    theme: "Identidades",
    contexts: [
      "una encuesta a 250 estudiantes sobre hábitos de sueño y uso de pantallas",
      "un estudio escolar sobre el consumo de bebidas energéticas entre adolescentes",
      "un sondeo sobre el nivel de estrés académico en Year 12 y Year 13",
      "una investigación sobre la participación juvenil en deportes extraescolares",
      "un análisis de los hábitos alimentarios en la cafetería del colegio",
    ],
    audience: "al equipo directivo y al departamento de orientación",
    purpose: "presentar objetivamente los hallazgos obtenidos y extraer conclusiones",
    optimal: {
      name: "informe",
      accept: ["informe", "un informe"],
      why: "Presenting survey findings and evidence-based conclusions objectively to school authorities uniquely demands **informe**.",
    },
    acceptable: {
      name: "artículo",
      accept: ["artículo", "un artículo"],
      whyNot: "`artículo` is *acceptable* for a general readership, but less suited than **informe** to delivering formal survey findings to leadership.",
    },
    inappropriate: {
      name: "discurso",
      accept: ["discurso", "un discurso"],
      whyNot: "`discurso` is *inappropriate* when asked to submit structured objective survey findings to the guidance team.",
    },
    registerTip: "Structure with Title, *Introducción*, *Resultados principales*, and *Conclusiones*.",
  },
  {
    theme: "Ingenio humano",
    contexts: [
      "una conversación con una ingeniera peruana de energías renovables",
      "un diálogo con un cineasta español premiado por su último cortometraje",
      "una charla con una periodista mexicana experta en verificación de bulos",
      "un encuentro con una arquitecta chilena dedicada a viviendas sostenibles",
      "una conversación con un músico colombiano que fusiona folclore y electrónica",
    ],
    audience: "a los lectores del periódico digital de tu colegio",
    purpose: "reproducir sus declaraciones directas mediante preguntas y respuestas",
    optimal: {
      name: "entrevista",
      accept: ["entrevista", "una entrevista"],
      why: "Publishing a conversation through direct questions and answers for a digital school paper is unequivocally **entrevista**.",
    },
    acceptable: {
      name: "artículo",
      accept: ["artículo", "un artículo"],
      whyNot: "`artículo` is *acceptable* as a profile, yet misses the explicit Q&A conversation format of **entrevista**.",
    },
    inappropriate: {
      name: "folleto",
      accept: ["folleto", "un folleto"],
      whyNot: "`folleto` is *inappropriate* because brochures promote services or guidelines rather than publishing Q&A dialogues.",
    },
    registerTip: "Include headline, brief introductory profile (*entradilla*), and labelled Q&A turns.",
  },
  {
    theme: "Organización social",
    contexts: [
      "un artículo que criticaba injustamente la supuesta apatía cívica juvenil",
      "una columna que defendía eliminar las clases de arte y música en secundaria",
      "una noticia que culpaba únicamente a los jóvenes del deterioro de los parques",
      "un reportaje que cuestionaba la utilidad de los programas de voluntariado",
      "una opinión publicada que rechazaba ampliar los carriles bici en el centro",
    ],
    audience: "al periódico nacional que publicó el texto original",
    purpose: "responder públicamente al artículo anterior y pedir que se publique tu réplica",
    optimal: {
      name: "carta al director",
      accept: ["carta al director", "una carta al director"],
      why: "Publishing a formal reader rebuttal directly responding to a newspaper piece is the exact genre of **carta al director**.",
    },
    acceptable: {
      name: "artículo",
      accept: ["artículo", "un artículo", "artículo de opinión"],
      whyNot: "`artículo` is *acceptable* for public debate, yet a student reader responding to a specific published article normally sends **carta al director**.",
    },
    inappropriate: {
      name: "diario personal",
      accept: ["diario personal", "un diario personal"],
      whyNot: "`diario personal` is *inappropriate* because it cannot be published as a public rebuttal in a national newspaper.",
    },
    registerTip: "Open with `Estimado Sr. Director:`, cite the original article, argue concisely, and sign off formally.",
  },
  {
    theme: "Ingenio humano",
    contexts: [
      "el auge de los pódcast educativos entre los adolescentes hispanohablantes",
      "cómo los algoritmos moldean el gusto musical de la generación Z",
      "la transformación del comercio de barrio frente a las compras en línea",
      "el impacto de la telemedicina en las zonas rurales de América Latina",
      "las oportunidades y dilemas del teletrabajo para las familias jóvenes",
    ],
    audience: "al público general de una revista cultural de amplia difusión",
    purpose: "informar con amenidad, analizar distintas perspectivas y captar interés",
    optimal: {
      name: "artículo",
      accept: ["artículo", "un artículo"],
      why: "Engaging a broad magazine readership with accessible analysis, subheadings, and a lively hook matches **artículo**.",
    },
    acceptable: {
      name: "blog",
      accept: ["blog", "un blog"],
      whyNot: "`blog` is *acceptable*, though more personal/informal than a print/digital magazine **artículo**.",
    },
    inappropriate: {
      name: "carta formal",
      accept: ["carta formal", "una carta formal"],
      whyNot: "`carta formal` is *inappropriate* for addressing a wide general magazine readership.",
    },
    registerTip: "Include a catchy *titular*, *entradilla* (lead), byline, and thematic subheadings.",
  },
];

const P1_TIER3: TextTypeScenario[] = [
  {
    theme: "Ingenio humano",
    contexts: [
      "el uso ético de la inteligencia artificial generativa en los exámenes escolares",
      "la regulación urgente de la desinformación automatizada en campañas electorales",
      "la defensa de la prensa local independiente frente a los algoritmos",
      "el derecho legal a la desconexión digital de los trabajadores jóvenes",
      "la protección de los derechos de autor de los artistas hispanos ante la IA",
    ],
    audience: "a los lectores de un periódico que fija su postura institucional oficial",
    purpose: "declarar la posición colectiva de toda la redacción sin firma individual",
    optimal: {
      name: "editorial",
      accept: ["editorial", "un editorial"],
      why: "Expressing the **collective institutional stance** of a publication (*Desde esta redacción consideramos...*, no personal byline) uniquely identifies **editorial**.",
    },
    acceptable: {
      name: "artículo",
      accept: ["artículo", "un artículo", "artículo de opinión"],
      whyNot: "`artículo` is *acceptable* in tone, yet represents an individual signed columnist rather than the collective institutional voice of **editorial**.",
    },
    inappropriate: {
      name: "entrevista",
      accept: ["entrevista", "una entrevista"],
      whyNot: "`entrevista` is *inappropriate* because a Q&A format cannot declare a newspaper's unified institutional stance.",
    },
    registerTip: "Use institutional plural `nosotros` (`Desde este diario defendemos que...`) and omit a personal signature.",
  },
  {
    theme: "Organización social",
    contexts: [
      "un plan piloto de alfabetización financiera y digital para secundaria",
      "una reforma del transporte público nocturno para barrios periféricos",
      "una iniciativa de mediación estudiantil contra el ciberacoso",
      "un proyecto municipal de becas para formación profesional verde",
      "un convenio intergeneracional de viviendas compartidas para universitarios",
    ],
    audience: "a la Consejería regional de Educación o al Ayuntamiento",
    purpose: "justificar la necesidad, anticipar objeciones presupuestarias y trazar fases viables",
    optimal: {
      name: "propuesta",
      accept: ["propuesta", "una propuesta", "propuesta formal"],
      why: "Presenting a structured, phased policy pitch anticipating fiscal counter-arguments to regional authorities fits **propuesta** optimally.",
    },
    acceptable: {
      name: "informe",
      accept: ["informe", "un informe"],
      whyNot: "`informe` primarily diagnoses past/present data objectively, whereas **propuesta** is forward-looking and persuasive.",
    },
    inappropriate: {
      name: "reseña",
      accept: ["reseña", "una reseña"],
      whyNot: "`reseña` evaluates cultural works (films, books, shows), never municipal policy plans!",
    },
    registerTip: "Combine executive headings, `Si bien es cierto que..., no obstante...`, and formal `usted`.",
  },
  {
    theme: "Compartir el planeta",
    contexts: [
      "la ampliación de una carretera que destruiría un humedal protegido",
      "la autorización de cruceros masivos en un puerto histórico saturado",
      "la privatización de una playa comunitaria tradicional en la costa",
      "el recorte de subvenciones para la reforestación de bosques autóctonos",
      "la instalación de una macroplanta contaminante junto a un río agrícola",
    ],
    audience: "a la sección de opinión del diario regional en réplica a una noticia reciente",
    purpose: "refutar los argumentos publicados ayer y exigir transparencia pública",
    optimal: {
      name: "carta al director",
      accept: ["carta al director", "una carta al director"],
      why: "Directly refuting a recently published newspaper piece in the public opinion section specifically calls for **carta al director**.",
    },
    acceptable: {
      name: "editorial",
      accept: ["editorial", "un editorial"],
      whyNot: "`editorial` speaks as the newspaper's own management board, not as a citizen replying to yesterday's article.",
    },
    inappropriate: {
      name: "folleto",
      accept: ["folleto", "un folleto"],
      whyNot: "`folleto` is *inappropriate* for publishing a pointed civic rebuttal in a newspaper's opinion section.",
    },
    registerTip: "Reference yesterday's article immediately after `Estimado Sr. Director:` and maintain formal `usted`.",
  },
  {
    theme: "Identidades",
    contexts: [
      "la preservación de las lenguas indígenas en la enseñanza bilingüe",
      "los desafíos de integración cultural que enfrentan los jóvenes migrantes",
      "la ruptura de estereotipos de género en las carreras científicas",
      "el papel de la gastronomía tradicional como puente entre generaciones",
      "el debate sobre el lenguaje inclusivo y la evolución del español",
    ],
    audience: "a delegados estudiantiles en un foro iberoamericano juvenil",
    purpose: "persuadir oralmente con recursos retóricos y provocar reflexión colectiva",
    optimal: {
      name: "discurso",
      accept: ["discurso", "un discurso"],
      why: "Delivering a live persuasive address with rhetorical appeals at a youth forum uniquely fits **discurso**.",
    },
    acceptable: {
      name: "editorial",
      accept: ["editorial", "un editorial"],
      whyNot: "`editorial` is a written press genre lacking the spoken vocatives and live audience interaction of **discurso**.",
    },
    inappropriate: {
      name: "informe",
      accept: ["informe", "un informe"],
      whyNot: "`informe` is *inappropriate* for an impassioned oral forum speech.",
    },
    registerTip: "Use vocatives (`Estimados delegados`), anaphora, rhetorical questions, and a memorable closing call.",
  },
  {
    theme: "Organización social",
    contexts: [
      "los resultados anuales de un programa de integración laboral juvenil",
      "la evaluación objetiva de tres meses de jornada escolar continua",
      "el balance estadístico del uso de bicicletas públicas en la ciudad",
      "el diagnóstico de la brecha digital en doce escuelas rurales",
      "el seguimiento de un plan municipal de reducción del desperdicio alimentario",
    ],
    audience: "al comité evaluador independiente que financió el proyecto",
    purpose: "rendir cuentas con datos verificables, logros, carencias y recomendaciones",
    optimal: {
      name: "informe",
      accept: ["informe", "un informe"],
      why: "Reporting verifiable outcomes, limitations, and recommendations objectively to a funding committee is the defining purpose of **informe**.",
    },
    acceptable: {
      name: "propuesta",
      accept: ["propuesta", "una propuesta"],
      whyNot: "`propuesta` pitches a *new* plan rather than evaluating verifiable results of an existing programme like **informe**.",
    },
    inappropriate: {
      name: "blog",
      accept: ["blog", "un blog"],
      whyNot: "`blog` is *inappropriate* for submitting a formal statistical evaluation to an independent funding committee.",
    },
    registerTip: "Keep an impersonal objective tone (`se observa que`, `los datos evidencian`) with numbered headings.",
  },
];

// =============================================================================
// DRILL 2: Paper 2 Reading Synonym-in-Context Matching (SL Core, Level 2)
// =============================================================================

interface SynonymItem {
  target: string;
  accept: string[];
  cue: string;
  pos: string;
  distractor: string;
  distractorWhy: string;
  extracts: string[];
}

const SYN_TIER1: SynonymItem[] = [
  {
    target: "fomentar",
    accept: ["fomentar"],
    cue: "promover / impulsar",
    pos: "infinitive verb",
    distractor: "requieren",
    distractorWhy: "`requieren` means 'require' and is conjugated, not an infinitive verb meaning 'promote'.",
    extracts: [
      "Las escuelas de Sevilla buscan **fomentar** el hábito lector con bibliotecas abiertas que requieren poca inversión.",
      "El ayuntamiento de Bogotá desea **fomentar** el uso de la bicicleta mediante carriles que requieren escaso mantenimiento.",
      "Varias asociaciones en Lima intentan **fomentar** el voluntariado juvenil con proyectos que requieren solo dos horas semanales.",
      "Los clubes culturales de Valencia quieren **fomentar** el cine en versión original con ciclos que requieren inscripción gratuita.",
    ],
  },
  {
    target: "reducir",
    accept: ["reducir"],
    cue: "disminuir / bajar",
    pos: "infinitive verb",
    distractor: "apoyan",
    distractorWhy: "`apoyan` means 'support' (conjugated), whereas `reducir` is the infinitive synonym of `disminuir`.",
    extracts: [
      "Los comedores escolares de Bilbao logran **reducir** el desperdicio alimentario y apoyan a productores cercanos.",
      "Las nuevas tarifas de metro en Madrid permiten **reducir** el tráfico privado y apoyan la movilidad limpia.",
      "Las campañas vecinales en Quito consiguen **reducir** los envases plásticos y apoyan el comercio a granel.",
      "Los programas de becas en Córdoba ayudan a **reducir** el abandono escolar y apoyan a las familias rurales.",
    ],
  },
  {
    target: "actualmente",
    accept: ["actualmente"],
    cue: "hoy en día / en la actualidad",
    pos: "adverb",
    distractor: "anteriormente",
    distractorWhy: "`anteriormente` means 'previously/formerly' (the opposite time anchor of `hoy en día`!).",
    extracts: [
      "Anteriormente pocos vecinos reciclaban vidrio, pero **actualmente** más del setenta por ciento participa en Zaragoza.",
      "Anteriormente el teatro abría solo en verano, aunque **actualmente** ofrece funciones educativas todo el año en Málaga.",
      "Anteriormente las clases eran solo presenciales, pero **actualmente** la universidad de Medellín combina formatos híbridos.",
      "Anteriormente casi nadie usaba paneles solares, mientras que **actualmente** cientos de tejados generan energía en Murcia.",
    ],
  },
  {
    target: "éxito",
    accept: ["éxito"],
    cue: "triunfo / logro destacado",
    pos: "masculine noun",
    distractor: "salida",
    distractorWhy: "Careful with false friends! `salida` means 'exit', whereas **`éxito`** means 'success/triumph'.",
    extracts: [
      "El mercado comunitario de libros fue un enorme **éxito** en Salamanca, con colas hasta la salida principal.",
      "La feria científica juvenil obtuvo un gran **éxito** en Guadalajara, superando toda salida prevista de entradas.",
      "El taller intergeneracional de cocina alcanzó un notable **éxito** en Oviedo, llenando la sala hasta la salida.",
      "El festival de cortometrajes tuvo un rotundo **éxito** en Valparaíso, con debates animados a la salida del cine.",
    ],
  },
  {
    target: "gratuito",
    accept: ["gratuito"],
    cue: "sin coste / libre de pago",
    pos: "adjective",
    distractor: "obligatorio",
    distractorWhy: "`obligatorio` means 'mandatory', not 'free of charge' (`gratuito`).",
    extracts: [
      "El acceso al museo etnográfico de Granada es totalmente **gratuito** los domingos, aunque el registro previo resulta obligatorio.",
      "El curso de primeros auxilios en Montevideo es **gratuito** para estudiantes, pero asistir a todas las sesiones es obligatorio.",
      "El préstamo de bicicletas eléctricas en Pamplona es **gratuito** durante media hora, si bien llevar casco es obligatorio.",
      "El taller de programación escolar en San José es **gratuito**, aunque entregar el permiso familiar resulta obligatorio.",
    ],
  },
  {
    target: "apoyar",
    accept: ["apoyar"],
    cue: "respaldar / ayudar activamente",
    pos: "infinitive verb",
    distractor: "soportar",
    distractorWhy: "False friend! `soportar` means 'to put up with / tolerate', whereas **`apoyar`** means 'to support/back'.",
    extracts: [
      "Los vecinos se unieron para **apoyar** a las librerías independientes, hartos de soportar alquileres abusivos.",
      "La fundación decidió **apoyar** a jóvenes deportistas rurales que debían soportar largos traslados diarios.",
      "Muchos consumidores eligen **apoyar** el comercio justo en lugar de soportar la moda ultrarrápida.",
      "El profesorado acordó **apoyar** la semana sin móviles pese a soportar las quejas iniciales.",
    ],
  },
  {
    target: "obstáculo",
    accept: ["obstáculo"],
    cue: "impedimento / barrera",
    pos: "masculine noun",
    distractor: "estímulo",
    distractorWhy: "`estímulo` means 'incentive/stimulus' — the exact opposite of a barrier (`obstáculo`).",
    extracts: [
      "El alto coste del alquiler supone un grave **obstáculo** para los jóvenes en Madrid, pese a cada estímulo público.",
      "La falta de fibra óptica representa un gran **obstáculo** para el teletrabajo en Teruel, anulando cualquier estímulo local.",
      "El miedo a cometer errores actúa como **obstáculo** al hablar español, aunque la música ofrece un buen estímulo.",
      "La escasez de becas constituye un serio **obstáculo** en varias provincias, pese al estímulo de las universidades.",
    ],
  },
];

const SYN_TIER2: SynonymItem[] = [
  {
    target: "frenar",
    accept: ["frenar"],
    cue: "detener / ralentizar",
    pos: "infinitive verb",
    distractor: "acelerar",
    distractorWhy: "`acelerar` means 'to speed up', the opposite of `frenar` ('to brake/halt').",
    extracts: [
      "El plan forestal de Galicia pretende **frenar** la erosión del suelo, ya que las lluvias intensas pueden acelerar el daño.",
      "Las medidas municipales buscan **frenar** la especulación inmobiliaria antes de que el turismo vuelva a acelerar los precios.",
      "Los talleres críticos ayudan a **frenar** la difusión de bulos cuando las redes intentan acelerar el pánico.",
      "La cooperativa pretende **frenar** la despoblación rural creando empleos verdes capaces de acelerar la innovación.",
    ],
  },
  {
    target: "respaldar",
    accept: ["respaldar"],
    cue: "apoyar / avalar",
    pos: "infinitive verb",
    distractor: "cuestionar",
    distractorWhy: "`cuestionar` means 'to question/challenge', opposite of `respaldar` ('to back/endorse').",
    extracts: [
      "Más de cuarenta científicos firmaron para **respaldar** la reserva marina, aunque algunos hoteles decidieron cuestionar el proyecto.",
      "Los padres votaron para **respaldar** el horario escolar flexible, pese a que dos sindicatos optaron por cuestionar los costes.",
      "La alcaldía anunció fondos para **respaldar** el teatro comunitario en Cali, incluso cuando la oposición quiso cuestionar el presupuesto.",
      "Numerosas ONG acordaron **respaldar** la ley de desconexión digital mientras varias firmas prefirieron cuestionar su alcance.",
    ],
  },
  {
    target: "desmesurado",
    accept: ["desmesurado"],
    cue: "excesivo / desproporcionado",
    pos: "masculine adjective",
    distractor: "moderado",
    distractorWhy: "`moderado` means 'moderate/reasonable', opposite of `desmesurado` ('excessive').",
    extracts: [
      "Los residentes de Palma denuncian el crecimiento **desmesurado** del turismo masivo y piden un modelo más moderado.",
      "El consumo **desmesurado** de agua en campos de golf contrasta con el uso moderado de los agricultores locales.",
      "Los expertos advierten del tiempo **desmesurado** frente a las pantallas y recomiendan un empleo moderado.",
      "El ruido **desmesurado** de las terrazas nocturnas impide el descanso pese al tono moderado de la ordenanza.",
    ],
  },
  {
    target: "carecer",
    accept: ["carecer"],
    cue: "no disponer de / faltar",
    pos: "infinitive verb",
    distractor: "disponer",
    distractorWhy: "`disponer` means 'to have available', whereas **`carecer`** means 'to lack'.",
    extracts: [
      "Muchas aldeas temen **carecer** de pediatra permanente, incluso tras disponer de una nueva carretera comarcal.",
      "Varios institutos lamentan **carecer** de laboratorios actualizados pese a disponer de pizarras digitales.",
      "Algunas rutas ciclistas siguen por **carecer** de sombra estival, aunque pueden disponer de fuentes públicas.",
      "Numerosas familias jóvenes reconocen **carecer** de ahorros suficientes para disponer de vivienda propia.",
    ],
  },
  {
    target: "imprescindible",
    accept: ["imprescindible"],
    cue: "indispensable / esencial",
    pos: "adjective",
    distractor: "prescindible",
    distractorWhy: "Look at the prefix `im-`! `prescindible` means 'dispensable/optional'; **`imprescindible`** means 'essential'.",
    extracts: [
      "La educación cívica resulta **imprescindible** para la democracia y jamás debería tratarse como algo prescindible.",
      "El dominio de fuentes fiables se ha vuelto **imprescindible** en el aula, mientras la memorización mecánica parece prescindible.",
      "Conservar los humedales costeros es **imprescindible** frente a las tormentas; ningún ecosistema sano resulta prescindible.",
      "La escucha activa entre generaciones es **imprescindible** en el barrio y nunca debería verse como un lujo prescindible.",
    ],
  },
  {
    target: "alargar",
    accept: ["alargar"],
    cue: "prolongar / extender",
    pos: "infinitive verb",
    distractor: "acortar",
    distractorWhy: "`acortar` means 'to shorten', opposite of `alargar` ('to lengthen/extend').",
    extracts: [
      "El teletrabajo sin normas suele **alargar** la jornada laboral en lugar de acortar los tiempos de descanso.",
      "Las obras en el puerto podrían **alargar** el trayecto ferroviario antes de acortar las conexiones regionales.",
      "Evitar las pantallas nocturnas ayuda a **alargar** las horas de sueño profundo y acortar el insomnio juvenil.",
      "Los bibliotecarios decidieron **alargar** el horario de exámenes sin acortar las actividades culturales del sábado.",
    ],
  },
  {
    target: "brecha",
    accept: ["brecha"],
    cue: "distancia / desigualdad marcada",
    pos: "feminine noun",
    distractor: "puente",
    distractorWhy: "`puente` ('bridge') represents connection, whereas **`brecha`** means 'gap/divide'.",
    extracts: [
      "El acceso desigual a internet agrava la **brecha** digital, aunque las bibliotecas públicas tienden un puente comunitario.",
      "Los datos salariales muestran una persistente **brecha** generacional que exige construir un puente de oportunidades.",
      "El cierre de escuelas rurales amplía la **brecha** territorial pese a cada puente de financiación regional.",
      "Las becas universitarias buscan cerrar la **brecha** socioeconómica creando un puente hacia empleos cualificados.",
    ],
  },
];

const SYN_TIER3: SynonymItem[] = [
  {
    target: "ahondar",
    accept: ["ahondar"],
    cue: "profundizar / agravar",
    pos: "infinitive verb",
    distractor: "mitigar",
    distractorWhy: "`mitigar` means 'to soften/alleviate', opposite of `ahondar` ('to deepen/worsen').",
    extracts: [
      "Sin ayudas focalizadas, las tasas verdes podrían **ahondar** la desigualdad rural en vez de mitigar la pobreza energética.",
      "Los algoritmos polarizadores tienden a **ahondar** la desconfianza cívica en lugar de mitigar los malentendidos.",
      "Recortar el transporte comarcal amenaza con **ahondar** el aislamiento de los mayores sin mitigar el gasto público.",
      "Ignorar las lenguas originarias puede **ahondar** la pérdida cultural cuando la escuela debería mitigar esa fractura.",
    ],
  },
  {
    target: "mermar",
    accept: ["mermar"],
    cue: "debilitar / disminuir gradualmente",
    pos: "infinitive verb",
    distractor: "fortalecer",
    distractorWhy: "`fortalecer` means 'to strengthen', opposite of `mermar` ('to erode/diminish').",
    extracts: [
      "La comparación constante en redes puede **mermar** la autoestima adolescente en vez de fortalecer la confianza.",
      "Las sequías encadenadas amenazan con **mermar** las cosechas andaluzas mientras los técnicos buscan fortalecer el riego.",
      "La precariedad laboral suele **mermar** la participación sindical pese a los intentos por fortalecer el diálogo.",
      "La desinformación sistemática logra **mermar** la credibilidad periodística justo cuando conviene fortalecer el rigor.",
    ],
  },
  {
    target: "efímero",
    accept: ["efímero"],
    cue: "pasajero / de muy corta duración",
    pos: "masculine adjective",
    distractor: "duradero",
    distractorWhy: "`duradero` means 'lasting/durable', the direct antonym of `efímero` ('fleeting').",
    extracts: [
      "Los gestos publicitarios ofrecen un impacto **efímero**, mientras las reformas estructurales generan un cambio duradero.",
      "La fama viral en plataformas digitales suele ser un fenómeno **efímero** comparado con un oficio artístico duradero.",
      "El entusiasmo inicial por las modas textiles es **efímero**, pero el residuo sintético resulta tristemente duradero.",
      "Un eslogan ecológico tiene efecto **efímero** si no se acompaña de un compromiso financiero duradero.",
    ],
  },
  {
    target: "entrañar",
    accept: ["entrañar"],
    cue: "conllevar / implicar en su interior",
    pos: "infinitive verb",
    distractor: "descartar",
    distractorWhy: "`descartar` means 'to rule out', whereas **`entrañar`** means 'to entail/carry inherent risks or consequences'.",
    extracts: [
      "Automatizar los diagnósticos médicos puede **entrañar** sesgos ocultos que ningún hospital debe descartar.",
      "Liberalizar sin control el alquiler turístico suele **entrañar** la expulsión vecinal, un riesgo imposible de descartar.",
      "Depender de un solo cultivo exportador puede **entrañar** vulnerabilidad climática que conviene no descartar.",
      "Ceder datos biométricos a aplicaciones gratuitas puede **entrañar** peligros éticos que los jóvenes no deben descartar.",
    ],
  },
  {
    target: "apremiante",
    accept: ["apremiante"],
    cue: "urgente / inaplazable",
    pos: "adjective",
    distractor: "secundario",
    distractorWhy: "`secundario` means 'secondary/minor', opposite of `apremiante` ('pressing/urgent').",
    extracts: [
      "Garantizar agua potable en zonas áridas constituye un reto **apremiante** y en ningún caso un asunto secundario.",
      "Reformar la salud mental juvenil representa una prioridad **apremiante** que ha dejado de ser un debate secundario.",
      "Frenar la pérdida de biodiversidad amazónica es un deber **apremiante**, jamás un objetivo secundario.",
      "Proteger los derechos digitales de los menores resulta un desafío **apremiante** frente a cualquier interés secundario.",
    ],
  },
  {
    target: "tildar",
    accept: ["tildar"],
    cue: "calificar / etiquetar (a menudo críticamente)",
    pos: "infinitive verb",
    distractor: "elogiar",
    distractorWhy: "`elogiar` means 'to praise', whereas **`tildar (de)`** means 'to label/brand (critically)'.",
    extracts: [
      "Varios activistas no dudaron en **tildar** la campaña de maquillaje verde, aunque algunos socios prefirieron elogiar el gesto.",
      "Algunos críticos suelen **tildar** de utópica la semana laboral de cuatro días antes de elogiar su productividad.",
      "No faltaron voces dispuestas a **tildar** de elitista el museo, pese a que los docentes quisieron elogiar sus talleres.",
      "Los detractores intentaron **tildar** de improvisada la reforma educativa, mientras las familias optaron por elogiar el apoyo.",
    ],
  },
  {
    target: "repunte",
    accept: ["repunte"],
    cue: "aumento repentino / subida",
    pos: "masculine noun",
    distractor: "descenso",
    distractorWhy: "`descenso` means 'drop/decline', opposite of `repunte` ('upsurge/spike').",
    extracts: [
      "Tras dos años de descenso, Barcelona registró un notable **repunte** en el uso nocturno del transporte ferroviario.",
      "Pese al descenso invernal, las librerías independientes celebran un **repunte** de lectores menores de veinte años.",
      "Frente al descenso del cine tradicional, los festivales documentales viven un claro **repunte** en Bogotá.",
      "Luego del descenso pandémico, el voluntariado ambiental experimentó un fuerte **repunte** en toda Latinoamérica.",
    ],
  },
];

// =============================================================================
// DRILL 3: Paper 2 Pronoun-Referent Identification (SL Core, Level 2)
// =============================================================================

interface ReferentTemplate {
  pronoun: string;
  grammarNote: string;
  cases: Array<{
    sentence: string;
    answer: string;
    accept: string[];
    distractor: string;
    distractorAccept: string[];
    distractorWhy: string;
  }>;
}

const REF_TIER1: ReferentTemplate[] = [
  {
    pronoun: "esta",
    grammarNote: "feminine singular demonstrative pronoun",
    cases: [
      {
        sentence: "La **reforma** educativa pretende reducir el abandono escolar, pero **esta** todavía genera debate entre los sindicatos.",
        answer: "la reforma educativa",
        accept: ["la reforma educativa", "reforma educativa", "la reforma", "reforma"],
        distractor: "el abandono escolar",
        distractorAccept: ["el abandono escolar", "abandono escolar", "abandono"],
        distractorWhy: "`el abandono escolar` is masculine singular, whereas **`esta`** is feminine singular!",
      },
      {
        sentence: "La **campaña** municipal busca proteger el bosque nativo, pero **esta** carece aún de presupuesto suficiente.",
        answer: "la campaña municipal",
        accept: ["la campaña municipal", "campaña municipal", "la campaña", "campaña"],
        distractor: "el bosque nativo",
        distractorAccept: ["el bosque nativo", "bosque nativo", "bosque"],
        distractorWhy: "`el bosque nativo` is masculine singular — it cannot match feminine **`esta`**.",
      },
      {
        sentence: "La **iniciativa** vecinal pretende recuperar el teatro antiguo, aunque **esta** necesita más voluntarios.",
        answer: "la iniciativa vecinal",
        accept: ["la iniciativa vecinal", "iniciativa vecinal", "la iniciativa", "iniciativa"],
        distractor: "el teatro antiguo",
        distractorAccept: ["el teatro antiguo", "teatro antiguo", "teatro"],
        distractorWhy: "`el teatro antiguo` is masculine singular, disagreeing with feminine **`esta`**.",
      },
      {
        sentence: "La **propuesta** juvenil intenta modernizar el comedor escolar, pero **esta** aún espera aprobación.",
        answer: "la propuesta juvenil",
        accept: ["la propuesta juvenil", "propuesta juvenil", "la propuesta", "propuesta"],
        distractor: "el comedor escolar",
        distractorAccept: ["el comedor escolar", "comedor escolar", "comedor"],
        distractorWhy: "`el comedor escolar` is masculine singular, so it cannot match feminine **`esta`**.",
      },
      {
        sentence: "La **aplicación** comunitaria facilita el intercambio de libros, pero **esta** solo funciona en dos distritos.",
        answer: "la aplicación comunitaria",
        accept: ["la aplicación comunitaria", "aplicación comunitaria", "la aplicación", "aplicación"],
        distractor: "el intercambio de libros",
        distractorAccept: ["el intercambio de libros", "intercambio", "libros"],
        distractorWhy: "`el intercambio` is masculine singular and `libros` is masculine plural — only feminine singular **`la aplicación`** fits `esta`.",
      },
      {
        sentence: "La **ley** regional limita el ruido nocturno en el casco urbano, pero **esta** apenas se aplica los fines de semana.",
        answer: "la ley regional",
        accept: ["la ley regional", "ley regional", "la ley", "ley"],
        distractor: "el ruido nocturno",
        distractorAccept: ["el ruido nocturno", "ruido nocturno", "el casco urbano"],
        distractorWhy: "`el ruido` and `el casco` are masculine singular — **`esta`** matches feminine singular **`la ley`**.",
      },
      {
        sentence: "La **ordenanza** sobre terrazas regula el espacio público en el centro, aunque **esta** divide a los comerciantes.",
        answer: "la ordenanza",
        accept: ["la ordenanza", "ordenanza", "la ordenanza sobre terrazas"],
        distractor: "el espacio público",
        distractorAccept: ["el espacio público", "espacio público", "el centro"],
        distractorWhy: "`el espacio` and `el centro` are masculine singular — **`esta`** matches feminine singular **`la ordenanza`**.",
      },
      {
        sentence: "La **estrategia** solar abastece el polideportivo municipal, y **esta** reducirá la factura eléctrica a la mitad.",
        answer: "la estrategia solar",
        accept: ["la estrategia solar", "estrategia solar", "la estrategia", "estrategia"],
        distractor: "el polideportivo municipal",
        distractorAccept: ["el polideportivo municipal", "polideportivo", "el polideportivo"],
        distractorWhy: "`el polideportivo` is masculine singular — **`esta`** matches feminine singular **`la estrategia solar`**.",
      },
    ],
  },
  {
    pronoun: "estas",
    grammarNote: "feminine plural demonstrative pronoun",
    cases: [
      {
        sentence: "El ministerio lanzó diez **becas** para estudiar diseño sostenible, pero **estas** excluyen a estudiantes de primer año.",
        answer: "las becas",
        accept: ["las becas", "becas", "diez becas"],
        distractor: "el ministerio",
        distractorAccept: ["el ministerio", "ministerio"],
        distractorWhy: "`el ministerio` is masculine singular, whereas **`estas`** is feminine plural.",
      },
      {
        sentence: "El informe analiza las **zonas** peatonales del centro, aunque **estas** aún carecen de suficiente sombra.",
        answer: "las zonas peatonales",
        accept: ["las zonas peatonales", "zonas peatonales", "las zonas", "zonas"],
        distractor: "el centro",
        distractorAccept: ["el centro", "centro", "el informe"],
        distractorWhy: "`el centro` and `el informe` are masculine singular — **`estas`** requires feminine plural **`las zonas peatonales`**.",
      },
      {
        sentence: "El ayuntamiento renovó varias **plazas** cerca del puerto, pero **estas** todavía no tienen fuentes de agua.",
        answer: "las plazas",
        accept: ["las plazas", "plazas", "varias plazas"],
        distractor: "el puerto",
        distractorAccept: ["el puerto", "puerto", "el ayuntamiento"],
        distractorWhy: "`el puerto` is masculine singular, whereas **`estas`** is feminine plural.",
      },
      {
        sentence: "El colegio abrió nuevas **aulas** junto al gimnasio, pero **estas** permanecen cerradas por la tarde.",
        answer: "las aulas",
        accept: ["las aulas", "aulas", "nuevas aulas"],
        distractor: "el gimnasio",
        distractorAccept: ["el gimnasio", "gimnasio", "el colegio"],
        distractorWhy: "`el gimnasio` is masculine singular — **`estas`** matches feminine plural **`las aulas`**.",
      },
      {
        sentence: "El festival creó tres **rutas** literarias por el barrio, aunque **estas** requieren inscripción previa.",
        answer: "las rutas literarias",
        accept: ["las rutas literarias", "rutas literarias", "las rutas", "rutas", "tres rutas"],
        distractor: "el barrio",
        distractorAccept: ["el barrio", "barrio", "el festival"],
        distractorWhy: "`el barrio` is masculine singular — **`estas`** refers to feminine plural **`las rutas`**.",
      },
      {
        sentence: "El diario publicó cuatro **entrevistas** sobre el teletrabajo, y **estas** recibieron miles de comentarios.",
        answer: "las entrevistas",
        accept: ["las entrevistas", "entrevistas", "cuatro entrevistas"],
        distractor: "el teletrabajo",
        distractorAccept: ["el teletrabajo", "teletrabajo", "el diario"],
        distractorWhy: "`el teletrabajo` is masculine singular — **`estas`** agrees with feminine plural **`las entrevistas`**.",
      },
      {
        sentence: "El museo organizó cinco **charlas** sobre el cine andino, y **estas** agotaron todas las plazas en un día.",
        answer: "las charlas",
        accept: ["las charlas", "charlas", "cinco charlas"],
        distractor: "el cine andino",
        distractorAccept: ["el cine andino", "cine andino", "el museo"],
        distractorWhy: "`el cine` and `el museo` are masculine singular — **`estas`** matches feminine plural **`las charlas`**.",
      },
      {
        sentence: "El gobierno impulsó nuevas **líneas** nocturnas de autobús en el distrito, y **estas** facilitan el regreso seguro.",
        answer: "las líneas nocturnas",
        accept: ["las líneas nocturnas", "líneas nocturnas", "nuevas líneas", "las líneas", "líneas"],
        distractor: "el distrito",
        distractorAccept: ["el distrito", "distrito", "el autobús"],
        distractorWhy: "`el distrito` and `autobús` are masculine singular — **`estas`** matches feminine plural **`las líneas nocturnas`**.",
      },
    ],
  },
  {
    pronoun: "estos",
    grammarNote: "masculine plural demonstrative pronoun",
    cases: [
      {
        sentence: "La biblioteca ofrece **talleres** gratuitos para toda la comunidad, y **estos** se llenan en pocas horas.",
        answer: "los talleres",
        accept: ["los talleres", "talleres", "los talleres gratuitos", "talleres gratuitos"],
        distractor: "la comunidad",
        distractorAccept: ["la comunidad", "comunidad", "la biblioteca"],
        distractorWhy: "`la comunidad` and `la biblioteca` are feminine singular — **`estos`** is masculine plural (`los talleres`).",
      },
      {
        sentence: "La universidad creó **cursos** de verano en la sierra, pero **estos** tienen plazas muy limitadas.",
        answer: "los cursos de verano",
        accept: ["los cursos de verano", "cursos de verano", "los cursos", "cursos"],
        distractor: "la sierra",
        distractorAccept: ["la sierra", "sierra", "la universidad"],
        distractorWhy: "`la sierra` is feminine singular, whereas **`estos`** matches masculine plural **`los cursos`**.",
      },
      {
        sentence: "La ciudad implantó **carriles** exclusivos junto a la avenida, y **estos** han reducido los accidentes.",
        answer: "los carriles exclusivos",
        accept: ["los carriles exclusivos", "carriles exclusivos", "los carriles", "carriles"],
        distractor: "la avenida",
        distractorAccept: ["la avenida", "avenida", "la ciudad"],
        distractorWhy: "`la avenida` is feminine singular — **`estos`** matches masculine plural **`los carriles`**.",
      },
      {
        sentence: "La cooperativa vende **productos** ecológicos en la feria, aunque **estos** cuestan ligeramente más.",
        answer: "los productos ecológicos",
        accept: ["los productos ecológicos", "productos ecológicos", "los productos", "productos"],
        distractor: "la feria",
        distractorAccept: ["la feria", "feria", "la cooperativa"],
        distractorWhy: "`la feria` is feminine singular — **`estos`** refers to masculine plural **`los productos`**.",
      },
      {
        sentence: "La alcaldía repartió **árboles** autóctonos en la plaza, y **estos** darán sombra en cinco años.",
        answer: "los árboles autóctonos",
        accept: ["los árboles autóctonos", "árboles autóctonos", "los árboles", "árboles"],
        distractor: "la plaza",
        distractorAccept: ["la plaza", "plaza", "la alcaldía"],
        distractorWhy: "`la plaza` is feminine singular — **`estos`** refers to masculine plural **`los árboles`**.",
      },
      {
        sentence: "La fundación diseñó **juegos** educativos para la infancia, y **estos** enseñan reciclaje sin pantallas.",
        answer: "los juegos educativos",
        accept: ["los juegos educativos", "juegos educativos", "los juegos", "juegos"],
        distractor: "la infancia",
        distractorAccept: ["la infancia", "infancia", "la fundación"],
        distractorWhy: "`la infancia` is feminine singular — **`estos`** matches masculine plural **`los juegos`**.",
      },
      {
        sentence: "La emisora produce **pódcast** juveniles sobre ciencia en la región, y **estos** superan ya cien mil descargas.",
        answer: "los pódcast juveniles",
        accept: ["los pódcast juveniles", "pódcast juveniles", "los pódcast", "pódcast"],
        distractor: "la región",
        distractorAccept: ["la región", "región", "la emisora"],
        distractorWhy: "`la región` and `la emisora` are feminine singular — **`estos`** refers to masculine plural **`los pódcast`**.",
      },
      {
        sentence: "La escuela instaló **paneles** fotovoltaicos sobre la azotea, y **estos** generan casi toda la luz escolar.",
        answer: "los paneles fotovoltaicos",
        accept: ["los paneles fotovoltaicos", "paneles fotovoltaicos", "los paneles", "paneles"],
        distractor: "la azotea",
        distractorAccept: ["la azotea", "azotea", "la escuela"],
        distractorWhy: "`la azotea` is feminine singular — **`estos`** agrees with masculine plural **`los paneles`**.",
      },
    ],
  },
  {
    pronoun: "la",
    grammarNote: "feminine singular direct-object clitic pronoun",
    cases: [
      {
        sentence: "El consejo aprobó la **normativa** sobre el reciclaje en octubre, pero pocos comercios **la** respetan aún.",
        answer: "la normativa",
        accept: ["la normativa", "normativa", "la normativa sobre el reciclaje"],
        distractor: "el reciclaje",
        distractorAccept: ["el reciclaje", "reciclaje", "el consejo"],
        distractorWhy: "`el reciclaje` is masculine — direct object clitic **`la`** refers to feminine **`la normativa`**.",
      },
      {
        sentence: "El cine proyectó la **película** chilena durante el festival, y el público **la** aplaudió de pie.",
        answer: "la película chilena",
        accept: ["la película chilena", "película chilena", "la película", "película"],
        distractor: "el festival",
        distractorAccept: ["el festival", "festival", "el cine"],
        distractorWhy: "`el festival` is masculine — **`la`** matches feminine singular **`la película`**.",
      },
      {
        sentence: "El instituto organizó la **exposición** fotográfica en el patio, y cientos de padres **la** visitaron.",
        answer: "la exposición fotográfica",
        accept: ["la exposición fotográfica", "exposición fotográfica", "la exposición", "exposición"],
        distractor: "el patio",
        distractorAccept: ["el patio", "patio", "el instituto"],
        distractorWhy: "`el patio` is masculine — **`la`** refers to feminine singular **`la exposición`**.",
      },
      {
        sentence: "El ayuntamiento financió la **biblioteca** móvil en el valle, y los lectores **la** esperan cada martes.",
        answer: "la biblioteca móvil",
        accept: ["la biblioteca móvil", "biblioteca móvil", "la biblioteca", "biblioteca"],
        distractor: "el valle",
        distractorAccept: ["el valle", "valle", "el ayuntamiento"],
        distractorWhy: "`el valle` is masculine — **`la`** refers to feminine singular **`la biblioteca`**.",
      },
      {
        sentence: "El equipo presentó la **encuesta** estudiantil ante el claustro, y la directora **la** valoró positivamente.",
        answer: "la encuesta estudiantil",
        accept: ["la encuesta estudiantil", "encuesta estudiantil", "la encuesta", "encuesta"],
        distractor: "el claustro",
        distractorAccept: ["el claustro", "claustro", "el equipo"],
        distractorWhy: "`el claustro` is masculine — **`la`** refers to feminine singular **`la encuesta`**.",
      },
      {
        sentence: "El barrio recuperó la **receta** tradicional durante el mercado, y los chefs jóvenes **la** modernizaron.",
        answer: "la receta tradicional",
        accept: ["la receta tradicional", "receta tradicional", "la receta", "receta"],
        distractor: "el mercado",
        distractorAccept: ["el mercado", "mercado", "el barrio"],
        distractorWhy: "`el mercado` is masculine — **`la`** refers to feminine singular **`la receta`**.",
      },
      {
        sentence: "El ministerio publicó la **guía** digital sobre seguridad en febrero, y miles de docentes **la** descargaron.",
        answer: "la guía digital",
        accept: ["la guía digital", "guía digital", "la guía", "guía"],
        distractor: "febrero",
        distractorAccept: ["febrero", "el ministerio"],
        distractorWhy: "`el ministerio` and `febrero` are masculine — **`la`** matches feminine singular **`la guía digital`**.",
      },
      {
        sentence: "El periódico lanzó la **campaña** solidaria en diciembre, y decenas de colegios **la** difundieron.",
        answer: "la campaña solidaria",
        accept: ["la campaña solidaria", "campaña solidaria", "la campaña", "campaña"],
        distractor: "diciembre",
        distractorAccept: ["diciembre", "el periódico"],
        distractorWhy: "`el periódico` and `diciembre` are masculine — **`la`** matches feminine singular **`la campaña solidaria`**.",
      },
    ],
  },
];

const REF_TIER2: ReferentTemplate[] = [
  {
    pronoun: "les",
    grammarNote: "plural indirect-object pronoun (human recipients)",
    cases: [
      {
        sentence: "El programa de mentoría conecta a los **estudiantes** con el sector tecnológico y **les** ofrece prácticas remuneradas.",
        answer: "los estudiantes",
        accept: ["los estudiantes", "estudiantes", "a los estudiantes"],
        distractor: "el sector tecnológico",
        distractorAccept: ["el sector tecnológico", "sector tecnológico", "el programa"],
        distractorWhy: "`el sector tecnológico` is singular and inanimate — plural **`les`** refers to the human recipients **`los estudiantes`**.",
      },
      {
        sentence: "La clínica rural visita a los **mayores** del municipio y **les** entrega medicamentos sin desplazamientos.",
        answer: "los mayores",
        accept: ["los mayores", "mayores", "a los mayores"],
        distractor: "el municipio",
        distractorAccept: ["el municipio", "municipio", "la clínica"],
        distractorWhy: "`el municipio` is singular — **`les`** refers to plural human recipients **`los mayores`**.",
      },
      {
        sentence: "La beca cultural reúne a jóvenes **músicos** en el conservatorio y **les** facilita instrumentos prestados.",
        answer: "los músicos",
        accept: ["jóvenes músicos", "los músicos", "músicos", "a jóvenes músicos"],
        distractor: "el conservatorio",
        distractorAccept: ["el conservatorio", "conservatorio"],
        distractorWhy: "`el conservatorio` is singular — **`les`** refers to plural recipients **`jóvenes músicos`**.",
      },
      {
        sentence: "El proyecto agrícola forma a pequeños **productores** en el uso del agua y **les** garantiza precios justos.",
        answer: "pequeños productores",
        accept: ["pequeños productores", "los productores", "productores", "a pequeños productores"],
        distractor: "el agua",
        distractorAccept: ["el agua", "agua", "el proyecto"],
        distractorWhy: "`el agua` is singular — **`les`** refers to plural human recipients **`pequeños productores`**.",
      },
      {
        sentence: "La plataforma orienta a los **migrantes** recién llegados sobre el idioma y **les** ayuda a tramitar documentos.",
        answer: "los migrantes",
        accept: ["los migrantes", "migrantes", "a los migrantes", "los migrantes recién llegados"],
        distractor: "el idioma",
        distractorAccept: ["el idioma", "idioma"],
        distractorWhy: "`el idioma` is singular — **`les`** refers to plural people **`los migrantes`**.",
      },
      {
        sentence: "El festival invita a nuevos **cineastas** al foro profesional y **les** permite financiar su primer guion.",
        answer: "nuevos cineastas",
        accept: ["nuevos cineastas", "los cineastas", "cineastas", "a nuevos cineastas"],
        distractor: "el foro profesional",
        distractorAccept: ["el foro profesional", "el foro", "foro"],
        distractorWhy: "`el foro` is singular — **`les`** refers to plural people **`nuevos cineastas`**.",
      },
      {
        sentence: "El ayuntamiento escucha a los **vecinos** sobre el tráfico y **les** presenta un borrador cada trimestre.",
        answer: "los vecinos",
        accept: ["los vecinos", "vecinos", "a los vecinos"],
        distractor: "el tráfico",
        distractorAccept: ["el tráfico", "tráfico", "el ayuntamiento"],
        distractorWhy: "`el tráfico` is singular — plural **`les`** refers to human recipients **`los vecinos`**.",
      },
      {
        sentence: "La biblioteca convoca a los **docentes** al seminario anual y **les** presta lotes de literatura hispana.",
        answer: "los docentes",
        accept: ["los docentes", "docentes", "a los docentes"],
        distractor: "el seminario anual",
        distractorAccept: ["el seminario anual", "seminario", "el seminario"],
        distractorWhy: "`el seminario` is singular — plural **`les`** refers to **`los docentes`**.",
      },
    ],
  },
  {
    pronoun: "aquellas",
    grammarNote: "feminine plural distal demonstrative pronoun",
    cases: [
      {
        sentence: "Muchas **familias** desean mudarse al campo, pero **aquellas** con hijos en secundaria dudan por falta de transporte.",
        answer: "las familias",
        accept: ["las familias", "familias", "muchas familias"],
        distractor: "el campo",
        distractorAccept: ["el campo", "campo"],
        distractorWhy: "`el campo` is masculine singular — **`aquellas`** agrees with feminine plural **`las familias`**.",
      },
      {
        sentence: "Varias **empresas** adoptaron el teletrabajo, aunque **aquellas** del sector industrial exigen presencia diaria.",
        answer: "las empresas",
        accept: ["las empresas", "empresas", "varias empresas"],
        distractor: "el teletrabajo",
        distractorAccept: ["el teletrabajo", "teletrabajo"],
        distractorWhy: "`el teletrabajo` is masculine singular — **`aquellas`** refers to feminine plural **`las empresas`**.",
      },
      {
        sentence: "Numerosas **ciudades** restringen los coches antiguos, pero **aquellas** con metro denso logran mejores resultados.",
        answer: "las ciudades",
        accept: ["las ciudades", "ciudades", "numerosas ciudades"],
        distractor: "los coches antiguos",
        distractorAccept: ["los coches antiguos", "coches antiguos", "coches"],
        distractorWhy: "`los coches` is masculine plural — feminine plural **`aquellas`** must refer to **`las ciudades`**.",
      },
      {
        sentence: "Algunas **escuelas** imparten robótica básica, aunque **aquellas** situadas en zonas aisladas carecen de fibra óptica.",
        answer: "las escuelas",
        accept: ["las escuelas", "escuelas", "algunas escuelas"],
        distractor: "robótica básica",
        distractorAccept: ["robótica básica", "robótica"],
        distractorWhy: "`robótica` is singular — **`aquellas`** matches feminine plural **`las escuelas`**.",
      },
      {
        sentence: "Varias **tiendas** venden ropa reciclada en el barrio, y **aquellas** con talleres de arreglo atraen a más jóvenes.",
        answer: "las tiendas",
        accept: ["las tiendas", "tiendas", "varias tiendas"],
        distractor: "ropa reciclada",
        distractorAccept: ["ropa reciclada", "ropa", "el barrio"],
        distractorWhy: "`ropa` and `el barrio` are singular — **`aquellas`** refers to feminine plural **`las tiendas`**.",
      },
      {
        sentence: "Ciertas **palabras** indígenas entraron en el español, y **aquellas** vinculadas a la naturaleza siguen muy vivas.",
        answer: "las palabras indígenas",
        accept: ["las palabras indígenas", "palabras indígenas", "las palabras", "palabras"],
        distractor: "el español",
        distractorAccept: ["el español", "español"],
        distractorWhy: "`el español` is masculine singular — **`aquellas`** matches feminine plural **`las palabras indígenas`**.",
      },
      {
        sentence: "Muchas **bibliotecas** abren los sábados en el distrito, y **aquellas** con salas silenciosas se llenan al amanecer.",
        answer: "las bibliotecas",
        accept: ["las bibliotecas", "bibliotecas", "muchas bibliotecas"],
        distractor: "el distrito",
        distractorAccept: ["el distrito", "distrito"],
        distractorWhy: "`el distrito` is masculine singular — **`aquellas`** matches feminine plural **`las bibliotecas`**.",
      },
      {
        sentence: "Varias **películas** compiten en el certamen, pero **aquellas** dirigidas por debutantes sorprenden más al jurado.",
        answer: "las películas",
        accept: ["las películas", "películas", "varias películas"],
        distractor: "el certamen",
        distractorAccept: ["el certamen", "certamen"],
        distractorWhy: "`el certamen` is masculine singular — **`aquellas`** refers to feminine plural **`las películas`**.",
      },
    ],
  },
  {
    pronoun: "los",
    grammarNote: "masculine plural direct-object pronoun",
    cases: [
      {
        sentence: "La red escolar recopiló **datos** sobre la ansiedad juvenil y **los** compartió con las familias.",
        answer: "los datos",
        accept: ["los datos", "datos"],
        distractor: "la ansiedad juvenil",
        distractorAccept: ["la ansiedad juvenil", "ansiedad juvenil", "la ansiedad"],
        distractorWhy: "`la ansiedad` is feminine singular — masculine plural **`los`** refers to **`los datos`**.",
      },
      {
        sentence: "La ONG recuperó **ordenadores** usados de oficinas y **los** donó a escuelas rurales.",
        answer: "los ordenadores usados",
        accept: ["los ordenadores usados", "ordenadores usados", "los ordenadores", "ordenadores"],
        distractor: "oficinas",
        distractorAccept: ["oficinas", "las oficinas"],
        distractorWhy: "`oficinas` is feminine plural — masculine plural **`los`** refers to **`los ordenadores`**.",
      },
      {
        sentence: "La chef rescató **ingredientes** andinos olvidados y **los** incorporó a su menú escolar.",
        answer: "los ingredientes andinos",
        accept: ["los ingredientes andinos", "ingredientes andinos", "los ingredientes", "ingredientes"],
        distractor: "la chef",
        distractorAccept: ["la chef", "chef"],
        distractorWhy: "`la chef` is feminine singular — **`los`** refers to masculine plural **`los ingredientes`**.",
      },
      {
        sentence: "La revista entrevistó a cinco **arquitectos** premiados y **los** invitó a debatir sobre urbanismo verde.",
        answer: "cinco arquitectos",
        accept: ["cinco arquitectos", "los arquitectos", "arquitectos", "los cinco arquitectos"],
        distractor: "la revista",
        distractorAccept: ["la revista", "revista"],
        distractorWhy: "`la revista` is feminine singular — **`los`** refers to masculine plural **`arquitectos`**.",
      },
      {
        sentence: "La profesora seleccionó tres **relatos** breves de América Latina y **los** comentó en clase.",
        answer: "tres relatos breves",
        accept: ["tres relatos breves", "los relatos breves", "los relatos", "relatos", "tres relatos"],
        distractor: "América Latina",
        distractorAccept: ["américa latina", "la profesora"],
        distractorWhy: "`América Latina` is feminine singular — **`los`** matches masculine plural **`los relatos`**.",
      },
      {
        sentence: "La cooperativa seleccionó **voluntarios** bilingües de la ciudad y **los** destinó al centro de acogida.",
        answer: "los voluntarios bilingües",
        accept: ["los voluntarios bilingües", "voluntarios bilingües", "los voluntarios", "voluntarios"],
        distractor: "la ciudad",
        distractorAccept: ["la ciudad", "ciudad", "la cooperativa"],
        distractorWhy: "`la ciudad` is feminine singular — **`los`** refers to masculine plural **`los voluntarios`**.",
      },
      {
        sentence: "La alcaldesa defendió los **presupuestos** ecológicos ante la prensa y **los** sometió a votación vecinal.",
        answer: "los presupuestos ecológicos",
        accept: ["los presupuestos ecológicos", "presupuestos ecológicos", "los presupuestos", "presupuestos"],
        distractor: "la prensa",
        distractorAccept: ["la prensa", "prensa", "la alcaldesa"],
        distractorWhy: "`la prensa` is feminine singular — **`los`** refers to masculine plural **`los presupuestos`**.",
      },
      {
        sentence: "La fundación editó **manuales** de ciudadanía digital para la secundaria y **los** distribuyó sin coste.",
        answer: "los manuales",
        accept: ["los manuales", "manuales", "manuales de ciudadanía digital"],
        distractor: "la secundaria",
        distractorAccept: ["la secundaria", "secundaria", "la fundación"],
        distractorWhy: "`la secundaria` is feminine singular — **`los`** refers to masculine plural **`manuales`**.",
      },
    ],
  },
  {
    pronoun: "las",
    grammarNote: "feminine plural direct-object pronoun",
    cases: [
      {
        sentence: "El estudio evaluó diversas **aplicaciones** de salud mental y **las** clasificó según su privacidad.",
        answer: "las aplicaciones",
        accept: ["las aplicaciones", "aplicaciones", "diversas aplicaciones", "las aplicaciones de salud mental"],
        distractor: "el estudio",
        distractorAccept: ["el estudio", "estudio"],
        distractorWhy: "`el estudio` is masculine singular — feminine plural **`las`** matches **`las aplicaciones`**.",
      },
      {
        sentence: "El museo restauró antiguas **fotografías** del puerto y **las** expuso junto al archivo sonoro.",
        answer: "las fotografías",
        accept: ["las fotografías", "fotografías", "antiguas fotografías"],
        distractor: "el puerto",
        distractorAccept: ["el puerto", "puerto", "el museo"],
        distractorWhy: "`el puerto` and `el museo` are masculine singular — **`las`** refers to feminine plural **`las fotografías`**.",
      },
      {
        sentence: "El consejo recogió **propuestas** estudiantiles durante mayo y **las** incluyó en el plan anual.",
        answer: "las propuestas estudiantiles",
        accept: ["las propuestas estudiantiles", "propuestas estudiantiles", "las propuestas", "propuestas"],
        distractor: "mayo",
        distractorAccept: ["mayo", "el consejo"],
        distractorWhy: "`el consejo` and `mayo` are masculine singular — **`las`** matches feminine plural **`las propuestas`**.",
      },
      {
        sentence: "El gobierno amplió las **subvenciones** solares en el sur y **las** simplificó para las familias.",
        answer: "las subvenciones solares",
        accept: ["las subvenciones solares", "subvenciones solares", "las subvenciones", "subvenciones"],
        distractor: "el sur",
        distractorAccept: ["el sur", "sur", "el gobierno"],
        distractorWhy: "`el sur` is masculine singular — **`las`** matches feminine plural **`las subvenciones`**.",
      },
      {
        sentence: "El periodista verificó todas las **cifras** del informe y **las** contrastó con fuentes independientes.",
        answer: "las cifras",
        accept: ["las cifras", "cifras", "todas las cifras"],
        distractor: "el informe",
        distractorAccept: ["el informe", "informe"],
        distractorWhy: "`el informe` is masculine singular — **`las`** refers to feminine plural **`las cifras`**.",
      },
      {
        sentence: "El colegio tradujo las **guías** informativas al quechua y **las** repartió en el encuentro familiar.",
        answer: "las guías informativas",
        accept: ["las guías informativas", "guías informativas", "las guías", "guías"],
        distractor: "el quechua",
        distractorAccept: ["el quechua", "quechua", "el colegio"],
        distractorWhy: "`el quechua` is masculine singular — **`las`** refers to feminine plural **`las guías`**.",
      },
      {
        sentence: "El ayuntamiento protegió las **huertas** tradicionales del río y **las** declaró patrimonio agrícola.",
        answer: "las huertas tradicionales",
        accept: ["las huertas tradicionales", "huertas tradicionales", "las huertas", "huertas"],
        distractor: "el río",
        distractorAccept: ["el río", "río", "el ayuntamiento"],
        distractorWhy: "`el río` is masculine singular — **`las`** matches feminine plural **`las huertas`**.",
      },
      {
        sentence: "El instituto renovó las **bicicletas** del taller y **las** prestó a los alumnos de intercambio.",
        answer: "las bicicletas",
        accept: ["las bicicletas", "bicicletas", "las bicicletas del taller"],
        distractor: "el taller",
        distractorAccept: ["el taller", "taller", "el instituto"],
        distractorWhy: "`el taller` is masculine singular — **`las`** matches feminine plural **`las bicicletas`**.",
      },
    ],
  },
];

const REF_TIER3: ReferentTemplate[] = [
  {
    pronoun: "cuyas",
    grammarNote: "relative possessive linking an owner (antecedent) to a feminine plural possessed noun",
    cases: [
      {
        sentence: "La **cooperativa** de Oaxaca, **cuyas** telas artesanales se exportan a Europa, financia una escuela bilingüe.",
        answer: "la cooperativa",
        accept: ["la cooperativa", "cooperativa", "la cooperativa de oaxaca"],
        distractor: "telas artesanales",
        distractorAccept: ["telas artesanales", "telas", "europa"],
        distractorWhy: "`telas artesanales` is the *possessed* noun agreeing in gender/number with `cuyas`, whereas the *owner* (`whose`) is **`la cooperativa`**!",
      },
      {
        sentence: "El **hospital** público, **cuyas** unidades solares reducen el gasto eléctrico, sirve de modelo en Chile.",
        answer: "el hospital público",
        accept: ["el hospital público", "el hospital", "hospital", "hospital público"],
        distractor: "unidades solares",
        distractorAccept: ["unidades solares", "unidades", "chile"],
        distractorWhy: "`unidades solares` is the possessed noun determining the `-as` ending — the *owner* referred back to by `cuyas` is **`el hospital público`**.",
      },
      {
        sentence: "El **municipio** costero, **cuyas** playas recibieron bandera azul, prohíbe los plásticos desechables.",
        answer: "el municipio costero",
        accept: ["el municipio costero", "el municipio", "municipio", "municipio costero"],
        distractor: "playas",
        distractorAccept: ["playas", "las playas"],
        distractorWhy: "`playas` is the possessed noun following `cuyas`; the antecedent ('whose beaches') is **`el municipio costero`**.",
      },
      {
        sentence: "La **universidad** andina, **cuyas** investigaciones climáticas ganaron premios, abre becas internacionales.",
        answer: "la universidad andina",
        accept: ["la universidad andina", "la universidad", "universidad", "universidad andina"],
        distractor: "investigaciones climáticas",
        distractorAccept: ["investigaciones climáticas", "investigaciones"],
        distractorWhy: "`investigaciones` is the possessed noun; **`cuyas`** points back to its owner **`la universidad andina`**.",
      },
      {
        sentence: "El **cineasta** mexicano, **cuyas** obras exploran la memoria familiar, inauguró el festival escolar.",
        answer: "el cineasta mexicano",
        accept: ["el cineasta mexicano", "el cineasta", "cineasta", "cineasta mexicano"],
        distractor: "obras",
        distractorAccept: ["obras", "sus obras"],
        distractorWhy: "`obras` is the possessed noun; `cuyas` links back to the creator **`el cineasta mexicano`**.",
      },
      {
        sentence: "El **barrio** histórico, **cuyas** librerías centenarias resisten el turismo masivo, organiza rutas nocturnas.",
        answer: "el barrio histórico",
        accept: ["el barrio histórico", "el barrio", "barrio", "barrio histórico"],
        distractor: "librerías centenarias",
        distractorAccept: ["librerías centenarias", "librerías"],
        distractorWhy: "`librerías` is the possessed noun; **`cuyas`** links back to **`el barrio histórico`**.",
      },
      {
        sentence: "El **instituto** rural, **cuyas** aulas híbridas conectan doce aldeas, recibió fondos europeos.",
        answer: "el instituto rural",
        accept: ["el instituto rural", "el instituto", "instituto", "instituto rural"],
        distractor: "aulas híbridas",
        distractorAccept: ["aulas híbridas", "aulas"],
        distractorWhy: "`aulas híbridas` is the possessed noun; `cuyas` links back to **`el instituto rural`**.",
      },
      {
        sentence: "La **editorial** independiente, **cuyas** traducciones rescatan voces indígenas, cumple veinte años.",
        answer: "la editorial independiente",
        accept: ["la editorial independiente", "la editorial", "editorial", "editorial independiente"],
        distractor: "traducciones",
        distractorAccept: ["traducciones", "las traducciones"],
        distractorWhy: "`traducciones` is the possessed noun; **`cuyas`** refers back to **`la editorial independiente`**.",
      },
    ],
  },
  {
    pronoun: "cuyos",
    grammarNote: "relative possessive linking an owner (antecedent) to a masculine plural possessed noun",
    cases: [
      {
        sentence: "La **fundación** colombiana, **cuyos** proyectos musicales llegan a mil jóvenes, recibió un premio internacional.",
        answer: "la fundación colombiana",
        accept: ["la fundación colombiana", "la fundación", "fundación", "fundación colombiana"],
        distractor: "proyectos musicales",
        distractorAccept: ["proyectos musicales", "proyectos"],
        distractorWhy: "`proyectos musicales` is the possessed noun; the antecedent ('whose projects') is **`la fundación colombiana`**.",
      },
      {
        sentence: "La **ciudad** española, **cuyos** carriles bici superan los cien kilómetros, redujo las emisiones urbanas.",
        answer: "la ciudad española",
        accept: ["la ciudad española", "la ciudad", "ciudad", "ciudad española"],
        distractor: "carriles bici",
        distractorAccept: ["carriles bici", "carriles"],
        distractorWhy: "`carriles bici` is the possessed noun; `cuyos` points back to **`la ciudad española`**.",
      },
      {
        sentence: "La **autora** uruguaya, **cuyos** relatos breves se leen en Bachillerato, visitará nuestro colegio.",
        answer: "la autora uruguaya",
        accept: ["la autora uruguaya", "la autora", "autora", "autora uruguaya"],
        distractor: "relatos breves",
        distractorAccept: ["relatos breves", "relatos"],
        distractorWhy: "`relatos breves` is the possessed noun; `cuyos` refers back to **`la autora uruguaya`**.",
      },
      {
        sentence: "La **reserva** ecuatoriana, **cuyos** bosques nublados albergan especies únicas, amplió su vigilancia.",
        answer: "la reserva ecuatoriana",
        accept: ["la reserva ecuatoriana", "la reserva", "reserva", "reserva ecuatoriana"],
        distractor: "bosques nublados",
        distractorAccept: ["bosques nublados", "bosques"],
        distractorWhy: "`bosques nublados` is the possessed noun; the owner antecedent is **`la reserva ecuatoriana`**.",
      },
      {
        sentence: "La **plataforma** cívica, **cuyos** voluntarios verifican bulos electorales, lanzó una guía juvenil.",
        answer: "la plataforma cívica",
        accept: ["la plataforma cívica", "la plataforma", "plataforma", "plataforma cívica"],
        distractor: "voluntarios",
        distractorAccept: ["voluntarios", "los voluntarios"],
        distractorWhy: "`voluntarios` is the possessed noun; `cuyos` links back to **`la plataforma cívica`**.",
      },
      {
        sentence: "La **escuela** técnica, **cuyos** egresados encuentran empleo en tres meses, duplicó sus solicitudes.",
        answer: "la escuela técnica",
        accept: ["la escuela técnica", "la escuela", "escuela", "escuela técnica"],
        distractor: "egresados",
        distractorAccept: ["egresados", "los egresados"],
        distractorWhy: "`egresados` is the possessed noun; `cuyos` refers back to **`la escuela técnica`**.",
      },
      {
        sentence: "La **orquesta** juvenil, **cuyos** conciertos gratuitos llenan las plazas de Lima, viajará a España.",
        answer: "la orquesta juvenil",
        accept: ["la orquesta juvenil", "la orquesta", "orquesta", "orquesta juvenil"],
        distractor: "conciertos gratuitos",
        distractorAccept: ["conciertos gratuitos", "conciertos"],
        distractorWhy: "`conciertos` is the possessed noun; `cuyos` links back to **`la orquesta juvenil`**.",
      },
      {
        sentence: "La **empresa** textil, **cuyos** talleres garantizan salarios dignos, rechazó la moda ultrarrápida.",
        answer: "la empresa textil",
        accept: ["la empresa textil", "la empresa", "empresa", "empresa textil"],
        distractor: "talleres",
        distractorAccept: ["talleres", "los talleres"],
        distractorWhy: "`talleres` is the possessed noun; `cuyos` refers back to **`la empresa textil`**.",
      },
    ],
  },
  {
    pronoun: "dicho",
    grammarNote: "formal C1 cohesive determiner ('the aforementioned')",
    cases: [
      {
        sentence: "El consejo debatió el **acuerdo** climático pese a la oposición local, y **dicho** pacto entrará en vigor en enero.",
        answer: "el acuerdo climático",
        accept: ["el acuerdo climático", "acuerdo climático", "el acuerdo", "acuerdo"],
        distractor: "la oposición local",
        distractorAccept: ["la oposición local", "oposición local", "la oposición"],
        distractorWhy: "`la oposición` is feminine — masculine **`dicho`** ('aforementioned') points back to **`el acuerdo climático`**.",
      },
      {
        sentence: "El ministerio impulsó un **protocolo** contra el ciberacoso tras la protesta escolar, y **dicho** plan será obligatorio.",
        answer: "un protocolo",
        accept: ["un protocolo", "el protocolo", "protocolo", "protocolo contra el ciberacoso"],
        distractor: "la protesta escolar",
        distractorAccept: ["la protesta escolar", "protesta escolar", "protesta"],
        distractorWhy: "`la protesta` is feminine — masculine **`dicho`** refers to **`el protocolo`**.",
      },
      {
        sentence: "El ayuntamiento aprobó un **impuesto** turístico tras la cumbre verde, y **dicho** fondo financiará autobuses eléctricos.",
        answer: "un impuesto turístico",
        accept: ["un impuesto turístico", "el impuesto turístico", "impuesto turístico", "impuesto"],
        distractor: "la cumbre verde",
        distractorAccept: ["la cumbre verde", "cumbre verde", "cumbre"],
        distractorWhy: "`la cumbre` is feminine — masculine **`dicho`** refers to **`un impuesto turístico`**.",
      },
      {
        sentence: "La comisión presentó un **informe** sobre la brecha salarial en la sede central, y **dicho** documento abrió el debate.",
        answer: "un informe",
        accept: ["un informe", "el informe", "informe"],
        distractor: "la sede central",
        distractorAccept: ["la sede central", "sede central", "la comisión"],
        distractorWhy: "`la sede` and `la comisión` are feminine — masculine **`dicho`** refers back to **`un informe`**.",
      },
      {
        sentence: "La ONG diseñó un **taller** de verificación crítica para la prensa escolar, y **dicho** curso se replicó en diez países.",
        answer: "un taller",
        accept: ["un taller", "el taller", "taller", "taller de verificación crítica"],
        distractor: "la prensa escolar",
        distractorAccept: ["la prensa escolar", "prensa escolar", "prensa"],
        distractorWhy: "`la prensa` is feminine — masculine **`dicho`** refers back to **`un taller`**.",
      },
      {
        sentence: "El museo lanzó un **archivo** digital de lenguas originarias con ayuda de la biblioteca, y **dicho** portal es abierto.",
        answer: "un archivo digital",
        accept: ["un archivo digital", "el archivo digital", "archivo digital", "archivo"],
        distractor: "la biblioteca",
        distractorAccept: ["la biblioteca", "biblioteca"],
        distractorWhy: "`la biblioteca` is feminine — masculine **`dicho`** points back to **`un archivo digital`**.",
      },
      {
        sentence: "La alcaldía redactó un **manual** de movilidad ciclista tras la encuesta ciudadana, y **dicho** texto se repartió en colegios.",
        answer: "un manual",
        accept: ["un manual", "el manual", "manual", "manual de movilidad ciclista"],
        distractor: "la encuesta ciudadana",
        distractorAccept: ["la encuesta ciudadana", "encuesta ciudadana", "encuesta"],
        distractorWhy: "`la encuesta` is feminine — masculine **`dicho`** points back to **`un manual`**.",
      },
      {
        sentence: "La junta diseñó un **programa** de intercambio artístico durante la semana cultural, y **dicho** proyecto sumó veinte centros.",
        answer: "un programa",
        accept: ["un programa", "el programa", "programa", "programa de intercambio artístico"],
        distractor: "la semana cultural",
        distractorAccept: ["la semana cultural", "semana cultural", "semana"],
        distractorWhy: "`la semana` is feminine — masculine **`dicho`** matches masculine **`un programa`**.",
      },
    ],
  },
  {
    pronoun: "dichas",
    grammarNote: "formal C1 feminine plural cohesive determiner ('the aforementioned')",
    cases: [
      {
        sentence: "El comité redactó cinco **medidas** sobre el ruido urbano, y **dichas** normas se votarán el viernes.",
        answer: "cinco medidas",
        accept: ["cinco medidas", "las medidas", "medidas"],
        distractor: "el ruido urbano",
        distractorAccept: ["el ruido urbano", "ruido urbano", "el comité"],
        distractorWhy: "`el ruido` and `el comité` are masculine singular — feminine plural **`dichas`** matches **`medidas`**.",
      },
      {
        sentence: "El gobierno anunció **ayudas** directas para el transporte rural, y **dichas** partidas llegarán en otoño.",
        answer: "ayudas directas",
        accept: ["ayudas directas", "las ayudas directas", "las ayudas", "ayudas"],
        distractor: "el transporte rural",
        distractorAccept: ["el transporte rural", "transporte rural", "el gobierno"],
        distractorWhy: "`el transporte` is masculine singular — feminine plural **`dichas`** matches **`ayudas directas`**.",
      },
      {
        sentence: "El instituto impulsó **tutorías** bilingües durante el trimestre, y **dichas** sesiones elevaron la participación.",
        answer: "tutorías bilingües",
        accept: ["tutorías bilingües", "las tutorías bilingües", "las tutorías", "tutorías"],
        distractor: "el trimestre",
        distractorAccept: ["el trimestre", "trimestre", "el instituto"],
        distractorWhy: "`el trimestre` is masculine singular — feminine plural **`dichas`** refers to **`tutorías bilingües`**.",
      },
      {
        sentence: "El festival programó **charlas** sobre cine indígena en el auditorio, y **dichas** ponencias agotaron las entradas.",
        answer: "charlas",
        accept: ["charlas", "las charlas", "charlas sobre cine indígena"],
        distractor: "el auditorio",
        distractorAccept: ["el auditorio", "auditorio", "el festival"],
        distractorWhy: "`el auditorio` is masculine singular — feminine plural **`dichas`** refers to **`charlas`**.",
      },
      {
        sentence: "El ayuntamiento instaló **placas** solares en el polideportivo, y **dichas** instalaciones cubren el 60% del consumo.",
        answer: "placas solares",
        accept: ["placas solares", "las placas solares", "las placas", "placas"],
        distractor: "el polideportivo",
        distractorAccept: ["el polideportivo", "polideportivo"],
        distractorWhy: "`el polideportivo` is masculine singular — feminine plural **`dichas`** refers to **`placas solares`**.",
      },
      {
        sentence: "El diario recopiló **denuncias** vecinales sobre el alquiler turístico, y **dichas** quejas forzaron una reunión.",
        answer: "denuncias vecinales",
        accept: ["denuncias vecinales", "las denuncias vecinales", "las denuncias", "denuncias"],
        distractor: "el alquiler turístico",
        distractorAccept: ["el alquiler turístico", "alquiler turístico"],
        distractorWhy: "`el alquiler` is masculine singular — feminine plural **`dichas`** matches **`denuncias vecinales`**.",
      },
      {
        sentence: "El ministerio publicó **estadísticas** anuales sobre el reciclaje, y **dichas** cifras revelan avances desiguales.",
        answer: "estadísticas anuales",
        accept: ["estadísticas anuales", "las estadísticas anuales", "las estadísticas", "estadísticas"],
        distractor: "el reciclaje",
        distractorAccept: ["el reciclaje", "reciclaje", "el ministerio"],
        distractorWhy: "`el reciclaje` is masculine singular — feminine plural **`dichas`** refers to **`estadísticas anuales`**.",
      },
      {
        sentence: "El museo abrió **salas** interactivas en el sótano, y **dichas** dependencias reciben grupos escolares diarios.",
        answer: "salas interactivas",
        accept: ["salas interactivas", "las salas interactivas", "las salas", "salas"],
        distractor: "el sótano",
        distractorAccept: ["el sótano", "sótano", "el museo"],
        distractorWhy: "`el sótano` is masculine singular — feminine plural **`dichas`** matches **`salas interactivas`**.",
      },
    ],
  },
];

// =============================================================================
// DRILL 4: Paper 2 Listening Self-Correction Distractors (SL Core, Level 2)
// =============================================================================

const CITIES_LISTEN = ["Valencia", "Bogotá", "Guadalajara", "Bilbao", "Lima", "Montevideo", "Granada", "Quito", "Sevilla", "Medellín"] as const;
const PIVOTS = ["sin embargo", "no obstante", "en realidad", "al final", "a decir verdad"] as const;
const DAYS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado"] as const;

const REGIONAL_PAIRS: Array<{ latam: string; latamArt: string; spain: string; spainArt: string; meaning: string; sentence: string }> = [
  { latam: "computadora", latamArt: "la", spain: "ordenador", spainArt: "el", meaning: "computer", sentence: "Se averió mi **computadora** justo antes de enviar el proyecto." },
  { latam: "celular", latamArt: "el", spain: "móvil", spainArt: "el", meaning: "mobile phone", sentence: "En el instituto prohíben usar el **celular** durante las clases." },
  { latam: "jugo", latamArt: "el", spain: "zumo", spainArt: "el", meaning: "juice", sentence: "Desayuné un **jugo** de naranja natural antes del examen." },
  { latam: "carro", latamArt: "el", spain: "coche", spainArt: "el", meaning: "car", sentence: "Muchos vecinos dejaron el **carro** en casa para ir en metro." },
  { latam: "departamento", latamArt: "el", spain: "piso", spainArt: "el", meaning: "apartment/flat", sentence: "Los estudiantes comparten un **departamento** cerca de la facultad." },
  { latam: "boleto", latamArt: "el", spain: "billete", spainArt: "el", meaning: "ticket", sentence: "Compramos el **boleto** de tren con dos semanas de antelación." },
];

// =============================================================================
// DRILL 5: [HL] 5-Minute Proofreading Sweep (HL Only, Level 3)
// =============================================================================

interface ProofreadCase {
  pass: string;
  rule: string;
  wrongWord: string;
  rightWord: string;
  accept: string[];
  extraTrap?: { word: string; feedback: string };
  sentences: string[];
}

const HL_TIER1: ProofreadCase[] = [
  {
    pass: "Pass T (Tildes diacríticas)",
    rule: "`mas` (without tilde) means 'but'; 'more' ALWAYS takes an accent: **`más`**.",
    wrongWord: "mas",
    rightWord: "más",
    accept: ["más"],
    sentences: [
      "El municipio necesita invertir **mas** recursos en bibliotecas rurales.",
      "Cada año **mas** jóvenes eligen el transporte público frente al coche privado.",
      "Es evidente que debemos dedicar **mas** horas a la educación ambiental.",
      "Los datos revelan que hoy resulta **mas** urgente combatir la desinformación.",
      "El ayuntamiento promete abrir **mas** centros juveniles en los barrios periféricos.",
    ],
  },
  {
    pass: "Pass T (Tildes diacríticas)",
    rule: "`aun` (no accent) means 'even'; **`aún`** (= *todavía*, 'still') carries a written tilde.",
    wrongWord: "aun",
    rightWord: "aún",
    accept: ["aún"],
    sentences: [
      "Pese a las promesas oficiales, **aun** persiste una profunda brecha digital rural.",
      "El consejo escolar **aun** no ha aprobado el presupuesto del huerto ecológico.",
      "Numerosos pueblos de la sierra **aun** carecen de conexión de fibra óptica.",
      "Tras tres meses de campaña, **aun** quedan comercios que utilizan bolsas plásticas.",
      "Los vecinos denuncian que **aun** faltan bancos e iluminación en la plaza nueva.",
    ],
  },
  {
    pass: "Pass T (Tildes diacríticas)",
    rule: "`si` (no accent) means 'if'; **`sí`** (with accent) means 'yes / indeed'.",
    wrongWord: "si",
    rightWord: "sí",
    accept: ["sí"],
    sentences: [
      "Varios críticos dudaban del plan, pero las familias **si** respaldaron la reforma.",
      "El informe niega mejoras en el tráfico, aunque **si** destaca el avance ciclista.",
      "Muchos rechazan prohibir el móvil, pero **si** defienden regular su horario.",
      "La medida no eliminó el ruido, aunque **si** redujo las quejas nocturnas.",
      "Los docentes no piden menos deberes, pero **si** reclaman mayor apoyo digital.",
    ],
  },
  {
    pass: "Pass C (Concordancia: Greek -ma masculine)",
    rule: "`el problema` is **masculine** despite ending in `-a`, so its adjective must be masculine: **`complejo`**.",
    wrongWord: "compleja",
    rightWord: "complejo",
    accept: ["complejo"],
    extraTrap: { word: "complejos", feedback: "`un problema` is singular — keep the adjective masculine singular: **`complejo`**." },
    sentences: [
      "La despoblación rural constituye un problema sumamente **compleja** en España.",
      "El ciberacoso escolar plantea un problema ético muy **compleja** para las familias.",
      "La vivienda asequible se ha vuelto un problema social **compleja** en las capitales.",
      "Gestionar los residuos electrónicos supone un problema ambiental **compleja**.",
      "Conciliar turismo y convivencia vecinal representa un problema **compleja** en Palma.",
    ],
  },
  {
    pass: "Pass C (Concordancia: Greek -ma masculine)",
    rule: "`el sistema` is **masculine** (Greek `-ma` noun), requiring masculine **`educativo`**.",
    wrongWord: "educativa",
    rightWord: "educativo",
    accept: ["educativo"],
    extraTrap: { word: "educativos", feedback: "`el sistema` is singular — use masculine singular **`educativo`**." },
    sentences: [
      "El sistema **educativa** debería fomentar el pensamiento crítico desde primaria.",
      "Urge modernizar el sistema **educativa** para cerrar la brecha tecnológica.",
      "En el sistema **educativa** actual faltan talleres prácticos de finanzas personales.",
      "Varios informes destacan las fortalezas del sistema **educativa** bilingüe.",
      "Ningún sistema **educativa** puede ignorar el impacto de la inteligencia artificial.",
    ],
  },
  {
    pass: "Pass C (Concordancia: Greek -ma masculine)",
    rule: "`el programa` is **masculine** (Greek `-ma` noun), requiring masculine **`comunitario`**.",
    wrongWord: "comunitaria",
    rightWord: "comunitario",
    accept: ["comunitario"],
    sentences: [
      "El ayuntamiento financió un programa **comunitaria** de reciclaje en el barrio.",
      "Nuestro colegio impulsa un programa **comunitaria** de tutorías intergeneracionales.",
      "El programa **comunitaria** de huertos urbanos ya reúne a cien familias en Quito.",
      "Lanzar un programa **comunitaria** de préstamos de bicicletas reduciría las emisiones.",
      "Gracias al programa **comunitaria**, decenas de jóvenes aprendieron oficios verdes.",
    ],
  },
  {
    pass: "Pass C (Concordancia: Greek -ma masculine)",
    rule: "`el idioma` is **masculine**, so the adjective must be masculine singular: **`materno`**.",
    wrongWord: "materna",
    rightWord: "materno",
    accept: ["materno"],
    sentences: [
      "Preservar el idioma **materna** fortalece la autoestima cultural de los jóvenes.",
      "Muchos alumnos bilingües combinan su idioma **materna** con el español escolar.",
      "Perder el idioma **materna** borra siglos de memoria oral en América Latina.",
      "La escuela debe valorar el idioma **materna** de cada estudiante migrante.",
      "Aprender ciencias en el idioma **materna** mejora la comprensión temprana.",
    ],
  },
  {
    pass: "Pass C (Concordancia de número)",
    rule: "`las consecuencias` is feminine **plural**, so the adjective must carry plural `-s`: **`graves`**.",
    wrongWord: "grave",
    rightWord: "graves",
    accept: ["graves"],
    sentences: [
      "La sequía prolongada tendrá consecuencias muy **grave** para la agricultura local.",
      "La difusión de bulos médicos provoca consecuencias **grave** en la salud pública.",
      "El abuso de pantallas nocturnas acarrea consecuencias **grave** para el sueño juvenil.",
      "Retrasar la transición verde generará consecuencias económicas **grave**.",
      "Ignorar el acoso digital puede tener consecuencias emocionales **grave**.",
    ],
  },
];

const HL_TIER2: ProofreadCase[] = [
  {
    pass: "Pass S (WEIRDO Impersonal Subjunctive)",
    rule: "`Es imprescindible que` triggers **present subjunctive**: `tomen` (not indicative `toman`).",
    wrongWord: "toman",
    rightWord: "tomen",
    accept: ["tomen"],
    extraTrap: { word: "tome", feedback: "Check plural subject `los gobiernos` — use 3rd-person plural **`tomen`**." },
    sentences: [
      "Es imprescindible que los gobiernos **toman** medidas firmes contra la deforestación.",
      "Es imprescindible que las autoridades **toman** en cuenta la voz del alumnado.",
      "Es imprescindible que los municipios **toman** decisiones valientes sobre el tráfico.",
      "Es imprescindible que las plataformas **toman** responsabilidades ante los bulos.",
      "Es imprescindible que los colegios **toman** medidas reales frente al ciberacoso.",
    ],
  },
  {
    pass: "Pass S (Negative Opinion Subjunctive)",
    rule: "Negated belief (`No creo que`) ALWAYS triggers the **subjunctive**: **`beneficie`**.",
    wrongWord: "beneficia",
    rightWord: "beneficie",
    accept: ["beneficie"],
    extraTrap: { word: "beneficien", feedback: "Subject is singular — use 3rd-person singular **`beneficie`**." },
    sentences: [
      "No creo que el turismo descontrolado **beneficia** al comercio tradicional.",
      "No creo que la moda ultrarrápida **beneficia** realmente a los trabajadores.",
      "No creo que el cierre de la biblioteca **beneficia** al presupuesto municipal.",
      "No creo que la publicidad engañosa **beneficia** a la salud infantil.",
      "No creo que el aislamiento digital **beneficia** al desarrollo adolescente.",
    ],
  },
  {
    pass: "Pass S (ESCAPA Subjunctive: para que)",
    rule: "`para que` (ESCAPA) ALWAYS takes the **subjunctive**: **`puedan`**.",
    wrongWord: "pueden",
    rightWord: "puedan",
    accept: ["puedan"],
    extraTrap: { word: "pueda", feedback: "Subject is plural — use 3rd-person plural **`puedan`**." },
    sentences: [
      "Proponemos abrir becas digitales para que todos los jóvenes **pueden** investigar en casa.",
      "Instalamos rampas y señalización para que los mayores **pueden** acceder sin barreras.",
      "Organizamos tutorías gratuitas para que los alumnos migrantes **pueden** integrarse antes.",
      "Ampliamos el horario nocturno para que los universitarios **pueden** estudiar en silencio.",
      "Creamos carriles seguros para que los niños **pueden** ir al colegio en bicicleta.",
    ],
  },
  {
    pass: "Pass S (WEIRDO Impersonal Subjunctive)",
    rule: "`Es fundamental que` triggers **present subjunctive**: `proteger` (`g → j` before `a`) → **`protejan`**.",
    wrongWord: "protegen",
    rightWord: "protejan",
    accept: ["protejan"],
    extraTrap: { word: "proteja", feedback: "Check plural subject — use 3rd-person plural **`protejan`**, not singular `proteja`." },
    sentences: [
      "Es fundamental que las leyes **protegen** los bosques autóctonos frente a la tala.",
      "Es fundamental que los ciudadanos **protegen** las fuentes de agua potable.",
      "Es fundamental que los estados **protegen** los datos personales de los menores.",
      "Es fundamental que las ciudades **protegen** el patrimonio arquitectónico local.",
      "Es fundamental que los colegios **protegen** las lenguas minoritarias de la región.",
    ],
  },
  {
    pass: "Pass S (ESCAPA Subjunctive: antes de que)",
    rule: "`antes de que` ALWAYS takes the **subjunctive**: **`sea`** (not indicative `es`).",
    wrongWord: "es",
    rightWord: "sea",
    accept: ["sea"],
    sentences: [
      "Debemos frenar la desertificación antes de que **es** irreversible en el sur.",
      "Conviene regular los algoritmos antes de que **es** imposible verificar las fuentes.",
      "Urge actuar sobre el consumo plástico antes de que **es** demasiado tarde.",
      "Necesitamos apoyar al comercio de barrio antes de que **es** reemplazado por completo.",
      "Hay que invertir en salud mental juvenil antes de que **es** una crisis crónica.",
    ],
  },
  {
    pass: "Pass P (Por vs Para — Cause)",
    rule: "Cause/reason ('due to a lack of') ALWAYS requires **`por`**, never `para`.",
    wrongWord: "para",
    rightWord: "por",
    accept: ["por"],
    sentences: [
      "El centro cultural cerró sus puertas **para** falta de financiación municipal.",
      "Numerosos jóvenes abandonan el pueblo **para** falta de oportunidades laborales.",
      "La campaña de reciclaje fracasó **para** falta de información clara en el barrio.",
      "El proyecto de intercambio se pospuso **para** falta de coordinación académica.",
      "Muchos estudiantes sufren ansiedad **para** culpa de la presión en redes sociales.",
    ],
  },
  {
    pass: "Pass P (Por vs Para — Purpose)",
    rule: "Purpose/goal before an infinitive ('in order to') requires **`para`**, not `por`.",
    wrongWord: "por",
    rightWord: "para",
    accept: ["para"],
    sentences: [
      "Solicitamos una subvención municipal **por** renovar los ordenadores del aula.",
      "Diseñamos una aplicación juvenil **por** fomentar el intercambio gratuito de libros.",
      "El ayuntamiento invierte fondos verdes **por** ampliar la red de autobuses eléctricos.",
      "Organizamos talleres semanales **por** enseñar verificación crítica de noticias.",
      "Creamos un comité estudiantil **por** reducir el desperdicio en el comedor.",
    ],
  },
  {
    pass: "Pass S (WEIRDO Doubt: dudar que)",
    rule: "`Dudo que` expresses doubt and ALWAYS triggers **subjunctive**: **`resuelva`**.",
    wrongWord: "resuelve",
    rightWord: "resuelva",
    accept: ["resuelva"],
    extraTrap: { word: "resuelvan", feedback: "Subject is singular — use 3rd-person singular **`resuelva`**." },
    sentences: [
      "Dudo que una simple multa **resuelve** el problema del ruido nocturno.",
      "Dudo que la prohibición total **resuelve** el uso responsable de la tecnología.",
      "Dudo que una campaña publicitaria **resuelve** la crisis de vivienda urbana.",
      "Dudo que el teletrabajo aislado **resuelve** las desigualdades regionales.",
      "Dudo que un cambio de logotipo **resuelve** el impacto ambiental de la empresa.",
    ],
  },
];

const HL_TIER3: ProofreadCase[] = [
  {
    pass: "Pass S (C1 Connector: de ahí que + subj.)",
    rule: "`de ahí que` ALWAYS takes the **subjunctive** (`deba`), unlike `por consiguiente` (+ indicative).",
    wrongWord: "debe",
    rightWord: "deba",
    accept: ["deba"],
    extraTrap: { word: "deban", feedback: "Singular subject — use 3rd-person singular **`deba`**." },
    sentences: [
      "La desinformación crece cada día; de ahí que la escuela **debe** enseñar verificación.",
      "El alquiler se ha disparado; de ahí que el municipio **debe** proteger la vivienda social.",
      "La sequía amenaza las cosechas; de ahí que el gobierno **debe** modernizar el riego.",
      "El estrés estudiantil aumenta; de ahí que el centro **debe** reforzar la orientación.",
      "El tráfico contamina el casco antiguo; de ahí que la alcaldía **debe** ampliar el metro.",
    ],
  },
  {
    pass: "Pass S (C1 Connector: de ahí que + subj.)",
    rule: "`de ahí que` ALWAYS takes the **subjunctive**: **`resulte`** (not indicative `resulta`).",
    wrongWord: "resulta",
    rightWord: "resulte",
    accept: ["resulte"],
    sentences: [
      "Las lenguas indígenas pierden hablantes; de ahí que **resulta** vital apoyarlas.",
      "Los bulos distorsionan el debate; de ahí que **resulta** urgente regular los algoritmos.",
      "El plástico daña los mares; de ahí que **resulta** imprescindible reducir envases.",
      "El paro juvenil persiste; de ahí que **resulta** prioritario impulsar la formación dual.",
      "El sedentarismo crece; de ahí que **resulta** esencial fomentar el deporte gratuito.",
    ],
  },
  {
    pass: "Pass S (Type 2 Si-Clause)",
    rule: "NEVER put conditional (`-ría`) after `si`! Type 2 requires **imperfect subjunctive**: **`invirtieran`** (or `invirtiesen`).",
    wrongWord: "invertirían",
    rightWord: "invirtieran",
    accept: ["invirtieran", "invirtiesen"],
    extraTrap: { word: "inviertan", feedback: "`inviertan` is present subjunctive — paired with conditional, use imperfect subjunctive **`invirtieran`**." },
    sentences: [
      "Si las ciudades **invertirían** más en trenes nocturnos, caerían las emisiones.",
      "Si los ministerios **invertirían** en bibliotecas rurales, crecería la igualdad.",
      "Si las empresas **invertirían** en energía solar, reducirían su huella ecológica.",
      "Si los colegios **invertirían** en mediación digital, bajaría el ciberacoso.",
      "Si los ayuntamientos **invertirían** en carriles bici, disminuiría el tráfico.",
    ],
  },
  {
    pass: "Pass S (Type 3 Si-Clause)",
    rule: "Type 3 counterfactual `si`-clause requires pluperfect **subjunctive** **`hubiera`** (or `hubiese`), NEVER conditional `habría`!",
    wrongWord: "habría",
    rightWord: "hubiera",
    accept: ["hubiera", "hubiese"],
    extraTrap: { word: "había", feedback: "`había` is indicative — Type 3 `si`-clauses demand subjunctive **`hubiera`**." },
    sentences: [
      "Si el ayuntamiento **habría** consultado al barrio, se habrían evitado protestas.",
      "Si el comité **habría** actuado antes, el humedal no habría sufrido daños.",
      "Si la empresa **habría** escuchado a sus empleados, habría retenido más talento.",
      "Si el gobierno **habría** prevenido los incendios, se habrían salvado mil hectáreas.",
      "Si el instituto **habría** regulado los móviles antes, habrían mejorado las notas.",
    ],
  },
  {
    pass: "Pass C (Relative Possessive cuyo/a/os/as)",
    rule: "`cuyo/a/os/as` agrees with the **following possessed noun** (`proyectos`, masculine plural) → **`cuyos`**, NOT the owner!",
    wrongWord: "cuya",
    rightWord: "cuyos",
    accept: ["cuyos"],
    extraTrap: { word: "cuyas", feedback: "`proyectos` is masculine plural — use **`cuyos`**, not feminine `cuyas`." },
    sentences: [
      "Apoyamos a una fundación bogotana **cuya** proyectos culturales llegan a mil jóvenes.",
      "Visitamos una cooperativa limeña **cuya** proyectos ecológicos protegen la selva.",
      "Premiaron a una escuela valenciana **cuya** proyectos científicos reducen residuos.",
      "Entrevisté a una arquitecta chilena **cuya** proyectos urbanos ahorran energía.",
      "Conocimos una asociación sevillana **cuya** proyectos sociales integran a mayores.",
    ],
  },
  {
    pass: "Pass S (Hypothetical Aunque + Subjunctive)",
    rule: "Future/hypothetical concession with `aunque` triggers **subjunctive**: `surgir` (`g → j`) → **`surjan`**.",
    wrongWord: "surgen",
    rightWord: "surjan",
    accept: ["surjan"],
    extraTrap: { word: "surgan", feedback: "Orthography slip! `-gir` verbs change `g → j` before `a`: **`surjan`**." },
    sentences: [
      "Aunque **surgen** obstáculos presupuestarios el próximo año, el plan seguirá adelante.",
      "Aunque **surgen** críticas iniciales durante la prueba, el programa demostrará su valor.",
      "Aunque **surgen** dudas técnicas al principio, el profesorado recibirá formación.",
      "Aunque **surgen** retrasos logísticos en invierno, inauguraremos el huerto en abril.",
      "Aunque **surgen** desacuerdos menores mañana, alcanzaremos un consenso ético.",
    ],
  },
  {
    pass: "Pass V (Calque Elimination — Band 10–12)",
    rule: "Eliminate the English calque *hacer una decisión* — idiomatic C1 Spanish uses **`tomar`** (or `adoptar`).",
    wrongWord: "hacer",
    rightWord: "tomar",
    accept: ["tomar", "adoptar"],
    sentences: [
      "El consejo municipal debe **hacer** una decisión valiente sobre el transporte verde.",
      "Los jóvenes necesitan información fiable antes de **hacer** una decisión académica.",
      "Resulta apremiante **hacer** una decisión equilibrada frente a la inteligencia artificial.",
      "La dirección no puede posponer más **hacer** una decisión sobre el comedor escolar.",
      "Escuchar a las familias ayudará a **hacer** una decisión verdaderamente justa.",
    ],
  },
  {
    pass: "Pass V (Calque Elimination — False Friend)",
    rule: "False friend! `soportar` means 'to put up with' — 'to support a campaign/proposal' is **`apoyar`** (or `respaldar`).",
    wrongWord: "soportar",
    rightWord: "apoyar",
    accept: ["apoyar", "respaldar"],
    sentences: [
      "Instamos a todos los vecinos a **soportar** la creación del parque comunitario.",
      "Es vital que las instituciones decidan **soportar** el cine independiente latinoamericano.",
      "La mayoría del alumnado votó por **soportar** la semana de movilidad sostenible.",
      "Conviene **soportar** a los pequeños libreros frente a los gigantes digitales.",
      "Varias universidades acordaron **soportar** las becas para estudiantes rurales.",
    ],
  },
];

// =============================================================================
// EXPORTED DRILLS (5 PROCEDURAL DRILLS COVERING ALL 4 GUIDE SECTIONS)
// =============================================================================

export const drills: Drill[] = [
  // 1. Paper 1 Text-Type Selector
  {
    id: "7-paper1-paper2-skills.p1-text-type-selector",
    topicId: "7-paper1-paper2-skills",
    title: "Paper 1: Select the Optimal Text Type (Criterion C)",
    level: 1,
    ibLevel: "SL",
    guideRef: "paper1-prompt-decoding",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const bank = tier === 1 ? P1_TIER1 : tier === 2 ? P1_TIER2 : P1_TIER3;
      const sc = rng.pick(bank);
      const ctx = rng.pick(sc.contexts);
      const offered = rng.shuffle([sc.optimal.name, sc.acceptable.name, sc.inappropriate.name]);

      const traps: Trap[] = [
        {
          spec: { type: "text", accept: sc.acceptable.accept },
          feedback: `Almost — \`${sc.acceptable.name}\` is only the *acceptable* option (caps Criterion C at ~3–4/6). ${sc.acceptable.whyNot}`,
        },
        {
          spec: { type: "text", accept: sc.inappropriate.accept },
          feedback: `Register/channel mismatch! \`${sc.inappropriate.name}\` is *inappropriate* here (caps Criterion C at 1–2/6). ${sc.inappropriate.whyNot}`,
        },
      ];

      return {
        prompt: `**Paper 1 (${sc.theme}):** Escribe ${sc.audience} sobre **${ctx}** con el propósito de **${sc.purpose}**.\n\nOpciones ofrecidas: \`${offered[0]}\` · \`${offered[1]}\` · \`${offered[2]}\`.\n\nType the single **most appropriate** Spanish text type (without article).`,
        answer: {
          type: "text",
          accept: sc.optimal.accept,
          display: sc.optimal.name,
        },
        traps,
        hint: `Decode T-A-P-R: check Audience (${sc.audience}) + Purpose (${sc.purpose}). Eliminate the channel mismatch first!`,
        solution: [
          `Decode Audience (${sc.audience}) and Purpose (${sc.purpose}).`,
          sc.optimal.why,
          `Criterion C tip: ${sc.registerTip}`,
        ],
      };
    },
  },

  // 2. Paper 2 Reading Synonym-in-Context Matching
  {
    id: "7-paper1-paper2-skills.p2-synonym-context",
    topicId: "7-paper1-paper2-skills",
    title: "Paper 2 Reading: Synonym Matching in Context",
    level: 2,
    ibLevel: "SL",
    guideRef: "paper2-reading-strategies",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const bank = tier === 1 ? SYN_TIER1 : tier === 2 ? SYN_TIER2 : SYN_TIER3;
      const item = rng.pick(bank);
      const rawExtract = rng.pick(item.extracts);
      // Remove bold markers so learner has to locate the word genuinely!
      const cleanExtract = rawExtract.replace(/\*\*/g, "");

      const traps: Trap[] = [
        {
          spec: { type: "text", accept: [item.distractor] },
          feedback: item.distractorWhy,
        },
      ];

      return {
        prompt: `**Paper 2 Reading (Synonym Lock):**\n*«${cleanExtract}»*\n\nCopy the exact Spanish **${item.pos}** in the extract that means **«${item.cue}»**.`,
        answer: {
          type: "text",
          accept: item.accept,
          display: item.target,
        },
        traps,
        hint: `Apply the part-of-speech lock: look strictly for a **${item.pos}** matching «${item.cue}».`,
        solution: [
          `Part-of-speech lock: we need a **${item.pos}** equivalent to «${item.cue}».`,
          `In the extract, **\`${item.target}\`** matches both meaning and grammatical class (avoiding distractor \`${item.distractor}\`).`,
        ],
      };
    },
  },

  // 3. Paper 2 Reading Pronoun-Referent Identification
  {
    id: "7-paper1-paper2-skills.p2-pronoun-referent",
    topicId: "7-paper1-paper2-skills",
    title: "Paper 2 Reading: Pronoun-Referent Identification",
    level: 2,
    ibLevel: "SL",
    guideRef: "paper2-reading-strategies",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const bank = tier === 1 ? REF_TIER1 : tier === 2 ? REF_TIER2 : REF_TIER3;
      const group = rng.pick(bank);
      const c = rng.pick(group.cases);
      // Keep bold ONLY on the target pronoun, strip bold from the antecedent noun so learner solves it!
      const parts = c.sentence.split(`**${group.pronoun}**`);
      const stripped = parts.map((p) => p.replace(/\*\*/g, "")).join(`**${group.pronoun}**`);
      const tier3Note =
        tier === 3 && (group.pronoun === "cuyas" || group.pronoun === "cuyos")
          ? " (name the **owner/antecedent** that precedes the comma, NOT the possessed noun after it)"
          : "";

      const traps: Trap[] = [
        {
          spec: { type: "text", accept: c.distractorAccept },
          feedback: c.distractorWhy,
        },
      ];

      return {
        prompt: `**Paper 2 Reading (Referent Filter):**\n*«${stripped}»*\n\n¿A quién o a qué se refiere **\`${group.pronoun}\`**${tier3Note}? Type the Spanish noun phrase from the text.`,
        answer: {
          type: "text",
          accept: c.accept,
          display: c.answer,
        },
        traps,
        hint: `\`${group.pronoun}\` is a ${group.grammarNote} — filter backward by gender, number, and meaning (do not blindly pick the nearest noun!).`,
        solution: [
          `Check morphology: \`${group.pronoun}\` is a ${group.grammarNote}.`,
          `Eliminate the tempting distractor (\`${c.distractor}\`): ${c.distractorWhy}`,
          `Confirmed referent: **\`${c.answer}\`**.`,
        ],
      };
    },
  },

  // 4. Paper 2 Listening Self-Correction Distractor Decoding
  {
    id: "7-paper1-paper2-skills.p2-listening-distractors",
    topicId: "7-paper1-paper2-skills",
    title: "Paper 2 Listening: Self-Correction Distractors & Regional Lexis",
    level: 2,
    ibLevel: "SL",
    guideRef: "paper2-listening-strategies",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const city = rng.pick(CITIES_LISTEN);
      const pivot = rng.pick(PIVOTS);

      if (tier === 1) {
        if (rng.bool(0.55)) {
          const initial = rng.int(12, 35);
          let finalVal = rng.int(40, 85);
          if (finalVal === initial) finalVal += 10;
          const topics = [
            { unit: "plazas de autobús", event: "la excursión ecológica", ask: "How many bus seats were **finally** booked?" },
            { unit: "voluntarios", event: "la limpieza costera", ask: "How many volunteers **actually** participated?" },
            { unit: "euros", event: "el abono cultural juvenil", ask: "What is the **final** ticket price in euros?" },
            { unit: "asistentes", event: "el taller de cine hispano", ask: "How many attendees came **in the end**?" },
          ];
          const t = rng.pick(topics);
          const traps: Trap[] = [
            {
              spec: { type: "number", value: initial },
              feedback: `Watch out! ${initial} was the early bait before the pivot **«${pivot}»** — always wait for the final figure!`,
            },
          ];
          return {
            prompt: `**Paper 2 Listening (Radio ${city}):**\n*«Al principio anunciamos ${initial} ${t.unit} para ${t.event}; ${pivot}, tras revisar la demanda esta mañana, confirmamos definitivamente ${finalVal}.»*\n\n${t.ask} Type a single number.`,
            answer: { type: "number", value: finalVal, display: String(finalVal) },
            traps,
            hint: `Ignore the initial number after *Al principio* and track the figure after the pivot **«${pivot}»**.`,
            solution: [
              `Initial bait: \`${initial}\` (before the pivot).`,
              `Pivot signal: **«${pivot}»** → confirmed final answer: **${finalVal}**.`,
            ],
          };
        } else {
          const d1Idx = rng.int(0, DAYS.length - 1);
          const d2Idx = (d1Idx + rng.int(1, DAYS.length - 1)) % DAYS.length;
          const d1 = DAYS[d1Idx];
          const d2 = DAYS[d2Idx];
          const events = [
            "el concierto solidario",
            "el debate sobre energía limpia",
            "la proyección del documental",
            "la reunión del club de lectura",
          ];
          const ev = rng.pick(events);
          const traps: Trap[] = [
            {
              spec: { type: "text", accept: [d1, `el ${d1}`] },
              feedback: `Careful! \`${d1}\` was the original plan cancelled after **«${pivot}»**!`,
            },
          ];
          return {
            prompt: `**Paper 2 Listening (Podcast ${city}):**\n*«Aunque al principio reservamos el auditorio para el ${d1}, ${pivot} celebraremos ${ev} el ${d2} por la tarde.»*\n\nOn which **day of the week** (in Spanish, without article) will the event actually take place?`,
            answer: { type: "text", accept: [d2, `el ${d2}`], display: d2 },
            traps,
            hint: `Hold off locking \`${d1}\` — look strictly after the pivot **«${pivot}»**.`,
            solution: [
              `Initial bait day: \`${d1}\` (introduced by *Aunque al principio*).`,
              `After **«${pivot}»**, the confirmed day is **\`${d2}\`**.`,
            ],
          };
        }
      }

      if (tier === 2) {
        if (rng.bool(0.55)) {
          // Double pivot (3 days or 3 numbers)
          const oldN = rng.int(15, 28);
          const midN = rng.int(30, 48);
          const nowN = rng.int(52, 95);
          const scenes = [
            { item: "familias", verb: "reciclan compost", ask: "How many families participate **currently** (*en la actualidad*)?" },
            { item: "estudiantes", verb: "asisten al club de debate", ask: "How many students attend **today** (*hoy en día*)?" },
            { item: "comercios", verb: "aceptan envases reutilizables", ask: "How many local shops participate **currently**?" },
          ];
          const sc = rng.pick(scenes);
          const traps: Trap[] = [
            { spec: { type: "number", value: oldN }, feedback: `${oldN} was the first-year estimate — check the current figure after «${pivot}»!` },
            { spec: { type: "number", value: midN }, feedback: `${midN} was last year's intermediate figure — read past «${pivot}» for today's number!` },
          ];
          return {
            prompt: `**Paper 2 Listening (Track B · ${city}):**\n*«Cuando arrancamos hace tres años calculábamos ${oldN} ${sc.item}. El curso pasado llegamos a ${midN}; ${pivot}, hoy en día ${sc.verb} ${nowN} en todo el distrito.»*\n\n${sc.ask} Type a single number.`,
            answer: { type: "number", value: nowN, display: String(nowN) },
            traps,
            hint: `Code the timeline with arrows: \`${oldN} → ${midN} → ?\` and lock onto *hoy en día*.`,
            solution: [
              `Track the timeline: 3 years ago (\`${oldN}\`) → last year (\`${midN}\`) → pivot **«${pivot}»** + *hoy en día* → **${nowN}**.`,
            ],
          };
        } else {
          // Regional lexical mapping inside authentic listening snippet
          const pair = rng.pick(REGIONAL_PAIRS);
          const askSpain = rng.bool(0.5);
          const traps: Trap[] = [
            {
              spec: { type: "text", accept: [askSpain ? pair.latam : pair.spain] },
              feedback: `That's the word already in the clip! Give its ${askSpain ? "Peninsular Spanish" : "Latin American"} equivalent.`,
            },
          ];
          if (askSpain) {
            return {
              prompt: `**Paper 2 Listening (Regional Variation · ${city}):**\nA Latin American speaker says: *«${pair.sentence}»*\n\nType the standard **Peninsular Spanish** equivalent of **\`${pair.latam}\`** (one word, without article).`,
              answer: { type: "text", accept: [pair.spain, `${pair.spainArt} ${pair.spain}`], display: pair.spain },
              traps,
              hint: `\`${pair.latam}\` means "${pair.meaning}" in Latin America — what word do speakers in Madrid use?`,
              solution: [
                `Latin American \`${pair.latam}\` ("${pair.meaning}") corresponds to Peninsular Spanish **\`${pair.spain}\`**.`,
              ],
            };
          } else {
            const spSentence = pair.sentence.replace(pair.latam, pair.spain);
            return {
              prompt: `**Paper 2 Listening (Regional Variation · Madrid):**\nA Spanish speaker says: *«${spSentence}»*\n\nType the common **Latin American** equivalent of **\`${pair.spain}\`** (one word, without article).`,
              answer: { type: "text", accept: [pair.latam, `${pair.latamArt} ${pair.latam}`], display: pair.latam },
              traps,
              hint: `\`${pair.spain}\` means "${pair.meaning}" in Spain — what common word appears on Latin American IB listening tracks?`,
              solution: [
                `Peninsular \`${pair.spain}\` ("${pair.meaning}") corresponds to Latin American **\`${pair.latam}\`**.`,
              ],
            };
          }
        }
      }

      // Tier 3: Track C multi-step numerical/arithmetic pivot (e.g. doubled then reduced)
      const base = rng.int(4, 15) * 20; // 80..300 in steps of 20
      const loss = rng.int(1, 5) * 15; // 15..75
      const doubled = base * 2;
      const finalTotal = doubled - loss;
      const contexts = [
        { unit: "hectáreas de bosque", verb: "un incendio arrasó", ask: "How many undamaged hectares remain intact today?" },
        { unit: "becas deportivas", verb: "un recorte eliminó", ask: "How many scholarships remain active today?" },
        { unit: "bicicletas públicas", verb: "una avería retiró", ask: "How many public bicycles remain in service today?" },
        { unit: "plazas de biblioteca", verb: "las obras cerraron temporalmente", ask: "How many study seats are currently open?" },
      ];
      const ctx = rng.pick(contexts);
      const traps: Trap[] = [
        {
          spec: { type: "number", value: doubled },
          feedback: `${doubled} was the doubled total before the pivot **«${pivot}»** subtracted ${loss}!`,
        },
        {
          spec: { type: "number", value: base - loss },
          feedback: `Careful! You subtracted ${loss} from the original ${base} instead of the doubled total (${base} × 2 = ${doubled}).`,
        },
      ];

      return {
        prompt: `**Paper 2 Listening (Track C · ${city}):**\n*«El proyecto comenzó con ${base} ${ctx.unit}. Dos años después lograron duplicar esa cifra; ${pivot}, el mes pasado ${ctx.verb} ${loss}.»*\n\n${ctx.ask} Type a single number.`,
        answer: { type: "number", value: finalTotal, display: String(finalTotal) },
        traps,
        hint: `Apply both steps in sequence: first \`duplicar\` (${base} × 2), then subtract ${loss} after «${pivot}».`,
        solution: [
          `Start: \`${base}\` → after *duplicar*: \`${base} × 2 = ${doubled}\`.`,
          `After pivot **«${pivot}»**, subtract \`${loss}\`: \`${doubled} − ${loss} =\` **${finalTotal}**.`,
        ],
      };
    },
  },

  // 5. [HL] 5-Minute Proofreading Sweep (HL Only, Level 3)
  {
    id: "7-paper1-paper2-skills.hl-proofreading-sweep",
    topicId: "7-paper1-paper2-skills",
    title: "[HL] Proofreading Sweep: Tildes, Agreement & Subjunctive",
    level: 3,
    ibLevel: "HL",
    guideRef: "editing-calibracion-hl",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const bank = tier === 1 ? HL_TIER1 : tier === 2 ? HL_TIER2 : HL_TIER3;
      const item = rng.pick(bank);
      const sentence = rng.pick(item.sentences);

      const traps: Trap[] = [
        {
          spec: { type: "text", accept: [item.wrongWord] },
          feedback: `\`${item.wrongWord}\` is the error itself! ${item.rule}`,
        },
      ];
      if (item.extraTrap) {
        traps.push({
          spec: { type: "text", accept: [item.extraTrap.word] },
          feedback: item.extraTrap.feedback,
        });
      }

      return {
        prompt: `**[HL] ${item.pass}:**\n*«${sentence}»*\n\nReplace the bolded erroneous Spanish word (**\`${item.wrongWord}\`**) with the exact corrected single word.`,
        answer: {
          type: "text",
          accept: item.accept,
          display: item.rightWord,
        },
        traps,
        hint: `Apply ${item.pass}: inspect the grammar/accent rule governing \`${item.wrongWord}\` in this clause.`,
        solution: [
          item.rule,
          `Corrected word: **\`${item.rightWord}\`**.`,
        ],
      };
    },
  },
];
