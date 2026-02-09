export const siteData = {
  name: "BioChroma Analytical Labs",
  tagline: "Analytical clarity for regulated science",
  description:
    "BioChroma Analytical Labs delivers defensible analytical testing, method validation, and stability programs for regulated products.",
  address: "500 Research Parkway, Suite 200, Cambridge, MA 02139",
  phone: "+1 (555) 214-9010",
  email: "info@biochromalabs.com",
  social: {
    linkedin: "https://www.linkedin.com",
  },
};

export const socialLinks = [{ name: "linkedin", icon: "ri-linkedin-fill", label: "LinkedIn" }];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Capabilities", href: "/services" },
  { name: "Quality", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const heroStats = [
  { number: "20+", label: "Validated methods", note: "Across chemistry + microbiology" },
  { number: "48h", label: "Status cadence", note: "Defined project updates" },
  { number: "100%", label: "Chain of custody", note: "Documented receipt to release" },
];

export const capabilityHighlights = [
  {
    title: "Analytical chemistry",
    description: "Assay, impurities, and compositional analysis using qualified instrumentation.",
    icon: "ri-flask-line",
    bullets: ["HPLC/UPLC", "GC & residuals", "Spectroscopy"],
  },
  {
    title: "Microbiology",
    description: "Bioburden, sterility, and environmental monitoring for regulated manufacturing.",
    icon: "ri-bug-line",
    bullets: ["Bioburden & endotoxin", "EM programs", "Micro ID"],
  },
  {
    title: "Stability programs",
    description: "Protocol design, pulls, and trend reporting with qualified chambers.",
    icon: "ri-timer-line",
    bullets: ["Protocol authoring", "Stability pulls", "Trend analysis"],
  },
  {
    title: "Method development",
    description: "Development, transfer, and validation aligned to regulatory expectations.",
    icon: "ri-file-list-3-line",
    bullets: ["Transfer packages", "Validation plans", "Documentation"],
  },
];

export const industries = [
  "Pharmaceuticals",
  "Medical devices",
  "Nutraceuticals",
  "Food & beverage",
  "Biotech R&D",
  "Cosmeceuticals",
];

export const processSteps = [
  {
    title: "Scope + feasibility",
    description: "Align on sample types, methods, regulatory expectations, and timing constraints.",
  },
  {
    title: "Sample intake",
    description: "Documented receipt, accessioning, and chain-of-custody controls.",
  },
  {
    title: "Execution + review",
    description: "Testing run by qualified analysts with independent data review checkpoints.",
  },
  {
    title: "Reporting",
    description: "Audit-ready reports delivered with clear tables, methods, and sign-off.",
  },
];

export const qualityCommitments = [
  {
    title: "Documented quality system",
    description: "Controlled procedures, change management, and deviation tracking for every program.",
    icon: "ri-shield-check-line",
  },
  {
    title: "Data integrity focus",
    description: "Independent review and traceable datasets with secure reporting workflows.",
    icon: "ri-lock-line",
  },
  {
    title: "Regulatory alignment",
    description: "Fit-for-purpose validation plans mapped to client regulatory requirements.",
    icon: "ri-git-merge-line",
  },
];

export const serviceLines = [
  {
    title: "Analytical chemistry",
    description: "Quantitative and qualitative analysis for regulated products and intermediates.",
    services: [
      "Assay + potency",
      "Impurity profiling",
      "Residual solvent testing",
      "Spectroscopy",
      "Raw material identification",
    ],
  },
  {
    title: "Microbiology",
    description: "Risk-based microbiology programs designed for release and monitoring.",
    services: [
      "Bioburden & endotoxin",
      "Sterility testing",
      "Environmental monitoring",
      "Microbial identification",
      "Cleanroom support",
    ],
  },
  {
    title: "Stability",
    description: "Stability programs that scale from pilot studies to commercial lifecycle support.",
    services: ["Protocol design", "Stability pulls", "Trend analysis", "Storage monitoring"],
  },
  {
    title: "Method development",
    description: "Transfer-ready methods with full documentation and validation support.",
    services: ["Method development", "Transfer packages", "Validation planning", "Tech transfer"],
  },
];

export const serviceAssurance = [
  {
    title: "Dedicated project lead",
    description: "Single point of contact for scheduling, updates, and deliverables.",
    icon: "ri-user-star-line",
  },
  {
    title: "Defined turnaround windows",
    description: "Scoping includes scheduling windows and clear reporting cadence.",
    icon: "ri-calendar-check-line",
  },
  {
    title: "Regulatory-ready documentation",
    description: "Reports structured for submissions, audits, and partner review.",
    icon: "ri-file-paper-2-line",
  },
];

export const testimonials = [
  {
    name: "Quality Director",
    role: "Nutraceutical manufacturer",
    content:
      "BioChroma’s documentation and data review made our audit preparation far more efficient.",
  },
  {
    name: "Regulatory Affairs Lead",
    role: "Medical device company",
    content: "Their method transfer support aligned perfectly with our submission timeline.",
  },
  {
    name: "Operations Manager",
    role: "Food producer",
    content: "Clear communication and dependable data quality helped us scale our program quickly.",
  },
];

export const faqs = [
  {
    question: "What sample types do you accept?",
    answer:
      "We support raw materials, intermediates, finished goods, and environmental samples. We confirm suitability during scoping.",
  },
  {
    question: "How fast is turnaround?",
    answer:
      "Turnaround is defined in the scope. We provide confirmed scheduling windows and 48-hour status updates.",
  },
  {
    question: "Can you support method validation?",
    answer:
      "Yes. We build validation plans aligned to your regulatory pathway and provide complete documentation.",
  },
  {
    question: "How are reports delivered?",
    answer:
      "Reports are delivered electronically with method references, data tables, and reviewer sign-off.",
  },
];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Address",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-phone-line",
    title: "Phone",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
  {
    icon: "ri-time-line",
    title: "Hours",
    content: ["Monday - Friday: 8:00 AM - 6:00 PM", "Sample receiving by appointment"],
    link: null,
  },
];

