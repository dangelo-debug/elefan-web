// Páginas de soluciones: una por cada producto de entrada, pensadas para búsquedas en Google.
// Para editar textos, casos o preguntas, basta con modificar este archivo.

export const pasos = [
  { titulo: "Conversamos", texto: "Una llamada breve para entender el objetivo, la audiencia y los plazos. Sin compromiso." },
  { titulo: "Te proponemos una idea", texto: "Un concepto creativo con alternativas de alcance, para que elijas la que calza con tu presupuesto." },
  { titulo: "Producimos", texto: "Guion, diseño, rodaje, animación o puesta en escena, con revisiones acordadas desde el inicio." },
  { titulo: "Entregamos y acompañamos", texto: "Te entregamos todo listo para usar y te ayudamos a que llegue bien a tu gente." },
];

export const logos = [
  { src: "/images/Inacap-Logo_v03.png", alt: "INACAP" },
  { src: "/images/LogoCOPEC-9_v03.png", alt: "Copec" },
  { src: "/images/Logo_ACHS.png", alt: "ACHS", oscuro: true },
  { src: "/images/logo-enaex.png", alt: "Enaex", oscuro: true },
  { src: "/images/logo-softserve_V03.png", alt: "SoftServe" },
  { src: "/images/cencosudscotiabank-1.png", alt: "Cencosud Scotiabank" },
  { src: "/images/BAnco-Falabella-Logo.png", alt: "Banco Falabella" },
  { src: "/images/levis.png", alt: "Levi's" },
];

const preguntaPrecio = {
  q: "¿Cuánto cuesta?",
  a: "Cada proyecto es distinto. Después de una conversación breve te enviamos una propuesta con alternativas de alcance, para que elijas la que mejor calza con tu presupuesto sin perder calidad.",
};

