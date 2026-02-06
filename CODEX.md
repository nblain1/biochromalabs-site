# Codex Working Agreement (Repo Contract)

## What this repo is
Astro static website.

## Golden rules
1) Before writing or changing business copy, read:
   - content-source/business-context.md
   - content-source/source-pages.md
   - content-source/claims-rules.md
2) Do not invent business facts. Use [NEEDS CONFIRMATION: ...] if unsure.
3) Prefer small, reviewable PR-sized changes.

## Commands
- Install: npm install
- Dev server: npm run dev
- Build: npm run build
- Preview: npm run preview

## Content workflow
- Curated facts: content-source/*
- Final page copy: content/pages/*
- Astro pages/components should pull from content/pages where practical.

## Output expectations
- Responsive
- Accessible headings/landmarks
- Consistent spacing/typography
