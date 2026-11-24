import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

// ---------------------------------------------------------------------------
// Drill 1: Tú → Usted formal-register conversion (verbs, imperatives, pronouns)
// ---------------------------------------------------------------------------

interface TuUstedItem {
  tu: string;
  usted: string;
  inf: string;
  trapWrong: string;
  trapFeedback: string;
  rule: string;
}

const TU_USTED_T1: readonly TuUstedItem[] = [
  { tu: "colaboras", usted: "colabora", inf: "colaborar", trapWrong: "colaboras", trapFeedback: "Drop the final -s when converting present indicative tú to usted.", rule: "Present indicative tú (-as) → usted (-a)." },
  { tu: "participas", usted: "participa", inf: "participar", trapWrong: "participas", trapFeedback: "Drop the final -s for 3rd person singular usted.", rule: "Present indicative tú (-as) → usted (-a)." },
  { tu: "apoyas", usted: "apoya", inf: "apoyar", trapWrong: "apoyas", trapFeedback: "Formal usted uses 3rd person singular without -s.", rule: "Present indicative tú (-as) → usted (-a)." },
  { tu: "organizas", usted: "organiza", inf: "organizar", trapWrong: "organizas", trapFeedback: "Formal usted drops the -s: organiza.", rule: "Present indicative tú (-as) → usted (-a)." },
  { tu: "ofreces", usted: "ofrece", inf: "ofrecer", trapWrong: "ofreces", trapFeedback: "Present indicative usted drops the final -s: ofrece.", rule: "Present indicative tú (-es) → usted (-e)." },
  { tu: "propones", usted: "propone", inf: "proponer", trapWrong: "propones", trapFeedback: "Use 3rd person singular without -s: propone.", rule: "Present indicative tú (-es) → usted (-e)." },
  { tu: "defiendes", usted: "defiende", inf: "defender", trapWrong: "defiendes", trapFeedback: "Keep stem change e → ie and drop -s: defiende.", rule: "Stem-changing present indicative tú → usted drops -s." },
  { tu: "promueves", usted: "promueve", inf: "promover", trapWrong: "promueves", trapFeedback: "Keep stem change o → ue and drop -s: promueve.", rule: "Stem-changing present indicative tú → usted drops -s." },
  { tu: "asistes", usted: "asiste", inf: "asistir", trapWrong: "asistes", trapFeedback: "Formal usted takes 3rd person singular: asiste.", rule: "Present indicative tú (-es) → usted (-e)." },
  { tu: "compartes", usted: "comparte", inf: "compartir", trapWrong: "compartes", trapFeedback: "Drop the final -s for usted: comparte.", rule: "Present indicative tú (-es) → usted (-e)." },
  { tu: "permites", usted: "permite", inf: "permitir", trapWrong: "permites", trapFeedback: "Formal usted uses 3rd person singular: permite.", rule: "Present indicative tú (-es) → usted (-e)." },
  { tu: "contribuyes", usted: "contribuye", inf: "contribuir", trapWrong: "contribuyes", trapFeedback: "Keep the -y- spelling and drop -s: contribuye.", rule: "Verbs in -uir keep y and drop -s for usted." },
];

const TU_USTED_T1_CTX: readonly string[] = [
  "en el banco de alimentos municipal",
  "con la asociación vecinal del distrito",
  "en la campaña de voluntariado juvenil",
  "en el programa intergeneracional del centro cívico",
];

const TU_USTED_T2: readonly TuUstedItem[] = [
  { tu: "ayuda", usted: "ayude", inf: "ayudar", trapWrong: "ayuda", trapFeedback: "«Ayuda» is informal tú imperative; usted imperative uses present subjunctive (ayude).", rule: "Usted imperative of -ar verbs swaps -a to -e." },
  { tu: "apoya", usted: "apoye", inf: "apoyar", trapWrong: "apoya", trapFeedback: "Formal usted commands take the present subjunctive: apoye.", rule: "Usted imperative of -ar verbs swaps -a to -e." },
  { tu: "considera", usted: "considere", inf: "considerar", trapWrong: "considera", trapFeedback: "«Considera» is informal tú; formal usted uses present subjunctive: considere.", rule: "Usted imperative of -ar verbs takes -e." },
  { tu: "organiza", usted: "organice", inf: "organizar", trapWrong: "organiza", trapFeedback: "«Organiza» is informal tú; formal usted uses present subjunctive with z → c (organice).", rule: "Usted imperative of -zar verbs changes z → c before -e." },
  { tu: "busca", usted: "busque", inf: "buscar", trapWrong: "busca", trapFeedback: "Formal usted imperative of -car verbs changes c → qu + e: busque.", rule: "Usted imperative of -car verbs changes c → qu before -e." },
  { tu: "entrega", usted: "entregue", inf: "entregar", trapWrong: "entrega", trapFeedback: "Formal usted imperative of -gar verbs changes g → gu + e: entregue.", rule: "Usted imperative of -gar verbs changes g → gu before -e." },
  { tu: "lee", usted: "lea", inf: "leer", trapWrong: "lee", trapFeedback: "«Lee» is informal tú; formal usted imperative of -er verbs swaps to -a: lea.", rule: "Usted imperative of -er verbs swaps to -a." },
  { tu: "escribe", usted: "escriba", inf: "escribir", trapWrong: "escribe", trapFeedback: "Formal usted imperative of -ir verbs takes -a: escriba.", rule: "Usted imperative of -ir verbs swaps to -a." },
  { tu: "haz", usted: "haga", inf: "hacer", trapWrong: "haz", trapFeedback: "«Haz» is informal tú; form usted imperative from yo hago → haga.", rule: "Irregular yo stem (hago) → usted imperative haga." },
  { tu: "pon", usted: "ponga", inf: "poner", trapWrong: "pon", trapFeedback: "«Pon» is informal tú; form usted imperative from yo pongo → ponga.", rule: "Irregular yo stem (pongo) → usted imperative ponga." },
  { tu: "ven", usted: "venga", inf: "venir", trapWrong: "ven", trapFeedback: "«Ven» is informal tú; form usted imperative from yo vengo → venga.", rule: "Irregular yo stem (vengo) → usted imperative venga." },
  { tu: "no olvides", usted: "no olvide", inf: "olvidar", trapWrong: "no olvides", trapFeedback: "Drop the final -s in negative usted imperatives: no olvide.", rule: "Negative usted imperative uses 3rd person singular subjunctive." },
];

const TU_USTED_T2_CTX: readonly string[] = [
  "en esta carta formal dirigida a la alcaldía",
  "en la propuesta enviada a la dirección del centro",
  "en el correo institucional a la coordinadora de la ONG",
  "en la solicitud dirigida al departamento de juventud",
];

const TU_USTED_T3: readonly TuUstedItem[] = [
  { tu: "te escribo", usted: "le escribo", inf: "escribir", trapWrong: "te escribo", trapFeedback: "Convert indirect object pronoun te → le for formal usted.", rule: "Indirect object te (tú) → le (usted)." },
  { tu: "te agradezco", usted: "le agradezco", inf: "agradecer", trapWrong: "te agradezco", trapFeedback: "In formal letters, «agradecer» takes indirect object le: le agradezco.", rule: "Indirect object te → le." },
  { tu: "te ruego", usted: "le ruego", inf: "rogar", trapWrong: "te ruego", trapFeedback: "Convert te → le for formal usted: le ruego.", rule: "Indirect object te → le." },
  { tu: "tu apoyo", usted: "su apoyo", inf: "apoyo (posesivo)", trapWrong: "tu apoyo", trapFeedback: "Convert possessive tu → su for formal usted.", rule: "Possessive tu (tú) → su (usted)." },
  { tu: "tus propuestas", usted: "sus propuestas", inf: "propuestas (posesivo)", trapWrong: "tus propuestas", trapFeedback: "Convert plural possessive tus → sus for formal usted.", rule: "Possessive tus → sus." },
  { tu: "te comprometes", usted: "se compromete", inf: "comprometerse", trapWrong: "te compromete", trapFeedback: "Shift BOTH the reflexive pronoun (te → se) and the verb ending (-es → -e).", rule: "Reflexive tú (te + -es) → usted (se + -e)." },
  { tu: "dinos", usted: "díganos", inf: "decir + nos", trapWrong: "dinos", trapFeedback: "Use usted imperative diga + nos with esdrújula accent: díganos.", rule: "Affirmative usted imperative + enclitic pronoun takes written accent." },
  { tu: "cuéntanos", usted: "cuéntenos", inf: "contar + nos", trapWrong: "nos cuente", trapFeedback: "Attach «nos» to the end of affirmative usted imperatives with an accent: cuéntenos.", rule: "Stem-changing -ar usted imperative + nos: cuéntenos." },
  { tu: "envíanos", usted: "envíenos", inf: "enviar + nos", trapWrong: "nos envíe", trapFeedback: "Attach «nos» directly to affirmative usted imperatives and preserve the accent: envíenos.", rule: "Usted imperative envíe + nos → envíenos." },
  { tu: "ayúdanos", usted: "ayúdenos", inf: "ayudar + nos", trapWrong: "nos ayude", trapFeedback: "In affirmative imperatives, pronouns attach to the verb end with an accent: ayúdenos.", rule: "Usted imperative ayude + nos → ayúdenos." },
  { tu: "no te olvides", usted: "no se olvide", inf: "olvidarse", trapWrong: "no te olvide", trapFeedback: "Convert BOTH reflexive te → se and verb olvides → olvide.", rule: "Negative reflexive usted imperative: no se + 3rd sing. subjunctive." },
  { tu: "no dudes", usted: "no dude", inf: "dudar", trapWrong: "no dudes", trapFeedback: "Drop the -s for formal usted: no dude.", rule: "Negative usted imperative drops -s from tú subjunctive." },
];

