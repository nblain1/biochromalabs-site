import { navigation as contentNavigation, site as contentSite } from './content';

export const siteData = {
  name: contentSite.name,
  tagline: contentSite.tagline,
  description: contentSite.description,
  phone: contentSite.phone,
  email: contentSite.email,
  social: contentSite.social,
};

export const socialLinks = [];

export const navigation = contentNavigation;

export const heroStats = [
  { number: "ISO 17025", label: "Quality system experience", note: "Expertise in regulated testing programs." },
  {
    number: "Compendia methods",
    label: "USP • AOAC • FDA BAM • USDA",
    note: "Microbiological and chemical testing.",
  },
  {
    number: "End-to-end support",
    label: "Inception to marketplace",
    note: "Analytical testing, consulting, and quality guidance.",
  },
];

/* PHASE 2: Outcome-First Messaging Applied Here */
export const capabilityHighlights = [
  {
    title: "Operational Safety & Pathogen Screening",
    description: "Defensible microbiological testing to support shelf life, facility hygiene, and consumer safety decisions.",
    icon: "ri-bug-line",
    bullets: ["Shelf life studies", "Pathogenic bacteria", "Preservative efficacy", "Environmental monitoring"],
  },
  {
    title: "Identity & Label Claim Verification",
    description: "Rigorous chemical analysis using compendial methods to verify raw material authenticity and active ingredient potency.",
    icon: "ri-flask-line",
    bullets: ["Raw material ID", "Active ingredient assay", "Nutritional analysis", "Allergen testing"],
  },
  {
    title: "Data-Driven Shelf Life Studies",
    description: "Custom stability programs designed to monitor and defend product performance across lifecycle storage conditions.",
    icon: "ri-timer-line",
    bullets: ["Real time", "Accelerated", "Stress", "Forced degradation"],
  },
  {
    title: "Functional Performance Validation",
    description: "Laboratory studies designed to objectively demonstrate and substantiate product performance claims.",
    icon: "ri-test-tube-line",
    bullets: ["In vitro bioavailability", "Skin permeability", "Enzyme assays", "Microbial kill studies"],
  },
  {
    title: "Strategic Quality Planning",
    description: "Expert guidance on manufacturing compliance, packaging decisions, and regulatory readiness.",
    icon: "ri-lightbulb-flash-line",
    bullets: [
      "Ingredient stability advice",
      "Packaging & closures",
      "Contract manufacturer selection",
      "Quality & regulatory advice",
    ],
  },
  {
    title: "Concept-to-Market Commercialization",
    description: "Technical support from ideation through launch, including formulation feasibility and scale-up planning.",
    icon: "ri-rocket-2-line",
    bullets: [
      "Skin/body/hair care",
      "Dietary supplement development",
      "Prototype formulation",
      "Scale-up support",
    ],
  },
];

export const industries = [
  "Cosmetics",
  "Skin care",
  "Topical & oral OTCs",
  "Food & beverage",
  "Dietary supplements",
  "Household cleaners",
];

