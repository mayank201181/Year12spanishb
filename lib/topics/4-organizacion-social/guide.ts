import type { TopicGuide } from "../../types.ts";

const SVG_REGISTER_LADDER = `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Register ladder comparing informal tu and formal usted across IB Spanish B text types">
  <rect x="0" y="0" width="600" height="280" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#2b140c">Escalera de registro: Tú vs. Usted en el IB Spanish B</text>
  <rect x="24" y="46" width="262" height="190" rx="12" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="155" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#9a3412">REGISTRO INFORMAL (TÚ)</text>
  <text x="155" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#6b483a">Blog · Diario · Correo a un amigo</text>
  <line x1="40" y1="98" x2="270" y2="98" stroke="#c2410c" stroke-opacity="0.35"/>
  <text x="38" y="118" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Saludo:</tspan> Hola, / Querido/a...</text>
  <text x="38" y="140" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Verbos:</tspan> participas · ayudas · ven</text>
  <text x="38" y="162" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Pronombres:</tspan> te · tu / tus · contigo</text>
  <text x="38" y="184" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Imperativo:</tspan> apoya / no olvides</text>
  <text x="38" y="206" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Cierre:</tspan> Un abrazo, / ¡Nos vemos!</text>
  <rect x="314" y="46" width="262" height="190" rx="12" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.5"/>
  <text x="445" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13.5" font-weight="800" fill="#0f766e">REGISTRO FORMAL (USTED)</text>
  <text x="445" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#134e4a">Carta formal · Propuesta · Informe</text>
  <line x1="330" y1="98" x2="560" y2="98" stroke="#0f766e" stroke-opacity="0.35"/>
  <text x="328" y="118" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Saludo:</tspan> Estimado/a Sr./Sra. + apellido:</text>
  <text x="328" y="140" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Verbos:</tspan> participa · ayuda · venga</text>
  <text x="328" y="162" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Pronombres:</tspan> le / se · su / sus · con usted</text>
  <text x="328" y="184" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Imperativo:</tspan> apoye / no olvide</text>
  <text x="328" y="206" font-family="system-ui, sans-serif" font-size="11.5" fill="#2b140c"><tspan font-weight="700">Cierre:</tspan> Atentamente, / Le saluda...</text>
  <path d="M 288 140 L 312 140" stroke="#2b140c" stroke-width="2" marker-end="url(#arr)"/>
  <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2b140c"/></marker></defs>
  <rect x="44" y="246" width="512" height="24" rx="8" fill="#fef9c3" stroke="#a16207" stroke-width="1"/>
  <text x="300" y="262" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#854d0e">Regla de oro (Criterio C): nunca mezcles tú y usted en el mismo texto formal.</text>
</svg>`;

const SVG_EDUCATION_PATHWAYS = `<svg viewBox="0 0 600 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hispanic education pathways from secondary school through Bachillerato or FP Dual into the labour market">
  <rect x="0" y="0" width="600" height="265" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14.5" font-weight="800" fill="#2b140c">Itinerarios educativos y acceso al mercado laboral</text>
  <rect x="20" y="96" width="122" height="72" rx="10" fill="#faeae2" stroke="#c2410c" stroke-width="1.5"/>
  <text x="81" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9a3412">Educación</text>
  <text x="81" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9a3412">Secundaria</text>
  <text x="81" y="155" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#6b483a">ESO / Secundaria</text>
  <line x1="142" y1="118" x2="186" y2="80" stroke="#6b483a" stroke-width="2"/>
  <line x1="142" y1="146" x2="186" y2="184" stroke="#6b483a" stroke-width="2"/>
  <rect x="188" y="46" width="164" height="70" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>
  <text x="270" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0369a1">Bachillerato / Prepa</text>
  <text x="270" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">PAU / EBAU · Acceso</text>
  <text x="270" y="102" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">→ Grado universitario</text>
  <rect x="188" y="148" width="164" height="72" rx="10" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.5"/>
  <text x="270" y="170" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f766e">Formación Profesional</text>
  <text x="270" y="187" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">FP Grado Medio / Superior</text>
  <text x="270" y="204" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">FP Dual (aula + empresa)</text>
  <line x1="352" y1="80" x2="404" y2="112" stroke="#0369a1" stroke-width="2"/>
  <line x1="352" y1="184" x2="404" y2="152" stroke="#0f766e" stroke-width="2"/>
  <rect x="406" y="64" width="174" height="136" rx="12" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="493" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#15803d">Mercado Laboral</text>
  <text x="418" y="110" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Prácticas y primer empleo</text>
  <text x="418" y="128" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Teletrabajo y conciliación</text>
  <text x="418" y="146" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Reto: paro juvenil</text>
  <text x="418" y="164" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Reto: contratos temporales</text>
  <text x="418" y="182" font-family="system-ui, sans-serif" font-size="10.5" fill="#2b140c">• Reto: fuga de cerebros</text>
  <text x="300" y="246" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6b483a">Clave IB: la FP Dual reduce la brecha entre formación académica y empleo estable.</text>
</svg>`;

const SVG_SI_CLAUSES = `<svg viewBox="0 0 600 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three types of Spanish si-clauses for social reform proposals with tense pairings and grammar warning">
  <rect x="0" y="0" width="600" height="285" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14.5" font-weight="800" fill="#2b140c">Los 3 tipos de oraciones condicionales con «si»</text>
  <rect x="20" y="42" width="560" height="58" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="34" y="64" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#15803d">TIPO 1 · Probable / Real</text>
  <text x="230" y="64" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#2b140c">Si + Presente de indicativo  →  Futuro / Presente / Imperativo</text>
  <text x="34" y="86" font-family="system-ui, sans-serif" font-size="11.5" font-style="italic" fill="#1f2937">«Si fomentamos la mediación escolar, disminuirá la delincuencia juvenil.»</text>
  <rect x="20" y="108" width="560" height="58" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>
  <text x="34" y="130" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#0369a1">TIPO 2 · Hipotética</text>
  <text x="230" y="130" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#2b140c">Si + Imperfecto de subjuntivo (-ra/-se)  →  Condicional simple</text>
  <text x="34" y="152" font-family="system-ui, sans-serif" font-size="11.5" font-style="italic" fill="#1f2937">«Si el Estado invirtiera más en reinserción, bajaría la reincidencia.»</text>
  <rect x="20" y="174" width="560" height="60" rx="10" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="34" y="196" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#9a3412">TIPO 3 · Pasado (HL)</text>
  <text x="230" y="196" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#2b140c">Si + Pluscuamperfecto de subjuntivo  →  Condicional compuesto</text>
  <text x="34" y="218" font-family="system-ui, sans-serif" font-size="11.5" font-style="italic" fill="#1f2937">«Si se hubiera aprobado la reforma antes, se habría reducido la desigualdad.»</text>
  <rect x="40" y="244" width="520" height="28" rx="8" fill="#ffe4e6" stroke="#be123c" stroke-width="1.5"/>
  <text x="300" y="262" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#be123c">PROHIBIDO tras «si»: nunca presente de subjuntivo (*si tenga) ni condicional (*si tendría).</text>
</svg>`;

