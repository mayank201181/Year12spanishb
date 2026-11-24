import type { AnswerSpec, Trap } from "../types.ts";
import { checkAnswer } from "../answerCheck.ts";
import type { Drill, DrillItem, Rng } from "./types.ts";

/** Only register a trap if the real answer spec genuinely rejects it (avoids 1-edit typo overlap on >=8-char words). */
function addSafeTrap(traps: Trap[], realAnswer: AnswerSpec, accept: string[], feedback: string) {
  if (accept.length === 0) return;
  if (accept.some((a) => checkAnswer(realAnswer, a).status === "correct")) return;
  traps.push({ spec: { type: "text", accept }, feedback });
}

// ---------------------------------------------------------------------------
// Procedural Skill Drills for Theme 1: Identidades (IB Spanish B SL & HL)
// 5 drills covering all 4 sections; 200 seeds × 3 tiers guaranteed ≥ 25 prompts.
// ---------------------------------------------------------------------------

// ===========================================================================
// DRILL 1: Impersonal Subjunctive Triggers (Estilos de vida y salud)
// ===========================================================================
interface SubjVerbSpec {
  inf: string;
  meaning: string;
  subjNos: string;
  subjEllos: string;
  indNos: string;
  indEllos: string;
  ind3s: string;
  subj3s: string;
  note: string;
  objNos: string;
  objEllos: string;
  obj3s: string;
}

const REG_HEALTH_VERBS: readonly SubjVerbSpec[] = [
  {
    inf: "fomentar",
    meaning: "promote",
    subjNos: "fomentemos",
    subjEllos: "fomenten",
    indNos: "fomentamos",
    indEllos: "fomentan",
    ind3s: "fomenta",
    subj3s: "fomente",
    note: "Regular *-ar* verb: swap *-a-* to *-e-* in the present subjunctive.",
    objNos: "una alimentación equilibrada en casa",
    objEllos: "menús mediterráneos en los comedores",
    obj3s: "el bienestar emocional juvenil",
  },
  {
    inf: "limitar",
    meaning: "limit",
    subjNos: "limitemos",
    subjEllos: "limiten",
    indNos: "limitamos",
    indEllos: "limitan",
    ind3s: "limita",
    subj3s: "limite",
    note: "Regular *-ar* verb: swap *-a-* to *-e-* in the present subjunctive.",
    objNos: "el consumo de bebidas azucaradas",
    objEllos: "la publicidad de comida ultraprocesada",
    obj3s: "el uso nocturno de pantallas",
  },
  {
    inf: "evitar",
    meaning: "avoid",
    subjNos: "evitemos",
    subjEllos: "eviten",
    indNos: "evitamos",
    indEllos: "evitan",
    ind3s: "evita",
    subj3s: "evite",
    note: "Regular *-ar* verb: stem *evit-* + *-e-* subjunctive endings.",
    objNos: "el sedentarismo durante la semana de exámenes",
    objEllos: "los alimentos con exceso de sodio",
    obj3s: "el agotamiento crónico",
  },
  {
    inf: "priorizar",
    meaning: "prioritise",
    subjNos: "prioricemos",
    subjEllos: "prioricen",
    indNos: "priorizamos",
    indEllos: "priorizan",
    ind3s: "prioriza",
    subj3s: "priorice",
    note: "Spelling change (*-zar*): `z → c` before `e` (*prioricemos, prioricen*).",
    objNos: "el descanso nocturno de ocho horas",
    objEllos: "la prevención de la ansiedad académica",
    obj3s: "el equilibrio entre estudio y ocio",
  },
  {
    inf: "garantizar",
    meaning: "guarantee",
    subjNos: "garanticemos",
    subjEllos: "garanticen",
    indNos: "garantizamos",
    indEllos: "garantizan",
    ind3s: "garantiza",
    subj3s: "garantice",
    note: "Spelling change (*-zar*): `z → c` before `e` (*garanticemos, garanticen*).",
    objNos: "espacios seguros para hablar de salud mental",
    objEllos: "acceso gratuito a psicólogos escolares",
    obj3s: "un entorno escolar libre de estigmas",
  },
  {
    inf: "organizar",
    meaning: "organise",
    subjNos: "organicemos",
    subjEllos: "organicen",
    indNos: "organizamos",
    indEllos: "organizan",
    ind3s: "organiza",
    subj3s: "organice",
    note: "Spelling change (*-zar*): `z → c` before `e` (*organicemos, organicen*).",
    objNos: "actividades deportivas inclusivas cada fin de semana",
    objEllos: "jornadas comunitarias como la Ciclovía",
    obj3s: "talleres de cocina saludable",
  },
  {
    inf: "cuidar",
    meaning: "care for",
    subjNos: "cuidemos",
    subjEllos: "cuiden",
    indNos: "cuidamos",
    indEllos: "cuidan",
    ind3s: "cuida",
    subj3s: "cuide",
    note: "Regular *-ar* verb: stem *cuid-* + *-emos / -en*.",
    objNos: "nuestra salud psicológica tanto como la física",
    objEllos: "los hábitos de sueño de sus estudiantes",
    obj3s: "el vínculo social durante la sobremesa",
  },
  {
    inf: "proteger",
    meaning: "protect",
    subjNos: "protejamos",
    subjEllos: "protejan",
    indNos: "protegemos",
    indEllos: "protegen",
    ind3s: "protege",
    subj3s: "proteja",
    note: "Spelling change (*-ger*): `g → j` before `a` (*yo protejo → protejamos, protejan*).",
    objNos: "nuestra autoestima frente a los filtros digitales",
    objEllos: "a la infancia frente al marketing agresivo",
    obj3s: "la soberanía alimentaria local",
  },
  {
    inf: "equilibrar",
    meaning: "balance",
    subjNos: "equilibremos",
    subjEllos: "equilibren",
    indNos: "equilibramos",
    indEllos: "equilibran",
    ind3s: "equilibra",
    subj3s: "equilibre",
    note: "Regular *-ar* verb: stem *equilibr-* + *-e-* endings.",
    objNos: "la ambición académica con pausas reales",
    objEllos: "la carga de deberes con el tiempo en familia",
    obj3s: "la dieta diaria con legumbres y fruta",
  },
  {
    inf: "combater_guard",
    meaning: "combat",
    subjNos: "combatamos",
    subjEllos: "combatan",
    indNos: "combatimos",
    indEllos: "combaten",
    ind3s: "combate",
    subj3s: "combata",
    note: "Regular *-ir* verb (*combatir*): swap to *-a-* endings (*combatamos, combatan*).",
    objNos: "el estigma asociado a pedir ayuda psicológica",
    objEllos: "la obesidad infantil con sellos claros",
    obj3s: "la presión estética en las redes",
  },
].map((v) => (v.inf === "combater_guard" ? { ...v, inf: "combatir" } : v));

