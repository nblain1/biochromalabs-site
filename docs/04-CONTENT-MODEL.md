# 04 — Content Model

## Objective
Keep business copy and editable page content separate from implementation code so non-technical editors can update the website with minimal risk.

## Target rule
All editable site content should live under `src/content/**`.

## Active architecture
```text
src/content.config.ts
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
```

## Astro collection map
- `pages` (Markdown content collection): page-level copy and section headings.
- `site` (JSON data collection): shared brand/contact/footer/header config.
- `navigation` (JSON data collection): primary route navigation.
- `homeData`, `capabilitiesData`, `productDevelopmentData`, `qualityData`, `aboutData`, `contactData` (JSON data collections): structured per-page arrays/cards/metadata.

## File responsibilities
- `src/content/**` = editable content and structured page data
- `src/pages/**` = route files
- `src/components/**` = reusable UI sections and patterns
- `src/layouts/**` = layout shells
- `src/styles/**` and/or `src/design/**` = tokens, motion, and styling systems

## Editing rule
Customer-facing text should not be buried in:
- component markup
- TypeScript helper files
- scattered JSON and adapter layers

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

## Migration guidance
During refactors:
- reduce duplicate content authorities
- avoid keeping the same business copy in multiple file types
- prefer one authoritative content source per page or shared content block
