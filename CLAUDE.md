# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate logistics website for **J B Singh & Sons** (Mumbai, est. 2003) - Next.js 14 App Router, TypeScript, Tailwind CSS.

- **Production Domain**: https://jbsingh.com
- **Vercel Staging**: https://jbsingh-website.vercel.app
- **Repository**: https://github.com/hardik121-ML/JB-Singh-Sons-Corporate-Website

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build (auto-generates sitemap via postbuild)
npm run start        # Run production build locally
npm run lint         # Run ESLint

# Testing (Puppeteer-based)
node test-all-pages.js           # Full page testing with screenshots
node screenshot.js               # Single page screenshot utility
node pre-publish-test-simple.js  # Pre-publish validation (all pages, SEO, media)

# Troubleshooting
rm -rf .next && npm run dev  # Clear Next.js cache for style issues
```

## Architecture

### Page Structure
Next.js 14 App Router with two navigation patterns:
1. **Homepage** (`/app/page.tsx`) - Single-page scroll navigation with sections: `home`, `services`, `solutions`, `about`, `careers`, `contact`
2. **Subpages** - Standard Next.js routing:
   - `/about` - About page with AboutContent client component
   - `/services` - Services overview grid
   - `/services/[service-name]` - 8 individual service pages
   - `/solutions` - Solutions page with SolutionsContent
   - `/contact` - Contact page with form
   - `/careers`, `/privacy-policy`, `/terms-and-conditions` - Static pages

### Content Management
**All content in `/lib/constants.ts`** - single source of truth:
- `COMPANY_INFO`, `NAV_LINKS`, `FOOTER_LINKS`, `HERO_CONTENT` - Site structure
- `SERVICES` - 8 services with `serviceType: "core" | "partner"`
- `SOLUTIONS`, `STATS`, `WHY_CHOOSE_US`, `CLIENTS`, `CERTIFICATIONS` - Page content

### Service Pages
8 services at `/app/services/[service-name]/`. Two patterns exist:

**Pattern A** (most services - with separate Content component):
```
/app/services/custom-clearance/
├── page.tsx                    ← Server component with metadata export
└── CustomClearanceContent.tsx  ← "use client" component with actual content
```
Server `page.tsx` imports service from `SERVICES`, exports metadata, returns `*Content.tsx` component.

**Pattern B** (some services - direct client component):
```
/app/services/freight-forwarding/
├── layout.tsx                  ← Exports metadata
└── page.tsx                    ← "use client" component with content inline
```
Metadata exported from `layout.tsx` instead of `page.tsx`.

**Client Components** (both patterns):
- Use `"use client"` directive
- Define page content inline (not from constants.ts), though may import service metadata from `SERVICES`
- Use custom components per service:
  - Custom Clearance → `CustomClearanceFlowchart`
  - Equipment Hire → `EquipmentHireCarousel`
  - Others → `AnimatedCapabilities` grid
- Implement GSAP + Framer Motion animations
- Must cleanup with `ctx.revert()` in useEffect return for GSAP context

### Component Structure
- `/components/layout/` - Header, Footer, ClientLayout (wraps scroll context)
- `/components/ui/` - Button, Card, Container, Section, Input, Textarea, VideoHero, FloatingCTA, FloatingOrbs
- `/components/home/` - Hero, StatsSection, ServicesGrid (carousel), ServicesHorizontalScroll, ClientsSection, CertificationsSection, AboutPreview, SolutionsSection, CareersSection, ContactSection, StatsBlock
- `/components/services/` - ServiceTemplate, AnimatedCapabilities, CustomClearanceFlowchart, EquipmentHireCarousel
- `/components/about/` - AboutStackedSection
- `/components/contact/` - ContactForm (WhatsApp CTA with contact cards)
- `/components/StructuredData.tsx` - JSON-LD schema for SEO (invisible to users, read by search engines/LLMs)

**Contact Form Pattern**: Uses WhatsApp integration without traditional form inputs:
- Displays 3 clickable contact cards (Phone, Mobile, Email)
- Single WhatsApp CTA button with pre-filled professional message
- Message: "Good day, I would like to discuss my logistics requirements with your team. Let's connect."
- Opens `wa.me/919833278188` in new tab

**Icon Loading Pattern**: Components dynamically load Phosphor icons by name via `import * as PhosphorIcons from "@phosphor-icons/react"` then accessing as `PhosphorIcons[iconName]`.

**Navigation Pattern**: Homepage uses section-based scroll navigation with `ScrollContext` (`/lib/ScrollContext.tsx`). The context provides `scrollToSection()` for smooth scrolling and tracks `activeSection` via ScrollTrigger. Section IDs: `home`, `services`, `solutions`, `about`, `careers`, `contact`.

### Animation System (`/lib/gsap.ts`)
GSAP with ScrollTrigger for scroll-based animations (Framer Motion also available for component-level animations). Key exports:
- `animations.fadeUpBlur()`, `animations.staggerReveal()`, `animations.counter()`, `animations.parallax()`, `animations.scaleIn()` - Animation presets
- `initScrollAnimation()` - Attach ScrollTrigger to animations
- `batchReveal()` - Batch animate elements entering viewport
- `killScrollTriggers()` - Cleanup for component unmount
- `scrollToSection()` - Smooth scroll with GSAP
- `animationConfig` - Consistent timing/easing values (`duration`, `ease`, `stagger`)
- `prefersReducedMotion()` - Accessibility check

**GSAP Context Pattern**: Use `gsap.context()` for automatic cleanup:
```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    // animations here
  });
  return () => ctx.revert(); // automatic cleanup
}, []);
```

**Important**: Ken Burns effect has been removed from the Hero video section as it caused a shaking/jittery effect. Do not re-add zoom/scale animations to hero video backgrounds.

### Scroll Management (`/lib/ScrollContext.tsx`)
Homepage is a single-page application with section-based navigation:
- `ScrollProvider` wraps the app and provides scroll context
- `useScroll()` hook returns `{ activeSection, scrollToSection, setActiveSection }`
- Section IDs tracked: `home`, `services`, `solutions`, `about`, `careers`, `contact`
- Uses GSAP ScrollTrigger to detect active section based on viewport center
- `scrollToSection(id)` provides smooth GSAP-powered scrolling with 80px header offset
- Handles URL hash navigation on page load (e.g., `/#services`)

