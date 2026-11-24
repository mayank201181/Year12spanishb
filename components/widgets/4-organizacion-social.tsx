"use client";
import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Formal-vs-Informal Register Converter (tú ↔ usted)
// ---------------------------------------------------------------------------

type ScenarioKey = "ong" | "practicas" | "propuesta";
type RegisterMode = "tu" | "usted" | "compare";
type HighlightKind = "all" | "saludo" | "verbo" | "pronombre";
type SegmentTag = "plain" | "saludo" | "verbo" | "pronombre";

interface TextSegment {
  text: string;
  tag: SegmentTag;
}

interface ShiftPair {
  tu: string;
  usted: string;
  category: "saludo" | "verbo" | "pronombre";
  why: string;
}

interface RegisterScenario {
  id: ScenarioKey;
  label: string;
  tuTextType: string;
  ustedTextType: string;
  tuSegments: TextSegment[];
  ustedSegments: TextSegment[];
  shifts: ShiftPair[];
  tip: string;
}

const REGISTER_SCENARIOS: Record<ScenarioKey, RegisterScenario> = {
  ong: {
    id: "ong",
    label: "Voluntariado ONG",
    tuTextType: "Correo informal / Blog",
    ustedTextType: "Carta formal a la Alcaldía",
    tuSegments: [
      { text: "Hola Sofía,", tag: "saludo" },
      { text: "\n\n", tag: "plain" },
      { text: "Te escribo", tag: "pronombre" },
      { text: " porque sé que siempre ", tag: "plain" },
      { text: "colaboras", tag: "verbo" },
      { text: " con el banco de alimentos. ¿", tag: "plain" },
      { text: "Puedes", tag: "verbo" },
      { text: " compartir ", tag: "plain" },
      { text: "tu", tag: "pronombre" },
      { text: " experiencia el sábado? ", tag: "plain" },
      { text: "Ven", tag: "verbo" },
      { text: " al centro cívico y ", tag: "plain" },
      { text: "dinos", tag: "verbo" },
      { text: " cómo mejorar la campaña. ", tag: "plain" },
      { text: "No te olvides", tag: "pronombre" },
      { text: " de avisar.\n\n", tag: "plain" },
      { text: "Un abrazo,", tag: "saludo" },
    ],
    ustedSegments: [
      { text: "Estimada Sra. Alcaldesa:", tag: "saludo" },
      { text: "\n\n", tag: "plain" },
      { text: "Le escribo", tag: "pronombre" },
      { text: " porque sabemos que siempre ", tag: "plain" },
      { text: "colabora", tag: "verbo" },
      { text: " con el banco de alimentos. ¿", tag: "plain" },
      { text: "Podría", tag: "verbo" },
      { text: " compartir ", tag: "plain" },
      { text: "su", tag: "pronombre" },
      { text: " experiencia el sábado? ", tag: "plain" },
      { text: "Venga", tag: "verbo" },
      { text: " al centro cívico y ", tag: "plain" },
      { text: "díganos", tag: "verbo" },
      { text: " cómo mejorar la campaña. ", tag: "plain" },
      { text: "No se olvide", tag: "pronombre" },
      { text: " de confirmar asistencia.\n\n", tag: "plain" },
      { text: "Le saluda atentamente,", tag: "saludo" },
    ],
    shifts: [
      { tu: "Hola Sofía, → Un abrazo,", usted: "Estimada Sra. Alcaldesa: → Le saluda atentamente,", category: "saludo", why: "Spanish formal salutations ALWAYS end in a colon (:), never a comma." },
      { tu: "Te escribo / tu / No te olvides", usted: "Le escribo / su / No se olvide", category: "pronombre", why: "Indirect object te → le, possessive tu → su, reflexive te → se." },
      { tu: "colaboras / puedes / ven / dinos", usted: "colabora / podría / venga / díganos", category: "verbo", why: "3rd-person singular verbs, conditional of courtesy, and subjunctive usted imperatives (with accent on díganos)." },
    ],
    tip: "In Criterion C, mixing a formal greeting («Estimada Sra. Alcaldesa:») with even ONE informal «te» or «tu» drops your register band.",
  },
  practicas: {
    id: "practicas",
    label: "Prácticas laborales",
    tuTextType: "Mensaje a un amigo",
    ustedTextType: "Carta de presentación",
    tuSegments: [
      { text: "Querido Mateo,", tag: "saludo" },
      { text: "\n\n", tag: "plain" },
      { text: "Te mando", tag: "pronombre" },
      { text: " mi currículo porque ", tag: "plain" },
      { text: "trabajas", tag: "verbo" },
      { text: " en el departamento de energías renovables. ", tag: "plain" },
      { text: "Mira", tag: "verbo" },
      { text: " si encajo en ", tag: "plain" },
      { text: "tu", tag: "pronombre" },
      { text: " equipo de prácticas de FP Dual y ", tag: "plain" },
      { text: "no dudes", tag: "verbo" },
      { text: " en llamar", tag: "plain" },
      { text: "me", tag: "plain" },
      { text: ".\n\n", tag: "plain" },
      { text: "¡Nos vemos pronto!", tag: "saludo" },
    ],
    ustedSegments: [
      { text: "Estimado Sr. Director de Recursos Humanos:", tag: "saludo" },
      { text: "\n\n", tag: "plain" },
      { text: "Le adjunto", tag: "pronombre" },
      { text: " mi currículo porque ", tag: "plain" },
      { text: "dirige", tag: "verbo" },
      { text: " el departamento de energías renovables. ", tag: "plain" },
      { text: "Considere", tag: "verbo" },
      { text: " mi solicitud para ", tag: "plain" },
      { text: "su", tag: "pronombre" },
      { text: " equipo de prácticas de FP Dual y ", tag: "plain" },
      { text: "no dude", tag: "verbo" },
      { text: " en contactar conmigo.\n\n", tag: "plain" },
      { text: "Quedo a su entera disposición. Atentamente,", tag: "saludo" },
    ],
    shifts: [
      { tu: "Querido Mateo, → ¡Nos vemos pronto!", usted: "Estimado Sr. Director...: → Quedo a su entera disposición. Atentamente,", category: "saludo", why: "Cover letters replace personal affection with formal availability for an interview." },
      { tu: "Te mando / tu equipo", usted: "Le adjunto / su equipo", category: "pronombre", why: "Swap te → le, tu → su, and elevate lexical choice (mandar → adjuntar)." },
      { tu: "trabajas / mira / no dudes", usted: "dirige / considere / no dude", category: "verbo", why: "Drop -s in present and negative imperative (no dudes → no dude); use subjunctive usted imperative (considere)." },
    ],
    tip: "Never write «aplicar para unas prácticas» in a cover letter—use «solicitar una plaza de prácticas» and «adjunto mi currículo».",
  },
  propuesta: {
    id: "propuesta",
    label: "Propuesta [HL]",
    tuTextType: "Entrada de blog escolar",
    ustedTextType: "Propuesta oficial [HL]",
    tuSegments: [
      { text: "¡Hola a todos!", tag: "saludo" },
      { text: "\n\nSi ", tag: "plain" },
      { text: "apoyas", tag: "verbo" },
      { text: " la creación de becas de transporte, ", tag: "plain" },
      { text: "firma", tag: "verbo" },
      { text: " nuestra petición hoy mismo. ", tag: "plain" },
      { text: "Te aseguro", tag: "pronombre" },
      { text: " que ", tag: "plain" },
      { text: "tu", tag: "pronombre" },
      { text: " voto ayuda a frenar el abandono escolar. ", tag: "plain" },
      { text: "Organiza", tag: "verbo" },
      { text: " una charla en clase.\n\n", tag: "plain" },
      { text: "¡Gracias por leerme!", tag: "saludo" },
    ],
    ustedSegments: [
      { text: "Asunto: Propuesta de becas de transporte · Estimada Sra. Concejala:", tag: "saludo" },
      { text: "\n\nSi ", tag: "plain" },
      { text: "respalda", tag: "verbo" },
      { text: " la creación de becas de transporte, ", tag: "plain" },
      { text: "valore", tag: "verbo" },
      { text: " aprobar esta partida piloto. ", tag: "plain" },
      { text: "Le garantizamos", tag: "pronombre" },
      { text: " que ", tag: "plain" },
      { text: "su", tag: "pronombre" },
      { text: " apoyo contribuirá a frenar el abandono escolar. ", tag: "plain" },
      { text: "Organice", tag: "verbo" },
      { text: " una mesa técnica con el alumnado.\n\n", tag: "plain" },
      { text: "Agradeciendo su atención, le saludamos atentamente,", tag: "saludo" },
    ],
    shifts: [
      { tu: "¡Hola a todos! → ¡Gracias por leerme!", usted: "Asunto: ... Estimada Sra. Concejala: → Le saludamos atentamente,", category: "saludo", why: "HL propuestas include an institutional Asunto line, formal salutation (:), and diplomatic sign-off." },
      { tu: "Te aseguro / tu voto", usted: "Le garantizamos / su apoyo", category: "pronombre", why: "Collective institutional voice (garantizamos) + formal le / su elevates authority." },
      { tu: "apoyas / firma / organiza", usted: "respalda / valore / organice", category: "verbo", why: "Note the orthographic shift in -zar verbs: organiza (tú) → organice (usted, z → c before e)." },
    ],
    tip: "HL Propuestas (450–600 words) shine when you pair 100% usted consistency with diplomatic verbs (valorar, respaldar, instar a que + subj.).",
  },
};

