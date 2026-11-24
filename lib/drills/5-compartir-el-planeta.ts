import type { AnswerSpec, Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";

// ---------------------------------------------------------------------------
// Drill 1: Aunque — Indicative vs Subjunctive Discrimination (SL, Level 1)
// ---------------------------------------------------------------------------

interface AunqueCase {
  inf: string;
  subj: string;
  ind: string;
  sub: string;
  factTail: string;
  hypTail: string;
  factCue: string;
  hypCue: string;
  note: string;
}

const AUNQUE_T1: readonly AunqueCase[] = [
  {
    inf: "subir",
    subj: "la temperatura media",
    ind: "sube",
    sub: "suba",
    factTail: "el consumo energético apenas disminuye",
    hypTail: "habrá que reforzar las redes de riego",
    factCue: "cada verano en el sur de España",
    hypCue: "dos grados el próximo decenio",
    note: "Regular *-ir* verb: present indicative *sube*, present subjunctive *suba*.",
  },
  {
    inf: "llover",
    subj: "el clima invernal",
    ind: "llueve",
    sub: "llueva",
    factTail: "varios embalses andaluces siguen en mínimos",
    hypTail: "los acuíferos tardarán años en recuperarse",
    factCue: "con mayor irregularidad en la península",
    hypCue: "intensamente el mes que viene",
    note: "Stem-changing *o → ue*: present indicative *llueve*, present subjunctive *llueva*.",
  },
  {
    inf: "aumentar",
    subj: "la inversión solar",
    ind: "aumenta",
    sub: "aumente",
    factTail: "la red aún requiere almacenamiento limpio",
    hypTail: "necesitaremos reducir el consumo total",
    factCue: "todos los años en España",
    hypCue: "drásticamente el próximo año",
    note: "Regular *-ar* verb: present indicative *aumenta*, present subjunctive *aumente*.",
  },
  {
    inf: "existir",
    subj: "normativas forestales",
    ind: "existen",
    sub: "existan",
    factTail: "la tala clandestina continúa avanzando",
    hypTail: "sin inspectores locales no serán eficaces",
    factCue: "ya en la cuenca amazónica",
    hypCue: "más sanciones internacionales en el futuro",
    note: "Plural *-ir* verb: present indicative *existen*, present subjunctive *existan*.",
  },
  {
    inf: "costar",
    subj: "la transición energética",
    ind: "cuesta",
    sub: "cueste",
    factTail: "varios municipios ya han empezado la reforma",
    hypTail: "a largo plazo ahorrará miles de millones",
    factCue: "mucho dinero actualmente",
    hypCue: "más de lo previsto en el futuro",
    note: "Stem-changing *o → ue*: present indicative *cuesta*, present subjunctive *cueste*.",
  },
  {
    inf: "crecer",
    subj: "el reciclaje urbano",
    ind: "crece",
    sub: "crezca",
    factTail: "el volumen total de envases sigue siendo alto",
    hypTail: "deberemos priorizar la reducción en origen",
    factCue: "cada año en las grandes capitales",
    hypCue: "un veinte por ciento el año próximo",
    note: "From *yo crezco* (*-cer → -zc-*): indicative *crece*, subjunctive *crezca*.",
  },
  {
    inf: "bajar",
    subj: "el precio de los paneles",
    ind: "baja",
    sub: "baje",
    factTail: "muchas familias aún precisan subvenciones",
    hypTail: "hará falta simplificar los permisos municipales",
    factCue: "de manera constante hoy en día",
    hypCue: "todavía más el próximo trimestre",
    note: "Regular *-ar* verb: indicative *baja*, subjunctive *baje*.",
  },
  {
    inf: "faltar",
    subj: "recursos hídricos",
    ind: "faltan",
    sub: "falten",
    factTail: "persisten fugas en las tuberías antiguas",
    hypTail: "garantizaremos el abastecimiento doméstico",
    factCue: "actualmente en el sureste peninsular",
    hypCue: "lluvias durante la próxima primavera",
    note: "Plural *-ar* verb: indicative *faltan*, subjunctive *falten*.",
  },
];

const AUNQUE_T2: readonly AunqueCase[] = [
  {
    inf: "reducir",
    subj: "las ciudades",
    ind: "reducen",
    sub: "reduzcan",
    factTail: "la huella total del transporte aéreo sigue subiendo",
    hypTail: "la transición industrial continuará siendo clave",
    factCue: "ya el tráfico en sus centros históricos",
    hypCue: "a la mitad el plástico el próximo año",
    note: "From *yo reduzco*: present indicative *reducen*, present subjunctive *reduzcan*.",
  },
  {
    inf: "proteger",
    subj: "el Estado",
    ind: "protege",
    sub: "proteja",
    factTail: "las zonas fronterizas siguen vulnerables",
    hypTail: "la cooperación indígena seguirá siendo esencial",
    factCue: "ya varios parques nacionales",
    hypCue: "nuevas áreas selváticas el próximo año",
    note: "Orthographic change *-ger → -ja*: indicative *protege*, subjunctive *proteja*.",
  },
  {
    inf: "garantizar",
    subj: "las cooperativas",
    ind: "garantizan",
    sub: "garanticen",
    factTail: "el comercio justo sigue siendo minoritario",
    hypTail: "los gobiernos deberán regular a las grandes cadenas",
    factCue: "hoy salarios dignos a sus socios",
    hypCue: "plena trazabilidad en futuras cosechas",
    note: "Orthographic change *-zar → -cen*: indicative *garantizan*, subjunctive *garanticen*.",
  },
  {
    inf: "ser",
    subj: "la reforma fiscal verde",
    ind: "es",
    sub: "sea",
    factTail: "suscita un vivo debate parlamentario",
    hypTail: "resultará indispensable para frenar las emisiones",
    factCue: "ya una realidad en varios países",
    hypCue: "impopular entre ciertos sectores el próximo año",
    note: "Irregular verb *ser*: indicative *es*, present subjunctive *sea*.",
  },
  {
    inf: "tener",
    subj: "los pueblos rurales",
    ind: "tienen",
    sub: "tengan",
    factTail: "muchos jóvenes siguen marchándose a la capital",
    hypTail: "necesitarán además sanidad y transporte público",
    factCue: "actualmente un entorno natural privilegiado",
    hypCue: "fibra óptica ultrarrápida el año que viene",
    note: "Irregular *yo tengo* → stem *teng-*: indicative *tienen*, subjunctive *tengan*.",
  },
  {
    inf: "haber",
    subj: "ayudas públicas",
    ind: "hay",
    sub: "haya",
    factTail: "la burocracia retrasa su llegada al campo",
    hypTail: "su impacto dependerá de una buena gestión",
    factCue: "ya disponibles para energías limpias",
    hypCue: "más fondos europeos en el próximo presupuesto",
    note: "Impersonal *haber*: indicative *hay*, present subjunctive *haya*.",
  },
  {
    inf: "poder",
    subj: "el teletrabajo",
    ind: "puede",
    sub: "pueda",
    factTail: "no sustituye a las escuelas ni a los centros médicos",
    hypTail: "sin vivienda asequible el éxodo persistirá",
    factCue: "ya atraer a profesionales digitales",
    hypCue: "dinamizar algunas comarcas en el futuro",
    note: "Stem-changing *o → ue*: indicative *puede*, present subjunctive *pueda*.",
  },
  {
    inf: "producir",
    subj: "Costa Rica",
    ind: "produce",
    sub: "produzca",
    factTail: "el sector del transporte aún busca descarbonizarse",
    hypTail: "cualquier país deberá reducir además sus residuos",
    factCue: "actualmente casi toda su electricidad con renovables",
    hypCue: "aún más energía geotérmica en el futuro",
    note: "From *yo produzco*: indicative *produce*, present subjunctive *produzca*.",
  },
];

interface AunqueT3Case {
  inf: string;
  subj: string;
  impSub: string;
  impSubAlt: string;
  presInd: string;
  condClause: string;
  context: string;
  note: string;
}

const AUNQUE_T3: readonly AunqueT3Case[] = [
  {
    inf: "duplicar",
    subj: "los gobiernos",
    impSub: "duplicaran",
    impSubAlt: "duplicasen",
    presInd: "duplican",
    condClause: "tardaríamos décadas en regenerar el bosque primario",
    context: "sobre la Amazonia",
    note: "Conditional main verb (*tardaríamos*) + contrary-to-present hypothesis → imperfect subjunctive **duplicaran / duplicasen**.",
  },
  {
    inf: "tener",
    subj: "las provincias del interior",
    impSub: "tuvieran",
    impSubAlt: "tuviesen",
    presInd: "tienen",
    condClause: "todavía necesitarían vivienda asequible y empleo local",
    context: "sobre la España vaciada",
    note: "Irregular preterite *tuvieron* → imperfect subjunctive **tuvieran / tuviesen**.",
  },
  {
    inf: "invertir",
    subj: "las multinacionales",
    impSub: "invirtieran",
    impSubAlt: "invirtiesen",
    presInd: "invierten",
    condClause: "haría falta auditoría externa para evitar el ecoblanqueo",
    context: "sobre la moda rápida",
    note: "Stem-changing preterite *invirtieron* → imperfect subjunctive **invirtieran / invirtiesen**.",
  },
  {
    inf: "aprobar",
    subj: "el parlamento",
    impSub: "aprobara",
    impSubAlt: "aprobase",
    presInd: "aprueba",
    condClause: "el cambio cultural seguiría requiriendo coeducación",
    context: "sobre igualdad de género",
    note: "Regular *-ar* preterite *aprobaron* → imperfect subjunctive **aprobara / aprobase**.",
  },
  {
    inf: "reducir",
    subj: "las megaciudades",
    impSub: "redujeran",
    impSubAlt: "redujesen",
    presInd: "reducen",
    condClause: "sería imprescindible ampliar el transporte público limpio",
    context: "sobre movilidad urbana",
    note: "Irregular preterite *redujeron* → imperfect subjunctive **redujeran / redujesen**.",
  },
  {
    inf: "prohibir",
    subj: "las autoridades",
    impSub: "prohibieran",
    impSubAlt: "prohibiesen",
    presInd: "prohíben",
    condClause: "resultaría vital ofrecer alternativas económicas dignas",
    context: "sobre la tala ilegal",
    note: "Regular *-ir* preterite *prohibieron* → imperfect subjunctive **prohibieran / prohibiesen**.",
  },
  {
    inf: "lograr",
    subj: "la cumbre climática",
    impSub: "lograra",
    impSubAlt: "lograse",
    presInd: "logra",
    condClause: "su éxito dependería del cumplimiento real en cada país",
    context: "sobre acuerdos globales",
    note: "Conditional *dependería* pairs with imperfect subjunctive **lograra / lograse**.",
  },
  {
    inf: "poder",
    subj: "cada consumidor",
    impSub: "pudiera",
    impSubAlt: "pudiese",
    presInd: "puede",
    condClause: "la regulación estatal seguiría siendo determinante",
    context: "sobre el comercio justo",
    note: "Irregular preterite *pudieron* → imperfect subjunctive **pudiera / pudiese**.",
  },
];

const AUNQUE_FRAMES = [
  "En un artículo de opinión",
  "En un informe medioambiental",
  "En una carta al director",
  "En una propuesta formal",
  "En un editorial hispanohablante",
] as const;

const aunqueMoodDrill: Drill = {
  id: "5-compartir-el-planeta.aunque-mood",
  topicId: "5-compartir-el-planeta",
  title: "Aunque: Indicative vs Subjunctive",
  level: 1,
  ibLevel: "SL",
  guideRef: "medio-ambiente-sostenibilidad",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const frame = rng.pick(AUNQUE_FRAMES);
    const traps: Trap[] = [];

    if (tier === 3) {
      const c = rng.pick(AUNQUE_T3);
      const timeTag = rng.pick(["hoy mismo", "de inmediato", "este año", "en este momento"]);
      const prompt = `${frame} (${c.context}), completa con el **imperfecto de subjuntivo** de **${c.inf}** (una palabra):\n*Aunque ${c.subj} ________ (${c.inf}) ${timeTag} sus esfuerzos, ${c.condClause}.*`;
      traps.push({
        spec: { type: "text", accept: [c.presInd] },
        feedback: `Look at the conditional verb in the main clause — a contrary-to-fact hypothesis (“even if…”) pairs with **imperfect subjunctive** (**${c.impSub}**), not present indicative *${c.presInd}*.`,
      });
      return {
        prompt,
        answer: { type: "text", accept: [c.impSub, c.impSubAlt], display: c.impSub },
        solution: [
          `The conditional main clause signals a hypothetical contrary-to-present concession after *aunque*.`,
          c.note,
        ],
        hint: "Form the imperfect subjunctive from the 3rd-person plural preterite stem (*-ra* or *-se*).",
        traps,
      };
    }

    const pool = tier === 1 ? AUNQUE_T1 : AUNQUE_T2;
    const c = rng.pick(pool);
    const isFact = rng.bool(0.5);
    const connector = tier === 2 && rng.bool(0.3) ? "A pesar de que" : "Aunque";
    const subjectPhrase = c.inf === "haber" ? "" : `${c.subj} `;

    if (isFact) {
      const label = rng.pick(["hecho comprobado", "realidad verificada", "dato confirmado"]);
      const prompt = `${frame}, expresa un **${label}** conjugando **${c.inf}** (una palabra, minúsculas):\n*${connector} ${subjectPhrase}________ (${c.inf}) ${c.factCue}, ${c.factTail}.*`;
      traps.push({
        spec: { type: "text", accept: [c.sub] },
        feedback: `This clause states a verified reality (“even though…”), so *${connector.toLowerCase()}* requires the **indicative** (**${c.ind}**), not the subjunctive *${c.sub}*.`,
      });
      return {
        prompt,
        answer: { type: "text", accept: [c.ind], display: c.ind },
        solution: [
          `Because the speaker treats “${c.factCue}” as an established reality, *${connector.toLowerCase()}* takes the **present indicative**.`,
          `${c.note} Correct answer: **${c.ind}**.`,
        ],
        hint: "Established fact (“even though”) → present indicative!",
        traps,
      };
    } else {
      const label = rng.pick(["hipótesis futura", "posibilidad incierta", "escenario hipotético"]);
      const prompt = `${frame}, expresa una **${label}** conjugando **${c.inf}** (una palabra, minúsculas):\n*${connector} ${subjectPhrase}________ (${c.inf}) ${c.hypCue}, ${c.hypTail}.*`;
      traps.push({
        spec: { type: "text", accept: [c.ind] },
        feedback: `This clause expresses an uncertain/future possibility (“even if…”), so *${connector.toLowerCase()}* requires the **present subjunctive** (**${c.sub}**), not the indicative *${c.ind}*.`,
      });
      return {
        prompt,
        answer: { type: "text", accept: [c.sub], display: c.sub },
        solution: [
          `Because “${c.hypCue}” is hypothetical/future (“even if”), *${connector.toLowerCase()}* takes the **present subjunctive**.`,
          `${c.note} Correct answer: **${c.sub}**.`,
        ],
        hint: "Uncertain future or hypothetical (“even if”) → present subjunctive!",
        traps,
      };
    }
  },
};

