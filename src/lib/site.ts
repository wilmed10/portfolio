export const SITE_URL = "https://wilsonmedina.com";

export const SITE_NAME = "Wilson Medina Arrieta";

/** Paths (relative to /{lang}) that exist in every language. */
export const pagePaths = ["", "/work/bed", "/hackathons"] as const;

/** Real stores running on bed. `name` matches the file in public/img/work. */
export const stores = [
  { name: "rosetto", domain: "rosetto.mooba.co", href: "https://rosetto.mooba.co" },
  { name: "manila", domain: "manila.mooba.co", href: "https://manila.mooba.co" },
  { name: "chimbote", domain: "chimbote.mooba.co", href: "https://chimbote.mooba.co" },
] as const;

export const links = {
  email: "wilsonmedina8d@gmail.com",
  github: "https://github.com/wilmed10",
  linkedin: "https://linkedin.com/in/wilson-medina-arrieta-492792287",
  hackathonPost:
    "https://www.linkedin.com/feed/update/urn:li:activity:7462604586122526720/",
  mediAgentPost:
    "https://www.linkedin.com/feed/update/urn:li:activity:7464816835968970752/",
  biofoodRepo: "https://github.com/wilmed10/hackaton-biofood-solution",
  mediAgentRepo: "https://github.com/hackaton-barranquiia/medi-agent",
  resume: "/documents/CV%20Software%20Engineer%20OCT2027%20WEB.pdf",
  bed: "https://bed.mooba.co",
  agency: {
    mooba: "https://mooba.co",
    biver: "https://biver.com.co",
    thermecs: "https://thermecs.co",
  },
} as const;
