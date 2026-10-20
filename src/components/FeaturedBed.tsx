import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { fullPreview } from "@/lib/screenshots";
import { links, stores } from "@/lib/site";
import { ExternalLink } from "./ExternalLink";
import { bedQualityIcons } from "./icons";
import { Reveal } from "./Reveal";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { Section } from "./Section";

export function FeaturedBed({ lang }: { lang: Locale }) {
  const { bed, common } = getDictionary(lang);

  return (
    <Section id="work" label={bed.label}>
      <Reveal>
        <h3 className="font-serif text-3xl sm:text-4xl">
          <ExternalLink href={links.bed} className="hover:text-accent">
            bed.mooba.co
          </ExternalLink>
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{bed.context}</p>

        <ExternalLink href={links.bed} className="mt-6 block">
          <ScreenshotFrame
            src="/img/work/bed.webp"
            alt={`${common.screenshotOf} bed.mooba.co`}
            aspect="1600 / 1000"
            {...fullPreview("bed")}
          />
        </ExternalLink>

        <ul className="mt-6 grid gap-x-8 gap-y-4 text-base leading-relaxed sm:grid-cols-2">
          {bed.bullets.map((bullet, i) => {
            const BulletIcon = bedQualityIcons[i];

            return (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent">
                  <BulletIcon />
                </span>
                <span className="pt-1.5">{bullet}</span>
              </li>
            );
          })}
        </ul>

        <Link
          href={`/${lang}/work/bed`}
          className="mt-5 inline-block text-sm text-accent underline underline-offset-4"
        >
          {bed.caseLink} →
        </Link>

        <p className="mb-3 mt-10 font-mono text-xs uppercase tracking-wider text-muted">
          {bed.storesLabel}
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {stores.map((store) => (
            <ExternalLink key={store.name} href={store.href} className="group block">
              <ScreenshotFrame
                src={`/img/work/${store.name}.webp`}
                alt={`${common.screenshotOf} ${store.domain}`}
                aspect="1600 / 1000"
                sizes="(min-width: 640px) 320px, 100vw"
                {...fullPreview(store.name)}
              />
              <span className="mt-3 block font-mono text-xs text-muted group-hover:text-ink">
                {store.domain}
              </span>
            </ExternalLink>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
