import { describe, expect, it } from "vitest";
import { getDictionary } from "@/i18n";
import { locales } from "@/i18n/config";
import { bedQualityIcons } from "./icons";

describe("bed quality icons", () => {
  it.each(locales)("has one icon per bed quality in %s", (lang) => {
    expect(bedQualityIcons).toHaveLength(getDictionary(lang).bed.bullets.length);
  });
});
