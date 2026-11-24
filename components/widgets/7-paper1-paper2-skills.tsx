"use client";
// Interactive explorables for Topic 7: Paper 1 (Writing) & Paper 2 (Reading & Listening).
// Pure React 19 hooks (no setState inside useEffect), zero 390px horizontal overflow.
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// SHARED WEB SPEECH HOOK (React 19 safe via useSyncExternalStore)
// =============================================================================

const noopSubscribe = () => () => {};

function useSpanishTTS() {
  const supported = useSyncExternalStore(
    noopSubscribe,
    () => typeof window !== "undefined" && "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function",
    () => false,
  );
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    if (!supported) return;
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setActiveKey(null);
  }, [supported]);

  const speak = useCallback(
    (text: string, rate: number, langPref: string, key: string) => {
      if (!supported) return;
      const synth = window.speechSynthesis;
      synth.cancel();
      const voices = synth.getVoices();
      const prefLower = langPref.toLowerCase();
      const voice =
        voices.find((v) => v.lang?.toLowerCase() === prefLower) ??
        voices.find((v) => v.lang?.toLowerCase() === "es-es") ??
        voices.find((v) => v.lang?.toLowerCase().startsWith("es"));
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voice?.lang ?? langPref;
      if (voice) utterance.voice = voice;
      utterance.rate = rate;
      utterance.onend = () => setActiveKey((cur) => (cur === key ? null : cur));
      utterance.onerror = () => setActiveKey((cur) => (cur === key ? null : cur));
      setActiveKey(key);
      synth.speak(utterance);
    },
    [supported],
  );

  return { supported, activeKey, speak, stop };
}

// =============================================================================
// WIDGET 1: PAPER 1 PROMPT DECODER & LIVE WORD-COUNT ZONE GAUGE
// =============================================================================

type P1Level = "SL" | "HL";

interface TextTypeOption {
  id: string;
  label: string;
  tier: "optimal" | "acceptable" | "inappropriate";
  band: string;
  verdict: string;
}

interface Paper1Scenario {
  id: string;
  shortTitle: string;
  theme: string;
  promptEs: string;
  tapr: {
    audience: string;
    purpose: string;
    register: string;
  };
  options: TextTypeOption[];
  checklist: string[];
  sampleSL: string;
  sampleHL: string;
}

