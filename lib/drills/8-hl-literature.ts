import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

// =============================================================================
// Shared literary pools (strictly original / non-prescriptive)
// =============================================================================

interface TermEntry {
  term: string;
  accept: string[];
  clue: string;
  effect: string;
  trapWord?: string;
  trapFeedback?: string;
}

const TERMS_T1: TermEntry[] = [
  {
    term: "metáfora",
    accept: ["metáfora", "la metáfora"],
    clue: "direct identification of two realities WITHOUT an explicit comparative word like *como* (e.g. *«el silencio es un muro»*)",
    effect: "intensifies symbolic meaning by fusing image and concept directly",
    trapWord: "símil",
    trapFeedback: "*Símil* uses an explicit link (*como / igual que*); direct equivalence without *como* is **metáfora**.",
  },
  {
    term: "símil",
    accept: ["símil", "el símil", "comparación", "la comparación"],
    clue: "explicit comparison between two realities linked by *como*, *igual que*, or *parece*",
    effect: "clarifies emotional tone through a vivid visual or sensory analogy",
    trapWord: "metáfora",
    trapFeedback: "When *como* or *igual que* appears explicitly, the exact device is **símil**, not *metáfora*.",
  },
  {
    term: "simbolismo",
    accept: ["simbolismo", "el simbolismo", "símbolo", "el símbolo"],
    clue: "use of a concrete object, colour, or space (e.g. a locked door or cracked cup) to represent an abstract idea or conflict",
    effect: "condenses thematic tensions into tangible recurring imagery",
  },
  {
    term: "personificación",
    accept: ["personificación", "la personificación", "prosopopeya", "la prosopopeya"],
    clue: "attributing human emotions, intentions, or deliberate actions to inanimate objects or nature (e.g. *«la casa vigilaba»*)",
    effect: "turns setting or time into an active emotional presence or antagonist",
  },
  {
    term: "hipérbole",
    accept: ["hipérbole", "la hipérbole"],
    clue: "deliberate, extravagant exaggeration beyond literal reality to amplify feeling or satire",
    effect: "dramatises intensity, absurdity, or emotional overwhelm",
  },
  {
    term: "ironía",
    accept: ["ironía", "la ironía"],
    clue: "contrast between literal surface meaning and implied critical reality, or between what a character believes and what the reader knows",
    effect: "exposes hypocrisy, tragedy, or sharp social criticism",
  },
  {
    term: "presagio",
    accept: ["presagio", "el presagio"],
    clue: "subtle early omen, detail, or remark in a passage that hints at a later crisis or tragedy (**foreshadowing**)",
    effect: "builds dramatic suspense and structural cohesion across the work",
  },
  {
    term: "analepsis",
    accept: ["analepsis", "la analepsis"],
    clue: "narrative jump backward in time (**flashback**) to illuminate a past trauma or earlier cause",
    effect: "explains present emotional conflict through fractured memory",
    trapWord: "prolepsis",
    trapFeedback: "*Prolepsis* jumps **forward** (flash-forward); jumping backward to the past is **analepsis**.",
  },
  {
    term: "tono",
    accept: ["tono", "el tono"],
    clue: "the author's or narrator's emotional attitude toward the subject (e.g. *melancólico, mordaz, opresivo, nostálgico*)",
    effect: "guides how the reader judges characters and conflicts",
  },
  {
    term: "personaje",
    accept: ["personaje", "el personaje"],
    clue: "exact Spanish literary noun for a **fictional character** in a novel, play, or short story (avoiding the false friend *carácter*)",
    effect: "keeps oral commentary lexically accurate at Band 10–12",
    trapWord: "carácter",
    trapFeedback: "False-friend alert! *El carácter* means temperament/personality — a fictional character is **personaje**.",
  },
];

const TERMS_T2: TermEntry[] = [
  {
    term: "prolepsis",
    accept: ["prolepsis", "la prolepsis"],
    clue: "deliberate narrative leap **forward** in time (**flash-forward**) announcing a future outcome before it happens",
    effect: "creates fatalism and tragic anticipation",
    trapWord: "analepsis",
    trapFeedback: "*Analepsis* jumps backward (flashback); jumping forward in time is **prolepsis**.",
  },
  {
    term: "campo semántico",
    accept: ["campo semántico", "el campo semántico"],
    clue: "a cluster of words throughout an extract belonging to one shared conceptual area (e.g. *reja, muro, sombra, encierro*)",
    effect: "proves systematically how diction constructs atmosphere and theme",
  },
  {
    term: "monólogo interior",
    accept: ["monólogo interior", "el monólogo interior"],
    clue: "unfiltered flow of a character's private associative thoughts and inner anxieties",
    effect: "reveals psychological fragmentation and intimate conflict directly",
  },
  {
    term: "realismo mágico",
    accept: ["realismo mágico", "el realismo mágico"],
    clue: "Hispanic literary mode where extraordinary or impossible events are narrated calmly as ordinary everyday reality",
    effect: "materialises hidden emotion, myth, or historical violence without fantasy clichés",
  },
  {
    term: "acotaciones",
    accept: ["acotaciones", "las acotaciones", "acotación", "la acotación"],
    clue: "italicised **stage directions** in a play extract specifying silence, gestures, lighting, or props",
    effect: "encodes unspoken subtext and power dynamics on stage",
  },
  {
    term: "oxímoron",
    accept: ["oxímoron", "el oxímoron"],
    clue: "juxtaposition of two directly contradictory words side by side in one paradoxical phrase (e.g. *«grito mudo»*)",
    effect: "compresses emotional paradox or repressed suffering into two stark words",
  },
  {
    term: "sinestesia",
    accept: ["sinestesia", "la sinestesia"],
    clue: "blending sensations from two or more distinct senses inside one image (e.g. *«silencio amargo y gris»*)",
    effect: "creates immersive, visceral atmosphere inside descriptive prose or verse",
  },
  {
    term: "elipsis",
    accept: ["elipsis", "la elipsis"],
    clue: "deliberate omission of a span of time, event, or unspoken word so silence itself carries meaning",
    effect: "enacts censorship, shock, or repressed family trauma structurally",
  },
  {
    term: "anáfora",
    accept: ["anáfora", "la anáfora"],
    clue: "intentional repetition of the same word(s) at the start of successive clauses or verses (e.g. *«Callaron…, callaron…, callaron…»*)",
    effect: "hammers home emotional urgency, obsession, or collective fear",
    trapWord: "aliteración",
    trapFeedback: "*Aliteración* repeats a consonant/vowel sound; repeating words at the start of clauses is **anáfora**.",
  },
  {
    term: "leitmotiv",
    accept: ["leitmotiv", "el leitmotiv"],
    clue: "a recurring object, sound, or phrase reappearing across a whole work whose symbolic weight evolves from start to finish",
    effect: "creates an effortless bridge from your ~300-word extract to the wider novel or play",
  },
];

