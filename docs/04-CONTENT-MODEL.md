# 04 — Content Model

## Objective
Keep business copy and editable page content separate from implementation code so non-technical editors can update the website with minimal risk.

## Target rule
All editable site content lives under `src/content/**` and is loaded through explicit Astro content collections.

## Current authoritative structure
```text
src/content/
  content.config.ts (at src/content.config.ts)
  site/
    site.json
  navigation/
    navigation.json
  pages/
    home.md
    capabilities.md
    product-development.md
    quality.md
    about.md
    contact.md
  pageData/
    home.json
    capabilities.json
    product-development.json
    quality.json
    about.json
    contact.json
```

## Collection responsibilities
- `site` collection (`site/site.json`) = business identity, contact details, shared SEO/business metadata
- `navigation` collection (`navigation/navigation.json`) = global route links and labels
- `pages` collection (`pages/*.md`) = page-level editable copy and markdown body content
- `pageData` collection (`pageData/*.json`) = structured section data arrays/objects used by page components

## File responsibilities
- `src/content/**` = editable content and structured page data
- `src/content.config.ts` = schema and explicit collection definitions
- `src/content/queries.ts` = content lookup helpers (not copy authority)
- `src/pages/**` = route files
- `src/components/**` = reusable UI sections and patterns
- `src/layouts/**` = layout shells
- `src/styles/**` and/or `src/design/**` = tokens, motion, and styling systems

## Editing rule
Customer-facing text should not be buried in:
- component markup
- TypeScript helper files
- scattered adapter layers outside `src/content/**`

## Non-technical editing goal
A non-technical editor should be able to update:
- headlines
- summaries
- CTA labels
- page sections
- service descriptions
without editing component code.

## Route targets
- `src/pages/index.astro`
- `src/pages/capabilities.astro`
- `src/pages/product-development.astro`
- `src/pages/quality.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`

## Architecture guardrails
- Keep one authoritative content source per page slug:
  - `src/content/pages/{slug}.md` for page copy
  - `src/content/pageData/{slug}.json` for structured section data
- Avoid creating duplicate content authorities in `src/data/**`.
- If new editable global content is needed, add it under an explicit `src/content/{collection}/**` folder and register/update schema in `src/content.config.ts`.
