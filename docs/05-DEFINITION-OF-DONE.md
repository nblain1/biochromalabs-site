# 05 — Definition of Done

A task is not done until all applicable items below are satisfied.

## Build and technical checks
- `npm run build` passes
- `npm run check:dist` passes
- `npm run check:seo` passes
- No broken routes
- No obvious console or build errors introduced

## UX and design checks
- Pages feel more cohesive than before
- Hierarchy is easier to scan
- Sections flow logically
- CTAs are visible and make sense
- Mobile layout remains clean
- Motion feels polished, not distracting

## Content checks
- Copy is clearer and more relevant
- No invented business facts
- No duplicate or conflicting content authorities
- Editable content remains easy to find
- Content changes align with `docs/02-BUSINESS-TRUTH.md`

## Repo hygiene checks
- Diffs are understandable
- New abstractions are justified
- No unnecessary dependencies
- No hidden configuration surprises
- Documentation is updated when structure changes

## Final acceptance test
A non-technical reviewer should be able to:
- understand what the business does
- trust the site more quickly
- find the next step more easily
- identify where to edit text without digging through implementation files