const TU_USTED_T3_CTX: readonly string[] = [
  "al redactar una carta formal al concejal de educación",
  "en una propuesta oficial para la directora de una ONG",
  "en una carta de presentación dirigida a Recursos Humanos",
  "al escribir al representante del consejo municipal",
];

// ---------------------------------------------------------------------------
// Drill 2: Si-clauses (Types 1, 2 & 3) for social reforms
// ---------------------------------------------------------------------------

interface SiClauseItem {
  before: string;
  inf: string;
  after: string;
  accept: string[];
  display: string;
  trapWrong: string;
  trapFeedback: string;
  rule: string;
}

const SI_T1: readonly SiClauseItem[] = [
  { before: "Si el ayuntamiento", inf: "invertir", after: "en bibliotecas públicas, mejorará el rendimiento escolar.", accept: ["invierte"], display: "invierte", trapWrong: "invierta", trapFeedback: "Never use the present subjunctive after «si»! Type 1 requires present indicative.", rule: "Type 1: Si + presente de indicativo (invertir e→ie → invierte) → futuro." },
  { before: "Si el instituto", inf: "ampliar", after: "las becas de transporte, asistirán más alumnos rurales.", accept: ["amplía"], display: "amplía", trapWrong: "amplíe", trapFeedback: "Type 1 takes present indicative after «si» (amplía, with accent on í), not subjunctive.", rule: "Type 1: Si + presente de indicativo (amplía) → futuro." },
  { before: "Si los municipios", inf: "crear", after: "consejos juveniles, crecerá la participación ciudadana.", accept: ["crean"], display: "crean", trapWrong: "creen", trapFeedback: "Never place present subjunctive after «si»; use present indicative (crean).", rule: "Type 1: Si + presente de indicativo (crean) → futuro." },
  { before: "Si las empresas", inf: "ofrecer", after: "prácticas remuneradas, bajará la precariedad juvenil.", accept: ["ofrecen"], display: "ofrecen", trapWrong: "ofrezcan", trapFeedback: "Type 1 takes present indicative after «si», never present subjunctive.", rule: "Type 1: Si + presente de indicativo (ofrecen) → futuro." },
  { before: "Si nosotros", inf: "fomentar", after: "la mediación escolar, disminuirán los conflictos.", accept: ["fomentamos"], display: "fomentamos", trapWrong: "fomentaremos", trapFeedback: "Never place the future tense inside the «si»-clause; use present indicative.", rule: "Type 1: Si + presente de indicativo (fomentamos) → futuro." },
  { before: "Si el Estado", inf: "proteger", after: "la desconexión digital, mejorará la conciliación laboral.", accept: ["protege"], display: "protege", trapWrong: "proteja", trapFeedback: "Present subjunctive is forbidden after «si»; use present indicative (protege).", rule: "Type 1: Si + presente de indicativo (protege) → futuro." },
  { before: "Si impulsamos la FP Dual,", inf: "bajar", after: "(3.ª sing. futuro) la tasa de paro juvenil.", accept: ["bajará"], display: "bajará", trapWrong: "bajaría", trapFeedback: "«Impulsamos» is present indicative (Type 1), so pair it with future simple (bajará), not conditional.", rule: "Type 1 main clause: simple future (bajará)." },
  { before: "Si apoyamos los bancos de alimentos,", inf: "disminuir", after: "(3.ª sing. futuro) la vulnerabilidad en el barrio.", accept: ["disminuirá"], display: "disminuirá", trapWrong: "disminuiría", trapFeedback: "Type 1 pairs present indicative with simple future (disminuirá), not conditional.", rule: "Type 1 main clause: simple future (disminuirá)." },
  { before: "Si regulamos los alquileres urbanos,", inf: "aumentar", after: "(3.ª sing. futuro) la emancipación juvenil.", accept: ["aumentará"], display: "aumentará", trapWrong: "aumentaría", trapFeedback: "Type 1 uses simple future (aumentará) to match present indicative «regulamos».", rule: "Type 1 main clause: simple future (aumentará)." },
  { before: "Si educamos en justicia restaurativa,", inf: "mejorar", after: "(3.ª sing. futuro) la convivencia ciudadana.", accept: ["mejorará"], display: "mejorará", trapWrong: "mejoraría", trapFeedback: "Match Type 1 present indicative with simple future (mejorará).", rule: "Type 1 main clause: simple future (mejorará)." },
];

const SI_T1_LEAD: readonly string[] = [
  "Propuesta municipal (Tipo 1):",
  "Informe de empleo juvenil (Tipo 1):",
  "Plan de cohesión vecinal (Tipo 1):",
  "Debate de ciudadanía activa (Tipo 1):",
];

const SI_T2: readonly SiClauseItem[] = [
  { before: "Si el gobierno", inf: "invertir", after: "más en reinserción social, bajaría la reincidencia.", accept: ["invirtiera", "invirtiese"], display: "invirtiera", trapWrong: "invertiría", trapFeedback: "Never put the conditional after «si»! Use imperfect subjunctive (invirtiera/invirtiese).", rule: "Type 2: Si + imperfecto de subjuntivo (de invirtieron → invirtiera)." },
  { before: "Si los centros", inf: "tener", after: "más orientadores de FP, disminuiría el abandono escolar.", accept: ["tuvieran", "tuviesen"], display: "tuvieran", trapWrong: "tendrían", trapFeedback: "Conditional is forbidden after «si»; use imperfect subjunctive (tuvieran/tuviesen).", rule: "Type 2: Si + imperfecto de subjuntivo (de tuvieron → tuvieran)." },
  { before: "Si las empresas", inf: "reducir", after: "la jornada a cuatro días, mejoraría la conciliación.", accept: ["redujeran", "redujesen"], display: "redujeran", trapWrong: "reducirían", trapFeedback: "Use irregular imperfect subjunctive from redujeron → redujeran/redujesen.", rule: "Type 2: -ducir preterite redujeron → redujeran." },
  { before: "Si", inf: "haber", after: "(impersonal) más viviendas públicas, los jóvenes se emanciparían antes.", accept: ["hubiera", "hubiese"], display: "hubiera", trapWrong: "habría", trapFeedback: "Never use «habría» after «si»! Impersonal haber takes singular hubiera/hubiese.", rule: "Type 2 impersonal haber: hubiera / hubiese." },
  { before: "Si el ayuntamiento", inf: "hacer", after: "presupuestos participativos, aumentaría la confianza vecinal.", accept: ["hiciera", "hiciese"], display: "hiciera", trapWrong: "haría", trapFeedback: "Never place conditional «haría» after «si»; use hiciera/hiciese.", rule: "Type 2: de hicieron → hiciera / hiciese." },
  { before: "Si nosotros", inf: "poder", after: "votar a los dieciséis años, participaríamos más en la política local.", accept: ["pudiéramos", "pudiésemos"], display: "pudiéramos", trapWrong: "podríamos", trapFeedback: "Use imperfect subjunctive with mandatory nosotros accent: pudiéramos/pudiésemos.", rule: "Type 2 nosotros imperfect subjunctive always carries a tilde: pudiéramos." },
  { before: "Si las leyes", inf: "proteger", after: "mejor a los becarios, disminuiría la precariedad laboral.", accept: ["protegieran", "protegiesen"], display: "protegieran", trapWrong: "protegerían", trapFeedback: "Conditional is never allowed after «si»; use protegieran/protegiesen.", rule: "Type 2: de protegieron → protegieran." },
  { before: "Si se aprobara el abono joven gratuito, más estudiantes", inf: "poder", after: "(3.ª pl. condicional) acudir a la universidad.", accept: ["podrían"], display: "podrían", trapWrong: "pudieran", trapFeedback: "Main clause of Type 2 takes simple conditional (podrían), not imperfect subjunctive.", rule: "Type 2 main clause: irregular stem podr- + -ían → podrían." },
  { before: "Si existiera mayor equidad digital, el alumnado rural", inf: "tener", after: "(3.ª sing. condicional) las mismas oportunidades.", accept: ["tendría"], display: "tendría", trapWrong: "tuviera", trapFeedback: "Main clause of Type 2 requires simple conditional (tendría).", rule: "Type 2 main clause: irregular stem tendr- + -ía → tendría." },
  { before: "Si se valorara la FP Dual, menos titulados", inf: "emigrar", after: "(3.ª pl. condicional) por la fuga de cerebros.", accept: ["emigrarían"], display: "emigrarían", trapWrong: "emigran", trapFeedback: "Main clause of Type 2 takes simple conditional (emigrarían), not present indicative.", rule: "Type 2 main clause: infinitive + -ían → emigrarían." },
];