const P1_SCENARIOS: Paper1Scenario[] = [
  {
    id: "comedor-plastico",
    shortTitle: "Comedor sin plástico",
    theme: "Compartir el planeta",
    promptEs:
      "En el comedor de tu instituto se generan cada semana cientos de envases de plástico de un solo uso. Escribe al consejo directivo para exponer el impacto ambiental y presentar un plan concreto y viable de transición hacia materiales reutilizables.",
    tapr: {
      audience: "El consejo directivo del instituto (decision-makers)",
      purpose: "Expose environmental impact + pitch a concrete, feasible action plan",
      register: "Formal & objective (usted / impersonal se)",
    },
    options: [
      {
        id: "propuesta",
        label: "Una propuesta formal",
        tier: "optimal",
        band: "5–6 / 6",
        verdict:
          "Most Appropriate! A structured proposal (title, objective, phased action plan, expected impact, formal register) directly fits pitching a policy change to school leadership.",
      },
      {
        id: "articulo",
        label: "Un artículo escolar",
        tier: "acceptable",
        band: "3–4 / 6",
        verdict:
          "Acceptable only. An article raises awareness among general readers, yet lacks the direct institutional decision-making pitch that the school board expects.",
      },
      {
        id: "diario",
        label: "Un diario personal",
        tier: "inappropriate",
        band: "1–2 / 6",
        verdict:
          "Inappropriate! A private personal diary never reaches or persuades a governing school board — caps Criterion C immediately.",
      },
    ],
    checklist: [
      "Clear formal title & institutional recipient header (Al Consejo Directivo)",
      "Consistent formal register (usted / impersonal se — zero tú slips!)",
      "Structured subheadings (Objetivo · Contexto · Plan de acción · Impacto)",
      "At least 1 WEIRDO subjunctive (es imprescindible que se reduzca...)",
      "Concessive counter-argument & closing call for approval (Si bien es cierto que...)",
    ],
    sampleSL:
      "Propuesta: Hacia un comedor escolar libre de plásticos\n\nAl Consejo Directivo del Instituto:\n\nObjetivo\nLa presente propuesta tiene como finalidad reducir drásticamente los residuos plásticos de un solo uso generados cada semana en nuestro comedor escolar mediante un sistema práctico, higiénico y duradero de envases reutilizables.\n\nContexto ambiental\nActualmente, nuestro centro desecha más de seiscientos vasos, cubiertos y bandejas desechables cada cinco días lectivos. Dado que la mayoría de estos plásticos termina contaminada con restos orgánicos y acaba en vertederos locales, resulta imprescindible que nuestra comunidad educativa dé un paso adelante y actúe con coherencia frente a los valores de sostenibilidad que estudiamos en clase.\n\nMedidas propuestas\nEn primer lugar, se recomienda sustituir los vasos y cubiertos desechables por jarras de vidrio reciclado, vasos resistentes y cubertería metálica en todas las mesas del comedor. En segundo lugar, conviene implantar un sistema ágil de devolución supervisado por voluntarios estudiantiles de Bachillerato para garantizar que todo el material se recoja, se lave y se reutilice a diario sin retrasar los turnos de almuerzo. Asimismo, proponemos celebrar una breve campaña visual y participativa al inicio del trimestre para concienciar tanto al alumnado como al profesorado sobre la correcta separación de los residuos orgánicos.\n\nEvaluación de costes y beneficios\nSi bien es cierto que la compra inicial del menaje reutilizable exige una inversión moderada, no obstante el colegio recuperará íntegramente ese gasto en menos de un curso académico al dejar de adquirir productos desechables cada mes. Además, existen ayudas municipales destinadas precisamente a centros escolares que apuestan por la economía circular. De este modo, no solo disminuiría nuestra huella ecológica de forma visible, sino que también fomentaríamos hábitos responsables que los jóvenes trasladarían a sus hogares.\n\nConclusión\nEn definitiva, se trata de una reforma sencilla, económica a medio plazo y sumamente educativa. Quedo a su entera disposición para presentar un presupuesto detallado y poner en marcha una fase piloto durante el próximo mes. Agradeciendo de antemano su tiempo y consideración, les saluda atentamente,\n\nRepresentante del Comité Ecológico Estudiantil.",
    sampleHL:
      "Propuesta formal: Transición hacia un comedor escolar cero residuos\n\nAl Consejo Directivo y al Equipo de Sostenibilidad del Instituto:\n\n1. Objetivo de la propuesta\nLa presente iniciativa tiene por objeto eliminar progresivamente todos los envases, vasos y cubiertos de plástico de un solo uso en el comedor escolar durante el próximo curso académico, sustituyéndolos por un modelo circular de menaje reutilizable que resulte económicamente viable, logísticamente ordenado y pedagógicamente ejemplar para toda la comunidad educativa.\n\n2. Diagnóstico de la situación actual\nSegún un recuento realizado por el comité ecológico estudiantil durante dos semanas de noviembre, el centro desecha aproximadamente setecientos cincuenta artículos plásticos semanales entre vasos, cubiertos y recipientes de fruta cortada. Puesto que la inmensa mayoría de estos polímeros queda impregnada de restos de comida y no puede reciclarse eficazmente, el colegio contribuye de manera involuntaria a un problema medioambiental sumamente complejo que afecta tanto a los ecosistemas locales como al clima global; de ahí que sea apremiante que la institución predique con el ejemplo y traduzca sus principios de ciudadanía responsable en medidas cotidianas tangibles.\n\n3. Plan de acción por fases\nPara asegurar una transición gradual que no altere el funcionamiento habitual de la cocina ni genere aglomeraciones en los descansos, se recomienda estructurar el proyecto en tres etapas claramente evaluables:\n- Fase 1 (meses 1–2): adquisición de bandejas de acero inoxidable, jarras compartidas y vasos reutilizables para el alumnado de secundaria, acompañados de carteles claros sobre la separación de residuos orgánicos y el ahorro de agua.\n- Fase 2 (meses 3–4): creación de brigadas voluntarias de estudiantes de Bachillerato, cuyos turnos semanales agilizarán la recogida en las mesas, supervisarán las estaciones de compostaje y reducirán cualquier carga adicional sobre el personal de cocina.\n- Fase 3 (mes 5 en adelante): elaboración de un informe trimestral con datos verificables sobre el ahorro económico obtenido y ampliación progresiva del sistema a la cafetería, las excursiones escolares y los encuentros deportivos del centro.\n\n4. Respuesta a posibles objeciones presupuestarias y logísticas\nSi bien es cierto que varios sectores podrían advertir sobre el desembolso inicial que supone renovar el menaje y reforzar el lavado diario con mayor consumo eléctrico y de agua, no obstante los estudios comparativos realizados en otros institutos públicos españoles y latinoamericanos demuestran que la inversión inicial se amortiza en menos de nueve meses gracias al fin de las compras mensuales de plástico desechable. Si el Consejo aprobara una fase piloto en un único turno de almuerzo durante seis semanas, dispondríamos de cifras exactas para ajustar el presupuesto y perfeccionar la logística antes de generalizar el sistema. Asimismo, podrían solicitarse subvenciones municipales verdes destinadas específicamente a proyectos escolares de economía circular, lo cual aliviaría por completo el coste de arranque.\n\n5. Conclusión y solicitud formal\nEn definitiva, adoptar esta medida no representa únicamente un recorte medible y necesario de residuos plásticos, sino también una oportunidad formativa insustituible para que los adolescentes incorporen hábitos de consumo consciente más allá de las aulas. Quedo a su entera disposición para presentar un desglose financiero completo en la próxima reunión ordinaria del Consejo Directivo y agradezco sinceramente su atención y compromiso ambiental.\n\nAtentamente,\nDelegación Estudiantil de Sostenibilidad.",
  },
  {
    id: "blog-intercambio",
    shortTitle: "Blog de intercambio",
    theme: "Experiencias",
    promptEs:
      "Has regresado de un intercambio cultural de tres semanas con una familia anfitriona en Oaxaca (México) y deseas compartir tus anécdotas, choques culturales y consejos prácticos en internet con otros adolescentes que pronto viajarán al extranjero.",
    tapr: {
      audience: "Teenage peers online preparing for cultural exchanges",
      purpose: "Share vivid personal anecdotes, reflections, and practical tips interactively",
      register: "Engaging informal / semi-formal (tú / vosotros / ustedes)",
    },
    options: [
      {
        id: "blog",
        label: "Una entrada de blog",
        tier: "optimal",
        band: "5–6 / 6",
        verdict:
          "Most Appropriate! A blog blends lively personal storytelling, practical youth tips, direct questions to online readers, and an invitation to comment.",
      },
      {
        id: "articulo",
        label: "Un artículo de revista",
        tier: "acceptable",
        band: "3–4 / 6",
        verdict:
          "Acceptable, yet slightly more detached than a personal online blog — misses interactive digital conventions like reader comment prompts.",
      },
      {
        id: "carta-formal",
        label: "Una carta formal",
        tier: "inappropriate",
        band: "1–2 / 6",
        verdict:
          "Inappropriate! Formal official correspondence clashes completely with sharing personal travel anecdotes online with teenagers.",
      },
    ],
    checklist: [
      "Catchy digital headline, date stamp & author handle",
      "Engaging direct address to peers (tú / vosotros / ustedes)",
      "Vivid Hispanic cultural specifics (gastronomía, sobremesa, léxico)",
      "Practical advice using subjunctive/imperative (os recomiendo que probéis...)",
      "Interactive sign-off inviting reader comments & hashtags",
    ],
    sampleSL:
      "¡Tres semanas en Oaxaca que me cambiaron la mirada! 🇲🇽\nPublicado el 18 de octubre · Por Sofía R.\n\n¿Alguna vez habéis sentido ese cosquilleo mezcla de nervios y emoción justo antes de llamar a la puerta de una familia que todavía no conocéis? Así empezó mi intercambio cultural de tres semanas en Oaxaca hace apenas un mes y, sinceramente, todavía echo muchísimo de menos sus mercados coloridos, sus atardeceres dorados y sus largas sobremesas.\n\nEl primer gran choque cultural llegó nada más sentarnos a comer. Acostumbrada en casa a cenar con prisas entre semana mientras reviso los deberes, me sorprendió descubrir que la comida principal del mediodía se alargaba más de dos horas entre risas, tortillas de maíz recién hechas y debates apasionados sobre cine, política y música tradicional. Además, en el instituto oaxaqueño los horarios y el trato cercano con el profesorado eran bastante distintos a los de mi colegio.\n\nEn el plano del idioma también viví anécdotas inolvidables. Al principio me daba un poco de vergüenza equivocarme o no entender palabras mexicanas cotidianas como «camión» en vez de autobús, «qué padre» o «ahorita». Sin embargo, mi familia anfitriona me animó desde el primer día a lanzarme a hablar sin miedo a cometer errores, y descubrí que reírse de los pequeños malentendidos crea amistades muchísimo más rápido que cualquier diccionario.\n\nSi pronto vais a vivir una experiencia parecida, os recomiendo que mantengáis la mente completamente abierta y que preguntéis con curiosidad cuando no entendáis una costumbre local. También conviene llevar un pequeño cuaderno para apuntar expresiones nuevas cada noche y traer un detalle típico de vuestro país al llegar: ¡rompe el hielo al instante!\n\nMás allá de mejorar vuestra fluidez en español, convivir en otra cultura os enseña a cuestionar vuestras propias rutinas y a valorar la hospitalidad cotidiana. Aunque los dos primeros días puedan parecer abrumadores, merece totalmente la pena atreverse.\n\n¿Y vosotros habéis participado alguna vez en un intercambio o tenéis algún destino soñado? ¡Contadme vuestras anécdotas o dudas abajo en los comentarios!\n#IntercambioCultural #Oaxaca #EspañolSinMiedo",
    sampleHL:
      "Más allá de las postales: tres semanas de inmersión real en Oaxaca 🇲🇽\nPublicado el 18 de octubre · Por Sofía R. · Tiempo de lectura: 3 min\n\n¿Alguna vez os habéis preguntado qué ocurre realmente cuando dejas atrás el papel cómodo de turista con cámara y pasas a formar parte de la rutina cotidiana de una familia al otro lado del Atlántico? Hace apenas una semana regresé de un intercambio escolar de tres semanas en Oaxaca y, a decir verdad, sigo asimilando hasta qué punto la convivencia auténtica transforma nuestra manera de entender una lengua, una cultura y hasta nuestra propia identidad.\n\nEl primer gran choque cultural —tan inesperado como enriquecedor— fue descubrir el verdadero significado de la sobremesa. Acostumbrada en mi país a comidas aceleradas entre exámenes, entrenamientos y notificaciones del móvil, me maravilló comprobar cómo la mesa oaxaqueña funciona como el auténtico corazón social del hogar. Allí probé por primera vez el mole negro artesanal, aprendí a preparar tlayudas con la abuela de mi compañera y comprendí que sentarse a comer juntos no constituye un mero trámite biológico, sino un espacio sagrado para escuchar con calma a tres generaciones distintas.\n\nEn el plano lingüístico, también experimenté en primera persona la extraordinaria riqueza de la variación del español. Aunque llevaba varios años estudiando la variedad peninsular en clase, durante los primeros días me descolocaban expresiones mexicanas cotidianas como «tomar el camión», «qué padre», «platicar» o ese misterioso «ahorita» cuyo sentido temporal depende por completo del tono de voz y del contexto. Al principio dudaba antes de intervenir por temor a sonar torpe o artificial; sin embargo, en cuanto dejé de traducir mentalmente palabra por palabra y acepté que equivocarse forma parte inevitable del proceso, la conversación comenzó a fluir con una naturalidad que jamás habría alcanzado estudiando solo desde un libro de texto.\n\nSi bien es cierto que las primeras jornadas pueden resultar emocionalmente agotadoras debido a la nostalgia, el cansancio de escuchar un acento distinto a velocidad real y las diferencias de horarios escolares, no obstante ese pequeño vértigo inicial es precisamente el motor que dispara el crecimiento personal. De ahí que os aconseje tres estrategias infalibles si pronto emprendéis un viaje de intercambio: en primer lugar, aceptad cada invitación familiar o vecinal aunque sintáis cansancio, puesto que los recuerdos más valiosos surgen fuera del itinerario previsto; en segundo lugar, preguntad con curiosidad genuina sobre las tradiciones locales en lugar de compararlas constantemente con lo que consideráis «normal» en casa; y, por último, dedicad cinco minutos cada noche a anotar cinco modismos nuevos que hayáis escuchado en la calle o en el mercado.\n\nSi hubiera elegido refugiarme únicamente con otros estudiantes extranjeros para sentirme cómoda, habría desperdiciado la mayor lección del viaje: comprobar que la empatía y el humor derriban cualquier barrera cultural y construyen lazos con personas a quienes ya siento como una segunda familia.\n\n¿Alguien más está preparando su intercambio para este año o tiene dudas sobre cómo superar la vergüenza inicial al hablar español con nativos? ¡Dejadme todas vuestras preguntas o experiencias abajo en los comentarios y os respondo esta misma tarde!\n#IntercambioOaxaca #ExperienciasIB #MundoHispanohablante",
  },
  {
    id: "carta-director-ia",
    shortTitle: "Carta al director (IA)",
    theme: "Ingenio humano",
    promptEs:
      "Un diario nacional publicó ayer una columna afirmando que los adolescentes usan la inteligencia artificial únicamente para hacer trampas y que debería prohibirse por completo en los colegios. Escribe una respuesta pública al periódico defendiendo un uso crítico y ético, y solicitando la publicación de tu punto de vista.",
    tapr: {
      audience: "Newspaper editor & national readership (Educated public)",
      purpose: "Rebut yesterday's published article & argue for ethical critical AI literacy",
      register: "Formal / persuasive (usted to editor: Estimado Sr. Director:)",
    },
    options: [
      {
        id: "carta-director",
        label: "Una carta al director",
        tier: "optimal",
        band: "5–6 / 6",
        verdict:
          "Most Appropriate! Replying publicly to a published newspaper column and requesting publication in the opinion pages is the exact function of una carta al director.",
      },
      {
        id: "editorial",
        label: "Un editorial",
        tier: "acceptable",
        band: "3–4 / 6",
        verdict:
          "Acceptable in persuasive register, yet an editorial represents the newspaper's own management board rather than a student reader replying to yesterday's piece.",
      },
      {
        id: "folleto",
        label: "Un folleto informativo",
        tier: "inappropriate",
        band: "1–2 / 6",
        verdict:
          "Inappropriate! A leaflet gives practical instructions/promotions rather than publishing a direct journalistic rebuttal in a national daily.",
      },
    ],
    checklist: [
      "City, date & formal press salutation (Estimado Sr. Director:)",
      "Explicit reference to yesterday's published column in line 1",
      "Consistent formal usted register & respectful rebuttal tone",
      "Balanced concession + counter-argument (Si bien es cierto que..., no obstante...)",
      "Formal press sign-off with name/student role & city",
    ],
    sampleSL:
      "Barcelona, 12 de noviembre de 2026\n\nEstimado Sr. Director:\n\nLe escribo en respuesta a la columna publicada ayer en su diario, en la que se afirmaba que los adolescentes utilizamos la inteligencia artificial únicamente para hacer trampas y se defendía su prohibición absoluta en todos los colegios. Como estudiante de Bachillerato, considero profundamente injusto reducir a toda mi generación a la caricatura de quienes buscan atajos fáciles para evitar el esfuerzo intelectual.\n\nSi bien es cierto que el plagio automatizado constituye un riesgo real que exige normas claras y supervisión docente, no obstante vetar por completo esta tecnología en las aulas no resolverá el problema, sino que dejará a los jóvenes indefensos en cuanto salgan del instituto. En la práctica cotidiana, numerosos compañeros empleamos estas herramientas de manera ética y responsable: nos sirven para recibir retroalimentación inmediata sobre nuestra gramática en lenguas extranjeras, repasar problemas complejos de ciencias o comparar distintos puntos de vista antes de redactar nuestras propias conclusiones.\n\nAdemás, prohibir su aprendizaje en los centros públicos corre el peligro de ampliar la desigualdad educativa, dado que el alumnado con mayores recursos en casa seguirá aprendiendo a utilizarla con orientación mientras otros quedarán atrás. En lugar de imponer vetos irrealistas, resulta imprescindible que los institutos integren programas obligatorios de alfabetización crítica: enseñar cómo verificar fuentes, detectar sesgos algorítmicos, proteger los datos personales y citar cualquier apoyo digital con total transparencia.\n\nSolo mediante la educación crítica —y nunca desde el miedo— formaremos ciudadanos honestos y preparados para un mundo universitario y laboral en el que estas herramientas ya forman parte del día a día.\n\nAgradeciendo de antemano la publicación de estas líneas para enriquecer el debate público con la perspectiva directa del alumnado, le saluda atentamente,\n\nMateo Herrera\nEstudiante de secundaria · Barcelona.",
    sampleHL:
      "Barcelona, 12 de noviembre de 2026\n\nEstimado Sr. Director:\n\nMe dirijo respetuosamente a usted con el ruego de que considere la publicación de esta réplica a la columna de opinión aparecida ayer en su periódico, en la que se abogaba por vetar de manera absoluta la inteligencia artificial en los institutos bajo la premisa de que el alumnado únicamente recurre a ella para cometer fraude académico. Semejante generalización simplifica un fenómeno tecnológico sumamente complejo, ignora el esfuerzo diario de miles de jóvenes honestos y desvía la atención del verdadero debate pedagógico que nuestra sociedad necesita afrontar con madurez.\n\nSi bien es cierto que la generación instantánea de redacciones plantea desafíos inéditos para los sistemas de evaluación tradicionales y puede mermar el desarrollo del pensamiento autónomo cuando se emplea sin criterio ni supervisión, no obstante la prohibición total resulta tan ineficaz como contraproducente. Pretender aislar artificialmente las aulas de una tecnología ya omnipresente en universidades, hospitales, tribunales y redacciones periodísticas equivaldría a renunciar a nuestra responsabilidad educativa; de ahí que sea infinitamente más sensato y urgente enseñar a utilizarla con rigor crítico y transparencia ética.\n\nEn nuestra experiencia cotidiana como estudiantes de Bachillerato, comprobamos que estas aplicaciones ofrecen un enorme potencial formativo cuando se enmarcan en normas claras. Muchos compañeros las utilizamos para simular entrevistas orales en lenguas extranjeras, contrastar argumentos antes de un debate, detectar errores recurrentes de concordancia en nuestros propios borradores o aclarar conceptos científicos difíciles fuera del horario lectivo. Por el contrario, expulsar esta realidad de los centros públicos corre el grave riesgo de ahondar la brecha socioeconómica y digital, puesto que quienes dispongan de dispositivos privados y asesoramiento familiar en casa aprenderán a dominar la herramienta con ventaja, mientras que el alumnado más vulnerable quedará rezagado.\n\nSi las autoridades educativas y el profesorado rediseñaran progresivamente parte de las tareas para priorizar el análisis oral presencial, la defensa espontánea de ideas en clase, la investigación con fuentes locales y la verificación crítica de bulos —cuyas competencias humanas ningún algoritmo logra suplantar—, la tentación del plagio perdería sentido por sí misma. Además, integrar a los propios estudiantes en la redacción de códigos escolares de integridad digital fomentaría la corresponsabilidad mucho más eficazmente que cualquier medida meramente punitiva.\n\nEn definitiva, el verdadero peligro para la enseñanza contemporánea no reside en la existencia de la inteligencia artificial, sino en la falta de pedagogía crítica para convivir con ella de forma ética, creativa y equitativa. Escuchar la voz de quienes crecemos en este entorno resulta indispensable para diseñar políticas educativas realistas.\n\nAgradeciendo sinceramente su atención y el espacio que su diario siempre concede a la pluralidad de perspectivas en asuntos de interés ciudadano, queda a su entera disposición,\n\nMateo Herrera\nEstudiante de Bachillerato · Barcelona.",
  },
  {
    id: "resena-documental",
    shortTitle: "Reseña cultural",
    theme: "Identidades",
    promptEs:
      "Acabas de asistir al estreno de un documental peruano sobre la revitalización de la lengua quechua entre músicos jóvenes de los Andes. Escribe para la revista cultural de tu colegio valorando sus aciertos, algún aspecto mejorable y si aconsejas verlo.",
    tapr: {
      audience: "Peers and teachers reading the school cultural magazine",
      purpose: "Give a balanced critical appraisal (strengths + limitation) & verdict",
      register: "Engaging semi-formal critical voice (nosotros / tú / impersonal)",
    },
    options: [
      {
        id: "resena",
        label: "Una reseña cultural",
        tier: "optimal",
        band: "5–6 / 6",
        verdict:
          "Most Appropriate! Appraising artistic strengths, noting a weakness, and recommending a film to magazine readers is the exact blueprint of una reseña.",
      },
      {
        id: "blog",
        label: "Un blog personal",
        tier: "acceptable",
        band: "3–4 / 6",
        verdict:
          "Acceptable for personal reactions, yet less closely aligned with a formal school cultural magazine review than una reseña.",
      },
      {
        id: "informe",
        label: "Un informe técnico",
        tier: "inappropriate",
        band: "1–2 / 6",
        verdict:
          "Inappropriate! A bureaucratic report clashes completely with writing an engaging film appraisal for a school cultural magazine.",
      },
    ],
    checklist: [
      "Eye-catching review headline + brief film details (título, contexto)",
      "Concise spoiler-free synopsis of the documentary's focus",
      "Balanced critique: explicit strengths + 1 nuanced limitation",
      "Rich artistic & cultural lexis (banda sonora, fotografía, identidad)",
      "Clear closing recommendation & rating for school readers",
    ],
    sampleSL:
      "«Voces de los Andes»: cuando el rap y el quechua conquistan a una nueva generación\nReseña cultural · Revista del Instituto · Por Clara Méndez · Valoración: 4,5 / 5\n\n¿Puede un idioma milenario sonar más moderno y vibrante que nunca sobre una base de hip-hop? Esa es la fascinante pregunta que responde «Voces de los Andes», el nuevo documental peruano estrenado esta semana en nuestra ciudad y centrado en cinco jóvenes músicos que fusionan el quechua con géneros urbanos contemporáneos como el rap, el pop alternativo y la electrónica.\n\nSin revelar demasiado de su emotivo final, la película acompaña durante doce meses a estos artistas entre pequeños estudios caseros de Cusco y escenarios juveniles de Lima. El mayor acierto del largometraje reside en su fotografía luminosa y en la autenticidad cercana de sus protagonistas. Lejos de presentar la tradición indígena como una pieza de museo inmóvil o nostálgica, la directora muestra ensayos llenos de humor, conversaciones sinceras con abuelos y conciertos vibrantes que demuestran que preservar la lengua materna también significa reinventarla con orgullo. Asimismo, la banda sonora resulta verdaderamente conmovedora y consigue atrapar desde el primer minuto incluso a espectadores que nunca habían escuchado una sola palabra en quechua.\n\nComo único aspecto mejorable, la parte central del documental acumula varias entrevistas académicas algo extensas que frenan brevemente el ritmo narrativo y restan tiempo a la vida cotidiana de los músicos. Sin embargo, este pequeño desequilibrio no empaña la fuerza artística ni la honestidad emocional del desenlace.\n\nEn definitiva, recomiendo encarecidamente que todos los estudiantes y docentes de nuestro colegio vean «Voces de los Andes» antes de que salga de cartelera: no solo entretiene gracias a su energía musical, sino que invita a reflexionar profundamente sobre la identidad juvenil y la riqueza lingüística del mundo hispanohablante.",
    sampleHL:
      "«Voces de los Andes»: el pulso contemporáneo de una lengua milenaria\nReseña cinematográfica · Revista Cultural del Instituto · Por Clara Méndez · ★★★★½ (4,5 / 5)\n\nSuele asumirse con excesiva ligereza que las lenguas originarias pertenecen exclusivamente al pasado rural y están condenadas a desaparecer ante la presión implacable de la globalización digital. «Voces de los Andes», el último documental de producción peruana recién estrenado en el ciclo de cine iberoamericano de nuestra ciudad, desmonta semejante prejuicio desde su magistral primer plano secuencia, demostrando que el quechua vibra hoy con una fuerza creativa arrolladora en los auriculares de miles de adolescentes latinoamericanos.\n\nA lo largo de noventa minutos ágiles y visualmente deslumbrantes, el largometraje sigue durante un año completo a un colectivo de cantantes, productoras musicales y poetas urbanos de Cusco, Ayacucho y Lima que entrelazan instrumentos andinos tradicionales con el hip-hop, el pop alternativo y la electrónica experimental. Sin caer en spoilers ni en explicaciones didácticas pesadas, la película teje un retrato íntimo de cómo estos jóvenes reclaman su lugar en la escena musical contemporánea sin renunciar a sus raíces.\n\nLa principal virtud cinematográfica de la obra radica en su admirable equilibrio entre rigor cultural y cercanía humana. La cámara evita en todo momento cualquier mirada exótica o paternalista y cede por completo la palabra a protagonistas complejos, quienes narran con igual franqueza tanto la discriminación escolar que sufrieron sus abuelos por hablar quechua como el orgullo renovado con el que hoy escriben versos bilingües y los difunden en redes sociales. Asimismo, el diseño sonoro —cuyas transiciones entre el bullicio de los mercados andinos, las conversaciones familiares y las mezclas en estudios improvisados resultan memorables— convierte la propia música en auténtico hilo narrativo. La fotografía naturalista, bañada por la luz cambiante de la cordillera, refuerza esa sensación de vitalidad presente frente a los tópicos nostálgicos.\n\nSi bien es cierto que el metraje decae ligeramente en su tramo intermedio debido a tres intervenciones académicas excesivamente extensas que interrumpen de manera brusca la espontaneidad del relato, no obstante la directora recupera enseguida el pulso emotivo en un concierto comunitario final cargado de energía colectiva. Tampoco habría estado de más profundizar algo más en los obstáculos económicos reales que afrontan los sellos independientes para distribuir música en lenguas minoritarias fuera del circuito reducido de los festivales internacionales.\n\nPese a estos pequeños matices de ritmo, «Voces de los Andes» sobresale como una obra tan luminosa como necesaria dentro del panorama documental hispano actual. En una época en que la homogeneización algorítmica amenaza la diversidad cultural y lingüística del planeta, esta película recuerda con inteligencia y emoción que tradición y modernidad jamás tienen por qué excluirse; de ahí que resulte una recomendación imprescindible no solo para los apasionados del cine y la música urbana, sino para cualquier estudiante interesado en la identidad plural y viva del mundo hispanohablante.",
  },
];

