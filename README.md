# DNA Mitigation - Federal Sentencing Advocacy Website

A premium legal services website for DNA Mitigation, specializing in federal sentencing advocacy and early mitigation strategy. Built with Next.js 16, Framer Motion, and Tailwind CSS.

## Features

- **Premium Dark Gold Aesthetic** - Professional design with gold (#d4af37) accents on dark (#0a0a0a) background
- **Expandable Content Blocks** - Premium home page feature with sophisticated expand/collapse animations (not cheap accordions)
- **Reusable Practice Area Template** - Single component for all 6 practice area detail pages with injected content
- **Responsive Design** - Mobile-first approach with smooth animations and transitions
- **Static Content** - Practice areas, case studies, and testimonials are hardcoded for fast loading
- **Contact & Consultation Forms** - Free consultation booking with email confirmations
- **Separate Payment Page** - For service fees sent to clients after consultation
- **Framer Motion Animations** - Smooth, premium animations throughout

## Project Structure

```
/app
  /api
    /contact              # Contact form submission endpoint
    /consultation         # Consultation booking endpoint
  /practice-areas
    /[slug]              # Dynamic practice area detail pages
  /case-studies          # Case studies landing page
  /testimonials          # Testimonials landing page
  /about                 # About page
  /contact               # Contact page
  /schedule-consultation # Consultation booking page
  /payment               # Service payment page
  page.tsx               # Home page

/components
  Navbar.tsx             # Navigation with scroll-triggered styling
  Footer.tsx             # Footer with contact info
  HeroSection.tsx        # Cinematic hero component
  ExpandableContentBlock.tsx  # Premium 4-block expandable section (home page)
  PracticeAreaTemplate.tsx    # Reusable template for practice area pages
  TestimonialCard.tsx    # Testimonial card component
  CaseStudyCard.tsx      # Case study card component
  ContactForm.tsx        # Reusable form for contact/consultation
  CTASection.tsx         # Call-to-action section component

/lib
  /data
    practiceAreas.ts     # 6 practice areas with FAQs and content
    testimonials.ts      # 5 testimonials
    caseStudies.ts       # 3 case studies with metrics
    homeBlocks.ts        # 4 expandable home page blocks
  api-utils.ts           # Email validation, sending, response helpers
```

## Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Email Configuration (for contact form confirmations)
NODEMAILER_EMAIL=your-email@gmail.com
NODEMAILER_PASSWORD=your-gmail-app-password

# Stripe Configuration (for payment page)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

### Email Setup (Gmail)

To use Gmail with Nodemailer:
1. Enable 2-Factor Authentication on your Google Account
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Use the generated 16-character password as `NODEMAILER_PASSWORD`

### Stripe Setup (Optional)

The payment page is a template for Stripe integration:
1. Get keys from https://dashboard.stripe.com/apikeys
2. Add publishable and secret keys to `.env.local`
3. Implement actual Stripe checkout in the `/api/payment` route

### 3. Run Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## Key Components Explained

### ExpandableContentBlock

This is the premium 4-block feature on the home page that replaces cheap accordions:
- 4 blocks positioned at the landing page edge
- Smooth expand/collapse with Framer Motion animations
- Content transforms on expand (not just show/hide)
- Only one block expanded at a time
- Closes when clicking outside

Location: `components/ExpandableContentBlock.tsx`
Data: `lib/data/homeBlocks.ts`

### PracticeAreaTemplate

A single reusable component used for all 6 practice area detail pages:
- Takes content as props: title, description, intro, contentSections, FAQs
- Same consistent layout and styling across all pages
- FAQ accordion with smooth open/close
- CTA section at bottom
- Dynamic routes at `/practice-areas/[slug]`

Location: `components/PracticeAreaTemplate.tsx`
Data: `lib/data/practiceAreas.ts`

### Forms

Both contact and consultation forms:
- Share the same `ContactForm` component
- Support email validation and phone validation
- Send confirmation emails to clients
- Status messages for success/error
- Form validation before submission

Location: `components/ContactForm.tsx`
Data: `lib/api-utils.ts` (validation helpers)

## Customization

### Update Contact Information

Edit `components/Footer.tsx` and `app/contact/page.tsx`:
```typescript
contact@dnamitigation.com  // Change this
(123) 456-7890            // And this
```

### Update Colors

The gold/black color system is defined in:
- `app/globals.css` - CSS custom properties (--accent, --primary, etc.)
- All components use these tokens: `text-accent`, `bg-primary`, etc.

Change `--accent: #d4af37;` in globals.css to a different gold/accent color.

### Add More Testimonials

Edit `lib/data/testimonials.ts`:
```typescript
{
  id: 6,
  quote: "Your testimonial here...",
  author: "Attorney Name",
  title: "Case Type",
  category: "category-name",
}
```

### Add More Case Studies

Edit `lib/data/caseStudies.ts`:
```typescript
{
  id: 4,
  title: "Case Title",
  challenge: "...",
  strategy: "...",
  outcome: "...",
  metrics: { reduction: "X%", finalSentence: "X years", guidelineRange: "X-X years" }
}
```

### Add More Practice Areas

Edit `lib/data/practiceAreas.ts`:
```typescript
{
  id: 'new-area',
  slug: 'new-area',
  title: 'Practice Area Title',
  shortDescription: '...',
  description: '...',
  intro: '...',
  contentSections: [...],
  faqs: [...]
}
```

Then add a link to the new practice area in the navigation and practice areas page.

## API Routes

### POST /api/contact
Accepts contact form submissions and sends confirmation email.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "firm": "string",
  "message": "string"
}
```

### POST /api/consultation
Accepts consultation booking requests and sends confirmation email.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "firm": "string",
  "serviceType": "general|psr|alternative|document|appellate",
  "preferredDate": "YYYY-MM-DD",
  "message": "string"
}
```