const IRREG_HEALTH_VERBS: readonly SubjVerbSpec[] = [
  {
    inf: "reducir",
    meaning: "reduce",
    subjNos: "reduzcamos",
    subjEllos: "reduzcan",
    indNos: "reducimos",
    indEllos: "reducen",
    ind3s: "reduce",
    subj3s: "reduzca",
    note: "*Yo reduzco* (`-cir` → `-zc-`) gives stem *reduzc-* across all present subjunctive persons.",
    objNos: "el exceso de azúcares añadidos en la dieta",
    objEllos: "el nivel de estrés académico en bachillerato",
    obj3s: "el sedentarismo urbano",
  },
  {
    inf: "ofrecer",
    meaning: "offer",
    subjNos: "ofrezcamos",
    subjEllos: "ofrezcan",
    indNos: "ofrecemos",
    indEllos: "ofrecen",
    ind3s: "ofrece",
    subj3s: "ofrezca",
    note: "*Yo ofrezco* (`-cer` → `-zc-`) gives stem *ofrezc-* in the present subjunctive.",
    objNos: "escucha activa a quienes atraviesan momentos difíciles",
    objEllos: "opciones nutritivas y asequibles en las cafeterías",
    obj3s: "apoyo psicológico gratuito las 24 horas",
  },
  {
    inf: "dormir",
    meaning: "sleep",
    subjNos: "durmamos",
    subjEllos: "duerman",
    indNos: "dormimos",
    indEllos: "duermen",
    ind3s: "duerme",
    subj3s: "duerma",
    note: "*-ir* stem-changer: *o → ue* in boot (*duerman*), and *o → u* in *nosotros* (*durmamos*)!",
    objNos: "al menos ocho horas antes de los exámenes",
    objEllos: "sin el teléfono encendido junto a la cama",
    obj3s: "lo suficiente cada noche",
  },
  {
    inf: "mantener",
    meaning: "maintain",
    subjNos: "mantengamos",
    subjEllos: "mantengan",
    indNos: "mantenemos",
    indEllos: "mantienen",
    ind3s: "mantiene",
    subj3s: "mantenga",
    note: "Built on *tener* (*yo mantengo* → stem *manteng-* + *-amos / -an*).",
    objNos: "horarios regulares de descanso y ejercicio",
    objEllos: "la costumbre familiar de la sobremesa",
    obj3s: "un diálogo abierto sobre el bienestar",
  },
  {
    inf: "establecer",
    meaning: "establish",
    subjNos: "establezcamos",
    subjEllos: "establezcan",
    indNos: "establecemos",
    indEllos: "establecen",
    ind3s: "establece",
    subj3s: "establezca",
    note: "*Yo establezco* (`-cer` → `-zc-`) gives stem *establezc-* + *-amos / -an*.",
    objNos: "límites saludables en el uso de redes sociales",
    objEllos: "etiquetados frontales claros en los supermercados",
    obj3s: "rutinas deportivas accesibles",
  },
  {
    inf: "pedir",
    meaning: "ask for",
    subjNos: "pidamos",
    subjEllos: "pidan",
    indNos: "pedimos",
    indEllos: "piden",
    ind3s: "pide",
    subj3s: "pida",
    note: "*-ir* stem-changer (`e → i`): keeps *-i-* in ALL persons, including *nosotros* (*pidamos*)!",
    objNos: "ayuda profesional sin vergüenza cuando sea necesario",
    objEllos: "orientación a los coordinadores de bienestar",
    obj3s: "apoyo emocional a tiempo",
  },
  {
    inf: "hacer",
    meaning: "do / make",
    subjNos: "hagamos",
    subjEllos: "hagan",
    indNos: "hacemos",
    indEllos: "hacen",
    ind3s: "hace",
    subj3s: "haga",
    note: "*Yo hago* → stem *hag-* + *-amos / -an*.",
    objNos: "pausas activas durante las sesiones largas de estudio",
    objEllos: "deporte comunitario al aire libre",
    obj3s: "ejercicio moderado todos los días",
  },
  {
    inf: "poder",
    meaning: "be able to",
    subjNos: "podamos",
    subjEllos: "puedan",
    indNos: "podemos",
    indEllos: "pueden",
    ind3s: "puede",
    subj3s: "pueda",
    note: "*-er* boot stem-changer: *o → ue* in boot (*puedan*), NO change in *nosotros* (*podamos*)!",
    objNos: "desconectar del móvil sin sentir culpa",
    objEllos: "acceder a pistas deportivas gratuitas",
    obj3s: "conciliar estudios y vida personal",
  },
  {
    inf: "sentir",
    meaning: "feel",
    subjNos: "sintamos",
    subjEllos: "sientan",
    indNos: "sentimos",
    indEllos: "sienten",
    ind3s: "siente",
    subj3s: "sienta",
    note: "*-ir* stem-changer: *e → ie* in boot (*sientan*), and *e → i* in *nosotros* (*sintamos*)!",
    objNos: "respaldo real dentro de la comunidad escolar",
    objEllos: "confianza al hablar de sus emociones",
    obj3s: "seguridad al expresar sus preocupaciones",
  },
  {
    inf: "construir",
    meaning: "build",
    subjNos: "construyamos",
    subjEllos: "construyan",
    indNos: "construimos",
    indEllos: "construyen",
    ind3s: "construye",
    subj3s: "construya",
    note: "*-uir* verbs insert *-y-* in *yo* (*construyo* → *construyamos, construyan*).",
    objNos: "hábitos sostenibles para toda la vida",
    objEllos: "carriles bici seguros en cada barrio",
    obj3s: "una cultura escolar más empática",
  },
];

const IMPERSONAL_SUBJ_TRIGGERS = [
  "Es imprescindible que",
  "Conviene que",
  "Urge que",
  "Resulta fundamental que",
  "Es aconsejable que",
] as const;

const SUBJ_PLURAL_SUBJECTS = [
  "los centros educativos",
  "las autoridades sanitarias",
  "los adolescentes",
  "los gobiernos hispanohablantes",
  "las familias modernas",
] as const;

const CERTAINTY_TRIGGERS = [
  { phrase: "Es innegable que", needsSubj: false, why: "*Es innegable que* expresses 100% affirmative certainty → **indicative**." },
  { phrase: "Es evidente que", needsSubj: false, why: "*Es evidente que* states an affirmative fact → **indicative**." },
  { phrase: "Es obvio que", needsSubj: false, why: "*Es obvio que* states affirmative certainty → **indicative**." },
  { phrase: "Está claro que", needsSubj: false, why: "*Está claro que* affirms certainty → **indicative**." },
  { phrase: "No es cierto que", needsSubj: true, why: "*No es cierto que* negates certainty → **present subjunctive**." },
  { phrase: "No es evidente que", needsSubj: true, why: "*No es evidente que* introduces doubt → **present subjunctive**." },
  { phrase: "Es lamentable que", needsSubj: true, why: "*Es lamentable que* is an emotional value judgment → **present subjunctive**." },
  { phrase: "Urge que", needsSubj: true, why: "*Urge que* expresses necessity/urgency → **present subjunctive**." },
] as const;

const CERTAINTY_SUBJECTS_3S = [
  "el sedentarismo prolongado",
  "la dieta mediterránea",
  "la falta crónica de sueño",
  "el etiquetado frontal claro",
  "la cultura de la sobremesa",
  "el apoyo psicológico temprano",
] as const;

const impersonalSubjuntivoDrill: Drill = {
  id: "1-identidades.impersonal-subjuntivo",
  topicId: "1-identidades",
  title: "Impersonal Subjunctive Triggers (Health & Well-being)",
  level: 1,
  ibLevel: "SL",
  guideRef: "estilos-vida-salud",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const traps: Trap[] = [];
    if (tier === 1) {
      const trigger = rng.pick(IMPERSONAL_SUBJ_TRIGGERS);
      const verb = rng.pick(REG_HEALTH_VERBS);
      const useNos = rng.bool(0.5);
      const subjLabel = useNos ? "nosotros" : rng.pick(SUBJ_PLURAL_SUBJECTS);
      const ans = useNos ? verb.subjNos : verb.subjEllos;
      const indWrong = useNos ? verb.indNos : verb.indEllos;
      const obj = useNos ? verb.objNos : verb.objEllos;
      const ansSpec: AnswerSpec = { type: "text", accept: [ans], display: ans };
      addSafeTrap(traps, ansSpec, [indWrong], `*${indWrong}* is present indicative; *${trigger}* requires the **present subjunctive**.`);
      addSafeTrap(traps, ansSpec, [verb.inf], `Because *que* + a specific subject follows, you must conjugate *${verb.inf}* in the subjunctive rather than using the infinitive.`);
      return {
        prompt: `Conjugate **${verb.inf}** (*${useNos ? "nosotros" : "ellos/ellas"}*, present subjunctive) to complete this healthy-living sentence:\n\n*«${trigger} ${subjLabel} _____ ${obj}.»*`,
        answer: ansSpec,
        hint: `*${trigger}* is an impersonal necessity/advice trigger → switch mood to present subjunctive.`,
        traps,
        solution: [
          `*${trigger}* + specific subject triggers the **present subjunctive**.`,
          `${verb.note} Answer: **${ans}**.`,
        ],
      };
    }

    if (tier === 2) {
      const trigger = rng.pick(IMPERSONAL_SUBJ_TRIGGERS);
      const verb = rng.pick(IRREG_HEALTH_VERBS);
      const useNos = rng.bool(0.5);
      const subjLabel = useNos ? "todos nosotros" : rng.pick(SUBJ_PLURAL_SUBJECTS);
      const ans = useNos ? verb.subjNos : verb.subjEllos;
      const indWrong = useNos ? verb.indNos : verb.indEllos;
      const obj = useNos ? verb.objNos : verb.objEllos;
      const ansSpec: AnswerSpec = { type: "text", accept: [ans], display: ans };
      addSafeTrap(traps, ansSpec, [indWrong], `*${indWrong}* is indicative! Apply the *yo*-stem rule for the present subjunctive.`);
      addSafeTrap(traps, ansSpec, [verb.inf], "Never place an infinitive directly after `que` + subject.");
      return {
        prompt: `Complete with the exact irregular/stem-changing present subjunctive of **${verb.inf}** (*${useNos ? "nosotros" : "3rd person plural"}*):\n\n*«${trigger} ${subjLabel} _____ ${obj}.»*`,
        answer: ansSpec,
        hint: `Derive the subjunctive from the *yo* present indicative of *${verb.inf}* (and check *-ir* *nosotros* shifts!).`,
        traps,
        solution: [
          `*${trigger}* triggers the **present subjunctive**.`,
          `${verb.note} Answer: **${ans}**.`,
        ],
      };
    }

    // Tier 3: Certainty vs Doubt/Value mood gate (3rd person singular or plural)
    const gate = rng.pick(CERTAINTY_TRIGGERS);
    const allVerbs = [...REG_HEALTH_VERBS, ...IRREG_HEALTH_VERBS];
    const verb = rng.pick(allVerbs);
    const usePlural = rng.bool(0.45);
    const subject = usePlural ? rng.pick(SUBJ_PLURAL_SUBJECTS) : rng.pick(CERTAINTY_SUBJECTS_3S);
    const obj = usePlural ? verb.objEllos : verb.obj3s;
    const ans = gate.needsSubj ? (usePlural ? verb.subjEllos : verb.subj3s) : (usePlural ? verb.indEllos : verb.ind3s);
    const wrongMood = gate.needsSubj ? (usePlural ? verb.indEllos : verb.ind3s) : (usePlural ? verb.subjEllos : verb.subj3s);
    const ansSpec: AnswerSpec = { type: "text", accept: [ans], display: ans };
    addSafeTrap(traps, ansSpec, [wrongMood], `Check the mood gate! ${gate.why}`);
    addSafeTrap(traps, ansSpec, [verb.inf], "A conjugated verb is required after `que` + a specific subject.");
    return {
      prompt: `Choose **indicative or present subjunctive** for **${verb.inf}** (${usePlural ? "3rd person plural" : "3rd person singular"}) in this Theme 1 debate sentence:\n\n*«${gate.phrase} ${subject} _____ ${obj}.»*`,
      answer: ansSpec,
      hint: `Decide first: does *«${gate.phrase}»* express affirmative certainty (indicative) or doubt/value/urgency (subjunctive)?`,
      traps,
      solution: [
        gate.why,
        `${verb.note} Correct form: **${ans}**.`,
      ],
    };
  },
};

