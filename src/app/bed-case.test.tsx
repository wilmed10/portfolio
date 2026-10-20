import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { getDictionary } from "@/i18n";
import { stores } from "@/lib/site";
import BedCase, { generateMetadata } from "./[lang]/work/bed/page";

afterEach(cleanup);

const params = (lang: string) => ({ params: Promise.resolve({ lang }) });

describe("bed case page", () => {
  it("renders the case title as the h1", async () => {
    render(await BedCase(params("en")));

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      getDictionary("en").bedCase.title,
    );
  });

  it("renders the Spanish copy and links back to the Spanish home", async () => {
    render(await BedCase(params("es")));

    expect(screen.getByText(getDictionary("es").bedCase.role)).toBeTruthy();
    expect(
      screen.getByRole("link", { name: new RegExp(getDictionary("es").bedCase.back) }).getAttribute("href"),
    ).toBe("/es");
  });

  it("shows the three real stores", async () => {
    render(await BedCase(params("en")));
    const hrefs = screen.getAllByRole("link").map((a) => a.getAttribute("href"));

    expect(hrefs).toEqual(expect.arrayContaining(stores.map((s) => s.href)));
  });

  it("uses /{lang}/work/bed as canonical", async () => {
    const meta = await generateMetadata(params("en"));

    expect(meta.alternates?.canonical).toBe("https://wilsonmedina.com/en/work/bed");
  });

  it("triggers a 404 for an unsupported language", async () => {
    await expect(BedCase(params("xx"))).rejects.toMatchObject({
      digest: "NEXT_HTTP_ERROR_FALLBACK;404",
    });
  });
});
