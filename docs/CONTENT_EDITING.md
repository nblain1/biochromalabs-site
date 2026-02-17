# Content Editing Guide

## Non-technical editing workflow

All human-editable copy now has a mirrored content layer under `src/content/**` so non-technical updates can be made directly in the GitHub UI.

- Update **global brand/contact/navigation** content in:
  - `src/content/globals/site.json`
  - `src/content/globals/navigation.json`
- Update **page-level copy** in Markdown frontmatter:
  - `src/content/pages/home.md`
  - `src/content/pages/about.md`
  - `src/content/pages/capabilities.md`
  - `src/content/pages/quality.md`
  - `src/content/pages/contact.md`
- Update **structured page datasets** in:
  - `src/content/data/home.json`
  - `src/content/data/about.json`
  - `src/content/data/capabilities.json`
  - `src/content/data/quality.json`
  - `src/content/data/contact.json`

## Adapter and compatibility layers

- `src/data/content.ts` exports normalized content objects for future page/component migrations.
- `src/data/siteData.ts` remains the compatibility source used by current pages/components.

## Important

Do **not** edit `src/pages/*.astro` for text-only updates unless you are intentionally changing layout/structure.