// ===========================================================================
// DRILL 2: Health, Diet & Mental Well-being Precision Lexis
// ===========================================================================
interface LexItem {
  answer: string;
  accept: string[];
  clue: string;
  trap?: string;
  trapMsg?: string;
  note: string;
}

const HEALTH_LEX_T1: readonly LexItem[] = [
  { answer: "la sobremesa", accept: ["la sobremesa", "sobremesa"], clue: "the unhurried post-meal conversation around the table (with article)", trap: "la siesta", trapMsg: "*La siesta* is an afternoon nap; the table conversation is *la sobremesa*.", note: "*La sobremesa* links food and emotional community well-being." },
  { answer: "el sedentarismo", accept: ["el sedentarismo", "sedentarismo"], clue: "a sedentary, physically inactive lifestyle (noun with article)", note: "High-frequency Theme 1 noun for Paper 1 health prompts." },
  { answer: "el bienestar", accept: ["el bienestar", "bienestar"], clue: "holistic physical and emotional well-being (noun with article)", note: "Upgrades basic *estar bien* into a crisp B2–C1 noun." },
  { answer: "apoyar", accept: ["apoyar", "respaldar"], clue: "verb meaning 'to support' emotionally (avoid the false friend *soportar*!)", trap: "soportar", trapMsg: "*Soportar* means 'to endure / tolerate', not 'to support'.", note: "Use *apoyar* or formal *respaldar* for 'support'." },
  { answer: "sensato", accept: ["sensato", "sensata"], clue: "adjective meaning 'sensible / level-headed' (avoid *sensible*!)", trap: "sensible", trapMsg: "*Sensible* is a false friend meaning 'sensitive'.", note: "*Sensato* = sensible; *sensible* = sensitive." },
  { answer: "la ansiedad", accept: ["la ansiedad", "ansiedad"], clue: "anxiety (feminine noun with article)", note: "Pairs naturally with *académica* or *cotidiana*." },
  { answer: "el estigma", accept: ["el estigma", "estigma"], clue: "social stigma surrounding mental health (masculine noun ending in `-a`, with article!)", trap: "la estigma", trapMsg: "Careful with gender: Greek-origin *-ma* nouns like *el estigma, el problema, el tema* are **masculine**!", note: "*Romper el estigma* is a classic Theme 1 collocation." },
  { answer: "el descanso", accept: ["el descanso", "descanso"], clue: "rest / restorative sleep (noun with article)", note: "*Priorizar el descanso nocturno* upgrades *dormir más*." },
  { answer: "equilibrado", accept: ["equilibrado", "equilibrada"], clue: "adjective meaning 'balanced' (as in *un estilo de vida _____*)", note: "*Una dieta equilibrada* / *un estilo de vida equilibrado*." },
  { answer: "la autoestima", accept: ["la autoestima", "autoestima"], clue: "self-esteem (feminine noun with article)", note: "Frequently paired with *fortalecer* or *menoscabar*." },
];

const HEALTH_LEX_T2: readonly LexItem[] = [
  { answer: "sellos de advertencia", accept: ["sellos de advertencia", "los sellos de advertencia"], clue: "Chile and Mexico's mandatory black octagonal nutrition warning labels (3 words)", note: "*Los sellos de advertencia* flag excess sugar, sodium, and saturated fats." },
  { answer: "alimentos ultraprocesados", accept: ["alimentos ultraprocesados", "los alimentos ultraprocesados"], clue: "B2–C1 Spanish upgrade for IGCSE *comida basura* ('ultraprocessed foods', 2 words)", trap: "comida basura", trapMsg: "*Comida basura* is informal IGCSE phrasing; use the precise B2–C1 term.", note: "*Alimentos ultraprocesados* elevates nutrition essays immediately." },
  { answer: "la presión estética", accept: ["la presión estética", "presión estética"], clue: "appearance/body-image pressure amplified by social media filters (include accents)", note: "Notice both accents: *presión* and *estética*." },
  { answer: "el agotamiento crónico", accept: ["el agotamiento crónico", "agotamiento crónico"], clue: "chronic burnout / exhaustion (masculine phrase, include accent)", note: "Upgrades IGCSE *estar muy cansado* to Band 10–12." },
  { answer: "la soberanía alimentaria", accept: ["la soberanía alimentaria", "soberanía alimentaria"], clue: "food sovereignty — protecting ancestral crops like maize and quinoa (include accent)", note: "Key Theme 1/5 bridge linking nutrition and local identity." },
  { answer: "el ciberacoso", accept: ["el ciberacoso", "ciberacoso"], clue: "cyberbullying — FundéuRAE's single Spanish noun (with article)", trap: "el cyberbullying", trapMsg: "Avoid unadapted English *cyberbullying* in formal IB Spanish; use the Spanish noun.", note: "Native Spanish equivalent of cyberbullying." },
  { answer: "el equilibrio emocional", accept: ["el equilibrio emocional", "equilibrio emocional"], clue: "emotional balance (2 words + article)", note: "*Salvaguardar el equilibrio emocional* is a Band 11 collocation." },
  { answer: "la salud mental", accept: ["la salud mental", "salud mental"], clue: "mental health (2 words + article)", note: "Notice *salud* has NO written accent." },
  { answer: "la dieta mediterránea", accept: ["la dieta mediterránea", "dieta mediterránea"], clue: "the Mediterranean diet (include exact tilde on *á*)", note: "Built on olive oil, legumes, seasonal produce, and *la sobremesa*." },
  { answer: "el deporte inclusivo", accept: ["el deporte inclusivo", "deporte inclusivo"], clue: "inclusive sport accessible to all ages and backgrounds (2 words + article)", note: "Exemplified by Bogotá's Sunday *Ciclovía*." },
];

const HEALTH_VERBS_T3: readonly LexItem[] = [
  { answer: "mitigar", accept: ["mitigar"], clue: "B2–C1 infinitive meaning 'to mitigate / alleviate' anxiety or stress", note: "*Contribuir a mitigar la ansiedad cotidiana*." },
  { answer: "salvaguardar", accept: ["salvaguardar"], clue: "C1 infinitive meaning 'to safeguard / protect' emotional well-being", note: "Upgrades basic *cuidar* in formal proposals." },
  { answer: "visibilizar", accept: ["visibilizar"], clue: "B2–C1 infinitive meaning 'to make visible / bring into public view' mental distress", note: "Used widely in Hispanic press about breaking mental-health taboos." },
  { answer: "respaldar", accept: ["respaldar"], clue: "formal infinitive meaning 'to back / support' youth well-being schemes", trap: "soportar", trapMsg: "*Soportar* means 'to tolerate/put up with', not 'to back/support'.", note: "Strong formal alternative to *apoyar*." },
  { answer: "erradicar", accept: ["erradicar"], clue: "C1 infinitive meaning 'to eradicate / stamp out' social stigma", note: "*Erradicar el estigma* outperforms *quitar el problema*." },
  { answer: "priorizar", accept: ["priorizar"], clue: "B2–C1 infinitive meaning 'to prioritise' sleep and mental rest", note: "Watch spelling change `z → c` in subjunctive (*prioricemos*)." },
  { answer: "combatir", accept: ["combatir"], clue: "B2–C1 infinitive meaning 'to combat / tackle' childhood obesity or sedentarism", note: "Strong action verb for Paper 1 *artículos* and *informes*." },
  { answer: "desconectar", accept: ["desconectar"], clue: "infinitive meaning 'to unplug / disconnect' from screens before bed", note: "*Desconectar de las pantallas*." },
  { answer: "fomentar", accept: ["fomentar"], clue: "B2–C1 infinitive meaning 'to foster / promote' healthy habits", note: "Essential upgrade over basic *hacer* or *ayudar*." },
  { answer: "normalizar", accept: ["normalizar"], clue: "infinitive meaning 'to normalise' seeking therapy and talking about emotions", note: "*Normalizar la terapia psicológica*." },
];

