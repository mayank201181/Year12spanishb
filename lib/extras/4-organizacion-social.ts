import type { TopicExtras } from "../types.ts";

const SVG_TRATAMIENTO_MAP = `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map of Spanish forms of address tu, vos, usted, vosotros and ustedes across Spain and Latin America">
  <rect x="0" y="0" width="600" height="270" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14.5" font-weight="800" fill="#2b140c">Formas de tratamiento en el mundo hispanohablante</text>
  <rect x="20" y="44" width="176" height="176" rx="11" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="108" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#9a3412">España peninsular</text>
  <text x="32" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Informal sing.:</tspan> tú (eres)</text>
  <text x="32" y="112" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Formal sing.:</tspan> usted (es)</text>
  <text x="32" y="134" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Informal plur.:</tspan> vosotros</text>
  <text x="32" y="152" font-family="system-ui, sans-serif" font-size="10.5" fill="#6b483a">  (participáis · colaboráis)</text>
  <text x="32" y="176" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Formal plur.:</tspan> ustedes</text>
  <text x="32" y="194" font-family="system-ui, sans-serif" font-size="10.5" fill="#6b483a">  (participan · colaboran)</text>
  <rect x="212" y="44" width="176" height="176" rx="11" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.5"/>
  <text x="300" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#0f766e">México · Caribe · Andes</text>
  <text x="224" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Informal sing.:</tspan> tú</text>
  <text x="224" y="112" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Formal sing.:</tspan> usted</text>
  <text x="224" y="134" font-family="system-ui, sans-serif" font-size="10.5" fill="#134e4a">  (En Colombia/Costa Rica:</text>
  <text x="224" y="150" font-family="system-ui, sans-serif" font-size="10.5" fill="#134e4a">  también ustedeo afectivo)</text>
  <text x="224" y="176" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Todo plural:</tspan> ustedes</text>
  <text x="224" y="194" font-family="system-ui, sans-serif" font-size="10.5" fill="#6b483a">  (sin vosotros en el habla)</text>
  <rect x="404" y="44" width="176" height="176" rx="11" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>
  <text x="492" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#0369a1">Río de la Plata y C.A.</text>
  <text x="416" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Informal sing.:</tspan> vos</text>
  <text x="416" y="108" font-family="system-ui, sans-serif" font-size="10.5" fill="#6b483a">  (sos · tenés · participás)</text>
  <text x="416" y="132" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Formal sing.:</tspan> usted</text>
  <text x="416" y="150" font-family="system-ui, sans-serif" font-size="10.5" fill="#6b483a">  (es · tiene · participa)</text>
  <text x="416" y="176" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c"><tspan font-weight="700">Todo plural:</tspan> ustedes</text>
  <text x="416" y="194" font-family="system-ui, sans-serif" font-size="10.5" fill="#6b483a">  (Argentina · Uruguay)</text>
  <rect x="30" y="232" width="540" height="26" rx="8" fill="#fef9c3" stroke="#a16207" stroke-width="1"/>
  <text x="300" y="249" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#854d0e">Consejo IB: todas las variedades son 100 % válidas; elige una y mantén su coherencia.</text>
</svg>`;