// ---------------------------------------------------------------------------
// Drill 2: Environment & Sustainability B2–C1 Lexicon (SL, Level 1)
// ---------------------------------------------------------------------------

interface VocabEntry {
  es: string;
  accept: string[];
  en: string;
  cloze: string;
  words: string;
  trap?: { wrong: string; why: string };
}

const ECO_T1: readonly VocabEntry[] = [
  {
    es: "economía circular",
    accept: ["economía circular"],
    en: "circular economy",
    cloze: "Para superar el modelo de usar y tirar, debemos impulsar la ________ ________.",
    words: "two words, no article",
  },
  {
    es: "huella de carbono",
    accept: ["huella de carbono"],
    en: "carbon footprint",
    cloze: "Usar el tren en vez del avión reduce drásticamente nuestra ________ ________ ________.",
    words: "three words, no article",
  },
  {
    es: "sequía",
    accept: ["sequía"],
    en: "drought",
    cloze: "Tras tres años sin lluvias suficientes, la ________ amenaza las cosechas del sur.",
    words: "one word, no article",
  },
  {
    es: "energías renovables",
    accept: ["energías renovables"],
    en: "renewable energies",
    cloze: "Costa Rica produce casi toda su electricidad a partir de ________ ________.",
    words: "two plural words, no article",
  },
  {
    es: "tala ilegal",
    accept: ["tala ilegal"],
    en: "illegal logging",
    cloze: "Las comunidades amazónicas denuncian el avance de la ________ ________ de árboles.",
    words: "two words, no article",
  },
  {
    es: "residuos",
    accept: ["residuos"],
    en: "waste (formal B2–C1 plural noun replacing *basura*)",
    cloze: "El informe municipal busca reducir el volumen anual de ________ sólidos urbanos.",
    words: "one plural word, no article",
    trap: { wrong: "basura", why: "*Basura* is everyday B1; formal reports use the plural noun **residuos**." },
  },
  {
    es: "biodiversidad",
    accept: ["biodiversidad"],
    en: "biodiversity",
    cloze: "La destrucción de los humedales pone en peligro la ________ autóctona.",
    words: "one word, no article",
  },
  {
    es: "conservación",
    accept: ["conservación"],
    en: "environmental conservation (avoiding the false friend!)",
    cloze: "El parque destina fondos públicos a la ________ de especies amenazadas.",
    words: "one word, no article",
    trap: { wrong: "preservativos", why: "False friend alert! *Preservativos* means condoms — use **conservación**." },
  },
];

