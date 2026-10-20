import type { Dictionary } from "../index";

const es: Dictionary = {
  meta: {
    title: "Wilson Medina Arrieta | Ingeniero de Software",
    description:
      "Portafolio de Wilson Medina Arrieta, Ingeniero de Software. Backends en Go y Node.js, pagos, integraciones y la plataforma SaaS multi-tenant bed.mooba.co.",
  },
  common: {
    screenshotOf: "Captura de",
  },
  nav: {
    work: "Trabajo",
    about: "Cómo trabajo",
    contact: "Contacto",
    resume: "CV",
  },
  hero: {
    role: "Ingeniero de Software",
    photoAlt: "Retrato de Wilson Medina",
    tagline:
      "Backend en Go y Node.js, arquitectura limpia, pagos e integraciones. Llevo requerimientos ambiguos a producción.",
  },
  bed: {
    label: "Proyecto principal",
    context:
      "Plataforma SaaS para que los negocios pasen de vender por WhatsApp a tener su propia tienda en línea, desarrollada en mooba. Soy el ingeniero líder: la empecé desde cero y la llevé hasta el lanzamiento.",
    bullets: [
      "Creación de tiendas por parte del usuario, con unas 5 tiendas ya activas",
      "Billetera nativa con split de pagos entre bed y cada tienda",
      "Wompi, ePayco y retiros de la billetera con Cobru; POS de restaurantes Loggro",
      "API en Go con unos 480 endpoints (arquitectura hexagonal)",
      "RBAC, módulo de BI, zonas de entrega con Maps, Meta Pixel y Google Analytics; también me encargo del CI/CD",
    ],
    storesLabel: "Tiendas funcionando en bed",
    caseLink: "Leer el caso de estudio",
  },
  bedCase: {
    title: "bed.mooba.co: caso de estudio",
    back: "Volver al inicio",
    labels: {
      role: "Rol",
      problem: "Problema",
      decisions: "Decisiones clave",
      stack: "Stack",
      cicd: "CI/CD",
      result: "Resultado",
    },
    problem:
      "Muchos negocios vendían solo por WhatsApp. Sin tienda online, perdían la oportunidad de estar expuestos en internet. bed les da lo básico (productos, pedidos, descuentos) y también personalización de la tienda (tema, tarjetas de producto, secciones del home), conexión con analytics y píxel para seguir sus pautas, y configuración de domicilios para que el cliente complete la compra solo y no por chat. Casi todo es gratis: bed solo cobra una comisión por venta. Otros servicios te arman el sitio y lo entregan en una o dos semanas. Aquí el dueño crea su propia tienda sin conocimientos técnicos, la personalización es opcional y el soporte en español es directo con el equipo.",
    role: "Ingeniero líder en mooba. Empecé el proyecto desde cero. Otro desarrollador ayudó en el front durante los primeros meses; después trabajé principalmente con PMs, diseñadores UX/UI y stakeholders.",
    decisions: [
      "Arquitectura multi-tenant. En mooba, los clientes pedían tiendas online con frecuencia: les configurábamos Shopify o Tiendanube, o armábamos ecommerce a la medida desde cero. Una sola tecnología para todos los negocios, sin programar cada uno, era la mejor solución.",
      "Billetera nativa con split de pagos. bed necesitaba cobrar su comisión de forma automática, y Cobru fue el aliado cuyo split automático encajaba con ese modelo de comisión. También sirve a emprendedores sin pasarela de pagos ni cuenta empresarial: con unos pocos clics validan una subcuenta en el panel y ya pueden recibir pagos.",
      "Integración con el POS de restaurantes (Loggro). Nació de un negocio que ya tenía el POS pero no tenía tienda. Los pedidos llegan por la tienda de bed y, si el tenant sincronizó su cuenta de Loggro, pasan directo al POS. Lo más difícil fue adaptarme al modelo de Loggro, pensado para restaurantes, donde cada plato es una orden en sí mismo, y mapear las mesas para poder ingresar los pedidos en su plataforma.",
    ],
    stack:
      "Go (arquitectura Clean/Hexagonal), unos 480 endpoints, en 3 servicios: API, panel de administración y tiendas. Panel y tiendas construidos con Next.js.",
    cicd: "Me encargo del CI/CD: automatizado con Git y Docker. Siendo el único desarrollador, necesitaba un pipeline práctico que no me quitara más tiempo del que toma sacar features.",
    result:
      "Lleva cerca de un mes en producción, con unas 5 tiendas activas ya vendiendo. Las tiendas con pauta en redes reciben un alto volumen de visitas, y la plataforma responde bien ante ese tráfico.",
  },
  hackathon: {
    label: "1er puesto, Caribe Tech Arena Hackathon",
    title: "BioFood Connect",
    text: "Biofood Challenge, Barranquilla, mayo de 2026. Con un equipo, construí en 48 horas un backend hexagonal en Go: Claude Haiku respondiendo por WhatsApp, workers de alertas proactivas y un flujo de pagos con Wompi/Nequi.",
    repo: "Repositorio",
    post: "Publicación en LinkedIn",
    photoAlt: "El equipo de BioFood Connect en el hackatón Caribe Tech Arena",
    secondMention:
      "También participé en otro hackatón con medi-agent, sin obtener puesto.",
    secondRepo: "repositorio de medi-agent",
    moreLink: "Ver los dos hackatones",
  },
  hackathons: {
    title: "Hackatones",
    back: "Volver al inicio",
    items: [
      {
        label: "1er puesto · Caribe Tech Arena Hackathon (Biofood Challenge) · Barranquilla, mayo de 2026",
        title: "BioFood Connect",
        text: "Un MVP de 48 horas, construido con un equipo. Mi parte fue el backend en Go con arquitectura hexagonal: responde consultas por WhatsApp con Claude Haiku, corre workers que envían alertas proactivas e incluye un flujo de pagos con Wompi/Nequi. Fue elegida como la mejor solución entre los desarrolladores de la región por su ejecución técnica, su arquitectura y su utilidad como MVP.",
        stack: "Go · Claude Haiku · WhatsApp · PostgreSQL · Docker · Wompi/Nequi",
      },
      {
        label: "Hackatón Barranqui-IA 2026 · Fundación Código Abierto · mayo de 2026",
        title: "MediAgent",
        text: "Un agente de voz para los dispensarios de medicamentos en Colombia. En 2025, el 28% de las 312.500 tutelas de salud fueron por negación o demora en la entrega de medicamentos, y la ley obliga a dispensar dentro de las 48 horas siguientes a la autorización. MediAgent conecta inventario, fórmula y paciente: llama al paciente y cierra la entrega, convirtiendo una espera de 8 horas en una llamada de 3 minutos. Me encargué de configurar el agente de voz, en el código y en la plataforma, junto con los otros tres desarrolladores. No obtuvimos puesto, pero construimos un prototipo funcional en 48 horas.",
        stack: "Next.js · TypeScript · Supabase · Vapi · Deepgram · OpenAI · ElevenLabs",
      },
    ],
    photoAlts: [
      "El equipo de BioFood Connect en el hackatón Caribe Tech Arena",
      "El equipo de MediAgent en el hackatón Barranqui-IA",
      "Tablero de MediAgent con la operación del día",
    ],
  },
  agency: {
    label: "Sitios web en mooba",
    intro:
      "Desarrollados junto al equipo de diseño y desarrollo de mooba: front en Next.js y CMS en Strapi, optimizados para rendimiento y SEO.",
    items: [
      { domain: "mooba.co", line: "Renovación del sitio de la agencia." },
      { domain: "biver.com.co", line: "Sitio corporativo." },
      { domain: "thermecs.co", line: "Sitio corporativo." },
    ],
  },
  how: {
    label: "Cómo trabajo",
    points: [
      "Llevo un requerimiento desde la primera conversación hasta producción: arquitectura, pagos y CI/CD incluidos.",
      "Trabajo con PMs, diseñadores y stakeholders, porque el resultado es mejor cuando lo construimos juntos.",
      "Uso agentes de AI y las herramientas a mi alcance para lograrlo, y me quedo con la responsabilidad de la arquitectura y las decisiones.",
    ],
    education:
      "Ingeniero Mecatrónico, Universidad Autónoma del Caribe (2025). Inglés B2, portugués A2.",
  },
  contact: {
    label: "Contacto",
    email: "Correo",
  },
};

export default es;
