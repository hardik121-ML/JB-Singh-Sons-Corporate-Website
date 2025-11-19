# J B Singh & Sons Website - Complete Build Plan

## Project Overview
Building a modern, responsive corporate website for J B Singh & Sons, a logistics firm operating since 2003 in Fort, Mumbai. The site focuses on credibility, showcasing logistics capabilities, and providing simple access to service information and business inquiries.

## Success Metrics
- Page load speed: Less than 2.5 seconds
- Lighthouse score: 90+ on performance, accessibility, and SEO
- Service page access: Users find any service page in less than two clicks
- Contact form submission rate: Equal to or greater than 3%
- CMS coverage: 100% of top-level pages are editable
- Design: Fully responsive across desktop, tablet, and mobile

## Technology Stack
- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + EmailJS/Formspree
- **SEO**: next-sitemap
- **Deployment**: Local development (hosting TBD)
- **Future CMS**: Headless CMS (Sanity/Strapi/Contentful - to be integrated later)

## Design System

### Color Palette
Inspired by Blinkpath.com + logistics industry standards:
- **Primary Orange**: `#ED4C22` or `#EB6E38`
- **Navy Blue**: `#00324B` (trustworthy, professional)
- **Dark**: `#1a1a1a`
- **Light**: `#f8f8f8` (off-white background)
- **Accent Gradients**: Subtle gradients for cards (optional)

### Typography
- **Primary Font**: Lexend Deca or Inter
- **Approach**: Viewport-relative sizing (e.g., `text-[max(1rem,1.2vmax)]`)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Component Design Patterns
- **Buttons**: `rounded-full` with orange background, white text
- **Cards**: Large border radius (`rounded-[2vmax]`), subtle shadows
- **Sections**: Generous padding with viewport units (`px-[6vw] py-[4vmax]`)
- **Images**: Rounded corners, next/image optimization
- **Navigation**: Sticky header (transparent → solid on scroll)

## Phase 1: Project Foundation & Setup

### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest jbsingh-website --typescript --tailwind --app --eslint
```

### 1.2 Project Structure
```
/app
  /about
  /services
    /freight-forwarding
    /custom-clearance
    /project-management
    /marine-logistics
    /transportation-service
    /equipment-hire
    /warehousing-distribution
    /domestic-express
    /cross-trade-services
  /solutions
  /csr
  /careers
  /contact
  /terms-and-conditions
  /privacy-policy
  layout.tsx
  page.tsx
/components
  /ui
    Button.tsx
    Card.tsx
    Container.tsx
    Section.tsx
    Input.tsx
    Textarea.tsx
  /layout
    Header.tsx
    Footer.tsx
  /home
    Hero.tsx
    StatsBlock.tsx
    AboutPreview.tsx
    ServicesGrid.tsx
    CSRPreview.tsx
  /services
    ServiceCard.tsx
    ServiceHero.tsx
    CapabilitiesList.tsx
/lib
  constants.ts
  utils.ts
  email.ts
/public
  /images
    /placeholders
  /icons
.env.local
```

### 1.3 Dependencies
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.51.0",
    "@emailjs/browser": "^4.3.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3.4.0",
    "eslint": "^8",
    "eslint-config-next": "14.2.0",
    "next-sitemap": "^4.2.0"
  }
}
```

### 1.4 Environment Variables
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Phase 2: Design System & Reusable Components

### 2.1 Tailwind Configuration
Custom colors, typography, spacing, border-radius utilities based on Blinkpath design patterns.

### 2.2 Core UI Components
- **Button**: Primary, secondary, outline variants with hover effects
- **Card**: Service cards with image hover, gradient overlays
- **Container**: Max-width wrapper with responsive padding
- **Section**: Consistent section spacing and backgrounds
- **Input/Textarea**: Form inputs with validation states

### 2.3 Layout Components
- **Header**:
  - Logo (SVG placeholder)
  - Desktop navigation (9 items)
  - Mobile hamburger menu
  - "Get in Touch" CTA button
  - Sticky behavior with background blur

- **Footer**:
  - Quick Links section
  - Contact details
  - Address block
  - Legal links (Terms, Privacy, Sitemap)
  - Copyright line

## Phase 3: Build All Pages

### 3.1 Home Page (`/app/page.tsx`)
**Sections**:
1. **Hero Section**
   - Headline: "Reliable Logistics for Cross-Border Trade"
   - Sub-headline: "Delivering seamless movement of goods..."
   - Primary CTA: "Get in Touch"
   - Background: Logistics illustration (placeholder)

