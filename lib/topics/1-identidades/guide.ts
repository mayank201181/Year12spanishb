import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "1-identidades",
  title: "Theme 1: Identidades (Identities)",
  strand: "Prescribed Themes 1–3",
  icon: "🧬",
  level: "SL",
  summary:
    "Explore what defines individual and collective identity across the Hispanophone world: lifestyles and mental well-being, beliefs and subcultures, regional and indigenous linguistic diversity, and [HL] register precision.",
  intro:
    "In **IB Diploma Spanish B (FA2029 Subject Brief — Provisional)**, *Identidades* asks a far deeper question than IGCSE's *«¿Qué haces en tu tiempo libre?»*. At B2–C1 level, you examine **how health habits, belief systems, youth subcultures, and the language varieties we speak shape who we are** — across both Spain and Latin America.\n\nTo move from Band 6–7 into **Band 10–12 (Criterion A: Language)** and **Criterion B: Message**, you must replace repetitive IGCSE phrasing (*«es importante hacer deporte»*) with purposeful **impersonal subjunctive structures** (*«es imprescindible que fomentemos...»*), nuanced Hispanophone cultural references (*la sobremesa*, *el voseo rioplatense*, *el bilingüismo en Paraguay o Cataluña*), and precise register control matched to your Paper 1 text type or Individual Oral audience.",
  guide: [
    // =========================================================================
    // SECTION 1: estilos-vida-salud
    // =========================================================================
    {
      id: "estilos-vida-salud",
      heading: "Estilos de vida, salud y bienestar (Lifestyles, Health & Well-being)",
      level: "SL",
      discovery: {
        problem:
          "Compare two Year 12 students giving advice on teenage sleep deprivation in a school blog (*artículo de blog*):\n\n- **Draft A:** *Es importante dormir ocho horas porque los jóvenes están muy cansados y tienen estrés.*\n- **Draft B:** *Resulta imprescindible que los adolescentes prioricen el descanso nocturno para combatir el agotamiento crónico y salvaguardar su equilibrio emocional.*\n\nBefore reading on: identify **three concrete linguistic shifts** that lift Draft B from IGCSE B1 into IB Band 10–12, and notice why the verb mood changes after *que*.",
        idea:
          "Draft B makes three deliberate upgrades: (1) it switches from a flat infinitive (*es importante dormir*) to an **impersonal value judgment + `que` + present subjunctive** (*Resulta imprescindible que ... prioricen*) because two distinct grammatical frames interact — an evaluative opinion projected onto a specific subject (*los adolescentes*); (2) it replaces generic adjectives (*cansados, estrés*) with B2–C1 health collocations (*descanso nocturno, agotamiento crónico, equilibrio emocional*); and (3) it replaces *es* with the higher-register copula *resulta* and pairs it with precise verbs (*prioricen, combatir, salvaguardar*).",
      },
      body:
        "In the Hispanophone world, health (*la salud*) and well-being (*el bienestar*) are never treated as purely private habits — they are deeply social and cultural practices.\n\n" +
        "### 1. Dietary Models: *La dieta mediterránea* vs Latin American Food Realities\n" +
        "- **Spain & the Mediterranean model:** Rooted in *el aceite de oliva virgen extra*, *las legumbres*, *el pescado azul*, seasonal produce, and crucially **la sobremesa** — the unhurried post-meal conversation that turns eating into social cohesion rather than hurried fuelling. Yet Spain also faces rising childhood obesity (*la obesidad infantil*) as urban schedules erode home cooking in favour of *alimentos ultraprocesados*.\n" +
        "- **Latin America's public-health innovation:** Countries such as **Chile (2016)**, **Mexico (2020)**, **Argentina**, and **Colombia** pioneered mandatory black octagonal front-of-pack warning labels (*los sellos de advertencia*: *«ALTO EN AZÚCARES»*, *«EXCESO DE SODIO»*) and sugary-drink taxes (*impuestos a las bebidas azucaradas*). Meanwhile, ancestral staples — *el maíz, los frijoles, la quinua, el aguacate* — remain central to regional food identity (*la soberanía alimentaria*).\n\n" +
        "### 2. Mental Health, Youth Pressure & Sport Culture\n" +
        "- **Breaking the taboo:** Across Madrid, Bogotá, Buenos Aires, and Ciudad de México, youth campaigns increasingly address *la salud mental*, *la ansiedad académica*, *el acoso cibernético* (*ciberacoso*), and *la presión estética* amplified by social media filters. Spain's **024** helpline (*Línea de atención a la conducta suicida*) and school well-being coordinators (*coordinadores de bienestar*) provide authentic, concrete examples for Paper 1 and Individual Oral discussions.\n" +
        "- **Sport as community identity:** Beyond elite *fútbol* rivalries, public well-being initiatives such as Bogotá's famous Sunday **Ciclovía** (over 120 km of streets closed to cars for cyclists and walkers) illustrate how urban design promotes *el deporte inclusivo* and combats *el sedentarismo*.\n\n" +
        "### 3. Impersonal Subjunctive Triggers for Healthy-Living Advice\n" +
        "Whenever you express a **value judgment, necessity, or recommendation** directed at a specific person or group, Spanish demands the **present subjunctive** after *que*:\n\n" +
        "| Impersonal Trigger (B2–C1) | + Specific Subject (`que` + Subjuntivo) | General Statement (No `que` → Infinitivo) |\n" +
        "|---|---|---|\n" +
        "| **Es imprescindible que** (It is essential that) | *Es imprescindible que **reduzcamos** el azúcar.* | *Es imprescindible **reducir** el azúcar.* |\n" +
        "| **Conviene que** (It is advisable that) | *Conviene que los jóvenes **desconecten** de las pantallas.* | *Conviene **desconectar** de las pantallas.* |\n" +
        "| **Urge que** (It is urgent that) | *Urge que el Gobierno **regule** la comida basura.* | *Urge **regular** la comida basura.* |\n" +
        "| **Resulta fundamental que** (It is vital that) | *Resulta fundamental que **se normalice** la terapia.* | *Resulta fundamental **normalizar** la terapia.* |\n" +
        "| **Es lamentable que** (It is regrettable that) | *Es lamentable que **persista** el estigma.* | *Es lamentable **mantener** el estigma.* |\n\n" +
        "**Watch the certainty exception!** Impersonal expressions of **certainty/fact** (*es verdad que, es evidente que, está claro que, es innegable que*) take the **indicative** (*Es innegable que el sedentarismo **aumenta** el riesgo*), UNLESS negated (*No es verdad que el estrés **sea** inofensivo* → subjunctive!).",
      diagram: `<svg viewBox="0 0 520 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision flowchart for impersonal health advice expressions in Spanish choosing between infinitive, present subjunctive, and indicative">
  <rect x="0" y="0" width="520" height="235" rx="14" fill="#fdf7f4" />
  <text x="260" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="#2b140c">Impersonal Expressions: Infinitivo vs Subjuntivo vs Indicativo</text>

  <rect x="135" y="38" width="250" height="36" rx="9" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8" />
  <text x="260" y="54" text-anchor="middle" font-size="10.5" font-weight="800" fill="#9a3412">Impersonal Expression (Es + adj / Conviene / Urge)</text>
  <text x="260" y="68" text-anchor="middle" font-size="9.5" fill="#2b140c">Does it name a specific subject with “que”?</text>

  <line x1="185" y1="74" x2="95" y2="108" stroke="#6b483a" stroke-width="1.6" />
  <line x1="335" y1="74" x2="360" y2="108" stroke="#6b483a" stroke-width="1.6" />
  <text x="122" y="94" font-size="9.5" font-weight="700" fill="#0f766e">NO “que”</text>
  <text x="366" y="94" font-size="9.5" font-weight="700" fill="#c2410c">YES + “que”</text>

  <rect x="14" y="108" width="160" height="106" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.7" />
  <text x="94" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">INFINITIVO</text>
  <text x="94" y="145" text-anchor="middle" font-size="9.5" fill="#2b140c">General universal advice</text>
  <text x="94" y="166" text-anchor="middle" font-size="9.5" font-style="italic" fill="#2b140c">Es imprescindible</text>
  <text x="94" y="180" text-anchor="middle" font-size="10" font-weight="700" fill="#0f766e">dormir bien.</text>
  <text x="94" y="201" text-anchor="middle" font-size="8.8" fill="#6b483a">(Clean, but lower grammar range)</text>

  <rect x="200" y="108" width="304" height="32" rx="8" fill="#ffffff" stroke="#c2410c" stroke-width="1.5" />
  <text x="352" y="128" text-anchor="middle" font-size="9.8" font-weight="700" fill="#2b140c">Is it VALUE / NECESSITY / DOUBT, or CERTAINTY?</text>

  <line x1="275" y1="140" x2="270" y2="158" stroke="#c2410c" stroke-width="1.6" />
  <line x1="425" y1="140" x2="430" y2="158" stroke="#0369a1" stroke-width="1.6" />

  <rect x="190" y="158" width="160" height="62" rx="9" fill="#dcfce7" stroke="#15803d" stroke-width="1.8" />
  <text x="270" y="175" text-anchor="middle" font-size="10.2" font-weight="800" fill="#15803d">SUBJUNTIVO</text>
  <text x="270" y="191" text-anchor="middle" font-size="9.2" fill="#2b140c">Es necesario / Conviene que</text>
  <text x="270" y="205" text-anchor="middle" font-size="9.6" font-weight="700" fill="#15803d">cuidemos la salud mental.</text>

  <rect x="360" y="158" width="146" height="62" rx="9" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8" />
  <text x="433" y="175" text-anchor="middle" font-size="10.2" font-weight="800" fill="#0369a1">INDICATIVO</text>
  <text x="433" y="191" text-anchor="middle" font-size="9.2" fill="#2b140c">Es evidente / Es obvio que</text>
  <text x="433" y="205" text-anchor="middle" font-size="9.6" font-weight="700" fill="#0369a1">el estrés daña el sueño.</text>
</svg>`,
      diagramCaption:
        "Use this two-gate check in Paper 1 and your Individual Oral: once you insert `que` + a specific subject after a value/necessity trigger, switch immediately to the subjunctive — but keep indicative for affirmative certainty!",
      workedExamples: [
        {
          title: "Transforming IGCSE Health Advice into a Band 11 Subjunctive Sentence",
          problem:
            "Upgrade this IGCSE-level sentence for an IB Paper 1 *artículo* on teenage nutrition in Spain: *«Es bueno que los colegios tienen comida sana y los alumnos no comen comida basura.»* Identify the grammar errors and elevate the vocabulary.",
          steps: [
            "**Diagnose the mood errors:** *Es bueno que* is an impersonal value judgment followed by `que` + specific subjects (*los colegios*, *los alumnos*). Both verbs (*tienen, comen*) wrongly use the indicative instead of the **present subjunctive** (*tengan, coman*).",
            "**Upgrade the trigger:** Replace basic *Es bueno que* with a B2–C1 persuasive trigger such as *Resulta imprescindible que* or *Conviene que*.",
            "**Elevate the lexical field:** Replace *comida sana* with *menús equilibrados basados en la dieta mediterránea*, *tengan* with *ofrezcan*, and *no comen comida basura* with *eviten los alimentos ultraprocesados*.",
            "**Check agreement and accents:** *centros educativos* (masculine plural) → *ofrezcan*; *los estudiantes* → *eviten*; *mediterránea* (tilde on *á*!).",
          ],
          answer:
            "*Resulta imprescindible que los centros educativos ofrezcan menús equilibrados basados en la dieta mediterránea y que los estudiantes eviten los alimentos ultraprocesados.*",
          yourTurn: {
            question:
              "Complete the sentence with the exact present subjunctive form of **reducir** (nosotros): *«Es urgente que _____ el consumo de bebidas azucaradas en los institutos.»*",
            answer: {
              type: "text",
              accept: ["reduzcamos"],
              display: "reduzcamos",
            },
            solution:
              "Start from the *yo* present indicative of *reducir* (*reduzco* — verbs ending in *-cer/-cir* take *-zc-*), drop *-o* → *reduzc-*, and add the *-ir* subjunctive *nosotros* ending *-amos* → **reduzcamos**.",
          },
        },
        {
          title: "Certainty vs Doubt: Choosing the Mood in a Health Debate",
          problem:
            "Decide whether to use indicative or subjunctive in both blanks: (1) *Es innegable que el ejercicio físico _____ (mejorar) el estado de ánimo.* (2) *Sin embargo, no es cierto que el deporte por sí solo _____ (bastar) para curar la depresión clínica.*",
          steps: [
            "**Clause 1:** *Es innegable que* (*It is undeniable that*) affirms certainty — even though *innegable* has a negative prefix *in-*, its meaning is 100% affirmative fact! Therefore use the **present indicative**: *mejora*.",
            "**Clause 2:** *No es cierto que* negates certainty, creating doubt/denial (WEIRDO). Therefore use the **present subjunctive**: *baste*.",
          ],
          answer: "(1) **mejora** (indicative — affirmative certainty); (2) **baste** (subjunctive — negated certainty).",
        },
      ],
      keyPoints: [
        "Impersonal value judgments + `que` + subject (*es imprescindible que, conviene que, urge que, es lamentable que*) ALWAYS trigger the **subjunctive**.",
        "Affirmative certainty (*es evidente que, es obvio que, es innegable que*) takes the **indicative**; negate it (*no es evidente que*) and it flips to the **subjunctive**.",
        "Anchor Paper 1 and IO arguments in real Hispanophone practices: *la sobremesa*, *la dieta mediterránea*, Latin American *sellos de advertencia* (Chile/Mexico), Bogotá's *Ciclovía*, and Spain's 024 mental-health helpline.",
        "Avoid false friends: *sano/saludable* (healthy), *sensible* (sensitive, NOT sensible → *sensato*), *actualmente* (currently, NOT actually → *en realidad*).",
      ],
      whyItWorks:
        "IB examiners distinguish Band 7–9 from Band 10–12 on Criterion A by looking for **complex structures used accurately and purposefully**. Turning a generic infinitive advice sentence into an impersonal subjunctive clause forces correct mood selection, richer verb stems (*reduzcamos, prioricen, mantengan*), and a more authoritative persuasive voice.",
      strategies: [
        "**The `yo`-stem rule for irregular subjunctives:** Always derive the present subjunctive from the 1st-person singular present indicative (*tengo → tenga, conozco → conozca, reduzco → reduzca, duermo → duerma/durmamos*), plus the DISHES six (*dé, vaya, sea, haya, esté, sepa*).",
        "**Concrete Cultural Anchoring:** Never write abstractly about 'young people in general'. Drop in one specific Hispanophone reference (*los sellos negros en México*, *la cultura de la sobremesa en España*) to immediately lift Criterion B (Message) and IO Criterion B1.",
      ],
      thinkDeeper:
        "Why might a Spanish dietitian argue that *la sobremesa* protects **mental health** as much as **physical nutrition**? How does eating slowly in community challenge hyper-productive modern lifestyles?",
    },

    // =========================================================================
    // SECTION 2: creencias-valores-subculturas
    // =========================================================================
    {
      id: "creencias-valores-subculturas",
      heading: "Creencias, valores y subculturas (Beliefs, Values & Subcultures)",
      level: "SL",
      discovery: {
        problem:
          "Look at these two contrasting headlines from Hispanophone newspapers:\n\n1. *«España registra el mayor número de bodas civiles de su historia: ya superan el 80 % del total.»*\n2. *«Miles de jóvenes participan cada año en las procesiones de Semana Santa en Sevilla y en las ofrendas del Día de los Muertos en Oaxaca.»*\n\nBefore reading further: is that a contradiction, or does it reveal a crucial nuance about **belief vs cultural identity** in the Hispanophone world?",
        idea:
          "It is not a contradiction — it exposes the vital IB distinction between **la práctica religiosa institucional** (declining formal church attendance or religious weddings in rapidly secularising societies like Spain or Uruguay) and **el patrimonio cultural y comunitario** (rituals, festivals, and family solidarity that remain deeply meaningful even for secular young people).",
      },
      body:
        "Identity is forged in the tension between inherited values (*los valores heredados*) and self-chosen belonging (*la pertenencia elegida*).\n\n" +
        "### 1. Evolving Family Structures & Generational Values\n" +
        "- **From *familia tradicional* to *familias diversas*:** Across Spain and much of Latin America (notably Argentina, Uruguay, Colombia, Mexico, Chile, and Costa Rica), legal and social definitions of family have widened dramatically — encompassing *familias monoparentales*, *familias reconstituidas*, *familias homoparentales* (Spain legalised equal marriage in **2005**, Argentina in **2010**), and *familias elegidas*.\n" +
        "- **Intergenerational solidarity & *el familismo*:** Despite modernisation, tight kinship bonds remain strong — grandparents (*los abuelos*) frequently provide vital childcare, and young adults in Spain often emancipate later (*la emancipación tardía*) due to housing costs (*el encarecimiento de la vivienda*) and youth unemployment (*el paro juvenil*), reshaping generational identity.\n\n" +
        "### 2. Secularism (*la secularización*), Catholicism & Religious Syncretism\n" +
        "- **Spain & the Southern Cone:** Rapid secularisation (*el laicismo / la secularización*) means fewer young people attend weekly Mass (*la misa*), yet cultural traditions (*la Semana Santa*, *los Reyes Magos*, *las fiestas patronales*) still anchor local belonging.\n" +
        "- **Latin American syncretism (*el sincretismo religioso*):** Across Mexico, Peru, Bolivia, Guatemala, and the Caribbean, Catholic liturgy fused with indigenous cosmologies and Afro-descendant traditions — visible in **el Día de los Muertos** (blending Catholic *Todos los Santos* with Mesoamerican honouring of ancestors), reverence for **la Pachamama** (Mother Earth) in the Andes, and Afro-Caribbean traditions like *la santería* in Cuba. Simultaneously, **evangelical Protestantism** has expanded rapidly across Central America, Brazil's neighbours, and parts of Colombia and Peru.\n\n" +
        "### 3. Urban Youth Subcultures, Fashion & Generational Identity\n" +
        "- **Tribes, music & digital identity:** In Spanish, youth subcultures are often termed **las tribus urbanas** or **las subculturas juveniles** — from the 1980s **Movida Madrileña** (post-Franco artistic liberation) to contemporary urban genres (*el reguetón, el trap latino, el rap consciente, el indie español*), skate culture, vegan activism (*el veganismo*), and online fandoms.\n" +
        "- **Fashion as identity statement:** Clothing (*la indumentaria / la moda*) signals both rebellion and belonging — whether through **la moda sostenible / de segunda mano** (*ropa vintage*) rejecting *la moda rápida* (*fast fashion*), or indigenous artisans reclaiming traditional textiles (*los huipiles* in Mexico/Guatemala, *las polleras* in Bolivia) as proud contemporary fashion rather than museum folklore.\n\n" +
        "### 4. Grammar Toolkit: Expressing Concession & Nuanced Belief\n" +
        "To avoid black-and-white stereotypes (*«todos los españoles son católicos»*), master **`aunque` (indicative vs subjunctive)** and **`creer/pensar` (affirmative vs negative)**:\n" +
        "- **`Aunque` + Indicative (known real fact):** *Aunque la asistencia a misa **ha disminuido**, muchas tradiciones comunitarias **siguen** vigentes.*\n" +
        "- **`Aunque` + Subjunctive (hypothetical / 'even if'):** *Aunque un joven **no sea** creyente, puede valorar el sentido comunitario de la fiesta.*\n" +
        "- **`Creo que` + Indicative vs `No creo que` + Subjunctive:** *Creo que la familia **evoluciona*** vs *No creo que la tradición **deba** frenar la igualdad.*",
      diagram: `<svg viewBox="0 0 520 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three concentric rings showing how personal identity integrates inherited family values, cultural beliefs and syncretism, and chosen youth subcultures">
  <rect x="0" y="0" width="520" height="225" rx="14" fill="#fdf7f4" />
  <text x="260" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="#2b140c">Capas de la identidad: Valores heredados vs Pertenencia elegida</text>

  <ellipse cx="170" cy="126" rx="146" ry="82" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8" />
  <ellipse cx="170" cy="126" rx="102" ry="56" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.8" />
  <ellipse cx="170" cy="126" rx="54" ry="30" fill="#ffffff" stroke="#7c3aed" stroke-width="2" />

  <text x="170" y="122" text-anchor="middle" font-size="10.2" font-weight="800" fill="#7c3aed">YO / INDIVIDUO</text>
  <text x="170" y="136" text-anchor="middle" font-size="8.8" fill="#2b140c">Ética y autoexpresión</text>

  <text x="170" y="84" text-anchor="middle" font-size="9.2" font-weight="800" fill="#0f766e">FAMILIA Y CREENCIAS</text>
  <text x="170" y="172" text-anchor="middle" font-size="8.8" fill="#0f766e">Familismo · Sincretismo · Laicismo</text>

  <text x="170" y="58" text-anchor="middle" font-size="9.2" font-weight="800" fill="#9a3412">SUBCULTURAS Y SOCIEDAD</text>
  <text x="170" y="198" text-anchor="middle" font-size="8.6" fill="#9a3412">Tribus urbanas · Música · Moda sostenible</text>

  <rect x="334" y="48" width="172" height="156" rx="10" fill="#ffffff" stroke="#eed3c6" stroke-width="1.6" />
  <text x="420" y="68" text-anchor="middle" font-size="10.2" font-weight="800" fill="#c2410c">Nuance Connectors (B2–C1)</text>
  <text x="346" y="88" font-size="9.2" font-weight="700" fill="#2b140c">• Aunque + Ind. (fact)</text>
  <text x="352" y="102" font-size="8.6" font-style="italic" fill="#6b483a">Aunque crece el laicismo...</text>
  <text x="346" y="122" font-size="9.2" font-weight="700" fill="#2b140c">• Aunque + Subj. (even if)</text>
  <text x="352" y="136" font-size="8.6" font-style="italic" fill="#6b483a">Aunque no compartan la fe...</text>
  <text x="346" y="156" font-size="9.2" font-weight="700" fill="#2b140c">• Si bien es cierto que...</text>
  <text x="352" y="170" font-size="8.6" font-style="italic" fill="#6b483a">Balances tradition &amp; change</text>
  <text x="346" y="190" font-size="9.2" font-weight="700" fill="#0f766e">• Lejos de + infinitivo</text>
</svg>`,
      diagramCaption:
        "Strong IB responses treat identity as layered rather than binary: individual agency interacts continuously with inherited beliefs and chosen subcultures.",
      workedExamples: [
        {
          title: "Deploying `Aunque` with Both Moods in an Opinion Essay",
          problem:
            "A Paper 1 prompt asks you to write an *editorial* on whether urban youth subcultures weaken family values. Write two consecutive analytical sentences: one stating a known fact using **`aunque` + indicative**, and one stating a hypothetical concession using **`aunque` + subjunctive**.",
          steps: [
            "**Sentence 1 (Real observed fact → Indicative):** Acknowledge that generational differences in music and fashion genuinely exist (*existen* — indicative): *«Aunque **existen** brechas estéticas entre padres e hijos, la música urbana suele servir como vía legítima de expresión emocional.»*",
            "**Sentence 2 (Hypothetical concession 'even if' → Subjunctive):** Address a hypothetical parent who dislikes their teenager's subculture (*no comprenda* — subjunctive): *«Incluso aunque una familia **no comprenda** plenamente una tribu urbana, el diálogo abierto fortalece los vínculos afectivos.»*",
            "**Verify register:** Institutional, balanced tone with B2–C1 nouns (*brechas estéticas, vía legítima, vínculos afectivos*) — ideal for an *editorial*.",
          ],
          answer:
            "*Aunque existen brechas estéticas entre padres e hijos, la música urbana suele servir como vía legítima de expresión emocional. Incluso aunque una familia no comprenda plenamente una tribu urbana, el diálogo abierto fortalece los vínculos afectivos.*",
          yourTurn: {
            question:
              "Complete this negated opinion sentence with the exact present subjunctive form of **destruir** (3rd person singular): *«No creo que la secularización _____ la solidaridad comunitaria.»*",
            answer: {
              type: "text",
              accept: ["destruya"],
              display: "destruya",
            },
            solution:
              "*No creo que* expresses denial/doubt and requires the present subjunctive. Verbs ending in *-uir* insert *-y-* in the present stem (*destruyo → destruy-* + *-a* → **destruya**).",
          },
        },
        {
          title: "Analysing Religious Syncretism Without Stereotyping",
          problem:
            "In your Individual Oral, an examiner asks: *«¿Crees que la religión sigue definiendo la identidad en toda América Latina?»* Craft a nuanced 2-sentence IB Band 10–12 answer avoiding overgeneralisation.",
          steps: [
            "**Reject monolithic generalisation:** Avoid *«Sí, todos los latinoamericanos son muy religiosos»*. Instead use *depende de la región y la generación*.",
            "**Introduce precise cultural terms:** Contrast secularisation (*el laicismo*) in countries like Uruguay with **el sincretismo religioso** (e.g., *el Día de los Muertos* or *la Pachamama*) in Mexico and the Andes.",
          ],
          answer:
            "*Resultaría simplista generalizar, pues mientras países como Uruguay destacan por su fuerte tradición laica, en regiones andinas y mexicanas el sincretismo religioso — visible en el Día de los Muertos o el respeto a la Pachamama — sigue entrelazando espiritualidad e identidad comunitaria.*",
        },
      ],
      keyPoints: [
        "Distinguish **secularisation** (*la secularización / el laicismo*) from **cultural heritage** (*el patrimonio cultural*): declining Mass attendance does not erase community rituals.",
        "Use **el sincretismo** accurately to explain the blending of Catholic, indigenous, and Afro-descendant beliefs across Latin America.",
        "Recognise modern Hispanic family diversity (*familias monoparentales, reconstituidas, homoparentales*) alongside enduring *familismo* and *emancipación tardía*.",
        "Master **`aunque` + indicative** (known fact) vs **`aunque` + subjunctive** (hypothetical 'even if'), and **`no creo que` + subjunctive**.",
      ],
      whyItWorks:
        "On Criterion B (Message) and IO Criterion B2 (Interaction), examiners actively penalise cultural clichés (*«en España todos van a misa y bailan flamenco»*). Explaining *why* secular youth still join *Semana Santa* or why Andean designers reclaim *polleras* demonstrates genuine intercultural depth.",
      strategies: [
        "**The 'Lejos de + infinitivo' Contrast Frame:** Use *«Lejos de destruir los valores familiares, las subculturas juveniles suelen ofrecer...»* to knock down a simplistic stereotype in one sleek C1 clause.",
        "**Pair Two Contrasting Regions:** Whenever asked about 'Hispanic beliefs', pair a highly secularised context (Spain / Uruguay) with a syncretic or pluralistic context (Oaxaca, Mexico / Andes) to prove regional nuance.",
      ],
      thinkDeeper:
        "When global fast-fashion brands copy indigenous Mexican *huipiles* without crediting artisan communities, where is the boundary between cultural appreciation (*la valoración cultural*) and cultural appropriation (*la apropiación cultural*)?",
    },

    // =========================================================================
    // SECTION 3: lengua-identidad-hispanohablante
    // =========================================================================
    {
      id: "lengua-identidad-hispanohablante",
      heading: "Lengua e identidad en el mundo hispanohablante (Language & Identity)",
      level: "SL",
      discovery: {
        problem:
          "Read three completely grammatical ways of asking the exact same everyday question across the Hispanophone world:\n\n- **Madrid:** *¿Vosotros tenéis ganas de coger el autobús o preferís ir en coche?*\n- **Ciudad de México:** *¿Ustedes tienen ganas de tomar el camión o prefieren ir en carro?*\n- **Buenos Aires:** *¿Vos tenés ganas de tomarte el colectivo o preferís ir en auto?*\n\nBefore reading on: (1) Which variety uses **voseo**, and how does its verb ending differ from *tú*? (2) Why would a Spanish speaker in Mexico or Argentina chuckle (or blush!) at the Peninsular verb *coger*?",
        idea:
          "(1) Buenos Aires (Rioplatense Spanish) uses **voseo**: pronoun *vos* with stress shifted to the final syllable (*tenés, hablás, vivís*, and imperative *¡vení!, ¡hablá!*). (2) *Coger* means simply 'to take/catch' in Spain, whereas in Mexico, Argentina, and much of Latin America it is a vulgar sexual taboo — speakers use *tomar* or *agarrar* instead! None of the three varieties is 'better' or 'more correct': Spanish is a **pluricentric language** (*una lengua policéntrica*).",
      },
      body:
        "With over **500 million native speakers** across 21 official countries (plus over 40 million speakers in the United States), Spanish is one of the world's richest laboratories of linguistic identity.\n\n" +
        "### 1. Phonological & Grammatical Diversity Across Spanish\n" +
        "- **Distinción vs Seseo vs Ceceo:**\n" +
        "  - **Distinción** (northern and central Spain): pronounces `z` and `ce/ci` as interdental `/θ/` (*caza* ≠ *casa*).\n" +
        "  - **Seseo** (virtually all of Latin America, the Canary Islands, and parts of Andalusia — >90% of Spanish speakers worldwide!): pronounces `z, ce/ci, s` all as `/s/` (*caza* = *casa*).\n" +
        "  - **Ceceo** (specific rural/southern parts of Andalusia): pronounces `s, z, ce/ci` with a `/θ/`-like sound.\n" +
        "- **Voseo vs Tuteo & Ustedes vs Vosotros:**\n" +
        "  - **Vosotros** (informal plural 'you') is used in Spain; **ustedes** serves for BOTH formal and informal plural across ALL of Latin America and the Canary Islands.\n" +
        "  - **Voseo** (*vos* instead of *tú*) is the standard everyday form in **Argentina, Uruguay, and Paraguay** (Rioplatense/Cono Sur), and widely used in Central America (Costa Rica, Nicaragua, Guatemala, El Salvador) and parts of Colombia (*paisa* region) and Venezuela. Present indicative drops stem diphthongs and stresses the ending: *tú tienes → vos **tenés***; *tú puedes → vos **podés***; *tú hablas → vos **hablás***; *tú eres → vos **sos***.\n" +
        "- **Regional Lexis (*el léxico regional*):**\n" +
        "  - Car: *el coche* (Spain), *el carro* (Mexico, Colombia, Caribbean), *el auto* (Argentina, Chile, Peru).\n" +
        "  - Computer: *el ordenador* (Spain), *la computadora* (Latin America).\n" +
        "  - Bus: *el autobús* (Spain), *el camión* (Mexico), *el colectivo* (Argentina), *la guagua* (Canary Islands, Cuba, Puerto Rico, Dominican Republic).\n" +
        "  - Mobile phone: *el móvil* (Spain), *el celular* (Latin America).\n\n" +
        "### 2. Co-Official Languages in Spain (*Las lenguas cooficiales*)\n" +
        "Article 3 of the 1978 Spanish Constitution declares *el castellano* the official language of the State while protecting co-official regional languages in their autonomous communities:\n" +
        "- **Catalán / Valenciano** (Cataluña, Comunidad Valenciana, Islas Baleares) — a Romance language spoken by ~10 million people.\n" +
        "- **Gallego** (Galicia) — a Romance language closely related to Portuguese.\n" +
        "- **Euskera / Vasco** (País Vasco and northern Navarra) — Europe's oldest living **language isolate** (*lengua aislada*), completely unrelated to Latin or any Indo-European family!\n\n" +
        "### 3. Indigenous Languages in Latin America & Bilingual Identity\n" +
        "- **Quechua** (Peru, Bolivia, Ecuador — ~8–10 million speakers; gave Spanish *cancha, papa, cóndor, carpa*).\n" +
        "- **Guaraní** (Paraguay — uniquely co-official nationwide and spoken by a majority of non-indigenous and indigenous Paraguayans alike, producing everyday bilingual mixing known as *jopará*).\n" +
        "- **Náhuatl** (Mexico — language of the Mexica/Aztec Empire; gave Spanish and English *chocolate, aguacate, tomate, chicle, tiza*).\n" +
        "- **Maya** languages (Guatemala, Yucatán) and **Aimara** (Bolivia, Peru).\n" +
        "- **Spanglish & US Hispanic Identity:** Far from 'broken Spanish', linguists describe *el espanglish* (*code-switching* / *alternancia de códigos* like *«Vamos a parquear el carro y llamar para atrás»*) as a rule-governed marker of **bicultural identity** among US Latinos — though it sparks lively debate between purists and sociolinguists.",
      diagram: `<svg viewBox="0 0 520 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-quadrant map of Hispanophone linguistic diversity covering Peninsular co-official languages, Rioplatense voseo, Latin American indigenous languages, and US Spanglish bilingualism">
  <rect x="0" y="0" width="520" height="245" rx="14" fill="#fdf7f4" />
  <text x="260" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="#2b140c">Mapa de la diversidad lingüística hispanohablante</text>

  <rect x="14" y="38" width="238" height="90" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.6" />
  <text x="26" y="56" font-size="10.5" font-weight="800" fill="#9a3412">1. España peninsular</text>
  <text x="26" y="72" font-size="9.2" fill="#2b140c">• Distinción (/θ/ vs /s/) · vosotros</text>
  <text x="26" y="86" font-size="9.2" fill="#2b140c">• Léxico: coche, ordenador, móvil</text>
  <text x="26" y="100" font-size="9.2" font-weight="700" fill="#9a3412">• Cooficiales: catalán, gallego, euskera</text>
  <text x="26" y="114" font-size="8.6" fill="#6b483a">(euskera = pre-Roman language isolate)</text>

  <rect x="268" y="38" width="238" height="90" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.6" />
  <text x="280" y="56" font-size="10.5" font-weight="800" fill="#0f766e">2. Río de la Plata (Arg / Uru)</text>
  <text x="280" y="72" font-size="9.2" fill="#2b140c">• Seseo · sheísmo (/ʃ/ en ll / y) · ustedes</text>
  <text x="280" y="86" font-size="9.2" font-weight="700" fill="#0f766e">• Voseo: vos hablás, tenés, sos, ¡vení!</text>
  <text x="280" y="100" font-size="9.2" fill="#2b140c">• Léxico: auto, colectivo, laburo, mate</text>
  <text x="280" y="114" font-size="8.6" fill="#6b483a">(Paraguay: bilingüismo español–guaraní)</text>

  <rect x="14" y="140" width="238" height="90" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.6" />
  <text x="26" y="158" font-size="10.5" font-weight="800" fill="#0369a1">3. México, Caribe y Andes</text>
  <text x="26" y="174" font-size="9.2" fill="#2b140c">• Seseo · ustedes (plural universal)</text>
  <text x="26" y="188" font-size="9.2" fill="#2b140c">• Léxico: carro/camión (MX), guagua (Caribe)</text>
  <text x="26" y="202" font-size="9.2" font-weight="700" fill="#0369a1">• Lenguas originarias: náhuatl, maya,</text>
  <text x="26" y="216" font-size="9.2" font-weight="700" fill="#0369a1">  quechua, aimara (préstamos vivos)</text>

  <rect x="268" y="140" width="238" height="90" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.6" />
  <text x="280" y="158" font-size="10.5" font-weight="800" fill="#7c3aed">4. Diáspora y Espanglish (EE. UU.)</text>
  <text x="280" y="174" font-size="9.2" fill="#2b140c">• Alternancia de códigos (code-switching)</text>
  <text x="280" y="188" font-size="9.2" fill="#2b140c">• Calcos y préstamos: parquear, aplicar</text>
  <text x="280" y="202" font-size="9.2" font-weight="700" fill="#7c3aed">• Marcador de identidad bicultural,</text>
  <text x="280" y="216" font-size="8.6" fill="#6b483a">  no «falta de dominio» (enfoque sociolingüístico)</text>
</svg>`,
      diagramCaption:
        "Spanish is a pluricentric language: every variety is valid, and Paper 2 Listening deliberately features accents from both Spain and Latin America.",
      workedExamples: [
        {
          title: "Converting Tuteo to Rioplatense Voseo Accurately",
          problem:
            "A Paper 2 Reading interview with an Argentine musician uses *voseo*. Convert these three *tú* verbs into Argentine **vos** forms: (1) *tú puedes* (presente), (2) *tú eres* (presente), (3) *¡ven aquí!* (imperativo afirmativo).",
          steps: [
            "**Rule for present indicative *vos*:** Drop the final *-r* of the infinitive, add *-s*, and stress the final vowel (NO stem diphthongisation!). *poder* → *pod-* + *-és* = **podés** (never *puedés*!).",
            "**Irregular *ser*:** *ser* is uniquely **sos** in *vos* (*vos sos de Buenos Aires*).",
            "**Rule for affirmative imperative *vos*:** Drop the final *-r* of the infinitive and add a written accent on the final vowel: *venir* → **vení** (compare *tú: ven*; *hablar → hablá*; *tener → tené* — only *ir* is irregular: *andá*).",
          ],
          answer: "(1) **vos podés**; (2) **vos sos**; (3) **¡vení aquí!**",
          yourTurn: {
            question:
              "Give the exact Rioplatense *voseo* present indicative form of **tener** (*vos _____*):",
            answer: {
              type: "text",
              accept: ["tenés"],
              display: "tenés",
            },
            solution:
              "For *voseo* present indicative, drop *-r* from *tener* (no *e → ie* stem change!), add *-s*, and place the tilde on the stressed final *-e-*: **tenés**.",
          },
        },
        {
          title: "Explaining Why Indigenous Languages Matter to Hispanic Identity",
          problem:
            "In a Paper 1 *discurso* for International Mother Language Day, explain in 2–3 sentences why revitalising indigenous languages (*las lenguas originarias*) protects more than vocabulary.",
          steps: [
            "**Frame language as worldview (*cosmovisión*):** Link language loss to loss of ecological and ancestral knowledge.",
            "**Cite authentic examples:** Mention *el quechua* (Andes) or *el guaraní* (Paraguay's co-official model) and everyday words Spanish inherited (*aguacate, chocolate, cancha*).",
            "**Close with a subjunctive call to action:** *Es imprescindible que las escuelas bilingües preserven...*",
          ],
          answer:
            "*Cada lengua originaria — desde el quechua andino hasta el náhuatl mexicano o el guaraní paraguayo — encierra una cosmovisión única y saberes ancestrales irreemplazables. Por ello, resulta imprescindible que los sistemas educativos impulsen la educación intercultural bilingüe para que ninguna comunidad pierda su voz ni su memoria.*",
        },
      ],
      keyPoints: [
        "**Seseo** (`/s/` for `z/ce/ci/s`) is used by >90% of Spanish speakers globally (all of Latin America + Canary Islands + parts of Andalusia); **distinción** (`/θ/` vs `/s/`) belongs to northern/central Spain.",
        "**Voseo** (*vos hablás, tenés, vivís, sos; ¡vení!*) is completely standard educated usage in Argentina, Uruguay, Paraguay, and parts of Central America/Colombia.",
        "Spain has three constitutional co-official regional languages alongside *castellano*: **catalán/valenciano**, **gallego**, and **euskera** (the sole non-Indo-European language isolate).",
        "Latin American Spanish has been permanently enriched by indigenous languages (**náhuatl, quechua, guaraní, maya, aimara**); Paraguay is a landmark model of national Spanish–Guaraní bilingualism.",
      ],
      whyItWorks:
        "Understanding linguistic variation pays off twice in IB Spanish B: first in **Paper 2 Listening & Reading** (where regional terms like *camión, colectivo, chamba, guagua* and *voseo* appear in authentic recordings/texts), and second in **Paper 1 Conceptual Understanding (Criterion C: Variation)** and your **Individual Oral**.",
      strategies: [
        "**Pick One Consistent Variety in Your Own Output:** IB accepts any standard variety of Spanish (Peninsular, Mexican, Colombian, Rioplatense), PROVIDED you stay internally consistent — don't mix *vosotros tenéis* with *vos sos* in the same letter!",
        "**Paper 2 Listening Accent Readiness:** Train your ear to recognise Rioplatense *sheísmo* (*yo/calle* sounding like English *sh*), Caribbean syllable-final `-s` aspiration (*estás* → *ehtáh*), and Peninsular `/θ/` so rapid audio never derails your comprehension.",
      ],
      thinkDeeper:
        "Why did **Guaraní** achieve nationwide prestige and co-official status across both indigenous and non-indigenous citizens in Paraguay, whereas many other indigenous languages in Latin America still face linguistic discrimination (*la glotofobia*)?",
    },

    // =========================================================================
    // SECTION 4: identidad-registro-hl [HL]
    // =========================================================================
    {
      id: "identidad-registro-hl",
      heading: "[HL] Critical Perspectives on Cultural Identity & Register Precision",
      level: "HL",
      discovery: {
        problem:
          "At HL Paper 1 (450–600 words), you are asked to write an *artículo de opinión* debating whether the **Real Academia Española (RAE)** should accept gender-inclusive forms like *todes* or English tech loanwords like *el bullying*.\n\nLook at two opening sentences:\n- **Band 6–7 (SL-ish):** *Pienso que la lengua cambia mucho hoy en día y los jóvenes usan palabras nuevas en internet, pero la RAE dice que no es correcto.*\n- **Band 11–12 (HL C1):** *Si bien la Real Academia Española aboga por la cohesión panhispánica frente a los anglicismos innecesarios, resulta innegable que las lenguas vivas evolucionan al compás de las transformaciones sociales.*\n\nBefore reading on: spot **four C1 grammatical/rhetorical devices** packed into that single HL sentence.",
        idea:
          "That single sentence deploys: (1) a **concessive counter-argument frame** (*Si bien...*) showing balanced HL critical thinking; (2) precise domain-specific verbs and collocations (*aboga por, cohesión panhispánica, anglicismos innecesarios*); (3) a **mood contrast** (*resulta innegable que + indicative* — accurate certainty); and (4) an **idiomatic metaphor** (*al compás de las transformaciones sociales* = 'in step with social transformations').",
      },
      body:
        "At **Higher Level**, Theme 1 moves beyond describing identity into **critically evaluating competing ideologies of language, heritage, and belonging** — while upgrading your prose from safe B1/B2 phrasing to authentic **Band 10–12 (Criterion A)** precision.\n\n" +
        "### 1. Prescriptivism (RAE & ASALE) vs Linguistic Evolution\n" +
        "- **From Madrid purism to *política panhispánica*:** Founded in 1713 under the motto *«Limpia, fija y da esplendor»*, the **Real Academia Española (RAE)** today collaborates with 22 sister academies across Latin America, the US, the Philippines, and Equatorial Guinea inside **ASALE** (*Asociación de Academias de la Lengua Española*), recognising that no single country owns Spanish.\n" +
        "- **Anglicisms (*los anglicismos*):** When does borrowing enrich Spanish (*fútbol, estrés, tuitear* — adapted to Spanish orthography) versus signal cultural prestige bias (*el bullying* vs *el acoso escolar*, *el feedback* vs *la retroalimentación*, *el spoiler* vs *el destripe*)? FundéuRAE regularly proposes crisp Spanish equivalents.\n" +
        "- **Gender-inclusive language (*el lenguaje inclusivo*):** Debates over the generic masculine (*todos*), doublets (*todos y todas*), and non-binary morphemes (*-e: todes, elle*) pit grammatical economy against social visibility. At HL, you should evaluate BOTH perspectives analytically — avoiding personal rants while using neutral epicene alternatives (*el alumnado, la ciudadanía, quienes participan*) effortlessly in your own writing.\n\n" +
        "### 2. Diaspora, Hybridity & *La identidad híbrida*\n" +
        "Second-generation Hispanic writers and artists in the US, Europe, and across Latin America frequently describe living *«ni de aquí ni de allá»* (neither fully from here nor there) — yet contemporary thinkers reframe this not as a deficit (*una carencia*), but as **una identidad híbrida** or **transcultural** that enriches creative perspective.\n\n" +
        "### 3. HL Register Upgrade Matrix: Banishing IGCSE Clichés\n" +
        "| IGCSE Cliché (Band 5–7) | IB HL Band 10–12 Upgrade | Why Examiners Reward It |\n" +
        "|---|---|---|\n" +
        "| *Creo que es muy importante...* | *A mi juicio, reviste una importancia capital...* / *Cabe destacar que...* | Eliminates repetitive *creo que / muy* |\n" +
        "| *Hay muchos problemas con...* | *Surgen diversos desafíos en torno a...* / *Se plantean dilemas complejos...* | Replaces *haber* with precise active/reflexive verbs |\n" +
        "| *La gente joven usa mucho...* | *Las nuevas generaciones recurren asiduamente a...* | Precise lexical register & adverbial variety |\n" +
        "| *Por eso, tenemos que cambiar...* | *De ahí que sea imprescindible replantear...* | **`De ahí que` + subjunctive** = signature C1 connector! |\n" +
        "| *Afecta mucho a la identidad.* | *Incide directamente en la configuración identitaria.* | Nominalisation + high-precision verb (*incidir en*) |\n" +
        "| *Por otro lado, algunas personas dicen...* | *No obstante, conviene matizar que ciertos sectores sostienen...* | Evaluative counter-argumentation (*matizar, sostener*) |",
      diagram: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-step HL register elevation ladder showing how an IGCSE B1 draft upgrades through IB SL B2 to HL Band 10-12 C1 prose">
  <rect x="0" y="0" width="520" height="230" rx="14" fill="#fdf7f4" />
  <text x="260" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="#2b140c">[HL] Escalera de registro: de IGCSE (B1) a Banda 10–12 (C1)</text>

  <rect x="18" y="38" width="484" height="50" rx="9" fill="#ffe4e6" stroke="#be123c" stroke-width="1.6" />
  <text x="30" y="56" font-size="10" font-weight="800" fill="#be123c">BAND 5–6 (IGCSE B1 — Generic &amp; Repetitive)</text>
  <text x="30" y="75" font-size="9.5" fill="#2b140c">«Creo que hablar dos lenguas es muy bueno porque ayuda a la gente a conocer otras culturas.»</text>

  <rect x="18" y="99" width="484" height="52" rx="9" fill="#fef9c3" stroke="#a16207" stroke-width="1.6" />
  <text x="30" y="117" font-size="10" font-weight="800" fill="#a16207">BAND 8–9 (Solid IB B2 — Accurate &amp; Clear)</text>
  <text x="30" y="136" font-size="9.5" fill="#2b140c">«Considero que el bilingüismo aporta grandes ventajas, ya que fomenta la empatía intercultural.»</text>

  <rect x="18" y="162" width="484" height="56" rx="9" fill="#dcfce7" stroke="#15803d" stroke-width="2" />
  <text x="30" y="180" font-size="10" font-weight="800" fill="#15803d">BAND 10–12 (HL C1 — Nominalisation, Idiom &amp; Subjunctive Connector)</text>
  <text x="30" y="198" font-size="9.3" fill="#2b140c">«Lejos de diluir las raíces, el bilingüismo ensancha el horizonte cultural; de ahí que resulte</text>
  <text x="30" y="211" font-size="9.3" fill="#2b140c">imprescindible que el sistema educativo respalde las lenguas minoritarias.»</text>
</svg>`,
      diagramCaption:
        "Notice how Band 10–12 writing replaces bare adjectives (*muy bueno*) with nominalised concepts (*el bilingüismo*), idiomatic imagery (*ensancha el horizonte*), and C1 subjunctive triggers (*de ahí que resulte*).",
      workedExamples: [
        {
          title: "[HL] Rewriting an IGCSE Paragraph with `De ahí que` and Nominalisation",
          problem:
            "Upgrade this Band 6 sentence for an HL Paper 1 *ensayo* on linguistic purism: *«Muchas personas usan palabras en inglés en las redes sociales. Por eso, es importante enseñar un español rico en el colegio.»*",
          steps: [
            "**Nominalise the first clause:** Turn *muchas personas usan palabras en inglés* into a crisp noun phrase: *la proliferación de anglicismos en las redes sociales*.",
            "**Link cause and consequence with `de ahí que` + subjunctive:** Replace basic *Por eso, es importante...* with *de ahí que **sea** / **resulte** imprescindible...* (remember: `de ahí que` ALWAYS takes the subjunctive!).",
            "**Upgrade the final verb & noun:** Replace *enseñar un español rico* with *fomentar el dominio expresivo del español* or *cultivar la riqueza léxica del idioma*.",
            "**Check register coherence:** Formal academic tone, zero contractions or colloquialisms, accurate tilde on *ahí, proliferación, léxica*.",
          ],
          answer:
            "*La proliferación de anglicismos en las redes sociales empobrece a menudo los matices locales; de ahí que resulte imprescindible cultivar la riqueza léxica del español en las aulas.*",
          yourTurn: {
            question:
              "Complete this C1 HL connector sentence with the exact present subjunctive form of **ser** (3rd person singular): *«El lenguaje inclusivo suscita intensos debates sociales; de ahí que _____ necesario analizarlo con rigor lingüístico.»*",
            answer: {
              type: "text",
              accept: ["sea"],
              display: "sea",
            },
            solution:
              "The high-register consecutive connector **`de ahí que`** ('hence / which is why') ALWAYS triggers the **subjunctive**. The 3rd-person singular present subjunctive of *ser* is **sea**.",
          },
        },
        {
          title: "[HL] Evaluating Both Sides of the RAE Debate with Epicene Nouns",
          problem:
            "Draft a 2-sentence HL counter-argument addressing gender-inclusive language while demonstrating natural **epicene (gender-neutral) Spanish nouns** rather than clunky slashes (*los/as alumnos/as*).",
          steps: [
            "**Concede the prescriptivist concern:** Use *Si bien...* to acknowledge the RAE's view on grammatical economy and clarity.",
            "**Pivot with *no obstante* / *sin embargo*:** Introduce the sociolinguistic claim that language shapes visibility, deploying authentic epicene nouns (*la ciudadanía, el alumnado, el profesorado, las personas*).",
          ],
          answer:
            "*Si bien la RAE sostiene que el masculino genérico responde a la economía lingüística y no a una intención excluyente, no obstante conviene reconocer que emplear sustantivos colectivos como el alumnado o la ciudadanía permite visibilizar a toda la comunidad sin fracturar la fluidez sintáctica.*",
        },
      ],
      keyPoints: [
        "**`De ahí que` + subjunctive** ('hence / which is why') is one of the highest-yield C1 connectors for HL Paper 1 and IO conclusions.",
        "Avoid clunky `los/las` repetition by deploying natural **epicene/collective Spanish nouns**: *el alumnado, la ciudadanía, el profesorado, la juventud, quienes participan*.",
        "Balance **ASALE/RAE pan-Hispanic cohesion** against **sociolinguistic evolution** (anglicisms, *espanglish*, inclusive language) to show critical HL nuance.",
        "Replace overused IGCSE anchors (*creo que, muy, mucho, hay, bueno, malo, cosas*) with precise verbs (*sostener, matizar, incidir en, fomentar, menoscabar*) and nominalisations.",
      ],
      whyItWorks:
        "In HL Paper 1 (450–600 words), Criterion A (12 marks) explicitly rewards **idiomatic expressions, varied complex structures, and sustained register precision**. Showing that you can pivot gracefully from concession (*Si bien...*) to consequence (*de ahí que + subj.*) while discussing cultural identity signals Band 10–12 mastery immediately.",
      strategies: [
        "**The 4-Word IGCSE Ban during Drafting:** Challenge yourself never to write *muy bueno, muy malo, hay muchos problemas,* or *cosas* in an HL script — swap them instantly for *beneficioso/enriquecedor, perjudicial/nocivo, surgen múltiples desafíos,* and *factores/aspectos*.",
        "**Authentic Idioms in Moderation (2–3 per Essay):** Weave 2–3 natural idioms smoothly (*dar en el clavo, poner de relieve, hacer hincapié en, ser arma de doble filo, estar a la orden del día*) — never cram forced proverbs that clash with a formal *informe* or *carta formal*.",
      ],
      thinkDeeper:
        "Does adopting an English tech loanword like *el streaming* or *el algoritmo* genuinely threaten Hispanic cultural identity, or has Spanish historically thrived precisely by absorbing Arabic (*almohada, ojalá*), Náhuatl (*chocolate*), and Quechua (*cancha*) words across centuries?",
    },
  ],

  // ===========================================================================
  // LEARN SMART
  // ===========================================================================
  learn: {
    flashcards: [
      {
        front: "la sobremesa",
        back: "The unhurried conversation shared around the table after a meal — a cornerstone of Hispanic social cohesion and well-being.",
        level: "SL",
      },
      {
        front: "los sellos de advertencia",
        back: "Mandatory black octagonal nutrition warning labels on packaged foods (pioneered in Chile, Mexico, Argentina, and Colombia).",
        level: "SL",
      },
      {
        front: "el bienestar emocional / el agotamiento crónico",
        back: "Emotional well-being / chronic burnout — B2–C1 upgrades for IGCSE *sentirse bien* and *estar muy cansado*.",
        level: "SL",
      },
      {
        front: "es imprescindible que + subjuntivo",
        back: "It is essential that... (e.g. *Es imprescindible que prioricemos la salud mental*). Triggers present subjunctive when followed by `que` + subject.",
        level: "SL",
      },
      {
        front: "es innegable que + indicativo",
        back: "It is undeniable that... Expresses affirmative certainty, so it takes the **indicative** (*Es innegable que el sueño influye en el rendimiento*).",
        level: "SL",
      },
      {
        front: "el sincretismo religioso",
        back: "The fusion of Catholic traditions with indigenous and Afro-descendant spiritualities across Latin America (e.g. *Día de los Muertos*, *Pachamama*).",
        level: "SL",
      },
      {
        front: "el laicismo / la secularización",
        back: "Secularism / the declining institutional role of religion in public life (prominent in Spain and Uruguay), even where cultural festivals endure.",
        level: "SL",
      },
      {
        front: "las tribus urbanas / las subculturas juveniles",
        back: "Urban youth subcultures expressing generational identity through music, fashion, activism, and digital communities.",
        level: "SL",
      },
      {
        front: "el seseo vs la distinción",
        back: "**Seseo** pronounces `z, ce/ci, s` all as `/s/` (>90% of speakers: Latin America, Canary Islands); **distinción** separates `/θ/` (`z, ce/ci`) from `/s/` (northern/central Spain).",
        level: "SL",
      },
      {
        front: "el voseo (vos hablás, tenés, vivís, sos; ¡vení!)",
        back: "Standard second-person singular pronoun and verb system in Argentina, Uruguay, Paraguay, and parts of Central America/Colombia.",
        level: "SL",
      },
      {
        front: "las lenguas cooficiales de España",
        back: "**Catalán/valenciano**, **gallego** (Romance languages), and **euskera** (pre-Roman language isolate), co-official alongside *castellano*.",
        level: "SL",
      },
      {
        front: "el guaraní, el quechua y el náhuatl",
        back: "Major living indigenous languages of Paraguay (co-official nationwide), the Andes (Peru/Bolivia/Ecuador), and Mexico — vital pillars of identity and Spanish lexis.",
        level: "SL",
      },
      {
        front: "de ahí que + subjuntivo",
        back: "Hence / which is why — a signature HL C1 consecutive connector that ALWAYS requires the subjunctive (*de ahí que sea imprescindible...*).",
        level: "HL",
      },
      {
        front: "la política panhispánica (RAE + ASALE)",
        back: "The collaborative language policy of 23 Spanish language academies affirming Spanish as a pluricentric language without a single geographical owner.",
        level: "HL",
      },
      {
        front: "sustantivos epicenos / colectivos inclusivos",
        back: "Gender-neutral collective nouns (*el alumnado, la ciudadanía, el profesorado, la juventud*) used at HL to achieve smooth inclusivity without awkward slashes.",
        level: "HL",
      },
      {
        front: "ser un arma de doble filo / poner de relieve",
        back: "To be a double-edged sword / to highlight or throw into sharp relief — natural Band 10–12 idioms for formal essays and oral debates.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Impersonal value/necessity triggers + `que` (*es imprescindible que, conviene que, urge que, es lamentable que*) take the **present subjunctive**; without `que` (general advice), they take the **infinitive**.",
      "Affirmative certainty (*es verdad que, es evidente que, es obvio que, es innegable que*) takes the **indicative** — negate them (*no es evidente que*) and they switch to the **subjunctive**.",
      "`Aunque` takes the **indicative** for an acknowledged fact (*Aunque hay secularización...*) and the **subjunctive** for a hypothetical concession (*Aunque no seas creyente...*).",
      "Over 90% of Spanish speakers worldwide use **seseo** and universal plural **ustedes** (all of Latin America + the Canary Islands); **vosotros** and **distinción** are specific to Peninsular Spain.",
      "Rioplatense **voseo** drops stem diphthongs in the present indicative and stresses the final syllable (*vos tenés, podés, querés, sos*), and forms affirmative imperatives by dropping `-r` + accent (*¡hablá!, ¡comé!, ¡vení!*).",
      "Spain's three co-official regional languages are **catalán/valenciano**, **gallego**, and **euskera** (Europe's oldest living non-Indo-European language isolate).",
      "Latin America's indigenous languages (*quechua, náhuatl, guaraní, maya, aimara*) are living pillars of identity and gave global Spanish everyday words (*chocolate, aguacate, tomate, cancha, papa, mate*).",
      "In IB Paper 1 and Individual Oral tasks, avoid monolithic stereotypes: contrast Spain and Latin American sub-regions (e.g. secular Uruguay vs syncretic Oaxaca, or Madrid vs Bogotá).",
      "[HL] The C1 consecutive connector **`de ahí que`** ('hence / therefore') ALWAYS triggers the **subjunctive** (*de ahí que convenga fomentar...*).",
      "[HL] Replace repetitive IGCSE anchors (*creo que, muy bueno, hay problemas*) with nominalisations, epicene nouns (*el alumnado, la ciudadanía*), and precise verbs (*matizar, incidir en, salvaguardar*).",
    ],
    misconceptions: [
      {
        wrong: "«Es innegable que el estrés afecte a los jóvenes» — using subjunctive because 'innegable' looks negative.",
        right: "«Es innegable que el estrés **afecta** a los jóvenes.» *Innegable* means 'undeniable' = 100% certainty, so it demands the **indicative**! Only negated certainty (*No es innegable que... / No es cierto que...*) triggers the subjunctive.",
        level: "SL",
      },
      {
        wrong: "Treating Peninsular Spanish (Madrid/Castilla) as 'real Spanish' and Latin American varieties or *voseo* as informal slang.",
        right: "Spanish is a **pluricentric language** (*lengua policéntrica*). Educated *voseo* in Buenos Aires, *seseo* in Bogotá, and Mexican lexis are 100% standard and fully endorsed by RAE and ASALE.",
        level: "SL",
      },
      {
        wrong: "Writing *«vos tienes»* or *«vos puedés»* when attempting Rioplatense *voseo*.",
        right: "Present indicative *voseo* NEVER undergoes *e → ie* or *o → ue* stem diphthongisation: it is **vos tenés**, **vos podés**, **vos querés**, **vos volvés**, and **vos sos**.",
        level: "SL",
      },
      {
        wrong: "Assuming *euskera* (Basque) is a dialect of Spanish or a Romance language like Catalan and Galician.",
        right: "*Catalán* and *gallego* are distinct Romance languages descended from Latin (not dialects of Castilian!), while **euskera** is a pre-Roman **language isolate** unrelated to Latin or any known language family.",
        level: "SL",
      },
      {
        wrong: "Claiming all Latin American societies are uniformly devoutly Catholic and socially conservative.",
        right: "Latin America spans profound diversity: Uruguay has been constitutionally secular for over a century, Argentina legalised equal marriage in 2010, evangelical churches are growing rapidly, and Andean/Mexican communities practise vibrant religious syncretism.",
        level: "SL",
      },
      {
        wrong: "Using *«de ahí que es necesario...»* (indicative) in an HL Paper 1 essay.",
        right: "Always follow **`de ahí que`** with the **subjunctive**: *«de ahí que **sea** / **resulte** necesario...»* Using indicative here is a classic Band 8 ceiling slip.",
        level: "HL",
      },
      {
        wrong: "Assuming *Spanglish* proves a speaker lacks mastery of either Spanish or English.",
        right: "Sociolinguists demonstrate that fluent *code-switching* (*alternancia de códigos*) obeys strict grammatical constraints and functions as a sophisticated marker of bicultural US Hispanic identity.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Using the infinitive after `que` (*«Es imprescindible que reducir el estrés»*) — either drop `que` (*Es imprescindible reducir...*) OR conjugate in the subjunctive (*Es imprescindible que reduzcamos...*).",
      "Forgetting written accents (*tildes*) on Theme 1 core nouns and verbs: *salud* (no tilde) vs *nutrición, alimentación, hábito, estrés, físico, psicológica, bilingüismo* (diaeresis `ü`!), *español* (`ñ`!), *tenés, hablás*.",
      "Mixing *tú* and *usted* (or *vosotros* and *ustedes*) randomly inside the same Paper 1 *carta formal* or *blog* — this damages **Criterion C (Conceptual Understanding: Audience & Register)** immediately.",
      "False-friend traps in health/identity essays: writing *soportar* for 'support' (means 'endure/tolerate' — use *apoyar / respaldar*), *sensible* for 'sensible' (use *sensato*), or *actualmente* for 'actually' (use *en realidad*).",
      "Using the Peninsular verb *coger* casually in a Latin American dialogue or cultural context where *tomar* or *agarrar* is required.",
      "Listing generic clichés in the Individual Oral (*«La cultura hispana es muy interesante y la familia es muy importante»*) instead of naming a concrete cultural anchor (*la sobremesa*, *los sellos de advertencia*, *la Ciclovía de Bogotá*, *el bilingüismo guaraní*).",
      "[HL] Over-stuffing awkward memorised idioms into a formal *informe* where crisp nominalisation and C1 connectors (*si bien, no obstante, de ahí que*) match the register far better.",
    ],
    mnemonics: [
      {
        topic: "Impersonal Subjunctive vs Indicative Gate",
        device: "V-E-N = Subjuntivo · C-O-V = Indicativo",
        explanation:
          "**V**alue judgments (*es bueno/lamentable que*), **E**ssentiality/Advice (*es imprescindible / conviene / urge que*), and **N**egated certainty (*no es cierto que*) trigger **Subjuntivo**. Affirmative **C**ertainty (*es cierto que*), **O**bviousness (*es obvio/evidente que*), and **V**erifiable truth (*es verdad / innegable que*) keep **Indicativo**.",
        level: "SL",
      },
      {
        topic: "Rioplatense Voseo in 3 Seconds",
        device: "Drop `-r`, Add `-s`, Accent the Last (No Diphthongs!)",
        explanation:
          "Take the infinitive (*hablar, tener, poder, vivir*): drop `-r` → add `-s` → accent the final vowel (**hablás, tenés, podés, vivís**). For affirmative commands, just drop `-r` and accent the final vowel (**¡hablá!, ¡tené!, ¡vení!**). Only *ser* (**sos**) and imperative *ir* (**andá**) break the pattern!",
        level: "SL",
      },
      {
        topic: "[HL] The C1 Paragraph Engine for Identity Debates",
        device: "S · N · D (Si bien → No obstante → De ahí que)",
        explanation:
          "Open with a fair concession (**Si bien** + indicative), pivot to your sharper counter-argument (**No obstante**, conviene matizar que...), and seal with a high-register subjunctive consequence (**De ahí que** + subjuntivo).",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Chile & Mexico's Black Octagonal Food Labels (*Sellos de advertencia*)",
        detail:
          "Chile's 2016 *Ley de Etiquetado* banned cartoon mascots on sugary cereals and placed stark black stop-sign octagons (*«ALTO EN AZÚCARES»*) on packaging, cutting sugary beverage purchases by nearly 24% and inspiring Mexico, Argentina, Colombia, Peru, and Uruguay.",
        emoji: "🛑",
      },
      {
        title: "Bogotá's Sunday *Ciclovía*",
        detail:
          "Since 1974, Colombia's capital closes over 120 km of main avenues to motor traffic every Sunday and public holiday, welcoming more than 1.5 million cyclists, runners, and families — transforming public streets into an egalitarian space for physical and social well-being.",
        emoji: "🚴",
      },
      {
        title: "Paraguay's National Spanish–Guaraní Bilingualism",
        detail:
          "Unlike any other nation in the Americas, Paraguay grants an indigenous language (*el guaraní*) full co-official status spoken by the majority of the population alongside Spanish — proving that ancestral language vitality and modern national identity can coexist.",
        emoji: "🗣️",
      },
      {
        title: "Spain's 024 Mental-Health Helpline & Youth Well-being Shift",
        detail:
          "Launched in May 2022, Spain's free 24-hour **024** helpline received over 100,000 calls in its first year, reflecting a generational cultural shift among Hispanic youth toward dismantling mental-health stigma (*romper el tabú*).",
        emoji: "🧠",
      },
      {
        title: "Reclaiming Indigenous Textiles (*Huipiles* & *Polleras*)",
        detail:
          "Young indigenous designers in Oaxaca, Guatemala, and La Paz are defending ancestral weaving patterns against global fast-fashion appropriation while wearing traditional garments proudly in universities, parliaments, and contemporary fashion runways.",
        emoji: "🧵",
      },
    ],
    videos: [
      {
        title: "Impersonal Expressions + Subjunctive in Spanish (B2–C1 Guide)",
        channel: "YouTube Search · Spanish B Grammar",
        url: "https://www.youtube.com/results?search_query=expresiones+impersonales+subjuntivo+espanol+B2",
      },
      {
        title: "Variedades del español: voseo, seseo y léxico hispanoamericano",
        channel: "YouTube Search · Lingüística Hispánica",
        url: "https://www.youtube.com/results?search_query=variedades+del+espanol+voseo+seseo+latinoamerica",
      },
      {
        title: "Las lenguas cooficiales de España: catalán, gallego y euskera",
        channel: "YouTube Search · Cultura Hispánica",
        url: "https://www.youtube.com/results?search_query=lenguas+cooficiales+de+espana+catalan+gallego+euskera",
      },
      {
        title: "Conectores C1 y lenguaje inclusivo (RAE) — IB Spanish B HL",
        channel: "YouTube Search · Español C1 / IB HL",
        url: "https://www.youtube.com/results?search_query=conectores+C1+espanol+de+ahi+que+subjuntivo+RAE",
      },
    ],
    formulas: [
      {
        name: "Impersonal Value / Necessity + Subjunctive",
        formula: "Es imprescindible / Conviene / Urge / Resulta fundamental + que + Presente de Subjuntivo",
        note: "Use for health, well-being & policy recommendations aimed at a specific subject (*Conviene que los jóvenes prioricen el descanso*).",
        level: "SL",
      },
      {
        name: "Impersonal Certainty (Affirmative vs Negated)",
        formula: "Es evidente / Es innegable + que + Indicativo  ↔  No es cierto / No es evidente + que + Subjuntivo",
        note: "Remember: *innegable* is affirmative certainty → indicative!",
        level: "SL",
      },
      {
        name: "Impersonal Generalisation (Zero Specific Subject)",
        formula: "Es imprescindible / Conviene / Resulta aconsejable + Infinitivo",
        note: "Never place `que` directly before an infinitive.",
        level: "SL",
      },
      {
        name: "Concessive Nuance (`Aunque` Dual-Mood Rule)",
        formula: "Aunque + Indicativo (known fact)  |  Aunque + Subjuntivo (hypothetical / 'even if')",
        note: "Essential for balancing tradition and modernity without cultural stereotypes.",
        level: "SL",
      },
      {
        name: "Opinion Polarity (`Creer / Pensar / Opinar`)",
        formula: "Creo / Considero que + Indicativo  ↔  No creo / Dudo que + Subjuntivo",
        note: "Use *considerar / sostener / estimar* to upgrade basic *creer*.",
        level: "SL",
      },
      {
        name: "Rioplatense *Voseo* Present Indicative Formula",
        formula: "-ar → -ás (hablás)  |  -er → -és (tenés, podés)  |  -ir → -ís (vivís)  |  ser → sos",
        note: "Never diphthongise the stem (*tenés*, NOT *tienés*; *podés*, NOT *puedés*).",
        level: "SL",
      },
      {
        name: "Rioplatense *Voseo* Affirmative Imperative",
        formula: "Infinitivo − r + tilde final: hablar → ¡hablá! · tener → ¡tené! · venir → ¡vení! (ir → ¡andá!)",
        note: "Recognise instantly in Paper 2 Listening/Reading tracks from Argentina & Uruguay.",
        level: "SL",
      },
      {
        name: "Refuting Stereotypes (`Lejos de`)",
        formula: "Lejos de + Infinitivo, [cláusula principal]",
        note: "e.g. *Lejos de debilitar la identidad, el bilingüismo la enriquece.*",
        level: "SL",
      },
      {
        name: "High-Register Purpose (`Con el fin de que`)",
        formula: "Con el fin de que / A fin de que / Para que + Subjuntivo",
        note: "Always subjunctive when two different subjects appear; drop `que` + infinitive when same subject.",
        level: "SL",
      },
      {
        name: "[HL] C1 Consecutive Subjunctive Connector (`De ahí que`)",
        formula: "[Causa / argumento]; de ahí que + Presente / Imperfecto de Subjuntivo",
        note: "Signature Band 10–12 conclusion linker (*de ahí que sea imprescindible proteger las lenguas originarias*).",
        level: "HL",
      },
      {
        name: "[HL] Balanced Counter-Argument Architecture",
        formula: "Si bien (es cierto que) + Indicativo, no obstante conviene matizar que...",
        note: "Sustains critical equilibrium across HL 450–600w essays and IO Part 3 debates.",
        level: "HL",
      },
      {
        name: "[HL] Nominalisation & Precision Verb Frame",
        formula: "La proliferación / El auge / La preservación de [sustantivo] incide en / menoscaba / fortalece...",
        note: "Eliminates repetitive *hay / afecta mucho / es muy importante*.",
        level: "HL",
      },
    ],
  },
};
