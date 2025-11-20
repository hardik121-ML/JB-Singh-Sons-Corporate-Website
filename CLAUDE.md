# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate logistics website for **J B Singh & Sons** (Mumbai, est. 2003). Next.js 14 App Router + TypeScript + Tailwind CSS.

- **Production**: https://jbsingh-website.vercel.app
- **Contact**: jbsinghnsons2005@hotmail.com | +91 98204 56539

## Commands

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Production build (auto-generates sitemap)
npm run start        # Run production build locally
npm run lint         # ESLint
```

## Critical Architecture Pattern

### Content Management

**All site content lives in `/lib/constants.ts`** - the single source of truth:
- `COMPANY_INFO`, `NAV_LINKS`, `FOOTER_LINKS` - Site structure
- `SERVICES` - 8 services with `serviceType: "core" | "partner"`
- `SOLUTIONS`, `STATS`, `WHY_CHOOSE_US` - Page content
- `CLIENTS` - Array of objects with `name` and `icon` properties (Phosphor icon names)
- `HERO_CONTENT`, `ABOUT_CONTENT` - Section content

**To update content**: Edit `constants.ts` and restart dev server.

### Service Page Pattern

All 8 service pages follow identical structure:
```typescript
// /app/services/[slug]/page.tsx
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

const service = SERVICES.find((s) => s.id === "service-id")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function ServicePage() {
  return <ServiceTemplate service={service} />;
}
```

**Adding a service**: Add to `SERVICES` array → Create page file → Sitemap auto-updates

### Client Component + Metadata Pattern

Pages using `"use client"` (for Phosphor Icons, forms, etc.) cannot export metadata. Solution:

```
/app/services/
├── layout.tsx    ← Export metadata here
└── page.tsx      ← "use client" component
```

### Component Architecture

- **Layout**: `/components/layout/` - Header (sticky nav, CTA button), Footer
- **UI**: `/components/ui/` - Button, Card, Container, Section, Input, Textarea
- **Sections**: `/components/home/`, `/components/services/`, `/components/contact/`

#### Service Page Components
- **AnimatedCapabilities** - Reusable animated grid with Framer Motion staggered animations
- **CustomClearanceFlowchart** - Hub-and-spoke flowchart with logo center
- **EquipmentHireCarousel** - Auto-sliding carousel (3s) with responsive slidesPerView

Service pages now have custom layouts with hero background images from `/public/Logistics-20251119T135955Z-1-001/`.

Use `cn()` from `/lib/utils.ts` for className merging (clsx + tailwind-merge).

**Client vs Server**: Use `"use client"` only for Phosphor Icons with interactivity, React Hook Form, browser APIs, event handlers.

## Design System

**Colors** (in `tailwind.config.ts`):
- `primary-orange` → `#FF0000` (red - brand color)
- `primary-navy` → `#00324B`
- `#0E287A` → Footer/partner services blue
- Text: `#0A0A0A` (headings), `#4B5563` (body), `#9CA3AF` (muted)
- Backgrounds: `#F8F9FC` (hero), `#F2F4F7` (alternate)

**Breakpoints**: `sm: 640`, `md: 768`, `lg: 1024`, `xl: 1280`
- Mobile menu: below `lg`
- Carousel auto-scroll: at `xl`

**Icons**: Phosphor Icons with `weight="duotone"`. Core services use red, partner services use blue.

## Environment Variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
SITE_URL=https://jbsingh-website.vercel.app
```

Site builds without these; contact form won't send emails.

## Key Implementation Details

### Navigation
- Header nav: 5 items (no Contact - use CTA button instead)
- Footer has Contact Us in quick links

### Dynamic Content
- **Careers**: `jobListings` array in page - empty shows "no vacancies"
- **Services page**: Grid layout (3 Core + 5 Partner cards)
- **Home ServicesGrid**: Carousels (auto-scroll desktop, manual mobile)

### Assets
- Placeholder images: `/public/images/placeholders/`
- Service hero images: `/public/Logistics-20251119T135955Z-1-001/Cargo-Logistics/`
- Hero video: `/public/videos/3309765-uhd_3840_2160_30fps.mp4`
- Use Next.js `Image` with `fill` prop, `priority` for above-fold

### Types
`/lib/types.ts`: `Service`, `Solution`, `ContactFormData`

### Animations
Framer Motion is used for page transitions and component animations. Import from `framer-motion`.

## Common Issues

**ChunkLoadError / Styles not updating**:
```bash
rm -rf .next && npm run dev
```
Then hard refresh browser.

**Slow first load in dev**: Normal - Next.js compiles on-demand. Use `npm run build && npm run start` for production speed.

## Deployment

**Platform**: Vercel (auto-deploy on `git push`)
**Repo**: https://github.com/hardik121-ML/JB-Singh-Sons-Corporate-Website

Set env vars in Vercel Dashboard → Project Settings → Environment Variables.

## Documentation

- `PLAN.md` - Project specifications
- `PLACEHOLDERS.md` - Assets needed from client
- `OUT_OF_SCOPE.md` - Features requiring approval
- `PROJECT_SUMMARY.md` - Completion status
- `CHANGELOG.md` - Version history

## Dependencies

Key libraries in use:
- **@phosphor-icons/react** - Icon library (use `weight="duotone"`)
- **framer-motion** - Animations
- **react-hook-form** - Form handling
- **@emailjs/browser** - Contact form email delivery
- **clsx + tailwind-merge** - Class name utilities (via `cn()`)