2. **Stats Block**
   - 20+ years in operation
   - X,XXX+ monthly cargo movements
   - XXX+ team members
   - XX+ global routes

3. **About Preview**
   - Title: "Driving Growth Beyond Borders"
   - Intro paragraph
   - "Read More" CTA
   - 3-image carousel (placeholders)

4. **Services Overview Grid**
   - Section header
   - 9 service cards:
     1. Freight Forwarding
     2. Custom Clearance
     3. Project Management / Break Bulk Movement
     4. Marine Logistics
     5. Transportation Service
     6. Equipment Hire
     7. Warehousing & Distribution
     8. Domestic Express
     9. Cross Trade Services
   - Each card: Icon, title, description, "Learn More" link

5. **CSR Preview** (Optional)
   - "Our CSR – Caring Beyond Business"
   - HSE Safety, ESG highlights

### 3.2 About Us Page (`/app/about/page.tsx`)
**Content**:
- Page title: "About J B Singh & Sons"
- Intro paragraph (since 2003)
- **Mission**: Deliver accurate, compliant, on-time logistics
- **Vision**: Build logistics practice with consistent quality
- **Why Choose Us**:
  - Proven operational discipline
  - Reliable timelines
  - Clear communication
  - Customised planning
  - Multi-modal capabilities
- Team section (photo grid - placeholders)
- Stats block (repeat from home)

### 3.3 Services Pages

#### Services Index (`/app/services/page.tsx`)
- Section header: "Integrated Logistics for Every Cargo Requirement"
- Intro paragraph
- 9-service grid (same as home but full page)

#### Individual Service Pages (9 pages)
Template structure for each:
- Hero banner
- Service title
- Overview paragraph
- **Capabilities** section (bulleted list)
- Workflow diagram (placeholder)
- Optional: Case study section (if client provides)
- Optional: Certifications (if client provides)
- CTA: "Get in Touch"
- Related services carousel

**Services**:
1. `/services/freight-forwarding`
2. `/services/custom-clearance`
3. `/services/project-management`
4. `/services/marine-logistics`
5. `/services/transportation-service`
6. `/services/equipment-hire`
7. `/services/warehousing-distribution`
8. `/services/domestic-express`
9. `/services/cross-trade-services`

### 3.4 Solutions Page (`/app/solutions/page.tsx`)
**Hero Section**:
- Title: "Our Solutions"
- Paragraph: Supporting sectors requiring precise logistics
- CTA: "Get in touch"

**9 Solution Blocks**:
1. Integrated Project Management
2. Door-to-Door Solutions
3. 4PL Solutions
4. Value-Added Services
5. Custom Consultancy & Advisory
6. DG Transport Solutions
7. Last-Mile Solutions for E-Commerce & LTL
8. PO Management & Control Tower Solutions
9. Technology for SCM

Each block: Image + description

### 3.5 CSR/ESG Page (`/app/csr/page.tsx`)
**Title**: "Responsible Operations"
**Paragraph**: Industry safety norms, community support, transparent governance

**4 Blocks**:
1. Health and Safety
2. Environment
3. Social Impact
4. Governance and Compliance

Placeholders for: Photos, HSE programs, ESG framework

### 3.6 Careers Page (`/app/careers/page.tsx`)
**Title**: "Careers at J B Singh & Sons"
**Intro**: Hiring professionals who value accuracy, communication, discipline

**Dynamic Content**:
- If no vacancies: "Currently, there are no vacancies."
- If vacancies: Job listing component (title, department, location, "Apply Now")

### 3.7 Contact Page (`/app/contact/page.tsx`)
**Title**: "Contact Us"

**Address Blocks**:

Head Office:
```
J. B. Singh & Sons
23/9, Bhupat Bhavan, Ground Floor
Vaju Kotak Marg
Fort, Mumbai – 400 001
Maharashtra, India
```

Corporate Office:
```
J. B. Singh & Sons
Haware Centurian, S04 E & E1, 2nd Floor
Sector 19A, Nerul (East)
New Mumbai – 400 706
Maharashtra, India
```

**Contact Details**:
- Telephone: 2773 2400
- Mobile: +91 98204 56539
- Email: enquiry@jbsinghnsons.com
- Website: www.jbsinghnsons.com

