# Asset Placeholders - J B Singh & Sons Website

This document lists all the assets, images, data, and content that need to be provided by the client to complete the website.

## 📸 Images Needed

### 1. Logo
- **Format**: SVG (preferred) or PNG with transparent background
- **Sizes**: Original high-resolution file
- **Usage**: Header, Footer, Favicon
- **Location**: `/public/images/logo.svg`

### 2. Hero Section
- **Image**: Logistics illustration or photo (containers, cranes, ships, port operations)
- **Format**: JPG/PNG
- **Dimensions**: 1920x1080px (minimum)
- **Usage**: Home page hero background
- **Location**: `/public/images/hero-logistics.jpg`

### 3. About Page Images (3 images)
- **Image 1**: Warehouse or office interior
- **Image 2**: Team at work / operations
- **Image 3**: Equipment or cargo handling (wide format)
- **Format**: JPG/PNG
- **Dimensions**: 800x800px (images 1&2), 1600x800px (image 3)
- **Location**: `/public/images/about/`

### 4. Team Photos (4-8 members)
- **Type**: Individual headshots
- **Format**: JPG/PNG
- **Dimensions**: 400x400px (square, minimum)
- **Details needed**:
  - Photo
  - Name
  - Role/Position
  - Brief bio (optional, 2-3 sentences)
- **Location**: `/public/images/team/`

### 5. Warehouse Photos (3-5 photos)
- Interior views
- Storage areas
- Loading/unloading operations
- **Format**: JPG/PNG
- **Dimensions**: 1200x800px (minimum)
- **Location**: `/public/images/warehouse/`

### 6. Office Photos (2-3 photos)
- Office space
- Work environment
- **Format**: JPG/PNG
- **Dimensions**: 1200x800px (minimum)
- **Location**: `/public/images/office/`

### 7. Equipment Photos (if Equipment Hire is confirmed)
- Cranes
- Forklifts
- Loaders
- Other specialized equipment
- **Format**: JPG/PNG
- **Dimensions**: 800x600px (minimum)
- **Location**: `/public/images/equipment/`

### 8. CSR Initiative Photos (6+ photos)
- Safety training sessions
- Community initiatives
- Environmental programs
- Team volunteering activities
- **Format**: JPG/PNG
- **Dimensions**: 1000x750px (minimum)
- **Location**: `/public/images/csr/`

### 9. Solutions Page Images (9 images)
- One image per solution block
- Can be icons or photos representing each solution
- **Format**: JPG/PNG or SVG
- **Dimensions**: 800x450px (16:9 ratio)
- **Location**: `/public/images/solutions/`

## 🎨 Icons Needed (9 Service Icons)

All icons should be provided in SVG format for scalability.

1. **Freight Forwarding Icon**
   - Suggested: Container ship, cargo, or global network

2. **Customs Clearance Icon**
   - Suggested: Customs stamp, documents, or checklist

3. **Project Management Icon**
   - Suggested: Heavy machinery, crane, or industrial equipment

4. **Marine Logistics Icon**
   - Suggested: Ship, anchor, or port

5. **Transportation Icon**
   - Suggested: Truck, rail, or multimodal transport

6. **Equipment Hire Icon**
   - Suggested: Crane, forklift, or tools

7. **Warehousing Icon**
   - Suggested: Warehouse building, storage boxes, or inventory

8. **Domestic Express Icon**
   - Suggested: Fast delivery, package, or speed lines

9. **Cross Trade Icon**
   - Suggested: Globe with arrows, international trade routes

**Location**: `/public/icons/services/`

## 📊 Company Statistics (Data Needed)

Currently using placeholders marked as "X,XXX+" - please provide accurate data:

1. **Years in Operation**: 20+ (confirmed)

2. **Monthly Cargo Movements**
   - Current placeholder: "X,XXX+"
   - Needed: Actual number (e.g., "5,000+")

3. **Team Members**
   - Current placeholder: "XXX+"
   - Needed: Actual number (e.g., "50+")

4. **Global Routes / Ports**
   - Current placeholder: "XX+"
   - Needed: Actual number (e.g., "25+")

5. **Number of Clients Served**
   - Not currently displayed
   - Optional: Total clients or active clients

6. **Countries Covered**
   - Not currently displayed
   - Optional: Number of countries

**Location to update**: `/lib/constants.ts` → `STATS` array

## 📝 Service-Specific Details

For each service, we need clarification on:

### Freight Forwarding
- ✅ International and domestic coverage?
- ✅ Air, sea, land, or all modes?
- ❓ Specific routes or regions of expertise?

