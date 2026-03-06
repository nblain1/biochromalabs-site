# BioChroma Labs Website (Astro)

## Project overview
This repository contains the BioChroma Labs public website built with Astro as a static site.

It is intended for static hosting (for example Cloudflare Pages or another static host). The site does **not** include on-site form processing or any backend/API service.

## Stack and hosting model
- Astro (static site build)
- TypeScript + Astro components
- Static output in `dist/`
- Deploy to Cloudflare Pages or equivalent static hosting

## Local development
### Prerequisites
- Node.js 18+
- npm

### Commands
```bash
npm ci
npm run dev
npm run build
npm run preview
npm run check:dist
npm run check:seo
```

## Validation
Use these checks before merge/deploy:

- `npm run build` — generate static site output in `dist/`
- `npm run check:dist` — verify distribution output
- `npm run check:seo` — run repository SEO validation checks

## Content editing (non-technical)
Customer-facing content should be edited in `src/content/**`.

Primary editable areas:
- `src/content/pages/` — page-level markdown content
- `src/content/data/` — structured JSON content used by pages
- `src/content/globals/` — shared site/global content (e.g., nav/site metadata)

Keep customer-facing text in these content files. Avoid duplicating business content across multiple TypeScript data blobs.

## Code and layout changes (developers)
Implementation and rendering logic live in:
- `src/components/` — reusable Astro UI components
- `src/layouts/` — page layout wrappers
- `src/pages/` — routed page templates
- `src/data/` — developer-managed data/helpers for code-level use

## Repository structure
```text
.
├── public/            # Static assets copied directly at build time
├── scripts/           # Validation/check scripts (dist, SEO)
├── src/
│   ├── components/    # Reusable Astro components
│   ├── content/       # Editable content authority
│   │   ├── data/
│   │   ├── globals/
│   │   └── pages/
│   ├── data/          # Developer-managed data modules
│   ├── layouts/       # Shared page layouts
│   └── pages/         # Astro route files
├── astro.config.mjs
├── package.json
└── README.md
```

## Deployment notes
1. Run `npm ci`
2. Run `npm run build`
3. Run `npm run check:dist` and `npm run check:seo`
4. Publish the generated `dist/` directory via Cloudflare Pages (or equivalent static host)