**Google Maps Embed**: Interactive map

**Contact Form**:
- Name (required)
- Email (required)
- Phone (required)
- Company (optional)
- Message (required)
- Submit button
- Success/error messaging
- Email delivery via EmailJS/Formspree

### 3.8 Footer Pages
- `/app/terms-and-conditions/page.tsx` - Placeholder for legal content
- `/app/privacy-policy/page.tsx` - Placeholder for privacy content
- Sitemap: Auto-generated via next-sitemap

## Phase 4: Functionality Implementation

### 4.1 Contact Form
- React Hook Form for validation
- EmailJS or Formspree for email delivery
- Client-side validation
- Success/error states
- Form submission to admin email: enquiry@jbsinghnsons.com
- Store submissions (future: integrate with CMS or database)

### 4.2 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Mobile menu: Hamburger with slide-out navigation
- Responsive typography using viewport units
- Flexible grid layouts
- Touch-friendly interactive elements

### 4.3 Image Optimization
- Use next/image for all images
- Lazy loading by default
- Placeholder blur for better UX
- Responsive image sizing
- WebP format with fallbacks
- Alt text for accessibility

### 4.4 Animations & Interactions
- Framer Motion for page transitions
- Scroll-triggered fade-ins
- Hover effects on cards and buttons
- Smooth scroll behavior
- Loading states
- Micro-interactions

## Phase 5: SEO & Performance

### 5.1 SEO Implementation
**Per-Page Metadata**:
```typescript
export const metadata: Metadata = {
  title: 'Page Title | J B Singh & Sons',
  description: 'Page description...',
  openGraph: {
    title: 'Page Title',
    description: 'Description',
    images: ['/og-image.jpg'],
  },
}
```

**Features**:
- Custom metadata for every page
- Open Graph tags for social sharing
- XML sitemap (next-sitemap)
- Schema markup:
  - LocalBusiness schema
  - Organization schema
  - Logistics service schemas
- SEO-friendly URLs (kebab-case)
- Alt text for all images
- Semantic HTML structure
- Canonical URLs

### 5.2 Performance Optimization
**Targets**:
- Page load: <2.5 seconds
- Lighthouse score: 90+ (Performance, Accessibility, SEO)

**Strategies**:
- Static Site Generation (SSG) for all pages
- Image lazy loading
- Code splitting (automatic with Next.js)
- Font optimization (next/font)
- Minimal JavaScript payload
- CSS optimization (Tailwind purge)
- Compression (Next.js automatic)
- Caching strategies

### 5.3 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Focus indicators
- Color contrast ratios
- ARIA labels where needed
- Skip to main content link

## Phase 6: CMS Integration (Future)

### 6.1 Headless CMS Structure
**Recommended: Sanity.io**

**Content Types**:

1. **Services** (Collection)
   ```typescript
   {
     title: string
     slug: string
     description: string
     icon: image
     heroImage: image
     capabilities: string[]
     workflow: richText
     relatedServices: reference[]
   }
   ```

2. **Team Members** (Collection)
   ```typescript
   {
     name: string
     role: string
     photo: image
     bio: richText
   }
   ```

3. **Job Listings** (Collection)
   ```typescript
   {
     title: string
     department: string
     location: string
     description: richText
     isActive: boolean
   }
   ```

4. **Solutions** (Collection)
   ```typescript
   {
     title: string
     description: richText
     image: image
     order: number
   }
   ```

5. **CSR Initiatives** (Collection)
   ```typescript
   {
     category: string // Health, Environment, Social, Governance
     title: string
     description: richText
     images: image[]
   }
   ```

6. **Global Settings** (Singleton)
   ```typescript
   {
     siteName: string
     logo: image
     contactDetails: object
     socialLinks: object
     stats: object
   }
   ```

7. **Pages** (Singleton for each)
   ```typescript
   {
     home: {
       heroHeadline: string
       heroSubheadline: string
       aboutPreviewText: richText
       // ...
     }
   }
   ```

### 6.2 Implementation Approach
**Current Phase**: Build with hardcoded content from content spec
**Future Phase**:
- Set up Sanity Studio
- Create schemas
- Migrate content to CMS
- Implement live preview
- Train client on content management

**CMS Coverage Target**: 100% of top-level pages editable

## Phase 7: Testing & Documentation