export const processSteps = [
  {
    title: "Discovery",
    description: "Client-driven ideas shaped by market trends, buyer requests, and competitive insights.",
  },
  {
    title: "Screening",
    description: "Consulting on technical merits, regulatory requirements, and early manufacturing plans.",
  },
  {
    title: "Feasibility assessment",
    description: "Guidance on ingredient pricing, packaging choices, and logistics to define scope.",
  },
  {
    title: "Development",
    description: "Ingredient research, prototype formulation, and planning for scale-up production.",
  },
  {
    title: "Testing",
    description: "Chemical ID, stability, organoleptic, contamination, and active ingredient assays.",
  },
  {
    title: "Launch",
    description: "Support as products move into distribution pipelines and market activation.",
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

/* PHASE 2: Outcome-First Messaging Applied Here */
export const serviceLines = [
  {
    title: "Purity & Label Claim Verification",
    description: "Quantitative and qualitative analysis ensuring compliance for regulated products and intermediates.",
    services: [
      "Assay + potency",
      "Impurity profiling",
      "Residual solvent testing",
      "Spectroscopy",
      "Raw material identification",
    ],
  },
  {
    title: "Product Safety & Facility Hygiene",
    description: "Risk-based microbiology programs designed for secure product release and environmental monitoring.",
    services: [
      "Bioburden & endotoxin",
      "Sterility testing",
      "Environmental monitoring",
      "Microbial identification",
      "Cleanroom support",
    ],
  },
  {
    title: "Lifecycle & Degradation Studies",
    description: "Stability programs that scale from pilot feasibility to commercial lifecycle defensibility.",
    services: ["Protocol design", "Stability pulls", "Trend analysis", "Storage monitoring"],
  },
  {
    title: "Defensible Method Lifecycle",
    description: "Transfer-ready analytical methods with complete documentation and validation support.",
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
    question: "Where is BioChroma Analytical Labs LLC based?",
    answer:
      "We are based out of the DFW metroplex in the heart of Texas.",
  },
  {
    question: "What products do you support?",
    answer:
      "We bring experience across cosmetics, skin care, topical and oral OTCs, food, beverages, dietary supplements, and household cleaners.",
  },
  {
    question: "What testing areas are available?",
    answer:
      "We provide microbiological and chemical testing using compendia methods, plus stability and laboratory studies to support product performance.",
  },
  {
    question: "How do you support product development?",
    answer:
      "We assist through discovery, screening, feasibility, development, testing, and launch with consulting and technical guidance.",
  },
];

export const contactInfo = [
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

/* PHASE 2: Outcome-First Messaging Applied Here */
export const detailedCapabilities = [
  {
    category: "Identity & Purity Verification",
    summary: "Chemical testing using compendial methods to ensure raw materials and final products meet specification.",
    icon: "ri-test-tube-line",
    tests: ["Nutritional analysis", "Mineral analysis", "Vitamin analysis", "Preservative analysis", "Active Ingredient assay", "Allergen testing", "Raw material ID"]
  },
  {
    category: "Safety & Spoilage Prevention",
    summary: "Defensible microbiological testing to support shelf life, facility hygiene, and regulatory clearance.",
    icon: "ri-microscope-line",
    tests: ["General microbiology", "Pathogenic Bacteria", "Spoilage Organisms", "Preservative Efficacy", "Bacterial Challenge Studies", "In vitro Time-Kill Studies", "Antibiotic Studies", "Water Suitability"]
  },
  {
    category: "Innovation to Commercialization",
    summary: "Technical support from concept through launch, mitigating scale-up risks and formulation challenges.",
    icon: "ri-flask-line",
    tests: ["Skin/Body/Hair Care", "Dietary Supplements", "Transdermal Studies", "Antimicrobial Efficacy", "Prototype formulation", "Scale-up support"]
  },
  {
    category: "Regulatory Readiness & Compliance",
    summary: "Strategic guidance on manufacturing, packaging, and auditing to ensure uninterrupted market access.",
    icon: "ri-team-line",
    tests: ["Packaging & closures", "Manufacturing support", "Plant Inspections", "Ingredient Stability advice", "Container Closure", "Formulations", "Quality & Regulatory advice"]
  }
];

export const qseItems = [
  { title: 'Organization', description: 'Defined quality responsibilities, escalation pathways, and management review cadence.', icon: 'ri-node-tree' },
  { title: 'Personnel', description: 'Role-based training plans, competency verification, and continuing qualification records.', icon: 'ri-team-line' },
  { title: 'Equipment', description: 'Lifecycle controls for qualification, calibration, preventive maintenance, and service logs.', icon: 'ri-tools-line' },
  { title: 'Purchasing & Inventory', description: 'Approved supplier controls, incoming verification, and traceable material status.', icon: 'ri-truck-line' },
  { title: 'Process Control', description: 'Controlled SOPs, change management, and deviation/CAPA workflows.', icon: 'ri-equalizer-line' },
  { title: 'Documents & Records', description: 'Version-controlled documentation, retention schedules, and audit-ready retrieval.', icon: 'ri-folders-line' },
];

export const departmentEmails = [
  { department: "Sales & Quotes", email: "sales@biochromalabs.com", description: "Need a quote or scoping plan?" },
  { department: "Courier Services", email: "courierpickup@biochromalabs.com", description: "Schedule a sample pickup." },
  { department: "Chemistry Dept.", email: "chemistryinfo@biochromalabs.com", description: "Technical chemistry questions." },
  { department: "Microbiology Dept.", email: "microinfo@biochromalabs.com", description: "Technical microbiology questions." },
  { department: "Careers & HR", email: "hr@biochromalabs.com", description: "Looking for career opportunities?" },
];