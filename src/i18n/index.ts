import type { Locale } from "./config";
import en from "./dictionaries/en";
import es from "./dictionaries/es";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
