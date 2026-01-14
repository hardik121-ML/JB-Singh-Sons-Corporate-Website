export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "J B Singh & Sons",
    "url": "https://jbsingh.com",
    "logo": "https://jbsingh.com/Logo.svg",
    "description": "Delivering seamless movement of goods across borders with accuracy, reliability, and a commitment to operational excellence since 2003.",
    "foundingDate": "2003",
    "address": [
      {
        "@type": "PostalAddress",
        "name": "Head Office",
        "streetAddress": "23/9, Bhupat Bhavan, Ground Floor, Vaju Kotak Marg",
        "addressLocality": "Fort, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400 001",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "name": "Corporate Office",
        "streetAddress": "Haware Centurian, S04 E & E1, 2nd Floor, Sector 19A, Nerul (East)",
        "addressLocality": "Navi Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400 706",
        "addressCountry": "IN"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-2773-2400",
      "contactType": "customer service",
      "email": "jbsinghnsons2005@hotmail.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": {
      "@type": "Place",
      "name": "India"
    },
    "sameAs": [
      "https://jbsingh.com"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Logistics Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Clearance",
            "description": "Accurate, compliant customs handling supported by precise documentation, engineered routing, and fast clearance for standard and project cargo."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Freight Forwarding",
            "description": "Reliable freight forwarding services for international cargo movement."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marine Logistics",
            "description": "Comprehensive marine logistics and port handling services."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transportation",
            "description": "Reliable multimodal movement via road and rail with route planning and monitored handovers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehousing & Distribution",
            "description": "Secure warehousing and distribution services with inventory management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Hire",
            "description": "Container and equipment rental services for logistics operations."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
