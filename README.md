# Suma Sri Interiors & Constructions

Premium responsive website for Suma Sri Interiors & Constructions, Hanamakonda, Warangal.

## Stack
Next.js 15 App Router, React 19, TypeScript, responsive CSS, SEO metadata, LocalBusiness JSON-LD, sitemap, robots, image optimization and WhatsApp lead handoff.

## Run locally
```bash
npm install
cp .env.example .env.local
# Add the official WhatsApp number in international digits-only format (91 followed by the number)
npm run dev
```

## Source-content and asset note
The existing Vercel website was used as the source for known business name, Hanamakonda/Warangal address, service area, service categories, consultation process, estimate/material-choice information and the described Hanamakonda project details. Its original media assets could not be fetched in this environment. Images in this repository are illustrative Unsplash references, not copied original company photography. Replace them with owner-approved original photos before launch.

## Confirm before launch
- Official WhatsApp/phone number and email.
- Owner-approved photos, testimonials, language translations and project claims.
- Confirm current business address and hours.
- Configure NEXT_PUBLIC_WHATSAPP_NUMBER and NEXT_PUBLIC_SITE_URL.
- Test enquiry handoff on mobile and run Lighthouse after deployment.

No phone number, email address or testimonial has been invented. The contact form hands off to WhatsApp only after the official number is configured.
