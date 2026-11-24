import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "6-grammar-text-types",
  title: "IB Grammar Mastery & Text-Type Conventions",
  strand: "Grammar & Text Types",
  icon: "⚙️",
  level: "SL",
  summary:
    "Bridge post-IGCSE Spanish (B1) to IB Diploma Band 10–12 (B2–C1): master all four subjunctive tenses, high-stakes contrasts (por/para, ser/estar, past tenses, si-clauses), all 3 IB text-type categories with the 5 Conceptual Understandings, and HL C1 cohesion.",
  intro:
    "At IGCSE you could score highly by narrating familiar routines in the indicative. In **IB Diploma Spanish B** (aligned provisionally to the FA2029 subject brief), Paper 1 Criterion A (*Language*, 12 marks) rewards accurate complex structures — especially the **subjunctive**, **conditional si-clauses**, and **natural discourse markers** — while Criterion C (*Conceptual Understanding*, 6 marks) tests whether you match **audience, context, purpose, meaning, and variation** to the single best **IB text type**. Master the systems in this topic and every Paper 1 essay, Paper 2 comprehension, and Individual Oral immediately rises a band.",
  guide: [
    // =========================================================================
    // SECTION 1: SUBJUNTIVO COMPLETO
    // =========================================================================
    {
      id: "subjuntivo-completo",
      heading: "Mastering the Subjunctive (Present, Imperfect, Perfect & Pluperfect)",
      level: "SL",
      discovery: {
        problem:
          "Compare these two pairs of Spanish sentences carefully before reading the rules:\n\n1. *Espero **terminar** el proyecto hoy.* vs *Espero que **termines** el proyecto hoy.*\n2. *Busco un piso que **tiene** balcón.* vs *Busco un piso que **tenga** balcón.*\n\nWhy does the first sentence in Pair 1 avoid the subjunctive completely, and what subtle change in real-world meaning occurs between *tiene* and *tenga* in Pair 2?",
        idea:
          "In Pair 1, *Espero terminar* has **one subject** (*yo* hopes *yo* finishes), so Spanish uses an **infinitive** — no `que`, no subjunctive! Only when the subject **changes** (*yo* hopes that *tú* finishes) does WEIRDO trigger the subjunctive (*termines*). In Pair 2, *tiene* (indicative) means you already know a specific flat exists and you are locating it; *tenga* (subjunctive) means you are searching for **any** flat that might have a balcony — you do not know yet if such a flat exists!",
      },
      body: `The subjunctive (*el modo subjuntivo*) is **not a tense** — it is a **mood** that signals subjectivity, non-factuality, uncompleted future events, desires, emotions, doubt, or non-existent antecedents. Indicative declares facts; subjunctive frames attitude, influence, or uncertainty.

### 1. Forming the Present Subjunctive (*Presente de subjuntivo*)
Start from the **1st-person singular (*yo*) present indicative**, drop the *-o*, and add the **opposite vowel endings** (*-ar → -e, -es, -e, -emos, -éis, -en*; *-er/-ir → -a, -as, -a, -amos, -áis, -an*):
- **-go / irregular yo stems carry through all 6 forms:** *tener (tengo) → tenga, tengas, tenga, tengamos...*; *hacer (hago) → haga*; *poner (pongo) → ponga*; *salir (salgo) → salga*; *venir (vengo) → venga*; *decir (digo) → diga*; *conocer (conozco) → conozca*; *construir (construyo) → construya*.
- **Spelling changes before -e (-car / -gar / -zar):** *buscar → busque*, *llegar → llegue*, *empezar → empiece* (remember *z → c* before *e*).
- **Stem-changing verbs:** *-ar* and *-er* verbs change only in the "boot" (*pensar → piense / pensemos*; *poder → pueda / podamos*). **-ir stem-changers** ALSO shift in *nosotros/vosotros* (*e → i* or *o → u*): *dormir → duerma / **durmamos***, *sentir → sienta / **sintamos***, *pedir → pida / **pidamos***.
- **The 6 DISHES Irregulars:** *dar → **dé, des, dé, demos, deis, den***; *ir → **vaya***; *ser → **sea***; *haber → **haya***; *estar → **esté, estés, esté, estemos, estéis, estén***; *saber → **sepa***.

### 2. The Four Core Subjunctive Environments

| Environment | Rule & Triggers | Authentic IB B2–C1 Example |
|---|---|---|
| **1. WEIRDO Noun Clauses** (Subject 1 ≠ Subject 2 + *que*) | **W**ishes (*querer, esperar*), **E**motions (*me preocupa, temo, alegra*), **I**mpersonal (*es imprescindible / lamentable / probable que*), **R**ecommendations (*recomendar, pedir, exigir*), **D**oubt/Denial (*dudar, no creer, no es verdad que*), ***O**jalá (que)*. | *Es imprescindible que los gobiernos **inviertan** en transporte público.* (Contrast certainty: *Es evidente que **invierten**.*) |
| **2. ESCAPA Adverbials** (ALWAYS Subjunctive!) | ***E**n caso de que*, ***S**in que*, ***C**on tal de que*, ***A**ntes de que*, ***P**ara que*, ***A** menos que*. (Without subject change, drop *que* and use infinitive for *antes de, para, sin*.) | *Debemos actuar hoy **antes de que sea** demasiado tarde y **para que las futuras generaciones disfruten** de un planeta habitable.* |
| **3. Time & Concessive Clauses** (Mood shifts meaning!) | **Time** (*cuando, en cuanto, tan pronto como, hasta que*): **Subjunctive** for *uncompleted future* actions; **Indicative** for *habitual or past* facts. **Concession** (*aunque*): **Indicative** = known fact ("even though"); **Subjunctive** = hypothetical/irrelevant ("even if"). | *Cuando **llegues** a Madrid, llámame* (future) vs *Cuando **llegué** a Madrid, llovía* (past). *Aunque **llueve**, salimos* (it IS raining) vs *Aunque **llueva**, saldremos* (even if it rains). |
| **4. Indefinite / Negative Adjective Clauses** | **Subjunctive** when the antecedent is unknown, hypothetical, or denied (*no hay nadie que..., buscamos una solución que...*). **Indicative** when referring to a specific known entity. | *Buscamos un voluntario que **hable** quechua y español* (anyone who qualifies) vs *Conocemos a una voluntaria que **habla** quechua* (specific person). |

### 3. Expanding to Past & Compound Subjunctive Tenses
- **Imperfect Subjunctive (*Imperfecto de subjuntivo*):** Take the **3rd-person plural (*ellos*) preterite**, drop *-ron*, and add **-ra, -ras, -ra, -´ramos, -rais, -ran** (or the equivalent **-se** endings: *-se, -ses, -se, -´semos, -seis, -sen*). Watch the mandatory accent on *nosotros*: *hablaron → habláramos*, *tuvieron → tuvieran*, *fueron → fueran*, *durmieron → durmieran*, *dijeron → dijeran*, *supieron → supieran*.
- **Present Perfect Subjunctive (*Pretérito perfecto de subjuntivo*):** *haya / hayas / haya / hayamos / hayáis / hayan* + past participle. Used when the main verb is **present/future** but the subordinate action is **already completed**: *Me alegra mucho que **hayas aprobado** el examen.*
- **Pluperfect Subjunctive (*Pluscuamperfecto de subjuntivo*):** *hubiera/hubiese* + past participle. Used for past counterfactuals, past regrets with *ojalá*, and Type 3 *si*-clauses: *Ojalá **hubiéramos reciclado** más durante la última década.*

### 4. Sequence of Tenses (*Concordancia temporal*)
When the main-clause trigger is in the **Present, Future, Present Perfect, or Imperative**, use **Present Subjunctive** (simultaneous/future) or **Perfect Subjunctive** (prior). When the main-clause trigger shifts to the **Preterite, Imperfect, Pluperfect, or Conditional**, shift the subordinate verb into the **Imperfect Subjunctive** or **Pluperfect Subjunctive**:
- *El director **pide** que **respetemos** las normas.* → *El director **pidió** / **pediría** que **respetáramos** las normas.*`,
      diagram: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spanish Subjunctive Sequence of Tenses Matrix showing Present and Past main-clause triggers mapping to all four subjunctive tenses">
  <rect x="0" y="0" width="600" height="300" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="28" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" font-weight="800" fill="#2b140c">Subjunctive Sequence of Tenses (Concordancia Temporal)</text>
  <rect x="20" y="52" width="210" height="96" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="125" y="74" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#9a3412">MAIN CLAUSE: PRESENT ZONE</text>
  <text x="125" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">Presente · Futuro · Pret. Perfecto · Imperativo</text>
  <text x="125" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-style="italic" fill="#6b483a">“Es crucial que…” / “Espero que…”</text>
  <text x="125" y="132" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-style="italic" fill="#6b483a">“He pedido que…”</text>
  <path d="M230 82 L285 82" stroke="#c2410c" stroke-width="2" fill="none"/>
  <polygon points="285,77 295,82 285,87" fill="#c2410c"/>
  <path d="M230 120 L285 120" stroke="#0f766e" stroke-width="2" fill="none"/>
  <polygon points="285,115 295,120 285,125" fill="#0f766e"/>
  <rect x="298" y="52" width="282" height="44" rx="8" fill="#ffffff" stroke="#c2410c" stroke-width="1.5"/>
  <text x="310" y="70" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#c2410c">Presente de Subjuntivo (now / future)</text>
  <text x="310" y="86" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">…que el ayuntamiento reduzca el tráfico.</text>
  <rect x="298" y="104" width="282" height="44" rx="8" fill="#ffffff" stroke="#0f766e" stroke-width="1.5"/>
  <text x="310" y="122" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#0f766e">Pret. Perfecto de Subj. (already done)</text>
  <text x="310" y="138" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">…que ya hayan aprobado la reforma.</text>
  <rect x="20" y="172" width="210" height="96" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="125" y="194" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#6d28d9">MAIN CLAUSE: PAST / COND.</text>
  <text x="125" y="214" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">Pretérito · Imperfecto · Condicional</text>
  <text x="125" y="234" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-style="italic" fill="#6b483a">“Me sorprendió que…” / “Quería que…”</text>
  <text x="125" y="252" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-style="italic" fill="#6b483a">“Sería ideal que…”</text>
  <path d="M230 202 L285 202" stroke="#7c3aed" stroke-width="2" fill="none"/>
  <polygon points="285,197 295,202 285,207" fill="#7c3aed"/>
  <path d="M230 240 L285 240" stroke="#be123c" stroke-width="2" fill="none"/>
  <polygon points="285,235 295,240 285,245" fill="#be123c"/>
  <rect x="298" y="172" width="282" height="44" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="310" y="190" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#7c3aed">Imperfecto de Subj. (-ra / -se)</text>
  <text x="310" y="206" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">…que el gobierno protegiera el Amazonas.</text>
  <rect x="298" y="224" width="282" height="44" rx="8" fill="#ffffff" stroke="#be123c" stroke-width="1.5"/>
  <text x="310" y="242" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#be123c">Pluscuamperfecto de Subj. (earlier past)</text>
  <text x="310" y="258" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">…que no hubieran consultado a los vecinos.</text>
  <text x="300" y="288" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#6b483a">Check 1: Subject change or ESCAPA/Time/Unknown antecedent? → Check 2: Main verb zone!</text>
</svg>`,
      diagramCaption:
        "Match the main clause's tense zone (Present/Future vs Past/Conditional) to select the exact subjunctive tense without breaking sequence of tenses.",
      workedExamples: [
        {
          title: "Diagnosing Mood Across WEIRDO, Time & Adjective Clauses",
          problem:
            "Complete with the correct form of the verb in brackets:\n(a) *No creo que la medida ______ (resolver) la brecha digital.*\n(b) *Cuando ______ (terminar, nosotros) los exámenes, viajaremos a Oaxaca.*\n(c) *Es evidente que los jóvenes ______ (usar) las redes a diario.*",
          steps: [
            "(a) **No creo que** expresses doubt/denial (WEIRDO **D**) with a subject change (*yo* → *la medida*). Main verb is present (*creo*), so use **present subjunctive** of *resolver* (*o → ue* boot stem-change): **resuelva**.",
            "(b) **Cuando** refers to an **uncompleted future action** (*viajaremos* is future!), so Spanish demands **present subjunctive**: **terminemos** (never *terminaremos* after *cuando*!).",
            "(c) **Es evidente que** states a **certainty/fact**, NOT doubt or subjectivity. Therefore it takes the **indicative**, not the subjunctive: **usan**.",
          ],
          answer: "(a) **resuelva** · (b) **terminemos** · (c) **usan**",
          yourTurn: {
            question:
              "Conjugate *dormir* in the **present subjunctive** (*nosotros*) to complete: *El médico recomienda que ______ (dormir, nosotros) al menos ocho horas.*",
            answer: {
              type: "text",
              accept: ["durmamos"],
              display: "durmamos",
            },
            solution:
              "*Dormir* is an *-ir* stem-changing verb (*o → ue* in the boot, *o → u* in *nosotros/vosotros*): **durmamos** (not *dormamos* or *duermamos*).",
          },
        },
        {
          title: "Shifting a Recommendation into Imperfect & Pluperfect Subjunctive",
          problem:
            "Rewrite *“Recomiendo que el colegio reduzca el plástico”* after (a) *“El comité recomendó que…”* and (b) express past regret with *“Ojalá…”* using *reducir* (*nosotros*).",
          steps: [
            "(a) Main clause is now **preterite** (*recomendó*), so shift to **imperfect subjunctive**. 3rd-person plural preterite of *reducir* is *redujeron* → drop *-ron* → stem *reduje-* → **redujera** (or **redujese**).",
            "(b) Regret about an unfulfilled past action uses **ojalá + pluperfect subjunctive**: *hubiera/hubiese* (*nosotros* → *hubiéramos* / *hubiésemos*) + past participle *reducido* → **hubiéramos reducido**.",
          ],
          answer: "(a) **redujera** (or **redujese**) · (b) **hubiéramos reducido** (or **hubiésemos reducido**)",
          yourTurn: {
            question:
              "Give the **imperfect subjunctive** (él/ella/usted, *-ra* form) of *tener* to complete: *Sería ideal que cada barrio ______ (tener) un centro cultural.*",
            answer: {
              type: "text",
              accept: ["tuviera", "tuviese"],
              display: "tuviera",
            },
            solution:
              "From 3rd-person plural preterite *tuvieron*, drop *-ron* and add *-ra* (or *-se*): **tuviera** (also correct: *tuviese*).",
          },
        },
      ],
      keyPoints: [
        "No subject change in a WEIRDO clause → use the **infinitive**, not *que + subjunctive* (*Quiero viajar*, NOT *Quiero que viaje*).",
        "Never place the **future tense** directly after *cuando, en cuanto, hasta que, tan pronto como* — use the **present subjunctive** (*cuando llegues*).",
        "**Certainty triggers indicative** (*creo que, es verdad que, es obvio que*); **negated certainty triggers subjunctive** (*no creo que, no es verdad que*).",
        "Every **imperfect subjunctive** form is built 100% regularly from the **ellos preterite** minus *-ron* (including *fueran → fuera*, *supieron → supiera*, *durmieron → durmiera*) — and *nosotros* always carries a written accent (*habláramos, tuviéramos*).",
      ],
      whyItWorks:
        "Spanish separates what the speaker **asserts as real** (indicative) from what the speaker **projects, evaluates, doubts, or leaves open** (subjunctive). Because Paper 1 tasks constantly ask you to persuade, recommend reforms, and evaluate hypothetical consequences, the subjunctive is the grammatical engine of B2–C1 argumentation.",
      strategies: [
        "Run the 3-step check before conjugating any subordinate clause: (1) Trigger present (WEIRDO / ESCAPA / future time / unknown antecedent)? (2) Subject change required? (3) Main verb in Present zone or Past/Conditional zone?",
        "Memorise 4 high-impact Band 10–12 subjunctive frames to weave naturally into every Paper 1 & IO: *Es imprescindible que…*, *A menos que…*, *Aunque resulte difícil…*, and *Sería deseable que…* (+ imperfect subj.).",
      ],
      thinkDeeper:
        "Why does *No dudo que **tienes** razón* take the **indicative**, whereas *Dudo que **tengas** razón* takes the **subjunctive**? Double negation! *No dudar* = “to be certain”, which restores factual assertion and returns the subordinate clause to the indicative.",
    },

    // =========================================================================
    // SECTION 2: CONTRASTES CLAVE (POR/PARA, SER/ESTAR, PAST, SI-CLAUSES)
    // =========================================================================
    {
      id: "contrastes-clave-por-para-ser-estar",
      heading: "High-Stakes Contrasts: Por vs Para, Ser vs Estar, Past Tenses & Si-Clauses",
      level: "SL",
      discovery: {
        problem:
          "Read these two short IB essay sentences and notice how one tiny word flips the logic:\n\n1. *Compré este libro **por** mi hermana* vs *Compré este libro **para** mi hermana.*\n2. *El profesor **es** aburrido* vs *El profesor **está** aburrido.*\n\nExplain the exact meaning difference in both pairs before looking at the framework below.",
        idea:
          "In Pair 1, **por** expresses **exchange/substitution or motive** (“I bought it on behalf of my sister / because of her”), whereas **para** points forward to the **recipient** (“It is a gift for my sister”). In Pair 2, **ser aburrido** defines an inherent trait (“The teacher is boring”), whereas **estar aburrido** describes a temporary emotional state (“The teacher is bored”).",
      },
      body: `Examiners notice post-IGCSE slips instantly: mixing up *por/para*, misusing *ser/estar*, writing *si tendría*, or confusing *pretérito* with *imperfecto* immediately caps Criterion A at Band 7–9. Lock down these five high-stakes systems.

### 1. *Por* (Cause / Channel / Exchange) vs *Para* (Destination / Goal / Deadline)

| Use **POR** (looking back / through / exchange) | Use **PARA** (arrow pointing forward to a target) |
|---|---|
| **Cause / reason:** *Cerraron la playa **por** la contaminación.* | **Purpose / in order to (+ inf.):** *Reciclamos **para** reducir residuos.* |
| **Exchange / price / substitution:** *Pagué 20 € **por** la entrada.* | **Recipient / beneficiary:** *Esta carta es **para** el alcalde.* |
| **Duration / time of day:** *Viví en Quito **por** dos años; estudio **por** la noche.* | **Deadline / specific future point:** *El informe es **para** el viernes.* |
| **Movement through / along / around:** *Caminamos **por** el casco antiguo.* | **Physical destination:** *El tren sale **para** Sevilla.* |
| **Means / passive agent:** *Envié el archivo **por** correo; escrito **por** Lorca.* | **Opinion / comparison / employer:** ***Para** mí es injusto; trabajo **para** una ONG.* |

**High-value idioms:** *por lo tanto* (therefore), *por supuesto* (of course), *por si acaso* (just in case), *por fin* (at last), *para colmo* (to top it all off), *estar por + inf.* (to be in favour of / yet to be done) vs *estar para + inf.* (to be about to).

### 2. *Ser* vs *Estar*: Meaning-Shifting Adjectives, Events & Passive Voice
- **Essential vs State — Meaning Shifts:**

| Adjective | With **SER** (inherent quality) | With **ESTAR** (condition / state / judgement) |
|---|---|---|
| **listo/a** | clever, sharp (*es muy lista*) | ready (*¿estás listo?*) |
| **aburrido/a** | boring (*la charla es aburrida*) | bored (*los alumnos están aburridos*) |
| **rico/a** | wealthy (*una familia rica*) | delicious (*la paella está riquísima*) |
| **seguro/a** | safe (*un barrio seguro*) | sure / certain (*estoy seguro de que…*) |
| **verde** | green in colour (*el césped es verde*) | unripe / inexperienced (*el plátano está verde*) |
| **malo / bueno** | bad/evil or good/kind person | ill (*está malo*) or tasty/recovered (*está bueno*) |
| **orgulloso/a** | arrogant, conceited | proud of (*estoy orgulloso de mi comunidad*) |

- **Events vs Physical Location:** Physical location ALWAYS uses **estar** (*El Museo del Prado **está** en Madrid*), but **where/when an event takes place** uses **ser** (*La ceremonia **es** en el salón de actos a las siete*).
- **Action Passive vs Resultant State:** *La ley **fue aprobada** por el parlamento* (**ser** = action/process) vs *La ley ya **está aprobada*** (**estar** = resulting state).

### 3. Narrative Past Tenses & Preterite Meaning Shifts
- **Pretérito indefinido:** Completed, bounded events moving the plot forward (*Llegué, presenté mi propuesta y ganamos*). Watch verbs that shift meaning in the preterite: *supe* = I found out (vs *sabía* = I knew); *conocí* = I met for the first time (vs *conocía* = I knew); *pude / no pude* = I managed to / I failed to; *quise / no quise* = I tried to / I refused to.
- **Imperfecto:** Background scene-setting, ongoing actions interrupted by the preterite (*Mientras **caminábamos**, **empezó** a llover*), habitual past routines, age, time, and mental states.
- **Pluscuamperfecto (*había + participio*):** The "past before the past" (*Cuando llegamos a la estación, el tren ya **había salido***).

### 4. All Three *Si*-Clauses (*Oraciones condicionales*)
1. **Type 1 (Real / likely):** *Si + **presente de indicativo** → futuro / presente / imperativo*. Example: *Si **reducimos** el consumo eléctrico, **ahorraremos** energía.*
2. **Type 2 (Hypothetical / unlikely now):** *Si + **imperfecto de subjuntivo (-ra/-se)** → **condicional simple***. Example: *Si los ayuntamientos **construyeran** más carriles bici, **habría** menos atascos.* (**NEVER** put *condicional* after *si*! *Si habría* or *Si tendría* is a classic exam killer.)
3. **Type 3 (Counterfactual past regret):** *Si + **pluscuamperfecto de subjuntivo** → **condicional compuesto** (or pluscuamperfecto de subj.)*. Example: *Si **hubiéramos protegido** el humedal, no se **habría perdido** la biodiversidad.*
- **Bonus (*como si*):** *Como si* ("as if") ALWAYS takes **imperfect** or **pluperfect subjunctive**, even after a present verb: *Actúan **como si no existiera** la crisis climática.*

### 5. *Perífrasis verbales* & *Se* Constructions (Band 10–12 Fluency)
- **llevar + gerundio** = have been doing for [time]: *Llevo tres años **colaborando** con un banco de alimentos.*
- **acabar de + infinitivo** = have just done: *Acabamos de **publicar** los resultados de la encuesta.*
- **volver a + infinitivo** = to do again: *No debemos **volver a cometer** el mismo error.*
- **dejar de + infinitivo** = to stop doing: *Muchos jóvenes han **dejado de leer** prensa impresa.*
- **Pasiva refleja vs Se impersonal:** Agree the verb with a plural subject in *pasiva refleja* (*Se **venden** productos ecológicos*; *Se **necesitan** voluntarios*), whereas *se impersonal* with a singular verb expresses "one / people": *Se **vive** bien en esta ciudad*; *Se **prohíbe** fumar.*`,
      diagram: `<svg viewBox="0 0 600 305" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual contrast of Por versus Para directional logic and the three Spanish Si-Clause patterns">
  <rect x="0" y="0" width="600" height="305" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14.5" font-weight="800" fill="#2b140c">High-Stakes Contrasts: POR vs PARA &amp; Si-Clause Ladder</text>
  <rect x="20" y="42" width="270" height="112" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="155" y="62" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#9a3412">POR ← Cause · Channel · Exchange</text>
  <text x="32" y="82" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Motive/Cause: por el cambio climático</text>
  <text x="32" y="99" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Through / Means: por el parque · por correo</text>
  <text x="32" y="116" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Exchange / Duration: por 10 € · por tres días</text>
  <text x="32" y="133" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Passive Agent: diseñado por arquitectos</text>
  <rect x="310" y="42" width="270" height="112" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.5"/>
  <text x="445" y="62" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#0f766e">PARA → Goal · Recipient · Deadline</text>
  <text x="322" y="82" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Purpose (+ inf.): para mejorar la salud</text>
  <text x="322" y="99" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Recipient / Employer: para ti · para la ONG</text>
  <text x="322" y="116" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Deadline / Destination: para mañana · para Lima</text>
  <text x="322" y="133" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Opinion / Standard: para mí · alto para su edad</text>
  <text x="300" y="176" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" font-weight="800" fill="#2b140c">The 3 Si-Clauses (NEVER put Condicional right after “si”!)</text>
  <rect x="20" y="186" width="560" height="32" rx="7" fill="#dcfce7" stroke="#15803d" stroke-width="1.2"/>
  <text x="32" y="206" font-family="system-ui,sans-serif" font-size="11.2" font-weight="700" fill="#14532d">Type 1 (Real):  Si + Presente Indicativo  →  Futuro / Presente  (Si actuamos, lograremos el cambio.)</text>
  <rect x="20" y="224" width="560" height="32" rx="7" fill="#fef9c3" stroke="#a16207" stroke-width="1.2"/>
  <text x="32" y="244" font-family="system-ui,sans-serif" font-size="11.2" font-weight="700" fill="#713f12">Type 2 (Hypothetical):  Si + Imperfecto Subj. (-ra/-se)  →  Condicional  (Si actuáramos, lograríamos…)</text>
  <rect x="20" y="262" width="560" height="32" rx="7" fill="#ffe4e6" stroke="#be123c" stroke-width="1.2"/>
  <text x="32" y="282" font-family="system-ui,sans-serif" font-size="11.2" font-weight="700" fill="#881337">Type 3 (Past Regret):  Si + Pluscuamp. Subj. (hubiera…)  →  Cond. Compuesto  (habríamos logrado…)</text>
</svg>`,
      diagramCaption:
        "Think of POR as the cause/channel behind or through an action and PARA as an arrow aimed at a goal, recipient, or deadline — and lock in the exact tense pairing for each Si-clause.",
      workedExamples: [
        {
          title: "Debugging Post-IGCSE Por/Para & Ser/Estar Slips",
          problem:
            "Correct the three errors in this draft sentence:\n*“La conferencia está en el auditorio; necesitamos entregar la propuesta por el lunes para la causa del medio ambiente.”*",
          steps: [
            "Error 1 (*está*): A conference is an **event**, not a building. Event locations ALWAYS take **ser** → *La conferencia **es** en el auditorio.*",
            "Error 2 (*por el lunes*): Monday is a **deadline** (arrow pointing to a future limit), so it requires **para** → *entregar la propuesta **para** el lunes.*",
            "Error 3 (*para la causa*): “Because of / on behalf of the environmental cause” expresses motive/behalf → **por** (or *para proteger el medio ambiente* with an infinitive of purpose).",
          ],
          answer:
            "*La conferencia **es** en el auditorio; necesitamos entregar la propuesta **para** el lunes **por** el bien del medio ambiente.*",
          yourTurn: {
            question:
              "Choose **por** or **para** to complete: *El informe definitivo debe entregarse ______ el viernes a las cinco.*",
            answer: {
              type: "text",
              accept: ["para"],
              display: "para",
            },
            solution:
              "A **deadline** (*by Friday at five*) always takes **para**.",
          },
        },
        {
          title: "Upgrading Hypotheticals with Type 2/3 Si-Clauses & Perífrasis",
          problem:
            "Translate into Band 10–12 IB Spanish:\n(a) *If I had more funding, I would create a bilingual library.*\n(b) *We have been organising this festival for four years.*",
          steps: [
            "(a) Hypothetical present situation → **Type 2 Si-clause**: *Si + imperfect subjunctive* (*tener → tuviera*) + *conditional* (*crearía*). Never write *Si tendría*!",
            "(b) Ongoing action started in the past and continuing now → **llevar + time + gerundio**: *Llevamos cuatro años organizando este festival.* (Far more idiomatic than *Hemos estado organizando*!)",
          ],
          answer:
            "(a) *Si **tuviera** más financiación, **crearía** una biblioteca bilingüe.* · (b) ***Llevamos** cuatro años **organizando** este festival.*",
          yourTurn: {
            question:
              "Complete the Type 2 *si*-clause with the correct form of *poder*: *Si los ciudadanos ______ (poder) votar a los dieciséis años, participaría más gente joven.*",
            answer: {
              type: "text",
              accept: ["pudieran", "pudiesen"],
              display: "pudieran",
            },
            solution:
              "Type 2 *si*-clause requires **imperfect subjunctive** (*ellos* preterite *pudieron* → **pudieran** / **pudiesen**), never conditional *podrían*.",
          },
        },
      ],
      keyPoints: [
        "**POR** = cause, exchange, duration, through/along, means, passive agent; **PARA** = purpose (+ inf.), recipient, deadline, destination, opinion, employer.",
        "Event location takes **ser** (*El festival es en la plaza*); physical location takes **estar** (*La plaza está en el centro*).",
        "**NEVER** place the conditional (*tendría, sería, habría*) or present subjunctive directly after **si** in conditional sentences (*Si tuviera*, *Si hubiera tenido*, *Si tengo*).",
        "Replace clumsy English calques (*he estado viviendo*, *hice de nuevo*, *paré de*) with authentic Spanish **perífrasis verbales** (*llevo… viviendo*, *volví a hacer*, *dejé de*).",
      ],
      whyItWorks:
        "Most B1 errors happen through English interference (“for” splits into *por/para*; “to be” splits into *ser/estar*; “would” tempts students into *si tendría*). Treating each contrast as a conceptual binary eliminates recurring slips across both Paper 1 and the Individual Oral.",
      strategies: [
        "During your final 5-minute Paper 1 proofreading sweep, scan specifically for every *por/para*, every *ser/estar*, and every *si*-clause — those three checks alone rescue 1–2 marks on Criterion A.",
        "Memorise 3 *perífrasis verbales* (*llevar + gerundio*, *acabar de + inf.*, *volver a + inf.*) and aim to include at least two naturally in every extended writing task.",
      ],
      thinkDeeper:
        "Why does *No **pude** asistir* mean “I tried and failed to attend”, whereas *No **podía** asistir* simply describes an ongoing inability or background constraint? Because the **pretérito** compresses the verb into a completed attempt with a definite outcome!",
    },

    // =========================================================================
    // SECTION 3: TIPOS DE TEXTO Y CONVENCIONES
    // =========================================================================
    {
      id: "tipos-de-texto-convenciones",
      heading: "The 3 IB Text-Type Categories & Conceptual Understandings",
      level: "SL",
      discovery: {
        problem:
          "Look at this IB Paper 1 prompt:\n\n*Your town council plans to close the local youth library due to budget cuts. Write a text addressed to the mayor outlining why the library matters and presenting three financially viable ways to keep it open.*\n**Options offered:** `Diario personal` · `Blog` · `Propuesta`\n\nWhich ONE text type is **most appropriate**, which is barely acceptable, and which fails Conceptual Understanding — and why?",
        idea:
          "**Propuesta** is the single MOST appropriate choice: it targets an institutional **audience** (*el alcalde*), adopts formal register (**usted**), and matches the **purpose** (structured persuasive recommendations with an action plan). A **blog** speaks to a general public online (wrong direct audience, though semi-relevant theme), while a **diario personal** is private self-reflection and completely fails Audience and Purpose — capping Criterion C at 1–2/6!",
      },
      body: `In IB Diploma Spanish B **Paper 1 (30 marks)**, **Criterion C (*Conceptual Understanding*, 6 marks)** evaluates how convincingly your text embodies the **5 Conceptual Understandings**:
1. **Audience (*Destinatario*):** Who is reading/listening? (*tú* for peers/self vs *usted/ustedes* for officials/institutions vs *vosotros/ustedes* for public audiences).
2. **Context (*Contexto*):** Where and when does this communication occur? (School newsletter, municipal petition, national newspaper, youth conference, personal notebook).
3. **Purpose (*Propósito*):** Inform, persuade, reflect, critique, propose concrete action, or entertain?
4. **Meaning (*Significado*):** How tone, register, lexical choices, and rhetorical structure shape how the message lands.
5. **Variation (*Variación*):** Adapting formality and pan-Hispanic conventions (*tú/usted*, *vosotros* in Spain vs *ustedes* in Latin America) consistently without switching register mid-text!

### The Complete Map of the 3 IB Text-Type Categories

| Text Type | Category | Register | Mandatory Structural Conventions | Signature Opening / Closing Formulas |
|---|---|---|---|---|
| **Diario personal** | Personal | Informal (*tú* / 1st person) | Date (+ place), intimate reflective voice, emotional honesty, no recipient address, natural closing thought. | *Querido diario:* / *Madrid, 14 de octubre de 2026* … *Ya te contaré mañana.* |
| **Carta informal** | Personal | Informal (*tú*) | Place & date (top right), warm greeting, conversational paragraphs, personal questions, affectionate sign-off + first name. | *Querido/a Mateo:* / *¿Qué tal todo?* … *Un fuerte abrazo, Sofía.* |
| **Correo electrónico** | Personal / Prof. | Informal (*tú*) OR Formal (*usted*) | Header fields (**De:**, **Para:**, **Asunto:**), clear greeting matching audience, concise purpose-driven paragraphs, matching sign-off. | **Asunto: Consulta sobre el voluntariado** · *Estimado/a…* or *¡Hola, Lucía!* |
| **Blog** | Personal (public) | Semi-formal / engaging (*tú* / *ustedes*) | Catchy title, date/author/tags, conversational hook directly addressing readers, subheadings or punchy paragraphs, call for comments! | *¿Te has preguntado alguna vez…?* … *¡Deja tu opinión en los comentarios! #Sostenibilidad* |
| **Carta formal** | Professional | Formal (*usted*) | Sender & recipient details, city & date, **Asunto:**, formal salutation (*Estimado/a Sr./Sra.…* + colon!), objective/polite tone, formal closing + full name. | *Estimado Sr. Alcalde:* / *Me dirijo a usted con el fin de…* … *Atentamente, / Reciba un cordial saludo,* |
| **Informe** | Professional | Formal, objective | Clear factual title, **Para / De / Fecha**, introduction stating aim/data source, **numbered/titled subheadings**, objective findings, concise conclusions/recommendations. | *Informe sobre el uso del transporte escolar* · *1. Introducción · 2. Hallazgos · 3. Conclusiones* |
| **Propuesta** | Professional | Formal, persuasive | Action-focused title, recipient/date, clear objective, rationale/problem analysis, **numbered action plan (steps, budget/feasibility)**, persuasive conclusion. | *Propuesta para reducir el desperdicio alimentario* · *Objetivos · Plan de acción · Beneficios previstos* |
| **Folleto / Guía** | Professional | Semi-formal, engaging | Eye-catching title & slogan, short scannable sections with subheadings, bullet points/tips, imperative/exhortative verbs, practical info/contact call to action. | *¡Descubre un turismo responsable!* · *¿Sabías que…?* · *Más información en…* |
| **Artículo** | Mass Media | Semi-formal to formal | Engaging **headline**, **byline** (*Por…*), punchy lead paragraph (who/what/why), 2–3 subheadings, balanced evidence/quotes, memorable closing line. | *La revolución silenciosa del teletrabajo* — *Por Elena Vargas* |
| **Editorial** | Mass Media | Formal, authoritative | Newspaper-style headline, **institutional voice (*nosotros* / impersonal)** — NO personal anecdotes or “I think”!, clear stance on a topical issue, persuasive conclusion. | *Desde este periódico consideramos imprescindible que…* / *Es hora de que la sociedad…* |
| **Entrevista** | Mass Media | Semi-formal to formal | Headline, brief **contextual introduction** introducing the interviewee, clearly formatted **Q&A turns** (*Periodista:* / *Dra. Morales:*), brief closing wrap-up. | *Hoy conversamos con la Dra. Morales sobre…* · **P:** *¿Cómo surgió…?* **R:** *…* |
| **Discurso** | Mass Media | Semi-formal to formal (spoken!) | **Direct vocative opening**, rhetorical questions, tricolon/repetition, inclusive *nosotros*, vivid signpost transitions, clear call to action, formal **closing thanks**. | *Estimados compañeros, profesores y miembros del jurado:* … *Muchas gracias por su atención.* |
| **Reseña** | Mass Media | Semi-formal, evaluative | Evaluative title, brief **fact-box/context** (director/author, year, genre), concise spoiler-free synopsis, **balanced critique** (strengths & flaws), clear final verdict/recommendation. | *Una obra imprescindible: crítica de…* · *En definitiva, recomiendo encarecidamente… (4,5/5)* |

### The Golden Rule of Paper 1 Selection
Every Paper 1 prompt gives **3 text-type choices**: one is **clearly the best match**, one is **partially acceptable**, and one is **inappropriate**. Always test all three against **Audience + Purpose + Context** before writing a single word — and maintain your chosen **register (*tú* vs *usted*)** without slipping from start to finish!`,
      diagram: `<svg viewBox="0 0 600 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram mapping the 3 IB Paper 1 Text-Type Categories around the 5 Conceptual Understandings">
  <rect x="0" y="0" width="600" height="310" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14.5" font-weight="800" fill="#2b140c">The 3 IB Text-Type Categories &amp; 5 Conceptual Understandings</text>
  <rect x="145" y="42" width="310" height="58" rx="29" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>
  <text x="300" y="64" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#9a3412">5 CONCEPTUAL UNDERSTANDINGS (Criterion C · 6m)</text>
  <text x="300" y="84" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#2b140c">Audience · Context · Purpose · Meaning · Variation</text>
  <line x1="210" y1="100" x2="105" y2="128" stroke="#c2410c" stroke-width="1.8"/>
  <line x1="300" y1="100" x2="300" y2="128" stroke="#0f766e" stroke-width="1.8"/>
  <line x1="390" y1="100" x2="495" y2="128" stroke="#7c3aed" stroke-width="1.8"/>
  <rect x="16" y="130" width="178" height="162" rx="10" fill="#ffffff" stroke="#c2410c" stroke-width="1.6"/>
  <rect x="16" y="130" width="178" height="30" rx="10" fill="#c2410c"/>
  <text x="105" y="150" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#ffffff">1. PERSONAL</text>
  <text x="26" y="178" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#9a3412">Register: Informal / Tú</text>
  <text x="26" y="198" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Diario personal</text>
  <text x="26" y="216" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Carta informal</text>
  <text x="26" y="234" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Correo electrónico</text>
  <text x="26" y="252" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Blog (interactive)</text>
  <text x="26" y="276" font-family="system-ui,sans-serif" font-size="10" font-style="italic" fill="#6b483a">Reflective, warm, direct</text>
  <rect x="211" y="130" width="178" height="162" rx="10" fill="#ffffff" stroke="#0f766e" stroke-width="1.6"/>
  <rect x="211" y="130" width="178" height="30" rx="10" fill="#0f766e"/>
  <text x="300" y="150" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#ffffff">2. PROFESSIONAL</text>
  <text x="221" y="178" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#0f766e">Register: Formal / Usted</text>
  <text x="221" y="198" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Carta formal</text>
  <text x="221" y="216" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Informe (subheadings)</text>
  <text x="221" y="234" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Propuesta (action plan)</text>
  <text x="221" y="252" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Folleto / Guía</text>
  <text x="221" y="276" font-family="system-ui,sans-serif" font-size="10" font-style="italic" fill="#6b483a">Objective, structured, clear</text>
  <rect x="406" y="130" width="178" height="162" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
  <rect x="406" y="130" width="178" height="30" rx="10" fill="#7c3aed"/>
  <text x="495" y="150" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#ffffff">3. MASS MEDIA</text>
  <text x="416" y="178" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#6d28d9">Register: Public / Engaging</text>
  <text x="416" y="198" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Artículo &amp; Editorial</text>
  <text x="416" y="216" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Entrevista (Q&amp;A)</text>
  <text x="416" y="234" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Discurso (rhetorical)</text>
  <text x="416" y="252" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">• Reseña (review/verdict)</text>
  <text x="416" y="276" font-family="system-ui,sans-serif" font-size="10" font-style="italic" fill="#6b483a">Persuasive, public reach</text>
</svg>`,
      diagramCaption:
        "Every Paper 1 text type belongs to one of three categories; Criterion C rewards aligning format conventions and register to all 5 Conceptual Understandings.",
      workedExamples: [
        {
          title: "Choosing the Single Most Appropriate Paper 1 Text Type",
          problem:
            "Prompt: *You just attended a Latin American film festival in your city and want to share a balanced critique of the opening film with readers of your school's cultural magazine, recommending whether they should watch it.*\n**Choices:** `Informe` · `Reseña` · `Carta formal`",
          steps: [
            "**Audience:** Fellow students and teachers reading a cultural magazine → semi-formal, engaging public tone.",
            "**Purpose:** Summarise without spoilers, evaluate strengths and weaknesses, and give a recommendation.",
            "**Eliminate distractors:** *Informe* is an objective institutional report of findings/data (wrong purpose & dry tone); *Carta formal* targets a single official recipient (wrong audience).",
            "**Select optimal text type:** **Reseña** (critical review) — include an evaluative headline, brief film details (director, year), balanced analysis of themes/cinematography, and a clear final verdict.",
          ],
          answer: "**Reseña** (Mass Media category — evaluative, semi-formal, public readership).",
          yourTurn: {
            question:
              "Which IB text type is MOST appropriate when you are asked to **address all students at a school assembly to inspire them to join an environmental clean-up**? (Choices: *Discurso*, *Diario personal*, *Informe*)",
            answer: {
              type: "text",
              accept: ["discurso", "un discurso"],
              display: "Discurso",
            },
            solution:
              "Addressing a live school assembly orally to inspire action requires a **Discurso** (with vocative greeting, rhetorical devices, inclusive *nosotros*, and closing thanks).",
          },
        },
        {
          title: "Upgrading Register from Informal to Formal (Carta formal)",
          problem:
            "A student wrote this opening to a city mayor: *“Hola alcalde, te escribo porque quiero que pongas más carriles bici en el centro. ¡Un abrazo!”* Diagnose the Criterion C failures and rewrite it at Band 5–6/6.",
          steps: [
            "**Register clash:** *Hola*, *te escribo*, *pongas* (*tú*), and *¡Un abrazo!* are informal Personal conventions, completely inappropriate for a municipal official.",
            "**Missing structural elements:** A Spanish *carta formal* needs city/date, formal salutation with a **colon** (never a comma!), formal *usted* verb forms, polite conditional/subjunctive phrasing, and a formal closing.",
            "**Band 6/6 rewrite:** *Madrid, 12 de noviembre de 2026* / *Estimado Sr. Alcalde:* / *Me dirijo a usted en representación de los jóvenes del distrito con el fin de solicitarle que considere la ampliación de la red de carriles bici en el centro urbano.* … *Atentamente, [Nombre completo].*",
          ],
          answer:
            "Use **usted** consistently, colon after *Estimado Sr. Alcalde:*, polite purpose formula (*Me dirijo a usted con el fin de…*), and formal sign-off (*Atentamente,*).",
          yourTurn: {
            question:
              "In Spanish formal letters, which punctuation mark MUST follow *Estimado Sr. Director* instead of an English comma? (Write the English word or Spanish term.)",
            answer: {
              type: "text",
              accept: ["colon", "dos puntos", ":"],
              display: "colon (dos puntos)",
            },
            solution:
              "Spanish salutations (both formal and informal!) ALWAYS take a **colon** (*dos puntos*): *Estimado Sr. Director:* / *Querida Ana:*, NEVER a comma.",
          },
        },
      ],
      keyPoints: [
        "Never mix **tú** and **usted** in the same text — register drift is the #1 reason Criterion C drops from 6/6 to 3/6.",
        "Spanish letters and emails take a **colon (:)** after the greeting (*Estimada Sra. López:*), NOT an English comma.",
        "An **editorial** represents the newspaper's institutional voice (*nosotros / este diario*), whereas an **artículo de opinión** carries an individual author's byline.",
        "A **folleto** and an **informe** both use subheadings, but a *folleto* persuades the public with slogans/bullets/imperatives whereas an *informe* reports findings objectively to an authority.",
      ],
      whyItWorks:
        "IB examiners mark Paper 1 using three separate criteria: Language (12), Message (12), and Conceptual Understanding (6). Even flawless Spanish grammar cannot earn full Criterion C marks if a *propuesta* looks like a generic five-paragraph essay with no title, sections, or actionable steps.",
      strategies: [
        "Spend the first 4 minutes of Paper 1 writing a mini **A-C-P-R box** on your plan: **A**udience, **C**ontext, **P**urpose, **R**egister (*tú / usted / nosotros*) + 3 mandatory format features of your chosen text type.",
        "Visual layout signals text-type awareness immediately: include a headline + byline for an *artículo*, `De / Para / Asunto` for a *correo electrónico*, and numbered subheadings for an *informe* or *propuesta*.",
      ],
      thinkDeeper:
        "How does a **blog** differ from an **artículo** when both discuss a social issue? A blog uses a direct, personal, interactive voice inviting readers to comment (*¿Y tú qué opinas? Déjame un comentario*) and often carries hashtags, whereas an *artículo* maintains journalistic distance, relies on third-person reporting/evidence, and uses a headline + byline.",
    },

    // =========================================================================
    // SECTION 4: [HL] ESTILO C1, CONECTORES, RELATIVOS Y NOMINALIZACIÓN
    // =========================================================================
    {
      id: "estilo-c1-conectores-hl",
      heading: "[HL] C1 Cohesion, Idioms, Relative Pronouns & Nominalisation",
      level: "HL",
      discovery: {
        problem:
          "Compare these two HL Paper 1 openings arguing for AI regulation:\n\n**Draft A (Band 7–8):** *La inteligencia artificial es muy útil, pero tiene muchos peligros. Sus efectos son graves. Por eso debemos crear leyes ahora.*\n**Draft B (Band 11–12):** *Si bien la inteligencia artificial ofrece avances sin precedentes, conlleva riesgos éticos **cuya** magnitud resulta alarmante, **lo cual** evidencia la urgencia de su regulación; **de ahí que sea** imprescindible legislar cuanto antes.*\n\nIdentify the **four specific C1 grammatical devices** that turn Draft A into Draft B.",
        idea:
          "Draft B upgrades four mechanisms at once: (1) concessive framing (**Si bien…**), (2) the possessive relative pronoun **cuya** (agreeing with *magnitud*), (3) the clausal relative **lo cual** (summarising the whole preceding clause), and (4) **nominalisation** (*la urgencia de su regulación*) paired with the C1 consecutive trigger **de ahí que + subjuntivo** (*sea*).",
      },
      body: `To break into **Band 10–12 on HL Criterion A** (450–600 words in Paper 1 and the 15-minute HL Individual Oral), accuracy alone is not enough — examiners look for **syntactic sophistication, cohesive variety, register-appropriate idioms, and complex subordination**.

### 1. C1 Relative Pronouns (*Pronombres relativos complejos*)
- **cuyo / cuya / cuyos / cuyas (“whose”):** Functions like an adjective — it ALWAYS agrees in **gender and number with the noun that follows it (the possessed thing)**, NEVER with the possessor! And NEVER place *el/la* after *cuyo*:
  - *Es una cineasta **cuyo** estilo visual deslumbra.* (*estilo* = masc. sg., even though *cineasta* is feminine!)
  - *Visitamos un pueblo **cuyas** tradiciones corren peligro.* (*tradiciones* = fem. pl.)
- **lo cual / lo que (“which” referring to an entire clause/idea):** Replaces choppy “*Esto demuestra que…*” sentences:
  - *El paro juvenil ha repuntado, **lo cual** agrava la emigración de talento.* (*lo cual* needs an explicit preceding clause; *lo que* can also start a sentence: *Lo que más preocupa es…*).
- **el que / la que / los que / las que** & **el cual / la cual / los cuales / las cuales:** Mandatory after multi-syllable or compound prepositions (*mediante, durante, según, a través de, por encima de*) and ideal after *en, con, por, sin* in formal HL prose:
  - *La reforma **mediante la cual** se garantiza la igualdad salarial…*
  - *El motivo **por el que** escribo esta propuesta…*
- **quien / quienes:** Used for people after prepositions (*las comunidades **con quienes** colaboramos*) or without an antecedent (*Quien siembra vientos, recoge tempestades*).

### 2. High-Band HL Connectors & Mood Traps

| Discourse Function | Band 10–12 Spanish Connectors | Mood / Grammar Rule |
|---|---|---|
| **Concession & Nuance** | *Si bien (es cierto que)…*, *A pesar de que…*, *Pese a (+ sust./inf.)*, *Por más / Por mucho que…* | *Si bien* + **Indicative**; *Por más/mucho que* + **Subjunctive** (*Por mucho que intentemos…*); *A pesar de que* + Indic. (fact) / Subj. (hypothetical). |
| **Consequence** | ***De ahí que…***, *Por consiguiente*, *En consecuencia*, *De modo que…* | ***De ahí que* ALWAYS demands the SUBJUNCTIVE!** (*De ahí que **resulte** esencial…* / *De ahí que **haya aumentado**…*). |
| **Contrast / Pivot** | *No obstante*, *Sin embargo*, *Ahora bien*, *Por el contrario*, *Mientras que* | *Ahora bien* introduces a sharp nuanced caveat (*Ahora bien, conviene matizar que…*). |
| **Impersonal Academic Authority** | *Cabe destacar / señalar que…*, *Conviene subrayar que…*, *Sobra decir que…*, *Resulta innegable que…* | All express factual emphasis → **Indicative**! (Negate them — *No cabe duda de que* = certain → **Indicative**!) |

### 3. Nominalisation (*Nominalización*) for Concise HL Density
At B1, learners chain repetitive verb clauses (*Cuando los jóvenes usan demasiado el móvil, duermen mal y se concentran menos*). At C1, **nominalisation** packs processes into crisp abstract nouns so the sentence can evaluate causes and consequences with elegance:
- *que aumente la desigualdad* → ***el auge / el incremento de** la desigualdad*
- *cuando la población envejece* → ***el envejecimiento** demográfico*
- *si prohibimos los plásticos* → ***la prohibición** de los plásticos de un solo uso*
- *porque falta financiación* → ***la escasez / la falta** de financiación*
- **Nominalising a whole subjunctive clause with *el hecho de que*:** *El hecho de que **persista** la brecha salarial refleja desigualdades estructurales.* (Note: *el hecho de que* takes the **subjunctive** when commenting on or evaluating a fact, and indicative only when stating it purely neutrally; in HL evaluative essays, subjunctive is the gold standard!)

### 4. Register-Matched Hispanic Idioms (*Modismos*)
Examiners reward authentic idioms ONLY when they fit the text's register. Compare:
- **Safe in Semi-Formal & Formal Prose (*artículo, editorial, discurso, ensayo, IO*):** *ser un arma de doble filo* (be a double-edged sword), *brillar por su ausencia* (be conspicuous by its absence), *marcar un antes y un después* (mark a turning point), *hacer oídos sordos* (turn a deaf ear), *dar en el clavo* (hit the nail on the head), *estar entre la espada y la pared* (between a rock and a hard place), *pasar página* (move on / turn the page).
- **Keep strictly to Informal / Personal texts (*blog, carta informal, diario*):** *costar un ojo de la cara*, *no tener pelos en la lengua*, *ponerse las pilas*, *tomar el pelo*.`,
      diagram: `<svg viewBox="0 0 600 295" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HL C1 Upgrade Architecture showing how four devices elevate Band 7 prose to Band 12">
  <rect x="0" y="0" width="600" height="295" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14.5" font-weight="800" fill="#2b140c">[HL] Band 7–8 → Band 10–12 Upgrade Architecture</text>
  <rect x="20" y="46" width="560" height="44" rx="8" fill="#ffe4e6" stroke="#be123c" stroke-width="1.4"/>
  <text x="34" y="64" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#be123c">BAND 7–8 (CHOPPY B1–B2):</text>
  <text x="34" y="81" font-family="system-ui,sans-serif" font-size="11" fill="#2b140c">“Muchas ciudades contaminan mucho. Sus habitantes enferman. Por eso debemos cambiar el transporte.”</text>
  <path d="M300 92 L300 112" stroke="#7c3aed" stroke-width="2.2"/>
  <polygon points="295,110 305,110 300,119" fill="#7c3aed"/>
  <rect x="20" y="122" width="132" height="72" rx="8" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="86" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#6d28d9">1. Nominalisation</text>
  <text x="86" y="158" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.2" fill="#2b140c">la contaminación</text>
  <text x="86" y="173" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.2" fill="#2b140c">urbana · la reforma</text>
  <rect x="163" y="122" width="132" height="72" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.4"/>
  <text x="229" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#9a3412">2. C1 Relatives</text>
  <text x="229" y="158" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.2" fill="#2b140c">cuyos habitantes</text>
  <text x="229" y="173" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.2" fill="#2b140c">lo cual agrava…</text>
  <rect x="306" y="122" width="132" height="72" rx="8" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.4"/>
  <text x="372" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#0f766e">3. De ahí que + Subj.</text>
  <text x="372" y="158" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.2" fill="#2b140c">de ahí que sea</text>
  <text x="372" y="173" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.2" fill="#2b140c">imprescindible…</text>
  <rect x="449" y="122" width="131" height="72" rx="8" fill="#fef9c3" stroke="#a16207" stroke-width="1.4"/>
  <text x="514" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#854d0e">4. Idiomatic Polish</text>
  <text x="514" y="158" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.2" fill="#2b140c">no hacer oídos sordos</text>
  <text x="514" y="173" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.2" fill="#2b140c">arma de doble filo</text>
  <path d="M300 196 L300 214" stroke="#15803d" stroke-width="2.2"/>
  <polygon points="295,212 305,212 300,221" fill="#15803d"/>
  <rect x="20" y="224" width="560" height="58" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="34" y="242" font-family="system-ui,sans-serif" font-size="11" font-weight="800" fill="#15803d">BAND 11–12 (COHESIVE HL C1):</text>
  <text x="34" y="259" font-family="system-ui,sans-serif" font-size="10.8" fill="#2b140c">“La contaminación urbana, cuyos efectos dañan la salud pública, empeora, lo cual impide hacer oídos</text>
  <text x="34" y="274" font-family="system-ui,sans-serif" font-size="10.8" fill="#2b140c">sordos; de ahí que resulte inaplazable la transformación del transporte colectivo.”</text>
</svg>`,
      diagramCaption:
        "Combine nominalisation, C1 relative pronouns, subjunctive consecutive connectors, and register-safe idioms to unlock HL Band 10–12.",
      workedExamples: [
        {
          title: "Deploying Cuyo, Lo Cual & De Ahí Que with Exact Agreement",
          problem:
            "Complete each blank with the exact C1 form:\n(a) *Leímos una novela ______ (whose) personajes desafían las normas sociales.*\n(b) *El turismo masivo encarece los alquileres, ______ (which) expulsa a los residentes.*\n(c) *Las lluvias han escaseado; de ahí que el gobierno ______ (restringir) el riego.*",
          steps: [
            "(a) **Cuyo** agrees strictly with the **noun that follows it** (*personajes* = masculine plural), NEVER with the possessor (*novela* = feminine singular) → **cuyos**.",
            "(b) Referring to the entire preceding clause (“mass tourism drives up rents”) requires the neuter relative **lo cual** (or **lo que**).",
            "(c) **De ahí que** ALWAYS triggers the **subjunctive**! Main clause is present perfect (*han escaseado*, Present Zone) → **present subjunctive** of *restringir* (*g → j* before *a*!): **restrinja**.",
          ],
          answer: "(a) **cuyos** · (b) **lo cual** (or **lo que**) · (c) **restrinja**",
          yourTurn: {
            question:
              "Complete with the exact form of *cuyo/a/os/as*: *Es un proyecto comunitario ______ iniciativas benefician a tres barrios.*",
            answer: {
              type: "text",
              accept: ["cuyas"],
              display: "cuyas",
            },
            solution:
              "**Cuyo** agrees with the **following noun** (*iniciativas* = feminine plural), NOT with *proyecto* (masculine singular): **cuyas**.",
          },
        },
        {
          title: "Nominalising & Structuring an HL Counter-Argument",
          problem:
            "Upgrade this basic two-sentence contrast into one seamless HL C1 sentence using *Si bien*, nominalisation, and *no obstante*:\n*“Es verdad que trabajar desde casa ahorra tiempo. Pero también hace que las personas se sientan solas.”*",
          steps: [
            "Nominalise *trabajar desde casa* → **el teletrabajo**, and *hace que las personas se sientan solas* → **el aislamiento social / laboral**.",
            "Open with the concessive frame **Si bien (+ indicative)**: *Si bien el teletrabajo ahorra tiempo de desplazamiento…*",
            "Pivot cleanly with **no obstante** (or *conlleva*): *…no obstante, fomenta el aislamiento laboral y difumina los límites entre la vida privada y profesional.*",
          ],
          answer:
            "*Si bien el teletrabajo optimiza el tiempo de desplazamiento, no obstante fomenta el aislamiento laboral.*",
          yourTurn: {
            question:
              "Complete with the correct form of *ser* after *de ahí que*: *La desinformación se propaga en segundos; de ahí que ______ (ser) vital fomentar la alfabetización mediática.*",
            answer: {
              type: "text",
              accept: ["sea"],
              display: "sea",
            },
            solution:
              "**De ahí que** ALWAYS requires the **subjunctive**; with a present-zone main verb (*se propaga*), use present subjunctive of *ser*: **sea**.",
          },
        },
      ],
      keyPoints: [
        "**Cuyo/a/os/as** agrees strictly with the **possessed noun immediately following it**, never with the possessor — and never takes an article (*cuya autora*, NOT *cuya la autora*).",
        "**De ahí que** (“hence / that is why”) ALWAYS triggers the **subjunctive** (*de ahí que sea / resulte / haya aumentado*).",
        "Use **lo cual** to link a whole clause smoothly to its consequence, eliminating repetitive *Esto significa que…* openers.",
        "**Nominalisation** (*el auge de, la escasez de, el envejecimiento de*) condenses wordy clauses into authoritative C1 academic and journalistic Spanish.",
      ],
      whyItWorks:
        "In the HL 450–600 word essay and HL Individual Oral, Criterion A distinguishes Band 7–9 (“some complex structures attempted”) from Band 10–12 (“complex structures used effectively and naturally to enhance communication”). Mastering four reliable C1 tools gives you effortless syntactic range without forcing unnatural memorised phrases.",
      strategies: [
        "Aim for **one *cuyo/a/os/as***, **one *lo cual***, **one *de ahí que + subj.***, and **one *Si bien…, no obstante…* counter-argument** in every HL Paper 1 essay.",
        "Before inserting an idiom (*modismo*), run the **Register Check**: would a journalist at *El País* or *El Tiempo* print this phrase? If yes (*arma de doble filo*, *brillar por su ausencia*), use it in formal texts; if it sounds like café banter (*tomar el pelo*), save it for blogs and informal letters.",
      ],
      thinkDeeper:
        "Why does *No cabe duda de que **existe** el problema* take the **indicative** while *El hecho de que **exista** el problema nos preocupa* normally takes the **subjunctive**? Because *no cabe duda* asserts certainty, whereas *el hecho de que* turns the clause into a backgrounded theme that the main verb (*nos preocupa*) emotionally evaluates!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "When does a WEIRDO verb take the infinitive instead of the subjunctive?",
        back: "When there is **NO subject change** between the main clause and the second action (*Quiero aprender* vs *Quiero que aprendas*). No subject change → drop *que* and use the infinitive.",
        level: "SL",
      },
      {
        front: "Name the 6 ESCAPA adverbial conjunctions that ALWAYS take the subjunctive.",
        back: "**E**n caso de que · **S**in que · **C**on tal de que · **A**ntes de que · **P**ara que · **A** menos que.",
        level: "SL",
      },
      {
        front: "What are the 6 DISHES irregular verbs in the Present Subjunctive?",
        back: "**D**ar (*dé*), **I**r (*vaya*), **S**er (*sea*), **H**aber (*haya*), **E**star (*esté*), **S**aber (*sepa*).",
        level: "SL",
      },
      {
        front: "How does *cuando* choose between Indicative and Subjunctive?",
        back: "**Subjunctive** for *uncompleted future* actions (*cuando llegues, avísame* — NEVER future tense after *cuando*!). **Indicative** for *habitual or past* facts (*cuando llegué, nevaba*).",
        level: "SL",
      },
      {
        front: "How do you form ANY Imperfect Subjunctive verb in Spanish?",
        back: "Take the **3rd-person plural (*ellos*) preterite**, drop *-ron*, and add **-ra, -ras, -ra, -´ramos, -rais, -ran** (or *-se* endings). Zero exceptions to this stem rule! Example: *tuvieron → tuviera / tuviéramos*.",
        level: "SL",
      },
      {
        front: "Distinguish *aunque + indicativo* vs *aunque + subjuntivo*.",
        back: "*Aunque + indicativo* = known fact (“even though it IS raining”: *aunque llueve*). *Aunque + subjuntivo* = hypothetical or irrelevant concession (“even if it rains”: *aunque llueva*).",
        level: "SL",
      },
      {
        front: "Give the exact tense formulas for all 3 Spanish *Si*-clauses.",
        back: "Type 1 (real): *Si + pres. indic. → futuro/pres.* · Type 2 (hypothetical): *Si + imperf. subj. → condicional simple* · Type 3 (past regret): *Si + pluscuamp. subj. → condicional compuesto*.",
        level: "SL",
      },
      {
        front: "Contrast *ser listo / estar listo* and *ser seguro / estar seguro*.",
        back: "*Ser listo* = clever; *estar listo* = ready. *Ser seguro* = safe; *estar seguro* = certain/sure.",
        level: "SL",
      },
      {
        front: "Should an event location use *ser* or *estar*? Give an example.",
        back: "**SER**! Events (“take place”) ALWAYS use *ser*: *La exposición **es** en el museo*, whereas the building's physical location uses *estar*: *El museo **está** en el centro*.",
        level: "SL",
      },
      {
        front: "Translate “I have been volunteering for two years” using a Spanish *perífrasis verbal*.",
        back: "*Llevo dos años **haciendo** voluntariado* (or *colaborando*). Formula: **llevar + time + gerundio**.",
        level: "SL",
      },
      {
        front: "List the 5 IB Conceptual Understandings tested in Paper 1 Criterion C (6 marks).",
        back: "**Audience** (*Destinatario*), **Context** (*Contexto*), **Purpose** (*Propósito*), **Meaning** (*Significado*), **Variation** (*Variación*).",
        level: "SL",
      },
      {
        front: "How do an *Editorial* and an *Artículo* differ in IB Mass Media conventions?",
        back: "An **Editorial** speaks in the newspaper's institutional voice (*nosotros / este diario*), takes a clear stance, and avoids personal anecdotes or bylines. An **Artículo** carries an individual byline (*Por…*), informative lead, subheadings, and journalistic evidence.",
        level: "SL",
      },
      {
        front: "How do an *Informe* and a *Propuesta* differ in IB Professional conventions?",
        back: "An **Informe** objectively reports data, findings, and conclusions with numbered subheadings; a **Propuesta** persuasively pitches an actionable solution (objectives, rationale, concrete plan, benefits).",
        level: "SL",
      },
      {
        front: "[HL] Which noun does *cuyo / cuya / cuyos / cuyas* agree with?",
        back: "Always with the **noun immediately following it (the possessed thing)** — NEVER the possessor! Example: *una directora **cuyo** documental ganó un premio*.",
        level: "HL",
      },
      {
        front: "[HL] What mood MUST follow *de ahí que*, and what does it mean?",
        back: "Always **SUBJUNCTIVE**! Means “hence / for this reason”: *La sequía empeora; **de ahí que sea** urgente ahorrar agua.*",
        level: "HL",
      },
      {
        front: "[HL] Distinguish *lo cual* from *el cual / la cual*.",
        back: "**Lo cual** refers back to an **entire preceding clause/idea** (*…lo cual demuestra que…*). **El cual / la cual** refers to a specific gendered noun, especially after compound prepositions (*la ley mediante la cual…*).",
        level: "HL",
      },
    ],
    mustKnow: [
      "WEIRDO triggers the subjunctive ONLY when there is a **subject change + que**; without a subject change, use the **infinitive** (*Espero ganar* vs *Espero que ganes*).",
      "The 6 **ESCAPA** conjunctions (*en caso de que, sin que, con tal de que, antes de que, para que, a menos que*) ALWAYS take the subjunctive.",
      "Never place the **future tense** after *cuando / en cuanto / hasta que* — use **present subjunctive** (*cuando termines*).",
      "Never place the **conditional** after **si** in conditional clauses — Type 2 uses *Si + imperfecto de subjuntivo (-ra/-se) → condicional simple*.",
      "**Por** expresses cause, exchange, duration, movement through, means, and passive agent; **para** expresses purpose (+ inf.), recipient, deadline, destination, and opinion.",
      "Physical location takes **estar**, whereas **event location** (“takes place at”) takes **ser** (*La charla es en el aula magna*).",
      "Every Spanish salutation — formal (*Estimado Sr. Alcalde:*) or informal (*Querida Lucía:*) — ends with a **colon (:)**, never an English comma.",
      "IB Paper 1 Criterion C (6/30) rewards choosing the **single MOST appropriate text type** out of 3, matching **tú/usted** register consistently, and displaying authentic format conventions.",
      "[HL] **Cuyo/a/os/as** agrees with the **possessed noun after it** (never the owner), and **de ahí que** ALWAYS demands the **subjunctive**.",
      "[HL] **Nominalisation** (*el auge de, la reducción de, el envejecimiento de*) + concessive frames (*Si bien…, no obstante…*) are the fastest route to Band 10–12 on Criterion A.",
    ],
    misconceptions: [
      {
        wrong: "“Si tendría más tiempo, haría voluntariado en mi barrio.”",
        right: "“Si **tuviera** (or **tuviese**) más tiempo, haría voluntariado en mi barrio.” Never use the conditional right after *si* in a conditional clause!",
        level: "SL",
      },
      {
        wrong: "“Cuando llegaré a la universidad, estudiaré ingeniería ambiental.”",
        right: "“Cuando **llegue** a la universidad, estudiaré ingeniería ambiental.” Future actions after *cuando* ALWAYS take the **present subjunctive**, never the future tense.",
        level: "SL",
      },
      {
        wrong: "“Es obvio que la contaminación sea un problema grave.”",
        right: "“Es obvio que la contaminación **es** un problema grave.” Impersonal expressions of **certainty** (*es obvio / evidente / verdad que*) take the **indicative** — only doubt/subjectivity triggers subjunctive.",
        level: "SL",
      },
      {
        wrong: "“El concierto está en el Teatro Nacional y tenemos que comprar entradas para 30 euros.”",
        right: "“El concierto **es** en el Teatro Nacional y tenemos que comprar entradas **por** 30 euros.” Events take **ser**, and monetary exchange/price takes **por**.",
        level: "SL",
      },
      {
        wrong: "“Quiero que vayas a la reunión y que usted presente el proyecto.”",
        right: "Keep ONE consistent register! Either *tú* (*vayas… presentes*) or *usted* (*vaya… presente*). Switching mid-text damages Criterion C.",
        level: "SL",
      },
      {
        wrong: "[HL] “Es una escritora cuya libro refleja la memoria histórica.”",
        right: "[HL] “Es una escritora **cuyo** libro refleja la memoria histórica.” *Cuyo* agrees with the **following noun** (*libro* = masc. sg.), NOT with *escritora*.",
        level: "HL",
      },
      {
        wrong: "[HL] “El alquiler ha subido, de ahí que muchos jóvenes abandonan el centro.”",
        right: "[HL] “El alquiler ha subido; **de ahí que** muchos jóvenes **abandonen** el centro.” *De ahí que* ALWAYS requires the **subjunctive**.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Picking a comfortable text type (*diario* or *blog*) on Paper 1 even though the prompt specifies an official institutional recipient (*el alcalde, el director*) who clearly requires a **carta formal**, **informe**, or **propuesta**.",
      "Writing a Paper 1 *artículo*, *informe*, or *propuesta* as an undifferentiated wall of paragraphs with zero headline, byline, subheadings, or closing conventions.",
      "Using an English comma after Spanish salutations (*Estimado Director,*) instead of the mandatory Spanish **colon** (*Estimado Director:*).",
      "Forgetting the **nosotros** written accent in the imperfect subjunctive (*habl**á**ramos*, *tuv**ié**ramos*, *pud**ié**ramos*) or dropping the *-ir* stem shift in present subjunctive (*durmamos*, *sintamos*, *pidamos*).",
      "Confusing *como si* with regular *si*: writing *habla como si sabe* instead of *habla **como si supiera*** (always imperfect/pluperfect subjunctive!).",
      "Translating English *for* blindly as *para* in durations (*por tres años*), prices (*por diez euros*), or causes (*por el clima*).",
      "Dropping colloquial slang (*¡qué guay!*, *me importa un pepino*) into a formal *informe* or *carta formal* in an attempt to look “idiomatic”, which penalises Variation & Register.",
      "Overusing *pero* and *porque* in HL 450–600w essays instead of cohesive C1 connectors (*si bien, no obstante, puesto que, dado que, de ahí que + subj.*).",
    ],
    mnemonics: [
      {
        topic: "Noun-Clause Subjunctive Triggers",
        device: "WEIRDO (+ Subject Change + que)",
        explanation:
          "**W**ishes, **E**motions, **I**mpersonal judgements, **R**ecommendations, **D**oubt/Denial, **O**jalá. Remember: NO subject change → infinitive!",
        level: "SL",
      },
      {
        topic: "Always-Subjunctive Adverbials",
        device: "ESCAPA",
        explanation:
          "**E**n caso de que · **S**in que · **C**on tal de que · **A**ntes de que · **P**ara que · **A** menos que. Whenever you see these six with *que*, subjunctive is 100% automatic.",
        level: "SL",
      },
      {
        topic: "Present Subjunctive Irregulars",
        device: "DISHES",
        explanation:
          "**D**ar (*dé*), **I**r (*vaya*), **S**er (*sea*), **H**aber (*haya*), **E**star (*esté*), **S**aber (*sepa*) — the only six verbs that do not follow the *yo*-stem rule.",
        level: "SL",
      },
      {
        topic: "Paper 1 Conceptual Checklist",
        device: "A-C-P-M-V",
        explanation:
          "**A**udience · **C**ontext · **P**urpose · **M**eaning · **V**ariation — verify all five in your 4-minute plan before writing a single word of Paper 1.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Newspaper Editorials Across the Hispanophone Press",
        detail:
          "Compare editorials in *El País* (Spain), *La Nación* (Argentina), and *El Universal* (Mexico): every one uses the institutional *nosotros* voice, nominalisation, and *de ahí que + subjuntivo* to sound authoritative.",
        emoji: "📰",
      },
      {
        title: "Civic Petitions & Town-Hall Proposals in Latin America",
        detail:
          "Municipal citizen proposals (*propuestas ciudadanas*) in Bogotá, Medellín, and Madrid follow the exact IB structure: clear problem diagnosis, numbered feasible measures, formal *usted* address, and budget justification.",
        emoji: "🏛️",
      },
      {
        title: "Regional Variation: Tú, Vos & Usted in Daily Life",
        detail:
          "While Spain uses *tú / vosotros* informally and *usted / ustedes* formally, Argentina and Uruguay use *vos* (*vos tenés, vos vení*) and Colombia frequently uses *usted* even among friends — proving why IB calls *Variation* a core Conceptual Understanding!",
        emoji: "🌎",
      },
      {
        title: "Subjunctive in Diplomatic & Environmental Treaties",
        detail:
          "Spanish-language UN climate communiqués rely heavily on impersonal subjunctive triggers (*es imperativo que los Estados reduzcan…*) and concessives (*por más que persistan obstáculos…*) to express binding commitments.",
        emoji: "🌍",
      },
      {
        title: "Hispanic Film & Book Reviews (Reseñas Culturales)",
        detail:
          "Spanish cultural magazines like *Fotogramas* or *Letras Libres* blend vivid descriptive adjectives, spoiler-free plot framing, and nuanced criticism (*si bien el guion flaquea…, la fotografía brilla*) — the exact model for a top-band IB *reseña*.",
        emoji: "🎬",
      },
    ],
    videos: [
      {
        title: "Spanish Subjunctive Complete Guide (WEIRDO, ESCAPA & Imperfect Subjunctive)",
        channel: "YouTube IB Spanish B Search",
        url: "https://www.youtube.com/results?search_query=spanish+subjunctive+weirdo+escapa+imperfect+subjunctive+IB",
      },
      {
        title: "Por vs Para & Ser vs Estar Meaning Shifts Explained Clearly",
        channel: "YouTube Spanish B2 Grammar Search",
        url: "https://www.youtube.com/results?search_query=por+vs+para+ser+vs+estar+meaning+changes+spanish+B2",
      },
      {
        title: "IB Spanish B Paper 1 Text Types & Conceptual Understanding (Criterion C)",
        channel: "YouTube IB Spanish B Paper 1 Search",
        url: "https://www.youtube.com/results?search_query=IB+Spanish+B+Paper+1+text+types+conceptual+understanding",
      },
      {
        title: "Spanish C1 Connectors, Cuyo, Lo Cual & Nominalisation for HL Essays",
        channel: "YouTube Spanish C1 Writing Search",
        url: "https://www.youtube.com/results?search_query=espanol+C1+conectores+cuyo+lo+cual+de+ahi+que+subjuntivo",
      },
    ],
    formulas: [
      {
        name: "Present Subjunctive Formation",
        formula: "yo present indicative − o + opposite endings (-e / -a)",
        note: "Carry -go/-zco stems through all 6 forms; DISHES = dé, vaya, sea, haya, esté, sepa; -ir stem-changers shift e→i / o→u in nosotros/vosotros.",
        level: "SL",
      },
      {
        name: "Imperfect Subjunctive Formation",
        formula: "ellos preterite − ron + -ra / -ras / -ra / -´ramos / -rais / -ran",
        note: "Alternative -se endings (-se, -ses, -se, -´semos, -seis, -sen) are 100% equivalent in IB exams; always accent nosotros!",
        level: "SL",
      },
      {
        name: "Present Perfect & Pluperfect Subjunctive",
        formula: "haya(s/mos/n) + participio  |  hubiera(s/´ramos/n) + participio",
        note: "Use Perfect Subj. after Present/Future main verb for completed past; Pluperfect Subj. after Past main verb, Ojalá past regret, or Type 3 si-clause.",
        level: "SL",
      },
      {
        name: "Si-Clause Type 1 (Real / Likely)",
        formula: "Si + Presente de Indicativo → Futuro / Presente / Imperativo",
        note: "Example: Si reciclamos hoy, protegeremos el futuro.",
        level: "SL",
      },
      {
        name: "Si-Clause Type 2 (Hypothetical)",
        formula: "Si + Imperfecto de Subjuntivo (-ra/-se) → Condicional Simple",
        note: "NEVER put condicional after si! Example: Si tuviéramos apoyo, ampliaríamos el programa.",
        level: "SL",
      },
      {
        name: "Si-Clause Type 3 (Past Counterfactual)",
        formula: "Si + Pluscuamperfecto de Subjuntivo → Condicional Compuesto",
        note: "Example: Si hubiéramos invertido antes, habríamos evitado la crisis.",
        level: "SL",
      },
      {
        name: "Como si (Hypothetical Comparison)",
        formula: "como si + Imperfecto / Pluscuamperfecto de Subjuntivo",
        note: "ALWAYS past subjunctive, even when the main verb is in the present: Actúa como si nada pasara.",
        level: "SL",
      },
      {
        name: "Perífrasis Verbales Pack (Band 10–12)",
        formula: "llevar + [tiempo] + gerundio | acabar de + inf. | volver a + inf. | dejar de + inf.",
        note: "Expresses 'have been doing', 'have just done', 'do again', and 'stop doing' idiomatically.",
        level: "SL",
      },
      {
        name: "Pasiva Refleja vs Se Impersonal",
        formula: "Se + verbo (3ª sg./pl.) + sujeto paciente  |  Se + verbo (3ª sg.) + a + persona / adv.",
        note: "Se necesitan voluntarios (plural verb!) vs Se vive bien aquí / Se respeta a los mayores (always singular).",
        level: "SL",
      },
      {
        name: "IB Paper 1 Conceptual Formula (Criterion C)",
        formula: "Optimal Text Type = Audience + Context + Purpose + Register (tú/usted) + Format Conventions",
        note: "SL target: 250–400 words · HL target: 450–600 words · Paper 1 = 30 marks (A 12 + B 12 + C 6).",
        level: "SL",
      },
      {
        name: "[HL] Cuyo Agreement & Lo Cual Clause Link",
        formula: "Antecedent + cuyo/a/os/as + [Possessed Noun]  |  Clause 1, lo cual + Verb (3ª sg.)",
        note: "Cuyo agrees ONLY with the noun immediately following it (never add el/la).",
        level: "HL",
      },
      {
        name: "[HL] C1 Consecutive & Concessive Triggers",
        formula: "de ahí que + Subjuntivo  |  Si bien + Indicativo, no obstante + Indicativo",
        note: "De ahí que ALWAYS demands subjunctive; Si bien introduces a conceded fact in indicative.",
        level: "HL",
      },
    ],
  },
};
