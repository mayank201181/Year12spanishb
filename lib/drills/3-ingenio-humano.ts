import type { Drill } from "./types.ts";
import type { Trap } from "../types.ts";

const CITIES = [
  "Madrid",
  "Barcelona",
  "Ciudad de México",
  "Bogotá",
  "Buenos Aires",
  "Santiago de Chile",
  "Lima",
  "Valencia",
  "Medellín",
  "Montevideo",
] as const;

interface ReflejaItem {
  inf: string;
  presSg: string;
  presPl: string;
  pretSg: string;
  pretPl: string;
  futSg: string;
  futPl: string;
  subjPl: string;
  sgObj: string;
  plObj: string;
  context: string;
}

const REFLEJA_BANK: readonly ReflejaItem[] = [
  {
    inf: "desarrollar",
    presSg: "desarrolla",
    presPl: "desarrollan",
    pretSg: "desarrolló",
    pretPl: "desarrollaron",
    futSg: "desarrollará",
    futPl: "desarrollarán",
    subjPl: "desarrollen",
    sgObj: "una vacuna innovadora",
    plObj: "nuevas vacunas biotecnológicas",
    context: "en el centro de investigación",
  },
  {
    inf: "financiar",
    presSg: "financia",
    presPl: "financian",
    pretSg: "financió",
    pretPl: "financiaron",
    futSg: "financiará",
    futPl: "financiarán",
    subjPl: "financien",
    sgObj: "un proyecto solar público",
    plObj: "varios proyectos de energía limpia",
    context: "con fondos universitarios",
  },
  {
    inf: "prohibir",
    presSg: "prohíbe",
    presPl: "prohíben",
    pretSg: "prohibió",
    pretPl: "prohibieron",
    futSg: "prohibirá",
    futPl: "prohibirán",
    subjPl: "prohíban",
    sgObj: "el plagio automatizado",
    plObj: "las prácticas de vigilancia opaca",
    context: "en los centros educativos",
  },
  {
    inf: "publicar",
    presSg: "publica",
    presPl: "publican",
    pretSg: "publicó",
    pretPl: "publicaron",
    futSg: "publicará",
    futPl: "publicarán",
    subjPl: "publiquen",
    sgObj: "un informe sobre privacidad",
    plObj: "tres informes sobre desinformación",
    context: "en la revista científica",
  },
  {
    inf: "instalar",
    presSg: "instala",
    presPl: "instalan",
    pretSg: "instaló",
    pretPl: "instalaron",
    futSg: "instalará",
    futPl: "instalarán",
    subjPl: "instalen",
    sgObj: "una antena de fibra rural",
    plObj: "cientos de paneles solares",
    context: "para reducir la brecha digital",
  },
  {
    inf: "analizar",
    presSg: "analiza",
    presPl: "analizan",
    pretSg: "analizó",
    pretPl: "analizaron",
    futSg: "analizará",
    futPl: "analizarán",
    subjPl: "analicen",
    sgObj: "una muestra de ADN",
    plObj: "miles de muestras genéticas",
    context: "mediante algoritmos abiertos",
  },
  {
    inf: "diseñar",
    presSg: "diseña",
    presPl: "diseñan",
    pretSg: "diseñó",
    pretPl: "diseñaron",
    futSg: "diseñará",
    futPl: "diseñarán",
    subjPl: "diseñen",
    sgObj: "una aplicación accesible",
    plObj: "dos aplicaciones educativas",
    context: "en el laboratorio de ingeniería",
  },
  {
    inf: "auditar",
    presSg: "audita",
    presPl: "auditan",
    pretSg: "auditó",
    pretPl: "auditaron",
    futSg: "auditará",
    futPl: "auditarán",
    subjPl: "auditen",
    sgObj: "un algoritmo de selección",
    plObj: "los sistemas de recomendación",
    context: "para evitar sesgos lingüísticos",
  },
  {
    inf: "difundir",
    presSg: "difunde",
    presPl: "difunden",
    pretSg: "difundió",
    pretPl: "difundieron",
    futSg: "difundirá",
    futPl: "difundirán",
    subjPl: "difundan",
    sgObj: "un documental independiente",
    plObj: "numerosas películas hispanas",
    context: "en plataformas digitales",
  },
  {
    inf: "aprobar",
    presSg: "aprueba",
    presPl: "aprueban",
    pretSg: "aprobó",
    pretPl: "aprobaron",
    futSg: "aprobará",
    futPl: "aprobarán",
    subjPl: "aprueben",
    sgObj: "una ley de transparencia",
    plObj: "nuevas normas de derechos de autor",
    context: "en el parlamento regional",
  },
];

interface ImpersonalItem {
  inf: string;
  presSg: string;
  presPlWrong: string;
  pretSg: string;
  pretPlWrong: string;
  humanObj: string;
  context: string;
}

const IMPERSONAL_BANK: readonly ImpersonalItem[] = [
  { inf: "entrevistar", presSg: "entrevista", presPlWrong: "entrevistan", pretSg: "entrevistó", pretPlWrong: "entrevistaron", humanObj: "a varias cineastas mexicanas", context: "en el festival cultural" },
  { inf: "premiar", presSg: "premia", presPlWrong: "premian", pretSg: "premió", pretPlWrong: "premiaron", humanObj: "a cinco investigadoras jóvenes", context: "por su patente ecológica" },
  { inf: "contratar", presSg: "contrata", presPlWrong: "contratan", pretSg: "contrató", pretPlWrong: "contrataron", humanObj: "a doce ingenieros de software", context: "en el parque tecnológico" },
  { inf: "invitar", presSg: "invita", presPlWrong: "invitan", pretSg: "invitó", pretPlWrong: "invitaron", humanObj: "a los periodistas verificadores", context: "al foro sobre bulos" },
  { inf: "formar", presSg: "forma", presPlWrong: "forman", pretSg: "formó", pretPlWrong: "formaron", humanObj: "a trescientos docentes rurales", context: "en alfabetización mediática" },
  { inf: "apoyar", presSg: "apoya", presPlWrong: "apoyan", pretSg: "apoyó", pretPlWrong: "apoyaron", humanObj: "a los artistas emergentes", context: "con becas públicas" },
  { inf: "consultar", presSg: "consulta", presPlWrong: "consultan", pretSg: "consultó", pretPlWrong: "consultaron", humanObj: "a expertos en ética digital", context: "antes de aprobar la reforma" },
  { inf: "proteger", presSg: "protege", presPlWrong: "protegen", pretSg: "protegió", pretPlWrong: "protegieron", humanObj: "a los menores en redes", context: "frente al ciberanzuelo" },
];

interface PerifrasticaItem {
  subj: string;
  serPret: string;
  part: string;
  wrongNumPart: string;
  agent: string;
  inf: string;
  genderNumLabel: string;
  irregularBad?: string;
}

const PERIFRASTICA_BANK: readonly PerifrasticaItem[] = [
  { subj: "La vacuna experimental", serPret: "fue", part: "diseñada", wrongNumPart: "diseñadas", agent: "investigadoras del CSIC", inf: "diseñar", genderNumLabel: "femenino singular" },
  { subj: "Las dos plantas solares", serPret: "fueron", part: "inauguradas", wrongNumPart: "inaugurada", agent: "el consorcio chileno", inf: "inaugurar", genderNumLabel: "femenino plural" },
  { subj: "El mural histórico", serPret: "fue", part: "pintado", wrongNumPart: "pintados", agent: "Diego Rivera", inf: "pintar", genderNumLabel: "masculino singular" },
  { subj: "Los telescopios de Atacama", serPret: "fueron", part: "construidos", wrongNumPart: "construido", agent: "equipos internacionales", inf: "construir", genderNumLabel: "masculino plural" },
  { subj: "El guion original", serPret: "fue", part: "escrito", wrongNumPart: "escritos", agent: "una directora española", inf: "escribir", genderNumLabel: "masculino singular", irregularBad: "escribido" },
  { subj: "Las novelas censuradas", serPret: "fueron", part: "escritas", wrongNumPart: "escrita", agent: "autores en el exilio", inf: "escribir", genderNumLabel: "femenino plural", irregularBad: "escribidas" },
  { subj: "La enzima Phi29", serPret: "fue", part: "descubierta", wrongNumPart: "descubiertas", agent: "Margarita Salas", inf: "descubrir", genderNumLabel: "femenino singular", irregularBad: "descubrida" },
  { subj: "Las nuevas patentes", serPret: "fueron", part: "descubiertas", wrongNumPart: "descubierta", agent: "científicas colombianas", inf: "descubrir", genderNumLabel: "femenino plural", irregularBad: "descubridas" },
  { subj: "Los conflictos de privacidad", serPret: "fueron", part: "resueltos", wrongNumPart: "resuelto", agent: "el tribunal europeo", inf: "resolver", genderNumLabel: "masculino plural", irregularBad: "resolvidos" },
  { subj: "La maqueta funicular", serPret: "fue", part: "hecha", wrongNumPart: "hechas", agent: "Antoni Gaudí", inf: "hacer", genderNumLabel: "femenino singular", irregularBad: "hacida" },
  { subj: "Las salas de cine", serPret: "fueron", part: "abiertas", wrongNumPart: "abierta", agent: "la filmoteca municipal", inf: "abrir", genderNumLabel: "femenino plural", irregularBad: "abridas" },
  { subj: "Los servidores públicos", serPret: "fueron", part: "puestos", wrongNumPart: "puesto", agent: "el equipo de ciberseguridad", inf: "poner", genderNumLabel: "masculino plural", irregularBad: "ponidos" },
];