const SVG_HL_PROPUESTA = `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture of a Band 10 to 12 HL Spanish B formal proposal of 450 to 600 words">
  <rect x="0" y="0" width="600" height="280" rx="14" fill="#fffaf7" stroke="#eed3c6" stroke-width="1.5"/>
  <text x="300" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14.5" font-weight="800" fill="#2b140c">Arquitectura de una Propuesta HL (450–600 palabras · Banda 10–12)</text>
  <rect x="24" y="42" width="552" height="36" rx="8" fill="#faeae2" stroke="#c2410c" stroke-width="1.2"/>
  <text x="38" y="64" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9a3412">1. Encabezado institucional (40 w)</text>
  <text x="276" y="64" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">Destinatario · Remitente · Fecha · Asunto preciso</text>
  <rect x="24" y="84" width="552" height="40" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.2"/>
  <text x="38" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0369a1">2. Diagnóstico / Antecedentes (110 w)</text>
  <text x="276" y="108" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">Datos, brecha estructural + «De haber... / Si hubiera...»</text>
  <rect x="24" y="130" width="552" height="48" rx="8" fill="#ccfbf1" stroke="#0f766e" stroke-width="1.2"/>
  <text x="38" y="150" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f766e">3. Medidas concretas (220 w)</text>
  <text x="276" y="150" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">Subtítulos numerados · Condicional de cortesía</text>
  <text x="276" y="168" font-family="system-ui, sans-serif" font-size="11" fill="#134e4a">«Convendría implantar... · Instamos a que se regule...»</text>
  <rect x="24" y="184" width="552" height="40" rx="8" fill="#fef9c3" stroke="#a16207" stroke-width="1.2"/>
  <text x="38" y="208" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#854d0e">4. Viabilidad y contraargumento (110 w)</text>
  <text x="276" y="208" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">«Si bien es cierto que... no obstante... de ahí que + subj.»</text>
  <rect x="24" y="230" width="552" height="36" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.2"/>
  <text x="38" y="252" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d">5. Cierre diplomático y firma (50 w)</text>
  <text x="276" y="252" font-family="system-ui, sans-serif" font-size="11" fill="#2b140c">Disponibilidad de reunión + «Atentamente, [Cargo]»</text>
</svg>`;