const SI_T2_LEAD: readonly string[] = [
  "Reforma hipotética (Tipo 2):",
  "Debate de política educativa (Tipo 2):",
  "Propuesta de justicia juvenil (Tipo 2):",
  "Análisis del mercado laboral (Tipo 2):",
];

const SI_T3: readonly SiClauseItem[] = [
  { before: "Si el ministerio", inf: "aprobar", after: "la reforma en 2015, habría bajado el paro juvenil.", accept: ["hubiera aprobado", "hubiese aprobado"], display: "hubiera aprobado", trapWrong: "habría aprobado", trapFeedback: "Never use «habría» after «si»! Type 3 si-clauses take hubiera/hubiese + participio.", rule: "Type 3 si-clause: hubiera/hubiese + aprobado." },
  { before: "Si los municipios", inf: "invertir", after: "en vivienda social antes, habrían frenado los desalojos.", accept: ["hubieran invertido", "hubiesen invertido"], display: "hubieran invertido", trapWrong: "habrían invertido", trapFeedback: "Type 3 si-clauses require hubieran/hubiesen + participio.", rule: "Type 3 si-clause: hubieran/hubiesen + invertido." },
  { before: "Si los tribunales", inf: "aplicar", after: "la justicia restaurativa, habrían reducido la reincidencia.", accept: ["hubieran aplicado", "hubiesen aplicado"], display: "hubieran aplicado", trapWrong: "habrían aplicado", trapFeedback: "Use pluperfect subjunctive (hubieran/hubiesen aplicado) directly after «si».", rule: "Type 3 si-clause: hubieran/hubiesen + aplicado." },
  { before: "Si la empresa", inf: "respetar", after: "la desconexión digital, habría evitado la huelga.", accept: ["hubiera respetado", "hubiese respetado"], display: "hubiera respetado", trapWrong: "habría respetado", trapFeedback: "After «si», use hubiera/hubiese respetado (never habría).", rule: "Type 3 si-clause: hubiera/hubiese + respetado." },
  { before: "Si el Estado", inf: "hacer", after: "más inspecciones laborales, habría combatido la economía sumergida.", accept: ["hubiera hecho", "hubiese hecho"], display: "hubiera hecho", trapWrong: "hubiera hacido", trapFeedback: "«Hacer» has an irregular past participle: hecho.", rule: "Type 3 si-clause with irregular participle: hubiera/hubiese hecho." },
  { before: "Si el consejo", inf: "poner", after: "en marcha becas salario en 2018, habría frenado la deserción.", accept: ["hubiera puesto", "hubiese puesto"], display: "hubiera puesto", trapWrong: "hubiera ponido", trapFeedback: "«Poner» has an irregular past participle: puesto.", rule: "Type 3 si-clause with irregular participle: hubiera/hubiese puesto." },
  { before: "Si hubieran reformado la FP a tiempo, el país", inf: "reducir", after: "(3.ª sing. cond. compuesto) la fuga de cerebros.", accept: ["habría reducido"], display: "habría reducido", trapWrong: "hubiera reducido", trapFeedback: "Main clause of Type 3 takes conditional compound (habría reducido).", rule: "Type 3 main clause: habría + reducido." },
  { before: "Si hubieran escuchado al alumnado, los directores", inf: "resolver", after: "(3.ª pl. cond. compuesto) el conflicto antes.", accept: ["habrían resuelto"], display: "habrían resuelto", trapWrong: "habrían resolvido", trapFeedback: "«Resolver» has an irregular past participle: resuelto.", rule: "Type 3 main clause with irregular participle: habrían resuelto." },
  { before: "Si hubiera habido diálogo social, el gobierno", inf: "evitar", after: "(3.ª sing. cond. compuesto) la huelga general.", accept: ["habría evitado"], display: "habría evitado", trapWrong: "hubiera evitado", trapFeedback: "Main clause requires conditional compound (habría evitado), not subjunctive.", rule: "Type 3 main clause: habría + evitado." },
  { before: "Si hubiéramos apoyado los centros cívicos, nosotros", inf: "fortalecer", after: "(1.ª pl. cond. compuesto) el tejido asociativo.", accept: ["habríamos fortalecido"], display: "habríamos fortalecido", trapWrong: "hubiéramos fortalecido", trapFeedback: "Main clause uses conditional compound (habríamos fortalecido).", rule: "Type 3 main clause: habríamos + fortalecido." },
];

const SI_T3_LEAD: readonly string[] = [
  "Evaluación retrospectiva (Tipo 3):",
  "Crítica de política pública (Tipo 3):",
  "Balance institucional (Tipo 3):",
  "Análisis histórico-social (Tipo 3):",
];

// ---------------------------------------------------------------------------
// Drill 3: B2–C1 Education & Workplace Lexicon
// ---------------------------------------------------------------------------

interface LexItem {
  term: string;
  accept: string[];
  english: string;
  spanishDef: string;
  gapBefore: string;
  gapAfter: string;
  trapWrong?: string;
  trapFeedback?: string;
}

const LEX_T1: readonly LexItem[] = [
  { term: "paro juvenil", accept: ["paro juvenil", "el paro juvenil", "desempleo juvenil", "el desempleo juvenil"], english: "youth unemployment", spanishDef: "falta de empleo entre personas jóvenes activas", gapBefore: "España busca medidas eficaces para reducir el", gapAfter: "mediante la FP Dual.", trapWrong: "desempleo de jóvenes", trapFeedback: "Use the concise B2 collocation «paro juvenil» or «desempleo juvenil»." },
  { term: "teletrabajo", accept: ["teletrabajo", "el teletrabajo"], english: "remote work / teleworking", spanishDef: "modalidad laboral realizada a distancia desde el domicilio", gapBefore: "El auge del", gapAfter: "ha transformado los horarios de oficina.", trapWrong: "home office", trapFeedback: "Avoid English loans; use authentic Spanish «teletrabajo»." },
  { term: "beca", accept: ["beca", "la beca"], english: "scholarship / study grant", spanishDef: "ayuda económica concedida para costear estudios", gapBefore: "Gracias a una", gapAfter: "pública, pudo estudiar Medicina en Madrid." },
  { term: "prácticas", accept: ["prácticas", "las prácticas"], english: "internship / work placement", spanishDef: "periodo formativo supervisado dentro de una empresa", gapBefore: "Muchos universitarios realizan", gapAfter: "en verano para ganar experiencia." },
  { term: "currículo", accept: ["currículo", "el currículo", "currículum", "el currículum"], english: "CV / résumé", spanishDef: "documento que resume formación y experiencia laboral", gapBefore: "Antes de enviar su solicitud, conviene actualizar el", gapAfter: "con competencias digitales." },
  { term: "solicitar", accept: ["solicitar", "postular", "postularse"], english: "to apply for (a job / grant)", spanishDef: "pedir formalmente una plaza laboral o una beca", gapBefore: "No escribas «aplicar para»: el verbo formal correcto es", gapAfter: "un puesto de trabajo.", trapWrong: "aplicar", trapFeedback: "«Aplicar» is an Anglicism here; use «solicitar»." },
  { term: "huelga", accept: ["huelga", "la huelga"], english: "workers' strike", spanishDef: "interrupción colectiva del trabajo para reivindicar mejoras", gapBefore: "Los sindicatos convocaron una", gapAfter: "general para exigir salarios dignos." },
  { term: "sindicato", accept: ["sindicato", "el sindicato"], english: "trade union / labour union", spanishDef: "asociación que defiende los derechos laborales de los trabajadores", gapBefore: "El", gapAfter: "negoció con la empresa un nuevo convenio colectivo." },
  { term: "sueldo", accept: ["sueldo", "el sueldo", "salario", "el salario"], english: "salary / wage", spanishDef: "remuneración económica periódica por un empleo", gapBefore: "El encarecimiento del alquiler absorbe gran parte del", gapAfter: "mínimo juvenil." },
  { term: "bachillerato", accept: ["bachillerato", "el bachillerato"], english: "upper-secondary academic track (ages 16–18 in Spain)", spanishDef: "etapa educativa previa al acceso universitario en España", gapBefore: "Al terminar la ESO, los alumnos eligen entre el", gapAfter: "o la Formación Profesional." },
];