interface VocabEntry {
  es: string;
  accept: string[];
  en: string;
  defEs: string;
  cloze: string;
  hint: string;
  note: string;
}

const VOCAB_T1: readonly VocabEntry[] = [
  { es: "bulo", accept: ["bulo", "el bulo"], en: "fake news hoax", defEs: "noticia falsa difundida deliberadamente en redes", cloze: "Antes de reenviar un audio alarmista, comprueba que no sea un ________ viral.", hint: "Cuatro letras; usado por Maldita.es.", note: "*Bulo* es el equivalente auténtico de *fake news / hoax*." },
  { es: "reseña", accept: ["reseña", "la reseña"], en: "critical review", defEs: "texto que evalúa críticamente una película, libro o exposición", cloze: "Publicó una ________ equilibrada de la última cinta de Cuarón sin destripar el final.", hint: "Lleva *ñ* y sigue el modelo F-A-V-O-R.", note: "*Reseña* = *review* (Mass Media IB text type)." },
  { es: "desenlace", accept: ["desenlace", "el desenlace"], en: "ending / denouement", defEs: "resolución final de una trama cinematográfica o literaria", cloze: "Aunque la fotografía deslumbra, el ________ de la película peca de predecible.", hint: "Sustantivo técnico derivado de *desenlazar*.", note: "*Desenlace* eleva el registro frente al básico *final*." },
  { es: "brecha digital", accept: ["brecha digital", "la brecha digital"], en: "digital divide", defEs: "desigualdad en el acceso a internet y dispositivos tecnológicos", cloze: "Instalar fibra óptica en pueblos andinos ayuda a cerrar la ________.", hint: "Dos palabras: *brecha* + adjetivo.", note: "*Brecha digital* = *digital divide*." },
  { es: "huella digital", accept: ["huella digital", "la huella digital", "rastro digital", "el rastro digital"], en: "digital footprint", defEs: "rastro permanente de datos que dejamos al navegar por internet", cloze: "Conviene cuidar nuestra ________ porque las empresas revisan perfiles públicos.", hint: "Dos palabras: *footprint* en español + *digital*.", note: "*Huella digital* = *digital footprint*." },
  { es: "guion", accept: ["guion", "el guion"], en: "screenplay / script", defEs: "texto con diálogos y escenas de una película o serie", cloze: "La cinta ganó el premio Goya al mejor ________ original por sus diálogos ágiles.", hint: "Según la RAE actual se escribe sin tilde (monosílabo).", note: "*Guion* = *screenplay / script*." },
  { es: "banda sonora", accept: ["banda sonora", "la banda sonora"], en: "soundtrack", defEs: "música compuesta para acompañar una obra audiovisual", cloze: "La emotiva ________ intensifica la tensión de cada escena del laberinto.", hint: "Dos palabras: *banda* + adjetivo de sonido.", note: "*Banda sonora* = *soundtrack*." },
  { es: "desinformación", accept: ["desinformación", "la desinformación"], en: "disinformation", defEs: "difusión intencionada de información falsa para engañar al público", cloze: "Las plataformas colaborativas luchan a diario contra la ________ electoral.", hint: "Lleva tilde en la *-ó* final.", note: "*Desinformación* = *disinformation*." },
  { es: "contrastar", accept: ["contrastar", "contrastar las fuentes"], en: "to cross-check sources", defEs: "verbo infinitivo que significa comprobar una noticia en varias fuentes fiables", cloze: "Un periodista riguroso siempre debe ________ las fuentes antes de publicar.", hint: "Infinitivo de diez letras que empieza por *con-*.", note: "*Contrastar las fuentes* = *to cross-check / verify sources*." },
  { es: "patente", accept: ["patente", "la patente"], en: "patent", defEs: "título legal que protege una invención científica o tecnológica", cloze: "La enzima descubierta por Margarita Salas generó la ________ más rentable del CSIC.", hint: "Sustantivo femenino de siete letras.", note: "*La patente* = *patent*." },
  { es: "hallazgo", accept: ["hallazgo", "el hallazgo"], en: "scientific finding / discovery", defEs: "descubrimiento científico o arqueológico de gran valor", cloze: "La revista médica destacó el ________ de un biomarcador temprano.", hint: "Deriva del verbo *hallar* ('to find').", note: "*Hallazgo* eleva el registro frente al básico *descubrimiento*." },
  { es: "ciberanzuelo", accept: ["ciberanzuelo", "el ciberanzuelo"], en: "clickbait", defEs: "titular sensacionalista pensado solo para conseguir clics", cloze: "Ese titular exagerado es puro ________: el artículo no demuestra nada nuevo.", hint: "*ciber-* + *anzuelo* (recomendado por FundéuRAE).", note: "*Ciberanzuelo* = *clickbait*." },
  { es: "muralismo", accept: ["muralismo", "el muralismo"], en: "muralism", defEs: "movimiento artístico mexicano que llevó la pintura histórica a muros públicos", cloze: "Diego Rivera impulsó el ________ para acercar la historia nacional al pueblo.", hint: "Deriva de *mural* + *-ismo*.", note: "*Muralismo* = movimiento pictórico público mexicano." },
  { es: "autorretrato", accept: ["autorretrato", "el autorretrato"], en: "self-portrait", defEs: "pintura en la que el artista se representa a sí mismo", cloze: "Frida Kahlo convirtió el ________ en un espacio de memoria y resistencia.", hint: "*auto-* + *retrato* (una sola palabra).", note: "*Autorretrato* = *self-portrait*." },
];

const VOCAB_T2: readonly VocabEntry[] = [
  { es: "cámara de eco", accept: ["cámara de eco", "la cámara de eco"], en: "echo chamber", defEs: "entorno algorítmico donde solo vemos opiniones que confirman las nuestras", cloze: "Los algoritmos de recomendación encierran al usuario en una ________ polarizada.", hint: "Tres palabras; lleva tilde en *cámara*.", note: "*Cámara de eco* = *echo chamber*." },
  { es: "alfabetización mediática", accept: ["alfabetización mediática", "la alfabetización mediática"], en: "media literacy", defEs: "capacidad crítica para analizar, evaluar y verificar mensajes de los medios", cloze: "Los colegios incorporan talleres de ________ para combatir los bulos.", hint: "Dos palabras: *alfabetización* + *mediática* (con tilde).", note: "*Alfabetización mediática* = *media literacy*." },
  { es: "obsolescencia programada", accept: ["obsolescencia programada", "la obsolescencia programada"], en: "planned obsolescence", defEs: "diseño deliberado de aparatos para que fallen pronto y se compren otros", cloze: "La ________ multiplica los residuos electrónicos y agota minerales escasos.", hint: "Dos palabras: empieza por *obsolescencia*.", note: "*Obsolescencia programada* = *planned obsolescence*." },
  { es: "puesta en escena", accept: ["puesta en escena", "la puesta en escena"], en: "staging / mise-en-scène", defEs: "disposición visual, decorados y dirección de actores en cine o teatro", cloze: "En su reseña elogió la cuidada ________ y el simbolismo cromático de Almodóvar.", hint: "Tres palabras: *puesta en...*", note: "*Puesta en escena* = *mise-en-scène / staging*." },
  { es: "sesgo de confirmación", accept: ["sesgo de confirmación", "el sesgo de confirmación"], en: "confirmation bias", defEs: "tendencia psicológica a creer solo las noticias que coinciden con nuestras ideas", cloze: "El ________ nos lleva a compartir titulares falsos sin verificarlos.", hint: "Tres palabras: *sesgo de...* (con tilde en *-ón*).", note: "*Sesgo de confirmación* = *confirmation bias*." },
  { es: "biomímesis", accept: ["biomímesis", "la biomímesis"], en: "biomimicry", defEs: "principio de ingeniería que imita estructuras eficientes de la naturaleza", cloze: "Gaudí aplicó la ________ al diseñar columnas inspiradas en troncos de árboles.", hint: "*bio-* + *mímesis* (lleva tilde en la primera *í*).", note: "*Biomímesis* = *biomimicry*." },
  { es: "periodismo ciudadano", accept: ["periodismo ciudadano", "el periodismo ciudadano"], en: "citizen journalism", defEs: "cobertura informativa realizada directamente por testigos mediante móviles", cloze: "El ________ da voz a comunidades ignoradas, aunque carece a veces de verificación.", hint: "Dos palabras: *periodismo* + *ciudadano*.", note: "*Periodismo ciudadano* = *citizen journalism*." },
  { es: "basura electrónica", accept: ["basura electrónica", "la basura electrónica", "residuos electrónicos", "los residuos electrónicos"], en: "e-waste", defEs: "desechos contaminantes procedentes de teléfonos y ordenadores descartados", cloze: "Reparar dispositivos antiguos reduce drásticamente las toneladas de ________.", hint: "Dos palabras: *basura* (o *residuos*) + *electrónica/os*.", note: "*Basura electrónica / residuos electrónicos* = *e-waste*." },
  { es: "alegoría", accept: ["alegoría", "la alegoría"], en: "allegory", defEs: "obra simbólica cuyos personajes fantásticos representan realidades políticas o morales", cloze: "Del Toro concibió el laberinto como una ________ de la resistencia frente a la dictadura.", hint: "Lleva tilde en la *í* (hiato).", note: "*Alegoría* = *allegory*." },
  { es: "prensa escrita", accept: ["prensa escrita", "la prensa escrita"], en: "print press", defEs: "periódicos y revistas publicados tradicionalmente en papel", cloze: "Pese al auge digital, la ________ mantiene prestigio en sus ediciones dominicales.", hint: "Dos palabras: *prensa* + participio de *escribir*.", note: "*Prensa escrita* = *print press*." },
  { es: "automatización", accept: ["automatización", "la automatización"], en: "automation", defEs: "sustitución de tareas humanas por máquinas o programas informáticos", cloze: "La ________ industrial exige programas públicos de recualificación laboral.", hint: "Sustantivo terminado en *-ción* con tilde.", note: "*Automatización* = *automation*." },
  { es: "verificación de datos", accept: ["verificación de datos", "la verificación de datos"], en: "fact-checking", defEs: "comprobación rigurosa de declaraciones y noticias por medios especializados", cloze: "Agencias como Chequeado lideran la ________ en América Latina.", hint: "Tres palabras: *verificación de...*", note: "*Verificación de datos* = *fact-checking*." },
];

