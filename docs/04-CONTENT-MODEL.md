# 04 — Content Model

## Objective
Keep business copy and editable page content separate from implementation code so non-technical editors can update the website with minimal risk.

## Target rule
All editable site content should live under `src/content/**`.

## Preferred structure
```text
src/content/
  globals/
    site.yaml
    navigation.yaml
    footer.yaml
    contact.yaml
  pages/
    home.yaml
    capabilities.yaml
    product-development.yaml
    quality.yaml
    about.yaml
    contact.yaml
  services/
    service-name.md
```

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
