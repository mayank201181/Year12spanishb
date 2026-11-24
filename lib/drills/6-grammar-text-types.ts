import type { AnswerSpec, Trap } from "../types.ts";
import { checkAnswer } from "../answerCheck.ts";
import type { Drill } from "./types.ts";

// ---------------------------------------------------------------------------
// Helpers & data tables for Topic 6 procedural drills
// ---------------------------------------------------------------------------

type PronKey = "yo" | "tu" | "el" | "nos" | "vos" | "ellos";

const PRON_LABEL: Record<PronKey, string> = {
  yo: "yo",
  tu: "tú",
  el: "él/ella/usted",
  nos: "nosotros/as",
  vos: "vosotros/as",
  ellos: "ellos/ellas/ustedes",
};

interface VerbSubjEntry {
  inf: string;
  meaning: string;
  rule: string;
  forms: Record<PronKey, string>;
  indic: Record<PronKey, string>;
}

const SUBJ_T1: VerbSubjEntry[] = [
  {
    inf: "hablar",
    meaning: "to speak",
    rule: "regular *-ar* → opposite *-e* endings",
    forms: { yo: "hable", tu: "hables", el: "hable", nos: "hablemos", vos: "habléis", ellos: "hablen" },
    indic: { yo: "hablo", tu: "hablas", el: "habla", nos: "hablamos", vos: "habláis", ellos: "hablan" },
  },
  {
    inf: "aprender",
    meaning: "to learn",
    rule: "regular *-er* → opposite *-a* endings",
    forms: { yo: "aprenda", tu: "aprendas", el: "aprenda", nos: "aprendamos", vos: "aprendáis", ellos: "aprendan" },
    indic: { yo: "aprendo", tu: "aprendes", el: "aprende", nos: "aprendemos", vos: "aprendéis", ellos: "aprenden" },
  },
  {
    inf: "vivir",
    meaning: "to live",
    rule: "regular *-ir* → opposite *-a* endings",
    forms: { yo: "viva", tu: "vivas", el: "viva", nos: "vivamos", vos: "viváis", ellos: "vivan" },
    indic: { yo: "vivo", tu: "vives", el: "vive", nos: "vivimos", vos: "vivís", ellos: "viven" },
  },
  {
    inf: "proteger",
    meaning: "to protect",
    rule: "*-ger* changes *g → j* before *-a* (from *yo protejo*)",
    forms: { yo: "proteja", tu: "protejas", el: "proteja", nos: "protejamos", vos: "protejáis", ellos: "protejan" },
    indic: { yo: "protejo", tu: "proteges", el: "protege", nos: "protegemos", vos: "protegéis", ellos: "protegen" },
  },
  {
    inf: "tener",
    meaning: "to have",
    rule: "*-go* verb: *yo tengo* → stem *teng-* + *-a* endings",
    forms: { yo: "tenga", tu: "tengas", el: "tenga", nos: "tengamos", vos: "tengáis", ellos: "tengan" },
    indic: { yo: "tengo", tu: "tienes", el: "tiene", nos: "tenemos", vos: "tenéis", ellos: "tienen" },
  },
  {
    inf: "hacer",
    meaning: "to do / make",
    rule: "*-go* verb: *yo hago* → stem *hag-* + *-a* endings",
    forms: { yo: "haga", tu: "hagas", el: "haga", nos: "hagamos", vos: "hagáis", ellos: "hagan" },
    indic: { yo: "hago", tu: "haces", el: "hace", nos: "hacemos", vos: "hacéis", ellos: "hacen" },
  },
  {
    inf: "poner",
    meaning: "to put / place",
    rule: "*-go* verb: *yo pongo* → stem *pong-* + *-a* endings",
    forms: { yo: "ponga", tu: "pongas", el: "ponga", nos: "pongamos", vos: "pongáis", ellos: "pongan" },
    indic: { yo: "pongo", tu: "pones", el: "pone", nos: "ponemos", vos: "ponéis", ellos: "ponen" },
  },
  {
    inf: "salir",
    meaning: "to leave / go out",
    rule: "*-go* verb: *yo salgo* → stem *salg-* + *-a* endings",
    forms: { yo: "salga", tu: "salgas", el: "salga", nos: "salgamos", vos: "salgáis", ellos: "salgan" },
    indic: { yo: "salgo", tu: "sales", el: "sale", nos: "salimos", vos: "salís", ellos: "salen" },
  },
];

const SUBJ_T2: VerbSubjEntry[] = [
  {
    inf: "buscar",
    meaning: "to look for",
    rule: "*-car* spelling change: *c → qu* before *-e*",
    forms: { yo: "busque", tu: "busques", el: "busque", nos: "busquemos", vos: "busquéis", ellos: "busquen" },
    indic: { yo: "busco", tu: "buscas", el: "busca", nos: "buscamos", vos: "buscáis", ellos: "buscan" },
  },
  {
    inf: "llegar",
    meaning: "to arrive",
    rule: "*-gar* spelling change: *g → gu* before *-e*",
    forms: { yo: "llegue", tu: "llegues", el: "llegue", nos: "lleguemos", vos: "lleguéis", ellos: "lleguen" },
    indic: { yo: "llego", tu: "llegas", el: "llega", nos: "llegamos", vos: "llegáis", ellos: "llegan" },
  },
  {
    inf: "empezar",
    meaning: "to begin",
    rule: "*-zar* (*z → c* before *-e*) + *e → ie* boot stem change",
    forms: { yo: "empiece", tu: "empieces", el: "empiece", nos: "empecemos", vos: "empecéis", ellos: "empiecen" },
    indic: { yo: "empiezo", tu: "empiezas", el: "empieza", nos: "empezamos", vos: "empezáis", ellos: "empiezan" },
  },
  {
    inf: "poder",
    meaning: "to be able to",
    rule: "*-er* boot stem-changer (*o → ue* in boot, *o* in *nosotros/vosotros*)",
    forms: { yo: "pueda", tu: "puedas", el: "pueda", nos: "podamos", vos: "podáis", ellos: "puedan" },
    indic: { yo: "puedo", tu: "puedes", el: "puede", nos: "podemos", vos: "podéis", ellos: "pueden" },
  },
  {
    inf: "dormir",
    meaning: "to sleep",
    rule: "*-ir* double stem-changer: *o → ue* in boot, *o → u* in *nosotros/vosotros*",
    forms: { yo: "duerma", tu: "duermas", el: "duerma", nos: "durmamos", vos: "durmáis", ellos: "duerman" },
    indic: { yo: "duermo", tu: "duermes", el: "duerme", nos: "dormimos", vos: "dormís", ellos: "duermen" },
  },
  {
    inf: "sentir",
    meaning: "to feel",
    rule: "*-ir* double stem-changer: *e → ie* in boot, *e → i* in *nosotros/vosotros*",
    forms: { yo: "sienta", tu: "sientas", el: "sienta", nos: "sintamos", vos: "sintáis", ellos: "sientan" },
    indic: { yo: "siento", tu: "sientes", el: "siente", nos: "sentimos", vos: "sentís", ellos: "sienten" },
  },
  {
    inf: "pedir",
    meaning: "to ask for",
    rule: "*-ir* stem-changer: *e → i* in ALL six forms",
    forms: { yo: "pida", tu: "pidas", el: "pida", nos: "pidamos", vos: "pidáis", ellos: "pidan" },
    indic: { yo: "pido", tu: "pides", el: "pide", nos: "pedimos", vos: "pedís", ellos: "piden" },
  },
  {
    inf: "conocer",
    meaning: "to know / meet",
    rule: "*-cer* irregular *yo* stem (*conozco*) → *conozc-* + *-a* endings",
    forms: { yo: "conozca", tu: "conozcas", el: "conozca", nos: "conozcamos", vos: "conozcáis", ellos: "conozcan" },
    indic: { yo: "conozco", tu: "conoces", el: "conoce", nos: "conocemos", vos: "conocéis", ellos: "conocen" },
  },
];