const TERMS_T3: TermEntry[] = [
  {
    term: "estilo indirecto libre",
    accept: ["estilo indirecto libre", "el estilo indirecto libre"],
    clue: "third-person narration absorbing a character's direct thoughts, questions, or exclamations without quotation marks or *pensó que*",
    effect: "dissolves distance between narrator and character while preserving third-person framing",
  },
  {
    term: "ironía dramática",
    accept: ["ironía dramática", "la ironía dramática"],
    clue: "irony arising when the reader/audience knows a decisive truth or danger that the speaking character does not yet realise",
    effect: "heightens tragic tension, pathos, and critical awareness",
    trapWord: "ironía verbal",
    trapFeedback: "*Ironía verbal* is intentional sarcasm by the speaker; an audience–character knowledge gap is **ironía dramática**.",
  },
  {
    term: "ironía verbal",
    accept: ["ironía verbal", "la ironía verbal"],
    clue: "irony in which the speaker or narrator deliberately states the opposite of their real opinion (often biting or satirical)",
    effect: "delivers razor-sharp social or political critique",
    trapWord: "ironía dramática",
    trapFeedback: "Intentional sarcasm saying the opposite of what is meant is **ironía verbal**, not *ironía dramática*.",
  },
  {
    term: "narrador omnisciente",
    accept: ["narrador omnisciente", "el narrador omnisciente"],
    clue: "all-knowing third-person voice able to enter every character's private mind and move freely across past and future",
    effect: "exposes hidden hypocrisy across an entire family or society",
    trapWord: "narrador testigo",
    trapFeedback: "An all-knowing third-person voice is **narrador omnisciente**, whereas *narrador testigo* observes in first person with limited knowledge.",
  },
  {
    term: "narrador testigo",
    accept: ["narrador testigo", "el narrador testigo"],
    clue: "first-person observer recounting another character's central drama from the sidelines with partial, limited knowledge",
    effect: "generates interpretive ambiguity, mystery, and personal testimony",
    trapWord: "narrador protagonista",
    trapFeedback: "A first-person voice observing someone else's central drama is **narrador testigo**, not *narrador protagonista*.",
  },
  {
    term: "narrador protagonista",
    accept: ["narrador protagonista", "el narrador protagonista"],
    clue: "first-person central actor recounting their own lived experiences, conflicts, and subjective perceptions",
    effect: "forges immediate intimacy while inviting scrutiny of personal bias",
    trapWord: "narrador testigo",
    trapFeedback: "When the first-person speaker is the main actor of the story, use **narrador protagonista**.",
  },
  {
    term: "narrador poco fiable",
    accept: ["narrador poco fiable", "el narrador poco fiable", "narrador no fiable", "el narrador no fiable"],
    clue: "a narrator whose defensive excuses, contradictions, or biased logic make the reader doubt their version of events",
    effect: "forces active critical reading between the lines to uncover guilt or denial",
  },
  {
    term: "punto de inflexión",
    accept: ["punto de inflexión", "el punto de inflexión"],
    clue: "the exact emotional, temporal, or conversational turning point inside an extract where tension pivots decisively",
    effect: "anchors Criterion B1 close analysis by explaining *why* mood shifts mid-passage",
  },
  {
    term: "antítesis",
    accept: ["antítesis", "la antítesis"],
    clue: "explicit structural opposition of two contrasting ideas, images, or worlds across clauses (e.g. light vs shadow, freedom vs captivity)",
    effect: "dramatises ideological or generational polarities clearly",
  },
  {
    term: "trama",
    accept: ["trama", "la trama", "argumento", "el argumento"],
    clue: "authentic Spanish literary noun for a story's **plot** (avoiding the false friend *parcela*)",
    effect: "keeps Part 1 and Part 2 literary vocabulary idiomatic and accurate",
    trapWord: "parcela",
    trapFeedback: "False-friend alert! *Una parcela* is a plot of land — a literary plot is **trama** (or *argumento*).",
  },
];

const CONTEXT_FRAMES = [
  "During your 20-minute HL IO annotation of a Spanish novel extract, you need the exact Spanish term for:",
  "Preparing a Band 10–12 cue bullet on a Hispanic short-story passage, write the exact Spanish literary term for:",
  "In Part 2 follow-up discussion, your teacher asks which exact Spanish literary concept names:",
  "Upgrading a literary commentary to C1 Spanish metalanguage, provide the exact Spanish term for:",
  "Analysing a ~300-word extract from a Spanish play or novel, name the exact Spanish literary term for:",
];

// =============================================================================
// DRILL 1: Spanish Literary Terminology Recall (level 1, HL)
// =============================================================================

