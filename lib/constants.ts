// Company Information
export const COMPANY_INFO = {
  name: "J B Singh & Sons",
  website: "www.jbsinghnsons.com",
  headOffice: {
    label: "Head Office",
    fullAddress: `J. B. Singh & Sons
23/9, Bhupat Bhavan, Ground Floor
Vaju Kotak Marg
Fort, Mumbai – 400 001
Maharashtra, India`,
    address: {
      line1: "23/9, Bhupat Bhavan, Ground Floor",
      line2: "Vaju Kotak Marg",
      city: "Fort, Mumbai",
      postalCode: "400 001",
      state: "Maharashtra",
      country: "India",
    },
  },
  corporateOffice: {
    label: "Corporate Office",
    fullAddress: `J. B. Singh & Sons
Haware Centurian, S04 E & E1, 2nd Floor
Sector 19A, Nerul (East)
New Mumbai – 400 706
Maharashtra, India`,
    address: {
      line1: "Haware Centurian, S04 E & E1, 2nd Floor",
      line2: "Sector 19A, Nerul (East)",
      city: "New Mumbai",
      postalCode: "400 706",
      state: "Maharashtra",
      country: "India",
    },
    contact: {
      telephone: "2773 2400",
    },
  },
  contact: {
    telephone: "2773 2400",
    mobile: "+91 98204 56539",
    email: "jbsinghnhsons2005@hotmail.com",
  },
  established: "2003",
  yearsInOperation: "20+",
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// Services Data
export const SERVICES = [
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    shortDescription: "Structured coordination of global cargo routes with clear documentation and controlled transit.",
    description: "We coordinate every stage of global cargo movement. Teams manage routing, carrier selection, documentation, and handovers to maintain predictable transit and full compliance.",
    capabilities: [
      "International freight coordination",
      "Document control and customs alignment",
      "Multi-modal routing",
      "Cost and time optimisation",
      "Status updates (if enabled)",
    ],
    icon: "GlobeHemisphereWest",
    slug: "/services/freight-forwarding",
    serviceType: "partner" as const,
  },
  {
    id: "project-management",
    title: "Project Management & Custom Clearance",
    shortDescription: "End-to-end project cargo management with break bulk handling and full customs clearance support for regulatory compliance.",
    description: "We plan and execute project cargo and heavy lifts with engineered routing, defined safety steps, and on-ground control. Our team handles customs procedures with precise documentation and regulatory accuracy to minimise clearance delays throughout the project lifecycle.",
    capabilities: [
      "Break bulk handling",
      "Heavy-lift planning",
      "Site assessments",
      "Route engineering",
      "Supervised execution",
      "Import and export clearance",
      "Regulatory checks and compliance",
      "Duty calculations",
      "Coordination with customs offices",
      "Document filing and verification",
    ],
    icon: "ChartBar",
    slug: "/services/project-management",
    serviceType: "core" as const,
  },
  {
    id: "marine-logistics",
    title: "Marine Logistics",
    shortDescription: "Vessel coordination, port interface, and marine documentation for smooth maritime operations.",
    description: "We support marine operations with vessel coordination, port handling, and accurate document workflows.",
    capabilities: [
      "Vessel handling",
      "Port services",
      "Marine documents",
      "Cargo transfers",
      "Marine compliance",
    ],
    icon: "Boat",
    slug: "/services/marine-logistics",
    serviceType: "partner" as const,
  },
  {
    id: "transportation-service",
    title: "Transportation Service",
    shortDescription: "Reliable multimodal movement supported by route planning, trained drivers, and monitored handovers.",
    description: "We move goods through road, rail, and multimodal routes with monitored transitions and predictable timelines.",
    capabilities: [
      "First-mile and last-mile",
      "Road and rail transport",
      "Controlled-temperature movement (confirm if real)",
      "Multi-city routing",
      "Fleet coordination",
    ],
    icon: "Truck",
    slug: "/services/transportation-service",
    serviceType: "core" as const,
  },
  {
    id: "equipment-hire",
    title: "Equipment Hire",
    shortDescription: "Access to cranes, forklifts, and other handling assets for controlled cargo operations.",
    description: "We provide handling equipment to support safe and efficient cargo movement.",
    capabilities: [
      "Cranes",
      "Forklifts",
      "Loaders",
      "Specialised equipment (exact list needed)",
    ],
    icon: "Wrench",
    slug: "/services/equipment-hire",
    serviceType: "core" as const,
  },
  {
    id: "warehousing-distribution",
    title: "Warehousing & Distribution",
    shortDescription: "Secure storage with process-driven inventory control and planned dispatch cycles.",
    description: "We store and dispatch goods with controlled inventory workflows and planned distribution cycles.",
    capabilities: [
      "Inventory management",
      "Palletised storage",
      "Pick-pack-dispatch",
      "Short and long-term storage",
      "Distribution planning",
    ],
    icon: "Warehouse",
    slug: "/services/warehousing-distribution",
    serviceType: "partner" as const,
  },
  {
    id: "domestic-express",
    title: "Domestic Express",
    shortDescription: "Time-bound parcel movement across India with predictable delivery windows.",
    description: "We move parcels across India through fast and predictable delivery processes.",
    capabilities: [
      "Express parcel movement",
      "Defined delivery windows",
      "Nationwide coverage",
      "Door-to-door service",
    ],
    icon: "Lightning",
    slug: "/services/domestic-express",
    serviceType: "partner" as const,
  },
  {
    id: "cross-trade-services",
    title: "Cross Trade Services",
    shortDescription: "Coordinated shipments between foreign ports with complete document control and route oversight.",
    description: "We manage shipments routed between foreign ports with controlled document workflows and carrier coordination.",
    capabilities: [
      "Cross-border coordination",
      "Multi-country documentation",
      "Carrier liaison",
      "Shipment tracking",
    ],
    icon: "ArrowsLeftRight",
    slug: "/services/cross-trade-services",
    serviceType: "partner" as const,
  },
];