const SUBJ_T3: VerbSubjEntry[] = [
  {
    inf: "dar",
    meaning: "to give",
    rule: "DISHES irregular (*dé, des, dé, demos, deis, den* — accent ONLY on *yo / él*)",
    forms: { yo: "dé", tu: "des", el: "dé", nos: "demos", vos: "deis", ellos: "den" },
    indic: { yo: "doy", tu: "das", el: "da", nos: "damos", vos: "dais", ellos: "dan" },
  },
  {
    inf: "ir",
    meaning: "to go",
    rule: "DISHES irregular (*vaya, vayas, vaya, vayamos, vayáis, vayan*)",
    forms: { yo: "vaya", tu: "vayas", el: "vaya", nos: "vayamos", vos: "vayáis", ellos: "vayan" },
    indic: { yo: "voy", tu: "vas", el: "va", nos: "vamos", vos: "vais", ellos: "van" },
  },
  {
    inf: "ser",
    meaning: "to be",
    rule: "DISHES irregular (*sea, seas, sea, seamos, seáis, sean*)",
    forms: { yo: "sea", tu: "seas", el: "sea", nos: "seamos", vos: "seáis", ellos: "sean" },
    indic: { yo: "soy", tu: "eres", el: "es", nos: "somos", vos: "sois", ellos: "son" },
  },
  {
    inf: "estar",
    meaning: "to be (state/location)",
    rule: "DISHES irregular (*esté, estés, esté, estemos, estéis, estén* — watch the accents!)",
    forms: { yo: "esté", tu: "estés", el: "esté", nos: "estemos", vos: "estéis", ellos: "estén" },
    indic: { yo: "estoy", tu: "estás", el: "está", nos: "estamos", vos: "estáis", ellos: "están" },
  },
  {
    inf: "saber",
    meaning: "to know",
    rule: "DISHES irregular (*sepa, sepas, sepa, sepamos, sepáis, sepan*)",
    forms: { yo: "sepa", tu: "sepas", el: "sepa", nos: "sepamos", vos: "sepáis", ellos: "sepan" },
    indic: { yo: "sé", tu: "sabes", el: "sabe", nos: "sabemos", vos: "sabéis", ellos: "saben" },
  },
  {
    inf: "reducir",
    meaning: "to reduce",
    rule: "*-ducir* verb: *yo reduzco* → stem *reduzc-* + *-a* endings",
    forms: { yo: "reduzca", tu: "reduzcas", el: "reduzca", nos: "reduzcamos", vos: "reduzcáis", ellos: "reduzcan" },
    indic: { yo: "reduzco", tu: "reduces", el: "reduce", nos: "reducimos", vos: "reducís", ellos: "reducen" },
  },
  {
    inf: "seguir",
    meaning: "to continue / follow",
    rule: "*-guir* drops silent *u* before *-a* + *e → i* in all forms (*yo sigo*)",
    forms: { yo: "siga", tu: "sigas", el: "siga", nos: "sigamos", vos: "sigáis", ellos: "sigan" },
    indic: { yo: "sigo", tu: "sigues", el: "sigue", nos: "seguimos", vos: "seguís", ellos: "siguen" },
  },
  {
    inf: "construir",
    meaning: "to build",
    rule: "*-uir* inserts *-y-* in all 6 forms (from *yo construyo*)",
    forms: { yo: "construya", tu: "construyas", el: "construya", nos: "construyamos", vos: "construyáis", ellos: "construyan" },
    indic: { yo: "construyo", tu: "construyes", el: "construye", nos: "construimos", vos: "construís", ellos: "construyen" },
  },
];

const SUBJ_TRIGGERS = [
  "Es imprescindible que",
  "El comité recomienda que",
  "Ojalá que",
  "No creo que",
  "Debemos actuar antes de que",
  "Trabajamos hoy para que",
  "Me preocupa que",
];

// ---------------------------------------------------------------------------
// Drill 2 data: Por vs Para templated IB contexts
// ---------------------------------------------------------------------------
interface PorParaSpec {
  prep: "por" | "para";
  reason: string;
  build: (v: string) => string;
  vars: readonly string[];
}

const POR_PARA_T1: PorParaSpec[] = [
  {
    prep: "para",
    reason: "Future **deadline** (*by…*) always uses **para**.",
    build: (v) => `El informe definitivo debe entregarse ______ ${v}.`,
    vars: ["el lunes", "el miércoles", "el viernes por la tarde", "el 15 de noviembre", "mañana a las nueve"],
  },
  {
    prep: "para",
    reason: "**Purpose + infinitive** (“in order to…”) always uses **para**.",
    build: (v) => `Organizamos una campaña escolar ______ ${v}.`,
    vars: ["proteger el medio ambiente", "reducir el desperdicio alimentario", "apoyar a los refugiados", "fomentar la lectura bilingüe", "mejorar la salud mental"],
  },
  {
    prep: "para",
    reason: "**Recipient / intended beneficiary** always uses **para**.",
    build: (v) => `Esta carta de agradecimiento es ______ ${v}.`,
    vars: ["la directora del instituto", "los voluntarios del barrio", "mi familia anfitriona", "el comité de becas", "el alcalde de la ciudad"],
  },
  {
    prep: "para",
    reason: "**Physical destination** (*heading toward…*) uses **para**.",
    build: (v) => `El tren de alta velocidad sale esta tarde ______ ${v}.`,
    vars: ["Sevilla", "Valencia", "Málaga", "Zaragoza", "Bilbao"],
  },
  {
    prep: "por",
    reason: "**Cause / reason** (“because of…”) always uses **por**.",
    build: (v) => `Tuvieron que suspender el festival cultural ______ ${v}.`,
    vars: ["la lluvia torrencial", "la falta de presupuesto", "el viento extremo", "una huelga de transporte", "el intenso calor"],
  },
  {
    prep: "por",
    reason: "**Exchange / monetary price** always uses **por**.",
    build: (v) => `Conseguimos entradas solidarias ______ ${v}.`,
    vars: ["quince euros", "veinte dólares", "diez euros cada una", "un precio muy reducido", "doce euros en línea"],
  },
  {
    prep: "por",
    reason: "**Duration of time** uses **por** (or *durante*), never *para*.",
    build: (v) => `Mi prima estudió arquitectura en Bogotá ______ ${v}.`,
    vars: ["dos años", "tres semestres", "seis meses", "cuatro semanas", "todo el verano"],
  },
  {
    prep: "por",
    reason: "**Means of communication or transport** always uses **por**.",
    build: (v) => `Nos enviaron la confirmación del intercambio ______ ${v}.`,
    vars: ["correo electrónico", "teléfono", "mensaje de voz", "videollamada", "correo certificado"],
  },
];