const metalenguajeDrill: Drill = {
  id: "8-hl-literature.metalenguaje-terminos",
  topicId: "8-hl-literature",
  title: "Spanish Literary Metalanguage Recall (HL)",
  level: 1,
  ibLevel: "HL",
  guideRef: "recursos-literarios-metalenguaje",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const pool = tier === 1 ? TERMS_T1 : tier === 2 ? TERMS_T2 : TERMS_T3;
    const entry = rng.pick(pool);
    const frame = rng.pick(CONTEXT_FRAMES);
    const traps: Trap[] = [];
    if (entry.trapWord && entry.trapFeedback) {
      traps.push({
        spec: { type: "text", accept: [entry.trapWord, `el ${entry.trapWord}`, `la ${entry.trapWord}`] },
        feedback: entry.trapFeedback,
      });
    }
    return {
      prompt: `${frame}\n\n**${entry.clue}** *(Include Spanish accent marks where needed.)*`,
      answer: { type: "text", accept: entry.accept, display: entry.term },
      traps,
      hint: `Analytical effect: this concept *${entry.effect}*.`,
      solution: [
        `Exact Spanish HL literary term: **${entry.term}**.`,
        `T–E–M payoff: it ${entry.effect}.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 2: Identifying Narrative Voice in Short Spanish Extracts (level 1, HL)
// =============================================================================

const MALE_NAMES = ["Mateo", "Álvaro", "Tomás", "Diego", "Andrés", "Martín"];
const FEMALE_NAMES = ["Elena", "Lucía", "Clara", "Beatriz", "Sofía", "Isabel"];
const PLACES = ["en la plaza vieja", "en el puerto del norte", "en el patio encalado", "en la estación central", "en el viejo comedor", "junto al río seco"];
const SECRETS = ["la carta rasgada", "la llave oxidada", "el telegrama doblado", "el retrato antiguo", "el cuaderno cerrado"];

const vozNarrativaDrill: Drill = {
  id: "8-hl-literature.voz-narrativa-extracto",
  topicId: "8-hl-literature",
  title: "Identify Narrative Voice in Spanish Extracts (HL)",
  level: 1,
  ibLevel: "HL",
  guideRef: "analisis-extracto-300-palabras",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const f = rng.pick(FEMALE_NAMES);
    const m = rng.pick(MALE_NAMES);
    const place = rng.pick(PLACES);
    const secret = rng.pick(SECRETS);
    const traps: Trap[] = [];

    // Choose which narrative voice to build according to tier
    const modes =
      tier === 1
        ? (["omnisciente", "protagonista", "testigo"] as const)
        : tier === 2
          ? (["omnisciente", "testigo", "estilo_indirecto_libre", "acotaciones"] as const)
          : (["estilo_indirecto_libre", "monologo_interior", "poco_fiable", "testigo"] as const);

    const mode = rng.pick(modes);

    if (mode === "omnisciente") {
      traps.push(
        {
          spec: { type: "text", accept: ["narrador testigo", "el narrador testigo"] },
          feedback: "A *narrador testigo* speaks in first person with limited knowledge; here a third-person voice reads EVERY character's secret mind (**narrador omnisciente**).",
        },
        {
          spec: { type: "text", accept: ["narrador protagonista", "el narrador protagonista"] },
          feedback: "This passage is in third person, not first person (*yo*) — it is a **narrador omnisciente**.",
        },
      );
      return {
        prompt: `Read this original Spanish literary extract:\n> *«Nadie ${place} sospechaba que ${f} escondía ${secret}; ni siquiera ${m} intuía el miedo secreto que la paralizaba cada noche, aunque él mismo ocultaba una culpa igual de antigua.»*\n\nIdentify the exact Spanish **narrative voice** (two words).`,
        answer: { type: "text", accept: ["narrador omnisciente", "el narrador omnisciente"], display: "narrador omnisciente" },
        traps,
        hint: "Check the grammatical person (3rd person) and notice that the narrator sees inside BOTH characters' minds simultaneously.",
        solution: [
          "The third-person narrator accesses hidden thoughts of multiple characters (*sospechaba, intuía, ocultaba*).",
          "Exact Spanish term: **narrador omnisciente**.",
        ],
      };
    }

    if (mode === "protagonista") {
      traps.push(
        {
          spec: { type: "text", accept: ["narrador testigo", "el narrador testigo"] },
          feedback: "Here the speaker (*yo*) is the central actor experiencing the crisis directly — that is **narrador protagonista**, not *testigo*.",
        },
      );
      return {
        prompt: `Read this original Spanish literary extract:\n> *«Aquel martes decidí abandonar la casa antes del alba. Tomé ${secret} con manos temblorosas y crucé ${place} sabiendo que mi propia vida jamás volvería a ser la misma.»*\n\nIdentify the exact Spanish **narrative voice** (two words).`,
        answer: { type: "text", accept: ["narrador protagonista", "el narrador protagonista"], display: "narrador protagonista" },
        traps,
        hint: "Notice the first-person verbs (*decidí, tomé, crucé*) recounting the speaker's OWN central turning point.",
        solution: [
          "A first-person voice narrating their own central drama is a **narrador protagonista**.",
        ],
      };
    }

    if (mode === "testigo") {
      traps.push(
        {
          spec: { type: "text", accept: ["narrador protagonista", "el narrador protagonista"] },
          feedback: "Although it uses *yo*, the speaker merely watches another person's drama with limited knowledge (*«Nunca supe…»*) → **narrador testigo**!",
        },
        {
          spec: { type: "text", accept: ["narrador omnisciente", "el narrador omnisciente"] },
          feedback: "The narrator uses first person and explicitly admits not knowing the full truth — the opposite of omniscience!",
        },
      );
      return {
        prompt: `Read this original Spanish literary extract:\n> *«Yo apenas era un niño cuando vi a ${m} detenerse ${place} sujetando ${secret}. Nunca supe qué decisión tomó al final, pero aún recuerdo el temblor de su voz.»*\n\nIdentify the exact Spanish **narrative voice** (two words).`,
        answer: { type: "text", accept: ["narrador testigo", "el narrador testigo"], display: "narrador testigo" },
        traps,
        hint: "First-person speaker (*yo vi*), yet the drama belongs to someone else and the narrator admits *«Nunca supe»*.",
        solution: [
          "A first-person observer recounting another character's story with limited insight is a **narrador testigo**.",
        ],
      };
    }

    if (mode === "estilo_indirecto_libre") {
      traps.push(
        {
          spec: { type: "text", accept: ["monólogo interior", "el monólogo interior"] },
          feedback: "Notice the passage stays in **third person past** (*miró*, *apretó*) while weaving in her unspoken questions without quotation marks — that exact technique is **estilo indirecto libre**.",
        },
      );
      return {
        prompt: `Read this original Spanish literary extract:\n> *«${f} se detuvo ${place} sosteniendo ${secret}. ¿Y si todo había sido en vano? ¡Qué absurdo haber esperado tanto tiempo en silencio! Guardó el objeto en el bolsillo y siguió caminando.»*\n\nName the exact three-word Spanish technique used in the two middle sentences.`,
        answer: { type: "text", accept: ["estilo indirecto libre", "el estilo indirecto libre"], display: "estilo indirecto libre" },
        traps,
        hint: "Third-person narration absorbing the character's rhetorical question and exclamation directly with NO quotation marks or *pensó que*.",
        solution: [
          "Blending third-person narration with direct inner exclamations (*¿Y si…? ¡Qué absurdo…!*) is **estilo indirecto libre**.",
        ],
      };
    }

    if (mode === "acotaciones") {
      return {
        prompt: `Read this original Spanish theatrical extract:\n> **${f.toUpperCase()}:** *(Pausa tensa ${place}. Aparta ${secret} sin mirarlo a los ojos y baja la voz)* Aquí nadie ha pedido explicaciones.\n\nWhat exact plural Spanish term names the italicised stage directions carrying the unspoken subtext?`,
        answer: { type: "text", accept: ["acotaciones", "las acotaciones", "acotación", "la acotación"], display: "acotaciones" },
        traps,
        hint: "In drama extracts, italicised staging cues replace much of a novelistic narrator's role.",
        solution: [
          "Italicised stage directions specifying pauses, gestures, and tone in a play extract are **acotaciones**.",
        ],
      };
    }

    if (mode === "monologo_interior") {
      traps.push(
        {
          spec: { type: "text", accept: ["narrador omnisciente", "el narrador omnisciente"] },
          feedback: "This unfiltered stream of first-person associative thoughts is **monólogo interior**, not third-person omniscience.",
        },
      );
      return {
        prompt: `Read this original Spanish literary extract:\n> *«otra vez el tren, no quiero mirar ${secret}, qué frío hace ${place}, si me marcho ahora quién cerrará la puerta, nadie pregunta nada, mejor callar, seguir andando…»*\n\nName the exact two-word Spanish technique capturing this unfiltered flow of consciousness (include accent mark).`,
        answer: { type: "text", accept: ["monólogo interior", "el monólogo interior"], display: "monólogo interior" },
        traps,
        hint: "Loose punctuation and leaping private associations inside a character's mind — starts with *monólogo*.",
        solution: [
          "Unfiltered associative thought flowing directly from a character's psyche is **monólogo interior**.",
        ],
      };
    }

    // poco_fiable
    traps.push(
      {
        spec: { type: "text", accept: ["narrador omnisciente", "el narrador omnisciente"] },
        feedback: "This first-person voice contradicts reality with paranoid self-justification — that is a **narrador poco fiable**!",
      },
    );
    return {
      prompt: `Read this original Spanish literary extract:\n> *«Todos mienten cuando dicen que destruí ${secret} por rencor ${place}. Solo lo quemé para salvar a ${m} de sí mismo; nadie más comprende mi absoluta generosidad.»*\n\nWrite the exact Spanish term for this biased, self-contradicting narrator (three words).`,
      answer: {
        type: "text",
        accept: ["narrador poco fiable", "el narrador poco fiable", "narrador no fiable", "el narrador no fiable"],
        display: "narrador poco fiable",
      },
      traps,
      hint: "Look at the glaring contrast between destroying someone's object and calling it *«absoluta generosidad»* — an *unreliable narrator*.",
      solution: [
        "When defensive rhetoric exposes hidden guilt or self-deception, we diagnose a **narrador poco fiable** (or *narrador no fiable*).",
      ],
    };
  },
};

// =============================================================================
// DRILL 3: Identifying Figurative & Structural Devices in Spanish Lines (level 2, HL)
// =============================================================================

const recursosContextoDrill: Drill = {
  id: "8-hl-literature.recursos-en-contexto",
  topicId: "8-hl-literature",
  title: "Spot Literary Devices in Original Spanish Lines (HL)",
  level: 2,
  ibLevel: "HL",
  guideRef: "recursos-literarios-metalenguaje",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const f = rng.pick(FEMALE_NAMES);
    const m = rng.pick(MALE_NAMES);
    const place = rng.pick(PLACES);
    const traps: Trap[] = [];

    const kinds =
      tier === 1
        ? (["metafora", "simil", "personificacion", "hiperbole"] as const)
        : tier === 2
          ? (["sinestesia", "oximoron", "anafora", "analepsis", "prolepsis"] as const)
          : (["realismo_magico", "ironia_dramatica", "presagio", "elipsis", "sinestesia"] as const);

    const kind = rng.pick(kinds);

    if (kind === "metafora") {
      const lines = [
        `«Para ${f}, el silencio del comedor era una jaula de hierro sin cerradura.»`,
        `«Cada palabra de ${m} fue un cuchillo helado clavado en mitad de la sobremesa.»`,
        `«Aquel pasillo oscuro era un túnel de ceniza donde morían todas las promesas.»`,
        `«La memoria de aquella noche es una herida abierta que nunca cicatriza.»`,
      ];
      traps.push({
        spec: { type: "text", accept: ["símil", "el símil"] },
        feedback: "Check for *como* or *igual que* — there is NO explicit comparative word here! Direct identification is **metáfora**.",
      });
      return {
        prompt: `Read this original Spanish line:\n> *${rng.pick(lines)}*\n\nIdentify the exact single-word Spanish literary device equating two realities directly (include accent mark).`,
        answer: { type: "text", accept: ["metáfora", "la metáfora"], display: "metáfora" },
        traps,
        hint: "Notice *era / fue / es* asserting direct equivalence without *como*.",
        solution: ["Direct equivalence without *como* = **metáfora**."],
      };
    }

    if (kind === "simil") {
      const lines = [
        `«El tiempo en aquella casa giraba igual que el agua al hundirse por un sumidero.»`,
        `«Las luces del puerto temblaban sobre el mar como lágrimas diminutas.»`,
        `«La voz de ${m} sonó tan seca como las hojas de noviembre bajo las botas.»`,
        `«El miedo de ${f} crecía en la habitación igual que una sombra al caer la tarde.»`,
      ];
      traps.push({
        spec: { type: "text", accept: ["metáfora", "la metáfora"] },
        feedback: "Because an explicit comparative connector (*como / igual que*) appears, the exact term is **símil**!",
      });
      return {
        prompt: `Read this original Spanish line:\n> *${rng.pick(lines)}*\n\nIdentify the exact single-word Spanish figurative device signalled by the explicit comparison (include accent mark).`,
        answer: { type: "text", accept: ["símil", "el símil", "comparación", "la comparación"], display: "símil" },
        traps,
        hint: "Spot the explicit comparative link (*como* or *igual que*).",
        solution: ["Explicit comparison using *como / igual que* = **símil** (or *comparación*)."],
      };
    }

    if (kind === "personificacion") {
      const lines = [
        `«Los muros blancos de la aldea vigilaban con rencor cada paso de ${f}.»`,
        `«El viejo reloj de la plaza masticaba las horas con impaciencia cruel.»`,
        `«Las persianas cerradas susurraban secretos antiguos sobre el pasado de ${m}.»`,
        `«La lluvia furiosa golpeaba los cristales exigiendo entrar en la sala.»`,
      ];
      return {
        prompt: `Read this original Spanish line:\n> *${rng.pick(lines)}*\n\nIdentify the exact single-word Spanish literary device giving human agency or feelings to inanimate things (include accent mark).`,
        answer: { type: "text", accept: ["personificación", "la personificación", "prosopopeya", "la prosopopeya"], display: "personificación" },
        traps,
        hint: "Walls watching with resentment, clocks chewing hours, or shutters whispering are human actions.",
        solution: ["Attributing human actions/emotions to inanimate objects = **personificación**."],
      };
    }

    if (kind === "hiperbole") {
      const lines = [
        `«Llovió con tanta rabia ${place} que hasta las estatuas aprendieron a nadar por las aceras.»`,
        `«${f} esperó aquella carta un millón de inviernos sin moverse de la ventana.»`,
        `«El suspiro de ${m} pesaba más que todas las montañas de la cordillera juntas.»`,
        `«Lloró un océano entero hasta inundar los escalones de madera de la casa.»`,
      ];
      return {
        prompt: `Read this original Spanish line:\n> *${rng.pick(lines)}*\n\nName the exact single-word Spanish rhetorical figure of extravagant exaggeration (include accent mark).`,
        answer: { type: "text", accept: ["hipérbole", "la hipérbole"], display: "hipérbole" },
        traps,
        hint: "Statues swimming, a million winters, or crying an ocean deliberately overshoot literal reality.",
        solution: ["Deliberate extravagant exaggeration = **hipérbole**."],
      };
    }

    if (kind === "sinestesia") {
      const images = [
        `«Por el corredor flotaba un silencio amargo y gris mientras ${f} cerraba la maleta.»`,
        `«La voz áspera y helada de ${m} dejó un eco azul sobre la mesa.»`,
        `«Recordaba una risa tibia y dulce que iluminaba el patio cada verano.»`,
        `«Un grito seco y brillante quebró la calma nocturna ${place}.»`,
      ];
      return {
        prompt: `Read this original Spanish line:\n> *${rng.pick(images)}*\n\nName the exact single-word Spanish literary device fusing impressions from distinct senses (e.g. hearing + taste/touch/sight).`,
        answer: { type: "text", accept: ["sinestesia", "la sinestesia"], display: "sinestesia" },
        traps,
        hint: "Combining sound with taste (*amargo, dulce*), temperature (*helada, tibia*), or colour (*gris, azul*).",
        solution: ["Blending perceptions from different senses = **sinestesia**."],
      };
    }

    if (kind === "oximoron") {
      const pairs = [
        `«En aquella despedida ${place}, ${f} lanzó un grito mudo que nadie quiso escuchar.»`,
        `«Vivían atrapados en una soledad compartida que helaba cada cena familiar.»`,
        `«La respuesta de ${m} dejó una luz oscura flotando en la memoria de todos.»`,
        `«Aceptaron su derrota con una calma furiosa que anunciaba la ruptura.»`,
      ];
      return {
        prompt: `Read this original Spanish line:\n> *${rng.pick(pairs)}*\n\nName the exact single-word Spanish literary device placing two directly opposite terms together (include accent mark).`,
        answer: { type: "text", accept: ["oxímoron", "el oxímoron"], display: "oxímoron" },
        traps,
        hint: "Notice the paradoxical adjacent pair (*grito mudo / soledad compartida / luz oscura / calma furiosa*).",
        solution: ["Two directly contradictory words joined in one phrase = **oxímoron**."],
      };
    }

    if (kind === "anafora") {
      const lines = [
        `«Callaron los vecinos, callaron los muros, callaron incluso las campanas ${place}.»`,
        `«Nadie abrió la puerta, nadie pronunció el nombre de ${m}, nadie miró hacia atrás.»`,
        `«Volverán las lluvias, volverán los recuerdos, volverán las preguntas sin respuesta.»`,
        `«Todo era polvo en la calle, todo era sombra en la casa, todo era espera para ${f}.»`,
      ];
      traps.push({
        spec: { type: "text", accept: ["aliteración", "la aliteración"] },
        feedback: "Repeating the exact same opening word across consecutive clauses is **anáfora**, not sound-level *aliteración*.",
      });
      return {
        prompt: `Read this original Spanish line:\n> *${rng.pick(lines)}*\n\nName the exact single-word Spanish device repeating the opening word of successive clauses (include accent mark).`,
        answer: { type: "text", accept: ["anáfora", "la anáfora"], display: "anáfora" },
        traps,
        hint: "Watch the identical word hammering at the start of all three clauses.",
        solution: ["Repetition of the same opening word(s) across clauses = **anáfora**."],
      };
    }

    if (kind === "analepsis") {
      const lines = [
        `«Al oler el pan recién horneado ${place}, ${f} se vio de golpe veinte años atrás, corriendo descalza por el patio de su infancia.»`,
        `«El sonido de la lluvia transportó a ${m} al invierno de 1978, cuando su padre cerró el taller por última vez.»`,
        `«Bastó ver aquella fotografía amarillenta para que ${f} regresara mentalmente a la tarde exacta de la despedida.»`,
      ];
      traps.push({
        spec: { type: "text", accept: ["prolepsis", "la prolepsis"] },
        feedback: "Narrative time moves **backward** into memory here — that is **analepsis** (flashback), not *prolepsis*.",
      });
      return {
        prompt: `Read this original Spanish narrative shift:\n> *${rng.pick(lines)}*\n\nName the exact single-word Spanish structural term for this jump backward in time.`,
        answer: { type: "text", accept: ["analepsis", "la analepsis"], display: "analepsis" },
        traps,
        hint: "A jump backward in time (flashback) begins with *ana-*.",
        solution: ["Jump backward into past memory = **analepsis**."],
      };
    }

    if (kind === "prolepsis") {
      const lines = [
        `«Aquella mañana tranquila ${place}, ${f} ignoraba todavía que diez años después esa misma llave abriría su exilio definitivo.»`,
        `«${m} sonrió confiado al subir al barco, sin sospechar que jamás volvería a pisar aquel muelle en las tres décadas siguientes.»`,
        `«Nadie imaginaba entonces que, al cabo de cinco inviernos, la casa entera habría quedado reducida a cenizas.»`,
      ];
      traps.push({
        spec: { type: "text", accept: ["analepsis", "la analepsis"] },
        feedback: "Narrative time leaps **forward** to reveal a future outcome — that is **prolepsis** (flash-forward)!",
      });
      return {
        prompt: `Read this original Spanish narrative shift:\n> *${rng.pick(lines)}*\n\nName the exact single-word Spanish structural term for this leap forward in narrative time.`,
        answer: { type: "text", accept: ["prolepsis", "la prolepsis"], display: "prolepsis" },
        traps,
        hint: "A flash-forward revealing future fate begins with *pro-*.",
        solution: ["Deliberate jump forward to a future outcome = **prolepsis**."],
      };
    }

    if (kind === "realismo_magico") {
      const lines = [
        `«Cada vez que ${f} lloraba en silencio, brotaban diminutas flores de jazmín sobre la mesa y su familia simplemente las barría antes de cenar.»`,
        `«Cuando ${m} partió sin despedirse, las campanas del pueblo tocaron solas al mediodía y los vecinos ajustaron sus relojes sin extrañarse.»`,
        `«En aquella casa ${place}, las cartas olvidadas flotaban suavemente hasta el techo los domingos y la abuela las bajaba con la escoba.»`,
      ];
      return {
        prompt: `Read this original Spanish passage:\n> *${rng.pick(lines)}*\n\nIdentify the exact two-word Spanish literary mode in which an impossible event is accepted with everyday domestic calm (include accent mark).`,
        answer: { type: "text", accept: ["realismo mágico", "el realismo mágico"], display: "realismo mágico" },
        traps,
        hint: "Extraordinary/supernatural detail narrated matter-of-factly inside ordinary life — iconic in Hispanic literature.",
        solution: ["Impossible marvels treated as mundane routine = **realismo mágico**."],
      };
    }

    if (kind === "ironia_dramatica") {
      const lines = [
        `The reader already knows that ${m}'s trusted partner forged the property deeds. Inside the extract ${place}, ${m} toasts sincerely: *«¡Por la honestidad intachable de mi único aliado!»*`,
        `The audience already saw the rival hide the forged letter. On stage, ${f} declares calmly: *«Por fin reina la confianza absoluta bajo este techo.»*`,
        `The reader knows the bridge has already collapsed in the flood. ${m} reassures his sister cheerfully: *«No temas, cruzaremos el río sin contratiempos antes de cenar.»*`,
      ];
      traps.push({
        spec: { type: "text", accept: ["ironía verbal", "la ironía verbal"] },
        feedback: "The character speaks **sincerely** while the reader knows a hidden truth — that is **ironía dramática**, not sarcastic *ironía verbal*.",
      });
      return {
        prompt: `${rng.pick(lines)}\n\nName the exact two-word Spanish term for this knowledge gap between reader/audience and character (include accent marks).`,
        answer: { type: "text", accept: ["ironía dramática", "la ironía dramática"], display: "ironía dramática" },
        traps,
        hint: "Distinguish verbal sarcasm from audience–character asymmetry (*ironía* + theatrical adjective).",
        solution: ["Reader knowing a crucial truth hidden from a sincere character = **ironía dramática**."],
      };
    }

    if (kind === "presagio") {
      const lines = [
        `During a joyful wedding toast ${place}, ${f}'s crystal glass splits cleanly in two without being touched and a black crow lands silently on the archway.`,
        `Before ${m} boards the ship, the harbour clock stops dead at midnight and the compass needle spins wildly in his palm.`,
        `On the eve of the family celebration, a sudden frost blackens every rose in the courtyard while an unopened telegram trembles under the door.`,
      ];
      return {
        prompt: `${rng.pick(lines)}\n\nWrite the exact single-word Spanish literary term for these ominous early clues hinting at approaching tragedy.`,
        answer: { type: "text", accept: ["presagio", "el presagio"], display: "presagio" },
        traps,
        hint: "Authentic Spanish noun for *foreshadowing* (linked to *presagiar*).",
        solution: ["Ominous clues anticipating later crisis = **presagio**."],
      };
    }

    // elipsis
    const elipsisLines = [
      `«Llamaron con fuerza a la puerta a medianoche ${place}. Siete años después, nadie en la mesa se atrevía todavía a pronunciar el nombre de ${m}.»`,
      `«${f} abrió el sobre azul con dedos temblorosos. En la página siguiente, el narrador pasa directamente a su tercer invierno en otra ciudad sin explicar la discusión.»`,
      `«El padre levantó la mano para responder. Silencio absoluto. Al amanecer, solo quedaba una silla vacía frente a la ventana abierta.»`,
    ];
    return {
      prompt: `Read this original Spanish narrative cut:\n> *${rng.pick(elipsisLines)}*\n\nName the exact single-word Spanish narrative device that deliberately omits the traumatic event or years in between.`,
      answer: { type: "text", accept: ["elipsis", "la elipsis"], display: "elipsis" },
      traps,
      hint: "Intentional omission leaving a charged narrative gap — starts with *elip-*.",
      solution: ["Deliberate structural omission of events/time so silence speaks = **elipsis**."],
    };
  },
};