const LEX_T2: readonly LexItem[] = [
  { term: "precariedad laboral", accept: ["precariedad laboral", "la precariedad laboral"], english: "job insecurity / precarious employment", spanishDef: "inestabilidad contractual, bajos ingresos y falta de garantías en el empleo", gapBefore: "Los contratos de una semana agravan la", gapAfter: "de los recién graduados." },
  { term: "fuga de cerebros", accept: ["fuga de cerebros", "la fuga de cerebros"], english: "brain drain", spanishDef: "emigración de jóvenes titulados altamente cualificados hacia otros países", gapBefore: "La falta de inversión científica impulsa la", gapAfter: "hacia el norte de Europa." },
  { term: "conciliación laboral", accept: ["conciliación laboral", "la conciliación laboral"], english: "work-life balance", spanishDef: "equilibrio entre responsabilidades profesionales y vida familiar", gapBefore: "Los horarios flexibles facilitan la", gapAfter: "y familiar de las madres y padres." },
  { term: "brecha salarial", accept: ["brecha salarial", "la brecha salarial"], english: "wage gap / pay gap", spanishDef: "diferencia porcentual de ingresos entre hombres y mujeres por trabajo equivalente", gapBefore: "La transparencia retributiva ayuda a cerrar la", gapAfter: "de género." },
  { term: "sobrecualificación", accept: ["sobrecualificación", "la sobrecualificación"], english: "overqualification", spanishDef: "situación de titulados que ocupan puestos muy por debajo de su formación", gapBefore: "Casi un tercio de los graduados sufre", gapAfter: "en empleos sin cualificación." },
  { term: "inserción laboral", accept: ["inserción laboral", "la inserción laboral"], english: "labour-market integration / job placement", spanishDef: "incorporación efectiva de una persona al mercado de trabajo", gapBefore: "La FP Dual registra altas tasas de", gapAfter: "tras finalizar las prácticas." },
  { term: "contrato temporal", accept: ["contrato temporal", "el contrato temporal"], english: "temporary / fixed-term contract", spanishDef: "acuerdo laboral con fecha de finalización limitada", gapBefore: "Encadenar un", gapAfter: "tras otro impide solicitar una hipoteca." },
  { term: "desconexión digital", accept: ["desconexión digital", "la desconexión digital"], english: "digital disconnection (right to switch off)", spanishDef: "derecho a no responder mensajes laborales fuera de la jornada", gapBefore: "La ley española reconoce el derecho a la", gapAfter: "para proteger el descanso." },
  { term: "darse cuenta de", accept: ["darse cuenta de", "darse cuenta"], english: "to realize (fixing false friend «realizar»)", spanishDef: "percibir o comprender una realidad (evitando el falso amigo «realizar»)", gapBefore: "Muchos estudiantes tardan en", gapAfter: "que la FP ofrece excelentes salidas.", trapWrong: "realizarse", trapFeedback: "«Realizarse» means to fulfil oneself; use «darse cuenta de»." },
  { term: "techo de cristal", accept: ["techo de cristal", "el techo de cristal"], english: "glass ceiling", spanishDef: "barrera invisible que frena el ascenso de mujeres a cargos directivos", gapBefore: "Las cuotas de paridad buscan romper el", gapAfter: "en los consejos directivos." },
];

const LEX_T3: readonly LexItem[] = [
  { term: "economía sumergida", accept: ["economía sumergida", "la economía sumergida", "economía informal", "la economía informal"], english: "informal / underground economy", spanishDef: "actividad laboral no declarada sin cotizaciones ni protección legal", gapBefore: "Trabajar en la", gapAfter: "priva al empleado de derecho a pensión y baja médica." },
  { term: "ascensor social", accept: ["ascensor social", "el ascensor social"], english: "social elevator (upward mobility)", spanishDef: "mecanismo metafórico que permite progresar socioeconómicamente respecto a los padres", gapBefore: "Cuando se encarece la vivienda y la educación, se bloquea el", gapAfter: "para las rentas bajas." },
  { term: "reinserción social", accept: ["reinserción social", "la reinserción social"], english: "social rehabilitation / reintegration", spanishDef: "proceso educativo y laboral para reintegrar a exreclusos en la sociedad", gapBefore: "Los talleres formativos en prisión favorecen la", gapAfter: "tras cumplir la condena." },
  { term: "reincidencia", accept: ["reincidencia", "la reincidencia"], english: "reoffending / recidivism", spanishDef: "repetición de un delito tras haber recibido una condena previa", gapBefore: "La justicia restaurativa logra reducir significativamente la", gapAfter: "en delitos juveniles." },
  { term: "justicia restaurativa", accept: ["justicia restaurativa", "la justicia restaurativa"], english: "restorative justice", spanishDef: "modelo penal centrado en reparar el daño a la víctima y mediar con el infractor", gapBefore: "Frente al enfoque puramente punitivo, la", gapAfter: "promueve la mediación y la reparación." },
  { term: "estado de derecho", accept: ["estado de derecho", "el estado de derecho"], english: "rule of law", spanishDef: "principio democrático según el cual ciudadanos e instituciones están sometidos a la ley", gapBefore: "La independencia judicial resulta esencial para preservar el", gapAfter: "en toda democracia." },
  { term: "tejido asociativo", accept: ["tejido asociativo", "el tejido asociativo"], english: "network of community/civic associations", spanishDef: "conjunto de asociaciones vecinales, ONGs y clubes que cohesionan un barrio", gapBefore: "Los centros cívicos fortalecen el", gapAfter: "y combaten el aislamiento vecinal." },
  { term: "soledad no deseada", accept: ["soledad no deseada", "la soledad no deseada"], english: "unwanted loneliness", spanishDef: "aislamiento emocional involuntario frecuente entre personas mayores", gapBefore: "Los programas de convivencia intergeneracional combaten la", gapAfter: "en las grandes ciudades." },
  { term: "presupuestos participativos", accept: ["presupuestos participativos", "los presupuestos participativos"], english: "participatory municipal budgets", spanishDef: "mecanismo por el cual los vecinos proponen y votan cómo invertir fondos municipales", gapBefore: "Mediante los", gapAfter: "los jóvenes pueden decidir mejoras para sus parques y bibliotecas." },
  { term: "emancipación juvenil", accept: ["emancipación juvenil", "la emancipación juvenil"], english: "youth emancipation (leaving the parental home)", spanishDef: "independencia residencial y económica de los jóvenes adultos", gapBefore: "Los alquileres desorbitados retrasan la", gapAfter: "en España por encima de los treinta años." },
];

// ---------------------------------------------------------------------------
// Drill 4: Formal Proposal & Official-Letter Formulaic Frames
// ---------------------------------------------------------------------------

interface FormulaSlot {
  cue: string;
  before: string;
  after: string;
  accept: string[];
  display: string;
  trapWrong: string;
  trapFeedback: string;
  note: string;
}

