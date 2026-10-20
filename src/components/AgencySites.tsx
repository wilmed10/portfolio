import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { fullPreview } from "@/lib/screenshots";
import { links } from "@/lib/site";
import { ExternalLink } from "./ExternalLink";
import { Reveal } from "./Reveal";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { Section } from "./Section";

const sites = [
  { name: "mooba", href: links.agency.mooba },
  { name: "biver", href: links.agency.biver },
  { name: "thermecs", href: links.agency.thermecs },
] as const;

export function AgencySites({ lang }: { lang: Locale }) {
  const { agency, common } = getDictionary(lang);

  return (
    <Section label={agency.label}>
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">{agency.intro}</p>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {sites.map((site, i) => {
            const item = agency.items[i];

            return (
              <ExternalLink key={site.name} href={site.href} className="group block">
                <ScreenshotFrame
                  src={`/img/work/${site.name}.webp`}
                  alt={`${common.screenshotOf} ${item.domain}`}
                  aspect="1600 / 1000"
                  sizes="(min-width: 640px) 320px, 100vw"
                  {...fullPreview(site.name)}
                />
                <span className="mt-4 block font-mono text-sm group-hover:text-accent">
                  {item.domain}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{item.line}</span>
              </ExternalLink>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