const VOCAB_T3: readonly VocabEntry[] = [
  { es: "sesgo algorítmico", accept: ["sesgo algorítmico", "el sesgo algorítmico"], en: "algorithmic bias", defEs: "prejuicio sistemático reproducido por la IA a partir de datos desequilibrados", cloze: "Auditar los corpus en español resulta esencial para frenar el ________.", hint: "Dos palabras; lleva tilde en *algorítmico*.", note: "*Sesgo algorítmico* = *algorithmic bias* (HL)." },
  { es: "derechos de autor", accept: ["derechos de autor", "los derechos de autor", "propiedad intelectual", "la propiedad intelectual"], en: "copyright", defEs: "protección legal que garantiza el reconocimiento y pago a los creadores", cloze: "Entrenar modelos con novelas sin permiso vulnera directamente los ________.", hint: "Tres palabras: *derechos de...* (o *propiedad intelectual*).", note: "*Derechos de autor / propiedad intelectual* = *copyright* (HL)." },
  { es: "autocensura", accept: ["autocensura", "la autocensura"], en: "self-censorship", defEs: "limitación voluntaria de la propia expresión por miedo a represalias o cancelación", cloze: "El temor al acoso en redes fomenta la ________ entre columnistas jóvenes.", hint: "*auto-* + *censura* (una sola palabra).", note: "*Autocensura* = *self-censorship* (HL)." },
  { es: "posverdad", accept: ["posverdad", "la posverdad"], en: "post-truth", defEs: "contexto donde las emociones personales pesan más que los hechos objetivos", cloze: "En la era de la ________, la indignación viral eclipsa las pruebas científicas.", hint: "Prefijo *pos-* (sin *t*, norma RAE) + *verdad*.", note: "*Posverdad* = *post-truth* (HL)." },
  { es: "eufemismo", accept: ["eufemismo", "el eufemismo"], en: "euphemism", defEs: "expresión suave empleada para disimular una realidad dura o polémica", cloze: "Llamar «reajuste de plantilla» a cuatrocientos despidos es un ________ corporativo.", hint: "Empieza por *eu-* (del griego 'hablar bien').", note: "*Eufemismo* = *euphemism* (HL framing device)." },
  { es: "nominalización", accept: ["nominalización", "la nominalización"], en: "nominalisation", defEs: "recurso C1 que transforma verbos o cláusulas en sustantivos abstractos precisos", cloze: "Emplear la ________ (ej.: «la proliferación de bulos») eleva el registro académico.", hint: "Deriva de *nominal* + *-ización* (con tilde).", note: "*Nominalización* eleva la concisión en Criterio A (HL)." },
  { es: "moderación opaca", accept: ["moderación opaca", "la moderación opaca"], en: "opaque moderation", defEs: "restricción algorítmica del alcance de contenidos sin criterios transparentes", cloze: "Numerosos artistas denuncian la ________ que oculta obras políticas sin explicación.", hint: "Dos palabras: *moderación* + adjetivo femenino de *opaco*.", note: "*Moderación opaca* = *opaque algorithmic moderation / shadow-banning* (HL)." },
  { es: "antífrasis", accept: ["antífrasis", "la antífrasis"], en: "antiphrasis (ironic praise)", defEs: "figura retórica irónica que expresa exactamente lo contrario de lo que dice literalmente", cloze: "Decir «¡qué brillante progreso!» ante despidos masivos es un ejemplo de ________.", hint: "Lleva tilde en la primera *í*.", note: "*Antífrasis* = figura central de la ironía mordaz (HL)." },
  { es: "trazabilidad", accept: ["trazabilidad", "la trazabilidad"], en: "traceability", defEs: "capacidad de rastrear el origen de los datos o el proceso creativo de una obra", cloze: "Los jurados exigen ________ tecnológica para distinguir el arte humano del sintético.", hint: "Deriva de *traza* ('trace') + *-bilidad*.", note: "*Trazabilidad* = *traceability* (HL AI governance)." },
  { es: "precariedad", accept: ["precariedad", "la precariedad"], en: "precarity / job insecurity", defEs: "inestabilidad laboral y económica que afecta a jóvenes creadores y traductores", cloze: "Sustituir traductores humanos por programas gratuitos agrava la ________ cultural.", hint: "Sustantivo derivado de *precario*.", note: "*Precariedad laboral/creativa* = léxico C1 clave (HL)." },
  { es: "homogeneización", accept: ["homogeneización", "la homogeneización"], en: "homogenisation", defEs: "proceso por el cual estilos y dialectos diversos se vuelven uniformes", cloze: "El algoritmo global puede provocar la ________ estética de la música latina.", hint: "Deriva de *homogéneo* + *-ización* (con tilde en *-ón*).", note: "*Homogeneización cultural* = debate clave de *streaming* (HL)." },
  { es: "entradilla", accept: ["entradilla", "la entradilla"], en: "article lead / standfirst", defEs: "párrafo breve inicial bajo el titular que resume y engancha al lector", cloze: "Un buen artículo periodístico incluye titular, firma y una ________ llamativa.", hint: "Diminutivo periodístico derivado de *entrada*.", note: "*Entradilla* = *lead / standfirst* en prensa en español." },
];

interface TextTypeScenario {
  type: string;
  accept: string[];
  role: string;
  audience: string;
  purpose: string;
  clue: string;
  voice: string;
  tier: 1 | 2 | 3;
}

