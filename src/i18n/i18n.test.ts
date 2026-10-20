import { describe, expect, it } from "vitest";
import { assertLocale, defaultLocale, isLocale, locales } from "./config";
import { getDictionary } from "./index";

type Leaf = { path: string; value: string };

function collect(node: unknown, path = ""): Leaf[] {
  if (typeof node === "string") return [{ path, value: node }];
  if (Array.isArray(node)) {
    return [
      { path: `${path}.length`, value: String(node.length) },
      ...node.flatMap((item, i) => collect(item, `${path}[${i}]`)),
    ];
  }
  return Object.entries(node as Record<string, unknown>).flatMap(([key, child]) =>
    collect(child, path ? `${path}.${key}` : key),
  );
}

describe("locales", () => {
  it("supports en and es with en as default", () => {
    expect(locales).toEqual(["en", "es"]);
    expect(defaultLocale).toBe("en");
  });

  it("accepts supported locales and rejects others", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("es")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });
});

describe("assertLocale", () => {
  it("returns supported locales", () => {
    expect(assertLocale("es")).toBe("es");
  });

  it("triggers a 404 for unsupported locales", () => {
    expect(() => assertLocale("xx")).toThrow(
      expect.objectContaining({ digest: "NEXT_HTTP_ERROR_FALLBACK;404" }),
    );
  });
});

describe("dictionaries", () => {
  it("returns the Spanish hero role", () => {
    expect(getDictionary("es").hero.role.length).toBeGreaterThan(0);
  });

  it("has identical key paths and array lengths in en and es", () => {
    const en = collect(getDictionary("en")).map((l) => `${l.path}${l.path.endsWith(".length") ? "=" + l.value : ""}`);
    const es = collect(getDictionary("es")).map((l) => `${l.path}${l.path.endsWith(".length") ? "=" + l.value : ""}`);

    expect(es).toEqual(en);
  });

  it.each(locales)("has no TODO markers left in %s", (lang) => {
    const todos = collect(getDictionary(lang)).filter((l) => /TODO\(/.test(l.value));

    expect(todos).toEqual([]);
  });

  it.each(locales)("does not repeat the project name inside the bed description in %s", (lang) => {
    expect(getDictionary(lang).bed.context).not.toContain("bed.mooba.co");
  });

  it.each(locales)("says bed was built at mooba, in the home context and the case role in %s", (lang) => {
    const { bed, bedCase } = getDictionary(lang);

    expect(bed.context).toMatch(/mooba/);
    expect(bedCase.role).toMatch(/mooba/);
  });

  it.each(["en", "es"] as const)("presents bed as the step from WhatsApp to an online store in %s", (lang) => {
    const { bed } = getDictionary(lang);

    expect(bed.context).toMatch(lang === "en" ? /online store/i : /tienda en línea/i);
    expect(bed.context).not.toMatch(/(for businesses that sell|para negocios que venden) /i);
  });

  it.each(locales)("has no empty strings in %s", (lang) => {
    const empty = collect(getDictionary(lang)).filter(
      (l) => !l.path.endsWith(".length") && l.value.trim() === "",
    );

    expect(empty).toEqual([]);
  });
});
