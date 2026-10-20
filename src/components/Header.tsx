import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { SITE_NAME } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

// "Wilson Medina" on phones, with the surname from the sm breakpoint up.
const [BRAND_FIRST, BRAND_LAST] = [SITE_NAME.replace(/ Arrieta$/, ""), "Arrieta"];

export function Header({ lang, path }: { lang: Locale; path: string }) {
  const { nav } = getDictionary(lang);

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link href={`/${lang}`} className="whitespace-nowrap font-serif text-lg">
          {BRAND_FIRST}
          <span className="hidden sm:inline"> {BRAND_LAST}</span>
        </Link>
        <div className="flex items-center gap-5 text-sm sm:gap-8">
          <nav aria-label="Main" className="flex items-center gap-4 text-muted sm:gap-6">
            <Link href={`/${lang}#work`} className="hover:text-ink">
              {nav.work}
            </Link>
            <Link href={`/${lang}#about`} className="hidden hover:text-ink sm:inline">
              {nav.about}
            </Link>
            <Link href={`/${lang}#contact`} className="hover:text-ink">
              {nav.contact}
            </Link>
          </nav>
          <LanguageSwitcher current={lang} path={path} />
        </div>
      </div>
    </header>
  );
}
