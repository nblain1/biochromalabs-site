# AGENTS.md

## Purpose
This repository is a static Astro website. The goal is to improve information flow, UX, visual cohesion, polish, and customer relevance while keeping business facts accurate.

## Fresh-start rule
Ignore deleted legacy instruction files and do not rely on historical assumptions. Only use the current repository plus the files in `docs/` as active guidance.

## Priority order
If guidance conflicts, use this order:
1. `docs/02-BUSINESS-TRUTH.md`
2. `docs/05-DEFINITION-OF-DONE.md`
3. `docs/03-DESIGN-DIRECTION.md`
4. `docs/04-CONTENT-MODEL.md`
5. `docs/01-SITE-VISION.md`

## Non-negotiables
- Do not invent services, accreditations, certifications, turnaround times, staffing claims, regulatory claims, methods, industries served, or customer results.
- Keep customer-facing copy out of components when possible.
- Put editable site content in `src/content/**`.
- Preserve a clean static Astro build.
- Prefer reusable section patterns over one-off layouts.
- Prefer tasteful motion and polish over novelty.

## Allowed autonomy
You may:
- restructure sections and page flow
- refactor components
- improve spacing, hierarchy, and scanability
- improve responsive behavior
- improve motion, transitions, and interaction polish
- tighten or rewrite copy only when it remains consistent with `docs/02-BUSINESS-TRUTH.md`

You may not:
- fabricate business facts
- add dependencies without a clear reason
- replace the stack
- create hidden content systems outside `src/content/**`
- leave broken routes, broken builds, or duplicate content authorities

## Content and code boundaries
- Editable content belongs in `src/content/**`
- Rendering logic belongs in `src/pages/**`, `src/components/**`, and `src/layouts/**`
- Design tokens, motion presets, and reusable styling rules belong in `src/design/**` or `src/styles/**`
- TypeScript helper files must not become the source of truth for customer-facing copy

## Required validation
Run these before considering work complete:
- `npm run build`
- `npm run check:dist`
- `npm run check:seo`

## Preferred workflow
- One meaningful task per PR
- Keep diffs focused
- Summarize structural, visual, and content changes separately
- If content architecture is changed, update `docs/04-CONTENT-MODEL.md`

## PR execution guardrails
- PRs are the unit of work; keep each PR narrowly scoped and reviewable.
- Base and target branch for delivery is `main` unless explicitly told otherwise.
- Preserve the explicit Astro content collection model merged in PR #38 (collections, query layer, and authoritative content locations).
- Avoid duplicate content authority: customer-facing copy and data must remain authoritative in `src/content/**`.
- Do not perform broad design-system rewrites unless explicitly requested for that task.
- Run verification (`npm run build`, `npm run check:dist`, `npm run check:seo`) before proposing a PR.
- Report exactly what changed and why, including any uncertainties or follow-up items.
