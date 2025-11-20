# Changelog

All notable changes to the J B Singh & Sons website will be documented in this file.

## [2.1.0] - 2025-11-20

### Major Visual Enhancements

Comprehensive UI update with animated components, hero backgrounds, and industry-themed client icons.

### Added

#### New Components
- **CustomClearanceFlowchart** (`/components/services/CustomClearanceFlowchart.tsx`): Hub-and-spoke flowchart with J B Singh & Sons logo in center, 17 service boxes arranged in grid pattern
- **EquipmentHireCarousel** (`/components/services/EquipmentHireCarousel.tsx`): Auto-sliding carousel (3s interval) with responsive slidesPerView (1/2/3/4 based on breakpoint), images for each equipment type
- **AnimatedCapabilities** (`/components/services/AnimatedCapabilities.tsx`): Reusable animated capabilities grid with Framer Motion staggered fade-in, CheckCircle icons

#### Service Page Enhancements
All 8 service pages now feature:
- Hero sections with background images from Logistics folder
- Dark overlay (bg-[#0A0A0A]/70) for text readability
- AnimatedCapabilities component for capabilities display
- Consistent CTA sections

#### Additional Sections
- **Freight Forwarding**: "Our Freight Solutions" section with 4 animated cards (Road, Air, Ocean, Multi Modal)
- **Cross Trade Services**: "Our Process" section with 4 static cards for freight modes

### Changed

#### ClientsSection
- **CLIENTS data structure**: Changed from string array to object array with `name` and `icon` properties
- Added industry-relevant Phosphor icons for each client:
  - Factory (steel/metal manufacturers)
  - Atom (alloys companies)
  - Package (import/export)
  - Gear (industrial processing)
  - Cylinder (tubes)
  - Warehouse (depot)
  - Cube (materials/commodities)
  - Buildings (enterprises)
- Cards now display icons above company names with hover effects

#### AboutPreview
- Replaced placeholder images with actual images from Logistics folder
- Updated to use object-cover for better image display

#### Footer
- Aligned headings ("J B Singh & Sons", "Quick Links", "Contact Us") horizontally
- Added items-start to grid container
- Restructured company info heading to be inline with smaller logo

#### Service Pages Background Images
- Custom Clearance: Port with cranes (`pexels-tomfisk-3063470.jpg`)
- Equipment Hire: Port cranes (`venti-views-FPKnAO-CF6M-unsplash.jpg`)
- Transportation: Container ship aerial (`pexels-tomfisk-3057963.jpg`)
- Freight Forwarding: Red cargo ship (`chris-pagan-sfjS-FglvU4-unsplash.jpg`)
- Marine Logistics: Container ship front view
- Warehousing & Distribution: Forklift in warehouse
- Domestic Express: Night port scene
- Cross Trade Services: Container yard (`pexels-tomfisk-3063470.jpg`)

### Fixed

- **Icon errors**: Replaced non-existent Phosphor icons
  - `Forklift` → `Package` in EquipmentHireCarousel
  - `Road` → `Truck` in freight-forwarding
  - `Pipe` → `Cylinder` in ClientsSection
- **Metadata export errors**: Created layout.tsx files for client components that need metadata
  - `/app/services/freight-forwarding/layout.tsx`
  - `/app/services/cross-trade-services/layout.tsx`
- **Carousel alignment**: Fixed responsive slidesPerView calculation for mobile/tablet

### Technical Details
- New dependencies utilized: Framer Motion for animations
- All service pages use "use client" directive for Phosphor icons and interactivity
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

---

## [2.0.0] - 2025-11-20

### Major Content Overhaul

Complete website content update based on comprehensive content spec. All pages now reflect finalized client content.

### Changed

#### Services Restructure
- **Service Routes Changed**:
  - Removed: `/services/project-management`, `/services/transportation-service`
  - Added: `/services/custom-clearance`, `/services/transportation`
- **Core Services (3)**: Custom Clearance, Transportation, Equipment Hire
- **Partner Services (5)**: Freight Forwarding, Marine Logistics, Warehousing & Distribution, Domestic Express, Cross Trade Services

#### Services Page Layout
- Changed from carousel to grid layout
- Section A (Core Services): 3-card grid row
- Section B (Third-Party Services): 5-card grid (responsive 3+2 layout)
- Home page ServicesGrid retains carousel behavior

#### Navigation
- Removed "Contact Us" from NAV_LINKS (only 5 items now)
- Contact accessible only via header CTA button and footer links

#### Design System Colors
- Consistent text colors: `#0A0A0A` (headings), `#4B5563` (body), `#9CA3AF` (muted)
- Background colors: `#F8F9FC` (hero), `#F2F4F7` (alternate sections)
- Footer/Partner services: `#0E287A`

#### Page Content Updates
- **Hero**: Updated headline, sub-headline, supporting line
- **Stats**: Added subtexts to all 4 stats, fixed "100%" to "100% compliance"
- **About Preview**: Fixed text ("strong processes", "compliance issues")
- **ServicesGrid**: Added subheadings for Core and Third-Party sections
- **About Page**: Full content update with team description
- **Solutions Page**: Updated hero text, solution descriptions, footer CTA
- **Careers Page**: Updated intro text and vacancies message
- **Contact Page**: Title changed to "Get in Touch", updated intro

#### Footer
- Updated "Contact" to "Contact Us" in quick links

### Added

#### New Components
- **ClientsSection** (`/components/home/ClientsSection.tsx`): Displays 18 client company names in responsive grid

#### New Data
- **CLIENTS array**: 18 client company names
- **Stats subtexts**: Contextual information for each statistic

#### New Content
- Complete content for all 9 solutions
- Updated service descriptions and capabilities for all 8 services
- Team description for About page
- Proper footer CTAs across all pages: "Need tailored logistics solutions for your business?"

### Fixed

- Service template hero: Changed from dark navy to light `#F8F9FC` background
- Service template colors: Updated to design system colors
- WHY_CHOOSE_US: Fixed "Customised planning when required" to "Customised planning"
- All page headings now use consistent `#0A0A0A` color
- All body text now uses consistent `#4B5563` color

### Technical Details
- Total routes: 17 (unchanged)
- Total services: 8
- Home page sections: Hero, StatsBlock, ClientsSection, AboutPreview, ServicesGrid

---

## [1.1.0] - 2025-11-19

### Changed
- **Email Update**: Updated company email from `enquiry@jbsinghnsons.com` to `jbsinghnhsons2005@hotmail.com` throughout entire codebase
  - Updated in: constants.ts, ContactForm.tsx, privacy-policy page, terms-and-conditions page, and all documentation files

- **Service Consolidation**: Combined "Custom Clearance" and "Project Management / Break Bulk Movement" into single service
  - New service name: "Project Management & Custom Clearance"
  - Combined all capabilities from both services (10 total capabilities)
  - Reduced total service count from 9 to 8
  - Removed `/app/services/custom-clearance/` route
  - Updated service route to `/services/project-management`
  - Core services now: 3 (was 4)

### Added
- **Responsive Carousel Behavior**: Enhanced ServicesGrid component with intelligent responsive behavior
  - Mobile/Tablet (< 1280px): Manual horizontal scroll with touch/swipe support
    - Each service shown only once (no duplicates)
    - Snap-to-position scrolling
    - Hidden scrollbar for clean UI
  - Desktop (≥ 1280px): Auto-scroll animation
    - Services duplicated 3x for infinite loop effect
    - Pause-on-hover functionality
    - Seamless continuous scrolling
  - Uses React hooks (useState, useEffect) to detect screen size and adjust behavior dynamically

### Fixed
- **Card Alignment**: Fixed "Learn More" link alignment in service cards
  - Added `flex flex-col` to Card component
  - Added `flex-grow` to CardHeader component
  - All "Learn More" links now align at bottom regardless of card content height

- **Cache Issues**: Documented solution for ChunkLoadError and module loading issues
  - Clear .next cache: `rm -rf .next`
  - Hard refresh browser: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

### Technical Details
- Total routes: 17 (including _not-found)
- All routes successfully build and deploy
- No TypeScript errors
- No ESLint errors
- Production build size: All pages < 120KB First Load JS

---

## Previous Versions

See git commit history for changes prior to this changelog.