### Future: POST /api/payment
Will handle Stripe payment processing for service fees.

## Performance Optimizations

- Static data (practice areas, testimonials, case studies) for fast loading
- Framer Motion for smooth, GPU-accelerated animations
- Next.js image optimization (configured in next.config.mjs)
- Lazy loading via whileInView for animations
- Responsive images with srcset
- Mobile-first CSS approach

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in project settings
4. Deploy

### Environment Variables on Vercel

In Vercel Project Settings → Environment Variables, add:
- `NODEMAILER_EMAIL`
- `NODEMAILER_PASSWORD`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

## Troubleshooting

### Forms Not Sending Emails

1. Verify Gmail credentials and app password
2. Check that 2FA is enabled on the Google account
3. Confirm environment variables are set in `.env.local`
4. Check browser console for error messages

### Images Not Loading

1. Verify Vercel Blob URLs are correct
2. Check image file exists at the URL
3. Test URLs directly in browser

### Animations Not Smooth

1. Check browser performance (DevTools → Performance)
2. Reduce animation complexity on lower-end devices
3. Check Framer Motion version in package.json

## Dependencies

- **Next.js 16** - React framework
- **Framer Motion 12** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Nodemailer 8** - Email sending
- **Stripe 22** - Payment processing
- **Mongoose 9** - MongoDB ODM (for future database integration)
- **Zod** - Type validation (installed, ready for use)

## Future Enhancements

1. **MongoDB Integration** - Store consultation bookings and contact submissions
2. **Stripe Payments** - Implement full payment processing for service fees
3. **Admin Dashboard** - View consultations, manage bookings, send invoices
4. **Email Templates** - HTML email templates for different message types
5. **Analytics** - Track form submissions, page views, conversions
6. **Blog** - Add case law updates and sentencing articles
7. **Client Portal** - Secure portal for clients to upload documents
8. **Video Content** - Embed explainer videos about mitigation strategy

## Support

For questions or issues, contact the development team or check the Vercel documentation.

---

Built with v0 and designed for premium legal services. All rights reserved © DNA Mitigation.