const POR_PARA_T2: PorParaSpec[] = [
  {
    prep: "para",
    reason: "**Employment** (“working for an employer/organisation”) uses **para**.",
    build: (v) => `Tras graduarse, Sofía empezó a trabajar ______ ${v}.`,
    vars: ["una ONG ambiental", "un periódico chileno", "una clínica comunitaria", "el Ministerio de Cultura", "una empresa de energías limpias"],
  },
  {
    prep: "para",
    reason: "**Personal opinion** (“in my/your view”) uses **para**.",
    build: (v) => `______ ${v}, el acceso gratuito a bibliotecas es un derecho básico.`,
    vars: ["mí", "nuestro equipo", "muchos docentes", "la juventud actual", "los expertos en educación"],
  },
  {
    prep: "para",
    reason: "**Comparison against a standard** (“for someone so young / for a small town”) uses **para**.",
    build: (v) => `______ ${v}, la ciudad cuenta con una red de museos extraordinaria.`,
    vars: ["ser una localidad pequeña", "tener tan pocos habitantes", "su tamaño reducido", "su modesto presupuesto", "una región tan aislada"],
  },
  {
    prep: "por",
    reason: "**Movement through / along / around** a place uses **por**.",
    build: (v) => `Cada domingo paseamos tranquilamente ______ ${v}.`,
    vars: ["el casco antiguo de Toledo", "la costa mediterránea", "las calles de Oaxaca", "el parque del Retiro", "el malecón de Lima"],
  },
  {
    prep: "por",
    reason: "**Agent of a passive verb** (*written/designed/approved by…*) ALWAYS uses **por**.",
    build: (v) => `El documental fue dirigido ______ ${v}.`,
    vars: ["una cineasta argentina", "un colectivo juvenil mexicano", "estudiantes de periodismo", "un director colombiano", "arquitectos españoles"],
  },
  {
    prep: "por",
    reason: "**Substitution / acting on behalf of someone** uses **por**.",
    build: (v) => `Como Lucas estaba enfermo, yo presenté el proyecto ______ ${v}.`,
    vars: ["él", "su equipo", "toda la clase", "mi compañero", "ambos grupos"],
  },
  {
    prep: "por",
    reason: "**Part of the day** (*por la mañana / tarde / noche*) uses **por**.",
    build: (v) => `El centro juvenil ofrece talleres de robótica ______ ${v}.`,
    vars: ["la tarde", "la mañana", "la noche", "las mañanas de sábado", "las tardes entre semana"],
  },
  {
    prep: "para",
    reason: "**Specific intended use / function** of an object or space uses **para**.",
    build: (v) => `Han habilitado este pabellón ______ ${v}.`,
    vars: ["exposiciones de arte local", "reuniones vecinales", "talleres de reciclaje", "conferencias estudiantiles", "actividades deportivas"],
  },
];

const POR_PARA_T3: PorParaSpec[] = [
  {
    prep: "por",
    reason: "**Estar por + infinitivo** means “to be **in favour of** / **yet to be done**”.",
    build: (v) => `Todavía quedan tres propuestas ______ ${v} antes de cerrar el acta. (meaning: yet to be voted/reviewed)`,
    vars: ["votar", "revisar", "aprobar", "evaluar", "traducir"],
  },
  {
    prep: "para",
    reason: "**Estar para + infinitivo** means “to be **about to** (imminent)”.",
    build: (v) => `Date prisa, que la conferencia de clausura está ______ ${v} en dos minutos. (meaning: about to start)`,
    vars: ["empezar", "comenzar", "inaugurarse", "abrir sus puertas", "arrancar"],
  },
  {
    prep: "por",
    reason: "Fixed C1 idiom **por lo tanto** (“therefore / consequently”) always takes **por**.",
    build: (v) => `El nivel del embalse ha bajado drásticamente; ______ lo tanto, ${v}.`,
    vars: ["urge ahorrar agua", "restringirán el riego", "revisaremos el plan agrícola", "debemos modernizar las tuberías", "se aplicarán medidas locales"],
  },
  {
    prep: "para",
    reason: "Fixed C1 idiom **para colmo** (“to top it all off”) always takes **para**.",
    build: (v) => `El vuelo se retrasó tres horas y, ______ colmo, ${v}.`,
    vars: ["se perdió nuestro equipaje", "empezó a diluviar al llegar", "cerraron la línea de metro", "cancelaron la conexión ferroviaria", "se averió el autobús"],
  },
  {
    prep: "por",
    reason: "Verb **luchar / abogar / votar por** (“fight/advocate/vote in favour of”) governs **por**.",
    build: (v) => `Diversas asociaciones ciudadanas abogan ______ ${v}.`,
    vars: ["una vivienda digna", "la igualdad salarial", "la conservación amazónica", "el bilingüismo escolar", "el comercio justo"],
  },
  {
    prep: "por",
    reason: "Rate / frequency / percentage (*tres veces por semana*, *cincuenta por ciento*) takes **por**.",
    build: (v) => `El estudio reveló que el consumo eléctrico cayó un veinte ______ ciento en ${v}.`,
    vars: ["los edificios públicos", "el distrito central", "las escuelas rurales", "el sector hotelero", "las bibliotecas municipales"],
  },
  {
    prep: "para",
    reason: "**No estar para + sustantivo** (“not in the mood for…”) always takes **para**.",
    build: (v) => `Después de diez horas de debate, los delegados ya no estaban ______ ${v}.`,
    vars: ["bromas", "discusiones estériles", "celebraciones", "discursos interminables", "más retrasos"],
  },
  {
    prep: "por",
    reason: "Fixed idiom **por si acaso** (“just in case”) always takes **por**.",
    build: (v) => `Llevamos copias impresas del guion ______ si acaso ${v}.`,
    vars: ["falla el proyector", "se corta la conexión", "llegan más invitados", "cambia el horario", "hace falta repartirlas"],
  },
];

// ---------------------------------------------------------------------------
// Drill 3 data: Ser vs Estar meaning shifts, events & passive voice
// ---------------------------------------------------------------------------
interface SerEstarSpec {
  ans: string;
  wrong: string;
  rule: string;
  build: (v: string) => string;
  vars: readonly string[];
}

const SER_ESTAR_T1: SerEstarSpec[] = [
  {
    ans: "es",
    wrong: "está",
    rule: "**Ser listo/a** = clever/sharp (inherent trait); *estar listo/a* = ready.",
    build: (v) => `${v} ______ muy lista: resolvió el dilema ético con brillantez. (meaning: clever)`,
    vars: ["La portavoz", "Mi hermana mayor", "La investigadora", "La candidata", "Nuestra capitana"],
  },
  {
    ans: "está",
    wrong: "es",
    rule: "**Estar listo/a** = ready/prepared; *ser listo/a* = clever.",
    build: (v) => `El informe sobre ${v} ya ______ listo para enviarlo al consejo escolar. (meaning: ready)`,
    vars: ["energías renovables", "salud juvenil", "turismo sostenible", "voluntariado local", "acceso digital"],
  },
  {
    ans: "es",
    wrong: "está",
    rule: "**Ser aburrido/a** = boring (characteristic); *estar aburrido/a* = bored.",
    build: (v) => `Muchos espectadores opinaron que ${v} ______ demasiado aburrida. (meaning: boring)`,
    vars: ["la película histórica", "la conferencia inaugural", "la primera parte de la novela", "la serie documental", "la presentación técnica"],
  },
  {
    ans: "están",
    wrong: "son",
    rule: "**Estar aburrido/a** = bored (temporary state); *ser aburrido/a* = boring.",
    build: (v) => `Los estudiantes ______ aburridos porque ${v}. (meaning: bored)`,
    vars: ["la charla carece de ejemplos reales", "nadie les invita a participar", "el taller repite lo mismo", "el debate no avanza", "las actividades son muy pasivas"],
  },
  {
    ans: "está",
    wrong: "es",
    rule: "**Estar rico/a** = delicious/tasty; *ser rico/a* = wealthy.",
    build: (v) => `¡Prueba ${v}, que hoy ______ riquísima! (meaning: delicious)`,
    vars: ["esta paella valenciana", "la empanada gallega", "esta sopa de quinoa", "la tortilla casera", "esta arepa recién hecha"],
  },
  {
    ans: "es",
    wrong: "está",
    rule: "**Event location** (“takes place at”) ALWAYS uses **ser** (*es*), never *estar*.",
    build: (v) => `${v} ______ en el auditorio principal a las seis de la tarde. (event location)`,
    vars: ["La entrega de premios", "La ceremonia de apertura", "El concierto benéfico", "El debate intercolegial", "La proyección del documental"],
  },
  {
    ans: "está",
    wrong: "es",
    rule: "**Physical location** of a building or place ALWAYS uses **estar** (*está*).",
    build: (v) => `${v} ______ a cinco minutos a pie de la estación central. (physical building location)`,
    vars: ["El Museo del Prado", "La biblioteca municipal", "El centro cultural", "El teatro histórico", "La facultad de lenguas"],
  },
];

