import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { links, SITE_NAME, SITE_URL } from "./site";

const OG_IMAGE = `${SITE_URL}/img/og.jpg`;

const ogLocales: Record<Locale, string> = { en: "en_US", es: "es_CO" };

export function urlFor(lang: Locale, path: string): string {
  return `${SITE_URL}/${lang}${path}`;
}

export function languageAlternates(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((lang) => [lang, urlFor(lang, path)])),
    "x-default": urlFor("en", path),
  };
}

export function buildMetadata(args: {
  lang: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const { lang, path, title, description } = args;
  const url = urlFor(lang, path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    authors: [{ name: SITE_NAME }],
    icons: { icon: "/img/dev.png" },
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: ogLocales[lang],
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary", title, description, images: [OG_IMAGE] },
  };
}

export function personJsonLd(lang: Locale): object {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: urlFor(lang, ""),
    image: OG_IMAGE,
    jobTitle: "Software Engineer",
    sameAs: [links.github, links.linkedin],
  };
}
