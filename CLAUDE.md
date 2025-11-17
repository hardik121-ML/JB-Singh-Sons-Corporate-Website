# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a corporate logistics website for **J B Singh & Sons**, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The site is production-ready and includes 11 pages (Home, About, 9 Services, Solutions, CSR, Careers, Contact, Terms, Privacy).

**Client**: J B Singh & Sons (Mumbai-based logistics company, est. 2003)
**Project Manager**: Damini Rathi (responsible for asset collection)
**Contact**: jbsinghnhsons2005@hotmail.com | +91 98204 56539

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

## Architecture & Key Patterns

### Content Management Strategy

**All content is centralized in `/lib/constants.ts`**. This single source of truth contains:
- `COMPANY_INFO` - Contact details, address, established date
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
3. Service data is fetched from `SERVICES` array using `.find(s => s.id === "service-id")`
4. Metadata is defined per-page for SEO

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

**Page Sections** (`/components/home/`, `/components/services/`, `/components/contact/`):
- Home page is composed of 5 distinct sections (Hero, StatsBlock, AboutPreview, ServicesGrid, CSRPreview)
- Each section is self-contained and reusable

**Design System**:
- Colors defined in `tailwind.config.ts` and `app/globals.css`
- Primary orange: `#ED4C22` / `#EB6E38`
- Navy: `#00324B`
- Responsive typography uses viewport units: `text-responsive-xl` = `max(1.5rem, 2vmax)`

### Form Handling (Contact Page)

Located in `/components/contact/ContactForm.tsx`:
- Uses **React Hook Form** for validation
- Integrates with **EmailJS** (requires env vars: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`)
- reCAPTCHA v3 placeholder exists but needs `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` to activate
- Form sends to: `jbsinghnhsons2005@hotmail.com`

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
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_key
SITE_URL=https://jbsingh.com
```

The site will build and run without these, but contact form won't send emails until EmailJS is configured.

### TypeScript Types

Defined in `/lib/types.ts`:
- `Service` - Service page data structure
- `Solution` - Solution block structure
- `ContactFormData` - Contact form fields
- All components use proper TypeScript typing

### SEO Implementation

- Every page has `export const metadata: Metadata` with title, description, Open Graph tags
- Sitemap auto-generated via `next-sitemap` (config in `next-sitemap.config.js`)
- Sitemap URL structure: `https://jbsingh.com` (update `SITE_URL` env var for production)
- All images should have alt text (currently placeholders exist)

### Asset Placeholders

**Images and icons are NOT included**. See `PLACEHOLDERS.md` for complete list:
- Logo (SVG) - currently text-based in header
- 9 service icons (SVG) - currently colored boxes
- Photos: warehouse (3-5), office (2-3), team (4-8), CSR initiatives (6+)
- Statistics: Monthly cargo movements, team size, routes (marked with "X,XXX+" placeholders)

**When client provides assets**:
1. Place in `/public/images/` or `/public/icons/`
2. Update component imports (e.g., Hero, AboutPreview, team section in About page)
3. Update `STATS` in `constants.ts` with real numbers

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
3. All 21 routes are statically generated (SSG)
4. Build output shows route sizes (should all be <110 kB First Load JS)

**Build errors to watch for**:
- TypeScript errors (strict mode enabled)
- ESLint errors (disabled `react/no-unescaped-entities` for content with apostrophes)
- Missing environment variables (warnings only, won't fail build)

## Deployment Notes

**Recommended Platform**: Vercel (seamless Next.js integration)

Pre-deployment checklist:
1. Configure EmailJS credentials in environment
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
