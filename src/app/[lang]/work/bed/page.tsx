import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { PageShell } from "@/components/PageShell";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { Section } from "@/components/Section";
import { assertLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/lib/seo";
import { fullPreview } from "@/lib/screenshots";
import { links, SITE_NAME, stores } from "@/lib/site";

const PATH = "/work/bed";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = assertLocale((await params).lang);
  const { bed, bedCase } = getDictionary(lang);

  return buildMetadata({
    lang,
    path: PATH,
    title: `${bedCase.title} | ${SITE_NAME}`,
    description: bed.context,
  });
}

export default async function BedCase({ params }: Props) {
  const lang = assertLocale((await params).lang);
  const { bed, bedCase, common } = getDictionary(lang);
  const { labels } = bedCase;

  return (
    <PageShell lang={lang} path={PATH}>
      <article className="py-8 sm:py-10">
        <Link href={`/${lang}`} className="text-sm text-muted hover:text-ink">
          ← {bedCase.back}
        </Link>
        <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {bedCase.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{bed.context}</p>
        <p className="mt-4 font-mono text-sm">
          <ExternalLink href={links.bed} className="text-accent underline underline-offset-4">
            bed.mooba.co
          </ExternalLink>
        </p>

        <div className="mt-6">
          <ScreenshotFrame
            src="/img/work/bed.webp"
            alt={`${common.screenshotOf} bed.mooba.co`}
            aspect="1600 / 1000"
            priority
            {...fullPreview("bed")}
          />
        </div>

        <div className="mt-2 max-w-3xl">
          <Section label={labels.role} compact>
            <p className="text-lg leading-relaxed">{bedCase.role}</p>
          </Section>
          <Section label={labels.problem} compact>
            <p className="text-lg leading-relaxed">{bedCase.problem}</p>
          </Section>
          <Section label={labels.decisions} compact>
            <ul className="space-y-4 text-lg leading-relaxed">
              {bedCase.decisions.map((decision) => (
                <li key={decision} className="border-l-2 border-line pl-4">
                  {decision}
                </li>
              ))}
            </ul>
          </Section>
          <Section label={labels.stack} compact>
            <p className="text-lg leading-relaxed">{bedCase.stack}</p>
          </Section>
          <Section label={labels.cicd} compact>
            <p className="text-lg leading-relaxed">{bedCase.cicd}</p>
          </Section>
          <Section label={labels.result} compact>
            <p className="text-lg leading-relaxed">{bedCase.result}</p>
          </Section>
        </div>

        <Section label={bed.storesLabel} compact>
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
        </Section>
      </article>
    </PageShell>
  );
}
