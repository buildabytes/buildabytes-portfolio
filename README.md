# buildabytes — personal portfolio

The source for [buildabytes.net](https://buildabytes.net) — Divya Flick's personal site. Built byte by byte.

Visual direction: **Graphite & Acid** — a near-black canvas (`#0a0b0e`) with one acid-lime accent (`#bef264`). Dev-tool energy, not another light portfolio.

[![CI](https://github.com/buildabytes/buildabytes-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/buildabytes/buildabytes-portfolio/actions/workflows/ci.yml)
[![Lighthouse](https://github.com/buildabytes/buildabytes-portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/buildabytes/buildabytes-portfolio/actions/workflows/lighthouse.yml)
[![Accessibility](https://img.shields.io/badge/A11y-WCAG%20AA-success)](https://buildabytes.net)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Stack

- **Next.js 15** — App Router, Server Components by default, client islands where needed
- **React 19**
- **TypeScript** — strict mode with `noUncheckedIndexedAccess`
- **Tailwind CSS v4** — CSS-first `@theme` tokens, no `tailwind.config.js`
- **`next/font`** — Archivo + IBM Plex Mono, self-hosted, zero CLS
- **lucide-react** — tree-shaken icons
- **Vitest + React Testing Library** — unit tests with 80%+ coverage thresholds
- **Playwright + axe-core** — end-to-end and accessibility tests
- **Lighthouse CI** — performance scores enforced on every PR
- **Husky + lint-staged + commitlint** — pre-commit and commit-msg hooks
- **ESLint + Prettier** — formatting and linting

No analytics. No trackers. No cookies.

## Project structure

```
src/
├── app/                       App Router routes and metadata
│   ├── layout.tsx             Root layout, fonts, JSON-LD Person schema
│   ├── page.tsx               Home page — composes sections only
│   ├── not-found.tsx          404
│   ├── sitemap.ts             /sitemap.xml
│   └── robots.ts              /robots.txt
├── components/
│   ├── client/                Client islands (small, focused)
│   ├── layout/                Page-chrome (Nav, Footer, SkipLink)
│   ├── sections/              One file per page section
│   └── ui/                    Reusable primitives (Button, TagList, ProjectCard, SectionHeading)
├── config/                    Site identity, navigation
├── content/                   Experience, projects, skills, stats, metrics
├── lib/                       Pure helpers (cn, format, schema)
├── styles/                    globals.css — the design-token cascade
└── types/                     Shared domain types
```

## Design tokens

The entire color scheme lives in `src/styles/globals.css`. Change one of these and the change cascades through the whole site:

| Token       | Value      | Meaning                          |
| ----------- | ---------- | -------------------------------- |
| `paper`     | `#0a0b0e`  | Page background                  |
| `surface`   | `#16181b`  | Raised cards, hover lifts        |
| `ink`       | `#f3f3ef`  | Primary text                     |
| `acid`     | `#bef264`  | Accent — used sparingly          |
| `grey`      | `#a5a59e`  | Secondary text                   |
| `mute`      | `#6b6d72`  | Tertiary text, mono labels       |
| `line`      | `#26282d`  | Primary section dividers         |
| `faint`     | `#1f2125`  | Hairlines between table rows     |

## Scripts

| Script                     | What it does                                |
| -------------------------- | ------------------------------------------- |
| `npm run dev`              | Dev server on http://localhost:3000         |
| `npm run build`            | Production build                            |
| `npm run start`            | Run the production build locally            |
| `npm run lint`             | ESLint                                      |
| `npm run format`           | Prettier write                              |
| `npm run typecheck`        | `tsc --noEmit`                              |
| `npm run test`             | Vitest run                                  |
| `npm run test:e2e`         | Playwright + axe                            |
| `npm run lhci`             | Lighthouse CI run                           |
| `npm run metrics:refresh`  | Rewrite `src/content/metrics.ts` from LHCI  |
| `npm run validate`         | Full local CI: typecheck · lint · format · test |

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub, then import at [vercel.com/new](https://vercel.com/new). Add the custom domain in Vercel → Project Settings → Domains. The build is fully static and edge-friendly.

## Editing content

Everything that shows on the page is data in `src/content/`:

- `experience.ts` — jobs
- `projects.ts` — projects
- `skills.ts` — skill groups
- `stats.ts` — hero stat strip
- `metrics.ts` — colophon numbers

Identity values live in `src/config/site.ts`. Add your résumé as `public/resume.pdf` and the hero button will link to it.

## Updating performance metrics

```bash
npm run build && npm run lhci && npm run metrics:refresh
git commit -am "chore: refresh metrics"
```

CI runs Lighthouse on every PR and fails if any category drops below 95.

## License

MIT — see [LICENSE](LICENSE).
