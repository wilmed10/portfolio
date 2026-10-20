import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current, path }: { current: Locale; path: string }) {
  return (
    <nav aria-label="Language" className="flex items-center gap-2 font-mono text-xs">
      {locales.map((lang, i) => (
        <span key={lang} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true" className="text-line">/</span>}
          <Link
            href={`/${lang}${path}`}
            lang={lang}
            aria-current={lang === current ? "true" : undefined}
            className={lang === current ? "text-ink" : "text-muted hover:text-ink"}
          >
            {lang.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