export const landings = [
  {
    slug: "eventos-corporativos-fin-de-ano",
    nombreCorto: "Fiestas de fin de año y eventos",
    seoTitle: "Fiesta de fin de año y eventos corporativos | Elefan",
    seoDescription: "Diseñamos y producimos fiestas de fin de año, premiaciones y kick-off para empresas en Santiago. Concepto, show, video y activaciones con sello propio.",
    h1: "La fiesta de fin de año que tu equipo va a recordar",
    intro: "Diseñamos el concepto, el show, los videos y las activaciones de tu cierre de año. Una celebración con historia propia, pensada para tu gente y no armada por catálogo.",
    heroImage: "/images/projects/DSC_0190.jpg",
    heroAlt: "Show en el escenario durante la fiesta de fin de año de Jardines Vitamina, producida por Elefan",
    aviso: "Las fechas de diciembre se toman temprano. Mientras antes conversemos, más espacio hay para la idea.",
    problemaTitulo: "El cierre de año es el momento en que toda la empresa está escuchando",
    problema: [
      "Es la única instancia del año en que todos están en la misma sala y con ganas de celebrar. Pero muchas veces se resuelve con un salón, un DJ y un video de fotos con música.",
      "Ahí se pierde una oportunidad enorme: reconocer a las personas, cerrar el año con sentido y dejar instalado el ánimo para lo que viene.",
    ],
    formatos: [
      { titulo: "Concepto y puesta en escena", texto: "Una idea central que ordena todo: la ambientación, la conducción, la gráfica y el relato de la noche." },
      { titulo: "Show y momentos internos", texto: "Números artísticos, presentaciones de las áreas y dinámicas donde el equipo es el protagonista." },
      { titulo: "Video de cierre de año", texto: "La historia del año contada desde las personas, no un resumen de fotos con música de fondo." },
      { titulo: "Premiaciones y reconocimientos", texto: "Categorías, galardones y momentos diseñados para que reconocer se sienta especial." },
      { titulo: "Kick-off y lanzamientos", texto: "Si el próximo año parte con un nuevo plan, una escuela o una estrategia, convertimos ese inicio en una experiencia." },
    ],
    casos: [
      { slug: "fiesta-red-de-jardines-vitamina", texto: "Más de 700 personas, un show con números artísticos y presentaciones de cada área de la empresa." },
      { slug: "evento-aguas-andinas-lanzamiento-escuela-liderazgo", texto: "200 líderes reunidos en la Biofactoría La Farfana para lanzar su Escuela de Liderazgo, con un late show interno." },
      { slug: "proyecto-levis-fest-evento-levis-chile", texto: "Un festival propio en el Parque Titanium, con música en vivo, customización de ropa y actividades libres." },
    ],
    faq: [
      { q: "¿Con cuánta anticipación hay que empezar?", a: "Depende del tamaño del evento: mientras antes, más alternativas de lugar, show y producción. Si tu fecha está cerca, escríbenos igual y te decimos con honestidad qué alcanza a hacerse bien." },
      { q: "¿Se encargan también del lugar, la comida y la técnica?", a: "Podemos coordinar la producción completa o trabajar junto a tu equipo y tus proveedores actuales. Lo definimos según lo que ya tengas resuelto." },
      { q: "¿Trabajan con empresas de distintos tamaños?", a: "Sí. Hemos producido desde encuentros para 200 líderes hasta celebraciones para más de 700 personas." },
      preguntaPrecio,
    ],
    whatsapp: "Hola Elefan, vi su página de eventos de fin de año y quiero conversar sobre la celebración de nuestra empresa.",
  },
  {
    slug: "video-corporativo",
    nombreCorto: "Video corporativo",
    seoTitle: "Productora de video corporativo en Santiago | Elefan",
    seoDescription: "Videos corporativos, institucionales y de marca empleadora: guion, producción, animación y postproducción. Historias que tu audiencia ve completas.",
    h1: "Videos corporativos que la gente ve hasta el final",
    intro: "Escribimos, producimos y editamos videos institucionales, de cultura y de marca empleadora. Partimos por la historia, porque un buen guion es lo que hace que un video se vea completo.",
    heroImage: "/images/Slider-Hotel-SET.jpg",
    heroAlt: "Fotograma de Hotel SET, serie educativa producida por Elefan para INACAP",
    problemaTitulo: "La mayoría de los videos corporativos se parecen entre sí",
    problema: [
      "Planos de oficina, música motivacional y un gerente hablando a cámara. Se aprueban, se publican y casi nadie los termina de ver.",
      "Nosotros empezamos al revés: buscamos la historia que tu audiencia necesita escuchar y desde ahí elegimos el formato, sea acción real, animación 2D, stop motion o una mezcla.",
    ],
    formatos: [
      { titulo: "Video institucional", texto: "Quiénes son, qué hacen y por qué importa, contado con una idea y no con una lista de logros." },
      { titulo: "Cultura, propósito y valores", texto: "Piezas que convierten conceptos abstractos en situaciones y personajes reconocibles." },
      { titulo: "Marca empleadora", texto: "Videos para atraer talento mostrando cómo se vive de verdad el trabajo en tu empresa." },
      { titulo: "Lanzamientos y campañas internas", texto: "El video que abre un proyecto, un cambio o una nueva etapa y le da tono a todo lo que viene." },
      { titulo: "Series con personajes", texto: "Cuando un mensaje no cabe en un solo video, creamos una serie con capítulos y un universo propio, como Hotel SET." },
    ],
    casos: [
      { slug: "hotel-set-el-servicio-lo-es-todo", texto: "Una serie educativa para la industria hotelera, creada junto a INACAP y la consultora Flexworking." },
      { slug: "talentos-globales-lanzamiento-de-una-marca-empleadora-en-tecnologia", texto: "Campaña de marca empleadora para presentar a una empresa tecnológica global en el mercado local." },
      { slug: "sensibilizando-sobre-la-salud-mental-estas-bien", texto: "Un video interno sobre salud mental construido alrededor de una pregunta simple: ¿estás bien?" },
    ],
    faq: [
      { q: "¿Hacen todo el proceso?", a: "Sí: guion, producción, rodaje, animación 2D, stop motion y postproducción. Trabajamos con una red estable de especialistas que se arma según lo que pide cada proyecto." },
      { q: "¿Conviene animación o acción real?", a: "Depende del mensaje, la audiencia y el presupuesto. En la propuesta te explicamos qué formato recomendamos y por qué." },
      { q: "¿Cuánto tarda un video?", a: "Depende del formato y de la complejidad. En la primera conversación te proponemos un calendario concreto con las etapas de revisión." },
      preguntaPrecio,
    ],
    whatsapp: "Hola Elefan, vi su página de video corporativo y quiero conversar sobre un proyecto.",
  },
  {
    slug: "capsulas-animadas-capacitacion",
    nombreCorto: "Cápsulas de capacitación",
    seoTitle: "Cápsulas animadas y e-learning para capacitación | Elefan",
    seoDescription: "Convertimos contenidos de capacitación en cápsulas animadas, microlearning y series formativas con personajes. Para RR.HH., capacitación y desarrollo.",
    h1: "Capacitaciones que se ven como una serie, no como una presentación",
    intro: "Transformamos contenidos técnicos, normativos o de inducción en cápsulas animadas, personajes y series formativas que tus equipos sí terminan. Funcionan en tu plataforma de e-learning, en pantallas internas o en el celular.",
    heroImage: "/images/projects/Portada-valores-1.png",
    heroAlt: "Personajes animados creados por Elefan para una serie formativa",
    problemaTitulo: "El contenido es importante. El formato lo vuelve invisible.",
    problema: [
      "Procedimientos, normativas, inducciones y cursos obligatorios suelen llegar como láminas o documentos. Se cumplen, pero no se aprenden.",
      "Cuando el mismo contenido llega con una historia y un personaje, la gente lo ve, lo comenta y lo recuerda.",
    ],
    formatos: [
      { titulo: "Cápsulas animadas", texto: "Videos breves en animación 2D que explican un tema con claridad y humor, sin perder rigor." },
      { titulo: "Microlearning", texto: "Un concepto por pieza, pensado para verse entre una tarea y otra." },
      { titulo: "Personaje guía", texto: "Un rostro para tu área de capacitación que acompaña todos los cursos y se vuelve parte de la cultura." },
      { titulo: "Series formativas", texto: "Capítulos con historia y continuidad para programas largos, como escuelas de liderazgo o de servicio." },
      { titulo: "Diseño instruccional", texto: "Ordenamos el contenido con lógica pedagógica antes de producir una sola imagen." },
    ],
    casos: [
      { slug: "alerta-aml-educacion-innovadora-en-la-lucha-contra-el-fraude-financiero", texto: "Serie animada para Cencosud Scotiabank que convirtió la prevención del lavado de dinero en lecciones memorables." },
      { slug: "proyecto-mateo-cencosud-scotiabank", texto: "Un personaje que reemplazó las láminas de PowerPoint por videos tutoriales de ventas, inducción y procedimientos." },
      { slug: "proyecto-achs-capsulas-escuela-de-liderazgo", texto: "Serie de cápsulas didácticas para el área de Desarrollo Organizacional de la ACHS." },
    ],
    faq: [
      { q: "¿Funcionan en nuestra plataforma de e-learning?", a: "Entregamos los videos en los formatos que tu plataforma necesite. Si requiere algo específico, lo definimos al inicio del proyecto." },
      { q: "¿Quién define los contenidos?", a: "Tu equipo aporta el conocimiento técnico y nosotros lo convertimos en guion, estructura y formato. Todo pasa por tu validación antes de producirse." },
      { q: "¿Sirve para temas normativos u obligatorios?", a: "Sí. Son justamente los contenidos que más ganan con un buen formato, porque suelen ser los que menos se recuerdan." },
      preguntaPrecio,
    ],
    whatsapp: "Hola Elefan, vi su página de cápsulas de capacitación y quiero conversar sobre un proyecto.",
  },
  {
    slug: "comunicacion-interna",
    nombreCorto: "Comunicación interna",
    seoTitle: "Agencia de comunicación interna en Santiago | Elefan",
    seoDescription: "Campañas de comunicación interna, cultura, valores, cambio organizacional y employee advocacy. Ideas con sello creativo para empresas en Chile.",
    h1: "Comunicación interna que tu equipo comenta en el pasillo",
    intro: "Creamos campañas de cultura, valores, cambio y employee advocacy con una idea creativa al centro. Para que los mensajes importantes no se pierdan entre correos masivos.",
    heroImage: "/images/slide_elefan_comunicaciones-internas.jpg",
    heroAlt: "Ilustración de Elefan sobre comunicaciones internas",
    problemaTitulo: "Los mensajes internos compiten con todo lo demás",
    problema: [
      "Un correo más, un afiche más, una presentación más. Cuando todo se comunica igual, nada destaca.",
      "Nuestro trabajo es encontrar el concepto que convierte un mensaje en conversación: un personaje, un relato o una experiencia que la gente quiera compartir.",
    ],
    formatos: [
      { titulo: "Cultura, propósito y valores", texto: "Campañas que hacen tangibles los valores con personajes, historias y piezas que se quedan." },
      { titulo: "Gestión del cambio", texto: "Mudanzas, fusiones o nuevas estructuras: acompañamos el proceso con un relato que ordena y da confianza." },
      { titulo: "Employee advocacy", texto: "Programas para que tus colaboradores cuenten la empresa desde adentro, con herramientas y acompañamiento." },
      { titulo: "Planes de incentivo", texto: "Campañas que explican los beneficios con claridad y ganas de participar." },
      { titulo: "Identidad visual interna", texto: "Nombre, gráfica y tono para programas, áreas e iniciativas que necesitan una marca propia." },
    ],
    casos: [
      { slug: "creacion-de-personajes-conectando-valores-y-emociones-en-la-comunicacion-corporativa", texto: "Personajes que dieron vida a los valores de una empresa y que evolucionaron junto con ella." },
      { slug: "insiders-potenciando-la-voz-interna-en-employee-advocacy", texto: "Un programa de employee advocacy que convirtió a los colaboradores de una empresa tecnológica en embajadores." },
      { slug: "proyecto-humind-marca-2", texto: "Un hexágono como concepto para presentar el propósito de una empresa y conectar sus distintas áreas." },
    ],
    faq: [
      { q: "¿Pueden trabajar con nuestro equipo de comunicaciones?", a: "Sí, es lo más habitual. Nos sumamos como equipo creativo y de producción, respetando la estrategia y los canales que ya tienen." },
      { q: "¿Trabajan por proyecto o con fee mensual?", a: "Ambas modalidades. Por proyecto para campañas puntuales, y con fee mensual cuando la comunicación interna requiere continuidad." },
      { q: "¿Qué necesitan para partir?", a: "Una conversación sobre el objetivo, la audiencia y los plazos. Con eso te enviamos una propuesta con idea y alcance." },
      preguntaPrecio,
    ],
    whatsapp: "Hola Elefan, vi su página de comunicación interna y quiero conversar sobre un proyecto.",
  },
];
