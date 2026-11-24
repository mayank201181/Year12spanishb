"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Idiomatic & Register Enhancer (IGCSE B1 → IB SL B2 → HL Band 10–12)
// ============================================================================
type DomainKey = "salud" | "creencias" | "lengua" | "hl-rae";
type TierKey = "b1" | "b2" | "c1";
type UpgradeTag = "mood" | "lexis" | "connector";

interface TextSpan {
  text: string;
  tag?: UpgradeTag;
  note?: string;
}

interface TierVersion {
  band: string;
  criterionA: string;
  registerLabel: string;
  progressPct: number;
  spans: readonly TextSpan[];
  examinerNote: string;
  keyShifts: readonly string[];
}

interface DomainScenario {
  key: DomainKey;
  label: string;
  promptContext: string;
  versions: Record<TierKey, TierVersion>;
}

const TAG_STYLES: Record<UpgradeTag, { label: string; chipOn: string; spanClass: string }> = {
  mood: {
    label: "Subjuntivo / Modo",
    chipOn: "bg-brand text-brand-ink border-brand",
    spanClass: "bg-brand-soft text-ink border-b-2 border-brand px-1 rounded-sm font-semibold",
  },
  lexis: {
    label: "Léxico preciso",
    chipOn: "bg-accent text-white border-accent",
    spanClass: "bg-accent-soft text-ink border-b-2 border-accent px-1 rounded-sm font-semibold",
  },
  connector: {
    label: "Conector / Modismo",
    chipOn: "bg-info text-white border-info",
    spanClass: "bg-info-soft text-ink border-b-2 border-info px-1 rounded-sm font-semibold",
  },
};

