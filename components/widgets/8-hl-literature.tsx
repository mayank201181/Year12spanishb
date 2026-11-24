"use client";

import { useEffect, useMemo, useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: 300-Word Literary Extract Annotator (~280w original Spanish text)
// =============================================================================

type LayerKey = "all" | "voz" | "simbolismo" | "campo" | "tema";
type ConcreteLayer = Exclude<LayerKey, "all">;

interface AnnotationNote {
  id: string;
  layer: ConcreteLayer;
  quote: string;
  device: string;
  commentaryEs: string;
  englishGloss: string;
  cueBullet: string;
}

interface TextSegment {
  text: string;
  noteId?: string;
}

const LAYER_META: Record<
  ConcreteLayer,
  { label: string; short: string; pillClass: string; activeSpanClass: string; badgeClass: string }
> = {
  voz: {
    label: "Voz narrativa",
    short: "Voz",
    pillClass: "bg-brand-soft text-brand border-brand/40",
    activeSpanClass: "bg-brand-soft text-ink border-b-2 border-brand hover:brightness-95",
    badgeClass: "bg-brand text-brand-ink",
  },
  simbolismo: {
    label: "Simbolismo y metáforas",
    short: "Símbolos",
    pillClass: "bg-accent-soft text-accent border-accent/40",
    activeSpanClass: "bg-accent-soft text-ink border-b-2 border-accent hover:brightness-95",
    badgeClass: "bg-accent text-white",
  },
  campo: {
    label: "Campo semántico y tono",
    short: "Tono/Léxico",
    pillClass: "bg-info-soft text-info border-info/40",
    activeSpanClass: "bg-info-soft text-ink border-b-2 border-info hover:brightness-95",
    badgeClass: "bg-info text-white",
  },
  tema: {
    label: "Vínculo temático",
    short: "Tema IB",
    pillClass: "bg-good-soft text-good border-good/40",
    activeSpanClass: "bg-good-soft text-ink border-b-2 border-good hover:brightness-95",
    badgeClass: "bg-good text-white",
  },
};

const ANNOTATIONS: Record<string, AnnotationNote> = {
  "v-1": {
    id: "v-1",
    layer: "voz",
    quote: "Clara sabía que nadie en aquella casa pronunciaría primero la palabra partida",
    device: "Narrador equisciente (focalización interna en Clara)",
    commentaryEs:
      "Al situar la tercera persona estrictamente desde la conciencia de Clara («sabía que nadie…»), la voz narrativa genera empatía inmediata y nos sumerge en la tensión psicológica previa a su decisión.",
    englishGloss:
      "Limited third-person focalisation through Clara creates instant psychological intimacy and foreshadows emotional confrontation.",
    cueBullet: "Narrador equisciente («sabía que nadie») → empatía",
  },
  "s-1": {
    id: "s-1",
    layer: "simbolismo",
    quote: "el reloj de la plaza masticaba los minutos con dientes herrumbrosos",
    device: "Personificación + metáfora orgánica del tiempo",
    commentaryEs:
      "La personificación del reloj que «masticaba los minutos con dientes herrumbrosos» convierte el paso del tiempo en una fuerza devoradora y decadente que oprime la vida cotidiana del pueblo.",
    englishGloss:
      "Personifying the town clock as rust-toothed and devouring transforms rural time into a decaying, suffocating antagonist.",
    cueBullet: "Reloj «dientes herrumbrosos» → tiempo devorador",
  },
  "c-1": {
    id: "c-1",
    layer: "campo",
    quote: "cal reseca, persianas entornadas y un silencio espeso",
    device: "Campo semántico de la clausura · Tono opresivo",
    commentaryEs:
      "El campo semántico de la aridez y el encierro («cal reseca», «persianas entornadas», «silencio espeso») construye un tono sofocante que refleja la rigidez de las normas tradicionales.",
    englishGloss:
      "A tight semantic field of dryness, shut blinds, and thick silence builds a claustrophobic mood of social control.",
    cueBullet: "Campo semántico encierro → tono sofocante",
  },
  "s-2": {
    id: "s-2",
    layer: "simbolismo",
    quote: "el billete de tren azul descansaba doblado bajo la fotografía de su abuelo",
    device: "Simbolismo y contraste espacial (futuro vs herencia)",
    commentaryEs:
      "La colocación física del «billete de tren azul» bajo la fotografía ancestral cristaliza visualmente el conflicto central: el anhelo de emancipación sometido todavía al peso moral del linaje.",
    englishGloss:
      "Placing the blue train ticket beneath the grandfather's photo visually embodies personal ambition weighed down by family heritage.",
    cueBullet: "Billete azul bajo foto abuelo → futuro vs linaje",
  },
  "t-1": {
    id: "t-1",
    layer: "tema",
    quote: "Aquí todos nos quedamos a sostener las paredes cuando el viento arreciaba",
    device: "Puente cultural y temático · Identidades (lealtad generacional)",
    commentaryEs:
      "La sentencia materna invoca el deber comunitario frente al desarraigo; más allá del plano familiar, dialoga con el tema de Identidades y con la España vaciada, donde emigrar se percibe a veces como traición.",
    englishGloss:
      "The mother's appeal to collective endurance bridges directly to Identidades and rural depopulation debates across Spain and Latin America.",
    cueBullet: "Deber familiar vs emigración → Identidades / rural",
  },
  "v-2": {
    id: "v-2",
    layer: "voz",
    quote: "¿Y si quedarse significaba marchitarse igual que el limonero del patio? ¡Qué miedo tan antiguo obedecer siempre!",
    device: "Estilo indirecto libre",
    commentaryEs:
      "Mediante el estilo indirecto libre, la narración absorbe sin comillas la angustia rebelde de Clara («¿Y si quedarse…?»), borrando la frontera entre narrador y personaje en el punto de inflexión emocional.",
    englishGloss:
      "Free indirect discourse lets Clara's rebellious panic erupt directly inside third-person narration at the emotional turning point.",
    cueBullet: "Estilo indirecto libre → quiebre interior",
  },
  "c-2": {
    id: "c-2",
    layer: "campo",
    quote: "un eco amargo y helado",
    device: "Sinestesia (oído + gusto + tacto) · Tono melancólico",
    commentaryEs:
      "La sinestesia «eco amargo y helado» fusiona sonido, sabor y frío para volver físicamente palpable la incomunicación entre madre e hija.",
    englishGloss:
      "Synaesthesia blends sound, bitterness, and cold so generational estrangement feels viscerally physical.",
    cueBullet: "Sinestesia «eco amargo y helado» → incomunicación",
  },
  "s-3": {
    id: "s-3",
    layer: "simbolismo",
    quote: "las campanas de las ocho sonaron como un aviso lejano",
    device: "Símil + presagio (foreshadowing)",
    commentaryEs:
      "El símil de las campanas «como un aviso lejano» actúa como un presagio auditivo que subraya la inminencia de una ruptura irreversible dentro de la obra.",
    englishGloss:
      "Comparing the eight-o'clock bells to a distant warning functions as auditory foreshadowing of an irreversible break.",
    cueBullet: "Campanas «aviso lejano» → símil y presagio",
  },
  "v-3": {
    id: "v-3",
    layer: "voz",
    quote: "Tomó la maleta de cuero gastado y, por primera vez en veinte años, abrió de par en par la ventana del pasillo",
    device: "Punto de inflexión · Cambio del imperfecto al pretérito",
    commentaryEs:
      "El paso decisivo del imperfecto descriptivo al pretérito perfecto simple («tomó», «abrió de par en par») marca el punto de inflexión: Clara abandona la pasividad y asume su propia agencia.",
    englishGloss:
      "Shifting from descriptive imperfect into crisp preterite verbs signals the decisive turning point from submission to personal agency.",
    cueBullet: "Giro pretérito «abrió de par en par» → agencia",
  },
  "t-2": {
    id: "t-2",
    layer: "tema",
    quote: "la beca universitaria en Madrid que ninguna mujer de la familia había pisado jamás",
    device: "Puente temático · Organización social (movilidad educativa y género)",
    commentaryEs:
      "Esta referencia histórica vincula el gesto íntimo con el tema de Organización social, evidenciando cómo el acceso femenino a la educación superior transforma estructuras patriarcales tradicionales.",
    englishGloss:
      "The first-generation university scholarship connects personal courage to Organización social: educational equity and changing gender roles.",
    cueBullet: "Primera beca femenina → Organización social",
  },
  "c-3": {
    id: "c-3",
    layer: "campo",
    quote: "aire limpio, claridad de abril y horizonte abierto",
    device: "Antítesis tonal · Giro hacia un campo semántico de libertad",
    commentaryEs:
      "Al contraponer «aire limpio» y «horizonte abierto» a la clausura inicial de la cal y las persianas, el autor desplaza el tono desde la asfixia hacia una esperanza lúcida y liberadora.",
    englishGloss:
      "A sudden semantic shift toward clean air, April light, and open horizon overturns the opening claustrophobia.",
    cueBullet: "Antítesis tonal: persianas vs «horizonte abierto»",
  },
  "t-3": {
    id: "t-3",
    layer: "tema",
    quote: "sabía que llevaría el polvo de aquella plaza en los zapatos aunque cruzara diez fronteras",
    device: "Síntesis crítica · Experiencias e Identidades híbridas",
    commentaryEs:
      "El cierre rehúye una oposición simplista: el subjuntivo concesivo («aunque cruzara diez fronteras») demuestra que emigrar no borra las raíces, abriendo una reflexión madura sobre identidad y memoria para la Parte 2.",
    englishGloss:
      "The closing concessive subjunctive avoids binary clichés: leaving home does not erase heritage — an ideal Part 2 discussion hook.",
    cueBullet: "Cierre «polvo en los zapatos» → raíces + gancho P2",
  },
};

const PARAGRAPHS: TextSegment[][] = [
  [
    { text: "Desde la galería superior, " },
    { text: "Clara sabía que nadie en aquella casa pronunciaría primero la palabra partida", noteId: "v-1" },
    { text: ". Afuera, " },
    { text: "el reloj de la plaza masticaba los minutos con dientes herrumbrosos", noteId: "s-1" },
    { text: " sobre un pueblo envuelto en " },
    { text: "cal reseca, persianas entornadas y un silencio espeso", noteId: "c-1" },
    { text: " que parecía heredado de generación en generación. Sobre la mesa del comedor, " },
    { text: "el billete de tren azul descansaba doblado bajo la fotografía de su abuelo", noteId: "s-2" },
    { text: ", junto a la carta oficial de " },
    { text: "la beca universitaria en Madrid que ninguna mujer de la familia había pisado jamás", noteId: "t-2" },
    { text: "." },
  ],
  [
    { text: "Su madre removía el café despacio, sin alzar los ojos de la taza agrietada. —" },
    { text: "Aquí todos nos quedamos a sostener las paredes cuando el viento arreciaba", noteId: "t-1" },
    { text: " —murmuró con voz serena, dejando " },
    { text: "un eco amargo y helado", noteId: "c-2" },
    { text: " entre las dos sillas. Clara apretó el borde del mantel. " },
    { text: "¿Y si quedarse significaba marchitarse igual que el limonero del patio? ¡Qué miedo tan antiguo obedecer siempre!", noteId: "v-2" },
    { text: " Recordó los veranos interminables viendo partir los autobuses hacia la capital mientras las tiendas cerraban una tras otra, y sintió que " },
    { text: "las campanas de las ocho sonaron como un aviso lejano", noteId: "s-3" },
    { text: " que ya no admitía excusas ni nuevas esperas." },
  ],
  [
    { text: "Respiró hondo sin responder con reproches. " },
    { text: "Tomó la maleta de cuero gastado y, por primera vez en veinte años, abrió de par en par la ventana del pasillo", noteId: "v-3" },
    { text: ". De inmediato entró una ráfaga de " },
    { text: "aire limpio, claridad de abril y horizonte abierto", noteId: "c-3" },
    { text: " que agitó las cortinas inmóviles durante décadas y trajo el olor lejano de los campos recién regados. Antes de bajar los escalones de piedra, miró de reojo el retrato del abuelo y comprendió que marcharse no equivalía a olvidar: " },
    { text: "sabía que llevaría el polvo de aquella plaza en los zapatos aunque cruzara diez fronteras", noteId: "t-3" },
    { text: "." },
  ],
];

function ExtractAnnotatorWidget() {
  const [layer, setLayer] = useState<LayerKey>("all");
  const [selectedId, setSelectedId] = useState<string>("v-1");
  const [visited, setVisited] = useState<string[]>(["v-1"]);

  const wordCount = useMemo(() => {
    const full = PARAGRAPHS.map((p) => p.map((s) => s.text).join("")).join(" ");
    return full.trim().split(/\s+/).filter(Boolean).length;
  }, []);

  const selectedNote = ANNOTATIONS[selectedId] ?? ANNOTATIONS["v-1"];

  const handleSelectNote = (id: string) => {
    setSelectedId(id);
    setVisited((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleLayerChange = (next: LayerKey) => {
    setLayer(next);
    if (next !== "all" && ANNOTATIONS[selectedId]?.layer !== next) {
      const firstInLayer = Object.values(ANNOTATIONS).find((n) => n.layer === next);
      if (firstInLayer) handleSelectNote(firstInLayer.id);
    }
  };

  const layerOptions: { value: LayerKey; label: string }[] = [
    { value: "all", label: "Todas (4 capas)" },
    { value: "voz", label: "1. Voz narrativa" },
    { value: "simbolismo", label: "2. Simbolismo" },
    { value: "campo", label: "3. Campo y tono" },
    { value: "tema", label: "4. Vínculo temático" },
  ];

  const meta = LAYER_META[selectedNote.layer];

  return (
    <WidgetFrame
      title="300-Word Literary Extract Annotator (4-Layer Close Read)"
      tryThis={[
        "Toggle each of the **4 highlight layers** (*Voz narrativa, Simbolismo, Campo y tono, Vínculo temático*) just like Minutes 2–7 of HL IO prep.",
        "Click any highlighted Spanish phrase inside the passage to reveal **Band 10–12 T–E–M Spanish commentary** and its **≤8-word cue-card bullet**.",
      ]}
      caption={
        <span>
          <strong>Original sample extract ({wordCount} words — transferable technique practice, zero prescribed set texts):</strong>{" "}
          Notice how every Band 10–12 insight anchors on a crisp 3–8 word phrase before connecting form → emotional effect → Hispanic cultural theme.
        </span>
      }
    >
      <div className="space-y-4 min-w-0">
        {/* Layer selector & quick readouts */}
        <div className="flex flex-col gap-3">
          <Segmented options={layerOptions} value={layer} onChange={handleLayerChange} label="Highlight annotation layers" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <Readout label="Extract Length" value={`${wordCount} words`} tone="ink" />
            <Readout label="Active Highlights" value={layer === "all" ? "12 / 12" : "3 / 12"} tone="brand" />
            <Readout label="Notes Explored" value={`${visited.length} / 12`} tone={visited.length >= 8 ? "good" : "ink"} />
          </div>
        </div>

        {/* Original literary extract */}
        <article
          aria-label="Original Spanish literary extract El reloj de la plaza vieja"
          className="rounded-xl border border-line bg-surface-2/60 p-4 sm:p-5 space-y-3 text-sm sm:text-[0.95rem] leading-7 text-ink"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2">
            <span className="font-extrabold text-ink">«El reloj de la plaza vieja»</span>
            <span className="chip text-xs">Original HL Practice Extract · {wordCount}w</span>
          </div>

          {PARAGRAPHS.map((para, pIdx) => (
            <p key={pIdx} className="leading-7">
              {para.map((seg, sIdx) => {
                if (!seg.noteId) return <span key={sIdx}>{seg.text}</span>;
                const note = ANNOTATIONS[seg.noteId];
                const isVisible = layer === "all" || layer === note.layer;
                const isSelected = selectedId === seg.noteId;
                const style = LAYER_META[note.layer];
                if (!isVisible) return <span key={sIdx}>{seg.text}</span>;
                return (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => handleSelectNote(seg.noteId!)}
                    aria-pressed={isSelected}
                    className={`inline text-left rounded px-1 py-0.5 transition cursor-pointer ${style.activeSpanClass} ${
                      isSelected ? "ring-2 ring-ink font-bold" : "font-semibold"
                    }`}
                  >
                    {seg.text}
                  </button>
                );
              })}
            </p>
          ))}
        </article>

        {/* Live Band 10-12 Examiner Commentary Panel */}
        <div className="rounded-xl border-2 border-line bg-surface p-4 space-y-3 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${meta.badgeClass}`}>{meta.label}</span>
            <span className="text-sm font-extrabold text-ink">{selectedNote.device}</span>
          </div>

          <blockquote className="rounded-lg border-l-4 border-brand bg-surface-2 px-3 py-2 text-sm italic text-ink">
            «{selectedNote.quote}»
          </blockquote>

          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
              Band 10–12 Spanish Commentary (T–E–M Model)
            </div>
            <p className="text-sm leading-relaxed text-ink">{selectedNote.commentaryEs}</p>
            <p className="text-xs leading-relaxed text-ink-2">{selectedNote.englishGloss}</p>
          </div>

          <div className="rounded-lg border border-line bg-good-soft/60 px-3 py-2 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-good">IB Cue-Card Micro-Bullet</span>
            <code className="text-xs sm:text-sm font-bold text-ink break-words">{selectedNote.cueBullet}</code>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: HL 20-Min Prep & 3–4 Min IO Speech Architect
// =============================================================================

type BlockId = "b1" | "b2" | "b3" | "b4";

interface SpeechBlockMeta {
  id: BlockId;
  shortLabel: string;
  title: string;
  timing: string;
  sharePct: number;
  startSec: number;
  endSec: number;
  slotIndices: number[];
  guidance: string;
}

const SPEECH_BLOCKS: SpeechBlockMeta[] = [
  {
    id: "b1",
    shortLabel: "1. Contexto",
    title: "Bloque 1 · Contexto y tesis interpretativa",
    timing: "0:00 – 0:40 (~18%)",
    sharePct: 18,
    startSec: 0,
    endSec: 40,
    slotIndices: [0, 1],
    guidance: "Name work, author, exact moment, and one crisp interpretive thesis linking extract → theme.",
  },
  {
    id: "b2",
    shortLabel: "2. Análisis",
    title: "Bloque 2 · Análisis cercano del extracto (CORE)",
    timing: "0:40 – 2:10 (~40%)",
    sharePct: 40,
    startSec: 40,
    endSec: 130,
    slotIndices: [2, 3, 4, 5],
    guidance: "Heart of Criterion B1: 2–3 interwoven techniques + short embedded quotes (T–E–M) + turning point.",
  },
  {
    id: "b3",
    shortLabel: "3. Obra y cultura",
    title: "Bloque 3 · Obra completa y cultura hispana",
    timing: "2:10 – 3:10 (~27%)",
    sharePct: 27,
    startSec: 130,
    endSec: 190,
    slotIndices: [6, 7],
    guidance: "Zero plot-dumping: 1 backward cause + 1 forward evolution + concrete Hispanic socio-historical lens.",
  },
  {
    id: "b4",
    shortLabel: "4. Reflexión",
    title: "Bloque 4 · Tema prescrito y reflexión crítica",
    timing: "3:10 – 3:45 (~15%)",
    sharePct: 15,
    startSec: 190,
    endSec: 225,
    slotIndices: [8, 9],
    guidance: "Synthesise Prescribed Theme + nuanced personal insight + plant one open question/hook for Part 2.",
  },
];

const SAMPLE_BULLETS: string[] = [
  "Reloj plaza vieja: despedida rural y beca",
  "Tesis: emancipación educativa frente al deber familiar",
  "Narrador equisciente + estilo indirecto libre («¿Y si…?»)",
  "Personificación reloj «dientes herrumbrosos» → estancamiento",
  "Símbolo billete azul bajo foto → futuro vs linaje",
  "Giro pretérito «abrió ventana» + antítesis aire limpio",
  "Obra completa: silencio previo → ruptura digna final",
  "Contexto hispano: España vaciada y acceso femenino universitario",
  "Temas IB: Identidades y Organización social",
  "Gancho P2: «polvo en zapatos» ¿emigrar borra raíces?",
];

const OVERLONG_TRAP_BULLETS: string[] = [
  "En este fragmento de la novela que leímos en clase vemos que Clara decide marcharse a la universidad en Madrid porque quiere estudiar.",
  "Tesis: emancipación educativa frente al deber familiar",
  "El autor usa una personificación muy interesante en el reloj de la plaza vieja porque dice que mastica los minutos con dientes herrumbrosos.",
  "Símbolo billete azul bajo foto → futuro vs linaje",
  "Sinestesia «eco amargo y helado» → incomunicación",
  "Giro pretérito «abrió ventana» → agencia personal",
  "Obra completa: silencio previo → ruptura final",
  "Contexto hispano: España vaciada y movilidad educativa",
  "Temas IB: Identidades y Organización social",
  "Gancho P2: ¿emigrar exige renunciar a las raíces?",
];

const PREP_PHASES = [
  {
    range: "0–2 min",
    minStart: 0,
    minEnd: 2,
    title: "1. Elección estratégica",
    detail: "Skim both ~300-word extracts. Pick the passage with richer imagery, clear tonal shift, and strong Prescribed Theme hooks — not merely your favourite plot scene.",
  },
  {
    range: "2–7 min",
    minStart: 2,
    minEnd: 7,
    title: "2. Lectura en 4 capas (V–E–C–P)",
    detail: "Mark the clean extract sheet directly: Voz narrativa/acotaciones · Espacio/tiempo/giro · Campos semánticos y recursos · Puente obra y tema.",
  },
  {
    range: "7–13 min",
    minStart: 7,
    minEnd: 13,
    title: "3. Citas breves y puentes",
    detail: "Circle 3–4 short quotes (2–6 words each), pick 1 backward cause + 1 forward motif evolution, and select 1 specific Hispanic socio-cultural lens.",
  },
  {
    range: "13–18 min",
    minStart: 13,
    minEnd: 18,
    title: "4. Guion de ≤10 viñetas",
    detail: "Draft 8–10 telegraphic bullets (4–8 words each, strictly ≤10 words) distributed across the 4 presentation blocks. Zero full sentences!",
  },
  {
    range: "18–20 min",
    minStart: 18,
    minEnd: 20,
    title: "5. Ensayo mental de apertura y giro",
    detail: "Silently rehearse your opening thesis sentence and your C1 transition (*«Más allá del conflicto íntimo…»*) so you launch calmly from second one.",
  },
];

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

function formatClock(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function SpeechArchitectWidget() {
  const [prepMin, setPrepMin] = useState<number>(5);
  const [activeBlock, setActiveBlock] = useState<BlockId>("b2");
  const [bullets, setBullets] = useState<string[]>(SAMPLE_BULLETS);
  const [seconds, setSeconds] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setSeconds((prev) => (prev >= 260 ? 260 : prev + 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const activePhase = useMemo(() => {
    return PREP_PHASES.find((p) => prepMin >= p.minStart && prepMin < p.minEnd) ?? PREP_PHASES[PREP_PHASES.length - 1];
  }, [prepMin]);

  const bulletStats = useMemo(() => {
    const counts = bullets.map(countWords);
    const filled = counts.filter((c) => c > 0).length;
    const overLimitIndices = counts.map((c, idx) => (c > 10 ? idx + 1 : -1)).filter((n) => n > 0);
    const maxWords = counts.reduce((acc, c) => Math.max(acc, c), 0);
    return { counts, filled, overLimitIndices, maxWords };
  }, [bullets]);

  const currentBlockMeta = SPEECH_BLOCKS.find((b) => b.id === activeBlock) ?? SPEECH_BLOCKS[0];

  const liveTimerBlock = useMemo(() => {
    if (seconds === 0) return "Ready — press Start to rehearse";
    if (seconds <= 40) return "Block 1 · Contexto y tesis (0:00–0:40)";
    if (seconds <= 130) return "Block 2 · Análisis cercano (0:40–2:10)";
    if (seconds <= 190) return "Block 3 · Obra y cultura (2:10–3:10)";
    if (seconds <= 230) return "Block 4 · Tema y reflexión (3:10–3:50)";
    if (seconds <= 240) return "⚠️ Final 10 s — land closing line before 4:00!";
    return "🛑 Past 4:00 ceiling — teacher interrupts for Part 2!";
  }, [seconds]);

  const timerTone: "brand" | "good" | "bad" | "ink" =
    seconds === 0 ? "ink" : seconds < 180 ? "brand" : seconds <= 235 ? "good" : "bad";

  const updateBullet = (idx: number, val: string) => {
    setBullets((prev) => prev.map((b, i) => (i === idx ? val : b)));
  };

  return (
    <WidgetFrame
      title="HL 20-Min Prep & 3–4 Min IO Speech Architect"
      tryThis={[
        "Slide the **20-minute HL prep clock** (0 → 20 min) to rehearse every phase of the official HL preparation protocol.",
        "Edit your **10 cue-card bullets** across all 4 blocks — try typing **11+ words** (or click *Test Prose Trap*) to trigger the **live IB bullet-length guard**!",
        "Run the **3–4 min presentation stopwatch** and aim to land your closing reflection inside the **3:30–3:50 green sweet spot**.",
      ]}
      caption={
        <span>
          <strong>Official HL IO reminder:</strong> HL gets <strong>20 minutes</strong> supervised prep (SL gets 15), up to{" "}
          <strong>10 short keyword bullets</strong>, and a <strong>3–4 minute</strong> presentation (4:00 hard cutoff). Keep cues to 4–8 words so Criterion A sounds fluent and spontaneous!
        </span>
      }
    >
      <div className="space-y-5 min-w-0">
        {/* PART A: 20-Minute HL Prep Slider + Visual Timeline */}
        <div className="rounded-xl border border-line bg-surface-2/60 p-3.5 sm:p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-extrabold text-ink">A. Official 20-Minute HL Prep Protocol</span>
            <span className="chip text-xs">{activePhase.range} · {activePhase.title}</span>
          </div>

          <Slider
            label="Prep clock minute"
            value={prepMin}
            min={0}
            max={20}
            step={1}
            onChange={setPrepMin}
            format={(v) => `Min ${v} / 20`}
          />

          {/* Compact responsive SVG timeline bar */}
          <svg
            viewBox="0 0 600 46"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="20-minute HL IO preparation timeline progress bar"
            className="w-full h-auto block"
          >
            <rect x="0" y="10" width="60" height="22" rx="4" fill="#ffedd5" stroke="#c2410c" strokeWidth="1" />
            <rect x="60" y="10" width="150" height="22" rx="4" fill="#ccfbf1" stroke="#0f766e" strokeWidth="1" />
            <rect x="210" y="10" width="180" height="22" rx="4" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1" />
            <rect x="390" y="10" width="150" height="22" rx="4" fill="#fef9c3" stroke="#a16207" strokeWidth="1" />
            <rect x="540" y="10" width="60" height="22" rx="4" fill="#dcfce7" stroke="#15803d" strokeWidth="1" />

            <text x="30" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9a3412">0–2</text>
            <text x="135" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="#134e4a">2–7 · 4-Layer</text>
            <text x="300" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0c4a6e">7–13 · Quotes &amp; Links</text>
            <text x="465" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="#713f12">13–18 · ≤10 Cues</text>
            <text x="570" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="#14532d">18–20</text>

            <line x1={prepMin * 30} y1="3" x2={prepMin * 30} y2="39" stroke="#2b140c" strokeWidth="3" strokeLinecap="round" />
            <circle cx={prepMin * 30} cy="21" r="6" fill="#c2410c" stroke="#ffffff" strokeWidth="2" />
          </svg>

          <p className="text-xs sm:text-sm leading-relaxed text-ink">{activePhase.detail}</p>
        </div>

        {/* PART B: 4-Block Cue-Bullet Architect + Live >10-Word Guard */}
        <div className="rounded-xl border border-line bg-surface p-3.5 sm:p-4 space-y-3 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-extrabold text-ink">B. 10-Bullet Speech Architect (4 Blocks)</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                className="btn btn-secondary btn-sm text-xs"
                onClick={() => setBullets(SAMPLE_BULLETS)}
              >
                Load Band 10–12 Sample
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm text-xs"
                onClick={() => setBullets(OVERLONG_TRAP_BULLETS)}
              >
                Test Prose Trap
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm text-xs"
                onClick={() => setBullets(Array(10).fill(""))}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <Readout label="Active Cues" value={`${bulletStats.filled} / 10`} tone={bulletStats.filled <= 10 ? "good" : "bad"} />
            <Readout
              label="Longest Cue"
              value={`${bulletStats.maxWords} words`}
              tone={bulletStats.maxWords > 10 ? "bad" : bulletStats.maxWords >= 9 ? "brand" : "good"}
            />
            <Readout
              label="Guard Status"
              value={bulletStats.overLimitIndices.length === 0 ? "IB Compliant ✓" : `${bulletStats.overLimitIndices.length} Too Long!`}
              tone={bulletStats.overLimitIndices.length === 0 ? "good" : "bad"}
            />
          </div>

          {/* Live >10-word IB Bullet-Length Guard Alert */}
          {bulletStats.overLimitIndices.length > 0 ? (
            <div
              role="alert"
              className="rounded-xl border-2 border-bad bg-bad-soft p-3 text-xs sm:text-sm font-semibold text-bad space-y-1"
            >
              <div>
                ⚠️ <strong>Bullet-Length Guard Triggered (Bullet #{bulletStats.overLimitIndices.join(", #")}):</strong>{" "}
                One or more cues exceed <strong>10 words</strong>!
              </div>
              <div className="text-ink font-normal">
                IB HL IO notes must be brief keyword bullets — reading prose sentences aloud lowers Criterion A intonation and breaks eye contact. Trim each cue to <strong>4–8 words</strong> using nouns, arrows (<code>→</code>), and 2–4 word quotes.
              </div>
            </div>
          ) : null}

          <Segmented
            options={SPEECH_BLOCKS.map((b) => ({ value: b.id, label: b.shortLabel }))}
            value={activeBlock}
            onChange={setActiveBlock}
            label="Presentation speech blocks"
          />

          <div className="rounded-xl bg-surface-2/60 p-3 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-extrabold text-ink">{currentBlockMeta.title}</span>
              <span className="chip text-xs">{currentBlockMeta.timing}</span>
            </div>
            <p className="text-xs text-ink-2">{currentBlockMeta.guidance}</p>

            <div className="space-y-2.5">
              {currentBlockMeta.slotIndices.map((slotIdx) => {
                const text = bullets[slotIdx] ?? "";
                const wc = bulletStats.counts[slotIdx] ?? 0;
                const over = wc > 10;
                const tight = wc >= 9 && wc <= 10;
                return (
                  <div key={slotIdx} className="space-y-1">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <label htmlFor={`hl-cue-${slotIdx}`} className="font-bold text-ink">
                        Cue #{slotIdx + 1}
                      </label>
                      <span
                        className={`font-extrabold tabular-nums ${
                          over ? "text-bad" : tight ? "text-warn" : wc > 0 ? "text-good" : "text-ink-2"
                        }`}
                      >
                        {wc} {wc === 1 ? "word" : "words"} {over ? "· >10w TRIM!" : wc > 0 && wc <= 8 ? "· ✓ crisp" : ""}
                      </span>
                    </div>
                    <input
                      id={`hl-cue-${slotIdx}`}
                      type="text"
                      value={text}
                      onChange={(e) => updateBullet(slotIdx, e.target.value)}
                      placeholder="Write a 4–8 word telegraphic cue (e.g. Símbolo llave → ruptura)"
                      className={`input text-sm py-2 ${over ? "border-bad bg-bad-soft/30" : ""}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PART C: 3–4 Min Live Presentation Rehearsal Timer */}
        <div className="rounded-xl border border-line bg-surface-2/60 p-3.5 sm:p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-extrabold text-ink">C. 3–4 Min Part 1 Rehearsal Stopwatch</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                className="btn btn-primary btn-sm text-xs"
                onClick={() => setRunning((r) => !r)}
              >
                {running ? "Pause" : seconds > 0 ? "Resume" : "Start Rehearsal"}
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm text-xs"
                onClick={() => {
                  setRunning(false);
                  setSeconds(0);
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Readout label="Elapsed Time (Max 4:00)" value={formatClock(seconds)} tone={timerTone} />
            <div className="rounded-xl border border-line bg-surface px-3 py-2 flex flex-col justify-center">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Target Pacing Cue</div>
              <div className="text-sm font-extrabold text-ink leading-snug">{liveTimerBlock}</div>
            </div>
          </div>

          {/* 4-minute bar with 3:00–4:00 zone marked */}
          <div className="space-y-1">
            <div className="h-3 w-full rounded-full bg-surface border border-line overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  seconds > 240 ? "bg-bad" : seconds >= 180 ? "bg-good" : "bg-brand"
                }`}
                style={{ width: `${Math.min(100, (seconds / 240) * 100)}%` }}
              />
            </div>
            <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[10px] sm:text-[11px] font-bold text-ink-2 tabular-nums">
              <span>0:00</span>
              <span>0:40 B2</span>
              <span>2:10 B3</span>
              <span>3:10 B4</span>
              <span className="text-good">3:30–3:50 ★</span>
              <span className="text-bad">4:00 MAX</span>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hl-extract-annotator",
    title: "300-Word Literary Extract Annotator",
    blurb: "Click through 4 close-reading layers on an original ~280-word Spanish extract to reveal Band 10–12 commentary and micro-bullets.",
    Component: ExtractAnnotatorWidget,
  },
  {
    id: "hl-io-speech-architect",
    title: "HL 20-Min Prep & 3–4 Min IO Speech Architect",
    blurb: "Walk the 20-min HL prep timeline, plan ≤10 short cue-bullets across 4 blocks with a live >10-word guard, and rehearse on a 3–4 min stopwatch.",
    Component: SpeechArchitectWidget,
  },
];

export default widgets;
