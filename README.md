# J B Singh & Sons - Logistics Website

A modern, responsive corporate website for J B Singh & Sons, a logistics services provider operating from Fort, Mumbai since 2003.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + EmailJS
- **SEO**: next-sitemap
- **Deployment**: TBD (Recommended: Vercel)

## 📋 Features

- ✅ Fully responsive design (mobile-first)
- ✅ 11 pages with SEO optimization
- ✅ Sticky navigation with mobile menu
- ✅ Contact form with email delivery (EmailJS)
- ✅ Service detail pages (9 services)
- ✅ Solutions page
- ✅ CSR/ESG page
- ✅ Careers page
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Performance optimized
- 🔄 CMS integration (future)
- 🔄 reCAPTCHA v3 (pending configuration)

## 🏗️ Project Structure

```
/app                    # Next.js app directory
  /about               # About Us page
  /services            # Services pages
    /freight-forwarding
    /custom-clearance
    ... (9 services total)
  /solutions           # Solutions page
  /csr                 # CSR/ESG page
  /careers             # Careers page
  /contact             # Contact page
  /terms-and-conditions
  /privacy-policy
  layout.tsx           # Root layout
  page.tsx             # Home page
  globals.css          # Global styles

/components            # React components
  /ui                  # Reusable UI components
  /layout              # Header, Footer
  /home                # Home page sections
  /services            # Service components
  /contact             # Contact form

/lib                   # Utility functions
  constants.ts         # All content and constants
  types.ts             # TypeScript types
  utils.ts             # Helper functions

/public                # Static assets
  /images
  /icons
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key

# Site URL (for sitemap generation)
SITE_URL=https://jbsingh.com
```

### 3. EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add a new Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{message}}`
   - `{{to_email}}`
4. Copy your Service ID, Template ID, and Public Key to `.env.local`

### 4. reCAPTCHA Setup (Optional)

1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Register a new site with reCAPTCHA v3
3. Add your site key to `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Building for Production

```bash
npm run build
npm run start
```

Generate sitemap:

```bash
npm run postbuild
```

## 📄 Pages Overview

### Core Pages
- **Home** (`/`) - Hero, stats, about preview, services grid, CSR preview
- **About Us** (`/about`) - Mission, vision, why choose us, team
- **Services** (`/services`) - Services overview grid
- **Solutions** (`/solutions`) - Advanced solutions (4PL, Control Tower, etc.)
- **CSR** (`/csr`) - Corporate social responsibility
- **Careers** (`/careers`) - Job listings (dynamic)
- **Contact** (`/contact`) - Contact form and details

### Service Pages (9)
1. Freight Forwarding
2. Custom Clearance
3. Project Management / Break Bulk Movement
4. Marine Logistics
5. Transportation Service
6. Equipment Hire
7. Warehousing & Distribution
8. Domestic Express
9. Cross Trade Services

### Footer Pages
- Terms and Conditions
- Privacy Policy

## 🎨 Design System

### Colors
- **Primary Orange**: `#ED4C22` / `#EB6E38`
- **Navy Blue**: `#00324B`
- **Dark**: `#1a1a1a`
- **Light**: `#f8f8f8`

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive sizing**: Viewport-relative units

### Components
- Button (primary, secondary, outline)
- Card (with hover effects)
- Container (responsive max-width)
- Section (consistent spacing)
- Form inputs (with validation states)

## 📝 Content Management

All content is currently stored in `/lib/constants.ts`. To update:

1. Edit `constants.ts` for content changes
2. Restart the dev server to see changes

### Future CMS Integration

The site is structured to easily integrate with a headless CMS:
- Sanity.io (recommended)
- Strapi
- Contentful

See `PLAN.md` for CMS structure details.

## 🖼️ Assets Needed from Client

See `PLACEHOLDERS.md` for a complete list of images, icons, and data needed from the client.

### Key Assets
- Logo (SVG format)
- Service icons (9 icons)
- Photos (warehouse, office, team, equipment)
- Company statistics
- Legal content (Terms & Privacy Policy)

## 🚧 Out of Scope Features

See `OUT_OF_SCOPE.md` for features that require client confirmation:
- Client Portal / Login System
- Shipment Tracking
- CRM Integration
- Chatbot
- Multilingual support
- Blog/News section

## 📊 Performance Targets

- ✅ Page load speed: <2.5 seconds
- ✅ Lighthouse score: 90+ (Performance, Accessibility, SEO)
- ✅ Service page access: <2 clicks
- ✅ Fully responsive
- 🔄 Contact form submission rate: Target 3%

## 🔍 SEO

- ✅ Custom metadata for every page
- ✅ Open Graph tags
- ✅ XML sitemap (auto-generated)
- 🔄 Schema markup (LocalBusiness - to be implemented)
- ✅ SEO-friendly URLs
- ✅ Alt text for images

## 🧪 Testing

Run the linter:
```bash
npm run lint
```

Build check:
```bash
npm run build
```

## 📱 Responsive Breakpoints

- Mobile: 640px (sm)
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- Large Desktop: 1280px (xl)
- Extra Large: 1536px (2xl)

## 🔒 Security

- Form validation (client-side)
- reCAPTCHA spam protection (when configured)
- Environment variables for sensitive data
- No exposed API keys

## 📞 Client Information

**Company**: J B Singh & Sons
**Email**: jbsinghnhsons2005@hotmail.com
**Phone**: +91 98204 56539
**Address**: Room No. 9, 2nd Floor, 23, Vaju Kotak Marg, Fort, Mumbai – 400001

**Project Manager**: Damini Rathi

## 📚 Documentation

- `PLAN.md` - Complete project plan and specifications
- `PLACEHOLDERS.md` - Assets needed from client
- `OUT_OF_SCOPE.md` - Features for future implementation

## 🤝 Contributing

This is a client project. For any changes or updates, please contact the development team.

## 📜 License

© 2025 J B Singh & Sons. All rights reserved.

---

**Built with** ❤️ **using Next.js and Tailwind CSS**
