import type { ReactNode } from "react";
import { assertLocale, locales } from "@/i18n/config";
import { mono, sans, serif } from "../fonts";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = assertLocale((await params).lang);

  return (
    <html lang={lang} className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