const FORM_T1: readonly FormulaSlot[] = [
  { cue: "formal masculine greeting word (Dear)", before: "", after: "Sr. Alcalde:", accept: ["Estimado", "estimado"], display: "Estimado", trapWrong: "Querido", trapFeedback: "«Querido» is too personal for an official municipal letter; use «Estimado».", note: "Formal Spanish salutation: Estimado Sr. + apellido + colon (:)." },
  { cue: "formal feminine greeting word (Dear)", before: "", after: "Sra. Directora:", accept: ["Estimada", "estimada"], display: "Estimada", trapWrong: "Querida", trapFeedback: "Use «Estimada» (not personal «Querida») for formal letters.", note: "Match feminine gender: Estimada Sra. + apellido + colon (:)." },
  { cue: "formal header label meaning 'Subject'", before: "", after: ": Solicitud de financiación para el centro juvenil", accept: ["Asunto", "asunto"], display: "Asunto", trapWrong: "Tema", trapFeedback: "Official Spanish letters and propuestas use the standard label «Asunto:».", note: "Formal header field: Asunto: [concise topic]." },
  { cue: "formal opening reflexive phrase (I am writing/addressing myself to you — 2 words)", before: "", after: "a usted en nombre de la asociación estudiantil.", accept: ["Me dirijo", "me dirijo"], display: "Me dirijo", trapWrong: "Me escribo", trapFeedback: "Use «Me dirijo a usted» (from dirigirse a), never «me escribo».", note: "Standard formal opening: Me dirijo a usted..." },
  { cue: "formal sign-off adverb meaning 'Sincerely / Yours faithfully'", before: "Le saluda", after: ", Marta Ruiz.", accept: ["atentamente", "Atentamente"], display: "atentamente", trapWrong: "un abrazo", trapFeedback: "«Un abrazo» is informal; formal letters close with «atentamente».", note: "Standard formal sign-off: Atentamente, / Le saluda atentamente,." },
  { cue: "formal word meaning 'Enclosed / Attached' (masc. sing. or verb 'I attach')", before: "", after: "mi currículo y una carta de recomendación.", accept: ["Adjunto", "adjunto"], display: "Adjunto", trapWrong: "Pongo", trapFeedback: "Use the professional verb «Adjunto» (I attach) in cover letters.", note: "Cover letter formula: Adjunto mi currículo..." },
  { cue: "formal polite closing verb meaning 'I remain [at your disposal]' (1 word)", before: "", after: "a su entera disposición para concertar una entrevista.", accept: ["Quedo", "quedo"], display: "Quedo", trapWrong: "Estoy", trapFeedback: "The idiomatic formal closing verb is «Quedo a su entera disposición».", note: "Formal closing formula: Quedo a su entera disposición." },
  { cue: "1st-person formal appreciation verb meaning 'I thank / appreciate' (1 word)", before: "Le", after: "de antemano su tiempo y consideración.", accept: ["agradezco", "Agradezco"], display: "agradezco", trapWrong: "gracias", trapFeedback: "Use the conjugated verb «agradezco» (yo agradecer) after «Le».", note: "Formal closing: Le agradezco de antemano..." },
  { cue: "formal courtesy opening 'I am writing to you [usted]' (2 words)", before: "", after: "con el propósito de presentar nuestra propuesta cívica.", accept: ["Le escribo", "le escribo"], display: "Le escribo", trapWrong: "Te escribo", trapFeedback: "Use formal indirect object «Le» (not informal «Te») with usted.", note: "Formal opening: Le escribo con el propósito de..." },
  { cue: "formal possessive for usted in closing 'your full disposal' (1 word)", before: "Quedamos a", after: "entera disposición para ampliar esta propuesta.", accept: ["su", "Su"], display: "su", trapWrong: "tu", trapFeedback: "Formal usted requires possessive «su», never informal «tu».", note: "Possessive for usted: su entera disposición." },
];

const FORM_T1_AUD: readonly string[] = [
  "Carta formal dirigida a la alcaldía:",
  "Carta de presentación para prácticas laborales:",
  "Propuesta oficial enviada al consejo escolar:",
  "Correo institucional para una ONG nacional:",
];

const FORM_T2: readonly FormulaSlot[] = [
  { cue: "polite conditional 'it would be advisable' (1 word from convenir)", before: "Por ello,", after: "ampliar las plazas de Formación Profesional Dual.", accept: ["convendría"], display: "convendría", trapWrong: "conviene", trapFeedback: "Use the conditional of courtesy (convendría) for diplomatic formal recommendations.", note: "Condicional de cortesía: convendría + infinitivo." },
  { cue: "formal objective report frame 'it is worth highlighting' (2 words: caber + destacar)", before: "", after: "que la participación juvenil creció un quince por ciento.", accept: ["Cabe destacar", "cabe destacar"], display: "Cabe destacar", trapWrong: "Es bueno decir", trapFeedback: "Use the crisp B2–C1 report frame «Cabe destacar que...».", note: "Impersonal report starter: Cabe destacar que..." },
  { cue: "formal purpose preposition 'in order to' (4 words: con el ___ de)", before: "Escribimos", after: "proponer un programa de mentoría vecinal.", accept: ["con el fin de", "con el objeto de", "con el propósito de"], display: "con el fin de", trapWrong: "para que", trapFeedback: "Before an infinitive («proponer»), use «con el fin de» (not «para que», which requires a conjugated subjunctive).", note: "Formal purpose before infinitive: con el fin de + infinitivo." },
  { cue: "formal consequence connector 'consequently / therefore' (2 words)", before: "El alquiler bloquea la emancipación;", after: ", urge ampliar la vivienda social.", accept: ["por consiguiente", "por lo tanto"], display: "por consiguiente", trapWrong: "entonces", trapFeedback: "Upgrade conversational «entonces» to formal «por consiguiente» or «por lo tanto».", note: "Formal consequence connector: por consiguiente." },
  { cue: "formal contrast connector 'nevertheless / however' (2 words, starting with 'no')", before: "La medida supone un gasto inicial;", after: ", generará ahorro social a medio plazo.", accept: ["no obstante"], display: "no obstante", trapWrong: "pero", trapFeedback: "Elevate basic «pero» to formal «no obstante» between semicolons/commas.", note: "Formal contrast connector: no obstante." },
  { cue: "impersonal report passive 'it is recommended' (2 words)", before: "En vista de los datos,", after: "reforzar la orientación laboral en bachillerato.", accept: ["se recomienda"], display: "se recomienda", trapWrong: "yo recomiendo", trapFeedback: "Reports (informes) prefer impersonal «se recomienda» over subjective «yo recomiendo».", note: "Impersonal report recommendation: se recomienda + infinitivo." },
  { cue: "formal representative phrase 'on behalf of' (3 words)", before: "Me dirijo a usted", after: "las asociaciones juveniles del distrito.", accept: ["en nombre de"], display: "en nombre de", trapWrong: "para", trapFeedback: "Use the formal institutional phrase «en nombre de» (on behalf of).", note: "Institutional representation: en nombre de..." },
  { cue: "diplomatic conditional 'I would be grateful to you [usted]' (2 words)", before: "", after: "que considerara nuestra solicitud de audiencia.", accept: ["Le agradecería", "le agradecería"], display: "Le agradecería", trapWrong: "Te agradecería", trapFeedback: "Use formal indirect object «Le» (not informal «Te»): Le agradecería.", note: "Polite formal request: Le agradecería que + imperfecto de subjuntivo." },
  { cue: "impersonal C1 courtesy 'it would be appropriate to consider' (1 word from caber)", before: "Asimismo,", after: "plantearse incentivos fiscales para las pymes.", accept: ["cabría"], display: "cabría", trapWrong: "cabería", trapFeedback: "«Caber» has an irregular conditional stem: cabr- → cabría.", note: "Irregular conditional of caber: cabría + infinitivo." },
  { cue: "formal causal prepositional phrase 'as a result of / following' (3 words: a ___ de)", before: "", after: "las encuestas escolares, se detectó falta de información sobre FP.", accept: ["A raíz de", "a raíz de"], display: "A raíz de", trapWrong: "Porque de", trapFeedback: "«Porque» takes a verb clause; before a noun phrase use «A raíz de».", note: "Formal causal opener + noun: A raíz de..." },
];

const FORM_T2_AUD: readonly string[] = [
  "Informe técnico sobre empleabilidad:",
  "Propuesta municipal de cultura y juventud:",
  "Carta formal a la Consejería de Educación:",
  "Evaluación institucional de políticas públicas:",
];

