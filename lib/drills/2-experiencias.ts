import type { Trap } from "../types.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";

// ---------------------------------------------------------------------------
// 1. Pretérito indefinido vs Imperfecto in Travel & Leisure Narratives
// ---------------------------------------------------------------------------

interface AspectEntry {
  infinitive: string;
  subjectLabel: string;
  target: "indefinido" | "imperfecto";
  answer: string;
  wrongAspect: string;
  framePrefix: string;
  frameSuffix: string;
  reason: string;
  tier: 1 | 2 | 3;
}

const TRAVEL_PLACES = [
  "Barcelona",
  "Palma de Mallorca",
  "las Islas Galápagos",
  "Machu Picchu",
  "Oaxaca",
  "Costa Rica",
  "Sevilla",
  "la Patagonia",
] as const;

const TRAVEL_SUBJECTS_SG = [
  { subj: "mi hermana", label: "ella" },
  { subj: "el guía local", label: "él" },
  { subj: "la viajera", label: "ella" },
  { subj: "mi primo", label: "él" },
  { subj: "la voluntaria", label: "ella" },
] as const;

const TRAVEL_SUBJECTS_PL = [
  { subj: "los visitantes", label: "ellos" },
  { subj: "nuestros compañeros", label: "ellos" },
  { subj: "las turistas", label: "ellas" },
  { subj: "los vecinos del barrio", label: "ellos" },
] as const;

const ASPECT_TIER1: Omit<AspectEntry, "framePrefix" | "frameSuffix">[] = [
  {
    infinitive: "caminar",
    subjectLabel: "nosotros",
    target: "imperfecto",
    answer: "caminábamos",
    wrongAspect: "caminamos",
    reason: "Ongoing background movement after *mientras* takes the *imperfecto*.",
    tier: 1,
  },
  {
    infinitive: "visitar",
    subjectLabel: "yo",
    target: "indefinido",
    answer: "visité",
    wrongAspect: "visitaba",
    reason: "A specific completed past time marker (*el verano pasado*) takes the *pretérito indefinido*.",
    tier: 1,
  },
  {
    infinitive: "sacar",
    subjectLabel: "ellos",
    target: "imperfecto",
    answer: "sacaban",
    wrongAspect: "sacaron",
    reason: "Describing an ongoing simultaneous scene in progress requires the *imperfecto*.",
    tier: 1,
  },
  {
    infinitive: "llegar",
    subjectLabel: "nosotros",
    target: "indefinido",
    answer: "llegamos",
    wrongAspect: "llegábamos",
    reason: "Arriving at an exact moment (*a las ocho*) is a bounded completed action (*indefinido*).",
    tier: 1,
  },
  {
    infinitive: "viajar",
    subjectLabel: "ella",
    target: "imperfecto",
    answer: "viajaba",
    wrongAspect: "viajó",
    reason: "A repeated past habit (*todos los veranos*) requires the *imperfecto*.",
    tier: 1,
  },
  {
    infinitive: "comprar",
    subjectLabel: "yo",
    target: "indefinido",
    answer: "compré",
    wrongAspect: "compraba",
    reason: "One completed purchase (*ayer por la mañana*) takes the *pretérito indefinido*.",
    tier: 1,
  },
  {
    infinitive: "recorrer",
    subjectLabel: "nosotros",
    target: "imperfecto",
    answer: "recorríamos",
    wrongAspect: "recorrimos",
    reason: "Setting the ongoing backdrop interrupted by another event takes the *imperfecto*.",
    tier: 1,
  },
  {
    infinitive: "decidir",
    subjectLabel: "ellos",
    target: "indefinido",
    answer: "decidieron",
    wrongAspect: "decidían",
    reason: "Making a sudden decisive choice (*de repente*) takes the *pretérito indefinido*.",
    tier: 1,
  },
];

const ASPECT_TIER2: Array<{
  infinitive: string;
  subjType: "sg" | "pl" | "nosotros" | "yo";
  target: "indefinido" | "imperfecto";
  answer: string;
  wrongAspect: string;
  template: (subj: string, place: string) => string;
  reason: string;
}> = [
  {
    infinitive: "ir",
    subjType: "nosotros",
    target: "imperfecto",
    answer: "íbamos",
    wrongAspect: "fuimos",
    template: (_s, place) => `Cada agosto, mis padres y yo _____ (ir) en tren hacia ${place} para evitar vuelos cortos.`,
    reason: "Recurring annual habit (*cada agosto*) takes the irregular *imperfecto* of *ir*: **íbamos**.",
  },
  {
    infinitive: "ir",
    subjType: "sg",
    target: "indefinido",
    answer: "fue",
    wrongAspect: "iba",
    template: (s, place) => `El año pasado, ${s} _____ (ir) por primera vez a ${place} en un viaje de intercambio.`,
    reason: "A single completed event (*el año pasado*, *por primera vez*) takes *pretérito indefinido*: **fue**.",
  },
  {
    infinitive: "tener",
    subjType: "pl",
    target: "indefinido",
    answer: "tuvieron",
    wrongAspect: "tenían",
    template: (s, place) => `Aquel día en ${place}, ${s} _____ (tener) que cambiar de ruta por la masificación.`,
    reason: "A specific completed obligation (*aquel día*) requires the irregular *indefinido* of *tener*: **tuvieron**.",
  },
  {
    infinitive: "estar",
    subjType: "sg",
    target: "imperfecto",
    answer: "estaba",
    wrongAspect: "estuvo",
    template: (s, place) => `Cuando desembarcamos en ${place}, ${s} _____ (estar) explicando las normas ecológicas.`,
    reason: "Describing an action already in progress upon arrival takes the *imperfecto*: **estaba**.",
  },
  {
    infinitive: "ver",
    subjType: "nosotros",
    target: "imperfecto",
    answer: "veíamos",
    wrongAspect: "vimos",
    template: (_s, place) => `Mientras caminábamos por la costa de ${place}, _____ (ver) decenas de barcos anclados.`,
    reason: "Ongoing background observation paired with *mientras* takes the irregular *imperfecto* of *ver*: **veíamos**.",
  },
  {
    infinitive: "hacer",
    subjType: "sg",
    target: "indefinido",
    answer: "hizo",
    wrongAspect: "hacía",
    template: (s, place) => `Durante su estancia en ${place}, ${s} _____ (hacer) una entrevista sobre turismo comunitario.`,
    reason: "Completing a single specific interview takes the irregular *indefinido* of *hacer*: **hizo**.",
  },
  {
    infinitive: "ser",
    subjType: "sg",
    target: "imperfecto",
    answer: "era",
    wrongAspect: "fue",
    template: (_s, place) => `Antes de la llegada de los cruceros, ${place} _____ (ser) un lugar mucho más tranquilo.`,
    reason: "Describing a past characteristic over an unbounded era (*antes de...*) uses the irregular *imperfecto* **era**.",
  },
  {
    infinitive: "dar",
    subjType: "pl",
    target: "indefinido",
    answer: "dieron",
    wrongAspect: "daban",
    template: (s, place) => `Al finalizar el taller ecológico en ${place}, ${s} _____ (dar) las gracias a la cooperativa.`,
    reason: "A single completed concluding action (*al finalizar*) takes the *indefinido* of *dar*: **dieron**.",
  },
];

