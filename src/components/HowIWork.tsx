import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function HowIWork({ lang }: { lang: Locale }) {
  const { how } = getDictionary(lang);

  return (
    <Section id="about" label={how.label}>
      <Reveal>
        <ul className="grid gap-4 md:grid-cols-3">
          {how.points.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-line bg-surface p-5 text-base leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-muted">{how.education}</p>
      </Reveal>
    </Section>
  );
}