const ECO_T2: readonly VocabEntry[] = [
  {
    es: "estrés hídrico",
    accept: ["estrés hídrico"],
    en: "water stress",
    cloze: "Cuando la demanda de agua supera la oferta disponible, el territorio sufre ________ ________.",
    words: "two words, watch both tildes",
  },
  {
    es: "sumidero de carbono",
    accept: ["sumidero de carbono"],
    en: "carbon sink",
    cloze: "La selva amazónica actúa como un gigantesco ________ ________ ________ que estabiliza el clima.",
    words: "three words, no article",
  },
  {
    es: "ganadería extensiva",
    accept: ["ganadería extensiva"],
    en: "extensive cattle ranching",
    cloze: "Uno de los motores de la deforestación en Sudamérica es la ________ ________.",
    words: "two words, no article",
  },
  {
    es: "obsolescencia programada",
    accept: ["obsolescencia programada"],
    en: "planned obsolescence",
    cloze: "Fabricar teléfonos que fallan tras dos años es un ejemplo de ________ ________.",
    words: "two words, no article",
  },
  {
    es: "desertificación",
    accept: ["desertificación"],
    en: "desertification",
    cloze: "La pérdida de suelo fértil acelera la ________ en Murcia y Almería.",
    words: "one word, watch the tilde",
  },
  {
    es: "acuíferos",
    accept: ["acuíferos"],
    en: "aquifers (underground water reserves)",
    cloze: "Los pozos clandestinos en torno a Doñana han vaciado los ________ subterráneos.",
    words: "one plural word, watch the tilde",
  },
  {
    es: "transición energética",
    accept: ["transición energética"],
    en: "energy transition",
    cloze: "Abandonar el carbón y el gas exige financiar una ________ ________ justa.",
    words: "two words, watch both tildes",
  },
  {
    es: "huella ecológica",
    accept: ["huella ecológica"],
    en: "ecological footprint",
    cloze: "Reparar aparatos y comprar local disminuye significativamente nuestra ________ ________.",
    words: "two words, watch the tilde",
  },
];

const ECO_T3: readonly VocabEntry[] = [
  {
    es: "punto de no retorno",
    accept: ["punto de no retorno"],
    en: "tipping point / point of no return",
    cloze: "Los científicos advierten de que la Amazonia se acerca a un ________ ________ ________ ________.",
    words: "four words, no article",
  },
  {
    es: "sobreexplotación",
    accept: ["sobreexplotación"],
    en: "over-exploitation (nominalised C1 noun)",
    cloze: "La ________ de los recursos marinos e hídricos compromete el equilibrio ecológico.",
    words: "one word, watch the tilde",
  },
  {
    es: "usar y tirar",
    accept: ["usar y tirar"],
    en: "throwaway / use-and-discard (culture/model)",
    cloze: "La economía circular desafía frontalmente el modelo lineal de ________ ________ ________.",
    words: "three words",
  },
  {
    es: "transición justa",
    accept: ["transición justa"],
    en: "just transition (protecting workers during green shifts)",
    cloze: "El cierre de centrales térmicas debe acompañarse de una ________ ________ para las comarcas mineras.",
    words: "two words, watch the tilde",
  },
  {
    es: "ecoblanqueo",
    accept: ["ecoblanqueo", "lavado verde"],
    en: "greenwashing (single preferred Spanish noun)",
    cloze: "Etiquetar ropa sintética barata como sostenible sin cambiar la producción constituye ________.",
    words: "one word (or two-word synonym)",
  },
  {
    es: "despilfarro",
    accept: ["despilfarro"],
    en: "squandering / wasteful overuse (of water or food)",
    cloze: "Pese a las restricciones veraniegas, persiste el ________ de agua en campos de golf.",
    words: "one word, no article",
  },
  {
    es: "sumideros de carbono",
    accept: ["sumideros de carbono"],
    en: "carbon sinks (plural)",
    cloze: "Tanto los océanos como los bosques primarios funcionan como ________ ________ ________ esenciales.",
    words: "three words, plural",
  },
  {
    es: "sostenibilidad",
    accept: ["sostenibilidad", "sustentabilidad"],
    en: "sustainability",
    cloze: "Sin inversión en educación ambiental, la ________ seguirá siendo un lema vacío.",
    words: "one word, no article",
  },
];

