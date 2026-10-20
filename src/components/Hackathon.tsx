import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { links } from "@/lib/site";
import { ExternalLink } from "./ExternalLink";
import { Reveal } from "./Reveal";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { Section } from "./Section";

const link = "text-accent underline underline-offset-4";

export function Hackathon({ lang }: { lang: Locale }) {
  const { hackathon } = getDictionary(lang);

  return (
    <Section label={hackathon.label}>
      <Reveal className="grid items-center gap-8 md:grid-cols-2">
        <ScreenshotFrame
          src="/img/work/hackathon-team.webp"
          alt={hackathon.photoAlt}
          aspect="4 / 3"
          sizes="(min-width: 768px) 480px, 100vw"
        />
        <div>
          <h3 className="font-serif text-3xl">{hackathon.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{hackathon.text}</p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <ExternalLink href={links.biofoodRepo} className={link}>
              {hackathon.repo}
            </ExternalLink>
            <ExternalLink href={links.hackathonPost} className={link}>
              {hackathon.post}
            </ExternalLink>
          </p>
          <p className="mt-6 text-sm">
            <Link href={`/${lang}/hackathons`} className={link}>
              {hackathon.moreLink} →
            </Link>
          </p>
          <p className="mt-5 text-sm text-muted">
            {hackathon.secondMention}{" "}
            <ExternalLink href={links.mediAgentRepo} className={link}>
              {hackathon.secondRepo}
            </ExternalLink>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