// =============================================================================
// DRILL 4: Extract-to-Theme Bridges & C1 Subjunctive Frames (level 2, HL)
// =============================================================================

interface ThemeScenario {
  motif: string;
  theme: string;
  accept: string[];
  why: string;
}

const THEME_SCENARIOS: ThemeScenario[] = [
  {
    motif: "a bilingual teenager torn between speaking Quechua at home and Spanish at university",
    theme: "Identidades",
    accept: ["identidades", "Identidades"],
    why: "Language, cultural heritage, and personal/group self-definition sit at the core of *Identidades*.",
  },
  {
    motif: "a rural daughter rejecting inherited patriarchal expectations to define her own values",
    theme: "Identidades",
    accept: ["identidades", "Identidades"],
    why: "Beliefs, values, and personal autonomy belong directly to *Identidades*.",
  },
  {
    motif: "a young migrant writing nostalgic letters during his first lonely winter in Madrid",
    theme: "Experiencias",
    accept: ["experiencias", "Experiencias"],
    why: "Migration narratives, life stories, and cultural adaptation sit directly under *Experiencias*.",
  },
  {
    motif: "an elderly grandfather passing down a traditional Día de los Muertos family ritual",
    theme: "Experiencias",
    accept: ["experiencias", "Experiencias"],
    why: "Customs, traditions, and rites of passage belong to *Experiencias*.",
  },
  {
    motif: "an underground bookseller smuggling banned novels and poetry during censorship",
    theme: "Ingenio humano",
    accept: ["ingenio humano", "Ingenio humano"],
    why: "Artistic expression, literature, media, and intellectual freedom sit under *Ingenio humano*.",
  },
  {
    motif: "a playwright debating whether artificial intelligence can replace authentic human storytelling",
    theme: "Ingenio humano",
    accept: ["ingenio humano", "Ingenio humano"],
    why: "Technology, innovation, and artistic creativity belong to *Ingenio humano*.",
  },
  {
    motif: "factory workers organising a neighbourhood cooperative to challenge youth unemployment",
    theme: "Organización social",
    accept: ["organización social", "Organización social"],
    why: "Community engagement, labour, and civic institutions belong to *Organización social*.",
  },
  {
    motif: "a student challenging rigid class hierarchies inside a selective Madrid university",
    theme: "Organización social",
    accept: ["organización social", "Organización social"],
    why: "Education, social structures, and inequality sit squarely under *Organización social*.",
  },
  {
    motif: "an Andean village defending its river from industrial mining contamination",
    theme: "Compartir el planeta",
    accept: ["compartir el planeta", "Compartir el planeta"],
    why: "Environmental sustainability and indigenous land/human rights belong to *Compartir el planeta*.",
  },
  {
    motif: "young activists marching peacefully for historical memory and human rights after dictatorship",
    theme: "Compartir el planeta",
    accept: ["compartir el planeta", "Compartir el planeta"],
    why: "Human rights, peace, equality, and justice sit directly under *Compartir el planeta*.",
  },
];