const ASPECT_TIER3: Array<{
  infinitive: string;
  meaningCue: string;
  subjType: "sg" | "pl" | "nosotros" | "yo";
  answer: string;
  wrongAspect: string;
  template: (subj: string, place: string) => string;
  reason: string;
}> = [
  {
    infinitive: "saber",
    meaningCue: "found out",
    subjType: "sg",
    answer: "supo",
    wrongAspect: "sabía",
    template: (s, place) => `Al leer el informe sobre ${place}, ${s} _____ (saber = found out) que el alquiler había duplicado su precio.`,
    reason: "In the *pretérito indefinido*, *saber* shifts to 'found out / learned': **supo**.",
  },
  {
    infinitive: "saber",
    meaningCue: "already knew",
    subjType: "yo",
    answer: "sabía",
    wrongAspect: "supe",
    template: (_s, place) => `Antes de viajar a ${place}, yo ya _____ (saber = already knew) que el parque limitaba las entradas.`,
    reason: "Ongoing prior knowledge ('already knew') takes the *imperfecto*: **sabía**.",
  },
  {
    infinitive: "conocer",
    meaningCue: "met for the first time",
    subjType: "sg",
    answer: "conoció",
    wrongAspect: "conocía",
    template: (s, place) => `En un taller sostenible en ${place}, ${s} _____ (conocer = met for the first time) a una familia anfitriona.`,
    reason: "Meeting someone for the first time requires *conocer* in the *indefinido*: **conoció**.",
  },
  {
    infinitive: "conocer",
    meaningCue: "was already familiar with",
    subjType: "nosotros",
    answer: "conocíamos",
    wrongAspect: "conocimos",
    template: (_s, place) => `Aunque llevábamos mapa, ya _____ (conocer = already knew) muy bien las rutas rurales de ${place}.`,
    reason: "Ongoing prior familiarity takes *conocer* in the *imperfecto*: **conocíamos**.",
  },
  {
    infinitive: "poder",
    meaningCue: "managed / succeeded",
    subjType: "pl",
    answer: "pudieron",
    wrongAspect: "podían",
    template: (s, place) => `Tras dos horas de caminata en ${place}, ${s} _____ (poder = managed to) observar aves endémicas.`,
    reason: "Succeeding in a completed attempt takes *poder* in the *indefinido*: **pudieron**.",
  },
  {
    infinitive: "poder",
    meaningCue: "failed to",
    subjType: "yo",
    answer: "pude",
    wrongAspect: "podía",
    template: (_s, place) => `Aquel lunes en ${place}, no _____ (poder = failed to) reservar entrada porque el cupo estaba agotado.`,
    reason: "A completed failure to do something takes *no poder* in the *indefinido*: **pude**.",
  },
  {
    infinitive: "querer",
    meaningCue: "refused to",
    subjType: "sg",
    answer: "quiso",
    wrongAspect: "quería",
    template: (s, place) => `Pese a las críticas en ${place}, ${s} no _____ (querer = refused to) reducir los cruceros diarios.`,
    reason: "Active refusal ('refused to') requires *no querer* in the *indefinido*: **quiso**.",
  },
  {
    infinitive: "querer",
    meaningCue: "wanted to (desire)",
    subjType: "nosotros",
    answer: "queríamos",
    wrongAspect: "quisimos",
    template: (_s, place) => `Durante nuestra estancia en ${place}, _____ (querer = wanted to) apoyar únicamente alojamientos locales.`,
    reason: "Describing an ongoing intention or desire without focusing on a single refusal takes the *imperfecto*: **queríamos**.",
  },
];