const SER_ESTAR_T2: SerEstarSpec[] = [
  {
    ans: "es",
    wrong: "está",
    rule: "**Ser seguro/a** = safe/reliable; *estar seguro/a* = sure/certain.",
    build: (v) => `Gracias a los nuevos carriles bici, ${v} ______ mucho más seguro para los ciclistas. (meaning: safe)`,
    vars: ["el barrio norte", "el trayecto al colegio", "el centro histórico", "el paseo marítimo", "el acceso universitario"],
  },
  {
    ans: "estamos",
    wrong: "somos",
    rule: "**Estar seguro/a de que** = to be sure/certain (*nosotros* → **estamos**).",
    build: (v) => `Nosotros ______ seguros de que ${v} mejorará la convivencia. (meaning: certain)`,
    vars: ["el programa de mentoría", "el huerto urbano", "el intercambio lingüístico", "la nueva biblioteca", "la reforma horaria"],
  },
  {
    ans: "están",
    wrong: "son",
    rule: "**Estar verde** = unripe (fruit) or inexperienced; *ser verde* = green in colour.",
    build: (v) => `Todavía no compres ${v}, porque ______ demasiado verdes. (meaning: unripe)`,
    vars: ["esos plátanos", "los aguacates del puesto", "aquellos mangos", "las manzanas ecológicas", "los tomates del mercado"],
  },
  {
    ans: "está",
    wrong: "es",
    rule: "**Estar malo/a** = to be ill/sick; *ser malo/a* = bad/harmful.",
    build: (v) => `${v} no pudo asistir al ensayo porque ______ malo con gripe. (meaning: ill)`,
    vars: ["El guitarrista", "Nuestro entrenador", "El ponente invitado", "Mi compañero Diego", "El director del coro"],
  },
  {
    ans: "estoy",
    wrong: "soy",
    rule: "**Estar orgulloso/a de** = proud of; *ser orgulloso/a* = arrogant/proud-natured.",
    build: (v) => `Como coordinador, ______ muy orgulloso del esfuerzo de ${v}. (meaning: proud of)`,
    vars: ["los voluntarios", "toda la promoción", "nuestro equipo de debate", "las familias participantes", "el club de teatro"],
  },
  {
    ans: "son",
    wrong: "están",
    rule: "**Ser atento/a** = polite/thoughtful (character trait); *estar atento/a* = paying close attention.",
    build: (v) => `Los anfitriones en ${v} ______ siempre muy atentos con los visitantes extranjeros. (meaning: thoughtful/courteous)`,
    vars: ["Cartagena", "Cusco", "Granada", "Montevideo", "Mérida"],
  },
  {
    ans: "estaban",
    wrong: "eran",
    rule: "**Estar atento/a** = paying close attention (*imperfecto*, *ellos* → **estaban**).",
    build: (v) => `Durante la entrevista sobre ${v}, todos los periodistas ______ muy atentos. (meaning: paying attention, imperfect)`,
    vars: ["inteligencia artificial", "crisis hídrica", "derechos lingüísticos", "migración juvenil", "cine latinoamericano"],
  },
];

const SER_ESTAR_T3: SerEstarSpec[] = [
  {
    ans: "fue",
    wrong: "estuvo",
    rule: "**Action passive** (*ser + participio + por [agent]*): completed past action takes preterite **fue**.",
    build: (v) => `La ley de protección costera ______ aprobada por el parlamento en ${v}. (action passive, preterite)`,
    vars: ["2024", "marzo pasado", "una votación histórica", "sesión extraordinaria", "el último trimestre"],
  },
  {
    ans: "está",
    wrong: "es",
    rule: "**Resultant state** (*estar + participio*, no agent): current resulting condition takes **está**.",
    build: (v) => `El centro cívico de ${v} ______ cerrado por reformas desde enero. (resultant current state)`,
    vars: ["Salamanca", "Medellín", "Córdoba", "Puebla", "Arequipa"],
  },
  {
    ans: "es",
    wrong: "está",
    rule: "**Ser vivo/a** = sharp/lively/quick-witted; *estar vivo/a* = alive.",
    build: (v) => `${v} ______ muy viva y detectó al instante la ironía del editorial. (meaning: quick-witted)`,
    vars: ["La alumna", "La redactora jefa", "Nuestra debatiente", "La crítica literaria", "Mi prima Clara"],
  },
  {
    ans: "están",
    wrong: "son",
    rule: "**Estar vivo/a** = alive / still living (*3rd pl. present* → **están**).",
    build: (v) => `Gracias al proyecto de reforestación, casi todos los árboles plantados en ${v} ______ vivos. (meaning: alive)`,
    vars: ["la reserva natural", "el parque fluvial", "la ladera sur", "el corredor verde", "el humedal costero"],
  },
  {
    ans: "fueron",
    wrong: "estuvieron",
    rule: "**Action passive plural** (*ser + participio + por [agent]*): preterite *ellos* → **fueron**.",
    build: (v) => `Los murales comunitarios de ${v} ______ restaurados por artistas locales el mes pasado. (action passive, preterite)`,
    vars: ["Valparaíso", "Oaxaca", "Bogotá", "Madrid", "Buenos Aires"],
  },
  {
    ans: "están",
    wrong: "son",
    rule: "**Resultant state plural** (*estar + participio*): present ongoing condition → **están**.",
    build: (v) => `Todas las becas para el programa de ${v} ya ______ asignadas. (resultant current state)`,
    vars: ["intercambio en Quito", "verano en Granada", "periodismo digital", "biología marina", "música andina"],
  },
  {
    ans: "es",
    wrong: "está",
    rule: "**Ser grave** = serious/severe (issue/problem); *estar grave* = critically ill (patient).",
    build: (v) => `La escasez de agua en ${v} ______ un problema realmente grave. (meaning: serious problem)`,
    vars: ["el sureste español", "el altiplano andino", "el norte de México", "la región central", "la zona costera"],
  },
];

// ---------------------------------------------------------------------------
// Drill 4 data: IB Paper 1 Text-Type Matcher
// ---------------------------------------------------------------------------
interface TextTypeScenario {
  best: string;
  accept: string[];
  distractors: [string, string];
  whyBest: string;
  whyWrong: [string, string];
  build: (v: string) => string;
  vars: readonly string[];
}