const THEME_LEADINS = [
  "In Block 4 of your HL IO presentation, you analyse an extract about",
  "During Minutes 7–13 of HL IO prep, you link a ~300-word passage portraying",
  "Preparing your Extract → Theme bridge, you examine a dramatic scene depicting",
  "Choosing the sharpest primary Prescribed Theme for an extract exploring",
];

interface SubjBridgeVerb {
  inf: string;
  presSubj3s: string;
  presInd3s: string;
  objectPhrase: string;
}

const SUBJ_BRIDGE_VERBS: SubjBridgeVerb[] = [
  { inf: "reflejar", presSubj3s: "refleje", presInd3s: "refleja", objectPhrase: "las tensiones generacionales de la época" },
  { inf: "evidenciar", presSubj3s: "evidencie", presInd3s: "evidencia", objectPhrase: "el peso del silencio familiar" },
  { inf: "denunciar", presSubj3s: "denuncie", presInd3s: "denuncia", objectPhrase: "la hipocresía de las normas sociales" },
  { inf: "encarnar", presSubj3s: "encarne", presInd3s: "encarna", objectPhrase: "el anhelo de libertad individual" },
  { inf: "acentuar", presSubj3s: "acentúe", presInd3s: "acentúa", objectPhrase: "la atmósfera opresiva del encierro" },
  { inf: "revelar", presSubj3s: "revele", presInd3s: "revela", objectPhrase: "la vulnerabilidad oculta del protagonista" },
  { inf: "recurrir", presSubj3s: "recurra", presInd3s: "recurre", objectPhrase: "a la elipsis para sugerir censura" },
  { inf: "subvertir", presSubj3s: "subvierta", presInd3s: "subvierte", objectPhrase: "los roles tradicionales de género" },
  { inf: "invitar", presSubj3s: "invite", presInd3s: "invita", objectPhrase: "al lector a cuestionar la memoria oficial" },
  { inf: "cuestionar", presSubj3s: "cuestione", presInd3s: "cuestiona", objectPhrase: "el coste humano del progreso urbano" },
];