// Solutions Data
export const SOLUTIONS = [
  {
    id: 1,
    title: "Integrated Project Management",
    description: "We design and execute customised project logistics plans for cargo of any size, volume, or weight — ensuring safe, timely delivery anywhere in the world.",
  },
  {
    id: 2,
    title: "Door-to-Door Solutions",
    description: "Our in-house operational network spans multiple transport modes, enabling reliable, end-to-end delivery from origin to destination.",
  },
  {
    id: 3,
    title: "4PL Solutions",
    description: "We integrate, manage, and optimise your supply chain by coordinating resources, evaluating processes, and aligning technology for smooth operations.",
  },
  {
    id: 4,
    title: "Value-Added Services",
    description: "Industry specialists assist with regulatory and trade-related requirements including FSSAI, SVB, Duty Drawback, AEO, and other specialised clearances.",
  },
  {
    id: 5,
    title: "Custom Consultancy & Advisory",
    description: "Experienced experts guide you through customs regulations, compliance needs, and legal documentation to ensure error-free processing.",
  },
  {
    id: 6,
    title: "DG Transport Solutions",
    description: "A trained team manages the movement of dangerous goods with strict safety controls, compliant handling, and quality oversight.",
  },
  {
    id: 7,
    title: "Last-Mile Solutions for E-Commerce & LTL",
    description: "We partner with reliable vendors across India to support fast, accurate, and cost-effective last-mile delivery for e-commerce and LTL shipments.",
  },
  {
    id: 8,
    title: "PO Management & Control Tower Solutions",
    description: "We track every stage - from purchase order to final delivery - coordinating with multiple agencies to ensure complete transparency and operational integrity.",
  },
  {
    id: 9,
    title: "Technology for SCM",
    description: "Our workflow tracker provides real-time shipment visibility, while automated data exchange and process digitisation improve accuracy and efficiency across your supply chain.",
  },
];

// Stats Data
export const STATS = [
  { label: "Years in Industry", value: "20+ years of operations" },
  { label: "Monthly Cargo Movements", value: "X,XXX+", placeholder: true },
  { label: "Team Members", value: "XXX+", placeholder: true },
  { label: "Global Routes", value: "XX+", placeholder: true },
];

// Why Choose Us Data
export const WHY_CHOOSE_US = [
  "Proven operational discipline",
  "Reliable timelines",
  "Clear communication",
  "Customised planning when required",
  "Multi-modal capabilities",
];

// CSR Categories
export const CSR_CATEGORIES = [
  {
    id: "health-safety",
    title: "Health and Safety",
    description: "Industry safety norms, trained personnel, and strict HSE protocols.",
  },
  {
    id: "environment",
    title: "Environment",
    description: "Environmental responsibility and sustainable practices.",
  },
  {
    id: "social",
    title: "Social Impact",
    description: "Community support and local initiatives.",
  },
  {
    id: "governance",
    title: "Governance and Compliance",
    description: "Transparent governance and regulatory compliance.",
  },
];

// Footer Links
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

// Hero Content
export const HERO_CONTENT = {
  headline: "Reliable Logistics for Cross-Border Trade",
  subheadline: "Delivering seamless movement of goods across borders with accuracy, reliability, and a commitment to operational excellence.",
  supportingLine: "End-to-end logistics executed with accuracy, accountability, and technical expertise.",
  ctaText: "Get in Touch",
};

// About Content
export const ABOUT_CONTENT = {
  title: "About J B Singh & Sons",
  intro: "J B Singh & Sons provides freight forwarding, customs clearance, transportation, and specialised cargo management. Since 2003, we have supported businesses with disciplined processes, clear communication, and dependable execution across domestic and global routes.",
  mission: "Deliver accurate, compliant, and on-time logistics through strong processes and transparent operations.",
  vision: "Build a logistics practice that simplifies global movement with consistent service quality and technical excellence.",
  teamHeading: "Our team",
  teamSubheading: "Navigating Logistics Challenges with Expertise",
};
