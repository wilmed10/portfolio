# Portfolio

Personal site of Wilson Medina, live at [wilsonmedina.com](https://wilsonmedina.com). Bilingual (`/en`, `/es`), statically generated.

## Stack

- Next.js (App Router), React 19, TypeScript
- Tailwind CSS
- Vitest for unit and component tests

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: production build
- `npm run start`: serve the production build
- `npm run assets`: rebuild the optimized images and the Open Graph image. Needs `ASSET_SRC` (screenshots and photos) and `PHOTOS_SRC` (team photo) set to local paths
- `npm run lint`: run ESLint
- `npm test`: run the test suite

## Deployment

Deployed on Vercel (Next.js preset). Pushes to the connected branch deploy automatically.