const FORM_T3: readonly FormulaSlot[] = [
  { cue: "present subjunctive of aprobar (3rd sing.)", before: "Le solicitamos que el Ayuntamiento", after: "una partida para centros cívicos.", accept: ["apruebe"], display: "apruebe", trapWrong: "aprueba", trapFeedback: "«Solicitar que» triggers the present subjunctive (o → ue: apruebe).", note: "Influence verb + que → present subjunctive: apruebe." },
  { cue: "present subjunctive of garantizar (3rd sing., z→c)", before: "Instamos al Ministerio a que", after: "becas de transporte para el alumnado rural.", accept: ["garantice"], display: "garantice", trapWrong: "garantiza", trapFeedback: "«Instar a que» requires present subjunctive with z → c change: garantice.", note: "Verbs in -zar shift z → c before -e: garantice." },
  { cue: "present subjunctive of invertir (3rd sing., e→ie)", before: "Resulta imprescindible que la ciudad", after: "en mediación y justicia restaurativa.", accept: ["invierta"], display: "invierta", trapWrong: "invierte", trapFeedback: "Impersonal «Resulta imprescindible que» requires present subjunctive: invierta.", note: "Impersonal necessity + que → present subjunctive: invierta." },
  { cue: "present subjunctive of ofrecer (3rd sing., -cer→-zc-)", before: "Proponemos que cada instituto", after: "talleres prácticos de orientación laboral.", accept: ["ofrezca"], display: "ofrezca", trapWrong: "ofrece", trapFeedback: "«Proponer que» requires present subjunctive from yo ofrezco → ofrezca.", note: "-cer verbs take -zc- stem in subjunctive: ofrezca." },
  { cue: "present subjunctive of reducir (3rd sing., -cir→-zc-)", before: "Recomendamos que la reforma", after: "los contratos temporales abusivos.", accept: ["reduzca"], display: "reduzca", trapWrong: "reduce", trapFeedback: "«Recomendar que» triggers present subjunctive from yo reduzco → reduzca.", note: "-ducir verbs take -zc- in present subjunctive: reduzca." },
  { cue: "present subjunctive of proteger (3rd sing., g→j)", before: "Exigimos que la nueva ley", after: "el derecho a la desconexión digital.", accept: ["proteja"], display: "proteja", trapWrong: "protege", trapFeedback: "«Exigir que» triggers present subjunctive with g → j spelling: proteja.", note: "Verbs in -ger shift g → j before -a: proteja." },
  { cue: "present subjunctive of ampliar (3rd sing., with accent)", before: "Pedimos que la consejería", after: "el presupuesto destinado a la FP Dual.", accept: ["amplíe"], display: "amplíe", trapWrong: "amplía", trapFeedback: "«Pedir que» triggers present subjunctive with written accent on í: amplíe.", note: "Present subjunctive of ampliar keeps hiatus accent: amplíe." },
  { cue: "present subjunctive of establecer (3rd sing., -cer→-zc-)", before: "Sugerimos que el consistorio", after: "presupuestos participativos juveniles.", accept: ["establezca"], display: "establezca", trapWrong: "establece", trapFeedback: "«Sugerir que» requires present subjunctive: establezca.", note: "Yo establezco → present subjunctive establezca." },
  { cue: "present subjunctive of reforzar (3rd sing., o→ue & z→c)", before: "Es urgente que el gobierno", after: "la inspección contra la economía sumergida.", accept: ["refuerce"], display: "refuerce", trapWrong: "refuerza", trapFeedback: "Apply both o → ue stem change and z → c spelling in subjunctive: refuerce.", note: "Stem change o→ue + z→c before -e: refuerce." },
  { cue: "present subjunctive of resultar (3rd sing. after de ahí que)", before: "El alquiler supera el salario medio; de ahí que", after: "prioritario ampliar la vivienda social.", accept: ["resulte"], display: "resulte", trapWrong: "resulta", trapFeedback: "«De ahí que» ALWAYS triggers the subjunctive: resulte.", note: "C1 connector de ahí que + subjuntivo: resulte." },
];

const FORM_T3_AUD: readonly string[] = [
  "Redacción de propuesta HL (Criterio A):",
  "Carta formal al Ministerio (subjuntivo institucional):",
  "Resolución del Consejo Estudiantil:",
  "Documento de recomendaciones públicas:",
];

// ---------------------------------------------------------------------------
// Drill 5: [HL] Condicional compuesto (habría + participio) policy evaluation
// ---------------------------------------------------------------------------

interface CondCompItem {
  subject: string;
  aux: string;
  inf: string;
  participle: string;
  wrongParticiple: string;
  wrongFeedback: string;
  context: string;
}

const HL_T1: readonly CondCompItem[] = [
  { subject: "el ministerio", aux: "habría", inf: "resolver", participle: "resuelto", wrongParticiple: "habría resolvido", wrongFeedback: "«Resolver» has an irregular past participle: resuelto.", context: "el conflicto docente antes de la huelga" },
  { subject: "el ayuntamiento", aux: "habría", inf: "poner", participle: "puesto", wrongParticiple: "habría ponido", wrongFeedback: "«Poner» has an irregular past participle: puesto.", context: "en marcha el centro de mediación juvenil" },
  { subject: "la reforma laboral", aux: "habría", inf: "hacer", participle: "hecho", wrongParticiple: "habría hacido", wrongFeedback: "«Hacer» has an irregular past participle: hecho.", context: "más atractivo el contrato indefinido" },
  { subject: "el plan educativo", aux: "habría", inf: "abrir", participle: "abierto", wrongParticiple: "habría abrido", wrongFeedback: "«Abrir» has an irregular past participle: abierto.", context: "nuevas vías de movilidad social" },
  { subject: "la subvención", aux: "habría", inf: "cubrir", participle: "cubierto", wrongParticiple: "habría cubrido", wrongFeedback: "«Cubrir» has an irregular past participle: cubierto.", context: "los gastos de transporte universitario" },
  { subject: "la ley de paridad", aux: "habría", inf: "romper", participle: "roto", wrongParticiple: "habría rompido", wrongFeedback: "«Romper» has an irregular past participle: roto.", context: "el techo de cristal en el sector público" },
  { subject: "las instituciones", aux: "habrían", inf: "reducir", participle: "reducido", wrongParticiple: "hubieran reducido", wrongFeedback: "Main clause requires conditional compound «habrían», not «hubieran».", context: "notablemente el paro juvenil estructural" },
  { subject: "los municipios", aux: "habrían", inf: "devolver", participle: "devuelto", wrongParticiple: "habrían devolvido", wrongFeedback: "«Devolver» follows volver → devuelto.", context: "la confianza ciudadana en los servicios locales" },
  { subject: "los redactores", aux: "habrían", inf: "escribir", participle: "escrito", wrongParticiple: "habrían escribido", wrongFeedback: "«Escribir» has an irregular past participle: escrito.", context: "una propuesta más viable y equitativa" },
  { subject: "las autoridades", aux: "habrían", inf: "descubrir", participle: "descubierto", wrongParticiple: "habrían descubrido", wrongFeedback: "«Descubrir» follows cubrir → descubierto.", context: "los abusos de la economía sumergida a tiempo" },
];

const HL_T1_COND: readonly string[] = [
  "Si hubiera existido consenso político en 2019,",
  "De haber escuchado a las asociaciones juveniles,",
  "Si se hubiera aprobado el presupuesto a tiempo,",
  "De haber actuado con mayor previsión institucional,",
];

interface HlT2Item {
  siClause: string;
  deHaber: string;
  main: string;
  trapWrong: string;
  trapFeedback: string;
  note: string;
}