### 7.1 Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works (desktop + mobile)
- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] Spam protection active
- [ ] All links functional
- [ ] Responsive on mobile (375px+)
- [ ] Responsive on tablet (768px+)
- [ ] Responsive on desktop (1024px+)
- [ ] Images load and optimize
- [ ] Animations perform smoothly
- [ ] SEO metadata correct
- [ ] Lighthouse scores meet targets
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility audit

### 7.2 Documentation

#### README.md
- Project overview
- Tech stack
- Setup instructions
- Environment variables
- Running locally
- Building for production
- Deployment instructions

#### PLACEHOLDERS.md
**Assets Needed from Client**:

**Images**:
- Logo (SVG format, transparent background)
- Warehouse photos (3-5 high-res)
- Office photos (3-5)
- Equipment photos (if equipment hire confirmed)
- Team photos (optional, for About page)
- CSR initiative photos (if CSR page used)

**Icons**:
- Freight Forwarding icon
- Customs icon
- Project Management icon
- Marine icon
- Transportation icon
- Equipment icon
- Warehouse icon
- Express delivery icon
- Cross Trade icon

**Data**:
- Monthly cargo volume (for stats)
- Number of clients
- Number of team members
- Number of countries/ports served
- Exact routes handled

**Legal**:
- GST number
- Business registration details
- Complete Terms & Conditions text
- Complete Privacy Policy text

**Service Details**:
- Do they own warehousing or broker?
- Do they own cranes/forklifts or rent?
- Do they handle dangerous goods?
- Pan-India coverage confirmation
- Multimodal logistics confirmation
- Certifications (ISO, etc.)
- Case studies (if available)

#### OUT_OF_SCOPE.md
**Features for Future Implementation** (pending client confirmation):

1. Client Portal / Login System
2. Shipment Tracking Functionality
3. CRM Integration
4. Inventory Visibility / Dashboard
5. Chatbot Implementation
6. Multilingual Website Support
7. Case Study Section (detailed)
8. Blog / News Section

**Requirements for Each**:
- Detailed specifications
- Client confirmation
- Additional budget/timeline
- Third-party integrations needed

## Project Timeline Estimate

### Week 1: Foundation
- Days 1-2: Project setup, Tailwind config, design system
- Days 3-5: Core components (Button, Card, Header, Footer)

### Week 2: Core Pages
- Days 6-7: Home page
- Days 8-9: About page
- Day 10: Services index

### Week 3: Service Pages
- Days 11-13: 9 individual service pages
- Days 14-15: Solutions page

### Week 4: Additional Pages & Features
- Day 16: CSR page
- Day 17: Careers page
- Day 18: Contact page + form
- Day 19: Footer pages, SEO
- Day 20: Testing, optimization, documentation

**Total Estimated Time**: 20 working days (4 weeks)

## Deployment Checklist

### Pre-Deployment
- [ ] All pages complete
- [ ] Forms tested
- [ ] Environment variables configured
- [ ] SEO metadata verified
- [ ] Images optimized
- [ ] Performance tested
- [ ] Cross-browser tested
- [ ] Mobile tested
- [ ] Accessibility tested

### Deployment Steps
1. Choose hosting platform (Vercel recommended)
2. Connect Git repository
3. Configure environment variables
4. Set up custom domain (if ready)
5. Deploy to production
6. Verify all functionality
7. Submit sitemap to Google Search Console
8. Set up analytics (Google Analytics)

### Post-Deployment
- [ ] Monitor performance
- [ ] Check form submissions
- [ ] Verify SEO indexing
- [ ] Gather client feedback
- [ ] Train client on updates
- [ ] Plan CMS integration

## Contact Information

**Client**: J B Singh & Sons
**Website**: www.jbsinghnsons.com
**Email**: enquiry@jbsinghnsons.com
**Telephone**: 2773 2400
**Mobile**: +91 98204 56539

**Head Office**: 23/9, Bhupat Bhavan, Ground Floor, Vaju Kotak Marg, Fort, Mumbai – 400 001
**Corporate Office**: Haware Centurian, S04 E & E1, 2nd Floor, Sector 19A, Nerul (East), New Mumbai – 400 706

**Project Manager**: Damini Rathi (responsible for collecting assets from client)

## Reference Sites
- Design inspiration: https://www.blinkpath.com/
- Industry reference: https://babajishivram.com/

---

**Document Version**: 1.0
**Last Updated**: 2025-11-17
**Status**: In Development