const HEALTH_CONTEXT_FRAMES = [
  "You are drafting an IB Paper 1 *artículo* for a newspaper in **Madrid**.",
  "You are preparing your **Individual Oral** link to public health in **Ciudad de México**.",
  "You are writing a school **blog educativo** for Year 12 students in **Bogotá**.",
  "You are editing a formal **informe** on youth lifestyles in **Santiago de Chile**.",
  "You are rehearsing a **discurso** for Well-being Week in **Buenos Aires**.",
] as const;

const lexicoSaludDrill: Drill = {
  id: "1-identidades.lexico-salud-bienestar",
  topicId: "1-identidades",
  title: "Health & Well-being Precision Lexis (B2–C1)",
  level: 1,
  ibLevel: "SL",
  guideRef: "estilos-vida-salud",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const frame = rng.pick(HEALTH_CONTEXT_FRAMES);
    const pool = tier === 1 ? HEALTH_LEX_T1 : tier === 2 ? HEALTH_LEX_T2 : HEALTH_VERBS_T3;
    const item = rng.pick(pool);
    const traps: Trap[] = [];
    if (item.trap && item.trapMsg) {
      traps.push({ spec: { type: "text", accept: [item.trap] }, feedback: item.trapMsg });
    }
    return {
      prompt: `${frame}\n\nProvide the exact Spanish term for **${item.clue}** (use accurate Spanish accents):`,
      answer: { type: "text", accept: item.accept, display: item.answer },
      hint: `Check Spanish spelling, article gender (if requested), and written accents (*á é í ó ú ñ*).`,
      traps,
      solution: [
        `Target B2–C1 Spanish expression: **${item.answer}**.`,
        item.note,
      ],
    };
  },
};

// ===========================================================================
// DRILL 3: Beliefs, Subcultures & Nuance Moods (Aunque / Creer / Lejos de)
// ===========================================================================
interface BeliefVerb {
  inf: string;
  ind3s: string;
  subj3s: string;
  ind3p: string;
  subj3p: string;
  note: string;
  clauseS: string;
  clauseP: string;
}

const BELIEF_VERBS: readonly BeliefVerb[] = [
  { inf: "destruir", ind3s: "destruye", subj3s: "destruya", ind3p: "destruyen", subj3p: "destruyan", note: "*-uir* keeps *-y-* (*destruyo → destruya / destruyan*).", clauseS: "la cohesión comunitaria", clauseP: "los valores familiares heredados" },
  { inf: "reflejar", ind3s: "refleja", subj3s: "refleje", ind3p: "reflejan", subj3p: "reflejen", note: "Regular *-ar* verb: *-e / -en* in present subjunctive.", clauseS: "el sincretismo cultural de la región", clauseP: "las inquietudes de la nueva generación" },
  { inf: "fortalecer", ind3s: "fortalece", subj3s: "fortalezca", ind3p: "fortalecen", subj3p: "fortalezcan", note: "*-cer* → *-zc-* (*yo fortalezco → fortalezca / fortalezcan*).", clauseS: "el sentido de pertenencia juvenil", clauseP: "los lazos intergeneracionales" },
  { inf: "conservar", ind3s: "conserva", subj3s: "conserve", ind3p: "conservan", subj3p: "conserven", note: "Regular *-ar* verb: *-e / -en* in present subjunctive.", clauseS: "el patrimonio inmaterial del barrio", clauseP: "las fiestas patronales y rituales locales" },
  { inf: "influir", ind3s: "influye", subj3s: "influya", ind3p: "influyen", subj3p: "influyan", note: "*-uir* keeps *-y-* (*yo influyo → influya / influyan*).", clauseS: "en la identidad estética adolescente", clauseP: "en las decisiones éticas de consumo" },
  { inf: "compartir", ind3s: "comparte", subj3s: "comparta", ind3p: "comparten", subj3p: "compartan", note: "Regular *-ir* verb: *-a / -an* in present subjunctive.", clauseS: "la misma fe religiosa que sus abuelos", clauseP: "las mismas opiniones políticas en casa" },
  { inf: "enriquecer", ind3s: "enriquece", subj3s: "enriquezca", ind3p: "enriquecen", subj3p: "enriquezcan", note: "*-cer* → *-zc-* (*yo enriquezco → enriquezca / enriquezcan*).", clauseS: "la vida artística de la ciudad", clauseP: "el diálogo entre tradición y modernidad" },
  { inf: "rechazar", ind3s: "rechaza", subj3s: "rechace", ind3p: "rechazan", subj3p: "rechacen", note: "*-zar* spelling change: `z → c` before `e` (*rechace / rechacen*).", clauseS: "la moda rápida por motivos éticos", clauseP: "los estereotipos generacionales" },
  { inf: "valorar", ind3s: "valora", subj3s: "valore", ind3p: "valoran", subj3p: "valoren", note: "Regular *-ar* verb: *-e / -en* in present subjunctive.", clauseS: "el simbolismo del Día de los Muertos", clauseP: "la solidaridad de la familia extensa" },
  { inf: "crecer", ind3s: "crece", subj3s: "crezca", ind3p: "crecen", subj3p: "crezcan", note: "*-cer* → *-zc-* (*yo crezco → crezca / crezcan*).", clauseS: "el laicismo en las zonas urbanas", clauseP: "las subculturas ligadas a la música urbana" },
];

const BELIEF_SUBJ_S = ["el laicismo moderno", "la moda sostenible", "el sincretismo andino", "un joven secular", "la música urbana"] as const;
const BELIEF_SUBJ_P = ["las tribus urbanas", "las familias diversas", "las nuevas generaciones", "los jóvenes hispanos", "las subculturas digitales"] as const;

const OPINION_TRIGGERS = [
  { text: "Creo que", subj: false },
  { text: "Considero que", subj: false },
  { text: "Opino que", subj: false },
  { text: "No creo que", subj: true },
  { text: "No pienso que", subj: true },
  { text: "Dudo que", subj: true },
] as const;

