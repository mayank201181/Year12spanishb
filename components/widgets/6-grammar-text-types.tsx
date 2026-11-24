"use client";

import { useMemo, useState } from "react";
import { renderInline } from "../Rich";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: SUBJUNCTIVE MOOD DECISION-TREE LAB
// ============================================================================

type ClauseType =
  | "weirdo"
  | "escapa"
  | "future-time"
  | "past-time"
  | "indefinite"
  | "certainty";

type SubjectMode = "different" | "same";
type TenseZone = "present" | "past";
type VerbId = "tener" | "poder" | "saber" | "hacer" | "ir" | "dormir";

interface VerbForms {
  inf: string;
  gloss: string;
  presInd: string;
  pastInd: string;
  presSubj: string;
  impSubjRa: string;
  impSubjSe: string;
  presIndPlural: string;
  pastIndPlural: string;
  presSubjPlural: string;
  impSubjPluralRa: string;
  objectPhrase: string;
  englishAction: string;
  stemNote: string;
}

const VERB_BANK: Record<VerbId, VerbForms> = {
  tener: {
    inf: "tener",
    gloss: "to have",
    presInd: "tiene",
    pastInd: "tuvo",
    presSubj: "tenga",
    impSubjRa: "tuviera",
    impSubjSe: "tuviese",
    presIndPlural: "tenemos",
    pastIndPlural: "tuvimos",
    presSubjPlural: "tengamos",
    impSubjPluralRa: "tuviéramos",
    objectPhrase: "acceso gratuito a la biblioteca",
    englishAction: "have free access to the library",
    stemNote: "Present subj. uses yo-stem teng- (tenga/tengamos); imperfect subj. uses preterite tuvieron → tuviera / tuviéramos.",
  },
  poder: {
    inf: "poder",
    gloss: "to be able to",
    presInd: "puede",
    pastInd: "pudo",
    presSubj: "pueda",
    impSubjRa: "pudiera",
    impSubjSe: "pudiese",
    presIndPlural: "podemos",
    pastIndPlural: "pudimos",
    presSubjPlural: "podamos",
    impSubjPluralRa: "pudiéramos",
    objectPhrase: "participar en el debate escolar",
    englishAction: "participate in the school debate",
    stemNote: "Boot stem-change o → ue in present subj. (pueda, NO change in podamos); imperfect subj. from pudieron → pudiera.",
  },
  saber: {
    inf: "saber",
    gloss: "to know",
    presInd: "sabe",
    pastInd: "supo",
    presSubj: "sepa",
    impSubjRa: "supiera",
    impSubjSe: "supiese",
    presIndPlural: "sabemos",
    pastIndPlural: "supimos",
    presSubjPlural: "sepamos",
    impSubjPluralRa: "supiéramos",
    objectPhrase: "distinguir noticias falsas de fuentes fiables",
    englishAction: "tell fake news apart from reliable sources",
    stemNote: "DISHES irregular in present subj. (sepa/sepamos); imperfect subj. from irregular preterite supieron → supiera.",
  },
  hacer: {
    inf: "hacer",
    gloss: "to do / make",
    presInd: "hace",
    pastInd: "hizo",
    presSubj: "haga",
    impSubjRa: "hiciera",
    impSubjSe: "hiciese",
    presIndPlural: "hacemos",
    pastIndPlural: "hicimos",
    presSubjPlural: "hagamos",
    impSubjPluralRa: "hiciéramos",
    objectPhrase: "una propuesta realista al ayuntamiento",
    englishAction: "make a realistic proposal to the council",
    stemNote: "-go yo-stem hag- in present subj. (haga/hagamos); imperfect subj. from hicieron → hiciera / hiciéramos.",
  },
  ir: {
    inf: "ir",
    gloss: "to go",
    presInd: "va",
    pastInd: "fue",
    presSubj: "vaya",
    impSubjRa: "fuera",
    impSubjSe: "fuese",
    presIndPlural: "vamos",
    pastIndPlural: "fuimos",
    presSubjPlural: "vayamos",
    impSubjPluralRa: "fuéramos",
    objectPhrase: "en transporte público al campus",
    englishAction: "go to campus by public transport",
    stemNote: "DISHES irregular in present subj. (vaya/vayamos); imperfect subj. from preterite fueron → fuera / fuéramos.",
  },
  dormir: {
    inf: "dormir",
    gloss: "to sleep",
    presInd: "duerme",
    pastInd: "durmió",
    presSubj: "duerma",
    impSubjRa: "durmiera",
    impSubjSe: "durmiese",
    presIndPlural: "dormimos",
    pastIndPlural: "durmimos",
    presSubjPlural: "durmamos",
    impSubjPluralRa: "durmiéramos",
    objectPhrase: "al menos ocho horas sin pantallas",
    englishAction: "sleep at least eight hours without screens",
    stemNote: "-ir double stem-changer! Present subj. nosotros shifts o → u (durmamos); imperfect subj. from durmieron → durmiera.",
  },
};

type MoodOutcome = "infinitive" | "indicative" | "pres-subj" | "imp-subj";

interface DecisionResult {
  outcome: MoodOutcome;
  outcomeLabel: string;
  tone: "brand" | "good" | "bad" | "ink";
  triggerPart: string;
  verbPart: string;
  restPart: string;
  gloss: string;
  rule: string;
  trap: string;
  subjectCheckApplies: boolean;
}