const TEXT_TYPE_SCENARIOS: readonly TextTypeScenario[] = [
  // Tier 1 core distinctions
  { type: "reseña", accept: ["reseña", "la reseña", "una reseña"], role: "colaborador de la revista cultural", audience: "lectores amantes del cine hispano", purpose: "evaluar críticamente una película nueva de Almodóvar sin destripar el final", clue: "incluye ficha técnica, sinopsis breve, crítica técnica y puntuación", voice: "crítica semi-formal equilibrada", tier: 1 },
  { type: "reseña", accept: ["reseña", "la reseña", "una reseña"], role: "estudiante aficionado al arte", audience: "compañeros del instituto", purpose: "valorar una exposición de murales mexicanos y recomendar si merece la pena visitarla", clue: "combina valoración estética, objeción matizada y veredicto final", voice: "evaluativa y matizada", tier: 1 },
  { type: "blog", accept: ["blog", "el blog", "un blog", "entrada de blog"], role: "joven apasionado por la música latina", audience: "seguidores en internet de tu misma edad", purpose: "compartir tus impresiones personales sobre un festival e invitar a comentar", clue: "usa tono cercano en 1.ª persona, #etiquetas y pregunta final a los lectores", voice: "yo → tú / vosotros, interactiva", tier: 1 },
  { type: "blog", accept: ["blog", "el blog", "un blog", "entrada de blog"], role: "estudiante que asistió a una feria tecnológica", audience: "otros jóvenes hispanohablantes en línea", purpose: "contar tu experiencia personal con un robot educativo y abrir debate digital", clue: "lleva apodo/fecha, preguntas directas al lector e invitación a dejar comentarios", voice: "cercana y conversacional", tier: 1 },
  { type: "editorial", accept: ["editorial", "el editorial", "un editorial"], role: "consejo de redacción del periódico estudiantil", audience: "toda la comunidad escolar y familias", purpose: "fijar la postura oficial del medio sobre la prohibición de móviles en clase", clue: "carece de firma individual y usa la voz institucional «nosotros»", voice: "institucional «nosotros», formal y persuasiva", tier: 1 },
  { type: "editorial", accept: ["editorial", "el editorial", "un editorial"], role: "equipo directivo de un diario regional", audience: "ciudadanía adulta informada", purpose: "expresar la posición oficial del periódico ante una ley de regulación de IA", clue: "representa la línea del medio sin firma personal y cierra con una exhortación cívica", voice: "institucional «nosotros»", tier: 1 },
  { type: "entrevista", accept: ["entrevista", "la entrevista", "una entrevista"], role: "periodista de una revista científica juvenil", audience: "lectores interesados en biotecnología", purpose: "presentar las declaraciones directas de una investigadora española sobre vacunas", clue: "abre con breve biografía y alterna turnos de preguntas y respuestas (P: / R:)", voice: "diálogo directo entrevistador–invitada", tier: 1 },
  { type: "entrevista", accept: ["entrevista", "la entrevista", "una entrevista"], role: "redactor cultural", audience: "público del festival de cine", purpose: "dar voz directa a un guionista mexicano sobre cómo crea sus personajes", clue: "incluye titular con cita textual y preguntas enlazadas con respuestas", voice: "turnos alternos P / R", tier: 1 },
  { type: "artículo", accept: ["artículo", "el artículo", "un artículo", "artículo periodístico"], role: "corresponsal de ciencia y sociedad", audience: "lectores generales de un periódico digital", purpose: "informar y analizar con datos objetivos el crecimiento de la energía solar en Atacama", clue: "lleva titular, entradilla, firma del autor («Por...») y subtítulos temáticos", voice: "3.ª persona informativa semi-formal", tier: 1 },
  { type: "artículo", accept: ["artículo", "el artículo", "un artículo", "artículo periodístico"], role: "periodista especializado en redes", audience: "público amplio de un semanario", purpose: "explicar cómo operan las agencias de verificación de bulos con cifras y testimonios", clue: "estructura periodística firmada con entradilla y citas de expertos", voice: "analítica e informativa", tier: 1 },
  // Tier 2 nuanced / borderline Paper 1 traps
  { type: "discurso", accept: ["discurso", "el discurso", "un discurso"], role: "representante estudiantil", audience: "profesores y alumnos reunidos en el salón de actos", purpose: "persuadir en vivo sobre la importancia de la alfabetización mediática", clue: "emplea vocativo inicial, preguntas retóricas, tríadas y agradecimiento final", voice: "oral-persuasiva ante auditorio presencial", tier: 2 },
  { type: "discurso", accept: ["discurso", "el discurso", "un discurso"], role: "joven innovador invitado a una conferencia", audience: "asistentes presenciales de un foro iberoamericano", purpose: "inspirar al auditorio a usar la inteligencia artificial con ética humana", clue: "se dirige en directo al público presente con ritmo retórico apelativo", voice: "oral formal/semi-formal directa", tier: 2 },
  { type: "informe", accept: ["informe", "el informe", "un informe"], role: "coordinador de tecnología escolar", audience: "la dirección del colegio", purpose: "presentar los hallazgos de una encuesta sobre brecha digital y recomendar mejoras", clue: "usa encabezados numerados, tono objetivo impersonal y sección de recomendaciones", voice: "profesional, objetiva e impersonal", tier: 2 },
  { type: "propuesta", accept: ["propuesta", "la propuesta", "una propuesta"], role: "comité juvenil de cultura", audience: "el concejal de juventud del ayuntamiento", purpose: "solicitar financiación para un taller municipal de cine y verificación de datos", clue: "detalla objetivo, justificación, plan de acción y beneficios esperados", voice: "profesional persuasiva dirigida a una autoridad", tier: 2 },
  { type: "reseña", accept: ["reseña", "la reseña", "una reseña"], role: "crítico musical del boletín escolar", audience: "estudiantes aficionados a la música urbana", purpose: "analizar el último álbum de fusión flamenca sopesando aciertos y debilidades", clue: "evalúa producción, letras y coherencia artística con valoración final", voice: "crítica argumentada semi-formal", tier: 2 },
  { type: "editorial", accept: ["editorial", "el editorial", "un editorial"], role: "redacción de una revista universitaria", audience: "comunidad académica hispanohablante", purpose: "condenar institucionalmente el recorte de becas artísticas sustituido por software", clue: "sin firma personal, adopta «desde esta redacción consideramos»", voice: "institucional persuasiva", tier: 2 },
  { type: "artículo", accept: ["artículo", "el artículo", "un artículo", "artículo de opinión"], role: "columnista cultural con firma propia", audience: "lectores adultos de un periódico nacional", purpose: "analizar críticamente el impacto del streaming en las salas de cine locales", clue: "aparece firmado por su autor con titular llamativo y subtítulos", voice: "analítica con firma individual", tier: 2 },
  { type: "blog", accept: ["blog", "el blog", "un blog", "entrada de blog"], role: "aficionado a la arquitectura sostenible", audience: "lectores digitales curiosos", purpose: "narrar tu visita a La Sagrada Família y pedir recomendaciones de otros edificios", clue: "tono cercano en primera persona con enlace interactivo y #etiquetas", voice: "personal interactiva en línea", tier: 2 },
];

const TOPIC_HOOKS = [
  "en la prensa juvenil de",
  "para un proyecto cultural de",
  "en el marco de la semana digital de",
  "para la plataforma educativa de",
] as const;

interface ConnectorItem {
  prompt: string;
  answer: string[];
  display: string;
  traps: Array<{ accept: string[]; fb: string }>;
  rule: string;
  hint: string;
  tier: 1 | 2 | 3;
}