const creenciasConectoresDrill: Drill = {
  id: "1-identidades.creencias-conectores",
  topicId: "1-identidades",
  title: "Beliefs & Subcultures: Opinion Polarity, Aunque & Nuance",
  level: 2,
  ibLevel: "SL",
  guideRef: "creencias-valores-subculturas",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const traps: Trap[] = [];
    const verb = rng.pick(BELIEF_VERBS);
    const plural = rng.bool(0.5);
    const subject = plural ? rng.pick(BELIEF_SUBJ_P) : rng.pick(BELIEF_SUBJ_S);
    const clause = plural ? verb.clauseP : verb.clauseS;

    if (tier === 1) {
      const op = rng.pick(OPINION_TRIGGERS);
      const ans = op.subj ? (plural ? verb.subj3p : verb.subj3s) : (plural ? verb.ind3p : verb.ind3s);
      const wrong = op.subj ? (plural ? verb.ind3p : verb.ind3s) : (plural ? verb.subj3p : verb.subj3s);
      const ansSpec: AnswerSpec = { type: "text", accept: [ans], display: ans };
      addSafeTrap(
        traps,
        ansSpec,
        [wrong],
        op.subj
          ? `*${op.text}* expresses denial/doubt and MUST take the **subjunctive** (*${ans}*).`
          : `Affirmative *${op.text}* states a belief as fact and keeps the **indicative** (*${ans}*).`,
      );
      addSafeTrap(traps, ansSpec, [verb.inf], "Conjugate the verb after `que` + subject instead of leaving it in the infinitive.");
      return {
        prompt: `Conjugate **${verb.inf}** (${plural ? "3rd person plural" : "3rd person singular"}) in the correct mood:\n\n*«${op.text} ${subject} _____ ${clause}.»*`,
        answer: ansSpec,
        hint: `Affirmative *creer/considerar/opinar que* → indicative; negated *no creo que* or *dudo que* → subjunctive.`,
        traps,
        solution: [
          op.subj ? `*${op.text}* triggers the **present subjunctive**.` : `*${op.text}* affirms opinion → **present indicative**.`,
          `${verb.note} Answer: **${ans}**.`,
        ],
      };
    }

    if (tier === 2) {
      const hypothetical = rng.bool(0.5);
      const ans = hypothetical ? (plural ? verb.subj3p : verb.subj3s) : (plural ? verb.ind3p : verb.ind3s);
      const wrong = hypothetical ? (plural ? verb.ind3p : verb.ind3s) : (plural ? verb.subj3p : verb.subj3s);
      const label = hypothetical ? "[hypothetical concession — 'even if']" : "[known verified fact — 'although in reality']";
      const followup = rng.pick([
        "el diálogo abierto fortalece el respeto mutuo",
        "la identidad cultural continúa transformándose",
        "las celebraciones comunitarias siguen vigentes",
      ]);
      const ansSpec: AnswerSpec = { type: "text", accept: [ans], display: ans };
      addSafeTrap(
        traps,
        ansSpec,
        [wrong],
        hypothetical
          ? "For a hypothetical 'even if' concession, *aunque* requires the **subjunctive**!"
          : "When conceding a known real fact, *aunque* takes the **indicative**!",
      );
      addSafeTrap(traps, ansSpec, [verb.inf], "Conjugate the verb inside the *aunque* clause instead of using the infinitive.");
      return {
        prompt: `Complete this **aunque** clause ${label} using **${verb.inf}** (${plural ? "3rd person plural" : "3rd person singular"}):\n\n*«Aunque ${subject} _____ ${clause}, ${followup}.»*`,
        answer: ansSpec,
        hint: `Known real fact after *aunque* → indicative; hypothetical 'even if' → subjunctive.`,
        traps,
        solution: [
          hypothetical ? "Hypothetical concession ('even if') after *aunque* → **present subjunctive**." : "Known observable fact after *aunque* → **present indicative**.",
          `${verb.note} Answer: **${ans}**.`,
        ],
      };
    }

    // Tier 3: Lejos de + infinitivo vs Con el fin de que / A menos que + subjuntivo
    const mode = rng.pick(["lejos", "fin", "amenos"] as const);
    if (mode === "lejos") {
      const followup = rng.pick([
        "las subculturas juveniles crean comunidad",
        "el bilingüismo enriquece la memoria colectiva",
        "los diseños indígenas revitalizan el orgullo local",
        "la diversidad familiar aporta empatía social",
      ]);
      const gerundTrap = verb.inf.endsWith("ar")
        ? verb.inf.slice(0, -2) + "ando"
        : verb.inf.endsWith("uir")
          ? verb.inf.slice(0, -2) + "yendo"
          : verb.inf.slice(0, -2) + "iendo";
      traps.push(
        { spec: { type: "text", accept: [gerundTrap] }, feedback: "English uses '-ing' after 'far from', but Spanish ALWAYS uses the **infinitive** directly after a preposition (*lejos de + infinitivo*)." },
        { spec: { type: "text", accept: [verb.subj3s, verb.ind3s] }, feedback: "Without `que`, *lejos de* takes the plain **infinitive**." },
      );
      return {
        prompt: `Complete this C1 stereotype-refuting opener with the exact form of **${verb.inf}**:\n\n*«Lejos de _____ ${clause}, ${followup}.»*`,
        answer: { type: "text", accept: [verb.inf], display: verb.inf },
        hint: "What verb form ALWAYS follows Spanish prepositions (*de, sin, antes de, lejos de*)?",
        traps,
        solution: [
          "Spanish prepositions (`lejos de`) ALWAYS govern the **infinitive** (never a gerund!).",
          `Answer: **${verb.inf}**.`,
        ],
      };
    }

    const escConj = mode === "fin" ? "con el fin de que" : "a menos que";
    const lead = mode === "fin"
      ? rng.pick([
          "Los centros culturales organizan talleres intergeneracionales",
          "Los artesanos de Oaxaca lanzan campañas digitales",
          "Las escuelas promueven proyectos comunitarios",
        ])
      : rng.pick([
          "Los estereotipos culturales persistirán",
          "La brecha generacional se ampliará",
          "Se perderá el valor comunitario de las fiestas",
        ]);
    const ans = plural ? verb.subj3p : verb.subj3s;
    const indWrong = plural ? verb.ind3p : verb.ind3s;
    const ansSpec: AnswerSpec = { type: "text", accept: [ans], display: ans };
    addSafeTrap(traps, ansSpec, [indWrong], `*${escConj}* belongs to ESCAPA (always subjunctive!) — never indicative.`);
    addSafeTrap(traps, ansSpec, [verb.inf], `After *${escConj}* + subject, conjugate *${verb.inf}* in the present subjunctive.`);
    return {
      prompt: `Complete this ESCAPA adverbial clause with **${verb.inf}** (${plural ? "3rd person plural" : "3rd person singular"}):\n\n*«${lead} ${escConj} ${subject} _____ ${clause}.»*`,
      answer: ansSpec,
      hint: `ESCAPA conjunctions (*para que / con el fin de que / a menos que*) ALWAYS trigger the subjunctive.`,
      traps,
      solution: [
        `*${escConj}* ALWAYS requires the **present subjunctive**.`,
        `${verb.note} Answer: **${ans}**.`,
      ],
    };
  },
};

// ===========================================================================
// DRILL 4: Hispanophone Linguistic Varieties (Voseo, Lexis & Languages)
// ===========================================================================
interface VoseoVerb {
  inf: string;
  tuPres: string;
  vosPres: string;
  wrongDiphthong?: string;
  tuImp: string;
  vosImp: string;
  ctxPres: string;
  ctxImp: string;
}

const VOSEO_VERBS: readonly VoseoVerb[] = [
  { inf: "hablar", tuPres: "hablas", vosPres: "hablás", tuImp: "habla", vosImp: "hablá", ctxPres: "con tu familia sobre salud mental", ctxImp: "con sinceridad sobre tus emociones" },
  { inf: "tener", tuPres: "tienes", vosPres: "tenés", wrongDiphthong: "tienés", tuImp: "ten", vosImp: "tené", ctxPres: "que descansar más antes del examen", ctxImp: "paciencia con tus abuelos" },
  { inf: "poder", tuPres: "puedes", vosPres: "podés", wrongDiphthong: "puedés", tuImp: "puede", vosImp: "podé", ctxPres: "venir en colectivo el domingo", ctxImp: "elegir tu propio camino" },
  { inf: "querer", tuPres: "quieres", vosPres: "querés", wrongDiphthong: "quierés", tuImp: "quiere", vosImp: "queré", ctxPres: "tomar mate durante la sobremesa", ctxImp: "respetar tus raíces" },
  { inf: "volver", tuPres: "vuelves", vosPres: "volvés", wrongDiphthong: "vuelvés", tuImp: "vuelve", vosImp: "volvé", ctxPres: "temprano a casa después del partido", ctxImp: "pronto al barrio" },
  { inf: "pensar", tuPres: "piensas", vosPres: "pensás", wrongDiphthong: "piensás", tuImp: "piensa", vosImp: "pensá", ctxPres: "que el bilingüismo enriquece la identidad", ctxImp: "bien antes de responder" },
  { inf: "vivir", tuPres: "vives", vosPres: "vivís", tuImp: "vive", vosImp: "viví", ctxPres: "en Buenos Aires o en Montevideo", ctxImp: "sin tanta presión estética" },
  { inf: "venir", tuPres: "vienes", vosPres: "venís", wrongDiphthong: "vienís", tuImp: "ven", vosImp: "vení", ctxPres: "a la Ciclovía con nosotros", ctxImp: "rápido que ya pasa el colectivo" },
  { inf: "salir", tuPres: "sales", vosPres: "salís", tuImp: "sal", vosImp: "salí", ctxPres: "a correr cada mañana", ctxImp: "a caminar un rato sin el celular" },
  { inf: "decir", tuPres: "dices", vosPres: "decís", tuImp: "di", vosImp: "decí", ctxPres: "la verdad sobre el estrés escolar", ctxImp: "siempre lo que pensás" },
  { inf: "hacer", tuPres: "haces", vosPres: "hacés", tuImp: "haz", vosImp: "hacé", ctxPres: "deporte para desconectar", ctxImp: "pausas breves mientras estudiás" },
  { inf: "ser", tuPres: "eres", vosPres: "sos", tuImp: "sé", vosImp: "sé", ctxPres: "de Córdoba o de Rosario", ctxImp: "fiel a tus valores" },
  { inf: "ir", tuPres: "vas", vosPres: "vas", tuImp: "ve", vosImp: "andá", ctxPres: "en auto o en colectivo al trabajo", ctxImp: "tranquilo a la entrevista" },
];