const SVG_PERSUASION_LADDER = `<svg viewBox="0 0 600 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Institutional persuasion staircase from informal complaint to Band 10 to 12 HL formal proposal">
  <rect x="0" y="0" width="600" height="265" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14.5" font-weight="800" fill="#2b140c">De la queja informal a la propuesta HL (Banda 10–12)</text>
  <rect x="26" y="190" width="168" height="54" rx="10" fill="#ffe4e6" stroke="#be123c" stroke-width="1.5"/>
  <text x="110" y="210" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#be123c">1. Queja B1 (Banda 4–6)</text>
  <text x="110" y="228" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-style="italic" fill="#2b140c">«El alquiler es caro y fatal.»</text>
  <rect x="160" y="126" width="210" height="54" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="265" y="146" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#9a3412">2. Propuesta SL B2 (Banda 7–9)</text>
  <text x="265" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-style="italic" fill="#2b140c">«Si hubiera más becas, bajaría el paro.»</text>
  <rect x="308" y="54" width="268" height="62" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
  <text x="442" y="75" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d">3. Propuesta HL C1 (Banda 10–12)</text>
  <text x="442" y="93" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.8" font-style="italic" fill="#2b140c">«De haberse regulado el alquiler, se habría</text>
  <text x="442" y="107" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.8" font-style="italic" fill="#2b140c">evitado el retraso; de ahí que convenga...»</text>
  <path d="M 110 188 L 110 152 L 154 152" fill="none" stroke="#c2410c" stroke-width="2"/>
  <path d="M 265 124 L 265 86 L 302 86" fill="none" stroke="#15803d" stroke-width="2"/>
  <text x="36" y="72" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f766e">Claves del salto C1:</text>
  <text x="36" y="90" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Nominalización</text>
  <text x="36" y="106" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Condicional de cortesía</text>
  <text x="36" y="122" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Contraargumento diplomático</text>
  <text x="36" y="138" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Usted 100 % consistente</text>
</svg>`;

