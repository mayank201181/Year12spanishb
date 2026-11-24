"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// Widget 1: Media-Bias & Text-Type Register Matcher
// ============================================================================

type ScenarioId = "cine" | "ia" | "bulos";
type TextTypeId = "articulo" | "resena" | "blog" | "editorial";
type BiasMode = "estandar" | "sesgo";

interface VariantContent {
  headline: string;
  biasedHeadline: string;
  biasNote: string;
  lead: string;
  closing: string;
}

interface TextTypeMeta {
  label: string;
  category: string;
  voice: string;
  register: string;
  audience: string;
  formality: number; // 0-100
  stance: number; // 0 (objective) - 100 (explicit stance)
  checklist: string[];
  avoid: string;
}

const TEXT_TYPE_META: Record<TextTypeId, TextTypeMeta> = {
  articulo: {
    label: "Artículo",
    category: "Medios de comunicación",
    voice: "3.ª persona analítica",
    register: "Semiformal informativo",
    audience: "Lectores generales del diario",
    formality: 72,
    stance: 26,
    checklist: [
      "Titular informativo + subtítulo o entradilla",
      "Firma del periodista («Por…»)",
      "Datos verificados, cifras y citas de expertos",
      "Subtítulos temáticos para organizar el análisis",
    ],
    avoid: "Evita el tono confesional íntimo o pedir «me gusta» y comentarios con #etiquetas.",
  },
  resena: {
    label: "Reseña",
    category: "Medios de comunicación",
    voice: "Crítica equilibrada (3.ª / 1.ª sutil)",
    register: "Semiformal evaluativo",
    audience: "Público cultural interesado",
    formality: 64,
    stance: 74,
    checklist: [
      "Titular con postura + ficha técnica breve",
      "Sinopsis concisa en presente (¡sin destripar el final!)",
      "Análisis técnico (guion, fotografía, rigor) + subjuntivo valorativo",
      "Objeción matizada («Si bien…») + veredicto / puntuación",
    ],
    avoid: "Nunca cuentes toda la trama escena por escena ni uses solo adjetivos vagos (*bueno, interesante*).",
  },
  blog: {
    label: "Blog",
    category: "Personal / Digital",
    voice: "1.ª persona («yo») → «tú / vosotros»",
    register: "Cercano e interactivo",
    audience: "Comunidad juvenil en línea",
    formality: 28,
    stance: 82,
    checklist: [
      "Título atractivo + fecha y apodo o nombre de autor",
      "Relato o reflexión personal con preguntas directas al lector",
      "Registro cercano, natural y ágil (sin caer en vulgarismos)",
      "Etiquetas (#tags) + invitación final a comentar",
    ],
    avoid: "Evita encabezados burocráticos («Muy señor mío») o la voz institucional anónima.",
  },
  editorial: {
    label: "Editorial",
    category: "Medios de comunicación",
    voice: "Institucional («nosotros»)",
    register: "Formal persuasivo",
    audience: "Ciudadanía adulta / comunidad educativa",
    formality: 92,
    stance: 90,
    checklist: [
      "Titular tesis contundente y SIN firma personal",
      "Voz colectiva del medio («Desde esta redacción consideramos…»)",
      "Integración de contraargumento («Si bien es cierto que…»)",
      "Exhortación cívica o llamada a la acción institucional",
    ],
    avoid: "Jamás firmes con nombre individual ni escribas «Hola a todos, yo personalmente creo…».",
  },
};

const SCENARIOS: Record<
  ScenarioId,
  {
    shortLabel: string;
    context: string;
    variants: Record<TextTypeId, VariantContent>;
  }
