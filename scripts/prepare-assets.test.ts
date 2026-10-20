// @vitest-environment node
import { existsSync, statSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { describe, expect, it } from "vitest";

const root = path.resolve(__dirname, "..");
const work = (name: string) => path.join(root, "public/img/work", `${name}.webp`);

const names = [
  "bed",
  "rosetto",
  "manila",
  "chimbote",
  "mooba",
  "biver",
  "thermecs",
  "hackathon-team",
  "hackathon-barranquiia",
  "medi-agent-dashboard",
];

describe("prepared assets", () => {
  it.each(names)("%s exists and is under 400 KB", (name) => {
    expect(existsSync(work(name))).toBe(true);
    expect(statSync(work(name)).size).toBeLessThan(400 * 1024);
  });

  describe.each(["bed", "rosetto", "manila", "chimbote", "mooba", "biver", "thermecs"])(
    "%s full-length preview",
    (name) => {
      const file = work(`${name}-full`);

      it("exists and stays under 900 KB", () => {
        expect(existsSync(file)).toBe(true);
        expect(statSync(file).size).toBeLessThan(900 * 1024);
      });

      it("is 1200px wide and much taller than the top crop", async () => {
        const { width, height } = await sharp(file).metadata();

        expect(width).toBe(1200);
        expect(height!).toBeGreaterThan(1200 * 1.5);
      });
    },
  );

  it("keeps the bed screenshot at most 1600px wide", async () => {
    const { width } = await sharp(work("bed")).metadata();

    expect(width).toBeLessThanOrEqual(1600);
  });

  it("creates the 1200x630 Open Graph image", async () => {
    const file = path.join(root, "public/img/og.jpg");
    const meta = await sharp(file).metadata();

    expect([meta.width, meta.height]).toEqual([1200, 630]);
  });
});
