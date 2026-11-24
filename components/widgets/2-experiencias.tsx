"use client";
import { useState } from "react";
import { renderInline } from "../Rich";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Past-Tense Narrative Sequencer (Pluscuamperfecto · Imperfecto · Indefinido · [HL] Subjuntivo)
// ---------------------------------------------------------------------------

type StoryId = "barcelona" | "migracion" | "galapagos" | "muertos";

interface NarrativeStory {
  id: StoryId;
  label: string;
  region: string;
  layers: {
    pluscuam: {
      clause: string;
      verb: string;
      timeTag: string;
      note: string;
    };
    imperfecto: {
      clause: string;
      verb: string;
      timeTag: string;
      note: string;
    };
    indefinido: {
      clause: string;
      verb: string;
      timeTag: string;
      note: string;
    };
    hlSubj: {
      clause: string;
      verb: string;
      timeTag: string;
      note: string;
    };
  };
}

const STORIES: NarrativeStory[] = [
  {
    id: "barcelona",
    label: "Barcelona",
    region: "Turismo sostenible · España",
    layers: {
      pluscuam: {
        clause: "Antes de viajar a Barcelona, ya habíamos reservado un albergue cooperativo",
        verb: "habíamos reservado",
        timeTag: "T − 2 (antes)",
        note: "Action completed prior to the main trip anchor (*pluscuamperfecto*).",
      },
      imperfecto: {
        clause: "mientras recorríamos el Barrio Gótico y el calor era sofocante,",
        verb: "recorríamos / era",
        timeTag: "Fondo continuo",
        note: "Ongoing movement and weather painting the scene (*imperfecto*).",
      },
      indefinido: {
        clause: "conocimos a una asociación vecinal que nos explicó el impacto de los pisos turísticos.",
        verb: "conocimos / explicó",
        timeTag: "Hito puntual",
        note: "Completed first meeting (*conoció/conocimos* = met!) advancing the plot (*indefinido*).",
      },
      hlSubj: {
        clause: "Me sorprendió que tantos vecinos mantuvieran su hospitalidad pese a la masificación.",
        verb: "mantuvieran",
        timeTag: "[HL] Reflexión",
        note: "Past emotion trigger (*me sorprendió que*) pulls *mantener* into *imperfecto de subjuntivo*.",
      },
    },
  },
  {
    id: "migracion",
    label: "Migración",
    region: "Bogotá → Madrid · Historia de vida",
    layers: {
      pluscuam: {
        clause: "Cuando Sofía aterrizó en Madrid, ya había escrito a tres estudios y había hecho los trámites,",
        verb: "había escrito / hecho",
        timeTag: "T − 2 (antes)",
        note: "Irregular participles (*escrito, hecho*) anchor preparations finished before landing.",
      },
      imperfecto: {
        clause: "pero durante el primer invierno echaba de menos las sobremesas en Bogotá y sentía desarraigo,",
        verb: "echaba / sentía",
        timeTag: "Fondo continuo",
        note: "Ongoing emotional adjustment across the first winter (*imperfecto*).",
      },
      indefinido: {
        clause: "hasta que un día pudo homologar su título y fundó una red de apoyo para recién llegados.",
        verb: "pudo / fundó",
        timeTag: "Hito puntual",
        note: "*Pudo* (preterite of *poder*) marks succeeded/managed to; *fundó* seals the turning point.",
      },
      hlSubj: {
        clause: "Hablaba de su barrio natal como si todavía viviera frente a los cerros bogotanos.",
        verb: "viviera",
        timeTag: "[HL] Reflexión",
        note: "*Como si* ALWAYS governs *imperfecto* (or *pluscuamperfecto*) de subjuntivo.",
      },
    },
  },
  {
    id: "galapagos",
    label: "Galápagos",
    region: "Ecoturismo · Ecuador",
    layers: {
      pluscuam: {
        clause: "Antes de embarcar hacia Santa Cruz, los biólogos ya habían abierto un centro de educación ambiental",
        verb: "habían abierto",
        timeTag: "T − 2 (antes)",
        note: "Irregular participle *abierto* shows what existed before our arrival.",
      },
      imperfecto: {
        clause: "y, mientras navegábamos en silencio, las iguanas descansaban sobre la lava volcánica;",
        verb: "navegábamos / descansaban",
        timeTag: "Fondo continuo",
        note: "Simultaneous calm backdrop creating atmosphere (*imperfecto*).",
      },
      indefinido: {
        clause: "de repente, el guardaparque detuvo la lancha y nos advirtió sobre la capacidad de carga.",
        verb: "detuvo / advirtió",
        timeTag: "Hito puntual",
        note: "Sudden interruption (*de repente*) shifts crisply to *pretérito indefinido*.",
      },
      hlSubj: {
        clause: "Era imprescindible que nosotros respetáramos cada sendero marcado sin alterar el hábitat.",
        verb: "respetáramos",
        timeTag: "[HL] Reflexión",
        note: "Past impersonal evaluation (*era imprescindible que*) + *nosotros* tilde (**respetáramos**).",
      },
    },
  },
  {
    id: "muertos",
    label: "Oaxaca",
    region: "Día de los Muertos · México",
    layers: {
      pluscuam: {
        clause: "Al caer la tarde en Oaxaca, mi abuela ya había puesto las velas y el pan de muerto en la ofrenda;",
        verb: "había puesto",
        timeTag: "T − 2 (antes)",
        note: "Irregular participle *puesto* places altar preparation earlier in the afternoon.",
      },
      imperfecto: {
        clause: "en la plaza sonaba música tradicional y el aroma del cempasúchil llenaba todas las calles,",
        verb: "sonaba / llenaba",
        timeTag: "Fondo continuo",
        note: "Sensory description of sound and fragrance sets the stage (*imperfecto*).",
      },
      indefinido: {
        clause: "cuando mi primo regresó del extranjero y nos abrazó emocionado tras cinco años fuera.",
        verb: "regresó / abrazó",
        timeTag: "Hito puntual",
        note: "Completed reunion moments anchor the emotional climax (*indefinido*).",
      },
      hlSubj: {
        clause: "A toda la familia le conmovió que los más jóvenes quisieran aprender la historia de sus bisabuelos.",
        verb: "quisieran",
        timeTag: "[HL] Reflexión",
        note: "Past emotion (*le conmovió que*) triggers irregular stem *quisieron → quisieran*.",
      },
    },
  },
];