> = {
  cine: {
    shortLabel: "Cine hispano",
    context: "Estreno de una película mexicana de ciencia ficción sobre memoria digital y desigualdad",
    variants: {
      articulo: {
        headline: "El cine mexicano explora la memoria digital en su estreno más ambicioso del año",
        biasedHeadline: "¡INCREÍBLE! El nuevo filme mexicano que DESTROZA a Hollywood con un secreto oculto",
        biasNote: "Ciberanzuelo (clickbait): mayúsculas enfáticas y exageración emocional que desplazan el dato real.",
        lead: "Por Lucía Mendoza · Rodada entre Guadalajara y la Ciudad de México, la cinta reúne a técnicos de efectos prácticos y debate en salas cómo los algoritmos alteran el recuerdo familiar.",
        closing: "Según cifras de la Academia Mexicana, el filme superó las 300 000 entradas en su primera semana.",
      },
      resena: {
        headline: "Ecos del futuro: una distopía íntima que deslumbra pese a un cierre apresurado",
        biasedHeadline: "Un «progreso» de cartón: dos horas soporíferas que nadie pidió ver en pantalla",
        biasNote: "Comillas irónicas («progreso») y léxico valorativo mordaz: abandona la crítica equilibrada por el ataque sarcástico.",
        lead: "Ficha técnica: «Ecos de plata» | México, 2026 | Ciencia ficción dramática. Ambientada en una metrópoli hiperconectada, la protagonista intenta recuperar las cartas analógicas de su abuela.",
        closing: "Si bien el último acto peca de predecible, sorprende que la fotografía logre tanta calidez humana. Valoración: ★★★★☆.",
      },
      blog: {
        headline: "Salí del cine pensando en mis propias fotos en la nube… ¿te ha pasado?",
        biasedHeadline: "Si no ves esta película hoy mismo no entiendes NADA sobre tecnología",
        biasNote: "Falsa urgencia y polarización: sustituye el diálogo abierto del blog por presión sensacionalista.",
        lead: "Publicado por @DaniCine · 14 de marzo. Ayer fui al estreno sin expectativas y terminé haciéndome mil preguntas sobre qué quedará de nuestros recuerdos si un servidor cierra mañana.",
        closing: "¿Y tú prefieres guardar álbumes en papel o confiarlo todo al móvil? ¡Cuéntamelo en los comentarios! #CineMexicano #MemoriaDigital",
      },
      editorial: {
        headline: "El cine independiente en español merece pantallas, no solo algoritmos",
        biasedHeadline: "Se realizan ajustes de programación mientras triunfa el entretenimiento global",
        biasNote: "Pasiva sin agente («se realizan ajustes») + eufemismo que oculta el desplazamiento de salas independientes.",
        lead: "Desde esta redacción celebramos el éxito internacional de las nuevas voces cinematográficas hispanoamericanas, pero advertimos que la concentración en grandes plataformas amenaza la diversidad creativa.",
        closing: "Exhortamos a las instituciones culturales a que protejan las salas independientes y financien el guion original en español.",
      },
    },
  },
  ia: {
    shortLabel: "IA en universidades",
    context: "Universidades de Madrid aprueban normas sobre inteligencia artificial generativa y derechos de autor",
    variants: {
      articulo: {
        headline: "Las universidades madrileñas fijan criterios de transparencia para el uso académico de la IA",
        biasedHeadline: "CAOS en las aulas: los robots ya escriben TODOS los exámenes universitarios",
        biasNote: "Alarmismo y generalización abusiva («TODOS»): distorsiona una normativa de transparencia en pánico moral.",
        lead: "Por Javier Ortega · El nuevo reglamento exige declarar el uso de herramientas generativas en trabajos de investigación y promueve modelos abiertos entrenados en español como ALIA.",
        closing: "Los decanos consultados coinciden en que la evaluación oral recuperará protagonismo el próximo curso.",
      },
      resena: {
        headline: "«Algoritmos con acento»: un ensayo riguroso y necesario sobre ética digital en español",
        biasedHeadline: "¡Qué brillante idea dejar nuestra lengua en manos de tres empresas extranjeras!",
        biasNote: "Antífrasis irónica: finge entusiasmo («¡Qué brillante idea!») para condenar la dependencia lingüística.",
        lead: "Ficha técnica: Ensayo divulgativo | Editorial Debate, Madrid, 2026. La obra examina con claridad cómo el sesgo algorítmico margina variantes hispanas y lenguas indígenas.",
        closing: "Aunque algunos capítulos técnicos resultan densos, ofrece herramientas imprescindibles para estudiantes de Bachillerato Internacional. Valoración: ★★★★☆.",
      },
      blog: {
        headline: "Cómo uso la IA para estudiar español sin perder mi propia voz",
        biasedHeadline: "El truco SECRETO para aprobar ensayos sin estudiar jamás",
        biasNote: "Ciberanzuelo engañoso: contradice la honestidad académica y promete atajos irrealistas.",
        lead: "Publicado por @SofíaEstudia · 22 de octubre. Hoy debatimos en clase si las nuevas normas de Madrid son demasiado estrictas. En mi experiencia, usar un programa para practicar dudas está genial, pero copiar un texto entero te quita el placer de pensar.",
        closing: "¿Dónde pones tú el límite entre ayuda y plagio? ¡Te leo abajo! #ÉticaIA #EstudiantesIB",
      },
      editorial: {
        headline: "Transparencia algorítmica: una exigencia ética inaplazable en la educación superior",
        biasedHeadline: "Una «modernización sin fricciones» que vuelve obsoleto el criterio docente",
        biasNote: "Eufemismo corporativo entre comillas («modernización sin fricciones») que encubre recortes en evaluación humana.",
        lead: "Si bien es innegable que la inteligencia artificial agiliza el análisis de datos, desde este diario sostenemos que la universidad no puede abdicar de la autoría humana ni tolerar la vulneración de derechos de autor.",
        closing: "De ahí que resulte imperativo que las facultades combinen formación crítica con auditorías transparentes de los sistemas empleados.",
      },
    },
  },
  bulos: {
    shortLabel: "Bulos y redes",
    context: "Red iberoamericana de verificación lanza talleres escolares contra la desinformación en Bogotá",
    variants: {
      articulo: {
        headline: "Cincuenta colegios de Bogotá incorporan talleres de verificación frente a los bulos virales",
        biasedHeadline: "ALERTA MÁXIMA: ningún adolescente sabe distinguir la verdad en internet",
        biasNote: "Léxico alarmista y absolutista («ningún adolescente»): dramatiza un programa educativo constructivo.",
        lead: "Por Camila Rojas · En colaboración con periodistas de la red LatamChequea, el proyecto enseña a contrastar fuentes, revisar metadatos fotográficos y detectar cámaras de eco en redes juveniles.",
        closing: "Las evaluaciones iniciales muestran que el 78 % del alumnado redujo el reenvío impulsivo de titulares no verificados.",
      },
      resena: {
        headline: "«Detrás del titular»: un documental incisivo sobre la fábrica de la desinformación",
        biasedHeadline: "Otra charla aburrida de «expertos» que creen saber más que los usuarios",
        biasNote: "Comillas despectivas («expertos») y descalificación ad hominem en vez de crítica argumentada.",
        lead: "Ficha técnica: Documental | Producción colombo-española, 2025 | 84 min. A través de testimonios de verificadores de Bogotá y Madrid, desgrana cómo se financian las campañas de posverdad.",
        closing: "Cabe lamentar que el montaje acelere en exceso el cierre, pero resulta esencial para cualquier aula de alfabetización mediática. Valoración: ★★★★☆.",
      },
      blog: {
        headline: "Caí en un bulo de WhatsApp esta semana (y estos 4 pasos me salvaron después)",
        biasedHeadline: "¡NO CREERÁS la mentira gigante que casi reenvío a mi familia!",
        biasNote: "Ciberanzuelo clásico: imita exactamente las tácticas manipuladoras que el texto pretende criticar.",
        lead: "Publicado por @MateoDigital · 5 de noviembre. Confieso que el martes estuve a punto de reenviar una alerta falsa sobre cortes de transporte en Bogotá porque sonaba urgentísima. Por suerte, apliqué la regla B-U-L-O antes de pulsar enviar.",
        closing: "¿Alguna vez te han colado un bulo en el grupo familiar? ¡Comparte tu truco para detectarlos! #AlfabetizaciónMediática #StopBulos",
      },
      editorial: {
        headline: "Combatir la posverdad empieza en el aula, no tras el escándalo",
        biasedHeadline: "Se produjeron distorsiones informativas menores en la conversación digital",
        biasNote: "Pasiva sin agente («se produjeron») + eufemismo («distorsiones menores») que minimiza campañas deliberadas de bulos.",
        lead: "La proliferación de engaños virales erosiona la confianza democrática más rápido de lo que las rectificaciones logran reparar. Desde esta redacción respaldamos la expansión de la alfabetización mediática como asignatura cívica esencial.",
        closing: "Urge que los ministerios de educación y las plataformas asuman corresponsabilidad para que la ciudadanía recupere el rigor informativo.",
      },
    },
  },
};

