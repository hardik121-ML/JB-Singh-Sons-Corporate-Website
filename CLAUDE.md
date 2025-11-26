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
npm run lint         # Run ESLint

# Testing (Puppeteer-based)
node test-all-pages.js    # Full page testing with screenshots
node screenshot.js         # Single page screenshot

# Clear cache for style issues
rm -rf .next && npm run dev
```

## Architecture

### Content Management
**All content in `/lib/constants.ts`** - single source of truth:
- `COMPANY_INFO`, `NAV_LINKS`, `FOOTER_LINKS` - Site structure
- `SERVICES` - 8 services with `serviceType: "core" | "partner"`
- `SOLUTIONS`, `STATS`, `WHY_CHOOSE_US`, `CLIENTS` - Page content

### Service Pages
Each service has a dedicated page at `/app/services/[slug]/page.tsx`. Custom components:
- Custom Clearance → `CustomClearanceFlowchart`
- Equipment Hire → `EquipmentHireCarousel`
- Others → `AnimatedCapabilities` grid

### Client Component + Metadata Pattern
Pages with `"use client"` cannot export metadata. Use layout.tsx for metadata:
```
/app/services/
├── layout.tsx    ← metadata here
└── page.tsx      ← "use client" component
```

### Component Structure
- `/components/layout/` - Header, Footer
- `/components/ui/` - Button, Card, Container, Section, Input, Textarea, VideoHero, FloatingCTA
- `/components/home/` - Hero, StatsSection, ServicesGrid, ClientsSection, AboutPreview
- `/components/services/` - ServiceTemplate, AnimatedCapabilities, CustomClearanceFlowchart, EquipmentHireCarousel

### Animation System (`/lib/gsap.ts`)
GSAP with ScrollTrigger for scroll-based animations. Key exports:
- `animations.fadeUpBlur()`, `animations.staggerReveal()`, `animations.counter()` - Animation presets
- `initScrollAnimation()` - Attach ScrollTrigger to animations
- `batchReveal()` - Batch animate elements entering viewport
- `killScrollTriggers()` - Cleanup for component unmount
- `animationConfig` - Consistent timing/easing values

Always call `killScrollTriggers()` in useEffect cleanup to prevent memory leaks.

### Utility
`cn()` from `/lib/utils.ts` - className merging (clsx + tailwind-merge)

## Design System

**Colors** (`tailwind.config.ts`):
- `primary-orange` → `#FF0000` (red, not orange - brand color)
- `primary-navy` → `#00324B`
- Glassmorphism: `glass-white`, `glass-dark`, `glass-border`

**Typography**: Inter font, responsive sizes (`text-responsive-sm` through `text-responsive-3xl`)

**Icons**: Phosphor Icons `weight="duotone"`
- Core services: `text-primary-orange`
- Partner services: `text-blue-600`

**Breakpoints**: `sm:640`, `md:768`, `lg:1024`, `xl:1280`

## Environment Variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
SITE_URL=https://jbsingh-website.vercel.app
```

Site builds without these; contact form won't send emails.

## Types

`/lib/types.ts`: `Service`, `Solution`, `NavLink`, `Stat`, `CSRCategory`, `ContactFormData`

## Deployment

Platform: Vercel (auto-deploy on push to main)