function SubjunctiveDecisionLab() {
  const [clause, setClause] = useState<ClauseType>("weirdo");
  const [subject, setSubject] = useState<SubjectMode>("different");
  const [tense, setTense] = useState<TenseZone>("present");
  const [verbId, setVerbId] = useState<VerbId>("tener");

  const result: DecisionResult = useMemo(() => {
    const v = VERB_BANK[verbId];

    // 1. Certainty / Fact -> Always Indicative
    if (clause === "certainty") {
      const verbPart = tense === "present" ? v.presInd : v.pastInd;
      return {
        outcome: "indicative",
        outcomeLabel: tense === "present" ? "Present Indicative" : "Preterite Indicative",
        tone: "ink",
        triggerPart: tense === "present" ? "Es evidente que el alumnado" : "Fue evidente que el alumnado",
        verbPart,
        restPart: v.objectPhrase + ".",
        gloss:
          tense === "present"
            ? `It is obvious that the student body ${v.gloss === "to be able to" ? "can" : "does"} ${v.englishAction}.`
            : `It was obvious that the student body acted to ${v.englishAction}.`,
        rule: "Impersonal expressions of **certainty** (*es evidente / obvio / verdad que*, *creo que*) declare facts → **Indicative**, NEVER subjunctive!",
        trap: `Don’t let “es + adjective + que” fool you! Only subjective/doubtful impersonal triggers take subjunctive; certainty stays in the indicative (${verbPart}).`,
        subjectCheckApplies: false,
      };
    }

    // 2. Past / Habitual Time Clause -> Always Indicative
    if (clause === "past-time") {
      return {
        outcome: "indicative",
        outcomeLabel: tense === "present" ? "Habitual Present Indicative" : "Completed Preterite Indicative",
        tone: "ink",
        triggerPart:
          tense === "present"
            ? "Todos los lunes, cuando el grupo"
            : "Ayer, en cuanto la delegada",
        verbPart: tense === "present" ? v.presInd : v.pastInd,
        restPart:
          tense === "present"
            ? `${v.objectPhrase}, mejora la convivencia.`
            : `${v.objectPhrase}, anunció el acuerdo.`,
        gloss:
          tense === "present"
            ? `Every Monday, when the group manages to ${v.englishAction}, community life improves.`
            : `Yesterday, as soon as the delegate managed to ${v.englishAction}, she announced the agreement.`,
        rule: "Time clauses (*cuando, en cuanto, hasta que*) describing **habitual routines** or **completed past facts** ALWAYS take the **Indicative**.",
        trap: "Only *uncompleted future* time clauses take the subjunctive — never use subjunctive after *cuando* for something that already happened yesterday!",
        subjectCheckApplies: false,
      };
    }

    // 3. WEIRDO Noun Clause
    if (clause === "weirdo") {
      if (subject === "same") {
        return {
          outcome: "infinitive",
          outcomeLabel: "Infinitive (Drop “que”!)",
          tone: "good",
          triggerPart: tense === "present" ? "Esperamos" : "Esperábamos",
          verbPart: v.inf,
          restPart: v.objectPhrase + ".",
          gloss:
            tense === "present"
              ? `We hope to ${v.englishAction}.`
              : `We hoped to ${v.englishAction}.`,
          rule: "No subject change (*nosotros* hopes *nosotros* acts) → drop *que* completely and use the **Infinitive**.",
          trap: `Writing “Esperamos que ${v.presSubjPlural}…” when the subject stays the same is a classic B1 hyper-correction.`,
          subjectCheckApplies: true,
        };
      }
      if (tense === "present") {
        return {
          outcome: "pres-subj",
          outcomeLabel: "Present Subjunctive",
          tone: "brand",
          triggerPart: "El consejo escolar recomienda que todos nosotros",
          verbPart: v.presSubjPlural,
          restPart: v.objectPhrase + ".",
          gloss: `The school council recommends that we all ${v.englishAction}.`,
          rule: `WEIRDO trigger (*recomienda que*) + **subject change** + Present-Zone main verb → **Present Subjunctive** (*${v.presSubjPlural}*). ${v.stemNote}`,
          trap: `Avoid indicative *${v.presIndPlural}* after *recomienda que* — recommendations with a new subject require the subjunctive.`,
          subjectCheckApplies: true,
        };
      }
      return {
        outcome: "imp-subj",
        outcomeLabel: "Imperfect Subjunctive (-ra / -se)",
        tone: "brand",
        triggerPart: "El consejo escolar recomendó que todos nosotros",
        verbPart: v.impSubjPluralRa,
        restPart: v.objectPhrase + ".",
        gloss: `The school council recommended that we all ${v.englishAction}.`,
        rule: `WEIRDO trigger in the **Past Zone** (*recomendó que*) + subject change → sequence of tenses shifts to **Imperfect Subjunctive** (*${v.impSubjPluralRa}*). Always accent *nosotros*!`,
        trap: `Leaving *${v.presSubjPlural}* after past *recomendó* breaks sequence of tenses (*concordancia temporal*); forgetting the written accent on *nosotros* loses accuracy.`,
        subjectCheckApplies: true,
      };
    }

    // 4. ESCAPA Adverbial Clause (para que / antes de que)
    if (clause === "escapa") {
      if (subject === "same") {
        return {
          outcome: "infinitive",
          outcomeLabel: "Infinitive (Drop “que”!)",
          tone: "good",
          triggerPart: tense === "present" ? "Trabajamos juntos para" : "Trabajamos juntos ayer para",
          verbPart: v.inf,
          restPart: v.objectPhrase + ".",
          gloss: `We work(ed) together in order to ${v.englishAction}.`,
          rule: "With *para / antes de / sin*, when BOTH clauses share the **same subject**, drop *que* and use the **Infinitive**.",
          trap: `Never write “Trabajamos para que ${v.presSubjPlural}…” when *nosotros* is the subject of both verbs — simplify to *para ${v.inf}*!`,
          subjectCheckApplies: true,
        };
      }
      if (tense === "present") {
        return {
          outcome: "pres-subj",
          outcomeLabel: "Present Subjunctive (ESCAPA)",
          tone: "brand",
          triggerPart: "Impulsamos esta reforma para que cada estudiante",
          verbPart: v.presSubj,
          restPart: v.objectPhrase + ".",
          gloss: `We are driving this reform so that each student may ${v.englishAction}.`,
          rule: `**Para que** belongs to **ESCAPA** (ALWAYS subjunctive when subjects differ!). Present-Zone main verb (*impulsamos*) → **Present Subjunctive** (*${v.presSubj}*). ${v.stemNote}`,
          trap: `Indicative *${v.presInd}* is 100% ungrammatical after any ESCAPA conjunction (*en caso de que, sin que, con tal de que, antes de que, para que, a menos que*).`,
          subjectCheckApplies: true,
        };
      }
      return {
        outcome: "imp-subj",
        outcomeLabel: "Imperfect Subjunctive (ESCAPA)",
        tone: "brand",
        triggerPart: "Impulsaron aquella reforma para que cada estudiante",
        verbPart: `${v.impSubjRa} / ${v.impSubjSe}`,
        restPart: v.objectPhrase + ".",
        gloss: `They drove that reform so that each student might ${v.englishAction}.`,
        rule: `**Para que** (ESCAPA) after a **Past-Zone** main verb (*impulsaron*) → **Imperfect Subjunctive** (*${v.impSubjRa}* or *${v.impSubjSe}*).`,
        trap: "Keep main-clause and subordinate-clause tense zones aligned: Past main verb → Imperfect Subjunctive.",
        subjectCheckApplies: true,
      };
    }

    // 5. Future Time Clause (cuando / en cuanto)
    if (clause === "future-time") {
      if (tense === "present") {
        return {
          outcome: "pres-subj",
          outcomeLabel: "Present Subjunctive (Future Time)",
          tone: "brand",
          triggerPart: "Cuando el equipo",
          verbPart: v.presSubj,
          restPart: `${v.objectPhrase}, publicaremos los resultados.`,
          gloss: `When the team manages to ${v.englishAction}, we will publish the results.`,
          rule: `Time conjunction (*cuando / en cuanto / tan pronto como*) pointing to an **uncompleted future event** ALWAYS takes the **Present Subjunctive** (*${v.presSubj}*).`,
          trap: "NEVER put the Spanish future tense right after *cuando*! (“Cuando tendrá / podrá” is one of the top post-IGCSE exam errors.)",
          subjectCheckApplies: false,
        };
      }
      return {
        outcome: "imp-subj",
        outcomeLabel: "Imperfect Subjunctive (Future-in-Past)",
        tone: "brand",
        triggerPart: "Prometieron avisarnos en cuanto el centro",
        verbPart: `${v.impSubjRa} / ${v.impSubjSe}`,
        restPart: v.objectPhrase + ".",
        gloss: `They promised to notify us as soon as the centre could ${v.englishAction}.`,
        rule: `An **uncompleted action viewed from the past** (*prometieron… en cuanto…*) shifts from Present Subjunctive into **Imperfect Subjunctive** (*${v.impSubjRa}*).`,
        trap: "Do not confuse a completed past fact (*en cuanto llegó*) with a projected future-in-the-past (*prometió llamar en cuanto llegara*).",
        subjectCheckApplies: false,
      };
    }

    // 6. Indefinite / Non-existent Antecedent
    if (tense === "present") {
      return {
        outcome: "pres-subj",
        outcomeLabel: "Present Subjunctive (Unknown Antecedent)",
        tone: "brand",
        triggerPart: "Buscamos un instituto bilingüe que",
        verbPart: v.presSubj,
        restPart: v.objectPhrase + ".",
        gloss: `We are looking for any bilingual school that might ${v.englishAction}.`,
        rule: `The antecedent (*un instituto bilingüe*) is **indefinite/hypothetical** (we don’t know yet if one exists) → **Present Subjunctive** (*${v.presSubj}*).`,
        trap: `Switching to indicative (*${v.presInd}*) changes the meaning completely — it tells the reader you already know one specific school exists!`,
        subjectCheckApplies: false,
      };
    }
    return {
      outcome: "imp-subj",
      outcomeLabel: "Imperfect Subjunctive (Unknown Antecedent)",
      tone: "brand",
      triggerPart: "Buscábamos un instituto bilingüe que",
      verbPart: `${v.impSubjRa} / ${v.impSubjSe}`,
      restPart: v.objectPhrase + ".",
      gloss: `We were looking for any bilingual school that might ${v.englishAction}.`,
      rule: `An indefinite/hypothetical antecedent embedded inside a **Past-Zone** search (*buscábamos…*) takes **Imperfect Subjunctive** (*${v.impSubjRa}*).`,
      trap: "Remember: unknown/negated antecedents follow the same Past-Zone tense shift as WEIRDO clauses.",
      subjectCheckApplies: false,
    };
  }, [clause, subject, tense, verbId]);

  const activeNode = (on: boolean, color: string) =>
    on
      ? { fill: color, stroke: color, text: "#ffffff" }
      : { fill: "#ffffff", stroke: "#d6b8aa", text: "#6b483a" };

  const step1Yes = clause !== "certainty" && clause !== "past-time";
  const step2Inf = step1Yes && result.outcome === "infinitive";
  const step2Subj = step1Yes && !step2Inf;

  return (
    <WidgetFrame
      title="Subjunctive Mood Decision-Tree Lab"
      tryThis={[
        "Switch **Subject Change** from *Different* to *Same* under **WEIRDO** or **ESCAPA** — watch Spanish drop *que* and snap to the **Infinitive**!",
        "Compare **Future Time** vs **Past / Habitual Time** to see why *cuando* flips mood.",
        "Pick **dormir** + **WEIRDO** + **Present** vs **Past** to inspect *durmamos* vs *durmiéramos*.",
      ]}
      caption={
        <div className="space-y-1.5">
          <p>
            <strong>Examiner Rule:</strong> {renderInline(result.rule)}
          </p>
          <p className="text-bad">
            <strong>Watch Out:</strong> {renderInline(result.trap)}
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Controls */}
        <div className="space-y-3">
          <div>
            <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
              1. Clause Type / Trigger
            </div>
            <Segmented
              label="Clause type"
              value={clause}
              onChange={setClause}
              options={[
                { value: "weirdo", label: "WEIRDO" },
                { value: "escapa", label: "ESCAPA" },
                { value: "future-time", label: "Future Time" },
                { value: "past-time", label: "Past/Habit Time" },
                { value: "indefinite", label: "Unknown Noun" },
                { value: "certainty", label: "Certainty/Fact" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                2. Subject Change {result.subjectCheckApplies ? "(Active!)" : "(N/A for this clause)"}
              </div>
              <Segmented
                label="Subject change"
                value={subject}
                onChange={setSubject}
                options={[
                  { value: "different", label: "Different (S1 ≠ S2)" },
                  { value: "same", label: "Same (S1 = S2)" },
                ]}
              />
            </div>

            <div>
              <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                3. Main-Clause Tense Zone
              </div>
              <Segmented
                label="Main-clause tense zone"
                value={tense}
                onChange={setTense}
                options={[
                  { value: "present", label: "Present / Future" },
                  { value: "past", label: "Past / Conditional" },
                ]}
              />
            </div>
          </div>

          <div>
            <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
              4. Target Verb (Check Irregulars &amp; Stem-Changes)
            </div>
            <Segmented
              label="Target verb"
              value={verbId}
              onChange={setVerbId}
              options={[
                { value: "tener", label: "tener" },
                { value: "poder", label: "poder" },
                { value: "saber", label: "saber" },
                { value: "hacer", label: "hacer" },
                { value: "ir", label: "ir" },
                { value: "dormir", label: "dormir" },
              ]}
            />
          </div>
        </div>

        {/* Live Interactive SVG Decision Flowchart */}
        <div className="overflow-hidden rounded-xl border border-line bg-white p-2 sm:p-3">
          <svg
            viewBox="0 0 600 225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Live highlighted Spanish subjunctive mood decision tree"
            className="mx-auto block h-auto w-full max-w-[600px]"
          >
            {/* Node 1 */}
            <rect x="175" y="10" width="250" height="36" rx="9" fill="#c2410c" />
            <text x="300" y="33" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="800" fill="#ffffff">
              Step 1: Subjunctive Trigger Present?
            </text>

            {/* Branches from Node 1 */}
            <line
              x1="230"
              y1="46"
              x2="105"
              y2="82"
              stroke={!step1Yes ? "#0369a1" : "#e5d5cc"}
              strokeWidth={!step1Yes ? 3 : 1.5}
            />
            <line
              x1="370"
              y1="46"
              x2="425"
              y2="82"
              stroke={step1Yes ? "#15803d" : "#e5d5cc"}
              strokeWidth={step1Yes ? 3 : 1.5}
            />
            <text x="148" y="68" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="800" fill={!step1Yes ? "#0369a1" : "#9c7f72"}>
              NO (Fact/Past)
            </text>
            <text x="412" y="68" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="800" fill={step1Yes ? "#15803d" : "#9c7f72"}>
              YES
            </text>

            {/* Outcome: Indicative */}
            {(() => {
              const st = activeNode(result.outcome === "indicative", "#0369a1");
              return (
                <g>
                  <rect x="18" y="84" width="174" height="44" rx="9" fill={st.fill} stroke={st.stroke} strokeWidth="2" />
                  <text x="105" y="103" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="800" fill={st.text}>
                    INDICATIVE
                  </text>
                  <text x="105" y="119" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.8" fill={st.text}>
                    Factual / Past / Habitual
                  </text>
                </g>
              );
            })()}

            {/* Node 2: Subject Check */}
            {(() => {
              const st = activeNode(step1Yes, "#0f766e");
              return (
                <g>
                  <rect x="290" y="84" width="270" height="40" rx="9" fill={st.fill} stroke={st.stroke} strokeWidth="2" />
                  <text x="425" y="108" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" fill={st.text}>
                    Step 2: Subject Change (or Time/Indef.)?
                  </text>
                </g>
              );
            })()}

            {/* Branches from Node 2 */}
            <line
              x1="340"
              y1="124"
              x2="135"
              y2="164"
              stroke={step2Inf ? "#15803d" : "#e5d5cc"}
              strokeWidth={step2Inf ? 3 : 1.5}
            />
            <line
              x1="415"
              y1="124"
              x2="335"
              y2="164"
              stroke={result.outcome === "pres-subj" ? "#c2410c" : "#e5d5cc"}
              strokeWidth={result.outcome === "pres-subj" ? 3 : 1.5}
            />
            <line
              x1="490"
              y1="124"
              x2="505"
              y2="164"
              stroke={result.outcome === "imp-subj" ? "#7c3aed" : "#e5d5cc"}
              strokeWidth={result.outcome === "imp-subj" ? 3 : 1.5}
            />

            {/* Outcome: Infinitive */}
            {(() => {
              const st = activeNode(result.outcome === "infinitive", "#15803d");
              return (
                <g>
                  <rect x="18" y="166" width="182" height="48" rx="9" fill={st.fill} stroke={st.stroke} strokeWidth="2" />
                  <text x="109" y="186" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="800" fill={st.text}>
                    INFINITIVE (No “que”)
                  </text>
                  <text x="109" y="203" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.8" fill={st.text}>
                    Same subject: S1 = S2
                  </text>
                </g>
              );
            })()}

            {/* Outcome: Present Subjunctive */}
            {(() => {
              const st = activeNode(result.outcome === "pres-subj", "#c2410c");
              return (
                <g>
                  <rect x="214" y="166" width="184" height="48" rx="9" fill={st.fill} stroke={st.stroke} strokeWidth="2" />
                  <text x="306" y="186" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="800" fill={st.text}>
                    PRESENT SUBJUNCTIVE
                  </text>
                  <text x="306" y="203" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.8" fill={st.text}>
                    Present / Future Main Verb
                  </text>
                </g>
              );
            })()}

            {/* Outcome: Imperfect Subjunctive */}
            {(() => {
              const st = activeNode(result.outcome === "imp-subj", "#7c3aed");
              return (
                <g>
                  <rect x="412" y="166" width="174" height="48" rx="9" fill={st.fill} stroke={st.stroke} strokeWidth="2" />
                  <text x="499" y="186" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11.2" fontWeight="800" fill={st.text}>
                    IMPERFECT SUBJ.
                  </text>
                  <text x="499" y="203" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.8" fill={st.text}>
                    Past / Cond. Main Verb
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Live Conjugated Output */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Readout label="Required Form" value={result.outcomeLabel} tone={result.tone} />
          <Readout label="Target Verb Form" value={result.verbPart} tone={step2Subj ? "brand" : "good"} />
        </div>

        <div className="rounded-xl border-2 border-brand/30 bg-brand-soft/60 p-3.5 sm:p-4">
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
            Live IB Spanish Sentence
          </div>
          <p className="mt-1.5 text-base font-bold leading-relaxed text-ink sm:text-lg">
            <span>{result.triggerPart} </span>
            <span className="inline-block rounded-md bg-brand px-2 py-0.5 text-brand-ink">
              {result.verbPart}
            </span>
            <span> {result.restPart}</span>
          </p>
          <p className="mt-1.5 text-sm italic text-ink-2">{result.gloss}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: INTERACTIVE IB TEXT-TYPE FORMAT BLUEPRINT (13 TEXT TYPES)
// ============================================================================

type TextCategory = "All" | "Personal" | "Professional" | "Mass Media";

interface TextTypeBlueprint {
  id: string;
  name: string;
  category: Exclude<TextCategory, "All">;
  register: string;
  pronouns: string;
  audience: string;
  purpose: string;
  wireframeLines: { tag: string; sample: string }[];
  conventions: string[];
  openings: string[];
  closings: string[];
  examinerTrap: string;
}

const BLUEPRINTS: TextTypeBlueprint[] = [
  {
    id: "diario",
    name: "Diario personal",
    category: "Personal",
    register: "Informal / Intimate",
    pronouns: "1ª persona (yo) / tú (al diario)",
    audience: "Oneself (private reflection)",
    purpose: "Reflect candidly on personal experiences, emotions, and lessons learned",
    wireframeLines: [
      { tag: "Fecha", sample: "Sevilla, 14 de octubre de 2026" },
      { tag: "Saludo", sample: "Querido diario:" },
      { tag: "Reflexión", sample: "Hoy he vivido una experiencia que me ha hecho replantearme…" },
      { tag: "Cierre", sample: "Ya te contaré mañana cómo evoluciona todo." },
    ],
    conventions: [
      "Date (and optional place) at the top",
      "Intimate, candid first-person voice with emotional honesty",
      "Rhetorical self-questions and chronological personal reflection",
      "Natural closing thought (no formal signature or postal address)",
    ],
    openings: [
      "Querido diario: Todavía no puedo creer lo que ha pasado hoy…",
      "Madrid, 8 de marzo de 2026 — Hoy necesito desahogarme y ordenar mis ideas…",
    ],
    closings: [
      "En fin, es tarde y mañana toca madrugar. ¡Buenas noches!",
      "Ojalá la semana próxima me traiga respuestas más claras.",
    ],
    examinerTrap:
      "Choosing *diario personal* when the prompt requires convincing an external reader or institution immediately caps Criterion C at 1–2/6!",
  },
  {
    id: "carta-informal",
    name: "Carta informal",
    category: "Personal",
    register: "Informal / Warm",
    pronouns: "Tú (o vosotros / ustedes familiar)",
    audience: "Friend, pen-pal, host sibling, or family member",
    purpose: "Share news, narrate experiences, offer personal advice, and maintain relationship",
    wireframeLines: [
      { tag: "Lugar y fecha", sample: "Granada, 22 de noviembre de 2026" },
      { tag: "Saludo (:)", sample: "Querido Mateo:" },
      { tag: "Cuerpo", sample: "¿Qué tal todo por Bogotá? Te escribo porque acabo de volver de…" },
      { tag: "Despedida", sample: "Un fuerte abrazo, Sofía (P. D. ¡Mándame fotos!)" },
    ],
    conventions: [
      "City and date at top right",
      "Warm greeting ending with a Spanish **colon (:)**, NOT a comma",
      "Conversational questions acknowledging the recipient directly",
      "Affectionate closing + first name (optional *P. D.* postscript)",
    ],
    openings: [
      "Querida Lucía: ¡Cuánto tiempo sin escribirte! ¿Cómo te va este trimestre?",
      "Hola, Pablo: Te escribo entusiasmado porque quiero contarte mi experiencia en…",
    ],
    closings: [
      "Escríbeme en cuanto puedas. Un fuerte abrazo, / Un abrazo enorme,",
      "Cuídate mucho y saluda a tu familia de mi parte. ¡Hasta pronto!",
    ],
    examinerTrap:
      "Using an English comma (*Querida Lucía,*) instead of a Spanish colon (*Querida Lucía:*), or sounding like an academic essay with zero direct questions to the friend.",
  },
  {
    id: "correo",
    name: "Correo electrónico",
    category: "Personal",
    register: "Informal (tú) OR Formal (usted)",
    pronouns: "Matches exact addressee!",
    audience: "Friend/peer OR coordinator/teacher/organisation (check prompt!)",
    purpose: "Communicate concise practical info, inquiries, confirmations, or invitations rapidly",
    wireframeLines: [
      { tag: "Cabecera", sample: "De: elena@correo.es | Para: ong@verde.org | Asunto: Voluntariado" },
      { tag: "Saludo (:)", sample: "Estimada Sra. Morales: (o ¡Hola, Carla!:)" },
      { tag: "Cuerpo", sample: "Le escribo para confirmar mi disponibilidad para la jornada del sábado…" },
      { tag: "Firma", sample: "Reciba un cordial saludo, Elena Ruiz" },
    ],
    conventions: [
      "Compact digital header fields: **De:**, **Para:**, **Asunto:**",
      "Clear, specific subject line reflecting the email's purpose",
      "Focused, scannable paragraphs matching the prompt's register (*tú* vs *usted*)",
      "Matching sign-off + sender name (and optional role/contact)",
    ],
    openings: [
      "Asunto: Solicitud de información sobre el intercambio cultural · Estimado Sr. Vega:",
      "Asunto: ¡Planes para el festival! · ¡Hola, Diego!: ¿Cómo llevas los exámenes?",
    ],
    closings: [
      "Quedo a la espera de su respuesta. Atentamente, [Nombre completo]",
      "¡Avísame en cuanto sepas la hora! Un abrazo, [Nombre]",
    ],
    examinerTrap:
      "Omitting `De / Para / Asunto` headers (making it indistinguishable from a letter) or mixing *tú* and *usted* in a semi-formal school email.",
  },
  {
    id: "blog",
    name: "Blog",
    category: "Personal",
    register: "Semi-formal / Conversational",
    pronouns: "1ª persona + tú / ustedes directo",
    audience: "Online community sharing a hobby, youth issue, or lifestyle interest",
    purpose: "Share personal perspective/tips engagingly and spark reader conversation",
    wireframeLines: [
      { tag: "Título + Meta", sample: "¿Moda rápida o planeta sano? · Por Alba · 12 nov · #ModaÉtica" },
      { tag: "Gancho", sample: "¿Te has preguntado alguna vez quién cosió tu camiseta favorita?" },
      { tag: "Consejos", sample: "Aquí os comparto tres trucos que a mí me cambiaron la rutina…" },
      { tag: "Interacción", sample: "¡Y tú qué opinas? ¡Déjame tu truco abajo en los comentarios!" },
    ],
    conventions: [
      "Catchy, click-worthy title + publication date/author",
      "Direct conversational hook engaging the reader immediately",
      "Personal voice blended with short punchy paragraphs or subheadings",
      "Explicit **call for comments** + relevant **hashtags (#)**",
    ],
    openings: [
      "¡Bienvenidos de nuevo a mi rincón verde! Hoy quiero hablaros de un reto que…",
      "¿Alguna vez has sentido que el móvil controla tu tiempo libre? A mí me pasaba igual…",
    ],
    closings: [
      "¿Has probado alguno de estos consejos? ¡Cuéntamelo en los comentarios y comparte esta entrada!",
      "Nos leemos la semana que viene. #VidaSostenible #JuventudIB",
    ],
    examinerTrap:
      "Writing a dry third-person magazine essay with zero reader interaction or comments prompt — examiners immediately penalise missing blog interactivity.",
  },
  {
    id: "carta-formal",
    name: "Carta formal",
    category: "Professional",
    register: "Formal / Respectful",
    pronouns: "Usted / Ustedes (100% consistent)",
    audience: "Mayor, headteacher, editor, university dean, or company director",
    purpose: "Petition, complain formally, apply for a role/scholarship, or request official action",
    wireframeLines: [
      { tag: "Datos + Fecha", sample: "Remitente / Destinatario · Valencia, 10 de febrero de 2026" },
      { tag: "Asunto + Saludo", sample: "Asunto: Protección del comercio local · Estimado Sr. Alcalde:" },
      { tag: "Cuerpo formal", sample: "Me dirijo a usted con el fin de expresarle mi preocupación por…" },
      { tag: "Despedida", sample: "Agradeciendo de antemano su atención, le saluda atentamente, [Nombre]" },
    ],
    conventions: [
      "Sender & recipient titles/addresses + city and date",
      "Formal salutation (*Estimado/a Sr./Sra.…*) followed by a **colon (:)**",
      "Polite opening formula stating purpose (*Me dirijo a usted con el fin de…*)",
      "Consistent **usted**, polite conditionals/subjunctive, formal closing + full name",
    ],
    openings: [
      "Estimada Sra. Directora: Me dirijo a usted en representación del alumnado con el propósito de…",
      "Distinguido Sr. Alcalde: El motivo de la presente carta es solicitarle que considere…",
    ],
    closings: [
      "Quedo a su entera disposición para ampliar cualquier detalle. Atentamente,",
      "Sin otro particular, reciba un cordial saludo,",
    ],
    examinerTrap:
      "Slipping from *usted* into *tú* (*te escribo / tu colegio*), using a comma after *Estimado Sr.:*, or signing off with *Un abrazo*!",
  },
  {
    id: "informe",
    name: "Informe",
    category: "Professional",
    register: "Formal / Objective",
    pronouns: "Impersonal / Pasiva refleja / 3ª pers.",
    audience: "School board, committee, manager, or municipal authority",
    purpose: "Present objective findings, survey data, evaluation, and concise recommendations",
    wireframeLines: [
      { tag: "Encabezado", sample: "INFORME SOBRE EL DESPERDICIO ALIMENTARIO · Para / De / Fecha" },
      { tag: "1. Introducción", sample: "El presente informe analiza los resultados de la encuesta a 140 alumnos…" },
      { tag: "2. Hallazgos", sample: "Un 62 % señala que las raciones fijas generan sobras evitables…" },
      { tag: "3. Conclusiones", sample: "En consecuencia, se recomienda implantar un sistema de porciones flexibles." },
    ],
    conventions: [
      "Clear factual title + institutional header (`Para / De / Fecha`)",
      "Introduction stating objective, scope, and data source",
      "**Numbered or clearly titled subheadings** (*Introducción, Resultados, Conclusiones*)",
      "Objective impersonal tone (*se observa que, cabe destacar que*) with concise recommendations",
    ],
    openings: [
      "1. Introducción: El objetivo de este informe es evaluar el impacto del programa piloto…",
      "Con base en las encuestas realizadas durante octubre, se presentan los hallazgos clave:",
    ],
    closings: [
      "En definitiva, la adopción de estas medidas permitiría optimizar los recursos escolares.",
      "Elaborado por: Comisión de Sostenibilidad Estudiantil.",
    ],
    examinerTrap:
      "Writing an emotional first-person story with no subheadings — an *informe* MUST look visually structured and sound factually objective.",
  },
  {
    id: "propuesta",
    name: "Propuesta",
    category: "Professional",
    register: "Formal / Persuasive-Action",
    pronouns: "Usted / Nosotros (comité) / Impersonal",
    audience: "Decision-makers with authority to approve a project or budget",
    purpose: "Persuade an institution to adopt a structured, concrete, feasible action plan",
    wireframeLines: [
      { tag: "Título + Meta", sample: "PROPUESTA: CAFÉ CULTURAL HISPANO · Para: Dirección · Fecha" },
      { tag: "1. Justificación", sample: "Actualmente el alumnado carece de espacios informales de práctica oral…" },
      { tag: "2. Plan de acción", sample: "• Paso 1: Reuniones semanales · Paso 2: Invitados nativos · Coste mínimo" },
      { tag: "3. Beneficios", sample: "Si el centro aprobara este proyecto, aumentaría la fluidez intercultural." },
    ],
    conventions: [
      "Action-oriented title + recipient/sender/date metadata",
      "Clear **Objetivos / Justificación** identifying the need",
      "**Structured action plan** (concrete numbered/bulleted steps, timeline, feasibility)",
      "Persuasive **Beneficios previstos** + polite closing invitation to discuss",
    ],
    openings: [
      "Propuesta para modernizar las zonas verdes del campus — 1. Objetivo y justificación:",
      "Me dirijo a usted con el fin de presentar una propuesta viable destinada a…",
    ],
    closings: [
      "Confiamos en que esta iniciativa cuente con su respaldo. Quedamos a su disposición.",
      "En suma, se trata de un proyecto económico, sostenible y de alto impacto comunitario.",
    ],
    examinerTrap:
      "Staying vague (“deberíamos hacer algo”) without concrete steps, feasibility, or clear subheadings — a *propuesta* sells an actionable plan!",
  },
  {
    id: "folleto",
    name: "Folleto / Guía",
    category: "Professional",
    register: "Semi-formal / Persuasive-Public",
    pronouns: "Tú / Usted / Nosotros inclusivo",
    audience: "General public, tourists, families, or students",
    purpose: "Inform quickly and persuade readers to visit, participate, or adopt practical habits",
    wireframeLines: [
      { tag: "Título + Eslogan", sample: "¡VIAJA CON CONCIENCIA! — Guía de ecoturismo en Costa Rica" },
      { tag: "Gancho", sample: "¿Sabías que cada decisión turística deja huella en la biodiversidad?" },
      { tag: "Consejos", sample: "• Apoya comercios locales · • Reduce plásticos · • Respeta los senderos" },
      { tag: "Contacto", sample: "¡Súmate hoy! Más información: www.turismoverde.cr | Tel. 900 123 456" },
    ],
    conventions: [
      "Eye-catching title + memorable **slogan**",
      "Short scannable subheadings (often framed as engaging questions)",
      "Bulleted practical tips + motivating **imperatives** (*¡Descubre!, ¡Participa!*)",
      "Clear **call to action** + practical info / website / contact details",
    ],
    openings: [
      "¡Tu ciudad más verde empieza contigo! Descubre cómo reducir tu huella en 5 pasos.",
      "¿Buscas un plan cultural inolvidable este fin de semana? ¡Te esperamos en…!",
    ],
    closings: [
      "¡No te quedes fuera! Inscríbete gratis en www.ecojoven.es o escríbenos a info@ecojoven.es.",
      "Recuerda: pequeños gestos diarios generan grandes cambios colectivos.",
    ],
    examinerTrap:
      "Writing dense 15-line academic paragraphs — a *folleto* must be visually scannable with slogan, subheadings, bullets, and a call to action.",
  },
  {
    id: "articulo",
    name: "Artículo",
    category: "Mass Media",
    register: "Semi-formal to Formal",
    pronouns: "3ª persona / Nosotros amplio",
    audience: "Newspaper, school press, or magazine readership",
    purpose: "Inform, explore a topical theme with balanced evidence, and engage public readers",
    wireframeLines: [
      { tag: "Titular + Firma", sample: "La revolución silenciosa del teletrabajo rural · Por Diego Morales" },
      { tag: "Entradilla", sample: "Cada vez más jóvenes profesionales cambian la gran ciudad por pueblos…" },
      { tag: "Subtítulos", sample: "Ventajas inesperadas · El reto de la conectividad" },
      { tag: "Cierre", sample: "Queda por ver si los gobiernos consolidarán esta oportunidad histórica." },
    ],
    conventions: [
      "Engaging **titular** (headline) + individual **byline** (*Por [Nombre]*)",
      "Punchy opening **lead** (*entradilla*) hooking readers into the topic",
      "2–3 concise thematic **subheadings** breaking up the analysis",
      "Journalistic evidence, brief expert/witness quotes, and a memorable closing thought",
    ],
    openings: [
      "El auge silencioso de las lenguas indígenas en las redes sociales — Por Clara Méndez",
      "Mientras las grandes capitales se saturan, una nueva generación mira hacia el entorno rural…",
    ],
    closings: [
      "En última instancia, el futuro de esta tendencia dependerá de decisiones colectivas urgentes.",
      "Una cosa resulta indiscutible: el debate acaba apenas de comenzar.",
    ],
    examinerTrap:
      "Forgetting the headline and byline, or turning an objective journalistic *artículo* into a casual *blog* asking readers to leave comments.",
  },
  {
    id: "editorial",
    name: "Editorial",
    category: "Mass Media",
    register: "Formal / Authoritative",
    pronouns: "Nosotros institucional / Impersonal",
    audience: "Informed readers of a newspaper or current-affairs publication",
    purpose: "Articulate the publication's official stance on a pressing public issue and persuade society",
    wireframeLines: [
      { tag: "Titular firme", sample: "Urge legislar la inteligencia artificial en las aulas" },
      { tag: "Postura", sample: "Desde este diario consideramos inaplazable establecer límites éticos…" },
      { tag: "Contraargumento", sample: "Si bien la tecnología agiliza tareas, no obstante jamás sustituye al juicio crítico…" },
      { tag: "Llamamiento", sample: "De ahí que resulte imperativo que el ministerio actúe sin demora." },
    ],
    conventions: [
      "Assertive newspaper **headline** signalling stance (NO individual author byline!)",
      "Collective institutional voice (*Desde este periódico consideramos…* / impersonal)",
      "**Zero personal anecdotes** or casual *yo creo que* subjectivity",
      "Balanced counter-argument + authoritative concluding call to institutions",
    ],
    openings: [
      "Desde estas páginas hemos defendido siempre que la educación pública constituye…",
      "Los datos publicados esta semana sobre la crisis hídrica obligan a una reflexión severa.",
    ],
    closings: [
      "Es hora de que las autoridades abandonen la pasividad y asuman su responsabilidad histórica.",
      "De ahí que resulte imprescindible abrir un pacto social transparente cuanto antes.",
    ],
    examinerTrap:
      "Writing “En mi opinión personal, ayer me pasó…” — an *editorial* speaks for the ENTIRE newspaper, never as a private individual!",
  },
  {
    id: "entrevista",
    name: "Entrevista",
    category: "Mass Media",
    register: "Semi-formal to Formal",
    pronouns: "Tú o Usted (según el entrevistado)",
    audience: "Readers of a newspaper, cultural magazine, or school website",
    purpose: "Explore an expert's or public figure's experiences and views through authentic dialogue",
    wireframeLines: [
      { tag: "Titular + Intro", sample: "“El arte urbano salva barrios” · Hoy conversamos con la muralista Ana Cruz…" },
      { tag: "Turno 1", sample: "Periodista: ¿Cómo surgió su vocación por el muralismo comunitario?" },
      { tag: "Respuesta 1", sample: "Ana Cruz: Todo empezó hace diez años en mi barrio de Oaxaca cuando…" },
      { tag: "Cierre", sample: "Periodista: Muchas gracias por compartir su tiempo y visión con nuestros lectores." },
    ],
    conventions: [
      "Catchy headline (often quoting a memorable line from the interviewee!)",
      "Brief **contextual introduction** presenting who the interviewee is and why they matter",
      "Clearly labelled alternating **Q&A turns** with realistic follow-up questions",
      "Brief closing thanks or concluding journalistic wrap-up",
    ],
    openings: [
      "Hoy entrevistamos a la Dra. Isabel Torres, pionera en energías limpias en Chile…",
      "Periodista: Bienvenida, doctora. Para comenzar, ¿qué la inspiró a fundar este proyecto?",
    ],
    closings: [
      "Periodista: Le agradecemos sinceramente su generosidad. ¡Mucho éxito en su próximo reto!",
      "Tras esta conversación inspiradora, queda claro que la innovación empieza en la comunidad.",
    ],
    examinerTrap:
      "Skipping the introductory context paragraph (jumping straight into Q1 without introducing the guest) or writing tiny 1-line robotic answers.",
  },
  {
    id: "discurso",
    name: "Discurso",
    category: "Mass Media",
    register: "Semi-formal to Formal (Spoken!)",
    pronouns: "Ustedes / Vosotros + Nosotros inclusivo",
    audience: "Live listeners (school assembly, youth summit, town hall, award ceremony)",
    purpose: "Engage, persuade, and inspire a live audience to think differently or take action",
    wireframeLines: [
      { tag: "Vocativo", sample: "Estimados compañeros, profesores y miembros del jurado: Buenos días." },
      { tag: "Retórica", sample: "¿Acaso podemos permanecer callados mientras nuestro planeta se agota?" },
      { tag: "Tricolon", sample: "Necesitamos escuchar, cooperar y actuar hoy mismo con valentía." },
      { tag: "Despedida oral", sample: "Juntos podemos lograrlo. Muchas gracias por su atención." },
    ],
    conventions: [
      "Direct **vocative greeting** addressing the live audience explicitly",
      "Oral rhetorical devices: **rhetorical questions, tricolon/triads, repetition, direct address**",
      "Inclusive **nosotros** building shared purpose with listeners",
      "Clear spoken call to action + **closing thanks** (*Muchas gracias por su atención*)",
    ],
    openings: [
      "Estimados delegados, docentes y amigos: Es un verdadero honor dirigirme a ustedes hoy…",
      "Buenas tardes a todos. Imaginen por un instante una ciudad donde…",
    ],
    closings: [
      "El cambio empieza en esta misma sala. Muchas gracias a todos por escucharme.",
      "Hagamos que nuestra voz cuente hoy y siempre. ¡Muchas gracias por su atención!",
    ],
    examinerTrap:
      "Writing a silent written essay with zero audience awareness — if the examiner can’t *hear* a live speaker addressing listeners, Criterion C drops.",
  },
  {
    id: "resena",
    name: "Reseña",
    category: "Mass Media",
    register: "Semi-formal / Evaluative",
    pronouns: "1ª persona equilibrada / 3ª persona",
    audience: "Cultural magazine, blog, or school newspaper readers",
    purpose: "Introduce a book, film, play, or exhibition without spoilers and offer a balanced verdict",
    wireframeLines: [
      { tag: "Título + Ficha", sample: "Una joya visual imprescindible · Dir. A. Cuarón · Drama · 4,5 / 5 ★" },
      { tag: "Sinopsis breve", sample: "Ambientada en la Ciudad de México de los años setenta, la cinta retrata…" },
      { tag: "Crítica", sample: "Si bien el ritmo inicial resulta pausado, la fotografía y las actuaciones brillan…" },
      { tag: "Veredicto", sample: "En definitiva, recomiendo encarecidamente esta obra a todo amante del cine." },
    ],
    conventions: [
      "Evaluative headline + brief **fact-box** (creator, year, genre, optional rating)",
      "Concise **spoiler-free synopsis** (max ~25% of word count!)",
      "**Balanced critical analysis** weighing strengths and minor flaws (*si bien…*)",
      "Clear final **verdict / target-audience recommendation**",
    ],
    openings: [
      "Pocos estrenos recientes logran conmover y hacer reflexionar con tanta sutileza como…",
      "Ficha técnica: Título · Dirección · Año · Género — Una mirada valiente sobre…",
    ],
    closings: [
      "En resumen, pese a algún altibajo narrativo, resulta una obra imprescindible (4,5/5).",
      "La recomiendo sin reservas a quienes buscan un cine comprometido y luminoso.",
    ],
    examinerTrap:
      "Spending 80% of the word count retelling the entire plot (including spoilers!) instead of critically evaluating style, themes, and impact.",
  },
];

function TextTypeBlueprintWidget() {
  const [cat, setCat] = useState<TextCategory>("All");
  const [selectedId, setSelectedId] = useState<string>("propuesta");

  const filtered = useMemo(
    () => (cat === "All" ? BLUEPRINTS : BLUEPRINTS.filter((b) => b.category === cat)),
    [cat],
  );

  const active = useMemo(
    () => filtered.find((b) => b.id === selectedId) ?? filtered[0] ?? BLUEPRINTS[0],
    [filtered, selectedId],
  );

  const catBadgeColor =
    active.category === "Personal"
      ? "bg-brand-soft text-brand border-brand/30"
      : active.category === "Professional"
        ? "bg-accent-soft text-accent border-accent/30"
        : "bg-s-algebra/15 text-s-algebra border-s-algebra/30";

  return (
    <WidgetFrame
      title="Interactive IB Text-Type Format Blueprint (All 13 Formats)"
      tryThis={[
        "Compare **Informe** vs **Propuesta** under **Professional** — notice how *Informe* reports findings while *Propuesta* pitches a feasible action plan.",
        "Compare **Artículo** vs **Editorial** under **Mass Media** — spot why *Editorial* forbids personal *yo* anecdotes!",
        "Check **Carta informal** and **Carta formal** to verify Spanish salutation punctuation (**colon**, never comma!).",
      ]}
      caption={
        <p>
          <strong>Paper 1 Criterion C Tip:</strong> Always verify <strong>Audience, Context, Purpose, Meaning &amp; Variation</strong> before writing — a matching visual layout and consistent <em>tú / usted</em> register protect all 6/6 Conceptual Understanding marks.
        </p>
      }
    >
      <div className="space-y-4">
        {/* Category filter */}
        <div>
          <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
            1. Filter by IB Category
          </div>
          <Segmented
            label="IB text-type category"
            value={cat}
            onChange={(nextCat) => {
              setCat(nextCat);
              const nextList =
                nextCat === "All" ? BLUEPRINTS : BLUEPRINTS.filter((b) => b.category === nextCat);
              if (!nextList.some((b) => b.id === selectedId) && nextList[0]) {
                setSelectedId(nextList[0].id);
              }
            }}
            options={[
              { value: "All", label: "All (13)" },
              { value: "Personal", label: "Personal (4)" },
              { value: "Professional", label: "Professional (4)" },
              { value: "Mass Media", label: "Mass Media (5)" },
            ]}
          />
        </div>

        {/* Text-type selector buttons */}
        <div>
          <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
            2. Select an IB Text Type
          </div>
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="IB text type">
            {filtered.map((b) => {
              const isSelected = b.id === active.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setSelectedId(b.id)}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition sm:text-sm ${
                    isSelected
                      ? "border-brand bg-brand text-brand-ink shadow-sm"
                      : "border-line bg-surface text-ink hover:bg-surface-2"
                  }`}
                >
                  {b.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Header summary */}
        <div className="rounded-xl border border-line bg-surface-2/60 p-3.5 sm:p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-lg font-extrabold text-ink">{active.name}</h4>
            <span className={`rounded-full border px-2.5 py-0.5 text-xs font-extrabold ${catBadgeColor}`}>
              {active.category}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Readout
              label="Register"
              value={<span className="text-base sm:text-lg">{active.register}</span>}
              tone="brand"
            />
            <Readout
              label="Pronoun Voice"
              value={<span className="text-base sm:text-lg">{active.pronouns}</span>}
              tone="ink"
            />
          </div>
          <div className="mt-3 space-y-1 text-sm text-ink">
            <p>
              <strong>Target Audience:</strong> {active.audience}
            </p>
            <p>
              <strong>Primary Purpose:</strong> {active.purpose}.
            </p>
          </div>
        </div>

        {/* Visual Page Wireframe Preview */}
        <div className="rounded-xl border border-line bg-surface p-3.5 sm:p-4">
          <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-brand">
            Visual Page-Layout Blueprint (What the Examiner Sees First)
          </div>
          <div className="space-y-2">
            {active.wireframeLines.map((row) => (
              <div
                key={row.tag}
                className="flex flex-col gap-1 rounded-lg border border-dashed border-line bg-surface-2/40 px-3 py-2 sm:flex-row sm:items-baseline sm:gap-3"
              >
                <span className="shrink-0 rounded bg-brand-soft px-2 py-0.5 text-xs font-extrabold text-brand">
                  {row.tag}
                </span>
                <span className="min-w-0 flex-1 text-sm italic text-ink">{row.sample}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conventions & Spanish Formulas */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-3.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-good">
              Mandatory Structural Conventions
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-ink">
              {active.conventions.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-good" aria-hidden>✓</span>
                  <span>{renderInline(c)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line bg-surface p-3.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
              Ready-to-Use B2–C1 Spanish Formulas
            </div>
            <div className="mt-2 space-y-2 text-sm text-ink">
              <div>
                <div className="text-xs font-bold text-ink-2">Opening formulas:</div>
                {active.openings.map((op) => (
                  <p key={op} className="mt-1 italic text-ink">
                    “{op}”
                  </p>
                ))}
              </div>
              <div className="border-t border-line pt-2">
                <div className="text-xs font-bold text-ink-2">Closing formulas:</div>
                {active.closings.map((cl) => (
                  <p key={cl} className="mt-1 italic text-ink">
                    “{cl}”
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Examiner Trap */}
        <div className="rounded-xl border border-bad/30 bg-bad-soft p-3 text-sm text-ink">
          <span className="font-extrabold text-bad">Criterion C Examiner Trap: </span>
          {renderInline(active.examinerTrap)}
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// EXPORTS
// ============================================================================

export const widgets: WidgetDef[] = [
  {
    id: "subjunctive-decision-lab",
    title: "Subjunctive Mood Decision-Tree Lab",
    blurb:
      "Step through Clause Type, Subject Change, and Main-Clause Tense Zone to see live when Spanish demands Infinitive, Indicative, Present Subjunctive, or Imperfect Subjunctive.",
    Component: SubjunctiveDecisionLab,
  },
  {
    id: "ib-text-type-blueprint",
    title: "IB Text-Type Format Blueprint",
    blurb:
      "Inspect all 13 IB Paper 1 text types across Personal, Professional & Mass Media — register, layout wireframe, Spanish formulas, and Criterion C examiner traps.",
    Component: TextTypeBlueprintWidget,
  },
];

export default widgets;