const SUBJ_TRIGGERS = [
  "De ahí que el fragmento",
  "Es revelador que el pasaje",
  "No parece casual que la voz narrativa",
  "Es significativo que este símbolo",
  "Resulta llamativo que el autor",
];

interface CounterfactualItem {
  inf: string;
  plupAccept: string[];
  plupDisplay: string;
  badInd: string;
  badCond: string;
  sentenceBefore: string;
  sentenceAfter: string;
}

const COUNTERFACTUALS: CounterfactualItem[] = [
  {
    inf: "escuchar",
    plupAccept: ["hubiera escuchado", "hubiese escuchado"],
    plupDisplay: "hubiera escuchado",
    badInd: "había escuchado",
    badCond: "habría escuchado",
    sentenceBefore: "Si la familia",
    sentenceAfter: "a la joven a tiempo, la ruptura no habría sido irreversible.",
  },
  {
    inf: "romper",
    plupAccept: ["hubiera roto", "hubiese roto"],
    plupDisplay: "hubiera roto",
    badInd: "había roto",
    badCond: "habría roto",
    sentenceBefore: "Si el protagonista",
    sentenceAfter: "el silencio antes, la tragedia colectiva se habría evitado.",
  },
  {
    inf: "abrir",
    plupAccept: ["hubiera abierto", "hubiese abierto"],
    plupDisplay: "hubiera abierto",
    badInd: "había abierto",
    badCond: "habría abierto",
    sentenceBefore: "Si Elena",
    sentenceAfter: "el sobre azul esa tarde, su destino habría cambiado por completo.",
  },
  {
    inf: "escribir",
    plupAccept: ["hubiera escrito", "hubiese escrito"],
    plupDisplay: "hubiera escrito",
    badInd: "había escrito",
    badCond: "habría escrito",
    sentenceBefore: "Si la autora",
    sentenceAfter: "la escena en tercera persona, habríamos perdido esa intimidad.",
  },
  {
    inf: "volver",
    plupAccept: ["hubiera vuelto", "hubiese vuelto"],
    plupDisplay: "hubiera vuelto",
    badInd: "había vuelto",
    badCond: "habría vuelto",
    sentenceBefore: "Si el emigrante",
    sentenceAfter: "al pueblo diez años antes, habría encontrado otra realidad.",
  },
  {
    inf: "confiar",
    plupAccept: ["hubiera confiado", "hubiese confiado"],
    plupDisplay: "hubiera confiado",
    badInd: "había confiado",
    badCond: "habría confiado",
    sentenceBefore: "Si el narrador",
    sentenceAfter: "en su hermana, la ironía dramática habría desaparecido.",
  },
  {
    inf: "elegir",
    plupAccept: ["hubiera elegido", "hubiese elegido"],
    plupDisplay: "hubiera elegido",
    badInd: "había elegido",
    badCond: "habría elegido",
    sentenceBefore: "Ojalá el personaje",
    sentenceAfter: "otro camino más libre frente a la presión social.",
  },
  {
    inf: "decir",
    plupAccept: ["hubiera dicho", "hubiese dicho"],
    plupDisplay: "hubiera dicho",
    badInd: "había dicho",
    badCond: "habría dicho",
    sentenceBefore: "Si el padre",
    sentenceAfter: "una sola palabra de afecto, Tomás no habría cruzado la puerta.",
  },
];

const PART2_FRAMINGS = [
  "In Part 2 follow-up discussion, upgrade your counterfactual literary speculation",
  "Defending a Band 10–12 interpretation in Part 2, complete this past-regret reflection",
  "Responding spontaneously to a teacher's 'what if?' prompt in Part 2, supply the exact 2-word verb",
  "Avoiding indicative/conditional traps in Part 2 literary commentary, complete the sentence",
];