### Utilities
- `cn()` from `/lib/utils.ts` - className merging (clsx + tailwind-merge)

## Design System

**Colors** (`tailwind.config.ts`):
- `primary-orange` → `#FF0000` (red, not orange - brand color)
- `primary-navy` → `#00324B`
- `neutral-dark` → `#1a1a1a`, `neutral-light` → `#f8f8f8`
- Glassmorphism: `glass-white`, `glass-white-strong`, `glass-dark`, `glass-border`, `glass-border-dark`
- Shadows: `shadow-glass`, `shadow-glass-lg`, `shadow-glass-inset`, `shadow-glass-hover`

**Typography**:
- Inter (sans-serif, primary) and Merriweather (serif, accent)
- Responsive sizes using viewport units: `text-responsive-sm` through `text-responsive-3xl`

**Spacing & Borders**:
- Viewport-responsive: `spacing-6vw`, `spacing-4vmax`, `spacing-2.5vmax`
- Rounded corners: `rounded-1vmax` through `rounded-3vmax`, `rounded-4xl`

**Icons**: Phosphor Icons `weight="duotone"`
- Core services: `text-primary-orange`
- Partner services: `text-blue-600`

**Animations**: Tailwind utilities for `fade-up`, `fade-in`, `scale-in`, `blur-in`, `float`, `gradient-shift`

**Breakpoints**: `sm:640`, `md:768`, `lg:1024`, `xl:1280`, `2xl:1536`

## Environment Variables

Create `.env.local` in project root:

```env
# Sitemap generation
SITE_URL=https://jbsingh.com
```

Contact form uses WhatsApp integration (redirects to wa.me/919833278188) - no environment variables needed.

## SEO & Discoverability

### Metadata Configuration
**Root Layout** (`app/layout.tsx`) includes comprehensive metadata:
- OpenGraph tags with logo image for social sharing
- Twitter card support
- Enhanced keywords for search engines
- Google Bot directives for rich snippets

### Structured Data (JSON-LD)
**StructuredData component** (`/components/StructuredData.tsx`) provides machine-readable business info:
- Organization schema with both office addresses
- Service catalog (all 6 core services)
- Contact information for rich search results
- Invisible to users, read only by search engines and LLMs
- Embedded in `<head>` of every page via root layout

