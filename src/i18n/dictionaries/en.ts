const en = {
  meta: {
    title: "Wilson Medina Arrieta | Software Engineer",
    description:
      "Portfolio of Wilson Medina Arrieta, Software Engineer. Go and Node.js backends, payments, integrations and the multi-tenant SaaS bed.mooba.co.",
  },
  common: {
    screenshotOf: "Screenshot of",
  },
  nav: {
    work: "Work",
    about: "How I work",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    role: "Software Engineer",
    photoAlt: "Portrait of Wilson Medina",
    tagline:
      "Backend in Go and Node.js, clean architecture, payments and integrations. I take ambiguous requirements to production.",
  },
  bed: {
    label: "Featured project",
    context:
      "A SaaS platform that takes businesses from selling over WhatsApp to running their own online store, built at mooba. I am the lead engineer: I started it from zero and took it to launch.",
    bullets: [
      "Self-serve store creation, with about 5 stores already live",
      "Native wallet with split payments between bed and each store",
      "Wompi, ePayco and Cobru wallet withdrawals; Loggro restaurant POS",
      "Go API with about 480 endpoints (hexagonal architecture)",
      "RBAC, BI module, delivery zones with Maps, Meta Pixel and Google Analytics; I also own the CI/CD",
    ],
    storesLabel: "Stores running on bed",
    caseLink: "Read the case study",
  },
  bedCase: {
    title: "bed.mooba.co: case study",
    back: "Back to home",
    labels: {
      role: "Role",
      problem: "Problem",
      decisions: "Key decisions",
      stack: "Stack",
      cicd: "CI/CD",
      result: "Result",
    },
    problem:
      "Many small businesses sold only through WhatsApp. With no online store, they were missing the chance to be seen on the internet. bed gives them the basics (products, orders, discounts) and also store customization (theme, product cards, homepage sections), analytics and pixel linking to follow their ads, and delivery setup so customers complete the purchase on their own instead of over chat. Most of it is free: bed only takes a commission per sale. Other services build the site for you and deliver it in one to two weeks. Here the owner creates their own store without technical skills, customization is optional, and support in Spanish goes directly to the team.",
    role: "Lead engineer at mooba. I started the project from zero. One other developer helped on the front end during the first months; after that I worked mostly with PMs, UX/UI designers and stakeholders.",
    decisions: [
      "Multi-tenant architecture. At mooba, clients kept asking for online stores: we were configuring Shopify or Tiendanube for them, or building custom ecommerce sites from scratch. One technology serving every business, without writing code for each one, was the better answer.",
      "Native wallet with split payments. bed needed to collect its commission automatically, and Cobru was the partner whose automatic split fit that commission model. It also covers entrepreneurs who have no payment gateway or business account: a few clicks to validate a sub-account in the panel and they can already receive payments.",
      "Restaurant POS integration (Loggro). It started with a business that already had the POS but no store. Orders arrive through the bed store and, if the tenant has linked their Loggro account, go straight into the POS. The hard part was adapting to the Loggro model, built for restaurants, where each dish is an order in itself, and mapping tables so orders could be entered on their side.",
    ],
    stack:
      "Go (Clean/Hexagonal architecture), about 480 endpoints, across 3 services: API, admin panel and storefronts. Admin panel and storefronts built with Next.js.",
    cicd: "I own the CI/CD: automated with Git and Docker. As the only developer, I needed a practical pipeline that would not take more time than shipping features.",
    result:
      "Live for about a month, with about 5 active stores already selling. Stores running paid campaigns on social media bring in high traffic, and the platform holds up well under it.",
  },
  hackathon: {
    label: "1st place, Caribe Tech Arena Hackathon",
    title: "BioFood Connect",
    text: "Biofood Challenge, Barranquilla, May 2026. With a team, I built a hexagonal Go backend in 48 hours: Claude Haiku answering over WhatsApp, proactive alert workers and a Wompi/Nequi payment flow.",
    repo: "Repository",
    post: "LinkedIn post",
    photoAlt: "The BioFood Connect team at the Caribe Tech Arena hackathon",
    secondMention:
      "I also took part in another hackathon with medi-agent, without placing.",
    secondRepo: "medi-agent repository",
    moreLink: "See both hackathons",
  },
  hackathons: {
    title: "Hackathons",
    back: "Back to home",
    items: [
      {
        label: "1st place · Caribe Tech Arena Hackathon (Biofood Challenge) · Barranquilla, May 2026",
        title: "BioFood Connect",
        text: "A 48-hour MVP, built with a team. My part was the backend in Go with hexagonal architecture: it answers queries over WhatsApp with Claude Haiku, runs workers that send proactive alerts, and includes a Wompi/Nequi payment flow. It was selected as the top solution among regional builders for its technical execution, architecture and usefulness as an MVP.",
        stack: "Go · Claude Haiku · WhatsApp · PostgreSQL · Docker · Wompi/Nequi",
      },
      {
        label: "Barranqui-IA Hackathon 2026 · Fundación Código Abierto · May 2026",
        title: "MediAgent",
        text: "A voice agent for medicine dispensaries in Colombia. In 2025, 28% of the 312,500 health tutelas were for denied or delayed medication, and the law requires dispensing within 48 hours of authorization. MediAgent connects inventory, prescription and patient: it calls the patient and closes the delivery, turning an 8-hour wait into a 3-minute call. I worked on the voice agent setup, in code and on the platform, together with the three other developers. We did not place, but we built a working prototype in 48 hours.",
        stack: "Next.js · TypeScript · Supabase · Vapi · Deepgram · OpenAI · ElevenLabs",
      },
    ],
    photoAlts: [
      "The BioFood Connect team at the Caribe Tech Arena hackathon",
      "The MediAgent team at the Barranqui-IA hackathon",
      "MediAgent dashboard showing the day's operation",
    ],
  },
  agency: {
    label: "Websites at mooba",
    intro:
      "Built with mooba's design and development team: Next.js front ends and Strapi CMSs, optimized for performance and SEO.",
    items: [
      { domain: "mooba.co", line: "Renewal of the agency site." },
      { domain: "biver.com.co", line: "Corporate website." },
      { domain: "thermecs.co", line: "Corporate website." },
    ],
  },
  how: {
    label: "How I work",
    points: [
      "I take a requirement from the first conversation to production: architecture, payments and CI/CD included.",
      "I work with PMs, designers and stakeholders, because the result is better when we build it together.",
      "I use AI agents and whatever tools are within reach to get there, and I keep ownership of the architecture and the decisions.",
    ],
    education:
      "Mechatronics Engineer, Universidad Autónoma del Caribe (2025). English B2, Portuguese A2.",
  },
  contact: {
    label: "Contact",
    email: "Email",
  },
};

export default en;
