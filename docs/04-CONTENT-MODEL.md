# 04 — Content Model

## Objective
Keep business copy and editable page content separate from implementation code so non-technical editors can update the website with minimal risk.

## Target rule
All editable site content should live under `src/content/**` and be loaded through explicit Astro content collections.

## Current authoritative structure
```text
src/content/
  globals/
    site.json
    navigation.json
  pages/
    home.md
    capabilities.md
    product-development.md
    quality.md
    about.md
    contact.md
  data/
    home.json
    capabilities.json
    product-development.json
    quality.json
    about.json
    contact.json
src/content.config.ts
```

## Collection model
- `pages` collection: page-level editable copy and markdown body content.
- `site` collection: global organization metadata and shared contact details.
- `navigation` collection: global route navigation labels and hrefs.
- page data collections (`homeData`, `capabilitiesData`, `productDevelopmentData`, `qualityData`, `aboutData`, `contactData`): structured repeatable section content.

## File responsibilities
- `src/content/**` = editable content and structured page data
- `src/content.config.ts` = explicit collection typing and validation
- `src/content/queries.ts` = content loading helpers (not a copy authority)
- `src/pages/**` = route files
- `src/components/**` = reusable UI sections and patterns
- `src/layouts/**` = layout shells
- `src/styles/**` and/or `src/design/**` = tokens, motion, and styling systems

## Editing rule
Customer-facing text should not be buried in:
- component markup
- TypeScript helper files
- scattered adapter layers

## Non-technical editing goal
A non-technical editor should be able to update:
- headlines
- summaries
- CTA labels
- page sections
- service descriptions
without editing component code.

## Current route targets
- `src/pages/index.astro`
- `src/pages/capabilities.astro`
- `src/pages/product-development.astro`
- `src/pages/quality.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