export const teamMembers = [
  {
    name: "Dr. Maya Patel",
    role: "Laboratory Director",
    specialization: "Analytical Chemistry & Quality Systems",
    experience: "12+ years",
    bio: "Maya oversees laboratory operations, method validation, and quality documentation to ensure defensible results.",
    image: "https://images.unsplash.com/photo-1581091012184-5c7a6c4d8e9f?w=500&h=500&fit=crop&q=80",
    certifications: ["Ph.D. Chemistry", "Quality Systems Lead", "Method Validation"],
  },
  {
    name: "Jordan Lee",
    role: "Microbiology Lead",
    specialization: "Microbiology & Environmental Monitoring",
    experience: "10+ years",
    bio: "Jordan leads microbiology testing programs with a focus on compliance and risk-based monitoring.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&h=500&fit=crop&q=80",
    certifications: ["Microbiology Lead", "EM Program Design", "Sterility Testing"],
  },
  {
    name: "Elena Ruiz",
    role: "Method Development Manager",
    specialization: "Method Development & Transfer",
    experience: "9+ years",
    bio: "Elena manages complex method development and transfer projects with a focus on regulatory readiness.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=500&fit=crop&q=80",
    certifications: ["Method Development", "Validation Planning", "Tech Transfer"],
  },
];

export const history = [
  {
    year: "2013",
    title: "Founded",
    description: "BioChroma Analytical Labs launched to provide rigorous analytical testing for regulated products.",
  },
  {
    year: "2018",
    title: "Quality System Expansion",
    description: "Formalized documentation controls, independent data review, and client reporting workflows.",
  },
  {
    year: "2021",
    title: "Microbiology Suite",
    description: "Opened a dedicated microbiology lab to support sterility and environmental programs.",
  },
  {
    year: "2024",
    title: "Stability Capacity",
    description: "Expanded stability chamber capacity with integrated protocol design and reporting.",
  },
];
