import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p2-reading",
  title: "IB Spanish B Paper 2 Mock — Reading Comprehension",
  level: "SL",
  paperType: "Paper 2 · Reading Comprehension (1h · 40m)",
  calculator: false,
  minutes: 60,
  questions: [
    // ===================== TEXTO A (Q01–Q05): IDENTIDADES & EXPERIENCIAS (SL) =====================
    {
      id: "exam-p2-reading-q01",
      kind: "short",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-reading-strategies",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Match part of speech (feminine singular noun) when hunting for IB Reading synonyms",
      question:
        "📖 **[Texto A — Artículo cultural: *La sobremesa digital de una generación emigrada*]**\n\n«Cada domingo por la tarde, miles de jóvenes colombianos, argentinos y españoles que trabajan en Londres, Berlín o Singapur colocan el ordenador portátil junto al plato de comida. Aunque salieron de sus países buscando mejores oportunidades laborales, confiesan que la nostalgia no desaparece con el salario ni con el dominio del idioma local. Compartir el almuerzo frente a la pantalla con sus abuelos o hermanos se ha vuelto un refugio afectivo semanal.»\n\n**IB Reading — Búsqueda de sinónimos:** Encuentra en el fragmento la **única palabra** en español que corresponde a la definición: *«tristeza y añoranza profunda por el lugar de origen o por el pasado»*. Escribe SOLO esa palabra.",
      answer: {
        type: "text",
        accept: ["nostalgia", "la nostalgia"],
        display: "nostalgia",
      },
      traps: [
        {
          spec: { type: "text", accept: ["refugio", "un refugio"] },
          feedback: "«Refugio» means shelter or haven — the definition asks for deep longing/homesickness for one's homeland.",
        },
        {
          spec: { type: "text", accept: ["almuerzo", "el almuerzo"] },
          feedback: "«Almuerzo» refers to the midday meal, not to emotional homesickness.",
        },
      ],
      hints: [
        "Look at the grammatical clue in the definition: you need a feminine singular abstract noun referring to an emotion.",
        "Re-read the second sentence: what feeling «does not disappear with salary or fluency in the local language»?",
      ],
      solution: [
        "Scan the extract for a singular noun denoting homesickness or longing for one's place of origin.",
        "In sentence two, «confiesan que la **nostalgia** no desaparece con el salario» matches the definition directly.",
        "Copy the exact word verbatim from the text: **nostalgia**.",
      ],
      commonError: "Writing a synonym from memory (like *melancolía*) instead of lifting the exact word printed in the passage.",
    },
    {
      id: "exam-p2-reading-q02",
      kind: "short",
      topicId: "1-identidades",
      guideRef: "creencias-valores-subculturas",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Track demonstrative referents backwards to the nearest matching noun phrase",
      question:
        "📖 **[Texto A — Artículo cultural: *La sobremesa digital de una generación emigrada*]**\n\n«En muchas familias hispanohablantes, la sobremesa no es un simple apéndice de la comida, sino el corazón de la convivencia diaria. Al emigrar, numerosos estudiantes temían que las pantallas enfriaran **ese ritual**; sin embargo, pronto descubrieron que dejar la cámara encendida mientras toman café reproduce el ritmo pausado de las tardes en casa.»\n\n**IB Reading — Referente textual:** ¿A qué expresión exacta del texto se refiere **«ese ritual»**? Escribe el sustantivo con su artículo (dos palabras en español).",
      answer: {
        type: "text",
        accept: ["la sobremesa", "sobremesa"],
        display: "la sobremesa",
      },
      traps: [
        {
          spec: { type: "text", accept: ["la comida", "comida"] },
          feedback: "Look closely at the contrast «no es un simple apéndice de la comida» — the central custom being discussed as a ritual is what happens AFTER eating.",
        },
        {
          spec: { type: "text", accept: ["las pantallas", "pantallas"] },
          feedback: "«Las pantallas» is the grammatical subject of «enfriaran», not the cultural ritual being cooled down!",
        },
      ],
      hints: [
        "Check who or what «las pantallas» might cool down («enfriaran»): it must be a cultural family custom named in the first sentence.",
        "Re-read the opening subject of sentence one: what is described as «el corazón de la convivencia diaria»?",
      ],
      solution: [
        "Trace the demonstrative phrase «ese ritual» backwards to the main cultural practice defined in sentence one.",
        "Sentence one establishes **la sobremesa** as the heart of daily family life; sentence two refers back to it as «ese ritual».",
        "Write the exact noun phrase: **la sobremesa**.",
      ],
      commonError: "Copying a plural noun like *las tardes* or *las pantallas* even though «ese ritual» is singular.",
    },
    {
      id: "exam-p2-reading-q03",
      kind: "mcq",
      topicId: "2-experiencias",
      guideRef: "historias-vida-migracion",
      difficulty: "core",
      level: "SL",
      commandTerm: "Justify",
      strategy: "Apply IB Paper 2 True/False + exact minimal justification quote discipline",
      question:
        "📖 **[Texto A — Artículo cultural: *La sobremesa digital de una generación emigrada*]**\n\n«Algunos escépticos suponen que los jóvenes emigrados abandonan sus recetas tradicionales en cuanto se instalan en el extranjero. En realidad, aunque ciertos ingredientes autóctonos resultan caros o difíciles de hallar, la mayoría busca tiendas latinas o adapta los guisos familiares con productos locales para conservar el sabor de su infancia.»\n\n**Afirmación:** *«Según el texto, los jóvenes emigrados dejan de cocinar platos tradicionales por completo debido a la escasez de ingredientes.»*\n\nSelecciona el veredicto correcto acompañado de la **justificación mínima exacta** del texto.",
      options: [
        "Verdadero — «ciertos ingredientes autóctonos resultan caros o difíciles de hallar»",
        "Falso — «la mayoría busca tiendas latinas o adapta los guisos familiares con productos locales»",
        "Verdadero — «los jóvenes emigrados abandonan sus recetas tradicionales en cuanto se instalan»",
        "Falso — «Algunos escépticos suponen que los jóvenes emigrados abandonan sus recetas tradicionales»",
      ],
      answerIndex: 1,
      hints: [
        "Notice the attribution «Algunos escépticos suponen...» followed by the crucial pivot «En realidad...».",
        "An IB justification quote must directly disprove the statement, not merely quote the sceptics' false assumption.",
      ],
      explanation:
        "The statement is **Falso** because the passage explicitly rebuts the sceptics' assumption («En realidad...»): despite pricey or scarce ingredients, most young migrants seek out Latin shops or adapt family recipes with local produce («la mayoría busca tiendas latinas o adapta los guisos familiares con productos locales»). Quoting what «algunos escépticos suponen» fails to prove the author's actual claim.",
    },
    {
      id: "exam-p2-reading-q04",
      kind: "short",
      topicId: "1-identidades",
      guideRef: "lengua-identidad-hispanohablante",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Diagnose logical relationship (cause → consequence) in IB Reading gap-fill cohesion",
      question:
        "📖 **[Texto A — Artículo cultural: *La sobremesa digital de una generación emigrada*]**\n\n«Al vivir entre dos idiomas, muchos emigrantes jóvenes alternan expresiones del país de acogida con giros regionales de su infancia. **[___]**, sus conversaciones semanales con la familia no solo transmiten afecto, sino que también mantienen viva su riqueza léxica en español.»\n\n**IB Reading — Cohesión textual:** Elige el conector exacto del recuadro que encaja lógicamente en **[___]**:\n\n`sin embargo` · `por consiguiente` · `en cambio` · `mientras tanto`\n\nEscribe SOLO el conector correcto en español.",
      answer: {
        type: "text",
        accept: ["por consiguiente", "Por consiguiente"],
        display: "Por consiguiente",
      },
      traps: [
        {
          spec: { type: "text", accept: ["sin embargo", "en cambio"] },
          feedback: "Both «sin embargo» and «en cambio» signal contrast, whereas sentence two presents a logical result/outcome of living between two languages.",
        },
        {
          spec: { type: "text", accept: ["mientras tanto"] },
          feedback: "«Mientras tanto» expresses simultaneous time («meanwhile»), not a logical consequence.",
        },
      ],
      hints: [
        "Test the relationship between sentence one (living between two languages) and sentence two (weekly family calls keep their Spanish vocabulary alive).",
        "Does sentence two contradict sentence one, happen simultaneously, or follow logically as a consequence («therefore / consequently»)?",
      ],
      solution: [
        "Sentence one explains the bilingual reality of young emigrants navigating two languages.",
        "Sentence two states the logical consequence of that linguistic pressure: weekly family conversations help preserve their Spanish vocabulary alongside affection.",
        "Only **Por consiguiente** («consequently / therefore») expresses cause-to-effect cohesion here.",
      ],
      commonError: "Defaulting to *sin embargo* whenever two sentences appear back-to-back without verifying whether the logic is contrast or consequence.",
    },
    {
      id: "exam-p2-reading-q05",
      kind: "written",
      topicId: "2-experiencias",
      guideRef: "costumbres-tradiciones-ritos",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      strategy: "Synthesise three distinct textual details in your own words without verbatim lifting",
      marks: 3,
      question:
        "📖 **[Texto A — Artículo cultural: *La sobremesa digital de una generación emigrada*]**\n\n«No se trata de una llamada apresurada para dar un parte de noticias y colgar en diez minutos. Durante la sobremesa digital, el portátil permanece abierto sobre el mantel mientras padres, hijos y abuelos prueban recetas semejantes a miles de kilómetros, comentan las anécdotas de la semana sin mirar el reloj y celebran los cumpleaños cantando con cierto retraso en el audio. Así, la distancia geográfica deja de sentirse como una ruptura definitiva con las raíces.»\n\n**IB Reading — Comprensión abierta (3 marks):** Explain **in English (in your own words)** three reasons why the author distinguishes this *«sobremesa digital»* from an ordinary brief phone call.",
      modelAnswer:
        "1. **Shared dining & culinary bond:** Instead of merely exchanging quick updates, relatives keep the laptop on the table while eating similar family meals simultaneously across borders.\n2. **Unhurried, multi-generational conversation:** Parents, children, and grandparents talk casually without rushing or watching the clock, even celebrating milestones like birthdays together despite audio lag.\n3. **Sustained emotional & cultural continuity:** This ongoing ritual prevents physical distance from feeling like a permanent break from their family heritage and roots.",
      markScheme: [
        {
          point: "Mentions shared eating / culinary connection across distance (placing laptop at the table while enjoying similar meals).",
          keywords: ["meal", "meals", "eating", "dining", "food", "culinary", "table"],
        },
        {
          point: "Highlights unhurried, relaxed multi-generational interaction (not rushed / no clock-watching / celebrating birthdays together).",
          keywords: ["unhurried", "rushing", "clock", "generations", "multi-generational", "birthdays", "casual"],
        },
        {
          point: "Identifies preservation of cultural roots / emotional belonging (distance no longer feels like a permanent break from heritage).",
          keywords: ["heritage", "belonging", "continuity", "roots", "permanent break", "emotional"],
        },
      ],
      hints: [
        "Contrast «una llamada apresurada» (a hurried 10-minute update) with three concrete features in the next two sentences.",
        "Look for: (1) what is happening with food on the table, (2) the pace and who participates, and (3) the emotional effect on cultural roots.",
      ],
      commonError: "Repeating only one detail in three different ways (e.g., mentioning video calls three times) instead of extracting three distinct points from the passage.",
    },

    // ===================== TEXTO B (Q06–Q10): INGENIO HUMANO & ORGANIZACIÓN SOCIAL (SL) =====================
    {
      id: "exam-p2-reading-q06",
      kind: "short",
      topicId: "3-ingenio-humano",
      guideRef: "tecnologia-innovacion-cientifica",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Extract an exact two-word compound noun phrase matching a lexical definition",
      question:
        "📖 **[Texto B — Editorial educativa mexicana: *Algoritmos en el aula: ¿aliados o nueva desigualdad?*]**\n\n«En los institutos públicos de Monterrey, varios programas piloto de tutoría con inteligencia artificial ya permiten adaptar ejercicios de matemáticas y redacción al ritmo individual de cada estudiante. Sin embargo, al viajar hacia comunidades serranas de Oaxaca donde el internet es intermitente, el entusiasmo inicial choca con una persistente brecha digital que amenaza con ampliar las diferencias educativas.»\n\n**IB Reading — Búsqueda de sinónimos:** Encuentra en el texto la **expresión exacta de dos palabras** que significa *«desigualdad en el acceso y aprovechamiento de las tecnologías de la información»*. Escribe SOLO esas dos palabras.",
      answer: {
        type: "text",
        accept: ["brecha digital", "la brecha digital", "una brecha digital"],
        display: "brecha digital",
      },
      traps: [
        {
          spec: { type: "text", accept: ["inteligencia artificial"] },
          feedback: "«Inteligencia artificial» names the software technology itself, not the inequality in technological access.",
        },
        {
          spec: { type: "text", accept: ["diferencias educativas"] },
          feedback: "«Diferencias educativas» is the broader educational gap threatened as a result — find the exact two-word technological divide term earlier in that sentence.",
        },
      ],
      hints: [
        "Scan the second sentence where the editorial contrasts urban Monterrey with rural mountain communities in Oaxaca.",
        "Look for a noun + adjective collocation central to IB Theme 3 (*Ingenio humano*) referring to unequal access to connectivity.",
      ],
      solution: [
        "Read sentence two: «el entusiasmo inicial choca con una persistente **brecha digital** que amenaza con ampliar las diferencias educativas».",
        "The exact two-word Spanish expression is **brecha digital**.",
      ],
      commonError: "Copying extra surrounding words like *persistente brecha digital que amenaza* instead of the exact two-word phrase requested.",
    },
    {
      id: "exam-p2-reading-q07",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-reading-strategies",
      difficulty: "core",
      level: "SL",
      commandTerm: "Justify",
      strategy: "Reject exaggerated «por completo» statements using precise minimal textual quotes",
      question:
        "📖 **[Texto B — Editorial educativa mexicana: *Algoritmos en el aula: ¿aliados o nueva desigualdad?*]**\n\n«Aunque los tutores virtuales corrigen errores gramaticales al instante y liberan tiempo administrativo, el informe del Ministerio descarta de plano que estas herramientas puedan reemplazar el acompañamiento humano del profesorado. La empatía pedagógica, la resolución de conflictos en el aula y el estímulo del pensamiento crítico continúan dependiendo de docentes bien preparados.»\n\n**Afirmación:** *«El informe ministerial prevé que la inteligencia artificial sustituirá por completo a los profesores en el aula.»*\n\nSelecciona el veredicto correcto con su **justificación mínima exacta**.",
      options: [
        "Verdadero — «los tutores virtuales corrigen errores gramaticales al instante y liberan tiempo»",
        "Falso — «La empatía pedagógica, la resolución de conflictos en el aula y el estímulo»",
        "Verdadero — «el informe del Ministerio descarta de plano que estas herramientas puedan reemplazar»",
        "Falso — «descarta de plano que estas herramientas puedan reemplazar el acompañamiento humano del profesorado»",
      ],
      answerIndex: 3,
      hints: [
        "Pay close attention to the Spanish verb «descarta de plano» («rules out flatly / completely rejects»).",
        "Match the exact False verdict with the direct clause that rejects replacing teachers, rather than a partial list of classroom skills.",
      ],
      explanation:
        "The statement is **Falso**: the report flatly rules out replacing teachers («descarta de plano que estas herramientas puedan reemplazar el acompañamiento humano del profesorado»). One distractor misreads «descarta» as True, while another cites an incomplete list of skills without the predicate proving replacement is rejected.",
    },
    {
      id: "exam-p2-reading-q08",
      kind: "short",
      topicId: "4-organizacion-social",
      guideRef: "educacion-mundo-laboral",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      strategy: "Match feminine singular pronoun «ella» to its exact feminine antecedent noun phrase",
      question:
        "📖 **[Texto B — Editorial educativa mexicana: *Algoritmos en el aula: ¿aliados o nueva desigualdad?*]**\n\n«Repartir dispositivos electrónicos sin un plan pedagógico suele resultar ineficaz. De hecho, los maestros de las escuelas rurales reclaman formación práctica continua, pues sin **ella** las tabletas nuevas acaban acumulando polvo en un armario tras el primer trimestre.»\n\n**IB Reading — Referente pronominal:** ¿A qué expresión exacta del texto se refiere el pronombre **«ella»**? Escribe las tres palabras exactas del texto.",
      answer: {
        type: "text",
        accept: ["formación práctica continua", "la formación práctica continua", "formación práctica", "formación"],
        display: "formación práctica continua",
      },
      traps: [
        {
          spec: { type: "text", accept: ["las tabletas", "tabletas", "las tabletas nuevas"] },
          feedback: "«Las tabletas» is plural, whereas «ella» is feminine SINGULAR! Look immediately before «pues sin ella».",
        },
        {
          spec: { type: "text", accept: ["un plan pedagógico", "plan pedagógico"] },
          feedback: "«Plan pedagógico» is masculine («él»), so feminine «ella» cannot refer to it.",
        },
      ],
      hints: [
        "Use Spanish gender and number grammar as a compass: «ella» MUST refer back to a **feminine singular** noun.",
        "Look immediately before «pues sin ella»: what do rural teachers request («reclaman»)?",
      ],
      solution: [
        "Check gender and number: «ella» is feminine singular, eliminating masculine *plan pedagógico* and plural *tabletas* / *escuelas rurales*.",
        "Directly preceding «pues sin ella», the feminine singular noun phrase requested by rural teachers is **formación práctica continua**.",
      ],
      commonError: "Picking *plan pedagógico* (wrong gender) or *tabletas* (wrong number) instead of checking grammatical agreement with «ella».",
    },
    {
      id: "exam-p2-reading-q09",
      kind: "mcq",
      topicId: "3-ingenio-humano",
      guideRef: "comunicacion-medios-redes",
      difficulty: "core",
      level: "SL",
      commandTerm: "Interpret",
      strategy: "Evaluate balanced concession markers to identify editorial tone and authorial purpose",
      question:
        "📖 **[Texto B — Editorial educativa mexicana: *Algoritmos en el aula: ¿aliados o nueva desigualdad?*]**\n\n«No debemos rechazar la innovación por miedo, pero tampoco abrazarla con ingenuidad comercial. Si la inteligencia artificial llega acompañada de conectividad universal, formación docente y criterios éticos transparentes, podrá enriquecer la enseñanza pública; de lo contrario, solo profundizará las fracturas sociales existentes.»\n\n**IB Reading — Tono y propósito:** ¿Qué opción describe mejor el tono y el propósito principal de este editorial?",
      options: [
        "Equilibrado y crítico: sopesar el potencial educativo de la IA frente a los riesgos de desigualdad",
        "Entusiasta y publicitario: convencer a los colegios de comprar plataformas comerciales de inmediato",
        "Catastrofista y nostálgico: exigir la prohibición definitiva de toda herramienta digital en clase",
        "Humorístico e informal: entretener a los jóvenes con anécdotas graciosas sobre errores informáticos",
      ],
      answerIndex: 0,
      hints: [
        "Examine the opening antithesis: «No debemos rechazar... pero tampoco abrazarla con ingenuidad».",
        "Notice how the author states clear conditions («Si... podrá enriquecer; de lo contrario...») rather than taking an extreme pro- or anti-tech stance.",
      ],
      explanation:
        "The editorial maintains a balanced, critical tone («Equilibrado y crítico»): it explicitly avoids both blind fear («rechazar por miedo») and naive hype («ingenuidad comercial»), arguing that AI can enrich public schooling ONLY if paired with universal connectivity, teacher training, and transparent ethics. The other options mischaracterise it as promotional, alarmist, or humorous.",
    },
    {
      id: "exam-p2-reading-q10",
      kind: "written",
      topicId: "4-organizacion-social",
      guideRef: "educacion-mundo-laboral",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      strategy: "Structure a 4-mark comparison into 2 clear benefits vs 2 concrete structural barriers",
      marks: 4,
      question:
        "📖 **[Texto B — Editorial educativa mexicana: *Algoritmos en el aula: ¿aliados o nueva desigualdad?*]**\n\n«En las aulas urbanas mejor equipadas, los asistentes de inteligencia artificial personalizan los ejercicios de práctica según las dificultades de cada alumno y ofrecen retroalimentación inmediata en redacción, lo que alivia parte de la carga administrativa de los profesores. Sin embargo, en numerosas comunidades rurales la realidad es muy distinta: la conexión eléctrica y el acceso a internet sufren cortes frecuentes, y el profesorado carece de talleres prácticos para integrar estas aplicaciones en el currículo oficial.»\n\n**IB Reading — Comparación textual (4 marks):** Based on the passage, contrast **in English (in your own words)** two educational opportunities offered by AI platforms with two structural barriers faced by rural schools.",
      modelAnswer:
        "**Two educational opportunities:**\n1. **Personalised practice:** AI platforms tailor exercises to each individual student's specific learning pace and weaknesses.\n2. **Instant feedback & reduced admin load:** Students receive immediate writing corrections while teachers spend less time on routine administrative marking.\n\n**Two structural barriers in rural schools:**\n3. **Unreliable infrastructure:** Rural communities experience frequent interruptions to electricity and internet connectivity.\n4. **Lack of practical teacher training:** Rural educators lack hands-on workshops showing how to integrate these digital tools meaningfully into the national curriculum.",
      markScheme: [
        {
          point: "Opportunity 1: Mentions personalised/tailored exercises adapted to individual student needs or pace.",
          keywords: ["personalised", "personalized", "tailor", "adapted", "individual", "pace"],
        },
        {
          point: "Opportunity 2: Mentions instant/immediate writing feedback OR relieving teachers' administrative workload.",
          keywords: ["instant", "immediate", "feedback", "administrative", "workload", "marking"],
        },
        {
          point: "Barrier 1: Identifies unreliable electricity and/or intermittent internet connectivity in rural areas.",
          keywords: ["electricity", "interruptions", "connectivity", "outages", "unstable", "power"],
        },
        {
          point: "Barrier 2: Identifies the absence of practical/hands-on teacher training workshops for curriculum integration.",
          keywords: ["training", "workshops", "hands-on", "curriculum", "integrate"],
        },
      ],
      hints: [
        "Organise your response into two explicit halves: 2 concrete opportunities from sentence one, and 2 concrete rural barriers from sentence two.",
        "Paraphrase cleanly in English without skipping specific details (notice BOTH electricity/internet outages AND missing hands-on workshops).",
      ],
      commonError: "Listing only the benefits of AI and forgetting to supply two distinct rural barriers, which caps the mark at 2/4.",
    },

    // ===================== TEXTO C [HL STRETCH] (Q11–Q15): COMPARTIR EL PLANETA =====================
    {
      id: "exam-p2-reading-q11",
      kind: "short",
      topicId: "5-compartir-el-planeta",
      guideRef: "medio-ambiente-sostenibilidad",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      strategy: "Match exact adjective morphology (masculine singular) for HL Reading synonym items",
      question:
        "📖 **[Texto C [HL] — Crónica medioambiental: *El agua prestada: del salar de Atacama a la huerta murciana*]**\n\n«Durante medio siglo tratamos los acuíferos subterráneos como si fueran pozos eternos, ignorando que el agua dulce es un recurso agotable cuyo equilibrio depende de ciclos climáticos cada vez más frágiles. Hoy, tanto en los valles resecos del sureste español como en los salares andinos, las bombas de extracción descienden decenas de metros más abajo que hace veinte años.»\n\n**[HL] IB Reading — Búsqueda de sinónimos:** Encuentra en el texto el **único adjetivo** en español que significa *«que puede terminarse o consumirse por completo con el uso continuado»*. Escribe SOLO esa palabra.",
      answer: {
        type: "text",
        accept: ["agotable"],
        display: "agotable",
      },
      traps: [
        {
          spec: { type: "text", accept: ["frágiles", "frágil"] },
          feedback: "«Frágiles» describes climate cycles as delicate/vulnerable (plural), not a singular resource that can be depleted/exhausted.",
        },
        {
          spec: { type: "text", accept: ["resecos", "reseco"] },
          feedback: "«Resecos» means parched/dried out (describing the valleys), whereas the definition asks for a singular adjective meaning exhaustible/depletable.",
        },
      ],
      hints: [
        "Notice the definition refers to a singular adjective modifying «un recurso» («a resource that can run out»).",
        "Look for a derivative of the verb «agotarse» («to run out / be exhausted») in sentence one.",
      ],
      solution: [
        "Check sentence one: «ignorando que el agua dulce es un recurso **agotable**».",
        "«Agotable» (from *agotar* = to deplete/exhaust) directly matches the definition.",
      ],
      commonError: "Confusing *agotable* (exhaustible/finite) with *frágiles* (fragile, plural) or *eternos* (its antonym!).",
    },
    {
      id: "exam-p2-reading-q12",
      kind: "mcq",
      topicId: "5-compartir-el-planeta",
      guideRef: "derechos-humanos-igualdad-paz",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Interpret",
      strategy: "Unpack figurative environmental metaphor («agua invisible») in HL journalistic chronicles",
      question:
        "📖 **[Texto C [HL] — Crónica medioambiental: *El agua prestada: del salar de Atacama a la huerta murciana*]**\n\n«En los supermercados europeos del mes de enero brillan fresas, tomates y aguacates impecables procedentes de zonas semiáridas del sur de España y de Chile. Cuando llenamos la cesta sin preguntarnos por su origen, rara vez percibimos la paradoja: en realidad exportamos agua invisible disfrazada de fruta fuera de temporada.»\n\n**[HL] IB Reading — Interpretación metafórica:** ¿Qué idea implícita sugiere el cronista con la metáfora *«exportamos agua invisible disfrazada de fruta fuera de temporada»*?",
      options: [
        "Que las frutas de invierno contienen demasiado líquido y llegan estropeadas a Europa",
        "Que los países semiáridos han descubierto acuíferos secretos para regar sin coste ecológico",
        "Que producir cultivos intensivos para exportar agota indirectamente reservas hídricas locales escasas",
        "Que los supermercados europeos etiquetan ilegalmente agua embotellada como producto agrícola",
      ],
      answerIndex: 2,
      hints: [
        "Think about the concept of «virtual / embedded water»: growing strawberries and avocados in semi-arid regions consumes huge volumes of irrigation water.",
        "Reject literal interpretations about watery fruit or mislabelled water bottles — focus on the ecological paradox of exporting water-intensive crops from arid zones.",
      ],
      explanation:
        "The metaphor «agua invisible disfrazada de fruta fuera de temporada» refers to virtual/embedded water: when semi-arid regions in southern Spain and Chile export out-of-season, water-intensive crops (strawberries, avocados) to northern European winter supermarkets, they are effectively exporting their own scarce freshwater reserves disguised as produce. Literal readings miss the ecological critique.",
    },
    {
      id: "exam-p2-reading-q13",
      kind: "short",
      topicId: "6-grammar-text-types",
      guideRef: "estilo-c1-conectores-hl",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      strategy: "Use mood compatibility (indicative «ofrece» rules out ESCAPA triggers!) in HL gap-fill",
      question:
        "📖 **[Texto C [HL] — Crónica medioambiental: *El agua prestada: del salar de Atacama a la huerta murciana*]**\n\n«**[___]** la desalinización marina ofrece un alivio parcial en la costa mediterránea, su elevado consumo energético y el vertido de salmuera impiden considerarla una solución definitiva sin reducir antes el derroche agrícola.»\n\n**[HL] IB Reading — Cohesión y gramática:** Elige la única expresión del recuadro que encaja tanto semántica como gramaticalmente en **[___]**:\n\n`Si bien` · `A menos que` · `Para que` · `Antes de que`\n\nEscribe SOLO la expresión correcta.",
      answer: {
        type: "text",
        accept: ["Si bien", "si bien"],
        display: "Si bien",
      },
      traps: [
        {
          spec: { type: "text", accept: ["A menos que", "a menos que"] },
          feedback: "«A menos que» (ESCAPA) ALWAYS requires the subjunctive («ofrezca»), whereas the verb in the text is indicative «ofrece»!",
        },
        {
          spec: { type: "text", accept: ["Para que", "para que", "Antes de que", "antes de que"] },
          feedback: "Both «para que» and «antes de que» belong to ESCAPA and obligatorily require the subjunctive, not indicative «ofrece».",
        },
      ],
      hints: [
        "Check the grammatical mood of the verb right after the blank: «ofrece» is present INDICATIVE.",
        "Eliminate all ESCAPA conjunctions (*a menos que, para que, antes de que*) because they ALWAYS demand the subjunctive.",
      ],
      solution: [
        "Examine the verb «ofrece»: it is in the present indicative, immediately eliminating ESCAPA subjunctive-only conjunctions (*a menos que, para que, antes de que*).",
        "Semantically, the sentence contrasts a partial benefit (desalination gives partial coastal relief) with a limitation (high energy cost and brine discharge).",
        "**Si bien** («although / while») takes the indicative and expresses this exact C1 concessive balance.",
      ],
      commonError: "Choosing *A menos que* by guessing meaning without checking whether the following verb is indicative or subjunctive.",
    },
    {
      id: "exam-p2-reading-q14",
      kind: "mcq",
      topicId: "7-paper1-paper2-skills",
      guideRef: "paper2-reading-strategies",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Justify",
      strategy: "Distinguish nuanced conditional support from blanket opposition in HL True/False items",
      question:
        "📖 **[Texto C [HL] — Crónica medioambiental: *El agua prestada: del salar de Atacama a la huerta murciana*]**\n\n«En el norte de Chile, las comunidades atacameñas no se oponen sistemáticamente a la transición hacia baterías eléctricas de litio; lo que denuncian es que la extracción de salmuera se haya acelerado sin consultas previas vinculantes ni garantías científicas sobre la supervivencia de los humedales donde pastan sus rebaños.»\n\n**Afirmación:** *«Según el texto, las comunidades atacameñas rechazan de manera absoluta cualquier proyecto vinculado a la transición hacia baterías de litio.»*\n\nSelecciona el veredicto correcto con su **justificación mínima exacta**.",
      options: [
        "Falso — «las comunidades atacameñas no se oponen sistemáticamente a la transición hacia baterías eléctricas de litio»",
        "Verdadero — «la extracción de salmuera se haya acelerado sin consultas previas vinculantes»",
        "Falso — «la supervivencia de los humedales donde pastan sus rebaños»",
        "Verdadero — «las comunidades atacameñas no se oponen sistemáticamente a la transición»",
      ],
      answerIndex: 0,
      hints: [
        "Watch out for extreme absolutes in Paper 2 statements like «de manera absoluta» or «cualquier proyecto».",
        "Re-read the opening clause: «no se oponen sistemáticamente...» — what exact verdict and minimal quote prove it?",
      ],
      explanation:
        "The statement is **Falso**: the passage explicitly states that Atacameño communities do NOT systematically oppose the transition to lithium batteries («las comunidades atacameñas no se oponen sistemáticamente a la transición hacia baterías eléctricas de litio»); rather, they denounce extraction proceeding without binding prior consultation or scientific wetland safeguards.",
    },
    {
      id: "exam-p2-reading-q15",
      kind: "written",
      topicId: "5-compartir-el-planeta",
      guideRef: "argumentacion-etica-global-hl",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      strategy: "Analyse literary devices, parallel geographical structure, and ethical framing together for HL Band 5–6",
      marks: 6,
      question:
        "📖 **[Texto C [HL] — Crónica medioambiental: *El agua prestada: del salar de Atacama a la huerta murciana*]**\n\n«El título de esta crónica habla de “agua prestada” porque cada generación apenas administra un caudal que pertenece también a quienes aún no han nacido. Al poner frente a frente los invernaderos exhaustos de Murcia y las lagunas saladas de Atacama donde anidan flamencos amenazados por la minería del litio, descubrimos un mismo patrón global: decisiones de consumo en el Norte rico —desde la fruta invernal hasta los coches eléctricos— trasladan su factura ecológica a ecosistemas frágiles y pueblos indígenas del Sur. Mientras sigamos tratando el agua como una mercancía silenciosa y no como un derecho humano compartido, ninguna innovación técnica bastará para evitar el conflicto.»\n\n**[HL] Extended Critical Reading Analysis (6 marks):** Analyse **in English** how the journalist uses **figurative language**, **parallel Hispanophone case studies**, and **ethical contrast** to persuade readers that water scarcity is a global justice issue rather than merely a technical problem.",
      modelAnswer:
        "1. **Central metaphor of stewardship («borrowed water»):** By framing freshwater as a loan merely administered on behalf of unborn future generations, the writer creates moral urgency and intergenerational accountability rather than viewing water as private property.\n2. **Personification & sensory contrast:** Describing Murcia's greenhouses as exhausted while highlighting threatened flamingos in Atacama's salt lagoons evokes emotional empathy for vulnerable habitats.\n3. **Parallel transatlantic geography (Spain & Chile):** Placing southeastern Spain's intensive winter agriculture side by side with northern Chile's lithium extraction reveals a recurring structural pattern rather than an isolated local accident.\n4. **Global North vs Global South consumption chain:** The author explicitly implicates wealthy consumers—linking winter produce and electric-car batteries to ecological costs offloaded onto fragile ecosystems and indigenous communities.\n5. **Antithetical ethical framing (commodity vs human right):** Calling water a «silent commodity» contrasted sharply with a «shared human right» reframes the debate from economic pricing to moral dignity.\n6. **Rejection of techno-optimism alone:** Concluding that no engineering fix will prevent social conflict unless consumption habits and rights frameworks change drives home the central justice thesis.",
      markScheme: [
        {
          point: "Analyses the «borrowed water» metaphor as intergenerational stewardship/responsibility toward unborn future generations.",
          keywords: ["borrowed", "stewardship", "unborn", "accountability", "intergenerational", "loan"],
        },
        {
          point: "Identifies emotive/figurative imagery (exhausted greenhouses, threatened flamingos, or «silent commodity») creating reader empathy.",
          keywords: ["empathy", "flamingos", "exhausted", "personification", "sensory", "silent commodity"],
        },
        {
          point: "Explains how pairing Murcia (Spain) and Atacama (Chile) exposes a shared systemic/transatlantic pattern rather than one isolated crisis.",
          keywords: ["transatlantic", "parallel", "pattern", "systemic", "isolated", "side by side"],
        },
        {
          point: "Traces how wealthy consumers' choices (winter produce, electric vehicles) offload ecological debt onto indigenous communities and fragile habitats.",
          keywords: ["wealthy", "consumers", "offload", "offloaded", "indigenous", "ecological costs", "debt"],
        },
        {
          point: "Examines the stark ethical antithesis between treating water as a market commodity versus a shared human right.",
          keywords: ["antithesis", "commodity", "human right", "dignity", "moral"],
        },
        {
          point: "Explains the concluding argument that technical/engineering solutions alone cannot avert conflict without ethical and rights-based reform.",
          keywords: ["engineering", "techno", "technical", "avert", "reform", "justice thesis"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant textual analysis or misunderstanding of the chronicle's central argument.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Superficial summary of water problems in Spain or Chile with little attention to figurative language or persuasive technique.",
          indicators: ["Describes facts literally without unpacking metaphors or ethical framing."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clear explanation of at least two persuasive features (e.g. metaphor and North-South link), though analysis of structural parallelism or antithesis remains partial.",
          indicators: ["Connects consumer demand to environmental harm with accurate textual grounding."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Perceptive, well-structured HL critical analysis weaving figurative language, transatlantic case-study parallelism, indigenous rights, and the commodity-vs-right antithesis into a cohesive evaluation of persuasion.",
          indicators: [
            "Unpacks both «borrowed water» and «silent commodity vs human right» sharply.",
            "Explicitly explains why the author rejects purely technical solutions.",
          ],
        },
      ],
      hints: [
        "Break the prompt into its three exact analytical pillars: (1) figurative language (*agua prestada*, *invernaderos exhaustos*, *mercancía silenciosa*), (2) the transatlantic parallel between Murcia and Atacama, and (3) the closing ethical contrast.",
        "Always explain the **effect on the reader** — e.g. linking electric cars in wealthy countries to Atacameño lagoons implicates the reader personally rather than keeping the crisis distant.",
        "For marks 5–6, explain WHY the final sentence rejects purely technological fixes unless water is treated as a shared human right.",
      ],
      commonError: "Merely translating or summarising the passage instead of analysing HOW metaphor, juxtaposition, and ethical antithesis persuade the reader.",
    },
  ],
};
