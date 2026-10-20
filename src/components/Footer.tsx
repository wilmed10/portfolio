import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { links, SITE_NAME } from "@/lib/site";

export function Footer({ lang }: { lang: Locale }) {
  const { contact, nav } = getDictionary(lang);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
        <nav aria-label={contact.label} className="flex flex-wrap gap-5">
          <a href={`mailto:${links.email}`} className="hover:text-ink">
            {contact.email}
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            {nav.resume}
          </a>
        </nav>
      </div>
    </footer>
  );
}
