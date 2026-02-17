# Copilot Instructions for BioChroma Labs Website

## Project Overview
**BioChroma Analytical Labs LLC** is a professional static website built with **Astro 5.15.3**, designed for an ISO 17025-accredited analytical laboratory. The site is **data-driven, component-based, and zero-JavaScript-by-default** for optimal performance.

## Architecture & Key Patterns

### Data-Driven Content Model
- **Single source of truth**: All page content (capabilities, FAQs, services, industries, process steps) lives in [src/data/siteData.ts](src/data/siteData.ts)
- Updates to `siteData.ts` automatically reflect across all pages without modifying components
- Export structure: named exports like `siteData`, `capabilityHighlights`, `industries`, `processSteps`, `qualityCommitments`, `serviceLines`, `faqs`, `testimonials`, `heroStats`

### Component Architecture
- **Layout wrapper** ([src/layouts/Layout.astro](src/layouts/Layout.astro)): All pages must import this—it handles `<head>` metadata, JSON-LD schema, and imports Header/Footer
- **Reusable components**: Located in [src/components/](src/components/) (e.g., Header, Footer, CTA, FAQ)
- **Unused components archive**: [src/components/unused/](src/components/unused/) contains deprecated components—reference these only if implementing similar patterns
- **Pages**: [src/pages/](src/pages/) use Astro routing; each page imports Layout and maps data arrays to component markup

### Styling Approach
- **Zero scoped CSS**: Use Tailwind utility classes (installed via `@tailwindcss/vite`)
- **Global design system**: [src/styles/global.css](src/styles/global.css) defines CSS variables (e.g., `--navy`, `--teal`) and base typography
- **Component styles**: Scoped `<style>` blocks in `.astro` files for any non-Tailwind customizations
- **Color scheme**: Dark theme (bg-slate-950, text-white) with emerald-500 accents; avoid hard-coded colors—use Tailwind classes

### Icon System
- **RemixIcon library** (v4.7.0): Import in Layout via `remixicon/fonts/remixicon.css`
- Icons use `ri-` prefix (e.g., `<i class="ri-flask-line"></i>`)
- Lookup available icons at [https://remixicon.com](https://remixicon.com)

## Development Workflow

### Commands
```bash
npm run dev      # Start Astro dev server (http://localhost:4321)
npm run build    # Generate static dist/ directory for production
npm run preview  # Preview production build locally
npm run astro    # Run any Astro CLI command
```

### Git & Deployment
- Static site generation outputs to `dist/` folder
- Ready for deployment on GitHub Pages, Netlify, Vercel, or standard web hosting
- No build-time secrets needed; all content is public

## Project-Specific Conventions

### Creating New Pages
1. Create `.astro` file in [src/pages/](src/pages/)
2. Import Layout and required data from siteData
3. Wrap page content in Layout component with `title` and `description` props
4. Use `Astro.props` for dynamic page props

### TypeScript Usage
- `tsconfig.json` enables strict TypeScript
- Define interfaces for component props (e.g., `interface Props { title?: string; }`)
- Astro automatically detects prop types from interfaces marked with `interface Props`

### SEO & Head Management
- All pages inherit meta tags, canonical URLs, and JSON-LD schema from Layout
- Customize per-page: pass `title` and `description` props to Layout
- JSON-LD uses LocalBusiness schema; update in Layout if needed

### Navigation & Active States
- Navigation links defined in `siteData.ts` under `navigation` array
- Active state detection built into Header component via `isActive()` function
- Add new pages by adding to `navigation` array in siteData

### Typography & Spacing
- Fonts: **Inter** (body), **Montserrat** (headings) — imported in Layout
- Use Tailwind's spacing scale; avoid custom margins/padding
- Heading sizes: `h1` (text-4xl+), `h2` (text-3xl), `h3` (text-xl+)

## Integration Points

### File Dependencies
- **Pages → Layout**: Required wrapper for all pages
- **Components → siteData**: Import specific exports (e.g., `import { capabilityHighlights } from '../data/siteData'`)
- **Header → siteData**: Navigation and company info
- **Footer → siteData**: Contact details

### Common Patterns
- **Mapping arrays to HTML**: Use `.map()` within JSX (e.g., `{items.map((item) => <li>{item.title}</li>)}`)
- **Conditional rendering**: Use JavaScript ternary or logical operators within curly braces
- **Responsive grids**: Use Tailwind responsive classes (e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)

## When Modifying Content
- **Lab capabilities, FAQs, services**: Edit [src/data/siteData.ts](src/data/siteData.ts)—no component changes needed
- **Page layout/design**: Modify pages in [src/pages/](src/pages/) or create new reusable components in [src/components/](src/components/)
- **Global styles** (colors, fonts, base spacing): Update [src/styles/global.css](src/styles/global.css)

## Tech Stack Summary
| Tool | Version | Purpose |
|------|---------|---------|
| Astro | ^5.15.3 | Static site generation |
| TypeScript | Latest | Type safety |
| Tailwind CSS | ^4.1.16 | Utility-first styling |
| RemixIcon | ^4.7.0 | Icon library |
| @tailwindcss/vite | ^4.1.16 | Vite plugin for Tailwind |

## Key Files to Review
- [src/data/siteData.ts](src/data/siteData.ts) — Content model for all pages
- [src/layouts/Layout.astro](src/layouts/Layout.astro) — Head, schema, Header/Footer wrapper
- [src/pages/index.astro](src/pages/index.astro) — Example page showcasing data mapping patterns
- [src/styles/global.css](src/styles/global.css) — Design system variables and base styles
