import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getDictionary } from "@/i18n";
import { locales } from "@/i18n/config";
import { links } from "@/lib/site";

const root = path.resolve(__dirname, "../..");

function strings(node: unknown): string[] {
  if (typeof node === "string") return [node];
  if (Array.isArray(node)) return node.flatMap(strings);
  return Object.values(node as Record<string, unknown>).flatMap(strings);
}

describe("public copy does not expose internal details of bed", () => {
  const forbidden: [string, RegExp][] = [
    ["deployment platform", /coolify/i],
    ["framework fingerprint", /\bgin\b|\bgorm\b/i],
    ["commercial terms with the payment partner", /double commission|doble comisi[oó]n/i],
    ["sales amount", /COP\s?1 million|mill[oó]n de pesos/i],
    ["per-store traffic figures", /3,000|3\.000/],
    ["hosting details", /\bvps\b/i],
  ];

  it.each(locales.flatMap((lang) => forbidden.map(([why, re]) => [lang, why, re] as const)))(
    "%s copy has no %s",
    (lang, _why, re) => {
      const hits = strings(getDictionary(lang)).filter((text) => re.test(text));

      expect(hits).toEqual([]);
    },
  );
});

describe("repository hygiene", () => {
  it("serves only the web CV from public/documents", () => {
    expect(readdirSync(path.join(root, "public/documents"))).toEqual([
      "CV Software Engineer OCT2027 WEB.pdf",
    ]);
  });

  it("points the resume link at a file that exists", () => {
    expect(existsSync(path.join(root, "public", decodeURI(links.resume)))).toBe(true);
  });

  it.each(["scripts/prepare-assets.mjs", "README.md", "src/lib/site.ts"])(
    "%s has no absolute local paths",
    (file) => {
      expect(readFileSync(path.join(root, file), "utf8")).not.toMatch(/[A-Z]:\\{1,2}Users|\/Users\//);
    },
  );
});