const puenteTemaDrill: Drill = {
  id: "8-hl-literature.puente-extracto-tema",
  topicId: "8-hl-literature",
  title: "Extract-to-Theme Bridges & C1 Subjunctive Frames (HL)",
  level: 2,
  ibLevel: "HL",
  guideRef: "puente-extracto-obra-tema",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const traps: Trap[] = [];

    if (tier === 1) {
      const sc = rng.pick(THEME_SCENARIOS);
      const lead = rng.pick(THEME_LEADINS);
      return {
        prompt: `${lead} **${sc.motif}**.\n\nWrite the exact Spanish name of the primary **IB Prescribed Theme** (from the 5 official themes).`,
        answer: { type: "text", accept: sc.accept, display: sc.theme },
        traps,
        hint: "Choose from: *Identidades, Experiencias, Ingenio humano, Organización social, Compartir el planeta*.",
        solution: [
          `Primary Prescribed Theme: **${sc.theme}**.`,
          sc.why,
        ],
      };
    }

    if (tier === 2) {
      const v = rng.pick(SUBJ_BRIDGE_VERBS);
      const trigger = rng.pick(SUBJ_TRIGGERS);
      traps.push({
        spec: { type: "text", accept: [v.presInd3s] },
        feedback: `*${v.presInd3s}* is indicative! After *${trigger}*, C1 Spanish requires the **present subjunctive** (**${v.presSubj3s}**).`,
      });
      return {
        prompt: `Complete this Band 10–12 HL literary bridge sentence with the exact **present-subjunctive** form of **${v.inf}** (single conjugated verb only):\n\n*«${trigger} _______ (${v.inf}) ${v.objectPhrase}.»*`,
        answer: { type: "text", accept: [v.presSubj3s], display: v.presSubj3s },
        traps,
        hint: `Identify the WEIRDO / consequence trigger (*${trigger}*) and conjugate **${v.inf}** in 3rd-person singular present subjunctive.`,
        solution: [
          `*${trigger}* always triggers the subjunctive mood.`,
          `3rd-person singular present subjunctive of *${v.inf}* = **${v.presSubj3s}**.`,
        ],
      };
    }

    // tier 3: Type 3 counterfactuals / ojalá past pluperfect subjunctive in Part 2
    const cf = rng.pick(COUNTERFACTUALS);
    const framing = rng.pick(PART2_FRAMINGS);
    traps.push(
      {
        spec: { type: "text", accept: [cf.badInd] },
        feedback: `*${cf.badInd}* is pluperfect **indicative**! After counterfactual *si* or *ojalá*, use **${cf.plupDisplay}** (pluscuamperfecto de subjuntivo).`,
      },
      {
        spec: { type: "text", accept: [cf.badCond] },
        feedback: `Never place conditional (*${cf.badCond}*) inside a *si*-clause or after *ojalá* — use **${cf.plupDisplay}**!`,
      },
    );
    return {
      prompt: `${framing} with the exact two-word **pluscuamperfecto de subjuntivo** of **${cf.inf}** (\`-ra\` or \`-se\` auxiliary accepted):\n\n*«${cf.sentenceBefore} _______ (${cf.inf}) ${cf.sentenceAfter}»*`,
      answer: { type: "text", accept: cf.plupAccept, display: cf.plupDisplay },
      traps,
      hint: `Formula: *hubiera / hubiese* + past participle of **${cf.inf}** (watch irregular participles like *roto, abierto, escrito, vuelto, dicho*!).`,
      solution: [
        `Past counterfactual / regret structure requires *pluscuamperfecto de subjuntivo*.`,
        `*hubiera / hubiese* + participle of *${cf.inf}* = **${cf.plupDisplay}**.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 5: HL IO Timing, Criteria & FA2029 Band Rules (level 3, HL)
// =============================================================================

interface CriterionCase {
  obs: string;
  crit: string;
  accept: string[];
  reason: string;
}

const CRITERION_CASES: CriterionCase[] = [
  {
    obs: "uses idiomatic B2–C1 Spanish, accurate subjunctive after *de ahí que*, and natural pronunciation across all three parts",
    crit: "A",
    accept: ["A", "Criterion A", "Criterio A"],
    reason: "**Criterion A (Language, 12 marks)** assesses vocabulary range, grammatical complexity/accuracy, and pronunciation holistically across all 3 parts.",
  },
  {
    obs: "stays tightly anchored in the ~300-word literary extract with brief quotes and links convincingly to the whole work and Hispanic culture during Part 1",
    crit: "B1",
    accept: ["B1", "Criterion B1", "Criterio B1"],
    reason: "**Criterion B1 (Message — Literary Extract, 6 marks)** evaluates close literary analysis and whole-work/cultural contextualisation in Part 1.",
  },
  {
    obs: "gives extended, nuanced, critical answers in Parts 2 and 3, moving fluently into an additional Prescribed Theme with concrete Hispanic examples",
    crit: "B2",
    accept: ["B2", "Criterion B2", "Criterio B2"],
    reason: "**Criterion B2 (Message — Conversation, 6 marks · FA2029 refined)** assesses relevance, depth, critical insight, and thematic breadth in Parts 2 & 3.",
  },
  {
    obs: "understands fast follow-up questions effortlessly, repairs minor slips calmly, and sustains genuine two-way spontaneous flow by inviting dialogue",
    crit: "C",
    accept: ["C", "Criterion C", "Criterio C"],
    reason: "**Criterion C (Interactive Skills — Communication, 6 marks · FA2029 refined)** evaluates comprehension, spontaneity, and authentic interactive leadership.",
  },
  {
    obs: "retells the entire novel's plot for three minutes during Part 1 without quoting a single phrase from the extract on the table",
    crit: "B1",
    accept: ["B1", "Criterion B1", "Criterio B1"],
    reason: "Plot-dumping instead of close extract analysis directly penalises **Criterion B1 (Message — Literary Extract)**.",
  },
  {
    obs: "reads ten long paragraphs monotonously off the cue sheet and repeatedly confuses *por/para* and indicative/subjunctive",
    crit: "A",
    accept: ["A", "Criterion A", "Criterio A"],
    reason: "Monotonous delivery and recurring grammatical/lexical errors directly lower **Criterion A (Language, 12 marks)**.",
  },
  {
    obs: "freezes for long silences in Part 2 and waits passively for the teacher to drag out single-sentence answers",
    crit: "C",
    accept: ["C", "Criterion C", "Criterio C"],
    reason: "Passive hesitation and breakdown of conversational reciprocity directly limit **Criterion C (Interactive Skills)**.",
  },
  {
    obs: "refuses to leave the literary work in Part 3 when the teacher pivots to *Compartir el planeta*, leaving the second theme undeveloped",
    crit: "B2",
    accept: ["B2", "Criterion B2", "Criterio B2"],
    reason: "Failing to engage meaningfully with the new Prescribed Theme in Part 3 directly caps **Criterion B2 (Message — Conversation)**.",
  },
];

const OBS_LEADINS = [
  "An IB Spanish B HL examiner writes in their moderation report that a candidate",
  "Reviewing a Year 13 mock HL Individual Oral recording, your teacher notes that the student",
  "Under the FA2029 Spanish B HL assessment rubric, which single criterion (`A`, `B1`, `B2`, or `C`) is directly assessed when a candidate",
  "Diagnosing an HL IO performance on the 30-mark rubric, identify the exact criterion (`A`, `B1`, `B2`, or `C`) targeted when a speaker",
];

const ioReglasDrill: Drill = {
  id: "8-hl-literature.io-hl-reglas-criterios",
  topicId: "8-hl-literature",
  title: "HL IO Timing, 30-Mark Criteria & FA2029 Rules (HL)",
  level: 3,
  ibLevel: "HL",
  guideRef: "discusion-io-hl-criterios",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const traps: Trap[] = [];

    if (tier === 1) {
      const sub = rng.int(1, 3);
      if (sub === 1) {
        // Prep time remaining calculation inside the 20-minute HL window
        const p1 = rng.int(1, 3);
        const p2 = rng.int(4, 7);
        const p3 = rng.int(3, 6);
        const used = p1 + p2 + p3;
        const left = 20 - used;
        traps.push({
          spec: { type: "number", value: 15 - used },
          feedback: "Watch out! **15 minutes** is SL prep time — HL Individual Oral preparation lasts **20 minutes**!",
        });
        return {
          prompt: `During official **HL Individual Oral preparation**, you spend **${p1} min** choosing between the two ~300-word extracts, **${p2} min** on 4-layer close annotation, and **${p3} min** selecting anchor quotes and links. How many **minutes** remain in your official HL prep window to write your ≤10 bullets and rehearse?`,
          answer: { type: "number", value: left, display: String(left) },
          traps,
          hint: "Total official HL IO preparation time = **20 minutes** (not 15!).",
          solution: [
            `Official HL IO prep window = 20 minutes.`,
            `Time used = ${p1} + ${p2} + ${p3} = ${used} min.`,
            `Remaining = 20 − ${used} = **${left} minutes**.`,
          ],
        };
      }
      if (sub === 2) {
        // Cue-bullet budget calculation out of max 10 bullets
        const b1 = rng.int(1, 2);
        const b2 = rng.int(3, 5);
        const b3 = rng.int(1, 2);
        const used = b1 + b2 + b3;
        const left = 10 - used;
        return {
          prompt: `Planning your IB-compliant HL IO cue card, you write **${b1}** bullet(s) for Block 1 (Contexto/Tesis), **${b2}** bullets for Block 2 (Análisis cercano), and **${b3}** bullet(s) for Block 3 (Obra y cultura). What is the **maximum number of bullets** left for Block 4 without breaking the IB cue-card limit?`,
          answer: { type: "number", value: left, display: String(left) },
          traps,
          hint: "IB regulations allow a strict maximum of **10** brief bullet points in total.",
          solution: [
            `Maximum allowed bullets = 10.`,
            `Bullets used so far = ${b1} + ${b2} + ${b3} = ${used}.`,
            `Remaining for Block 4 = 10 − ${used} = **${left}**.`,
          ],
        };
      }
      // Total score calculation from 12/6/6/6 criteria
      const a = rng.int(7, 12);
      const b1 = rng.int(3, 6);
      const b2 = rng.int(3, 6);
      const c = rng.int(3, 6);
      const total = a + b1 + b2 + c;
      return {
        prompt: `In a mock HL Individual Oral (out of 30 marks), a candidate scores **${a}/12** on Criterion A, **${b1}/6** on Criterion B1, **${b2}/6** on Criterion B2, and **${c}/6** on Criterion C. What is their **total score out of 30**?`,
        answer: { type: "number", value: total, display: String(total) },
        traps,
        hint: "Sum all four criteria: A (max 12) + B1 (max 6) + B2 (max 6) + C (max 6).",
        solution: [
          `Total = ${a} + ${b1} + ${b2} + ${c} = **${total}** / 30.`,
        ],
      };
    }

    if (tier === 2) {
      const sub = rng.int(1, 2);
      if (sub === 1) {
        // Identify exact criterion A / B1 / B2 / C from examiner observation
        const item = rng.pick(CRITERION_CASES);
        const lead = rng.pick(OBS_LEADINS);
        return {
          prompt: `${lead} **${item.obs}**.\n\nEnter the exact criterion code (**A**, **B1**, **B2**, or **C**).`,
          answer: { type: "text", accept: item.accept, display: item.crit },
          traps,
          hint: "Recall: A = Language (12), B1 = Extract Presentation (6), B2 = Conversation Message (6), C = Interactive Skills (6).",
          solution: [
            `Target criterion: **${item.crit}**.`,
            item.reason,
          ],
        };
      }
      // Target score gap calculation (how many marks needed in Criterion A out of 12)
      const b1 = rng.int(4, 6);
      const b2 = rng.int(4, 6);
      const c = rng.int(4, 6);
      const bSum = b1 + b2 + c;
      const minTarget = bSum + 7;
      const maxTarget = bSum + 12;
      const target = rng.int(minTarget, maxTarget);
      const needA = target - bSum;
      return {
        prompt: `An HL candidate aims for **${target}/30** on the Individual Oral. Suppose they earn **${b1}/6** on B1, **${b2}/6** on B2, and **${c}/6** on C. How many marks (out of 12) must they score on **Criterion A (Language)** to reach exactly ${target}/30?`,
        answer: { type: "number", value: needA, display: String(needA) },
        traps,
        hint: "Subtract (B1 + B2 + C) from the target total out of 30.",
        solution: [
          `B1 + B2 + C = ${b1} + ${b2} + ${c} = ${bSum}.`,
          `Required Criterion A score = ${target} − ${bSum} = **${needA}** / 12.`,
        ],
      };
    }

    // tier 3: Advanced timing budgets (seconds inside Part 1 / total 15-min oral) + criterion matching
    const sub = rng.int(1, 3);
    if (sub === 1) {
      // Part 1 presentation time budget in seconds (hard ceiling = 240s, sweet spot 210–230s)
      const targetSec = rng.pick([215, 220, 225, 230]);
      const block1 = rng.pick([30, 35, 40]);
      const block3 = rng.pick([50, 55, 60]);
      const block4 = rng.pick([30, 35, 40]);
      const block2 = targetSec - block1 - block3 - block4;
      traps.push({
        spec: { type: "number", value: 240 - block1 - block3 - block4 },
        feedback: `That uses the 240-second (4:00) hard cutoff instead of your **${targetSec}-second** safe target! Always leave a buffer before 4:00.`,
      });
      return {
        prompt: `To finish cleanly before the 4:00 HL IO Part 1 cutoff, you plan a **${targetSec}-second** presentation: Block 1 (Contexto/Tesis) = **${block1} s**, Block 3 (Obra y cultura) = **${block3} s**, and Block 4 (Tema y reflexión) = **${block4} s**. How many **seconds** does that allocate to Block 2 (**Análisis cercano del extracto**)?`,
        answer: { type: "number", value: block2, display: String(block2) },
        traps,
        hint: `Subtract Blocks 1, 3, and 4 from the ${targetSec}-second target duration.`,
        solution: [
          `Block 1 + 3 + 4 = ${block1} + ${block3} + ${block4} = ${block1 + block3 + block4} s.`,
          `Block 2 (close extract analysis) = ${targetSec} − ${block1 + block3 + block4} = **${block2} s** (~${Math.round((block2 / targetSec) * 100)}% of Part 1).`,
        ],
      };
    }
    if (sub === 2) {
      // Total oral recording budget (max 15 min = 900s, Part 1 3-4m, Part 2 4-5m, Part 3 5-6m)
      const p1 = rng.pick([3.5, 4]);
      const p2 = rng.pick([4, 4.5, 5]);
      const maxP3 = Math.min(6, 15 - p1 - p2);
      return {
        prompt: `In an HL Individual Oral (maximum **15 minutes** total; Part 3 is **5–6 minutes**), Part 1 finishes at **${p1} min** and Part 2 lasts **${p2} min**. What is the **maximum duration in minutes** available for **Part 3 (General Discussion)** while respecting both the 6-minute Part 3 cap and the 15-minute total ceiling?`,
        answer: { type: "number", value: maxP3, display: String(maxP3) },
        traps,
        hint: "Compute 15 − (Part 1 + Part 2), then cap the result at Part 3's official upper limit of 6 minutes.",
        solution: [
          `Time left under the 15-min ceiling = 15 − (${p1} + ${p2}) = ${15 - p1 - p2} min.`,
          `Capping at Part 3's 6-minute upper bound gives **${maxP3} minutes**.`,
        ],
      };
    }
    // Criterion case at tier 3
    const item = rng.pick(CRITERION_CASES);
    const lead = rng.pick(OBS_LEADINS);
    return {
      prompt: `${lead} **${item.obs}**.\n\nEnter the exact criterion code (**A**, **B1**, **B2**, or **C**).`,
      answer: { type: "text", accept: item.accept, display: item.crit },
      traps,
      hint: "Distinguish Language (A), Part 1 Extract Message (B1), Parts 2–3 Conversation Message (B2), and Interactive Communication (C).",
      solution: [
        `Target criterion: **${item.crit}**.`,
        item.reason,
      ],
    };
  },
};

export const drills: Drill[] = [
  metalenguajeDrill,
  vozNarrativaDrill,
  recursosContextoDrill,
  puenteTemaDrill,
  ioReglasDrill,
];