export const extras: TopicExtras = {
  hook:
    "Why can changing a single letter—from *ayud**a*** to *ayud**e***, or from *invirtier**a*** to *invertir**ía***—make the difference between a proposal that gets ignored by a city hall and one that wins funding? In **Organización social**, Spanish grammar is civic power: knowing how to address institutions with *usted*, weigh alternatives with 3-type *si*-clauses, and cite real reforms from Madrid to Medellín turns language into action.",
  didYouKnow: [
    "**Where «usted» came from:** The pronoun *usted* evolved by phonetic shortening from the 16th-century courtly title **Vuestra Merced** (*Your Mercy* → *vuesarced* → *vusted* → *usted*)—which is why *usted* STILL uses 3rd-person singular verbs (*«Your Mercy speaks»* = *usted habla*)!",
    "**Affectionate «ustedeo» in Colombia & Costa Rica:** Although textbooks equate *usted* with stiff formality, many speakers in Bogotá, Antioquia, and Costa Rica use *usted* with close friends, romantic partners, and even pets—a reminder that register is culturally shaped, not purely mechanical.",
    "**Voting at 16 in Argentina & Ecuador:** Both Argentina (since 2012) and Ecuador (since 2008) allow 16- and 17-year-old citizens to vote voluntarily (*voto facultativo*), turning secondary-school civic education into an active national debate.",
    "**Medellín's «Urbanismo Social»:** Rather than relying only on policing to curb youth violence in the 2000s, Medellín invested in cable-car transit (*Metrocable*) and landmark public library parks (*Parques Biblioteca*) in marginalised hillside districts, making civic infrastructure a global case study in prevention.",
    "**Uruguay's Plan Ceibal (2007):** Uruguay became the first nation in the world to provide a free laptop and internet connection to every public primary and secondary student, narrowing the rural-urban *brecha digital* long before remote schooling became widespread.",
    "**TECHO's youth brigades:** Founded in Chile in 1997 by university students, the NGO **TECHO** has mobilized over a million young volunteers across 18 Latin American countries to collaborate directly with families in informal settlements building transitional homes and community halls.",
  ],
  activities: [
    {
      title: "Auditoría de registro: Tú → Usted en 5 minutos",
      emoji: "🔍",
      materials: [
        "A short informal WhatsApp or email message inviting a peer to a school NGO drive",
        "Two highlighters (one for verbs/imperatives, one for pronouns/possessives)",
      ],
      steps: [
        "Draft a 60-word casual message to a friend (*tú*) asking them to join a weekend *banco de alimentos* campaign.",
        "Highlight every *tú* verb ending, imperative, pronoun (*te / ti / contigo*), and possessive (*tu / tus*).",
        "Rewrite the entire message as an official *carta formal* to your school principal (*Estimado/a Sr./Sra. Director/a:*), upgrading casual slang (*¡qué guay!*) into B2 formal diction (*iniciativa solidaria*).",
        "Run the **S-P-V-I-C** sweep (Saludo `:`, Pronombres, Verbos, Imperativos, Cierre) to confirm zero *tú* leaks remain.",
      ],
      maths:
        "Trains instant systemic register conversion—directly protecting your **Criterion C (Conceptual Understanding)** score on Paper 1.",
    },
    {
      title: "Mesa redonda: Universidad frente a FP Dual",
      emoji: "🎙️",
      materials: [
        "Timer (3 minutes per speaker)",
        "Vocabulary card: paro juvenil, sobrecualificación, inserción laboral, fuga de cerebros, becas",
      ],
      steps: [
        "Split into two perspectives (or alternate sides solo for IO practice): Speaker A champions traditional university degrees (*grados universitarios*); Speaker B champions *Formación Profesional Dual*.",
        "Each speaker must integrate at least **two** B2 workplace collocations and **one Type 2 `si`-clause** (*Si se invirtiera más en...*).",
        "After 3 minutes, both speakers synthesize a joint policy recommendation for the Ministry of Education using *Si bien es cierto que..., no obstante...*.",
      ],
      maths:
        "Builds spontaneous two-sided argumentation and natural subjunctive-conditional fluency for **Individual Oral Parts 2 & 3**.",
    },
    {
      title: "Laboratorio de políticas: 3 tiempos de «si»",
      emoji: "⚖️",
      materials: [
        "Notebook or whiteboard",
        "Three policy headlines: youth housing, restorative justice, four-day work week",
      ],
      steps: [
        "Pick one policy headline (e.g. *justicia restaurativa* in youth courts).",
        "Write a **Type 1** realistic proposal (*Si + presente → futuro*), a **Type 2** hypothetical reform (*Si + imperfecto de subjuntivo → condicional*), and a **Type 3** past critique (*Si + pluscuamperfecto de subjuntivo → condicional compuesto*).",
        "[HL stretch] Condense your Type 3 sentence using **De haber(se) + participio** and append a **de ahí que + subjuntivo** conclusion.",
      ],
      maths:
        "Cements automatic tense-pairing across all three *si*-clause types and inoculates against the #1 IB trap (*si + condicional*).",
    },
  ],
  bonusDiagrams: [
    {
      title: "Mapa de tratamiento en el mundo hispanohablante",
      svg: SVG_TRATAMIENTO_MAP,
      caption:
        "Compare Peninsular *vosotros/ustedes*, pan-Hispanic *tú/usted*, and Rioplatense *vos/usted*—pick one authentic norm and sustain it consistently.",
    },
    {
      title: "Escalera de persuasión institucional (B1 → B2 → C1 HL)",
      svg: SVG_PERSUASION_LADDER,
      caption:
        "Moving from Band 4–6 complaints to Band 10–12 HL propuestas depends on nominalisation, polite conditionals, and counterfactual precision.",
    },
  ],
  history: {
    title: "De la Reforma de Córdoba (1918) a los presupuestos participativos: cómo los jóvenes moldearon la ciudadanía hispanohablante",
    story:
      "Student and civic movements have repeatedly reshaped social organization across the Spanish-speaking world. In June 1918, university students in **Córdoba, Argentina** launched the historic **Reforma Universitaria**, demanding tuition-free public access, academic freedom, university autonomy, and student co-governance (*cogobierno*). Its manifesto—written in resonant formal Spanish—spread rapidly to Mexico, Peru, Uruguay, and Chile, laying the foundation for iconic public universities such as the **UBA** and **UNAM** that opened higher education to generations of working-class families.\n\nIn Spain, the late 19th-century **Institución Libre de Enseñanza** pioneered secular, critical pedagogy long before modern reforms; a century later, Spain's 1978 Constitution established the decentralized *Estado de las Autonomías* and universal public education and healthcare. Today, young citizens across Spain and Latin America carry that civic tradition into the 21st century—debating *FP Dual* against *paro juvenil*, voting in digital **presupuestos participativos** from Madrid to Montevideo, and organizing grassroots solidarity networks like **TECHO**.",
  },
};
