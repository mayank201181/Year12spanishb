import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "3-ingenio-humano-m1",
    title: "MCQ Paper 1: Arts, Cinema, Media & Text Types (SL Core)",
    level: "SL",
    questions: [
      {
        id: "3-ingenio-humano-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "entretenimiento-expresiones-artisticas",
        question:
          "¿Qué rasgo define mejor una **reseña** cinematográfica de nivel BI frente a un simple resumen escolar?",
        options: [
          "Equilibra análisis técnico, contexto y crítica matizada sin destripar el final",
          "Narra cronológicamente cada escena hasta revelar el giro final completo",
          "Usa tono estrictamente oficial en primera persona plural sin firma personal",
          "Presenta únicamente preguntas y respuestas directas con el director del filme",
        ],
        answerIndex: 0,
        explanation:
          "A high-scoring IB *reseña* devotes minimal space to a spoiler-free synopsis and focuses on technical evaluation, context, and balanced praise/objection. Retelling every scene spoils the ending, institutional *nosotros* without signature belongs to an *editorial*, and Q&A format defines an *entrevista*.",
        hints: [
          "Think about the F-A-V-O-R blueprint for a cultural review.",
          "A strong review evaluates craftsmanship rather than simply retelling the whole plot.",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "entretenimiento-expresiones-artisticas",
        question:
          "¿Por qué se considera revolucionario el movimiento muralista mexicano encabezado por Diego Rivera en la década de 1920?",
        options: [
          "Porque prohibió la representación de las culturas indígenas en edificios estatales",
          "Porque limitó el acceso al arte únicamente a colecciones privadas europeas",
          "Porque sacó el arte a muros públicos para narrar la historia social al pueblo",
          "Porque sustituyó la pintura mural tradicional por proyecciones digitales en cines",
        ],
        answerIndex: 2,
        explanation:
          "Mexican muralism deliberately brought art out of elite galleries onto public buildings (*Palacio Nacional*, schools, ministries) to educate citizens on Mexican history, revolution, and indigenous heritage. The other statements contradict its egalitarian, indigenist, and pre-digital nature.",
        hints: [
          "Think about where Diego Rivera painted his most famous works.",
          "Consider who the intended audience of post-Revolution Mexican murals was.",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "entretenimiento-expresiones-artisticas",
        question:
          "En *El laberinto del fauno*, ¿qué función cumple principalmente el mundo fantástico creado por Guillermo del Toro?",
        options: [
          "Promocionar el turismo rural en el norte de España durante el siglo XXI",
          "Actuar como alegoría política y refugio moral frente a la brutalidad franquista",
          "Sustituir por completo los hechos históricos por una comedia familiar ligera",
          "Demostrar que las leyendas tradicionales carecen de relación con la historia",
        ],
        answerIndex: 1,
        explanation:
          "Del Toro uses dark fantasy as an allegory of disobedience and moral courage set against post-Civil War Francoist authoritarianism (1944). It is neither light comedy nor tourism publicity, and it directly intertwines myth with historical trauma.",
        hints: [
          "Recall the historical setting of the film: northern Spain in 1944.",
          "Notice how the monsters mirror real-world authoritarian violence.",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "entretenimiento-expresiones-artisticas",
        question:
          "Completa esta valoración de una *reseña* con la forma verbal correcta: *«Cabe lamentar que la banda sonora no ________ (estar) a la altura de la fotografía.»*",
        options: [
          "está",
          "estuvo",
          "estará",
          "esté",
        ],
        answerIndex: 3,
        explanation:
          "*Cabe lamentar que* is an impersonal emotional evaluation (WEIRDO), which always triggers the subjunctive. Present subjunctive of *estar* (3rd person singular) is **esté** (with mandatory accent). Indicative forms (*está, estuvo, estará*) are ungrammatical after *lamentar que*.",
        hints: [
          "Look at the trigger phrase: *Cabe lamentar que* expresses a value judgement/regret.",
          "Does a WEIRDO emotional trigger require indicative or subjunctive?",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "entretenimiento-expresiones-artisticas",
        question:
          "¿Qué principio de ingeniería inspiró a Antoni Gaudí al diseñar las columnas ramificadas y los arcos catenarios de *La Sagrada Família*?",
        options: [
          "La biomímesis: observar estructuras orgánicas de la naturaleza para distribuir cargas",
          "El brutalismo industrial: emplear bloques grises uniformes sin curvas ni ornamentos",
          "El racionalismo minimalista: eliminar toda luz natural del interior de la basílica",
          "La construcción prefabricada: montar piezas idénticas de acero sin cálculos previos",
        ],
        answerIndex: 0,
        explanation:
          "Gaudí pioneered architectural **biomímesis**, modelling tree-like branching columns and inverted hanging-chain (*catenaria*) arches on organic geometry so loads flow naturally without heavy external buttresses.",
        hints: [
          "Think of how tree trunks split into branches to support a heavy canopy.",
          "Which term literally means imitating biological structures in engineering?",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "comunicacion-medios-redes",
        question:
          "Un periódico escolar quiere publicar la postura oficial de su equipo de redacción sobre la prohibición de móviles en las aulas. ¿Qué tipo de texto resulta **más apropiado**?",
        options: [
          "Un diario personal escrito en tono íntimo y confesional",
          "Un editorial sin firma personal redactado en primera persona plural",
          "Una reseña cultural con puntuación de estrellas y ficha técnica",
          "Una carta informal dirigida a un amigo íntimo de otro colegio",
        ],
        answerIndex: 1,
        explanation:
          "An **editorial** specifically expresses the official collective stance of a publication's editorial board (*nosotros*), using a formal/semi-formal persuasive voice and no individual byline. Personal diaries, cultural reviews, and informal letters mismatch both audience and institutional purpose.",
        hints: [
          "Notice the prompt asks for the *postura oficial de la redacción* (institutional stance).",
          "Which Mass Media text type speaks as *nosotros* on behalf of the whole newspaper?",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "comunicacion-medios-redes",
        question:
          "En el ámbito del periodismo digital en español, ¿a qué se refiere exactamente el término **ciberanzuelo** (*clickbait*)?",
        options: [
          "A una plataforma pública que verifica declaraciones políticas con datos oficiales",
          "A un programa educativo que enseña a contrastar fuentes científicas en clase",
          "A un titular sensacionalista diseñado para atraer clics exagerando la noticia real",
          "A un archivo cifrado que protege la identidad de periodistas de investigación",
        ],
        answerIndex: 2,
        explanation:
          "*El ciberanzuelo* (literally 'cyber-bait', recommended by FundéuRAE for *clickbait*) denotes exaggerated or misleading headlines engineered solely to harvest clicks and ad revenue rather than inform accurately.",
        hints: [
          "Break down the Spanish compound: *ciber-* (online) + *anzuelo* (fishing hook/bait).",
          "Think about why headlines say '¡No podrás creer lo que pasó después!'",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "comunicacion-medios-redes",
        question:
          "¿Qué consecuencia directa produce una **cámara de eco** en las redes sociales?",
        options: [
          "Refuerza el sesgo de confirmación al exponer al usuario solo a ideas afines",
          "Garantiza el contraste obligatorio de fuentes antes de compartir cada enlace",
          "Elimina automáticamente los bulos virales mediante auditorías independientes",
          "Obliga a los usuarios a leer periódicos impresos de distintas ideologías cada día",
        ],
        answerIndex: 0,
        explanation:
          "An algorithmic *cámara de eco* traps users inside a feed of like-minded content, amplifying *sesgo de confirmación* and polarisation instead of promoting diverse perspectives or fact-checking.",
        hints: [
          "Think of the metaphor: in an echo chamber, what sound comes back to you?",
          "Connect *cámara de eco* with *sesgo de confirmación*.",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "comunicacion-medios-redes",
        question:
          "¿Qué combinación de convenciones corresponde fielmente a un **blog** juvenil sobre cultura digital en la Prueba 1?",
        options: [
          "Dirección postal del destinatario, saludo «Muy señor mío» y firma oficial",
          "Sin firma individual, voz institucional «nosotros» y tesis editorial formal",
          "Turnos alternos de «P:» y «R:» precedidos de una breve biografía del invitado",
          "Título atractivo, tono cercano en primera persona, etiquetas (#) e invitación a comentar",
        ],
        answerIndex: 3,
        explanation:
          "A digital **blog** combines a catchy title, first-person engaging voice addressing readers directly, `#etiquetas`, and a closing prompt inviting comments. Postal addresses belong to a *carta formal*, unsigned *nosotros* to an *editorial*, and Q&A turns to an *entrevista*.",
        hints: [
          "Ask yourself what makes a blog *interactive* compared to print press.",
          "Look for the conventions tied to online readers and dialogue.",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "comunicacion-medios-redes",
        question:
          "Lee este fragmento: *«Aunque la prensa escrita ha perdido lectores jóvenes, los medios digitales rigurosos han ganado suscriptores dispuestos a pagar por información verificada.»* ¿Qué se deduce correctamente?",
        options: [
          "Ningún lector está dispuesto a pagar por periodismo en formato digital",
          "Existe un público que valora y financia el periodismo digital verificado",
          "La prensa impresa ha recuperado a la mayoría del público adolescente",
          "Las plataformas gratuitas han reemplazado por completo a los medios rigurosos",
        ],
        answerIndex: 1,
        explanation:
          "The text explicitly states that rigorous digital outlets have gained subscribers willing to pay for verified journalism (*dispuestos a pagar por información verificada*). The other choices directly contradict the extract.",
        hints: [
          "Focus on the main clause after *Aunque...*.",
          "Notice what the subscribers are explicitly willing to pay for.",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "entretenimiento-expresiones-artisticas",
        question:
          "¿Qué opción sustituye con mayor precisión léxica de nivel B2–C1 la frase básica *«La película tiene un final muy aburrido y esperado»*?",
        options: [
          "El filme ofrece un argumento entretenido y lleno de sorpresas constantes",
          "La obra presenta una historia larga con personajes simpáticos y modernos",
          "El desenlace peca de predecible y resta fuerza dramática al relato",
          "La película acaba rápidamente con una escena divertida pero algo corta",
        ],
        answerIndex: 2,
        explanation:
          "**El desenlace peca de predecible** ('the ending suffers from being predictable') accurately captures 'expected/boring ending' in authentic C1 film-criticism register. The other options change the meaning or stay at A2/B1 vague vocabulary.",
        hints: [
          "Look for the exact Spanish noun for 'ending/denouement' (*desenlace*).",
          "Which verbal phrase idiomatically means 'suffers from being / errs on the side of'?",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "comunicacion-medios-redes",
        question:
          "En un ejercicio de Verdadero/Falso con justificación en la Prueba 2, ¿qué práctica garantiza no perder el punto por exceso de texto?",
        options: [
          "Copiar únicamente la frase mínima exacta del texto que demuestra la respuesta",
          "Transcribir el párrafo entero para asegurar que la idea correcta quede dentro",
          "Parafrasear toda la noticia con palabras propias sin citar ninguna expresión",
          "Añadir tu opinión personal sobre el tema al final de la cita seleccionada",
        ],
        answerIndex: 0,
        explanation:
          "IB Paper 2 Reading markschemes require the **exact minimal Spanish justification phrase** proving True/False. Copying whole irrelevant paragraphs or contradicting clauses forfeits the mark, and adding personal opinion is strictly incorrect.",
        hints: [
          "Think about how IB Paper 2 Reading examiners mark justification quotes.",
          "More text is NOT safer if extra words dilute or contradict the proof.",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "entretenimiento-expresiones-artisticas",
        question:
          "¿Qué rasgo caracteriza habitualmente la obra pictórica de Frida Kahlo dentro del patrimonio cultural mexicano?",
        options: [
          "La pintura exclusivamente paisajística de grandes rascacielos modernos",
          "La imitación estricta de retratos cortesanos europeos sin elementos locales",
          "La creación de anuncios comerciales digitales para marcas internacionales",
          "El autorretrato simbólico que fusiona dolor íntimo, género y raíces indígenas",
        ],
        answerIndex: 3,
        explanation:
          "Frida Kahlo's iconic self-portraits (*autorretratos*) fuse intimate physical and emotional pain with gender identity and pre-Hispanic/indigenous Mexican symbolism (*la mexicanidad*), rejecting passive European imitation.",
        hints: [
          "Recall Kahlo's signature genre (*autorretratos*) and visual motifs (Tehuana dress, Mexican flora/fauna).",
          "Connect her personal biography with Mexican cultural identity.",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "comunicacion-medios-redes",
        question:
          "Un estudiante escribe en su artículo: *«Actualmente, muchas noticias falsas no son reales y debemos soportar el periodismo independiente.»* ¿Qué **dos falsos amigos** ha cometido?",
        options: [
          "Ha confundido «noticias» con «artículos» y «periodismo» con «periódico»",
          "Ha usado «actualmente» por «en realidad» y «soportar» en lugar de «apoyar»",
          "Ha usado «muchas» en femenino y «debemos» en primera persona plural",
          "Ha confundido «falsas» con «ficticias» y «reales» con «verdaderas»",
        ],
        answerIndex: 1,
        explanation:
          "*Actualmente* means 'currently' (not 'actually' → **en realidad**), and *soportar* means 'to tolerate/put up with' (not 'to support' → **apoyar**). Both are classic post-IGCSE English-to-Spanish false friends that blur meaning.",
        hints: [
          "Check the true Spanish meaning of *actualmente* and *soportar*.",
          "How do you actually say 'to support independent journalism' in Spanish?",
        ],
      },
      {
        id: "3-ingenio-humano-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "entretenimiento-expresiones-artisticas",
        question:
          "¿Qué debate cultural plantea con mayor precisión el auge global del *streaming* musical y audiovisual en español?",
        options: [
          "Si las plataformas digitales permiten reproducir sonido en dispositivos móviles",
          "Si los músicos hispanohablantes siguen utilizando instrumentos acústicos tradicionales",
          "Si la proyección global fortalece la identidad cultural o homogeneíza los estilos locales",
          "Si las salas de cine desaparecerán por completo antes de finalizar el próximo mes",
        ],
        answerIndex: 2,
        explanation:
          "At IB B2–C1 level, the core cultural debate around global streaming (*Spotify, Netflix*) weighs heightened international visibility of Hispanic creators against algorithmic homogenisation of regional dialects, genres, and aesthetics.",
        hints: [
          "Look for the answer that frames a genuine *two-sided IB cultural tension*.",
          "Compare global visibility versus local authenticity.",
        ],
      },
    ],
  },
  {
    id: "3-ingenio-humano-m2",
    title: "MCQ Paper 2: Science, Tech, Digital Divide & Passive Voice (SL Core)",
    level: "SL",
    questions: [
      {
        id: "3-ingenio-humano-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "Elige la transformación correcta a **pasiva refleja** de: *«Los laboratorios desarrollan nuevas terapias genéticas.»*",
        options: [
          "Se desarrolla nuevas terapias genéticas.",
          "Se desarrollan nuevas terapias genéticas.",
          "Están desarrolladas nuevas terapias genéticas.",
          "Se desarrollan a nuevas terapias genéticas.",
        ],
        answerIndex: 1,
        explanation:
          "*Nuevas terapias genéticas* is an inanimate **plural** subject, so the *pasiva refleja* verb MUST agree in plural: **Se desarrollan nuevas terapias genéticas**. Singular *se desarrolla* breaks agreement, *están desarrolladas* expresses a static result, and personal *a* is only for humans.",
        hints: [
          "Is *nuevas terapias genéticas* singular or plural, human or inanimate?",
          "In *pasiva refleja*, the verb matches the inanimate subject in number.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Cuál de las siguientes oraciones emplea correctamente el **se impersonal** con objeto directo de persona?",
        options: [
          "En el congreso de Bilbao se premiaron a tres investigadoras jóvenes.",
          "En el congreso de Bilbao se premian a las científicas destacadas.",
          "En el congreso de Bilbao se fueron premiadas a tres investigadoras.",
          "En el congreso de Bilbao se premió a tres investigadoras jóvenes.",
        ],
        answerIndex: 3,
        explanation:
          "When a human direct object is preceded by personal **a** (*a tres investigadoras jóvenes*), it cannot serve as the grammatical subject. Spanish therefore requires **se impersonal** in the 3rd person **singular**: **se premió a...** (never plural *se premiaron a* or *se premian a*).",
        hints: [
          "Spot the personal preposition **a** before *tres investigadoras*.",
          "Remember the P-A-S-E rule: **A** personal → *se* MUST stay 3rd person singular!",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "Completa la **pasiva perifrástica** respetando la concordancia y la preposición del agente: *«Las dos plantas solares ________ (inaugurar, pretérito) ________ el Ministerio de Energía.»*",
        options: [
          "fueron inauguradas / por",
          "fueron inaugurados / por",
          "fueron inauguradas / para",
          "estuvieron inauguradas / de",
        ],
        answerIndex: 0,
        explanation:
          "*Las dos plantas solares* is **feminine plural**, requiring *ser* in 3rd pl. preterite (**fueron**) + feminine plural participle (**inauguradas**) + agent preposition **por** (never *para* or *de*).",
        hints: [
          "Check the gender and number of *las dos plantas solares*.",
          "Which preposition always introduces the agent in a Spanish passive sentence?",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Qué diferencia de significado existe entre *«Los datos **fueron cifrados** ayer»* y *«Los datos **están cifrados** desde ayer»*?",
        options: [
          "La primera expresa una hipótesis futura y la segunda narra un suceso pasado",
          "Ambas tienen significado idéntico, pero la segunda es gramaticalmente incorrecta",
          "La primera describe la acción de cifrar y la segunda describe el estado resultante",
          "La primera omite siempre el sujeto y la segunda obliga a incluir un agente con «por»",
        ],
        answerIndex: 2,
        explanation:
          "*Ser + participio* (*fueron cifrados*) expresses the **dynamic action/process** of encrypting, whereas *estar + participio* (*están cifrados*) expresses the **resulting state** of already being encrypted.",
        hints: [
          "Recall the contrast between *ser + participio* and *estar + participio*.",
          "One focuses on the action happening; the other describes the finished condition.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Define",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Qué fenómeno describe exactamente el concepto de **brecha digital** en el mundo hispanohablante?",
        options: [
          "El fallo técnico temporal que sufre una red social cuando se actualiza su servidor",
          "La desigualdad en el acceso a internet, dispositivos y competencias digitales",
          "La diferencia estética entre teléfonos diseñados en Europa y en América Latina",
          "El límite de edad legal fijado por los gobiernos para abrir cuentas digitales",
        ],
        answerIndex: 1,
        explanation:
          "**La brecha digital** refers to structural inequality in access to broadband connectivity, hardware, and digital literacy—for instance between urban capitals and rural Andean communities or *la España vaciada*.",
        hints: [
          "What does the Spanish noun *brecha* mean literally ('gap / divide')?",
          "Think of rural vs urban access to fibre internet and online education.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Por qué se considera problemático el modelo industrial de **obsolescencia programada** en los dispositivos electrónicos?",
        options: [
          "Porque acorta artificialmente la vida útil de los aparatos y multiplica la basura electrónica",
          "Porque impide que los fabricantes lancen actualizaciones de seguridad para sus clientes",
          "Porque obliga a las empresas tecnológicas a reparar gratuitamente los equipos durante veinte años",
          "Porque reduce drásticamente el consumo energético de los centros de datos internacionales",
        ],
        answerIndex: 0,
        explanation:
          "*La obsolescencia programada* is the deliberate design of products with artificially shortened lifespans so consumers replace them sooner, driving unsustainable resource extraction and *residuos electrónicos* (e-waste).",
        hints: [
          "Break down *obsolescencia* (becoming outdated) + *programada* (planned in advance).",
          "Connect rapid device replacement to environmental waste.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "Completa esta norma científica con el participio irregular correcto: *«Todas las patentes biotecnológicas fueron ________ (descubrir) y ________ (escribir) por el mismo equipo.»*",
        options: [
          "descubridas / escribiendo",
          "descubiertos / escritos",
          "descubridos / escritas",
          "descubiertas / escritas",
        ],
        answerIndex: 3,
        explanation:
          "*Las patentes* is **feminine plural**, and both *descubrir* (*descubierto*) and *escribir* (*escrito*) have irregular past participles → **descubiertas** and **escritas**.",
        hints: [
          "Check the gender of *la patente* (feminine!).",
          "Both *descubrir* and *escribir* have irregular `-to` past participles.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Por qué el español periodístico prefiere *«Se prohibió la venta de datos»* frente a *«La venta de datos fue prohibida»* cuando no se menciona al agente?",
        options: [
          "Porque la pasiva con «ser» es gramaticalmente incorrecta en el tiempo pretérito",
          "Porque la pasiva refleja resulta más natural e idiomática cuando se omite el agente",
          "Porque el pronombre «se» transforma el verbo principal en modo subjuntivo formal",
          "Porque los sustantivos femeninos nunca admiten concordancia con el verbo «ser»",
        ],
        answerIndex: 1,
        explanation:
          "Although *ser + participio* is grammatically valid, Spanish strongly prefers *pasiva refleja* (*se + verbo*) when no agent (*por...*) is named; overusing agentless *ser* passives sounds like a stiff English calque.",
        hints: [
          "Think about natural Spanish style vs literal translation from English.",
          "When is *ser + participio* most justified in Spanish?",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Cuál es un ejemplo real y relevante de innovación energética y científica en Chile ideal para citar en el Oral Individual o la Prueba 1?",
        options: [
          "La sustitución total de las universidades públicas por escuelas de cocina tradicional",
          "La prohibición estatal de instalar telescopios internacionales en zonas desérticas",
          "Las plantas termosolares y el observatorio astronómico ALMA en Atacama",
          "El cierre definitivo de toda red eléctrica renovable en favor del carbón importado",
        ],
        answerIndex: 2,
        explanation:
          "Chile's Atacama Desert combines extreme solar radiation and crystal-clear skies, hosting landmark solar facilities (*Cerro Dominador*) and the international **ALMA** radio-astronomy array—an authentic Hispanic Theme 3 example.",
        hints: [
          "Think of what geographical advantage the Atacama Desert offers for both energy and astronomy.",
          "Look for the real scientific infrastructure located in northern Chile.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "Completa esta frase de un *informe* sobre IA educativa eligiendo el conector de finalidad y el modo correctos: *«Es imprescindible invertir en formación docente ________ las herramientas digitales ________ (reducir) la desigualdad.»*",
        options: [
          "para que / reduzcan",
          "para que / reducen",
          "porque / reduzcan",
          "por eso / reducirán",
        ],
        answerIndex: 0,
        explanation:
          "**Para que** (part of ESCAPA) ALWAYS triggers the subjunctive when expressing purpose with two different subjects. Present subjunctive of *reducir* (3rd pl., `-zc-` stem) → **reduzcan**.",
        hints: [
          "Check the ESCAPA rule for *para que*.",
          "Remember the irregular *yo* stem of *reducir* (*reduzco*) used to form the present subjunctive.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Cuál de las siguientes oraciones contiene un **error de concordancia** en el uso de *se*?",
        options: [
          "En este centro se analizan miles de secuencias genéticas cada semana.",
          "Se recomienda desactivar la geolocalización en aplicaciones desconocidas.",
          "Durante la feria científica se entrevistó a quince inventores escolares.",
          "En la facultad de medicina se formaron a doscientos médicos en robótica.",
        ],
        answerIndex: 3,
        explanation:
          "*«Se formaron a doscientos médicos»* is incorrect because *a doscientos médicos* is a human direct object with personal **a**, requiring **se impersonal** in singular: *Se **formó** a doscientos médicos*. The other three sentences agree accurately.",
        hints: [
          "Check every sentence for the personal **a** before a plural human noun.",
          "If **a** + plural people appears, can the verb ever be plural with *se*?",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Qué aportación convirtió a la científica española Margarita Salas en un referente internacional de la biotecnología?",
        options: [
          "La dirección de la primera película española premiada en el festival de Cannes",
          "El descubrimiento de la ADN polimerasa del virus Phi29 para amplificar ADN",
          "El diseño arquitectónico de la fachada moderna de La Sagrada Família",
          "La fundación del primer diario deportivo digital de América Latina",
        ],
        answerIndex: 1,
        explanation:
          "Margarita Salas (CSIC) discovered the **Phi29 DNA polymerase**, an enzyme able to amplify tiny traces of DNA accurately—crucial for forensics, oncology, and genomics, and the highest-earning patent of Spain's CSIC.",
        hints: [
          "Recall which Spanish molecular biologist's enzyme revolutionised DNA amplification.",
          "Eliminate arts, architecture, and sports journalism.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Interpret",
        guideRef: "comunicacion-medios-redes",
        question:
          "Lee este titular de prensa: *«Se aprueban nuevas medidas para frenar la huella digital de menores en redes.»* ¿Qué estructura gramatical y sentido transmite el titular?",
        options: [
          "Pasiva refleja plural: informa de la aprobación oficial sin nombrar al agente",
          "Se impersonal singular: entrevista directamente a los menores afectados",
          "Pasiva de resultado con estar: describe un estado anterior a la ley",
          "Voz activa reflexiva: afirma que las medidas se aprobaron a sí mismas",
        ],
        answerIndex: 0,
        explanation:
          "*Se aprueban nuevas medidas* is a classic journalistic **pasiva refleja**: *nuevas medidas* is an inanimate plural subject, so the verb takes 3rd pl. *aprueban* while omitting the legislative agent for headline concision.",
        hints: [
          "Is *nuevas medidas* human or inanimate? Singular or plural?",
          "Why does a newspaper headline omit *por el Parlamento*?",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "¿Qué oración expresa correctamente una hipótesis improbable sobre la automatización laboral usando una oración condicional de tipo 2?",
        options: [
          "Si las máquinas sustituyen todos los empleos, los gobiernos crearían una renta básica.",
          "Si las máquinas sustituirían todos los empleos, los gobiernos crearían una renta básica.",
          "Si las máquinas sustituyeran todos los empleos, los gobiernos crearían una renta básica.",
          "Si las máquinas hayan sustituido todos los empleos, los gobiernos crearon una renta básica.",
        ],
        answerIndex: 2,
        explanation:
          "Type 2 hypothetical *si*-clauses ALWAYS pair **`si` + imperfect subjunctive (`-ra/-se`) → simple conditional**: *Si las máquinas **sustituyeran**..., los gobiernos **crearían**...*. Never put conditional (*sustituirían*) directly after *si*!",
        hints: [
          "Never use the conditional tense immediately after *si* ('if').",
          "Type 2 hypothetical = *Si* + imperfecto de subjuntivo → condicional simple.",
        ],
      },
      {
        id: "3-ingenio-humano-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "tecnologia-innovacion-cientifica",
        question:
          "En un *informe formal* sobre tecnología rural para el Ministerio de Educación, ¿qué enunciado mantiene el registro y la estructura más adecuados?",
        options: [
          "Oye, ¡qué rollo que en los pueblos no haya wifi ni ordenadores decentes!",
          "A mí personalmente me da muchísima pena que los niños no puedan jugar online.",
          "¿Y tú qué opinas? ¡Déjame tu comentario abajo con #BrechaDigitalRural!",
          "Se recomienda desplegar fibra óptica rural y dotar a los centros de equipos actualizados.",
        ],
        answerIndex: 3,
        explanation:
          "A formal *informe* for a ministry demands impersonal, objective register (*Se recomienda + infinitivo*) and actionable policy recommendations. Colloquial slang, emotional *yo*, and hashtag comment prompts fit informal messages or blogs.",
        hints: [
          "Check the target audience (*el Ministerio de Educación*) and text type (*informe formal*).",
          "Which option uses objective impersonal *se* and formal policy lexis?",
        ],
      },
    ],
  },
  {
    id: "3-ingenio-humano-m3",
    title: "MCQ Paper 3: [HL] AI Ethics, Media Bias, Censorship & C1 Mastery",
    level: "HL",
    questions: [
      {
        id: "3-ingenio-humano-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Interpret",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Lee esta frase de una columna de opinión: *«La plataforma calificó la desaparición repentina de voces críticas como una “incidencia técnica menor”.»* ¿Qué indican las comillas en *«incidencia técnica menor»*?",
        options: [
          "Que el periodista confirma plenamente la explicación técnica de la plataforma",
          "Que la expresión pertenece a un poema clásico citado como adorno literario",
          "Que el autor se distancia con escepticismo e ironía del eufemismo corporativo",
          "Que el texto traduce literalmente una ley aprobada por unanimidad parlamentaria",
        ],
        answerIndex: 2,
        explanation:
          "In HL opinion journalism, *comillas de distanciamiento* (scare quotes) signal scepticism and irony: the journalist exposes *«incidencia técnica menor»* as a corporate euphemism disguising potential censorship.",
        hints: [
          "Notice the contrast between *desaparición repentina de voces críticas* and *incidencia técnica menor*.",
          "Why does a journalist put quotation marks around a company's official excuse?",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Completa esta oración de nivel C1 con la forma verbal obligatoria: *«Numerosos modelos generativos reproducen prejuicios históricos; de ahí que ________ (convenir) auditar sus conjuntos de datos.»*",
        options: [
          "conviene",
          "convenga",
          "convino",
          "convendrá",
        ],
        answerIndex: 1,
        explanation:
          "The C1 consequence connector **de ahí que** ALWAYS requires the subjunctive mood (never indicative!). Present subjunctive of *convenir* (3rd person singular, like *venir* → *venga*) is **convenga**.",
        hints: [
          "Recall the invariable mood rule after **de ahí que**.",
          "Conjugate *convenir* (compound of *venir*) in 3rd person singular present subjunctive.",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] ¿Por qué proyectos públicos como **ALIA / MarIA** en España resultan estratégicos frente al sesgo algorítmico?",
        options: [
          "Porque prohíben el uso del inglés en todas las universidades europeas",
          "Porque sustituyen la enseñanza de idiomas extranjeros por traductores automáticos",
          "Porque eliminan los derechos de autor de las editoriales hispanohablantes",
          "Porque entrenan modelos abiertos con datos rigurosos en español y lenguas cooficiales",
        ],
        answerIndex: 3,
        explanation:
          "Most commercial LLMs are heavily English-skewed. Initiatives like Barcelona Supercomputing Center's **ALIA / MarIA** build open, auditable corpora in Spanish and co-official languages (*catalán, euskera, gallego*) to reduce linguistic and cultural bias.",
        hints: [
          "Think about what happens when an AI model is trained mostly on English web data.",
          "How do open Spanish-language corpora counter linguistic under-representation?",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Compara estos dos titulares sobre el mismo suceso:\n- Titular 1: *«La tecnológica despide a 400 ilustradores tras adoptar IA generativa.»*\n- Titular 2: *«Se produce un reajuste de plantilla en la transición hacia flujos creativos automatizados.»*\n¿Qué doble estrategia de encuadre (*framing*) aplica el Titular 2?",
        options: [
          "Oculta al responsable mediante pasiva refleja y suaviza el despido con un eufemismo",
          "Usa tono sarcástico y comillas irónicas para denunciar la precariedad laboral",
          "Aporta cifras más exactas e identifica explícitamente al director responsable",
          "Adopta el formato de entrevista directa para dar voz a los ilustradores despedidos",
        ],
        answerIndex: 0,
        explanation:
          "Headline 2 hides the company's agency using agentless *se produce* and replaces the blunt verb *despide* ('fires') + *400 ilustradores* with the corporate euphemism *reajuste de plantilla* ('workforce adjustment').",
        hints: [
          "Compare who is visibly acting in Headline 1 vs Headline 2.",
          "Look at how the phrase *reajuste de plantilla* softens *despide a 400 ilustradores*.",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Interpret",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Lee este extracto: *«¡Qué avance tan conmovedor que un algoritmo nos ahorre el agotador esfuerzo de leer una novela o sentir empatía ante un cuadro!»* ¿Cuál es el tono predominante del autor?",
        options: [
          "Entusiasta y optimista ante la eficiencia cultural de las máquinas",
          "Neutro y puramente informativo sobre el consumo artístico juvenil",
          "Irónico y mordaz frente a la deshumanización de la experiencia artística",
          "Nostálgico y conciliador con las grandes plataformas tecnológicas",
        ],
        answerIndex: 2,
        explanation:
          "Calling reading a novel or feeling empathy an 'exhausting chore' (*el agotador esfuerzo*) after an exclamative *¡Qué avance tan conmovedor!* is classic **antiphrasis/irony**, conveying sharp satire against reducing art to algorithmic efficiency.",
        hints: [
          "Would a genuine art critic call feeling empathy an 'exhausting effort' seriously?",
          "Look at the clash between *¡Qué avance tan conmovedor!* and what follows.",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] ¿En qué se diferencia principalmente la **censura artística contemporánea** en entornos digitales de la censura estatal durante dictaduras del siglo XX?",
        options: [
          "Hoy los artistas disponen de protección legal absoluta frente a cualquier algoritmo",
          "En el siglo XX ningún cineasta hispano empleó metáforas para esquivar la censura",
          "Actualmente solo se censuran libros impresos mientras las redes carecen de filtros",
          "Hoy suele operar mediante moderación algorítmica opaca, presión comercial y autocensura",
        ],
        answerIndex: 3,
        explanation:
          "Whereas 20th-century regimes (e.g. Francoism, Southern Cone dictatorships) used explicit state censors—often evaded via allegory—modern creators frequently confront opaque algorithmic throttling (*shadow-banning*), commercial risk aversion, and *autocensura*.",
        hints: [
          "Contrast a state censorship office with modern platform moderation and online backlash.",
          "Look for the terms *moderación algorítmica opaca* and *autocensura*.",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Elige la estructura concesiva de nivel C1 que integra con mayor precisión un contraargumento y su refutación en un ensayo de Prueba 1:",
        options: [
          "La IA es mala y además siempre miente, por eso nadie debería usarla jamás.",
          "Si bien la IA agiliza procesos técnicos, lejos de igualar el ingenio humano amenaza derechos de autor.",
          "Primero hablaré de las cosas buenas de la IA y después diré todas las cosas malas.",
          "Aunque la IA sea muy rápida, pero sin embargo también tiene bastantes desventajas grandes.",
        ],
        answerIndex: 1,
        explanation:
          "Combining *Si bien...* (concession) with *lejos de + infinitivo* (incisive rebuttal) demonstrates C1 cohesion and nuanced evaluation. Stacking *aunque... pero sin embargo* is redundant/ungrammatical, while the other two stay at basic B1 structure.",
        hints: [
          "Watch out for the classic Spanish error of stacking *aunque* + *pero* in the same sentence.",
          "Look for crisp C1 connectors: *Si bien...* + *lejos de + infinitivo*.",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] ¿Cuál es el núcleo ético del conflicto sobre **derechos de autor** (*propiedad intelectual*) en la inteligencia artificial generativa?",
        options: [
          "Los ordenadores consumen menos electricidad al copiar cuadros antiguos que modernos",
          "Los museos prohíben que los visitantes tomen apuntes escritos sobre obras expuestas",
          "Muchos modelos se entrenan masivamente con obras protegidas sin permiso ni compensación",
          "Las editoriales hispanas han dejado de publicar autores vivos desde hace una década",
        ],
        answerIndex: 2,
        explanation:
          "The central copyright dispute revolves around tech firms scraping millions of copyrighted novels, artworks, and songs for AI training without obtaining creators' consent (*sin permiso*) or offering fair remuneration (*sin compensación*).",
        hints: [
          "Think about how generative AI learns to imitate an illustrator's or novelist's style.",
          "What two rights of the original creator are bypassed during unconsented data scraping?",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Compara el matiz entre estas dos frases:\n1. *«Aunque los algoritmos **cometen** errores, muchos tribunales los consultan.»*\n2. *«Aunque los algoritmos **cometan** errores, debemos exigir auditorías humanas.»*\n¿Por qué cambia el modo verbal tras **aunque**?",
        options: [
          "El indicativo afirma un hecho conocido; el subjuntivo plantea una concesión hipotética o indiferente",
          "El indicativo es exclusivo de América Latina y el subjuntivo se usa únicamente en España",
          "El subjuntivo describe acciones ya terminadas y el indicativo expresa deseos imposibles",
          "Ambas formas son intercambiables sin ningún cambio de matiz pragmático ni comunicativo",
        ],
        answerIndex: 0,
        explanation:
          "After **aunque**, the **indicative** (*cometen*) states an acknowledged factual reality ('even though they do make mistakes'), whereas the **subjunctive** (*cometan*) frames a hypothetical or concessive 'even if / regardless of whether they make mistakes'.",
        hints: [
          "Recall the classic IB contrast: *aunque + indicativo* ('even though [fact]') vs *aunque + subjuntivo* ('even if [hypothetical]').",
          "Does the regional variety of Spanish explain *aunque* mood shifts? No!",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "comunicacion-medios-redes",
        question:
          "En un concurso de debate escolar sobre ética tecnológica, debes pronunciar un **discurso** de 450–600 palabras ante profesores y alumnos. ¿Qué recursos retóricos fortalecen el Criterio C?",
        options: [
          "Incluir direcciones postales formales, referencia de expediente y despedida «Atentamente»",
          "Emplear únicamente tablas numéricas sin dirigirte jamás de forma directa al auditorio",
          "Cerrar con etiquetas de redes sociales y pedir que le den «me gusta» a tu perfil",
          "Abrir con un vocativo claro, usar preguntas retóricas, tríadas y un cierre apelativo memorable",
        ],
        answerIndex: 3,
        explanation:
          "A persuasive IB **discurso** requires oral-rhetorical conventions: direct audience vocative (*Estimados profesores y compañeros...*), rhetorical questions, parallel triads (*tríadas*), inclusive *nosotros*, and a memorable closing appeal.",
        hints: [
          "Think about the spoken, live-audience context of a *discurso*.",
          "Eliminate conventions that belong to a *carta formal*, *informe*, or *blog*.",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Completa esta frase formal con el pronombre relativo exacto: *«El festival censuró un documental ________ dirección artística denunciaba la vigilancia masiva.»*",
        options: [
          "que su",
          "cuya",
          "cuyo",
          "lo cual",
        ],
        answerIndex: 1,
        explanation:
          "Spanish uses the possessive relative **cuyo/cuya/cuyos/cuyas** ('whose'), agreeing in gender and number with the **possessed noun** (*la dirección artística* → feminine singular → **cuya**). Writing `*que su*` is a frequent colloquial error penalised at HL!",
        hints: [
          "How do you say 'whose' in formal C1 Spanish without using colloquial *que su*?",
          "Does *cuyo/a* agree with *un documental* (masculine) or with *dirección artística* (feminine)?",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] ¿Por qué la **nominalización** (ej.: *«La proliferación de bulos erosiona la confianza»* en lugar de *«Cuando mucha gente comparte cosas falsas, la gente ya no confía»*) eleva la nota de Criterio A en Nivel Superior?",
        options: [
          "Porque alarga artificialmente el texto repitiendo los mismos verbos básicos",
          "Porque elimina la necesidad de usar tildes o concordancia de género en español",
          "Porque condensa ideas abstractas con precisión académica y evita cláusulas repetitivas",
          "Porque convierte automáticamente un editorial formal en una conversación coloquial",
        ],
        answerIndex: 2,
        explanation:
          "Nominalisation (*proliferación, erosión, regulación, transparencia*) packs complex causal arguments into crisp academic Spanish, eliminating repetitive *cuando / la gente* clauses and signalling Band 10–12 C1 sophistication.",
        hints: [
          "Compare the concision and register of the two example sentences in the stem.",
          "Think about how abstract nouns raise academic precision.",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Un estudiante de Nivel Superior termina su Prueba 1 con 380 palabras en un prompt que exige entre 450 y 600 palabras. ¿Cuál es el riesgo más probable en la calificación?",
        options: [
          "Recibirá automáticamente cero puntos en todos los criterios sin lectura del texto",
          "Obtendrá bonificación extra por haber escrito un ensayo sintético y breve",
          "Solo perderá puntos si escribió una reseña, pero nunca en un editorial",
          "Verá limitada su banda en el Criterio B por desarrollo insuficiente de ideas y matices",
        ],
        answerIndex: 3,
        explanation:
          "While IB Spanish B does not award automatic zero for falling slightly below the HL target (450–600 words), stopping at 380 words leaves counter-arguments, cultural evidence, and nuance under-developed—capping Criterion B (Message) and limiting the range of C1 language shown for Criterion A.",
        hints: [
          "Check the HL Paper 1 word-count zone: 450–600 words.",
          "Which criterion assesses depth, relevance, and full development of ideas?",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Interpret",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] Lee este párrafo: *«Nadie niega que la verificación de datos sea ardua; sin embargo, resignarse a la posverdad equivale a entregar el debate democrático al mejor postor algorítmico.»* ¿Qué metáfora central sostiene el argumento?",
        options: [
          "Compara el espacio público democrático con una subasta dominada por intereses digitales",
          "Compara el trabajo de los periodistas verificadores con un deporte olímpico profesional",
          "Presenta la posverdad como un fenómeno pasajero que desaparecerá sin intervención humana",
          "Sostiene que los algoritmos garantizan siempre elecciones transparentes y neutrales",
        ],
        answerIndex: 0,
        explanation:
          "*Entregar el debate democrático al mejor postor algorítmico* ('handing democratic debate over to the highest algorithmic bidder') uses an **auction/commercial metaphor** (*al mejor postor*) to warn that monetised engagement algorithms corrupt civic discourse.",
        hints: [
          "Look closely at the idiom *al mejor postor* ('to the highest bidder').",
          "What sphere of human activity uses 'highest bidder', and what does the author warn is being sold?",
        ],
      },
      {
        id: "3-ingenio-humano-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "etica-ia-creatividad-hl",
        question:
          "[HL] ¿Qué cláusula completa correctamente esta reflexión retrospectiva sobre la regulación tecnológica? *«Si las plataformas ________ (auditar) sus algoritmos antes de 2020, hoy ________ (evitarse) miles de campañas de desinformación.»*",
        options: [
          "auditarían / se evitaron",
          "hubieran auditado / se habrían evitado",
          "hayan auditado / se evitarían",
          "auditen / se habrán evitado",
        ],
        answerIndex: 1,
        explanation:
          "A Type 3 counterfactual past regret *si*-clause requires **`si` + pluperfect subjunctive (`hubieran auditado`) → compound conditional (`se habrían evitado`)** (with plural passive *se* agreeing with *miles de campañas*!).",
        hints: [
          "Notice the past counterfactual condition ('before 2020'): Type 3 *si*-clause.",
          "Type 3 pairs *si* + pluscuamperfecto de subjuntivo → condicional compuesto.",
        ],
      },
    ],
  },
];
