import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 (SL): Environment, Sustainability & Concessive Grammar
  // ===========================================================================
  {
    id: "5-compartir-el-planeta-m1",
    title: "MCQ Paper 1 — Environment, Climate & Concessive Grammar",
    level: "SL",
    questions: [
      {
        id: "5-compartir-el-planeta-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "Elige la forma verbal correcta para expresar un **hecho real y comprobado**:\n*Aunque las temperaturas en Andalucía ________ cada verano, el consumo de agua apenas disminuye.*",
        options: [
          "suban sin control alguno",
          "hubieran subido bastante",
          "suben de forma constante",
          "subieran progresivamente",
        ],
        answerIndex: 2,
        explanation:
          "Because rising summer temperatures in Andalusia are presented as an established reality (“even though temperatures rise steadily”), *aunque* takes the **present indicative** (*suben*). The subjunctive forms (*suban*, *subieran*, *hubieran subido*) would frame the rise as hypothetical, uncertain, or counterfactual.",
        hints: [
          "Check whether the speaker treats the temperature rise as a verified reality or a hypothetical future.",
          "Known facts after *aunque* (“even though”) require the indicative mood.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "Completa esta previsión sobre el Parque Nacional de Doñana:\n*Aunque ________ abundantemente el próximo mes, los acuíferos seguirán por debajo de su nivel óptimo.*",
        options: [
          "llueva",
          "llueve",
          "llovió",
          "llovía",
        ],
        answerIndex: 0,
        explanation:
          "The time marker *el próximo mes* and the future verb *seguirán* show that rainfall is an uncertain future event (“even if it rains heavily next month”). Therefore *aunque* requires the **present subjunctive** (*llueva*), not an indicative form like *llueve* or *llovió*.",
        hints: [
          "Look at the time clue *el próximo mes* and the future main verb *seguirán*.",
          "When *aunque* means “even if” about a future possibility, conjugate *llover* (o → ue) in the present subjunctive.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "En un artículo sobre la Amazonia se lee: *«Este bioma funciona como un gigantesco sumidero de carbono»*. ¿Qué significa **sumidero de carbono**?",
        options: [
          "Una fábrica que libera grandes cantidades de humo industrial",
          "Un ecosistema que absorbe más CO₂ atmosférico del que emite",
          "Un impuesto ecológico aplicado a los combustibles fósiles",
          "Una reserva subterránea de petróleo situada bajo la selva",
        ],
        answerIndex: 1,
        explanation:
          "A **sumidero de carbono** (“carbon sink”) is a natural or artificial reservoir — such as the Amazon rainforest or oceans — that absorbs more atmospheric carbon dioxide than it releases. The other choices describe industrial emitters, taxes, or fossil deposits.",
        hints: [
          "Think of the root *sumir* / *sumidero* (a drain or sink that takes something in).",
          "Why is the Amazon considered vital to stabilising global CO₂ levels?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "¿Qué conector completa correctamente esta frase nominal (sin verbo conjugado después)?\n*________ la grave sequía en Murcia, se mantienen varios campos de golf abiertos.*",
        options: [
          "Aunque",
          "A pesar de que",
          "Pese a que",
          "Pese a",
        ],
        answerIndex: 3,
        explanation:
          "**Pese a** (like *a pesar de*, without *que*) is followed directly by a **noun phrase** (*la grave sequía*) or an infinitive. Connectors ending in *que* (*a pesar de que*, *pese a que*) and *aunque* require a conjugated verb.",
        hints: [
          "Inspect the words immediately after the blank: is *la grave sequía* a conjugated clause or a noun phrase?",
          "Drop *que* whenever a concessive preposition directly precedes a noun or infinitive.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "¿Qué fenómeno critica directamente **la economía circular** al promover la reparación y la durabilidad de los aparatos electrónicos?",
        options: [
          "La obsolescencia programada de los productos de consumo",
          "La reforestación incentivada mediante pagos estatales",
          "La generación de electricidad con parques eólicos marinos",
          "La agricultura regenerativa en zonas semiáridas rurales",
        ],
        answerIndex: 0,
        explanation:
          "**La obsolescencia programada** (planned obsolescence) intentionally shortens product lifespans to force repeat purchases under a linear “use-and-discard” model. Circular economy design opposes it through repairability, reuse, and recycling.",
        hints: [
          "Which option represents a wasteful practice of the linear *usar y tirar* economy?",
          "Think about why smartphones and appliances often break just after their warranty expires.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "¿Qué par de actividades humanas figura entre las principales causas directas de la deforestación amazónica?",
        options: [
          "El teletrabajo rural y la educación ambiental comunitaria",
          "La energía geotérmica y el transporte ferroviario eléctrico",
          "La tala ilegal de árboles y la ganadería extensiva",
          "La desalinización costera y el reciclaje doméstico de vidrio",
        ],
        answerIndex: 2,
        explanation:
          "**La tala ilegal** (illegal logging) and **la ganadería extensiva** (extensive cattle ranching) are major direct drivers of forest clearance in the Amazon basin, unlike renewable energy or domestic recycling.",
        hints: [
          "Focus on land-clearing economic activities in tropical South America.",
          "Remember that *tala* means tree-felling and *ganadería* means livestock farming.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "Un estudiante quiere escribir en su redacción: *«Debemos apoyar la conservación de los bosques»*. ¿Qué error de **falso amigo** debe evitar?",
        options: [
          "Escribir «los bosques» en lugar de «la selva tropical»",
          "Escribir «los preservativos» en lugar de «la conservación»",
          "Escribir «debemos apoyar» en lugar de «tenemos que ayudar»",
          "Escribir «medio ambiente» en lugar de «entorno natural»",
        ],
        answerIndex: 1,
        explanation:
          "**Preservativos** in Spanish means condoms — a notorious false friend for English “preservation” (**conservación**) or food “preservatives” (**conservantes**). The other three alternatives are completely acceptable Spanish expressions.",
        hints: [
          "Look for an English word whose Spanish cognate has a completely different, embarrassing meaning.",
          "Think carefully about *preservation* vs *preservativo*.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "Completa esta frase con la conjugación correcta (atención al cambio ortográfico):\n*Por mucho que los ciudadanos ________ (reducir) el plástico doméstico, hace falta regular a las grandes corporaciones.*",
        options: [
          "reducen",
          "reducan",
          "reduzcon",
          "reduzcan",
        ],
        answerIndex: 3,
        explanation:
          "**Por mucho que** (“no matter how much”) triggers the **present subjunctive** here. Because *reducir* has the irregular *yo* form *reduzco*, the subjunctive stem is *reduzc-* across all persons → **reduzcan** (*ellos*). *Reducen* is indicative, while *reducan* and *reduzcon* are non-existent forms.",
        hints: [
          "Check the mood after *por mucho que* expressing a concession.",
          "Start from the *yo* present indicative of *reducir* (*reduzco*), drop *-o*, and add *-an*.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "¿Qué país hispanohablante es citado internacionalmente por haber revertido la deforestación mediante el *Pago por Servicios Ambientales* y generar casi toda su electricidad con energías renovables?",
        options: [
          "Costa Rica",
          "Paraguay",
          "Uruguay",
          "Panamá",
        ],
        answerIndex: 0,
        explanation:
          "**Costa Rica** introduced its pioneering *Pago por Servicios Ambientales* (PES) in 1996, doubling forest cover over three decades while generating roughly 98% of its electricity from renewable hydroelectric, geothermal, wind, and solar sources.",
        hints: [
          "This Central American country is renowned for ecotourism and its 1996 forest-conservation payment law.",
          "Its name literally translates as “Rich Coast”.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "Lee el titular: *«El estrés hídrico amenaza el 75 % del suelo español»*. ¿A qué problema se refiere **estrés hídrico**?",
        options: [
          "Al aumento del ruido urbano en las capitales mediterráneas",
          "Al exceso de lluvias torrenciales en las zonas montañosas",
          "A la situación en que la demanda de agua supera la disponibilidad",
          "Al encarecimiento del transporte marítimo entre puertos ibéricos",
        ],
        answerIndex: 2,
        explanation:
          "**Estrés hídrico** (“water stress”) occurs when water demand exceeds the available renewable water supply over a given period — a chronic threat in southern and eastern Spain (*Murcia, Almería, Andalucía*).",
        hints: [
          "Look at the root *hídrico* (related to *agua*, water).",
          "Distinguish shortage/over-demand from flooding.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "¿Cuál de las siguientes oraciones emplea **a pesar de** de forma gramaticalmente correcta?",
        options: [
          "A pesar de existen leyes verdes, las emisiones no bajan.",
          "A pesar de aprobar leyes verdes, las emisiones no bajan.",
          "A pesar de que la crisis hídrica, no se limita el riego.",
          "A pesar de que reciclar mucho, producimos residuos.",
        ],
        answerIndex: 1,
        explanation:
          "**A pesar de + infinitivo** (*a pesar de aprobar*) is 100% grammatical! Adding a conjugated verb directly after *a pesar de* without *que* is wrong, and adding *que* before a noun (*la crisis*) or infinitive (*reciclar*) is equally incorrect.",
        hints: [
          "Remember: *a pesar de* (no *que*) takes a noun or an infinitive.",
          "*A pesar de que* (with *que*) MUST be followed by a conjugated verb.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "Compara estas dos frases sobre la energía solar:\n1. *Aunque la instalación **cuesta** bastante al principio, ahorra dinero después.*\n2. *Aunque la instalación **cueste** bastante al principio, merece la pena invertir.*\n¿Qué matiz aporta el subjuntivo **cueste** en la frase 2?",
        options: [
          "Indica que la instalación solar ya ocurrió en un pasado remoto",
          "Confirma que el hablante desconoce por completo qué es un panel solar",
          "Convierte la frase en una orden directa dirigida a una empresa eléctrica",
          "Presenta el coste como hipotético o lo minimiza como irrelevante ante la decisión",
        ],
        answerIndex: 3,
        explanation:
          "In sentence 2, *aunque + subjuntivo* (**cueste**) frames the high initial cost either as a hypothetical possibility (“even if it costs a lot”) or rhetorically dismisses it as irrelevant to the decision to invest — a classic B2–C1 nuance.",
        hints: [
          "Both sentences are in the present/general timeframe, so the difference is NOT past tense.",
          "Think about how *aunque + subjuntivo* downplays an objection (“even if it does cost a lot, it's still worth it”).",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "¿Qué expresión eleva el registro B1 *«tirar mucha basura»* a un nivel IB B2–C1 en un informe medioambiental?",
        options: [
          "Poner cosas viejas fuera de casa cada semana",
          "Comprar muchos objetos pequeños en las tiendas",
          "Generar un volumen insostenible de residuos sólidos",
          "Dejar bolsas de plástico cerca de los parques locales",
        ],
        answerIndex: 2,
        explanation:
          "**Generar un volumen insostenible de residuos sólidos** uses formal, precise academic lexis (*generar*, *insostenible*, *residuos sólidos*) suited to an IB Paper 1 *informe* or *propuesta*, whereas the other options stay at conversational B1 level.",
        hints: [
          "Look for formal academic verbs and the precise Spanish noun for “waste” (*residuos*).",
          "Which phrase sounds like an official environmental report rather than casual speech?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "Completa la oración de un discurso ecológico:\n*Es imprescindible que todos los países ________ (cumplir) sus compromisos climáticos antes de alcanzar un punto de no retorno.*",
        options: [
          "cumplan",
          "cumplen",
          "cumplieron",
          "cumplirán",
        ],
        answerIndex: 0,
        explanation:
          "The impersonal value judgement **es imprescindible que** triggers the **present subjunctive** in the subordinate clause: *cumplir* (*ellos*) → **cumplan**. Indicative tenses (*cumplen*, *cumplieron*, *cumplirán*) are ungrammatical here.",
        hints: [
          "Spot the impersonal WEIRDO trigger *es imprescindible que*.",
          "Take the stem of *cumplir* (*cumpl-*) and apply the opposite *-ir* subjunctive ending for *ellos* (*-an*).",
        ],
      },
      {
        id: "5-compartir-el-planeta-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "medio-ambiente-sostenibilidad",
        question:
          "En un debate sobre la transición energética en España, ¿cuál es un dilema realista que demuestra pensamiento crítico IB (Band 10–12)?",
        options: [
          "Afirmar que las energías renovables nunca producen electricidad durante el día",
          "Sopesar la necesidad de parques solares frente a su impacto en tierras agrícolas rurales",
          "Defender que reciclar vidrio en casa elimina por sí solo el calentamiento global",
          "Sostener que España no dispone de suficiente radiación solar para instalar paneles",
        ],
        answerIndex: 1,
        explanation:
          "Weighing clean-energy expansion (*megaparques solares*) against land-use conflict in rural farming communities demonstrates genuine, nuanced IB critical thinking rather than factually false or simplistic claims.",
        hints: [
          "Band 10–12 arguments examine real trade-offs instead of exaggerated or false statements.",
          "Think about what rural communities in inland Spain sometimes debate regarding giant solar installations.",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 (SL): Human Rights, Fair Trade & Urban–Rural Dynamics
  // ===========================================================================
  {
    id: "5-compartir-el-planeta-m2",
    title: "MCQ Paper 2 — Human Rights, Fair Trade & Urban–Rural Dynamics",
    level: "SL",
    questions: [
      {
        id: "5-compartir-el-planeta-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "derechos-humanos-igualdad-paz",
        question:
          "En América Latina, ¿qué garantiza el derecho legal a la **consulta previa, libre e informada**?",
        options: [
          "Que los turistas puedan visitar reservas naturales sin pagar entrada",
          "Que los pueblos originarios sean consultados antes de proyectos en sus tierras",
          "Que las empresas mineras obtengan permisos automáticos en menos de un mes",
          "Que los estudiantes universitarios elijan libremente sus asignaturas",
        ],
        answerIndex: 1,
        explanation:
          "Under ILO Convention 169, **la consulta previa, libre e informada** legally requires states to consult indigenous peoples (*pueblos originarios*) before authorising extractive or infrastructure projects affecting their ancestral territories.",
        hints: [
          "Connect *consulta previa* to indigenous land rights (*derechos territoriales*).",
          "Who must be consulted *before* mining or logging starts?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "derechos-humanos-igualdad-paz",
        question:
          "Completa esta reivindicación con la conjugación correcta (cuidado con el cambio ortográfico):\n*Las organizaciones civiles exigen que el Estado ________ (garantizar) la seguridad de los defensores ambientales.*",
        options: [
          "garantiza",
          "garantize",
          "garantizó",
          "garantice",
        ],
        answerIndex: 3,
        explanation:
          "*Exigir que* triggers the **present subjunctive**. For verbs ending in **-zar**, the *z* changes to **c** before *e* to maintain spelling conventions → **garantice** (never *garantize*!).",
        hints: [
          "*Exigir que* is a verb of demand (WEIRDO), so you need the present subjunctive.",
          "Remember the Spanish spelling rule for *-zar* verbs before *-e*: *z → c*.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "derechos-humanos-igualdad-paz",
        question:
          "¿Qué verbo resulta más idiomático y preciso en registro formal español para traducir *“to violate human rights”*?",
        options: [
          "vulnerar los derechos humanos",
          "romper los derechos humanos",
          "perder los derechos humanos",
          "equivocar los derechos humanos",
        ],
        answerIndex: 0,
        explanation:
          "**Vulnerar** (or *conculcar*) is the standard formal collocation in Spanish human-rights discourse (*vulnerar los derechos fundamentales*), whereas *romper* or *perder* changes the meaning or sounds like a literal English calque.",
        hints: [
          "Think of the formal verb derived from *vulnerable* used in legal and journalistic Spanish.",
          "Avoid literal translations like *romper* (“to break physically”).",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "derechos-humanos-igualdad-paz",
        question:
          "¿Cuál es el propósito principal de la **justicia restaurativa** en procesos de paz como el de Colombia?",
        options: [
          "Eliminar todos los tribunales y olvidar los acontecimientos del pasado",
          "Centrarse únicamente en imponer las penas de prisión más largas posibles",
          "Priorizar la verdad, la reparación a las víctimas y la reconciliación social",
          "Sustituir las leyes nacionales por acuerdos comerciales internacionales",
        ],
        answerIndex: 2,
        explanation:
          "**La justicia restaurativa** (restorative justice) emphasises truth-telling, symbolic and material **reparación a las víctimas**, accountability, and long-term **reconciliación** rather than purely punitive imprisonment or amnesia.",
        hints: [
          "Think of the word *restaurar* (to restore/repair relationships and dignity).",
          "What did Colombia's *Comisión de la Verdad* seek alongside accountability?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "derechos-humanos-igualdad-paz",
        question:
          "Completa esta frase con antecedente negado:\n*No hay ningún interés económico que ________ (justificar) la censura de la prensa independiente.*",
        options: [
          "justifica",
          "justificará",
          "justificaba",
          "justifique",
        ],
        answerIndex: 3,
        explanation:
          "A relative clause modifying a **negated antecedent** (*No hay ningún interés económico que…*) requires the **present subjunctive**. Because *justificar* ends in *-car*, the *c* changes to **qu** before *-e* → **justifique**.",
        hints: [
          "Spot the negative antecedent *No hay ningún… que* — does such an economic interest exist according to the writer?",
          "Watch the orthographic rule for *-car* verbs in the present subjunctive: *c → qu*.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "globalizacion-etica-entorno-urbano",
        question:
          "¿Qué práctica empresarial se denomina **ecoblanqueo** (o *lavado verde*)?",
        options: [
          "Presentar una imagen falsamente ecológica sin cambiar prácticas dañinas",
          "Lavar prendas de algodón orgánico con agua de lluvia reciclada",
          "Invertir todos los beneficios anuales en reforestación comunitaria",
          "Certificar cooperativas cafetaleras bajo normas de comercio justo",
        ],
        answerIndex: 0,
        explanation:
          "**El ecoblanqueo** (Spanish equivalent of *greenwashing*) is misleading marketing that portrays a company or product as sustainable while concealing ongoing environmental harm or overproduction.",
        hints: [
          "Break down the compound noun: *eco-* + *blanqueo* (“whitewashing”).",
          "Contrast genuine certification with deceptive eco-marketing.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "globalizacion-etica-entorno-urbano",
        question:
          "¿Qué región del mundo hispanohablante se ha convertido en símbolo mundial de los residuos de la **moda rápida** al acumular toneladas de ropa desechada?",
        options: [
          "La sierra de Guadarrama en el centro de España",
          "El desierto de Atacama en el norte de Chile",
          "La Patagonia austral en el sur de Argentina",
          "La península de Yucatán en el sureste de México",
        ],
        answerIndex: 1,
        explanation:
          "Northern Chile's **desierto de Atacama** (near the port of Iquique) has gained global attention for vast illegal dumps of unsold and second-hand fast-fashion textiles imported from North America, Europe, and Asia.",
        hints: [
          "Think of an arid desert in northern Chile near the port of Iquique.",
          "Thousands of tonnes of synthetic garments end up dumped in its dunes.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "globalizacion-etica-entorno-urbano",
        question:
          "¿Qué objetivo central persigue el sello de **comercio justo** en cooperativas de café o cacao de Colombia y Perú?",
        options: [
          "Abaratar el producto al máximo eliminando las inspecciones laborales",
          "Sustituir las cooperativas locales por plantaciones totalmente automatizadas",
          "Prohibir que los agricultores exporten sus cosechas fuera de su región",
          "Garantizar un precio mínimo digno, trazabilidad y sostenibilidad agrícola",
        ],
        answerIndex: 3,
        explanation:
          "**El comercio justo** (fair trade) establishes a fair minimum price (*precio mínimo digno*), supply-chain **trazabilidad**, safe labour standards, and community premiums for smallholder producers.",
        hints: [
          "Focus on what makes trade *justo* (fair) for smallholder producers.",
          "Look for fair pricing, traceability, and sustainable farming.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "globalizacion-etica-entorno-urbano",
        question:
          "¿Qué describe con precisión la expresión **la España vaciada**?",
        options: [
          "El cierre temporal de hoteles costeros durante los meses de invierno",
          "La emigración de estudiantes universitarios hacia países angloparlantes",
          "La despoblación severa y pérdida de servicios en provincias del interior",
          "La falta de viviendas turísticas en el centro histórico de Barcelona",
        ],
        answerIndex: 2,
        explanation:
          "**La España vaciada** refers to inland Spanish provinces (such as Soria, Teruel, Cuenca, and Zamora) experiencing steep depopulation, demographic ageing, and the closure of schools, clinics, and public transport.",
        hints: [
          "Note the adjective *vaciada* (“emptied out” — implying structural neglect, not mere accident).",
          "Which parts of Spain suffer the lowest population density?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "globalizacion-etica-entorno-urbano",
        question:
          "¿Por qué se estudia internacionalmente el modelo de **urbanismo social** de Medellín (Colombia)?",
        options: [
          "Integró barrios marginales de ladera mediante el Metrocable y bibliotecas públicas",
          "Prohibió por completo la construcción de edificios de más de dos plantas",
          "Trasladó a toda su población urbana hacia fincas agrícolas del Pacífico",
          "Privatizó el transporte público para reducir el número de líneas urbanas",
        ],
        answerIndex: 0,
        explanation:
          "Medellín's **urbanismo social** connected steep, historically marginalised hillside *comunas* to the city centre via the **Metrocable** transit system alongside iconic *parques biblioteca* and public spaces.",
        hints: [
          "Recall how Medellín used innovative transport and cultural infrastructure to reduce urban exclusion.",
          "Think of cable cars (*Metrocable*) and community libraries.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "globalizacion-etica-entorno-urbano",
        question:
          "¿Qué significa el término **gentrificación** en debates sobre Ciudad de México, Madrid o Barcelona?",
        options: [
          "La creación de huertos comunitarios gratuitos en solares abandonados",
          "El desplazamiento de vecinos originales por la subida de alquileres y turismo",
          "La ampliación de carriles bici municipales en barrios periféricos",
          "La reducción del tráfico rodado mediante zonas de bajas emisiones",
        ],
        answerIndex: 1,
        explanation:
          "**La gentrificación** occurs when wealthier newcomers, investors, or short-term tourist rentals drive up housing costs in historic or working-class neighbourhoods, displacing long-term residents.",
        hints: [
          "Link the term to housing affordability and neighbourhood transformation.",
          "Who ends up priced out of their own barrio?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Justify",
        guideRef: "globalizacion-etica-entorno-urbano",
        question:
          "En Paper 1 te piden escribir al Ayuntamiento de un pueblo de Teruel proponiendo medidas concretas de teletrabajo y vivienda joven. ¿Qué tipo de texto es el MÁS adecuado?",
        options: [
          "Una entrada de diario personal",
          "Un correo electrónico informal a un amigo",
          "Una reseña cinematográfica cultural",
          "Una propuesta formal estructurada",
        ],
        answerIndex: 3,
        explanation:
          "Addressing a town council (*Ayuntamiento*) with actionable policy measures (*medidas concretas*) directly matches **una propuesta** (professional category: formal *usted/ustedes* register, clear subheadings, objectives, and viability). A diary, casual email, or film review misses Audience and Purpose.",
        hints: [
          "Apply the IB Conceptual Understandings: Audience = *Ayuntamiento*; Purpose = present an actionable policy plan.",
          "Which professional text type is designed specifically to pitch structured solutions to authorities?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "derechos-humanos-igualdad-paz",
        question:
          "Elige la oración que respeta correctamente la concordancia verbal con **la gente** y **las personas**:",
        options: [
          "La gente exige mayor transparencia, y muchas personas participan en marchas.",
          "La gente exigen mayor transparencia, y muchas personas participa en marchas.",
          "La gente exigen mayor transparencia, y muchas personas participan en marchas.",
          "La gente exige mayor transparencia, y muchas personas participa en marchas.",
        ],
        answerIndex: 0,
        explanation:
          "**La gente** is grammatically singular (*exige*), whereas **muchas personas** is plural (*participan*). Mixing up the number of *la gente* is one of the most frequent post-IGCSE slips.",
        hints: [
          "Is *la gente* singular or plural in Spanish grammar?",
          "Check both verbs: *la gente* + 3rd-person singular; *muchas personas* + 3rd-person plural.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "globalizacion-etica-entorno-urbano",
        question:
          "¿En qué oración se usa el falso amigo **actualmente** con su significado correcto en español?",
        options: [
          "No es un mito: actualmente el algodón orgánico cuesta más de producir.",
          "Pensé que era barato, pero actualmente tuve que pagar el doble.",
          "Actualmente, más del 80 % de la población latinoamericana vive en ciudades.",
          "Te diré la verdad: actualmente prefiero comprar ropa de segunda mano.",
        ],
        answerIndex: 2,
        explanation:
          "**Actualmente** means *“currently / nowadays”* — matching the demographic statistic about Latin America's urban population today. The other three sentences misuse it to mean English “actually” (which should be *en realidad* or *de hecho*).",
        hints: [
          "Remember: *actualmente* ≠ “actually”; it means “currently / at present”.",
          "Look for the sentence stating a present-day demographic fact.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "derechos-humanos-igualdad-paz",
        question:
          "En un discurso sobre la igualdad de género, ¿qué significa la metáfora **el techo de cristal**?",
        options: [
          "La arquitectura sostenible que aprovecha la luz natural en las oficinas",
          "Las barreras invisibles que dificultan el acceso de las mujeres a altos cargos",
          "El límite legal de horas semanales permitido en contratos juveniles",
          "La transparencia obligatoria de los presupuestos públicos municipales",
        ],
        answerIndex: 1,
        explanation:
          "**El techo de cristal** (“glass ceiling”) refers to unseen structural and cultural barriers that hinder qualified women from reaching senior leadership and executive positions, often discussed alongside *la brecha salarial*.",
        hints: [
          "Translate the idiom literally: “glass ceiling”.",
          "What invisible barrier limits career progression in gender-equality debates?",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 (HL): C1 Counter-Argumentation, Cohesion & Global Ethics
  // ===========================================================================
  {
    id: "5-compartir-el-planeta-m3",
    title: "MCQ Paper 3 — [HL] Global Ethics, C1 Cohesion & Counter-Argumentation",
    level: "HL",
    questions: [
      {
        id: "5-compartir-el-planeta-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] Completa la síntesis consecutiva con la forma verbal obligatoria después de **de ahí que**:\n*La sobreexplotación turística agrava la escasez hídrica; de ahí que ________ (resultar) urgente limitar las nuevas licencias.*",
        options: [
          "resulta",
          "resultó",
          "resultará",
          "resulte",
        ],
        answerIndex: 3,
        explanation:
          "In standard academic Spanish, **de ahí que** ALWAYS governs the **subjunctive**, even when stating an objective consequence → **resulte** (present subjunctive). Using indicative (*resulta*, *resultó*, *resultará*) is a classic HL accuracy trap.",
        hints: [
          "Check the inviolable mood rule for the consecutive connector *de ahí que*.",
          "Even though the urgency is real, *de ahí que* demands the subjunctive.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] ¿Cuál de estas oraciones utiliza correctamente la estructura **no es que + subjuntivo, sino que + indicativo**?",
        options: [
          "No es que faltan leyes ambientales, pero no se aplican con rigor.",
          "No es que falten leyes ambientales, sino que no se aplican con rigor.",
          "No es que falten leyes ambientales, sino que no se apliquen con rigor.",
          "No es que faltan leyes ambientales, sino que no se aplican con rigor.",
        ],
        answerIndex: 1,
        explanation:
          "The rejected explanation after **no es que** takes the **subjunctive** (*falten*), while the affirmed true explanation after **sino que** takes the **indicative** (*se aplican*). Using *pero* or putting both clauses in the same mood breaks the C1 rule.",
        hints: [
          "First clause (*no es que*): rejected cause → subjunctive.",
          "Second clause: use *sino que* (not *pero*) + affirmed reality → indicative.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] En el párrafo *«Si bien es cierto que el teletrabajo dinamiza algunos pueblos, no obstante resulta insuficiente sin transporte público»*, ¿qué función retórica cumple **si bien es cierto que**?",
        options: [
          "Expresa una consecuencia final irreversible en modo subjuntivo",
          "Rechaza con ironía una propuesta sin reconocer ningún mérito",
          "Concede una verdad parcial del argumento contrario antes de matizarlo",
          "Introduce un ejemplo cronológico sucedido en el siglo pasado",
        ],
        answerIndex: 2,
        explanation:
          "**Si bien es cierto que + indicativo** (“while it is indeed true that…”) gracefully concedes a valid part of an opposing perspective before pivoting with **no obstante** — the hallmark of balanced Band 10–12 HL argumentation.",
        hints: [
          "Think about the 4-stage C-R-E-S blueprint: which stage comes first?",
          "Does *si bien es cierto que* dismiss the opponent outright or acknowledge a partial truth?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] Completa con el **pretérito perfecto de subjuntivo** tras *de ahí que*:\n*Numerosos líderes comunitarios sufren amenazas constantes; de ahí que la ONU ________ (instar) a reforzar su protección.*",
        options: [
          "haya instado",
          "ha instado",
          "había instado",
          "habrá instado",
        ],
        answerIndex: 0,
        explanation:
          "Because **de ahí que** always requires the subjunctive and the sentence refers to a recent completed action connected to the present, you must use the **present perfect subjunctive**: *haya* + past participle → **haya instado** (not indicative *ha instado*).",
        hints: [
          "*De ahí que* requires a subjunctive form of the auxiliary *haber*.",
          "What is the 3rd-person singular present subjunctive of *haber*?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] ¿Qué reformulación aplica mejor la **nominalización** C1 para mejorar *«Porque mucha gente compra ropa barata, las fábricas contaminan los ríos»*?",
        options: [
          "Como hay muchas personas comprando ropa muy barata, los ríos están sucios.",
          "Mucha gente quiere ropa barata y por eso las fábricas ensucian el agua.",
          "El auge de la moda ultrarrápida conlleva una grave contaminación fluvial.",
          "Las tiendas venden camisetas muy económicas y luego tiran tintes al río.",
        ],
        answerIndex: 2,
        explanation:
          "**El auge de la moda ultrarrápida conlleva una grave contaminación fluvial** transforms verb-heavy clauses into dense academic noun phrases (*el auge*, *contaminación fluvial*) joined by the C1 causal verb *conllevar*.",
        hints: [
          "Nominalisation packs verb clauses into abstract nouns (*el auge*, *la contaminación*).",
          "Look for formal C1 verbs like *conllevar* (“to entail / lead to”).",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] Completa esta oración con **lejos de** para formular un contraargumento contundente:\n*________ los problemas de vivienda, la proliferación de pisos turísticos ha acelerado la gentrificación.*",
        options: [
          "Lejos de que resuelva",
          "Lejos de resolviendo",
          "Lejos de resuelto",
          "Lejos de resolver",
        ],
        answerIndex: 3,
        explanation:
          "**Lejos de + infinitivo** (“far from solving…”) is a crisp, high-scoring C1 structure. Because *de* is a preposition, Spanish always uses the **infinitive** (*resolver*), never a gerund (*resolviendo*) or participle (*resuelto*).",
        hints: [
          "What verb form ALWAYS follows a Spanish preposition like *de* when there is no *que*?",
          "Translate “far from solving” using the infinitive.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] Elige la opción que completa correctamente esta cláusula restrictiva con subjuntivo:\n*Apoyaremos la transición industrial siempre y cuando ________ (protegerse) el empleo de las comarcas mineras.*",
        options: [
          "se protege",
          "se proteja",
          "se protegía",
          "se protegerá",
        ],
        answerIndex: 1,
        explanation:
          "**Siempre y cuando** (“provided that / as long as”) is an **ESCAPA/conditional** conjunction that ALWAYS triggers the **subjunctive**. Remember the *g → j* orthographic change in *proteger* → **se proteja**.",
        hints: [
          "*Siempre y cuando* introduces a condition (like *con tal de que*) — which mood does it always require?",
          "Watch the spelling of *proteger* in the present subjunctive: *g* becomes *j* before *a*.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] ¿Qué conector sustituye con mayor precisión y elegancia a *«pero»* al inicio de una refutación formal en un artículo de opinión?",
        options: [
          "No obstante,",
          "Además,",
          "Por consiguiente,",
          "Es decir,",
        ],
        answerIndex: 0,
        explanation:
          "**No obstante** (“nevertheless / however”) is an adversative C1 connector ideal for pivoting into a formal rebuttal. *Además* adds information, *por consiguiente* states a consequence, and *es decir* clarifies or rephrases.",
        hints: [
          "Check the logical relationship of each connector: addition, consequence, clarification, or contrast?",
          "You need an adversative/contrastive pivot equivalent to *sin embargo*.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] En la frase *«Conviene fomentar el comercio justo, sin que ello implique que los consumidores con bajos ingresos ________ (deber) asumir todo el coste»*, ¿qué forma verbal corresponde?",
        options: [
          "deben",
          "debían",
          "deberán",
          "deban",
        ],
        answerIndex: 3,
        explanation:
          "Both **sin que** (“without”) and the negated/embedded **implique que** demand the **present subjunctive**: *deber* (*ellos*) → **deban**. This layered sentence exemplifies Band 10–12 HL syntax.",
        hints: [
          "Notice *sin que* (ESCAPA → always subjunctive) leading into *implique que*.",
          "Conjugate *deber* in the 3rd-person plural present subjunctive.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Interpret",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] En un debate de IO Parte 3 sobre derechos territoriales, un candidato dice: *«Cabe matizar que el crecimiento económico no es incompatible con la conservación»*. ¿Qué efecto logra **cabe matizar que**?",
        options: [
          "Demuestra indecisión absoluta y falta de opinión propia",
          "Impone una postura radical sin admitir evidencia alternativa",
          "Introduce una precisión analítica que evita generalizaciones simplistas",
          "Cambia abruptamente de tema hacia una anécdota personal",
        ],
        answerIndex: 2,
        explanation:
          "**Cabe matizar que…** (“it is worth qualifying/nuancing that…”) is a refined C1 academic hedge that shows balanced critical judgement without weakening the speaker's authority.",
        hints: [
          "Think about the verb *matizar* (to qualify, add nuance or shade of meaning).",
          "Does IB top-band evaluation favour sweeping absolutism or nuanced qualification?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] Completa esta hipótesis contrafactual sobre la historia de la Amazonia:\n*Aunque los gobiernos ________ (duplicar) hoy la vigilancia satelital, tardaríamos décadas en regenerar el bosque primario perdido.*",
        options: [
          "duplican",
          "duplicaran",
          "han duplicado",
          "duplicarán",
        ],
        answerIndex: 1,
        explanation:
          "The conditional verb **tardaríamos** (“it would take us”) signals an unlikely or hypothetical contrary-to-present scenario (“even if governments were to double surveillance today…”), requiring the **imperfect subjunctive** → **duplicaran** (or *duplicasen*).",
        hints: [
          "Look at the main clause verb *tardaríamos* — it is in the conditional tense.",
          "Which subjunctive tense pairs with the conditional in hypothetical clauses?",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] En Paper 1 HL (450–600 palabras), ¿qué estrategia impulsa más eficazmente el Criterio B (*Mensaje*) hacia la banda 10–12?",
        options: [
          "Enumerar diez argumentos breves de una sola frase sin ejemplos culturales",
          "Superar las 850 palabras repitiendo la tesis inicial en cada párrafo",
          "Evitar cualquier referencia a posturas contrarias para sonar más seguro",
          "Desarrollar tres argumentos profundos, un contraargumento refutado y ejemplos hispanos",
        ],
        answerIndex: 3,
        explanation:
          "IB HL examiners reward **depth, coherent development, cultural anchoring, and counter-argument evaluation** within the 450–600 word guideline — far more than shallow lists, unrefuted one-sidedness, or exceeding word limits with repetition.",
        hints: [
          "Recall the FA2029 HL Paper 1 word target (450–600 words) and Criterion B top-band descriptors.",
          "Quality of development + counter-argument beats sheer quantity or list-making.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] Elige el relativo compuesto correcto en registro formal:\n*La comunidad indígena defendió el ecosistema fluvial, ________ depende la subsistencia de miles de familias.*",
        options: [
          "del cual",
          "cuyo",
          "lo que",
          "quien",
        ],
        answerIndex: 0,
        explanation:
          "The verb **depender de** requires the preposition *de*, and the masculine singular antecedent is *el ecosistema fluvial* → *de + el cual* contracts to **del cual** (“on which”). *Cuyo* expresses possession before a noun, *quien* refers to people, and *lo que* lacks the preposition *de*.",
        hints: [
          "Check what preposition *depender* governs (*depender ___ algo*).",
          "Match the masculine singular noun *el ecosistema fluvial* after *de*.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] ¿Cuál de las siguientes oraciones emplea **no porque + subjuntivo, sino porque + indicativo** sin errores?",
        options: [
          "Defendemos Doñana no porque es famoso, sino porque regule el clima.",
          "Defendemos Doñana no porque sea famoso, sino porque regula el clima.",
          "Defendemos Doñana no porque sea famoso, sino porque regule el clima.",
          "Defendemos Doñana no porque es famoso, sino porque regula el clima.",
        ],
        answerIndex: 1,
        explanation:
          "Exactly like *no es que + subj., sino que + ind.*, the negated cause **no porque** triggers the **subjunctive** (**sea**), while the affirmed true cause **sino porque** takes the **indicative** (**regula**).",
        hints: [
          "Negated cause (*no porque*) = subjunctive; affirmed cause (*sino porque*) = indicative.",
          "Check both *ser* and *regular* in each option.",
        ],
      },
      {
        id: "5-compartir-el-planeta-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "argumentacion-etica-global-hl",
        question:
          "[HL] En la conclusión de una **carta al director** sobre la despoblación rural, ¿qué cierre combina con precisión registro formal, cohesión C1 y el propósito del tipo de texto?",
        options: [
          "Bueno, eso es todo por hoy, espero que os haya gustado mi carta, un abrazo.",
          "Por eso los pueblos están vacíos y ya nadie quiere vivir allí nunca más.",
          "En suma, sin inversión en servicios públicos persistirá el éxodo; urge, pues, actuar con visión de Estado. Atentamente,",
          "Hola director, por favor publica esto rápido porque mi pueblo necesita wifi pronto.",
        ],
        answerIndex: 2,
        explanation:
          "A formal **carta al director** closes with a concise synthesis (*En suma… urge, pues, actuar con visión de Estado*) and a conventional formal sign-off (**Atentamente,**), matching Audience, Context, and Purpose for Criterion C (6/6).",
        hints: [
          "What register and sign-off conventions belong to a *carta al director* sent to a newspaper editor?",
          "Look for formal synthesis connectors (*En suma*, *pues*) and *Atentamente,*.",
        ],
      },
    ],
  },
];
