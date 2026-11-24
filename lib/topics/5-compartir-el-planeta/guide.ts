import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "5-compartir-el-planeta",
  title: "Theme 5: Compartir el planeta (Sharing the Planet)",
  strand: "Prescribed Themes 4–5",
  icon: "🌍",
  level: "SL",
  summary:
    "Explore environmental sustainability, human rights, ethical globalisation, and urban–rural inequality across Spain and Latin America while mastering concessive structures (aunque + indicative vs subjunctive) and HL C1 counter-argumentation.",
  intro:
    "**Compartir el planeta** asks how Hispanophone societies balance ecological survival, human dignity, and economic globalisation. At post-IGCSE IB Diploma Spanish B (B1 → B2/C1, aligned to the provisional FA2029 subject brief), naming green habits like *reciclar* is no longer enough: examiners reward **specific Hispanophone case studies** (Amazonia, Doñana, *la España vaciada*, Medellín, Atacama), **nuanced concessive syntax** (`aunque` + indicative vs subjunctive), and — especially at HL — **disciplined counter-argumentation** (`si bien es cierto que…, no obstante…, de ahí que + subjuntivo`).",
  guide: [
    // =========================================================================
    // SECTION 1: El medio ambiente y la crisis climática
    // =========================================================================
    {
      id: "medio-ambiente-sostenibilidad",
      heading: "El medio ambiente y la crisis climática (Environment & Sustainability)",
      level: "SL",
      discovery: {
        problem:
          "Compare these two sentences from a Spanish editorial about drought in Andalusia:\n\n1. *Aunque **llueve** menos cada año en el sur de España, todavía se despilfarra agua en cultivos intensivos.*\n2. *Aunque **llueva** este invierno, los acuíferos de Doñana tardarán años en recuperarse.*\n\nBoth use *aunque* (“although / even if”). Why does sentence 1 take **llueve** (indicative) while sentence 2 takes **llueva** (subjunctive)?",
        idea:
          "In sentence 1, declining rainfall is an **established, known fact** the writer treats as real → **indicative** (*aunque* = “although / even though”). In sentence 2, winter rain is **uncertain / hypothetical / future**, and the writer dismisses its effect even if it happens → **subjunctive** (*aunque* = “even if”). That single mood switch carries major meaning at IB B2–C1!",
      },
      body: `To move beyond GCSE/IGCSE climate clichés (*hay mucha contaminación*, *debemos reciclar*), anchor your Spanish B essays and Individual Oral in concrete environmental tensions across the Spanish-speaking world:

- **La deforestación de la Amazonia:** Across Peru, Colombia, Ecuador, Bolivia, and Brazil, the Amazon acts as a vital **sumidero de carbono** (carbon sink). Key drivers include **la tala ilegal** (illegal logging), **la ganadería extensiva** (extensive cattle ranching), **la minería informal**, and **los incendios provocados**. Losing primary rainforest threatens **la biodiversidad** and pushes the biome towards an irreversible **punto de no retorno** (tipping point).
- **La desertificación y el estrés hídrico en España:** Roughly three-quarters of mainland Spain faces desertification risk. Regions such as Murcia, Almería, and Andalusia confront chronic **sequía** (drought) and **estrés hídrico** (water stress). Around the **Parque Nacional de Doñana**, over-extraction of groundwater (**sobreexplotación de acuíferos**) for irrigated agriculture illustrates the clash between rural livelihoods and ecosystem preservation.
- **La transición energética y la economía circular:** Rather than the linear “extract–use–dispose” model (**usar y tirar**) fuelled by **la obsolescencia programada** (planned obsolescence), **la economía circular** prioritises **reducir, reparar, reutilizar y reciclar** (*las 4R*). In energy, **Costa Rica** generates nearly all its electricity from **fuentes renovables** (hydroelectric, geothermal, wind, solar), while Spain has become a European leader in **energía eólica y solar fotovoltaica** — though rural communities sometimes debate the impact of giant solar plants on farmland.

### Concessive Structures: *Aunque*, *A pesar de que* & *Pese a*

Concessive clauses allow you to acknowledge an obstacle or opposing fact without abandoning your thesis — essential for IB Criterion A (Language) and Criterion B (Message).

| Connector | Mood / Form | Meaning & Use | Hispanophone Example |
|---|---|---|---|
| **aunque + indicativo** | Indicative | **Known fact** (“although / even though”) | *Aunque **existe** una ley forestal, la tala ilegal continúa.* |
| **aunque + subjuntivo** | Present / Imp. Subj. | **Hypothetical, future, or irrelevant** (“even if”) | *Aunque **aprobemos** nuevas leyes, sin vigilancia no bastará.* |
| **a pesar de que + ind. / subj.** | Same reality rule | Formal “despite the fact that” | *A pesar de que **aumenta** la energía solar, persiste la sequía.* |
| **a pesar de / pese a + sustantivo / inf.** | Noun or Infinitive (NO *que*) | Concise C1 nominalisation | *Pese a **la escasez** de agua, el turismo masivo sigue creciendo.* |
| **por mucho que / por más que + subj.** | Always Subjunctive | “No matter how much…” (strong concession) | *Por mucho que **reciclemos**, las multinacionales deben reducir emisiones.* |

Notice the crucial structural difference: **a pesar de** (without *que*) takes a **noun or infinitive** (*a pesar de la sequía*, *a pesar de reciclar*), whereas **a pesar de que** (with *que*) takes a **conjugated verb**!`,
      diagram: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision flowchart for aunque plus indicative versus subjunctive in environmental Spanish">
  <rect x="0" y="0" width="640" height="245" rx="14" fill="#fdf7f4" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="320" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2b140c">Árbol de decisión: «AUNQUE» en contextos medioambientales</text>
  <rect x="200" y="42" width="240" height="38" rx="9" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>
  <text x="320" y="65" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700" fill="#9a3412">¿El hablante presenta el hecho como REAL?</text>
  <line x1="255" y1="80" x2="155" y2="112" stroke="#15803d" stroke-width="2"/>
  <line x1="385" y1="80" x2="485" y2="112" stroke="#0369a1" stroke-width="2"/>
  <text x="180" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#15803d">SÍ (hecho comprobado)</text>
  <text x="460" y="100" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1">NO (hipótesis / futuro / da igual)</text>
  <rect x="24" y="114" width="278" height="114" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="163" y="136" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#14532d">INDICATIVO («although»)</text>
  <text x="163" y="157" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" fill="#1f2937">«Aunque la Amazonia absorbe CO₂,</text>
  <text x="163" y="173" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" fill="#1f2937">la tala ilegal acelera su deterioro.»</text>
  <text x="163" y="198" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#15803d">absorbe · existe · llueve · sube</text>
  <text x="163" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#374151">Verificado en el presente o pasado</text>
  <rect x="338" y="114" width="278" height="114" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.6"/>
  <text x="477" y="136" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0c4a6e">SUBJUNTIVO («even if»)</text>
  <text x="477" y="157" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" fill="#1f2937">«Aunque reduzcamos el plástico hoy,</text>
  <text x="477" y="173" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" fill="#1f2937">hará falta transformar la industria.»</text>
  <text x="477" y="198" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0369a1">reduzcamos · haya · llueva · cueste</text>
  <text x="477" y="216" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#374151">Futuro incierto, hipótesis o concesión</text>
</svg>`,
      diagramCaption:
        "Use indicative after aunque for verified reality (“even though”) and subjunctive for uncertain, future, or hypothetical scenarios (“even if”).",
      workedExamples: [
        {
          title: "Choosing Indicative vs Subjunctive after Aunque",
          problem:
            "Complete the sentence with the correct form of **aumentar** and justify the mood:\n*Aunque el precio de los paneles solares ________ (aumentar) el próximo año, la inversión seguirá siendo rentable a largo plazo.*",
          steps: [
            "Read the time marker **el próximo año** and the main-clause future **seguirá siendo**: the price rise has NOT happened yet — it is hypothetical/future.",
            "Because the speaker presents the rise as an uncertain possibility (“even if the price rises next year”), *aunque* requires the **present subjunctive**.",
            "Take the *yo* present stem of *aumentar* (*aument-*), add the opposite *-ar* subjunctive ending for *él/ella/ello* (**-e**) → **aumente**.",
          ],
          answer: "**aumente** (present subjunctive, expressing a hypothetical future concession).",
          yourTurn: {
            question:
              "Conjugate **ser** in the blank (one word, lowercase):\n*Aunque la transición ecológica ________ (ser) costosa en el futuro, protegerá nuestra biodiversidad.*",
            answer: { type: "text", accept: ["sea"], display: "sea" },
            solution:
              "Future/hypothetical concession (“even if it is costly in the future”) requires the present subjunctive of *ser* → **sea**.",
          },
        },
        {
          title: "Upgrading an IGCSE Sentence with Pese a + Nominalisation",
          problem:
            "Rewrite this B1 sentence into a concise B2–C1 sentence using **pese a** + noun:\n*Hay mucha sequía en Murcia, pero la agricultura sigue exportando fruta.*",
          steps: [
            "Identify the concessive obstacle: *hay mucha sequía* → convert the clause into a precise noun phrase (**la grave sequía** or **la escasez hídrica**).",
            "Place **Pese a** (without *que*!) directly before the noun phrase.",
            "Keep the main clause crisp and formal: *la agricultura murciana sigue exportando fruta* (or *mantiene sus exportaciones agrícolas*).",
          ],
          answer:
            "*Pese a la grave sequía en Murcia, el sector agrícola mantiene sus exportaciones.*",
          yourTurn: {
            question:
              "Fill in the missing two-word connector (**pese a** or **a pesar** — wait: write the exact preposition that goes before a noun in *________ las advertencias científicas, la deforestación prosigue* using the shorter 2-word form starting with *p*):",
            answer: { type: "text", accept: ["pese a"], display: "pese a" },
            solution:
              "Before a noun phrase (*las advertencias científicas*) with no conjugated verb, use **pese a** (or *a pesar de*, without *que*).",
          },
        },
      ],
      keyPoints: [
        "**Aunque + indicativo** states a known fact (“even though”); **aunque + subjuntivo** expresses a hypothetical, future, or dismissed possibility (“even if”).",
        "**Pese a** and **a pesar de** take a **noun or infinitive**; add **que** only when a conjugated verb follows.",
        "Replace generic B1 terms (*basura*, *malo para el planeta*) with B2–C1 precision: **residuos**, **huella de carbono**, **estrés hídrico**, **sumidero de carbono**, **economía circular**.",
        "Always pair global climate claims with Hispanophone specifics: **la Amazonia**, **Doñana**, **Costa Rica**, or **Murcia/Andalucía**.",
      ],
      whyItWorks:
        "IB Language B examiners distinguish Band 7–9 from Band 10–12 by checking whether mood choices actually encode nuance. Switching between *aunque llueve* (documented climate trend) and *aunque llueva* (future policy projection) proves you control the Spanish verb system as a tool for meaning, not mechanical memorisation.",
      strategies: [
        "Check the **main-clause tense** whenever you see *aunque*: a future (*hará*, *seguirá*) or imperative (*debemos actuar*) strongly hints at a hypothetical **subjunctive**.",
        "Build a 4-item “eco-evidence bank” (Amazonia, Doñana, Costa Rica renewables, circular economy) you can adapt to any Paper 1 article, proposal, or IO question.",
        "Avoid the false friend *preservativos* (condoms!) — use **conservación** (environmental conservation) or **conservantes** (food preservatives).",
      ],
      thinkDeeper:
        "Can *aunque + subjuntivo* ever refer to a fact BOTH speakers already know is true? Yes — at C1, speakers sometimes use *aunque + subjuntivo* to **downplay** a known fact as irrelevant to their decision: *Aunque cueste más ahora (and I know it does!), debemos invertir en renovables.* That “rhetorical dismissal” shines in HL essays.",
    },

    // =========================================================================
    // SECTION 2: Derechos humanos, igualdad y paz
    // =========================================================================
    {
      id: "derechos-humanos-igualdad-paz",
      heading: "Derechos humanos, igualdad y paz (Human Rights, Equality & Peace)",
      level: "SL",
      discovery: {
        problem:
          "Read this excerpt from a youth manifesto in Colombia:\n*Exigimos que las autoridades **garanticen** la consulta previa a los pueblos originarios y que nadie **sufra** represalias por defender su territorio.*\n\nWhy are both *garanticen* and *sufra* in the subjunctive, and why does the manifesto say *pueblos originarios* rather than just *la gente del campo*?",
        idea:
          "Verbs of demand and advocacy (*exigir que*, *reivindicar que*, *pedir que*) trigger **WEIRDO subjunctive** because they express a desired outcome rather than a guaranteed reality. Meanwhile, **pueblos originarios / indígenas** and **consulta previa** (prior consultation under ILO Convention 169) signal authentic cultural and legal awareness across Latin America.",
      },
      body: `Human rights debates in the Hispanophone world span constitutional protections, gender equity, indigenous sovereignty, press freedom, and transitional justice after conflict:

- **Derechos territoriales de los pueblos originarios:** Indigenous communities across Peru, Ecuador, Bolivia, Colombia, Guatemala, and Mexico protect vast shares of Latin America's intact forests. International law recognises their right to **consulta previa, libre e informada** before mining, oil, or logging projects begin on ancestral lands. Tragically, Latin America remains the most dangerous region for **defensores ambientales** (environmental human-rights defenders), highlighting the tension between extractivism and **impunidad** (impunity).
- **Igualdad de género y derechos sociales:** Across Spain and Latin America, civic movements campaign against **la brecha salarial** (gender pay gap), **el techo de cristal** (glass ceiling), and **la violencia de género** (gender-based violence). Spain's 2004 *Ley Integral contra la Violencia de Género* and Latin American grassroots campaigns (*Ni Una Menos*) show how legislation must be paired with **coeducación** and cultural change.
- **Libertad de expresión y prensa independiente:** Investigative journalists in parts of Latin America confront threats, self-censorship (**autocensura**), and disinformation, making **la libertad de prensa** a cornerstone of democratic accountability.
- **Resolución de conflictos y memoria histórica:** How do societies heal after dictatorship or civil war?
  - **Colombia:** The 2016 *Acuerdo de Paz* and the *Comisión de la Verdad* pursue **justicia restaurativa**, **reparación a las víctimas**, and **reconciliación**.
  - **España:** Debates around the *Ley de Memoria Democrática* examine how to honour victims of the Civil War and Francoist dictatorship while fostering civic coexistence (**convivencia**).
  - **Argentina & Chile:** Organisations such as the *Abuelas de Plaza de Mayo* pioneered forensic truth-seeking under the banner **Memoria, Verdad y Justicia**.

### High-Impact Advocacy Grammar (Subjunctive of Influence & Value Judgements)

| Function | Trigger Frame | Example in Theme 5 |
|---|---|---|
| **Demand / Advocacy** | *exigir / reivindicar / instar a que + subj.* | *Instamos al gobierno a que **proteja** a los líderes comunitarios.* |
| **Moral Evaluation** | *es inadmisible / imprescindible que + subj.* | *Resulta inadmisible que todavía **exista** tal brecha salarial.* |
| **Negative Antecedent** | *no hay nadie / nada que + subj.* | *No hay ningún avance económico que **justifique** vulnerar derechos.* |
| **Purpose of Reform** | *para que / con el fin de que + subj.* | *Se creó la comisión con el fin de que las víctimas **sean** escuchadas.* |`,
      diagram: `<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four pillars of human rights and peace in the Hispanophone world">
  <rect x="0" y="0" width="640" height="235" rx="14" fill="#fdf7f4" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="320" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2b140c">Los cuatro pilares de Derechos Humanos, Igualdad y Paz</text>
  <rect x="20" y="46" width="140" height="142" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="90" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#9a3412">Pueblos originarios</text>
  <text x="90" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Consulta previa</text>
  <text x="90" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Tierras ancestrales</text>
  <text x="90" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Defensores</text>
  <text x="90" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">  ambientales</text>
  <text x="90" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#9a3412">Perú · Colombia · Ecuador</text>

  <rect x="174" y="46" width="140" height="142" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.5"/>
  <text x="244" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#115e59">Igualdad de género</text>
  <text x="244" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Brecha salarial</text>
  <text x="244" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Techo de cristal</text>
  <text x="244" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Coeducación</text>
  <text x="244" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Ni Una Menos</text>
  <text x="244" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#115e59">España · Cono Sur · México</text>

  <rect x="328" y="46" width="140" height="142" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>
  <text x="398" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0c4a6e">Libertad de prensa</text>
  <text x="398" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Prensa independiente</text>
  <text x="398" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Autocensura</text>
  <text x="398" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Transparencia</text>
  <text x="398" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Rendición de cuentas</text>
  <text x="398" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0c4a6e">Democracia y medios</text>

  <rect x="482" y="46" width="140" height="142" rx="10" fill="#fef9c3" stroke="#a16207" stroke-width="1.5"/>
  <text x="552" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#713f12">Memoria y paz</text>
  <text x="552" y="92" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Justicia restaurativa</text>
  <text x="552" y="112" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Reparación</text>
  <text x="552" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Memoria histórica</text>
  <text x="552" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Reconciliación</text>
  <text x="552" y="172" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#713f12">Colombia · Argentina · España</text>

  <rect x="20" y="198" width="602" height="26" rx="7" fill="#faeae2" stroke="#eed3c6" stroke-width="1"/>
  <text x="321" y="215" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#6b483a">Estructuras clave: exigir que + subj. · resulta inadmisible que + subj. · con el fin de que + subj.</text>
</svg>`,
      diagramCaption:
        "Four core domains of Human Rights, Equality & Peace across Spain and Latin America, paired with high-scoring advocacy subjunctive frames.",
      workedExamples: [
        {
          title: "Deploying Subjunctive with a Negative Antecedent",
          problem:
            "Complete the sentence with the correct form of **poder**:\n*No existe ningún tratado comercial que ________ (poder) situarse por encima de los derechos humanos.*",
          steps: [
            "Spot the negated antecedent: **No existe ningún tratado comercial que…** — the speaker asserts that such a treaty does not exist.",
            "In Spanish, a relative clause describing a **non-existent or negated antecedent** requires the **subjunctive**.",
            "Conjugate *poder* in the 3rd-person singular present subjunctive (stem change *o → ue*): **pueda**.",
          ],
          answer: "**pueda** (present subjunctive triggered by the negative antecedent *no existe ningún… que*).",
          yourTurn: {
            question:
              "Conjugate **proteger** (3rd-person singular present subjunctive, watch the *g → j* spelling change!):\n*Instamos al Estado a que ________ (proteger) a los defensores del medio ambiente.*",
            answer: { type: "text", accept: ["proteja"], display: "proteja" },
            solution:
              "From *yo protejo*, the *g* shifts to *j* before *-a* to preserve the /x/ sound → **proteja**.",
          },
        },
        {
          title: "Selecting Register & Audience for a Human-Rights Speech (Discurso)",
          problem:
            "Paper 1 asks you to address a regional youth summit on indigenous land rights (*discurso* to delegates and civic leaders). Should you open with *¡Hola chicos!* or a formal salutation, and what pronouns fit?",
          steps: [
            "Apply the IB **Conceptual Understandings** (Audience, Context, Purpose): a regional summit with delegates and civic leaders is a **formal/semi-formal public context**.",
            "Open with an inclusive formal vocative: *Estimados delegados, autoridades y jóvenes comprometidos con la justicia social:*",
            "Use **ustedes** (standard formal plural across Latin America and formal Spain) alongside inclusive **nosotros** (*debemos exigir*, *no podemos permanecer indiferentes*) to build solidarity and persuade.",
          ],
          answer:
            "Use a formal salutation, **ustedes / nosotros** register, rhetorical questions, and clear calls to action (*exigimos que se garantice…*).",
          yourTurn: {
            question:
              "What two-word Spanish phrase translates “gender pay gap” (lowercase, no article)?",
            answer: { type: "text", accept: ["brecha salarial"], display: "brecha salarial" },
            solution:
              "**brecha salarial** (literally “wage gap”; often specified as *brecha salarial de género*).",
          },
        },
      ],
      keyPoints: [
        "Pair human-rights themes with precise Spanish terminology: **vulnerar derechos** (violate rights), **impunidad**, **consulta previa**, **brecha salarial**, **justicia restaurativa**, **memoria histórica**.",
        "Advocacy verbs (*exigir*, *reivindicar*, *instar a*), impersonal judgements (*es inadmisible que*), and negated antecedents (*no hay ley que*) all demand the **subjunctive**.",
        "Watch orthographic changes in present subjunctive verbs common in Theme 5: *proteger → **proteja***, *garantizar → **garantice***, *reducir → **reduzca***, *exigir → **exija***.",
        "Avoid simplistic heroes-vs-villains narratives: acknowledge tensions (e.g. economic development vs ancestral land rights) to reach the top IB bands.",
      ],
      whyItWorks:
        "Criterion B (Message) awards top marks when ideas are developed with cultural depth rather than translated English platitudes. Citing *la consulta previa*, *la Comisión de la Verdad*, or *la brecha salarial* shows genuine intercultural engagement with the Hispanophone world.",
      strategies: [
        "Use **vulnerar** or **conculcar** instead of the anglicised verb *violar* when referring to abstract human rights (*vulnerar los derechos fundamentales*).",
        "In Paper 2 Reading, pay close attention to **tone** in human-rights articles: distinguish objective reporting (*informa*, *señala*) from denunciation (*denuncia*, *condena*, *reivindica*).",
        "For the Individual Oral, link a visual stimulus (SL) or literary extract (HL) directly to one specific Hispanophone right or historical-memory debate.",
      ],
      thinkDeeper:
        "Why does Spanish distinguish between *la igualdad* (treating everyone identically) and **la equidad** (adjusting support so historically marginalised groups reach fair outcomes)? Using both words deliberately in a Paper 1 editorial or IO Part 3 discussion immediately signals C1 conceptual precision.",
    },

    // =========================================================================
    // SECTION 3: Globalización, ética y entorno urbano-rural
    // =========================================================================
    {
      id: "globalizacion-etica-entorno-urbano",
      heading: "Globalización, ética y entorno urbano-rural (Globalization, Ethics & Urban/Rural)",
      level: "SL",
      discovery: {
        problem:
          "Compare two geographic headlines from the Hispanophone press:\n- **España:** *«El 70 % de la población vive en apenas el 15 % del territorio: los pueblos de Soria y Teruel luchan contra el cierre de escuelas y consultorios.»*\n- **América Latina:** *«Más de 21 millones de personas conviven en la Zona Metropolitana del Valle de México entre el tráfico crónico, la falta de agua y la expansión urbana.»*\n\nWhat single overarching force links **la España vaciada** and **las megaciudades latinoamericanas**, and how do their challenges mirror each other?",
        idea:
          "Both stem from **el éxodo rural** (rural-to-urban migration) driven by centralised employment, services, and globalisation. Rural Spain suffers **despoblación, envejecimiento y pérdida de servicios básicos**, while Latin American megacities (CDMX, Bogotá, Lima, Buenos Aires) struggle with **sobrepoblación, congestión, contaminación atmosférica y desigualdad territorial** — yet both demand fairer territorial investment.",
      },
      body: `Globalisation connects consumers in Madrid, Bogotá, and Singapore to producers and ecosystems thousands of kilometres away — raising urgent ethical questions about consumption and where people can afford to live:

- **Comercio justo y consumo responsable:** Conventional global supply chains (**cadenas de suministro**) frequently squeeze smallholder farmers of coffee, cocoa, and quinoa. **El comercio justo** (fair trade) guarantees a **precio mínimo justo**, **condiciones laborales dignas**, **trazabilidad** (traceability), and community investment across cooperatives in Colombia, Peru, Guatemala, and Bolivia.
- **Moda rápida (*fast fashion*) y ecoblanqueo (*greenwashing*):** Ultra-cheap clothing fuels **hiperconsumo**, textile waste, and labour exploitation. A stark symbol in the Hispanophone world is **el desierto de Atacama (Chile)**, where tens of thousands of tonnes of unsold or discarded garments imported via the port of Iquique accumulate in open-air dumps. Meanwhile, savvy IB writers critique **el ecoblanqueo** (greenwashing) — when corporations market superficial eco-labels without cutting total output.
- **La España vaciada (Rural Depopulation):** Vast inland provinces of Spain — Soria, Teruel, Cuenca, Zamora — have some of the lowest population densities in Western Europe. Young people leave for Madrid, Barcelona, or coastal hubs seeking university and work, triggering a vicious cycle: fewer inhabitants → closure of rural clinics (*consultorios*), bus routes, and schools → even less attraction for families. Remedies debated in Spain include **fibra óptica rural**, **teletrabajo**, **incentivos fiscales**, and **relevo generacional agrario**.
- **Megaciudades latinoamericanas e innovación urbana:** Over 80% of Latin America is urbanised. Megacities like **Ciudad de México, Buenos Aires, Bogotá y Lima** offer vibrant culture and opportunity, yet face **asentamientos informales** (informal settlements), **gentrificación** (pushing locals out of historic barrios), smog, and long commutes. Inspiring counter-models exist: **Medellín** pioneered **urbanismo social** (linking hillside *comunas* via the *Metrocable* and *parques biblioteca*), while **Bogotá** created the world-famous weekly **Ciclovía** and *TransMilenio* corridors.

### Choosing the Optimal Paper 1 Text Type for Globalisation & Urban Issues

| IB Text Type | Category | Register & Audience | Ideal Theme 5 Prompt |
|---|---|---|---|
| **Artículo de opinión** | Mass media | Semi-formal / engaging; general readership | Evaluating fast fashion vs ethical consumption |
| **Propuesta** | Professional | Formal (*usted/ustedes*); council or committee | Proposing a rural broadband & youth-housing plan for *la España vaciada* |
| **Folleto informativo** | Professional | Direct, persuasive (*tú/usted*); local citizens | Promoting a school/town fair-trade campaign |
| **Carta al director** | Mass media | Formal (*Estimado/a director/a*); newspaper editor | Reacting critically to a news report on gentrification or water waste |`,
      diagram: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mirror comparison between España vaciada rural depopulation and Latin American megacities">
  <rect x="0" y="0" width="640" height="240" rx="14" fill="#fdf7f4" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="320" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2b140c">Dos caras del desequilibrio territorial: Éxodo rural y urbanización</text>

  <rect x="20" y="46" width="255" height="174" rx="10" fill="#fef9c3" stroke="#a16207" stroke-width="1.6"/>
  <text x="147" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700" fill="#713f12">La España vaciada (Interior rural)</text>
  <text x="34" y="92" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">• Soria, Teruel, Cuenca, Zamora</text>
  <text x="34" y="112" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">• Envejecimiento y baja natalidad</text>
  <text x="34" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">• Cierre de escuelas y consultorios</text>
  <text x="34" y="152" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">• Abandono agrícola → incendios</text>
  <rect x="34" y="168" width="227" height="38" rx="7" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
  <text x="147" y="184" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#92400e">Soluciones clave:</text>
  <text x="147" y="199" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">Teletrabajo · Fibra óptica · Servicios públicos</text>

  <line x1="280" y1="120" x2="356" y2="120" stroke="#c2410c" stroke-width="2.5"/>
  <polygon points="356,114 366,120 356,126" fill="#c2410c"/>
  <text x="320" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#c2410c">Éxodo rural</text>
  <text x="320" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#6b483a">Empleo y</text>
  <text x="320" y="151" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#6b483a">universidad</text>

  <rect x="368" y="46" width="252" height="174" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.6"/>
  <text x="494" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700" fill="#115e59">Megaciudades latinoamericanas</text>
  <text x="382" y="92" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">• CDMX, Bogotá, Lima, Buenos Aires</text>
  <text x="382" y="112" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">• Congestión y contaminación del aire</text>
  <text x="382" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">• Gentrificación y vivienda cara</text>
  <text x="382" y="152" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">• Asentamientos informales y agua</text>
  <rect x="382" y="168" width="224" height="38" rx="7" fill="#ffffff" stroke="#0f766e" stroke-width="1"/>
  <text x="494" y="184" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f766e">Innovación urbana:</text>
  <text x="494" y="199" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">Metrocable (Medellín) · Ciclovía (Bogotá)</text>
</svg>`,
      diagramCaption:
        "Rural depopulation in inland Spain and rapid megacity growth in Latin America represent opposite poles of the same territorial imbalance.",
      workedExamples: [
        {
          title: "Matching Conceptual Understandings to a Paper 1 Prompt",
          problem:
            "Prompt: *Tu municipio en el interior de España pierde población joven cada año. Quieres presentar un plan concreto al alcalde para atraer a familias y teletrabajadores.* Options: **un blog personal**, **una propuesta**, **una entrevista**. Which text type is MOST appropriate and why?",
          steps: [
            "Identify **Audience**: *el alcalde* (an institutional authority expecting formal register *usted* and actionable headings).",
            "Identify **Purpose**: presenting a concrete, persuasive policy plan (*un plan concreto*) with justification, measures, and expected impact.",
            "Eliminate distractors: a *blog personal* is too informal and broad; an *entrevista* uses Q&A dialogue rather than a structured action plan. **Una propuesta** hits 6/6 on Criterion C.",
          ],
          answer:
            "**Una propuesta** — uses formal register (*usted*), clear subheadings (*Introducción, Diagnóstico, Medidas propuestas, Conclusión*), and persuasive modal/subjunctive structures (*proponemos que se subvencione…*).",
          yourTurn: {
            question:
              "What two-word Spanish term means “fair trade” (lowercase, no article)?",
            answer: { type: "text", accept: ["comercio justo"], display: "comercio justo" },
            solution:
              "**comercio justo** — certifies fair wages, safe conditions, and sustainable production across global supply chains.",
          },
        },
        {
          title: "Critiquing Greenwashing Using Idiomatic B2–C1 Spanish",
          problem:
            "Upgrade this B1 sentence about fast fashion: *Muchas tiendas dicen que son verdes, pero producen demasiada ropa barata.*",
          steps: [
            "Replace *dicen que son verdes* with **recurren al ecoblanqueo** (resort to greenwashing) or **proyectan una imagen sostenible**.",
            "Introduce a sharp contrast connector (**mientras que** or **al tiempo que**).",
            "Upgrade *producen demasiada ropa barata* to **fomentan el hiperconsumo de moda rápida** (fuel overconsumption of fast fashion).",
          ],
          answer:
            "*Numerosas marcas recurren al ecoblanqueo para proyectar una imagen sostenible, al tiempo que fomentan el hiperconsumo de moda rápida.*",
          yourTurn: {
            question:
              "Which Chilean desert has become an international symbol of discarded fast-fashion waste (one word)?",
            answer: { type: "text", accept: ["Atacama", "atacama"], display: "Atacama" },
            solution:
              "The **Atacama** Desert (*el desierto de Atacama*) in northern Chile accumulates tens of thousands of tonnes of discarded clothing each year.",
          },
        },
      ],
      keyPoints: [
        "Use authentic Spanish equivalents instead of borrowing English lazily: **comercio justo**, **moda rápida**, **ecoblanqueo** (greenwashing), **cadena de suministro**, **huella ecológica**.",
        "Contrast **la España vaciada** (rural depopulation, ageing, service cuts) with **megaciudades latinoamericanas** (congestion, gentrification, informal settlements) — plus positive innovations like Medellín's *urbanismo social*.",
        "On Paper 1 Criterion C (6 marks), choose the **single most suitable text type** by matching Audience, Context, and Purpose — a formal *propuesta* to a mayor outscores a casual *blog* every time.",
        "Connect personal consumer choices (*consumo responsable*, *segunda mano*) with systemic regulation (*trazabilidad*, *impuestos ambientales*) for balanced IB arguments.",
      ],
      whyItWorks:
        "Globalisation prompts easily become vague if students only talk about “cheap clothes” or “big cities”. Framing the issue through specific territorial contrasts (*Teruel vs CDMX*, *Atacama vs fair-trade cooperatives in Colombia*) gives your arguments immediate authenticity and analytical bite.",
      strategies: [
        "When writing a **propuesta**, include 4 visible conventions: formal title, addressee (*Dirigida a…*), bulleted/numbered subheadings (*Objetivos, Medidas, Viabilidad*), and a formal closing.",
        "Balance individual agency (*como consumidores podemos…*) with structural policy (*no obstante, los gobiernos deben legislar…*) so your argument never sounds naive.",
        "Watch the false friend *actualmente*: it means **currently**, NOT “actually” (use **en realidad** or **de hecho** for “actually”).",
      ],
      thinkDeeper:
        "Can remote work (*el teletrabajo*) genuinely revive *la España vaciada*, or does it risk creating “rural gentrification” that raises housing prices for local agricultural workers? Exploring that second-order consequence is prime Band 10–12 thinking.",
    },

    // =========================================================================
    // SECTION 4: [HL] Nuanced Global Argumentation & Counter-Argument Mastery
    // =========================================================================
    {
      id: "argumentacion-etica-global-hl",
      heading: "[HL] Nuanced Global Argumentation & Counter-Argument Mastery",
      level: "HL",
      discovery: {
        problem:
          "Read two HL Paper 1 paragraphs arguing for stricter carbon taxes:\n- **Draft A:** *Los impuestos al carbono son muy importantes. Algunas personas dicen que son caros. Pero yo pienso que el planeta es más importante y debemos pagar.*\n- **Draft B:** *Si bien es cierto que las tasas al carbono pueden encarecer el transporte a corto plazo, no obstante el coste de la inacción climática resultaría infinitamente superior; de ahí que sea imprescindible diseñar ayudas que protejan a las familias vulnerables.*\n\nIdentify the **three rhetorical connectors** in Draft B that elevate it from Band 6–7 to Band 10–12 — and spot the verb mood triggered by the third one!",
        idea:
          "Draft B uses the classic C1 three-step counter-argument arc: (1) **Si bien es cierto que + indicativo** (concedes the opponent's strongest point respectfully), (2) **no obstante** (pivots cleanly to a deeper rebuttal), and (3) **de ahí que + subjuntivo** (*sea imprescindible*) to synthesise a balanced policy conclusion!",
      },
      body: `At **Higher Level (HL)**, Paper 1 requires **450–600 words** of sustained, register-controlled persuasion, and the HL Individual Oral Part 3 tests spontaneous, nuanced global debate. One-sided lists of points (“firstly… secondly… finally…”) cap you around Band 7–8. To unlock **Band 10–12** across Criteria A (Language) and B (Message), master **counter-argument architecture**:

### The 4-Stage HL Counter-Argument Blueprint

1. **Concesión estratégica (Concede the strongest objection):** Show intellectual fairness before refuting it.
   - *Si bien es cierto que + indicativo…* (“While it is true that…”)
   - *Aun reconociendo que + indicativo…* (“Even acknowledging that…”)
   - *No cabe duda de que + indicativo…* (“There is no doubt that…”)
   - *Por mucho que + subjuntivo…* (“No matter how much…”)
2. **Giro y refutación matizada (Pivot & Rebut with evidence):** Never simply say *pero no estoy de acuerdo*. Pivot with authority:
   - *No obstante, conviene matizar que…* (“Nevertheless, it is worth qualifying that…”)
   - *Sin embargo, resulta reduccionista suponer que + subjuntivo…* (“However, it is reductive to assume that…”)
   - *Ahora bien, dicha postura pasa por alto que…* (“Now then, that stance overlooks the fact that…”)
   - *Lejos de + infinitivo, …* (“Far from [solving]…, it…”)
3. **Contraste de causa falsa (*no es que + subj., sino que + ind.*):** Sharply correct a misconception:
   - *No es que los ciudadanos **carezcan** de conciencia ecológica, sino que **faltan** alternativas asequibles.*
4. **Síntesis consecutiva (*de ahí que + subjuntivo*):** Turn your rebuttal into a principled conclusion:
   - *De ahí que **resulte** urgente fomentar la economía circular.* (“Hence it is urgent to promote…”)
   - *De ahí que los gobiernos **hayan tenido** que regular el ecoblanqueo.* (“Hence governments have had to…”)

### Critical HL Mood Rule: **«De ahí que» ALWAYS takes the Subjunctive!**

Because *de ahí que* refers back to a cause already known and focuses on its logical consequence as an evaluation, standard academic Spanish **always** uses the **subjunctive** after it — even when the consequence is a real fact!
- Present consequence: *De ahí que **sea** urgente legislar.* (NOT *es*)
- Past/completed consequence: *De ahí que tantas ONG **hayan denunciado** la impunidad.* (present perfect subjunctive) or *De ahí que se **aprobara** la ley.* (imperfect subjunctive)

### Nominalisation & Hedging for Band 10–12 Polish

| Band 7–8 (Clause-Heavy / Repetitive) | Band 10–12 (Nominalised & Nuanced HL) |
|---|---|
| *Porque muchas personas se van de los pueblos, las tiendas cierran.* | ***El éxodo juvenil** conlleva **el cierre progresivo** del comercio local.* |
| *Es obvio que toda la globalización es mala.* | ***Cabe matizar** que, si bien la globalización fomenta el intercambio, **acentúa las asimetrías** si carece de regulación.* |
| *Los políticos no hacen nada.* | ***La falta de voluntad política** perpetúa la inacción institucional.* |`,
      diagram: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-stage HL C1 counter-argument architecture diagram">
  <rect x="0" y="0" width="640" height="220" rx="14" fill="#fdf7f4" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="320" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2b140c">Arquitectura C1 (HL): Del contraargumento a la síntesis</text>

  <rect x="18" y="48" width="138" height="122" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.6"/>
  <text x="87" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#0c4a6e">1. CONCESIÓN</text>
  <text x="87" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#0369a1">Si bien es cierto que</text>
  <text x="87" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1f2937">+ INDICATIVO</text>
  <text x="87" y="128" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">Reconoce la objeción</text>
  <text x="87" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">más sólida con rigor</text>

  <polygon points="161,103 171,109 161,115" fill="#6b483a"/>

  <rect x="175" y="48" width="138" height="122" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.6"/>
  <text x="244" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#9a3412">2. REFUTACIÓN</text>
  <text x="244" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#c2410c">No obstante, ...</text>
  <text x="244" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1f2937">Ahora bien, conviene...</text>
  <text x="244" y="128" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">Rebaja el alcance o</text>
  <text x="244" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">expone un fallo clave</text>

  <polygon points="318,103 328,109 318,115" fill="#6b483a"/>

  <rect x="332" y="48" width="138" height="122" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.6"/>
  <text x="401" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#115e59">3. EVIDENCIA</text>
  <text x="401" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#0f766e">Anclaje hispano</text>
  <text x="401" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1f2937">Ej.: Doñana, Atacama,</text>
  <text x="401" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1f2937">Medellín, Costa Rica</text>
  <text x="401" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">Sustenta con hechos</text>

  <polygon points="475,103 485,109 475,115" fill="#6b483a"/>

  <rect x="489" y="48" width="133" height="122" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="555" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#14532d">4. SÍNTESIS</text>
  <text x="555" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#15803d">De ahí que + SUBJ.</text>
  <text x="555" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#1f2937">sea · resulte · deban</text>
  <text x="555" y="128" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">Propuesta equilibrada</text>
  <text x="555" y="143" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#374151">y cierre memorable</text>

  <rect x="18" y="182" width="604" height="26" rx="7" fill="#faeae2" stroke="#eed3c6" stroke-width="1"/>
  <text x="320" y="199" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#6b483a">Fórmula anti-simplismo: «No es que + SUBJ., sino que + IND.» — ideal para Paper 1 HL (450–600 palabras)</text>
</svg>`,
      diagramCaption:
        "Weaving Concession → Rebuttal → Hispanophone Evidence → Subjunctive Synthesis (de ahí que) turns a flat opinion into Band 10–12 HL persuasion.",
      workedExamples: [
        {
          title: "Mastering `De ahí que` + Subjunctive",
          problem:
            "Complete the HL conclusion with the correct form of **resultar**:\n*La industria textil genera millones de toneladas de residuos al año; de ahí que ________ (resultar) imperativo legislar sobre la trazabilidad.*",
          steps: [
            "Identify the consecutive connector **de ahí que** (“hence / that is why”).",
            "Recall the inviolable C1 grammar rule: **de ahí que ALWAYS requires the subjunctive**.",
            "Conjugate *resultar* (3rd-person singular present subjunctive, *-ar* → *-e*) → **resulte**.",
          ],
          answer: "**resulte** (*de ahí que resulte imperativo legislar sobre la trazabilidad*).",
          yourTurn: {
            question:
              "Conjugate **deber** (3rd-person plural present subjunctive) after *de ahí que*:\n*El agua dulce es un bien finito; de ahí que las administraciones ________ (deber) priorizar el riego eficiente.*",
            answer: { type: "text", accept: ["deban"], display: "deban" },
            solution:
              "**de ahí que** always triggers the subjunctive; *deber* in 3rd-person plural present subjunctive is **deban**.",
          },
        },
        {
          title: "Refuting a False Dichotomy with `No es que + Subj., sino que + Ind.`",
          problem:
            "Correct the verb moods in this HL draft about *la España vaciada*:\n*No es que los jóvenes **odian** la vida rural, sino que **falten** empleos cualificados y transporte público.*",
          steps: [
            "Rule: **No es que** negates a cause/belief → requires the **subjunctive** (*odian* ❌ → **odien** ✅).",
            "Rule: **sino que** affirms the real cause → requires the **indicative** (*falten* ❌ → **faltan** ✅).",
            "Check agreement: *empleos cualificados y transporte público* is plural → **faltan**.",
          ],
          answer:
            "*No es que los jóvenes **odien** la vida rural, sino que **faltan** empleos cualificados y transporte público.*",
          yourTurn: {
            question:
              "Conjugate **carecer** (3rd-person plural present subjunctive; watch *-cer → -zc-*) in:\n*No es que los consumidores ________ (carecer) de ética, sino que los precios justos resultan inaccesibles para muchos.*",
            answer: { type: "text", accept: ["carezcan"], display: "carezcan" },
            solution:
              "From *yo carezco*, the present subjunctive stem is *carezc-* → 3rd-person plural **carezcan**.",
          },
        },
      ],
      keyPoints: [
        "**Si bien es cierto que + indicativo** introduces a respectful, Band 10–12 concession before a rebuttal with **no obstante** or **ahora bien**.",
        "**De ahí que** ALWAYS governs the **subjunctive** (*de ahí que sea / resulte / hayan exigido*), even when stating an objective result.",
        "Use **no es que + subjuntivo, sino que + indicativo** to dismantle oversimplified claims cleanly.",
        "In HL Paper 1 (450–600 words), dedicate one full body paragraph to a **counter-argument + rebuttal** to prove mature, balanced analysis.",
      ],
      whyItWorks:
        "Top-band IB rubrics explicitly reward ‘complex language used effectively to convey subtle nuance’ and ‘coherent, persuasive argumentation’. Conceding a rival perspective before refuting it signals critical independence and prevents the robotic tone of formulaic essays.",
      strategies: [
        "Never use *pero* twice in the same paragraph: alternate **no obstante**, **sin embargo**, **ahora bien**, **con todo**, and **por el contrario**.",
        "When speaking in HL IO Part 3, buy 3 seconds of thinking time naturally with C1 hedging phrases: *Es una cuestión compleja; si bien es cierto que…, conviene no olvidar que…*",
        "Watch spelling of **por consiguiente** and **sin embargo** (two words!) and always place commas around parenthetical **no obstante** (*, no obstante,*).",
      ],
      thinkDeeper:
        "Compare *porque + indicativo* (“because”) with *no porque + subjuntivo, sino porque + indicativo* (“not because…, but because…”). How does that parallel *no es que + subj., sino que + ind.*? Both reflect the core principle of Spanish mood: **affirmation = indicative; rejected/non-asserted cause = subjunctive**.",
    },
  ],

  // ===========================================================================
  // LEARN SMART
  // ===========================================================================
  learn: {
    flashcards: [
      {
        front: "la huella de carbono / la huella ecológica",
        back: "carbon footprint / ecological footprint — *Reducir nuestra huella de carbono exige transformar el transporte.*",
        level: "SL",
      },
      {
        front: "el sumidero de carbono",
        back: "carbon sink — *La Amazonia actúa como un sumidero de carbono insustituible.*",
        level: "SL",
      },
      {
        front: "la tala ilegal y la ganadería extensiva",
        back: "illegal logging and extensive cattle ranching — primary drivers of Amazon deforestation.",
        level: "SL",
      },
      {
        front: "el estrés hídrico / la desertificación",
        back: "water stress / desertification — acute challenges across Andalusia, Murcia, and northern Mexico.",
        level: "SL",
      },
      {
        front: "la economía circular vs la obsolescencia programada",
        back: "circular economy (reduce, repair, reuse, recycle) vs planned obsolescence (designing goods to fail early).",
        level: "SL",
      },
      {
        front: "aunque + indicativo vs aunque + subjuntivo",
        back: "Indicative = known fact (“although / even though”); Subjunctive = hypothetical, future, or dismissed (“even if”).",
        level: "SL",
      },
      {
        front: "a pesar de / pese a + sustantivo o infinitivo",
        back: "despite + noun/infinitive (NO *que*!). Add *que* only before a conjugated verb (*pese a que llueve/llueva*).",
        level: "SL",
      },
      {
        front: "la consulta previa, libre e informada",
        back: "free, prior, and informed consent — legal right of *pueblos originarios* before extractive projects on ancestral lands.",
        level: "SL",
      },
      {
        front: "vulnerar los derechos humanos / la impunidad",
        back: "to violate human rights (more idiomatic than *violar*) / impunity (lack of accountability).",
        level: "SL",
      },
      {
        front: "la brecha salarial y el techo de cristal",
        back: "gender pay gap and glass ceiling — key vocabulary for *igualdad de género* essays.",
        level: "SL",
      },
      {
        front: "la justicia restaurativa y la memoria histórica",
        back: "restorative justice and historical memory — central to post-conflict reconciliation in Colombia, Argentina, and Spain.",
        level: "SL",
      },
      {
        front: "el comercio justo y la trazabilidad",
        back: "fair trade and supply-chain traceability — guaranteeing living wages (*salarios dignos*) for smallholder farmers.",
        level: "SL",
      },
      {
        front: "el ecoblanqueo (greenwashing) y la moda rápida",
        back: "misleading eco-marketing and fast fashion — symbolised by textile dumps in Chile's Atacama Desert.",
        level: "SL",
      },
      {
        front: "la España vaciada y el éxodo rural",
        back: "depopulated rural inland Spain (Soria, Teruel, Cuenca) caused by rural-to-urban migration (*éxodo rural*).",
        level: "SL",
      },
      {
        front: "el urbanismo social (Medellín) / la gentrificación",
        back: "social urbanism integrating hillside neighbourhoods (Metrocable) vs gentrification displacing low-income residents.",
        level: "SL",
      },
      {
        front: "[HL] de ahí que + subjuntivo",
        back: "hence / that is why — ALWAYS takes the subjunctive (*de ahí que sea imprescindible legislar*).",
        level: "HL",
      },
      {
        front: "[HL] si bien es cierto que + ind., no obstante…",
        back: "while it is true that…, nevertheless… — flagship C1 concession-and-rebuttal structure.",
        level: "HL",
      },
      {
        front: "[HL] no es que + subjuntivo, sino que + indicativo",
        back: "it is not that…, but rather that… — dismantles false assumptions with high grammatical precision.",
        level: "HL",
      },
    ],
    mustKnow: [
      "**Aunque + indicativo** introduces a verified fact (“even though”), whereas **aunque + subjuntivo** introduces a hypothetical, uncertain, or future scenario (“even if”).",
      "**Pese a** and **a pesar de** (without *que*) MUST be followed by a noun or infinitive, never a conjugated verb.",
      "**De ahí que** (HL) and **por mucho que** ALWAYS require the **subjunctive**.",
      "Advocacy verbs (*exigir que*, *reivindicar que*, *instar a que*) and moral judgements (*resulta inadmisible que*) trigger the **subjunctive**.",
      "Replace generic English-calque phrases with authentic B2–C1 Spanish: **vulnerar derechos** (not *violar*), **conservación** (not *preservativos*), **ecoblanqueo**, **estrés hídrico**, **comercio justo**.",
      "Ground Theme 5 arguments in real Hispanophone examples: **Amazonia**, **Doñana**, **Costa Rica**, **Atacama**, **la España vaciada**, **Medellín**, and **Colombia's Acuerdo de Paz**.",
      "On Paper 1 Criterion C (6 marks), match your text type (*propuesta, artículo de opinión, carta al director, folleto, discurso*) to **Audience, Context, and Purpose** — never force a casual *blog* onto a formal authority.",
      "Use **no es que + subjuntivo, sino que + indicativo** to rebut oversimplified arguments without sounding dismissive.",
      "Aim for **250–400 words at SL** and **450–600 words at HL** in Paper 1, integrating at least one developed counter-argument at HL.",
    ],
    misconceptions: [
      {
        wrong: "«Aunque» always takes the subjunctive.",
        right:
          "Only when the action is **hypothetical, future, or rhetorically dismissed** (“even if”). For known, factual reality (“even though”), *aunque* takes the **indicative** (*Aunque la sequía empeora, seguimos despilfarrando agua*).",
        level: "SL",
      },
      {
        wrong: "«A pesar de llueve mucho» / «Pese a tenemos leyes».",
        right:
          "Without **que**, *a pesar de* and *pese a* can only take a **noun or infinitive** (*a pesar de la lluvia*, *pese a tener leyes*). Before a conjugated verb, you must add **que** (*a pesar de que llueve*).",
        level: "SL",
      },
      {
        wrong: "Using «preservativos» for environmental preservation or «actualmente» for “actually”.",
        right:
          "*Preservativos* means condoms — use **conservación** (or **conservantes** for food). *Actualmente* means “currently” — use **en realidad** or **de hecho** for “actually”.",
        level: "SL",
      },
      {
        wrong: "Translating «people are» as «las personas es» or «la gente son».",
        right:
          "**La gente** is grammatically **singular** (*la gente consume*, *la gente exige*); **las personas** is plural (*las personas exigen*).",
        level: "SL",
      },
      {
        wrong: "Using indicative after «de ahí que» because the result is a real fact (*de ahí que es necesario*).",
        right:
          "**De ahí que** ALWAYS takes the **subjunctive** in standard academic Spanish: *de ahí que **sea** necesario*, *de ahí que **hayan** protestado*.",
        level: "HL",
      },
      {
        wrong: "Using *pero* instead of *sino que* after a negated clause (*No es que falten leyes, pero no se cumplen*).",
        right:
          "When correcting a direct negation with a new conjugated verb, Spanish requires **sino que** (+ indicative): *No es que falten leyes, **sino que** no se cumplen*.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing generic IGCSE climate lists (*hay que apagar las luces y reciclar*) instead of engaging with structural tensions (*economía circular, transición justa, responsabilidad corporativa*).",
      "Ignoring the target audience on Paper 1 — for example, using *tú* and emojis in a **propuesta** addressed to a town council (*ayuntamiento*) or *alcalde*.",
      "Dropping orthographic accents (*tildes*) on Theme 5 high-frequency nouns and verbs: **ecológico, hídrico, energía, deforestación, indígena, transición, mayoría, actuaría**.",
      "Using *de ahí que* + indicative (*de ahí que es urgente*) in HL essays, turning an ambitious C1 structure into a grammatical error.",
      "On Paper 2 Reading True/False + Justification questions, copying an entire 35-word paragraph instead of the **exact minimal phrase** that proves the statement.",
      "Forgetting spelling-change subjunctives inside advocacy clauses: writing *protega* instead of **proteja**, *garantize* instead of **garantice**, or *reducea* instead of **reduzca**.",
      "Presenting a completely one-sided HL essay (450–600 words) with zero counter-argument or qualification, which caps Criterion B below Band 10–12.",
    ],
    mnemonics: [
      {
        topic: "Aunque: Indicativo vs Subjuntivo",
        device: "FACT = INDICATIVE · IF = SUBJUNCTIVE (F-I / I-S)",
        explanation:
          "Translate *aunque* into English in your head: if it means **even though** (a verified **F**act), pick **I**ndicative. If it means **even if** (an uncertain **I**f), pick **S**ubjunctive!",
        level: "SL",
      },
      {
        topic: "A pesar de / Pese a (with or without que)",
        device: "Sin QUE → Nombre o Infinitivo · Con QUE → Verbo Conjugado",
        explanation:
          "No *que* = Noun or Infinitive (*pese a la crisis*, *a pesar de reciclar*). Add *que* = Conjugated verb (*pese a que existe una crisis*).",
        level: "SL",
      },
      {
        topic: "[HL] 4-Step Counter-Argument Paragraph",
        device: "C-R-E-S (Concedo → Refuto → Evidencio → Sintetizo)",
        explanation:
          "**C**oncedo (*Si bien es cierto que…*) → **R**efuto (*no obstante…*) → **E**videncio (*como demuestra Doñana/Atacama…*) → **S**intetizo (*de ahí que + subjuntivo…*).",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Costa Rica: Reversing Deforestation & Renewable Power",
        detail:
          "Through its 1996 *Pago por Servicios Ambientales* (PES) law, Costa Rica reversed severe forest loss — expanding forest cover from roughly a quarter of the country in the 1980s to over half today — while generating over 98% of electricity from renewable sources.",
        emoji: "🌿",
      },
      {
        title: "Parque Nacional de Doñana & Water Stress in Andalusia",
        detail:
          "One of Europe's most vital wetlands faces severe aquifer depletion due to multi-year drought and illegal boreholes serving intensive strawberry farms — a flagship case study of economy vs ecology in Spain.",
        emoji: "💧",
      },
      {
        title: "El Desierto de Atacama: Fast Fashion's Graveyard",
        detail:
          "Northern Chile's Atacama Desert receives tens of thousands of tonnes of unsold and discarded garments from around the globe via Iquique's free-trade zone, vividly illustrating the hidden cost of *moda rápida*.",
        emoji: "👕",
      },
      {
        title: "Medellín's Urbanismo Social & Bogotá's Ciclovía",
        detail:
          "Rather than leaving steep informal neighbourhoods isolated, Medellín built cable-car transit (*Metrocable*) and public libraries (*parques biblioteca*), showing how equitable urban design reduces violence and exclusion.",
        emoji: "🚡",
      },
      {
        title: "La España Vaciada: Teruel y Soria",
        detail:
          "Grassroots platforms such as *Teruel Existe* and *Soria ¡Ya!* pushed rural depopulation onto Spain's national agenda, demanding rail links, broadband (*fibra óptica*), and rural healthcare.",
        emoji: "🏘️",
      },
      {
        title: "Pueblos Originarios y la Consulta Previa en la Amazonia",
        detail:
          "Satellite studies show that legally titled indigenous territories in the Peruvian, Colombian, and Ecuadorian Amazon experience significantly lower deforestation rates than surrounding unprotected zones.",
        emoji: "🌳",
      },
    ],
    videos: [
      {
        title: "Aunque + Indicativo vs Subjuntivo — Complete Spanish B2/C1 Guide",
        channel: "YouTube Search · Spanish Grammar B2–C1",
        url: "https://www.youtube.com/results?search_query=aunque+indicativo+vs+subjuntivo+espanol+B2+C1",
      },
      {
        title: "La España vaciada: causas, consecuencias y soluciones",
        channel: "YouTube Search · Documental en español",
        url: "https://www.youtube.com/results?search_query=la+espana+vaciada+causas+y+soluciones+documental",
      },
      {
        title: "Economía circular y moda rápida en el desierto de Atacama",
        channel: "YouTube Search · BBC Mundo / DW Español",
        url: "https://www.youtube.com/results?search_query=desierto+de+atacama+ropa+moda+rapida+DW+BBC+Mundo",
      },
      {
        title: "Conectores argumentativos C1: si bien, no obstante, de ahí que",
        channel: "YouTube Search · Español C1 DELE / IB HL",
        url: "https://www.youtube.com/results?search_query=conectores+argumentativos+C1+de+ahi+que+subjuntivo+si+bien",
      },
    ],
    formulas: [
      {
        name: "Concession (Verified Fact)",
        formula: "Aunque / A pesar de que + INDICATIVO",
        note: "Means “although / even though” — the event is real and known.",
        level: "SL",
      },
      {
        name: "Concession (Hypothetical / Future / Dismissed)",
        formula: "Aunque / A pesar de que + SUBJUNTIVO",
        note: "Means “even if” — uncertain, future, or rhetorically downplayed.",
        level: "SL",
      },
      {
        name: "Concise Nominal / Infinitive Concession",
        formula: "Pese a / A pesar de + SUSTANTIVO o INFINITIVO",
        note: "Never add *que* unless a conjugated verb follows.",
        level: "SL",
      },
      {
        name: "Emphatic Concession (“No matter how much”)",
        formula: "Por mucho que / Por más que + SUBJUNTIVO",
        note: "Takes subjunctive for hypothetical/future or habitual dismissal.",
        level: "SL",
      },
      {
        name: "Advocacy & Human-Rights Demands",
        formula: "Exigir / Reivindicar / Instar a que + SUBJUNTIVO",
        note: "Requires a subject change between main and subordinate clause.",
        level: "SL",
      },
      {
        name: "Impersonal Moral Judgement",
        formula: "Resulta inadmisible / imprescindible que + SUBJUNTIVO",
        note: "Upgrades basic *es importante que* to B2–C1 register.",
        level: "SL",
      },
      {
        name: "Negated Antecedent (Absolute Principle)",
        formula: "No existe ningún / nadie / nada que + SUBJUNTIVO",
        note: "E.g. *No existe ningún argumento que justifique la impunidad.*",
        level: "SL",
      },
      {
        name: "[HL] Formal Consecutive Synthesis",
        formula: "De ahí que + SUBJUNTIVO",
        note: "ALWAYS subjunctive (*sea, resulte, hayan aprobado*), never indicative!",
        level: "HL",
      },
      {
        name: "[HL] Balanced Concession & Pivot",
        formula: "Si bien es cierto que + IND., no obstante + IND.",
        note: "Flagship HL counter-argument frame for 450–600w Paper 1 essays.",
        level: "HL",
      },
      {
        name: "[HL] Rebutting a False Cause",
        formula: "No es que + SUBJUNTIVO, sino que + INDICATIVO",
        note: "Rejects an oversimplified explanation and asserts the true cause.",
        level: "HL",
      },
    ],
  },
};