const CONNECTOR_ITEMS: readonly ConnectorItem[] = [
  // Tier 1: core contrast/cause/purpose connectors
  { prompt: "Las redes difunden alertas en segundos; ________ (however, formal 2 palabras), también multiplican los bulos.", answer: ["sin embargo", "no obstante"], display: "sin embargo", traps: [{ accept: ["pero"], fb: "Entre punto y coma y coma en registro B2–C1, usa un conector formal de dos palabras como **sin embargo** o **no obstante**." }], rule: "*Sin embargo* / *no obstante* articulan el contraste formal entre ventajas y riesgos.", hint: "Conector adversativo de dos palabras (*sin...* o *no...*).", tier: 1 },
  { prompt: "________ (Given that, 2 palabras) muchos rurales carecen de fibra óptica, la brecha educativa persiste.", answer: ["Dado que", "dado que", "Puesto que", "puesto que"], display: "Dado que", traps: [{ accept: ["Porque", "porque"], fb: "Al inicio de una oración argumentativa B2–C1, emplea **Dado que** o **Puesto que**." }], rule: "*Dado que* / *Puesto que* introducen causas formales al comienzo de la frase.", hint: "Dos palabras equivalentes a *since / given that* (*D... que* o *P... que*).", tier: 1 },
  { prompt: "El algoritmo prioriza la indignación; ________ (consequently, 2 palabras), los bulos se vuelven virales.", answer: ["por consiguiente", "por tanto", "por ello"], display: "por consiguiente", traps: [{ accept: ["así"], fb: "Usa un conector consecutivo formal de dos palabras: **por consiguiente** o **por tanto**." }], rule: "*Por consiguiente* / *por tanto* expresan consecuencia lógica en ensayos formales.", hint: "Conector formal de consecuencia de dos palabras (*por...*).", tier: 1 },
  { prompt: "Invertimos en talleres escolares ________ (so that, 2 palabras) los jóvenes contrasten las fuentes.", answer: ["para que", "a fin de que"], display: "para que", traps: [{ accept: ["porque"], fb: "Aquí se expresa finalidad (con subjuntivo *contrasten*), no causa: **para que**." }], rule: "*Para que* (ESCAPA) introduce finalidad y exige siempre subjuntivo.", hint: "Conector de finalidad de la regla ESCAPA (dos palabras).", tier: 1 },
  { prompt: "________ (Although, 1 palabra) la prensa impresa vende menos ejemplares, mantiene un alto rigor editorial.", answer: ["Aunque", "aunque"], display: "Aunque", traps: [{ accept: ["Pero", "pero"], fb: "Para abrir una cláusula concesiva al inicio de frase se emplea **Aunque**." }], rule: "*Aunque* + indicativo concede un hecho real conocido.", hint: "Conjunción concesiva de una palabra.", tier: 1 },
  { prompt: "La automatización reduce costes; ________ (nevertheless, 2 palabras: *no...*), amenaza empleos creativos.", answer: ["no obstante"], display: "no obstante", traps: [{ accept: ["sin embargo"], fb: "Buen sentido, pero la pista pide específicamente el conector que empieza por *no...*: **no obstante**." }], rule: "*No obstante* eleva la cohesión argumentativa de nivel B2–C1.", hint: "Dos palabras: *no* + *obstante*.", tier: 1 },
  { prompt: "La reseña elogia la fotografía; ________ (likewise / furthermore, 1 palabra formal), destaca la banda sonora.", answer: ["asimismo", "además"], display: "asimismo", traps: [{ accept: ["también"], fb: "Para elevar el registro B2–C1 al añadir argumentos, usa **asimismo** o **además**." }], rule: "*Asimismo* suma argumentos con elegancia académica.", hint: "Una sola palabra formal que empieza por *a-*.", tier: 1 },
  { prompt: "________ (Despite the fact that, 3 palabras) las alertas existen, pocos usuarios leen la noticia entera.", answer: ["A pesar de que", "a pesar de que"], display: "A pesar de que", traps: [{ accept: ["A pesar de", "a pesar de"], fb: "Delante de un verbo conjugado (*existen*), falta *que*: **A pesar de que**." }], rule: "*A pesar de* + sustantivo/infinitivo, pero *A pesar de que* + verbo conjugado.", hint: "Tres palabras + *que* antes de verbo conjugado.", tier: 1 },
  // Tier 2: mood & verb conjugation with Theme 3 triggers
  { prompt: "Conjuga en subjuntivo: «Es imprescindible que las plataformas ________ (proteger) los datos de menores.»", answer: ["protejan"], display: "protejan", traps: [{ accept: ["protegen"], fb: "*Es imprescindible que* (WEIRDO) exige subjuntivo: **protejan**." }, { accept: ["protegerán", "protegieron"], fb: "Tras *es imprescindible que* debes usar presente de subjuntivo con cambio ortográfico *g → j*: **protejan**." }], rule: "Expresión impersonal valorativa + subjuntivo con cambio ortográfico *-ger → -ja-*.", hint: "Presente de subjuntivo de *proteger* (recuerda *g → j*).", tier: 2 },
  { prompt: "Conjuga en subjuntivo: «Instalamos fibra rural para que todos los alumnos ________ (tener) igualdad digital.»", answer: ["tengan"], display: "tengan", traps: [{ accept: ["tienen"], fb: "*Para que* (ESCAPA) siempre exige subjuntivo: **tengan**." }], rule: "*Para que* + presente de subjuntivo (raíz *teng-*).", hint: "Parte de *yo tengo* → 3.ª persona plural subjuntivo.", tier: 2 },
  { prompt: "Conjuga en subjuntivo: «Cabe lamentar que el algoritmo ________ (reforzar) los prejuicios culturales.»", answer: ["refuerce"], display: "refuerce", traps: [{ accept: ["refuerza"], fb: "*Cabe lamentar que* (WEIRDO) exige subjuntivo: **refuerce**." }], rule: "Diptongación *o → ue* + cambio ortográfico *z → c* ante *-e*: **refuerce**.", hint: "*Reforzar* diptonga (*o → ue*) y cambia *z → c* ante *-e*.", tier: 2 },
  { prompt: "Conjuga en subjuntivo: «Sorprende que la película ________ (lograr) tanta emoción con un presupuesto mínimo.»", answer: ["logre"], display: "logre", traps: [{ accept: ["logra"], fb: "*Sorprende que* (emoción, WEIRDO) exige subjuntivo: **logre**." }], rule: "Los verbos de reacción emocional activan siempre el subjuntivo con cambio de sujeto.", hint: "3.ª persona singular presente de subjuntivo de *lograr*.", tier: 2 },
  { prompt: "Conjuga en subjuntivo: «Urge que los gobiernos ________ (reducir) la obsolescencia programada por ley.»", answer: ["reduzcan"], display: "reduzcan", traps: [{ accept: ["reducen"], fb: "*Urge que* exige subjuntivo: **reduzcan**." }], rule: "Verbo en *-ucir* toma raíz *-zc-* (*reduzco* → **reduzcan**).", hint: "Forma el subjuntivo desde *yo reduzco*.", tier: 2 },
  { prompt: "Conjuga en subjuntivo: «Dudo que los ciberanzuelos ________ (desaparecer) sin regulación publicitaria.»", answer: ["desaparezcan"], display: "desaparezcan", traps: [{ accept: ["desaparecen"], fb: "*Dudar que* (duda, WEIRDO) exige subjuntivo: **desaparezcan**." }], rule: "Verbo en *-ecer* toma raíz *-zc-* (*desaparezco* → **desaparezcan**).", hint: "Forma el subjuntivo desde *yo desaparezco*.", tier: 2 },
  { prompt: "Conjuga en subjuntivo: «Conviene que cada lector ________ (contrastar) la noticia antes de reenviarla.»", answer: ["contraste"], display: "contraste", traps: [{ accept: ["contrasta"], fb: "*Conviene que* (recomendación impersonal) exige subjuntivo: **contraste**." }], rule: "*Conviene que* + presente de subjuntivo (3.ª sing. de *contrastar*).", hint: "Verbo regular en *-ar* → terminación *-e*.", tier: 2 },
  { prompt: "Conjuga en subjuntivo: «No creo que un robot ________ (poder) sustituir la sensibilidad de Frida Kahlo.»", answer: ["pueda"], display: "pueda", traps: [{ accept: ["puede"], fb: "*No creer que* expresa duda/negación y exige subjuntivo: **pueda**." }], rule: "*No creer que* + subjuntivo (*poder* diptonga *o → ue* → **pueda**).", hint: "3.ª persona singular presente de subjuntivo de *poder*.", tier: 2 },
  // Tier 3: C1 HL frames (de ahí que, lejos de, si bien, aun cuando, si-clauses)
  { prompt: "[HL] Conjuga tras **de ahí que**: «Los corpus en español son escasos; de ahí que ________ (ser) vital financiar modelos abiertos.»", answer: ["sea"], display: "sea", traps: [{ accept: ["es"], fb: "**De ahí que** rige SIEMPRE subjuntivo: **sea**." }], rule: "*De ahí que* + subjuntivo (regla fija C1).", hint: "Presente de subjuntivo irregular de *ser*.", tier: 3 },
  { prompt: "[HL] Conjuga tras **de ahí que**: «Las plataformas ocultan sus criterios; de ahí que ________ (convenir) exigir auditorías.»", answer: ["convenga"], display: "convenga", traps: [{ accept: ["conviene"], fb: "**De ahí que** exige subjuntivo: **convenga**." }], rule: "*Convenir* sigue el modelo de *venir* (*venga* → **convenga**).", hint: "Compuesto de *venir* en 3.ª sing. subjuntivo.", tier: 3 },
  { prompt: "[HL] Conjuga tras **de ahí que**: «Se vulneran derechos de autor; de ahí que los ilustradores ________ (exigir) compensación.»", answer: ["exijan"], display: "exijan", traps: [{ accept: ["exigen"], fb: "**De ahí que** exige subjuntivo: **exijan**." }, { accept: ["exigan"], fb: "Cambio ortográfico *g → j* ante *-a*: **exijan**." }], rule: "*De ahí que* + subjuntivo con cambio *g → j*.", hint: "3.ª persona plural subjuntivo de *exigir* (*g → j*).", tier: 3 },
  { prompt: "[HL] Completa la refutación C1 (2 palabras): «________ (Far from) democratizar el cine, los algoritmos concentran la audiencia.»", answer: ["Lejos de", "lejos de"], display: "Lejos de", traps: [{ accept: ["A pesar de", "a pesar de"], fb: "La traducción exacta de *far from + -ing* es **Lejos de** + infinitivo." }], rule: "*Lejos de + infinitivo* refuta con contundencia un mito tecnológico.", hint: "Dos palabras que empiezan por *L... de*.", tier: 3 },
  { prompt: "[HL] Completa el relativo posesivo: «Censuraron un documental ________ dirección artística denunciaba la vigilancia.»", answer: ["cuya"], display: "cuya", traps: [{ accept: ["cuyo"], fb: "Concuerda con el sustantivo poseído (*la dirección artística*, femenino singular): **cuya**." }, { accept: ["que su"], fb: "*Que su* es un error coloquial penalizado; usa **cuya**." }], rule: "*Cuyo/a/os/as* concuerda con el sustantivo que le sigue inmediatamente.", hint: "Relativo posesivo concordado con *dirección artística* (fem. sing.).", tier: 3 },
  { prompt: "[HL] Completa el relativo posesivo: «Evaluamos una red ________ algoritmos amplificaban la polarización.»", answer: ["cuyos"], display: "cuyos", traps: [{ accept: ["cuya"], fb: "Concuerda con *algoritmos* (masculino plural), NO con *red*: **cuyos**." }], rule: "*Cuyos* concuerda en masculino plural con *algoritmos*.", hint: "Relativo posesivo concordado con *algoritmos* (masc. pl.).", tier: 3 },
  { prompt: "[HL] Condicional tipo 2 (imperfecto subjuntivo `-ra`): «Si las empresas ________ (auditar) sus modelos, habría menos sesgo.»", answer: ["auditaran", "auditasen"], display: "auditaran", traps: [{ accept: ["auditan", "auditarán"], fb: "En condicional hipotética de tipo 2, tras *si* se exige imperfecto de subjuntivo (**auditaran**), no indicativo." }], rule: "Si-clause tipo 2: *Si + imperfecto de subjuntivo → condicional simple*.", hint: "3.ª persona plural imperfecto de subjuntivo de *auditar*.", tier: 3 },
  { prompt: "[HL] Condicional tipo 3 (pluscuamperfecto subjuntivo `-ra`): «Si los medios ________ (verificar) la foto, no habría circulado el bulo.»", answer: ["hubieran verificado", "hubiesen verificado"], display: "hubieran verificado", traps: [{ accept: ["habrían verificado"], fb: "Tras *si* nunca va condicional; usa pluscuamperfecto de subjuntivo: **hubieran verificado**." }], rule: "Si-clause tipo 3: *Si + hubieran + participio → condicional compuesto*.", hint: "Dos palabras: *hubieran* + participio de *verificar*.", tier: 3 },
];

