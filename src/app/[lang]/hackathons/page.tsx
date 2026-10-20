import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { PageShell } from "@/components/PageShell";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { Section } from "@/components/Section";
import { assertLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/lib/seo";
import { links, SITE_NAME } from "@/lib/site";

const PATH = "/hackathons";

const linkStyle = "text-accent underline underline-offset-4";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = assertLocale((await params).lang);
  const { hackathons } = getDictionary(lang);

  return buildMetadata({
    lang,
    path: PATH,
    title: `${hackathons.title} | ${SITE_NAME}`,
    description: hackathons.items.map((item) => item.title).join(", "),
  });
}

export default async function Hackathons({ params }: Props) {
  const lang = assertLocale((await params).lang);
  const { hackathon, hackathons } = getDictionary(lang);
  const [biofood, mediAgent] = hackathons.items;
  const [biofoodAlt, mediAgentAlt, dashboardAlt] = hackathons.photoAlts;

  return (
    <PageShell lang={lang} path={PATH}>
      <div className="py-8 sm:py-10">
        <Link href={`/${lang}`} className="text-sm text-muted hover:text-ink">
          ← {hackathons.back}
        </Link>
        <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {hackathons.title}
        </h1>

        <div className="mt-4">
          <Section label={biofood.label}>
            <div className="grid items-center gap-8 md:grid-cols-2">
              <ScreenshotFrame
                src="/img/work/hackathon-team.webp"
                alt={biofoodAlt}
                aspect="4 / 3"
                sizes="(min-width: 768px) 480px, 100vw"
              />
              <div>
                <h3 className="font-serif text-3xl">{biofood.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{biofood.text}</p>
                <p className="mt-4 font-mono text-xs text-muted">{biofood.stack}</p>
                <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <ExternalLink href={links.biofoodRepo} className={linkStyle}>
                    {hackathon.repo}
                  </ExternalLink>
                  <ExternalLink href={links.hackathonPost} className={linkStyle}>
                    {hackathon.post}
                  </ExternalLink>
                </p>
              </div>
            </div>
          </Section>

          <Section label={mediAgent.label}>
            <div className="max-w-3xl">
              <h3 className="font-serif text-3xl">{mediAgent.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{mediAgent.text}</p>
              <p className="mt-4 font-mono text-xs text-muted">{mediAgent.stack}</p>
              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <ExternalLink href={links.mediAgentRepo} className={linkStyle}>
                  {hackathon.repo}
                </ExternalLink>
                <ExternalLink href={links.mediAgentPost} className={linkStyle}>
                  {hackathon.post}
                </ExternalLink>
              </p>
            </div>
            <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
              <ScreenshotFrame
                src="/img/work/hackathon-barranquiia.webp"
                alt={mediAgentAlt}
                aspect="1600 / 833"
                sizes="(min-width: 768px) 480px, 100vw"
              />
              <ScreenshotFrame
                src="/img/work/medi-agent-dashboard.webp"
                alt={dashboardAlt}
                aspect="1280 / 725"
                sizes="(min-width: 768px) 480px, 100vw"
              />
            </div>
          </Section>
        </div>
      </div>
    </PageShell>
  );
}
