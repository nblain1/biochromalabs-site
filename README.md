# BioChroma Analytical Labs LLC - Official Website

A modern, high-performance static website built with [Astro](https://astro.build), designed specifically for an ISO 17025 accredited analytical laboratory. The site features a professional dark-theme UI with teal accents, built to establish scientific trust and effectively route client inquiries.

![Astro](https://img.shields.io/badge/Astro-5.15.3-FF5D01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## 🌟 Features

- **Scientific UI/UX**: Custom dark-mode design system tailored for analytical labs, featuring high-contrast typography and subtle interactive states.
- **Fast Performance**: Static site generation (SSG) with Astro for optimal loading speeds and zero-JavaScript-by-default performance.
- **Data-Driven Architecture**: Content is isolated in `src/data/siteData.ts` for easy updates without touching the visual layout components.
- **Comprehensive Content**:
  - **Homepage**: Value proposition, process timeline, and top-level capabilities.
  - **Capabilities**: Expanding "Deep Dive" accordions detailing specific compendial testing (Chemistry, Microbiology, R&D).
  - **Quality & Compliance**: Dedicated sections for ISO 17025 accreditation and core Quality System Elements (QSEs).
  - **Contact**: Streamlined lead-generation form and direct-access information.
- **Responsive Layout**: Fluid CSS variables and media queries ensure seamless operation across mobile, tablet, and desktop devices.
- **SEO Optimized**: Semantic HTML5 and structured meta tags.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/nblain1/biochromalabs-site.git](https://github.com/nblain1/biochromalabs-site.git)
cd biochromalabs-site
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open your browser and navigate to http://localhost:4321

📁 Project Structure
Plaintext
/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── Layout.astro     # Main page wrapper and `<head>` data
│   ├── data/
│   │   └── siteData.ts      # Core lab data (Capabilities, FAQs, Industries)
│   ├── pages/               # Route pages
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # Facility & Mission
│   │   ├── capabilities.astro # Testing catalog and R&D services
│   │   ├── contact.astro    # Lead gen and location
│   │   └── quality.astro    # ISO 17025 & Compliance
│   └── styles/
│       └── global.css       # Global CSS variables and base styles
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
└── tsconfig.json            # TypeScript configuration
🎨 Customization & Content Management
Updating Lab Data
To update the specific scientific tests, FAQs, or contact info, edit src/data/siteData.ts. The Astro components will automatically map and render the updated data arrays.

Styling
This project uses vanilla CSS with modern variables for lightweight performance.

Modify src/styles/global.css to adjust the core design system (Colors: --navy, --teal, etc.).

Component-specific styles are scoped within the <style> tags at the bottom of individual .astro files.

🚢 Deployment
Build for Production
Bash
npm run build
This generates a dist/ directory containing your optimized static HTML/CSS, ready to be hosted on GitHub Pages, Netlify, Vercel, or any standard web server.

📧 Contact
BioChroma Analytical Labs LLC

Address: 1309 Record Crossing Road, Dallas, TX 75235 (DFW Metroplex)

Phone: (972) 454-9166

Email: info@biochromalabs.com

Website: biochromalabs.com

Bridging technical gaps in product development from inception to the marketplace.