function segmentBadgeClass(tag: SegmentTag, activeFilter: HighlightKind): string {
  if (tag === "plain") return "";
  if (activeFilter !== "all" && activeFilter !== tag) return "";
  if (tag === "saludo") return "rounded bg-warn-soft px-1 py-0.5 font-bold text-warn";
  if (tag === "verbo") return "rounded bg-brand-soft px-1 py-0.5 font-bold text-brand";
  return "rounded bg-accent-soft px-1 py-0.5 font-bold text-accent";
}

function RegisterBlock({
  title,
  subtitle,
  segments,
  filter,
  accentTone,
}: {
  title: string;
  subtitle: string;
  segments: TextSegment[];
  filter: HighlightKind;
  accentTone: "brand" | "accent";
}) {
  const border = accentTone === "accent" ? "border-accent/40 bg-surface" : "border-brand/40 bg-surface";
  const badge = accentTone === "accent" ? "bg-accent-soft text-accent" : "bg-brand-soft text-brand";
  return (
    <div className={`rounded-xl border p-3.5 sm:p-4 ${border}`}>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-extrabold ${badge}`}>{title}</span>
        <span className="text-xs font-semibold text-ink-2">{subtitle}</span>
      </div>
      <p className="whitespace-pre-line break-words text-sm leading-relaxed text-ink">
        {segments.map((seg, i) => (
          <span key={i} className={segmentBadgeClass(seg.tag, filter)}>
            {seg.text}
          </span>
        ))}
      </p>
    </div>
  );
}

function RegisterConverterWidget() {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>("ong");
  const [mode, setMode] = useState<RegisterMode>("compare");
  const [filter, setFilter] = useState<HighlightKind>("all");

  const sc = REGISTER_SCENARIOS[scenarioKey];
  const visibleShifts = filter === "all" ? sc.shifts : sc.shifts.filter((s) => s.category === filter);

  return (
    <WidgetFrame
      title="Formal-vs-Informal Register Converter (tú ↔ usted)"
      tryThis={[
        "Switch between **Tú**, **Usted**, and **Comparar** to watch all five register layers transform at once.",
        "Filter by **Verbos e imperativos** and spot why *organiza* changes spelling to *organice* (*z → c*).",
        "Check the **Propuesta [HL]** scenario to see how institutional headers (*Asunto:*) and colon punctuation work.",
      ]}
      caption={
        <span>
          <strong>Examiner insight (Criterion C):</strong> {sc.tip}
        </span>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-col gap-2.5">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Escenario (Theme 4)</div>
            <Segmented<ScenarioKey>
              label="Choose scenario"
              value={scenarioKey}
              onChange={setScenarioKey}
              options={[
                { value: "ong", label: "Voluntariado ONG" },
                { value: "practicas", label: "Prácticas laborales" },
                { value: "propuesta", label: "Propuesta [HL]" },
              ]}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Vista de registro</div>
              <Segmented<RegisterMode>
                label="Choose register view"
                value={mode}
                onChange={setMode}
                options={[
                  { value: "tu", label: "Tú (Informal)" },
                  { value: "usted", label: "Usted (Formal)" },
                  { value: "compare", label: "Comparar" },
                ]}
              />
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Resaltar cambios</div>
              <Segmented<HighlightKind>
                label="Highlight grammar shifts"
                value={filter}
                onChange={setFilter}
                options={[
                  { value: "all", label: "Todo" },
                  { value: "saludo", label: "Saludo/Cierre" },
                  { value: "verbo", label: "Verbos" },
                  { value: "pronombre", label: "Pronombres" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded bg-warn-soft px-2 py-0.5 text-warn">■ Saludo y cierre</span>
          <span className="rounded bg-brand-soft px-2 py-0.5 text-brand">■ Verbos e imperativos</span>
          <span className="rounded bg-accent-soft px-2 py-0.5 text-accent">■ Pronombres y posesivos</span>
        </div>

        <div className={`grid gap-3 ${mode === "compare" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
          {mode === "tu" || mode === "compare" ? (
            <RegisterBlock
              title="Informal · TÚ"
              subtitle={sc.tuTextType}
              segments={sc.tuSegments}
              filter={filter}
              accentTone="brand"
            />
          ) : null}
          {mode === "usted" || mode === "compare" ? (
            <RegisterBlock
              title="Formal · USTED"
              subtitle={sc.ustedTextType}
              segments={sc.ustedSegments}
              filter={filter}
              accentTone="accent"
            />
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout
            label="Categoría IB"
            value={mode === "tu" ? "Personal" : mode === "usted" ? "Profesional" : "Personal ↔ Prof."}
            tone={mode === "usted" ? "good" : "brand"}
          />
          <Readout
            label="Puntuación saludo"
            value={mode === "tu" ? "Coma (,)" : "Dos puntos (:)"}
            tone="ink"
          />
          <Readout
            label="Regla S-P-V-I-C"
            value="100 % coherencia"
            tone="good"
          />
        </div>

        <div className="space-y-2 rounded-xl border border-line bg-surface-2/60 p-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Auditoría gramatical ({visibleShifts.length} foco{visibleShifts.length === 1 ? "" : "s"})
          </div>
          {visibleShifts.map((s, idx) => (
            <div key={idx} className="rounded-lg border border-line bg-surface p-2.5 text-xs leading-relaxed">
              <div className="flex flex-wrap items-center gap-1.5 font-bold text-ink">
                <span className="text-brand">{s.tu}</span>
                <span aria-hidden>→</span>
                <span className="text-accent">{s.usted}</span>
              </div>
              <div className="mt-1 text-ink-2">{s.why}</div>
            </div>
          ))}
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: 3-Type Si-Clause Policy Reform Builder
// ---------------------------------------------------------------------------

type SiType = "t1" | "t2" | "t3";
type PolicyDomain = "edu" | "empleo" | "ley" | "vivienda";
type SubjVariant = "ra" | "se";
type T3Style = "standard" | "dehaber" | "mixed";

interface PolicyReform {
  domainLabel: string;
  t1: {
    protasis: string;
    protasisVerb: string;
    apodosis: string;
    apodosisVerb: string;
    gloss: string;
    trap: string;
  };
  t2: {
    protasisRa: string;
    protasisSe: string;
    verbRa: string;
    verbSe: string;
    apodosis: string;
    apodosisVerb: string;
    gloss: string;
    trap: string;
  };
  t3: {
    protasisRa: string;
    protasisSe: string;
    deHaber: string;
    verbRa: string;
    verbSe: string;
    verbDeHaber: string;
    apodosisComp: string;
    apodosisCompVerb: string;
    apodosisMixed: string;
    apodosisMixedVerb: string;
    glossComp: string;
    glossMixed: string;
    trap: string;
  };
}

const POLICY_REFORMS: Record<PolicyDomain, PolicyReform> = {
  edu: {
    domainLabel: "Educación y FP Dual",
    t1: {
      protasis: "Si el Ministerio amplía las plazas de FP Dual,",
      protasisVerb: "amplía (pres. ind.)",
      apodosis: "aumentará la inserción laboral juvenil.",
      apodosisVerb: "aumentará (futuro)",
      gloss: "If the Ministry expands FP Dual places, youth job placement will increase.",
      trap: "✗ Si el Ministerio amplíe... (NO present subjunctive after si!)",
    },
    t2: {
      protasisRa: "Si el Ministerio ampliara las plazas de FP Dual,",
      protasisSe: "Si el Ministerio ampliase las plazas de FP Dual,",
      verbRa: "ampliara (imp. subj.)",
      verbSe: "ampliase (imp. subj.)",
      apodosis: "aumentaría la inserción laboral juvenil.",
      apodosisVerb: "aumentaría (cond. simple)",
      gloss: "If the Ministry expanded FP Dual places, youth job placement would increase.",
      trap: "✗ Si el Ministerio ampliaría... (NO conditional after si!)",
    },
    t3: {
      protasisRa: "Si el Ministerio hubiera ampliado la FP Dual en 2015,",
      protasisSe: "Si el Ministerio hubiese ampliado la FP Dual en 2015,",
      deHaber: "De haber ampliado el Ministerio la FP Dual en 2015,",
      verbRa: "hubiera ampliado",
      verbSe: "hubiese ampliado",
      verbDeHaber: "De haber ampliado",
      apodosisComp: "habría reducido la sobrecualificación.",
      apodosisCompVerb: "habría reducido (cond. comp.)",
      apodosisMixed: "hoy tendríamos menos paro juvenil.",
      apodosisMixedVerb: "tendríamos (cond. simple)",
      glossComp: "Had the Ministry expanded FP Dual in 2015, it would have reduced overqualification.",
      glossMixed: "Had the Ministry expanded FP Dual in 2015, today we would have lower youth unemployment.",
      trap: "✗ Si el Ministerio habría ampliado... (NEVER habría inside the si-clause!)",
    },
  },
  empleo: {
    domainLabel: "Empleo y teletrabajo",
    t1: {
      protasis: "Si las empresas respetan la desconexión digital,",
      protasisVerb: "respetan (pres. ind.)",
      apodosis: "mejorará la conciliación laboral y familiar.",
      apodosisVerb: "mejorará (futuro)",
      gloss: "If companies respect digital disconnection, work-life balance will improve.",
      trap: "✗ Si las empresas respeten... (NO present subjunctive after si!)",
    },
    t2: {
      protasisRa: "Si las empresas redujeran la jornada a cuatro días,",
      protasisSe: "Si las empresas redujesen la jornada a cuatro días,",
      verbRa: "redujeran (imp. subj.)",
      verbSe: "redujesen (imp. subj.)",
      apodosis: "disminuiría el agotamiento profesional.",
      apodosisVerb: "disminuiría (cond. simple)",
      gloss: "If companies reduced the working week to four days, burnout would decline.",
      trap: "✗ Si las empresas reducirían / reducieran... (irregular stem reduj-!)",
    },
    t3: {
      protasisRa: "Si se hubieran prohibido las prácticas gratuitas,",
      protasisSe: "Si se hubiesen prohibido las prácticas gratuitas,",
      deHaber: "De haberse prohibido las prácticas gratuitas,",
      verbRa: "se hubieran prohibido",
      verbSe: "se hubiesen prohibido",
      verbDeHaber: "De haberse prohibido",
      apodosisComp: "se habría frenado la precariedad juvenil.",
      apodosisCompVerb: "se habría frenado (cond. comp.)",
      apodosisMixed: "hoy existiría mayor equidad laboral.",
      apodosisMixedVerb: "existiría (cond. simple)",
      glossComp: "Had unpaid internships been banned, youth job insecurity would have been curbed.",
      glossMixed: "Had unpaid internships been banned, greater labour equity would exist today.",
      trap: "✗ Si se habrían prohibido... (NEVER habrían after si!)",
    },
  },
  ley: {
    domainLabel: "Justicia y reinserción",
    t1: {
      protasis: "Si los municipios fomentan la justicia restaurativa,",
      protasisVerb: "fomentan (pres. ind.)",
      apodosis: "bajará la reincidencia entre menores.",
      apodosisVerb: "bajará (futuro)",
      gloss: "If municipalities promote restorative justice, youth reoffending will fall.",
      trap: "✗ Si los municipios fomenten... (NO present subjunctive after si!)",
    },
    t2: {
      protasisRa: "Si el Estado invirtiera más en reinserción social,",
      protasisSe: "Si el Estado invirtiese más en reinserción social,",
      verbRa: "invirtiera (imp. subj.)",
      verbSe: "invirtiese (imp. subj.)",
      apodosis: "bajaría notablemente la delincuencia juvenil.",
      apodosisVerb: "bajaría (cond. simple)",
      gloss: "If the State invested more in social rehabilitation, youth crime would drop notably.",
      trap: "✗ Si el Estado invertiría... (NO conditional after si!)",
    },
    t3: {
      protasisRa: "Si las autoridades hubieran abierto centros de mediación,",
      protasisSe: "Si las autoridades hubiesen abierto centros de mediación,",
      deHaber: "De haber abierto centros de mediación,",
      verbRa: "hubieran abierto",
      verbSe: "hubiesen abierto",
      verbDeHaber: "De haber abierto",
      apodosisComp: "habrían resuelto muchos conflictos sin prisión.",
      apodosisCompVerb: "habrían resuelto (irreg. part.)",
      apodosisMixed: "hoy gozaríamos de mayor cohesión vecinal.",
      apodosisMixedVerb: "gozaríamos (cond. simple)",
      glossComp: "Had authorities opened mediation centres, they would have resolved many disputes without prison.",
      glossMixed: "Had authorities opened mediation centres, we would enjoy greater neighbourhood cohesion today.",
      trap: "✗ habrían resolvido (irregular participle is resuelto, never resolvido!)",
    },
  },
  vivienda: {
    domainLabel: "Vivienda y equidad [HL]",
    t1: {
      protasis: "Si el consistorio aprueba alquileres sociales juveniles,",
      protasisVerb: "aprueba (pres. ind.)",
      apodosis: "facilitará la emancipación temprana.",
      apodosisVerb: "facilitará (futuro)",
      gloss: "If the city council approves youth social rentals, it will facilitate earlier independence.",
      trap: "✗ Si el consistorio apruebe... (NO present subjunctive after si!)",
    },
    t2: {
      protasisRa: "Si hubiera más vivienda pública en las capitales,",
      protasisSe: "Si hubiese más vivienda pública en las capitales,",
      verbRa: "hubiera (imp. subj.)",
      verbSe: "hubiese (imp. subj.)",
      apodosis: "menos jóvenes sufrirían la fuga de cerebros.",
      apodosisVerb: "sufrirían (cond. simple)",
      gloss: "If there were more public housing in capitals, fewer young people would suffer brain drain.",
      trap: "✗ Si habría más vivienda... (NEVER habría after si!)",
    },
    t3: {
      protasisRa: "Si los gobiernos hubieran regulado el alquiler hace diez años,",
      protasisSe: "Si los gobiernos hubiesen regulado el alquiler hace diez años,",
      deHaber: "De haber regulado el alquiler hace diez años,",
      verbRa: "hubieran regulado",
      verbSe: "hubiesen regulado",
      verbDeHaber: "De haber regulado",
      apodosisComp: "habrían mantenido activo el ascensor social.",
      apodosisCompVerb: "habrían mantenido (cond. comp.)",
      apodosisMixed: "hoy la emancipación juvenil no superaría los treinta años.",
      apodosisMixedVerb: "superaría (cond. simple)",
      glossComp: "Had governments regulated rent ten years ago, they would have kept social mobility active.",
      glossMixed: "Had governments regulated rent ten years ago, youth emancipation would not exceed age 30 today.",
      trap: "✗ De hubieran regulado... (after De, ALWAYS use infinitive haber!)",
    },
  },
};

function SiClauseReformBuilderWidget() {
  const [siType, setSiType] = useState<SiType>("t2");
  const [domain, setDomain] = useState<PolicyDomain>("edu");
  const [variant, setVariant] = useState<SubjVariant>("ra");
  const [t3Style, setT3Style] = useState<T3Style>("standard");

  const ref = POLICY_REFORMS[domain];

  let protasis = "";
  let protasisVerb = "";
  let apodosis = "";
  let apodosisVerb = "";
  let gloss = "";
  let trap = "";
  let formula = "";
  let probabilityPct = 85;
  let accentHex = "#15803d";
  let levelBadge = "SL · Core";

  if (siType === "t1") {
    protasis = ref.t1.protasis;
    protasisVerb = ref.t1.protasisVerb;
    apodosis = ref.t1.apodosis;
    apodosisVerb = ref.t1.apodosisVerb;
    gloss = ref.t1.gloss;
    trap = ref.t1.trap;
    formula = "Si + Pres. Ind. → Futuro";
    probabilityPct = 85;
    accentHex = "#15803d";
    levelBadge = "SL · Real / Probable";
  } else if (siType === "t2") {
    protasis = variant === "ra" ? ref.t2.protasisRa : ref.t2.protasisSe;
    protasisVerb = variant === "ra" ? ref.t2.verbRa : ref.t2.verbSe;
    apodosis = ref.t2.apodosis;
    apodosisVerb = ref.t2.apodosisVerb;
    gloss = ref.t2.gloss;
    trap = ref.t2.trap;
    formula = `Si + Imp. Subj. (-${variant}) → Cond. Simple`;
    probabilityPct = 42;
    accentHex = "#0369a1";
    levelBadge = "SL & HL · Hipotética";
  } else {
    if (t3Style === "dehaber") {
      protasis = ref.t3.deHaber;
      protasisVerb = ref.t3.verbDeHaber;
      apodosis = ref.t3.apodosisComp;
      apodosisVerb = ref.t3.apodosisCompVerb;
      gloss = ref.t3.glossComp;
      formula = "De haber + Part. → Cond. Comp.";
      levelBadge = "HL · Band 10–12 C1";
    } else if (t3Style === "mixed") {
      protasis = variant === "ra" ? ref.t3.protasisRa : ref.t3.protasisSe;
      protasisVerb = variant === "ra" ? ref.t3.verbRa : ref.t3.verbSe;
      apodosis = ref.t3.apodosisMixed;
      apodosisVerb = ref.t3.apodosisMixedVerb;
      gloss = ref.t3.glossMixed;
      formula = "Si + Plusc. Subj. → Hoy + Cond. Simple";
      levelBadge = "HL · Mixta (Pasado → Hoy)";
    } else {
      protasis = variant === "ra" ? ref.t3.protasisRa : ref.t3.protasisSe;
      protasisVerb = variant === "ra" ? ref.t3.verbRa : ref.t3.verbSe;
      apodosis = ref.t3.apodosisComp;
      apodosisVerb = ref.t3.apodosisCompVerb;
      gloss = ref.t3.glossComp;
      formula = "Si + Plusc. Subj. → Cond. Comp.";
      levelBadge = "SL/HL · Contrafactual";
    }
    trap = ref.t3.trap;
    probabilityPct = 0;
    accentHex = "#c2410c";
  }

  return (
    <WidgetFrame
      title="3-Type Si-Clause Policy Reform Builder"
      tryThis={[
        "Move from **Tipo 1** → **Tipo 2** → **Tipo 3** on the same policy and watch the verb pair shift cleanly.",
        "In **Tipo 2**, toggle **-ra ↔ -se** to confirm both imperfect subjunctive endings are 100% interchangeable in IB exams.",
        "In **Tipo 3**, switch to **De haber + participio** or **Mixta (→ hoy)** to unlock Band 10–12 HL policy evaluation.",
      ]}
      caption={
        <span>
          <strong>Regla de oro:</strong> Never place the <em>present subjunctive</em> or the <em>conditional (-ía)</em> directly after <strong>si</strong>. Check the red error guard above!
        </span>
      }
    >
      <div className="space-y-3.5">
        <div className="space-y-2.5">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Tipo de oración condicional</div>
            <Segmented<SiType>
              label="Select si-clause type"
              value={siType}
              onChange={setSiType}
              options={[
                { value: "t1", label: "Tipo 1 · Probable" },
                { value: "t2", label: "Tipo 2 · Hipotética" },
                { value: "t3", label: "Tipo 3 · Pasado (HL)" },
              ]}
            />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Ámbito de reforma (Theme 4)</div>
            <Segmented<PolicyDomain>
              label="Select policy domain"
              value={domain}
              onChange={setDomain}
              options={[
                { value: "edu", label: "Educación y FP" },
                { value: "empleo", label: "Empleo juvenil" },
                { value: "ley", label: "Justicia y ley" },
                { value: "vivienda", label: "Vivienda (HL)" },
              ]}
            />
          </div>

          {siType !== "t1" ? (
            <div className="flex flex-wrap gap-3">
              {!(siType === "t3" && t3Style === "dehaber") ? (
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Variante subjuntivo</div>
                  <Segmented<SubjVariant>
                    label="Select subjunctive variant"
                    value={variant}
                    onChange={setVariant}
                    options={[
                      { value: "ra", label: "Forma -ra" },
                      { value: "se", label: "Forma -se" },
                    ]}
                  />
                </div>
              ) : null}

              {siType === "t3" ? (
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Estilo HL (Tipo 3)</div>
                  <Segmented<T3Style>
                    label="Select Type 3 style"
                    value={t3Style}
                    onChange={setT3Style}
                    options={[
                      { value: "standard", label: "Si + hubiera..." },
                      { value: "dehaber", label: "De haber + part. [C1]" },
                      { value: "mixed", label: "Mixta (→ hoy)" },
                    ]}
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Live SVG structural blueprint */}
        <div className="rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 520 132"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Si-clause structure diagram for ${formula}`}
            className="h-auto w-full"
          >
            <rect x="4" y="6" width="232" height="72" rx="10" fill="#ffedd5" stroke={accentHex} strokeWidth="1.8" />
            <text x="120" y="25" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" fill="#9a3412">
              CONDICIÓN (PRÓTASIS)
            </text>
            <text x="120" y="47" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="12.5" fontWeight="800" fill="#2b140c">
              {protasisVerb}
            </text>
            <text x="120" y="66" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill="#6b483a">
              Probabilidad real: {probabilityPct}%
            </text>

            <line x1="238" y1="42" x2="278" y2="42" stroke="#2b140c" strokeWidth="2.2" />
            <polygon points="278,36 288,42 278,48" fill="#2b140c" />

            <rect x="290" y="6" width="226" height="72" rx="10" fill="#ccfbf1" stroke="#0f766e" strokeWidth="1.8" />
            <text x="403" y="25" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" fill="#0f766e">
              CONSECUENCIA (APÓDOSIS)
            </text>
            <text x="403" y="47" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="12.5" fontWeight="800" fill="#2b140c">
              {apodosisVerb}
            </text>
            <text x="403" y="66" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill="#134e4a">
              {ref.domainLabel}
            </text>

            <rect x="16" y="92" width="488" height="32" rx="8" fill="#ffe4e6" stroke="#be123c" strokeWidth="1.2" />
            <text x="260" y="112" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" fill="#be123c">
              {trap}
            </text>
          </svg>
        </div>

        {/* Assembled sentence output */}
        <div className="rounded-xl border border-line bg-surface p-4">
          <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-ink-2">
            <span>Oración modelo lista para Paper 1 / IO</span>
            <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-brand">{levelBadge}</span>
          </div>
          <p className="break-words text-base font-bold leading-relaxed text-ink">
            <span className="rounded bg-brand-soft px-1.5 py-0.5 text-brand">{protasis}</span>{" "}
            <span className="rounded bg-accent-soft px-1.5 py-0.5 text-accent">{apodosis}</span>
          </p>
          <p className="mt-2 text-xs italic text-ink-2">Meaning: {gloss}</p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Readout label="Fórmula verbal" value={formula} tone="brand" />
          <Readout
            label="Realidad de la condición"
            value={siType === "t1" ? "Viable / presente-futuro" : siType === "t2" ? "Hipotética / contraria a hoy" : "Pasado irreal (ya ocurrió)"}
            tone={siType === "t1" ? "good" : "ink"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "register-converter-tu-usted",
    title: "Formal-vs-Informal Register Converter (tú ↔ usted)",
    blurb: "Toggle Theme 4 messages between informal tú and formal usted to inspect synchronized verb, pronoun, possessive, and salutation shifts.",
    Component: RegisterConverterWidget,
  },
  {
    id: "si-clause-reform-builder",
    title: "3-Type Si-Clause Policy Reform Builder",
    blurb: "Pair condition and consequence across Types 1, 2, 3, mixed, and C1 De haber + participio reforms in education, employment, law, and housing.",
    Component: SiClauseReformBuilderWidget,
  },
];

export default widgets;
