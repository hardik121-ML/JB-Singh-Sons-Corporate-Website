// Company Information
export const COMPANY_INFO = {
  name: "J B Singh & Sons",
  website: "www.jbsinghnsons.com",
  headOffice: {
    label: "Head Office",
    fullAddress: `J B Singh & Sons
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
    fullAddress: `J B Singh & Sons
Haware Centurian, S04 E & E1, 2nd Floor
Sector 19A, Nerul (East)
Navi Mumbai – 400 706
Maharashtra, India`,
    address: {
      line1: "Haware Centurian, S04 E & E1, 2nd Floor",
      line2: "Sector 19A, Nerul (East)",
      city: "Navi Mumbai",
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
    email: "jbsinghnsons2005@hotmail.com",
  },
  established: "2003",
  yearsInOperation: "20+",
};

// Navigation Links - SPA scroll order
export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About Us", href: "/#about" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact Us", href: "/#contact" },
];

// Services Data
export const SERVICES = [
  // CORE SERVICES (3)
  {
    id: "custom-clearance",
    title: "Custom Clearance",
    subLabel: "Includes Project Cargo / Break Bulk Movement",
    shortDescription: "Accurate, compliant customs handling supported by precise documentation, engineered routing, and fast clearance for standard and project cargo.",
    description: "We manage import and export clearance with precise documentation, regulatory accuracy, and coordinated interactions with customs and port authorities. Our team also handles project cargo and break-bulk movements through engineered routing, safety planning, and controlled on-ground execution. We support complex cargo types and special regimes by aligning documentation, permits, and approvals at each stage of the movement.",
    capabilities: [
      "Import and export customs clearance",
      "Tariff classification, duty calculations, and regulatory checks",
      "Break bulk and heavy-lift customs handling",
      "Project cargo documentation and coordination",
      "Management of re-imports and re-exports where applicable",
      "Support for licences, registrations, and refunds (such as project imports, SEZ/FTWZ units, duty drawback, and other eligible schemes)",
      "Liaison with customs, port, and terminal authorities",
      "Reduced dwell time through disciplined processes and pre-planned documentation",
    ],
    icon: "FileText",
    slug: "/services/custom-clearance",
    serviceType: "core" as const,
  },
  {
    id: "transportation",
    title: "Transportation",
    shortDescription: "Reliable multimodal movement via road and rail, supported by route planning, trained drivers, and monitored handovers.",
    description: "We move cargo across road and rail routes using trained personnel, monitored transitions, and predictable handovers. Transport plans are aligned with shipment priorities, offering options for scheduled movements, time-sensitive deliveries, and multi-stop routing where required.",
    capabilities: [
      "First-mile and last-mile delivery",
      "Road and rail transport for full and partial loads",
      "Multi-city and multi-stop routing",
      "Time-bound and scheduled dispatches",
      "Options for expedited or priority movements where feasible",
      "Coordinated handovers between modes and locations",
      "Shipment status updates through operational tracking and communication",
    ],
    icon: "Truck",
    slug: "/services/transportation",
    serviceType: "core" as const,
  },
  {
    id: "equipment-hire",
    title: "Equipment Hire",
    shortDescription: "Specialised handling equipment for controlled cargo operations and project movements.",
    description: "We provide specialised handling equipment to support safe and efficient cargo movement across ports, warehouses, factories, and project sites. Equipment is deployed with a focus on safety, correct load planning, and alignment with site conditions.",
    capabilities: [
      "Cranes for lifting and placement operations",
      "Forklifts for yard and warehouse movement",
      "Loaders and related handling equipment",
      "Prime movers and trailers for heavy transport",
      "Axles, spreader beams, mats, and other lifting accessories (where required)",
      "Support for lift planning in coordination with project and site teams",
    ],
    icon: "Wrench",
    slug: "/services/equipment-hire",
    serviceType: "core" as const,
  },
  // THIRD-PARTY SERVICES (5)
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    shortDescription: "International cargo coordination across road, air, sea, and multimodal routes with document control and transit oversight.",
    description: "We coordinate international cargo movement across multiple modes through trusted forwarding partners. Our role is to align routing, carrier selection, schedules, and documentation so that shipments move predictably between origins and destinations. We support both routine flows and project-related consignments requiring closer control.",
    capabilities: [
      "Planning and coordination of road, air, sea, and multimodal freight options",
      "Route and carrier selection based on cost, transit time, and cargo requirements",
      "End-to-end document control aligned with customs and carrier needs",
      "Alignment of export and import formalities with forwarding plans",
      "Coordination of handovers between ports, airports, ICDs, CFSs, and final delivery points",
      "Status visibility via partner updates and structured communication",
    ],
    icon: "GlobeHemisphereWest",
    slug: "/services/freight-forwarding",
    serviceType: "partner" as const,
  },
  {
    id: "marine-logistics",
    title: "Marine Logistics",
    shortDescription: "Marine logistics support through partner networks, including vessel coordination, port handling, and marine documentation.",
    description: "We support marine operations through partner networks that manage vessel coordination, port handling, and associated documentation. The focus is on smooth port calls, compliant cargo operations, and alignment between marine, customs, and landside activities.",
    capabilities: [
      "Vessel handling and coordination with port and terminal operators",
      "Port services for cargo operations, including loading and discharge support",
      "Marine documentation aligned with vessel, cargo, and regulatory requirements",
      "Interface between ship, charterer, and onshore stakeholders for planned movements",
      "Support for shore-base and port-area logistics through partners where required",
      "Alignment of marine operations with customs and clearance activities",
    ],
    icon: "Boat",
    slug: "/services/marine-logistics",
    serviceType: "partner" as const,
  },
  {
    id: "warehousing-distribution",
    title: "Warehousing & Distribution",
    shortDescription: "Partner-managed warehousing with controlled inventory workflows and planned distribution cycles near key ports and trade centres.",
    description: "We coordinate warehousing and distribution through partner-operated facilities located near key ports and industrial hubs. Storage, handling, and dispatch processes are designed to support stable inventory levels and predictable outbound flows.",
    capabilities: [
      "Short-term and long-term storage in general and specialised facilities",
      "Inventory management and cycle counting in line with client processes",
      "Palletised storage and racking-based layouts where applicable",
      "Pick-pack-dispatch operations for orders and project-based movements",
      "Support for bonded or specialised warehousing where available through partners",
      "Use of material-handling equipment and basic MIS to support inventory control",
      "Planned dispatch cycles and routing to consignee locations",
    ],
    icon: "Warehouse",
    slug: "/services/warehousing-distribution",
    serviceType: "partner" as const,
  },
  {
    id: "domestic-express",
    title: "Domestic Express",
    shortDescription: "Express parcel movement across India through a network of domestic delivery partners.",
    description: "We coordinate domestic parcel and express movements across India through a network of delivery partners. The focus is on timely, predictable deliveries for both business-to-business and business-to-consumer requirements.",
    capabilities: [
      "Express parcel movement across major Indian locations",
      "Support for B2B and B2C shipment profiles",
      "Defined delivery windows and service-level options where available",
      "Door-to-door service through partner networks",
      "Pickup and last-mile delivery coordination",
      "Tracking and status visibility through partner systems and structured updates",
    ],
    icon: "Lightning",
    slug: "/services/domestic-express",
    serviceType: "partner" as const,
  },
  {
    id: "cross-trade-services",
    title: "Cross Trade Services",
    shortDescription: "Cross-border shipments between foreign ports, coordinated through global partners with complete documentation and carrier oversight.",
    description: "We manage cross trade shipments, where cargo moves between foreign countries without entering India, through a network of international partners. Our role is to coordinate documentation, carriers, and routes so that foreign-to-foreign movements remain controlled and transparent.",
    capabilities: [
      "Planning and coordination of foreign-to-foreign shipments",
      "Use of road, air, sea, and multimodal combinations via partners",
      "Control of documentation flows between shipper, consignee, and carriers",
      "Support for switch documentation and revised instructions where applicable",
      "Coordination of door-to-door or port-to-port solutions through overseas networks",
      "Tracking of movements via partner updates and structured communication",
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
    description: "We design and execute customised logistics plans for cargo of varied size, volume, and weight. From route engineering and lift planning to final delivery, each movement is structured for safety, accuracy, and timely completion.",
  },
  {
    id: 2,
    title: "Door-to-Door Solutions",
    description: "Our network and partners support reliable door-to-door movement from origin to destination, aligning first-mile, main-leg, and last-mile transport with documentation and handovers.",
  },
  {
    id: 3,
    title: "4PL Solutions",
    description: "We act as a coordinating layer across multiple logistics partners, evaluating processes and aligning operations so that the supply chain behaves as a single, integrated system.",
  },
  {
    id: 4,
    title: "Value-Added Services",
    description: "Specialists support regulatory and trade-related requirements including customs-linked licences, refunds, and trade facilitation services that help keep shipments compliant and moving.",
  },
  {
    id: 5,
    title: "Custom Consultancy & Advisory",
    description: "Experts advise on customs regulations, compliance obligations, and documentation structures so that organisations can plan movements and contracts with fewer errors and delays.",
  },
  {
    id: 6,
    title: "DG Transport Solutions",
    description: "Dangerous goods movements are planned and coordinated with trained partners, ensuring appropriate packaging, documentation, and handling in line with safety requirements.",
  },
  {
    id: 7,
    title: "Last-Mile Solutions for E-Commerce & LTL",
    description: "We work with domestic partners to support last-mile deliveries for e-commerce and less-than-truckload shipments, focusing on accuracy, timelines, and clear status visibility.",
  },
  {
    id: 8,
    title: "PO Management & Control Tower Solutions",
    description: "We monitor logistics against purchase orders and shipping plans, coordinating with multiple agencies so that milestones, exceptions, and deliveries remain visible and controlled.",
  },
  {
    id: 9,
    title: "Technology for SCM",
    description: "Workflow tracking and structured data exchange help improve shipment visibility, reduce manual follow-ups, and support more accurate planning across the supply chain.",
  },
];

// Stats Data
export const STATS = [
  {
    label: "Years of Excellence",
    value: "20+",
    subtext: "Trusted since 2003"
  },
  {
    label: "Shipments Handled",
    value: "50000+",
    subtext: "Successful deliveries"
  },
  {
    label: "Global Network",
    value: "200+",
    subtext: "Countries served"
  },
  {
    label: "On-Time Delivery",
    value: "98%",
    subtext: "Reliability guaranteed"
  },
];

// Why Choose Us Data
export const WHY_CHOOSE_US = [
  "Proven operational discipline",
  "Reliable timelines",
  "Clear communication",
  "Customised planning",
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
    { label: "Services", href: "/#services" },
    { label: "Solutions", href: "/#solutions" },
    { label: "About Us", href: "/#about" },
    { label: "Careers", href: "/#careers" },
    { label: "Contact Us", href: "/#contact" },
  ],
  legal: [
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

// Hero Content
export const HERO_CONTENT = {
  badge: "J B Singh & Sons",
  headline: "Reliable Logistics for Cross-Border Trade",
  subheadline: "End-to-end cargo movement with clear communication and disciplined execution.",
  supportingLine: "Accurate, compliant logistics for complex shipments.",
  ctaText: "Explore Services",
};

// About Content
export const ABOUT_CONTENT = {
  title: "About J B Singh & Sons",
  intro: "J B Singh & Sons is a licensed Customs House Agent and logistics partner delivering freight forwarding, customs clearance, transportation, and specialised cargo management. Since 2003, we have focused on disciplined processes, accurate documentation, and dependable execution across domestic and global routes.",
  mission: "Deliver accurate, compliant, and on-time logistics through strong processes and transparent operations.",
  vision: "Build a logistics practice that simplifies global movement through consistency, reliability, and technical excellence.",
  teamHeading: "Our Team",
  teamSubheading: "Navigating Logistics Challenges with Expertise",
  teamDescription: "Our operations are managed by experienced professionals with 18+ years in customs clearance, regulatory frameworks, and multimodal logistics. Teams are supported by automated ERP systems, updated documentation tools, and advanced communication equipment. Trained personnel ensure accurate documentation, fast clearance, and effective coordination with customs authorities, ports, terminals, and transport partners.",
};

// Clients Data
export const CLIENTS = [
  {
    name: "Bhansali Bright Bars Pvt Ltd",
    industry: "Stainless Steel Manufacturing",
    description: "Leading manufacturer of stainless steel bright bars since 1992",
    established: "1992",
    website: "https://www.bhansalisteel.com/"
  },
  {
    name: "Aqua Alloys Pvt Ltd",
    industry: "Alloy Steel Castings",
    description: "ISO 9001:2015 certified manufacturer of wear-resistant cast products",
    established: "1983",
    website: "https://www.aqualloys.com/"
  },
  {
    name: "Vimal Tubes",
    industry: "Steel Pipes & Fittings",
    description: "Specialist in duplex steel pipes and butt welding fittings",
    established: "2002",
    website: null
  },
  {
    name: "A.C Steel",
    industry: "Steel Trading",
    description: "Trusted steel trading partner for industrial applications",
    established: null,
    website: null
  },
  {
    name: "Ashwin Impex",
    industry: "Import/Export",
    description: "International trade specialist in metal products",
    established: null,
    website: null
  },
  {
    name: "Citizen Metal Depot",
    industry: "Metal Distribution",
    description: "Comprehensive metal warehousing and distribution services",
    established: null,
    website: null
  },
  {
    name: "M.M Metals",
    industry: "Metal Trading",
    description: "Diverse metal products supplier for various industries",
    established: null,
    website: null
  },
  {
    name: "Nicro Alloys Co. (I) Pvt Ltd",
    industry: "Specialty Alloys",
    description: "Specialized nickel and chrome alloy products",
    established: null,
    website: null
  },
  {
    name: "Pravin Metal Industries",
    industry: "Metal Processing",
    description: "Industrial metal processing and fabrication solutions",
    established: null,
    website: null
  },
  {
    name: "Bhansali Steel (India)",
    industry: "Stainless Steel",
    description: "Quality stainless steel products for industrial applications",
    established: null,
    website: null
  },
  {
    name: "Madras Metals",
    industry: "Metal Trading",
    description: "Established metals trading company serving South India",
    established: null,
    website: null
  },
  {
    name: "Nexus Impex",
    industry: "Import/Export",
    description: "International trade solutions for metal products",
    established: null,
    website: null
  },
  {
    name: "Poonam Enterprises",
    industry: "Metal Distribution",
    description: "Comprehensive metal distribution and supply chain solutions",
    established: null,
    website: null
  },
  {
    name: "Siddhant Steel",
    industry: "Steel Trading",
    description: "Reliable steel trading partner for diverse industries",
    established: null,
    website: null
  },
  {
    name: "Ryan Impex",
    industry: "Import/Export",
    description: "Global import and export services for industrial goods",
    established: null,
    website: null
  },
  {
    name: "B.J Metal & Alloys",
    industry: "Metal & Alloys",
    description: "Specialty metals and alloy products supplier",
    established: null,
    website: null
  },
  {
    name: "Rajkot Impex",
    industry: "Import/Export",
    description: "International trade specialist based in Gujarat",
    established: null,
    website: null
  },
  {
    name: "Roshan Metal",
    industry: "Metal Trading",
    description: "Quality metal products for industrial applications",
    established: null,
    website: null
  }
];
