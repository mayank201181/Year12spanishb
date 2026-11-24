import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "2-experiencias",
  title: "Theme 2: Experiencias (Experiences)",
  strand: "Prescribed Themes 1–3",
  icon: "🧳",
  level: "SL",
  summary:
    "Explore leisure, sustainable tourism, Hispanic festivals, rites of passage, migration stories, and narrative past-tense mastery (SL & HL).",
  intro:
    "Prescribed Theme 2 (**Experiencias**) invites you to examine how journeys, traditions, and life-changing transitions shape who we become across the Spanish-speaking world. At IB Diploma level (B1 → B2/C1), you move well beyond IGCSE holiday descriptions (*fui a la playa y comí paella*) to debate **turismo sostenible frente a la masificación**, analyse the social values embedded in Hispanic **ritos de paso**, and narrate complex **historias de migración** with temporal precision using the *pretérito indefinido*, *imperfecto*, *pluscuamperfecto*, and (at HL) the *imperfecto de subjuntivo*.",
  guide: [
    {
      id: "ocio-viajes-turismo",
      heading: "Ocio, vacaciones y turismo sostenible (Leisure, Travel & Sustainable Tourism)",
      level: "SL",
      discovery: {
        problem:
          "Read these two accounts of the same afternoon in Barcelona:\n\n1. *«Mientras caminábamos por las Ramblas, miles de turistas sacaban fotos y el calor era sofocante. De repente, vimos una manifestación de vecinos contra los pisos turísticos.»*\n2. *«Cuando viví en Mallorca, supe que el turismo masivo transformaba los barrios; antes no conocía a ningún residente desplazado, pero aquel verano conocí a tres familias.»*\n\nWhy do **caminábamos / sacaban / era / conocía** use the *imperfecto*, whereas **vimos / supe / conocí** use the *pretérito indefinido*? How does the meaning of *saber* and *conocer* shift?",
        idea:
          "The **imperfecto** paints the ongoing backdrop, scenery, and background states (*caminábamos, era, conocía* = ongoing walking, heat, previously knowing). The **pretérito indefinido** drops a sharp, completed camera-shutter event into that scene (*vimos* = we suddenly saw). Even more crucially, state verbs change nuance in the preterite: *conocía* = knew/was acquainted with, whereas **conoció** = met for the first time; *sabía* = knew as background knowledge, whereas **supo** = found out / realised at a specific moment.",
      },
      body: `### From Holiday Narratives to Sustainable Tourism Debates

In IB Spanish B Paper 1, Paper 2, and the Individual Oral (IO), travel and leisure are framed around **ethical, economic, and environmental tensions** across Spain and Latin America:

| Tourism Model | Spanish Lexis (B2–C1) | Hispanic Case Studies | Socio-Environmental Impact |
|---|---|---|---|
| **Turismo de masas / sol y playa** | *la masificación turística, la turistificación, la gentrificación, los pisos turísticos, la temporada alta, la turismofobia* | **Barcelona** (cruise limits, *tasa turística*, protest slogans *«Tourists go home»*), **Mallorca & Canarias** (housing crisis for locals) | Generates GDP and seasonal jobs (*empleo estacional*), but drives up rent (*encarecimiento del alquiler*), strains water supplies, and erodes neighbourhood identity (*pérdida de tejido vecinal*). |
| **Ecoturismo y turismo sostenible** | *la huella ecológica, la capacidad de carga, el turismo comunitario, el consumo de proximidad, la desestacionalización* | **Islas Galápagos (Ecuador)** (strict visitor quotas & park entry fee), **Machu Picchu (Perú)** (timed circuits & daily caps), **Costa Rica** (*certificación de sostenibilidad*) | Protects biodiversity (*biodiversidad*) and channels revenue to local communities (*economía local*), though higher costs can restrict access (*turismo elitista*). |
| **Intercambio cultural y viaje lento** | *la inmersión lingüística, el viaje lento (slow travel), el volunturismo, ampliar horizontes, romper estereotipos* | **Camino de Santiago (España)**, **Oaxaca (México)** indigenous artisan co-ops, **Patagonia (Argentina/Chile)** conservation trails | Deepens intercultural empathy (*empatía intercultural*) when travellers engage respectfully rather than treating local culture as mere scenery (*folclorización*). |

### Narrative Past Tenses: Pretérito Indefinido vs Imperfecto

Think of a Spanish narrative like a **theatre stage**:

- **El pretérito imperfecto** sets the **stage, atmosphere, routines, and ongoing actions** (time, weather, age, descriptions, habits with *solía + infinitivo*): *«Hacía un calor húmedo, los guías explicaban la ruta y las tortugas descansaban en la arena.»*
- **El pretérito indefinido** drives the **plot forward** with bounded, completed actions, sudden interruptions, or a completed sequence (*primero..., luego..., finalmente...*): *«El barco atracó a las ocho, desembarcamos en silencio y el guardaparque nos advirtió sobre la distancia mínima.»*

#### High-Frequency Meaning Shifts (Post-IGCSE Essential!)

| Infinitive | Imperfecto (Ongoing State) | Pretérito Indefinido (Point of Change / Outcome) |
|---|---|---|
| **saber** | *sabía* — knew (ongoing knowledge) | *supo* — found out / learned |
| **conocer** | *conocía* — knew / was familiar with | *conoció* — met for the first time |
| **poder** | *podía* — was able to (general capability) | *pudo* (managed to) / *no pudo* (failed to) |
| **querer** | *quería* — wanted to (desire/intention) | *quiso* (tried to) / *no quiso* (refused to) |
| **tener** | *tenía* — had / possessed | *tuvo* — received / experienced (e.g., *tuvo un percance*) |`,
      diagram: `<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual timeline contrasting Spanish imperfecto as a continuous wavy backdrop and pretérito indefinido as discrete completed events">
  <rect x="8" y="8" width="664" height="234" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="340" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">El escenario narrativo: Imperfecto (fondo) frente a Indefinido (acción puntual)</text>
  <line x1="48" y1="168" x2="626" y2="168" stroke="#64748b" stroke-width="2"/>
  <polygon points="626,162 640,168 626,174" fill="#64748b"/>
  <text x="58" y="192" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">PASADO</text>
  <text x="586" y="192" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">PRESENTE</text>
  <path d="M 65 112 Q 95 92, 125 112 T 185 112 T 245 112 T 305 112 T 365 112 T 425 112 T 485 112 T 545 112" fill="none" stroke="#0284c7" stroke-width="3.5" stroke-dasharray="7 4"/>
  <rect x="70" y="52" width="248" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
  <text x="194" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1">IMPERFECTO (fondo / proceso)</text>
  <text x="194" y="87" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#0c4a6e">«Mientras recorríamos Machu Picchu, lloviznaba...»</text>
  <line x1="255" y1="112" x2="255" y2="168" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="255" cy="168" r="7" fill="#dc2626"/>
  <line x1="435" y1="112" x2="435" y2="168" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="435" cy="168" r="7" fill="#dc2626"/>
  <rect x="348" y="52" width="276" height="44" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <text x="486" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#b91c1c">INDEFINIDO (evento acabado / interrupción)</text>
  <text x="486" y="87" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">«...cerraron el sendero (1) y conocimos a un guía (2).»</text>
  <text x="255" y="214" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">1. cerraron</text>
  <text x="255" y="229" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">(interrupción súbita)</text>
  <text x="435" y="214" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">2. conocimos</text>
  <text x="435" y="229" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">(encuentro puntual)</text>
</svg>`,
      diagramCaption:
        "Use the dashed wavy line (*imperfecto*) for ongoing setting and background states, and sharp vertical pins (*pretérito indefinido*) for completed turning points.",
      workedExamples: [
        {
          title: "Choosing Imperfecto vs Indefinido in a Travel Blog",
          problem:
            "Complete the sentence from a travel blog about Mallorca with the exact past tense of the verbs in brackets:\n*«Cuando (nosotros, llegar) _____ al pueblo costero, las calles (estar) _____ repletas de maletas y el hotel no (querer) _____ reducir el uso de plástico.»*",
          steps: [
            "Identify the bounded entry action: **llegar** happens at a single moment → *pretérito indefinido*: **llegamos**.",
            "Identify the ongoing visual description already in progress upon arrival: **estar** describes the scene → *imperfecto*: **estaban**.",
            "Check the meaning shift on **no querer**: did the hotel simply feel reluctant, or did it actively refuse? Refusing to reduce plastic is a completed refusal → *pretérito indefinido*: **quiso** (*no quiso* = refused).",
          ],
          answer: "**llegamos**, **estaban**, **quiso**",
          yourTurn: {
            question:
              "Complete with the exact 3rd-person singular past form of **saber** to mean *'found out'*: *«Aquel verano, la alcaldesa _____ que el alquiler había subido un treinta por ciento.»*",
            answer: { type: "text", accept: ["supo"] },
            solution:
              "Finding out at a specific moment (*aquel verano*) triggers the *pretérito indefinido* of *saber*: **supo** (*sabía* would mean she already knew beforehand).",
          },
        },
        {
          title: "Upgrading an IGCSE Tourism Paragraph to IB Band 10–12",
          problem:
            "Upgrade this IGCSE-level sentence for an IB Paper 1 *artículo*: *«El turismo es bueno porque da dinero, pero hay demasiada gente en Barcelona y es caro vivir allí.»*",
          steps: [
            "Replace generic adjectives (*bueno, caro*) with Theme 2 precision lexis: *motor económico, masificación turística, encarecimiento de la vivienda*.",
            "Introduce a concessive Band 10–12 linker (*si bien es cierto que...*, *no obstante...*) to balance economic gains against social costs.",
            "Anchor the claim in a concrete Hispanophone example (Barcelona or Palma de Mallorca) to demonstrate international-mindedness.",
          ],
          answer:
            "*«Si bien es cierto que el sector turístico constituye un motor económico vital para ciudades como Barcelona, la masificación descontrolada ha provocado un grave encarecimiento de la vivienda y el desplazamiento del vecindario local.»*",
        },
      ],
      keyPoints: [
        "Contrast **turismo de masas** (*masificación, gentrificación, estacionalidad*) with **turismo sostenible / ecoturismo** (*capacidad de carga, economía local, huella ecológica*).",
        "Use **imperfecto** for ongoing scenes, weather, age, and habitual routines (*solía + infinitivo*); use **pretérito indefinido** for completed plot events and interruptions.",
        "Master the meaning-change quartet in the preterite: **supo** (found out), **conoció** (met), **pudo / no pudo** (managed / failed), **quiso / no quiso** (tried / refused).",
        "Cite real Hispanic destinations (**Barcelona, Mallorca, Islas Galápagos, Machu Picchu, Costa Rica**) in Paper 1 and IO answers for immediate cultural credibility.",
      ],
      whyItWorks:
        "In Spanish, past tenses encode **aspect** (whether the speaker views an event as an open ongoing interior or a closed completed whole), not merely distance in time. Separating stage (*imperfecto*) from plot (*indefinido*) lets you control pace, suspense, and cause-and-effect in any IB text type.",
      strategies: [
        "**The Camera Test:** Ask yourself whether the verb is a still photograph/panning backdrop (*imperfecto*) or a completed action that advances the timeline (*indefinido*).",
        "**Balanced Evaluation in Paper 1:** Always weigh economic benefits (*divisas, empleo*) against social/ecological limits (*capacidad de carga, gentrificación*) before proposing concrete measures (*tasa turística, desestacionalización*).",
      ],
      thinkDeeper:
        "When local residents in Mallorca or Oaxaca protest against mass tourism, are they rejecting tourists themselves (*turismofobia*), or critiquing an unregulated economic model? How does word choice (*visitante* vs *turista*, *turismofobia* vs *defensa del derecho a la vivienda*) reveal editorial bias in a Paper 2 Reading article?",
    },
    {
      id: "costumbres-tradiciones-ritos",
      heading: "Costumbres, tradiciones y ritos de paso (Customs, Traditions & Rites of Passage)",
      level: "SL",
      discovery: {
        problem:
          "Compare two Hispanic cultural practices:\n\n- **El Día de los Muertos (México):** Families build colourful *altares* (*ofrendas*) with *cempasúchil* marigolds, *pan de muerto*, photos, and favourite foods to welcome departed loved ones back with music and humour.\n- **La sobremesa (Spain & Latin America):** After finishing a shared meal, nobody rushes for the bill; conversation stretches for an hour or more over coffee or tea.\n\nWhy do IB examiners warn candidates against calling Día de los Muertos *«el Halloween mexicano»* or translating *sobremesa* merely as *«talking after lunch»*?",
        idea:
          "Superficial translations erase **cultural values** (*valores culturales*). Día de los Muertos fuses Indigenous Mesoamerican cosmology with Catholic All Souls' traditions to celebrate **collective memory and continuity**—not horror or trick-or-treating. Likewise, *la sobremesa* encodes a **polychronic, relational view of time** where human connection takes priority over clock efficiency.",
      },
      body: `### Hispanic Festivals, Everyday Customs & Rites of Passage

In IB Spanish B, traditions are never just colourful trivia—you are assessed on your ability to analyse **what a tradition reveals about community values, identity, and tension between preservation and modernisation**.

| Tradition / Rite | Region | Core Cultural Features | Deeper Values & IB Debate Angle |
|---|---|---|---|
| **Día de los Muertos** (1–2 Nov) | México (esp. Oaxaca, Michoacán) & Mesoamerica | *Ofrendas / altares, flor de cempasúchil, calaveras literarias, papel picado, pan de muerto, velas* | **Intergenerational memory** (*memoria colectiva*), joyful acceptance of mortality. Debate: UNESCO Intangible Cultural Heritage vs Hollywood/commercial appropriation (*mercantilización*). |
| **La quinceañera** | México, Colombia, Perú, Caribe & US Latino diaspora | 15th-birthday rite of passage: *misa de acción de gracias*, formal dress, *vals* with father, *chambelanes*, *cambio de zapatillas* | **Transition to young adulthood** and family solidarity (*padrinos* share costs). Debate: gender norms and financial pressure (*endeudamiento*) vs feminist/modern reinterpretations (e.g. travel instead of a ball). |
| **Las Fallas** (15–19 Mar) | Valencia (España) | Giant satirical papier-mâché sculptures (*ninots*), fireworks (*mascletà*), *ofrenda de flores*, final burning (*la Cremà*) | **Civic satire** (*sátira social y política*), neighbourhood craft guilds (*comisiones falleras*), renewal through fire. Debate: environmental smoke/noise vs intangible heritage (*Patrimonio Inmaterial*). |
| **Semana Santa** | Andalucía (Sevilla, Málaga), Castilla, Antigua Guatemala | Religious brotherhoods (*cofradías*), floats (*pasos*), penitents (*nazarenos*), *saetas* (flamenco laments), sawdust carpets (*alfombras de aserrín* in Guatemala) | **Devotion, artistic heritage, and collective discipline**, even in increasingly secular societies. Debate: cultural identity vs religious belief; tourism saturation. |
| **La sobremesa** | Spain & Latin America | Unhurried post-meal conversation, debate, storytelling, sharing *café / mate / infusiones* | **Relational time** (*tiempo relacional*), family cohesion (*cohesión familiar*). Debate: threatened by smartphones (*pantallas*), fast-paced urban work schedules, and restaurant table-turnover pressure. |

### Describing Traditions with Stylistic Accuracy

To describe ancestral or habitual customs fluently in the past and present, master these high-value structures:

1. **Imperfecto for past customs:** *«Antiguamente, las familias **elaboraban** las alfombras a mano durante toda la madrugada.»*
2. **Solía + infinitivo (used to):** *«Mi abuela **solía preparar** pan de muerto con anís cada octubre.»* (Note: *soler* is only used in present *suelo* and imperfect *solía*, NEVER in the preterite!)
3. **Pasiva refleja / se impersonal (general custom):** *«En Valencia **se queman** los ninots la noche de San José»* (plural verb agrees with plural *los ninots*!) vs *«En México **se honra** a los difuntos con flores»* (singular impersonal *se*).
4. **Preservation vs modernisation framing:** *mantener viva una tradición, transmitir de generación en generación, el arraigo cultural* ↔ *la pérdida de autenticidad, la globalización cultural, adaptarse a los tiempos modernos*.`,
      diagram: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cultural triangle connecting Hispanic traditions to core values and the preservation versus modernisation tension">
  <rect x="8" y="8" width="664" height="244" rx="14" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="340" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#78350f">Cómo analizar una tradición en el Bachillerato Internacional (IB)</text>
  <rect x="215" y="50" width="250" height="48" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="340" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e">1. PRÁCTICA VISIBLE (Qué se hace)</text>
  <text x="340" y="87" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#78350f">Ofrendas · Ninots · Vals · Sobremesa</text>
  <line x1="270" y1="98" x2="175" y2="148" stroke="#b45309" stroke-width="2"/>
  <line x1="410" y1="98" x2="505" y2="148" stroke="#b45309" stroke-width="2"/>
  <line x1="295" y1="192" x2="385" y2="192" stroke="#b45309" stroke-width="2" stroke-dasharray="5 3"/>
  <rect x="30" y="148" width="265" height="84" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
  <text x="162" y="170" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#065f46">2. VALORES PROFUNDOS (Por qué importa)</text>
  <text x="162" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#064e3b">• Memoria colectiva y lazos familiares</text>
  <text x="162" y="207" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#064e3b">• Sátira cívica y sentido de pertenencia</text>
  <text x="162" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#064e3b">• Tiempo compartido frente a la prisa</text>
  <rect x="385" y="148" width="265" height="84" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="517" y="170" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#991b1b">3. TENSIÓN ACTUAL (Debate IB)</text>
  <text x="517" y="190" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Preservación vs. mercantilización</text>
  <text x="517" y="207" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Evolución de roles de género</text>
  <text x="517" y="224" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Impacto del turismo y las pantallas</text>
</svg>`,
      diagramCaption:
        "Top-band IB responses never stop at Layer 1 (description); they connect visible customs to underlying values (Layer 2) and contemporary tensions (Layer 3).",
      workedExamples: [
        {
          title: "Applying Pasiva Refleja & Soler to Cultural Descriptions",
          problem:
            "Correct the two grammatical errors in this candidate's sentence about Las Fallas:\n*«El año pasado, los artesanos solieron construir figuras satíricas, y cada marzo se quema cientos de ninots en Valencia.»*",
          steps: [
            "Check **solieron**: the verb *soler* (to be accustomed to) is defective and does NOT take the *pretérito indefinido*. For past habits use **solían** (imperfecto); for a single completed year (*el año pasado*), drop *soler* and use **construyeron**.",
            "Check **se quema cientos de ninots**: in a *pasiva refleja*, the verb must agree in number with the plural subject (*cientos de ninots*), so use **se queman**.",
          ],
          answer:
            "*«Antiguamente, los artesanos **solían** construir figuras satíricas, y cada marzo **se queman** cientos de ninots en Valencia.»* (Or for last year alone: *«El año pasado, los artesanos **construyeron**...»*)",
          yourTurn: {
            question:
              "Complete with the correct present-tense *pasiva refleja* form of **celebrar**: *«En muchos países hispanoamericanos, _____ (celebrar) las quinceañeras con música, baile y una reunión familiar.»*",
            answer: { type: "text", accept: ["se celebran"] },
            solution:
              "Because the passive subject *las quinceañeras* is plural, the *pasiva refleja* takes the 3rd-person plural verb: **se celebran**.",
          },
        },
        {
          title: "Intercultural Comparison for the Individual Oral (IO)",
          problem:
            "Draft a 3-sentence comparison between *Día de los Muertos* and a festival from your own or another culture, avoiding stereotypes.",
          steps: [
            "Open with a comparative connector (*A diferencia de...*, *Mientras que...*) identifying both traditions clearly.",
            "Compare their underlying attitude toward family or memory rather than only external decorations.",
            "Conclude with a nuance about modernisation (*sin embargo, ambas celebraciones afrontan hoy...*).",
          ],
          answer:
            "*«Mientras que el Día de los Muertos en México concibe el recuerdo de los difuntos como un reencuentro festivo lleno de color y gastronomía, el festival Qingming en Asia Oriental suele adoptar un tono más solemne de limpieza de tumbas y respeto silencioso. No obstante, ambas tradiciones comparten el valor esencial de la memoria intergeneracional y la gratitud hacia los antepasados. Hoy en día, sin embargo, las dos afrontan el reto de mantener su sentido auténtico ante el ritmo acelerado de la vida urbana y la influencia comercial.»*",
        },
      ],
      keyPoints: [
        "Always explain the **symbolic value** behind a custom (*ofrenda* = living bond with ancestors; *sobremesa* = relational time; *Fallas* = civic satire and renewal).",
        "Distinguish **soler** (only present *suele* / imperfect *solía*) from completed single-event past actions (*construyeron, celebraron*).",
        "Make the verb in **pasiva refleja** agree with its noun subject: *se prepara el pan de muerto* (sing.) vs *se encienden las velas* (pl.).",
        "Frame debates around **preservación cultural frente a la mercantilización / modernización** rather than simplistic 'tradition good, modern bad' binaries.",
      ],
      whyItWorks:
        "IB Language B assessment criteria explicitly reward **intercultural understanding** and **conceptual awareness**. Showing how a single festival reflects both deep heritage and living social debate immediately separates Band 10–12 analysis from tourist-brochure summaries.",
      strategies: [
        "**The 3-Layer IO Rule:** Whenever a photo or prompt shows a festival, spend 20% describing what you see, 40% explaining the Hispanic cultural value behind it, and 40% debating how young people reinterpret it today.",
        "**Avoid False Cultural Equivalents:** Never call *Día de los Muertos* 'Mexican Halloween' or *Semana Santa* 'Spanish carnival'—explicitly contrast them to show cultural nuance.",
      ],
      thinkDeeper:
        "When UNESCO declares a local festival *Patrimonio Cultural Inmaterial de la Humanidad* (such as Día de los Muertos in 2008 or Las Fallas in 2016), does international fame protect the community's heritage or risk turning a living rite into a spectacle staged for tourists?",
    },
    {
      id: "historias-vida-migracion",
      heading: "Historias de vida y migración (Life Stories & Migration)",
      level: "SL",
      discovery: {
        problem:
          "Put these three events from Lucía's migration diary in exact chronological order (1st → 2nd → 3rd):\n\n*«Cuando Lucía **llegó** a Madrid en 2021, ya **había estudiado** ingeniería en Bogotá durante cinco años, pero al principio **trabajaba** en una cafetería mientras homologaba su título.»*\n\nWhich verb form marks the event that happened **before** another past event?",
        idea:
          "1st: **había estudiado** (*pretérito pluscuamperfecto* — completed *before* her arrival in Madrid). 2nd: **llegó** (*pretérito indefinido* — the narrative anchor point). 3rd: **trabajaba** (*imperfecto* — the ongoing situation unfolding after she arrived while awaiting degree recognition). The **pluscuamperfecto** (`había + participio`) is Spanish's time machine for the 'past before the past'.",
      },
      body: `### Understanding Migration Across the Hispanophone World

Migration is a defining experience across Spanish-speaking societies—both **emigration** (*emigración*) and **immigration** (*inmigración*), as well as internal rural-to-urban migration (*éxodo rural*).

| Dimension | Essential Theme 2 Lexis (B2–C1) | Real-World Hispanic Contexts |
|---|---|---|
| **Factores de expulsión (Push)** | *la precariedad laboral, la crisis económica, la inestabilidad política, la falta de oportunidades, la fuga de cerebros (brain drain)* | Youth emigration from Spain after the 2008 crisis; Venezuelan, Central American, and Andean emigration seeking safety and economic stability. |
| **Factores de atracción (Pull)** | *la estabilidad laboral, la reagrupación familiar, el acceso a la educación superior, la afinidad lingüística y cultural* | Latin American professionals and families settling in Madrid, Barcelona, Miami, or Buenos Aires; circular migration for seasonal agriculture and care work. |
| **Impacto económico y social** | *las remesas (remittances), la homologación de títulos (degree recognition), el arraigo / desarraigo, la integración frente a la asimilación* | Remittances represent a major share of household income in Mexico, El Salvador, Guatemala, Honduras, and Colombia, funding education and housing back home. |
| **Dimensión emocional** | *el choque cultural, la nostalgia, la morriña (Galician/Spanish homesickness), la resiliencia, la nostalgia del idioma, echar de menos* | Balancing gratitude for new opportunities with grief over missed family milestones and adapting to unfamiliar dialects, bureaucracy (*trámites*), or stereotypes. |

### Sequencing Complex Narratives: El Pretérito Pluscuamperfecto

To narrate life stories at B2–C1 level, you need three coordinated past layers:

1. **Pluscuamperfecto (Past before the past):** \`imperfecto de haber (había, habías, había, habíamos, habíais, habían) + participio pasado\`.
   - Regular participles: *-ar → -ado* (*trabajado*), *-er/-ir → -ido* (*vivido*).
   - **Essential irregular participles:** *abrir → **abierto**, cubrir → **cubierto**, decir → **dicho**, descubrir → **descubierto**, escribir → **escrito**, hacer → **hecho**, morir → **muerto**, poner → **puesto**, resolver → **resuelto**, romper → **roto**, ver → **visto**, volver → **vuelto***.
2. **Temporal connectors that unlock Band 10–12 cohesion:**
   - Earlier past: *antes de llegar, hasta aquel momento, previamente, ya había...*
   - Immediate succession: *en cuanto + indefinido* (as soon as), *tan pronto como*, *nada más + infinitivo* (*nada más aterrizar*).
   - Simultaneous backdrop: *mientras tanto, por aquel entonces, a medida que* (as / gradually).
   - Later resolution: *al cabo de tres años* (after three years), *con el paso del tiempo, finalmente*.`,
      diagram: `<svg viewBox="0 0 680 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-layer Spanish past timeline showing pluscuamperfecto before preterito indefinido and imperfecto in a migration narrative">
  <rect x="8" y="8" width="664" height="239" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="340" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Línea temporal migratoria: Pluscuamperfecto → Indefinido → Imperfecto</text>
  <line x1="45" y1="158" x2="625" y2="158" stroke="#475569" stroke-width="2.5"/>
  <polygon points="625,152 640,158 625,164" fill="#475569"/>
  <circle cx="130" cy="158" r="9" fill="#7c3aed"/>
  <rect x="28" y="54" width="204" height="74" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="130" y="74" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#5b21b6">1. PLUSCUAMPERFECTO</text>
  <text x="130" y="91" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#4c1d95">(Pasado anterior al pasado)</text>
  <text x="130" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#6d28d9">«Ya había ahorrado y escrito</text>
  <text x="130" y="123" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#6d28d9">a sus primos en Sevilla...»</text>
  <line x1="130" y1="128" x2="130" y2="149" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="345" cy="158" r="9" fill="#dc2626"/>
  <rect x="245" y="54" width="198" height="74" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="344" y="74" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#991b1b">2. INDEFINIDO</text>
  <text x="344" y="91" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">(Hito puntual / llegada)</text>
  <text x="344" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#b91c1c">«...cuando embarcó rumbo</text>
  <text x="344" y="123" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#b91c1c">a España en otoño.»</text>
  <line x1="345" y1="128" x2="345" y2="149" stroke="#dc2626" stroke-width="2"/>
  <path d="M 455 158 Q 480 144, 505 158 T 555 158 T 605 158" fill="none" stroke="#0284c7" stroke-width="3.5"/>
  <rect x="456" y="54" width="198" height="74" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="555" y="74" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1">3. IMPERFECTO</text>
  <text x="555" y="91" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#0c4a6e">(Adaptación continua)</text>
  <text x="555" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0369a1">«Al principio echaba de menos</text>
  <text x="555" y="123" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0369a1">el acento de su barrio.»</text>
  <line x1="555" y1="128" x2="555" y2="148" stroke="#0284c7" stroke-width="2"/>
  <text x="130" y="192" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#5b21b6">Antes (T − 2)</text>
  <text x="345" y="192" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b">Punto clave (T − 1)</text>
  <text x="555" y="192" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1">Proceso posterior</text>
  <text x="340" y="226" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#334155">Regla de oro: nunca separes «había» y el participio con adverbios (escribe «ya había vuelto», no «había ya vuelto»).</text>
</svg>`,
      diagramCaption:
        "Combine *pluscuamperfecto* (prior preparation), *indefinido* (decisive milestone), and *imperfecto* (ongoing emotional adjustment) to craft sophisticated life narratives.",
      workedExamples: [
        {
          title: "Sequencing Past Events with Irregular Participles",
          problem:
            "Complete this excerpt from an interview with a Peruvian nurse in Madrid:\n*«Cuando me concedieron el permiso de residencia, ya (yo, hacer) _____ todos los trámites y (volver) _____ a estudiar el temario español, porque nunca antes (ver) _____ un sistema sanitario tan diferente.»*",
          steps: [
            "All three actions occurred *prior* to receiving the residence permit (*cuando me concedieron*) → use **pretérito pluscuamperfecto** (`había + participio`).",
            "Check irregular participles: *hacer → **hecho***, *volver → **vuelto***, *ver → **visto***.",
            "Remember the pronoun/adverb rule: place *ya* and *nunca antes* BEFORE *había*, never between *había* and the participle.",
          ],
          answer: "**había hecho**, **había vuelto**, **había visto**",
          yourTurn: {
            question:
              "Complete with the 3rd-person plural *pretérito pluscuamperfecto* of **escribir**: *«Antes de emigrar a Buenos Aires, mis abuelos ya _____ varias cartas a su tío.»*",
            answer: { type: "text", accept: ["habían escrito"] },
            solution:
              "*Escribir* has the irregular participle **escrito**; with *mis abuelos* (ellos), the *pluscuamperfecto* is **habían escrito**.",
          },
        },
        {
          title: "Distinguishing Asimilación vs Integración in an IB Essay",
          problem:
            "Explain the conceptual difference between *asimilación* and *integración* in two authentic Spanish sentences suitable for a Paper 1 *discurso* or *editorial*.",
          steps: [
            "Define *asimilación* as one-way erasure of original cultural traits to fit the host society.",
            "Contrast it with *integración* (two-way participation where newcomers contribute to civic life while preserving heritage).",
            "Link with a contrastive discourse marker (*mientras que*, *en cambio*).",
          ],
          answer:
            "*«Mientras que la asimilación exige que la persona migrante renuncie a su lengua y a sus raíces para mimetizarse con la sociedad receptora, la verdadera integración supone un proceso bidireccional basado en el respeto mutuo. De este modo, las comunidades migrantes participan plenamente en la vida cívica sin verse obligadas a borrar su memoria cultural.»*",
        },
      ],
      keyPoints: [
        "Distinguish **emigración** (leaving a country) from **inmigración** (entering a country) and **migración** (the overall human movement).",
        "Use **pluscuamperfecto** (`había + participio`) for actions completed *before* another past event, keeping *ya/todavía no/nunca* BEFORE *había*.",
        "Memorise the irregular past participles (**hecho, dicho, escrito, visto, vuelto, puesto, abierto, roto, descubierto, muerto, resuelto**).",
        "Avoid reductive stereotypes: highlight agency, **resiliencia**, **remesas**, **homologación de títulos**, and the contrast between **integración** and **asimilación**.",
      ],
      whyItWorks:
        "Real life stories rarely unfold in a flat straight line (*fui... hice... volví*). By deploying the *pluscuamperfecto* alongside temporal connectors (*al cabo de, por aquel entonces, nada más llegar*), you mirror how educated native speakers weave flashbacks and causality together.",
      strategies: [
        "**Check the Anchor Verb:** Whenever you see *antes de que*, *ya*, or *hasta aquel día* in a past narration, verify whether the action predates the main preterite anchor—if so, upgrade to *pluscuamperfecto*.",
        "**Diary vs Article Register:** In a *diario personal* about migration, pair first-person emotion (*sentía una punzada de morriña*) with intimate address; in an *artículo* or *informe*, shift to impersonal/collective analysis (*las cifras de remesas evidencian...*).",
      ],
      thinkDeeper:
        "How does the term **fuga de cerebros** (brain drain) differ in perspective from **circulación de talento** (talent circulation)? Whose viewpoint does each phrase centre—the country of origin or the host economy?",
    },
    {
      id: "memoria-identidad-migratoria-hl",
      heading: "[HL] Analysing Personal Testimony, Empathy & Cultural Hybridity",
      level: "HL",
      discovery: {
        problem:
          "Read two sentences from a second-generation Colombian-Spanish writer's memoir:\n\n1. *«Me sorprendió que mis padres nunca **se quejaran** del frío ni de las jornadas interminables.»*\n2. *«Hablábamos español en casa y catalán en la escuela, como si **viviéramos** simultáneamente en dos mundos distintos.»*\n\nWhy are **se quejaran** and **viviéramos** in the *imperfecto de subjuntivo* rather than the present subjunctive (*se quejen*) or indicative (*vivíamos*)?",
        idea:
          "In Sentence 1, the main clause expresses past emotion (*me sorprendió que*), so Spanish **sequence of tenses** (*concordancia temporal*) shifts the subjunctive into the **imperfecto de subjuntivo** (*se quejaran / se quejasen*). In Sentence 2, **como si** (as if) expresses a contrary-to-fact metaphor and ALWAYS triggers the **imperfecto** or **pluscuamperfecto de subjuntivo** (*como si viviéramos / hubiéramos vivido*).",
      },
      body: `### [HL] Testimony, Perspective, Bias & Cultural Hybridity

At Higher Level, Paper 1 (450–600 words), Paper 2 Reading/Listening, and the HL Individual Oral require you to move beyond *what happened* to **how personal testimony constructs memory, empathy, and identity**:

- **La identidad híbrida y el «tercer espacio»:** Second-generation migrants (*la segunda generación*) often describe feeling *«ni de aquí ni de allá»*—or conversely, forging an enriched **identidad híbrida** that blends accents, cuisines, values, and loyalties across borders.
- **Analysing Testimony & Voice:** When reading an interview (*entrevista*), memoir (*memorias*), or podcast transcript in Paper 2 HL, ask:
  1. **Tone & stance (*tono y postura*):** Is the narrator nostalgic (*nostálgico*), ironic (*irónico*), defiant (*reivindicativo*), or detached (*distanciado*)?
  2. **Perspective & omission (*sesgo y perspectiva*):** Whose voice is foregrounded—the migrant, the local employer, the policymaker, or the child left behind? What lexical choices signal bias (*avalancha* vs *flujo migratorio*; *ilegal* vs *en situación irregular*)?
  3. **Rhetorical appeals:** Does the speaker appeal to lived emotion (*testimonio en primera persona*) or institutional data (*cifras oficiales*)?

### [HL] Imperfecto de Subjuntivo in Past Reflection

How to form the **imperfecto de subjuntivo** with zero guesswork:
1. Take the **3rd-person plural *pretérito indefinido*** (*ellos*): *hablaron, tuvieron, pudieron, hicieron, supieron, fueron, dijeron, durmieron*.
2. Drop **-ron**: *habla-, tuvie-, pudie-, hicie-, supie-, fue-, dije-, durmie-*.
3. Add the **-ra** (or **-se**) endings: **-ra, -ras, -ra, -´ramos, -rais, -ran** (remember the tilde on *nosotros*: *habl**á**ramos, tuvi**é**ramos, pudi**é**ramos, fu**é**ramos*!).

| Trigger Category | Past-Time / Hypothetical Frame | Authentic HL Example |
|---|---|---|
| **Past Emotion / Evaluation** | *Me sorprendió / emocionó / entristeció que...*, *Era imprescindible / injusto que...* | *«Me conmovió que mi abuela **conservara** las cartas durante cuarenta años.»* |
| **Past Doubt / Denial** | *Dudaba que...*, *No creía que...*, *Nadie imaginaba que...* | *«Al llegar, nadie creía que los jóvenes **pudieran** fundar una cooperativa cultural.»* |
| **Contrary-to-Fact Metaphor** | *como si + imperfecto / pluscuamperfecto de subjuntivo* | *«Recordaba su pueblo natal como si nunca **se hubiera marchado** de allí.»* |
| **Unfulfilled Past Wish / Regret** | *Ojalá + imperfecto / pluscuamperfecto de subjuntivo* | *«Ojalá las autoridades **hubieran reconocido** antes el valor de los títulos extranjeros.»* |
| **Concessive Nuance** | *aunque + imperfecto de subjuntivo* (hypothetical / non-factual concession) | *«Aunque el viaje **resultara** arduo, nunca renunciaron a mantener su lengua materna.»* |`,
      diagram: `<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-step derivation of the Spanish imperfecto de subjuntivo from the ellos preterite stem and its four HL reflection triggers">
  <rect x="8" y="8" width="664" height="234" rx="14" fill="#eef2ff" stroke="#818cf8" stroke-width="1.5"/>
  <text x="340" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#312e81">[HL] Formación y usos del Imperfecto de Subjuntivo en la memoria</text>
  <rect x="28" y="52" width="185" height="62" rx="9" fill="#ffffff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="120" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#4338ca">Paso 1: Ellos Indefinido</text>
  <text x="120" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e1b4b">tuvieron · pudieron · fueron</text>
  <text x="120" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#4f46e5">conservaron · dijeron</text>
  <polygon points="220,83 236,75 236,91" fill="#6366f1" transform="rotate(180 228 83)"/>
  <rect x="246" y="52" width="182" height="62" rx="9" fill="#ffffff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="337" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#4338ca">Paso 2: Quitar «-ron»</text>
  <text x="337" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e1b4b">tuvie- · pudie- · fue-</text>
  <text x="337" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#4f46e5">conserva- · dije-</text>
  <polygon points="435,83 451,75 451,91" fill="#6366f1" transform="rotate(180 443 83)"/>
  <rect x="461" y="52" width="191" height="62" rx="9" fill="#4338ca" stroke="#312e81" stroke-width="1.5"/>
  <text x="556" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff">Paso 3: + -ra / -se</text>
  <text x="556" y="91" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#e0e7ff">-ra, -ras, -ra, -´ramos, -ran</text>
  <text x="556" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#c7d2fe">ej. tuviéramos · pudieran</text>
  <rect x="28" y="134" width="302" height="92" rx="10" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.2"/>
  <text x="179" y="154" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#312e81">Disparadores en pasado (Concordancia)</text>
  <text x="42" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">• Emoción: Me sorprendió que <tspan font-weight="700" fill="#4338ca">mantuvieran</tspan>...</text>
  <text x="42" y="194" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">• Duda: No creía que <tspan font-weight="700" fill="#4338ca">fuera</tspan> tan difícil...</text>
  <text x="42" y="213" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">• Valoración: Era injusto que <tspan font-weight="700" fill="#4338ca">tuvieran</tspan> que...</text>
  <rect x="350" y="134" width="302" height="92" rx="10" fill="#ffffff" stroke="#a5b4fc" stroke-width="1.2"/>
  <text x="501" y="154" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#312e81">Irrealidad y reflexión crítica (HL)</text>
  <text x="364" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">• Metáfora: como si <tspan font-weight="700" fill="#4338ca">viviéramos</tspan> entre dos orillas</text>
  <text x="364" y="194" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">• Deseo/pena: Ojalá <tspan font-weight="700" fill="#4338ca">hubiera podido</tspan> despedirme</text>
  <text x="364" y="213" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">• Hipótesis: Si <tspan font-weight="700" fill="#4338ca">regresaran</tspan>, todo habría cambiado</text>
</svg>`,
      diagramCaption:
        "Every single irregular stem in the *imperfecto de subjuntivo* comes automatically from the *ellos* form of the *pretérito indefinido*—there are zero extra exceptions.",
      workedExamples: [
        {
          title: "[HL] Sequence of Tenses in a Migration Memoir",
          problem:
            "Complete the testimony with the correct *imperfecto de subjuntivo* forms:\n*«A mis abuelos les dolió mucho que nosotros no (poder) _____ volver para las fiestas, aunque hablaban de su aldea gallega como si todavía (vivir) _____ allí.»*",
          steps: [
            "Identify the past emotion trigger *les dolió mucho que* → requires *imperfecto de subjuntivo* for *nosotros*.",
            "Derive from *ellos* preterite of *poder* (*pudieron*) → drop *-ron* → *pudie-* + *-´ramos* = **pudiéramos** (or **pudiésemos**; don't forget the tilde on *é*!).",
            "Identify *como si* (always triggers *imperfecto* or *pluscuamperfecto de subjuntivo*) → *vivieron* → *vivie-* + *-ran* = **vivieran** (or **viviesen**).",
          ],
          answer: "**pudiéramos** (or *pudiésemos*), **vivieran** (or *viviesen*)",
          yourTurn: {
            question:
              "[HL] Complete with the 3rd-person plural *imperfecto de subjuntivo* of **tener**: *«Era sorprendente que aquellos inmigrantes _____ tanta resiliencia frente al desarraigo.»*",
            answer: { type: "text", accept: ["tuvieran", "tuviesen"] },
            solution:
              "*Ellos* preterite of *tener* is *tuvieron* → drop *-ron* → add *-ran* or *-sen*: **tuvieran** / **tuviesen**.",
          },
        },
        {
          title: "[HL] Detecting Media Framing & Bias in Migration Texts",
          problem:
            "A newspaper editorial describes newcomers as *«una oleada masiva que desborda los servicios locales»*, while a personal interview uses *«familias desplazadas que buscan reconstruir su proyecto vital»*. Analyse the lexical contrast in Spanish.",
          steps: [
            "Identify the dehumanising natural-disaster metaphor (*oleada, desborda*) in the editorial, which frames migration as a threat.",
            "Contrast it with the humanising, agency-centred lexis (*familias, proyecto vital*) in the personal testimony.",
            "Conclude with an HL metalinguistic takeaway on how register and metaphor shape reader empathy.",
          ],
          answer:
            "*«Mientras el editorial recurre a metáforas propias de una catástrofe natural (“oleada”, “desborda”) que deshumanizan al colectivo migrante y generan alarma, el testimonio personal emplea un léxico humanizador (“familias”, “proyecto vital”) que subraya su dignidad y agencia. Este contraste demuestra cómo la selección léxica condiciona la empatía del lector.»*",
        },
      ],
      keyPoints: [
        "Every *imperfecto de subjuntivo* stem derives strictly from the **ellos** form of the *pretérito indefinido* minus *-ron* (**tuvieran, pudieran, hicieran, supieran, fueran, dijeran**).",
        "Never omit the accent mark on the *nosotros* form of the imperfect subjunctive (**habláramos, tuviéramos, pudiéramos, fuéramos**).",
        "**Como si** ALWAYS takes *imperfecto* or *pluscuamperfecto de subjuntivo*—never indicative or present subjunctive.",
        "Evaluate personal testimony critically: examine **tono, perspectiva, metáforas deshumanizadoras vs humanizadoras**, and the concept of **identidad híbrida**.",
      ],
      whyItWorks:
        "Mastery of past-time subjunctive allows HL candidates to evaluate *past* experiences with nuance—expressing empathy, regret, counterfactual reflection, and critical distance—which directly unlocks Band 10–12 on Paper 1 Criterion A (Language) and the HL Individual Oral.",
      strategies: [
        "**Check the Tense of the Trigger:** Present trigger (*me sorprende que*) → present subjunctive (*mantengan*); Past/Conditional trigger (*me sorprendió / sorprendería que*) → imperfect subjunctive (*mantuvieran*).",
        "**Two-Sided Empathy:** In HL essays and IO discussions on migration, pair personal human stories (*testimonios*) with structural analysis (*políticas de acogida, homologación laboral*) to avoid sentimentality.",
      ],
      thinkDeeper:
        "Can a translated or edited migration interview ever remain completely neutral? What is gained—and what might be lost—when a journalist polishes a speaker's regional dialect or hesitant syntax before publication?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "la masificación turística / la turistificación",
        back: "Overtourism / touristification — when excessive visitor numbers transform residential neighbourhoods and displace locals.",
      },
      {
        front: "la capacidad de carga",
        back: "Carrying capacity — the maximum number of visitors a fragile site (e.g. Galápagos or Machu Picchu) can sustain without degradation.",
      },
      {
        front: "la desestacionalización",
        back: "Spreading tourism beyond peak season (*temporada alta*) into off-peak months (*temporada baja*) to stabilise local jobs and reduce crowding.",
      },
      {
        front: "supo vs sabía (saber)",
        back: "*supo* (preterite) = found out / learned at a specific moment; *sabía* (imperfect) = knew as ongoing background knowledge.",
      },
      {
        front: "conoció vs conocía (conocer)",
        back: "*conoció* (preterite) = met for the first time; *conocía* (imperfect) = already knew / was acquainted with.",
      },
      {
        front: "no quiso vs no quería (querer)",
        back: "*no quiso* (preterite) = refused to; *no quería* (imperfect) = didn't want to (state of mind).",
      },
      {
        front: "la sobremesa",
        back: "The cherished Hispanic custom of lingering at the table after a meal for unhurried conversation, reflecting relational time and family cohesion.",
      },
      {
        front: "la ofrenda / el altar (Día de los Muertos)",
        back: "Elaborate home memorial adorned with *cempasúchil* marigolds, photos, candles, and favourite foods to honour departed loved ones in Mexico.",
      },
      {
        front: "la mercantilización cultural",
        back: "Cultural commodification — turning authentic local traditions into commercial products mainly for tourists or global brands.",
      },
      {
        front: "las remesas",
        back: "Remittances — money sent home by migrants abroad, a vital pillar of household income across Mexico, Central America, and the Andes.",
      },
      {
        front: "la homologación de títulos",
        back: "Official recognition of foreign university degrees or professional qualifications, a common bureaucratic hurdle for skilled migrants.",
      },
      {
        front: "el arraigo frente al desarraigo",
        back: "Rootedness / sense of belonging (*arraigo*) versus uprootedness / feeling cut off from one's homeland (*desarraigo*).",
      },
      {
        front: "el pretérito pluscuamperfecto (formation + irregular participles)",
        back: "`había/habías/había/habíamos/habían` + past participle. Key irregulars: *hecho, dicho, escrito, visto, vuelto, puesto, abierto, roto, descubierto*.",
      },
      {
        front: "[HL] la identidad híbrida",
        back: "Hybrid identity — a fluid cultural identity forged by migrants and second-generation youth who blend heritage and host-country languages and values.",
        level: "HL",
      },
      {
        front: "[HL] como si + imperfecto / pluscuamperfecto de subjuntivo",
        back: "'As if...' — ALWAYS triggers the imperfect or pluperfect subjunctive (*como si viviera allí / como si nunca hubiera partido*), never indicative.",
        level: "HL",
      },
      {
        front: "[HL] Concordancia temporal: Me sorprendió que + ...",
        back: "A past-tense subjunctive trigger (*me sorprendió / dudaba / era injusto que*) pulls the subordinate verb into the *imperfecto de subjuntivo* (*mantuvieran, pudieran*).",
        level: "HL",
      },
    ],
    mustKnow: [
      "**Imperfecto** sets the ongoing scene, habits, weather, and descriptions; **pretérito indefinido** records completed plot actions and sudden interruptions.",
      "Four verbs shift meaning sharply in the preterite: **supo** (found out), **conoció** (met), **pudo / no pudo** (managed / failed), **quiso / no quiso** (tried / refused).",
      "**Soler** ('to usually / used to') ONLY exists in present (*suelo*) and imperfect (*solía*)—never conjugate it in the preterite or future.",
      "In a **pasiva refleja**, the verb agrees with its noun subject: *se prepara el altar* (singular) vs *se queman los ninots* (plural).",
      "**Pluscuamperfecto** (`había + participio`) expresses an action completed *before* another past anchor; keep adverbs like *ya* or *nunca* before *había*.",
      "Sustainable tourism debates balance economic benefits (*divisas, empleo*) against **capacidad de carga**, **huella ecológica**, and **gentrificación**.",
      "Analyse Hispanic customs (**Día de los Muertos, quinceañera, Las Fallas, Semana Santa, sobremesa**) via visible ritual → underlying cultural value → modernisation tension.",
      "Migration analysis separates **factores de expulsión** (push) from **factores de atracción** (pull) and distinguishes **integración** (mutual) from **asimilación** (one-way erasure).",
      "[HL] Every **imperfecto de subjuntivo** stem comes from the *ellos* preterite minus *-ron* + *-ra/-se*, with a mandatory accent on *nosotros* (*habláramos, tuviéramos*).",
      "[HL] Evaluate personal migration testimonies for **tono, sesgo léxico** (humanising vs alarmist metaphors), and **identidad híbrida**.",
    ],
    misconceptions: [
      {
        wrong: "Use the *imperfecto* for any past action that lasted a long time (e.g., *«Vivía cinco años en Perú»*).",
        right: "A completed, bounded time period—even five years or three centuries—takes the **pretérito indefinido** (*«Vivió cinco años en Perú»*). Use *imperfecto* only when viewing the action in progress with no stated endpoint.",
      },
      {
        wrong: "Día de los Muertos is simply the Mexican version of Halloween.",
        right: "Día de los Muertos originates in Mesoamerican ancestor reverence fused with Catholic All Souls' Day; it celebrates joyful **family memory** (*ofrendas, cempasúchil*) rather than fear or spooky costumes.",
      },
      {
        wrong: "Place *ya* or *nunca* between *había* and the past participle (*«había ya viajado»*).",
        right: "In Spanish compound tenses, NEVER split *haber* and the participle. Write *«ya había viajado»* or *«nunca había visto»*.",
      },
      {
        wrong: "Translate *'used to'* with the preterite of *soler* (*«solieron celebrar»*) or confuse *soler* with *usar*.",
        right: "Use **solían + infinitivo** (imperfect of *soler*) or simply the **imperfecto** (*celebraban*). *Usar* means 'to use a tool', never a past habit.",
      },
      {
        wrong: "Use *pasiva refleja* with a singular verb regardless of the noun (*«En Valencia se quema muchas fallas»*).",
        right: "When the grammatical subject is plural (*muchas fallas*), the verb must be plural: *«En Valencia **se queman** muchas fallas»*.",
      },
      {
        wrong: "[HL] Use the indicative or present subjunctive after *como si* (*«como si vive allí»* or *«como si viva allí»*).",
        right: "**Como si** ALWAYS requires the **imperfecto** or **pluscuamperfecto de subjuntivo**: *«como si **viviera** allí»* or *«como si nunca **hubiera partido**»*.",
        level: "HL",
      },
      {
        wrong: "[HL] Keep the present subjunctive after a past-tense trigger (*«Me sorprendió que puedan adaptarse»*).",
        right: "Past-tense emotion/doubt triggers require sequence of tenses into the **imperfecto de subjuntivo**: *«Me sorprendió que **pudieran** adaptarse»*.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing an IGCSE-style holiday recount (*«Fuimos al hotel, la comida era rica»*) instead of engaging with the Paper 1 prompt's conceptual issue (e.g., sustainable tourism or cultural exchange).",
      "Forgetting the written accent mark (**tilde**) on preterite 1st/3rd person singular (*llegué, viajó, nació, vivió*)—omitting it turns *habló* (he spoke) into *hablo* (I speak)!",
      "Mixing up **emigrar** (to leave one's homeland) and **inmigrar** (to arrive in a new country) in Paper 2 Reading justification answers.",
      "Overusing *el turismo* or *la gente* instead of precise B2–C1 nouns (*el sector turístico, los visitantes, el vecindario local, la población autóctona*).",
      "Describing a festival photo in the Individual Oral only at surface level (colours, clothes) without analysing the underlying Hispanic values or modern debates.",
      "Dropping the accent mark on the *nosotros* form of the imperfect subjunctive (*habl**á**ramos, tuvi**é**ramos, pudi**é**ramos*) in HL Paper 1 essays.",
      "Choosing an inappropriate text type in Paper 1—for instance, writing a formal *informe* when the prompt asks you to share personal reflections on a cultural exchange with peers (*blog* or *diario*).",
      "Translating 'to miss someone/home' literally as *perder* instead of the authentic **echar de menos** (Spain/general) or **extrañar** (Latin America).",
    ],
    mnemonics: [
      {
        topic: "Imperfecto vs Indefinido",
        device: "B-A-W-H vs C-I-S",
        explanation:
          "**Imperfecto** = **B**ackdrop, **A**ge/time, **W**eather/mood, **H**abits (*solía*). **Indefinido** = **C**ompleted bounds, **I**nterruptions, **S**equenced plot events.",
      },
      {
        topic: "Irregular Past Participles (Pluscuamperfecto)",
        device: "REVV MAC PHDD",
        explanation:
          "**R**oto (romper), **E**scrito (escribir), **V**isto (ver), **V**uelto (volver), **M**uerto (morir), **A**bierto (abrir), **C**ubierto (cubrir), **P**uesto (poner), **H**echo (hacer), **D**icho (decir), **D**escubierto (descubrir).",
      },
      {
        topic: "Analysing Any Hispanic Tradition (IO & Paper 1)",
        device: "R-V-T (Ritual → Valor → Tensión)",
        explanation:
          "Never stop at the **R**itual (what people do); explain the deeper **V**alor (community/memory) and the contemporary **T**ensión (modernisation, commercialisation, sustainability).",
      },
      {
        topic: "[HL] Imperfect Subjunctive Formation",
        device: "Ellos − ron + ra (y tilde en nosotros)",
        explanation:
          "Take the *ellos* preterite (*tuvieron*), slice off *-ron* (*tuvie-*), add *-ra/-ras/-ra/-´ramos/-ran* (*tuviera, tuviéramos*).",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Barcelona's Cruise & Short-Term Rental Curbs",
        detail:
          "Barcelona has raised its municipal tourist tax (*recargo turístico*), restricted cruise terminals near the city centre, and announced plans to phase out over 10,000 tourist-apartment licences (*pisos turísticos*) by 2028 to protect affordable housing for residents.",
        emoji: "🏙️",
      },
      {
        title: "Galápagos Islands Strict Carrying-Capacity Rules (Ecuador)",
        detail:
          "To protect endemic species like marine iguanas and giant tortoises, Ecuador enforces strict park quotas, certified naturalist guides, biosecurity bag inspections, and higher conservation entry fees for international visitors.",
        emoji: "🐢",
      },
      {
        title: "Machu Picchu Timed Circuits (Perú)",
        detail:
          "Peru's Ministry of Culture introduced capped daily tickets and fixed one-way walking circuits across the Inca citadel to prevent stone erosion while sustaining Cusco's local tourism economy.",
        emoji: "⛰️",
      },
      {
        title: "Las Fallas de Valencia & UNESCO Heritage (España)",
        detail:
          "Inscribed by UNESCO in 2016, Valencian neighbourhood associations (*comisiones falleras*) spend an entire year crafting satirical *ninots* before burning them in *la Cremà*, sparking annual debates on urban sustainability and artistic freedom.",
        emoji: "🔥",
      },
      {
        title: "Remittances & Economic Bridges in Latin America",
        detail:
          "According to World Bank and Inter-American Development Bank data, *remesas* sent by Latin American migrants exceed 60 billion USD annually to Mexico alone and over 20% of GDP in countries like El Salvador and Honduras.",
        emoji: "💸",
      },
      {
        title: "Oaxaca's Día de los Muertos & Community Authenticity",
        detail:
          "Global films like *Coco* boosted international travel to Oaxaca and Michoacán every November, prompting local families to balance pride in sharing their *ofrendas* with protecting intimate cemetery vigils (*veladas*) from intrusive photography.",
        emoji: "🌼",
      },
    ],
    videos: [
      {
        title: "Pretérito Indefinido vs Imperfecto en español — explicación completa B2",
        channel: "YouTube Search · Español B2",
        url: "https://www.youtube.com/results?search_query=preterito+indefinido+vs+imperfecto+espanol+B2",
      },
      {
        title: "Turismo sostenible y masificación turística en España y América Latina",
        channel: "YouTube Search · Documentales en español",
        url: "https://www.youtube.com/results?search_query=turismo+sostenible+masificacion+turistica+espana+latinoamerica",
      },
      {
        title: "Día de los Muertos, Las Fallas y tradiciones hispanas — significado cultural",
        channel: "YouTube Search · Cultura hispana",
        url: "https://www.youtube.com/results?search_query=dia+de+los+muertos+las+fallas+significado+cultural+espanol",
      },
      {
        title: "[HL] El imperfecto de subjuntivo y concordancia temporal en español",
        channel: "YouTube Search · Gramática C1",
        url: "https://www.youtube.com/results?search_query=imperfecto+de+subjuntivo+concordancia+temporal+espanol+B2+C1",
      },
    ],
    formulas: [
      {
        name: "Interrupted Past Action Frame",
        formula: "Mientras + imperfecto, pretérito indefinido",
        note: "e.g., *Mientras recorríamos el casco antiguo, estalló una protesta vecinal.*",
      },
      {
        name: "Past Habit Frame (Defective Verb)",
        formula: "solía / solías / solía / solíamos / solían + infinitivo",
        note: "Never conjugate *soler* in the preterite; use imperfecto for past routines.",
      },
      {
        name: "Pasiva Refleja (Describing Customs)",
        formula: "se + verbo (3.ª pers. sing. / pl.) + sujeto",
        note: "Verb matches noun number: *se prepara el pan* vs *se construyen los altares*.",
      },
      {
        name: "Pretérito Pluscuamperfecto (Earlier Past)",
        formula: "había / habías / había / habíamos / habían + participio (-ado/-ido/irreg.)",
        note: "Keep *ya / nunca / todavía no* before *había* (*ya habían vuelto*).",
      },
      {
        name: "Immediate Past Sequence",
        formula: "Nada más + infinitivo / En cuanto + indefinido, indefinido",
        note: "e.g., *Nada más aterrizar en Lima, contactamos con la familia anfitriona.*",
      },
      {
        name: "Balanced Tourism Concession",
        formula: "Si bien es cierto que + indicativo, no obstante / sin embargo + ...",
        note: "Ideal for weighing economic revenue against carrying capacity in Paper 1.",
      },
      {
        name: "Intercultural Comparison Frame (IO)",
        formula: "Mientras que en [cultura A]..., en cambio en [cultura B]...; no obstante, ambas comparten...",
        note: "Moves smoothly from contrast to shared human values.",
      },
      {
        name: "[HL] Imperfecto de Subjuntivo Derivation",
        formula: "3.ª pers. pl. indefinido − «-ron» + -ra / -ras / -ra / -´ramos / -rais / -ran",
        note: "Alternative *-se* endings are equally valid (*tuvieran / tuviesen*).",
        level: "HL",
      },
      {
        name: "[HL] Past-Time Emotion/Doubt Sequence",
        formula: "Me sorprendió / Dudaba / Era injusto que + imperfecto de subjuntivo",
        note: "e.g., *Me conmovió que conservaran el acento de su tierra.*",
        level: "HL",
      },
      {
        name: "[HL] Contrary-to-Fact Comparison",
        formula: "como si + imperfecto / pluscuamperfecto de subjuntivo",
        note: "Always subjunctive: *como si vivieran allí / como si no hubiera pasado el tiempo.*",
        level: "HL",
      },
    ],
  },
};