const HL_T2: readonly HlT2Item[] = [
  { siClause: "Si hubieran regulado los alquileres", deHaber: "De haber regulado", main: "habrían facilitado la emancipación juvenil.", trapWrong: "De regular", trapFeedback: "«De regular» replaces Type 2 (present/future); past Type 3 requires «De haber regulado».", note: "Replace «Si hubieran + participio» with «De haber + participio»." },
  { siClause: "Si hubiera invertido en FP Dual", deHaber: "De haber invertido", main: "habría frenado la fuga de cerebros.", trapWrong: "De invertir", trapFeedback: "Use compound infinitive «De haber invertido» for past counterfactuals.", note: "C1 condensation: De haber + invertido." },
  { siClause: "Si hubieran ampliado las becas salario", deHaber: "De haber ampliado", main: "habrían reducido la deserción universitaria.", trapWrong: "De ampliar", trapFeedback: "Past counterfactual requires «De haber ampliado», not simple «De ampliar».", note: "C1 condensation: De haber + ampliado." },
  { siClause: "Si hubiera abierto una mesa de diálogo", deHaber: "De haber abierto", main: "habría evitado la huelga del profesorado.", trapWrong: "De haber abrido", trapFeedback: "«Abrir» takes irregular participle «abierto»: De haber abierto.", note: "Irregular participle: De haber abierto." },
  { siClause: "Si hubieran puesto en marcha el programa", deHaber: "De haber puesto", main: "habrían combatido la soledad no deseada.", trapWrong: "De haber ponido", trapFeedback: "«Poner» takes irregular participle «puesto»: De haber puesto.", note: "Irregular participle: De haber puesto." },
  { siClause: "Si hubiera resuelto la brecha digital", deHaber: "De haber resuelto", main: "habría fortalecido el ascensor social.", trapWrong: "De haber resolvido", trapFeedback: "«Resolver» takes irregular participle «resuelto»: De haber resuelto.", note: "Irregular participle: De haber resuelto." },
  { siClause: "Si hubieran hecho inspecciones rigurosas", deHaber: "De haber hecho", main: "habrían frenado los contratos temporales abusivos.", trapWrong: "De haber hacido", trapFeedback: "«Hacer» takes irregular participle «hecho»: De haber hecho.", note: "Irregular participle: De haber hecho." },
  { siClause: "Si hubiera protegido el derecho al descanso", deHaber: "De haber protegido", main: "habría mejorado la conciliación laboral.", trapWrong: "De proteger", trapFeedback: "Use «De haber protegido» to preserve the past Type 3 time frame.", note: "C1 condensation: De haber + protegido." },
  { siClause: "Si hubieran fomentado la mediación escolar", deHaber: "De haber fomentado", main: "habrían disminuido la reincidencia juvenil.", trapWrong: "De fomentar", trapFeedback: "Use compound infinitive «De haber fomentado» for Type 3 past critique.", note: "C1 condensation: De haber + fomentado." },
  { siClause: "Si hubiera cubierto el transporte rural", deHaber: "De haber cubierto", main: "habría garantizado la igualdad de oportunidades.", trapWrong: "De haber cubrido", trapFeedback: "«Cubrir» takes irregular participle «cubierto»: De haber cubierto.", note: "Irregular participle: De haber cubierto." },
];

const HL_T2_TAG: readonly string[] = [
  "[HL · Propuesta educativa]",
  "[HL · Informe sobre desigualdad]",
  "[HL · Carta formal al Ministerio]",
  "[HL · Análisis socioeconómico]",
];

interface HlT3Item {
  opener: string;
  inf: string;
  subjectNoun: string;
  plural: boolean;
  participle: string;
  trapWrong: string;
  trapFeedback: string;
}

const HL_T3: readonly HlT3Item[] = [
  { opener: "De haberse prohibido las prácticas gratuitas,", inf: "fomentar", subjectNoun: "la igualdad de oportunidades", plural: false, participle: "fomentado", trapWrong: "se habrían fomentado", trapFeedback: "Subject «la igualdad de oportunidades» is singular, so passive se takes «se habría fomentado»." },
  { opener: "De haberse reforzado la inspección laboral,", inf: "evitar", subjectNoun: "numerosos abusos contractuales", plural: true, participle: "evitado", trapWrong: "se habría evitado", trapFeedback: "Subject «numerosos abusos contractuales» is PLURAL, so passive se takes «se habrían evitado»." },
  { opener: "De haberse regulado el alquiler turístico,", inf: "garantizar", subjectNoun: "el acceso a la vivienda juvenil", plural: false, participle: "garantizado", trapWrong: "se habrían garantizado", trapFeedback: "Subject «el acceso» is singular → «se habría garantizado»." },
  { opener: "De haberse aprobado los presupuestos participativos,", inf: "financiar", subjectNoun: "dos nuevos centros cívicos", plural: true, participle: "financiado", trapWrong: "se habría financiado", trapFeedback: "Subject «dos nuevos centros cívicos» is PLURAL → «se habrían financiado»." },
  { opener: "De haberse ampliado el Plan Ceibal en la región,", inf: "reducir", subjectNoun: "la brecha digital rural", plural: false, participle: "reducido", trapWrong: "se habrían reducido", trapFeedback: "Subject «la brecha digital rural» is singular → «se habría reducido»." },
  { opener: "De haberse impulsado la justicia restaurativa,", inf: "resolver", subjectNoun: "múltiples conflictos vecinales", plural: true, participle: "resuelto", trapWrong: "se habría resuelto", trapFeedback: "Plural subject «múltiples conflictos vecinales» takes «se habrían resuelto»." },
  { opener: "De haberse creado bonificaciones para pymes,", inf: "generar", subjectNoun: "miles de contratos indefinidos", plural: true, participle: "generado", trapWrong: "se habría generado", trapFeedback: "Plural subject «miles de contratos indefinidos» takes «se habrían generado»." },
  { opener: "De haberse apoyado la convivencia intergeneracional,", inf: "mitigar", subjectNoun: "la soledad no deseada", plural: false, participle: "mitigado", trapWrong: "se habrían mitigado", trapFeedback: "Singular subject «la soledad no deseada» takes «se habría mitigado»." },
  { opener: "De haberse consensuado la reforma educativa,", inf: "abrir", subjectNoun: "nuevos itinerarios de FP Dual", plural: true, participle: "abierto", trapWrong: "se habría abierto", trapFeedback: "Plural subject «nuevos itinerarios» takes «se habrían abierto» (irregular participle abierto)." },
  { opener: "De haberse protegido el derecho a la desconexión,", inf: "mejorar", subjectNoun: "el bienestar laboral del personal", plural: false, participle: "mejorado", trapWrong: "se habrían mejorado", trapFeedback: "Singular subject «el bienestar laboral» takes «se habría mejorado»." },
];

const HL_T3_LABEL: readonly string[] = [
  "Evaluación institucional con pasiva refleja (3 palabras, incluye «se»):",
  "Propuesta HL — concordancia de «se habría / se habrían + participio» (3 palabras):",
  "Informe C1 — completa con pasiva refleja en condicional compuesto (3 palabras):",
  "Análisis de políticas públicas — «se habría / se habrían + participio» (3 palabras):",
];