const preteritoVsImperfecto: Drill = {
  id: "2-experiencias.preterito-vs-imperfecto",
  topicId: "2-experiencias",
  title: "Pretérito Indefinido vs Imperfecto (Travel Aspect)",
  level: 1,
  ibLevel: "SL",
  guideRef: "ocio-viajes-turismo",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const place = rng.pick(TRAVEL_PLACES);
    const traps: Trap[] = [];

    if (tier === 1) {
      const e = rng.pick(ASPECT_TIER1);
      const frames: Record<string, string[]> = {
        caminar: [
          `Mientras nosotros _____ (caminar) por el centro histórico de ${place}, empezó a llover con fuerza.`,
          `Mientras nosotros _____ (caminar) hacia el mirador de ${place}, oímos música tradicional.`,
          `Mientras nosotros _____ (caminar) por el puerto de ${place}, llegó un crucero enorme.`,
          `Mientras nosotros _____ (caminar) cerca del mercado de ${place}, vimos una protesta vecinal.`,
          `Mientras nosotros _____ (caminar) por los senderos de ${place}, un guía nos saludó.`,
        ],
        visitar: [
          `El verano pasado, yo _____ (visitar) un proyecto de ecoturismo en ${place}.`,
          `En julio de 2024, yo _____ (visitar) un taller de artesanía sostenible en ${place}.`,
          `El mes pasado, yo _____ (visitar) el parque natural protegido de ${place}.`,
          `Aquel domingo, yo _____ (visitar) una cooperativa local en ${place}.`,
          `Durante las últimas vacaciones, yo _____ (visitar) el casco antiguo de ${place}.`,
        ],
        sacar: [
          `Al entrar en la plaza de ${place}, decenas de turistas _____ (sacar) fotos sin parar.`,
          `Mientras el guía hablaba en ${place}, los viajeros _____ (sacar) fotografías del paisaje.`,
          `Cuando llegamos al mirador de ${place}, todos _____ (sacar) fotos del atardecer.`,
          `Por aquel entonces en ${place}, los cruceristas _____ (sacar) fotos frente a cada tienda.`,
          `Mientras descansábamos en ${place}, los visitantes _____ (sacar) fotos de la fauna.`,
        ],
        llegar: [
          `A las ocho en punto, nosotros _____ (llegar) al albergue ecológico de ${place}.`,
          `Ayer por la tarde, nosotros _____ (llegar) en tren nocturno a ${place}.`,
          `Finalmente, el lunes nosotros _____ (llegar) al centro de interpretación de ${place}.`,
          `Justo antes del amanecer, nosotros _____ (llegar) al puerto de ${place}.`,
          `Aquel viernes, nosotros _____ (llegar) sin retraso a ${place}.`,
        ],
        viajar: [
          `De pequeña, mi hermana _____ (viajar) todos los veranos a ${place} con nuestros abuelos.`,
          `Antiguamente, la periodista _____ (viajar) cada otoño a ${place} en temporada baja.`,
          `Durante su infancia, mi prima _____ (viajar) a menudo a ${place} en ferrocarril.`,
          `Todos los años, la profesora _____ (viajar) a ${place} para hacer senderismo.`,
          `Siempre que podía, mi tía _____ (viajar) a ${place} en primavera.`,
        ],
        comprar: [
          `Ayer por la mañana, yo _____ (comprar) cerámica local en un mercado de ${place}.`,
          `El sábado pasado, yo _____ (comprar) un billete de tren sostenible hacia ${place}.`,
          `Antes de regresar, yo _____ (comprar) artesanía justa en una cooperativa de ${place}.`,
          `Aquel mediodía, yo _____ (comprar) fruta de proximidad en ${place}.`,
          `La semana pasada, yo _____ (comprar) una guía de ecoturismo de ${place}.`,
        ],
        recorrer: [
          `Mientras nosotros _____ (recorrer) las calles estrechas de ${place}, se acercó una vecina.`,
          `Mientras nosotros _____ (recorrer) la reserva natural de ${place}, apareció una tortuga.`,
          `Mientras nosotros _____ (recorrer) la ruta costera de ${place}, sonó la alerta de lluvia.`,
          `Mientras nosotros _____ (recorrer) el barrio antiguo de ${place}, conocimos a un artesano.`,
          `Mientras nosotros _____ (recorrer) el valle cerca de ${place}, se despejó la niebla.`,
        ],
        decidir: [
          `De repente, los jóvenes _____ (decidir) alojarse en una casa rural cerca de ${place}.`,
          `Al ver las colas en ${place}, mis amigos _____ (decidir) viajar fuera de temporada alta.`,
          `Aquel verano, los organizadores _____ (decidir) limitar las visitas guiadas en ${place}.`,
          `En cuanto leyeron el folleto de ${place}, ellos _____ (decidir) reducir su huella ecológica.`,
          `Al final del debate, los estudiantes _____ (decidir) investigar el ecoturismo en ${place}.`,
        ],
      };
      const sentence = rng.pick(frames[e.infinitive]);
      traps.push({
        spec: { type: "text", accept: [e.wrongAspect] },
        feedback: `Check the aspect cue! ${e.reason}`,
      });
      return {
        prompt: `Write the exact past verb form (*pretérito indefinido* or *imperfecto*) for **${e.infinitive}**:\n*«${sentence}»*`,
        answer: { type: "text", accept: [e.answer] },
        traps,
        hint: `Look at the time trigger: is the verb painting an ongoing backdrop/habit (*imperfecto*) or a completed event (*indefinido*)?`,
        solution: [
          e.reason,
          `Conjugating **${e.infinitive}** (${e.subjectLabel}) in the *${e.target}* gives **${e.answer}**.`,
        ],
      };
    }

    if (tier === 2) {
      const e = rng.pick(ASPECT_TIER2);
      const subj =
        e.subjType === "sg"
          ? rng.pick(TRAVEL_SUBJECTS_SG).subj
          : e.subjType === "pl"
            ? rng.pick(TRAVEL_SUBJECTS_PL).subj
            : e.subjType;
      const sentence = e.template(subj, place);
      traps.push({
        spec: { type: "text", accept: [e.wrongAspect] },
        feedback: `Wrong past aspect! ${e.reason}`,
      });
      return {
        prompt: `Complete with the accurate irregular past form (*indefinido* or *imperfecto*):\n*«${sentence}»*`,
        answer: { type: "text", accept: [e.answer] },
        traps,
        hint: `Decide first between ongoing backdrop/habit (*imperfecto*) and completed action (*indefinido*), then check irregular stems.`,
        solution: [
          e.reason,
          `Exact form: **${e.answer}**.`,
        ],
      };
    }

    const e = rng.pick(ASPECT_TIER3);
    const subj =
      e.subjType === "sg"
        ? rng.pick(TRAVEL_SUBJECTS_SG).subj
        : e.subjType === "pl"
          ? rng.pick(TRAVEL_SUBJECTS_PL).subj
          : e.subjType;
    const sentence = e.template(subj, place);
    traps.push({
      spec: { type: "text", accept: [e.wrongAspect] },
      feedback: `Watch the meaning shift on **${e.infinitive}**! ${e.reason}`,
    });
    return {
      prompt: `Meaning-shift past tense! Complete with the exact form of **${e.infinitive}** (*${e.meaningCue}*):\n*«${sentence}»*`,
      answer: { type: "text", accept: [e.answer] },
      traps,
      hint: `State verbs (*saber, conocer, poder, querer*) shift meaning in the *pretérito indefinido* vs *imperfecto*.`,
      solution: [
        e.reason,
        `Exact form: **${e.answer}**.`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// 2. Pretérito Pluscuamperfecto (Migration & Life-Story Sequencing)
// ---------------------------------------------------------------------------

const MIGRATION_DESTINATIONS = [
  "Madrid",
  "Buenos Aires",
  "Bilbao",
  "Santiago de Chile",
  "Montevideo",
  "Valencia",
  "Ciudad de México",
  "Bogotá",
] as const;

const PLUPERFECT_SUBJECTS = [
  { text: "yo", aux: "había", label: "yo" },
  { text: "mi abuela", aux: "había", label: "ella" },
  { text: "el arquitecto colombiano", aux: "había", label: "él" },
  { text: "nosotros", aux: "habíamos", label: "nosotros" },
  { text: "mis padres", aux: "habían", label: "ellos" },
  { text: "las hermanas peruanas", aux: "habían", label: "ellas" },
] as const;

const REG_PARTICIPLES = [
  { inf: "ahorrar", part: "ahorrado", obj: "durante tres años para el billete" },
  { inf: "estudiar", part: "estudiado", obj: "arquitectura en su país natal" },
  { inf: "trabajar", part: "trabajado", obj: "en un hospital público" },
  { inf: "vivir", part: "vivido", obj: "siempre cerca del mar" },
  { inf: "aprender", part: "aprendido", obj: "a cocinar las recetas familiares" },
  { inf: "solicitar", part: "solicitado", obj: "el visado de residencia" },
  { inf: "enviar", part: "enviado", obj: "remesas a sus abuelos" },
] as const;

const IRREG_PARTICIPLES = [
  { inf: "escribir", part: "escrito", bad: "escribido", obj: "varias cartas a sus primos" },
  { inf: "hacer", part: "hecho", bad: "hacido", obj: "todos los trámites consulares" },
  { inf: "ver", part: "visto", bad: "vido", obj: "nevar en pleno invierno" },
  { inf: "volver", part: "vuelto", bad: "volvido", obj: "dos veces a su pueblo natal" },
  { inf: "abrir", part: "abierto", bad: "abrido", obj: "una pequeña librería en el barrio" },
  { inf: "decir", part: "dicho", bad: "decido", obj: "adiós a sus vecinos con emoción" },
  { inf: "poner", part: "puesto", bad: "ponido", obj: "las fotos familiares en la maleta" },
  { inf: "descubrir", part: "descubierto", bad: "descubrido", obj: "el significado del desarraigo" },
  { inf: "resolver", part: "resuelto", bad: "resolvido", obj: "la homologación del título universitario" },
  { inf: "romper", part: "roto", bad: "rompido", obj: "muchos estereotipos culturales" },
] as const;

const pluscuamperfectoSecuencia: Drill = {
  id: "2-experiencias.pluscuamperfecto-secuencia",
  topicId: "2-experiencias",
  title: "Pretérito Pluscuamperfecto (Migration Timeline)",
  level: 2,
  ibLevel: "SL",
  guideRef: "historias-vida-migracion",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const city = rng.pick(MIGRATION_DESTINATIONS);
    const subj = rng.pick(PLUPERFECT_SUBJECTS);
    const traps: Trap[] = [];

    if (tier === 1) {
      const v = rng.pick(REG_PARTICIPLES);
      const ans = `${subj.aux} ${v.part}`;
      const presentAux = subj.aux === "había" ? "ha" : subj.aux === "habíamos" ? "hemos" : "han";
      traps.push({
        spec: { type: "text", accept: [`${presentAux} ${v.part}`] },
        feedback: `That's the present perfect (*${presentAux} ${v.part}*). Before another past event (*antes de llegar*), use the *pluscuamperfecto*: **${ans}**.`,
      });
      return {
        prompt: `Write the two-word *pretérito pluscuamperfecto* of **${v.inf}** (${subj.label}):\n*«Antes de instalarse en ${city}, ${subj.text} ya _____ ${v.obj}.»*`,
        answer: { type: "text", accept: [ans] },
        traps,
        hint: `Combine the *imperfecto* of *haber* (**${subj.aux}**) with the regular past participle (*-ado / -ido*).`,
        solution: [
          `An event completed before arriving in ${city} takes the *pluscuamperfecto* (\`había/habíamos/habían + participio\`).`,
          `For *${subj.label}* + **${v.inf}** → **${ans}**.`,
        ],
      };
    }

    const v = rng.pick(IRREG_PARTICIPLES);
    const ans = `${subj.aux} ${v.part}`;
    traps.push({
      spec: { type: "text", accept: [`${subj.aux} ${v.bad}`] },
      feedback: `**${v.inf}** has an irregular past participle (**${v.part}**, never *${v.bad}*).`,
    });

    if (tier === 2) {
      return {
        prompt: `Complete with the two-word *pluscuamperfecto* (irregular participle of **${v.inf}**, ${subj.label}):\n*«Cuando llegó el otoño en ${city}, ${subj.text} ya _____ ${v.obj}.»*`,
        answer: { type: "text", accept: [ans] },
        traps,
        hint: `Recall **REVV MAC PHDD** for the irregular participle of **${v.inf}**.`,
        solution: [
          `The irregular past participle of **${v.inf}** is **${v.part}**.`,
          `Combining with *${subj.aux}* (${subj.label}) gives **${ans}**.`,
        ],
      };
    }

    const adv = rng.pick(["nunca", "todavía no", "ya"]);
    const fullAns = `${adv} ${ans}`;
    traps.push({
      spec: { type: "text", accept: [`${subj.aux} ${adv} ${v.part}`] },
      feedback: `Never split *haber* and the participle! Place **${adv}** BEFORE **${subj.aux}**: **${fullAns}**.`,
    });
    const anchor = rng.pick([
      `Cuando consiguieron el permiso en ${city}`,
      `Al cabo de un año en ${city}`,
      `Antes de conceder la entrevista en ${city}`,
    ]);
    return {
      prompt: `Place the adverb **${adv}** accurately and form the *pluscuamperfecto* of **${v.inf}** (${subj.label}):\n*«${anchor}, ${subj.text} _____ (${adv} / ${v.inf}) ${v.obj}.»*`,
      answer: { type: "text", accept: [fullAns] },
      traps,
      hint: `Keep *haber* and the irregular participle glued together—put **${adv}** right before **${subj.aux}**.`,
      solution: [
        `Adverbs like *${adv}* always precede *haber* in Spanish compound tenses.`,
        `Irregular participle of **${v.inf}** is **${v.part}** → **${fullAns}**.`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// 3. Theme 2 Precision Vocabulary (Tourism, Leisure & Migration)
// ---------------------------------------------------------------------------

interface VocabCue {
  term: string;
  accept: string[];
  en: string;
  clue: string;
  tier: 1 | 2 | 3;
  contexts: string[];
}

const THEME2_VOCAB: VocabCue[] = [
  // Tier 1
  {
    term: "alojamiento",
    accept: ["alojamiento", "el alojamiento"],
    en: "accommodation / lodging",
    clue: "singular masculine noun starting with *al-*",
    tier: 1,
    contexts: [
      "En Costa Rica elegimos un _____ ecológico gestionado por familias locales.",
      "El encarecimiento del _____ dificulta la estancia de los estudiantes en Barcelona.",
      "Durante el intercambio en Oaxaca, nuestro _____ incluía cenas compartidas.",
      "Los ecoturistas prefieren un _____ sostenible frente a los grandes complejos.",
      "Al reservar el _____ en Galápagos, comprobamos su certificado ambiental.",
    ],
  },
  {
    term: "remesas",
    accept: ["remesas", "las remesas"],
    en: "remittances (money sent home by migrants)",
    clue: "plural feminine noun starting with *rem-*",
    tier: 1,
    contexts: [
      "Las _____ enviadas desde el extranjero financian la educación de muchos hogares en México.",
      "En El Salvador, las _____ representan una parte fundamental de la economía familiar.",
      "Cada mes, miles de trabajadores migrantes transfieren _____ a sus pueblos de origen.",
      "El informe analiza cómo las _____ alivian la pobreza en comunidades rurales andinas.",
      "Para muchas familias centroamericanas, las _____ permiten reparar viviendas y abrir comercios.",
    ],
  },
  {
    term: "estancia",
    accept: ["estancia", "la estancia"],
    en: "stay / period spent in a place",
    clue: "singular feminine noun starting with *est-*",
    tier: 1,
    contexts: [
      "Nuestra _____ de tres semanas en Sevilla nos permitió vivir la Semana Santa desde dentro.",
      "Durante su _____ en Machu Picchu, el grupo colaboró en la limpieza de senderos.",
      "Una _____ prolongada con familias locales fomenta la inmersión lingüística.",
      "Al concluir su _____ universitaria en Madrid, Lucía reflexionó sobre su adaptación.",
      "La _____ en la reserva natural exige respetar estrictamente la fauna endémica.",
    ],
  },
  {
    term: "patrimonio",
    accept: ["patrimonio", "el patrimonio"],
    en: "heritage (cultural or natural)",
    clue: "singular masculine noun starting with *patr-*",
    tier: 1,
    contexts: [
      "La UNESCO declaró Las Fallas _____ Cultural Inmaterial de la Humanidad en 2016.",
      "El ecoturismo busca proteger el _____ natural de las Islas Galápagos.",
      "Los vecinos exigen medidas para conservar el _____ histórico del barrio frente a la especulación.",
      "Preservar la gastronomía indígena forma parte esencial del _____ cultural mexicano.",
      "Cada generación decide cómo transmitir su _____ artístico y lingüístico.",
    ],
  },
  {
    term: "temporada baja",
    accept: ["temporada baja", "la temporada baja"],
    en: "off-peak / low season",
    clue: "two-word feminine noun phrase (opposite of *temporada alta*)",
    tier: 1,
    contexts: [
      "Viajar en _____ reduce el impacto sobre los ecosistemas frágiles de Mallorca.",
      "Los ayuntamientos promocionan rutas culturales en _____ para estabilizar el empleo.",
      "En _____, las calles históricas recuperan su ritmo cotidiano y los precios bajan.",
      "Elegimos visitar Cusco en _____ para evitar las aglomeraciones de julio.",
      "Fomentar el turismo rural en _____ combate la saturación costera del verano.",
    ],
  },
  {
    term: "nostalgia",
    accept: ["nostalgia", "la nostalgia"],
    en: "nostalgia / homesickness",
    clue: "singular feminine noun (cognate starting with *n-*)",
    tier: 1,
    contexts: [
      "En su diario de migración, el escritor evoca con _____ las sobremesas de su infancia.",
      "Escuchar canciones folclóricas en el extranjero suele despertar una profunda _____.",
      "El testimonio combina la gratitud por nuevas oportunidades con la _____ del hogar.",
      "Las cartas antiguas reflejan la _____ de los emigrantes gallegos en Montevideo.",
      "La memoria migratoria oscila entre la esperanza futura y la _____ del paisaje natal.",
    ],
  },
  // Tier 2
  {
    term: "masificación",
    accept: ["masificación", "la masificación"],
    en: "overcrowding / mass concentration (of tourists)",
    clue: "singular feminine noun ending in *-ción* (from *masa*)",
    tier: 2,
    contexts: [
      "Los vecinos de Barcelona protestan contra la _____ turística en el Barrio Gótico.",
      "Para frenar la _____ en Machu Picchu, se implantaron circuitos con horarios fijos.",
      "La _____ en verano satura el transporte público y encarece los alquileres locales.",
      "El artículo contrapone el viaje lento frente a la _____ de los cruceros gigantes.",
      "Sin límites claros, la _____ deteriora la convivencia en islas como Mallorca.",
    ],
  },
  {
    term: "huella ecológica",
    accept: ["huella ecológica", "la huella ecológica"],
    en: "ecological footprint",
    clue: "two-word feminine phrase (*huella* + adjective)",
    tier: 2,
    contexts: [
      "Sustituir los vuelos cortos por trenes nocturnos disminuye nuestra _____.",
      "El folleto anima a los viajeros responsables a compensar su _____.",
      "El turismo de masas deja una _____ insostenible en los parques marinos.",
      "Al elegir hospedajes con energía solar, los visitantes reducen su _____.",
      "Debemos calcular la _____ real de las vacaciones de larga distancia.",
    ],
  },
  {
    term: "capacidad de carga",
    accept: ["capacidad de carga", "la capacidad de carga"],
    en: "carrying capacity",
    clue: "three-word feminine phrase (*capacidad de ...*)",
    tier: 2,
    contexts: [
      "Las Islas Galápagos restringen las entradas para no superar su _____.",
      "Cuando una ciudad sobrepasa su _____, el agua y la vivienda sufren presión extrema.",
      "Los biólogos evaluaron la _____ de los senderos incas antes de ampliar los cupos.",
      "Respetar la _____ de un enclave protegido garantiza su supervivencia futura.",
      "El informe advierte que las playas mediterráneas exceden su _____ cada agosto.",
    ],
  },
  {
    term: "desarraigo",
    accept: ["desarraigo", "el desarraigo"],
    en: "uprootedness / feeling cut off from one's roots",
    clue: "singular masculine noun (antonym of *arraigo*)",
    tier: 2,
    contexts: [
      "Las asociaciones vecinales ayudan a los recién llegados a superar el _____.",
      "El poeta describe el _____ que sintió al escuchar un acento distinto cada mañana.",
      "Imponer la asimilación forzosa profundiza el _____ de las familias migrantes.",
      "Mantener recetas y fiestas propias mitiga el _____ lejos de la tierra natal.",
      "El documental recoge historias de resiliencia frente al _____ migratorio.",
    ],
  },
  {
    term: "choque cultural",
    accept: ["choque cultural", "el choque cultural"],
    en: "culture shock",
    clue: "two-word masculine phrase starting with *ch-*",
    tier: 2,
    contexts: [
      "El _____ incluye desde horarios de comida distintos hasta diferencias de registro.",
      "Al mudarse de Bogotá a Madrid, sufrió un pequeño _____ por el léxico regional.",
      "La orientación previa ayuda a los estudiantes de intercambio a gestionar el _____.",
      "Superar el _____ requiere curiosidad, paciencia y escucha activa.",
      "En su blog, relató con humor el _____ vivido durante su primera semana en Tokio.",
    ],
  },
  {
    term: "fuga de cerebros",
    accept: ["fuga de cerebros", "la fuga de cerebros"],
    en: "brain drain",
    clue: "three-word feminine phrase (*fuga de ...*)",
    tier: 2,
    contexts: [
      "La marcha de jóvenes investigadores por precariedad laboral se conoce como _____.",
      "Tras la crisis económica, España debatió medidas para revertir la _____.",
      "Muchos países latinoamericanos buscan transformar la _____ en circulación de talento.",
      "La falta de inversión científica agrava la _____ hacia universidades extranjeras.",
      "El editorial analiza el coste económico de la _____ para los países de origen.",
    ],
  },
  // Tier 3
  {
    term: "desestacionalización",
    accept: ["desestacionalización", "la desestacionalización"],
    en: "spreading tourism beyond peak season",
    clue: "long feminine noun built from *estación* (ends in *-ción*)",
    tier: 3,
    contexts: [
      "La _____ permite ofrecer contratos estables todo el año en la costa balear.",
      "Sin una verdadera _____, el sector turístico depende peligrosamente de julio y agosto.",
      "El ministerio subvencionó rutas otoñales para impulsar la _____.",
      "La _____ alivia la congestión estival y revitaliza museos en invierno.",
      "Expertos en economía señalan la _____ como eje clave del turismo sostenible.",
    ],
  },
  {
    term: "homologación",
    accept: ["homologación", "la homologación"],
    en: "official recognition/validation (of foreign degrees)",
    clue: "singular feminine noun ending in *-ción* (used with *de títulos*)",
    tier: 3,
    contexts: [
      "La lentitud en la _____ de títulos impide que médicos migrantes ejerzan su profesión.",
      "Agilizar la _____ universitaria facilita una integración laboral digna.",
      "Esperó dieciocho meses hasta obtener la _____ de su diploma de ingeniería.",
      "Sin la _____, numerosos profesionales cualificados aceptan empleos precarios.",
      "El artículo propone digitalizar los trámites de _____ para aprovechar el talento migrante.",
    ],
  },
  {
    term: "mercantilización",
    accept: ["mercantilización", "la mercantilización"],
    en: "commodification / commercialisation",
    clue: "singular feminine noun ending in *-ción* (from *mercantil*)",
    tier: 3,
    contexts: [
      "Críticos locales denuncian la _____ del Día de los Muertos en zonas turísticas.",
      "La _____ de las fiestas populares amenaza con sustituir el sentido comunitario por lucro.",
      "El ensayo distingue el intercambio respetuoso de la _____ superficial del folclore.",
      "Algunos artesanos temen que la _____ abarate sus técnicas ancestrales.",
      "Debemos proteger el patrimonio vivo frente a la _____ masiva.",
    ],
  },
  {
    term: "gentrificación",
    accept: ["gentrificación", "la gentrificación"],
    en: "gentrification",
    clue: "singular feminine noun ending in *-ción* starting with *gentr-*",
    tier: 3,
    contexts: [
      "La proliferación de pisos turísticos acelera la _____ en barrios históricos de Madrid.",
      "La _____ expulsa a las familias de rentas bajas y sustituye comercios tradicionales.",
      "Movimientos ciudadanos debaten cómo frenar la _____ sin cerrar la ciudad al mundo.",
      "En Oaxaca y Barcelona, la _____ ha transformado radicalmente el precio del alquiler.",
      "El documental muestra los rostros humanos detrás de la _____ urbana.",
    ],
  },
  {
    term: "asimilación",
    accept: ["asimilación", "la asimilación"],
    en: "assimilation (one-way cultural absorption)",
    clue: "singular feminine noun contrasted with *integración*",
    tier: 3,
    contexts: [
      "A diferencia de la integración mutua, la _____ exige abandonar la lengua materna.",
      "Las políticas históricas de _____ forzosa debilitaron muchas tradiciones minoritarias.",
      "El ensayo argumenta que la _____ unilateral empobrece la diversidad cívica.",
      "Numerosos jóvenes de segunda generación rechazan la _____ y reivindican sus raíces.",
      "Confundir integración con _____ genera tensiones innecesarias en las escuelas.",
    ],
  },
  {
    term: "identidad híbrida",
    accept: ["identidad híbrida", "la identidad híbrida"],
    en: "hybrid identity",
    clue: "two-word feminine phrase (*identidad* + adjective with tilde)",
    tier: 3,
    contexts: [
      "La segunda generación suele construir una _____ que enlaza dos mundos culturales.",
      "Lejos de ser una fractura, la _____ fortalece la empatía y la flexibilidad lingüística.",
      "En su novela, la protagonista celebra su _____ entre Bogotá y Barcelona.",
      "Los talleres interculturales valoran la _____ como un puente creativo.",
      "El testimonio reflexiona sobre los retos y riquezas de habitar una _____.",
    ],
  },
];

const lexicoTurismoMigracion: Drill = {
  id: "2-experiencias.lexico-turismo-migracion",
  topicId: "2-experiencias",
  title: "Theme 2 Lexical Precision (Tourism & Migration)",
  level: 1,
  ibLevel: "SL",
  guideRef: "ocio-viajes-turismo",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = THEME2_VOCAB.filter((v) => v.tier === tier);
    const item = rng.pick(pool);
    const sentence = rng.pick(item.contexts);
    const traps: Trap[] = [];
    if (item.term === "asimilación") {
      traps.push({
        spec: { type: "text", accept: ["integración", "la integración"] },
        feedback: "*Integración* is bidirectional mutual participation; one-way erasure is **asimilación**.",
      });
    } else if (item.term === "desarraigo") {
      traps.push({
        spec: { type: "text", accept: ["arraigo", "el arraigo"] },
        feedback: "*Arraigo* means rootedness/belonging; its antonym (uprootedness) is **desarraigo**.",
      });
    }
    return {
      prompt: `Fill the blank with the exact Theme 2 Spanish term for **${item.en}** (${item.clue}):\n*«${sentence}»*`,
      answer: { type: "text", accept: item.accept },
      traps,
      hint: `Think of the exact B2–C1 Spanish expression for "${item.en}" (${item.clue}).`,
      solution: [
        `In IB Spanish B Theme 2, "${item.en}" translates precisely as **${item.term}**.`,
        `Complete sentence: *«${sentence.replace("_____", `**${item.term}**`)}»*`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// 4. Hispanic Festivals, Rites of Passage & Cultural Grammar (Soler / Se)
// ---------------------------------------------------------------------------

const CULTURE_SE_VERBS = [
  { inf: "preparar", sg: "se prepara", pl: "se preparan", sgObj: "el pan de muerto con anís", plObj: "los altares familiares con velas", place: "México" },
  { inf: "colocar", sg: "se coloca", pl: "se colocan", sgObj: "la fotografía del antepasado", plObj: "las flores de cempasúchil", place: "Oaxaca" },
  { inf: "quemar", sg: "se quema", pl: "se queman", sgObj: "el monumento principal en la plaza", plObj: "cientos de ninots satíricos", place: "Valencia" },
  { inf: "elaborar", sg: "se elabora", pl: "se elaboran", sgObj: "una alfombra floral frente a la iglesia", plObj: "alfombras de aserrín teñido", place: "Antigua Guatemala" },
  { inf: "celebrar", sg: "se celebra", pl: "se celebran", sgObj: "la misa de acción de gracias", plObj: "las fiestas de quinceañera", place: "América Latina" },
  { inf: "compartir", sg: "se comparte", pl: "se comparten", sgObj: "una larga sobremesa con café", plObj: "historias familiares tras la comida", place: "España e Hispanoamérica" },
] as const;

const CULTURE_FACTS_T1: Array<{
  answer: string[];
  display: string;
  stems: string[];
  hint: string;
  explanation: string;
}> = [
  {
    answer: ["sobremesa", "la sobremesa"],
    display: "la sobremesa",
    stems: [
      "What single Spanish noun names the unhurried conversation held around the table after finishing a shared meal?",
      "Which everyday Hispanic custom reflects relational time by lingering over coffee and debate after lunch?",
      "Complete the cultural term: *«El uso constante del móvil en los restaurantes amenaza _____ tradicional familiar.»*",
      "Identify the Spanish noun (literally 'over the table') expressing post-meal family cohesion.",
      "Which cherished pan-Hispanic mealtime custom has no single-word English equivalent?",
    ],
    hint: "Combines *sobre* + *mesa*.",
    explanation: "**La sobremesa** is the unhurried post-meal conversation valuing human connection over clock efficiency.",
  },
  {
    answer: ["ofrenda", "la ofrenda", "altar", "el altar"],
    display: "la ofrenda",
    stems: [
      "What Spanish noun (starting with *o-*) names the decorated home memorial built for Mexican *Día de los Muertos*?",
      "Complete: *«Las familias mexicanas decoran _____ con pan de muerto, velas y fotos para recibir a sus difuntos.»*",
      "Which home structure in Oaxaca and Michoacán honours departed relatives with marigolds and favourite foods?",
      "Identify the key Spanish cultural noun for a *Día de los Muertos* memorial table (*o...*).",
      "In *Día de los Muertos*, what is the name of the layered offering prepared for ancestors?",
    ],
    hint: "Starts with *o-* (meaning 'offering').",
    explanation: "**La ofrenda** (or *el altar*) welcomes departed loved ones with *cempasúchil*, candles, photos, and dishes.",
  },
  {
    answer: ["ninots", "los ninots", "ninot", "el ninot"],
    display: "los ninots",
    stems: [
      "What are the giant satirical papier-mâché figures created and burned during Valencia's *Las Fallas* called?",
      "Complete: *«Cada marzo en Valencia, los artistas falleros critican la actualidad mediante _____ llenos de ironía.»*",
      "Which Valencian term names the sculptural caricatures burned on the night of *la Cremà*?",
      "Identify the satiric figures of *Las Fallas* of which only one (*el ... indultat*) escapes the flames.",
      "What plural noun names the satirical sculptures displayed in Valencian neighbourhoods in March?",
    ],
    hint: "Short Valencian loanword starting with *n-*.",
    explanation: "**Los ninots** embody the civic satire (*sátira social y política*) at the heart of Valencia's *Las Fallas*.",
  },
  {
    answer: ["quinceañera", "la quinceañera"],
    display: "la quinceañera",
    stems: [
      "Which Latin American rite of passage marks a young woman's 15th birthday with extended family and *padrinos*?",
      "Complete: *«En muchos países latinoamericanos, _____ tradicional incluye un vals y el cambio de zapatillas.»*",
      "Name the 15th-birthday transition celebration currently debated over cost (*endeudamiento*) and gender norms.",
      "Which Hispanic coming-of-age milestone is often co-funded by community godparents (*padrinos*)?",
      "Identify the Spanish term for the iconic 15th-birthday celebration across Mexico, Colombia, and the Latino diaspora.",
    ],
    hint: "Derived directly from *quince años*.",
    explanation: "**La quinceañera** symbolises coming of age and extended family solidarity (*padrinos*), though many youth now adapt it.",
  },
  {
    answer: ["cempasúchil", "flor de cempasúchil", "la flor de cempasúchil"],
    display: "cempasúchil",
    stems: [
      "What is the Mexican Náhuatl-origin name for the bright orange marigold used on *Día de los Muertos* altars?",
      "Complete: *«Los pétalos de _____ forman un camino luminoso para guiar a los espíritus hasta el hogar.»*",
      "Name the aromatic golden flower central to Mexican November *ofrendas* (starts with *cemp-*).",
      "Which bright orange flower symbolises the path of light during *Día de los Muertos* in Oaxaca?",
      "Give the Spanish name of the Aztec marigold placed around graves and altars on 1–2 November.",
    ],
    hint: "Starts with *cemp-* and carries a tilde on the *ú*.",
    explanation: "The **flor de cempasúchil** (Aztec marigold) guides spirits home with its vibrant colour and scent.",
  },
  {
    answer: ["semana santa", "la semana santa"],
    display: "la Semana Santa",
    stems: [
      "Which major spring religious and artistic festival features *cofradías*, *pasos*, and *saetas* in Andalucía?",
      "Name the two-word Hispanic Holy Week celebration famous for dyed sawdust carpets in Antigua Guatemala.",
      "Complete: *«Durante _____ en Sevilla, miles de personas escuchan en silencio el canto flamenco de la saeta.»*",
      "Which annual Hispanic observance combines processional floats (*pasos*) with centuries of Baroque sculpture?",
      "Identify the two-word festival celebrated with *alfombras de aserrín* in Guatemala and *nazarenos* in Málaga.",
    ],
    hint: "Literally 'Holy Week' in Spanish.",
    explanation: "**La Semana Santa** showcases brotherhoods (*cofradías*), artistic floats (*pasos*), and sawdust carpets across Spain and Guatemala.",
  },
];

const SOLER_SUBJECTS = [
  { subj: "mi abuela", form: "solía", bad: "solió", label: "ella" },
  { subj: "mis padres y yo", form: "solíamos", bad: "solimos", label: "nosotros" },
  { subj: "los vecinos del barrio", form: "solían", bad: "solieron", label: "ellos" },
  { subj: "yo", form: "solía", bad: "solí", label: "yo" },
] as const;

const SOLER_ACTIVITIES = [
  "preparar pan de muerto cada octubre",
  "ver las procesiones de Semana Santa desde el balcón",
  "prolongar la sobremesa los domingos hasta las seis",
  "ayudar a las comisiones falleras en el taller",
  "tejer alfombras de aserrín durante toda la madrugada",
  "reunirse con los padrinos antes de la quinceañera",
  "encender velas en el cementerio de Oaxaca",
] as const;

const tradicionesRitosCultura: Drill = {
  id: "2-experiencias.tradiciones-ritos-cultura",
  topicId: "2-experiencias",
  title: "Hispanic Traditions, Pasiva Refleja & Solía",
  level: 2,
  ibLevel: "SL",
  guideRef: "costumbres-tradiciones-ritos",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const traps: Trap[] = [];

    if (tier === 1) {
      const f = rng.pick(CULTURE_FACTS_T1);
      const prompt = rng.pick(f.stems);
      return {
        prompt,
        answer: { type: "text", accept: f.answer, display: f.display },
        traps,
        hint: f.hint,
        solution: [f.explanation],
      };
    }

    if (tier === 2) {
      const v = rng.pick(CULTURE_SE_VERBS);
      const isPlural = rng.bool();
      const obj = isPlural ? v.plObj : v.sgObj;
      const ans = isPlural ? v.pl : v.sg;
      const wrong = isPlural ? v.sg : v.pl;
      const opener = rng.pick([
        `En ${v.place}, tradicionalmente`,
        `Cada año en ${v.place},`,
        `Según la costumbre en ${v.place},`,
        `Durante esta celebración en ${v.place},`,
      ]);
      traps.push({
        spec: { type: "text", accept: [wrong] },
        feedback: `Check subject-verb agreement in the *pasiva refleja*: *${obj}* is ${isPlural ? "plural" : "singular"}, so write **${ans}**.`,
      });
      return {
        prompt: `Write the two-word present-tense *pasiva refleja* (*se* + **${v.inf}**) agreeing with the subject:\n*«${opener} _____ ${obj}.»*`,
        answer: { type: "text", accept: [ans] },
        traps,
        hint: `Check whether *${obj}* is singular or plural, then make the verb after *se* agree with it.`,
        solution: [
          `In a *pasiva refleja*, the verb agrees in number with the passive subject (*${obj}* → ${isPlural ? "plural" : "singular"}).`,
          `Therefore **${v.inf}** becomes **${ans}**.`,
        ],
      };
    }

    // Tier 3: Past custom with defective verb *soler* (imperfecto) vs *pasiva refleja* in imperfecto
    if (rng.bool(0.55)) {
      const s = rng.pick(SOLER_SUBJECTS);
      const act = rng.pick(SOLER_ACTIVITIES);
      const era = rng.pick(["Antiguamente,", "Hace décadas,", "De pequeños,", "En tiempos de mis abuelos,"]);
      traps.push({
        spec: { type: "text", accept: [s.bad] },
        feedback: `*Soler* is defective and NEVER takes the *pretérito indefinido* (*${s.bad}*); past customs always take the *imperfecto* (**${s.form}**).`,
      });
      return {
        prompt: `Complete this description of an ancestral custom using the *imperfecto* of **soler** (${s.label}):\n*«${era} ${s.subj} _____ ${act}.»*`,
        answer: { type: "text", accept: [s.form] },
        traps,
        hint: `*Soler* only conjugates in present and imperfect—never in the preterite!`,
        solution: [
          `To express 'used to' for past traditions, conjugate **soler** in the *imperfecto* (${s.label}) → **${s.form}**.`,
        ],
      };
    } else {
      const v = rng.pick(CULTURE_SE_VERBS);
      const isPlural = rng.bool();
      const obj = isPlural ? v.plObj : v.sgObj;
      const impStem = v.inf.endsWith("ar")
        ? v.inf.slice(0, -2) + (isPlural ? "aban" : "aba")
        : v.inf.slice(0, -2) + (isPlural ? "ían" : "ía");
      const impWrong = v.inf.endsWith("ar")
        ? v.inf.slice(0, -2) + (isPlural ? "aba" : "aban")
        : v.inf.slice(0, -2) + (isPlural ? "ía" : "ían");
      const ans = `se ${impStem}`;
      const wrong = `se ${impWrong}`;
      const era = rng.pick(["Antiguamente", "En el siglo pasado", "Antes de la llegada de las pantallas"]);
      traps.push({
        spec: { type: "text", accept: [wrong] },
        feedback: `Match the *imperfecto pasiva refleja* verb number to *${obj}* (${isPlural ? "plural" : "singular"}) → **${ans}**.`,
      });
      return {
        prompt: `Write the two-word *imperfecto* *pasiva refleja* (*se* + **${v.inf}**) describing how this custom was practised in the past:\n*«${era} en ${v.place}, _____ ${obj}.»*`,
        answer: { type: "text", accept: [ans] },
        traps,
        hint: `Use *se* + the *imperfecto* of **${v.inf}**, matching the number of *${obj}*.`,
        solution: [
          `Past customary practice takes the *imperfecto* in *pasiva refleja*, agreeing with ${isPlural ? "plural" : "singular"} *${obj}*: **${ans}**.`,
        ],
      };
    }
  },
};

// ---------------------------------------------------------------------------
// 5. [HL] Imperfecto de Subjuntivo in Past Reflection & Migration Testimony
// ---------------------------------------------------------------------------

interface SubjVerb {
  inf: string;
  ellosPret: string;
  tier: 1 | 2 | 3;
  forms: Record<"yo_el" | "ellos" | "nosotros", [string, string]>;
  presentSubjTrap: Record<"yo_el" | "ellos" | "nosotros", string>;
  contextObj: string;
}

const HL_SUBJ_VERBS: SubjVerb[] = [
  // Tier 1: regular & high-frequency stems
  {
    inf: "conservar",
    ellosPret: "conservaron",
    tier: 1,
    forms: {
      yo_el: ["conservara", "conservase"],
      ellos: ["conservaran", "conservasen"],
      nosotros: ["conserváramos", "conservásemos"],
    },
    presentSubjTrap: { yo_el: "conserve", ellos: "conserven", nosotros: "conservemos" },
    contextObj: "las cartas antiguas de la emigración",
  },
  {
    inf: "vivir",
    ellosPret: "vivieron",
    tier: 1,
    forms: {
      yo_el: ["viviera", "viviese"],
      ellos: ["vivieran", "viviesen"],
      nosotros: ["viviéramos", "viviésemos"],
    },
    presentSubjTrap: { yo_el: "viva", ellos: "vivan", nosotros: "vivamos" },
    contextObj: "entre dos mundos culturales",
  },
  {
    inf: "hablar",
    ellosPret: "hablaron",
    tier: 1,
    forms: {
      yo_el: ["hablara", "hablase"],
      ellos: ["hablaran", "hablasen"],
      nosotros: ["habláramos", "hablásemos"],
    },
    presentSubjTrap: { yo_el: "hable", ellos: "hablen", nosotros: "hablemos" },
    contextObj: "su lengua materna sin complejos",
  },
  {
    inf: "recordar",
    ellosPret: "recordaron",
    tier: 1,
    forms: {
      yo_el: ["recordara", "recordase"],
      ellos: ["recordaran", "recordasen"],
      nosotros: ["recordáramos", "recordásemos"],
    },
    presentSubjTrap: { yo_el: "recuerde", ellos: "recuerden", nosotros: "recordemos" },
    contextObj: "con tanto detalle su aldea natal",
  },
  {
    inf: "comprender",
    ellosPret: "comprendieron",
    tier: 1,
    forms: {
      yo_el: ["comprendiera", "comprendiese"],
      ellos: ["comprendieran", "comprendiesen"],
      nosotros: ["comprendiéramos", "comprendiésemos"],
    },
    presentSubjTrap: { yo_el: "comprenda", ellos: "comprendan", nosotros: "comprendamos" },
    contextObj: "el valor de la identidad híbrida",
  },
  // Tier 2: irregular preterite stems
  {
    inf: "tener",
    ellosPret: "tuvieron",
    tier: 2,
    forms: {
      yo_el: ["tuviera", "tuviese"],
      ellos: ["tuvieran", "tuviesen"],
      nosotros: ["tuviéramos", "tuviésemos"],
    },
    presentSubjTrap: { yo_el: "tenga", ellos: "tengan", nosotros: "tengamos" },
    contextObj: "tanta resiliencia frente al desarraigo",
  },
  {
    inf: "poder",
    ellosPret: "pudieron",
    tier: 2,
    forms: {
      yo_el: ["pudiera", "pudiese"],
      ellos: ["pudieran", "pudiesen"],
      nosotros: ["pudiéramos", "pudiésemos"],
    },
    presentSubjTrap: { yo_el: "pueda", ellos: "puedan", nosotros: "podamos" },
    contextObj: "homologar sus títulos universitarios",
  },
  {
    inf: "hacer",
    ellosPret: "hicieron",
    tier: 2,
    forms: {
      yo_el: ["hiciera", "hiciese"],
      ellos: ["hicieran", "hiciesen"],
      nosotros: ["hiciéramos", "hiciésemos"],
    },
    presentSubjTrap: { yo_el: "haga", ellos: "hagan", nosotros: "hagamos" },
    contextObj: "un archivo oral de testimonios migrantes",
  },
  {
    inf: "saber",
    ellosPret: "supieron",
    tier: 2,
    forms: {
      yo_el: ["supiera", "supiese"],
      ellos: ["supieran", "supiesen"],
      nosotros: ["supiéramos", "supiésemos"],
    },
    presentSubjTrap: { yo_el: "sepa", ellos: "sepan", nosotros: "sepamos" },
    contextObj: "las verdaderas causas de aquel éxodo",
  },
  {
    inf: "ser",
    ellosPret: "fueron",
    tier: 2,
    forms: {
      yo_el: ["fuera", "fuese"],
      ellos: ["fueran", "fuesen"],
      nosotros: ["fuéramos", "fuésemos"],
    },
    presentSubjTrap: { yo_el: "sea", ellos: "sean", nosotros: "seamos" },
    contextObj: "capaz de tender puentes entre ambas culturas",
  },
  // Tier 3: compound / j-stem / stem-changing preterites & nosotros focus
  {
    inf: "mantener",
    ellosPret: "mantuvieron",
    tier: 3,
    forms: {
      yo_el: ["mantuviera", "mantuviese"],
      ellos: ["mantuvieran", "mantuviesen"],
      nosotros: ["mantuviéramos", "mantuviésemos"],
    },
    presentSubjTrap: { yo_el: "mantenga", ellos: "mantengan", nosotros: "mantengamos" },
    contextObj: "intacto el acento de su tierra natal",
  },
  {
    inf: "decir",
    ellosPret: "dijeron",
    tier: 3,
    forms: {
      yo_el: ["dijera", "dijese"],
      ellos: ["dijeran", "dijesen"],
      nosotros: ["dijéramos", "dijésemos"],
    },
    presentSubjTrap: { yo_el: "diga", ellos: "digan", nosotros: "digamos" },
    contextObj: "toda la verdad sobre el sacrificio del viaje",
  },
  {
    inf: "sentir",
    ellosPret: "sintieron",
    tier: 3,
    forms: {
      yo_el: ["sintiera", "sintiese"],
      ellos: ["sintieran", "sintiesen"],
      nosotros: ["sintiéramos", "sintiésemos"],
    },
    presentSubjTrap: { yo_el: "sienta", ellos: "sientan", nosotros: "sintamos" },
    contextObj: "orgullo por su herencia bilingüe",
  },
  {
    inf: "querer",
    ellosPret: "quisieron",
    tier: 3,
    forms: {
      yo_el: ["quisiera", "quisiese"],
      ellos: ["quisieran", "quisiesen"],
      nosotros: ["quisiéramos", "quisiésemos"],
    },
    presentSubjTrap: { yo_el: "quiera", ellos: "quieran", nosotros: "queramos" },
    contextObj: "renunciar a sus tradiciones familiares",
  },
  {
    inf: "venir",
    ellosPret: "vinieron",
    tier: 3,
    forms: {
      yo_el: ["viniera", "viniese"],
      ellos: ["vinieran", "viniesen"],
      nosotros: ["viniéramos", "viniésemos"],
    },
    presentSubjTrap: { yo_el: "venga", ellos: "vengan", nosotros: "vengamos" },
    contextObj: "al reencuentro comunitario de noviembre",
  },
];

const HL_TRIGGERS = [
  { text: "Me sorprendió que", kind: "past emotion" },
  { text: "Me conmovió que", kind: "past emotion" },
  { text: "Dudaba que", kind: "past doubt" },
  { text: "Era imprescindible que", kind: "past impersonal evaluation" },
  { text: "Era injusto que", kind: "past impersonal evaluation" },
  { text: "Nadie imaginaba que", kind: "past negation/doubt" },
  { text: "Hablaba del pasado como si", kind: "contrary-to-fact *como si*" },
] as const;

const HL_SUBJECTS: Array<{ key: "yo_el" | "ellos" | "nosotros"; text: string; label: string }> = [
  { key: "yo_el", text: "mi abuela", label: "ella" },
  { key: "yo_el", text: "el narrador", label: "él" },
  { key: "ellos", text: "los inmigrantes", label: "ellos" },
  { key: "ellos", text: "las familias desplazadas", label: "ellas" },
  { key: "nosotros", text: "nosotros", label: "nosotros" },
];

const imperfectoSubjuntivoHl: Drill = {
  id: "2-experiencias.imperfecto-subjuntivo-hl",
  topicId: "2-experiencias",
  title: "[HL] Imperfecto de Subjuntivo in Past Reflection",
  level: 3,
  ibLevel: "HL",
  guideRef: "memoria-identidad-migratoria-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = HL_SUBJ_VERBS.filter((v) => v.tier === tier);
    const v = rng.pick(pool);
    const trigger = rng.pick(HL_TRIGGERS);
    const subj = tier === 3 && rng.bool(0.45) ? HL_SUBJECTS[4] : rng.pick(HL_SUBJECTS);
    const [raForm, seForm] = v.forms[subj.key];
    const presTrap = v.presentSubjTrap[subj.key];
    const traps: Trap[] = [
      {
        spec: { type: "text", accept: [presTrap] },
        feedback: `That's present subjunctive (*${presTrap}*). Because the trigger (*${trigger.text}*) is in the past or *como si*, shift to *imperfecto de subjuntivo*: **${raForm}** (or *${seForm}*).`,
      },
    ];
    const stem = v.ellosPret.slice(0, -3);
    return {
      prompt: `[HL] Complete with the exact *imperfecto de subjuntivo* of **${v.inf}** (${subj.label}):\n*«${trigger.text} ${subj.text} _____ ${v.contextObj}.»*`,
      answer: { type: "text", accept: [raForm, seForm], display: raForm },
      traps,
      hint: `Start from the *ellos* preterite (**${v.ellosPret}**), drop *-ron* → *${stem}-*, and add the *-ra / -se* ending${subj.key === "nosotros" ? " (don't forget the tilde on *nosotros*!)" : ""}.`,
      solution: [
        `Trigger (*${trigger.text}*) expresses ${trigger.kind} → requires *imperfecto de subjuntivo*.`,
        `Step 1: *ellos* preterite of **${v.inf}** = **${v.ellosPret}**.`,
        `Step 2: Drop *-ron* (*${stem}-*) + ${subj.label} ending → **${raForm}** (or **${seForm}**).`,
      ],
    };
  },
};

export const drills: Drill[] = [
  preteritoVsImperfecto,
  pluscuamperfectoSecuencia,
  lexicoTurismoMigracion,
  tradicionesRitosCultura,
  imperfectoSubjuntivoHl,
];
