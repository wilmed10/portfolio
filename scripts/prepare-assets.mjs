// Crops and compresses the source screenshots into public/img/work,
// and builds the Open Graph image.
// Usage: ASSET_SRC=<folder> PHOTOS_SRC=<folder> npm run assets
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function requireEnv(name, hint) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing ${name}: ${hint}`);
    process.exit(1);
  }
  return value;
}

const src = requireEnv("ASSET_SRC", "folder with the full-site screenshots and the hackathon photos");
const photosSrc = requireEnv("PHOTOS_SRC", "folder with the Barranqui-IA team photo");

const outDir = path.join(root, "public/img/work");
const MAX_WIDTH = 1600;

// Full-page captures are 2052px wide. `crop` keeps the most representative part.
const captures = [
  { name: "bed", file: "bed-full-site.png", crop: { top: 0, height: 1282 }, scroll: true },
  { name: "rosetto", file: "rosetto-full-site.png", crop: { top: 0, height: 1282 }, scroll: true },
  { name: "manila", file: "manila-full-site.png", crop: { top: 0, height: 1282 }, scroll: true },
  { name: "chimbote", file: "chimbote-full-site.png", crop: { top: 0, height: 1282 }, scroll: true },
  { name: "mooba", file: "mooba-full-site.png", crop: { top: 0, height: 1282 }, scroll: true },
  { name: "biver", file: "biver-full-site.png", crop: { top: 0, height: 1282 }, scroll: true },
  { name: "thermecs", file: "thermecs-full-site.png", crop: { top: 0, height: 1282 }, scroll: true },
];

// `dir` defaults to ASSET_SRC. The Barranqui-IA photo carries a sponsor banner along its
// bottom edge, so only the top part of it is kept.
const photos = [
  { name: "hackathon-team", file: "primer-hackaton.jpg" },
  {
    name: "hackathon-barranquiia",
    file: "HACKATON_ETERNOECO2026-438.jpg",
    dir: photosSrc,
    crop: { top: 0, height: 2400 },
  },
  { name: "medi-agent-dashboard", file: "sgda-hackaton-1.jpg" },
];

async function toWebp(input, output, crop) {
  let image = sharp(input);
  if (crop) {
    const { width } = await image.metadata();
    image = image.extract({
      left: crop.left ?? 0,
      top: crop.top,
      width: crop.width ?? width,
      height: crop.height,
    });
  }
  await image
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);
}

// Whole page, shown by scrolling it inside the frame on hover. Returns height / width.
async function toFullWebp(input, output) {
  const { width, height } = await sharp(input).metadata();
  await sharp(input).resize({ width: 1200 }).webp({ quality: 70 }).toFile(output);
  return Math.round((height / width) * 1000) / 1000;
}

async function buildOgImage() {
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#f5f1ea"/>
      <text x="80" y="300" font-family="Georgia, serif" font-size="72" fill="#1f1d1a">Wilson Medina Arrieta</text>
      <text x="80" y="380" font-family="Georgia, serif" font-size="40" fill="#4d483f">Software Engineer</text>
      <line x1="80" y1="430" x2="1120" y2="430" stroke="#cfc7b8" stroke-width="2"/>
      <text x="80" y="490" font-family="Courier New, monospace" font-size="28" fill="#2f5d3a">wilsonmedina.com</text>
    </svg>`;

  await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(path.join(root, "public/img/og.jpg"));
}

await mkdir(outDir, { recursive: true });

const ratios = {};
for (const { name, file, crop, scroll } of captures) {
  await toWebp(path.join(src, file), path.join(outDir, `${name}.webp`), crop);
  if (scroll) {
    ratios[name] = await toFullWebp(path.join(src, file), path.join(outDir, `${name}-full.webp`));
  }
}
await writeFile(
  path.join(root, "src/lib/screenshot-ratios.json"),
  `${JSON.stringify(ratios, null, 2)}\n`,
);
for (const { name, file, dir = src, crop } of photos) {
  await toWebp(path.join(dir, file), path.join(outDir, `${name}.webp`), crop);
}

await buildOgImage();

console.log("Assets ready in public/img/work and public/img/og.jpg.");
