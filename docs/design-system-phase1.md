# BioChromaLabs Phase 1 — CSS Design System (Approval Draft)

This document defines a strict design-token layer for the upcoming layout refactor.

## 1) Core tokens (`:root`)

```css
:root {
  /* =============================
     COLOR SYSTEM
     ============================= */
  /* Surfaces (dark navy family) */
  --color-bg-900: #050b16; /* page background */
  --color-bg-800: #0d1726; /* section surface */
  --color-bg-700: #162338; /* elevated cards */

  /* Brand accents (teal/cyan family) */
  --color-accent-500: #24c78f; /* primary CTA / highlights */
  --color-accent-600: #18a877; /* hover state */
  --color-accent-300: #9fe7cf; /* soft glow / gradients */
  --color-accent-cyan: #5eead4; /* subtle interactive cyan edge */

  /* Support / semantic */
  --color-info-500: #1d4ed8; /* secondary signal */
  --color-success-500: #24c78f;
  --color-danger-500: #ef4444;

  /* Typography colors */
  --color-text-strong: #ffffff; /* primary headings */
  --color-text-base: #cbd5f5;   /* body copy */
  --color-text-muted: #94a3b8;  /* helper text */

  /* Borders + overlays */
  --color-border-subtle: rgba(255, 255, 255, 0.1);
  --color-border-strong: rgba(36, 199, 143, 0.45);
  --color-surface-glass: rgba(15, 23, 42, 0.7);

  /* =============================
     TYPOGRAPHY SYSTEM
     ============================= */
  --font-family-heading: "Montserrat", ui-sans-serif, system-ui, sans-serif;
  --font-family-body: "Inter", ui-sans-serif, system-ui, sans-serif;

  /* Type scale */
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-md: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  --font-size-2xl: 1.5rem;   /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */
  --font-size-4xl: 2.25rem;  /* 36px */
  --font-size-5xl: 3rem;     /* 48px */

  --line-height-tight: 1.15;
  --line-height-heading: 1.25;
  --line-height-body: 1.6;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* =============================
     SPACING SYSTEM (8px baseline)
     ============================= */
  --spacing-2xs: 0.25rem;  /* 4px */
  --spacing-xs: 0.5rem;    /* 8px */
  --spacing-sm: 0.75rem;   /* 12px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */
  --spacing-4xl: 6rem;     /* 96px */

  /* =============================
     LAYOUT + RADIUS + EFFECTS
     ============================= */
  --container-max: 80rem; /* 1280px */

  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-pill: 9999px;

  --shadow-soft: 0 10px 30px rgba(2, 8, 23, 0.35);
  --shadow-accent: 0 12px 36px rgba(36, 199, 143, 0.22);

  --transition-fast: 160ms ease;
  --transition-base: 260ms ease;
}
```

## 2) Section-level sizing guidance

- Hero vertical rhythm: `padding-block: var(--spacing-4xl)` desktop, `var(--spacing-3xl)` tablet, `var(--spacing-2xl)` mobile.
- Core section rhythm: `padding-block: var(--spacing-3xl)` desktop, `var(--spacing-2xl)` mobile.
- Cards: minimum internal spacing `padding: var(--spacing-lg)` (24px).
- Inter-card gaps:
  - Tight rows: `var(--spacing-md)`
  - Standard rows: `var(--spacing-lg)`
  - Section-level groups: `var(--spacing-xl)`

## 3) Interaction tokens

```css
:root {
  --hover-lift-y: -2px;
  --hover-border: var(--color-border-strong);
  --focus-ring: 0 0 0 3px rgba(36, 199, 143, 0.35);
}
```

## 4) Responsive type clamps (recommended)

```css
:root {
  --step-hero: clamp(2rem, 1.4rem + 3vw, 3.75rem);
  --step-h1: clamp(1.75rem, 1.3rem + 2vw, 3rem);
  --step-h2: clamp(1.5rem, 1.2rem + 1.3vw, 2.25rem);
  --step-body-lg: clamp(1rem, 0.95rem + 0.4vw, 1.25rem);
}
```

## 5) Implementation note for Phase 2+

- This token set intentionally preserves the current dark-navy + teal visual identity while creating stricter hierarchy and spacing consistency for hero + downstream section refactors.