### robots.txt Configuration
Located at `/public/robots.txt` - explicitly allows AI/LLM crawlers:
- **GPTBot** (ChatGPT)
- **Claude-Web** (Claude AI)
- **CCBot** (Common Crawl - used by many AIs)
- **PerplexityBot** (Perplexity AI)
- **Google-Extended** (Google's AI training)
- **Applebot-Extended** (Apple Intelligence)
- **anthropic-ai** (Anthropic)

This enables LLMs to discover and cite the business when users ask about logistics services in Mumbai.

### Footer Branding
Footer includes "Website made by Material Lab" link (only "Material Lab" is clickable/highlighted):
- Links to https://www.materiallab.io
- Opens in new tab
- Legal pages (Terms & Privacy) hidden from footer but still accessible via direct URL

## Types

`/lib/types.ts`: `Service`, `Solution`, `NavLink`, `Stat`, `CSRCategory`, `ContactFormData`

## Key Technical Details

### Server vs Client Components
- Service `page.tsx` files are server components (for metadata export)
- Actual page content lives in `*Content.tsx` client components (for animations)
- Exception: Some services use `layout.tsx` for metadata instead of `page.tsx`

### Animation Cleanup
Always use GSAP context pattern in client components:
```tsx
useEffect(() => {
  const ctx = gsap.context(() => { /* animations */ });
  return () => ctx.revert(); // prevents memory leaks
}, []);
```

### Media Paths & Optimization
**Images**: Service images in `/public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/`
- All service hero images are **WebP format** (8 images optimized)
- Original JPG files kept as backup
- Use Next.js `Image` component with `fill` for backgrounds, `priority` for hero images
- Solutions page uses **AVIF format** images (9 images in `/public/images/placeholders/`)

**Videos**: All in `/public/videos/`
- `hero-video.webm` (4.1 MB) + `hero-video.mp4` (11 MB fallback)
- `trusted-section-video.webm` (3.2 MB) + `trusted-section-video.mp4` (10 MB fallback)
- `3309765-uhd_3840_2160_30fps.webm` (0.8 MB) + `.mp4` (43 MB fallback)
- Always use WebM first, MP4 as fallback for Safari/iOS compatibility

### Glassmorphism
Custom glass styles defined in `tailwind.config.ts` - use `.glass-card` class or Tailwind utilities: `bg-glass-white`, `backdrop-blur-md`, `border-glass-border`, `shadow-glass`.

## Performance Optimization

### Media Files
**Videos**: Must provide both WebM and MP4 formats for browser compatibility:
```tsx
<video>
  <source src="/videos/video-name.webm" type="video/webm" />
  <source src="/videos/video-name.mp4" type="video/mp4" />
</video>
```
- WebM for modern browsers (smaller, 50-70% size reduction)
- MP4 as fallback for older Safari/iOS
- Target: 2-4 MB max for hero videos
- Use CRF 35-38 for WebM conversion

**Images**:
- Next.js `Image` component auto-converts to WebP
- Source images should be optimized before adding to repo
- Target: Under 500KB per image
- Use `priority` prop for above-the-fold images

### Video Implementation
All video tags must include WebM with MP4 fallback:
```tsx
<video autoPlay muted loop playsInline>
  <source src="/videos/hero-video.webm" type="video/webm" />
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
```
- Browser serves WebM to Chrome/Firefox/Edge (smaller file)
- Falls back to MP4 for Safari/iOS
- VideoHero component at `/components/ui/VideoHero.tsx` automatically handles format switching via `videoSrc.replace('.mp4', '.webm')`
- No Ken Burns effect on hero videos (causes jittery animation)

## Testing & Quality Assurance

**Pre-Publish Testing**: Run `node pre-publish-test-simple.js` before deployment
- Tests all 16 pages (HTTP 200 status)
- Validates SEO metadata (titles, descriptions)
- Checks image loading (WebP/AVIF support)
- Verifies video sources (WebM + MP4 fallbacks)
- Validates internal links
- Reports saved to `test-report.json`
- Summary in `puppeteer_summary.md`

**Expected Results**:
- All pages return 200 status
- All images in WebP/AVIF format
- Videos use dual WebM/MP4 sources
- Lazy-loaded images below fold (normal behavior)

## Deployment

**Platform**: Vercel (auto-deploy on push to main via SSH)

**SSH Setup**:
```bash
ssh-add ~/.ssh/id_ed25519  # Load SSH key
git remote set-url origin git@github.com:hardik121-ML/JB-Singh-Sons-Corporate-Website.git
git push origin main
```

**Process**:
1. Commit changes with descriptive message
2. Push to GitHub main branch
3. Vercel auto-deploys (2-3 minutes)
4. Production: https://jbsingh.com (custom domain)
5. Staging: https://jbsingh-website.vercel.app

**Post-Deploy Verification**:
- Check Vercel dashboard for build status
- Verify WebM videos load on Chrome
- Verify MP4 fallbacks work on Safari
- Test WhatsApp CTA button functionality
- Check robots.txt accessible at https://jbsingh.com/robots.txt
- Verify structured data with Google Rich Results Test

Sitemap auto-generates via `postbuild` script using `next-sitemap`

## Google Analytics (Optional)

Google Analytics is not currently configured. To add tracking:

1. Get Measurement ID from https://analytics.google.com (format: `G-XXXXXXXXXX`)
2. Add Google Analytics script to `app/layout.tsx` in `<head>` section
3. Create `.env.local` with `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

This will enable visitor tracking, traffic analytics, and conversion monitoring.