const TT_T1: TextTypeScenario[] = [
  {
    best: "Diario personal",
    accept: ["diario personal", "diario", "un diario", "un diario personal"],
    distractors: ["Informe", "Folleto"],
    whyBest: "**Diario personal** matches private self-reflection, informal 1st-person register, and candid emotional tone.",
    whyWrong: [
      "An *informe* is an objective institutional report for an authority, not private self-reflection.",
      "A *folleto* is a promotional public brochure with slogans and tips, unsuitable for private reflection.",
    ],
    build: (v) => `You have just completed your first week of ${v} and want to record your private emotional reactions and personal reflections for yourself.`,
    vars: ["a digital-detox challenge", "an exchange stay in Seville", "volunteering at a community kitchen", "living with a host family in Quito"],
  },
  {
    best: "Carta formal",
    accept: ["carta formal", "una carta formal"],
    distractors: ["Blog", "Diario personal"],
    whyBest: "**Carta formal** matches an official institutional recipient (*usted*), polite formal framing, and direct civic petition.",
    whyWrong: [
      "A *blog* addresses a general online public in semi-formal *tú* tone rather than a specific official.",
      "A *diario personal* is private and has no external institutional addressee.",
    ],
    build: (v) => `Write directly to the city mayor (*Sr. Alcalde*) formally requesting municipal support for ${v} in your neighbourhood.`,
    vars: ["safer protected cycle lanes", "keeping the local youth library open", "expanding recycling stations", "funding bilingual cultural workshops"],
  },
  {
    best: "Reseña",
    accept: ["reseña", "una reseña"],
    distractors: ["Carta formal", "Propuesta"],
    whyBest: "**Reseña** (Mass Media) gives a spoiler-free overview, balanced critical evaluation, and final recommendation to magazine readers.",
    whyWrong: [
      "A *carta formal* addresses a single official rather than evaluating a cultural work for readers.",
      "A *propuesta* pitches an organisational action plan rather than critiquing an artwork or film.",
    ],
    build: (v) => `For your school’s Spanish cultural magazine, evaluate the strengths and weaknesses of ${v} and recommend whether students should experience it.`,
    vars: ["a new Mexican documentary on urban murals", "a Spanish-language play performed locally", "an exhibition on Latin American photography", "a recent Argentinian coming-of-age film"],
  },
  {
    best: "Discurso",
    accept: ["discurso", "un discurso"],
    distractors: ["Informe", "Correo electrónico"],
    whyBest: "**Discurso** is crafted to be spoken aloud to a live audience using vocatives, rhetorical rhythm, inclusive *nosotros*, and closing thanks.",
    whyWrong: [
      "An *informe* is a silent written report of objective data, not an inspiring live oral address.",
      "A *correo electrónico* is written digital correspondence rather than a public assembly address.",
    ],
    build: (v) => `You have been invited to speak live at a school assembly of 400 students and teachers to inspire everyone to support ${v}.`,
    vars: ["the annual coastal clean-up", "mental-health awareness week", "a peer language-mentoring scheme", "reducing cafeteria plastic waste"],
  },
  {
    best: "Folleto",
    accept: ["folleto", "un folleto", "folleto / guía", "guía", "una guía"],
    distractors: ["Editorial", "Diario personal"],
    whyBest: "**Folleto / Guía** attracts a general public visually with a catchy slogan, scannable subheadings, bulleted practical tips, and contact details.",
    whyWrong: [
      "An *editorial* states a newspaper’s formal institutional opinion without slogans or practical tourist/public tip boxes.",
      "A *diario personal* is private introspection, not a public informational guide.",
    ],
    build: (v) => `Create a scannable public guide with a catchy slogan, bulleted tips, and practical info to encourage visitors to practise ${v}.`,
    vars: ["responsible ecotourism in Costa Rica", "healthy Mediterranean eating habits", "safe social-media privacy habits", "zero-waste habits at the local eco-market"],
  },
  {
    best: "Entrevista",
    accept: ["entrevista", "una entrevista"],
    distractors: ["Propuesta", "Diario personal"],
    whyBest: "**Entrevista** opens with a headline and contextual intro before presenting clearly labelled Q&A turns from the conversation.",
    whyWrong: [
      "A *propuesta* presents a structured action plan to an authority rather than a published conversation.",
      "A *diario personal* records private thoughts rather than a journalistic Q&A exchange.",
    ],
    build: (v) => `For your school newspaper, publish the Q&A conversation you just held with ${v} so readers discover their insights in their own words.`,
    vars: ["a Colombian renewable-energy engineer", "a Spanish Paralympic athlete", "a Peruvian indigenous-language teacher", "a Chilean indie film director"],
  },
];

const TT_T2: TextTypeScenario[] = [
  {
    best: "Informe",
    accept: ["informe", "un informe"],
    distractors: ["Blog", "Reseña"],
    whyBest: "**Informe** (Professional) presents objective survey findings, data analysis, and concise conclusions under numbered subheadings.",
    whyWrong: [
      "A *blog* uses conversational personal tone and reader comments rather than objective institutional reporting.",
      "A *reseña* critiques a book/film/event rather than reporting formal survey data.",
    ],
    build: (v) => `After surveying 150 classmates on ${v}, present your objective findings, key data trends, and brief conclusions to the school leadership committee.`,
    vars: ["daily screen-time and sleep quality", "commuting and public-transport habits", "participation in community volunteering", "cafeteria food-waste volumes"],
  },
  {
    best: "Propuesta",
    accept: ["propuesta", "una propuesta", "propuesta formal"],
    distractors: ["Artículo", "Carta informal"],
    whyBest: "**Propuesta** (Professional) pitches a structured, feasible action plan (objectives, concrete steps, benefits) directly to decision-makers.",
    whyWrong: [
      "An *artículo* informs general readers journalistically rather than pitching a concrete internal action plan to management.",
      "A *carta informal* uses familiar *tú* register for a friend, not an institutional proposal.",
    ],
    build: (v) => `Pitch a structured, feasible action plan with clear objectives, steps, and expected benefits to your school principal to launch ${v}.`,
    vars: ["a weekly Hispanic Cultural Exchange Café", "a solar-panel student sustainability project", "a peer mental-health listening programme", "a community book-sharing hub"],
  },
  {
    best: "Editorial",
    accept: ["editorial", "un editorial"],
    distractors: ["Blog", "Carta informal"],
    whyBest: "**Editorial** (Mass Media) articulates a newspaper’s authoritative institutional stance (*nosotros* / impersonal) without personal anecdotes.",
    whyWrong: [
      "A *blog* uses a subjective personal voice and comment prompts instead of an institutional press stance.",
      "A *carta informal* addresses one friend privately rather than a newspaper readership.",
    ],
    build: (v) => `Writing on behalf of your national newspaper’s editorial board (*nosotros*, no personal anecdotes), take a firm institutional stance on ${v}.`,
    vars: ["regulating generative AI in journalism", "protecting co-official regional languages", "curbing overtourism in historic city centres", "expanding paid youth apprenticeships"],
  },
  {
    best: "Blog",
    accept: ["blog", "un blog", "entrada de blog"],
    distractors: ["Informe", "Carta formal"],
    whyBest: "**Blog** blends an engaging personal-public voice (*tú/ustedes*), catchy title, topical tags, and an explicit invitation for reader comments.",
    whyWrong: [
      "An *informe* demands formal objective distance with zero reader-comment interaction.",
      "A *carta formal* addresses a single authority formally rather than an interactive online youth community.",
    ],
    build: (v) => `Write an engaging, conversational online post for Hispanic teenagers sharing your tips on ${v} and inviting readers to share their views in the comments.`,
    vars: ["shopping ethically beyond fast fashion", "surviving IB exam stress healthily", "travelling on a student rail budget across Spain", "discovering contemporary Latin American music"],
  },
  {
    best: "Artículo",
    accept: ["artículo", "un artículo", "artículo periodístico"],
    distractors: ["Diario personal", "Carta formal"],
    whyBest: "**Artículo** (Mass Media) pairs an informative headline, individual byline (*Por…*), punchy lead, subheadings, and balanced journalistic evidence.",
    whyWrong: [
      "A *diario personal* is private self-reflection with no journalistic reporting.",
      "A *carta formal* targets one official recipient rather than a broad magazine or newspaper readership.",
    ],
    build: (v) => `Write an informative, well-researched feature with a headline, byline, and subheadings for a national Hispanic magazine exploring ${v}.`,
    vars: ["how remote work is revitalising rural Spanish villages", "the rise of women’s football across Latin America", "how indigenous chefs are reshaping Peruvian gastronomy", "the impact of streaming platforms on Hispanic cinema"],
  },
  {
    best: "Correo electrónico",
    accept: ["correo electrónico", "un correo electrónico", "correo", "email", "e-mail"],
    distractors: ["Editorial", "Reseña"],
    whyBest: "**Correo electrónico** uses compact digital headers (`De / Para / Asunto`), focused purpose-driven paragraphs, and register-matched sign-off.",
    whyWrong: [
      "An *editorial* states a newspaper’s public stance rather than direct one-to-one correspondence.",
      "A *reseña* evaluates a cultural work for magazine readers rather than coordinating logistics directly.",
    ],
    build: (v) => `Send a concise, practical digital message (with clear subject line) to the NGO coordinator confirming your availability and asking two questions about ${v}.`,
    vars: ["the weekend beach-restoration shift", "the summer translation internship in Madrid", "the online tutoring schedule for newcomers", "the charity photography workshop"],
  },
];

