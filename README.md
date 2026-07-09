# Portfolio — Wilson Jr. Medina Arrieta

Personal portfolio site built with React, TypeScript and Vite. Single-page layout with sections for projects, experience, resume and about me, an animated particle background, and a light/dark theme switcher.

Live at [wilmed10.github.io/portfolio](https://wilmed10.github.io/portfolio/)

## Stack

- React 19 + TypeScript
- Vite (build/dev server)
- Zustand for theme/section state
- `@tsparticles` for the interactive background

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally
- `npm run deploy` — publish `dist/` to the `gh-pages` branch (legacy path; deployment is being migrated to the GitHub Actions workflow in `.github/workflows/deploy.yml`)

## Deployment

Pushes to `main` build the site and publish it to GitHub Pages via `.github/workflows/deploy.yml` (`actions/upload-pages-artifact` + `actions/deploy-pages`).
