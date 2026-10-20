import type { Metadata } from "next";
import { AgencySites } from "@/components/AgencySites";
import { Contact } from "@/components/Contact";
import { FeaturedBed } from "@/components/FeaturedBed";
import { Hackathon } from "@/components/Hackathon";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { assertLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { buildMetadata, personJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = assertLocale((await params).lang);
  const { meta } = getDictionary(lang);

  return buildMetadata({ lang, path: "", title: meta.title, description: meta.description });
}

export default async function Home({ params }: Props) {
  const lang = assertLocale((await params).lang);

  return (
    <PageShell lang={lang} path="">
      <JsonLd data={personJsonLd(lang)} />
      <Hero lang={lang} />
      <FeaturedBed lang={lang} />
      <Hackathon lang={lang} />
      <AgencySites lang={lang} />
      <HowIWork lang={lang} />
      <Contact lang={lang} />
    </PageShell>
  );
}
