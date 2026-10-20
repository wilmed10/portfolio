import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { links } from "@/lib/site";
import { ExternalLink } from "./ExternalLink";

const outline =
  "rounded-full border border-line px-5 py-2 text-ink transition-colors hover:border-ink";

export function Hero({ lang }: { lang: Locale }) {
  const { hero, nav } = getDictionary(lang);

  return (
    <section className="flex flex-col-reverse gap-8 py-10 sm:py-14 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
          Wilson Medina,
          <br />
          {hero.role}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{hero.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <ExternalLink
            href={links.resume}
            className="rounded-full bg-ink px-5 py-2 text-cream transition-opacity hover:opacity-85"
          >
            {nav.resume}
          </ExternalLink>
          <ExternalLink href={links.github} className={outline}>
            GitHub
          </ExternalLink>
          <ExternalLink href={links.linkedin} className={outline}>
            LinkedIn
          </ExternalLink>
        </div>
      </div>
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-line shadow-[0_8px_30px_-12px_rgba(31,29,26,0.25)] md:h-56 md:w-56">
        <Image
          src="/img/photo-compressed.jpg"
          alt={hero.photoAlt}
          fill
          priority
          sizes="(min-width: 768px) 224px, 128px"
          className="object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
      </div>
    </section>
  );
}
