# LLM System Instructions: BioChroma Labs Website

## 1. Project Overview & Core Philosophy

**BioChroma Analytical Labs LLC** is a professional static website built with **Astro 5.15.3**, designed for an ISO 17025-accredited analytical laboratory.

**The Core Philosophy:** The site must act as a "Technical Extension" of the client's R&D team. The target audience includes QA Managers, Formulation Scientists, and Regulatory Auditors.

* **Tone:** Highly technical, audit-ready, and outcome-oriented. Use regulatory language accurately (e.g., ALCOA+, USP/NF compendial chapters, ICH guidelines, cGMP, Prop 65).
* **Performance:** Data-driven, component-based, and **zero-JavaScript-by-default**. Any added interactivity must use native HTML/browser APIs to maintain maximum SEO value and lightning-fast load times.

## 2. Content Strategy: Progressive Disclosure

Do not overwhelm the user with walls of text, but do not hide technical depth. Use the **Progressive Disclosure (Card-to-Modal)** pattern:

1. **The Summary (The Card):** Display scannable grids of information. Cards should feature an icon, a clear title, a primary methodology, and a 1-2 sentence high-level summary.
2. **The Deep Dive (The Modal):** Cards must act as `<button>` triggers for a native HTML5 `<dialog>`. The modal contains the "Information Dense" payload: deep-dive SOPs, equipment validation details, regulatory guardrails, and audit-trail specifics.

## 3. UI/UX & Interactive Patterns

### Interactive Modals (Native `<dialog>`)

Never introduce heavy modal libraries. Use the native HTML5 `<dialog>` element.

* **Trigger:** `<button onclick="document.getElementById('modal-id').showModal()">`
* **Styling:** Style the backdrop natively using `backdrop:bg-slate-950/80 backdrop:backdrop-blur-sm`.
* **Animation:** Add a simple `@keyframes` fade/zoom to the `dialog[open]` state.
* **UX JavaScript:** Include a tiny vanilla JS script at the bottom of the `.astro` file to close the dialog when clicking the backdrop and to lock `document.body.style.overflow` when open.

### Scroll Animations (Zero-Dependency)

Never use GSAP, Framer Motion, or other heavy animation libraries. Use the native **Intersection Observer API** combined with CSS transitions.

* **CSS Classes:** Use utility classes like `.reveal-up` (transforms Y and opacity) and `.reveal-scale`.
* **Accessibility:** All animations MUST be wrapped in `@media (prefers-reduced-motion: no-preference)`.
* **The Waterfall Effect:** For mapped arrays (grids/lists), use the array `index` to generate inline transition delays for staggered reveals: `style={`transition-delay: ${index * 150}ms;`}`.
* **The Observer:** A vanilla JS script at the bottom of the page applies an `.active` class when elements enter the viewport (`threshold: 0.1`), triggering the CSS transition.

### Asset Management (Images)

* **Never direct-link external images** for structural layout content.
* All images must be stored locally in `src/assets/`.
* Import images and render them using Astro's highly optimized `<Image />` component:
`import { Image } from 'astro:assets';`
`import heroImg from '../assets/hero.jpg';`
`<Image src={heroImg} alt="..." loading="eager|lazy" />`

## 4. Architecture & Tech Stack

| Tool | Version | Purpose |
| --- | --- | --- |
| **Astro** | ^5.15.3 | Static site generation and routing |
| **TypeScript** | Latest | Strict type safety for data models and props |
| **Tailwind CSS** | ^4.1.16 | Utility-first styling (`@tailwindcss/vite`) |
| **RemixIcon** | ^4.7.0 | Icon library (`ri-flask-line`, etc.) |

### Data-Driven Content Model

* **Single Source of Truth:** Core lists (FAQs, navigation, capabilities) live in `src/data/siteData.ts`.
* **Page-Specific Data:** Complex, highly specific nested data (like the Technical Specs on the Capabilities page) can be defined as an array of objects directly in the frontmatter of the specific `.astro` page.

### Styling Approach

* **Color Scheme:** Dark theme (`bg-slate-950`, `text-white`) with emerald-500/400 accents.
* **Zero scoped CSS:** Rely almost entirely on Tailwind utility classes.
* **Global Design:** `src/styles/global.css` defines base CSS variables and typography.
* **Typography:** Fonts are **Inter** (body) and **Montserrat** (headings). Tailwind spacing scale applies.

## 5. Development Conventions

### Creating & Structuring Pages

1. **Layout Wrapper:** Every page must import `src/layouts/Layout.astro` and wrap content in it, passing `title` and `description` props for SEO.
2. **Hero Section:** Pages should start with a `<section class="home-hero">` containing breadcrumbs and a split copy/media layout.
3. **Data Mapping:** Map arrays to HTML using JSX syntax: `{items.map((item, index) => (...))}`.

### TypeScript Usage

* `tsconfig.json` enables strict TypeScript.
* Define interfaces for component props using `interface Props { ... }`. Astro automatically detects this.

### SEO & Head Management

* The `Layout.astro` wrapper handles `<head>`, canonical URLs, and LocalBusiness JSON-LD schema.
* Always provide distinct, keyword-rich (but natural) meta descriptions via the Layout props.

## 6. Key Files Directory

* `src/data/siteData.ts` — Global variables, company info, and shared data arrays.
* `src/layouts/Layout.astro` — The core page wrapper (Head, Header, Footer).
* `src/styles/global.css` — Tailwind base directives and custom font imports.
* `src/assets/` — Directory for all local images utilized by the `<Image />` component.
* `src/pages/` — Route directory (e.g., `quality.astro`, `capabilities.astro`, `about.astro`).