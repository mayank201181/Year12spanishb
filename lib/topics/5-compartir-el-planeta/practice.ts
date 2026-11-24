import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ: 10 Auto-Marked Short Questions (SL & HL Core)
  // ===========================================================================
  quiz: [
    {
      id: "5-compartir-el-planeta-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "medio-ambiente-sostenibilidad",
      question:
        "Conjugate **llover** in the blank (one word, lowercase):\n*Aunque ________ (llover) poco este invierno en Andalucía, ya existen planes de restricción hídrica.*",
      answer: { type: "text", accept: ["llueva"], display: "llueva" },
      traps: [
        {
          spec: { type: "text", accept: ["llueve"] },
          feedback: "*Llueve* is present indicative (verified present fact), whereas *este invierno* here describes an uncertain future possibility (“even if it rains little”), requiring present subjunctive **llueva**.",
        },
        {
          spec: { type: "text", accept: ["llova"] },
          feedback: "Remember that *llover* is a stem-changing verb (*o → ue*) in the present subjunctive: **llueva**.",
        },
      ],
      solution: [
        "Spot the uncertain future concession (*este invierno* = “even if it rains little”).",
        "Use present subjunctive of *llover* (*o → ue*): **llueva**.",
      ],
      hints: [
        "Does *aunque* express a verified fact (“even though”) or an uncertain possibility (“even if”)?",
        "Conjugate *llover* (*o → ue*) in 3rd-person singular present subjunctive.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "medio-ambiente-sostenibilidad",
      question:
        "Conjugate **existir** in the blank to express an established, known fact (one word, lowercase):\n*Aunque ya ________ (existir) leyes contra la tala ilegal en la Amazonia, su cumplimiento sigue siendo desigual.*",
      answer: { type: "text", accept: ["existen"], display: "existen" },
      traps: [
        {
          spec: { type: "text", accept: ["existan"] },
          feedback: "Here *ya* confirms that the laws are an established reality (“even though laws already exist”), so *aunque* takes the present indicative **existen**.",
        },
        {
          spec: { type: "text", accept: ["existe"] },
          feedback: "Check subject–verb agreement: *leyes* is plural → **existen**.",
        },
      ],
      solution: [
        "*Ya* + factual context indicates a known reality (“even though laws already exist”) → indicative.",
        "Subject *leyes* is plural → **existen**.",
      ],
      hints: [
        "Notice the word *ya* (“already”): is the existence of these laws a known fact?",
        "Match plural *leyes* in the present indicative.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "medio-ambiente-sostenibilidad",
      question:
        "Give the exact two-word Spanish term for “circular economy” (lowercase, no article).",
      answer: { type: "text", accept: ["economía circular"], display: "economía circular" },
      solution: [
        "Recall the B2–C1 sustainability term opposing the linear *usar y tirar* model: **economía circular** (remember the tilde on *economía*!).",
      ],
      hints: [
        "Watch the accent mark on the first noun (*economía*).",
        "In Spanish, the adjective follows the noun.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "medio-ambiente-sostenibilidad",
      question:
        "Write the exact two-word concessive preposition starting with **p** that precedes a noun (no *que*!):\n*________ la escasez de agua, el consumo agrícola no se ha reducido.*",
      answer: { type: "text", accept: ["pese a"], display: "pese a" },
      traps: [
        {
          spec: { type: "text", accept: ["pese a que"] },
          feedback: "Never add *que* directly before a noun (*la escasez*)! Use **pese a** without *que*.",
        },
        {
          spec: { type: "text", accept: ["a pesar de"] },
          feedback: "*A pesar de* is grammatically right, but the prompt asks for the two-word synonym starting with **p** → **pese a**.",
        },
      ],
      solution: [
        "Before a noun phrase (*la escasez de agua*) with no conjugated verb, drop *que*.",
        "The two-word formal preposition starting with *p* is **pese a**.",
      ],
      hints: [
        "There is no conjugated verb immediately after the blank — only the noun *la escasez*.",
        "Think of the concise C1 synonym of *a pesar de* starting with *p*.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "derechos-humanos-igualdad-paz",
      question:
        "Conjugate **garantizar** (3rd-person singular present subjunctive; watch the spelling change!):\n*Reivindicamos que el Estado ________ (garantizar) el acceso a una justicia independiente.*",
      answer: { type: "text", accept: ["garantice"], display: "garantice" },
      traps: [
        {
          spec: { type: "text", accept: ["garantiza"] },
          feedback: "*Reivindicamos que* (WEIRDO demand) triggers the present subjunctive, not the indicative *garantiza*.",
        },
        {
          spec: { type: "text", accept: ["garantizará"] },
          feedback: "Even though the desired action is in the future, *reivindicamos que* requires the present subjunctive **garantice**, never the future indicative.",
        },
      ],
      commonError: "Writing *garantize* instead of **garantice** — remember *-zar → -ce* before *-e*.",
      solution: [
        "*Reivindicar que* expresses advocacy/demand → present subjunctive.",
        "For *-zar* verbs, *z → c* before *-e*: **garantice**.",
      ],
      hints: [
        "Does *reivindicamos que* trigger indicative or subjunctive?",
        "Apply the *-zar → -ce* spelling change in Spanish.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "derechos-humanos-igualdad-paz",
      question:
        "What two-word Spanish legal term names the right of indigenous peoples to be consulted before extractive projects on their lands (lowercase, no article)?",
      answer: { type: "text", accept: ["consulta previa"], display: "consulta previa" },
      solution: [
        "Under ILO Convention 169 across Latin America, this right is **consulta previa** (in full: *consulta previa, libre e informada*).",
      ],
      hints: [
        "Literally “prior consultation”.",
        "Two words: *consulta* + adjective meaning “prior”.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "globalizacion-etica-entorno-urbano",
      question:
        "Give the single Spanish noun (lowercase, no article) equivalent to **greenwashing**.",
      answer: { type: "text", accept: ["ecoblanqueo"], display: "ecoblanqueo" },
      solution: [
        "The standard Spanish term recommended by FundéuRAE for *greenwashing* is **ecoblanqueo** (also *lavado verde* as a two-word phrase).",
      ],
      hints: [
        "Combine *eco-* with the Spanish word for “whitewashing / laundering” (*blanqueo*).",
        "One compound masculine noun: *eco...*.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "globalizacion-etica-entorno-urbano",
      question:
        "What two-word Spanish phrase designates Spain's severely depopulated inland provinces such as Soria, Teruel, and Cuenca (omit the article *la*)?",
      answer: { type: "text", accept: ["España vaciada", "espana vaciada"], display: "España vaciada" },
      solution: [
        "**España vaciada** (with *vaciada*, past participle of *vaciar*, highlighting structural abandonment rather than mere emptiness).",
      ],
      hints: [
        "First word: the country name (*España*). Second word: participle of *vaciar* (“emptied out”).",
        "Watch the tilde on *ñ* and feminine agreement with *España*.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "argumentacion-etica-global-hl",
      question:
        "[HL] Conjugate **ser** after *de ahí que* (one word, lowercase):\n*El transporte aéreo genera enormes emisiones; de ahí que ________ (ser) esencial potenciar la red ferroviaria.*",
      answer: { type: "text", accept: ["sea"], display: "sea" },
      traps: [
        {
          spec: { type: "text", accept: ["es"] },
          feedback: "**De ahí que** ALWAYS requires the subjunctive in standard Spanish — even for an objective conclusion → **sea**.",
        },
      ],
      solution: [
        "Recall the C1 rule: *de ahí que* always triggers the subjunctive.",
        "3rd-person singular present subjunctive of *ser* → **sea**.",
      ],
      hints: [
        "Never use indicative after *de ahí que*.",
        "Conjugate *ser* in the 3rd-person singular present subjunctive.",
      ],
    },
    {
      id: "5-compartir-el-planeta-quiz-q10",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "argumentacion-etica-global-hl",
      question:
        "[HL] Conjugate **carecer** (3rd-person plural present subjunctive) inside this C1 rebuttal:\n*No es que las comunidades rurales ________ (carecer) de iniciativas, sino que faltan infraestructuras básicas.*",
      answer: { type: "text", accept: ["carezcan"], display: "carezcan" },
      traps: [
        {
          spec: { type: "text", accept: ["carecen"] },
          feedback: "*No es que* negates a cause and therefore requires the **subjunctive** (**carezcan**), whereas *sino que* takes indicative (*faltan*).",
        },
      ],
      solution: [
        "*No es que* always triggers the subjunctive to reject a false cause.",
        "From *yo carezco*, take stem *carezc-* + *-an* (*ellas*) → **carezcan**.",
      ],
      hints: [
        "Does *no es que* take indicative or subjunctive?",
        "Start from the irregular *yo* form *carezco* to build the subjunctive stem.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS × 15 Qs = 30 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1 (SL): Core Theme 5 Grammar, Paper 2 Reading & SL Paper 1 Writing
    // -------------------------------------------------------------------------
    {
      id: "5-compartir-el-planeta-p1",
      title: "Practice Paper 1 (SL) — Environment, Rights, Globalisation & Core IB Tasks",
      level: "SL",
      questions: [
        {
          id: "5-compartir-el-planeta-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "medio-ambiente-sostenibilidad",
          question:
            "Conjugate **aumentar** (3rd-person singular) in this factual statement:\n*Aunque la inversión en energía eólica ________ (aumentar) cada año en España, todavía dependemos en parte del gas natural.*",
          answer: { type: "text", accept: ["aumenta"], display: "aumenta" },
          traps: [
            {
              spec: { type: "text", accept: ["aumente"] },
              feedback: "*Cada año* marks an established, ongoing reality (“even though investment increases every year”) → present indicative **aumenta**.",
            },
          ],
          solution: [
            "The phrase *cada año* signals a verified recurring fact.",
            "With a known fact, *aunque* takes present indicative → **aumenta**.",
          ],
          hints: [
            "Check *cada año*: is this an ongoing reality or an uncertain future hypothesis?",
            "Known fact after *aunque* = indicative.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "medio-ambiente-sostenibilidad",
          question:
            "Conjugate **reducir** (1st-person plural *nosotros*) in this hypothetical concession:\n*Aunque ________ (reducir) a la mitad el plástico este año, el deshielo continuará si no bajamos las emisiones industriales.*",
          answer: { type: "text", accept: ["reduzcamos"], display: "reduzcamos" },
          traps: [
            {
              spec: { type: "text", accept: ["reducimos"] },
              feedback: "Because halving plastic this year is hypothetical (“even if we halve…”) paired with future *continuará*, use present subjunctive **reduzcamos**.",
            },
          ],
          solution: [
            "Hypothetical concession + future main verb (*continuará*) → present subjunctive.",
            "From *yo reduzco*, stem *reduzc-* + *-amos* → **reduzcamos**.",
          ],
          hints: [
            "Look at *continuará*: is halving plastic already accomplished or hypothetical?",
            "Build the *nosotros* present subjunctive from *yo reduzco*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "medio-ambiente-sostenibilidad",
          question:
            "Write the exact Spanish noun phrase (two words, lowercase, no article) meaning “water stress” (used in reports on Andalusia and Murcia).",
          answer: { type: "text", accept: ["estrés hídrico"], display: "estrés hídrico" },
          solution: [
            "**estrés hídrico** — watch both acute accents (*estrés* and *hídrico*!).",
          ],
          hints: [
            "First word is cognate with “stress” (with a tilde on the *e*).",
            "Second word is the formal adjective for water (*hídrico*, with a tilde on the *i*).",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "derechos-humanos-igualdad-paz",
          question:
            "Conjugate **proteger** (3rd-person plural *ellos*) in this advocacy demand:\n*Pedimos que los tribunales internacionales ________ (proteger) a los periodistas amenazados.*",
          answer: { type: "text", accept: ["protejan"], display: "protejan" },
          traps: [
            {
              spec: { type: "text", accept: ["protegen"] },
              feedback: "*Pedimos que* triggers the subjunctive, not the indicative *protegen*.",
            },
            {
              spec: { type: "text", accept: ["protegerán"] },
              feedback: "After *pedimos que*, never use the future indicative — use the present subjunctive **protejan**.",
            },
          ],
          commonError: "Writing *protegan* instead of **protejan** — *-ger* verbs change *g → j* before *-a*.",
          solution: [
            "*Pedimos que* (request/demand with subject change) requires present subjunctive.",
            "From *yo protejo*, change *g → j* before *-an* → **protejan**.",
          ],
          hints: [
            "*Pedir que* is a WEIRDO subjunctive trigger.",
            "Check the *yo* form *protejo* so you keep the *j*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "derechos-humanos-igualdad-paz",
          question:
            "Replace the weak anglicism in brackets with the precise formal Spanish infinitive (one word, lowercase):\n*Ningún gobierno tiene derecho a [romper] los derechos fundamentales de las minorías.*",
          answer: { type: "text", accept: ["vulnerar", "conculcar", "violar", "infringir"], display: "vulnerar" },
          solution: [
            "The standard IB B2–C1 collocation for violating human rights is **vulnerar** (or *conculcar*) *los derechos fundamentales*.",
          ],
          hints: [
            "Think of the formal verb related to the adjective *vulnerable*.",
            "It begins with *v* and ends in *-ar*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "globalizacion-etica-entorno-urbano",
          question:
            "Give the two-word Spanish term (lowercase, no article) for the rapid migration of inhabitants from villages to large cities.",
          answer: { type: "text", accept: ["éxodo rural"], display: "éxodo rural" },
          solution: [
            "**éxodo rural** — watch the accent mark on *éxodo* (esdrújula word).",
          ],
          hints: [
            "First word is cognate with “exodus” (needs an accent on the first *e*).",
            "Second word: *rural*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "globalizacion-etica-entorno-urbano",
          question:
            "Paper 2 Reading — Lexical Synonym. Read the short extract:\n*«Las cooperativas cafetaleras de Cauca apuestan por una producción sostenible que garantice la trazabilidad del grano y un ingreso digno para cada familia agricultora.»*\nCopy the exact **single Spanish noun** from the extract that means **“supply-chain traceability”**.",
          answer: { type: "text", accept: ["trazabilidad"], display: "trazabilidad" },
          solution: [
            "Scan the extract for the noun matching “traceability” → **trazabilidad** (copy only the single word requested!).",
          ],
          hints: [
            "Look near the middle of the sentence after *garantice la*.",
            "Copy ONLY the exact single noun from the text.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "medio-ambiente-sostenibilidad",
          question:
            "Complete this sentence with the exact three-word concessive connector ending in *de* (for use before an infinitive):\n*________ ________ ________ invertir en energía solar, el municipio todavía depende de camiones diésel.*",
          answer: { type: "text", accept: ["a pesar de"], display: "a pesar de" },
          traps: [
            {
              spec: { type: "text", accept: ["a pesar de que"] },
              feedback: "Before an infinitive (*invertir*), drop *que*! Use **a pesar de**.",
            },
          ],
          solution: [
            "Before an infinitive (*invertir*), use **a pesar de** (never *a pesar de que*!).",
          ],
          hints: [
            "The prompt asks for three words ending in *de* (no *que*!).",
            "Translates as “despite [investing]”.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "medio-ambiente-sostenibilidad",
          marks: 3,
          question:
            "Read the two Spanish statements below:\n- (A) *Aunque **sube** el precio del agua, el riego ilegal no se detiene.*\n- (B) *Aunque **suba** el precio del agua, el riego ilegal no se detendrá.*\n\nIn English, **explain** (1) the grammatical mood in each sentence, (2) the difference in meaning regarding reality, and (3) how the main-clause verb in (B) reinforces your choice.",
          modelAnswer:
            "Sentence (A) employs the indicative mood (*sube*) to portray the price increase as an established current fact (“even though the price is rising”). Sentence (B) switches to the subjunctive mood (*suba*) to treat the rise as an uncertain future possibility (“even if the price rises”). This hypothetical framing in (B) is reinforced by the future tense (*se detendrá*) in the main clause.",
          markScheme: [
            {
              point: "Identifies indicative in (A) and subjunctive in (B).",
              keywords: ["indicative", "subjunctive"],
            },
            {
              point: "Explains the meaning contrast: established fact ('even though') vs hypothetical/uncertain possibility ('even if').",
              keywords: ["even though", "even if", "hypothetical", "established"],
            },
            {
              point: "Links (B) to the future tense (*se detendrá*) in the main clause.",
              keywords: ["future tense", "se detendrá"],
            },
          ],
          hints: [
            "Name both verb moods explicitly (indicative vs subjunctive).",
            "Translate *aunque* differently in each case (“even though” vs “even if”).",
            "Look at *no se detiene* vs *no se detendrá*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Interpret",
          guideRef: "derechos-humanos-igualdad-paz",
          marks: 3,
          question:
            "Paper 2 Reading — True/False + Minimal Justification.\nRead the passage:\n*«En los últimos diez años, las comunidades amazónicas con títulos legales de propiedad han logrado frenar la tala clandestina con mayor eficacia que varias reservas sin vigilancia. Sin embargo, los líderes locales denuncian la lentitud burocrática para reconocer nuevas tierras ancestrales.»*\n\nDecide whether the statement **“La obtención de títulos legales de tierra ha resultado inútil frente a la tala clandestina”** is **Verdadero** or **Falso**, copy the **minimal justification phrase** from the text (do NOT copy the whole paragraph!), and explain in one sentence why the second sentence introduces a nuance.",
          modelAnswer:
            "**Falso.** Justificación mínima: *«han logrado frenar la tala clandestina con mayor eficacia»* — meaning titled communities actually **slowed illegal logging more effectively** than unmonitored reserves. The second sentence qualifies this success by noting that indigenous leaders still face slow bureaucracy when seeking legal recognition for additional ancestral territories.",
          markScheme: [
            {
              point: "Correctly states Falso.",
              keywords: ["falso"],
            },
            {
              point: "Quotes/paraphrases the minimal evidence proving legal titles slowed illegal logging more effectively.",
              keywords: ["slowed illegal logging", "more effectively"],
            },
            {
              point: "Explains the nuance of bureaucratic delays for recognising additional territories.",
              keywords: ["bureaucracy", "bureaucratic"],
            },
          ],
          hints: [
            "Compare *inútil* (“useless”) against *han logrado frenar… con mayor eficacia*.",
            "On Paper 2 Reading, copy ONLY the exact minimal phrase that contradicts the statement.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "globalizacion-etica-entorno-urbano",
          marks: 4,
          question:
            "Write a short paragraph in **Spanish** (60–90 words) comparing territorial challenges in **inland rural Spain** and **large Latin American capitals**, mentioning at least one concrete solution or innovation from each context.",
          modelAnswer:
            "Mientras que la España vaciada —en provincias como Soria o Teruel— sufre despoblación, envejecimiento y el cierre de consultorios y escuelas, las megaciudades latinoamericanas como Ciudad de México o Lima afrontan congestión, contaminación y gentrificación. No obstante, ambos polos comparten una raíz común: el éxodo rural por falta de oportunidades equilibradas. Para revertirlo, los pueblos españoles apuestan por el teletrabajo y la fibra óptica, mientras que urbes como Medellín han innovado mediante el urbanismo social y el Metrocable.",
          markScheme: [
            {
              point: "Accurately describes depopulation / service loss in *la España vaciada* (with region example).",
              keywords: ["españa vaciada", "despoblación", "teruel", "soria"],
            },
            {
              point: "Contrasts with megacity pressures (congestion, pollution, gentrification) in Latin America.",
              keywords: ["megaciudades", "congestión", "gentrificación"],
            },
            {
              point: "Identifies a rural revitalisation measure (*teletrabajo*, *fibra óptica*).",
              keywords: ["teletrabajo", "fibra óptica"],
            },
            {
              point: "Cites a Latin American urban innovation (*urbanismo social*, *Metrocable*, *Ciclovía*).",
              keywords: ["metrocable", "urbanismo social", "ciclovía"],
            },
          ],
          hints: [
            "Contrast *la España vaciada* (Teruel/Soria) with megacities like CDMX or Lima.",
            "Include one concrete solution for each side (*teletrabajo / fibra óptica* vs *Metrocable / Ciclovía*).",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "derechos-humanos-igualdad-paz",
          marks: 4,
          question:
            "Write 3–4 sentences in **Spanish** defending gender equality and press freedom, using **two different subjunctive advocacy triggers** (e.g. *exigir que*, *resulta inadmisible que*, *con el fin de que*) and authentic Theme 5 vocabulary.",
          modelAnswer:
            "Resulta inadmisible que todavía persista una notable brecha salarial y un techo de cristal que limiten el progreso profesional de millones de mujeres. Asimismo, la sociedad civil exige que los gobiernos protejan la libertad de prensa y combatan la autocensura de los periodistas independientes. Debemos impulsar leyes de coeducación y transparencia con el fin de que la equidad sea una realidad cotidiana y no una promesa vacía.",
          markScheme: [
            {
              point: "Uses an impersonal or demand trigger + accurate present subjunctive (*persista*, *protejan*, etc.).",
              keywords: ["persista", "protejan", "garanticen", "eliminen"],
            },
            {
              point: "Uses a second distinct subjunctive clause (e.g. *con el fin de que* / *para que* + subjunctive).",
              keywords: ["con el fin de que", "para que", "sea una realidad"],
            },
            {
              point: "Integrates accurate gender-equality vocabulary (*brecha salarial*, *techo de cristal*, *coeducación*).",
              keywords: ["brecha salarial", "techo de cristal", "coeducación"],
            },
            {
              point: "Integrates press-freedom terminology (*libertad de prensa*, *autocensura*, *periodistas independientes*).",
              keywords: ["libertad de prensa", "autocensura"],
            },
          ],
          hints: [
            "Combine *brecha salarial* / *techo de cristal* with *libertad de prensa* / *autocensura*.",
            "Verify every verb after a subjunctive trigger is correctly conjugated.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Justify",
          guideRef: "globalizacion-etica-entorno-urbano",
          marks: 4,
          question:
            "A Paper 1 SL prompt reads: *«Quieres informar a los estudiantes de tu instituto sobre los daños de la moda rápida y animarlos a organizar un mercadillo de intercambio y consumo responsable.»* The three text types offered are **un informe oficial**, **un folleto informativo**, and **una carta al director**. In English, **justify** which single text type is most appropriate using IB Conceptual Understandings (Audience, Context, Purpose) and name two text-type conventions you would include.",
          modelAnswer:
            "The optimal choice is **un folleto informativo** (brochure/leaflet). Its **audience** is fellow secondary-school students (semi-formal or friendly *tú/ustedes* register) in a school-campaign **context**, and its **purpose** is both to inform briskly about fast fashion and to persuade peers to take practical action at a swap market. Neither a formal institutional *informe* nor a newspaper *carta al director* fits peers directly. Essential brochure conventions include a catchy **headline/slogan**, short scannable **subheadings or bullet points**, and a clear **call to action** with event logistics (date, place, how to participate).",
          markScheme: [
            {
              point: "Selects *folleto* (brochure/leaflet) as the single optimal text type.",
              keywords: ["folleto", "brochure", "leaflet"],
            },
            {
              point: "Applies Audience & Register (peer students, accessible/engaging *tú/ustedes* tone).",
              keywords: ["register", "peers", "semi-formal", "tú"],
            },
            {
              point: "Explains Purpose (inform briskly and persuade to join the swap market) and rejects unsuitable options.",
              keywords: ["persuade", "action", "swap market"],
            },
            {
              point: "Names at least two authentic brochure conventions (slogan, subheadings, bullet points, call to action/logistics).",
              keywords: ["slogan", "subheadings", "bullet points", "call to action"],
            },
          ],
          hints: [
            "Match Audience (*compañeros de instituto*) and Purpose (inform + persuade to join an event).",
            "Think about visual and structural conventions of a leaflet: slogan, bulleted tips, logistics box.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "medio-ambiente-sostenibilidad",
          marks: 6,
          question:
            "**SL Paper 1 Mini-Task (120–160 words in Spanish):**\nEscribe un **artículo de opinión** breve para la revista escolar sobre el dilema del agua y la sostenibilidad en el mundo hispanohablante. Incluye: (1) un titular atractivo y firma, (2) una referencia cultural concreta (p. ej. Doñana, la Amazonia o Costa Rica), (3) una cláusula concesiva con *aunque* + indicativo y otra con *aunque* + subjuntivo, y (4) una propuesta realista basada en la economía circular.",
          modelAnswer:
            "**Cada gota cuenta: el futuro del agua está en nuestras manos**\n*Por Elena Morales, estudiante de 2.º de Bachillerato*\n\n¿Somos realmente conscientes de que el agua dulce es un recurso finito? Aunque España lidera Europa en energía solar, la desertificación y el estrés hídrico amenazan gravemente ecosistemas vitales como el Parque Nacional de Doñana, donde la sobreexplotación de acuíferos pone en jaque la biodiversidad. Algo semejante ocurre en la Amazonia, cuyo deterioro frena su papel como sumidero de carbono.\n\nNo basta con gestos simbólicos. Aunque llueva más el próximo invierno, la crisis no desaparecerá si mantenemos un modelo lineal de usar y tirar. Pese a la comodidad del hiperconsumo, resulta imprescindible que adoptemos la economía circular —reparar, reutilizar y reducir residuos— y sigamos ejemplos esperanzadores como Costa Rica. El planeta no espera: actuemos hoy.",
          markScheme: [
            {
              point: "Includes authentic *artículo de opinión* conventions (engaging headline, byline, rhetorical question/hook).",
              keywords: ["cada gota", "por elena", "¿somos"],
            },
            {
              point: "Anchors argument in concrete Hispanophone environmental case studies (Doñana / Amazonia / Costa Rica).",
              keywords: ["doñana", "acuíferos", "costa rica"],
            },
            {
              point: "Uses *aunque* + indicative accurately for a verified reality.",
              keywords: ["lidera", "amenazan"],
            },
            {
              point: "Uses *aunque* + subjunctive accurately for an uncertain future concession.",
              keywords: ["llueva"],
            },
            {
              point: "Uses accurate B2–C1 environmental vocabulary (*estrés hídrico*, *sumidero de carbono*, *usar y tirar*).",
              keywords: ["estrés hídrico", "sumidero de carbono", "usar y tirar"],
            },
            {
              point: "Closes with a realistic circular-economy call to action and WEIRDO subjunctive (*adoptemos*).",
              keywords: ["adoptemos", "reparar", "reutilizar"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not address the task or is incomprehensible.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic B1 listing of green tips with weak article conventions and persistent mood/agreement errors.",
              indicators: ["Missing headline/byline", "No Hispanophone example", "Confuses indicative and subjunctive after *aunque*"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear opinion article with relevant climate vocabulary and one cultural reference; mostly accurate grammar with minor slips.",
              indicators: ["Headline and coherent paragraphs", "At least one accurate *aunque* clause", "Clear link to circular economy"],
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Compelling IB Band 10–12 opinion article: vivid voice, authentic Hispanophone anchoring, accurate contrast of *aunque* + indicative/subjunctive, and idiomatic B2–C1 lexis.",
              indicators: ["Engaging hook + byline + strong closing", "Accurate indicative vs subjunctive contrast", "Specific Hispanophone examples (Doñana, Amazonia, Costa Rica)"],
            },
          ],
          hints: [
            "Open with an eye-catching title, a byline (*Por…*), and a rhetorical question to hook readers.",
            "Include one known fact after *aunque* (indicative) and one future hypothesis after *aunque* (subjunctive).",
            "Mention a real Hispanophone case study (Doñana, Amazonia, or Costa Rica) and circular-economy habits.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "globalizacion-etica-entorno-urbano",
          marks: 6,
          question:
            "**SL Paper 1 Mini-Task (120–160 words in Spanish):**\nEscribe una **carta al director** de un periódico local reaccionando a un reportaje sobre el impacto de la moda rápida en el desierto de Atacama. Incluye: (1) convenciones formales de *carta al director*, (2) crítica al ecoblanqueo (*greenwashing*), (3) defensa del comercio justo y del consumo responsable, y (4) al menos una estructura con *pese a* + sustantivo y un subjuntivo de recomendación.",
          modelAnswer:
            "Estimado director:\n\nLe escribo a raíz de su reciente reportaje sobre los vertederos textiles del norte chileno, una imagen desoladora que refleja los excesos de nuestra cultura del hiperconsumo. Pese a la creciente conciencia ciudadana, numerosas multinacionales recurren al ecoblanqueo para proyectar una imagen verde mientras multiplican colecciones baratas y efímeras.\n\nNo basta con culpar únicamente al comprador individual; es imprescindible que los gobiernos exijan trazabilidad real en toda la cadena de suministro y sancionen la publicidad engañosa. Al mismo tiempo, quienes disponemos de recursos podemos respaldar el comercio justo, reparar nuestras prendas y optar por el mercado de segunda mano para dignificar el trabajo de los productores.\n\nCon la esperanza de que este debate impulse cambios legislativos urgentes,\n\nAtentamente,\nMateo Ruiz",
          markScheme: [
            {
              point: "Uses formal *carta al director* conventions (formal salutation, *usted* address, reference to article, *Atentamente* + name).",
              keywords: ["estimado director", "atentamente"],
            },
            {
              point: "Connects textile waste to overconsumption (*vertederos textiles*, *hiperconsumo*).",
              keywords: ["vertederos textiles", "hiperconsumo"],
            },
            {
              point: "Explains and critiques *ecoblanqueo* (misleading green image while multiplying cheap collections).",
              keywords: ["publicidad engañosa", "imagen verde", "colecciones baratas"],
            },
            {
              point: "Uses *pese a* + noun phrase accurately without *que*.",
              keywords: ["pese a la creciente conciencia"],
            },
            {
              point: "Deploys accurate subjunctive in a policy recommendation (*exijan*, *sancionen*).",
              keywords: ["exijan", "sancionen", "trazabilidad"],
            },
            {
              point: "Balances systemic regulation with personal ethical habits (*segunda mano*, *reparar*, *dignificar*).",
              keywords: ["segunda mano", "reparar", "dignificar"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No meaningful engagement with the prompt.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Informal tone inappropriate for a newspaper editor; simplistic claims about cheap clothes.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Appropriate formal letter frame with relevant ethical-consumption vocabulary and mostly accurate syntax.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Authoritative *carta al director* with crisp *usted* register, nuanced critique of corporate *ecoblanqueo* + individual action, accurate *pese a* + noun, and well-controlled subjunctive.",
            },
          ],
          hints: [
            "Open with *Estimado/a director/a:* and reference the newspaper's report in your first line.",
            "Remember *pese a* takes a noun without *que* (*pese a la conciencia…*).",
            "Close formally with *Atentamente,* and a signature.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2 (HL): Nuanced Argumentation, C1 Syntax & HL Global Ethics Tasks
    // -------------------------------------------------------------------------
    {
      id: "5-compartir-el-planeta-p2",
      title: "Practice Paper 2 (HL) — Global Argumentation, C1 Connectors & HL Writing",
      level: "HL",
      questions: [
        {
          id: "5-compartir-el-planeta-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "argumentacion-etica-global-hl",
          question:
            "[HL] Conjugate **resultar** after *de ahí que* (one word, lowercase):\n*El calentamiento global intensifica las sequías en el Mediterráneo; de ahí que ________ (resultar) prioritario modernizar los sistemas de riego.*",
          answer: { type: "text", accept: ["resulte"], display: "resulte" },
          traps: [
            {
              spec: { type: "text", accept: ["resulta"] },
              feedback: "Remember: *de ahí que* ALWAYS requires the subjunctive → **resulte**.",
            },
          ],
          solution: [
            "*De ahí que* always triggers the subjunctive.",
            "3rd-person singular present subjunctive of *resultar* → **resulte**.",
          ],
          hints: [
            "Check the mandatory mood after *de ahí que*.",
            "Conjugate *-ar* verb *resultar* in 3rd-person singular present subjunctive.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "argumentacion-etica-global-hl",
          question:
            "[HL] Supply the missing two-word adversative connector starting with **n** to complete the C1 concession–rebuttal pair:\n*Si bien es cierto que la minería genera divisas a corto plazo, ________ ________ sus costes ecológicos resultan irreversibles.*",
          answer: { type: "text", accept: ["no obstante"], display: "no obstante" },
          solution: [
            "Pair *si bien es cierto que* with the formal adversative pivot **no obstante** (“nevertheless”).",
          ],
          hints: [
            "Two words, starting with *n*, synonymous with *sin embargo*.",
            "Formal C1 adversative connector: *no ________*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "argumentacion-etica-global-hl",
          question:
            "[HL] Complete with the **present perfect subjunctive** (two words, lowercase) of **exigir** after *de ahí que*:\n*La impunidad desalienta la denuncia ciudadana; de ahí que diversas ONG ________ ________ (exigir) reformas judiciales profundas.*",
          answer: { type: "text", accept: ["hayan exigido"], display: "hayan exigido" },
          traps: [
            {
              spec: { type: "text", accept: ["han exigido"] },
              feedback: "*Han exigido* is present perfect indicative; *de ahí que* demands present perfect **subjunctive** → **hayan exigido**.",
            },
            {
              spec: { type: "text", accept: ["haya exigido"] },
              feedback: "Check subject agreement: *diversas ONG* is plural → **hayan exigido**.",
            },
          ],
          solution: [
            "*De ahí que* + completed past action with present relevance → present perfect subjunctive (*haber* in present subjunctive + past participle).",
            "Plural subject *diversas ONG* → **hayan exigido**.",
          ],
          hints: [
            "Use the present subjunctive of *haber* agreeing with plural *diversas ONG*.",
            "Add the regular past participle of *exigir*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "argumentacion-etica-global-hl",
          question:
            "[HL] Complete the second half of this C1 contrast with the exact two-word conjunction (NOT *pero*!):\n*No es que falte tecnología limpia, ________ ________ falta voluntad política para financiarla.*",
          answer: { type: "text", accept: ["sino que"], display: "sino que" },
          traps: [
            {
              spec: { type: "text", accept: ["sino"] },
              feedback: "Because a conjugated verb (*falta*) follows, you must include *que* → **sino que**.",
            },
            {
              spec: { type: "text", accept: ["pero"] },
              feedback: "After a direct negation (*No es que…*) replacing a false cause with the real one, Spanish requires **sino que**.",
            },
          ],
          solution: [
            "Pattern: *No es que + subjuntivo, **sino que** + indicativo*.",
            "Since a conjugated verb (*falta*) follows, write **sino que**.",
          ],
          hints: [
            "What replaces *pero* when directly contradicting a negated statement?",
            "Add *que* because a conjugated verb (*falta*) follows.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q05",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "argumentacion-etica-global-hl",
          question:
            "[HL] Conjugate **poner** in the blank after *por mucho que* (3rd-person plural present subjunctive, one word):\n*Por mucho que las multinacionales ________ (poner) etiquetas verdes en sus escaparates, los consumidores informados exigen datos verificables.*",
          answer: { type: "text", accept: ["pongan"], display: "pongan" },
          traps: [
            {
              spec: { type: "text", accept: ["ponen"] },
              feedback: "*Por mucho que* expressing rhetorical dismissal (“no matter how many green labels they put”) requires the present subjunctive → **pongan**.",
            },
          ],
          solution: [
            "Start from irregular *yo pongo* → subjunctive stem *pong-*.",
            "3rd-person plural (*las multinacionales*) → **pongan**.",
          ],
          hints: [
            "*Por mucho que* (“no matter how much”) takes the subjunctive here.",
            "Build the present subjunctive of *poner* from the *yo* form *pongo*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q06",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "argumentacion-etica-global-hl",
          question:
            "[HL] Conjugate **implicar** after *sin que* (3rd-person singular present subjunctive, watch *-car → -qu-*!):\n*Es posible revitalizar el campo sin que ello ________ (implicar) destruir su patrimonio natural.*",
          answer: { type: "text", accept: ["implique"], display: "implique" },
          traps: [
            {
              spec: { type: "text", accept: ["implica"] },
              feedback: "*Sin que* is an ESCAPA conjunction that ALWAYS takes the subjunctive → **implique**.",
            },
            {
              spec: { type: "text", accept: ["implice"] },
              feedback: "Watch Spanish orthography: *-car* verbs change *c → qu* before *-e* → **implique**.",
            },
          ],
          solution: [
            "*Sin que* always demands the subjunctive.",
            "Apply *-car → -que* spelling change to *implicar* → **implique**.",
          ],
          hints: [
            "*Sin que* always triggers the subjunctive.",
            "Watch the spelling rule for *-car* verbs before *-e*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q07",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "argumentacion-etica-global-hl",
          question:
            "[HL] Fill in the blank with the correct **imperfect subjunctive** form of **tener** (3rd-person plural, *-ra* or *-se* form):\n*Aunque los municipios rurales ________ (tener) hoy trenes de alta velocidad, también necesitarían viviendas asequibles para retener a los jóvenes.*",
          answer: { type: "text", accept: ["tuvieran", "tuviesen"], display: "tuvieran" },
          traps: [
            {
              spec: { type: "text", accept: ["tengan"] },
              feedback: "Look at the conditional verb *necesitarían*: a contrary-to-fact present hypothesis (“even if they had…”) pairs with **imperfect subjunctive** (**tuvieran / tuviesen**).",
            },
            {
              spec: { type: "text", accept: ["tenían"] },
              feedback: "Hypothetical contrary-to-fact *aunque* paired with conditional *necesitarían* requires imperfect subjunctive (**tuvieran**), not imperfect indicative.",
            },
          ],
          solution: [
            "Conditional main verb (*necesitarían*) signals a contrary-to-fact present hypothesis → imperfect subjunctive.",
            "From preterite *tuvieron*, drop *-ron* and add *-ran* (or *-sen*) → **tuvieran** (or *tuviesen*).",
          ],
          hints: [
            "Spot the conditional tense *necesitarían* in the main clause.",
            "Form the imperfect subjunctive of *tener* from the 3rd-person plural preterite *tuvieron*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "derechos-humanos-igualdad-paz",
          question:
            "[HL] Paper 2 Reading — Pronoun Referent. Read:\n*«La Comisión de la Verdad publicó un extenso informe final; su difusión en las escuelas busca que las nuevas generaciones comprendan las raíces del conflicto y no repitan los errores del pasado.»*\nWhat exact noun phrase in the sentence does the possessive **su** refer to?",
          answer: { type: "text", accept: ["un extenso informe final", "extenso informe final", "informe final"], display: "un extenso informe final" },
          solution: [
            "*Su difusión* means “its dissemination” — referring to **un extenso informe final** (accepting *informe final*), NOT *la Comisión de la Verdad*.",
          ],
          hints: [
            "Ask: *what* is being disseminated (*difundido*) in schools?",
            "Look at the direct object of *publicó* immediately before the semicolon.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "argumentacion-etica-global-hl",
          marks: 4,
          question:
            "[HL] Upgrade the following Band 6–7 paragraph into a cohesive Band 10–12 HL Spanish paragraph (65–95 words) using **si bien es cierto que**, **no obstante**, **nominalisation**, and **de ahí que + subjuntivo**:\n*«Mucha gente dice que el comercio justo es muy caro. Es verdad que cuesta más. Pero los agricultores pobres merecen ganar dinero bien. Por eso debemos cambiar las reglas del comercio.»*",
          modelAnswer:
            "Si bien es cierto que los productos de comercio justo presentan un precio ligeramente superior en el mercado, no obstante dicha diferencia refleja el coste real de unas condiciones laborales dignas y una agricultura sostenible. La obsesión por el bajo coste perpetúa la explotación en la cadena de suministro; de ahí que resulte indispensable impulsar reformas fiscales y campañas de sensibilización que hagan accesible el consumo ético a todas las familias.",
          markScheme: [
            {
              point: "Uses *si bien es cierto que* + indicative accurately to concede the price objection.",
              keywords: ["presentan", "cuesta", "precio"],
            },
            {
              point: "Pivots with *no obstante* and develops a substantive rebuttal (living wages, sustainable farming).",
              keywords: ["condiciones laborales dignas", "sostenible", "dicha diferencia"],
            },
            {
              point: "Applies C1 nominalisation (e.g. *la obsesión*, *la explotación*, *cadena de suministro*, *reformas fiscales*).",
              keywords: ["cadena de suministro", "explotación", "reformas"],
            },
            {
              point: "Concludes with *de ahí que* + accurate present subjunctive (*resulte*, *sea*, *deban*).",
              keywords: ["resulte", "sea indispensable", "sea imprescindible"],
            },
          ],
          hints: [
            "Do NOT copy the Band 6–7 wording; replace *mucha gente dice* and *ganar dinero bien* with C1 vocabulary.",
            "Check that the verb directly after *de ahí que* is in the subjunctive (*resulte* / *sea*).",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Interpret",
          guideRef: "derechos-humanos-igualdad-paz",
          marks: 4,
          question:
            "[HL] Paper 2 Reading — Tone & Purpose Inference. Read this excerpt from a Latin American editorial:\n*«Resulta cómodo aplaudir desde despachos urbanos la belleza de la selva mientras se archivan, año tras año, las denuncias de quienes arriesgan su vida para custodiarla. Mientras la impunidad siga siendo la norma, cualquier cumbre climática quedará reducida a un escaparate diplomático.»*\n\nIn English, **analyse** (1) the writer's tone, (2) two specific lexical/metaphorical choices that create that tone, and (3) the writer's underlying purpose.",
          modelAnswer:
            "The writer adopts a **scathing, ironic, and denunciatory** tone. First, the contrast between *«aplaudir desde despachos urbanos»* (comfortable urban offices) and *«arriesgan su vida»* exposes bureaucratic hypocrisy towards indigenous and environmental defenders. Second, dismissing climate summits as an *«escaparate diplomático»* (diplomatic shop window / PR showcase) conveys sharp scepticism about performative pledges while impunity persists. The writer's purpose is to **indict institutional inaction** and pressure authorities to enforce legal accountability rather than issue empty rhetoric.",
          markScheme: [
            {
              point: "Accurately identifies the critical, ironic, or denunciatory tone.",
              keywords: ["ironic", "scathing", "denunciatory", "sarcastic", "critical"],
            },
            {
              point: "Analyses the contrast of urban offices (*despachos urbanos*) vs defenders risking their lives (hypocrisy).",
              keywords: ["hypocrisy", "comfortable", "despachos urbanos"],
            },
            {
              point: "Interprets the metaphor *escaparate diplomático* (superficial showcase / performative PR).",
              keywords: ["shop window", "showcase", "performative", "escaparate"],
            },
            {
              point: "Identifies persuasive purpose: condemning institutional inaction and demanding legal accountability.",
              keywords: ["accountability", "inaction", "rhetoric"],
            },
          ],
          hints: [
            "Look beyond 'sad' or 'angry': notice the sharp irony in *aplaudir desde despachos*.",
            "Translate the metaphor *escaparate diplomático* (shop window) and explain what it implies about climate summits.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q11",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "argumentacion-etica-global-hl",
          marks: 4,
          question:
            "[HL] **IO Part 3 Spontaneous Rebuttal Practice:** The examiner challenges you: *«¿No crees que proteger los territorios indígenas frena el desarrollo económico que necesitan los países latinoamericanos?»*\nWrite a crisp 70–100 word **Spanish** oral response using **no es que + subj., sino que + ind.**, a hedging phrase (*cabe matizar que*), and an evidence-based counter-argument.",
          modelAnswer:
            "Es una cuestión sumamente compleja y entiendo esa preocupación. Cabe matizar que la conservación ambiental y el progreso económico no son necesariamente incompatibles. No es que los pueblos originarios rechacen el bienestar material, sino que exigen un desarrollo sostenible que respete su consulta previa y no destruya sus ríos. Como demuestra el modelo de ecoturismo y pagos ambientales de Costa Rica, custodiar la biodiversidad genera ingresos estables a largo plazo, mientras que el extractivismo descontrolado deja pobreza y suelos degradados.",
          markScheme: [
            {
              point: "Opens with natural oral hedging and nuanced qualification (*cabe matizar que* / *cuestión compleja*).",
              keywords: ["cuestión sumamente compleja", "incompatibles"],
            },
            {
              point: "Correctly executes *no es que* + subjunctive (*rechacen*, *se opongan*).",
              keywords: ["rechacen", "opongan"],
            },
            {
              point: "Correctly executes *sino que* + indicative (*exigen*, *buscan*) linked to *consulta previa*.",
              keywords: ["exigen", "consulta previa"],
            },
            {
              point: "Supports rebuttal with concrete Hispanophone evidence (Costa Rica PES/ecotourism vs long-term cost of extractivism).",
              keywords: ["costa rica", "ecoturismo", "extractivismo"],
            },
          ],
          hints: [
            "Never start an IO rebuttal with an abrupt *No, estás equivocado* — validate the complexity first!",
            "Use Costa Rica's ecotourism / PES model to prove ecology and economy can reinforce each other.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q12",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Synthesize",
          guideRef: "globalizacion-etica-entorno-urbano",
          marks: 4,
          question:
            "[HL] Write 3–4 sophisticated Spanish sentences synthesising **how digital remote work (*el teletrabajo*) could help *la España vaciada*** — while **evaluating one potential unintended risk** using **lejos de + infinitivo** or **siempre y cuando + subjuntivo**.",
          modelAnswer:
            "El despliegue de fibra óptica y la consolidación del teletrabajo abren una oportunidad histórica para frenar el envejecimiento demográfico en comarcas de Teruel, Soria o Zamora. Sin embargo, lejos de constituir una panacea automática, la llegada de profesionales con salarios urbanos podría encarecer los alquileres y provocar una gentrificación rural. Por consiguiente, esta transformación revitalizará el interior siempre y cuando las administraciones inviertan paralelamente en sanidad pública, escuelas y vivienda asequible para la población autóctona.",
          markScheme: [
            {
              point: "Explains the opportunity of broadband and remote work for specific depopulated inland provinces.",
              keywords: ["fibra óptica", "teruel", "soria", "envejecimiento"],
            },
            {
              point: "Correctly uses *lejos de* + infinitive OR *siempre y cuando* + subjunctive.",
              keywords: ["constituir", "inviertan", "garanticen"],
            },
            {
              point: "Evaluates the unintended risk of rural gentrification / rising rents for local residents.",
              keywords: ["gentrificación rural", "alquileres", "encarecer"],
            },
            {
              point: "Proposes balanced public-service investment (healthcare, schools, affordable housing).",
              keywords: ["sanidad pública", "vivienda asequible"],
            },
          ],
          hints: [
            "Look beyond the obvious benefit of remote work: what happens to village rents if urban salaries arrive?",
            "Verify mood after *siempre y cuando* (always subjunctive!) or verb form after *lejos de* (always infinitive!).",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "derechos-humanos-igualdad-paz",
          marks: 4,
          question:
            "[HL] Explain in **Spanish** (70–100 words) why societies emerging from conflict or dictatorship — such as Colombia, Argentina, or Spain — debate **la memoria histórica** and **la justicia restaurativa**, distinguishing between **reconciliación** and **impunidad**.",
          modelAnswer:
            "Tras décadas de violencia política o dictadura, sociedades como Colombia, Argentina y España afrontan el dilema ético de cómo sanar sus heridas sin silenciar el pasado. Mediante organismos como la Comisión de la Verdad o la labor incansable de las Abuelas de Plaza de Mayo, la memoria histórica persigue dignificar y reparar a las víctimas. Cabe subrayar que la reconciliación auténtica jamás equivale a la impunidad: perdonar o reconstruir la convivencia exige primero conocer la verdad y asumir responsabilidades, de ahí que el olvido impuesto solo perpetúe el rencor intergeneracional.",
          markScheme: [
            {
              point: "References authentic Hispanophone transitional-justice institutions or movements (*Comisión de la Verdad*, *Abuelas de Plaza de Mayo*).",
              keywords: ["comisión de la verdad", "abuelas de plaza de mayo"],
            },
            {
              point: "Explains the role of truth-telling and victim reparation (*reparar*, *dignificar*).",
              keywords: ["reparar", "dignificar", "víctimas"],
            },
            {
              point: "Clearly distinguishes genuine reconciliation from impunity (*no equivale*, *asumir responsabilidades*).",
              keywords: ["convivencia", "asumir responsabilidades", "jamás equivale"],
            },
            {
              point: "Uses high-level HL cohesion (*cabe subrayar*, *de ahí que* + subjunctive *perpetúe*).",
              keywords: ["cabe subrayar", "perpetúe", "de ahí que"],
            },
          ],
          hints: [
            "Cite concrete Hispanophone examples: *Comisión de la Verdad* (Colombia) or *Abuelas de Plaza de Mayo* (Argentina).",
            "Explain why forced amnesia (*olvido impuesto*) fails to build lasting *convivencia*.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "argumentacion-etica-global-hl",
          marks: 8,
          question:
            "**HL Paper 1 Extended Synthesis (180–230 words in Spanish):**\nRedacta una **propuesta formal** dirigida al Consejo Regional de Medio Ambiente en España o América Latina para implantar una **transición justa hacia la economía circular y el uso sostenible del agua**. Debes incluir: (1) convenciones formales de *propuesta* (título, destinatario, subtítulos y registro *ustedes*), (2) un párrafo completo de contraargumento y refutación (*si bien es cierto que…, no obstante…, de ahí que + subj.*), (3) evidencia hispanohablante concreta, y (4) medidas viables y equilibradas.",
          modelAnswer:
            "**PROPUESTA: Plan integral de economía circular y gestión hídrica sostenible**\n**Dirigida a:** Ilustrísimo Consejo Regional de Medio Ambiente\n\n**1. Introducción y diagnóstico**\nAnte el avance implacable de la desertificación y el estrés hídrico que castigan ecosistemas emblemáticos como Doñana y diversas cuencas andinas, resulta urgente replantear nuestro modelo productivo. Continuar fomentando la obsolescencia programada y la sobreexplotación de acuíferos hipoteca el bienestar de las futuras generaciones.\n\n**2. Evaluación de objeciones económicas**\nSi bien es cierto que la reconversión hacia procesos limpios exige inversiones iniciales considerables para las pequeñas explotaciones agrícolas e industriales, no obstante el coste económico y social de la inacción climática resultaría infinitamente superior. No es que el tejido empresarial rechace la sostenibilidad, sino que carece de incentivos estables durante la transición; de ahí que sea imprescindible acompañar toda regulación ambiental con líneas de crédito blando y asesoramiento técnico.\n\n**3. Medidas concretas**\n- **Incentivos fiscales:** Subvencionar el riego por goteo inteligente y la reparación local de aparatos electrónicos.\n- **Trazabilidad obligatoria:** Sancionar el ecoblanqueo y premiar a cooperativas certificadas.\n\n**4. Conclusión**\nLes instamos a que aprueben este marco equilibrado, demostrando que la prosperidad regional y la custodia del planeta pueden avanzar de la mano.",
          markScheme: [
            {
              point: "Applies clear *propuesta* conventions (formal title, addressee, numbered/titled sections, bulleted actions, formal *ustedes*).",
              keywords: ["dirigida a", "diagnóstico", "instamos"],
            },
            {
              point: "Anchors diagnosis in authentic Hispanophone environmental evidence (Doñana / Andean basins, aquifer over-extraction).",
              keywords: ["doñana", "acuíferos", "estrés hídrico"],
            },
            {
              point: "Integrates circular-economy & water-scarcity C1 vocabulary (*obsolescencia programada*, *riego por goteo*, *ecoblanqueo*).",
              keywords: ["obsolescencia programada", "ecoblanqueo", "riego por goteo"],
            },
            {
              point: "Executes respectful concession with *si bien es cierto que* + indicative.",
              keywords: ["exige inversiones", "pequeñas explotaciones"],
            },
            {
              point: "Pivots smoothly with *no obstante* to weigh the cost of inaction.",
              keywords: ["inacción climática", "infinitamente superior"],
            },
            {
              point: "Uses *no es que* + subjunctive, *sino que* + indicative accurately.",
              keywords: ["rechace", "carece de incentivos"],
            },
            {
              point: "Synthesises with *de ahí que* + accurate subjunctive (*sea imprescindible*).",
              keywords: ["sea imprescindible", "crédito blando"],
            },
            {
              point: "Closes persuasively with formal *ustedes* advocacy subjunctive (*aprueben*).",
              keywords: ["aprueben", "custodia del planeta"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Does not meet minimum criteria for comprehensibility or task relevance.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic B1 suggestions lacking formal proposal structure, counter-argument, or cultural grounding.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Competent SL-level response with proposal headings and eco-vocabulary, but limited counter-argumentation and occasional subjunctive slips.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Strong HL response with formal *ustedes* register, clear sections, Hispanophone context, and a genuine concession–rebuttal arc with minor errors.",
            },
            {
              band: "7–8",
              marks: [7, 8],
              descriptor: "Exemplary Band 10–12 HL *propuesta*: authoritative institutional tone, seamlessly woven C-R-E-S counter-argument (*si bien… no obstante… de ahí que + subj.*), rich C1 lexis, and realistic, nuanced measures.",
              indicators: ["All 4 proposal conventions visible", "Flawless *de ahí que + subj.* and *no es que + subj., sino que + ind.*", "Concrete Hispanophone framing and viable financial balance"],
            },
          ],
          hints: [
            "Structure your *propuesta* visibly: Title, *Dirigida a*, numbered headings, bullet points, formal *ustedes* closing.",
            "Dedicate Section 2 entirely to conceding the economic cost (*Si bien es cierto que…*) and rebutting it (*no obstante… de ahí que sea…*).",
            "Include concrete, fair measures (subsidies, smart irrigation, traceability) rather than vague slogans.",
          ],
        },
        {
          id: "5-compartir-el-planeta-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "argumentacion-etica-global-hl",
          marks: 8,
          question:
            "**HL Paper 1 Extended Editorial (180–230 words in Spanish):**\nRedacta un **editorial** para un diario digital hispanohablante sobre el tema: *«¿Basta el consumo responsable individual para transformar la globalización injusta?»*. Incluye: (1) voz institucional de editorial (primera persona del plural *nosotros* o impersonal, sin firma personal), (2) análisis del contraste entre agencia individual y regulación estatal, (3) al menos un ejemplo hispanohablante concreto, y (4) dominio sintáctico C1 (*aunque + subj.*, *por mucho que + subj.*, *de ahí que + subj.*).",
          modelAnswer:
            "**Más allá de la cesta de la compra: hacia una globalización ética**\n\nEn los últimos años se ha popularizado la idea de que el consumidor puede corregir por sí solo los desequilibrios del comercio mundial. Sin embargo, conviene cuestionar si esa responsabilidad individual basta frente a cadenas de suministro diseñadas para abaratar costes a expensas del entorno y los derechos laborales.\n\nPor mucho que millones de ciudadanos opten por el comercio justo o eviten la moda rápida, el vertedero textil del desierto de Atacama demuestra que los gestos aislados resultan insuficientes ante la sobreproducción global. Cabe recordar, además, que las familias con rentas modestas a menudo carecen de margen económico para elegir productos certificados; aunque deseen actuar éticamente, el mercado las empuja hacia opciones efímeras.\n\nNo obstante, renunciar a la conciencia ciudadana tampoco constituye una salida: la presión social impulsa el cambio cultural y desenmascara el ecoblanqueo corporativo. De ahí que resulte imperativo combinar la educación del consumidor con tratados vinculantes que garanticen la trazabilidad y salarios dignos desde el origen. Solo mediante una alianza entre ciudadanía exigente y leyes valientes lograremos compartir el planeta con auténtica equidad.",
          markScheme: [
            {
              point: "Uses authentic *editorial* voice (authoritative headline, impersonal/institutional *nosotros*, zero personal byline).",
              keywords: ["cesta de la compra", "conviene cuestionar", "lograremos"],
            },
            {
              point: "Uses *por mucho que* + accurate present subjunctive (*opten*, *elijan*).",
              keywords: ["opten", "eviten"],
            },
            {
              point: "Anchors argument in a specific Hispanophone example (Atacama textile dump / Colombian coffee / etc.).",
              keywords: ["desierto de atacama", "vertedero textil"],
            },
            {
              point: "Evaluates socioeconomic equity (low-income families unable to afford certified goods).",
              keywords: ["rentas modestas", "margen económico"],
            },
            {
              point: "Uses *aunque* + accurate subjunctive (*deseen*, *quieran*).",
              keywords: ["deseen"],
            },
            {
              point: "Pivots with *no obstante* to preserve the role of civic pressure and exposing *ecoblanqueo*.",
              keywords: ["presión social", "ecoblanqueo"],
            },
            {
              point: "Synthesises with *de ahí que* + accurate subjunctive (*resulte imperativo*).",
              keywords: ["resulte imperativo", "tratados vinculantes"],
            },
            {
              point: "Closes with a cohesive thesis uniting civic agency, traceability, and living wages (*trazabilidad*, *salarios dignos*, *equidad*).",
              keywords: ["trazabilidad", "salarios dignos", "equidad"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Off-topic or incomprehensible.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Personal diary/blog tone (*yo pienso*) inappropriate for an editorial; simplistic binary opinion.",
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Reasonable opinion piece addressing shopping ethics with mostly accurate Spanish, but lacking editorial authority or C1 mood precision.",
            },
            {
              band: "5–6",
              marks: [5, 6],
              descriptor: "Well-argued editorial weighing individual vs systemic action, with authentic vocabulary and mostly accurate subjunctive.",
            },
            {
              band: "7–8",
              marks: [7, 8],
              descriptor: "Outstanding Band 10–12 HL editorial: institutional voice, incisive socioeconomic nuance, Atacama cultural anchoring, and flawless control of *por mucho que*, *aunque*, and *de ahí que* + subjunctive.",
            },
          ],
          hints: [
            "Remember the key convention of an **editorial**: it represents the newspaper's collective voice (*nosotros* / impersonal *conviene*) — NEVER sign it with a personal name!",
            "Avoid saying individual shopping is either 100% useless or 100% sufficient — evaluate the socioeconomic limit AND the civic value.",
            "Verify every subjunctive after *por mucho que*, *aunque* (hypothetical), and *de ahí que*.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET: 8 Stretch Questions (ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "5-compartir-el-planeta-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "argumentacion-etica-global-hl",
      question:
        "[HL] Conjugate **haber** + past participle of **aprobar** (present perfect subjunctive, two words, lowercase) after *de ahí que*:\n*La presión vecinal en Madrid y Barcelona contra la gentrificación ha sido histórica; de ahí que varios ayuntamientos ________ ________ (aprobar) topes a los pisos turísticos.*",
      answer: { type: "text", accept: ["hayan aprobado"], display: "hayan aprobado" },
      traps: [
        {
          spec: { type: "text", accept: ["han aprobado"] },
          feedback: "Even though the caps have already been approved in reality, *de ahí que* ALWAYS demands the subjunctive → **hayan aprobado**.",
        },
      ],
      solution: [
        "*De ahí que* triggers subjunctive even for real completed outcomes.",
        "Plural *varios ayuntamientos* + present perfect subjunctive of *aprobar* → **hayan aprobado**.",
      ],
      hints: [
        "Does *de ahí que* ever take the indicative when describing a real past result? No!",
        "Combine plural present subjunctive of *haber* (*hayan*) with *aprobado*.",
      ],
    },
    {
      id: "5-compartir-el-planeta-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "medio-ambiente-sostenibilidad",
      question:
        "[HL] Complete this contrary-to-fact **past** concession with the **pluperfect subjunctive** of **invertir** (two words, lowercase, *-ra* or *-se* form):\n*Aunque el país ________ ________ (invertir) el doble hace veinte años, hoy todavía necesitaría adaptar sus cultivos al calentamiento global.*",
      answer: { type: "text", accept: ["hubiera invertido", "hubiese invertido"], display: "hubiera invertido" },
      traps: [
        {
          spec: { type: "text", accept: ["había invertido"] },
          feedback: "*Había invertido* is indicative pluperfect; a contrary-to-fact past hypothesis (“even if the country had invested…”) requires pluperfect **subjunctive** → **hubiera invertido**.",
        },
      ],
      solution: [
        "Contrary-to-fact past concession (*hace veinte años* + conditional *necesitaría*) requires pluperfect subjunctive.",
        "3rd-person singular imperfect subjunctive of *haber* (*hubiera* / *hubiese*) + *invertido* → **hubiera invertido**.",
      ],
      hints: [
        "Translate “even if the country *had invested* twenty years ago…”.",
        "Use *hubiera* (or *hubiese*) + past participle of *invertir*.",
      ],
    },
    {
      id: "5-compartir-el-planeta-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "derechos-humanos-igualdad-paz",
      question:
        "[HL] Fill in the blank with the correct **preposition + compound relative pronoun** (three words, lowercase) matching the feminine plural noun *las comunidades* after the verb *depender de*:\n*La ley ignoró a las comunidades indígenas, ________ ________ ________ depende la preservación del bosque nuboso.*",
      answer: { type: "text", accept: ["de las cuales", "de las que", "de quienes"], display: "de las cuales" },
      solution: [
        "The verb *depender* governs the preposition *de*.",
        "Agreeing with feminine plural *las comunidades indígenas*: **de las cuales** (also accepting *de las que* or *de quienes*).",
      ],
      hints: [
        "Check the preposition required by *depender* (*depender de*).",
        "Match feminine plural *las comunidades* using a formal relative pronoun (*el cual / la cual / los cuales / las cuales*).",
      ],
    },
    {
      id: "5-compartir-el-planeta-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "argumentacion-etica-global-hl",
      question:
        "[HL] Conjugate **ser** in the blank (one word, lowercase):\n*Defendemos la economía circular no porque ________ (ser) una moda pasajera, sino porque fomenta un empleo local duradero.*",
      answer: { type: "text", accept: ["sea"], display: "sea" },
      traps: [
        {
          spec: { type: "text", accept: ["es"] },
          feedback: "A negated cause (*no porque…*) always takes the **subjunctive** → **sea** (whereas the affirmed cause *sino porque fomenta* takes indicative).",
        },
      ],
      solution: [
        "Pattern: *no porque + SUBJUNTIVO, sino porque + INDICATIVO*.",
        "3rd-person singular present subjunctive of *ser* → **sea**.",
      ],
      hints: [
        "Compare *no porque* with *no es que*: both negate a false cause.",
        "Conjugate *ser* in the present subjunctive.",
      ],
    },
    {
      id: "5-compartir-el-planeta-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "medio-ambiente-sostenibilidad",
      marks: 4,
      question:
        "[HL] Explain in English the **subtle pragmatic difference** between these two C1 sentences spoken during a drought in Andalusia, both referring to a fact the speaker ALREADY knows is true:\n1. *Aunque la desaladora **consume** mucha energía, abastece a miles de hogares.*\n2. *Aunque la desaladora **consuma** mucha energía, abastece a miles de hogares.*",
      modelAnswer:
        "In sentence (1), the indicative (*consume*) presents the high energy use neutrally as new or salient factual information alongside the benefit (“even though the desalination plant uses a lot of energy…”). In sentence (2), using the subjunctive (*consuma*) for an already-known fact performs a **rhetorical dismissal**: the speaker signals “yes, I grant that it uses a lot of energy, **but that objection is irrelevant / beside the point** compared with supplying water to thousands of homes.” This pragmatic shift allows C1 speakers to downplay an opponent's premise politely yet decisively.",
      markScheme: [
        {
          point: "Explains sentence (1) indicative as presenting the known fact neutrally/informatively.",
          keywords: ["indicative", "neutrally", "factual"],
        },
        {
          point: "Identifies sentence (2) subjunctive as a rhetorical dismissal / downplaying of a known objection.",
          keywords: ["dismissal", "downplay", "irrelevant", "beside the point"],
        },
        {
          point: "Notes that BOTH sentences can refer to a reality already shared by speaker and listener.",
          keywords: ["shared", "already-known", "grant"],
        },
        {
          point: "Explains the persuasive effect in debate (neutralising an opponent's argument).",
          keywords: ["opponent", "persuasive", "premise", "objection"],
        },
      ],
      hints: [
        "Do NOT say sentence 2 is purely about the future — the prompt tells you the speaker ALREADY knows it's true!",
        "Think about the C1 *Think Deeper* point in Section 1: why use subjunctive for a known fact?",
      ],
    },
    {
      id: "5-compartir-el-planeta-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "globalizacion-etica-entorno-urbano",
      marks: 6,
      question:
        "**Cross-Cultural Evaluation (110–150 words in Spanish):**\nEvalúa en un párrafo argumentativo bien cohesionado si el modelo de **urbanismo social** de ciudades como Medellín o la **Ciclovía** de Bogotá pueden servir de inspiración para otras metrópolis hispanohablantes, reconociendo al menos una limitación estructural.",
      modelAnswer:
        "La transformación urbana de Medellín y las políticas de movilidad activa de Bogotá ofrecen lecciones valiosas para las grandes metrópolis latinoamericanas y españolas. Al conectar barrios históricamente marginados mediante el Metrocable y construir parques biblioteca de alta calidad arquitectónica, la capital antioqueña demostró que la infraestructura pública digna reduce la exclusión territorial y fortalece el tejido comunitario. De modo análogo, la recuperación semanal de avenidas para ciclistas y peatones fomenta la salud colectiva y atenúa la contaminación atmosférica.\n\nNo obstante, conviene evitar soluciones milagrosas: aunque estas intervenciones mejoren notablemente la cohesión barrial, no resuelven por sí solas la precariedad laboral ni la especulación inmobiliaria que impulsa la gentrificación. En consecuencia, su éxito duradero exige combinar el diseño inclusivo con vivienda protegida y empleo digno.",
      markScheme: [
        {
          point: "Details Medellín's *Metrocable* and *parques biblioteca* reducing territorial exclusion.",
          keywords: ["metrocable", "parques biblioteca", "exclusión"],
        },
        {
          point: "Explains Bogotá's active-mobility benefits (health, lower air pollution, reclaiming streets).",
          keywords: ["contaminación atmosférica", "ciclistas", "movilidad activa"],
        },
        {
          point: "Pivots critically (*no obstante*, *conviene evitar*) to avoid naive idealisation.",
          keywords: ["no obstante", "soluciones milagrosas"],
        },
        {
          point: "Uses *aunque* + subjunctive (*mejoren*) accurately to qualify the benefit.",
          keywords: ["mejoren"],
        },
        {
          point: "Identifies structural limits (labour precarity, real-estate speculation / gentrification).",
          keywords: ["precariedad laboral", "gentrificación", "especulación"],
        },
        {
          point: "Synthesises a balanced conclusion pairing urban design with social housing and decent jobs.",
          keywords: ["vivienda protegida", "empleo digno", "en consecuencia"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant response.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Descriptive summary of cities with no evaluation or structural limitation.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Balanced points on urban transport/libraries and one limitation, with sound B2 Spanish.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Nuanced Band 10–12 evaluation seamlessly integrating concrete Colombian urban cases, accurate subjunctive qualification, and structural socioeconomic critique.",
        },
      ],
      hints: [
        "Highlight what Medellín (*Metrocable*, *parques biblioteca*) and Bogotá (reclaiming avenues from cars) actually achieved.",
        "Then pivot (*No obstante*) to examine what physical infrastructure alone cannot fix (*precariedad laboral*, *gentrificación*).",
      ],
    },
    {
      id: "5-compartir-el-planeta-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "To what extent",
      guideRef: "argumentacion-etica-global-hl",
      marks: 8,
      question:
        "**[HL] Extended IB Essay Response (190–240 words in Spanish):**\nEscribe un **discurso** para una cumbre juvenil iberoamericana respondiendo a la pregunta: *«¿Hasta qué punto la crisis climática es también una crisis de derechos humanos?»*. Incluye: (1) vocativo y recursos oratorios propios de un *discurso* (preguntas retóricas, anáfora, *ustedes/nosotros*), (2) conexión explícita entre degradación ambiental y pueblos originarios / comunidades vulnerables, (3) arquitectura de contraargumento HL (*si bien es cierto que…, no obstante…, de ahí que + subj.*), y (4) cierre inspirador pero realista.",
      modelAnswer:
        "Estimados delegados, representantes comunitarios y jóvenes de toda Iberoamérica:\n\n¿Podemos seguir hablando del calentamiento global como si fuera únicamente una estadística de grados y toneladas de carbono? Cuando la tala ilegal arrasa la Amazonia o la sequía prolongada agota los acuíferos en Andalucía y el norte de México, no solo perdemos paisajes: se vulnera el derecho al agua, a la salud y a un territorio digno. Quienes menos han contribuido a las emisiones históricas —especialmente los pueblos originarios y los defensores ambientales— soportan hoy las peores represalias y desplazamientos.\n\nSi bien es cierto que las economías emergentes reclaman legítimamente industrialización y empleo para reducir la pobreza, no obstante ningún modelo extractivo que destruya los medios de vida locales genera prosperidad duradera. No es que debamos elegir entre progreso y ecología, sino que necesitamos una transición justa que respete la consulta previa y reparta equitativamente los beneficios de las energías renovables; de ahí que resulte inaplazable vincular cada acuerdo climático a garantías jurídicas exigibles.\n\nCompartir el planeta no es un lema decorativo: es nuestra obligación moral. Exijamos transparencia, defendamos a quienes custodian nuestros bosques y construyamos una paz ambiental duradera. Muchas gracias.",
      markScheme: [
        {
          point: "Opens with authentic *discurso* vocative and engaging rhetorical question.",
          keywords: ["estimados delegados", "¿podemos seguir"],
        },
        {
          point: "Connects ecological damage directly to rights violations (*vulnera el derecho al agua*, Amazonia / Andalusia / Mexico).",
          keywords: ["vulnera el derecho", "acuíferos", "tala ilegal"],
        },
        {
          point: "Highlights climate-justice asymmetry affecting *pueblos originarios* and *defensores ambientales*.",
          keywords: ["defensores ambientales", "represalias", "desplazamientos"],
        },
        {
          point: "Concedes the developmental need of emerging economies using *si bien es cierto que* + indicative.",
          keywords: ["economías emergentes", "reducir la pobreza"],
        },
        {
          point: "Rebuts effectively with *no obstante* and *no es que + subj., sino que + ind.*",
          keywords: ["extractivo", "debamos elegir", "transición justa"],
        },
        {
          point: "Integrates legal-rights anchoring (*consulta previa*, *garantías jurídicas*).",
          keywords: ["consulta previa", "garantías jurídicas"],
        },
        {
          point: "Executes *de ahí que* + accurate subjunctive (*resulte inaplazable*).",
          keywords: ["resulte inaplazable"],
        },
        {
          point: "Closes with inclusive *nosotros* imperative/oratorical cadence and *Muchas gracias*.",
          keywords: ["exijamos", "muchas gracias"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Does not meet minimum criteria.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Lacks speech conventions and treats climate and human rights separately at a superficial B1 level.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear speech addressing both themes with sound vocabulary, though counter-argumentation and subjunctive accuracy remain uneven.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Persuasive speech with good oratorical flow, strong Hispanophone links, and a clear concession–rebuttal sequence.",
        },
        {
          band: "7–8",
          marks: [7, 8],
          descriptor: "Band 10–12 HL *discurso*: commanding register, seamless synthesis of climate justice & indigenous rights, impeccable C1 counter-argument syntax (*si bien… no obstante… no es que + subj., sino que + ind.… de ahí que + subj.*), and compelling oratorical finish.",
        },
      ],
      hints: [
        "Sound like a real speaker on a podium: open with *Estimados delegados…*, ask a rhetorical question, and close with inclusive imperatives (*Exijamos…*) + *Muchas gracias*.",
        "Prove *why* climate change is a human-rights crisis: who emits least yet pays the highest human cost?",
        "Concede legitimate economic development needs before reframing the issue around *transición justa* and *consulta previa*.",
      ],
    },
    {
      id: "5-compartir-el-planeta-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Examine",
      guideRef: "derechos-humanos-igualdad-paz",
      marks: 6,
      question:
        "**[HL] Proofreading & Band 10–12 Diagnostic:**\nThe following HL student paragraph contains **six distinct IB errors** (false friends, subjunctive mood slips, preposition error, subject–verb agreement, and connector error):\n*«Actualmente, muchas personas piensa que la conservación funciona, a pesar de existen graves riesgos. La gente defienden los preservativos del Amazonas, pero no es que faltan leyes, pero el presupuesto es bajo; de ahí que es urgente actuar.»*\n\nRewrite the entire paragraph cleanly in **flawless C1 Spanish** correcting all six errors, and list briefly in English the six fixes you made.",
      modelAnswer:
        "**Corrected C1 paragraph:**\n*En realidad, muchas personas piensan que la conservación funciona, a pesar de que existen graves riesgos (o: pese a los graves riesgos). La gente defiende la protección de la Amazonia; no es que falten leyes, sino que el presupuesto resulta insuficiente, de ahí que sea urgente actuar.*\n\n**Six corrections:**\n1. *Actualmente* (“currently”) → **En realidad** (if intending “actually”; or clarify context).\n2. *muchas personas piensa* → **muchas personas piensan** (plural agreement).\n3. *a pesar de existen* → **a pesar de que existen** (add *que* before a conjugated verb, or use *pese a* + noun).\n4. *La gente defienden* → **La gente defiende** (*la gente* is grammatically singular) + false friend *preservativos* (“condoms”) → **protección / conservación** (and *la Amazonia*).\n5. *no es que faltan…, pero…* → **no es que falten…, sino que…** (subjunctive after *no es que* + *sino que* instead of *pero*).\n6. *de ahí que es urgente* → **de ahí que sea urgente** (*de ahí que* always requires subjunctive).",
      markScheme: [
        {
          point: "Fixes *muchas personas piensa* → *piensan* AND *la gente defienden* → *defiende* (agreement).",
          keywords: ["piensan", "defiende"],
        },
        {
          point: "Fixes *a pesar de existen* → *a pesar de que existen* (or *pese a los graves riesgos*).",
          keywords: ["a pesar de que existen", "pese a los"],
        },
        {
          point: "Eliminates the false friend *preservativos* (replaces with *protección* / *conservación*) and addresses *actualmente* → *en realidad*.",
          keywords: ["en realidad", "protección", "condoms"],
        },
        {
          point: "Corrects *no es que faltan* → *no es que falten* (present subjunctive).",
          keywords: ["falten"],
        },
        {
          point: "Replaces *pero* with *sino que* after the negated clause.",
          keywords: ["sino que"],
        },
        {
          point: "Corrects *de ahí que es* → *de ahí que sea* (mandatory subjunctive).",
          keywords: ["de ahí que sea"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Fails to identify or correct the embedded errors.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Fixes only 1–2 surface errors while missing key subjunctive and false-friend slips.",
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Corrects 4–5 errors accurately with clear explanations.",
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Corrects all 6 errors into crisp C1 Spanish and explains each grammatical/lexical rule precisely.",
        },
      ],
      hints: [
        "Hunt systematically: (1) false friends (*actualmente*, *preservativos*), (2) singular/plural agreement (*personas*, *la gente*), (3) *a pesar de* + verb.",
        "Check the three C1 grammar rules at the end: *no es que + subj.*, *sino que*, and *de ahí que + subj.*.",
      ],
    },
  ],
};