const CONNECTOR_REGEX =
  /\b(sin embargo|no obstante|si bien es cierto|dado que|puesto que|de ahí que|por consiguiente|asimismo|en definitiva|a pesar de|cuyo|cuya|cuyos|cuyas|es imprescindible que|resulta imprescindible)\b/gi;
const SPANISH_ACCENT_REGEX = /[áéíóúñü¿¡]/i;

function countWords(text: string): number {
  const cleaned = text.trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

function Paper1DecoderWidget() {
  const [level, setLevel] = useState<P1Level>("SL");
  const [scenarioId, setScenarioId] = useState<string>(P1_SCENARIOS[0].id);
  const [pickedType, setPickedType] = useState<string | null>(null);
  const [showTapr, setShowTapr] = useState(false);
  const [draft, setDraft] = useState("");
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  const scenario = useMemo(
    () => P1_SCENARIOS.find((s) => s.id === scenarioId) ?? P1_SCENARIOS[0],
    [scenarioId],
  );

  const selectedOption = useMemo(
    () => scenario.options.find((o) => o.id === pickedType) ?? null,
    [scenario, pickedType],
  );

  const handleSelectScenario = (id: string) => {
    setScenarioId(id);
    setPickedType(null);
    setShowTapr(false);
    setCheckedMap({});
  };

  const wordCount = useMemo(() => countWords(draft), [draft]);
  const minW = level === "SL" ? 250 : 450;
  const maxW = level === "SL" ? 400 : 600;
  const sweetLo = level === "SL" ? 330 : 510;
  const sweetHi = level === "SL" ? 380 : 570;
  const scaleMax = level === "SL" ? 500 : 750;

  const zoneStatus = useMemo(() => {
    if (wordCount === 0) return { label: "Start typing or load sample", tone: "ink" as const };
    if (wordCount < minW) return { label: `Under min (−${minW - wordCount}w)`, tone: "bad" as const };
    if (wordCount >= sweetLo && wordCount <= sweetHi) return { label: "Sweet Spot 🎯", tone: "good" as const };
    if (wordCount <= maxW) return { label: "In Green Zone ✅", tone: "good" as const };
    return { label: `Over max (+${wordCount - maxW}w)`, tone: "bad" as const };
  }, [wordCount, minW, maxW, sweetLo, sweetHi]);

  const connectorMatches = useMemo(() => {
    const found = new Set<string>();
    for (const m of draft.matchAll(CONNECTOR_REGEX)) found.add(m[0].toLowerCase());
    return [...found];
  }, [draft]);

  const hasSpanishOrtho = useMemo(() => SPANISH_ACCENT_REGEX.test(draft), [draft]);

  const checkedCount = scenario.checklist.reduce(
    (sum, _, idx) => sum + (checkedMap[`${scenario.id}:${idx}`] ? 1 : 0),
    0,
  );

  // SVG horizontal gauge coordinates (track x=20..580 -> width 560)
  const mapX = (w: number) => 20 + Math.min(1, Math.max(0, w / scaleMax)) * 560;
  const pointerX = mapX(wordCount);
  const minX = mapX(minW);
  const maxX = mapX(maxW);
  const swLoX = mapX(sweetLo);
  const swHiX = mapX(sweetHi);

  return (
    <WidgetFrame
      title="Paper 1 Prompt Decoder & Live Word-Count Zone Gauge"
      tryThis={[
        "Pick a Paper 1 prompt, decode **Audience + Purpose**, and select the **single most appropriate** text type to unlock Band 5–6 on Criterion C.",
        "Switch between **SL (250–400w)** and **HL (450–600w)**, then type or load a sample Spanish draft to watch the live word-count needle enter the **Green Sweet Spot**.",
      ]}
      caption={
        selectedOption ? (
          <span>
            <strong>Criterion C Verdict ({selectedOption.band}):</strong> {selectedOption.verdict}
          </span>
        ) : (
          <span>
            Every IB Paper 1 prompt offers <strong>3 text types</strong> (1 optimal, 1 acceptable, 1 inappropriate). Test all three above to see how Criterion C responds!
          </span>
        )
      }
    >
      <div className="space-y-4">
        {/* Top controls: Level + Prompt selector */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="IB Level"
            value={level}
            onChange={(v) => setLevel(v)}
            options={[
              { value: "SL", label: "SL · 250–400w (1h 15m)" },
              { value: "HL", label: "HL · 450–600w (1h 30m)" },
            ]}
          />
          <button
            type="button"
            onClick={() => setShowTapr((s) => !s)}
            className="chip px-3 py-1.5 text-xs font-bold hover:bg-brand-soft hover:text-brand"
          >
            {showTapr ? "🙈 Hide T-A-P-R Hint" : "🔎 Reveal T-A-P-R Breakdown"}
          </button>
        </div>

        {/* Scenario selector pills */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Choose a Paper 1 prompt">
          {P1_SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              type="button"
              onClick={() => handleSelectScenario(sc.id)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                sc.id === scenario.id
                  ? "border-brand bg-brand text-brand-ink shadow-sm"
                  : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {sc.shortTitle}
            </button>
          ))}
        </div>

        {/* Prompt box */}
        <div className="rounded-xl border border-line bg-surface-2 p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-brand">
            <span>Tema: {scenario.theme}</span>
            <span>Criterion C = 6 / 30 marks</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink italic">«{scenario.promptEs}»</p>
          {showTapr ? (
            <div className="mt-3 grid grid-cols-1 gap-2 rounded-lg bg-surface p-2.5 text-xs text-ink sm:grid-cols-3">
              <div>
                <span className="font-extrabold text-brand">Audience:</span> {scenario.tapr.audience}
              </div>
              <div>
                <span className="font-extrabold text-brand">Purpose:</span> {scenario.tapr.purpose}
              </div>
              <div>
                <span className="font-extrabold text-brand">Register:</span> {scenario.tapr.register}
              </div>
            </div>
          ) : null}
        </div>

        {/* 3 Text-type selector buttons */}
        <div>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Step 1 · Choose the single MOST appropriate text type (out of 3 offered):
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {scenario.options.map((opt) => {
              const isPicked = pickedType === opt.id;
              const toneStyle = !isPicked
                ? "border-line bg-surface hover:border-brand text-ink"
                : opt.tier === "optimal"
                  ? "border-good bg-good-soft text-good"
                  : opt.tier === "acceptable"
                    ? "border-warn bg-warn-soft text-warn"
                    : "border-bad bg-bad-soft text-bad";
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPickedType(opt.id)}
                  className={`rounded-xl border-2 px-3 py-2.5 text-left text-sm font-bold transition ${toneStyle}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{opt.label}</span>
                    {isPicked ? (
                      <span className="text-xs font-extrabold">
                        {opt.tier === "optimal" ? "🏆" : opt.tier === "acceptable" ? "⚠️" : "❌"} {opt.band}
                      </span>
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Spanish Draft + SVG Word-Count Zone Gauge */}
        <div className="space-y-3 rounded-xl border border-line bg-surface p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label htmlFor="p1-draft-area" className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              Step 2 · Live Spanish Draft &amp; {level} Word-Count Zone
            </label>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setDraft(level === "SL" ? scenario.sampleSL : scenario.sampleHL)}
                className="chip px-2.5 py-1 text-xs font-bold hover:bg-brand-soft hover:text-brand"
              >
                ✨ Load {level} sample
              </button>
              <button
                type="button"
                onClick={() => setDraft("")}
                className="chip px-2.5 py-1 text-xs font-bold hover:bg-bad-soft hover:text-bad"
              >
                Clear
              </button>
            </div>
          </div>

          <textarea
            id="p1-draft-area"
            rows={5}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={`Escribe o pega aquí tu borrador en español (${minW}–${maxW} palabras para ${level})…`}
            className="w-full rounded-xl border border-line bg-surface-2 p-3 text-sm leading-relaxed text-ink focus:border-brand focus:outline-none"
          />

          {/* Live SVG Zone Gauge */}
          <svg
            viewBox="0 0 600 84"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Live word-count gauge for ${level}: ${wordCount} words out of target ${minW} to ${maxW}`}
            className="h-auto w-full"
          >
            <rect x="20" y="32" width={minX - 20} height="18" rx="6" fill="#ffe4e6" />
            <rect x={minX} y="32" width={maxX - minX} height="18" fill="#dcfce7" />
            <rect x={swLoX} y="32" width={swHiX - swLoX} height="18" fill="#86efac" />
            <rect x={maxX} y="32" width={580 - maxX} height="18" rx="6" fill="#fef9c3" />
            <rect x="20" y="32" width="560" height="18" rx="6" fill="none" stroke="#cbd5e1" strokeWidth="1.2" />
            <line x1={minX} y1="26" x2={minX} y2="56" stroke="#15803d" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1={maxX} y1="26" x2={maxX} y2="56" stroke="#a16207" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="20" y="72" fontSize="10" fill="#6b483a" fontFamily="system-ui, sans-serif">0</text>
            <text x={minX} y="72" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#15803d" fontFamily="system-ui, sans-serif">{minW}w</text>
            <text x={(swLoX + swHiX) / 2} y="22" textAnchor="middle" fontSize="10" fontWeight="800" fill="#15803d" fontFamily="system-ui, sans-serif">Sweet Spot ({sweetLo}–{sweetHi}w)</text>
            <text x={maxX} y="72" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#a16207" fontFamily="system-ui, sans-serif">{maxW}w</text>
            <text x="580" y="72" textAnchor="end" fontSize="10" fill="#6b483a" fontFamily="system-ui, sans-serif">{scaleMax}+</text>
            {/* Dynamic needle */}
            <polygon points={`${pointerX},29 ${pointerX - 6},18 ${pointerX + 6},18`} fill="#c2410c" />
            <line x1={pointerX} y1="29" x2={pointerX} y2="54" stroke="#c2410c" strokeWidth="2.5" />
          </svg>

          {/* Readouts */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Readout label="Words Typed" value={`${wordCount}w`} tone={zoneStatus.tone} />
            <Readout label={`${level} Zone Status`} value={zoneStatus.label} tone={zoneStatus.tone} />
            <Readout label="Crit. C Checklist" value={`${checkedCount} / ${scenario.checklist.length}`} tone={checkedCount === scenario.checklist.length ? "good" : "brand"} />
          </div>

          {/* Live orthography & connector badges */}
          {wordCount > 0 ? (
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className={`chip px-2.5 py-1 font-bold ${hasSpanishOrtho ? "bg-good-soft text-good" : "bg-warn-soft text-warn"}`}>
                {hasSpanishOrtho ? "✅ Spanish accents/ñ detected" : "⚠️ No Spanish accents (á é í ó ú ñ) yet"}
              </span>
              <span className={`chip px-2.5 py-1 font-bold ${connectorMatches.length >= 2 ? "bg-good-soft text-good" : "bg-surface-2 text-ink-2"}`}>
                B2–C1 markers detected: {connectorMatches.length}
                {connectorMatches.length > 0 ? ` (${connectorMatches.slice(0, 3).join(", ")})` : ""}
              </span>
            </div>
          ) : null}

          {/* Criterion C Structural Checklist */}
          <div className="pt-1">
            <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
              Criterion C Structural Self-Check:
            </p>
            <ul className="space-y-1.5">
              {scenario.checklist.map((item, idx) => {
                const k = `${scenario.id}:${idx}`;
                const checked = Boolean(checkedMap[k]);
                return (
                  <li key={k}>
                    <label className="flex cursor-pointer items-start gap-2 text-xs text-ink sm:text-sm">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setCheckedMap((prev) => ({ ...prev, [k]: !prev[k] }))}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
                      />
                      <span className={checked ? "line-through text-ink-2" : ""}>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: PAPER 2 JUSTIFICATION-QUOTE & LISTENING SCRIPT LAB
// =============================================================================

type P2Mode = "reading" | "listening";

interface ReadingCase {
  id: string;
  title: string;
  levelTag: string;
  extractEs: string;
  statementEs: string;
  truth: "Verdadero" | "Falso";
  quotes: Array<{
    id: string;
    label: string;
    textEs: string;
    quality: "too-short" | "exact" | "over-long";
    feedback: string;
  }>;
}

const READING_CASES: ReadingCase[] = [
  {
    id: "carril-bici",
    title: "Text A · Carriles bici (Sevilla)",
    levelTag: "SL Core",
    extractEs:
      "Aunque el ayuntamiento inauguró veinte kilómetros de carril bici el año pasado, la mayoría de los vecinos sigue utilizando el coche particular porque considera que las rutas carecen de iluminación nocturna y resultan peligrosas.",
    statementEs: "Los vecinos desconfían de los carriles bici debido a la falta de luz por la noche.",
    truth: "Verdadero",
    quotes: [
      {
        id: "short",
        label: "Quote Option 1",
        textEs: "la mayoría de los vecinos sigue utilizando el coche particular",
        quality: "too-short",
        feedback:
          "0 marks — Too incomplete! Mentioning car usage alone fails to prove *why* they distrust the cycle lanes (missing night-time lighting).",
      },
      {
        id: "exact",
        label: "Quote Option 2",
        textEs: "considera que las rutas carecen de iluminación nocturna y resultan peligrosas",
        quality: "exact",
        feedback:
          "Exact M-I-N-I justification quote! Verbatim Spanish proving distrust + lack of lighting with zero irrelevant opening details.",
      },
      {
        id: "long",
        label: "Quote Option 3",
        textEs:
          "Aunque el ayuntamiento inauguró veinte kilómetros de carril bici el año pasado, la mayoría de los vecinos sigue utilizando el coche particular porque considera que las rutas carecen de iluminación nocturna y resultan peligrosas.",
        quality: "over-long",
        feedback:
          "0 marks — Over-long lift! Copying the unrelated 20 km inauguration clause fails IB markscheme precision rules.",
      },
    ],
  },
  {
    id: "teletrabajo-bogota",
    title: "Text B · Teletrabajo (Bogotá)",
    levelTag: "SL / HL",
    extractEs:
      "Aunque el teletrabajo prometía conciliar mejor la vida familiar y profesional, diversos estudios realizados en Bogotá revelan que casi la mitad de los empleados conectados desde casa alarga su jornada laboral sin remuneración adicional.",
    statementEs: "El trabajo remoto ha eliminado por completo las horas extras no pagadas.",
    truth: "Falso",
    quotes: [
      {
        id: "short",
        label: "Quote Option 1",
        textEs: "el teletrabajo prometía conciliar mejor la vida familiar",
        quality: "too-short",
        feedback:
          "0 marks — Wrong clause! That opening concession describes what remote work *promised*, not what disproves unpaid overtime.",
      },
      {
        id: "long",
        label: "Quote Option 2",
        textEs:
          "Aunque el teletrabajo prometía conciliar mejor la vida familiar y profesional, diversos estudios realizados en Bogotá revelan que casi la mitad de los empleados conectados desde casa alarga su jornada laboral sin remuneración adicional.",
        quality: "over-long",
        feedback:
          "0 marks — Over-long lift! Including the concessive *Aunque...* opener obscures which exact fact contradicts the statement.",
      },
      {
        id: "exact",
        label: "Quote Option 3",
        textEs: "casi la mitad de los empleados conectados desde casa alarga su jornada laboral sin remuneración adicional",
        quality: "exact",
        feedback:
          "Exact M-I-N-I justification quote! Concisely proves *Falso* by showing nearly half still work unpaid overtime.",
      },
    ],
  },
  {
    id: "cruceros-palma",
    title: "Text C · Cruceros (Palma)",
    levelTag: "HL / Text C",
    extractEs:
      "Pese a las millonarias campañas institucionales de promoción, los comerciantes del casco antiguo lamentan que los cruceristas apenas permanecen cuatro horas en tierra y rara vez compran en las tiendas tradicionales del barrio.",
    statementEs: "Los turistas de crucero pasan jornadas enteras comprando en el comercio local.",
    truth: "Falso",
    quotes: [
      {
        id: "exact",
        label: "Quote Option 1",
        textEs: "apenas permanecen cuatro horas en tierra y rara vez compran en las tiendas tradicionales del barrio",
        quality: "exact",
        feedback:
          "Exact M-I-N-I justification quote! Directly refutes *jornadas enteras* (`apenas cuatro horas`) and local shopping (`rara vez compran`).",
      },
      {
        id: "short",
        label: "Quote Option 2",
        textEs: "Pese a las millonarias campañas institucionales de promoción",
        quality: "too-short",
        feedback:
          "0 marks — Irrelevant clause! Promotional ad spending says nothing about how long cruise passengers stay or shop.",
      },
      {
        id: "long",
        label: "Quote Option 3",
        textEs:
          "Pese a las millonarias campañas institucionales de promoción, los comerciantes del casco antiguo lamentan que los cruceristas apenas permanecen cuatro horas en tierra y rara vez compran en las tiendas tradicionales del barrio.",
        quality: "over-long",
        feedback:
          "0 marks — Over-long lift! Trim out the opening promotional-campaign clause to isolate the exact contradiction.",
      },
    ],
  },
];

interface ListeningTrack {
  id: string;
  title: string;
  accentLabel: string;
  langPref: string;
  scriptSegments: Array<{ text: string; isPivot?: boolean }>;
  questionEs: string;
  options: Array<{ id: string; text: string; correct: boolean; feedback: string }>;
}

const LISTENING_TRACKS: ListeningTrack[] = [
  {
    id: "concierto-valencia",
    title: "Track A · Concierto solidario (Valencia)",
    accentLabel: "Spain · es-ES",
    langPref: "es-ES",
    scriptSegments: [
      { text: "Al principio habíamos reservado el auditorio municipal para el jueves dieciséis, porque el viernes estaba ocupado por una feria de empleo; " },
      { text: "sin embargo", isPivot: true },
      { text: ", esta mañana nos avisaron de que la feria se pospuso y, " },
      { text: "en realidad", isPivot: true },
      { text: ", celebraremos el concierto benéfico el viernes diecisiete a las siete de la tarde." },
    ],
    questionEs: "¿Qué día tendrá lugar finalmente el concierto benéfico?",
    options: [
      {
        id: "jueves",
        text: "El jueves dieciséis",
        correct: false,
        feedback: "Classic early-bait trap! Thursday 16th was the initial booking before the double pivot «sin embargo... en realidad».",
      },
      {
        id: "viernes",
        text: "El viernes diecisiete",
        correct: true,
        feedback: "Spot on! You waited past «sin embargo... en realidad» to capture the confirmed final date (viernes 17).",
      },
      {
        id: "sabado",
        text: "El sábado dieciocho",
        correct: false,
        feedback: "Not mentioned — replay at 0.75x and listen right after «en realidad, celebraremos...».",
      },
    ],
  },
  {
    id: "huerto-guadalajara",
    title: "Track B · Huerto urbano (Guadalajara, MX)",
    accentLabel: "Mexico · es-MX",
    langPref: "es-MX",
    scriptSegments: [
      { text: "Cuando lanzamos el huerto comunitario en mi barrio, calculábamos que necesitaríamos cuarenta voluntarios fijos. Durante el primer mes solo llegaron dieciocho, lo que nos desanimó un poco; " },
      { text: "no obstante", isPivot: true },
      { text: ", tras publicar un video desde el celular en redes sociales, hoy colaboran regularmente treinta y cinco vecinos." },
    ],
    questionEs: "¿Cuántos voluntarios colaboran regularmente en la actualidad?",
    options: [
      {
        id: "40",
        text: "Cuarenta voluntarios (40)",
        correct: false,
        feedback: "Distractor #1! 40 was only the initial estimate (*calculábamos*) when launching the garden.",
      },
      {
        id: "18",
        text: "Dieciocho voluntarios (18)",
        correct: false,
        feedback: "Distractor #2! 18 was only during the first month (*Durante el primer mes*) before the pivot «no obstante».",
      },
      {
        id: "35",
        text: "Treinta y cinco voluntarios (35)",
        correct: true,
        feedback: "Exact! Tracking `40 → 18 → no obstante → 35` defeats both earlier numerical distractors (bonus LatAm lexis: `celular` = `móvil`).",
      },
    ],
  },
  {
    id: "taller-buenos-aires",
    title: "Track C · Taller cultural (Buenos Aires, AR)",
    accentLabel: "Argentina · es-AR",
    langPref: "es-AR",
    scriptSegments: [
      { text: "Che, si vos querés venir al taller de fileteado porteño en la calle Defensa, no te fíes del folleto viejo. Muchos creen que dura dos horas y cuesta veinte dólares; " },
      { text: "a decir verdad", isPivot: true },
      { text: ", la entrada es completamente gratuita, aunque " },
      { text: "al final", isPivot: true },
      { text: " extendimos la clase a tres horas para que cada asistente termine su diseño." },
    ],
    questionEs: "¿Cuánto cuesta y cuánto dura realmente el taller ahora?",
    options: [
      {
        id: "20-2h",
        text: "Cuesta veinte dólares y dura dos horas",
        correct: false,
        feedback: "That's the outdated leaflet myth introduced by «Muchos creen que...» — listen past «a decir verdad»!",
      },
      {
        id: "free-3h",
        text: "Es gratuito y dura tres horas",
        correct: true,
        feedback: "Brilliant! You decoded Rioplatense `vos querés`, caught «a decir verdad» (gratuito), and tracked «al final» (tres horas).",
      },
      {
        id: "20-3h",
        text: "Cuesta veinte dólares y dura tres horas",
        correct: false,
        feedback: "Half right — the duration changed to 3 hours, AND admission is completely free (*completamente gratuita*).",
      },
    ],
  },
];

function Paper2LabWidget() {
  const [mode, setMode] = useState<P2Mode>("reading");

  // Reading state
  const [rIdx, setRIdx] = useState(0);
  const [rTruth, setRTruth] = useState<"Verdadero" | "Falso" | null>(null);
  const [rQuoteId, setRQuoteId] = useState<string | null>(null);

  // Listening state
  const [lIdx, setLIdx] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [lPickId, setLPickId] = useState<string | null>(null);
  const tts = useSpanishTTS();

  const rCase = READING_CASES[rIdx];
  const rPickedQuote = rCase.quotes.find((q) => q.id === rQuoteId) ?? null;
  const rFullMark = rTruth === rCase.truth && rPickedQuote?.quality === "exact";

  const lTrack = LISTENING_TRACKS[lIdx];
  const lFullText = useMemo(
    () => lTrack.scriptSegments.map((s) => s.text).join(""),
    [lTrack],
  );
  const lPickedOpt = lTrack.options.find((o) => o.id === lPickId) ?? null;

  const switchReading = (idx: number) => {
    setRIdx(idx);
    setRTruth(null);
    setRQuoteId(null);
  };

  const switchListening = (idx: number) => {
    tts.stop();
    setLIdx(idx);
    setLPickId(null);
    setShowTranscript(false);
  };

  return (
    <WidgetFrame
      title="Paper 2 Justification-Quote & Listening Script Lab"
      tryThis={[
        "In **Reading Mode**, pick **Verdadero / Falso** AND choose the **exact minimal quote** — see why over-long quotes lose the IB mark.",
        "In **Listening Mode**, hide the transcript first, click **🔊 Play Spanish (1.0x)** or **🐢 Slow (0.75x)**, answer past the pivot connector, then reveal the highlighted pivots!",
      ]}
      caption={
        mode === "reading" ? (
          rTruth && rPickedQuote ? (
            <span>
              <strong>IB Markscheme Verdict ({rFullMark ? "1 / 1 mark ✅" : "0 / 1 mark ❌"}):</strong>{" "}
              {rTruth !== rCase.truth
                ? `Check the True/False box first (the text proves ${rCase.truth})! `
                : ""}
              {rPickedQuote.feedback}
            </span>
          ) : (
            <span>
              Remember the <strong>M-I-N-I rule</strong>: both the Verdadero/Falso box AND the exact minimal verbatim quote must be right for 1 mark.
            </span>
          )
        ) : lPickedOpt ? (
          <span>
            <strong>Listening Verdict ({lPickedOpt.correct ? "✅ Correct" : "❌ Distractor Trap"}):</strong>{" "}
            {lPickedOpt.feedback}
          </span>
        ) : (
          <span>
            Keep the transcript hidden on Play 1 just like the real IB Listening exam — listen past pivot connectors (<em>sin embargo, no obstante, en realidad, al final</em>)!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Paper 2 Lab Mode"
          value={mode}
          onChange={(v) => {
            tts.stop();
            setMode(v);
          }}
          options={[
            { value: "reading", label: "📖 Reading: Minimal Quote Lab" },
            { value: "listening", label: "🎧 Listening: Distractor & TTS Lab" },
          ]}
        />

        {mode === "reading" ? (
          <div className="space-y-3.5">
            {/* Reading case picker */}
            <div className="flex flex-wrap gap-1.5">
              {READING_CASES.map((rc, i) => (
                <button
                  key={rc.id}
                  type="button"
                  onClick={() => switchReading(i)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                    i === rIdx
                      ? "border-brand bg-brand text-brand-ink shadow-sm"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {rc.title}
                </button>
              ))}
            </div>

            {/* Extract card */}
            <div className="rounded-xl border border-line bg-surface-2 p-3.5">
              <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-brand">
                <span>Extracto auténtico · {rCase.levelTag}</span>
                <span>1 mark = Box + Minimal Quote</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink">«{rCase.extractEs}»</p>
              <div className="mt-3 rounded-lg border border-line bg-surface p-2.5 text-sm font-bold text-ink">
                Afirmación: «{rCase.statementEs}»
              </div>
            </div>

            {/* Step 1: Verdadero / Falso */}
            <div>
              <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                Step 1 · Verdadero o Falso:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {(["Verdadero", "Falso"] as const).map((choice) => {
                  const picked = rTruth === choice;
                  const tone = !picked
                    ? "border-line bg-surface text-ink hover:border-brand"
                    : choice === rCase.truth
                      ? "border-good bg-good-soft text-good"
                      : "border-bad bg-bad-soft text-bad";
                  return (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => setRTruth(choice)}
                      className={`rounded-xl border-2 px-3 py-2 text-sm font-extrabold transition ${tone}`}
                    >
                      {choice} {picked ? (choice === rCase.truth ? "✅" : "❌") : ""}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Candidate Justification Quotes */}
            <div>
              <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                Step 2 · Select the quote that earns the IB justification mark:
              </p>
              <div className="space-y-2">
                {rCase.quotes.map((q) => {
                  const picked = rQuoteId === q.id;
                  const tone = !picked
                    ? "border-line bg-surface text-ink hover:border-brand"
                    : q.quality === "exact"
                      ? "border-good bg-good-soft text-good"
                      : q.quality === "over-long"
                        ? "border-warn bg-warn-soft text-warn"
                        : "border-bad bg-bad-soft text-bad";
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setRQuoteId(q.id)}
                      className={`w-full rounded-xl border-2 p-3 text-left text-xs leading-relaxed transition sm:text-sm ${tone}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 font-extrabold">
                        <span>{q.label}</span>
                        {picked ? (
                          <span>
                            {q.quality === "exact"
                              ? "✅ Exact Minimal (1m)"
                              : q.quality === "over-long"
                                ? "⚠️ Over-Long Lift (0m)"
                                : "❌ Incomplete (0m)"}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 font-normal italic">«{q.textEs}»</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3.5">
            {/* Listening track picker */}
            <div className="flex flex-wrap gap-1.5">
              {LISTENING_TRACKS.map((lt, i) => (
                <button
                  key={lt.id}
                  type="button"
                  onClick={() => switchListening(i)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                    i === lIdx
                      ? "border-brand bg-brand text-brand-ink shadow-sm"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {lt.title}
                </button>
              ))}
            </div>

            {/* Audio controls panel */}
            <div className="rounded-xl border border-line bg-surface-2 p-3.5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-brand">
                <span>Audio Track · {lTrack.accentLabel}</span>
                <span>{tts.activeKey ? "🔊 Playing Spanish…" : "Ready (2-play practice)"}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={!tts.supported}
                  onClick={() => tts.speak(lFullText, 1.0, lTrack.langPref, `${lTrack.id}-1x`)}
                  className="btn btn-primary text-xs sm:text-sm disabled:opacity-50"
                >
                  🔊 Play Spanish (1.0x)
                </button>
                <button
                  type="button"
                  disabled={!tts.supported}
                  onClick={() => tts.speak(lFullText, 0.75, lTrack.langPref, `${lTrack.id}-075x`)}
                  className="btn btn-secondary text-xs sm:text-sm disabled:opacity-50"
                >
                  🐢 Slow (0.75x)
                </button>
                {tts.activeKey ? (
                  <button type="button" onClick={tts.stop} className="btn btn-secondary text-xs sm:text-sm">
                    ⏹ Stop
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => setShowTranscript((s) => !s)}
                  className="chip px-3 py-1.5 text-xs font-bold hover:bg-brand-soft hover:text-brand"
                >
                  {showTranscript ? "🙈 Hide Transcript (Exam Mode)" : "👁 Show Transcript & Pivots"}
                </button>
              </div>

              {!tts.supported ? (
                <p className="text-xs text-warn">
                  Web Speech TTS is unavailable in this browser — click <strong>Show Transcript &amp; Pivots</strong> to practise reading the script directly.
                </p>
              ) : null}

              {/* Toggleable Transcript with Highlighted Distractor Pivots */}
              {showTranscript ? (
                <div className="rounded-lg border border-line bg-surface p-3 text-sm leading-relaxed text-ink">
                  <div className="mb-1 text-xs font-extrabold uppercase tracking-wide text-ink-2">
                    Transcripción (pivotes destacados):
                  </div>
                  <p>
                    «
                    {lTrack.scriptSegments.map((seg, i) =>
                      seg.isPivot ? (
                        <mark
                          key={i}
                          className="rounded bg-warn-soft px-1.5 py-0.5 font-extrabold text-warn"
                        >
                          {seg.text}
                        </mark>
                      ) : (
                        <span key={i}>{seg.text}</span>
                      ),
                    )}
                    »
                  </p>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-line bg-surface/60 p-3 text-xs text-ink-2">
                  🎧 <strong>Exam Mode active:</strong> Transcript hidden. Listen once at 1.0x, spot the pivot connector, pick your answer below, then reveal the transcript to audit your listening!
                </div>
              )}
            </div>

            {/* Listening Comprehension Check */}
            <div>
              <p className="mb-2 text-sm font-extrabold text-ink">{lTrack.questionEs}</p>
              <div className="space-y-2">
                {lTrack.options.map((opt) => {
                  const picked = lPickId === opt.id;
                  const tone = !picked
                    ? "border-line bg-surface text-ink hover:border-brand"
                    : opt.correct
                      ? "border-good bg-good-soft text-good"
                      : "border-bad bg-bad-soft text-bad";
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setLPickId(opt.id)}
                      className={`w-full rounded-xl border-2 px-3.5 py-2.5 text-left text-sm font-bold transition ${tone}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span>{opt.text}</span>
                        {picked ? <span>{opt.correct ? "✅" : "❌"}</span> : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// EXPORTS (BOTH NAMED AND DEFAULT)
// =============================================================================

export const widgets: WidgetDef[] = [
  {
    id: "p1-prompt-decoder-gauge",
    title: "Paper 1 Prompt Decoder & Live Word-Count Zone Gauge",
    blurb:
      "Test selecting the single **most appropriate** Spanish text type out of 3 for Criterion C, then draft or load Spanish text against the live **SL (250–400w)** / **HL (450–600w)** green zone.",
    Component: Paper1DecoderWidget,
  },
  {
    id: "p2-reading-listening-lab",
    title: "Paper 2 Justification-Quote & Listening Script Lab",
    blurb:
      "Verify **M-I-N-I** verbatim reading justification quotes against over-long lifts, then train on **Web Speech Spanish audio (1.0x / 0.75x)** with self-correction distractor pivots.",
    Component: Paper2LabWidget,
  },
];

export default widgets;