const DEBATE_TAGS = [
  "[Foro de Ética Digital]",
  "[Ensayo Prueba 1 — IA y Cultura]",
  "[Columna de Opinión — Medios]",
  "[Debate Oral Individual — Parte 3]",
  "[Seminario de Tecnología Hispana]",
] as const;

interface BiasHeadline {
  snippet: string;
  device: string;
  acceptDevice: string[];
  tone: string;
  acceptTone: string[];
  hiddenReality: string;
  acceptReality: string[];
  explanation: string;
  hint: string;
}

const BIAS_HEADLINES: readonly BiasHeadline[] = [
  {
    snippet: "«La empresa anuncia un “reajuste creativo de plantilla” tras instalar generadores de imagen.»",
    device: "eufemismo",
    acceptDevice: ["eufemismo", "el eufemismo", "comillas irónicas", "comillas de distanciamiento"],
    tone: "irónico",
    acceptTone: ["irónico", "escéptico", "crítico"],
    hiddenReality: "despidos",
    acceptReality: ["despidos", "los despidos", "despido", "despedir empleados"],
    explanation: "«Reajuste de plantilla» es un **eufemismo** corporativo que disimula **despidos**; las comillas muestran tono **escéptico/irónico**.",
    hint: "¿Qué palabra designa una expresión suave que oculta una realidad laboral dura?",
  },
  {
    snippet: "«¡Qué alivio tan inmenso que un robot nos ahorre el esfuerzo de pensar o leer literatura!»",
    device: "ironía",
    acceptDevice: ["ironía", "la ironía", "antífrasis", "la antífrasis", "sarcasmo"],
    tone: "irónico",
    acceptTone: ["irónico", "sarcástico", "mordaz"],
    hiddenReality: "deshumanización",
    acceptReality: ["deshumanización", "pérdida de pensamiento crítico", "crítica a la ia"],
    explanation: "La exclamación finge entusiasmo para burlarse de la sustitución del pensamiento humano: **ironía / antífrasis** de tono **irónico / mordaz**.",
    hint: "El autor expresa exactamente lo contrario de lo que siente mediante un elogio fingido.",
  },
  {
    snippet: "«Se produjeron incidencias puntuales en la conservación externa de cien mil historiales.»",
    device: "pasiva sin agente",
    acceptDevice: ["pasiva sin agente", "pasiva refleja", "ocultación del agente", "eufemismo"],
    tone: "evasivo",
    acceptTone: ["evasivo", "defensivo", "corporativo"],
    hiddenReality: "filtración",
    acceptReality: ["filtración", "filtración de datos", "fuga de datos", "robo de datos"],
    explanation: "La **pasiva sin agente** (*se produjeron*) borra al culpable y disfraza una **filtración** de datos como «incidencias puntuales».",
    hint: "Observa quién ha desaparecido como sujeto de la oración (*se produjeron...*).",
  },
  {
    snippet: "«¡DESCUBRE el truco secreto de la IA que las universidades OCULTAN a los estudiantes!»",
    device: "ciberanzuelo",
    acceptDevice: ["ciberanzuelo", "el ciberanzuelo", "clickbait", "sensacionalismo"],
    tone: "sensacionalista",
    acceptTone: ["sensacionalista", "alarmista"],
    hiddenReality: "manipulación",
    acceptReality: ["manipulación", "clics", "publicidad", "exageración"],
    explanation: "Las mayúsculas, la exclamación y la conspiración fingida son marcas clásicas de **ciberanzuelo** (*clickbait*) de tono **sensacionalista**.",
    hint: "Término en español equivalente a *clickbait*.",
  },
  {
    snippet: "«La red calificó la desaparición de cuentas críticas como una “limpieza rutinaria”.»",
    device: "comillas irónicas",
    acceptDevice: ["comillas irónicas", "comillas de distanciamiento", "comillas", "eufemismo"],
    tone: "escéptico",
    acceptTone: ["escéptico", "irónico", "crítico"],
    hiddenReality: "censura",
    acceptReality: ["censura", "la censura", "censura algorítmica"],
    explanation: "Las **comillas de distanciamiento / irónicas** alrededor de «limpieza rutinaria» exponen una posible **censura** con tono **escéptico**.",
    hint: "Fíjate en el signo tipográfico que rodea *«limpieza rutinaria»*.",
  },
  {
    snippet: "«El estudio cinematográfico impuso un “ajuste de sensibilidad comercial” eliminando escenas políticas.»",
    device: "eufemismo",
    acceptDevice: ["eufemismo", "el eufemismo", "comillas irónicas", "comillas de distanciamiento"],
    tone: "crítico",
    acceptTone: ["crítico", "escéptico", "irónico"],
    hiddenReality: "censura",
    acceptReality: ["censura", "la censura", "autocensura", "censura comercial"],
    explanation: "«Ajuste de sensibilidad comercial» funciona como **eufemismo** para ocultar la **censura** artística por motivos lucrativos.",
    hint: "Expresión maquillada que esconde el recorte de escenas políticas.",
  },
  {
    snippet: "«Brillante jugada: entrenar modelos millonarios copiando gratis a autores que apenas llegan a fin de mes.»",
    device: "ironía",
    acceptDevice: ["ironía", "la ironía", "sarcasmo", "antífrasis"],
    tone: "mordaz",
    acceptTone: ["mordaz", "sarcástico", "irónico"],
    hiddenReality: "plagio",
    acceptReality: ["plagio", "el plagio", "robo", "vulneración de derechos de autor"],
    explanation: "Llamar «brillante jugada» al uso no remunerado de obras protegidas es **ironía / sarcasmo** que denuncia **plagio** y vulneración de derechos de autor.",
    hint: "¿El adjetivo *brillante* aquí elogia de verdad o condena con sarcasmo?",
  },
  {
    snippet: "«Se optimizó la telemetría ciudadana en tiempo real mediante reconocimiento facial en plazas públicas.»",
    device: "eufemismo",
    acceptDevice: ["eufemismo", "el eufemismo", "pasiva sin agente", "pasiva refleja"],
    tone: "técnico-evasivo",
    acceptTone: ["evasivo", "técnico-evasivo", "impersonal"],
    hiddenReality: "vigilancia",
    acceptReality: ["vigilancia", "la vigilancia", "vigilancia masiva", "control"],
    explanation: "«Telemetría ciudadana» + pasiva sin agente es un **eufemismo** tecnocrático que suaviza la **vigilancia** masiva.",
    hint: "Traduce el lenguaje tecnocrático «telemetría ciudadana con reconocimiento facial» a la realidad social.",
  },
  {
    snippet: "«El Ministerio de Cultura celebra un “salto modernizador” tras cerrar tres bibliotecas rurales.»",
    device: "comillas irónicas",
    acceptDevice: ["comillas irónicas", "comillas de distanciamiento", "ironía", "eufemismo"],
    tone: "irónico",
    acceptTone: ["irónico", "escéptico", "crítico"],
    hiddenReality: "recortes",
    acceptReality: ["recortes", "recorte", "cierre", "desigualdad"],
    explanation: "El contraste entre las **comillas irónicas** («salto modernizador») y cerrar bibliotecas rurales denuncia **recortes** culturales.",
    hint: "Contrasta la cita entrecomillada con la acción real al final del titular.",
  },
  {
    snippet: "«El derroche temerario en telescopios astronómicos contrasta con el abandono de las aulas rurales.»",
    device: "léxico connotativo",
    acceptDevice: ["léxico connotativo", "léxico valorativo", "lenguaje cargado", "sesgo léxico"],
    tone: "crítico",
    acceptTone: ["crítico", "polémico", "indignado"],
    hiddenReality: "sesgo editorial",
    acceptReality: ["sesgo", "sesgo editorial", "crítica política", "parcialidad"],
    explanation: "Adjetivos cargados como *derroche temerario* y *abandono* constituyen **léxico connotativo** (valorativo) que guía emocionalmente al lector.",
    hint: "No es un verbo neutro como *invertir*: observa el peso emocional de *derroche temerario*.",
  },
];

const MEDIA_OUTLETS = [
  "Diario de Madrid",
  "Crónica de Bogotá",
  "Observador de Lima",
  "Gaceta de Buenos Aires",
  "Tribuna de México",
  "Correo de Santiago",
] as const;

