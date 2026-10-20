import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Header, content column and footer shared by every page. `path` is relative to /{lang}. */
export function PageShell({
  lang,
  path,
  children,
}: {
  lang: Locale;
  path: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header lang={lang} path={path} />
      <main className="mx-auto max-w-5xl px-5">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