const DOMAIN_SCENARIOS: readonly DomainScenario[] = [
  {
    key: "salud",
    label: "Salud y bienestar",
    promptContext: "Paper 1 Artículo: Adolescent sleep deprivation & mental health",
    versions: {
      b1: {
        band: "Band 5–6",
        criterionA: "6 / 12",
        registerLabel: "IGCSE B1 (Generic)",
        progressPct: 48,
        spans: [
          { text: "Creo que " },
          { text: "es importante dormir ocho horas ", tag: "mood", note: "Safe infinitive avoids the subjunctive." },
          { text: "porque los jóvenes " },
          { text: "están muy cansados ", tag: "lexis", note: "Basic adjective instead of B2 health collocation." },
          { text: "y " },
          { text: "por eso ", tag: "connector", note: "Repetitive IGCSE linker." },
          { text: "tienen mucho estrés en el colegio." },
        ],
        examinerNote:
          "Grammatically intelligible, yet relies on repetitive IGCSE anchors (*creo que, es importante + inf., muy cansados, por eso*) that cap Criterion A around Band 5–6.",
        keyShifts: [
          "No subjunctive mood demonstrated.",
          "Vague intensifiers (*muy, mucho*) flatten lexical precision.",
        ],
      },
      b2: {
        band: "Band 8–9",
        criterionA: "9 / 12",
        registerLabel: "IB SL (Solid B2)",
        progressPct: 75,
        spans: [
          { text: "Considero que " },
          { text: "conviene que los adolescentes duerman ", tag: "mood", note: "Impersonal advice + que + present subjunctive." },
          { text: "al menos ocho horas, " },
          { text: "ya que ", tag: "connector", note: "Clean B2 causal connector replacing *porque*." },
          { text: "el descanso insuficiente provoca " },
          { text: "ansiedad académica y agotamiento", tag: "lexis", note: "Accurate B2 health nouns." },
          { text: "." },
        ],
        examinerNote:
          "Clear jump into Band 8–9: introduces an accurate impersonal subjunctive (*conviene que duerman*), upgrades *porque* to *ya que*, and swaps *muy cansados* for precise nouns.",
        keyShifts: [
          "Demonstrates controlled present subjunctive (*duerman*).",
          "Eliminates *muy / mucho* in favour of B2 collocations.",
        ],
      },
      c1: {
        band: "Band 10–12",
        criterionA: "11–12 / 12",
        registerLabel: "IB HL (Band 10–12 C1)",
        progressPct: 96,
        spans: [
          { text: "Es innegable que " },
          { text: "la presión académica menoscaba ", tag: "lexis", note: "Nominalisation + C1 verb *menoscabar* ('undermine')." },
          { text: "el equilibrio emocional juvenil; " },
          { text: "de ahí que resulte imprescindible que prioricemos ", tag: "mood", note: "Double subjunctive: *de ahí que resulte* + *que prioricemos*!" },
          { text: "el descanso nocturno y " },
          { text: "rompamos el tabú ", tag: "connector", note: "Authentic Hispanic idiomatic collocation." },
          { text: "sobre la salud mental." },
        ],
        examinerNote:
          "Exemplary Band 11–12 execution: pairs affirmative certainty (*es innegable que* + indicative) with **`de ahí que`** + subjunctive (*resulte*) and an impersonal subjunctive (*prioricemos*), anchored by natural C1 verbs and idioms.",
        keyShifts: [
          "Accurate mood contrast: indicative (*menoscaba*) vs subjunctive (*resulte, prioricemos*).",
          "Signature C1 connector *de ahí que* + idiomatic *romper el tabú*.",
        ],
      },
    },
  },
  {
    key: "creencias",
    label: "Creencias y subculturas",
    promptContext: "Paper 1 Editorial: Secularisation & youth cultural rituals",
    versions: {
      b1: {
        band: "Band 5–6",
        criterionA: "6 / 12",
        registerLabel: "IGCSE B1 (Generic)",
        progressPct: 48,
        spans: [
          { text: "Hoy en día " },
          { text: "menos jóvenes van a la iglesia ", tag: "lexis", note: "Descriptive summary without sociological terms." },
          { text: "en España, " },
          { text: "pero ", tag: "connector", note: "Basic coordinating conjunction." },
          { text: "pienso que todavía les gustan mucho las fiestas " },
          { text: "y no es verdad que olvidan ", tag: "mood", note: "Mood error! *No es verdad que* requires subjunctive (*olviden*)." },
          { text: "sus tradiciones." },
        ],
        examinerNote:
          "Contains a classic Band 6 mood slip (*no es verdad que olvidan* instead of *olviden*) and relies on basic *pero / les gustan mucho* phrasing.",
        keyShifts: [
          "Mood error after negated certainty (*no es verdad que*).",
          "Lacks sociological vocabulary (*laicismo, patrimonio cultural*).",
        ],
      },
      b2: {
        band: "Band 8–9",
        criterionA: "9 / 12",
        registerLabel: "IB SL (Solid B2)",
        progressPct: 76,
        spans: [
          { text: "Aunque la asistencia a misa ha disminuido ", tag: "mood", note: "*Aunque* + indicative concedes a verified real fact." },
          { text: "en España, " },
          { text: "no obstante ", tag: "connector", note: "Elevated B2–C1 contrast connector." },
          { text: "muchos jóvenes valoran " },
          { text: "el patrimonio cultural ", tag: "lexis", note: "Distinguishes cultural heritage from formal religion." },
          { text: "de celebraciones como la Semana Santa." },
        ],
        examinerNote:
          "Strong B2 control: deploys *aunque* + indicative for an observable demographic trend, avoids stereotypes, and anchors the point in *Semana Santa*.",
        keyShifts: [
          "Correct factual *aunque* + indicative (*ha disminuido*).",
          "Clear cultural distinction between institutional faith and heritage.",
        ],
      },
      c1: {
        band: "Band 10–12",
        criterionA: "11–12 / 12",
        registerLabel: "IB HL (Band 10–12 C1)",
        progressPct: 97,
        spans: [
          { text: "Lejos de erradicar el arraigo comunitario, ", tag: "connector", note: "*Lejos de + infinitivo* refutes stereotypes cleanly." },
          { text: "la creciente secularización convive con " },
          { text: "un rico patrimonio inmaterial y, en América Latina, con el sincretismo religioso", tag: "lexis", note: "Cross-regional Hispanophone nuance." },
          { text: "; " },
          { text: "aunque un joven no sea creyente", tag: "mood", note: "Hypothetical *aunque* ('even if') + subjunctive (*sea*)." },
          { text: ", suele reivindicar estos rituales como vínculos afectivos." },
        ],
        examinerNote:
          "Top-band HL synthesis: pairs *Lejos de + inf.* with hypothetical *aunque + subjunctive* (*no sea*), bridging Spain's secularisation with Latin American *sincretismo religioso*.",
        keyShifts: [
          "Dual-region nuance (Spain + Latin America) elevates Criterion B.",
          "Precision verbs (*convive, reivindicar*) and hypothetical subjunctive.",
        ],
      },
    },
  },
  {
    key: "lengua",
    label: "Lengua e identidad",
    promptContext: "Individual Oral / Ensayo: Indigenous & regional languages",
    versions: {
      b1: {
        band: "Band 5–6",
        criterionA: "5–6 / 12",
        registerLabel: "IGCSE B1 (Generic)",
        progressPct: 46,
        spans: [
          { text: "Hay muchas lenguas diferentes ", tag: "lexis", note: "Basic *hay* + vague *cosas/diferentes*." },
          { text: "en España y Sudamérica, " },
          { text: "así que ", tag: "connector", note: "Everyday informal linker." },
          { text: "los gobiernos tienen que ayudar ", tag: "mood", note: "Misses opportunity for impersonal subjunctive." },
          { text: "a la gente que habla idiomas antiguos." },
        ],
        examinerNote:
          "Overly vague (*muchas lenguas, idiomas antiguos, la gente*) with zero named Hispanophone examples or complex verb moods.",
        keyShifts: [
          "Missing concrete cultural naming (*quechua, guaraní, euskera*).",
          "Flat verb choices (*hay, ayudar*).",
        ],
      },
      b2: {
        band: "Band 8–9",
        criterionA: "9 / 12",
        registerLabel: "IB SL (Solid B2)",
        progressPct: 76,
        spans: [
          { text: "Desde el euskera en España hasta el guaraní en Paraguay, " },
          { text: "la diversidad lingüística ", tag: "lexis", note: "Specific regions + B2 nominalisation." },
          { text: "enriquece nuestra identidad; " },
          { text: "por consiguiente, ", tag: "connector", note: "Formal consecutive connector." },
          { text: "es fundamental que las escuelas protejan ", tag: "mood", note: "Impersonal necessity + present subjunctive (*protejan*)." },
          { text: "las lenguas minoritarias." },
        ],
        examinerNote:
          "Well-anchored B2 Spanish naming concrete Spain and Latin America examples (*euskera, guaraní*) and handling the spelling-change subjunctive (*proteger → protejan*) accurately.",
        keyShifts: [
          "Correct spelling-change subjunctive (`g → j`: *protejan*).",
          "Named transatlantic examples lift Criterion B.",
        ],
      },
      c1: {
        band: "Band 10–12",
        criterionA: "11–12 / 12",
        registerLabel: "IB HL (Band 10–12 C1)",
        progressPct: 98,
        spans: [
          { text: "No podemos dar por sentado que las lenguas originarias sobrevivan ", tag: "mood", note: "Negated idiom + subjunctive (*sobrevivan*)." },
          { text: "sin respaldo institucional; " },
          { text: "cada lengua — del euskera al quechua o el guaraní — encarna una cosmovisión irreemplazable", tag: "lexis", note: "C1 diction: *encarna, cosmovisión irreemplazable*." },
          { text: ", " },
          { text: "de ahí que convenga impulsar ", tag: "connector", note: "*De ahí que* + irregular subjunctive (*convenga*)." },
          { text: "la educación intercultural bilingüe." },
        ],
        examinerNote:
          "Masterful Band 12 prose: weaves a negated idiom (*no dar por sentado que + subj.*), vivid C1 lexis (*encarna una cosmovisión*), and *de ahí que convenga* seamlessly.",
        keyShifts: [
          "Two distinct high-level subjunctive triggers in one balanced sentence.",
          "Authentic sociolinguistic terms (*lenguas originarias, cosmovisión*).",
        ],
      },
    },
  },
  {
    key: "hl-rae",
    label: "[HL] RAE y registro",
    promptContext: "HL Paper 1 Ensayo (450–600w): Prescriptivism vs living language",
    versions: {
      b1: {
        band: "Band 5–6",
        criterionA: "6 / 12",
        registerLabel: "IGCSE B1 (Generic)",
        progressPct: 45,
        spans: [
          { text: "Los/as alumnos/as usan mucho " },
          { text: "el bullying y otras palabras inglesas ", tag: "lexis", note: "Clunky slashes + unadapted anglicism." },
          { text: "en internet, " },
          { text: "pero ", tag: "connector", note: "Simple contrast." },
          { text: "la RAE dice que es malo ", tag: "mood", note: "Oversimplified caricature of the RAE." },
          { text: "cambiar el español." },
        ],
        examinerNote:
          "Clunky *los/as*, unadapted *bullying*, and a flat caricature of the RAE signal Band 5–6 at HL.",
        keyShifts: [
          "Unadapted anglicism instead of *el acoso escolar*.",
          "Ignores ASALE's pan-Hispanic collaboration.",
        ],
      },
      b2: {
        band: "Band 8–9",
        criterionA: "9 / 12",
        registerLabel: "IB SL (Solid B2)",
        progressPct: 75,
        spans: [
          { text: "Aunque la RAE defiende la unidad del idioma ", tag: "mood", note: "Factual *aunque* + indicative." },
          { text: "frente a los anglicismos, " },
          { text: "sin embargo ", tag: "connector", note: "Clear pivot (avoid pairing *aunque* + *pero*!)." },
          { text: "el español actual también necesita adaptarse " },
          { text: "a las nuevas realidades del alumnado", tag: "lexis", note: "Clean epicene collective noun (*el alumnado*)." },
          { text: "." },
        ],
        examinerNote:
          "Solid B2 argument using *el alumnado* cleanly — though note that pairing *aunque* with *sin embargo* in the same sentence is slightly redundant in top-band Spanish (prefer *Si bien…, no obstante…*).",
        keyShifts: [
          "Clean epicene noun *el alumnado* replaces *los/as alumnos/as*.",
          "Recognises balance between unity and adaptation.",
        ],
      },
      c1: {
        band: "Band 10–12",
        criterionA: "12 / 12",
        registerLabel: "IB HL (Band 10–12 C1)",
        progressPct: 100,
        spans: [
          { text: "Si bien la política panhispánica de la RAE y ASALE aboga por ", tag: "connector", note: "Formal *Si bien* (+ ind.) + pan-Hispanic institutional precision." },
          { text: "equivalentes propios como «acoso escolar», " },
          { text: "no obstante conviene matizar ", tag: "lexis", note: "Evaluative HL verb phrase (*conviene matizar*)." },
          { text: "que los préstamos son un arma de doble filo; " },
          { text: "de ahí que sea vital que el alumnado cultive ", tag: "mood", note: "Dual C1 subjunctive: *de ahí que sea* + *que cultive*." },
          { text: "un criterio lingüístico consciente." },
        ],
        examinerNote:
          "Full-mark HL Criterion A & B model: executes the **S · N · D** engine (*Si bien* + ind. → *no obstante* → *de ahí que* + subj.), embeds a natural idiom (*arma de doble filo*), and deploys FundéuRAE + epicene precision.",
        keyShifts: [
          "Flawless S · N · D architecture with zero redundancy.",
          "Names ASALE, *acoso escolar*, and *el alumnado* effortlessly.",
        ],
      },
    },
  },
];