function MediaRegisterMatcher() {
  const [scenario, setScenario] = useState<ScenarioId>("ia");
  const [textType, setTextType] = useState<TextTypeId>("editorial");
  const [biasMode, setBiasMode] = useState<BiasMode>("estandar");

  const meta = TEXT_TYPE_META[textType];
  const sc = SCENARIOS[scenario];
  const content = sc.variants[textType];

  // Map (stance, formality) to SVG quadrant coordinates
  const dotX = 50 + (meta.stance / 100) * 260;
  const dotY = 148 - (meta.formality / 100) * 116;

  return (
    <WidgetFrame
      title="Media-Bias & Text-Type Register Matcher"
      tryThis={[
        "Switch between **Artículo**, **Reseña**, **Blog**, and **Editorial** on the same event and watch how *voice*, *register*, and *Criterion C* conventions shift.",
        "Toggle **[HL] Lente de sesgo / ironía** to expose clickbait, euphemisms, scare quotes, and agentless passives.",
      ]}
      caption={
        <>
          <strong>Criterion C Check ({meta.label}):</strong> Voice = <em>{meta.voice}</em> · Register ={" "}
          <em>{meta.register}</em>. {meta.avoid}
        </>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Escenario:</span>
            <Segmented<ScenarioId>
              label="Choose scenario"
              value={scenario}
              onChange={setScenario}
              options={[
                { value: "cine", label: SCENARIOS.cine.shortLabel },
                { value: "ia", label: SCENARIOS.ia.shortLabel },
                { value: "bulos", label: SCENARIOS.bulos.shortLabel },
              ]}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Tipo de texto:</span>
            <Segmented<TextTypeId>
              label="Choose IB text type"
              value={textType}
              onChange={setTextType}
              options={[
                { value: "articulo", label: "Artículo" },
                { value: "resena", label: "Reseña" },
                { value: "blog", label: "Blog" },
                { value: "editorial", label: "Editorial" },
              ]}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Lente [HL]:</span>
            <Segmented<BiasMode>
              label="Toggle HL framing bias lens"
              value={biasMode}
              onChange={setBiasMode}
              options={[
                { value: "estandar", label: "Encuadre auténtico (BI)" },
                { value: "sesgo", label: "Detectar sesgo / ironía [HL]" },
              ]}
            />
          </div>
        </div>

        {/* Live Spanish Preview Card */}
        <div className="rounded-xl border border-line bg-surface-2/60 p-3.5 sm:p-4 space-y-2.5 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
            <span className="chip">{meta.category} · {meta.label}</span>
            <span className="text-ink-2">{sc.context}</span>
          </div>

          <div
            className={`rounded-lg border p-3 transition ${
              biasMode === "sesgo"
                ? "border-bad bg-bad-soft/60"
                : "border-brand/40 bg-surface"
            }`}
          >
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-ink-2">
              {biasMode === "sesgo" ? "Titular con sesgo / encuadre manipulado [HL]" : "Titular modelo (Banda 10–12)"}
            </div>
            <p className="mt-1 text-base font-extrabold leading-snug text-ink break-words">
              {biasMode === "sesgo" ? content.biasedHeadline : content.headline}
            </p>
            {biasMode === "sesgo" ? (
              <p className="mt-2 text-xs font-semibold text-bad leading-relaxed">
                ⚠ Análisis HL: {content.biasNote}
              </p>
            ) : null}
          </div>

          <p className="text-sm leading-relaxed text-ink break-words">{content.lead}</p>
          <p className="text-sm italic leading-relaxed text-ink-2 break-words border-t border-line pt-2">
            {content.closing}
          </p>
        </div>

        {/* Readouts + Live Register/Stance Quadrant SVG */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="grid grid-cols-1 gap-2 min-w-0">
            <Readout label="Voz gramatical" value={<span className="text-sm font-extrabold">{meta.voice}</span>} tone="brand" />
            <Readout label="Audiencia y registro" value={<span className="text-sm font-extrabold">{meta.audience} ({meta.register})</span>} tone="ink" />
          </div>

          <div className="rounded-xl border border-line bg-white p-2.5 flex flex-col justify-center">
            <svg
              viewBox="0 0 360 176"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Register and stance plot for ${meta.label}`}
              className="w-full h-auto"
            >
              <rect x="0" y="0" width="360" height="176" rx="8" fill="#fffaf7" />
              <line x1="50" y1="90" x2="310" y2="90" stroke="#d8b5a6" strokeWidth="1.2" strokeDasharray="4 3" />
              <line x1="180" y1="26" x2="180" y2="152" stroke="#d8b5a6" strokeWidth="1.2" strokeDasharray="4 3" />
              <rect x="50" y="26" width="260" height="126" fill="none" stroke="#6b483a" strokeWidth="1.3" rx="6" />
              <text x="180" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9a3412">
                MÁS FORMAL / INSTITUCIONAL
              </text>
              <text x="180" y="168" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f766e">
                MÁS CERCANO / PERSONAL
              </text>
              <text x="44" y="93" textAnchor="end" fontSize="9.5" fontWeight="bold" fill="#0369a1">
                Datos
              </text>
              <text x="316" y="93" textAnchor="start" fontSize="9.5" fontWeight="bold" fill="#be123c">
                Postura
              </text>
              {(["articulo", "resena", "blog", "editorial"] as TextTypeId[]).map((id) => {
                const m = TEXT_TYPE_META[id];
                const cx = 50 + (m.stance / 100) * 260;
                const cy = 148 - (m.formality / 100) * 116;
                const active = id === textType;
                return (
                  <g key={id}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={active ? 8 : 4.5}
                      fill={active ? "#c2410c" : "#d8b5a6"}
                      stroke={active ? "#2b140c" : "none"}
                      strokeWidth={active ? 2 : 0}
                    />
                    <text
                      x={cx}
                      y={cy - 11}
                      textAnchor="middle"
                      fontSize={active ? "10.5" : "9"}
                      fontWeight={active ? "bold" : "normal"}
                      fill={active ? "#2b140c" : "#6b483a"}
                    >
                      {m.label}
                    </text>
                  </g>
                );
              })}
              <circle cx={dotX} cy={dotY} r="13" fill="none" stroke="#c2410c" strokeWidth="1.5" opacity="0.45" />
            </svg>
          </div>
        </div>

        {/* Criterion C Checklist */}
        <div className="rounded-xl border border-line bg-surface p-3 space-y-1.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
            Lista de control · Criterio C ({meta.label})
          </div>
          <ul className="space-y-1 text-sm text-ink">
            {meta.checklist.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-good font-bold" aria-hidden>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// Widget 2: Passive Voice & `Se` Refleja Transformer Lab
// ============================================================================

type PassiveFormId = "activa" | "perifrastica" | "refleja" | "impersonal";

interface PassiveCase {
  id: string;
  label: string;
  tense: string;
  objectType: "inanimate-sg" | "inanimate-pl" | "human-pl";
  genderNum: string;
  agent: string;
  activeVerb: string;
  objectPhrase: string;
  complement: string;
  activa: string;
  perifrastica: string;
  perifrasticaAgreement: string;
  refleja: string | null;
  reflejaBlockedReason?: string;
  reflejaAgreement?: string;
  impersonal: string | null;
  impersonalNote: string;
  bestPressChoice: string;
}

const PASSIVE_CASES: readonly PassiveCase[] = [
  {
    id: "vacuna",
    label: "Vacuna (sing.)",
    tense: "Presente",
    objectType: "inanimate-sg",
    genderNum: "femenino singular",
    agent: "el CSIC",
    activeVerb: "desarrolla",
    objectPhrase: "una vacuna innovadora",
    complement: "en Madrid",
    activa: "El CSIC desarrolla una vacuna innovadora en Madrid.",
    perifrastica: "Una vacuna innovadora es desarrollada por el CSIC en Madrid.",
    perifrasticaAgreement: "es + desarrollada (fem. sing.) + por el CSIC",
    refleja: "Se desarrolla una vacuna innovadora en Madrid.",
    reflejaAgreement: "se desarrolla (3.ª sing. concuerda con «una vacuna»)",
    impersonal: null,
    impersonalNote: "Con sustantivo inanimado («una vacuna»), la estructura con «se» es pasiva refleja, no se impersonal.",
    bestPressChoice: "Pasiva refleja (sin agente) o pasiva perifrástica (si destacas al CSIC).",
  },
  {
    id: "paneles",
    label: "Paneles (pl.)",
    tense: "Presente",
    objectType: "inanimate-pl",
    genderNum: "masculino plural",
    agent: "ingenieros chilenos",
    activeVerb: "instalan",
    objectPhrase: "paneles solares",
    complement: "en Atacama",
    activa: "Los ingenieros chilenos instalan paneles solares en Atacama.",
    perifrastica: "Paneles solares son instalados por ingenieros chilenos en Atacama.",
    perifrasticaAgreement: "son + instalados (masc. pl.) + por ingenieros chilenos",
    refleja: "Se instalan paneles solares en Atacama.",
    reflejaAgreement: "se instalan (3.ª pl. concuerda con «paneles solares»)",
    impersonal: null,
    impersonalNote: "¡No dejes el verbo en singular! Con cosa plural («paneles solares»), la pasiva refleja exige plural: «Se instalan».",
    bestPressChoice: "Pasiva refleja plural («Se instalan paneles solares en Atacama»).",
  },
  {
    id: "enzimas",
    label: "Enzimas (irreg.)",
    tense: "Pretérito indefinido",
    objectType: "inanimate-pl",
    genderNum: "femenino plural",
    agent: "Margarita Salas",
    activeVerb: "descubrió",
    objectPhrase: "las enzimas clave",
    complement: "en el laboratorio",
    activa: "Margarita Salas descubrió las enzimas clave en el laboratorio.",
    perifrastica: "Las enzimas clave fueron descubiertas por Margarita Salas en el laboratorio.",
    perifrasticaAgreement: "fueron + descubiertas (participio irregular fem. pl.) + por",
    refleja: "Se descubrieron las enzimas clave en el laboratorio.",
    reflejaAgreement: "se descubrieron (3.ª pl. pretérito concuerda con «las enzimas»)",
    impersonal: null,
    impersonalNote: "«Las enzimas» es sujeto inanimado plural → pasiva refleja plural («se descubrieron»), no se impersonal.",
    bestPressChoice: "Pasiva perifrástica (para nombrar a Margarita Salas con «por»).",
  },
  {
    id: "conflictos",
    label: "Conflictos (irreg.)",
    tense: "Pretérito indefinido",
    objectType: "inanimate-pl",
    genderNum: "masculino plural",
    agent: "el tribunal europeo",
    activeVerb: "resolvió",
    objectPhrase: "los conflictos de privacidad",
    complement: "en 2025",
    activa: "El tribunal europeo resolvió los conflictos de privacidad en 2025.",
    perifrastica: "Los conflictos de privacidad fueron resueltos por el tribunal europeo en 2025.",
    perifrasticaAgreement: "fueron + resueltos (participio irregular masc. pl.) + por",
    refleja: "Se resolvieron los conflictos de privacidad en 2025.",
    reflejaAgreement: "se resolvieron (3.ª pl. pretérito concuerda con «los conflictos»)",
    impersonal: null,
    impersonalNote: "Sin «a» personal y con sustantivo inanimado plural, se aplica pasiva refleja plural («se resolvieron»).",
    bestPressChoice: "Pasiva refleja plural si omites el tribunal; perifrástica con «por» si lo nombras.",
  },
  {
    id: "cineastas",
    label: "Cineastas (a + pers.)",
    tense: "Pretérito indefinido",
    objectType: "human-pl",
    genderNum: "femenino plural (humano)",
    agent: "el festival de cine",
    activeVerb: "premió",
    objectPhrase: "a cinco cineastas hispanas",
    complement: "en San Sebastián",
    activa: "El festival de cine premió a cinco cineastas hispanas en San Sebastián.",
    perifrastica: "Cinco cineastas hispanas fueron premiadas por el festival de cine en San Sebastián.",
    perifrasticaAgreement: "fueron + premiadas (fem. pl.) + por el festival",
    refleja: null,
    reflejaBlockedReason:
      "BLOQUEADA: *«Se premiaron a cinco cineastas» es INCORRECTO. Un objeto humano introducido por la preposición «a» personal jamás puede ser sujeto ni poner el verbo en plural.",
    impersonal: "Se premió a cinco cineastas hispanas en San Sebastián.",
    impersonalNote: "Correcto: con «a» personal + personas, el verbo con «se» permanece SIEMPRE en 3.ª persona singular («se premió a…»).",
    bestPressChoice: "Se impersonal SINGULAR («Se premió a cinco cineastas…») o voz activa.",
  },
  {
    id: "docentes",
    label: "Docentes (a + pers.)",
    tense: "Presente",
    objectType: "human-pl",
    genderNum: "masculino/mixto plural (humano)",
    agent: "la universidad",
    activeVerb: "forma",
    objectPhrase: "a doscientos docentes",
    complement: "en ética digital",
    activa: "La universidad forma a doscientos docentes en ética digital.",
    perifrastica: "Doscientos docentes son formados por la universidad en ética digital.",
    perifrasticaAgreement: "son + formados (masc. pl.) + por la universidad",
    refleja: null,
    reflejaBlockedReason:
      "BLOQUEADA: *«Se forman a doscientos docentes» es INCORRECTO. Al llevar «a» personal, la concordancia plural está prohibida: usa se impersonal singular.",
    impersonal: "Se forma a doscientos docentes en ética digital.",
    impersonalNote: "Correcto: «Se forma a doscientos docentes» mantiene el verbo estrictamente en 3.ª persona singular.",
    bestPressChoice: "Se impersonal SINGULAR («Se forma a doscientos docentes en ética digital»).",
  },
];

function PasivaSeTransformerLab() {
  const [caseIdx, setCaseIdx] = useState<number>(1);
  const [form, setForm] = useState<PassiveFormId>("refleja");

  const c = PASSIVE_CASES[caseIdx];
  const isBlocked =
    (form === "refleja" && c.refleja === null) ||
    (form === "impersonal" && c.impersonal === null);

  let outputSentence = c.activa;
  let statusTone: "brand" | "good" | "bad" = "good";
  let grammarBadge = "Voz activa (sujeto agente explícito)";
  let detailNote = `El sujeto agente («${c.agent}») ejecuta directamente el verbo «${c.activeVerb}».`;

  if (form === "perifrastica") {
    outputSentence = c.perifrastica;
    statusTone = "good";
    grammarBadge = `Válida · ${c.perifrasticaAgreement}`;
    detailNote = `El objeto pasa a sujeto paciente (${c.genderNum}); el participio concuerda en género y número y el agente entra con «por».`;
  } else if (form === "refleja") {
    if (c.refleja) {
      outputSentence = c.refleja;
      statusTone = "good";
      grammarBadge = `Válida · ${c.reflejaAgreement}`;
      detailNote = "Natural en prensa científica y general en español: omite el agente y concuerda en número con el sustantivo inanimado.";
    } else {
      outputSentence = c.impersonal ?? c.perifrastica;
      statusTone = "bad";
      grammarBadge = "Pasiva refleja bloqueada por «a» personal";
      detailNote = c.reflejaBlockedReason ?? "";
    }
  } else if (form === "impersonal") {
    if (c.impersonal) {
      outputSentence = c.impersonal;
      statusTone = "good";
      grammarBadge = "Válida · se + 3.ª persona SINGULAR + «a» personal";
      detailNote = c.impersonalNote;
    } else {
      outputSentence = c.refleja ?? c.activa;
      statusTone = "bad";
      grammarBadge = "Objeto inanimado → usa Pasiva refleja";
      detailNote = c.impersonalNote;
    }
  }

  return (
    <WidgetFrame
      title="Passive Voice & «Se» Refleja Transformer Lab"
      tryThis={[
        "Compare **Vacuna (sing.)** vs **Paneles (pl.)** in *Pasiva refleja* to see singular/plural verb agreement live.",
        "Switch to **Cineastas (a + pers.)** or **Docentes (a + pers.)** and test *Pasiva refleja* vs *Se impersonal* — watch why personal `a` blocks plural agreement!",
      ]}
      caption={
        <>
          <strong>Recomendación de estilo BI ({c.tense}):</strong> {c.bestPressChoice}
        </>
      }
    >
      <div className="space-y-4">
        {/* Case selector buttons */}
        <div className="space-y-1.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            1. Elige una oración científica o periodística:
          </div>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Choose example sentence">
            {PASSIVE_CASES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCaseIdx(idx)}
                className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                  idx === caseIdx
                    ? "border-brand bg-brand text-brand-ink shadow-sm"
                    : "border-line bg-surface text-ink-2 hover:bg-surface-2 hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form selector */}
        <div className="space-y-1.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            2. Transforma la estructura gramatical:
          </div>
          <Segmented<PassiveFormId>
            label="Choose voice structure"
            value={form}
            onChange={setForm}
            options={[
              { value: "activa", label: "Activa" },
              { value: "perifrastica", label: "Pasiva (ser)" },
              { value: "refleja", label: "Pasiva refleja" },
              { value: "impersonal", label: "Se impersonal" },
            ]}
          />
        </div>

        {/* Result Box */}
        <div
          className={`rounded-xl border-2 p-3.5 sm:p-4 transition ${
            isBlocked
              ? "border-bad bg-bad-soft/50"
              : "border-good/50 bg-good-soft/35"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold">
            <span className={isBlocked ? "text-bad" : "text-good"}>
              {isBlocked ? "⚠ Atención gramatical" : "✓ Transformación correcta"} · {grammarBadge}
            </span>
            <span className="chip">{c.tense}</span>
          </div>
          <p className="mt-2 text-base sm:text-lg font-extrabold text-ink leading-snug break-words">
            {isBlocked ? `Forma correcta recomendada: ${outputSentence}` : outputSentence}
          </p>
          <p className="mt-2 text-sm text-ink-2 leading-relaxed">{detailNote}</p>
        </div>

        {/* Interactive Syntax Architecture SVG */}
        <div className="rounded-xl border border-line bg-white p-2.5">
          <svg
            viewBox="0 0 560 124"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Syntax architecture diagram for ${form} voice`}
            className="w-full h-auto"
          >
            <rect x="0" y="0" width="560" height="124" rx="8" fill="#fffaf7" />
            <text x="280" y="20" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#2b140c">
              Mapa sintáctico ({form === "activa" ? "Voz activa" : form === "perifrastica" ? "Pasiva perifrástica" : form === "refleja" ? "Pasiva refleja" : "Se impersonal"})
            </text>

            {form === "activa" ? (
              <g>
                <rect x="18" y="38" width="160" height="62" rx="8" fill="#ffedd5" stroke="#c2410c" strokeWidth="1.6" />
                <text x="98" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9a3412">SUJETO AGENTE</text>
                <text x="98" y="79" textAnchor="middle" fontSize="11" fill="#2b140c">{c.agent}</text>

                <polygon points="184,69 196,63 196,75" fill="#6b483a" />

                <rect x="202" y="38" width="136" height="62" rx="8" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1.6" />
                <text x="270" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">VERBO ACTIVO</text>
                <text x="270" y="79" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#2b140c">{c.activeVerb}</text>

                <polygon points="344,69 356,63 356,75" fill="#6b483a" />

                <rect x="362" y="38" width="180" height="62" rx="8" fill="#ccfbf1" stroke="#0f766e" strokeWidth="1.6" />
                <text x="452" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f766e">OBJETO DIRECTO</text>
                <text x="452" y="79" textAnchor="middle" fontSize="10.5" fill="#2b140c">{c.objectPhrase}</text>
              </g>
            ) : form === "perifrastica" ? (
              <g>
                <rect x="18" y="38" width="165" height="62" rx="8" fill="#ccfbf1" stroke="#0f766e" strokeWidth="1.6" />
                <text x="100" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f766e">SUJETO PACIENTE</text>
                <text x="100" y="78" textAnchor="middle" fontSize="10" fill="#2b140c">{c.genderNum}</text>

                <polygon points="189,69 201,63 201,75" fill="#15803d" />

                <rect x="206" y="38" width="164" height="62" rx="8" fill="#dcfce7" stroke="#15803d" strokeWidth="1.8" />
                <text x="288" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803d">SER + PARTICIPIO</text>
                <text x="288" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2b140c">Concuerda (-o/-a/-os/-as)</text>

                <polygon points="376,69 388,63 388,75" fill="#c2410c" />

                <rect x="394" y="38" width="148" height="62" rx="8" fill="#ffedd5" stroke="#c2410c" strokeWidth="1.6" />
                <text x="468" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9a3412">POR + AGENTE</text>
                <text x="468" y="78" textAnchor="middle" fontSize="10.5" fill="#2b140c">por {c.agent}</text>
              </g>
            ) : (
              <g>
                <rect
                  x="22"
                  y="38"
                  width="110"
                  height="62"
                  rx="8"
                  fill={isBlocked ? "#ffe4e6" : "#ffedd5"}
                  stroke={isBlocked ? "#be123c" : "#c2410c"}
                  strokeWidth="1.8"
                />
                <text x="77" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill={isBlocked ? "#be123c" : "#9a3412"}>
                  MARCA
                </text>
                <text x="77" y="80" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2b140c">
                  SE
                </text>

                <polygon points="138,69 150,63 150,75" fill="#6b483a" />

                <rect
                  x="156"
                  y="38"
                  width="178"
                  height="62"
                  rx="8"
                  fill={isBlocked ? "#ffe4e6" : "#dcfce7"}
                  stroke={isBlocked ? "#be123c" : "#15803d"}
                  strokeWidth="1.8"
                />
                <text x="245" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill={isBlocked ? "#be123c" : "#15803d"}>
                  CONCORDANCIA VERBAL
                </text>
                <text x="245" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2b140c">
                  {c.objectType === "human-pl" ? "SIEMPRE 3.ª SINGULAR" : c.objectType === "inanimate-pl" ? "3.ª PLURAL (con la cosa)" : "3.ª SINGULAR (con la cosa)"}
                </text>

                <polygon points="340,69 352,63 352,75" fill="#6b483a" />

                <rect x="358" y="38" width="182" height="62" rx="8" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1.6" />
                <text x="449" y="57" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">
                  {c.objectType === "human-pl" ? "«A» PERSONAL + PERSONAS" : "SUJETO INANIMADO"}
                </text>
                <text x="449" y="78" textAnchor="middle" fontSize="10" fill="#2b140c">
                  {c.objectPhrase}
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Summary Readouts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Readout
            label="Tipo de objeto"
            value={<span className="text-sm font-extrabold">{c.objectType === "human-pl" ? "Humano con «a»" : c.objectType === "inanimate-pl" ? "Inanimado plural" : "Inanimado singular"}</span>}
            tone={c.objectType === "human-pl" ? "bad" : "brand"}
          />
          <Readout
            label="Agente («por»)"
            value={<span className="text-sm font-extrabold">{form === "perifrastica" ? `Sí: por ${c.agent}` : form === "activa" ? `Sujeto: ${c.agent}` : "Omitido (estilo prensa)"}</span>}
            tone="ink"
          />
          <Readout
            label="Estado de la prueba"
            value={<span className="text-sm font-extrabold">{isBlocked ? "Bloqueada — ver regla" : "Gramatical (B2–C1)"}</span>}
            tone={statusTone}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "media-register-matcher",
    title: "Media-Bias & Text-Type Register Matcher",
    blurb:
      "Inspect the exact same Hispanic arts, AI, or fake-news scenario across Artículo, Reseña, Blog, and Editorial—and flip on the [HL] Bias Lens to spot clickbait, euphemism, and irony.",
    Component: MediaRegisterMatcher,
  },
  {
    id: "pasiva-se-transformer",
    title: "Passive Voice & «Se» Refleja Transformer Lab",
    blurb:
      "Convert active scientific and media sentences across pasiva perifrástica, pasiva refleja, and se impersonal while testing singular/plural and personal-«a» agreement rules live.",
    Component: PasivaSeTransformerLab,
  },
];

export default widgets;