const ECO_AUDIENCES = [
  "para un lectorado hispanohablante",
  "con registro formal B2–C1",
  "para el Criterio A del IB",
  "en contexto hispanoamericano y español",
  "con precisión léxica de nivel Diploma",
  "para preparar Paper 1 y el IO",
] as const;

const ECO_GENRES = [
  "En un artículo de opinión",
  "En una propuesta municipal",
  "En un informe de sostenibilidad",
  "En un discurso escolar",
  "En una carta al director",
  "En un editorial ecológico",
] as const;

const ecoVocabDrill: Drill = {
  id: "5-compartir-el-planeta.eco-vocab-b2",
  topicId: "5-compartir-el-planeta",
  title: "Environment & Sustainability B2–C1 Lexicon",
  level: 1,
  ibLevel: "SL",
  guideRef: "medio-ambiente-sostenibilidad",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = tier === 1 ? ECO_T1 : tier === 2 ? ECO_T2 : ECO_T3;
    const e = rng.pick(pool);
    const genre = rng.pick(ECO_GENRES);
    const aud = rng.pick(ECO_AUDIENCES);
    const traps: Trap[] = [];
    if (e.trap) {
      traps.push({
        spec: { type: "text", accept: [e.trap.wrong] },
        feedback: e.trap.why,
      });
    }
    const prompt = `${genre} (${aud}), escribe el término español equivalente a **“${e.en}”** (${e.words}):\n*${e.cloze}*`;
    return {
      prompt,
      answer: { type: "text", accept: e.accept, display: e.es },
      solution: [
        `Target B2–C1 sustainability term for “${e.en}”: **${e.es}**.`,
        `Full sentence: *${e.cloze.replace(/(?:________\s*)+/, `**${e.es}** `).replace(/\s+\./, ".")}*`,
      ],
      hint: `Check Spanish accents (*tildes*) and noun–adjective agreement (${e.words}).`,
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 3: Human Rights, Fair Trade & Urban–Rural Phrasing (SL, Level 2)
// ---------------------------------------------------------------------------

interface RightsVocabCase {
  es: string;
  accept: string[];
  en: string;
  cloze: string;
  words: string;
  trap?: { wrong: string; why: string };
}

const RIGHTS_T1: readonly RightsVocabCase[] = [
  {
    es: "comercio justo",
    accept: ["comercio justo"],
    en: "fair trade",
    cloze: "Las cooperativas cafeteras certificadas de Colombia promueven el ________ ________.",
    words: "two words, no article",
  },
  {
    es: "brecha salarial",
    accept: ["brecha salarial"],
    en: "gender pay gap / wage gap",
    cloze: "Los informes laborales exigen medidas concretas para cerrar la ________ ________.",
    words: "two words, no article",
  },
  {
    es: "techo de cristal",
    accept: ["techo de cristal"],
    en: "glass ceiling",
    cloze: "Pese a su excelente formación, muchas directivas aún chocan contra el ________ ________ ________.",
    words: "three words, no article",
  },
  {
    es: "consulta previa",
    accept: ["consulta previa"],
    en: "prior consultation (for indigenous communities)",
    cloze: "Antes de abrir una mina en tierras ancestrales, la ley exige la ________ ________.",
    words: "two words, no article",
  },
  {
    es: "éxodo rural",
    accept: ["éxodo rural"],
    en: "rural-to-urban exodus",
    cloze: "La falta de empleo cualificado en los pueblos ha acelerado el ________ ________.",
    words: "two words, watch the tilde",
  },
  {
    es: "moda rápida",
    accept: ["moda rápida"],
    en: "fast fashion",
    cloze: "Los vertederos textiles del desierto de Atacama evidencian el coste de la ________ ________.",
    words: "two words, watch the tilde",
  },
  {
    es: "derechos humanos",
    accept: ["derechos humanos"],
    en: "human rights",
    cloze: "Ningún tratado comercial debería situarse por encima de los ________ ________.",
    words: "two words, no article",
  },
  {
    es: "pueblos originarios",
    accept: ["pueblos originarios", "pueblos indígenas"],
    en: "indigenous peoples (formal Latin American term)",
    cloze: "Los ________ ________ custodian una parte vital de la biodiversidad amazónica.",
    words: "two words, no article",
  },
];

const RIGHTS_T2: readonly RightsVocabCase[] = [
  {
    es: "vulnerar",
    accept: ["vulnerar", "conculcar"],
    en: "to violate (human rights — formal verb replacing *romper*)",
    cloze: "La censura sistemática logra ________ la libertad de expresión de la ciudadanía.",
    words: "one infinitive verb",
    trap: { wrong: "romper", why: "Avoid literal English calques like *romper* — use formal **vulnerar** (*los derechos*)." },
  },
  {
    es: "España vaciada",
    accept: ["España vaciada", "espana vaciada"],
    en: "depopulated inland Spain (Soria, Teruel, Cuenca)",
    cloze: "Plataformas cívicas de Soria y Teruel reivindican inversiones para la ________ ________.",
    words: "two words, no article",
  },
  {
    es: "gentrificación",
    accept: ["gentrificación"],
    en: "gentrification",
    cloze: "El encarecimiento de los alquileres turísticos acelera la ________ de los barrios históricos.",
    words: "one word, watch the tilde",
  },
  {
    es: "justicia restaurativa",
    accept: ["justicia restaurativa"],
    en: "restorative justice",
    cloze: "El proceso de paz colombiano incorporó mecanismos de ________ ________ centrados en las víctimas.",
    words: "two words, no article",
  },
  {
    es: "memoria histórica",
    accept: ["memoria histórica"],
    en: "historical memory",
    cloze: "Las asociaciones de familiares defienden la ________ ________ frente al olvido impuesto.",
    words: "two words, watch the tilde",
  },
  {
    es: "trazabilidad",
    accept: ["trazabilidad"],
    en: "supply-chain traceability",
    cloze: "El consumidor responsable demanda plena ________ para saber quién fabricó su ropa.",
    words: "one word, no article",
  },
  {
    es: "impunidad",
    accept: ["impunidad"],
    en: "impunity (lack of legal accountability)",
    cloze: "Las ONG advierten de que la ________ fomenta nuevas agresiones contra activistas.",
    words: "one word, no article",
  },
  {
    es: "urbanismo social",
    accept: ["urbanismo social"],
    en: "social urbanism (e.g. Medellín's Metrocable & libraries)",
    cloze: "El ________ ________ de Medellín conectó barrios de ladera mediante transporte público digno.",
    words: "two words, no article",
  },
];

interface AdvocacySubjCase {
  trigger: string;
  subj: string;
  inf: string;
  ans: string;
  indTrap: string;
  tail: string;
  note: string;
}

const RIGHTS_T3: readonly AdvocacySubjCase[] = [
  {
    trigger: "Exigimos que",
    subj: "las autoridades",
    inf: "garantizar",
    ans: "garanticen",
    indTrap: "garantizan",
    tail: "la consulta previa en todos los proyectos mineros",
    note: "WEIRDO demand (*exigimos que*) + *-zar → -cen*: **garanticen**.",
  },
  {
    trigger: "Resulta inadmisible que",
    subj: "todavía",
    inf: "existir",
    ans: "exista",
    indTrap: "existe",
    tail: "una brecha salarial tan acusada entre mujeres y hombres",
    note: "Impersonal moral judgement (*resulta inadmisible que*) → present subjunctive **exista**.",
  },
  {
    trigger: "Instamos al gobierno a que",
    subj: "",
    inf: "proteger",
    ans: "proteja",
    indTrap: "protege",
    tail: "eficazmente a los defensores ambientales amenazados",
    note: "Advocacy trigger + *-ger → -ja*: **proteja**.",
  },
  {
    trigger: "No existe ningún beneficio económico que",
    subj: "",
    inf: "justificar",
    ans: "justifique",
    indTrap: "justifica",
    tail: "la censura de la prensa independiente",
    note: "Negated antecedent (*no existe ningún… que*) + *-car → -que*: **justifique**.",
  },
  {
    trigger: "Se creó la Comisión de la Verdad con el fin de que",
    subj: "las víctimas",
    inf: "ser",
    ans: "sean",
    indTrap: "son",
    tail: "escuchadas y reparadas con dignidad",
    note: "Purpose clause (*con el fin de que*) + irregular *ser* → **sean**.",
  },
  {
    trigger: "Reivindicamos que",
    subj: "cada plataforma digital",
    inf: "respetar",
    ans: "respete",
    indTrap: "respeta",
    tail: "el acceso a una vivienda asequible en los barrios históricos",
    note: "Demand trigger (*reivindicamos que*) → 3rd-person singular present subjunctive **respete**.",
  },
  {
    trigger: "Es imprescindible que",
    subj: "los municipios rurales",
    inf: "disponer",
    ans: "dispongan",
    indTrap: "disponen",
    tail: "de fibra óptica y transporte público fiable",
    note: "Impersonal trigger + *disponer* (like *poner → ponga*) → **dispongan**.",
  },
  {
    trigger: "No hay ninguna excusa que",
    subj: "",
    inf: "permitir",
    ans: "permita",
    indTrap: "permite",
    tail: "el desplazamiento forzoso de las comunidades originarias",
    note: "Negated antecedent (*no hay ninguna excusa que*) → present subjunctive **permita**.",
  },
  {
    trigger: "Urge que",
    subj: "las empresas textiles",
    inf: "ofrecer",
    ans: "ofrezcan",
    indTrap: "ofrecen",
    tail: "plena trazabilidad en toda su cadena de suministro",
    note: "Impersonal *urge que* + *-cer → -zc-* (*yo ofrezco*) → **ofrezcan**.",
  },
  {
    trigger: "Luchamos para que",
    subj: "ninguna periodista",
    inf: "sufrir",
    ans: "sufra",
    indTrap: "sufre",
    tail: "represalias ni autocensura por investigar la corrupción",
    note: "Purpose clause (*para que*) always governs the subjunctive → **sufra**.",
  },
];

const RIGHTS_CONTEXTS = [
  "en un debate de IO sobre derechos globales",
  "en un artículo de prensa hispanohablante",
  "en un discurso juvenil iberoamericano",
  "en una propuesta cívica municipal",
  "en un editorial sobre ética y justicia",
  "en un informe sobre desigualdad y sociedad",
] as const;

const rightsGlobalDrill: Drill = {
  id: "5-compartir-el-planeta.rights-global-lexis",
  topicId: "5-compartir-el-planeta",
  title: "Human Rights, Fair Trade & Urban–Rural Phrasing",
  level: 2,
  ibLevel: "SL",
  guideRef: "derechos-humanos-igualdad-paz",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const ctx = rng.pick(RIGHTS_CONTEXTS);
    const traps: Trap[] = [];

    if (tier === 3) {
      const c = rng.pick(RIGHTS_T3);
      const subjPart = c.subj ? `${c.subj} ` : "";
      const prompt = `Aplica el subjuntivo de reivindicación ${ctx} conjugando **${c.inf}** (una palabra, minúsculas):\n*${c.trigger} ${subjPart}________ (${c.inf}) ${c.tail}.*`;
      traps.push({
        spec: { type: "text", accept: [c.indTrap] },
        feedback: `This advocacy/negated trigger requires the **present subjunctive** (**${c.ans}**), not the indicative *${c.indTrap}*.`,
      });
      return {
        prompt,
        answer: { type: "text", accept: [c.ans], display: c.ans },
        solution: [
          `Identify the subjunctive trigger (*${c.trigger}*).`,
          c.note,
        ],
        hint: "Watch for WEIRDO demand triggers, purpose clauses, negated antecedents, and *-car/-gar/-zar/-ger* spelling changes!",
        traps,
      };
    }

    const pool = tier === 1 ? RIGHTS_T1 : RIGHTS_T2;
    const e = rng.pick(pool);
    if (e.trap) {
      traps.push({
        spec: { type: "text", accept: [e.trap.wrong] },
        feedback: e.trap.why,
      });
    }
    const prompt = `Completa ${ctx} con la expresión española para **“${e.en}”** (${e.words}):\n*${e.cloze}*`;
    return {
      prompt,
      answer: { type: "text", accept: e.accept, display: e.es },
      solution: [
        `Precise Theme 5 phrasing for “${e.en}”: **${e.es}**.`,
        `Check orthography and tildes carefully.`,
      ],
      hint: `Give the exact Spanish expression (${e.words}) without an article.`,
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 4: Concessive, Adversative & Causal C1 Connectors (SL/B2–C1, Level 2)
// ---------------------------------------------------------------------------

interface ConnectorCase {
  sentence: string;
  cue: string;
  accept: string[];
  display: string;
  trap?: { wrong: string; why: string };
  note: string;
}

const CONN_T1: readonly ConnectorCase[] = [
  {
    sentence: "________ la sequía extrema, el turismo masivo apenas ha reducido su consumo hídrico.",
    cue: "two-word formal concessive preposition starting with **p** (before a noun, NO *que*)",
    accept: ["pese a"],
    display: "pese a",
    trap: { wrong: "pese a que", why: "Never add *que* directly before a noun (*la sequía*) — write **pese a**." },
    note: "**Pese a** + noun/infinitive (no *que*).",
  },
  {
    sentence: "________ invertir millones en campañas publicitarias, la marca no logró ocultar su ecoblanqueo.",
    cue: "three-word concessive preposition ending in **de** (before an infinitive, NO *que*)",
    accept: ["a pesar de"],
    display: "a pesar de",
    trap: { wrong: "a pesar de que", why: "Before an infinitive (*invertir*), drop *que* → **a pesar de**." },
    note: "**A pesar de** + infinitive/noun (no *que*).",
  },
  {
    sentence: "La energía eólica crece rápidamente; ________ ________, el transporte pesado aún depende del petróleo.",
    cue: "two-word formal adversative connector starting with **n** (“nevertheless”)",
    accept: ["no obstante"],
    display: "no obstante",
    trap: { wrong: "sin embargo", why: "*Sin embargo* means the same, but the cue asks for the two-word synonym starting with **n** → **no obstante**." },
    note: "**No obstante** is a high-register C1 synonym of *sin embargo*.",
  },
  {
    sentence: "El teletrabajo ayuda a algunos pueblos; ________ ________, no basta sin escuelas ni transporte público.",
    cue: "two-word adversative connector starting with **s** (“however”)",
    accept: ["sin embargo"],
    display: "sin embargo",
    trap: { wrong: "no obstante", why: "*No obstante* fits semantically, but the cue specifies starting with **s** → **sin embargo**." },
    note: "**Sin embargo** (always two separate words!) introduces a clean formal contrast.",
  },
  {
    sentence: "________ ________ ________ existen leyes contra la deforestación, su vigilancia sigue siendo insuficiente.",
    cue: "four-word concessive conjunction starting with **a** (before a conjugated verb!)",
    accept: ["a pesar de que"],
    display: "a pesar de que",
    trap: { wrong: "a pesar de", why: "Because a conjugated verb (*existen*) follows, you MUST include *que* → **a pesar de que**." },
    note: "Before a conjugated verb (*existen*), add *que*: **a pesar de que**.",
  },
  {
    sentence: "Los vertederos textiles contaminan el suelo; ________ ________, debemos frenar la moda rápida.",
    cue: "two-word formal consecutive connector starting with **p** (“consequently / therefore”)",
    accept: ["por consiguiente", "por tanto"],
    display: "por consiguiente",
    note: "**Por consiguiente** (or *por tanto*) introduces a logical consequence cleanly.",
  },
];

const CONN_T2: readonly ConnectorCase[] = [
  {
    sentence: "________ ________ ________ ________ la minería aporta ingresos fiscales, sus secuelas ambientales perduran siglos.",
    cue: "four-word HL/C1 concessive frame (“while it is true that…”)",
    accept: ["si bien es cierto que"],
    display: "si bien es cierto que",
    note: "**Si bien es cierto que** + indicative concedes an opponent's premise politely before rebutting it.",
  },
  {
    sentence: "La sobreexplotación amenaza Doñana; ________ ________ ________ resulte urgente reformar el regadío.",
    cue: "three-word consecutive connector that ALWAYS triggers the subjunctive (“hence”)",
    accept: ["de ahí que"],
    display: "de ahí que",
    note: "**De ahí que** + subjunctive (*resulte*) is a flagship C1 synthesis connector (watch the tilde on *ahí*!).",
  },
  {
    sentence: "No es que los ciudadanos ignoren el cambio climático, ________ ________ faltan opciones asequibles.",
    cue: "two-word corrective conjunction after a direct negation (before a conjugated verb, NOT *pero*!)",
    accept: ["sino que"],
    display: "sino que",
    trap: { wrong: "pero", why: "After *no es que* replacing a rejected cause with the true one, use **sino que**." },
    note: "Pattern: *no es que + subj., **sino que** + ind.*",
  },
  {
    sentence: "________ ________ resolver la falta de vivienda, los pisos turísticos han encarecido los alquileres.",
    cue: "two-word prepositional connector meaning “far from” (before an infinitive)",
    accept: ["lejos de"],
    display: "lejos de",
    note: "**Lejos de + infinitivo** (“far from solving…”) creates an incisive C1 counter-argument.",
  },
  {
    sentence: "________ ________ ________ reciclemos en casa, la industria debe asumir su responsabilidad en origen.",
    cue: "three-word emphatic concessive conjunction starting with **p** (“no matter how much”)",
    accept: ["por mucho que", "por más que"],
    display: "por mucho que",
    note: "**Por mucho que / Por más que** + subjunctive expresses strong concession.",
  },
  {
    sentence: "El turismo rural revitalizará la comarca ________ ________ ________ se respete la capacidad ecológica.",
    cue: "three-word conditional conjunction starting with **s** (“provided that”, triggers subjunctive)",
    accept: ["siempre y cuando"],
    display: "siempre y cuando",
    note: "**Siempre y cuando** + subjunctive sets an indispensable ethical or ecological condition.",
  },
];

const CONN_T3: readonly ConnectorCase[] = [
  {
    sentence: "________ ________ el comercio justo tenga un precio más alto, garantiza ingresos dignos al caficultor.",
    cue: "two-word formal concessive conjunction starting with **s** (“although / while”)",
    accept: ["si bien"],
    display: "si bien",
    note: "**Si bien** is a sleek C1 literary/journalistic equivalent of *aunque*.",
  },
  {
    sentence: "________ ________ ________ se sancione el ecoblanqueo, la etiqueta verde carecerá de credibilidad.",
    cue: "three-word negative conditional conjunction starting with **a** (“unless”, always subjunctive)",
    accept: ["a menos que", "a no ser que"],
    display: "a menos que",
    note: "**A menos que** (or *a no ser que*) belongs to ESCAPA and always governs the subjunctive.",
  },
  {
    sentence: "La reforma urbana beneficiará a la ciudad, ________ ________ ello implique desplazar a los vecinos originales.",
    cue: "two-word ESCAPA conjunction meaning “without [it implying]” (always subjunctive)",
    accept: ["sin que"],
    display: "sin que",
    note: "**Sin que** + subjunctive (*implique*) qualifies a proposal with C1 precision.",
  },
  {
    sentence: "La brecha territorial se agrava; ________ ________, resulta necesario descentralizar los servicios públicos.",
    cue: "two-word consecutive connector starting with **e** (“consequently / as a result”)",
    accept: ["en consecuencia"],
    display: "en consecuencia",
    note: "**En consecuencia** cleanly introduces a policy takeaway.",
  },
  {
    sentence: "El Acuerdo de Paz supuso un hito; ________ ________, su aplicación en zonas rurales sigue afrontando obstáculos.",
    cue: "two-word C1 adversative/nuancing pivot starting with **a** (“now then / however”)",
    accept: ["ahora bien"],
    display: "ahora bien",
    note: "**Ahora bien** introduces a thoughtful qualification or caveat in C1 essays.",
  },
  {
    sentence: "Se instalaron bibliotecas en las comunas ________ ________ ________ los jóvenes tuvieran espacios seguros.",
    cue: "four-word formal purpose conjunction starting with **c** (“in order that”, always subjunctive)",
    accept: ["con el fin de que", "con el objeto de que"],
    display: "con el fin de que",
    note: "**Con el fin de que** + subjunctive upgrades simple *para que* to Band 10–12 register.",
  },
];

const CONN_OPENERS = [
  "En un ensayo de Paper 1",
  "En un editorial sobre ética global",
  "En una propuesta dirigida al ministerio",
  "En una carta al director",
  "En un discurso de cumbre juvenil",
  "En una intervención de IO Parte 3",
] as const;

const c1ConnectorsDrill: Drill = {
  id: "5-compartir-el-planeta.c1-connectors",
  topicId: "5-compartir-el-planeta",
  title: "Concessive, Adversative & Causal Connectors",
  level: 2,
  ibLevel: "SL",
  guideRef: "globalizacion-etica-entorno-urbano",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = tier === 1 ? CONN_T1 : tier === 2 ? CONN_T2 : CONN_T3;
    const c = rng.pick(pool);
    const opener = rng.pick(CONN_OPENERS);
    const traps: Trap[] = [];
    if (c.trap) {
      traps.push({
        spec: { type: "text", accept: [c.trap.wrong] },
        feedback: c.trap.why,
      });
    }
    const prompt = `${opener}, escribe el conector exacto (${c.cue}):\n*${c.sentence}*`;
    return {
      prompt,
      answer: { type: "text", accept: c.accept, display: c.display },
      solution: [
        c.note,
        `Answer: **${c.display}**.`,
      ],
      hint: `Check the cue carefully: ${c.cue}.`,
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 5: [HL] Counter-Argument & Subjunctive Rebuttal Clauses (HL, Level 3)
// ---------------------------------------------------------------------------

interface HlSubjCase {
  cause: string;
  connector: string;
  subj: string;
  inf: string;
  ans: string;
  indTrap: string;
  tail: string;
  note: string;
}

const HL_T1: readonly HlSubjCase[] = [
  {
    cause: "El agua dulce es un recurso finito en el Mediterráneo",
    connector: "de ahí que",
    subj: "",
    inf: "ser",
    ans: "sea",
    indTrap: "es",
    tail: "imprescindible modernizar el riego agrícola",
    note: "*De ahí que* ALWAYS requires the subjunctive → **sea**.",
  },
  {
    cause: "La moda rápida genera montañas de residuos en Atacama",
    connector: "de ahí que",
    subj: "",
    inf: "resultar",
    ans: "resulte",
    indTrap: "resulta",
    tail: "urgente exigir trazabilidad obligatoria",
    note: "*De ahí que* + 3rd-person singular present subjunctive of *resultar* → **resulte**.",
  },
  {
    cause: "La tala ilegal debilita la Amazonia como sumidero de carbono",
    connector: "de ahí que",
    subj: "los Estados",
    inf: "deber",
    ans: "deban",
    indTrap: "deben",
    tail: "reforzar la vigilancia satelital y la consulta previa",
    note: "*De ahí que* + 3rd-person plural present subjunctive of *deber* → **deban**.",
  },
  {
    cause: "La España vaciada pierde escuelas y consultorios cada año",
    connector: "de ahí que",
    subj: "las plataformas rurales",
    inf: "exigir",
    ans: "exijan",
    indTrap: "exigen",
    tail: "inversiones urgentes en ferrocarril y fibra óptica",
    note: "*De ahí que* + *-gir → -jan*: **exijan**.",
  },
  {
    cause: "El ecoblanqueo confunde a millones de compradores",
    connector: "de ahí que",
    subj: "las asociaciones de consumo",
    inf: "pedir",
    ans: "pidan",
    indTrap: "piden",
    tail: "sanciones ejemplares contra la publicidad engañosa",
    note: "*De ahí que* + stem-changing *e → i* of *pedir*: **pidan**.",
  },
  {
    cause: "Los defensores ambientales sufren amenazas constantes",
    connector: "de ahí que",
    subj: "la comunidad internacional",
    inf: "tener",
    ans: "tenga",
    indTrap: "tiene",
    tail: "el deber de combatir la impunidad",
    note: "*De ahí que* + irregular *yo tengo → teng-*: **tenga**.",
  },
  {
    cause: "La gentrificación expulsa a los vecinos de sus barrios",
    connector: "de ahí que",
    subj: "varios ayuntamientos",
    inf: "poner",
    ans: "pongan",
    indTrap: "ponen",
    tail: "límites estrictos a los pisos turísticos",
    note: "*De ahí que* + irregular *yo pongo → pong-*: **pongan**.",
  },
  {
    cause: "El acceso a energía limpia reduce la pobreza energética",
    connector: "de ahí que",
    subj: "este informe",
    inf: "proponer",
    ans: "proponga",
    indTrap: "propone",
    tail: "subvenciones directas para cooperativas solares",
    note: "*De ahí que* + *proponer* (like *poner*) → **proponga**.",
  },
];

const HL_T2: readonly HlSubjCase[] = [
  {
    cause: "Conviene desmontar este prejuicio:",
    connector: "no es que",
    subj: "los consumidores",
    inf: "carecer",
    ans: "carezcan",
    indTrap: "carecen",
    tail: "de ética, sino que los productos justos resultan caros",
    note: "*No es que* negates a false cause → subjunctive from *carezco*: **carezcan**.",
  },
  {
    cause: "El debate rural exige matiz:",
    connector: "no es que",
    subj: "los jóvenes",
    inf: "rechazar",
    ans: "rechacen",
    indTrap: "rechazan",
    tail: "los pueblos, sino que faltan empleos cualificados",
    note: "*No es que* + *-zar → -cen*: **rechacen**.",
  },
  {
    cause: "Respecto a la legislación verde,",
    connector: "no es que",
    subj: "",
    inf: "faltar",
    ans: "falten",
    indTrap: "faltan",
    tail: "leyes ambientales, sino que escasean inspectores independientes",
    note: "*No es que* + plural subject *leyes ambientales* → **falten**.",
  },
  {
    cause: "En materia de consumo,",
    connector: "por mucho que",
    subj: "las marcas",
    inf: "lanzar",
    ans: "lancen",
    indTrap: "lanzan",
    tail: "colecciones etiquetadas como ecológicas, persiste la sobreproducción",
    note: "*Por mucho que* + *-zar → -cen*: **lancen**.",
  },
  {
    cause: "Frente a la crisis climática,",
    connector: "por mucho que",
    subj: "nosotros",
    inf: "reducir",
    ans: "reduzcamos",
    indTrap: "reducimos",
    tail: "el plástico doméstico, urge transformar el sector energético",
    note: "*Por mucho que* + *yo reduzco → reduzc-* + *-amos*: **reduzcamos**.",
  },
  {
    cause: "Podemos atraer teletrabajadores al campo",
    connector: "sin que ello",
    subj: "",
    inf: "implicar",
    ans: "implique",
    indTrap: "implica",
    tail: "encarecer la vivienda para la población local",
    note: "*Sin que* always takes subjunctive; *-car → -que*: **implique**.",
  },
  {
    cause: "La cooperación internacional prosperará",
    connector: "siempre y cuando",
    subj: "las potencias",
    inf: "cumplir",
    ans: "cumplan",
    indTrap: "cumplen",
    tail: "sus compromisos de financiación climática",
    note: "*Siempre y cuando* always triggers the subjunctive → **cumplan**.",
  },
  {
    cause: "Protegemos la selva",
    connector: "no porque",
    subj: "",
    inf: "ser",
    ans: "sea",
    indTrap: "es",
    tail: "una moda mediática, sino porque sostiene el equilibrio global",
    note: "*No porque* (negated cause) triggers subjunctive → **sea**.",
  },
];

interface HlT3Case {
  cause: string;
  subj: string;
  inf: string;
  ans: string;
  indTrap: string;
  tail: string;
  note: string;
}

const HL_T3: readonly HlT3Case[] = [
  {
    cause: "El deterioro de Doñana ha encendido todas las alarmas científicas",
    subj: "la UNESCO",
    inf: "advertir",
    ans: "haya advertido",
    indTrap: "ha advertido",
    tail: "sobre la pérdida irreversible de su biodiversidad",
    note: "*De ahí que* + present perfect subjunctive (*haya* + *advertido*) → **haya advertido**.",
  },
  {
    cause: "Las amenazas a líderes comunitarios han aumentado en la región",
    subj: "diversas ONG",
    inf: "denunciar",
    ans: "hayan denunciado",
    indTrap: "han denunciado",
    tail: "la persistente impunidad ante tribunales internacionales",
    note: "Plural *diversas ONG* + present perfect subjunctive → **hayan denunciado**.",
  },
  {
    cause: "El modelo de Pago por Servicios Ambientales dio resultados medibles",
    subj: "Costa Rica",
    inf: "lograr",
    ans: "haya logrado",
    indTrap: "ha logrado",
    tail: "duplicar su cobertura forestal en tres décadas",
    note: "*De ahí que* takes subjunctive even for verified past outcomes → **haya logrado**.",
  },
  {
    cause: "La presión vecinal en Madrid y Barcelona ha cobrado fuerza histórica",
    subj: "varios municipios",
    inf: "aprobar",
    ans: "hayan aprobado",
    indTrap: "han aprobado",
    tail: "restricciones a la expansión de alojamientos turísticos",
    note: "Plural *varios municipios* + present perfect subjunctive → **hayan aprobado**.",
  },
  {
    cause: "La despoblación rural amenaza servicios públicos esenciales",
    subj: "las plataformas ciudadanas",
    inf: "exigir",
    ans: "hayan exigido",
    indTrap: "han exigido",
    tail: "un pacto de Estado por el equilibrio territorial",
    note: "Plural subject + *de ahí que* → **hayan exigido**.",
  },
  {
    cause: "La montaña textil de Atacama ha conmocionado a la opinión pública",
    subj: "la Unión Europea",
    inf: "proponer",
    ans: "haya propuesto",
    indTrap: "ha propuesto",
    tail: "normas más estrictas contra la destrucción de ropa no vendida",
    note: "Irregular past participle *propuesto* + *haya* → **haya propuesto**.",
  },
  {
    cause: "La brecha salarial persiste en sectores directivos",
    subj: "numerosos parlamentos",
    inf: "impulsar",
    ans: "hayan impulsado",
    indTrap: "han impulsado",
    tail: "auditorías retributivas obligatorias y planes de coeducación",
    note: "Plural subject + present perfect subjunctive → **hayan impulsado**.",
  },
  {
    cause: "El Metrocable transformó la conectividad de las comunas",
    subj: "otras metrópolis",
    inf: "adoptar",
    ans: "hayan adoptado",
    indTrap: "han adoptado",
    tail: "proyectos inspirados en el urbanismo social de Medellín",
    note: "Plural *otras metrópolis* + *de ahí que* → **hayan adoptado**.",
  },
];

const HL_STEMS = [
  "En un ensayo de Paper 1 HL",
  "En un editorial de nivel C1",
  "En una propuesta formal HL",
  "En un debate de IO Parte 3 (HL)",
  "En una síntesis argumentativa HL",
] as const;

const hlRebuttalDrill: Drill = {
  id: "5-compartir-el-planeta.hl-rebuttal-subj",
  topicId: "5-compartir-el-planeta",
  title: "[HL] Counter-Argument & Subjunctive Rebuttal Synthesis",
  level: 3,
  ibLevel: "HL",
  guideRef: "argumentacion-etica-global-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const stem = rng.pick(HL_STEMS);
    const traps: Trap[] = [];

    if (tier === 3) {
      const c = rng.pick(HL_T3);
      const sep = rng.pick([";", ","]);
      const prompt = `[HL] ${stem}, completa con el **pretérito perfecto de subjuntivo** de **${c.inf}** (dos palabras, minúsculas):\n*${c.cause}${sep} de ahí que ${c.subj} ________ ________ (${c.inf}) ${c.tail}.*`;
      traps.push({
        spec: { type: "text", accept: [c.indTrap] },
        feedback: `Even when the result is a real completed fact, *de ahí que* ALWAYS requires the **subjunctive** (**${c.ans}**), never the indicative *${c.indTrap}*.`,
      });
      return {
        prompt,
        answer: { type: "text", accept: [c.ans], display: c.ans },
        solution: [
          `Combine present subjunctive of *haber* (*haya / hayan*) with the past participle of *${c.inf}*.`,
          c.note,
        ],
        hint: "Use *haya* (singular) or *hayan* (plural) + past participle after *de ahí que*.",
        traps,
      };
    }

    const pool = tier === 1 ? HL_T1 : HL_T2;
    const c = rng.pick(pool);
    const subjPart = c.subj ? `${c.subj} ` : "";
    const sep = tier === 1 ? rng.pick(["; ", ", "]) : " ";
    const prompt = `[HL] ${stem}, conjuga **${c.inf}** en la cláusula argumentativa (una palabra, minúsculas):\n*${c.cause}${sep}${c.connector} ${subjPart}________ (${c.inf}) ${c.tail}.*`;
    traps.push({
      spec: { type: "text", accept: [c.indTrap] },
      feedback: `After **${c.connector}**, standard academic Spanish requires the **present subjunctive** (**${c.ans}**), not indicative *${c.indTrap}*.`,
    });
    const ansSpec: AnswerSpec = { type: "text", accept: [c.ans], display: c.ans };
    return {
      prompt,
      answer: ansSpec,
      solution: [
        `Identify the C1 subjunctive trigger (*${c.connector}*).`,
        c.note,
      ],
      hint: `Check the mood governed by *${c.connector}* and verify spelling/irregular stems.`,
      traps,
    };
  },
};

export const drills: Drill[] = [
  aunqueMoodDrill,
  ecoVocabDrill,
  rightsGlobalDrill,
  c1ConnectorsDrill,
  hlRebuttalDrill,
];
