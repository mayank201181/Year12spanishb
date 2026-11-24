import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: 20-Min Prep Protocol, Extract Triage & Narrative Voice (15 MCQs)
  // answerIndex spread: [0:4, 1:4, 2:4, 3:3]
  // ===========================================================================
  {
    id: "8-hl-literature-m1",
    title: "MCQ Paper 1 · 20-Min Prep Protocol, Extract Triage & Narrative Voice (HL)",
    level: "HL",
    questions: [
      {
        id: "8-hl-literature-m1-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "State",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "Official HL IO timing rules",
        question:
          "How much supervised preparation time do **IB Spanish B HL** candidates receive before their Individual Oral, and what stimulus are they given?",
        options: [
          "20 minutes with two ~300-word literary extracts (one from each studied work) to choose one",
          "15 minutes with two visual photographs linked to the five Prescribed Themes to choose one",
          "30 minutes with a complete annotated chapter from one prescribed IB set novel in Spanish",
          "25 minutes with one unseen newspaper editorial and one ~300-word translated poem extract",
        ],
        answerIndex: 0,
        hints: [
          "HL candidates receive five minutes more preparation time than SL candidates.",
          "Think about how many literary works HL students study and how the stimulus differs from SL.",
        ],
        explanation:
          "HL candidates receive **20 minutes** of supervised preparation (compared with 15 minutes at SL) and choose **1 of 2 ~300-word literary extracts** drawn from their two studied works originally written in Spanish. There is no prescribed IB set-text list, and translated texts are not permitted.",
      },
      {
        id: "8-hl-literature-m1-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "Non-prescriptive IB HL literature rule",
        question:
          "Which statement accurately describes the **IB Spanish B HL literary work requirement** under the FA2029 subject brief?",
        options: [
          "Students study three canonical Spanish novels chosen exclusively from an official IB list",
          "Students study two translated European plays adapted into simplified B1 Spanish readers",
          "Students study two literary works originally written in Spanish, chosen freely by the teacher",
          "Students study one Spanish novel and one English film screenplay representing Hispanic culture",
        ],
        answerIndex: 2,
        hints: [
          "Check whether IB Spanish B HL has an official prescribed reading list.",
          "Remember the exact number of works and the original-language requirement.",
        ],
        explanation:
          "IB Spanish B HL mandates **two literary works originally written in Spanish**, selected freely by the teacher — there is **no official IB prescribed set-text list**. Translated works, abridged graded readers, and films do not fulfil the HL literary requirement.",
      },
      {
        id: "8-hl-literature-m1-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "Strategic extract selection (Minutes 0–2)",
        question:
          "During the first two minutes of HL IO prep, you must choose between Extract X (a rapid action sequence from your favourite chapter with minimal imagery) and Extract Y (a quiet kitchen confrontation packed with silence, recurring heat symbolism, and a sudden shift in tone). Which decision best protects **Criterion B1**?",
        options: [
          "Pick Extract X so you can spend three full minutes retelling the exciting plot of that chapter",
          "Pick Extract Y because its symbolic density and tonal shift offer richer close-reading evidence",
          "Pick Extract X because quiet scenes without dramatic action cannot link to Prescribed Themes",
          "Pick Extract Y only if you can memorise and recite all 300 words verbatim during Part 1",
        ],
        answerIndex: 1,
        hints: [
          "Ask what Criterion B1 actually rewards: plot retelling or close textual analysis?",
          "Look for which extract gives you concrete stylistic devices, quotes, and thematic depth.",
        ],
        explanation:
          "Criterion B1 rewards insightful close reading of the extract's language, mood, and meaning. Extract Y's silence, recurring symbolism, and tonal turn provide far richer analytical anchors than a plot-heavy action passage that tempts candidates into simple narration.",
      },
      {
        id: "8-hl-literature-m1-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "IB cue-card compliance",
        question:
          "Which preparation sheet complies with IB HL Individual Oral rules AND supports **Band 10–12 Criterion A fluency**?",
        options: [
          "Ten full paragraphs drafted in complete sentences so every subjunctive verb is read aloud",
          "A bilingual Spanish-English dictionary alongside twenty highlighted post-it study notes",
          "Zero annotations on the extract sheet and a blank page to prove total spontaneous memory",
          "Up to ten brief keyword cue-bullets (4–8 words each) paired with annotations on the extract",
        ],
        answerIndex: 3,
        hints: [
          "Recall the exact maximum number of bullet points allowed in the IB Individual Oral.",
          "Consider how reading full prose affects intonation and eye contact on Criterion A.",
        ],
        explanation:
          "IB regulations allow up to **10 brief bullet points** (keywords/short phrases, never prose paragraphs) and **no dictionary**. Annotating the clean extract directly and keeping bullets short preserves natural spoken delivery and eye contact.",
      },
      {
        id: "8-hl-literature-m1-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Identify narrative voice from textual markers",
        question:
          "Read this original Spanish literary opening:\n> *«Nadie en el pueblo sospechaba que don Ramiro guardaba la carta bajo el suelo de la sacristía; ni siquiera su propia hermana intuía el remordimiento que lo devoraba cada madrugada.»*\n\nWhich narrative voice is operating here?",
        options: [
          "Narrador omnisciente, porque conoce los secretos ocultos y pensamientos de todos los personajes",
          "Narrador testigo, porque observa la escena desde fuera sin acceso a ninguna emoción interior",
          "Narrador protagonista, porque relata en primera persona su propia culpa desde el presente",
          "Monólogo interior, porque reproduce el flujo desordenado de la conciencia sin signos claros",
        ],
        answerIndex: 0,
        hints: [
          "Check the grammatical person (first vs third) and whether the voice enters characters' minds.",
          "Notice phrases like *«Nadie sospechaba»*, *«ni siquiera intuía»*, and *«el remordimiento que lo devoraba»*.",
        ],
        explanation:
          "This third-person narrator accesses both collective ignorance (*nadie sospechaba*, *ni siquiera su hermana intuía*) and don Ramiro's secret guilt (*el remordimiento que lo devoraba*) — the unmistakable hallmark of a **narrador omnisciente**. A *narrador testigo* uses first person and lacks mind-reading omniscience.",
      },
      {
        id: "8-hl-literature-m1-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Distinguish narrador protagonista vs narrador testigo",
        question:
          "Read this original Spanish passage:\n> *«Yo apenas tenía once años cuando vi llegar a Mateo con aquella maleta descosida. Nunca supe qué ocurrió realmente en la estación, pero recuerdo el temblor de sus manos al estrechar las de mi padre.»*\n\nWhat type of narrator is speaking, and what analytical effect does this perspective create?",
        options: [
          "Narrador omnisciente; garantiza objetividad histórica total sobre los hechos de la estación",
          "Narrador testigo; introduce subjetividad y vacíos de información mediante una mirada parcial",
          "Narrador en segunda persona; obliga al lector a asumir la identidad culpable del protagonista",
          "Narrador equisciente en tercera persona; muestra exclusivamente los secretos de Mateo",
        ],
        answerIndex: 1,
        hints: [
          "Notice the first-person verb (*vi, supe, recuerdo*), yet the central mysterious figure is Mateo, not the speaker.",
          "Notice the admission *«Nunca supe qué ocurrió realmente»* — what does that tell you about narrative reliability and scope?",
        ],
        explanation:
          "A first-person speaker who observes another character's drama from the sidelines with limited knowledge (*«Nunca supe qué ocurrió realmente»*) is a **narrador testigo**. This framing builds mystery, emotional immediacy, and interpretive ambiguity.",
      },
      {
        id: "8-hl-literature-m1-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Interpret",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Recognise estilo indirecto libre",
        question:
          "Read this original Spanish excerpt:\n> *«Lucía miró el reloj de la estación con el corazón acelerado. ¿Y si el tren ya había partido sin avisar? ¡Qué estupidez haber confiado en una promesa tan frágil! Apretó el billete arrugado contra la palma.»*\n\nWhich technique merges the narrator's voice with Lucía's panic in the two middle sentences?",
        options: [
          "Estilo directo tradicional, marcado por rayas de diálogo y verbos introductorios explícitos",
          "Acotación escénica dramática, destinada a indicar el movimiento físico sobre el escenario",
          "Estilo indirecto libre, que funde la tercera persona con las exclamaciones íntimas de Lucía",
          "Prolepsis narrativa, que adelanta explícitamente el desenlace trágico de toda la novela",
        ],
        answerIndex: 2,
        hints: [
          "Look at the surrounding narrative tense and person (*miró*, *apretó* — third person past).",
          "Notice there are no quotation marks and no *«pensó que»*, yet the rhetorical question and exclamation sound directly like Lucía's mind.",
        ],
        explanation:
          "**Estilo indirecto libre** integrates a character's direct thoughts, exclamations, and rhetorical questions (*«¿Y si el tren…? ¡Qué estupidez…!»*) seamlessly inside third-person past narration without reporting verbs or quotation marks — sharply narrowing psychological distance.",
      },
      {
        id: "8-hl-literature-m1-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "Theatre extract analysis (acotaciones)",
        question:
          "Suppose your HL IO extract comes from a Spanish play (for instance, in the tradition of Lorca's *La casa de Bernarda Alba* `[Example work — not a set text]`) containing italicised stage directions like *(Pausa larga. Cierra la persiana de golpe y evita mirarla)*. How should you treat these lines during close analysis?",
        options: [
          "Skip them completely during Part 1 because only spoken dialogue counts as literary language",
          "Read every italicised word aloud verbatim before summarising the entire act from memory",
          "Treat them as narrator errors inserted later by editors rather than intentional authorial craft",
          "Analyse them as acotaciones revealing unspoken subtext, power tension, and claustrophobia",
        ],
        answerIndex: 3,
        hints: [
          "In drama, there is no novelistic narrator — where does the playwright encode visual symbolism and psychological subtext?",
          "Recall the Spanish term for stage directions.",
        ],
        explanation:
          "In theatrical extracts, **las acotaciones** perform much of the work of a narrator: a *pausa larga*, slamming a shutter shut, and refusing eye contact visually embody emotional repression and power dynamics — prime Band 5–6 Criterion B1 evidence.",
      },
      {
        id: "8-hl-literature-m1-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "Quote microscopy over long recitation",
        question:
          "Why is embedding **three or four short 2–5 word quotations** superior to reading out two full sentences from the ~300-word extract during Part 1?",
        options: [
          "Because IB examiners strictly deduct two marks every time a candidate quotes any Spanish word",
          "Because brief woven quotes prove close reading while keeping time for original C1 analysis",
          "Because short quotes allow you to avoid explaining literary devices or cultural perspectives",
          "Because quoting full sentences is only allowed during Part 3 of the general oral discussion",
        ],
        answerIndex: 1,
        hints: [
          "Remember Part 1 lasts only 3–4 minutes and Criterion A assesses *your* Spanish, not the author's!",
          "Think about what embedding a 3-word phrase inside your own subordinate clause demonstrates.",
        ],
        explanation:
          "Woven micro-quotes (*«el “silencio pesado” acentúa…»*) anchor your interpretation in exact textual proof while maximising the time spent showcasing **your own** analytical Spanish under Criterion A and interpretive insight under Criterion B1.",
      },
      {
        id: "8-hl-literature-m1-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "Detecting lexical / semantic fields",
        question:
          "In a ~300-word extract describing a family dinner, you underline the words *muro, reja, llave, encierro, sombra, asfixia*. What analytical tool have you uncovered?",
        options: [
          "Un campo semántico del cautiverio que construye un tono opresivo dentro del espacio doméstico",
          "Una aliteración estrictamente fonética basada en la repetición constante del sonido vocal «u»",
          "Una prolepsis cronológica que transporta la narración veinte años hacia el futuro inmediato",
          "Una acotación teatral que especifica el vestuario tradicional de los personajes secundarios",
        ],
        answerIndex: 0,
        hints: [
          "Notice that these six words all belong to one shared conceptual area (walls, bars, keys, confinement, shadow, suffocation).",
          "What is the Spanish term for a cluster of thematically linked vocabulary?",
        ],
        explanation:
          "Words sharing a conceptual domain form **un campo semántico** — here, a semantic field of captivity (*cautiverio / opresión*) that transforms an ordinary family meal into a psychological prison.",
      },
      {
        id: "8-hl-literature-m1-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Interpret",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "Spotting the turning point (punto de inflexión)",
        question:
          "Read this short original transition in a narrative extract:\n> *«Durante años asentía con la cabeza a cada orden de su tío. Aquella tarde, sin embargo, dejó la taza sobre la mesa sin temblar y pronunció por primera vez un “no” nítido que congeló la habitación.»*\n\nWhich structural element inside this moment should you star during your 20-minute annotation?",
        options: [
          "Una digresión descriptiva sin impacto real en la evolución psicológica del personaje central",
          "Un ejemplo de estilo epistolar escrito exclusivamente en primera persona del plural formal",
          "Un punto de inflexión marcado por el cambio del imperfecto habitual al pretérito decisivo",
          "Una hipérbole humorística destinada a aliviar la tensión dramática mediante un tono cómico",
        ],
        answerIndex: 2,
        hints: [
          "Look at the tense shift: *asentía* (long-standing imperfect habit) → *sin embargo, dejó… y pronunció* (sudden decisive preterite action).",
          "What Spanish term describes a decisive emotional or narrative turning point?",
        ],
        explanation:
          "The shift from habitual imperfect background (*asentía*) via the adversative connector *sin embargo* into crisp preterite verbs (*dejó, pronunció, congeló*) marks a **punto de inflexión** — the exact moment passive compliance transforms into personal agency.",
      },
      {
        id: "8-hl-literature-m1-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Avoid Anglophone literary false friends",
        question:
          "Which pair of Spanish literary terms avoids classic Anglophone **false friends** when analysing a novel in Spanish?",
        options: [
          "«el carácter principal» (main character) y «la parcela compleja» (complex plot)",
          "«el personaje principal» (main character) y «la trama / el argumento» (plot)",
          "«la figura actual» (present-day character) y «el tema sensato» (sensitive theme)",
          "«el tópico romántico» (romantic topic) y «la librería del autor» (author's library)",
        ],
        answerIndex: 1,
        hints: [
          "In Spanish, *carácter* means personality/temperament, NOT a fictional character; *parcela* means a plot of land!",
          "Check which pair uses authentic Spanish literary nouns for *character* and *plot*.",
        ],
        explanation:
          "In Spanish literary criticism, a fictional character is **el personaje** (*el carácter* means temperament/nature), and a story's plot is **la trama** or **el argumento** (*la parcela* is a piece of land; *la librería* is a bookshop, not a library).",
      },
      {
        id: "8-hl-literature-m1-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "Time budgeting during 20-minute prep",
        question:
          "What is the smartest use of the **final two minutes (Minutes 18–20)** of your HL Individual Oral preparation window?",
        options: [
          "Change your mind completely and switch to the other ~300-word extract at the last second",
          "Erase your ten concise bullet points and rewrite the whole presentation as full prose lines",
          "Count every single word of the literary extract to verify whether it contains 295 or 305 words",
          "Mentally rehearse your opening thesis sentence and key C1 pivot into the wider work",
        ],
        answerIndex: 3,
        hints: [
          "By Minute 18, your extract annotations and ≤10 cue bullets should already be complete.",
          "Think about what builds immediate calm authority in the first 30 seconds of recording.",
        ],
        explanation:
          "Rehearsing your opening thesis (title, author, narrative moment, central claim) and your main bridge connector in Minutes 18–20 eliminates first-minute hesitation and locks in fluent C1 pacing from second one.",
      },
      {
        id: "8-hl-literature-m1-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Detecting unreliable narration",
        question:
          "Read this original first-person extract:\n> *«Todos afirman que perdí la cordura aquella noche, pero mienten por envidia. Yo simplemente cerré las ventanas con clavos para proteger a mi familia del aire envenenado que traían los vecinos.»*\n\nWhich analytical claim reaches Band 5–6 on Criterion B1?",
        options: [
          "El narrador demuestra objetivamente que los vecinos contaminaron el aire del barrio entero",
          "El autor utiliza un narrador omnisciente neutral para informar con precisión científica",
          "Se trata de un narrador poco fiable cuya lógica defensiva delata su propia paranoia interior",
          "La escena carece de tensión psicológica porque la familia apoya plenamente sus acciones",
        ],
        answerIndex: 2,
        hints: [
          "Compare what *«todos afirman»* against the narrator's extreme behaviour (*cerré las ventanas con clavos*).",
          "What Spanish term describes a first-person voice whose perception contradicts reality?",
        ],
        explanation:
          "The glaring gap between collective alarm and the narrator's paranoid justification (*clavar las ventanas contra el aire envenenado*) reveals a **narrador poco fiable** (*unreliable narrator*) — a rich psychological hook for HL analysis.",
      },
      {
        id: "8-hl-literature-m1-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "analisis-extracto-300-palabras",
        strategy: "4-Layer V–E–C–P close-read checklist",
        question:
          "In the **V–E–C–P** 4-layer annotation protocol for a ~300-word extract, what are the four analytical layers you scan before writing your cue card?",
        options: [
          "Voz narrativa · Espacio/tiempo/giro · Campos semánticos y recursos · Puente obra y tema",
          "Vocabulario básico · Edad del autor · Conteo de sílabas métricas · Portada de la edición",
          "Verbos irregulares · Esquema de rima consonante · Cantidad de páginas · Precio del libro",
          "Versión traducida · Entrevista biográfica · Cronología editorial · Premios internacionales",
        ],
        answerIndex: 0,
        hints: [
          "Think of the four textual dimensions inside the extract that directly feed Criterion B1.",
          "Remember: voice, time/setting/shift, diction/devices, and the bridge outward.",
        ],
        explanation:
          "**V–E–C–P** ensures systematic close reading: **V**oz narrativa (or *acotaciones*), **E**spacio/tiempo y punto de inflexión, **C**ampos semánticos y recursos estilísticos, and **P**uente hacia la obra completa y el tema prescrito.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: Spanish Literary Metalanguage & Stylistic Precision (15 MCQs)
  // answerIndex spread: [0:4, 1:4, 2:3, 3:4]
  // ===========================================================================
  {
    id: "8-hl-literature-m2",
    title: "MCQ Paper 2 · Spanish Literary Metalanguage & Stylistic Precision (HL)",
    level: "HL",
    questions: [
      {
        id: "8-hl-literature-m2-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Distinguish",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Distinguish metáfora vs símil",
        question:
          "Compare Sentence 1 (*«El silencio era un cuchillo helado entre los dos hermanos»*) and Sentence 2 (*«El silencio cortaba la sala como un cuchillo helado»*). Which classification is exact?",
        options: [
          "Sentence 1 is a símil because it omits comparative links; Sentence 2 is a metáfora pura",
          "Sentence 1 is a metáfora (direct identification); Sentence 2 is a símil (explicit «como»)",
          "Both sentences are personificaciones because knives perform conscious moral choices",
          "Both sentences are ejemplos de analepsis because they use the imperfect past tense",
        ],
        answerIndex: 1,
        hints: [
          "Look for the explicit comparative word *como*.",
          "Remember which device equates A = B directly versus comparing A *como* B.",
        ],
        explanation:
          "Sentence 1 asserts direct equivalence (*el silencio era un cuchillo*) → **metáfora**. Sentence 2 uses the explicit comparative nexus *como* → **símil** (or *comparación*).",
      },
      {
        id: "8-hl-literature-m2-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Spot personificación in prose",
        question:
          "Read this original Spanish sentence:\n> *«La casa vieja vigilaba cada paso de los recién llegados con sus ventanas entrecerradas y sus escaleras rencorosas.»*\n\nWhich primary literary device transforms the building into a hostile presence?",
        options: [
          "La hipérbole, al exagerar matemáticamente las dimensiones arquitectónicas del edificio",
          "La prolepsis, al anunciar un incendio futuro que destruirá las escaleras de madera",
          "La ironía verbal, al elogiar sarcásticamente la comodidad moderna de la vivienda",
          "La personificación, al atribuir vigilancia y rencor humano a un espacio inanimado",
        ],
        answerIndex: 3,
        hints: [
          "Look closely at the verb *vigilaba* and the adjective *rencorosas* applied to a house and stairs.",
          "Which device assigns human emotions or deliberate actions to inanimate objects?",
        ],
        explanation:
          "Giving the house human intent (*vigilaba*) and resentment (*escaleras rencorosas*) is **personificación** (or *prosopopeya*), turning the domestic setting into a menacing antagonist.",
      },
      {
        id: "8-hl-literature-m2-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Temporal shifts: analepsis vs prolepsis",
        question:
          "Read this original Spanish literary line:\n> *«Al oler el café quemado, Marcos se vio de nuevo con siete años, escondido bajo la mesa de madera mientras las sirenas retumbaban en la avenida.»*\n\nWhich structural narrative device is triggered by the sensory cue of burnt coffee?",
        options: [
          "Una analepsis (salto al pasado) que conecta un estímulo sensorial con un trauma infantil",
          "Una prolepsis (salto al futuro) que revela el destino profesional de Marcos años después",
          "Una antítesis lógica que contrapone el sabor del café con la alegría de su infancia",
          "Una metáfora sinestésica que elimina toda referencia cronológica dentro de la trama",
        ],
        answerIndex: 0,
        hints: [
          "Notice *«se vio de nuevo con siete años»* — is narrative time moving backward or forward?",
          "Match flashback vs flash-forward to *analepsis* vs *prolepsis*.",
        ],
        explanation:
          "A sensory trigger pulling the narrative backward into childhood memory is an **analepsis** (flashback). A **prolepsis** jumps forward to anticipate future events.",
      },
      {
        id: "8-hl-literature-m2-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Spot presagio (foreshadowing)",
        question:
          "At the start of a festive wedding scene in an original short story, a crystal glass cracks spontaneously on the bride's table and a stray black crow perches silently on the courtyard arch. What Spanish literary term best names this narrative strategy?",
        options: [
          "El monólogo interior, porque transcribe pensamientos inconscientes sin puntuación",
          "La metonimia, porque sustituye el nombre de la novia por el material del vaso",
          "El presagio, porque anticipa simbólicamente una tragedia o ruptura inminente",
          "La elipsis temporal, porque omite diez años de matrimonio en una sola línea",
        ],
        answerIndex: 2,
        hints: [
          "Both unsettling signs appear during a supposedly joyful occasion to warn the reader.",
          "What is the authentic Spanish term for *foreshadowing*?",
        ],
        explanation:
          "**El presagio** (foreshadowing) plants ominous visual or verbal clues — here, cracking glass and a silent crow — that create dramatic suspense and prefigure later tragedy.",
      },
      {
        id: "8-hl-literature-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Verbal irony vs dramatic irony",
        question:
          "In a novel, the reader already knows that don Arturo's trusted business partner has embezzled the family's entire estate. Inside the extract, don Arturo raises his glass and toasts sincerely: *«¡Por la lealtad inquebrantable de mi único amigo verdadero!»* Which device intensifies the tension?",
        options: [
          "La hipérbole lírica, porque celebra con sinceridad una amistad auténtica e intacta",
          "La sinestesia, porque mezcla sensaciones auditivas y visuales en el brindis festivo",
          "El realismo mágico, porque un hecho sobrenatural irrumpe en una cena cotidiana",
          "La ironía dramática, porque el lector conoce una traición que el personaje aún ignora",
        ],
        answerIndex: 3,
        hints: [
          "Is don Arturo being sarcastic himself, or does he genuinely believe his toast while *we* know the truth?",
          "Distinguish intentional sarcasm (*ironía verbal*) from audience-character knowledge gap (*ironía dramática*).",
        ],
        explanation:
          "Because don Arturo speaks sincerely while the reader already knows he has been betrayed, this is **ironía dramática** — heightening pathos and critical tension far beyond verbal sarcasm.",
      },
      {
        id: "8-hl-literature-m2-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Recognise realismo mágico",
        question:
          "Read this original Spanish narrative excerpt:\n> *«Cada vez que la tía Clara recordaba a su prometido ausente, comenzaban a brotar diminutas flores de jazmín sobre la mesa de la cocina; la familia se limitaba a barrerlas antes de servir la sopa.»*\n\nWhich hallmark of Hispanic **realismo mágico** (seen in works such as *Como agua para chocolate* `[Example work — not a set text]`) defines this passage?",
        options: [
          "Lo extraordinario se narra con total naturalidad cotidiana, sin asombro ni explicación lógica",
          "Los personajes huyen aterrorizados ante un fenómeno fantástico propio de la ciencia ficción",
          "El narrador interrumpe la trama para explicar científicamente la botánica del jazmín",
          "La escena rechaza cualquier carga emocional o simbólica para imitar un informe policial",
        ],
        answerIndex: 0,
        hints: [
          "Notice the family's calm reaction: *«se limitaba a barrerlas antes de servir la sopa»*.",
          "How does magical realism differ from fantasy or gothic horror?",
        ],
        explanation:
          "The defining signature of **realismo mágico** is treating impossible or marvellous events (flowers sprouting from grief) with matter-of-fact domestic normality, turning internal emotion into tangible reality.",
      },
      {
        id: "8-hl-literature-m2-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Spot sinestesia in poetic prose",
        question:
          "In the original line *«Por el pasillo flotaba un silencio amargo y gris que helaba las palabras antes de nacer»*, which specific figure of speech combines hearing, taste, and sight inside *«silencio amargo y gris»*?",
        options: [
          "Un hipérbaton sintáctico, al invertir el orden lógico de sujeto y complemento directo",
          "Una sinestesia, al fusionar percepciones de distintos sentidos (oído, gusto y vista)",
          "Una anáfora métrica, al repetir la misma palabra exacta al comienzo de tres versos",
          "Una elipsis nominal, al suprimir deliberadamente el verbo principal de la oración",
        ],
        answerIndex: 1,
        hints: [
          "*Silencio* belongs to hearing, *amargo* to taste, and *gris* to sight.",
          "What Spanish literary term names the blending of different sensory perceptions?",
        ],
        explanation:
          "**La sinestesia** fuses sensations from distinct senses (*silencio* = auditory, *amargo* = gustatory, *gris* = visual), immersing the reader physically in the extract's bleak, suffocating mood.",
      },
      {
        id: "8-hl-literature-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Apply the T–E–M triangle (avoid feature-spotting)",
        question:
          "Which candidate sentence best demonstrates **Band 10–12 T–E–M (Técnica + Cita → Efecto → Mensaje)** commentary on the quote *«una jaula con cortinas de encaje»*?",
        options: [
          "Hay una metáfora muy buena en «jaula con cortinas de encaje» que llama mucho la atención",
          "El autor escribe las palabras «jaula» y «cortinas» porque la habitación tenía ventanas grandes",
          "La metáfora «jaula con cortinas de encaje» denuncia cómo el lujo aparente disfraza la sumisión",
          "Se trata de una hipérbole literal que demuestra que la protagonista coleccionaba pájaros exóticos",
        ],
        answerIndex: 2,
        hints: [
          "Look for the sentence that pairs the exact device and brief quote with a sharp analytical verb and thematic message.",
          "Eliminate vague clichés (*llama mucho la atención*) and literal misreadings.",
        ],
        explanation:
          "Combining **técnica + cita** (*la metáfora «jaula con cortinas de encaje»*), a high-register **analytical verb** (*denuncia*), and **thematic meaning** (apparent domestic elegance masking lack of freedom) exemplifies Band 10–12 T–E–M analysis.",
      },
      {
        id: "8-hl-literature-m2-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Distinguish oxímoron vs antítesis",
        question:
          "In a poignant literary passage, the narrator describes a reunion as *«una soledad compartida»* and *«un grito mudo»*. What exact Spanish literary device joins two contradictory terms directly side by side?",
        options: [
          "El símil explícito, al unir dos realidades parecidas con la conjunción «como»",
          "La metonimia clásica, al designar el todo mediante una de sus partes físicas",
          "El polisíndeton, al acumular conjunciones copulativas para frenar el ritmo",
          "El oxímoron, al yuxtaponer dos conceptos opuestos en una sola expresión paradójica",
        ],
        answerIndex: 3,
        hints: [
          "Look at *grito* (shout) + *mudo* (mute), and *soledad* (solitude) + *compartida* (shared).",
          "Two directly adjacent contradictory words form one specific Greek-origin term.",
        ],
        explanation:
          "**El oxímoron** compresses two mutually contradictory ideas into one phrase (*grito mudo*, *soledad compartida*), vividly expressing emotional alienation or repressed suffering.",
      },
      {
        id: "8-hl-literature-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Upgrading IGCSE analytical verbs to C1",
        question:
          "You want to upgrade the repetitive phrase *«Este símbolo muestra el miedo del personaje»* into Band 10–12 Spanish literary register. Which verb replacement is the strongest and most idiomatic?",
        options: [
          "«Este símbolo hace ver un poco el miedo del personaje»",
          "«Este símbolo cristaliza la angustia latente del personaje»",
          "«Este símbolo dice claramente que el personaje tiene susto»",
          "«Este símbolo habla mucho de los problemas del personaje»",
        ],
        answerIndex: 1,
        hints: [
          "Compare informal/vague verbs (*hace ver, dice, habla mucho*) with precise C1 literary verbs.",
          "Notice *cristaliza* + *angustia latente*.",
        ],
        explanation:
          "Verbs such as **cristaliza, encarna, evidencia, agudiza**, and **desvela** paired with nuanced nouns (*angustia latente* instead of *susto*) demonstrate authentic C1 academic precision under Criterion A.",
      },
      {
        id: "8-hl-literature-m2-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Recognise leitmotiv across a whole work",
        question:
          "In a novel, the ticking of an old wall clock appears in Chapter 1 (during a father's strict lecture), again inside your Chapter 6 IO extract, and finally on the last page when the protagonist smashes it. What is the exact Spanish term for this recurring thematic motif?",
        options: [
          "Un leitmotiv, cuyo significado evoluciona de símbolo de control a ruptura liberadora",
          "Una acotación teatral, reservada exclusivamente para obras representadas en vivo",
          "Una aliteración consonántica, limitada a la música de una única sílaba repetida",
          "Un prólogo editorial, añadido fuera del texto narrativo por un crítico literario",
        ],
        answerIndex: 0,
        hints: [
          "Look for the term describing an image, sound, or object that recurs meaningfully across an entire work.",
          "Notice how tracking its evolution from Chapter 1 → Extract → Ending creates a seamless whole-work bridge!",
        ],
        explanation:
          "A recurring concrete motif that accumulates symbolic force across a work is a **leitmotiv**. Tracing how a *leitmotiv* shifts from Chapter 1 through your extract to the ending is one of the strongest ways to bridge micro-analysis to the whole work.",
      },
      {
        id: "8-hl-literature-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Interpret",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Subjunctive in C1 literary analysis",
        question:
          "Which analytical statement uses **grammatically accurate C1 Spanish mood (indicative vs subjunctive)** to evaluate an author's stylistic choice?",
        options: [
          "«Es revelador que el autor utiliza el tiempo presente para aumentar la tensión.»",
          "«No parece casual que la escena transcurre en un patio cerrado sin salida.»",
          "«De ahí que el simbolismo del espejo adquiere un matiz irónico hacia el final.»",
          "«Es significativo que la voz narrativa recurra a la elipsis para sugerir censura.»",
        ],
        answerIndex: 3,
        hints: [
          "Check every trigger: *es revelador que*, *no parece casual que*, *de ahí que*, and *es significativo que* ALL demand subjunctive!",
          "Find the only sentence where the subordinate verb is properly conjugated in present subjunctive.",
        ],
        explanation:
          "Impersonal value judgements (*es significativo que, es revelador que*), negated certainty (*no parece casual que*), and *de ahí que* ALL require the **subjunctive**. Only **recurra** (from *recurrir*) is correctly in present subjunctive; *utiliza, transcurre*, and *adquiere* are indicative slips.",
      },
      {
        id: "8-hl-literature-m2-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Identify tono from diction and syntax",
        question:
          "Read this original Spanish passage:\n> *«Por supuesto, el alcalde inauguró con gran pompa una fuente de mármol brillante en la plaza, exactamente dos días después de cortar el suministro de agua potable en los barrios del sur.»*\n\nWhich adjective most accurately describes **el tono** of this narrator?",
        options: [
          "Nostálgico e idealizador, al rememorar con ternura el progreso arquitectónico urbano",
          "Ingenuo y reverente, al celebrar sin reservas la generosidad de las autoridades locales",
          "Mordaz y satírico, al exponer con ironía fría la hipocresía del poder municipal",
          "Melancólico y elegíaco, al lamentar la fugacidad universal de la juventud humana",
        ],
        answerIndex: 2,
        hints: [
          "Notice the sarcastic opening *«Por supuesto»* and the stark juxtaposition between a marble fountain and cutting off drinking water.",
          "Which tone adjective fits sharp, biting social criticism?",
        ],
        explanation:
          "The sarcastic *«Por supuesto»* and stark contrast between ostentatious luxury (*fuente de mármol*) and basic deprivation (*cortar el agua potable*) establish a **tono mordaz y satírico** exposing institutional hypocrisy.",
      },
      {
        id: "8-hl-literature-m2-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "recursos-literarios-metalenguaje",
        strategy: "Recognise hipérbole in Hispanic literature",
        question:
          "Read this original line inspired by the oral storytelling tradition of Latin America:\n> *«Llovió con tanta furia durante aquel noviembre que los peces empezaron a nadar por los pasillos de la alcaldía y los relojes se ahogaron de aburrimiento.»*\n\nWhich rhetorical figure exaggerates the storm beyond physical possibility to amplify emotional stagnation?",
        options: [
          "La hipérbole, que amplifica desmesuradamente el aguacero para intensificar el estancamiento",
          "La litote, que atenúa discretamente la gravedad de la tormenta mediante una negación suave",
          "El eufemismo, que sustituye una realidad cruda por una expresión socialmente cortés",
          "La onomatopeya, que imita exclusivamente el sonido acústico de las gotas sobre el techo",
        ],
        answerIndex: 0,
        hints: [
          "Fish swimming through town-hall corridors and clocks drowning in boredom go far beyond literal reality.",
          "What Spanish term names deliberate, extravagant exaggeration?",
        ],
        explanation:
          "**La hipérbole** (deliberate exaggeration) magnifies the November downpour to absurd proportions — a signature comic-critical effect found across Hispanic narrative traditions.",
      },
      {
        id: "8-hl-literature-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "puente-extracto-obra-tema",
        strategy: "Recognise elipsis as thematic silence",
        question:
          "In a narrative extract set during a turbulent political era, the narrator jumps abruptly from *«Llamaron a la puerta a medianoche»* to *«Cinco años más tarde, todavía nadie pronunciaba el nombre de mi hermano en la mesa»*. How does **la elipsis** operate thematically here?",
        options: [
          "Demuestra descuido editorial al omitir involuntariamente varios capítulos del manuscrito",
          "Convierte el vacío narrativo en reflejo del trauma reprimido y la censura colectiva",
          "Acelera el ritmo con un propósito puramente humorístico propio de la comedia ligera",
          "Sustituye la perspectiva en primera persona por un narrador omnisciente completamente neutro",
        ],
        answerIndex: 1,
        hints: [
          "Ask *why* the writer deliberately leaves out what happened right after the midnight knock.",
          "Connect the missing five years (*elipsis temporal*) to the silence around the brother's name.",
        ],
        explanation:
          "Here **la elipsis** (deliberate omission of five traumatic years) mirrors the family's enforced silence (*nadie pronunciaba su nombre*), allowing form itself to enact political fear and unspoken grief.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: Extract → Work → Theme Bridges & FA2029 IO Criteria B2/C (15 MCQs)
  // answerIndex spread: [0:3, 1:4, 2:4, 3:4]
  // ===========================================================================
  {
    id: "8-hl-literature-m3",
    title: "MCQ Set 3 · Extract-to-Theme Bridges & FA2029 HL IO Criteria (HL)",
    level: "HL",
    questions: [
      {
        id: "8-hl-literature-m3-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "State",
        guideRef: "discusion-io-hl-criterios",
        strategy: "Official HL IO 30-mark structure",
        question:
          "How are the **30 total marks** of the IB Spanish B HL Individual Oral distributed across the four assessment criteria?",
        options: [
          "Criterion A: 10 · Criterion B1: 10 · Criterion B2: 5 · Criterion C: 5",
          "Criterion A: 15 · Criterion B1: 5 · Criterion B2: 5 · Criterion C: 5",
          "Criterion A: 12 · Criterion B1: 6 · Criterion B2: 6 · Criterion C: 6",
          "Criterion A: 8 · Criterion B1: 8 · Criterion B2: 8 · Criterion C: 6",
        ],
        answerIndex: 2,
        hints: [
          "Criterion A represents 40% of the 30-mark oral.",
          "The remaining three criteria — B1, B2, and C — carry equal marks.",
        ],
        explanation:
          "The HL Individual Oral totals **30 marks (25% of the HL diploma grade)**: **Criterion A (Language) = 12**, **Criterion B1 (Message — Literary Extract) = 6**, **Criterion B2 (Message — Conversation) = 6**, and **Criterion C (Interactive Skills) = 6**.",
      },
      {
        id: "8-hl-literature-m3-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "State",
        guideRef: "discusion-io-hl-criterios",
        strategy: "Official timing of all 3 HL IO parts",
        question:
          "What is the official timing structure for **Parts 1, 2, and 3** of the IB Spanish B HL Individual Oral recording?",
        options: [
          "Part 1: 3–4 min presentation · Part 2: 4–5 min follow-up · Part 3: 5–6 min general discussion",
          "Part 1: 6–7 min presentation · Part 2: 2–3 min follow-up · Part 3: 3–4 min general discussion",
          "Part 1: 1–2 min summary · Part 2: 8–9 min translation · Part 3: 4–5 min grammar quiz",
          "Part 1: 5–6 min recitation · Part 2: 5–6 min book quiz · Part 3: 5–6 min free essay",
        ],
        answerIndex: 0,
        hints: [
          "Total recording time is **12–15 minutes**.",
          "Part 1 is strictly capped at 4 minutes, followed by two progressively slightly longer discussions.",
        ],
        explanation:
          "The 12–15 minute HL IO comprises **Part 1 (3–4 min)** uninterrupted presentation, **Part 2 (4–5 min)** literary follow-up discussion, and **Part 3 (5–6 min)** general discussion on at least one other Prescribed Theme.",
      },
      {
        id: "8-hl-literature-m3-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "puente-extracto-obra-tema",
        strategy: "4-Block presentation time allocation",
        question:
          "A candidate delivers a 3 minute 45 second HL IO presentation. Which time allocation best satisfies **Criterion B1 (Message — Literary Extract)**?",
        options: [
          "2:30 full plot summary of the novel · 0:30 brief mention of the extract · 0:45 biography",
          "1:45 author's life story · 1:15 definition of metaphors · 0:45 personal travel anecdote",
          "0:20 intro · 3:15 reading the extract aloud slowly · 0:10 naming one Prescribed Theme",
          "0:40 context & thesis · 1:30 close extract analysis · 1:00 work & culture · 0:35 theme",
        ],
        answerIndex: 3,
        hints: [
          "Criterion B1 demands that the *extract itself* be the analytical core of Part 1.",
          "Look for ~40% (~1:30) dedicated to close analysis before zooming out smoothly.",
        ],
        explanation:
          "Spending roughly **40% (~1:30)** on close analysis of the ~300-word extract (Block 2), framed by a crisp thesis (0:40), targeted whole-work/cultural bridges (1:00), and thematic synthesis (0:35), directly targets Band 5–6 on Criterion B1.",
      },
      {
        id: "8-hl-literature-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "puente-extracto-obra-tema",
        strategy: "Linking motifs to the 5 IB Prescribed Themes",
        question:
          "An original ~300-word extract portrays a young Mapuche poet debating whether to publish her verses in Mapudungun or Spanish to reach urban readers while preserving ancestral memory. Which **IB Prescribed Theme** provides the sharpest primary link?",
        options: [
          "Ingenio humano únicamente, centrado exclusivamente en la ingeniería aeroespacial moderna",
          "Identidades, al explorar la lengua, el patrimonio indígena y la pertenencia cultural",
          "Experiencias deportivas, al analizar las reglas competitivas del atletismo internacional",
          "Organización económica bancaria, al examinar los tipos de interés en el comercio mundial",
        ],
        answerIndex: 1,
        hints: [
          "Recall the 5 Prescribed Themes: *Identidades, Experiencias, Ingenio humano, Organización social, Compartir el planeta*.",
          "Which theme houses *lengua e identidad*, cultural heritage, and beliefs/values?",
        ],
        explanation:
          "Language choice, indigenous heritage, and cultural self-definition sit squarely at the heart of **Identidades** (with rich secondary dialogue with *Ingenio humano* for poetic expression and *Compartir el planeta* for indigenous rights).",
      },
      {
        id: "8-hl-literature-m3-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "puente-extracto-obra-tema",
        strategy: "Surgical whole-work link vs plot dumping",
        question:
          "In Block 3 of your presentation (*Puente hacia la obra completa*), which strategy best proves mastery of the whole literary work without falling into tedious plot summary?",
        options: [
          "Recite every chapter title in strict chronological order from page 1 to the epilogue",
          "Avoid mentioning any events outside the 300 words so you never spoil the novel's ending",
          "Connect the extract to one earlier cause and one later evolution of the same motif or conflict",
          "Compare the book's cover design with three unrelated films you watched last summer",
        ],
        answerIndex: 2,
        hints: [
          "You only have ~60 seconds for Block 3 — you need maximum analytical precision per second.",
          "Think of the *Backward-Forward Pair* strategy.",
        ],
        explanation:
          "Linking the extract to **one earlier cause** (*antes del fragmento*) and **one later turning point/evolution** (*hacia el desenlace*) proves deep whole-work understanding concisely while keeping the focus analytical rather than narrative.",
      },
      {
        id: "8-hl-literature-m3-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "puente-extracto-obra-tema",
        strategy: "Avoiding cultural stereotypes in HL IO",
        question:
          "Which Hispanic cultural connection in Part 1 avoids reductive stereotyping and reaches **Band 5–6 intercultural depth**?",
        options: [
          "«En todos los países hispanos la gente es siempre muy apasionada y dramática por naturaleza.»",
          "«Esta novela es española porque los personajes comen paella y escuchan flamenco cada tarde.»",
          "«La cultura hispana nunca cambia, así que los jóvenes de hoy viven igual que en 1930.»",
          "«La tensión entre tradición y autonomía refleja el choque generacional de la posguerra rural.»",
        ],
        answerIndex: 3,
        hints: [
          "Eliminate broad sweeping generalisations (*todos los países*, *siempre*, *nunca cambia*).",
          "Look for historically and socially grounded cultural framing.",
        ],
        explanation:
          "Anchoring the extract in a concrete socio-historical dynamic (e.g. postwar rural generational tension) shows authentic intercultural insight, whereas clichés about *paella*, *flamenco*, or unchanging national traits cap Criterion B1.",
      },
      {
        id: "8-hl-literature-m3-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "discusion-io-hl-criterios",
        strategy: "FA2029 refined Criterion B2 & C top bands",
        question:
          "Under the **FA2029 subject brief's refined top bands for Criteria B2 and C**, which Part 2 response best demonstrates spontaneous critical depth and authentic interaction?",
        options: [
          "Acknowledging the teacher's challenge, weighing both sides with «si bien… no obstante…», citing a scene, and inviting dialogue",
          "Replying «Sí, estoy totalmente de acuerdo» in three seconds and waiting silently for the next question",
          "Ignoring the teacher's question completely to recite a two-minute memorised paragraph about another chapter",
          "Switching briefly into English to explain a difficult literary metaphor before resuming Spanish",
        ],
        answerIndex: 0,
        hints: [
          "Recall the **P–E–E–C** strategy for spontaneous oral turns.",
          "FA2029 refined B2 & C top bands prioritise nuanced evaluation, textual grounding, and authentic reciprocity.",
        ],
        explanation:
          "Validating the interlocutor, evaluating nuance with concessive structures (*si bien… no obstante…*), supporting with concrete textual evidence, and returning a thoughtful thread directly embodies top-band B2 and C performance.",
      },
      {
        id: "8-hl-literature-m3-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "discusion-io-hl-criterios",
        strategy: "Part 2 vs Part 3 thematic requirement",
        question:
          "How must **Part 3 (General Discussion, 5–6 minutes)** differ in scope from **Part 2 (Follow-up Discussion, 4–5 minutes)**?",
        options: [
          "Part 3 must stay strictly inside the same 300-word extract and analyse its punctuation marks",
          "Part 3 broadens into a general cultural discussion of at least one other IB Prescribed Theme",
          "Part 3 requires the candidate to read a third unseen literary extract aloud for five minutes",
          "Part 3 is conducted entirely in English to verify the candidate's translation accuracy",
        ],
        answerIndex: 1,
        hints: [
          "Part 2 deepens the literary work and extract; what happens when the teacher pivots to Part 3?",
          "Check how many Prescribed Themes must be touched across the full oral.",
        ],
        explanation:
          "While Part 2 probes the literary extract and studied work, **Part 3 (5–6 min)** shifts to a broader conversation exploring **at least one additional IB Prescribed Theme** across Hispanophone cultures and wider global perspectives.",
      },
      {
        id: "8-hl-literature-m3-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Justify",
        guideRef: "discusion-io-hl-criterios",
        strategy: "Interactive repair and clarification under Criterion C",
        question:
          "During Part 3, the teacher speaks quickly and uses an unfamiliar idiomatic phrase in a question about urban sustainability. Which candidate reaction best protects **Criterion C (Interactive Skills)**?",
        options: [
          "Freeze silently for twenty seconds hoping the teacher will move on to an easier topic",
          "Guess blindly and launch into a rehearsed monologue about your favourite summer holiday",
          "Politely ask for clarification in natural Spanish: «Disculpe, ¿podría reformular ese matiz?»",
          "Apologise in English and ask the teacher to write the question down on the cue card",
        ],
        answerIndex: 2,
        hints: [
          "Real-world fluent speakers ask for clarification naturally in the target language when needed.",
          "Which reaction maintains authentic Spanish communication without breaking down?",
        ],
        explanation:
          "Requesting clarification gracefully in Spanish (*«Disculpe, ¿se refiere usted a…?»* / *«¿Podría reformular ese matiz?»*) demonstrates real communicative control under Criterion C, whereas freezing, guessing off-topic, or using English breaks communication.",
      },
      {
        id: "8-hl-literature-m3-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "puente-extracto-obra-tema",
        strategy: "Planting Part 2 conversation hooks in Block 4",
        question:
          "Why is ending your 3:45 presentation with a thoughtful open tension — e.g. *«Queda abierta la cuestión de si la memoria nos libera o nos condena a repetir el pasado»* — a high-leverage HL exam tactic?",
        options: [
          "Because asking any rhetorical question automatically extends Part 1 to six full minutes",
          "Because it relieves you from having to mention the literary extract's author or title",
          "Because examiners forbid personal opinions and only accept unresolved questions at the end",
          "Because it signals critical reflection and naturally invites engaging Part 2 follow-up dialogue",
        ],
        answerIndex: 3,
        hints: [
          "Think about how the teacher starts Part 2 right after you finish speaking at 3:45.",
          "What does a thoughtful ethical tension tell the examiner about your intellectual engagement?",
        ],
        explanation:
          "Closing Block 4 with a genuine interpretive tension showcases Band 5–6 critical insight and hands the teacher an organic, engaging springboard for Part 2 — steering the follow-up onto ground you understand deeply.",
      },
      {
        id: "8-hl-literature-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "discusion-io-hl-criterios",
        strategy: "Managing the 4:00 ceiling on Part 1",
        question:
          "What happens if an HL candidate is still only halfway through Block 2 when the clock reaches **4 minutes 00 seconds** during Part 1?",
        options: [
          "The teacher silently gives them three extra minutes so they can reach seven minutes cleanly",
          "The teacher must interrupt to begin Part 2, leaving whole-work and thematic links unfinished",
          "The examiner cancels Part 3 automatically so the candidate can finish reading their cue card",
          "The recording is restarted from zero with a fresh 20-minute preparation period in the room",
        ],
        answerIndex: 1,
        hints: [
          "Part 1 has a strict IB maximum of 4 minutes.",
          "Think about what gets cut off if you run out of time before Blocks 3 and 4.",
        ],
        explanation:
          "At **4:00**, the teacher must interrupt and transition into Part 2. Running out of time before Blocks 3 and 4 leaves your whole-work bridge, cultural lens, and personal synthesis missing — which directly lowers Criterion B1. Aim for **3:30–3:50**!",
      },
      {
        id: "8-hl-literature-m3-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "puente-extracto-obra-tema",
        strategy: "C1 cohesive bridge phrases",
        question:
          "Which Spanish transition phrase most naturally bridges from **close extract analysis (Block 2)** into **Hispanic socio-cultural context (Block 3)**?",
        options: [
          "«Más allá del conflicto íntimo de esta escena, el pasaje refleja una realidad social más amplia…»",
          "«Bueno, ya terminé con el texto de papel; ahora voy a hablar de cultura porque es obligatorio…»",
          "«Fin del análisis literario. Punto número tres de mi lista: la historia general de América…»",
          "«Olvidando completamente este fragmento, prefiero contar otro libro distinto que me gustó más…»",
        ],
        answerIndex: 0,
        hints: [
          "Avoid clunky meta-labels (*ahora voy a hablar de cultura porque es obligatorio*) or abandoning the extract.",
          "Look for an organic conceptual link moving from the intimate scene to wider society.",
        ],
        explanation:
          "*«Más allá del conflicto íntimo de esta escena, el pasaje refleja…»* creates seamless C1 discourse cohesion, linking textual detail directly to cultural significance rather than bolting on an artificial " + '"culture section".',
      },
      {
        id: "8-hl-literature-m3-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "discusion-io-hl-criterios",
        strategy: "Self-correction under Criterion A",
        question:
          "Halfway through an ambitious Part 2 sentence, you realise you just said *«Ojalá la protagonista había elegido otro camino»* (wrong mood after *ojalá*). What is the best real-time move for **Criterion A (Language, 12 marks)**?",
        options: [
          "Stop speaking for ten seconds and apologise repeatedly for ruining the entire oral exam",
          "Pretend nothing happened and switch to basic A2 present-tense sentences for the rest of Part 2",
          "Avoid using «ojalá», conditionals, or subjunctive structures ever again during Part 3",
          "Calmly self-repair — «perdón, hubiera elegido otro camino» — and keep flowing naturally",
        ],
        answerIndex: 3,
        hints: [
          "Band 10–12 Criterion A does NOT require robotic zero-slip perfection; it rewards ambition, control, and natural self-monitoring.",
          "Notice *ojalá + pluscuamperfecto de subjuntivo* = *hubiera elegido*.",
        ],
        explanation:
          "A brief, poised self-correction (*«perdón, hubiera elegido…»*) shows high linguistic awareness and keeps communication smooth without retreating into simplistic grammar.",
      },
      {
        id: "8-hl-literature-m3-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Compare",
        guideRef: "discusion-io-hl-criterios",
        strategy: "Intercultural comparison in Part 3",
        question:
          "In Part 3 (*Organización social* — youth civic participation), how should an international HL student (for example, studying in Singapore) integrate intercultural perspectives?",
        options: [
          "Talk exclusively about Singapore's schools without mentioning any Spanish-speaking society",
          "Compare a concrete Hispanophone example thoughtfully with their own context, noting nuances",
          "Claim that one society is completely superior while dismissing the other without evidence",
          "Recite dictionary definitions of citizenship rather than sharing personal critical views",
        ],
        answerIndex: 1,
        hints: [
          "IB Language B prizes genuine **intercultural understanding** anchored in Hispanophone cultures.",
          "Avoid both ignoring Hispanic contexts and falling into one-sided cultural judgements.",
        ],
        explanation:
          "Anchoring Part 3 in a specific Hispanophone context (e.g., youth volunteering or civic associations in Spain, Chile, or Colombia) and drawing a nuanced, respectful comparison with your own environment hits top-band Criterion B2 insight.",
      },
      {
        id: "8-hl-literature-m3-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Synthesize",
        guideRef: "discusion-io-hl-criterios",
        strategy: "Using your second studied work strategically in Part 2",
        question:
          "During Part 2, the teacher asks whether the theme of generational silence in your chosen extract also appears elsewhere in Hispanic literature you have read. What is the strongest HL response?",
        options: [
          "Refuse to mention your second studied work because IB forbids referencing it after Part 1",
          "Abandon your chosen extract entirely and spend four minutes summarising the second book's plot",
          "Draw a focused thematic contrast with your second studied Hispanic work while tying back cleanly",
          "Mention an English-language novel instead because comparative points only work across languages",
        ],
        answerIndex: 2,
        hints: [
          "Remember HL students study **two** Hispanic literary works — Part 1 focuses on one extract, while Part 2 can reward sharp comparative insight if invited!",
          "Keep any cross-work comparison concise and thematic rather than a long plot dump.",
        ],
        explanation:
          "Drawing a brief, illuminating thematic contrast with your **second studied Hispanic work** (for instance, contrasting oppressive silence in a rural play versus fractured memory in an urban novel) demonstrates exceptional Band 6 synthesis while remaining anchored in the conversation.",
      },
    ],
  },
];
