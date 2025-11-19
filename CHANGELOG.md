# Changelog

All notable changes to the J B Singh & Sons website will be documented in this file.

## [Unreleased] - 2025-11-19

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