export const guide: TopicGuide = {
  id: "4-organizacion-social",
  title: "Theme 4: Organización social (Social Organization)",
  strand: "Prescribed Themes 4–5",
  icon: "🏛️",
  level: "SL",
  summary:
    "Explore how Hispanophone societies structure community life, volunteering, education, employment, justice, and social mobility—while mastering tú vs. usted register precision, 3-type si-clauses, and [HL] formal propuestas.",
  intro:
    "In **Theme 4 (*Organización social*)**, IB Spanish B moves decisively beyond IGCSE descriptions of school uniforms and weekend hobbies into how real communities govern themselves, integrate young adults into work, balance punishment with rehabilitation, and address structural inequality across Spain and Latin America.\n\nTo unlock top bands on Paper 1, Paper 2, and the Individual Oral, you must pair precise **B2–C1 civic and labour lexicon** (*paro juvenil, formación profesional dual, reinserción, movilidad social*) with rock-solid control of **register (`tú` vs. `usted`)** and **hypothetical reasoning (`si`-clauses Types 1, 2, and 3)**.",
  guide: [
    {
      id: "relaciones-comunidad-voluntariado",
      heading: "Relaciones sociales, comunidad y compromiso social (Community & Volunteering)",
      level: "SL",
      discovery: {
        problem:
          "Compare two openings written by Year 12 students asking their city's Mayor to fund a youth food-bank initiative:\n\n- **Draft 1:** *Hola alcalde, te escribo porque quiero que tú nos ayudes con nuestro voluntariado. Por favor, lee tu correo y dime si vienes.*\n- **Draft 2:** *Estimado Sr. Alcalde: Me dirijo a usted en nombre de la asociación estudiantil para solicitar su apoyo a nuestra campaña solidaria. Le agradecería que considerara asistir al acto inaugural.*\n\nBefore reading further, count how many grammatical elements change when moving from **tú** to **usted**—not just the greeting!",
        idea:
          "Register in Spanish is **systemic**, never cosmetic. Switching from *tú* to *usted* triggers a synchronized cascade across **five layers**: (1) salutation & closing (*Hola → Estimado Sr. Alcalde:* with a colon, not a comma), (2) subject & object pronouns (*te → le / se*), (3) possessives (*tu → su*), (4) verb conjugations (2nd person singular → 3rd person singular across indicative, subjunctive, and imperatives: *ayudes → ayude, lee → lea, dime → dígame*), and (5) lexical elevation (*quiero que → le agradecería que / para solicitar*). Slipping even once into *te* or *tu* inside a formal letter costs marks on **Criterion C (Conceptual Understanding)**.",
      },
      body:
        "Across Spain and Latin America, social cohesion relies heavily on **el tejido asociativo** (community networks), neighbourhood centres (*centros cívicos*), and **ONGs** (*organizaciones no gubernamentales*) such as Cruz Roja, Cáritas, Médicos Sin Fronteras, and **TECHO** (a youth-led NGO building transitional housing across 18 Latin American countries).\n\n### Key Social-Engagement Themes for Paper 1 & IO\n- **Compromiso social y voluntariado juvenil:** volunteering at *bancos de alimentos*, tutoring disadvantaged children (*apoyo escolar*), or combating **la soledad no deseada** (unwanted loneliness) among older citizens through **programas de convivencia intergeneracional** (e.g., university students sharing flats with elderly residents in Madrid or Valencia).\n- **Solidaridad frente a asistencialismo:** IB examiners reward nuance. Does short-term charity solve root causes, or must NGOs empower local communities (*empoderamiento comunitario*) alongside public institutions?\n\n### Mastering `Tú` vs. `Usted` (and `Vosotros` vs. `Ustedes`)\nIn Spanish, **audience dictates grammar**. Always audit every verb and pronoun against this conversion table:\n\n| Feature | Informal (*tú*) | Formal (*usted*) | Formal Plural (*ustedes*) |\n|---|---|---|---|\n| Salutation | *Querido/a Sofía,* | *Estimado/a Sr./Sra. Ruiz:* | *Estimados señores:* |\n| Present indicative | *colaboras / ofreces* | *colabora / ofrece* | *colaboran / ofrecen* |\n| Present subjunctive | *espero que apoyes* | *espero que apoye* | *espero que apoyen* |\n| Affirmative imperative | *ayuda / pon / dinos* | *ayude / ponga / díganos* | *ayuden / pongan / dígannos* |\n| Negative imperative | *no olvides / no dudes* | *no olvide / no dude* | *no olviden / no duden* |\n| Object pronouns | *te escribo / te pido* | *le escribo / le pido* | *les escribo / les pido* |\n| Reflexive pronouns | *te comprometes* | *se compromete* | *se comprometen* |\n| Possessives | *tu apoyo / tus vecinos* | *su apoyo / sus vecinos* | *su apoyo / sus vecinos* |\n| Sign-off | *Un fuerte abrazo,* | *Atentamente,* | *Les saluda atentamente,* |\n\nNote on regional variation: In **Latin America**, *ustedes* is used for **both** formal and informal plural audiences, whereas in **Spain**, *vosotros* is informal plural (*¿participáis?*) and *ustedes* is formal plural (*¿participan?*). In Paper 1, choose one coherent regional norm and sustain it consistently.",
      diagram: SVG_REGISTER_LADDER,
      diagramCaption:
        "Every formal IB text type (carta formal, propuesta, informe) requires total consistency across greetings, pronouns, possessives, verbs, and imperatives.",
      workedExamples: [
        {
          title: "Converting an Informal Outreach Message into Formal `Usted`",
          problem:
            "Convert this informal community message for a *carta formal* addressed to the director of a local NGO (*Directora Gómez*):\n*«Te escribo para pedirte tu colaboración. Ven a nuestro centro cívico y comparte tu experiencia con los jóvenes.»*",
          steps: [
            "Replace informal indirect object pronouns **te** with formal **le**: *Te escribo → Le escribo*; *pedirte → pedirle*.",
            "Replace informal possessives **tu** with formal **su**: *tu colaboración → su colaboración*; *tu experiencia → su experiencia*.",
            "Convert affirmative *tú* imperatives into *usted* imperatives (present subjunctive 3rd person singular): *ven → venga*; *comparte → comparta*.",
            "Optionally soften the direct imperatives with formal courtesy (*le invitamos a venir y a compartir*) to sound truly diplomatic in IB Paper 1.",
          ],
          answer:
            "«Le escribo para pedirle su colaboración. Venga a nuestro centro cívico y comparta su experiencia con los jóvenes.» (Or even more idiomatic: «Me dirijo a usted para solicitar su colaboración y le invito a acudir a nuestro centro cívico para compartir su experiencia con los jóvenes.»)",
          yourTurn: {
            question:
              "Convert ONLY the imperative verb phrase **«no dudes»** from *tú* to formal *usted* (used in *«No dudes en contactarnos»*).",
            answer: {
              type: "text",
              accept: ["no dude", "No dude"],
              display: "no dude",
            },
            solution:
              "For *usted* imperatives (both affirmative and negative), use the 3rd person singular present subjunctive. Since *dudar* is an *-ar* verb, swap the vowel to *-e* and drop the *-s*: **no dude**.",
          },
        },
        {
          title: "Matching Audience to Text Type & Register (Paper 1 Strategy)",
          problem:
            "A Paper 1 prompt asks you to persuade local residents of all ages to volunteer at a weekend neighbourhood recycling and food-collection drive. The three options are: **folleto**, **diario personal**, and **informe**. Which text type and register fit best?",
          steps: [
            "Eliminate **diario personal**: a diary is private and reflective, unsuitable for mobilizing a neighbourhood.",
            "Eliminate **informe**: a report analyzes data objectively for an institution rather than persuading residents to sign up.",
            "Select **folleto** (brochure/leaflet): designed to inform and persuade the public using catchy headings, bullet points, practical details (*¿Cuándo?, ¿Dónde?, ¿Cómo participar?*), and a clear call to action.",
            "Choose a **semi-formal collective register** (*nosotros* inclusive + polite *usted/ustedes* or direct community *tú* if clearly targeted at youth—for all-age residents, *ustedes* or inclusive *nosotros* like *¡Construyamos juntos un barrio más solidario!* avoids sounding disrespectful to older neighbours).",
          ],
          answer:
            "**Folleto** with persuasive visual structure (title, subheadings, practical box, call to action) and an inclusive, respectful public register (*nosotros* / *ustedes*).",
        },
      ],
      keyPoints: [
        "Spanish salutations in formal letters use a **colon (:)**, NOT a comma: *Estimada Sra. Morales:* (whereas English uses a comma).",
        "Formal *usted* imperatives ALWAYS use the **present subjunctive 3rd person singular**: *apoye, lea, escriba, haga, ponga, venga, sea*.",
        "Watch orthographic shifts in *usted* imperatives: *buscar → busque*, *entregar → entregue*, *organizar → organice*.",
        "Distinguish **solidaridad** (mutual civic support) from **caridad / asistencialismo** (top-down handouts) to elevate your IO and Paper 1 analysis.",
      ],
      whyItWorks:
        "IB Criterion C awards top marks only when your **context, audience, purpose, and variation** reinforce one another. Mastering the grammatical mechanics of *usted* proves you are not merely translating English politeness—you genuinely control Spanish social pragmatics.",
      strategies: [
        "Do a 60-second **«tú-hunting sweep»** during Paper 1 proofreading: scan every verb ending in *-s* and every *te / tu / tus / ti / contigo* in formal texts.",
        "Use **inclusive *nosotros*** (*fomentemos, construyamos*) in community speeches and leaflets to build warmth without risking awkward *tú/usted* shifts.",
        "Anchor volunteering arguments in real Hispanophone examples such as **TECHO**, **Cruz Roja Juventud**, or intergenerational housing schemes.",
      ],
      thinkDeeper:
        "In parts of Colombia (such as Bogotá and Antioquia) and Costa Rica, speakers sometimes use **ustedeo de confianza**—addressing close friends or even family members with *usted*! How does this challenge the simplistic textbook rule that *usted* always equals coldness?",
    },
    {
      id: "educacion-mundo-laboral",
      heading: "Educación y el mundo laboral (Education & the Working World)",
      level: "SL",
      discovery: {
        problem:
          "Spot the **four post-IGCSE false friends or calques** hiding in this student sentence:\n*«Después del colegio, quiero aplicar para un buen trabajo porque no me realicé de que el desempleo de jóvenes era tan alto.»*\n\nHow would an educated Spanish speaker express each idea naturally?",
        idea:
          "1. **el colegio** usually means primary/secondary school, NOT university (*la universidad*); after secondary school, Spanish students finish **el bachillerato** or **la Formación Profesional (FP)**.\n2. **aplicar para** is an Anglicism; use **solicitar un puesto de trabajo / presentar una solicitud**.\n3. **realizarse** means *to fulfil oneself*, NOT *to realize*; use **darse cuenta de que**.\n4. Instead of clunky *desempleo de jóvenes*, use the authentic collocation **el paro juvenil** (Spain) or **el desempleo juvenil** (pan-Hispanic).",
      },
      body:
        "Education and employment sit at the heart of youth anxiety across the Spanish-speaking world. Spain has long recorded one of the highest **tasas de paro juvenil** in the European Union, driving phenomena such as **la sobrecualificación** (university graduates working in low-skilled roles), **la precariedad laboral** (short-term, insecure *contratos temporales*), and **la fuga de cerebros** (brain drain of skilled graduates emigrating abroad).\n\n### Pathways Beyond Secondary School\n- **El Bachillerato y la universidad:** Two academic years leading to national entrance exams (*PAU / EBAU / Selectividad* in Spain; *ENEM/PSU/PAES* equivalents in Latin America). Public universities like **la UNAM** (Mexico) or **la UBA** (Argentina) are tuition-free and central to social mobility, though **las becas** (grants) remain vital for living costs.\n- **La Formación Profesional (FP) y la FP Dual:** Historically undervalued compared to a university *grado*, vocational training—especially **FP Dual**, which combines classroom study with paid company placements (*prácticas remuneradas*)—now boasts higher immediate **inserción laboral** (job placement) than many traditional degrees.\n\n### The Changing Workplace\n- **El teletrabajo y la conciliación:** Remote and hybrid work expanded rapidly after 2020, helping **la conciliación laboral y familiar** (work-life balance) and even allowing workers to move to rural towns (*la España vaciada*). However, it also sparked debates over **el derecho a la desconexión digital** (right to switch off outside working hours) and workplace isolation.\n- **La brecha salarial y el techo de cristal:** Persistent gender pay gaps and barriers to leadership (*techo de cristal*), alongside discussions of **la jornada laboral de cuatro días** and **la automatización**.\n\n### Professional Text Types: `Carta de presentación` & `Informe`\n- **Carta de presentación (Cover Letter):** Formal *usted*, clear reference to the advertised post (*En respuesta a la oferta publicada...*), concise link between your skills (*competencias*) and the organisation's needs, polite closing requesting an interview (*quedo a su disposición para ampliar esta información en una entrevista*).\n- **Informe (Report):** Objective, analytical tone—use **se impersonal / pasiva refleja** (*Se observa que..., Se recomienda ampliar...*), clear title, numbered sections (*Introducción, Hallazgos principales, Conclusiones y recomendaciones*), and zero colloquial slang.",
      diagram: SVG_EDUCATION_PATHWAYS,
      diagramCaption:
        "Comparing academic (Bachillerato → Universidad) and vocational (FP Dual) routes helps you build nuanced arguments about youth employability.",
      workedExamples: [
        {
          title: "Upgrading an IGCSE Paragraph into an IB `Informe` on Youth Employment",
          problem:
            "Upgrade this weak IGCSE paragraph into a formal **informe** section:\n*«Muchos jóvenes no tienen trabajo y es muy malo. Creo que el gobierno tiene que dar más clases prácticas porque la universidad es demasiado teórica.»*",
          steps: [
            "Remove subjective 1st-person *creo que* and vague *muy malo*; adopt objective reporting frames (*Según los datos analizados, resulta preocupante que...*).",
            "Replace basic vocabulary (*no tienen trabajo, clases prácticas*) with B2–C1 collocations (**el paro juvenil, la precariedad laboral, la Formación Profesional Dual**).",
            "Use **pasiva refleja / se impersonal** (*se constata, se recomienda*) and a formal connector (**por consiguiente, no obstante**).",
            "End with a concrete, actionable recommendation suitable for an institutional report.",
          ],
          answer:
            "**Diagnóstico y recomendaciones:**\n*Según los datos analizados, se constata que las elevadas tasas de paro juvenil responden, en gran medida, al desajuste entre la formación universitaria y las demandas reales del mercado laboral. Por consiguiente, se recomienda impulsar la Formación Profesional Dual y ampliar los programas de prácticas remuneradas con el fin de facilitar una inserción laboral estable.*",
          yourTurn: {
            question:
              "Replace the Anglicism **«aplicar para»** with the single authentic Spanish infinitive meaning *to apply for* (a job or scholarship).",
            answer: {
              type: "text",
              accept: ["solicitar", "postular", "postularse"],
              display: "solicitar",
            },
            solution:
              "Use **solicitar** (pan-Hispanic formal standard: *solicitar un puesto / una beca*), or in Latin America **postular / postularse a un puesto**. Never write *aplicar para*.",
          },
        },
        {
          title: "Drafting a Formal `Carta de presentación` Opening",
          problem:
            "Write a 2-sentence formal opening for a *carta de presentación* applying for a summer internship (*prácticas de verano*) at a sustainable architecture firm in Barcelona.",
          steps: [
            "Open with formal salutation + colon: *Estimada Sra. Responsable de Recursos Humanos:* (or *Estimados señores:*).",
            "State your exact purpose immediately using *Me dirijo a usted(es) con el propósito de solicitar...*.",
            "Mention one specific strength linking your studies to the firm's mission.",
          ],
          answer:
            "*Estimada Sra. Directora de Recursos Humanos:*\n*Me dirijo a usted con el propósito de solicitar una plaza en su programa de prácticas de verano en arquitectura sostenible. Como estudiante del Bachillerato Internacional con especial interés en el urbanismo ecológico, considero que mi formación analítica y mi compromiso medioambiental aportarían valor a su equipo.*",
        },
      ],
      keyPoints: [
        "Avoid the Big 4 work/study false friends: *solicitar* (not *aplicar*), *darse cuenta de* (not *realizar*), *carrera* = university degree (not *career*, which is *trayectoria profesional*), *colegio* = school (not *university*).",
        "In an **informe**, prioritize **impersonal structures** (*se observa que, cabe señalar que, se propone*) and numbered subheadings.",
        "Always link **FP Dual** to reduced *paro juvenil* and **teletrabajo** to *conciliación laboral* vs. *desconexión digital* for balanced two-sided evaluation.",
        "Remember gender of key nouns: **el** currículo, **la** beca, **la** huelga, **la** brecha salarial, **el** sueldo.",
      ],
      whyItWorks:
        "Examiners immediately separate Band 6–7 scripts from Band 10–12 scripts by **lexical precision** and **register discipline**. Using *inserción laboral*, *conciliación*, and *pasiva refleja* signals authentic academic Spanish rather than translated English.",
      strategies: [
        "Build a **two-sided table** before writing any Paper 1 or IO response on *teletrabajo* or *universidad vs. FP* (2 advantages + 2 drawbacks + 1 balanced synthesis).",
        "Memorize 4 impersonal report starters: *Cabe destacar que..., Los datos revelan que..., Con respecto a..., En vista de lo expuesto, se recomienda...*.",
        "Watch prepositions: **solicitar + objeto directo** (no *para*!), **darse cuenta DE que**, **acceder A la universidad**, **conciliar la vida laboral CON la familiar**.",
      ],
      thinkDeeper:
        "If university tuition is free in countries like Argentina (UBA) or Mexico (UNAM), why do students from low-income backgrounds still face lower graduation rates? Think about indirect costs (*costes de oportunidad*), transport, and the need to work part-time while studying.",
    },
    {
      id: "ley-orden-ciudadania",
      heading: "Ley, orden y participación ciudadana (Law, Order & Civic Participation)",
      level: "SL",
      discovery: {
        problem:
          "Read these three proposals for lowering youth reoffending (*la reincidencia*) and notice the exact verb pair in each:\n\n1. *Si **creamos** programas de mediación, **bajará** la delincuencia.*\n2. *Si el gobierno **invirtiera** más en reinserción, **disminuiría** la reincidencia.*\n3. *Si las autoridades **hubieran reformado** la ley en 2015, **habrían evitado** el hacinamiento carcelario.*\n\nWhich verb tenses appear right after **si**—and which two common tenses NEVER appear right after **si**?",
        idea:
          "Look at the left side of the arrow: Type 1 uses **presente de indicativo**, Type 2 uses **imperfecto de subjuntivo** (*-ra/-se*), and Type 3 uses **pluscuamperfecto de subjuntivo** (*hubiera/hubiese + participio*). The two **strictly forbidden** tenses right after *si* are **presente de subjuntivo** (*~~si tengamos~~*) and **condicional** (*~~si tendríamos~~*). Mastering this single 3-type engine lets you argue realistic plans, hypothetical policies, and past critiques with flawless IB accuracy.",
      },
      body:
        "Healthy democracies balance **el estado de derecho** (rule of law), **la seguridad ciudadana**, and **la participación activa** of young citizens. IB prompts frequently ask you to debate whether justice systems should prioritize **el castigo punitivo** (harsher prison sentences) or **la justicia restaurativa y la reinserción social** (rehabilitation, education inside prisons, and *trabajos en beneficio de la comunidad*).\n\n### Core Civic & Legal Debates\n- **Prevención frente a castigo:** Does lowering the age of criminal responsibility (*responsabilidad penal juvenil*) deter crime, or do social investment, mentoring, and restorative mediation achieve lower **reincidencia**?\n- **Participación ciudadana juvenil:** Beyond voting at 18 (or 16 in Argentina and Ecuador!), young people shape public policy through **presupuestos participativos** (participatory municipal budgets), peaceful demonstrations (*manifestaciones pacíficas*), digital petitions, and youth councils (*consejos de la juventud*).\n- **Derechos y deberes:** Balancing freedom of expression (*libertad de expresión*) with protection against hate speech (*discursos de odio*) and misinformation.\n\n### Complete Grammar Engine: Conditional & `Si`-Clauses (Types 1, 2 & 3)\n| Type | Meaning | `Si`-clause (*prótasis*) | Main clause (*apódosis*) | Example |\n|---|---|---|---|---|\n| **Tipo 1** | Real / likely | **Presente de indicativo** | Futuro / Presente / Imperativo | *Si **aprobamos** esta medida, **mejorará** la convivencia.* |\n| **Tipo 2** | Hypothetical / contrary to now | **Imperfecto de subjuntivo** (*-ra / -se*) | **Condicional simple** (*-ía*) | *Si **hubiera** más educación cívica, los jóvenes **participarían** más.* |\n| **Tipo 3** | Impossible past / regret | **Pluscuamperfecto de subjuntivo** (*hubiera + participio*) | **Condicional compuesto** (*habría + participio*) | *Si **hubieran invertido** en prevención, **habrían reducido** el delito.* |\n| **Mixta** | Past cause → present effect | **Pluscuamperfecto de subjuntivo** | **Condicional simple** | *Si **hubieran aprobado** la ley, hoy **tendríamos** menos desigualdad.* |\n\n### Rapid Formation Reminder\n- **Imperfecto de subjuntivo:** take the **3rd person plural preterite** (*tuvieron, hicieron, invirtieron, fueron*), drop **-ron**, and add **-ra, -ras, -ra, -ramos, -rais, -ran** (or **-se** endings; both are 100% interchangeable in IB exams!). Note the accent on *nosotros*: *tuvi**é**ramos, invirti**é**ramos*.\n- **Condicional simple:** infinitive (or irregular stem: *tendr-, podr-, har-, dir-, sabr-, vendr-, pondr-, habr-*) + **-ía, -ías, -ía, -íamos, -íais, -ían**.",
      diagram: SVG_SI_CLAUSES,
      diagramCaption:
        "Match probability to tense pair: Type 1 (likely), Type 2 (hypothetical), Type 3 (past counterfactual)—and never place conditional or present subjunctive directly after si.",
      workedExamples: [
        {
          title: "Transforming One Reform Across All Three `Si`-Clause Types",
          problem:
            "Express the idea *«invest in social rehabilitation → reoffending falls»* (`invertir en reinserción social` / `bajar la reincidencia`) using **Type 1**, **Type 2**, and **Type 3** `si`-clauses with subject **el gobierno**.",
          steps: [
            "**Type 1 (likely future plan):** Present indicative (*invierte*) + Simple future (*bajará*).",
            "**Type 2 (hypothetical recommendation):** Imperfect subjunctive from preterite *invirtieron* → **invirtiera** (or *invirtiese*) + Conditional simple (**bajaría**).",
            "**Type 3 (past policy evaluation):** Pluperfect subjunctive (**hubiera invertido**) + Conditional compound (**habría bajado**).",
            "Double-check: neither *invierta* (present subj.) nor *invertiría* (conditional) appears after *si*!",
          ],
          answer:
            "- **Tipo 1:** *Si el gobierno **invierte** en reinserción social, **bajará** la reincidencia.*\n- **Tipo 2:** *Si el gobierno **invirtiera** en reinserción social, **bajaría** la reincidencia.*\n- **Tipo 3:** *Si el gobierno **hubiera invertido** en reinserción social, **habría bajado** la reincidencia.*",
          yourTurn: {
            question:
              "Complete this Type 2 hypothetical reform with the correct verb form of **tener**: *«Si los municipios ______ (tener) más presupuestos participativos, los jóvenes confiarían más en las instituciones.»*",
            answer: {
              type: "text",
              accept: ["tuvieran", "tuviesen"],
              display: "tuvieran / tuviesen",
            },
            solution:
              "Type 2 requires the **imperfect subjunctive** after *si*. Start from 3rd-person plural preterite **tuvieron** → drop *-ron* → add *-ran* (or *-sen*): **tuvieran** / **tuviesen**.",
          },
        },
        {
          title: "Paper 2 Reading Skill: Extracting a Minimal Justification Quote",
          problem:
            "Read this excerpt: *«Aunque muchos ciudadanos reclaman penas de prisión más severas ante el repunte de hurtos menores, los criminólogos subrayan que la educación laboral dentro de los centros penitenciarios reduce la reincidencia en un cuarenta por ciento.»*\n\nStatement: **Criminologists believe harsher prison sentences are the best way to lower reoffending.** True or False? Give the exact justification quote.",
          steps: [
            "Check who holds which view: *muchos ciudadanos* demand harsher prison sentences, NOT the criminologists.",
            "Identify the concessive contrast introduced by **Aunque** (*Although*): the main clause states what criminologists actually emphasize.",
            "Copy the **minimal exact Spanish clause** from the text that proves the statement **False**—no extra unrelated words.",
          ],
          answer:
            "**False.** Justification: *«los criminólogos subrayan que la educación laboral dentro de los centros penitenciarios reduce la reincidencia en un cuarenta por ciento.»*",
        },
      ],
      keyPoints: [
        "**Never** put the present subjunctive or conditional directly after *si* (*~~si aprobaría~~*, *~~si apruebe~~* are always wrong).",
        "Form the imperfect subjunctive from the **ellos preterite** (*hicieron → hiciera, pudieron → pudiera, redujeron → redujera*), NOT the infinitive.",
        "Order is flexible: the *si*-clause can come first or second (*Bajaría la reincidencia si se invirtiera más*), without changing the tense rules.",
        "Use **como si + imperfecto/pluscuamperfecto de subjuntivo** (*Actúan como si el problema no existiera*) for C1 stylistic flair.",
      ],
      whyItWorks:
        "Policy debate is inherently conditional: every law or civic reform asks *«what happens if we act, what would happen if we changed course, and what would have happened if we had intervened sooner?»* Knowing all three *si*-clause types equips you for every Paper 1 persuasive prompt and IO follow-up question.",
      strategies: [
        "Whenever an IO examiner asks *«¿Qué harías tú si fueras ministro/a de Educación?»*, listen for the **Type 2 cue** (*harías / fueras*) and mirror it immediately: *Si yo fuera..., promovería...*.",
        "Include **at least one Type 2 and one Type 3 (or mixed) `si`-clause** in every Paper 1 persuasive task to demonstrate Band 10–12 range of complex structures.",
        "In Paper 2 Reading, watch for **concessive traps** (*aunque, si bien, a pesar de que*) that state an opposing viewpoint before the author's real stance.",
      ],
      thinkDeeper:
        "In Argentina and Ecuador, citizens aged 16–17 have the optional right to vote (*voto joven*). Would lowering the voting age to 16 strengthen civic responsibility across the Hispanophone world, or does political literacy depend more on school civic education than age?",
    },
    {
      id: "instituciones-desigualdad-hl",
      heading: "[HL] Structural Mobility, Policy Proposals & Formal Persuasion",
      level: "HL",
      discovery: {
        problem:
          "Compare two conclusions to an HL *propuesta* (450–600 words) addressed to a Ministry of Education regarding unequal university access:\n\n- **Band 7 version:** *Para terminar, creo que el gobierno debe dar más dinero a los estudiantes pobres. Si lo hacen, será mejor para el país. Gracias.*\n- **Band 11–12 version:** *Habida cuenta de que el ascensor social se ha ralentizado en la última década, instamos al Ministerio a que refuerce las becas salario. De haberse adoptado esta reforma con anterioridad, se habría mitigado significativamente la deserción universitaria. Quedamos a su entera disposición para debatir estas medidas. Atentamente, ...*\n\nIdentify **four specific C1 devices** that turn a generic opinion into authoritative institutional persuasion.",
        idea:
          "1. **Causal & structural precision:** *Habida cuenta de que* (given that) + **el ascensor social** (social elevator/mobility) + **la deserción universitaria** (university drop-out).\n2. **Diplomatic institutional voice:** **instamos al Ministerio a que + subjuntivo** (*refuerce*) instead of blunt *el gobierno debe*.\n3. **C1 counterfactual inversion:** **De haber(se) + participio → condicional compuesto** (*De haberse adoptado..., se habría mitigado...*) replaces a basic *Si hubieran...* clause.\n4. **Formal closure & register consistency:** *Quedamos a su entera disposición... Atentamente,* satisfies Paper 1 Criterion C at the top HL band.",
      },
      body:
        "At **Higher Level (HL)**, Paper 1 demands **450–600 words** of sustained, nuanced, culturally informed Spanish. Under Theme 4, two of the highest-stakes HL text types are **la propuesta** (formal policy proposal) and **la carta formal** (formal institutional letter)—often addressing youth housing (*acceso a la vivienda y emancipación tardía*), **la brecha socioeconómica**, **la economía sumergida / informal** (which accounts for over 40–50% of employment in parts of Latin America), or educational equity.\n\n### Structural Inequality & Mobility Lexicon (C1)\n- **El ascensor social / la movilidad social:** the ability of young people to attain a higher socioeconomic level than their parents.\n- **La desigualdad estructural y la brecha socioeconómica:** entrenched disparities in school funding, digital connectivity (*brecha digital*), and family wealth (*capital cultural*).\n- **La meritocracia (mito frente a realidad):** debating whether exams truly reward effort when private tutoring and unpaid internships favour affluent families.\n- **La emancipación juvenil:** in Spain, high rents (*alquileres desorbitados*) and *precariedad laboral* push the average age of leaving home past 30.\n\n### Elevating Policy Critique: `Condicional compuesto` & `De haber + participio`\nTo evaluate institutional decisions at HL Band 10–12, combine **condicional compuesto** (`habría / habrían / se habría + participio`) with C1 condensed conditionals:\n- **Standard Type 3:** *Si el municipio hubiera regulado los alquileres turísticos, las familias jóvenes habrían podido permanecer en el centro.*\n- **C1 Condensed `De + infinitivo compuesto`:** ***De haber regulado** los alquileres turísticos, las familias jóvenes **habrían podido** permanecer en el centro.*\n- **Passive `se` policy evaluation:** *De haberse invertido en becas transporte, **se habría reducido** el abandono escolar rural.*\n\n### C1 Persuasive Cohesion & Counter-Argument Architecture\nNever write a one-sided rant in an HL *propuesta*. Anticipate budgetary or institutional objections and refute them diplomatically:\n1. **Concede politely:** *Si bien es cierto que la financiación inicial supondría un esfuerzo presupuestario...* / *No cabe duda de que...*\n2. **Pivot with authority:** *...no obstante, a medio plazo el ahorro derivado de la reducción del paro juvenil compensaría con creces dicha inversión.*\n3. **Draw an inevitable consequence (+ subjunctive!):** ***De ahí que resulte** imprescindible...* (*Hence it is essential that...* — **de ahí que** ALWAYS triggers the **subjunctive**!).\n4. **Use the conditional of courtesy (*condicional de cortesía*):** *convendría, sería oportuno, cabría plantearse, nos gustaría proponer*.",
      diagram: SVG_HL_PROPUESTA,
      diagramCaption:
        "Allocating your 450–600 HL words across five clearly signposted sections guarantees logical organization (Criterion B2) and authentic professional conventions (Criterion C).",
      workedExamples: [
        {
          title: "[HL] Rewriting a Type 3 Policy Critique with `De haber + participio` & `De ahí que`",
          problem:
            "Elevate this SL-level sentence into Band 11–12 HL prose for a formal *propuesta* on rural educational equity:\n*«Si el gobierno hubiera dado ordenadores gratis a los pueblos rurales en 2018, muchos estudiantes no habrían dejado los estudios. Por eso es necesario invertir ahora.»*",
          steps: [
            "Replace *Si el gobierno hubiera dado...* with the condensed C1 frame **De haber proporcionado...** (or impersonal passive **De haberse proporcionado...**).",
            "Upgrade *ordenadores gratis* → **equipos informáticos subvencionados**, *pueblos rurales* → **zonas rurales desfavorecidas**, and *dejar los estudios* → **el abandono escolar temprano**.",
            "Keep the **condicional compuesto** (*se habría frenado / evitado*) to evaluate the missed policy opportunity.",
            "Replace basic *Por eso es necesario* with **De ahí que resulte imprescindible + infinitivo** (triggering the present subjunctive *resulte*!).",
          ],
          answer:
            "*«De haberse proporcionado equipos informáticos subvencionados a las zonas rurales desfavorecidas en 2018, se habría frenado de forma notable el abandono escolar temprano. De ahí que resulte imprescindible aprobar de inmediato un plan de equidad digital.»*",
          yourTurn: {
            question:
              "Complete this HL sentence with the **condicional compuesto** (3rd person singular) of **resolver**: *«De haber dialogado con los sindicatos, el ministerio ______ (resolver) el conflicto laboral antes de la huelga.»*",
            answer: {
              type: "text",
              accept: ["habría resuelto"],
              display: "habría resuelto",
            },
            solution:
              "Form the *condicional compuesto* with *habría* (3rd person singular conditional of *haber*) + irregular past participle of *resolver* (**resuelto**): **habría resuelto**.",
          },
        },
        {
          title: "[HL] Weaving a Counter-Argument into a Formal `Carta formal`",
          problem:
            "In a 450–600w *carta formal* proposing subsidized public transport for students and young workers, acknowledge the cost objection and refute it in 2 diplomatic sentences.",
          steps: [
            "Open with a concessive frame (*Si bien es cierto que...*) using the conditional (*supondría un coste inicial*) to sound measured.",
            "Pivot with *sin embargo / no obstante* and link the policy to long-term social mobility and urban sustainability.",
            "Conclude with a polite formal call to action (*por consiguiente, instamos a... a que + subjuntivo*).",
          ],
          answer:
            "*Si bien es cierto que la gratuidad parcial del transporte juvenil supondría un desembolso inicial para las arcas municipales, no obstante, dicha inversión estimularía el acceso a la formación y reduciría las emisiones urbanas a medio plazo. Por consiguiente, instamos al consistorio a que valore la puesta en marcha de un programa piloto el próximo trimestre.*",
        },
      ],
      keyPoints: [
        "**De haber + participio** is a direct, elegant HL replacement for *Si hubiera + participio* (*De haber invertido más, habríamos evitado...*).",
        "**De ahí que** ALWAYS requires the **subjunctive** (*de ahí que sea / resulte / convenga*), never the indicative.",
        "Watch irregular past participles in *condicional compuesto*: **abierto, cubierto, dicho, escrito, hecho, muerto, puesto, resuelto, roto, vuelto**.",
        "A top HL *propuesta* (450–600w) must look like a real institutional document: **Encabezado (Destinatario / Asunto), Diagnóstico, Propuestas numeradas, Viabilidad / contraargumento, Cierre diplomático**.",
      ],
      whyItWorks:
        "HL examiners assess whether you can sustain **analytical authority** across 450–600 words without slipping into conversational filler. Pairing *condicional compuesto* evaluation with structured counter-arguments proves genuine C1 rhetorical control.",
      strategies: [
        "Budget your HL Paper 1 time: **10 min** prompt decoding + outline → **65 min** drafting (hitting ~520 words) → **15 min** proofreading sweep for *tildes*, gender/number agreement, *usted* consistency, and subjunctive triggers.",
        "Use **nominalisation** to elevate register: instead of *si educamos mejor a la gente*, write *la mejora de la calidad educativa*.",
        "Anchor HL policy debates in real Hispanophone models—such as **Uruguay's Plan Ceibal** (universal student laptops & connectivity) or **Medellín's urbanismo social** (libraries and cable cars connecting marginalised hillsides to jobs).",
      ],
      thinkDeeper:
        "Can education alone keep *el ascensor social* moving if housing costs and labour market informality remain unchanged? Consider how an HL *propuesta* can address two interconnected dimensions of inequality rather than proposing a single silver bullet.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "el tejido asociativo",
        back: "the network of community / civic associations that sustains local solidarity and participation",
      },
      {
        front: "la soledad no deseada",
        back: "unwanted loneliness (a key focus of intergenerational volunteering programmes in Spain)",
      },
      {
        front: "el paro juvenil / el desempleo juvenil",
        back: "youth unemployment (*paro* is standard in Spain; *desempleo* is pan-Hispanic)",
      },
      {
        front: "la Formación Profesional Dual (FP Dual)",
        back: "vocational training combining classroom instruction with paid placements inside companies",
      },
      {
        front: "la precariedad laboral",
        back: "job insecurity / precarious employment (short-term contracts, low wages, unstable hours)",
      },
      {
        front: "la fuga de cerebros",
        back: "brain drain — emigration of highly qualified young graduates seeking better opportunities abroad",
      },
      {
        front: "la conciliación laboral y familiar",
        back: "work-life balance (harmonizing professional responsibilities with family and personal life)",
      },
      {
        front: "el derecho a la desconexión digital",
        back: "the legal right of workers not to answer work emails or messages outside contracted hours",
      },
      {
        front: "solicitar un puesto (≠ aplicar)",
        back: "to apply for a job/position (never use the Anglicism *aplicar para*)",
      },
      {
        front: "la reinserción social",
        back: "social rehabilitation / reintegration of former offenders back into society",
      },
      {
        front: "la reincidencia",
        back: "reoffending / recidivism (returning to crime after a sentence)",
      },
      {
        front: "el estado de derecho",
        back: "the rule of law (where laws apply equally to citizens and institutions alike)",
      },
      {
        front: "los presupuestos participativos",
        back: "participatory budgets — where residents vote directly on how part of a municipal budget is spent",
      },
      {
        front: "el ascensor social",
        back: "the social elevator / upward social mobility across generations",
        level: "HL",
      },
      {
        front: "la economía sumergida / informal",
        back: "the informal / undeclared economy (work without legal contracts, social security, or tax protection)",
        level: "HL",
      },
      {
        front: "de ahí que + subjuntivo",
        back: "hence / which is why + subjunctive (*de ahí que resulte imprescindible reformar...*)",
        level: "HL",
      },
    ],
    mustKnow: [
      "Formal Spanish salutations ALWAYS end with a **colon (:)** (*Estimada Sra. López:*), never a comma.",
      "Switching from **tú** to **usted** changes verbs (2nd → 3rd person sing.), pronouns (*te → le/se*), possessives (*tu → su*), and imperatives (*ayuda → ayude*).",
      "In Spain, informal plural is **vosotros** and formal plural is **ustedes**; in Latin America, **ustedes** serves both formal and informal plural.",
      "**Type 1 `si`-clause** (likely): *Si + presente de indicativo → futuro / presente / imperativo*.",
      "**Type 2 `si`-clause** (hypothetical): *Si + imperfecto de subjuntivo (-ra/-se) → condicional simple (-ía)*.",
      "**Type 3 `si`-clause** (past counterfactual): *Si + pluscuamperfecto de subjuntivo (hubiera + participio) → condicional compuesto (habría + participio)*.",
      "**NEVER** put the present subjunctive or the conditional directly after **si**.",
      "Use **solicitar** (not *aplicar*), **darse cuenta de** (not *realizar*), and **trayectoria profesional** (not *carrera*, which means university degree).",
      "An IB **informe** demands an objective, impersonal voice (*se constata que, se recomienda*) and clear numbered subheadings.",
      "[HL] **De haber + participio** is a high-band condensed alternative to *Si hubiera + participio*, and **de ahí que** ALWAYS triggers the subjunctive.",
    ],
    misconceptions: [
      {
        wrong: "«Si tendría más presupuesto, crearía becas.» (Putting the conditional after *si*)",
        right: "«Si **tuviera / tuviese** más presupuesto, crearía becas.» (Type 2 *si*-clauses ALWAYS take the imperfect subjunctive after *si*, never the conditional.)",
      },
      {
        wrong: "«Si el ayuntamiento apruebe esta ley, mejorará el barrio.» (Putting the present subjunctive after *si*)",
        right: "«Si el ayuntamiento **aprueba** esta ley, mejorará el barrio.» (Type 1 *si*-clauses ALWAYS take the **present indicative** after *si*.)",
      },
      {
        wrong: "«Estimado Sr. Director: Te escribo para pedir tu ayuda con nuestro proyecto.» (Mixing *usted* salutation with *tú* grammar)",
        right: "«Estimado Sr. Director: **Le** escribo para solicitar **su** ayuda con nuestro proyecto.» (Keep pronouns, possessives, and verbs 100% in *usted* throughout.)",
      },
      {
        wrong: "«Quiero aplicar para unas prácticas cuando termine el colegio.» (Anglicisms *aplicar* and *colegio*)",
        right: "«Quiero **solicitar** unas prácticas cuando termine **el bachillerato / la universidad**.» (*Aplicar* means to apply cream/a rule; *colegio* is primary/secondary school.)",
      },
      {
        wrong: "«No me realicé de que la brecha salarial era tan grande.» (False friend *realizar*)",
        right: "«No **me di cuenta de** que la brecha salarial era tan grande.» (*Realizar* means to carry out/achieve; *darse cuenta de* means to realize.)",
      },
      {
        wrong: "«De ahí que es urgente reformar la ley.» (Using indicative after *de ahí que*)",
        right: "«De ahí que **sea** urgente reformar la ley.» (*De ahí que* ALWAYS requires the **subjunctive**.)",
        level: "HL",
      },
      {
        wrong: "«Si habrían invertido antes, la crisis habría terminado.» (Using *habrían* instead of *hubieran* in Type 3)",
        right: "«Si **hubieran / hubiesen** invertido antes, la crisis habría terminado.» (The *si*-clause takes **hubiera/hubiese**, while the main clause takes **habría**.)",
        level: "HL",
      },
    ],
    examMistakes: [
      "Choosing **informe** when a prompt asks you to persuade citizens or raise awareness publicly (where **folleto**, **artículo**, or **discurso** is the single best match).",
      "Using a comma instead of a colon after a formal Spanish salutation (*Estimado Sr. Alcalde,* instead of *Estimado Sr. Alcalde:*).",
      "Forgetting the accent mark on the *nosotros* imperfect subjunctive (*tuvi**é**ramos, invirti**é**ramos*) or on conditional endings (*mejorar**í**a, habr**í**an*).",
      "Dropping **usted** consistency in paragraph 3 of a formal letter after starting correctly in paragraph 1—always run a final pronoun/verb scan.",
      "Writing a one-sided rant in an HL *propuesta* without acknowledging feasibility/cost objections (*Si bien es cierto que..., no obstante...*).",
      "Copying a full 3-line sentence in Paper 2 Reading True/False justification instead of isolating the minimal exact clause that proves or disproves the claim.",
      "Confusing **ley** (a specific law) with **derecho** (legal right / field of law) and **justicia** (justice system).",
    ],
    mnemonics: [
      {
        topic: "Type 2 `Si`-Clauses",
        device: "SI-RA → Í-A",
        explanation:
          "After **Si**, put the **-ra** (or *-se*) imperfect subjunctive; on the other side, put the **-ía** conditional: *Si invirtie**ra**, bajar**ía**.* Never let *-ía* sit next to *Si*!",
      },
      {
        topic: "Formal `Usted` Proofreading Sweep",
        device: "S-P-V-I-C (Saludo, Pronombres, Verbos, Imperativos, Cierre)",
        explanation:
          "Audit every formal letter across five checkpoints: **S**aludo con dos puntos (:), **P**ronombres (*le/se/su*), **V**erbos en 3.ª persona, **I**mperativos de subjuntivo (*apoye*), **C**ierre formal (*Atentamente,*).",
      },
      {
        topic: "HL `Propuesta` 5-Part Blueprint",
        device: "E-D-M-V-C (Encabezado, Diagnóstico, Medidas, Viabilidad, Cierre)",
        explanation:
          "Structure every 450–600w HL *propuesta* cleanly: **E**ncabezado institucional → **D**iagnóstico del problema → **M**edidas numeradas → **V**iabilidad y contraargumento → **C**ierre diplomático.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "TECHO: Youth Volunteering Across 18 Latin American Countries",
        detail:
          "Founded in Chile in 1997 as *Un Techo para Chile*, TECHO mobilizes hundreds of thousands of university and secondary volunteers to work alongside families in informal settlements (*asentamientos populares*) building transitional housing and community infrastructure.",
        emoji: "🏠",
      },
      {
        title: "Spain's Expansion of Formación Profesional Dual",
        detail:
          "Following Spain's 2022–2024 Vocational Training Law, *FP Dual* has surged past one million enrolled students, offering paid company placements in renewable energy, cybersecurity, and healthcare with markedly lower unemployment than general degrees.",
        emoji: "🛠️",
      },
      {
        title: "Medellín's «Urbanismo Social» & Parques Biblioteca",
        detail:
          "Once plagued by extreme violence, Medellín transformed marginalised hillside neighbourhoods (*comunas*) by investing in cable-car transit (*Metrocable*), public library parks, and youth civic programmes—a benchmark example of prevention and social inclusion.",
        emoji: "🚡",
      },
      {
        title: "Uruguay's Plan Ceibal (Educational & Digital Equity)",
        detail:
          "Launched in 2007, Uruguay became the first country in the world to provide a free laptop/tablet and internet access to every public primary and secondary student, narrowing the rural-urban *brecha digital*.",
        emoji: "💻",
      },
      {
        title: "Participatory Budgets in Madrid & Porto Alegre–Inspired Cities",
        detail:
          "Municipalities across Spain and Latin America—including Madrid's *Decide Madrid* platform and cities in Peru and Chile—allow residents (including teenagers from age 16 in several schemes) to propose and vote directly on neighbourhood spending.",
        emoji: "🗳️",
      },
    ],
    videos: [
      {
        title: "Oraciones condicionales con SI en español (Tipos 1, 2 y 3 explicados)",
        channel: "Español con Juan / ProfeDeELE",
        url: "https://www.youtube.com/results?search_query=oraciones+condicionales+si+tipos+1+2+3+espanol+B2",
      },
      {
        title: "Tú vs Usted y cómo escribir una carta formal en español",
        channel: "Butterfly Spanish / Tu escuela de español",
        url: "https://www.youtube.com/results?search_query=como+escribir+una+carta+formal+usted+espanol+IB",
      },
      {
        title: "El paro juvenil y la Formación Profesional Dual en España",
        channel: "RTVE Noticias / DW Español",
        url: "https://www.youtube.com/results?search_query=paro+juvenil+formacion+profesional+dual+espana+reportaje",
      },
      {
        title: "De haber + participio y condicional compuesto (Nivel C1)",
        channel: "Español Avanzado C1",
        url: "https://www.youtube.com/results?search_query=de+haber+participio+condicional+compuesto+espanol+C1",
      },
    ],
    formulas: [
      {
        name: "Formal Salutation & Opening (`Carta formal`)",
        formula: "Estimado/a Sr./Sra. [Apellido]: Me dirijo a usted con el fin de + infinitivo...",
        note: "Always use a colon (:) after the Spanish greeting and 3rd-person singular verbs.",
      },
      {
        name: "Formal Polite Request (`Condicional de cortesía`)",
        formula: "Le agradecería enormemente que + imperfecto de subjuntivo...",
        note: "Much more diplomatic than «Quiero que...» or a bare imperative.",
      },
      {
        name: "Formal `Usted` Imperative (Affirmative & Negative)",
        formula: "(No) + presente de subjuntivo (3.ª persona singular)",
        note: "apoye, lea, escriba, haga, ponga, venga, sea; pronouns attach to affirmative (*díganos*) and precede negative (*no nos olvide*).",
      },
      {
        name: "Type 1 `Si`-Clause (Real / Likely Reform)",
        formula: "Si + presente de indicativo, futuro simple / presente / imperativo",
        note: "Example: Si ampliamos las becas, aumentará la igualdad de oportunidades.",
      },
      {
        name: "Type 2 `Si`-Clause (Hypothetical Policy)",
        formula: "Si + imperfecto de subjuntivo (-ra / -se), condicional simple (-ía)",
        note: "Example: Si se redujera la jornada laboral, mejoraría la conciliación.",
      },
      {
        name: "Type 3 `Si`-Clause (Past Counterfactual)",
        formula: "Si + hubiera/hubiese + participio, habría + participio",
        note: "Example: Si hubieran regulado el teletrabajo antes, habrían evitado abusos.",
      },
      {
        name: "Impersonal `Informe` Framing",
        formula: "Se constata que... / Cabe destacar que... / Se recomienda + infinitivo",
        note: "Creates the objective, institutional voice required by IB Criterion C for reports.",
      },
      {
        name: "C1 Condensed Past Conditional (`De haber + participio`)",
        formula: "De haber(se) + participio, habría(n) / se habría + participio",
        note: "Replaces «Si hubiera(n)...» cleanly in HL propuestas and cartas formales.",
        level: "HL",
      },
      {
        name: "HL Counter-Argument & Refutation Frame",
        formula: "Si bien es cierto que + indicativo, no obstante + argumento superior",
        note: "Shows balanced critical evaluation before concluding a policy recommendation.",
        level: "HL",
      },
      {
        name: "C1 Consequence Trigger (`De ahí que`)",
        formula: "De ahí que + presente / imperfecto de subjuntivo",
        note: "Example: De ahí que resulte imprescindible fomentar el tejido asociativo.",
        level: "HL",
      },
    ],
  },
};
