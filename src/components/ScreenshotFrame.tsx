import Image from "next/image";
import { ScrollPreview } from "./ScrollPreview";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  /** CSS aspect-ratio of the cropped image, e.g. "16 / 10". */
  aspect?: string;
  /** Full-length screenshot, scrolled on hover. Needs `fullRatio` (height / width). */
  fullSrc?: string;
  fullRatio?: number;
};

export function ScreenshotFrame({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 960px, 100vw",
  aspect = "16 / 10",
  fullSrc,
  fullRatio,
}: Props) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-line bg-surface shadow-[0_8px_30px_-12px_rgba(31,29,26,0.25)]"
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top"
      />
      {fullSrc && fullRatio && <ScrollPreview src={fullSrc} ratio={fullRatio} />}
    </div>
  );
}
