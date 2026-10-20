"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

const SECONDS_PER_SCREEN = 1.5;
const MIN_SECONDS = 3;
const MAX_SECONDS = 9;

/**
 * Covers its frame and, on hover, scrolls the full-length screenshot from top to bottom.
 * The image is only downloaded on the first hover; until it has loaded, the cropped
 * screenshot underneath stays visible. The motion itself is CSS (see globals.css).
 */
export function ScrollPreview({ src, ratio }: { src: string; ratio: number }) {
  const [armed, setArmed] = useState(false);
  const [ready, setReady] = useState(false);
  const seconds = Math.min(MAX_SECONDS, Math.max(MIN_SECONDS, ratio * SECONDS_PER_SCREEN));

  return (
    <div
      className="scroll-preview absolute inset-0 overflow-hidden"
      data-ready={ready ? "" : undefined}
      style={{ "--scroll-duration": `${seconds.toFixed(1)}s` } as CSSProperties}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setArmed(true);
      }}
    >
      {armed && (
        <Image
          src={src}
          alt=""
          width={1200}
          height={Math.round(1200 * ratio)}
          sizes="(min-width: 1024px) 960px, 100vw"
          loading="eager"
          unoptimized
          onLoad={() => setReady(true)}
          className="scroll-preview-img"
        />
      )}
    </div>
  );
}
