import { notFound } from "next/navigation";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function assertLocale(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}