export const drills: Drill[] = [
  {
    id: "3-ingenio-humano.pasiva-y-se",
    topicId: "3-ingenio-humano",
    title: "Passive Voice, Pasiva Refleja & Se Impersonal",
    level: 1,
    ibLevel: "SL",
    guideRef: "tecnologia-innovacion-cientifica",
    generate(rng, tier) {
      const traps: Trap[] = [];
      const city = rng.pick(CITIES);

      if (tier === 1) {
        const item = rng.pick(REFLEJA_BANK);
        const plural = rng.bool(0.55);
        const obj = plural ? item.plObj : item.sgObj;
        const ans = plural ? `se ${item.presPl}` : `se ${item.presSg}`;
        const wrong = plural ? `se ${item.presSg}` : `se ${item.presPl}`;
        traps.push({
          spec: { type: "text", accept: [wrong] },
          feedback: plural
            ? `Revisa el número: «${obj}» es plural e inanimado, por tanto la pasiva refleja exige 3.ª persona plural (**${ans}**).`
            : `Revisa el número: «${obj}» es singular e inanimado, así que la pasiva refleja va en 3.ª persona singular (**${ans}**).`,
        });
        return {
          prompt: `Completa la **pasiva refleja** en presente (escribe solo \`se\` + verbo): «En ${city} ________ (${item.inf}) ${obj} ${item.context}.»`,
          answer: { type: "text", accept: [ans, ans.charAt(0).toUpperCase() + ans.slice(1)], display: ans },
          solution: [
            `Identifica el sujeto paciente inanimado: «${obj}» (${plural ? "plural" : "singular"}).`,
            `En pasiva refleja el verbo concuerda en número con el sustantivo inanimado → **${ans}**.`,
          ],
          hint: `¿«${obj}» es singular o plural? En pasiva refleja el verbo concuerda con la cosa.`,
          traps,
        };
      }

      if (tier === 2) {
        const doImpersonal = rng.bool(0.5);
        if (doImpersonal) {
          const imp = rng.pick(IMPERSONAL_BANK);
          const past = rng.bool(0.5);
          const ans = past ? `se ${imp.pretSg}` : `se ${imp.presSg}`;
          const wrongPl = past ? `se ${imp.pretPlWrong}` : `se ${imp.presPlWrong}`;
          traps.push({
            spec: { type: "text", accept: [wrongPl] },
            feedback: `¡Trampa clásica! Delante de «${imp.humanObj}» aparece la *a* personal: con objeto humano el **se impersonal** va SIEMPRE en 3.ª persona singular (**${ans}**).`,
          });
          return {
            prompt: `Completa el **se impersonal** en ${past ? "pretérito indefinido" : "presente"} (solo \`se\` + verbo): «En ${city} ________ (${imp.inf}) ${imp.humanObj} ${imp.context}.»`,
            answer: { type: "text", accept: [ans, ans.charAt(0).toUpperCase() + ans.slice(1)], display: ans },
            solution: [
              `«${imp.humanObj}» es un objeto directo humano introducido por *a* personal.`,
              `La *a* personal bloquea la pasiva refleja y obliga al **se impersonal** (SIEMPRE singular) → **${ans}**.`,
            ],
            hint: "Observa la *a* personal antes de personas: ¿puede el verbo con *se* ir en plural?",
            traps,
          };
        } else {
          const item = rng.pick(REFLEJA_BANK);
          const plural = rng.bool(0.55);
          const obj = plural ? item.plObj : item.sgObj;
          const ans = plural ? `se ${item.pretPl}` : `se ${item.pretSg}`;
          const wrong = plural ? `se ${item.pretSg}` : `se ${item.pretPl}`;
          traps.push({
            spec: { type: "text", accept: [wrong] },
            feedback: `En pretérito, la pasiva refleja concuerda en número con el sustantivo inanimado «${obj}» → **${ans}**.`,
          });
          return {
            prompt: `Completa la **pasiva refleja** en pretérito indefinido (solo \`se\` + verbo): «El año pasado en ${city} ________ (${item.inf}) ${obj} ${item.context}.»`,
            answer: { type: "text", accept: [ans, ans.charAt(0).toUpperCase() + ans.slice(1)], display: ans },
            solution: [
              `«${obj}» es un sustantivo inanimado ${plural ? "plural" : "singular"}.`,
              `Pasiva refleja en pretérito indefinido concordado → **${ans}**.`,
            ],
            hint: "Sin agente y con cosa inanimada, haz concordar el pretérito con el sustantivo.",
            traps,
          };
        }
      }

      // Tier 3: pasiva perifrástica (including irregular participles) OR future/subjunctive refleja
      const doPerifrastica = rng.bool(0.6);
      if (doPerifrastica) {
        const p = rng.pick(PERIFRASTICA_BANK);
        const ans = `${p.serPret} ${p.part} por`;
        traps.push({
          spec: { type: "text", accept: [`${p.serPret} ${p.part} para`, `${p.serPret} ${p.part} de`] },
          feedback: "El agente en la pasiva perifrástica en español se introduce SIEMPRE con **por**, nunca con *para* ni *de*.",
        });
        traps.push({
          spec: { type: "text", accept: [`${p.serPret} ${p.wrongNumPart} por`] },
          feedback: `Revisa la concordancia: «${p.subj}» es ${p.genderNumLabel} → **${p.serPret} ${p.part} por**.`,
        });
        if (p.irregularBad) {
          traps.push({
            spec: { type: "text", accept: [`${p.serPret} ${p.irregularBad} por`] },
            feedback: `*${p.inf}* tiene participio irregular (**${p.part}**), no regularizado.`,
          });
        }
        return {
          prompt: `Completa la **pasiva perifrástica** en pretérito (\`ser\` + participio concordado + preposición del agente, 3 palabras): «En ${city}, ${p.subj.toLowerCase()} ________ (${p.inf}) ________ ${p.agent}.»`,
          answer: { type: "text", accept: [ans], display: ans },
          solution: [
            `Sujeto paciente: «${p.subj}» (${p.genderNumLabel}) → pretérito de *ser*: **${p.serPret}**.`,
            `Participio concordado de *${p.inf}*: **${p.part}**.`,
            `Preposición obligatoria del agente pasivo: **por** → **${ans}**.`,
          ],
          hint: `Comprueba género y número de «${p.subj}» y recuerda la preposición del agente pasivo.`,
          traps,
        };
      } else {
        const item = rng.pick(REFLEJA_BANK);
        const useFut = rng.bool(0.5);
        if (useFut) {
          const plural = rng.bool(0.6);
          const obj = plural ? item.plObj : item.sgObj;
          const ans = plural ? `se ${item.futPl}` : `se ${item.futSg}`;
          const wrong = plural ? `se ${item.futSg}` : `se ${item.futPl}`;
          traps.push({
            spec: { type: "text", accept: [wrong] },
            feedback: `«${obj}» es ${plural ? "plural" : "singular"}; en futuro simple corresponde **${ans}**.`,
          });
          return {
            prompt: `Completa la **pasiva refleja** en futuro simple (2 palabras: \`se\` + verbo): «El próximo año en ${city} ________ (${item.inf}) ${obj} ${item.context}.»`,
            answer: { type: "text", accept: [ans, ans.charAt(0).toUpperCase() + ans.slice(1)], display: ans },
            solution: [
              `Futuro simple de *${item.inf}* en concordancia con «${obj}» → **${ans}** (con tilde aguda).`,
            ],
            hint: "Conjuga en futuro simple y concuerda con el sustantivo inanimado.",
            traps,
          };
        } else {
          const ans = `se ${item.subjPl}`;
          traps.push({
            spec: { type: "text", accept: [`se ${item.pretPl}`, `se ${item.futPl}`] },
            feedback: `Tras *es urgente que*, la pasiva refleja requiere presente de subjuntivo: **${ans}**.`,
          });
          return {
            prompt: `Completa la **pasiva refleja en subjuntivo** (2 palabras: \`se\` + verbo): «En ${city} es urgente que ________ (${item.inf}) ${item.plObj} ${item.context}.»`,
            answer: { type: "text", accept: [ans], display: ans },
            solution: [
              "*Es urgente que* activa el presente de subjuntivo.",
              `Con «${item.plObj}» (inanimado plural) → **${ans}**.`,
            ],
            hint: "Combina *pasiva refleja plural* + *presente de subjuntivo* tras *es urgente que*.",
            traps,
          };
        }
      }
    },
  },
  {
    id: "3-ingenio-humano.vocab-medios-tec",
    topicId: "3-ingenio-humano",
    title: "Media, Arts & Tech B2–C1 Vocabulary Precision",
    level: 1,
    ibLevel: "SL",
    guideRef: "comunicacion-medios-redes",
    generate(rng, tier) {
      const pool = tier === 1 ? VOCAB_T1 : tier === 2 ? VOCAB_T2 : VOCAB_T3;
      const entry = rng.pick(pool);
      const mode = rng.int(1, 3);
      const city = rng.pick(CITIES);

      let prompt: string;
      if (mode === 1) {
        prompt = `Completa la oración de nivel B2–C1 (${city}) con el término exacto (sin artículo): «${entry.cloze}»`;
      } else if (mode === 2) {
        prompt = `Escribe en español (sin artículo) el término temático de *Ingenio humano* equivalente a **“${entry.en}”** (contexto: ${city}).`;
      } else {
        prompt = `Identifica el término en español (sin artículo) correspondiente a esta definición (${city}): *${entry.defEs}*.`;
      }

      return {
        prompt,
        answer: { type: "text", accept: [...entry.accept], display: entry.es },
        solution: [
          `Respuesta exacta: **${entry.es}** (${entry.en}).`,
          entry.note,
        ],
        hint: entry.hint,
      };
    },
  },
  {
    id: "3-ingenio-humano.tipos-texto-medios",
    topicId: "3-ingenio-humano",
    title: "Mass-Media & Cultural Text-Type Matcher (Criterion C)",
    level: 2,
    ibLevel: "SL",
    guideRef: "entretenimiento-expresiones-artisticas",
    generate(rng, tier) {
      const traps: Trap[] = [];
      const city = rng.pick(CITIES);
      const hook = rng.pick(TOPIC_HOOKS);
      const pool =
        tier === 1
          ? TEXT_TYPE_SCENARIOS.filter((s) => s.tier === 1)
          : tier === 2
            ? TEXT_TYPE_SCENARIOS
            : TEXT_TYPE_SCENARIOS;
      const sc = rng.pick(pool);

      if (sc.type === "editorial") {
        traps.push({
          spec: { type: "text", accept: ["blog", "el blog"] },
          feedback: "Un *blog* usa voz personal cercana; la postura oficial institucional sin firma pertenece al **editorial**.",
        });
      } else if (sc.type === "blog") {
        traps.push({
          spec: { type: "text", accept: ["editorial", "el editorial"] },
          feedback: "El *editorial* es formal e institucional (*nosotros*); un texto interactivo cercano con #etiquetas es un **blog**.",
        });
      } else if (sc.type === "reseña") {
        traps.push({
          spec: { type: "text", accept: ["entrevista", "la entrevista"] },
          feedback: "Una *entrevista* alterna preguntas y respuestas; la evaluación crítica con ficha técnica y veredicto es una **reseña**.",
        });
      }

      if (tier === 3) {
        const askClueStyle = rng.bool(0.5);
        if (askClueStyle) {
          return {
            prompt: `**Prueba 1 — Criterio C (${city}).** Un texto publicado ${hook} ${city} presenta estas marcas estructurales: *${sc.clue}*, con voz **${sc.voice}**. ¿Qué tipo de texto del BI es (una sola palabra en español)?`,
            answer: { type: "text", accept: [...sc.accept], display: sc.type },
            solution: [
              `Las convenciones (*${sc.clue}*) y la voz (*${sc.voice}*) identifican inequívocamente un/una **${sc.type}**.`,
              `Encaja con el propósito: ${sc.purpose}.`,
            ],
            hint: `Relaciona la voz (*${sc.voice}*) con los tipos de texto de Prueba 1 (*artículo, editorial, reseña, blog, entrevista, discurso, informe, propuesta*).`,
            traps,
          };
        }
      }

      return {
        prompt: `**Prueba 1 — Selección de tipo de texto (${city}).** Actúas como *${sc.role}* ${hook} ${city}. Tu audiencia son *${sc.audience}* y tu objetivo es *${sc.purpose}*. ¿Qué tipo de texto del BI es el **más apropiado** (una sola palabra en español)?`,
        answer: { type: "text", accept: [...sc.accept], display: sc.type },
        solution: [
          `Audiencia (*${sc.audience}*) + propósito (*${sc.purpose}*) → **${sc.type}**.`,
          `Convenciones clave: ${sc.clue}.`,
        ],
        hint: `Pista de convenciones: ${sc.clue}.`,
        traps,
      };
    },
  },
  {
    id: "3-ingenio-humano.conectores-debate-ia",
    topicId: "3-ingenio-humano",
    title: "AI & Tech Ethical Debate Connectors & Subjunctive",
    level: 2,
    ibLevel: "SL",
    guideRef: "tecnologia-innovacion-cientifica",
    generate(rng, tier) {
      const traps: Trap[] = [];
      const pool = CONNECTOR_ITEMS.filter((c) => c.tier === tier);
      const item = rng.pick(pool);
      const tag = rng.pick(DEBATE_TAGS);
      const city = rng.pick(CITIES);

      for (const t of item.traps) {
        traps.push({
          spec: { type: "text", accept: [...t.accept] },
          feedback: t.fb,
        });
      }

      return {
        prompt: `${tag} (${city}) ${item.prompt}`,
        answer: { type: "text", accept: [...item.answer], display: item.display },
        solution: [
          `Respuesta correcta: **${item.display}**.`,
          item.rule,
        ],
        hint: item.hint,
        traps,
      };
    },
  },
  {
    id: "3-ingenio-humano.sesgo-ironia-titulares-hl",
    topicId: "3-ingenio-humano",
    title: "[HL] Detecting Irony, Euphemism & Media Bias in Headlines",
    level: 3,
    ibLevel: "HL",
    guideRef: "etica-ia-creatividad-hl",
    generate(rng, tier) {
      const item = rng.pick(BIAS_HEADLINES);
      const outlet = rng.pick(MEDIA_OUTLETS);
      const year = rng.int(2023, 2026);

      if (tier === 1) {
        return {
          prompt: `[HL · ${outlet}, ${year}] Lee este titular:\n${item.snippet}\n¿Qué **recurso de encuadre o sesgo** principal aparece aquí (ej.: *eufemismo, ironía, ciberanzuelo, pasiva sin agente, comillas irónicas, léxico connotativo*)?`,
          answer: { type: "text", accept: [...item.acceptDevice], display: item.device },
          solution: [
            `Recurso principal: **${item.device}**.`,
            item.explanation,
          ],
          hint: item.hint,
        };
      }

      if (tier === 2) {
        const askTone = rng.bool(0.5);
        if (askTone) {
          return {
            prompt: `[HL · ${outlet}, ${year}] Lee este titular:\n${item.snippet}\n¿Qué adjetivo describe mejor el **tono** predominante del autor (una palabra, ej.: *irónico, escéptico, crítico, sensacionalista, evasivo, mordaz*)?`,
            answer: { type: "text", accept: [...item.acceptTone], display: item.tone },
            solution: [
              `Tono predominante: **${item.tone}**.`,
              item.explanation,
            ],
            hint: `Fíjate en la actitud implícita del autor: ${item.hint}`,
          };
        } else {
          return {
            prompt: `[HL · ${outlet}, ${year}] Descifra el lenguaje mediático:\n${item.snippet}\n¿Qué **realidad o problema concreto** oculta o denuncia este titular (una o dos palabras, ej.: *despidos, censura, filtración, vigilancia, plagio, recortes*)?`,
            answer: { type: "text", accept: [...item.acceptReality], display: item.hiddenReality },
            solution: [
              `Realidad subyacente: **${item.hiddenReality}**.`,
              item.explanation,
            ],
            hint: "Traduce la frase maquillada o sarcástica al hecho social real.",
          };
        }
      }

      // Tier 3: mixed HL analysis — device vs underlying reality vs C1 headline critique
      const submode = rng.int(1, 3);
      if (submode === 1) {
        return {
          prompt: `[HL · Prueba 2 Lectura · ${outlet}, ${year}] Analiza el encuadre del titular:\n${item.snippet}\nNombra el **mecanismo lingüístico** empleado para moldear la opinión del lector.`,
          answer: { type: "text", accept: [...item.acceptDevice], display: item.device },
          solution: [
            `Mecanismo: **${item.device}**.`,
            item.explanation,
          ],
          hint: item.hint,
        };
      } else if (submode === 2) {
        return {
          prompt: `[HL · Prueba 2 Lectura · ${outlet}, ${year}] Lee entre líneas:\n${item.snippet}\nEscribe el sustantivo que nombra el **hecho real encubierto o denunciado** detrás del encuadre.`,
          answer: { type: "text", accept: [...item.acceptReality], display: item.hiddenReality },
          solution: [
            `Hecho real: **${item.hiddenReality}**.`,
            item.explanation,
          ],
          hint: "Aplica la estrategia T-E-S-T: quita el maquillaje corporativo o la ironía.",
        };
      } else {
        return {
          prompt: `[HL · Prueba 2 Lectura · ${outlet}, ${year}] Evalúa el registro y la postura:\n${item.snippet}\nIdentifica en un adjetivo el **tono** editorial que transmite el periodista.`,
          answer: { type: "text", accept: [...item.acceptTone], display: item.tone },
          solution: [
            `Tono editorial: **${item.tone}**.`,
            item.explanation,
          ],
          hint: "Decide si el periodista informa de forma neutra, suaviza datos con evasivas o ataca con ironía/escepticismo.",
        };
      }
    },
  },
];