// ---------------------------------------------------------------------------
// Drill 5 data: [HL] Imperfect Subjunctive, Cuyo, Lo Cual & De Ahí Que
// ---------------------------------------------------------------------------
interface HlImpSubjEntry {
  inf: string;
  ellosPret: string;
  pron: PronKey;
  ra: string;
  se: string;
  wrongCond: string;
  contexts: readonly string[];
}

const HL_IMP_SUBJ: HlImpSubjEntry[] = [
  {
    inf: "tener",
    ellosPret: "tuvieron",
    pron: "nos",
    ra: "tuviéramos",
    se: "tuviésemos",
    wrongCond: "tendríamos",
    contexts: [
      "Si nosotros ______ (tener) más financiación, ampliaríamos las becas rurales.",
      "La directora deseaba que nosotros ______ (tener) acceso a prensa hispanohablante.",
      "Actuaban como si nosotros no ______ (tener) voz en el debate municipal.",
      "Ojalá ______ (tener, nosotros) más bibliotecas públicas abiertas los domingos.",
    ],
  },
  {
    inf: "poder",
    ellosPret: "pudieron",
    pron: "ellos",
    ra: "pudieran",
    se: "pudiesen",
    wrongCond: "podrían",
    contexts: [
      "Si los jóvenes ______ (poder) votar antes, aumentaría el compromiso cívico.",
      "El comité pidió que todos los barrios ______ (poder) usar el polideportivo.",
      "Hablaban como si las autoridades no ______ (poder) regular los alquileres.",
      "Sería deseable que las escuelas rurales ______ (poder) ofrecer cursos bilingües.",
    ],
  },
  {
    inf: "saber",
    ellosPret: "supieron",
    pron: "el",
    ra: "supiera",
    se: "supiese",
    wrongCond: "sabría",
    contexts: [
      "Comentaba el conflicto como si lo ______ (saber) absolutamente todo.",
      "Si el público ______ (saber) el coste ambiental de la moda rápida, compraría menos.",
      "Dudábamos que el candidato ______ (saber) responder sin improvisar.",
      "El tribunal exigía que cada periodista ______ (saber) verificar sus fuentes.",
    ],
  },
  {
    inf: "hacer",
    ellosPret: "hicieron",
    pron: "nos",
    ra: "hiciéramos",
    se: "hiciésemos",
    wrongCond: "haríamos",
    contexts: [
      "El profesor sugirió que nosotros ______ (hacer) un análisis comparativo de dos editoriales.",
      "Si nosotros ______ (hacer) oídos sordos al problema, la brecha crecería.",
      "Era imprescindible que ______ (hacer, nosotros) una propuesta realista.",
      "Nos recomendaron que ______ (hacer, nosotros) entrevistas a vecinos mayores.",
    ],
  },
  {
    inf: "ir",
    ellosPret: "fueron",
    pron: "el",
    ra: "fuera",
    se: "fuese",
    wrongCond: "iría",
    contexts: [
      "Si el proyecto ______ (ir) acompañado de formación docente, tendría más impacto.",
      "Me sorprendió que la delegada ______ (ir) sola a la reunión ministerial.",
      "Preferíamos que nuestra representante ______ (ir) personalmente a presentar el informe.",
      "Insistieron en que el equipo médico ______ (ir) primero a las aldeas aisladas.",
    ],
  },
  {
    inf: "decir",
    ellosPret: "dijeron",
    pron: "ellos",
    ra: "dijeran",
    se: "dijesen",
    wrongCond: "dirían",
    contexts: [
      "Les pedimos que nos ______ (decir) con sinceridad qué falló en la campaña.",
      "Si los testigos ______ (decir) toda la verdad, se aclararía el caso.",
      "El jurado exigió que los finalistas ______ (decir) sus fuentes exactas.",
      "Dudaba mucho que los portavoces ______ (decir) la cifra real del presupuesto.",
    ],
  },
  {
    inf: "haber",
    ellosPret: "hubieron",
    pron: "nos",
    ra: "hubiéramos",
    se: "hubiésemos",
    wrongCond: "habríamos",
    contexts: [
      "Si nosotros ______ (haber) protegido el humedal antes, habríamos evitado la sequía.",
      "Ojalá ______ (haber, nosotros) escuchado antes las advertencias científicas.",
      "Si ______ (haber, nosotros) invertido en trenes regionales, habría menos tráfico.",
      "Lamentaron que no ______ (haber, nosotros) consultado antes a los vecinos.",
    ],
  },
  {
    inf: "construir",
    ellosPret: "construyeron",
    pron: "ellos",
    ra: "construyeran",
    se: "construyesen",
    wrongCond: "construirían",
    contexts: [
      "Si los ayuntamientos ______ (construir) viviendas públicas, bajarían los precios.",
      "Los vecinos exigieron que se ______ (construir) más zonas verdes en el centro.",
      "Sería deseable que las empresas ______ (construir) edificios energéticamente eficientes.",
      "Propusimos que ______ (construir, ellos) un carril bici seguro hasta el campus.",
    ],
  },
  {
    inf: "poner",
    ellosPret: "pusieron",
    pron: "ellos",
    ra: "pusieran",
    se: "pusiesen",
    wrongCond: "pondrían",
    contexts: [
      "Si los gobiernos ______ (poner) límites claros a los algoritmos, crecería la confianza.",
      "La asociación pidió que ______ (poner, ellos) fuentes de agua gratuita en la plaza.",
      "Era urgente que las plataformas ______ (poner) filtros contra la desinformación.",
      "Ojalá los municipios ______ (poner) en marcha más comedores comunitarios.",
    ],
  },
  {
    inf: "venir",
    ellosPret: "vinieron",
    pron: "ellos",
    ra: "vinieran",
    se: "viniesen",
    wrongCond: "vendrían",
    contexts: [
      "Nos alegró muchísimo que tantos poetas latinoamericanos ______ (venir) al congreso.",
      "Si los expertos ______ (venir) al colegio, los alumnos harían preguntas directas.",
      "Esperábamos que representantes de ambas regiones ______ (venir) al debate.",
      "La organización invitó a que jóvenes voluntarios ______ (venir) desde Valencia.",
    ],
  },
  {
    inf: "dormir",
    ellosPret: "durmieron",
    pron: "nos",
    ra: "durmiéramos",
    se: "durmiésemos",
    wrongCond: "dormiríamos",
    contexts: [
      "El pediatra recomendó que ______ (dormir, nosotros) al menos ocho horas sin móvil.",
      "Si ______ (dormir, nosotros) mejor entre semana, rendiríamos más en clase.",
      "Nos aconsejaron que no ______ (dormir, nosotros) con notificaciones activadas.",
      "Sería saludable que ______ (dormir, nosotros) en horarios más regulares.",
    ],
  },
  {
    inf: "querer",
    ellosPret: "quisieron",
    pron: "el",
    ra: "quisiera",
    se: "quisiese",
    wrongCond: "querría",
    contexts: [
      "Si la empresa ______ (querer) reducir su huella, invertiría en transporte ferroviario.",
      "Hablaría con la concejala aunque ella no ______ (querer) revisar el proyecto.",
      "Dudábamos que el director ______ (querer) cancelar la semana cultural.",
      "Nos sorprendió que nadie ______ (querer) presidir la comisión vecinal.",
    ],
  },
];

interface HlRelSpec {
  ans: string;
  accept: string[];
  wrong: string;
  rule: string;
  build: (v: string) => string;
  vars: readonly string[];
}