function RegisterEnhancerWidget() {
  const [domain, setDomain] = useState<DomainKey>("salud");
  const [tier, setTier] = useState<TierKey>("c1");
  const [activeTags, setActiveTags] = useState<Record<UpgradeTag, boolean>>({
    mood: true,
    lexis: true,
    connector: true,
  });

  const scenario = DOMAIN_SCENARIOS.find((d) => d.key === domain) ?? DOMAIN_SCENARIOS[0];
  const current = scenario.versions[tier];

  const toggleTag = (t: UpgradeTag) => {
    setActiveTags((prev) => ({ ...prev, [t]: !prev[t] }));
  };

  return (
    <WidgetFrame
      title="Idiomatic & Register Enhancer (IGCSE B1 → Band 10–12)"
      tryThis={[
        "Switch between **IGCSE B1**, **IB SL B2**, and **IB HL C1** on the exact same Theme 1 idea to see what moves Criterion A from 6/12 to 12/12.",
        "Toggle the three coloured upgrade lenses (**Subjuntivo**, **Léxico preciso**, **Conector / Modismo**) to isolate each grammatical upgrade.",
      ]}
      caption={
        <div>
          <strong className="text-brand">Examiner verdict ({current.band}):</strong> {current.examinerNote}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Select Theme 1 topic">
          {DOMAIN_SCENARIOS.map((d) => (
            <button
              key={d.key}
              type="button"
              onClick={() => setDomain(d.key)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                d.key === domain
                  ? "border-brand bg-brand text-brand-ink shadow-sm"
                  : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<TierKey>
            label="Select Spanish register level"
            value={tier}
            onChange={setTier}
            options={[
              { value: "b1", label: "IGCSE (B1)" },
              { value: "b2", label: "IB SL (B2)" },
              { value: "c1", label: "IB HL (Band 10–12)" },
            ]}
          />
          <span className="text-xs font-semibold text-ink-2">{scenario.promptContext}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Highlight layers:</span>
          {(Object.keys(TAG_STYLES) as UpgradeTag[]).map((tag) => {
            const on = activeTags[tag];
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={on}
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-2.5 py-1 text-xs font-bold transition ${
                  on ? TAG_STYLES[tag].chipOn : "border-line bg-surface-2 text-ink-2"
                }`}
              >
                {on ? "✓ " : ""}{TAG_STYLES[tag].label}
              </button>
            );
          })}
        </div>

        <div className="rounded-xl border border-line bg-surface p-4 shadow-sm">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
              {current.registerLabel}
            </span>
            <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-bold text-ink">
              Criterion A: {current.criterionA}
            </span>
          </div>
          <p className="text-base leading-relaxed text-ink">
            «
            {current.spans.map((sp, idx) => {
              const highlight = sp.tag && activeTags[sp.tag];
              return (
                <span
                  key={`${domain}-${tier}-${idx}`}
                  title={sp.note}
                  className={highlight && sp.tag ? TAG_STYLES[sp.tag].spanClass : undefined}
                >
                  {sp.text}
                </span>
              );
            })}
            »
          </p>

          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-ink-2">
              <span>IB Criterion A Language Meter</span>
              <span className="tabular-nums font-extrabold text-ink">{current.band}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  tier === "c1" ? "bg-good" : tier === "b2" ? "bg-brand" : "bg-bad"
                }`}
                style={{ width: `${current.progressPct}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Readout
            label="Estimated IB Band"
            value={current.band}
            tone={tier === "c1" ? "good" : tier === "b2" ? "brand" : "bad"}
          />
          <Readout label="Criterion A Estimate" value={current.criterionA} tone="ink" />
        </div>

        <div className="rounded-xl border border-line bg-surface-2/60 p-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            What changed in this draft
          </div>
          <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-ink">
            {current.spans
              .filter((sp) => sp.tag && sp.note && activeTags[sp.tag])
              .map((sp, idx) => (
                <li key={`note-${idx}`} className="flex flex-wrap gap-1.5">
                  <span className="font-bold text-brand">• “{sp.text.trim()}”:</span>
                  <span>{sp.note}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Hispanophone Linguistic Variation Explorer
// ============================================================================
type RegionKey = "espana" | "mexico" | "caribe" | "colombia" | "andina" | "rioplatense";
type SentenceKey = "commute" | "tech" | "wellbeing";

interface RegionProfile {
  key: RegionKey;
  shortLabel: string;
  title: string;
  cities: string;
  svgX: number;
  svgY: number;
  phonology: string;
  pronouns: string;
  voseoSample: string;
  coOfficialOrIndigenous: string;
  loanwords: string;
  lexis: {
    car: string;
    bus: string;
    computer: string;
    phone: string;
    job: string;
  };
  sentences: Record<SentenceKey, { spanish: string; spotlight: string }>;
}

const REGIONS: readonly RegionProfile[] = [
  {
    key: "espana",
    shortLabel: "España",
    title: "España peninsular (Castellano)",
    cities: "Madrid · Barcelona · Bilbao · Sevilla",
    svgX: 405,
    svgY: 72,
    phonology: "Distinción (/θ/ en z, ce/ci vs /s/) en norte y centro; seseo/ceceo en partes de Andalucía.",
    pronouns: "tú (sg. informal) · vosotros/as (pl. informal) · usted/es (formal)",
    voseoSample: "No usa voseo: «¿Vosotros tenéis tiempo para descansar?»",
    coOfficialOrIndigenous: "Cooficiales: catalán/valenciano, gallego y euskera (lengua aislada prerromana).",
    loanwords: "4 000+ arabismos históricos: almohada, ojalá, aceituna, azúcar.",
    lexis: { car: "el coche", bus: "el autobús", computer: "el ordenador", phone: "el móvil", job: "el curro / trabajo" },
    sentences: {
      commute: {
        spanish: "¿Vosotros cogéis el autobús o preferís ir en coche al centro?",
        spotlight: "Uses Peninsular *vosotros*, *coger* ('take/catch'), *autobús*, and *coche*.",
      },
      tech: {
        spanish: "¿Apagáis el ordenador y el móvil antes de cenar en familia?",
        spotlight: "Uses *ordenador* ('computer'), *móvil* ('mobile'), and *vosotros* ending *-áis*.",
      },
      wellbeing: {
        spanish: "Tómate un respiro y disfruta de una buena sobremesa con tus amigos.",
        spotlight: "Uses *tú* imperative (*tómate*) and highlights Spain's *sobremesa* ritual.",
      },
    },
  },
  {
    key: "mexico",
    shortLabel: "México",
    title: "México y Mesoamérica",
    cities: "Ciudad de México · Oaxaca · Guadalajara",
    svgX: 112,
    svgY: 96,
    phonology: "Seseo (/s/ para z, ce/ci, s); consonantismo nítido y entonación melódica característica.",
    pronouns: "tú (sg. informal) · ustedes (pl. universal, informal y formal)",
    voseoSample: "Tuteo predominante (voseo en Chiapas): «¿Ustedes tienen tiempo hoy?»",
    coOfficialOrIndigenous: "68 lenguas indígenas nacionales: náhuatl (1,6M+), maya yucateco, zapoteco, mixteco.",
    loanwords: "Del náhuatl al español global: chocolate, aguacate, tomate, chicle, tiza.",
    lexis: { car: "el carro", bus: "el camión", computer: "la computadora", phone: "el celular", job: "la chamba / trabajo" },
    sentences: {
      commute: {
        spanish: "¿Ustedes toman el camión o prefieren ir en carro al centro?",
        spotlight: "Uses *ustedes*, *tomar* (avoids taboo *coger*!), *camión* ('city bus'), and *carro*.",
      },
      tech: {
        spanish: "¿Apagan la computadora y el celular antes de cenar en familia?",
        spotlight: "Uses *ustedes* (*apagan*), *computadora*, and *celular*.",
      },
      wellbeing: {
        spanish: "Date un respiro y revisa los sellos de advertencia antes de elegir tu botana.",
        spotlight: "Links Mexican *tú* (*date*) with *sellos de advertencia* and Mexican lexis *botana* ('snack').",
      },
    },
  },
  {
    key: "caribe",
    shortLabel: "Caribe",
    title: "Caribe hispánico y Canarias",
    cities: "La Habana · San Juan · Santo Domingo · Tenerife",
    svgX: 204,
    svgY: 112,
    phonology: "Seseo; aspiración frecuente de `-s` final (*estás* → *ehtáh*) y ritmo fluido.",
    pronouns: "tú (con sujeto explícito frecuente: «¿Qué tú dices?») · ustedes (pl. universal)",
    voseoSample: "Tuteo generalizado: «¿Ustedes van a tomar la guagua?»",
    coOfficialOrIndigenous: "Herencia taína y africana viva en léxico y música (son, salsa, merengue).",
    loanwords: "Taíno: huracán, canoa, hamaca, barbacoa, maíz.",
    lexis: { car: "el carro", bus: "la guagua", computer: "la computadora", phone: "el celular", job: "el trabajo / pincha" },
    sentences: {
      commute: {
        spanish: "¿Ustedes van a coger o tomar la guagua, o prefieren ir en carro?",
        spotlight: "Signature Canary/Caribbean noun **la guagua** ('bus') + *carro* and universal *ustedes*.",
      },
      tech: {
        spanish: "¿Ustedes desconectan la computadora y el celular antes de dormir?",
        spotlight: "Uses universal plural *ustedes*, *computadora*, and *celular*.",
      },
      wellbeing: {
        spanish: "Cuida tu bienestar y comparte un buen rato con tu familia sin apuro.",
        spotlight: "Uses *sin apuro* ('without rushing') and warm Caribbean *tuteo*.",
      },
    },
  },
  {
    key: "colombia",
    shortLabel: "Colombia",
    title: "Colombia (Bogotá, Medellín y Caribe)",
    cities: "Bogotá · Medellín · Cartagena · Cali",
    svgX: 194,
    svgY: 152,
    phonology: "Seseo; articulación clara en el altiplano bogotano; variedad costeña en el Caribe.",
    pronouns: "tú, usted (incluso afectivo en Bogotá!) y vos (Medellín/Cali) · ustedes (pl.)",
    voseoSample: "Región paisa/vallecaucana usa voseo; en Bogotá es frecuente *usted* cariñoso.",
    coOfficialOrIndigenous: "Más de 65 lenguas indígenas (wayuunaiki, nasa yuwe) y lenguas criollas (palenquero).",
    loanwords: "Léxico emblemático: chévere ('great'), tinto ('black coffee'), ciclovía.",
    lexis: { car: "el carro", bus: "el bus / TransMilenio", computer: "el computador", phone: "el celular", job: "el camello / trabajo" },
    sentences: {
      commute: {
        spanish: "¿Ustedes toman el bus o prefieren ir en bicicleta por la Ciclovía?",
        spotlight: "Highlights Bogotá's iconic **Ciclovía** alongside Colombian *el bus* and *ustedes*.",
      },
      tech: {
        spanish: "¿Apagan el computador y el celular para descansar mejor en la noche?",
        spotlight: "Colombian Spanish commonly uses masculine **el computador** alongside *el celular*.",
      },
      wellbeing: {
        spanish: "Tómese un tinto con calma y salga a caminar el domingo por la Ciclovía.",
        spotlight: "Demonstrates Bogotá's famously warm everyday **usted** (*tómese, salga*) and *tinto* ('black coffee').",
      },
    },
  },
  {
    key: "andina",
    shortLabel: "Andes",
    title: "Región Andina (Perú, Bolivia y Ecuador)",
    cities: "Lima · Cusco · La Paz · Quito",
    svgX: 196,
    svgY: 198,
    phonology: "Seseo con consonantes finales muy bien pronunciadas; contacto tonal con lenguas andinas.",
    pronouns: "tú / usted (sg.) · ustedes (pl. universal); voseo en partes de Bolivia y Ecuador.",
    voseoSample: "Fuerte bilingüismo español–quechua y español–aimara en tierras altas.",
    coOfficialOrIndigenous: "Quechua (~8–10M hablantes) y aimara (cooficiales en Bolivia y regiones de Perú/Ecuador).",
    loanwords: "Del quechua al español: cancha, papa, cóndor, carpa, quinua, mate.",
    lexis: { car: "el auto / carro", bus: "el bus / micro", computer: "la computadora", phone: "el celular", job: "la chamba / trabajo" },
    sentences: {
      commute: {
        spanish: "¿Ustedes toman el micro o prefieren ir en auto hacia el centro?",
        spotlight: "Uses Andean *micro* ('bus'), *auto*, and clear consonant articulation.",
      },
      tech: {
        spanish: "¿Apagan la computadora y el celular antes de compartir la cena?",
        spotlight: "Uses Latin American standard *computadora*, *celular*, and *ustedes*.",
      },
      wellbeing: {
        spanish: "Valora los alimentos ancestrales como la quinua y respeta el equilibrio con la Pachamama.",
        spotlight: "Connects Andean nutrition (*la quinua*) with ancestral worldview (*la Pachamama*).",
      },
    },
  },
  {
    key: "rioplatense",
    shortLabel: "Río de la Plata",
    title: "Río de la Plata y Paraguay (Cono Sur)",
    cities: "Buenos Aires · Montevideo · Asunción",
    svgX: 256,
    svgY: 238,
    phonology: "Seseo + sheísmo/zheísmo (`ll` y `y` suenan como `/ʃ/` en *calle, yo*); entonación italiana.",
    pronouns: "vos (voseo estándar universal!) · ustedes (pl. universal)",
    voseoSample: "Presente: vos hablás, tenés, podés, sos · Imperativo: ¡hablá!, ¡vení!, ¡andá!",
    coOfficialOrIndigenous: "Paraguay: guaraní cooficial nacional (bilingüismo mayoritario y *jopará*).",
    loanwords: "Guaraní y lunfardo: mate, laburo ('work'), pibe, che, cancha.",
    lexis: { car: "el auto", bus: "el colectivo", computer: "la computadora", phone: "el celular", job: "el laburo / trabajo" },
    sentences: {
      commute: {
        spanish: "¿Vos te tomás el colectivo o preferís ir en auto al laburo?",
        spotlight: "Authentic **voseo** (*vos te tomás, preferís*), *colectivo* ('bus'), *auto*, and *laburo*.",
      },
      tech: {
        spanish: "¿Apagás la computadora y el celular antes de dormir? ¡Tenés que descansar!",
        spotlight: "Present indicative *voseo* without stem diphthong: **tenés** (never *tienés*!) and **apagás**.",
      },
      wellbeing: {
        spanish: "¡Che, vení a tomar unos mates y charlá tranquilo sin mirar el celular!",
        spotlight: "Rioplatense **voseo imperatives** (*¡vení!, ¡charlá!*), vocative *¡che!*, and *mate* culture.",
      },
    },
  },
];

function LinguisticVariationWidget() {
  const [regionKey, setRegionKey] = useState<RegionKey>("rioplatense");
  const [sentenceKey, setSentenceKey] = useState<SentenceKey>("commute");

  const region = REGIONS.find((r) => r.key === regionKey) ?? REGIONS[0];
  const sample = region.sentences[sentenceKey];

  return (
    <WidgetFrame
      title="Hispanophone Linguistic Variation Explorer"
      tryThis={[
        "Click **España**, **México**, **Caribe**, **Colombia**, **Andes**, and **Río de la Plata** on the schematic map to compare phonology, pronouns, and indigenous/co-official languages.",
        "Switch the live **Same-Sentence Translator** across regions and watch how *vosotros → ustedes → vos* and *autobús → camión → colectivo → guagua* shift!",
      ]}
      caption={
        <div>
          <strong className="text-accent">Pluricentric takeaway:</strong> {sample.spotlight}
        </div>
      }
    >
      <div className="space-y-4">
        {/* Interactive Schematic Transatlantic Map */}
        <div className="rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 490 275"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Interactive schematic map of six Hispanophone linguistic regions across Latin America and Spain"
            className="w-full h-auto"
          >
            <rect x="0" y="0" width="490" height="275" rx="10" fill="#fdf7f4" />
            <text x="245" y="20" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#2b140c">
              El mundo hispanohablante policéntrico (haz clic en una región)
            </text>

            {/* Subtle ocean / schematic landmass silhouettes */}
            <path
              d="M55,68 L138,72 L166,118 L142,132 L110,122 L66,104 Z"
              fill="#faeae2"
              stroke="#eed3c6"
              strokeWidth="1.4"
            />
            <ellipse cx="204" cy="112" rx="34" ry="15" fill="#faeae2" stroke="#eed3c6" strokeWidth="1.4" />
            <path
              d="M174,140 L248,144 L292,196 L270,256 L226,264 L182,226 L168,176 Z"
              fill="#faeae2"
              stroke="#eed3c6"
              strokeWidth="1.4"
            />
            <path
              d="M366,52 L448,50 L454,96 L378,98 Z"
              fill="#faeae2"
              stroke="#eed3c6"
              strokeWidth="1.4"
            />

            {/* Transatlantic bridge arc */}
            <path
              d="M214,104 Q306,46 392,70"
              fill="none"
              stroke="#c2410c"
              strokeWidth="1.3"
              strokeDasharray="4 4"
              opacity="0.55"
            />
            <text x="306" y="48" textAnchor="middle" fontSize="8.8" fontWeight="700" fill="#6b483a">
              ASALE · 23 Academias
            </text>

            {REGIONS.map((r) => {
              const active = r.key === regionKey;
              return (
                <g
                  key={r.key}
                  onClick={() => setRegionKey(r.key)}
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${r.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setRegionKey(r.key);
                    }
                  }}
                >
                  {active ? (
                    <circle cx={r.svgX} cy={r.svgY} r="17" fill="#c2410c" opacity="0.2" />
                  ) : null}
                  <circle
                    cx={r.svgX}
                    cy={r.svgY}
                    r={active ? 10 : 7.5}
                    fill={active ? "#c2410c" : "#0f766e"}
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <text
                    x={r.svgX}
                    y={r.svgY + (r.key === "espana" ? 24 : 21)}
                    textAnchor="middle"
                    fontSize={active ? "10.5" : "9.5"}
                    fontWeight={active ? "800" : "700"}
                    fill={active ? "#9a3412" : "#2b140c"}
                  >
                    {r.shortLabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile-friendly region pills */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Choose Hispanophone region">
          {REGIONS.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setRegionKey(r.key)}
              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                r.key === regionKey
                  ? "border-brand bg-brand text-brand-ink"
                  : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {r.shortLabel}
            </button>
          ))}
        </div>

        {/* Live Sentence Switcher */}
        <div className="rounded-xl border border-line bg-surface p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 className="text-base font-extrabold text-ink">{region.title}</h4>
              <p className="text-xs font-semibold text-ink-2">{region.cities}</p>
            </div>
            <Segmented<SentenceKey>
              label="Choose Theme 1 sample sentence"
              value={sentenceKey}
              onChange={setSentenceKey}
              options={[
                { value: "commute", label: "Transporte" },
                { value: "tech", label: "Pantallas" },
                { value: "wellbeing", label: "Bienestar" },
              ]}
            />
          </div>

          <div className="rounded-lg bg-brand-soft/60 border border-brand/30 p-3">
            <div className="text-[11px] font-extrabold uppercase tracking-wide text-brand">
              Authentic regional phrasing
            </div>
            <p className="mt-1 text-base font-bold text-ink">«{sample.spanish}»</p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 text-xs">
            <div className="rounded-lg bg-surface-2/70 p-2.5">
              <div className="font-extrabold uppercase tracking-wide text-brand">Fonología</div>
              <p className="mt-1 leading-relaxed text-ink">{region.phonology}</p>
            </div>
            <div className="rounded-lg bg-surface-2/70 p-2.5">
              <div className="font-extrabold uppercase tracking-wide text-accent">Pronombres y verbos</div>
              <p className="mt-1 leading-relaxed text-ink">{region.pronouns}</p>
              <p className="mt-1 italic text-ink-2">{region.voseoSample}</p>
            </div>
            <div className="rounded-lg bg-surface-2/70 p-2.5">
              <div className="font-extrabold uppercase tracking-wide text-info">Lenguas cooficiales / originarias</div>
              <p className="mt-1 leading-relaxed text-ink">{region.coOfficialOrIndigenous}</p>
            </div>
            <div className="rounded-lg bg-surface-2/70 p-2.5">
              <div className="font-extrabold uppercase tracking-wide text-good">Préstamos e identidad</div>
              <p className="mt-1 leading-relaxed text-ink">{region.loanwords}</p>
            </div>
          </div>
        </div>

        {/* Responsive Lexis Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[460px] text-left text-xs">
            <thead className="bg-surface-2 text-ink">
              <tr>
                <th className="px-3 py-2 font-extrabold">Región</th>
                <th className="px-3 py-2 font-extrabold">Car</th>
                <th className="px-3 py-2 font-extrabold">City bus</th>
                <th className="px-3 py-2 font-extrabold">Computer</th>
                <th className="px-3 py-2 font-extrabold">Phone</th>
                <th className="px-3 py-2 font-extrabold">Work (colloq.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-surface">
              {REGIONS.map((r) => {
                const selected = r.key === regionKey;
                return (
                  <tr
                    key={`row-${r.key}`}
                    onClick={() => setRegionKey(r.key)}
                    className={`cursor-pointer transition ${
                      selected ? "bg-brand-soft/60 font-bold text-ink" : "text-ink-2 hover:bg-surface-2/40"
                    }`}
                  >
                    <td className="px-3 py-2 font-bold text-ink">{r.shortLabel}</td>
                    <td className="px-3 py-2">{r.lexis.car}</td>
                    <td className="px-3 py-2">{r.lexis.bus}</td>
                    <td className="px-3 py-2">{r.lexis.computer}</td>
                    <td className="px-3 py-2">{r.lexis.phone}</td>
                    <td className="px-3 py-2">{r.lexis.job}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "identidades-register-enhancer",
    title: "Idiomatic & Register Enhancer (B1 → Band 10–12)",
    blurb: "Upgrade IGCSE Spanish sentences on health, beliefs, and identity into IB Band 10–12 prose with live subjunctive & C1 connector lenses.",
    Component: RegisterEnhancerWidget,
  },
  {
    id: "identidades-linguistic-variation",
    title: "Hispanophone Linguistic Variation Explorer",
    blurb: "Compare Spain, Mexico, the Caribbean, Colombia, the Andes, and Rioplatense Spanish: voseo, seseo, regional lexis, and indigenous/co-official languages.",
    Component: LinguisticVariationWidget,
  },
];

export default widgets;
