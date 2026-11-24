"use client";
import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// Widget 1: Argumentation & Counter-Argument Builder (Band 10–12 HL / C1)
// ============================================================================

type TopicKey = "clima" | "derechos" | "urbano" | "comercio";
type ConcessionKey = "sibien" | "aun";
type PivotKey = "noobstante" | "ahorabien";
type SynthesisKey = "imprescindible" | "deban";
type DraftMode = "c1" | "b1";

interface ArgTopicData {
  label: string;
  promptEn: string;
  b1Draft: string;
  concessionClause: string;
  rebuttalClause: string;
  evidenceClause: string;
  evidenceTag: string;
  synthesisMap: Record<
    SynthesisKey,
    { before: string; subjVerb: string; after: string; verbNote: string }
  >;
}

const ARG_TOPICS: Record<TopicKey, ArgTopicData> = {
  clima: {
    label: "Crisis climática",
    promptEn: "Should regional governments tighten water and circular-economy regulations despite short-term business costs?",
    b1Draft:
      "El cambio climático es un problema muy grande en España. Algunas personas dicen que las leyes verdes cuestan mucho dinero. Pero el agua es importante y debemos reciclar más para proteger la naturaleza.",
    concessionClause:
      "las restricciones hídricas y la transición hacia la economía circular exigen inversiones iniciales considerables para el sector agrícola",
    rebuttalClause:
      "el coste ecológico y económico de la inacción climática resultaría infinitamente superior a medio plazo",
    evidenceClause:
      "Tal como evidencia la sobreexplotación de los acuíferos de Doñana y la desertificación en Murcia, el modelo lineal de usar y tirar resulta insostenible",
    evidenceTag: "Doñana · Murcia",
    synthesisMap: {
      imprescindible: {
        before: "de ahí que ",
        subjVerb: "sea",
        after: " imprescindible acompañar la legislación ambiental con ayudas directas a las pequeñas explotaciones.",
        verbNote: "ser → sea (pres. subj.)",
      },
      deban: {
        before: "de ahí que las administraciones ",
        subjVerb: "deban",
        after: " subvencionar el riego inteligente y penalizar el despilfarro hídrico.",
        verbNote: "deber → deban (pres. subj.)",
      },
    },
  },
  derechos: {
    label: "Derechos humanos",
    promptEn: "Can economic extraction in Latin America ever override indigenous land rights and prior consultation?",
    b1Draft:
      "Los derechos humanos son fundamentales para todos. Algunas empresas dicen que las minas dan trabajo a la gente. Pero debemos respetar a los indígenas y proteger la selva porque es buena.",
    concessionClause:
      "los proyectos mineros y energéticos prometen divisas y empleo inmediato en regiones históricamente desatendidas",
    rebuttalClause:
      "ningún crecimiento económico que vulnere la dignidad humana ni fomente la impunidad puede considerarse verdadero progreso",
    evidenceClause:
      "Como demuestran los estudios satelitales en la Amazonia peruana y colombiana, los pueblos originarios con títulos legales frenan la tala ilegal con mayor eficacia",
    evidenceTag: "Amazonia · Consulta previa",
    synthesisMap: {
      imprescindible: {
        before: "de ahí que ",
        subjVerb: "resulte",
        after: " inaplazable garantizar la consulta previa, libre e informada y proteger a los defensores ambientales.",
        verbNote: "resultar → resulte (pres. subj.)",
      },
      deban: {
        before: "de ahí que los Estados ",
        subjVerb: "garanticen",
        after: " mecanismos vinculantes de justicia restaurativa frente a cualquier vulneración territorial.",
        verbNote: "garantizar → garanticen (-zar → -cen)",
      },
    },
  },
  urbano: {
    label: "Urbano–Rural",
    promptEn: "Is remote work enough to reverse rural depopulation in la España vaciada and ease megacity pressure?",
    b1Draft:
      "Muchos pueblos en España están vacíos y las grandes ciudades tienen demasiado tráfico. El teletrabajo es bueno porque la gente puede vivir en el campo. Por eso necesitamos internet rápido.",
    concessionClause:
      "el despliegue de fibra óptica y el auge del teletrabajo abren una oportunidad real para dinamizar comarcas de Soria, Teruel y Cuenca",
    rebuttalClause:
      "dicha medida resulta insuficiente por sí sola si no se frena el cierre de escuelas, consultorios y líneas ferroviarias",
    evidenceClause:
      "Mientras la España vaciada envejece sin servicios, megaciudades como Ciudad de México afrontan gentrificación, aunque modelos como el urbanismo social de Medellín demuestran que invertir en infraestructura pública transforma territorios",
    evidenceTag: "Teruel · Medellín",
    synthesisMap: {
      imprescindible: {
        before: "de ahí que ",
        subjVerb: "sea",
        after: " urgente articular un pacto de Estado que combine conectividad digital, vivienda asequible y sanidad rural.",
        verbNote: "ser → sea (pres. subj.)",
      },
      deban: {
        before: "de ahí que los gobiernos ",
        subjVerb: "impulsen",
        after: " incentivos fiscales y transporte público limpio para equilibrar el campo y la metrópoli.",
        verbNote: "impulsar → impulsen (pres. subj.)",
      },
    },
  },
  comercio: {
    label: "Comercio justo",
    promptEn: "Does individual ethical consumption suffice to fix fast fashion and unfair global supply chains?",
    b1Draft:
      "La ropa barata contamina mucho y los trabajadores ganan poco dinero. Aunque el comercio justo es más caro, es mejor comprarlo. Así podemos ayudar a los agricultores pobres del mundo.",
    concessionClause:
      "los productos certificados de comercio justo presentan un precio algo superior que dificulta su acceso a las familias con rentas modestas",
    rebuttalClause:
      "ese margen refleja el coste real de unos salarios dignos y una cadena de suministro libre de explotación",
    evidenceClause:
      "Ante el vertedero textil del desierto de Atacama y el ecoblanqueo corporativo, las cooperativas cafeteras de Colombia y Perú prueban que la trazabilidad ética es viable",
    evidenceTag: "Atacama · Cooperativas",
    synthesisMap: {
      imprescindible: {
        before: "de ahí que ",
        subjVerb: "resulte",
        after: " imperativo combinar la conciencia ciudadana con leyes vinculantes que sancionen la publicidad engañosa.",
        verbNote: "resultar → resulte (pres. subj.)",
      },
      deban: {
        before: "de ahí que las multinacionales ",
        subjVerb: "ofrezcan",
        after: " transparencia verificable y asuman el coste ambiental de sus residuos textiles.",
        verbNote: "ofrecer → ofrezcan (-cer → -zc-)",
      },
    },
  },
};

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function ArgumentationBuilder() {
  const [topic, setTopic] = useState<TopicKey>("clima");
  const [mode, setMode] = useState<DraftMode>("c1");
  const [concession, setConcession] = useState<ConcessionKey>("sibien");
  const [pivot, setPivot] = useState<PivotKey>("noobstante");
  const [includeEvidence, setIncludeEvidence] = useState<"on" | "off">("on");
  const [synthesis, setSynthesis] = useState<SynthesisKey>("imprescindible");

  const data = ARG_TOPICS[topic];
  const concessionIntro =
    concession === "sibien" ? "Si bien es cierto que" : "Aun reconociendo que";
  const pivotIntro =
    pivot === "noobstante"
      ? "no obstante,"
      : "ahora bien, conviene matizar que";
  const synth = data.synthesisMap[synthesis];

  const fullC1 = [
    `${concessionIntro} ${data.concessionClause}, ${pivotIntro} ${data.rebuttalClause}.`,
    includeEvidence === "on" ? `${data.evidenceClause};` : "Por todo ello;",
    `${synth.before}${synth.subjVerb}${synth.after}`,
  ].join(" ");

  const displayedText = mode === "c1" ? fullC1 : data.b1Draft;
  const wordCount = countWords(displayedText);
  const bandLabel =
    mode === "b1"
      ? "Band 5–6 (B1)"
      : includeEvidence === "on"
        ? "Band 10–12 (HL C1)"
        : "Band 8–9 (Add evidence!)";
  const bandTone: "good" | "bad" | "brand" =
    mode === "b1" ? "bad" : includeEvidence === "on" ? "good" : "brand";

  return (
    <WidgetFrame
      title="HL Argumentation & Counter-Argument Builder"
      tryThis={[
        "Switch between **Band 5–6 (B1)** and **Band 10–12 (C1)** to hear how concession + pivot + *de ahí que + subjuntivo* transforms the same idea.",
        "Toggle **Hispanophone Evidence** off and on: notice how cultural anchoring (Doñana, Amazonia, Teruel, Atacama) lifts Criterion B into the top band.",
        "Swap the synthesis frame and watch the **subjunctive verb** after *de ahí que* adjust automatically.",
      ]}
      caption={
        mode === "b1" ? (
          <span>
            <strong>Diagnostic:</strong> Repetitive B1 connectors (<em>algunas personas dicen… pero…</em>), vague adjectives (<em>grande, bueno</em>), zero cultural specifics, and no subjunctive synthesis cap this draft around Band 5–6.
          </span>
        ) : (
          <span>
            <strong>C-R-E-S Blueprint active:</strong> Respectful concession (<em>{concessionIntro}</em> + indicative) → formal pivot (<em>{pivotIntro}</em>) →{" "}
            {includeEvidence === "on"
              ? `Hispanophone evidence (${data.evidenceTag})`
              : "generic bridge (turn on evidence for Band 10–12!)"} → mandatory subjunctive after <em>de ahí que</em> (<strong>{synth.verbNote}</strong>).
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Segmented
            label="Theme 5 issue"
            value={topic}
            onChange={setTopic}
            options={[
              { value: "clima", label: "Clima" },
              { value: "derechos", label: "Derechos" },
              { value: "urbano", label: "Urbano–Rural" },
              { value: "comercio", label: "Comercio justo" },
            ]}
          />
          <Segmented
            label="Register level"
            value={mode}
            onChange={setMode}
            options={[
              { value: "c1", label: "Band 10–12 (C1)" },
              { value: "b1", label: "Band 5–6 (B1)" },
            ]}
          />
        </div>

        <p className="rounded-xl border border-line bg-surface-2 px-3 py-2 text-xs font-semibold text-ink-2">
          Prompt focus: <span className="text-ink">{data.promptEn}</span>
        </p>

        {mode === "c1" ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1.5 rounded-xl border border-line bg-surface p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-info">
                1. Concesión (+ Indicativo)
              </div>
              <Segmented
                label="Concession connector"
                value={concession}
                onChange={setConcession}
                options={[
                  { value: "sibien", label: "Si bien es cierto que" },
                  { value: "aun", label: "Aun reconociendo que" },
                ]}
              />
            </div>

            <div className="space-y-1.5 rounded-xl border border-line bg-surface p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-brand">
                2. Giro / Refutación
              </div>
              <Segmented
                label="Pivot connector"
                value={pivot}
                onChange={setPivot}
                options={[
                  { value: "noobstante", label: "no obstante," },
                  { value: "ahorabien", label: "ahora bien, conviene…" },
                ]}
              />
            </div>

            <div className="space-y-1.5 rounded-xl border border-line bg-surface p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-accent">
                3. Anclaje hispanohablante
              </div>
              <Segmented
                label="Hispanophone evidence"
                value={includeEvidence}
                onChange={setIncludeEvidence}
                options={[
                  { value: "on", label: `Con evidencia (${data.evidenceTag})` },
                  { value: "off", label: "Sin ejemplo cultural" },
                ]}
              />
            </div>

            <div className="space-y-1.5 rounded-xl border border-line bg-surface p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-good">
                4. Síntesis (de ahí que + Subj.)
              </div>
              <Segmented
                label="Synthesis structure"
                value={synthesis}
                onChange={setSynthesis}
                options={[
                  { value: "imprescindible", label: "Impersonal (sea/resulte)" },
                  { value: "deban", label: "Agente plural (+ subj.)" },
                ]}
              />
            </div>
          </div>
        ) : null}

        {/* Responsive 4-stage visual SVG flow */}
        <div className="w-full overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 600 62"
            className="h-auto w-full"
            role="img"
            aria-label="Four-stage C1 counter-argument flow indicator"
          >
            {[
              { x: 6, label: "1. Concesión", sub: "+ Indicativo", active: mode === "c1", fill: "#e0f2fe", stroke: "#0369a1", text: "#0c4a6e" },
              { x: 156, label: "2. Refutación", sub: "Giro formal", active: mode === "c1", fill: "#ffedd5", stroke: "#c2410c", text: "#9a3412" },
              { x: 306, label: "3. Evidencia", sub: data.evidenceTag, active: mode === "c1" && includeEvidence === "on", fill: "#ccfbf1", stroke: "#0f766e", text: "#115e59" },
              { x: 456, label: "4. Síntesis", sub: "de ahí que + Subj.", active: mode === "c1", fill: "#dcfce7", stroke: "#15803d", text: "#14532d" },
            ].map((stage, idx) => (
              <g key={stage.label} opacity={stage.active ? 1 : 0.35}>
                <rect
                  x={stage.x}
                  y={6}
                  width={136}
                  height={50}
                  rx={9}
                  fill={stage.fill}
                  stroke={stage.stroke}
                  strokeWidth={stage.active ? 2 : 1}
                />
                <text
                  x={stage.x + 68}
                  y={27}
                  textAnchor="middle"
                  fontSize={11.5}
                  fontWeight={700}
                  fill={stage.text}
                >
                  {stage.label}
                </text>
                <text
                  x={stage.x + 68}
                  y={44}
                  textAnchor="middle"
                  fontSize={10}
                  fill="#374151"
                >
                  {stage.sub}
                </text>
                {idx < 3 ? (
                  <polygon
                    points={`${stage.x + 141},26 ${stage.x + 150},31 ${stage.x + 141},36`}
                    fill="#6b483a"
                  />
                ) : null}
              </g>
            ))}
          </svg>
        </div>

        {/* Live Spanish Paragraph Output */}
        <div className="rounded-xl border-2 border-line bg-surface p-4 text-base leading-relaxed text-ink">
          {mode === "b1" ? (
            <p className="break-words text-ink-2">{data.b1Draft}</p>
          ) : (
            <p className="break-words">
              <span className="rounded bg-info-soft px-1.5 py-0.5 font-bold text-info">
                {concessionIntro}
              </span>{" "}
              {data.concessionClause},{" "}
              <span className="rounded bg-brand-soft px-1.5 py-0.5 font-bold text-brand">
                {pivotIntro}
              </span>{" "}
              {data.rebuttalClause}.{" "}
              {includeEvidence === "on" ? (
                <span className="rounded bg-accent-soft px-1 py-0.5 text-ink">
                  {data.evidenceClause};
                </span>
              ) : (
                <span className="text-ink-2">Por todo ello;</span>
              )}{" "}
              <span className="font-semibold text-good">{synth.before}</span>
              <span className="rounded bg-good-soft px-1.5 py-0.5 font-extrabold text-good underline decoration-2">
                {synth.subjVerb}
              </span>
              {synth.after}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <Readout label="IB Register Estimate" value={bandLabel} tone={bandTone} />
          <Readout label="Paragraph Length" value={`${wordCount} palabras`} tone="ink" />
          <Readout
            label="Subjunctive Check"
            value={mode === "c1" ? synth.subjVerb : "Ninguno"}
            tone={mode === "c1" ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// Widget 2: `Aunque` Mood & Reality Switcher
// ============================================================================

type RealityMode = "fact" | "hypothetical" | "counterfactual";

interface AunqueScenario {
  id: string;
  label: string;
  infinitive: string;
  prefix: string;
  fact: {
    verb: string;
    mid: string;
    mainClause: string;
    english: string;
    tenseNote: string;
  };
  hypothetical: {
    verb: string;
    mid: string;
    mainClause: string;
    english: string;
    tenseNote: string;
  };
  counterfactual: {
    verb: string;
    mid: string;
    mainClause: string;
    english: string;
    tenseNote: string;
  };
}

const AUNQUE_SCENARIOS: readonly AunqueScenario[] = [
  {
    id: "donana",
    label: "Doñana",
    infinitive: "llover",
    prefix: "Aunque",
    fact: {
      verb: "llueve",
      mid: " menos cada década en Andalucía,",
      mainClause: " los cultivos intensivos mantienen un alto consumo de agua.",
      english: "Even though it rains less every decade in Andalusia, intensive crops keep consuming vast amounts of water.",
      tenseNote: "Presente de indicativo (o → ue): documented trend.",
    },
    hypothetical: {
      verb: "llueva",
      mid: " con fuerza el próximo invierno,",
      mainClause: " los acuíferos de Doñana tardarán años en recuperarse.",
      english: "Even if it rains heavily next winter, Doñana's aquifers will take years to recover.",
      tenseNote: "Presente de subjuntivo (o → ue): uncertain future + future main verb.",
    },
    counterfactual: {
      verb: "lloviera",
      mid: " el doble este mes,",
      mainClause: " seguiríamos necesitando reformar el regadío ilegal.",
      english: "Even if it were to rain twice as much this month, we would still need to reform illegal irrigation.",
      tenseNote: "Imperfecto de subjuntivo: contrary-to-fact hypothesis + conditional.",
    },
  },
  {
    id: "amazonia",
    label: "Amazonia",
    infinitive: "existir",
    prefix: "Aunque",
    fact: {
      verb: "existen",
      mid: " leyes contra la tala ilegal en la cuenca amazónica,",
      mainClause: " su aplicación sobre el terreno sigue siendo desigual.",
      english: "Even though laws against illegal logging exist in the Amazon basin, enforcement on the ground remains uneven.",
      tenseNote: "Presente de indicativo: verified legal reality.",
    },
    hypothetical: {
      verb: "existan",
      mid: " multas más severas el año próximo,",
      mainClause: " sin vigilancia satelital ni consulta previa no bastarán.",
      english: "Even if harsher fines exist next year, without satellite monitoring and prior consultation they will not suffice.",
      tenseNote: "Presente de subjuntivo: projected / uncertain policy.",
    },
    counterfactual: {
      verb: "existieran",
      mid: " fondos ilimitados hoy mismo,",
      mainClause: " la selva tardaría décadas en recuperar su biodiversidad original.",
      english: "Even if unlimited funds existed right now, the rainforest would take decades to recover its original biodiversity.",
      tenseNote: "Imperfecto de subjuntivo + conditional (tardaría).",
    },
  },
  {
    id: "cafe",
    label: "Comercio justo",
    infinitive: "costar",
    prefix: "Aunque",
    fact: {
      verb: "cuesta",
      mid: " un poco más el café de comercio justo,",
      mainClause: " garantiza ingresos dignos a las cooperativas de Colombia y Perú.",
      english: "Even though fair-trade coffee costs a little more, it guarantees dignified incomes to cooperatives in Colombia and Peru.",
      tenseNote: "Presente de indicativo: known market price.",
    },
    hypothetical: {
      verb: "cueste",
      mid: " más en el supermercado,",
      mainClause: " merece la pena respaldar cadenas de suministro con trazabilidad.",
      english: "Even if it costs more (granting or dismissing the price!), it is worth supporting traceable supply chains.",
      tenseNote: "Presente de subjuntivo (o → ue): rhetorical dismissal of price objection.",
    },
    counterfactual: {
      verb: "costara",
      mid: " lo mismo que el café industrial,",
      mainClause: " todavía habría que educar al consumidor sobre el ecoblanqueo.",
      english: "Even if it cost the same as industrial coffee, we would still need to educate consumers about greenwashing.",
      tenseNote: "Imperfecto de subjuntivo: unlikely counterfactual + conditional (habría).",
    },
  },
  {
    id: "vaciada",
    label: "España vaciada",
    infinitive: "llegar",
    prefix: "Aunque",
    fact: {
      verb: "llega",
      mid: " ya la fibra óptica a varios pueblos de Teruel,",
      mainClause: " la falta de transporte público frena a las familias jóvenes.",
      english: "Even though fibre broadband already reaches several villages in Teruel, the lack of public transport holds young families back.",
      tenseNote: "Presente de indicativo: confirmed present fact (*ya*).",
    },
    hypothetical: {
      verb: "llegue",
      mid: " la fibra óptica a cada aldea el año que viene,",
      mainClause: " el éxodo rural continuará si se cierran escuelas y consultorios.",
      english: "Even if fibre broadband reaches every hamlet next year, rural exodus will continue if schools and clinics close.",
      tenseNote: "Presente de subjuntivo (-gar → -gue): uncertain future.",
    },
    counterfactual: {
      verb: "llegara",
      mid: " mañana el tren de alta velocidad a toda la comarca,",
      mainClause: " haría falta además vivienda asequible para atraer nuevos vecinos.",
      english: "Even if high-speed rail reached the entire county tomorrow, affordable housing would also be needed to attract newcomers.",
      tenseNote: "Imperfecto de subjuntivo + conditional (haría falta).",
    },
  },
  {
    id: "plastico",
    label: "Economía circular",
    infinitive: "reducir",
    prefix: "Aunque",
    fact: {
      verb: "reducimos",
      mid: " el plástico doméstico cada año,",
      mainClause: " el volumen global de residuos textiles sigue creciendo.",
      english: "Even though we reduce household plastic every year, the global volume of textile waste keeps growing.",
      tenseNote: "Presente de indicativo: measurable ongoing habit.",
    },
    hypothetical: {
      verb: "reduzcamos",
      mid: " a la mitad nuestros residuos personales,",
      mainClause: " la industria deberá abandonar la obsolescencia programada.",
      english: "Even if we cut our personal waste in half, industry will still have to abandon planned obsolescence.",
      tenseNote: "Presente de subjuntivo (*yo reduzco → reduzcamos*): hypothetical / dismissive.",
    },
    counterfactual: {
      verb: "redujéramos",
      mid: " a cero los envases mañana,",
      mainClause: " tendríamos aún que descarbonizar el transporte y la industria.",
      english: "Even if we cut packaging to zero tomorrow, we would still have to decarbonise transport and industry.",
      tenseNote: "Imperfecto de subjuntivo (irregular preterite *redujeron → redujéramos*).",
    },
  },
];

function AunqueMoodSwitcher() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [reality, setReality] = useState<RealityMode>("fact");

  const sc = AUNQUE_SCENARIOS[scenarioIdx];
  const active = sc[reality];

  const gaugeX = reality === "fact" ? 95 : reality === "hypothetical" ? 280 : 465;
  const moodLabel =
    reality === "fact"
      ? "Indicativo"
      : reality === "hypothetical"
        ? "Pres. Subjuntivo"
        : "Imp. Subjuntivo (HL)";
  const glossLabel =
    reality === "fact"
      ? "“Even though…”"
      : reality === "hypothetical"
        ? "“Even if…”"
        : "“Even if … were to…”";
  const moodTone: "good" | "brand" | "ink" =
    reality === "fact" ? "good" : "brand";

  return (
    <WidgetFrame
      title="«Aunque» Mood & Reality Switcher"
      tryThis={[
        "Toggle between **Hecho real (Indicativo)** and **Hipótesis / Reto (Subjuntivo)** — watch BOTH the verb after *aunque* and the main-clause tense shift together.",
        "Switch to **España vaciada** (*llegar*) or **Economía circular** (*reducir*) to observe key orthographic/irregular changes (*llegue*, *reduzcamos*, *redujéramos*).",
        "Try **Contrafactual (HL)** to see how *aunque* + imperfect subjunctive pairs with the conditional (*tardaría*, *seguiríamos*, *haría falta*).",
      ]}
      caption={
        <span>
          <strong>Grammar breakdown ({sc.infinitive}):</strong> {active.tenseNote}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            1. Choose a Theme 5 Global Scenario
          </div>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Theme 5 scenario">
            {AUNQUE_SCENARIOS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setScenarioIdx(idx)}
                className={`rounded-lg border px-3 py-1.5 text-sm font-bold transition ${
                  idx === scenarioIdx
                    ? "border-brand bg-brand-soft text-brand"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            2. Flip Speaker Reality &amp; Mood
          </div>
          <Segmented
            label="Reality and mood mode"
            value={reality}
            onChange={setReality}
            options={[
              { value: "fact", label: "Hecho real (Indicativo)" },
              { value: "hypothetical", label: "Hipótesis / Futuro (Subj.)" },
              { value: "counterfactual", label: "[HL] Contrafactual (Imp. Subj.)" },
            ]}
          />
        </div>

        {/* SVG Reality Spectrum Gauge */}
        <div className="w-full overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 88"
            className="h-auto w-full"
            role="img"
            aria-label="Reality spectrum showing indicative for verified facts versus subjunctive for hypothetical or counterfactual concessions"
          >
            <rect x="14" y="28" width="168" height="22" rx="11" fill="#dcfce7" stroke="#15803d" strokeWidth="1.4" />
            <rect x="196" y="28" width="168" height="22" rx="11" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1.4" />
            <rect x="378" y="28" width="168" height="22" rx="11" fill="#ffedd5" stroke="#c2410c" strokeWidth="1.4" />

            <text x="98" y="43" textAnchor="middle" fontSize="11" fontWeight="700" fill="#14532d">
              INDICATIVO (Real)
            </text>
            <text x="280" y="43" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0c4a6e">
              PRES. SUBJ. (Incierto)
            </text>
            <text x="462" y="43" textAnchor="middle" fontSize="11" fontWeight="700" fill="#9a3412">
              IMP. SUBJ. (Contrafactual)
            </text>

            {/* Pointer triangle */}
            <polygon points={`${gaugeX - 9},10 ${gaugeX + 9},10 ${gaugeX},24`} fill="#c2410c" />
            <circle cx={gaugeX} cy="64" r="6" fill="#c2410c" />
            <text x="280" y="80" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#6b483a">
              Realidad verificada ───────────→ Posibilidad / Descarte ───────────→ Hipótesis irreal (HL)
            </text>
          </svg>
        </div>

        {/* Highlighted Spanish Sentence & English Shift */}
        <div className="space-y-2.5 rounded-xl border-2 border-line bg-surface p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Oración en español (verbo: <span className="text-brand">{sc.infinitive}</span>)
          </div>
          <p className="break-words text-lg font-medium leading-relaxed text-ink">
            <span className="font-bold text-ink-2">{sc.prefix}</span>{" "}
            <span
              className={`rounded-lg px-2 py-0.5 font-extrabold ${
                reality === "fact"
                  ? "bg-good-soft text-good"
                  : reality === "hypothetical"
                    ? "bg-info-soft text-info"
                    : "bg-brand-soft text-brand"
              }`}
            >
              {active.verb}
            </span>
            {active.mid}
            <span className="text-ink-2">{active.mainClause}</span>
          </p>
          <div className="border-t border-line pt-2 text-sm text-ink-2">
            <span className="font-bold text-ink">English nuance: </span>
            {active.english}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <Readout label="Selected Mood" value={moodLabel} tone={moodTone} />
          <Readout label="Conjugated Form" value={active.verb} tone="ink" />
          <Readout label="English Gloss" value={glossLabel} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "argumentacion-contraargumento-builder",
    title: "Argumentation & Counter-Argument Builder",
    blurb:
      "Combine concession (si bien es cierto que…), pivot (no obstante…), Hispanophone evidence, and de ahí que + subjuntivo to craft Band 10–12 paragraphs.",
    Component: ArgumentationBuilder,
  },
  {
    id: "aunque-mood-switcher",
    title: "«Aunque» Mood & Reality Switcher",
    blurb:
      "Flip between verified facts (indicative), future/dismissive concessions (present subjunctive), and HL counterfactuals (imperfect subjunctive).",
    Component: AunqueMoodSwitcher,
  },
];

export default widgets;