const HL_REL_T2: HlRelSpec[] = [
  {
    ans: "cuyo",
    accept: ["cuyo"],
    wrong: "cuya",
    rule: "**Cuyo** agrees with the following **masculine singular** noun (*impacto / mensaje / enfoque*), NOT the possessor.",
    build: (v) => `Analizamos una campaña ambiental ______ ${v} transformó los hábitos de toda la ciudad.`,
    vars: ["impacto social", "mensaje visual", "enfoque pedagógico", "diseño innovador", "alcance internacional"],
  },
  {
    ans: "cuya",
    accept: ["cuya"],
    wrong: "cuyo",
    rule: "**Cuya** agrees with the following **feminine singular** noun (*obra / labor / influencia*), NOT the possessor.",
    build: (v) => `Entrevistamos a un escritor mexicano ______ ${v} inspira a miles de lectores jóvenes.`,
    vars: ["obra narrativa", "labor educativa", "influencia cultural", "mirada crítica", "historia personal"],
  },
  {
    ans: "cuyos",
    accept: ["cuyos"],
    wrong: "cuyas",
    rule: "**Cuyos** agrees with the following **masculine plural** noun (*programas / efectos / logros* — watch Greek *-ma* nouns!).",
    build: (v) => `Colaboramos con una fundación andina ______ ${v} benefician a zonas rurales.`,
    vars: ["programas bilingües", "proyectos solares", "logros comunitarios", "talleres gratuitos", "resultados medibles"],
  },
  {
    ans: "cuyas",
    accept: ["cuyas"],
    wrong: "cuyos",
    rule: "**Cuyas** agrees with the following **feminine plural** noun (*iniciativas / tradiciones / canciones*).",
    build: (v) => `Visitamos un pueblo gallego ______ ${v} resisten frente a la globalización.`,
    vars: ["tradiciones orales", "iniciativas culturales", "lenguas ancestrales", "fiestas patronales", "recetas centenarias"],
  },
  {
    ans: "lo cual",
    accept: ["lo cual", "lo que"],
    wrong: "el cual",
    rule: "Neuter **lo cual** (or *lo que*) refers back to an **entire preceding clause** after a comma.",
    build: (v) => `${v}, ______ obliga a replantear las políticas públicas.`,
    vars: [
      "La población rural envejece rápidamente",
      "El precio del alquiler duplica el salario mínimo",
      "La desinformación circula más rápido que las noticias verificadas",
      "El turismo estacional satura los servicios locales",
      "El consumo de plásticos sigue aumentando",
    ],
  },
  {
    ans: "la cual",
    accept: ["la cual", "la que"],
    wrong: "el cual",
    rule: "After compound/multi-syllable prepositions (*mediante, a través de*), use **la cual** to match a feminine singular antecedent.",
    build: (v) => `El parlamento aprobó una reforma mediante ______ ${v}.`,
    vars: [
      "se amplían las becas universitarias",
      "se protegen las lenguas cooficiales",
      "se garantiza la transparencia algorítmica",
      "se reduce la jornada laboral",
      "se financian bibliotecas rurales",
    ],
  },
];

interface HlDeAhiSpec {
  verb: string;
  subj: string;
  indic: string;
  clauseLead: readonly string[];
  tail: string;
}

const HL_DE_AHI: HlDeAhiSpec[] = [
  {
    verb: "ser",
    subj: "sea",
    indic: "es",
    clauseLead: [
      "La sequía persiste en todo el sur",
      "La brecha digital frena el aprendizaje rural",
      "La desinformación erosiona la confianza ciudadana",
      "El paro juvenil supera la media europea",
    ],
    tail: "imprescindible actuar de inmediato.",
  },
  {
    verb: "resultar",
    subj: "resulte",
    indic: "resulta",
    clauseLead: [
      "Los alquileres han subido un treinta por ciento",
      "Las redes sociales amplifican los bulos en segundos",
      "El transporte público rural es insuficiente",
      "El coste energético asfixia a los pequeños comercios",
    ],
    tail: "urgente impulsar reformas estructurales.",
  },
  {
    verb: "haber",
    subj: "haya",
    indic: "hay",
    clauseLead: [
      "No se consultó a los vecinos antes de cerrar el centro",
      "Faltan espacios culturales gratuitos en el distrito",
      "Las condiciones laborales empeoraron este año",
      "Persisten graves desigualdades educativas",
    ],
    tail: "tantas protestas ciudadanas.",
  },
  {
    verb: "tener",
    subj: "tenga",
    indic: "tiene",
    clauseLead: [
      "El turismo masivo encarece los servicios básicos",
      "La falta de médicos afecta a numerosos pueblos",
      "La contaminación acústica daña el descanso",
      "Los algoritmos priorizan el sensacionalismo",
    ],
    tail: "que intervenir el ayuntamiento cuanto antes.",
  },
  {
    verb: "reducir",
    subj: "reduzca",
    indic: "reduce",
    clauseLead: [
      "Las emisiones del tráfico urbano han batido récords",
      "El consumo de envases desechables sigue disparado",
      "El calor extremo amenaza la salud urbana",
      "El presupuesto municipal es cada vez más ajustado",
    ],
    tail: "el gobierno el tráfico privado en el centro.",
  },
];

