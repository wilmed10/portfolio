import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { urlFor } from "@/lib/seo";
import { pagePaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.flatMap((path) =>
    locales.map((lang) => ({
      url: urlFor(lang, path),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, urlFor(l, path)])),
      },
    })),
  );
}