### Custom Clearance
- ✅ Import and export?
- ❓ Specific certifications (AEO, etc.)?
- ❓ Specialized clearances (FSSAI, SVB, etc.)?

### Project Management
- ❓ Types of projects handled (oil & gas, construction, etc.)?
- ❓ Weight/size limits?
- ❓ Case studies available?

### Marine Logistics
- ❓ Own vessels or broker?
- ❓ Ports primarily served?

### Transportation
- ❓ Own fleet or third-party?
- ✅ Temperature-controlled available?
- ❓ Pan-India coverage confirmed?

### Equipment Hire
- ❓ Own equipment or rental partners?
- ❓ Complete list of equipment available?
- ❓ Pricing structure (contact-based, hourly, daily)?

### Warehousing & Distribution
- ❓ Own warehouses or managed spaces?
- ❓ Total storage capacity (sq ft)?
- ❓ Locations of warehouses?
- ❓ Specialized storage (cold, hazardous)?

### Domestic Express
- ❓ Partnership with courier services or in-house?
- ❓ Delivery timeframes (24hr, 48hr, etc.)?
- ❓ Coverage areas?

### Cross Trade
- ❓ Most common trade lanes?
- ❓ Documentation services included?

## ⚖️ Legal Information

### 1. GST Number
- Needed for footer/legal pages

### 2. Business Registration Details
- Company registration number
- Year of incorporation (using 2003)

### 3. Proprietor/Director Information
- Name
- Title
- Optional: Brief background

### 4. Terms and Conditions
- Complete legal text
- **Note**: Currently using placeholder content
- **Action**: Legal team to provide final text

### 5. Privacy Policy
- Complete privacy policy text
- GDPR/Indian IT Act compliance
- **Note**: Currently using placeholder content
- **Action**: Legal team to provide final text

## 🎯 Additional Content

### Case Studies (Optional)
If available, for each service:
- Project name
- Challenge
- Solution
- Results
- Photos
- Client testimonial (if permitted)

### Certifications
- ISO certifications
- Industry memberships
- Awards/recognitions
- **Location**: Can be added to About page or individual service pages

### Client Testimonials (Optional)
- Client name
- Company name
- Quote/feedback
- Photo (optional)
- Industry

## 🔐 Configuration Credentials

### 1. EmailJS
- Service ID
- Template ID
- Public Key
- **Setup**: See README.md for configuration guide

### 2. Google reCAPTCHA
- Site Key
- Secret Key
- **Setup**: Register at https://www.google.com/recaptcha/admin

### 3. Google Maps
- Maps API Key
- Location coordinates for map embed
- **Current**: Using placeholder

### 4. Google Analytics (Optional)
- Tracking ID
- **Setup**: Add to root layout if needed

## 📧 Email Template for EmailJS

The contact form sends the following data:
- Name (`from_name`)
- Email (`from_email`)
- Phone (`phone`)
- Company (`company`)
- Message (`message`)
- Recipient email (`to_email`): jbsinghnhsons2005@hotmail.com

**Template Example**:
```
New contact form submission from J B Singh & Sons website

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the website contact form.
```

## 📋 Checklist for Client (Damini Rathi)

Please coordinate with the client to gather:

- [ ] Logo (SVG/PNG)
- [ ] Hero background image
- [ ] About page images (3)
- [ ] Team photos and bios (4-8)
- [ ] Warehouse photos (3-5)
- [ ] Office photos (2-3)
- [ ] Equipment photos (if applicable)
- [ ] CSR initiative photos (6+)
- [ ] Solution images (9)
- [ ] Service icons (9 SVG)
- [ ] Company statistics (accurate numbers)
- [ ] Service-specific details and confirmations
- [ ] GST number and business registration details
- [ ] Terms and Conditions (legal text)
- [ ] Privacy Policy (legal text)
- [ ] EmailJS credentials
- [ ] reCAPTCHA keys
- [ ] Google Maps API key
- [ ] Certifications/awards (if any)
- [ ] Case studies (if available)
- [ ] Client testimonials (if available)

## 📁 File Naming Convention

Please use the following naming convention for assets:

- Lowercase
- No spaces (use hyphens)
- Descriptive names

**Examples**:
- `jb-singh-logo.svg`
- `team-john-smith.jpg`
- `warehouse-mumbai-01.jpg`
- `icon-freight-forwarding.svg`

## 🚀 Asset Delivery

Please send all assets to:
- **Email**: [developer email]
- **Cloud Storage**: Google Drive/Dropbox folder
- **Format**: Organized by folder (logos, team, warehouse, etc.)

---

**Last Updated**: November 17, 2025
**Contact**: Damini Rathi (Project Manager)
