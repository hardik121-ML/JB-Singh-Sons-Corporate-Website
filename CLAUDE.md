# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate logistics website for **J B Singh & Sons** (Mumbai, est. 2003) - Next.js 14 App Router, TypeScript, Tailwind CSS.

- **Production**: https://jbsingh-website.vercel.app
- **Repository**: https://github.com/hardik121-ML/JB-Singh-Sons-Corporate-Website

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build (auto-generates sitemap via postbuild)
npm run start        # Run production build locally
npm run lint         # Run ESLint

# Testing (Puppeteer-based)
node test-all-pages.js    # Full page testing with screenshots
node screenshot.js         # Single page screenshot utility

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
- `/components/home/` - Hero, StatsSection, ServicesGrid (carousel), ClientsSection, AboutPreview, SolutionsSection, CareersSection, ContactSection
- `/components/services/` - ServiceTemplate, AnimatedCapabilities, CustomClearanceFlowchart, EquipmentHireCarousel
- `/components/about/` - AboutStackedSection
- `/components/contact/` - ContactForm (WhatsApp integration)

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
SITE_URL=https://jbsingh-website.vercel.app
```

Contact form uses WhatsApp integration (redirects to wa.me/919833278188) - no environment variables needed.

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

### Image Paths
Images are in `/public/Logistics-20251119T135955Z-1-001/` directory. Use Next.js `Image` component with `fill` for backgrounds, `priority` for hero images.

### Glassmorphism
Custom glass styles defined in `tailwind.config.ts` - use `.glass-card` class or Tailwind utilities: `bg-glass-white`, `backdrop-blur-md`, `border-glass-border`, `shadow-glass`.

## Deployment

Platform: Vercel (auto-deploy on push to main)
Sitemap auto-generates via `postbuild` script using `next-sitemap`
