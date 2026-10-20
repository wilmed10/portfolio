import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { getDictionary } from "@/i18n";
import { links } from "@/lib/site";
import Hackathons, { generateMetadata } from "./[lang]/hackathons/page";

afterEach(cleanup);

const params = (lang: string) => ({ params: Promise.resolve({ lang }) });

describe("hackathons page", () => {
  it("renders the page title as the h1", async () => {
    render(await Hackathons(params("en")));

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      getDictionary("en").hackathons.title,
    );
  });

  it("lists both projects with their repos and the LinkedIn post", async () => {
    render(await Hackathons(params("en")));
    const hrefs = screen.getAllByRole("link").map((a) => a.getAttribute("href"));

    expect(hrefs).toEqual(
      expect.arrayContaining([
        links.biofoodRepo,
        links.mediAgentRepo,
        links.hackathonPost,
        links.mediAgentPost,
      ]),
    );
    expect(screen.getByRole("heading", { name: "BioFood Connect" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "MediAgent" })).toBeTruthy();
  });

  it("states honestly that MediAgent did not place", async () => {
    render(await Hackathons(params("en")));

    expect(screen.getByText(getDictionary("en").hackathons.items[1].text)).toBeTruthy();
    expect(getDictionary("en").hackathons.items[1].text).toMatch(/did not place/i);
    expect(getDictionary("es").hackathons.items[1].text).toMatch(/no obtuvimos puesto/i);
  });

  it("renders the Spanish copy and links back to the Spanish home", async () => {
    render(await Hackathons(params("es")));

    expect(
      screen.getByRole("link", { name: new RegExp(getDictionary("es").hackathons.back) }).getAttribute("href"),
    ).toBe("/es");
  });

  it("uses /{lang}/hackathons as canonical", async () => {
    const meta = await generateMetadata(params("es"));

    expect(meta.alternates?.canonical).toBe("https://wilsonmedina.com/es/hackathons");
  });

  it("triggers a 404 for an unsupported language", async () => {
    await expect(Hackathons(params("xx"))).rejects.toMatchObject({
      digest: "NEXT_HTTP_ERROR_FALLBACK;404",
    });
  });
});
