# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a corporate logistics website for **J B Singh & Sons**, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The site is production-ready and includes 15 routes: Home, About, Services (overview + 9 individual service pages), Solutions, Careers, Contact, Terms & Conditions, and Privacy Policy.

**Client**: J B Singh & Sons (Mumbai-based logistics company, est. 2003)
**Project Manager**: Damini Rathi (responsible for asset collection)
**Website**: www.jbsinghnsons.com
**Email**: enquiry@jbsinghnsons.com
**Mobile**: +91 98204 56539
**Telephone**: 2773 2400

## Essential Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server at http://localhost:3000

# Production
npm run build           # Build for production (also generates sitemap)
npm run start           # Start production server
npm run lint            # Run ESLint

# Sitemap generation runs automatically after build via postbuild script
```

## Key Dependencies

- **Framework**: Next.js 14 (App Router) - React framework with SSG
- **Language**: TypeScript 5.6 - Type-safe JavaScript
- **Styling**: Tailwind CSS 3.4 - Utility-first CSS framework
- **Class Management**: clsx + tailwind-merge - Dynamic className handling via `cn()` utility
- **Icons**: Phosphor Icons 2.1 - Icon library for service icons
- **Animations**: Framer Motion 12 - Motion library (used sparingly)
- **Forms**: React Hook Form 7 - Form validation and state management
- **Email**: EmailJS 4 - Client-side email sending for contact form
- **SEO**: next-sitemap 4 - Sitemap and robots.txt generation

## Configuration Files

- **next.config.js** - Next.js configuration (minimal setup, uses defaults)
- **next-sitemap.config.js** - Sitemap generation config (runs via postbuild script)
- **tailwind.config.ts** - Tailwind CSS customization:
  - Custom colors (primary-orange = #FF0000, primary-navy = #00324B)
  - Responsive typography with viewport-relative units
  - Custom spacing and border radius utilities
  - Font family configuration (Inter)
- **tsconfig.json** - TypeScript configuration (strict mode enabled)
- **postcss.config.js** - PostCSS setup for Tailwind CSS processing
- **.eslintrc.json** - ESLint rules (includes `react/no-unescaped-entities` disabled for content)

## Architecture & Key Patterns

### Content Management Strategy

**All content is centralized in `/lib/constants.ts`**. This single source of truth contains:
- `COMPANY_INFO` - Contact details (website, email, telephone, mobile), head office address, corporate office address, established date
- `NAV_LINKS` - Main navigation structure
- `SERVICES` - All 9 service definitions (id, title, description, capabilities, slug)
- `SOLUTIONS` - 9 solution blocks
- `STATS` - Company statistics (some are placeholders awaiting client data)
- `WHY_CHOOSE_US` - 5 value propositions
- `HERO_CONTENT`, `ABOUT_CONTENT` - Page-specific content
- `FOOTER_LINKS` - Footer navigation and legal links

**When updating content**: Edit `constants.ts` and restart dev server. The site is structured for future headless CMS integration (Sanity/Strapi/Contentful), but currently uses this static approach.

### Service Page Pattern

All 9 service pages follow an identical pattern:
1. Each service has a route in `/app/services/[service-slug]/page.tsx`
2. All use the shared `<ServiceTemplate>` component (`/components/services/ServiceTemplate.tsx`)
3. Service data is fetched from `SERVICES` array using `.find(s => s.id === "service-id")!` (non-null assertion is safe because service IDs are hardcoded)
4. Metadata is defined per-page for SEO (title and description extracted from service data)

**Adding a new service**:
1. Add entry to `SERVICES` in `constants.ts`
2. Create `/app/services/[new-service-slug]/page.tsx` following existing pattern
3. Metadata will auto-populate sitemap on next build

### Component Architecture

**Layout Components** (`/components/layout/`):
- `Header.tsx` - Sticky nav with scroll detection, mobile hamburger menu
- `Footer.tsx` - Contact info, quick links, legal links

**UI Primitives** (`/components/ui/`):
- `Button`, `Card`, `Container`, `Section`, `Input`, `Textarea`
- Use `cn()` utility from `/lib/utils.ts` for className merging (clsx + tailwind-merge)
- All UI components accept standard React props and use TypeScript for prop typing

**Page Sections** (`/components/home/`, `/components/services/`, `/components/contact/`):
- Home page is composed of sections (Hero, StatsBlock, AboutPreview, ServicesGrid)
- Each section is self-contained and reusable

**ServicesGrid Component** (`/components/home/ServicesGrid.tsx`):
- Services are displayed in two horizontal scrolling carousels
- **Core Services** (4): Custom Clearance, Project Management, Transportation, Equipment Hire
- **Partner Network** (5): Freight Forwarding, Marine Logistics, Warehousing, Domestic Express, Cross Trade
- Auto-scrolling animation with pause-on-hover functionality
- Each service uses Phosphor Icons (imported dynamically by icon name from constants)
- Service cards have gradient backgrounds and left accent borders matching service type

**Client Components Guidelines**:
- Use `"use client"` directive when components need:
  - Interactive Phosphor Icons (hover states, animations)
  - Form handling with React Hook Form
  - Browser APIs (localStorage, window events)
  - Event handlers (onClick, onChange, etc.)
  - Framer Motion animations
- Most components are Server Components by default (better performance)

**Design System**:
- Colors defined in `tailwind.config.ts` and `app/globals.css`
- Primary red: `#FF0000` (pure red - brand color matching logo)
- Navy: `#00324B`
- **Important**: All uses of `primary-orange` class now render as red (#FF0000), not orange
- Logo: `/public/Logo.svg` (SVG format - circular badge with ship and JBS branding)
- Responsive typography uses viewport units with fallbacks: `text-responsive-xl` = `max(1.5rem, 2vmax)`
  - All responsive text sizes use `max(fixed-size, viewport-size)` to ensure minimum readable size
  - Custom spacing: `4vmax` = `max(2rem, 4vmax)`, `2.5vmax` = `max(1.25rem, 2.5vmax)`
  - Border radius also responsive: `rounded-1vmax` = `max(0.625rem, 1vmax)`

### Form Handling (Contact Page)

Located in `/components/contact/ContactForm.tsx`:
- Uses **React Hook Form** for validation
- Integrates with **EmailJS** (requires env vars: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`)
- Form sends to: `enquiry@jbsinghnsons.com`

**EmailJS Template Variables**:
```
{{from_name}}, {{from_email}}, {{phone}}, {{company}}, {{message}}, {{to_email}}
```

### Environment Configuration

Required `.env.local` structure:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
SITE_URL=https://jbsingh-website.vercel.app
```

The site will build and run without these, but contact form won't send emails until EmailJS is configured.

### TypeScript Types

Defined in `/lib/types.ts`:
- `Service` - Service page data structure (includes `serviceType: "core" | "partner"`)
- `Solution` - Solution block structure
- `ContactFormData` - Contact form fields
- All components use proper TypeScript typing

### Icon System

Uses Phosphor Icons loaded dynamically:
- Service icons defined as string names in `SERVICES` array in `constants.ts`
- Icons imported via `@phosphor-icons/react` and rendered dynamically
- All icons use `weight="duotone"` for consistent style
- Icon names: `FileText`, `ChartBar`, `Truck`, `Wrench`, `GlobeHemisphereWest`, `Boat`, `Warehouse`, `Lightning`, `ArrowsLeftRight`

### SEO Implementation

- Every page has `export const metadata: Metadata` with title, description, Open Graph tags
- Sitemap auto-generated via `next-sitemap` (config in `next-sitemap.config.js`)
- Sitemap URL structure: `https://jbsingh-website.vercel.app` (update `SITE_URL` env var for custom domain)
- All images should have alt text (currently placeholders exist)

### Asset Management

**Asset Location**: `/public/images/placeholders/`

**Current Image Status**:
- ✅ Hero logistics illustration - `Logistics Illustration Placeholder - ContainersCranesShips.avif` (AVIF format, 24KB - optimized)
- ✅ Home page carousel images (3 images in AboutPreview component):
  - Image 1: `Image 1 WarehouseOffice.png` (1.6MB - PNG)
  - Image 2: `Image 2 Team Operations.avif` (33KB - AVIF, optimized)
  - Image 3: `Image 3 Wide Equipment Cargo.png` (2.3MB - PNG)
- ✅ Logo - `/public/Logo.svg` (SVG format, integrated in header and footer)
- ✅ Service icons - Using Phosphor Icons library (dynamically loaded)
- ✅ Solutions page images:
  - Solution 1 (Integrated Project Management): `Solution Image 1.webp` (21KB - WEBP, optimized)
  - Solution 2 (Door-to-Door Solutions): `Solution Image 2.avif` (26KB - AVIF, optimized)
  - Solution 3 (4PL Solutions): `Solution Image 3.avif` (48KB - AVIF, optimized)
  - Solution 4 (Value-Added Services): `Solution Image 4.avif` (49KB - AVIF, optimized)
  - Solution 5 (Custom Consultancy & Advisory): `Solution Image 5.webp` (26KB - WEBP, optimized)
  - Solution 6: `Solution Image 6.avif` (24KB - AVIF, optimized)
  - Solution 7: `Solution Image 7.avif` (45KB - AVIF, optimized)
  - Solution 8: `Solution Image 8.avif` (32KB - AVIF, optimized)
  - Solution 9: `Solution Image 9.avif` (22KB - AVIF, optimized)
- ✅ Solutions CTA background - `Supply Chain Optimization.jpeg` (8.1KB - used in CTA section with navy gradient overlay)
- ✅ Careers page background - `Hiring.avif` (87KB - used in "No Current Openings" section with dark gradient overlay and UsersFour Phosphor icon)
- ✅ Contact page - Google Maps embed showing Corporate Office location in Nerul, Navi Mumbai
- ⏳ Team photos for About page

**Image Dimension Guidelines**:

When replacing images, use these dimensions for optimal display without borders:

1. **Home Page (AboutPreview component)**:
   - Images 1 & 2 (square grid): **1024 x 1024** (1:1 ratio)
   - Image 3 (wide bottom): **1536 x 1024** (3:2 ratio) with `object-cover`, or **2048 x 1024** (2:1 ratio) with `object-contain`

2. **Hero Section**:
   - Aspect ratio: 16:9 (video aspect)
   - Recommended: 1920 x 1080 or 1600 x 900

3. **General Guidelines**:
   - Use `object-contain` when you want the full image visible (may show borders if aspect ratio doesn't match)
   - Use `object-cover` when you want to fill the container (may crop parts of image)
   - Always use Next.js `Image` component with `fill` prop for responsive containers
   - Add `priority` prop for above-the-fold images (Hero section)

**When adding/replacing images**:
1. Place images in `/public/images/placeholders/`
2. Check dimensions using: `file /path/to/image.png`
3. Update component to use `Image` from `next/image`
4. Choose appropriate `object-fit` class (`object-contain` vs `object-cover`)
5. Add descriptive alt text for accessibility
6. Update `STATS` in `constants.ts` if replacing statistical placeholders

### Responsive Breakpoints

Tailwind breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`

Mobile menu activates below `lg` (1024px). Test responsive design at these widths.

### Careers Page Dynamic Content

`/app/careers/page.tsx` has a `jobListings` array (currently empty). To add jobs:
1. Uncomment and populate `jobListings` array
2. Interface `JobListing` already defined with required fields
3. Page automatically switches between "no vacancies" and job listing display

### Out-of-Scope Features

See `OUT_OF_SCOPE.md` for features NOT implemented (require client confirmation):
- Client Portal / Login
- Shipment Tracking
- CRM Integration
- Chatbot
- Multilingual support
- Blog/News section

Do not implement these without explicit client approval and updated requirements.

### Legal Pages

`/app/terms-and-conditions/page.tsx` and `/app/privacy-policy/page.tsx` contain **placeholder content**. Client's legal team must provide final text. Yellow warning banner alerts this in each page.

## Build Process

1. `npm run build` compiles Next.js app
2. `postbuild` script auto-runs `next-sitemap` to generate `/public/sitemap.xml` and `/public/robots.txt`
3. All routes are statically generated (SSG):
   - 1 home page
   - 1 about page
   - 1 services overview + 9 individual service pages (10 total)
   - 1 solutions page
   - 1 careers page
   - 1 contact page
   - 2 legal pages (terms, privacy)
   - **Total: 15 routes**
4. Build output shows route sizes (should all be <110 kB First Load JS)

**Build errors to watch for**:
- TypeScript errors (strict mode enabled)
- ESLint errors (disabled `react/no-unescaped-entities` for content with apostrophes)
- Missing environment variables (warnings only, won't fail build)

## Common Development Issues

### ChunkLoadError in Browser
If you see "ChunkLoadError: Loading chunk app/layout failed" during development:
```bash
# Stop dev server, clear cache, restart
rm -rf .next
npm run dev
```
Then hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

**Note**: This is a local development issue only. Vercel production builds are not affected.

### Slow Page Navigation in Development
Next.js compiles pages on-demand during development (first visit can take 5-20 seconds). This is **normal behavior** and will NOT happen in production where all pages are pre-compiled during build. To test production speed: `npm run build && npm run start`

### Color/Style Changes Not Appearing
If Tailwind color changes aren't appearing after updating `tailwind.config.ts`:
1. Clear Next.js cache: `rm -rf .next`
2. Restart dev server
3. Hard refresh browser: `Ctrl+Shift+R` or `Cmd+Shift+R`
4. Try incognito/private window to bypass browser cache entirely

## Deployment

**Production Site**: https://jbsingh-website.vercel.app
**GitHub Repository**: https://github.com/hardik121-ML/JB-Singh-Sons-Corporate-Website
**Platform**: Vercel (auto-deploy enabled on `git push`)

### Deployment Workflow

The site uses continuous deployment via Vercel:

```bash
# Make changes locally and test
npm run dev

# Commit and push to GitHub
git add .
git commit -m "description of changes"
git push

# Vercel automatically deploys in ~2 minutes
# No manual intervention needed
```

### Environment Variables (Vercel Dashboard)

Add these in Vercel Project Settings → Environment Variables:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `SITE_URL` (currently: `https://jbsingh-website.vercel.app`, update for custom domain)

After adding/updating environment variables, redeploy from Vercel dashboard.

### Pre-deployment Checklist

1. Configure EmailJS credentials in Vercel environment
2. Set production `SITE_URL`
3. Verify all client assets replaced placeholders
4. Update Terms & Privacy Policy with legal content
5. Test contact form submission
6. Run Lighthouse audit (target: 90+ scores)

## Performance Targets

- Page load: <2.5s
- Lighthouse: 90+ (Performance, Accessibility, SEO)
- All pages use static generation (no client-side data fetching)
- Images should use `next/image` component (optimization built-in)

## Documentation Files

- `README.md` - Setup and feature overview
- `PLAN.md` - Complete project specifications and timeline
- `PLACEHOLDERS.md` - Detailed list of assets needed from client
- `OUT_OF_SCOPE.md` - Future features requiring client approval
- `PROJECT_SUMMARY.md` - Project completion status

Refer to these for comprehensive context on project scope, requirements, and client expectations.