// ---------------------------------------------------------------------------
// Exported 5 Procedural Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: PRESENT SUBJUNCTIVE CONJUGATION (SL, LEVEL 1)
  // =========================================================================
  {
    id: "6-grammar-text-types.present-subjunctive",
    topicId: "6-grammar-text-types",
    title: "Present Subjunctive Conjugation (Regular, Stem-Change & DISHES)",
    level: 1,
    ibLevel: "SL",
    guideRef: "subjuntivo-completo",
    generate(rng, tier) {
      const pool = tier === 1 ? SUBJ_T1 : tier === 2 ? SUBJ_T2 : SUBJ_T3;
      const verb = rng.pick(pool);
      const prons: PronKey[] = ["yo", "tu", "el", "nos", "vos", "ellos"];
      const pron = rng.pick(prons);
      const trigger = rng.pick(SUBJ_TRIGGERS);
      const ans = verb.forms[pron];
      const indic = verb.indic[pron];

      const answer: AnswerSpec = { type: "text", accept: [ans], display: ans };
      const traps: Trap[] = [];
      if (indic !== ans && checkAnswer(answer, indic).status !== "correct") {
        traps.push({
          spec: { type: "text", accept: [indic] },
          feedback: `*${indic}* is present **indicative** — *${trigger}…* triggers the **present subjunctive** (**${ans}**).`,
        });
      }
      if (verb.inf !== ans && checkAnswer(answer, verb.inf).status !== "correct") {
        traps.push({
          spec: { type: "text", accept: [verb.inf] },
          feedback: `Conjugate **${verb.inf}** for **${PRON_LABEL[pron]}** rather than leaving the infinitive after *que* → **${ans}**.`,
        });
      }

      return {
        prompt: `Conjugate **${verb.inf}** (${verb.meaning}) in the **present subjunctive** for **${PRON_LABEL[pron]}**:\n*${trigger} (${PRON_LABEL[pron]}) ______.*`,
        answer,
        hint: `Rule for **${verb.inf}**: ${verb.rule}. Check Spanish accent marks carefully!`,
        traps,
        solution: [
          `1. Trigger *${trigger}* calls for the **present subjunctive**.`,
          `2. Rule for **${verb.inf}**: ${verb.rule}.`,
          `3. Exact form for **${PRON_LABEL[pron]}**: **${ans}**.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: POR VS PARA DISCRIMINATION (SL, LEVEL 1)
  // =========================================================================
  {
    id: "6-grammar-text-types.por-vs-para",
    topicId: "6-grammar-text-types",
    title: "Por vs Para Precision in IB Contexts",
    level: 1,
    ibLevel: "SL",
    guideRef: "contrastes-clave-por-para-ser-estar",
    generate(rng, tier) {
      const pool = tier === 1 ? POR_PARA_T1 : tier === 2 ? POR_PARA_T2 : POR_PARA_T3;
      const spec = rng.pick(pool);
      const variant = rng.pick(spec.vars);
      const sentence = spec.build(variant);
      const opposite = spec.prep === "por" ? "para" : "por";

      const traps: Trap[] = [
        {
          spec: { type: "text", accept: [opposite] },
          feedback: `Not *${opposite}*! ${spec.reason}`,
        },
      ];

      return {
        prompt: `Type **por** or **para** to complete the sentence accurately:\n*${sentence}*`,
        answer: { type: "text", accept: [spec.prep], display: spec.prep },
        hint: "Ask whether the phrase looks back/through (cause, exchange, channel, duration → *por*) or points forward like an arrow (purpose, recipient, deadline, destination, opinion → *para*).",
        traps,
        solution: [
          `Correct preposition: **${spec.prep}**.`,
          spec.reason,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: SER VS ESTAR MEANING SHIFTS & EVENTS (SL, LEVEL 2)
  // =========================================================================
  {
    id: "6-grammar-text-types.ser-vs-estar-shifts",
    topicId: "6-grammar-text-types",
    title: "Ser vs Estar: Meaning Shifts, Events & Passive Voice",
    level: 2,
    ibLevel: "SL",
    guideRef: "contrastes-clave-por-para-ser-estar",
    generate(rng, tier) {
      const pool = tier === 1 ? SER_ESTAR_T1 : tier === 2 ? SER_ESTAR_T2 : SER_ESTAR_T3;
      const spec = rng.pick(pool);
      const variant = rng.pick(spec.vars);
      const sentence = spec.build(variant);

      const traps: Trap[] = [
        {
          spec: { type: "text", accept: [spec.wrong] },
          feedback: `Wrong copula (*${spec.wrong}*)! ${spec.rule}`,
        },
      ];

      return {
        prompt: `Type the exact conjugated form of **ser** or **estar** to match the intended meaning:\n*${sentence}*`,
        answer: { type: "text", accept: [spec.ans], display: spec.ans },
        hint: "Check both the **meaning shift** (inherent quality / event / action passive → *ser*; temporary state / physical location / resultant state → *estar*) AND the subject/tense.",
        traps,
        solution: [
          `Exact form: **${spec.ans}** (not *${spec.wrong}*).`,
          spec.rule,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: PAPER 1 OPTIMAL IB TEXT-TYPE MATCHER (SL, LEVEL 2)
  // =========================================================================
  {
    id: "6-grammar-text-types.paper1-text-type-match",
    topicId: "6-grammar-text-types",
    title: "IB Paper 1 Text-Type Selector (Audience, Context & Purpose)",
    level: 2,
    ibLevel: "SL",
    guideRef: "tipos-de-texto-convenciones",
    generate(rng, tier) {
      const pool = tier === 1 ? TT_T1 : tier === 2 ? TT_T2 : [...TT_T1, ...TT_T2];
      const sc = rng.pick(pool);
      const variant = rng.pick(sc.vars);
      const options = rng.shuffle([sc.best, sc.distractors[0], sc.distractors[1]]);
      const taskText = sc.build(variant);

      const traps: Trap[] = [
        {
          spec: { type: "text", accept: [sc.distractors[0].toLowerCase()] },
          feedback: sc.whyWrong[0],
        },
        {
          spec: { type: "text", accept: [sc.distractors[1].toLowerCase()] },
          feedback: sc.whyWrong[1],
        },
      ];

      return {
        prompt: `**Paper 1 Prompt:** ${taskText}\n\n**Options offered:** ${options.join(" · ")}\n\nType the **single MOST appropriate IB text type** (in Spanish):`,
        answer: { type: "text", accept: sc.accept, display: sc.best },
        hint: "Apply the 5 Conceptual Understandings (**Audience, Context, Purpose, Meaning, Variation**): eliminate formats whose register or structure clashes with who reads the text and why.",
        traps,
        solution: [
          `Optimal IB text type: **${sc.best}**.`,
          sc.whyBest,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 5: [HL] IMPERFECT SUBJUNCTIVE & C1 RELATIVES / DE AHÍ QUE (LEVEL 3)
  // =========================================================================
  {
    id: "6-grammar-text-types.imperfect-subj-c1-relatives-hl",
    topicId: "6-grammar-text-types",
    title: "[HL] Imperfect Subjunctive, Cuyo, Lo Cual & De Ahí Que",
    level: 3,
    ibLevel: "HL",
    guideRef: "estilo-c1-conectores-hl",
    generate(rng, tier) {
      // Tier 1: Imperfect Subjunctive (-ra / -se); Tier 2: Cuyo / Lo cual / La cual;
      // Tier 3: Mixed Imperfect Subjunctive + C1 Relatives + De ahí que + Subjuntivo!
      const mode = tier === 1 ? "imp" : tier === 2 ? "rel" : rng.pick(["imp", "rel", "deahi"] as const);

      if (mode === "imp") {
        const entry = rng.pick(HL_IMP_SUBJ);
        const sentence = rng.pick(entry.contexts);
        const traps: Trap[] = [
          {
            spec: { type: "text", accept: [entry.wrongCond] },
            feedback: `Never use the conditional (*${entry.wrongCond}*) inside a *si*-clause or past subjunctive slot! Build the imperfect subjunctive from *ellos* preterite **${entry.ellosPret}** → **${entry.ra}** (or **${entry.se}**).`,
          },
        ];
        return {
          prompt: `[HL] Type the exact **imperfect subjunctive** (*-ra* or *-se* form, with any required accent mark) of **${entry.inf}** (${PRON_LABEL[entry.pron]}):\n*${sentence}*`,
          answer: { type: "text", accept: [entry.ra, entry.se], display: entry.ra },
          hint: `Take the 3rd-person plural preterite (**${entry.ellosPret}**), drop *-ron*, and add the imperfect subjunctive ending for **${PRON_LABEL[entry.pron]}** (accent *nosotros*!).`,
          traps,
          solution: [
            `1. *ellos* preterite of **${entry.inf}**: *${entry.ellosPret}*.`,
            `2. Drop *-ron* and add *-ra* (or *-se*) endings for **${PRON_LABEL[entry.pron]}** → **${entry.ra}** (or **${entry.se}**).`,
          ],
        };
      }

      if (mode === "rel") {
        const spec = rng.pick(HL_REL_T2);
        const variant = rng.pick(spec.vars);
        const sentence = spec.build(variant);
        const traps: Trap[] = [
          {
            spec: { type: "text", accept: [spec.wrong] },
            feedback: `Agreement / pronoun error (*${spec.wrong}*)! ${spec.rule}`,
          },
        ];
        return {
          prompt: `[HL] Insert the exact C1 relative pronoun (**cuyo/cuya/cuyos/cuyas**, **lo cual**, or **la cual**):\n*${sentence}*`,
          answer: { type: "text", accept: spec.accept, display: spec.ans },
          hint: "*Cuyo* agrees strictly with the noun **immediately after it** (never the possessor); *lo cual* summarises an entire clause after a comma; *la cual* matches a feminine singular noun after compound prepositions.",
          traps,
          solution: [
            `Exact C1 relative pronoun: **${spec.ans}**.`,
            spec.rule,
          ],
        };
      }

      // mode === "deahi"
      const entry = rng.pick(HL_DE_AHI);
      const lead = rng.pick(entry.clauseLead);
      const traps: Trap[] = [
        {
          spec: { type: "text", accept: [entry.indic] },
          feedback: `**De ahí que** ALWAYS demands the **subjunctive** (**${entry.subj}**), never indicative *${entry.indic}*!`,
        },
      ];
      return {
        prompt: `[HL] Conjugate **${entry.verb}** accurately after **de ahí que**:\n*${lead}; de ahí que ______ (${entry.verb}) ${entry.tail}*`,
        answer: { type: "text", accept: [entry.subj], display: entry.subj },
        hint: "Remember the HL Band 10–12 rule: **de ahí que** ALWAYS triggers the **subjunctive**!",
        traps,
        solution: [
          `1. **De ahí que** mandates the **subjunctive** mood.`,
          `2. Present-zone main clause + **${entry.verb}** (3rd sg.) → **${entry.subj}**.`,
        ],
      };
    },
  },
];