const VOSEO_PRES_POOL = VOSEO_VERBS.filter((v) => v.inf !== "ir");
const VOSEO_IMP_POOL = VOSEO_VERBS.filter((v) => v.inf !== "poder" && v.inf !== "querer" && v.inf !== "ser");

const VOSEO_CITIES = ["Buenos Aires", "Montevideo", "Rosario", "Córdoba", "Mendoza"] as const;

interface RegionalLexSpec {
  concept: string;
  region: string;
  answer: string;
  accept: string[];
  otherRegionTrap: string;
  otherRegionName: string;
  note: string;
}

const REGIONAL_LEX_POOL: readonly RegionalLexSpec[] = [
  { concept: "city bus", region: "México", answer: "el camión", accept: ["el camión", "camión"], otherRegionTrap: "el colectivo", otherRegionName: "Argentina", note: "In Mexico, *el camión* means city bus (whereas it means 'truck' in Spain)." },
  { concept: "city bus", region: "Argentina / Uruguay", answer: "el colectivo", accept: ["el colectivo", "colectivo"], otherRegionTrap: "el camión", otherRegionName: "México", note: "*Tomarse el colectivo* is standard Rioplatense Spanish." },
  { concept: "city bus", region: "Canarias y Caribe (Cuba / Puerto Rico)", answer: "la guagua", accept: ["la guagua", "guagua"], otherRegionTrap: "el autobús", otherRegionName: "España peninsular", note: "*La guagua* is iconic across the Canary Islands and the Hispanic Caribbean." },
  { concept: "car", region: "España", answer: "el coche", accept: ["el coche", "coche"], otherRegionTrap: "el auto", otherRegionName: "Argentina / Chile", note: "*El coche* (Spain), *el carro* (Mexico/Colombia), *el auto* (Argentina/Peru/Chile)." },
  { concept: "car", region: "Argentina / Chile / Perú", answer: "el auto", accept: ["el auto", "auto"], otherRegionTrap: "el coche", otherRegionName: "España", note: "*El auto* is standard across the Southern Cone and Andes." },
  { concept: "computer", region: "España", answer: "el ordenador", accept: ["el ordenador", "ordenador"], otherRegionTrap: "la computadora", otherRegionName: "Latinoamérica", note: "Spain uses *el ordenador*; Latin America uses *la computadora*." },
  { concept: "computer", region: "Latinoamérica", answer: "la computadora", accept: ["la computadora", "computadora"], otherRegionTrap: "el ordenador", otherRegionName: "España", note: "Universal across Mexico, Colombia, Argentina, and Peru." },
  { concept: "mobile phone", region: "España", answer: "el móvil", accept: ["el móvil", "móvil"], otherRegionTrap: "el celular", otherRegionName: "Latinoamérica", note: "Remember the tilde on *móvil*." },
  { concept: "mobile phone", region: "Latinoamérica", answer: "el celular", accept: ["el celular", "celular"], otherRegionTrap: "el móvil", otherRegionName: "España", note: "Standard across all of Latin America." },
];

interface LangFactSpec {
  questionCore: string;
  answer: string;
  accept: string[];
  trap: string;
  trapMsg: string;
  note: string;
}

const LANG_FACTS_T3: readonly LangFactSpec[] = [
  { questionCore: "pronouncing `z`, `ce/ci`, and `s` all as `/s/` (used by >90% of Spanish speakers globally)", answer: "seseo", accept: ["seseo", "el seseo"], trap: "ceceo", trapMsg: "*Ceceo* pronounces all of them with `/θ/`; merging them into `/s/` is **seseo**.", note: "*Seseo* is standard across all of Latin America and the Canary Islands." },
  { questionCore: "distinguishing interdental `/θ/` (`z, ce/ci`) from `/s/` in northern and central Spain", answer: "distinción", accept: ["distinción", "la distinción"], trap: "seseo", trapMsg: "*Seseo* merges both sounds into `/s/`; keeping them apart is **distinción**.", note: "Remember the tilde on *-ción*." },
  { questionCore: "Spain's pre-Roman co-official **language isolate** spoken in the País Vasco and Navarra", answer: "euskera", accept: ["euskera", "el euskera", "vasco", "el vasco"], trap: "catalán", trapMsg: "*Catalán* is a Romance language from Latin; the pre-Roman isolate is **euskera**.", note: "*Euskera* is Europe's oldest living non-Indo-European language isolate." },
  { questionCore: "Spain's co-official Romance language spoken in Cataluña, Islas Baleares, and (as *valenciano*) Valencia", answer: "catalán", accept: ["catalán", "el catalán"], trap: "gallego", trapMsg: "*Gallego* is spoken in Galicia (north-west Spain).", note: "Remember the tilde on *catalán*." },
  { questionCore: "Spain's co-official Romance language closely related to Portuguese, spoken in north-west Spain", answer: "gallego", accept: ["gallego", "el gallego"], trap: "euskera", trapMsg: "*Euskera* is a Basque language isolate unrelated to Latin or Portuguese.", note: "*Gallego* shares medieval Galician-Portuguese roots with Portuguese." },
  { questionCore: "the indigenous language co-official nationwide and spoken by a majority of citizens in **Paraguay**", answer: "guaraní", accept: ["guaraní", "el guaraní"], trap: "quechua", trapMsg: "*Quechua* is Andean (Peru/Bolivia/Ecuador), whereas Paraguay's nationwide co-official language is **guaraní**.", note: "Blends with Spanish in everyday Paraguayan *jopará*." },
  { questionCore: "the major Andean indigenous language (Peru, Bolivia, Ecuador) behind *cancha, papa,* and *cóndor*", answer: "quechua", accept: ["quechua", "el quechua"], trap: "náhuatl", trapMsg: "*Náhuatl* is Mexican (giving *chocolate, aguacate, tomate*).", note: "Spoken by roughly 8–10 million people across the Andes." },
  { questionCore: "the Mexican indigenous language of the Mexica Empire that gave Spanish *chocolate, aguacate,* and *tomate*", answer: "náhuatl", accept: ["náhuatl", "el náhuatl"], trap: "quechua", trapMsg: "*Quechua* is Andean, not Mexican.", note: "Still spoken by over 1.6 million people in Mexico today." },
  { questionCore: "the plural 'you' pronoun used for BOTH informal friends and formal audiences across all of Latin America", answer: "ustedes", accept: ["ustedes"], trap: "vosotros", trapMsg: "*Vosotros* is used in Peninsular Spain; Latin America uses **ustedes** universally.", note: "*Ustedes* takes 3rd-person plural verb endings." },
  { questionCore: "sociolinguistic term for discrimination against speakers based on their regional accent or language", answer: "glotofobia", accept: ["glotofobia", "la glotofobia"], trap: "bilingüismo", trapMsg: "*Bilingüismo* is speaking two languages; prejudice against accents is **glotofobia**.", note: "High-value B2–C1 sociolinguistic term for Theme 1 essays and IO." },
];

const LING_FRAMES = [
  "In a Paper 2 Listening dialogue from",
  "In an authentic podcast recorded in",
  "In a street interview filmed in",
  "In a youth blog written in",
] as const;

