# 04 — Content Model

## Objective
Keep business copy and editable page content separate from implementation code so non-technical editors can update the website with minimal risk.

## Target rule
All editable site content should live under `src/content/**` and be loaded through explicit Astro content collections.

## Active structure
```text
src/content/
  globalSite/
    site.json
  globalNavigation/
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
src/content.config.ts
```

## Collection model
`src/content.config.ts` is the single content contract for the site:
- `pages` (markdown body + typed frontmatter)
- `pageData` (structured JSON per page)
- `globalSite` (shared site identity/contact/meta data)
- `globalNavigation` (shared navigation links)

Routes and reusable components should read from these collections using `astro:content` APIs.

## File responsibilities
- `src/content/**` = editable content and structured page data
- `src/content.config.ts` = content collection definitions and schemas
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
