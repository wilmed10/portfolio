import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { getDictionary } from "@/i18n";
import { links, stores } from "@/lib/site";
import Home, { generateMetadata } from "./[lang]/page";

afterEach(cleanup);

async function renderHome(lang: string) {
  render(await Home({ params: Promise.resolve({ lang }) }));
}

function hrefs() {
  return screen.getAllByRole("link").map((a) => a.getAttribute("href"));
}

describe("home page", () => {
  it("has a single h1 with the role", async () => {
    await renderHome("en");

    const h1 = screen.getAllByRole("heading", { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0].textContent).toContain("Software Engineer");
  });

  it("links the stores, the hackathon post and both repos", async () => {
    await renderHome("en");

    expect(hrefs()).toEqual(
      expect.arrayContaining([
        ...stores.map((s) => s.href),
        links.hackathonPost,
        links.biofoodRepo,
        links.mediAgentRepo,
        links.bed,
        links.agency.mooba,
        links.agency.biver,
        links.agency.thermecs,
        "/en/work/bed",
        "/en/hackathons",
      ]),
    );
  });

  it("renders the Spanish copy for /es", async () => {
    await renderHome("es");

    expect(screen.getByText(getDictionary("es").hero.tagline)).toBeTruthy();
  });

  it("does not ship TODO markers on the home page", async () => {
    await renderHome("en");

    expect(document.body.textContent).not.toMatch(/TODO\(wilson\)/);
  });

  it("shows the portrait in the hero", async () => {
    await renderHome("en");

    const photo = screen.getByAltText(getDictionary("en").hero.photoAlt) as HTMLImageElement;
    expect(photo.getAttribute("src")).toContain("photo-compressed");
  });

  it("makes the bed screenshot a link to bed.mooba.co", async () => {
    await renderHome("en");

    const shot = screen.getByAltText(`${getDictionary("en").common.screenshotOf} bed.mooba.co`);
    expect(shot.closest("a")?.getAttribute("href")).toBe(links.bed);
  });

  it("shows the three ways of working as cards, without a top rule on each paragraph", async () => {
    await renderHome("en");

    for (const point of getDictionary("en").how.points) {
      const card = screen.getByText(point).closest("li")!;

      expect(card.className).toContain("rounded-xl");
      expect(card.className).not.toContain("border-t");
    }
  });

  it("gives each bed quality an SVG icon instead of a top rule", async () => {
    await renderHome("en");

    for (const bullet of getDictionary("en").bed.bullets) {
      const item = screen.getByText(bullet).closest("li")!;

      expect(item.querySelector("svg[aria-hidden='true']")).not.toBeNull();
      expect(item.className).not.toContain("border-t");
    }
  });

  it.each(["en", "es"] as const)("frames the agency websites as team work at mooba in %s", async (lang) => {
    await renderHome(lang);
    const { agency } = getDictionary(lang);

    expect(screen.getByText(agency.intro)).toBeTruthy();
    expect(agency.label).toMatch(/mooba/);
    expect(agency.label).not.toMatch(/client/i);
  });

  it.each(["en", "es"] as const)("shows the education line in %s", async (lang) => {
    await renderHome(lang);

    expect(screen.getByText(getDictionary(lang).how.education)).toBeTruthy();
  });

  it("offers the resume, GitHub and LinkedIn from the hero", async () => {
    await renderHome("en");

    expect(hrefs()).toEqual(expect.arrayContaining([links.resume, links.github, links.linkedin]));
  });
});

describe("home metadata", () => {
  it("uses the language URL as canonical and the dictionary title", async () => {
    const meta = await generateMetadata({ params: Promise.resolve({ lang: "es" }) });

    expect(meta.alternates?.canonical).toBe("https://wilsonmedina.com/es");
    expect(meta.title).toBe(getDictionary("es").meta.title);
  });
});
