import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { links } from "@/lib/site";
import { ExternalLink } from "./ExternalLink";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact({ lang }: { lang: Locale }) {
  const { contact, nav } = getDictionary(lang);

  return (
    <Section id="contact" label={contact.label}>
      <Reveal>
        <a
          href={`mailto:${links.email}`}
          className="font-serif text-2xl underline decoration-line underline-offset-8 hover:decoration-accent sm:text-4xl"
        >
          {links.email}
        </a>
        <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <ExternalLink href={links.github} className="hover:text-ink">
            GitHub
          </ExternalLink>
          <ExternalLink href={links.linkedin} className="hover:text-ink">
            LinkedIn
          </ExternalLink>
          <ExternalLink href={links.resume} className="hover:text-ink">
            {nav.resume}
          </ExternalLink>
        </p>
      </Reveal>
    </Section>
  );
}