const variedadesDrill: Drill = {
  id: "1-identidades.variedades-hispanohablantes",
  topicId: "1-identidades",
  title: "Hispanic Varieties: Voseo, Regional Lexis & Plurilingualism",
  level: 2,
  ibLevel: "SL",
  guideRef: "lengua-identidad-hispanohablante",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const traps: Trap[] = [];
    if (tier === 1) {
      const verb = rng.pick(VOSEO_PRES_POOL);
      const city = rng.pick(VOSEO_CITIES);
      const frame = rng.pick(LING_FRAMES);
      traps.push({ spec: { type: "text", accept: [verb.tuPres] }, feedback: `*${verb.tuPres}* is *tú*; Rioplatense *voseo* stresses the final syllable with zero stem diphthong!` });
      if (verb.wrongDiphthong) {
        traps.push({ spec: { type: "text", accept: [verb.wrongDiphthong] }, feedback: `Never keep a stem diphthong in present indicative *voseo* (*${verb.vosPres}*, NOT *${verb.wrongDiphthong}*)!` });
      }
      return {
        prompt: `${frame} **${city}**, convert *tú ${verb.tuPres}* (**${verb.inf}**) into the exact Rioplatense **voseo** present indicative (include the written accent):\n\n*«¿Vos siempre _____ ${verb.ctxPres}?»*`,
        answer: { type: "text", accept: [verb.vosPres], display: verb.vosPres },
        hint: verb.inf === "ser" ? "*Ser* has a unique 3-letter *voseo* form!" : "Drop *-r*, add *-s*, accent the final vowel — and drop any stem diphthong!",
        traps,
        solution: [
          verb.inf === "ser"
            ? "*Ser* is irregular in Rioplatense *voseo*: **vos sos**."
            : `Drop *-r* from *${verb.inf}* (no stem diphthong!), add *-s*, and stress the final vowel → **${verb.vosPres}**.`,
        ],
      };
    }

    if (tier === 2) {
      const doImperative = rng.bool(0.55);
      if (doImperative) {
        const verb = rng.pick(VOSEO_IMP_POOL);
        const city = rng.pick(VOSEO_CITIES);
        traps.push({ spec: { type: "text", accept: [verb.tuImp] }, feedback: `*${verb.tuImp}* is the *tú* command; for *voseo* drop *-r* from the infinitive and accent the final vowel (except *ir → andá*).` });
        return {
          prompt: `A friend in **${city}** uses Rioplatense **voseo**. Give the exact **affirmative imperative** of **${verb.inf}** (include the tilde!):\n\n*«¡Che, _____ ${verb.ctxImp}!»*`,
          answer: { type: "text", accept: [verb.vosImp], display: verb.vosImp },
          hint: verb.inf === "ir" ? "*Ir* is the sole irregular *voseo* imperative — it borrows from *andar*!" : "Drop the final *-r* from the infinitive and add a tilde to the final vowel.",
          traps,
          solution: [
            verb.inf === "ir"
              ? "*Ir* borrows its affirmative *voseo* command from *andar*: **andá**."
              : `Infinitive *${verb.inf}* minus *-r* + final written accent → **${verb.vosImp}**.`,
          ],
        };
      }
      const lex = rng.pick(REGIONAL_LEX_POOL);
      const ctx = rng.pick([
        "You hear this everyday noun in a Paper 2 Listening clip.",
        "You spot this regionalism in an authentic newspaper column.",
        "You are adapting a dialogue for local readers.",
      ]);
      traps.push({
        spec: { type: "text", accept: [lex.otherRegionTrap] },
        feedback: `*${lex.otherRegionTrap}* belongs to ${lex.otherRegionName}, not ${lex.region}!`,
      });
      return {
        prompt: `${ctx}\n\nWhat is the standard everyday word (with article) for **${lex.concept}** in **${lex.region}**?`,
        answer: { type: "text", accept: lex.accept, display: lex.answer },
        hint: `Recall the pluricentric Spanish vocabulary grid for **${lex.region}**.`,
        traps,
        solution: [
          `In **${lex.region}**, "${lex.concept}" is **${lex.answer}**.`,
          lex.note,
        ],
      };
    }

    // Tier 3: Linguistic phenomena, co-official & indigenous languages
    const fact = rng.pick(LANG_FACTS_T3);
    const intro = rng.pick([
      "For an IB Paper 1 essay on Theme 1 (*Lengua e identidad*):",
      "During your Individual Oral Part 3 discussion on Hispanic diversity:",
      "For a Paper 2 Reading sociolinguistics passage:",
      "Testing pluricentric Hispanophone knowledge:",
    ]);
    traps.push({ spec: { type: "text", accept: [fact.trap] }, feedback: fact.trapMsg });
    return {
      prompt: `${intro}\n\nGive the exact Spanish term for **${fact.questionCore}** (include accents if required):`,
      answer: { type: "text", accept: fact.accept, display: fact.answer },
      hint: "Check exact Spanish orthography (*distinción, catalán, guaraní, náhuatl*).",
      traps,
      solution: [
        `Exact Spanish term: **${fact.answer}**.`,
        fact.note,
      ],
    };
  },
};

// ===========================================================================
// DRILL 5: [HL] Band 10–12 Register Upgrade, Epicene Lexis & C1 Connectors
// ===========================================================================
interface HlUpgradeItem {
  igcse: string;
  answer: string;
  accept: string[];
  trap?: string;
  trapMsg?: string;
  note: string;
}

const HL_EPICENE_ANGLICISM: readonly HlUpgradeItem[] = [
  { igcse: "el bullying (unadapted English)", answer: "el acoso escolar", accept: ["el acoso escolar", "acoso escolar"], trap: "el bullying", trapMsg: "Replace the unadapted anglicism with FundéuRAE's crisp Spanish equivalent.", note: "Endorsed by FundéuRAE for formal IB writing." },
  { igcse: "el cyberbullying (unadapted English)", answer: "el ciberacoso", accept: ["el ciberacoso", "ciberacoso"], trap: "el cyberbullying", trapMsg: "Use the single native Spanish compound noun.", note: "Avoids unnecessary English borrowing in Criterion A." },
  { igcse: "los/as alumnos/as (clunky gendered slashes)", answer: "el alumnado", accept: ["el alumnado", "alumnado"], note: "Smooth collective epicene noun covering all students." },
  { igcse: "los/as profesores/as (clunky gendered slashes)", answer: "el profesorado", accept: ["el profesorado", "profesorado"], note: "Standard collective noun for teaching staff." },
  { igcse: "los/as ciudadanos/as (clunky gendered slashes)", answer: "la ciudadanía", accept: ["la ciudadanía", "ciudadanía"], note: "Notice the tilde on *í* (*ciudadanía*)." },
  { igcse: "los chicos y chicas jóvenes (wordy IGCSE)", answer: "la juventud", accept: ["la juventud", "juventud"], note: "Crisp collective noun for HL essays." },
  { igcse: "el feedback (unadapted English)", answer: "la retroalimentación", accept: ["la retroalimentación", "retroalimentación"], note: "Formal Spanish equivalent recommended by FundéuRAE." },
  { igcse: "mezclar dos idiomas al hablar (Spanglish code-switching)", answer: "la alternancia de códigos", accept: ["la alternancia de códigos", "alternancia de códigos"], note: "Exact sociolinguistic term for rule-governed *code-switching*." },
  { igcse: "burlarse de un acento regional (linguistic prejudice)", answer: "la glotofobia", accept: ["la glotofobia", "glotofobia"], note: "High-precision C1 sociolinguistic noun." },
  { igcse: "identidad mezclada entre dos culturas (diaspora identity)", answer: "la identidad híbrida", accept: ["la identidad híbrida", "identidad híbrida"], note: "Reframes diaspora identity positively as transcultural synthesis." },
];

const HL_TEXT_TYPES = [
  "an HL Paper 1 *ensayo*",
  "a formal *carta al director*",
  "an institutional *informe*",
  "a persuasive *editorial*",
  "an HL *artículo de opinión*",
] as const;

interface HlConnVerb {
  inf: string;
  subj3s: string;
  ind3s: string;
  ctxDeAhi: string;
  ctxSiBien: string;
  note: string;
}

const HL_CONN_VERBS: readonly HlConnVerb[] = [
  { inf: "ser", subj3s: "sea", ind3s: "es", ctxDeAhi: "imprescindible proteger las lenguas originarias", ctxSiBien: "lógico cuidar la claridad gramatical", note: "*Ser* → present subjunctive **sea** / indicative **es**." },
  { inf: "resultar", subj3s: "resulte", ind3s: "resulta", ctxDeAhi: "urgente combatir la glotofobia en los medios", ctxSiBien: "cómodo emplear anglicismos tecnológicos", note: "Regular *-ar*: **resulte** (subj.) vs **resulta** (ind.)." },
  { inf: "convenir", subj3s: "convenga", ind3s: "conviene", ctxDeAhi: "fomentar la educación intercultural bilingüe", ctxSiBien: "evitar calcos innecesarios en informes", note: "*Convenir* follows *venir* (*yo convengo* → **convenga**)." },
  { inf: "haber", subj3s: "haya", ind3s: "hay", ctxDeAhi: "un debate tan intenso sobre el lenguaje inclusivo", ctxSiBien: "resistencia entre sectores prescriptivistas", note: "Impersonal *haber*: **haya** (subj.) vs **hay** (ind.)." },
  { inf: "favorecer", subj3s: "favorezca", ind3s: "favorece", ctxDeAhi: "el diálogo panhispánico sin jerarquías", ctxSiBien: "el contacto digital inmediato entre diásporas", note: "*-cer* → *-zc-*: **favorezca** (subj.) vs **favorece** (ind.)." },
  { inf: "enriquecer", subj3s: "enriquezca", ind3s: "enriquece", ctxDeAhi: "el repertorio expresivo del alumnado", ctxSiBien: "la variedad léxica del español global", note: "*-cer* → *-zc-*: **enriquezca** (subj.) vs **enriquece** (ind.)." },
  { inf: "exigir", subj3s: "exija", ind3s: "exige", ctxDeAhi: "una postura matizada ante los préstamos léxicos", ctxSiBien: "esfuerzo didáctico implementar políticas bilingües", note: "*-gir* → `g → j` before `a`: **exija** (subj.) vs **exige** (ind.)." },
  { inf: "proteger", subj3s: "proteja", ind3s: "protege", ctxDeAhi: "el patrimonio oral de las comunidades andinas", ctxSiBien: "la RAE la unidad ortográfica panhispánica", note: "*-ger* → `g → j` before `a`: **proteja** (subj.) vs **protege** (ind.)." },
  { inf: "fomentar", subj3s: "fomente", ind3s: "fomenta", ctxDeAhi: "una ciudadanía crítica y pluricultural", ctxSiBien: "la globalización el intercambio cultural", note: "Regular *-ar*: **fomente** (subj.) vs **fomenta** (ind.)." },
  { inf: "promover", subj3s: "promueva", ind3s: "promueve", ctxDeAhi: "el uso de sustantivos epicenos naturales", ctxSiBien: "ASALE la igualdad entre las 23 academias", note: "Stem-changer (`o → ue`): **promueva** (subj.) vs **promueve** (ind.)." },
];

