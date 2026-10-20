import ratios from "./screenshot-ratios.json";

export type ScreenshotName = keyof typeof ratios;

/** Props for ScreenshotFrame to scroll the full-length capture on hover. */
export function fullPreview(name: ScreenshotName) {
  return { fullSrc: `/img/work/${name}-full.webp`, fullRatio: ratios[name] };
}