function PastTenseSequencer() {
  const [storyId, setStoryId] = useState<StoryId>("migracion");
  const [step, setStep] = useState<number>(3);
  const [levelMode, setLevelMode] = useState<"SL" | "HL">("HL");

  const story = STORIES.find((s) => s.id === storyId) ?? STORIES[0];
  const maxStep = levelMode === "HL" ? 4 : 3;
  const effectiveStep = Math.min(step, maxStep);

  const stepMeta = [
    {
      idx: 1,
      name: "Pretérito Pluscuamperfecto",
      role: "Earlier past (T − 2)",
      verb: story.layers.pluscuam.verb,
      note: story.layers.pluscuam.note,
      color: "#7c3aed",
    },
    {
      idx: 2,
      name: "Pretérito Imperfecto",
      role: "Ongoing backdrop / mood",
      verb: story.layers.imperfecto.verb,
      note: story.layers.imperfecto.note,
      color: "#0284c7",
    },
    {
      idx: 3,
      name: "Pretérito Indefinido",
      role: "Completed turning point",
      verb: story.layers.indefinido.verb,
      note: story.layers.indefinido.note,
      color: "#dc2626",
    },
    {
      idx: 4,
      name: "[HL] Imperfecto de Subjuntivo",
      role: "Past emotion / como si",
      verb: story.layers.hlSubj.verb,
      note: story.layers.hlSubj.note,
      color: "#4338ca",
    },
  ];

  const active = stepMeta[effectiveStep - 1];

  return (
    <WidgetFrame
      title="Past-Tense Narrative Sequencer"
      tryThis={[
        "Scrub the **Timeline Depth** slider from 1 → 3 (or 4 in HL mode) to watch how Spanish stacks *pluscuamperfecto*, *imperfecto*, and *indefinido*.",
        "Switch to **Migración** and inspect why *había escrito / hecho* must sit to the left of *pudo*.",
        "Toggle **HL** mode to append an *imperfecto de subjuntivo* reflection clause (*como si*, *me sorprendió que*).",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">
            Active layer {effectiveStep}/{maxStep}: <span style={{ color: active.color }}>{active.name}</span> —{" "}
            <span className="italic">{active.verb}</span>
          </div>
          <p className="text-ink-2">{renderInline(active.note)}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Choose Theme 2 story"
            value={storyId}
            onChange={setStoryId}
            options={STORIES.map((s) => ({ value: s.id, label: s.label }))}
          />
          <Segmented
            label="IB Level mode"
            value={levelMode}
            onChange={(m) => {
              setLevelMode(m);
              if (m === "SL" && step > 3) setStep(3);
            }}
            options={[
              { value: "SL", label: "SL (3 layers)" },
              { value: "HL", label: "HL (+ Subj.)" },
            ]}
          />
        </div>

        <Slider
          label={`Timeline Depth — ${story.region}`}
          value={effectiveStep}
          min={1}
          max={maxStep}
          step={1}
          onChange={setStep}
          format={(v) => `Layer ${v} / ${maxStep}`}
        />

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 640 200"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Interactive Spanish past narrative timeline for ${story.label} up to layer ${effectiveStep}`}
            className="block h-auto w-full"
          >
            <rect x="4" y="4" width="632" height="192" rx="10" fill="#f8fafc" />
            <line x1="36" y1="126" x2="592" y2="126" stroke="#64748b" strokeWidth={2.5} />
            <polygon points="592,120 608,126 592,132" fill="#64748b" />
            <text x="40" y="148" fontSize={10} fontWeight={700} fill="#475569">
              ANTES (T − 2)
            </text>
            <text x="540" y="148" fontSize={10} fontWeight={700} fill="#475569">
              PRESENTE
            </text>

            {/* Layer 1: Pluscuamperfecto */}
            <g opacity={effectiveStep >= 1 ? 1 : 0.25}>
              <line x1="115" y1="74" x2="115" y2="126" stroke="#7c3aed" strokeWidth={effectiveStep === 1 ? 3 : 2} />
              <circle cx="115" cy="126" r={effectiveStep === 1 ? 10 : 7} fill="#7c3aed" />
              <rect
                x="24"
                y="22"
                width="182"
                height="50"
                rx="8"
                fill={effectiveStep === 1 ? "#ede9fe" : "#f5f3ff"}
                stroke="#7c3aed"
                strokeWidth={effectiveStep === 1 ? 2.2 : 1.2}
              />
              <text x="115" y="41" textAnchor="middle" fontSize={11} fontWeight={700} fill="#5b21b6">
                1. Pluscuamperfecto
              </text>
              <text x="115" y="59" textAnchor="middle" fontSize={10} fill="#4c1d95">
                {story.layers.pluscuam.verb}
              </text>
            </g>

            {/* Layer 2: Imperfecto */}
            <g opacity={effectiveStep >= 2 ? 1 : 0.25}>
              <path
                d="M 205 126 Q 230 104, 255 126 T 305 126 T 355 126 T 405 126"
                fill="none"
                stroke="#0284c7"
                strokeWidth={effectiveStep === 2 ? 4 : 3}
                strokeDasharray="6 3"
              />
              <rect
                x="218"
                y="22"
                width="174"
                height="50"
                rx="8"
                fill={effectiveStep === 2 ? "#e0f2fe" : "#f0f9ff"}
                stroke="#0284c7"
                strokeWidth={effectiveStep === 2 ? 2.2 : 1.2}
              />
              <text x="305" y="41" textAnchor="middle" fontSize={11} fontWeight={700} fill="#0369a1">
                2. Imperfecto (fondo)
              </text>
              <text x="305" y="59" textAnchor="middle" fontSize={10} fill="#0c4a6e">
                {story.layers.imperfecto.verb}
              </text>
              <line x1="305" y1="72" x2="305" y2="112" stroke="#0284c7" strokeWidth={1.8} />
            </g>

            {/* Layer 3: Indefinido */}
            <g opacity={effectiveStep >= 3 ? 1 : 0.25}>
              <line x1="452" y1="74" x2="452" y2="126" stroke="#dc2626" strokeWidth={effectiveStep === 3 ? 3 : 2} />
              <circle cx="452" cy="126" r={effectiveStep === 3 ? 10 : 7} fill="#dc2626" />
              <rect
                x="404"
                y="22"
                width="148"
                height="50"
                rx="8"
                fill={effectiveStep === 3 ? "#fee2e2" : "#fef2f2"}
                stroke="#dc2626"
                strokeWidth={effectiveStep === 3 ? 2.2 : 1.2}
              />
              <text x="478" y="41" textAnchor="middle" fontSize={11} fontWeight={700} fill="#991b1b">
                3. Indefinido (hito)
              </text>
              <text x="478" y="59" textAnchor="middle" fontSize={10} fill="#7f1d1d">
                {story.layers.indefinido.verb}
              </text>
            </g>

            {/* Layer 4: HL Subjunctive reflection arc */}
            {levelMode === "HL" ? (
              <g opacity={effectiveStep >= 4 ? 1 : 0.25}>
                <path
                  d="M 452 135 Q 525 186, 565 135"
                  fill="none"
                  stroke="#4338ca"
                  strokeWidth={effectiveStep === 4 ? 3 : 2}
                  strokeDasharray="4 3"
                />
                <circle cx="565" cy="126" r={effectiveStep === 4 ? 8 : 6} fill="#4338ca" />
                <text x="506" y="182" textAnchor="middle" fontSize={11} fontWeight={700} fill="#312e81">
                  [HL] Imperf. Subj.: {story.layers.hlSubj.verb}
                </text>
              </g>
            ) : null}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Focused Tense" value={<span className="text-base">{active.name}</span>} tone="brand" />
          <Readout label="Aspect Role" value={<span className="text-base">{active.role}</span>} tone="ink" />
          <Readout label="Target Verb(s)" value={<span className="text-base">{active.verb}</span>} tone="good" />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm leading-relaxed text-ink">
          <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">
            Assembled Band 10–12 Spanish Narrative
          </div>
          <p className="space-x-1">
            <span className="rounded bg-purple-100 px-1 py-0.5 font-medium text-purple-900">
              {story.layers.pluscuam.clause}
            </span>
            {effectiveStep >= 2 ? (
              <span className="rounded bg-sky-100 px-1 py-0.5 font-medium text-sky-900">
                {story.layers.imperfecto.clause}
              </span>
            ) : null}
            {effectiveStep >= 3 ? (
              <span className="rounded bg-rose-100 px-1 py-0.5 font-medium text-rose-900">
                {story.layers.indefinido.clause}
              </span>
            ) : null}
            {levelMode === "HL" && effectiveStep >= 4 ? (
              <span className="mt-1 inline-block rounded bg-indigo-100 px-1 py-0.5 font-medium text-indigo-900">
                {story.layers.hlSubj.clause}
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Hispanic Festivals & Rites-of-Passage Intercultural Comparator
// ---------------------------------------------------------------------------

type TraditionId = "muertos" | "fallas" | "quinceanera" | "semana-santa" | "sobremesa" | "inti-raymi";
type LensId = "valores" | "tension" | "lexico" | "io";

interface TraditionProfile {
  id: TraditionId;
  short: string;
  name: string;
  region: string;
  scores: {
    community: number; // 0-100
    memory: number;
    commercialTension: number;
    sacredToCivic: number; // higher = civic/secular social, lower = sacred/spiritual
  };
  valores: string;
  tension: string;
  lexico: string;
  ioHook: string;
}

const TRADITIONS: TraditionProfile[] = [
  {
    id: "muertos",
    short: "Día Muertos",
    name: "Día de los Muertos",
    region: "México (Oaxaca, Michoacán)",
    scores: { community: 95, memory: 98, commercialTension: 85, sacredToCivic: 35 },
    valores: "Memoria colectiva, diálogo afectuoso con los antepasados y sincretismo indígena-católico.",
    tension: "Equilibrio entre el orgullo cultural (UNESCO 2008) y la mercantilización turística en cementerios.",
    lexico: "la ofrenda, la flor de cempasúchil, el pan de muerto, las calaveras literarias, se encienden velas.",
    ioHook: "En México se concibe la muerte como continuidad afectiva, no como un tabú aterrador.",
  },
  {
    id: "fallas",
    short: "Las Fallas",
    name: "Las Fallas de Valencia",
    region: "Valencia (España)",
    scores: { community: 92, memory: 78, commercialTension: 80, sacredToCivic: 88 },
    valores: "Sátira social y política, trabajo cooperativo de barrio (*comisiones falleras*) y renovación simbólica.",
    tension: "Debate entre el Patrimonio Inmaterial (UNESCO 2016) y el impacto acústico/ambiental de la pólvora y el humo.",
    lexico: "los ninots, la mascletà, la Cremà, la sátira cívica, se queman monumentos satíricos.",
    ioHook: "El humor y el fuego sirven como válvula cívica para cuestionar el poder desde la comunidad.",
  },
  {
    id: "quinceanera",
    short: "Quinceañera",
    name: "La Quinceañera",
    region: "América Latina y diáspora hispana",
    scores: { community: 88, memory: 74, commercialTension: 82, sacredToCivic: 62 },
    valores: "Rito de paso hacia la madurez y solidaridad de la familia extensa mediante el apoyo de los *padrinos*.",
    tension: "Cuestionamiento juvenil por el endeudamiento familiar y la evolución de los roles de género tradicionales.",
    lexico: "el rito de paso, los padrinos, el vals, el endeudamiento, se celebran reuniones familiares.",
    ioHook: "Muchas jóvenes hoy negocian entre honrar a sus padres y sustituir el baile por un viaje o estudios.",
  },
  {
    id: "semana-santa",
    short: "Semana Santa",
    name: "La Semana Santa",
    region: "Andalucía (España) y Antigua Guatemala",
    scores: { community: 90, memory: 92, commercialTension: 72, sacredToCivic: 22 },
    valores: "Devoción, patrimonio artístico barroco, disciplina comunitaria (*cofradías*) e identidad local incluso en contextos seculares.",
    tension: "Convivencia entre el recogimiento espiritual y la masificación turística en ciudades históricas.",
    lexico: "las cofradías, los pasos, las saetas, las alfombras de aserrín, solían marchar toda la noche.",
    ioHook: "Refleja cómo el arte popular mantiene viva la pertenencia comunitaria más allá de la práctica religiosa individual.",
  },
  {
    id: "sobremesa",
    short: "Sobremesa",
    name: "La Sobremesa",
    region: "España e Hispanoamérica",
    scores: { community: 96, memory: 82, commercialTension: 55, sacredToCivic: 95 },
    valores: "Tiempo relacional, escucha intergeneracional y prioridad del vínculo humano frente a la prisa productivista.",
    tension: "Amenazada por el uso de pantallas, las jornadas laborales urbanas y la rotación rápida en restaurantes.",
    lexico: "el tiempo relacional, la cohesión familiar, prolongar la charla, se comparte el café sin prisas.",
    ioHook: "Demuestra que las experiencias más definitorias de una cultura ocurren en los gestos cotidianos, no solo en grandes fiestas.",
  },
  {
    id: "inti-raymi",
    short: "Inti Raymi",
    name: "Inti Raymi (Fiesta del Sol)",
    region: "Cusco (Perú) y mundo andino",
    scores: { community: 89, memory: 96, commercialTension: 78, sacredToCivic: 40 },
    valores: "Reivindicación de las raíces quechuas, gratitud hacia la tierra (*Pachamama*) y orgullo indígena contemporáneo.",
    tension: "Tensión entre la recuperación histórica ancestral y su puesta en escena para miles de visitantes extranjeros.",
    lexico: "la cosmovisión andina, la lengua quechua, el solsticio de invierno, el arraigo ancestral.",
    ioHook: "Ilustra cómo las comunidades andinas utilizan el rito público para reafirmar su lengua e identidad ante la globalización.",
  },
];

const METRICS: Array<{ key: keyof TraditionProfile["scores"]; label: string }> = [
  { key: "community", label: "Cohesión comunitaria" },
  { key: "memory", label: "Memoria generacional" },
  { key: "commercialTension", label: "Presión turística / comercial" },
  { key: "sacredToCivic", label: "Carácter cívico-social" },
];

function FestivalsRitesComparator() {
  const [tradA, setTradA] = useState<TraditionId>("muertos");
  const [tradB, setTradB] = useState<TraditionId>("fallas");
  const [lens, setLens] = useState<LensId>("valores");

  const a = TRADITIONS.find((t) => t.id === tradA) ?? TRADITIONS[0];
  const b = TRADITIONS.find((t) => t.id === tradB) ?? TRADITIONS[1];

  const sameSelection = a.id === b.id;

  const cleanClause = (s: string) => s.replace(/\*/g, "").replace(/\.$/, "");
  const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

  const ioSynthesis = sameSelection
    ? "Select two different traditions above to generate a live Band 10–12 Spanish intercultural comparison."
    : `«Mientras que ${a.name} (${a.region}) destaca por ${lowerFirst(cleanClause(a.valores))}; en cambio, ${b.name} (${b.region}) subraya ${lowerFirst(cleanClause(b.valores))}. No obstante, ambas tradiciones reflejan el reto contemporáneo de preservar el arraigo cultural frente a la modernización.»`;

  return (
    <WidgetFrame
      title="Hispanic Festivals & Rites-of-Passage Comparator"
      tryThis={[
        "Compare **Día de los Muertos** with **Las Fallas** or **La Sobremesa** across the 4 cultural dimensions.",
        "Switch the **IB Analysis Lens** to **Tensión moderna** to harvest counter-arguments for Paper 1 and the IO.",
        "Use the live Spanish comparison sentence at the bottom to practise Band 10–12 IO transitions (*Mientras que..., en cambio..., no obstante...*).",
      ]}
      caption={
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Live IB Individual Oral Comparison Frame
          </div>
          <p className="italic text-ink">{ioSynthesis}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-1">
            <label htmlFor="trad-a-select" className="block text-xs font-bold uppercase tracking-wide text-brand">
              Tradition A (Teal bar)
            </label>
            <select
              id="trad-a-select"
              value={tradA}
              onChange={(e) => setTradA(e.target.value as TraditionId)}
              className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-bold text-ink"
            >
              {TRADITIONS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.region})
                </option>
              ))}
            </select>
          </div>
          <div className="min-w-0 space-y-1">
            <label htmlFor="trad-b-select" className="block text-xs font-bold uppercase tracking-wide text-amber-700">
              Tradition B (Amber bar)
            </label>
            <select
              id="trad-b-select"
              value={tradB}
              onChange={(e) => setTradB(e.target.value as TraditionId)}
              className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-bold text-ink"
            >
              {TRADITIONS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.region})
                </option>
              ))}
            </select>
          </div>
        </div>

        <Segmented
          label="IB Analytical Lens"
          value={lens}
          onChange={setLens}
          options={[
            { value: "valores", label: "Valores" },
            { value: "tension", label: "Tensión moderna" },
            { value: "lexico", label: "Léxico y gramática" },
            { value: "io", label: "Enfoque IO" },
          ]}
        />

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 600 198"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Intercultural comparison chart between ${a.name} and ${b.name}`}
            className="block h-auto w-full"
          >
            <rect x="2" y="2" width="596" height="194" rx="10" fill="#f8fafc" />
            <circle cx="28" cy="20" r="5" fill="#0d9488" />
            <text x="38" y="24" fontSize={11} fontWeight={700} fill="#115e59">
              {a.short}
            </text>
            <circle cx="158" cy="20" r="5" fill="#d97706" />
            <text x="168" y="24" fontSize={11} fontWeight={700} fill="#92400e">
              {b.short}
            </text>

            {METRICS.map((m, idx) => {
              const yBase = 44 + idx * 38;
              const barStart = 186;
              const maxW = 365;
              const wA = Math.round((a.scores[m.key] / 100) * maxW);
              const wB = Math.round((b.scores[m.key] / 100) * maxW);
              return (
                <g key={m.key}>
                  <text x="176" y={yBase + 14} textAnchor="end" fontSize={11} fontWeight={600} fill="#334155">
                    {m.label}
                  </text>
                  <rect x={barStart} y={yBase} width={maxW} height={11} rx="4" fill="#e2e8f0" />
                  <rect x={barStart} y={yBase} width={wA} height={11} rx="4" fill="#0d9488" />
                  <text x={barStart + wA + 6} y={yBase + 9} fontSize={10} fontWeight={700} fill="#115e59">
                    {a.scores[m.key]}
                  </text>
                  <rect x={barStart} y={yBase + 14} width={maxW} height={11} rx="4" fill="#e2e8f0" />
                  <rect x={barStart} y={yBase + 14} width={wB} height={11} rx="4" fill="#d97706" />
                  <text x={barStart + wB + 6} y={yBase + 23} fontSize={10} fontWeight={700} fill="#92400e">
                    {b.scores[m.key]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3 text-sm">
            <div className="font-extrabold text-teal-900">{a.name}</div>
            <div className="text-xs font-semibold text-teal-700">{a.region}</div>
            <p className="mt-2 leading-relaxed text-ink">
              {renderInline(
                lens === "valores"
                  ? a.valores
                  : lens === "tension"
                    ? a.tension
                    : lens === "lexico"
                      ? a.lexico
                      : a.ioHook,
              )}
            </p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3 text-sm">
            <div className="font-extrabold text-amber-900">{b.name}</div>
            <div className="text-xs font-semibold text-amber-700">{b.region}</div>
            <p className="mt-2 leading-relaxed text-ink">
              {renderInline(
                lens === "valores"
                  ? b.valores
                  : lens === "tension"
                    ? b.tension
                    : lens === "lexico"
                      ? b.lexico
                      : b.ioHook,
              )}
            </p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "past-tense-sequencer",
    title: "Past-Tense Narrative Sequencer",
    blurb: "Scrub through pluscuamperfecto, imperfecto, pretérito indefinido, and [HL] imperfecto de subjuntivo on a live story timeline.",
    Component: PastTenseSequencer,
  },
  {
    id: "festivals-rites-comparator",
    title: "Hispanic Festivals & Rites-of-Passage Comparator",
    blurb: "Compare values, modernisation tensions, grammar, and live IO comparative phrasing across Spain and Latin America.",
    Component: FestivalsRitesComparator,
  },
];

export default widgets;