const HL_CAUSE_LEADS = [
  "La lengua moldea la memoria colectiva",
  "El español es una lengua policéntrica",
  "Las identidades juveniles cambian con rapidez",
  "La diversidad lingüística sustenta el respeto cívico",
] as const;

interface HlC1Verb {
  igcseClue: string;
  answer: string;
  accept: string[];
  sentence: string;
  note: string;
}

const HL_C1_VERBS_T3: readonly HlC1Verb[] = [
  { igcseClue: "daña / debilita (3rd person sg. present of *menoscabar*)", answer: "menoscaba", accept: ["menoscaba"], sentence: "La discriminación hacia los acentos rurales _____ la autoestima de sus hablantes.", note: "*Menoscabar* ('to undermine / erode') is a prime Band 11 verb." },
  { igcseClue: "afecta mucho a (3rd person sg. present of *incidir* — verb only)", answer: "incide", accept: ["incide", "incide en"], sentence: "El entorno familiar _____ directamente en la configuración identitaria juvenil.", note: "*Incidir en* replaces repetitive *afectar mucho a*." },
  { igcseClue: "destaca / muestra claramente (3 words, present 3rd sg. of *poner de relieve*)", answer: "pone de relieve", accept: ["pone de relieve"], sentence: "El informe de ASALE _____ la riqueza de las variedades americanas.", note: "*Poner de relieve* = 'to highlight / throw into sharp relief'." },
  { igcseClue: "es bueno y malo a la vez (4-word idiom: *un _____ de doble _____*)", answer: "arma de doble filo", accept: ["arma de doble filo", "un arma de doble filo"], sentence: "Las redes sociales constituyen un _____ para las identidades locales.", note: "Notice *un arma* (feminine noun beginning with stressed *a-* takes *el/un*!)." },
  { igcseClue: "asume sin pensar (infinitive idiom: *dar por _____* — give full 3-word infinitive)", answer: "dar por sentado", accept: ["dar por sentado"], sentence: "No debemos _____ que las lenguas minoritarias sobrevivirán sin apoyo público.", note: "Negated *no dar por sentado que* also triggers the subjunctive!" },
  { igcseClue: "ignora por descuido (infinitive idiom: *pasar por _____* — give full 3-word infinitive)", answer: "pasar por alto", accept: ["pasar por alto"], sentence: "Sería un error _____ el valor identitario del guaraní en Paraguay.", note: "*Pasar por alto* = 'to overlook / ignore'." },
  { igcseClue: "matiza / añade detalle crítico (infinitive meaning 'to nuance / qualify')", answer: "matizar", accept: ["matizar"], sentence: "No obstante, conviene _____ que los préstamos adaptados enriquecen el idioma.", note: "*Conviene matizar que...* is an examiner favourite for HL nuance." },
  { igcseClue: "defiende activamente (3rd person sg. present of *abogar* — verb only)", answer: "aboga", accept: ["aboga", "aboga por"], sentence: "La política panhispánica _____ por la colaboración entre todas las academias.", note: "*Abogar por* = 'to advocate for'." },
  { igcseClue: "representa / simboliza profundamente (3rd person sg. present of *encarnar*)", answer: "encarna", accept: ["encarna"], sentence: "El bilingüismo fronterizo _____ una síntesis creativa entre dos mundos.", note: "*Encarnar* = 'to embody'." },
  { igcseClue: "es / representa (3rd person sg. present of *constituir*)", answer: "constituye", accept: ["constituye"], sentence: "El euskera _____ un testimonio único de la historia europea prerromana.", note: "*Constituir* upgrades repetitive *es* cleanly." },
];

const registroC1HlDrill: Drill = {
  id: "1-identidades.registro-c1-hl",
  topicId: "1-identidades",
  title: "[HL] Band 10–12 Register, Epicene Nouns & C1 Connectors",
  level: 3,
  ibLevel: "HL",
  guideRef: "identidad-registro-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const traps: Trap[] = [];
    if (tier === 1) {
      const item = rng.pick(HL_EPICENE_ANGLICISM);
      const genre = rng.pick(HL_TEXT_TYPES);
      if (item.trap && item.trapMsg) {
        traps.push({ spec: { type: "text", accept: [item.trap] }, feedback: item.trapMsg });
      }
      return {
        prompt: `[HL] Editing ${genre}, replace **${item.igcse}** with the crisp, natural Spanish Band 10–12 equivalent (include article and exact accents):`,
        answer: { type: "text", accept: item.accept, display: item.answer },
        hint: "Use standard FundéuRAE equivalents or natural Spanish collective epicene nouns.",
        traps,
        solution: [
          `Band 10–12 HL upgrade: **${item.answer}**.`,
          item.note,
        ],
      };
    }

    if (tier === 2) {
      const verb = rng.pick(HL_CONN_VERBS);
      const isDeAhi = rng.bool(0.55);
      if (isDeAhi) {
        const lead = rng.pick(HL_CAUSE_LEADS);
        const ansSpec: AnswerSpec = { type: "text", accept: [verb.subj3s], display: verb.subj3s };
        addSafeTrap(traps, ansSpec, [verb.ind3s], `*${verb.ind3s}* is indicative! The HL connector **de ahí que** ALWAYS demands the **subjunctive** (*${verb.subj3s}*).`);
        addSafeTrap(traps, ansSpec, [verb.inf], "After *de ahí que*, conjugate the verb in the present subjunctive.");
        return {
          prompt: `[HL] Complete this Band 11 conclusion after **de ahí que** using **${verb.inf}** (3rd person singular):\n\n*«${lead}; de ahí que _____ ${verb.ctxDeAhi}.»*`,
          answer: ansSpec,
          hint: "`De ahí que` ('hence / which is why') ALWAYS triggers the subjunctive!",
          traps,
          solution: [
            "`De ahí que` requires the **present subjunctive**.",
            `${verb.note} Answer: **${verb.subj3s}**.`,
          ],
        };
      }
      const pivot = rng.pick([
        "no obstante conviene preservar la riqueza local",
        "no obstante debemos analizar su impacto con rigor",
        "sin embargo no podemos olvidar las lenguas minoritarias",
      ]);
      const ansSpec: AnswerSpec = { type: "text", accept: [verb.ind3s], display: verb.ind3s };
      addSafeTrap(traps, ansSpec, [verb.subj3s], `Careful! Formal **Si bien** introduces an acknowledged real fact and takes the **indicative** (*${verb.ind3s}*).`);
      addSafeTrap(traps, ansSpec, [verb.inf], "After *Si bien*, conjugate the verb in the indicative mood.");
      return {
        prompt: `[HL] Complete this formal concessive opener after **Si bien** using **${verb.inf}** (3rd person singular):\n\n*«Si bien _____ ${verb.ctxSiBien}, ${pivot}.»*`,
        answer: ansSpec,
        hint: "Unlike hypothetical *aunque*, formal **Si bien** ('while it is true that') takes the **indicative**.",
        traps,
        solution: [
          "`Si bien` states a conceded real fact → **present indicative**.",
          `${verb.note} Answer: **${verb.ind3s}**.`,
        ],
      };
    }

    // Tier 3: Band 10–12 verb & idiom precision
    const item = rng.pick(HL_C1_VERBS_T3);
    const genre = rng.pick(HL_TEXT_TYPES);
    return {
      prompt: `[HL] Upgrading ${genre}: complete the blank to replace IGCSE phrasing **${item.igcseClue}**:\n\n*«${item.sentence}»*`,
      answer: { type: "text", accept: item.accept, display: item.answer },
      hint: "Focus on exact C1 Spanish verb conjugation or idiomatic phrasing.",
      traps,
      solution: [
        `Band 10–12 replacement: **${item.answer}**.`,
        item.note,
      ],
    };
  },
};

export const drills: Drill[] = [
  impersonalSubjuntivoDrill,
  lexicoSaludDrill,
  creenciasConectoresDrill,
  variedadesDrill,
  registroC1HlDrill,
];