export const drills: Drill[] = [
  {
    id: "4-organizacion-social.tu-a-usted",
    topicId: "4-organizacion-social",
    title: "Register Conversion: `tú` → `usted`",
    level: 1,
    ibLevel: "SL",
    guideRef: "relaciones-comunidad-voluntariado",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const traps: Trap[] = [];
      if (tier === 1) {
        const item = rng.pick(TU_USTED_T1);
        const ctx = rng.pick(TU_USTED_T1_CTX);
        traps.push({
          spec: { type: "text", accept: [item.trapWrong] },
          feedback: item.trapFeedback,
        });
        return {
          prompt: `Convert the bolded present-indicative verb from informal *tú* to formal **usted** (1 word): *«Sabemos que **${item.tu}** (${item.inf}) ${ctx}.»*`,
          answer: { type: "text", accept: [item.usted], display: item.usted },
          traps,
          hint: "Formal *usted* always uses the 3rd person singular verb form (drop the final *-s*).",
          solution: [
            `Informal *tú* form: **${item.tu}** (${item.inf}).`,
            `${item.rule} Formal **usted** form: **${item.usted}**.`,
          ],
        };
      }
      if (tier === 2) {
        const item = rng.pick(TU_USTED_T2);
        const ctx = rng.pick(TU_USTED_T2_CTX);
        traps.push({
          spec: { type: "text", accept: [item.trapWrong] },
          feedback: item.trapFeedback,
        });
        return {
          prompt: `Convert the bolded imperative from *tú* to formal **usted** (${ctx}): *«**${item.tu}**»* (${item.inf}).`,
          answer: { type: "text", accept: [item.usted], display: item.usted },
          traps,
          hint: "Both affirmative and negative *usted* imperatives use the 3rd person singular **present subjunctive**.",
          solution: [
            `Informal *tú* command: **${item.tu}** (${item.inf}).`,
            `${item.rule} Formal **usted** imperative: **${item.usted}**.`,
          ],
        };
      }
      const item = rng.pick(TU_USTED_T3);
      const ctx = rng.pick(TU_USTED_T3_CTX);
      traps.push({
        spec: { type: "text", accept: [item.trapWrong] },
        feedback: item.trapFeedback,
      });
      return {
        prompt: `Convert the entire bolded phrase from *tú* to formal **usted** (${ctx}): *«**${item.tu}**»* (${item.inf}).`,
        answer: { type: "text", accept: [item.usted], display: item.usted },
        traps,
        hint: "Audit BOTH pronouns/possessives (*te → le/se*, *tu → su*) AND the verb ending/accent mark.",
        solution: [
          `Informal phrase: **${item.tu}**.`,
          `${item.rule} Formal **usted** equivalent: **${item.usted}**.`,
        ],
      };
    },
  },
  {
    id: "4-organizacion-social.clausulas-si",
    topicId: "4-organizacion-social",
    title: "`Si`-Clauses (Types 1, 2 & 3) for Social Reforms",
    level: 2,
    ibLevel: "SL",
    guideRef: "ley-orden-ciudadania",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const traps: Trap[] = [];
      const pool = tier === 1 ? SI_T1 : tier === 2 ? SI_T2 : SI_T3;
      const leads = tier === 1 ? SI_T1_LEAD : tier === 2 ? SI_T2_LEAD : SI_T3_LEAD;
      const item = rng.pick(pool);
      const lead = rng.pick(leads);
      traps.push({
        spec: { type: "text", accept: [item.trapWrong] },
        feedback: item.trapFeedback,
      });
      const hint =
        tier === 1
          ? "Type 1: `Si + presente de indicativo → futuro simple`. Never put subjunctive or future after *si*."
          : tier === 2
            ? "Type 2 (SI-RA → Í-A): `Si + imperfecto de subjuntivo (-ra/-se) → condicional simple (-ía)`."
            : "Type 3: `Si + hubiera/hubiese + participio → habría + participio`. Never put *habría* after *si*.";
      return {
        prompt: `${lead} Complete with the correct form of **${item.inf}**: *«${item.before} ______ ${item.after}»*`,
        answer: { type: "text", accept: item.accept, display: item.display },
        traps,
        hint,
        solution: [
          item.rule,
          `Correct form: **${item.display}**${item.accept.length > 1 ? ` (also accepted: ${item.accept.slice(1).join(", ")})` : ""}.`,
        ],
      };
    },
  },
  {
    id: "4-organizacion-social.lexico-educacion-trabajo",
    topicId: "4-organizacion-social",
    title: "B2–C1 Education, Work & Civic Lexicon",
    level: 1,
    ibLevel: "SL",
    guideRef: "educacion-mundo-laboral",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const traps: Trap[] = [];
      const pool = tier === 1 ? LEX_T1 : tier === 2 ? LEX_T2 : LEX_T3;
      const item = rng.pick(pool);
      const style = rng.int(0, 3);
      if (item.trapWrong && item.trapFeedback) {
        traps.push({
          spec: { type: "text", accept: [item.trapWrong] },
          feedback: item.trapFeedback,
        });
      }
      let prompt = "";
      if (style === 0) {
        prompt = `Give the authentic Spanish B2–C1 term for **«${item.english}»**: *«${item.gapBefore} ______ ${item.gapAfter}»*`;
      } else if (style === 1) {
        prompt = `Identify the Spanish Theme 4 term defined as: *«${item.spanishDef}»* (English gloss: *${item.english}*).`;
      } else if (style === 2) {
        prompt = `Complete this authentic Paper 1 sentence with the exact Spanish expression for *${item.english}*: *«${item.gapBefore} ______ ${item.gapAfter}»*`;
      } else {
        prompt = `Upgrade your Theme 4 vocabulary — write the Spanish equivalent of **${item.english}** (*${item.spanishDef}*).`;
      }
      return {
        prompt,
        answer: { type: "text", accept: item.accept, display: item.term },
        traps,
        hint: `Think of the exact Spanish Theme 4 collocation for *${item.english}* (${item.term.split(" ").length} word${item.term.split(" ").length === 1 ? "" : "s"}).`,
        solution: [
          `English gloss: *${item.english}* — *${item.spanishDef}*.`,
          `Authentic Spanish term: **${item.term}** (*«${item.gapBefore} **${item.term}** ${item.gapAfter}»*).`,
        ],
      };
    },
  },
  {
    id: "4-organizacion-social.formulas-carta-propuesta",
    topicId: "4-organizacion-social",
    title: "Formal Letter & Proposal Formulaic Frames",
    level: 2,
    ibLevel: "SL",
    guideRef: "relaciones-comunidad-voluntariado",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const traps: Trap[] = [];
      const pool = tier === 1 ? FORM_T1 : tier === 2 ? FORM_T2 : FORM_T3;
      const auds = tier === 1 ? FORM_T1_AUD : tier === 2 ? FORM_T2_AUD : FORM_T3_AUD;
      const item = rng.pick(pool);
      const aud = rng.pick(auds);
      traps.push({
        spec: { type: "text", accept: [item.trapWrong] },
        feedback: item.trapFeedback,
      });
      const sentence = `${item.before ? `${item.before} ` : ""}______${item.after ? ` ${item.after}` : ""}`;
      return {
        prompt: `${aud} Fill the blank using the ${item.cue}: *«${sentence}»*`,
        answer: { type: "text", accept: item.accept, display: item.display },
        traps,
        hint: item.note,
        solution: [
          item.note,
          `Completed formal phrase: **${item.display}**.`,
        ],
      };
    },
  },
  {
    id: "4-organizacion-social.condicional-compuesto-hl",
    topicId: "4-organizacion-social",
    title: "[HL] Policy Evaluation: `habría + participio` & `de haber + participio`",
    level: 3,
    ibLevel: "HL",
    guideRef: "instituciones-desigualdad-hl",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const traps: Trap[] = [];
      if (tier === 1) {
        const item = rng.pick(HL_T1);
        const cond = rng.pick(HL_T1_COND);
        const ans = `${item.aux} ${item.participle}`;
        traps.push({
          spec: { type: "text", accept: [item.wrongParticiple] },
          feedback: item.wrongFeedback,
        });
        return {
          prompt: `[HL] Complete the **condicional compuesto** (2 words) of **${item.inf}**: *«${cond} ${item.subject} ______ ${item.context}.»*`,
          answer: { type: "text", accept: [ans], display: ans },
          traps,
          hint: `Combine conditional of *haber* matching *${item.subject}* (**${item.aux}**) + past participle of **${item.inf}** (check for irregulars!).`,
          solution: [
            `Subject *${item.subject}* → **${item.aux}**.`,
            `Past participle of *${item.inf}* → **${item.participle}**.`,
            `Full *condicional compuesto*: **${ans}**.`,
          ],
        };
      }
      if (tier === 2) {
        const item = rng.pick(HL_T2);
        const tag = rng.pick(HL_T2_TAG);
        traps.push({
          spec: { type: "text", accept: [item.trapWrong] },
          feedback: item.trapFeedback,
        });
        return {
          prompt: `${tag} Condense the bolded Type 3 *si*-clause into the C1 **De haber + participio** frame (3 words): *«**${item.siClause}**, ${item.main}»*`,
          answer: {
            type: "text",
            accept: [item.deHaber, item.deHaber.toLowerCase()],
            display: item.deHaber,
          },
          traps,
          hint: "Replace *Si hubiera(n)* with invariable **De haber** + the exact past participle.",
          solution: [
            item.note,
            `C1 condensed opener: **${item.deHaber}**.`,
          ],
        };
      }
      const item = rng.pick(HL_T3);
      const label = rng.pick(HL_T3_LABEL);
      const ans = `se ${item.plural ? "habrían" : "habría"} ${item.participle}`;
      traps.push({
        spec: { type: "text", accept: [item.trapWrong] },
        feedback: item.trapFeedback,
      });
      return {
        prompt: `${label} Verb: **${item.inf}**. *«${item.opener} ______ ${item.subjectNoun}.»*`,
        answer: { type: "text", accept: [ans], display: ans },
        traps,
        hint: `Check whether the grammatical subject (*${item.subjectNoun}*) is singular (**se habría**) or plural (**se habrían**).`,
        solution: [
          `Grammatical subject *«${item.subjectNoun}»* is **${item.plural ? "plural" : "singular"}** → **se ${item.plural ? "habrían" : "habría"}**.`,
          `Add past participle of *${item.inf}* (**${item.participle}**): **${ans}**.`,
        ],
      };
    },
  },
];
