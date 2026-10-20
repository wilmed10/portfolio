import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { buildMetadata, personJsonLd } from "./seo";
import { SITE_URL } from "./site";

describe("buildMetadata", () => {
  const meta = buildMetadata({
    lang: "es",
    path: "/work/bed",
    title: "Caso bed",
    description: "Descripción",
  });

  it("uses the page's own language URL as canonical", () => {
    expect(meta.alternates?.canonical).toBe("https://wilsonmedina.com/es/work/bed");
  });

  it("lists en, es and x-default alternates, with x-default pointing to en", () => {
    const languages = meta.alternates?.languages as Record<string, string>;

    expect(Object.keys(languages).sort()).toEqual(["en", "es", "x-default"]);
    expect(languages.en).toBe("https://wilsonmedina.com/en/work/bed");
    expect(languages.es).toBe("https://wilsonmedina.com/es/work/bed");
    expect(languages["x-default"]).toBe(languages.en);
  });

  it("declares a favicon so browsers do not request /favicon.ico", () => {
    expect(meta.icons).toMatchObject({ icon: "/img/dev.png" });
  });

  it("builds the home canonical without a trailing slash", () => {
    const home = buildMetadata({ lang: "en", path: "", title: "t", description: "d" });

    expect(home.alternates?.canonical).toBe("https://wilsonmedina.com/en");
  });

  it("fills Open Graph and Twitter card", () => {
    expect(meta.openGraph).toMatchObject({
      type: "website",
      title: "Caso bed",
      description: "Descripción",
      url: "https://wilsonmedina.com/es/work/bed",
      locale: "es_CO",
    });
    expect(JSON.stringify(meta.openGraph?.images)).toContain(`${SITE_URL}/img/og.jpg`);
    expect(meta.twitter).toMatchObject({ card: "summary", title: "Caso bed" });
  });
});

describe("personJsonLd", () => {
  it("is a Person with GitHub and LinkedIn in sameAs", () => {
    const data = personJsonLd("en") as { "@type": string; sameAs: string[]; url: string };

    expect(data["@type"]).toBe("Person");
    expect(data.sameAs).toEqual([
      "https://github.com/wilmed10",
      "https://linkedin.com/in/wilson-medina-arrieta-492792287",
    ]);
    expect(data.url).toBe("https://wilsonmedina.com/en");
  });
});

describe("sitemap", () => {
  it("has one entry per language and page, each with en and es alternates", () => {
    const entries = sitemap();

    expect(entries.map((e) => e.url).sort()).toEqual([
      "https://wilsonmedina.com/en",
      "https://wilsonmedina.com/en/hackathons",
      "https://wilsonmedina.com/en/work/bed",
      "https://wilsonmedina.com/es",
      "https://wilsonmedina.com/es/hackathons",
      "https://wilsonmedina.com/es/work/bed",
    ]);
    for (const entry of entries) {
      expect(Object.keys(entry.alternates?.languages ?? {}).sort()).toEqual(["en", "es"]);
    }
  });
});

describe("robots", () => {
  it("allows everything and points to the sitemap", () => {
    const rules = robots();

    expect(rules.sitemap).toBe("https://wilsonmedina.com/sitemap.xml");
    expect(rules.rules).toMatchObject({ userAgent: "*", allow: "/" });
  });
});
