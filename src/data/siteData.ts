export const siteData = {
  name: "BioChroma Analytical Labs",
  tagline: "Analytical testing for regulated products",
  description: "BioChroma Analytical Labs provides quality-focused analytical testing, method development, and stability support for regulated industries.",
  address: "500 Research Parkway, Suite 200, Cambridge, MA 02139",
  phone: "+1 (555) 214-9010",
  email: "info@biochromalabs.com",
  social: {
    linkedin: "https://www.linkedin.com",
  },
};

export const socialLinks = [
  { name: "linkedin", icon: "ri-linkedin-fill", label: "LinkedIn" },
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

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const features = [
  {
    title: "Quality systems",
    description: "Documented procedures, controlled records, and review checkpoints for every project.",
    icon: "ri-shield-check-line",
  },
  {
    title: "Experienced analysts",
    description: "Specialists in analytical chemistry, microbiology, and data review.",
    icon: "ri-flask-line",
  },
  {
    title: "Documented methods",
    description: "Validated or fit-for-purpose methods with traceable results.",
    icon: "ri-file-list-3-line",
  },
  {
    title: "Secure reporting",
    description: "Chain-of-custody handling with clear, audit-ready reports.",
    icon: "ri-lock-line",
  },
];

export const services = [
  {
    name: "Analytical chemistry",
    description: "Assay, impurities, and compositional analysis with validated instrumentation.",
  },
  {
    name: "Microbiology testing",
    description: "Bioburden, environmental monitoring, and microbial identification support.",
  },
  {
    name: "Contaminant screening",
    description: "Targeted screening for residuals, metals, and contaminants of concern.",
  },
  {
    name: "Method development",
    description: "Method development, transfer, and validation aligned to regulatory needs.",
  },
  {
    name: "Stability programs",
    description: "Protocol design, stability testing, and trend reporting.",
  },
];

export const pricingPlans = [
  {
    name: "Project-based",
    price: "Scope-defined",
    period: "",
    features: [
      "Single-method or single-product engagements",
      "Defined timelines and deliverables",
      "Standard reporting package",
      "Dedicated project contact",
    ],
    popular: false,
  },
  {
    name: "Program support",
    price: "Retainer",
    period: "",
    features: [
      "Multi-method program management",
      "Priority scheduling windows",
      "Stability and lifecycle support",
      "Regular reporting cadence",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Dedicated team and instrumentation",
      "Customized quality agreements",
      "Integrated data review",
      "Strategic partnership planning",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Quality Director",
    role: "Nutraceutical manufacturer",
    content: "BioChroma delivered clear, defensible results with timely communication throughout the project.",
    rating: 5,
  },
  {
    name: "Regulatory Affairs Lead",
    role: "Medical device company",
    content: "Their method transfer support and documentation aligned with our submission timeline.",
    rating: 5,
  },
  {
    name: "Operations Manager",
    role: "Food producer",
    content: "Consistent data quality and responsive analysts made it easy to scale our testing program.",
    rating: 5,
  },
];

export const facilities = [
  {
    title: "Analytical chemistry lab",
    description: "HPLC, GC, and spectroscopy instrumentation for quantitative analysis.",
    image: "https://images.unsplash.com/photo-1581091012184-5c7a6c4d8e9f?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Microbiology suite",
    description: "Controlled environments for culture work and microbial identification.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Sample receiving",
    description: "Documented intake, chain-of-custody, and secure storage.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Stability chambers",
    description: "Qualified chambers with continuous monitoring and data logging.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Data review rooms",
    description: "Independent review, QA oversight, and report finalization.",
    image: "https://images.unsplash.com/photo-1581092919534-7f2ffae4c0c5?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Metrology and calibration",
    description: "Instrument calibration and performance verification workflows.",
    image: "https://images.unsplash.com/photo-1581093448790-5d23a8f5f1c0?w=800&h=600&fit=crop&q=80",
  },
];

export const faqs = [
  {
    question: "What sample types do you accept?",
    answer: "We support raw materials, intermediates, finished products, and environmental samples. Contact us to confirm requirements.",
  },
  {
    question: "How do you manage chain of custody?",
    answer: "Every sample is logged at receipt, tracked through testing, and stored or disposed of per documented procedures.",
  },
  {
    question: "Can you develop or validate methods?",
    answer: "Yes. We provide method development, transfer, and validation aligned to regulatory expectations.",
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround depends on method complexity. We confirm timelines during scoping and provide status updates.",
  },
  {
    question: "Do you support stability studies?",
    answer: "We offer protocol design, stability testing, and trend reporting with qualified chambers.",
  },
  {
    question: "How are reports delivered?",
    answer: "Reports are delivered electronically with clear data tables, method references, and reviewer sign-off.",
  },
];

export const classSchedule = [
  { time: "Sample intake", class: "Logging & accessioning", trainer: "Operations" },
  { time: "Testing", class: "Analytical execution", trainer: "Laboratory" },
  { time: "Review", class: "Data verification", trainer: "Quality" },
  { time: "Reporting", class: "Final report delivery", trainer: "Project team" },
];

export const successStories = [
  {
    name: "Stability program scale-up",
    age: "Device manufacturer",
    duration: "12 months",
    result: "Program expansion",
    story: "Expanded stability testing across multiple SKUs with consistent data review and trend reporting.",
    beforeImage: "https://images.unsplash.com/photo-1581091012184-5c7a6c4d8e9f?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "Method transfer",
    age: "Pharma partner",
    duration: "8 weeks",
    result: "Validated method",
    story: "Transferred and validated a complex assay with full documentation and training support.",
    beforeImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "Contaminant screening",
    age: "Food producer",
    duration: "6 weeks",
    result: "Risk mitigation",
    story: "Implemented targeted screening program to support supplier qualification and compliance reporting.",
    beforeImage: "https://images.unsplash.com/photo-1581092919534-7f2ffae4c0c5?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1581093448790-5d23a8f5f1c0?w=400&h=600&fit=crop&q=80",
  },
];

export const statistics = [
  { number: "20+", label: "Validated methods", icon: "ri-file-check-line" },
  { number: "15", label: "Core analysts", icon: "ri-user-line" },
  { number: "3", label: "Laboratory suites", icon: "ri-building-line" },
  { number: "100%", label: "Documented chain of custody", icon: "ri-shield-check-line" },
  { number: "48h", label: "Status updates", icon: "ri-timer-line" },
  { number: "10+", label: "Years in operation", icon: "ri-award-line" },
];

export const fullSchedule = {
  monday: [
    { time: "8:00 AM", class: "Sample intake", trainer: "Operations" },
    { time: "10:00 AM", class: "Analytical testing", trainer: "Chemistry" },
    { time: "1:00 PM", class: "Microbiology testing", trainer: "Microbiology" },
    { time: "3:00 PM", class: "Data review", trainer: "Quality" },
  ],
  tuesday: [
    { time: "8:00 AM", class: "Sample intake", trainer: "Operations" },
    { time: "10:00 AM", class: "Analytical testing", trainer: "Chemistry" },
    { time: "1:00 PM", class: "Stability pulls", trainer: "Stability" },
    { time: "3:00 PM", class: "Data review", trainer: "Quality" },
  ],
  wednesday: [
    { time: "8:00 AM", class: "Sample intake", trainer: "Operations" },
    { time: "10:00 AM", class: "Analytical testing", trainer: "Chemistry" },
    { time: "1:00 PM", class: "Microbiology testing", trainer: "Microbiology" },
    { time: "3:00 PM", class: "Reporting", trainer: "Project team" },
  ],
  thursday: [
    { time: "8:00 AM", class: "Sample intake", trainer: "Operations" },
    { time: "10:00 AM", class: "Analytical testing", trainer: "Chemistry" },
    { time: "1:00 PM", class: "Method development", trainer: "Chemistry" },
    { time: "3:00 PM", class: "Data review", trainer: "Quality" },
  ],
  friday: [
    { time: "8:00 AM", class: "Sample intake", trainer: "Operations" },
    { time: "10:00 AM", class: "Analytical testing", trainer: "Chemistry" },
    { time: "1:00 PM", class: "Stability pulls", trainer: "Stability" },
    { time: "3:00 PM", class: "Reporting", trainer: "Project team" },
  ],
  saturday: [
    { time: "By appointment", class: "Sample receiving", trainer: "Operations" },
  ],
  sunday: [
    { time: "Closed", class: "No routine testing", trainer: "" },
  ],
};

export const teamMembers = [
  {
    name: "Dr. Maya Patel",
    role: "Laboratory Director",
    specialization: "Analytical Chemistry & Quality Systems",
    experience: "12+ years",
    bio: "Maya oversees laboratory operations, method validation, and quality documentation to ensure defensible results.",
    image: "https://images.unsplash.com/photo-1581091012184-5c7a6c4d8e9f?w=400&h=400&fit=crop&q=80",
    certifications: ["Ph.D. Chemistry", "Quality Systems Lead", "Method Validation"],
  },
  {
    name: "Jordan Lee",
    role: "Microbiology Lead",
    specialization: "Microbiology & Environmental Monitoring",
    experience: "10+ years",
    bio: "Jordan leads microbiology testing programs with a focus on compliance and risk-based monitoring.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=400&fit=crop&q=80",
    certifications: ["Microbiology Lead", "EM Program Design", "Sterility Testing"],
  },
  {
    name: "Elena Ruiz",
    role: "Method Development Manager",
    specialization: "Method Development & Transfer",
    experience: "9+ years",
    bio: "Elena manages complex method development and transfer projects with a focus on regulatory readiness.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop&q=80",
    certifications: ["Method Development", "Validation Planning", "Tech Transfer"],
  },
  {
    name: "Samuel Kim",
    role: "Quality Assurance",
    specialization: "Data Review & Compliance",
    experience: "8+ years",
    bio: "Samuel leads independent data review and ensures reports meet quality and compliance expectations.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&q=80",
    certifications: ["QA Lead", "Data Integrity", "Audit Readiness"],
  },
  {
    name: "Renee Walker",
    role: "Project Manager",
    specialization: "Client Communications & Scheduling",
    experience: "7+ years",
    bio: "Renee coordinates timelines, delivers updates, and keeps testing programs on track.",
    image: "https://images.unsplash.com/photo-1581092919534-7f2ffae4c0c5?w=400&h=400&fit=crop&q=80",
    certifications: ["Project Management", "Client Services", "Program Planning"],
  },
];

export const history = [
  {
    year: "2013",
    title: "Founded",
    description: "BioChroma Analytical Labs launched to provide rigorous analytical testing for regulated products.",
  },
  {
    year: "2016",
    title: "Instrumentation Expansion",
    description: "Added advanced chromatography and spectroscopy instrumentation to support new methods.",
  },
  {
    year: "2019",
    title: "Quality System Maturity",
    description: "Formalized quality systems, documentation controls, and independent data review.",
  },
  {
    year: "2021",
    title: "Microbiology Suite",
    description: "Opened a dedicated microbiology lab to support sterility and environmental programs.",
  },
  {
    year: "2023",
    title: "Stability Programs",
    description: "Launched stability chamber capacity with integrated protocol design and reporting.",
  },
  {
    year: "2024",
    title: "Client Partnerships",
    description: "Expanded long-term partnerships with regulated manufacturers and R&D teams.",
  },
];

export const paymentOptions = {
  methods: ["ACH transfer", "Wire transfer", "Credit card"],
  plans: [
    { type: "Project billing", description: "Invoice by project milestone with defined deliverables." },
    { type: "Program billing", description: "Monthly invoicing for ongoing testing programs." },
    { type: "Enterprise", description: "Custom billing aligned to quality agreements and schedules." },
  ],
  guarantee: "Service-level commitments defined in project scope.",
  trial: "Sample feasibility reviews available upon request.",
};
