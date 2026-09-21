# Aidoo Tech Solutions — company website

Marketing and compliance website for Aidoo Tech Solutions: retail of phones,
tablets and accessories at Circle, Accra, plus device financing (hire purchase)
through a nationwide agent network.

Built for submission to **Paystack** as part of business verification, so it
carries the pages a payment processor expects to see: a real About page,
published FAQs, customer feedback and complaints route, Terms of Service,
Refund & Cancellation Policy, Delivery Policy and Privacy Policy.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.
Every page is statically prerendered — no database, no API, no runtime secrets.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Before you go live

Business details live in one file, `src/lib/site.ts` — edit it once and the
header, footer, contact page, structured data and all four policy documents
update together. Phone numbers, WhatsApp and the email address are already in.

Details the business has not supplied yet are **absent rather than shown as
placeholders**: the pages are written to omit them cleanly, so nothing reading
"TODO" is ever displayed to a visitor. [`STILL-NEEDED.md`](STILL-NEEDED.md)
lists what is outstanding, what it affects, and which items hold up the
Paystack submission.

## Brand assets

`public/` holds the blue Aidoo Tech logo (sourced from `hirepurchase/frontend/icon1.png`),
processed for web:

| File | Use |
| --- | --- |
| `logo-mark.png` | The "A" mark, transparent background — used in the header and footer |
| `logo-full.png` | Full lockup with wordmark, transparent background |
| `icon-192.png`, `icon-512.png`, `apple-icon.png` | App and home-screen icons |
| `src/app/favicon.ico` | Browser tab icon |
| `hero/slide-1…5.webp` | Home page hero slider images |

The palette in `src/app/globals.css` is built on the brand blue sampled from the
logo, **#013b9a**, over cool near-white paper. The blue is reserved for the
wordmark, links, eyebrows and primary buttons rather than spread across large
fields. Headings are Source Serif 4, body text is Inter.

## Page map

| Route | Purpose |
| --- | --- |
| `/` | Home — hero slider, what we sell, how financing works |
| `/about` | The business, how it operates, registration details |
| `/products` | Phones, accessories, tablets |
| `/hire-purchase` | Device financing: process, eligibility, obligations |
| `/agents` | Agent network, dealing with agents safely, applying |
| `/customer-feedback` | Reviews and the complaints procedure |
| `/faq` | 15 questions across buying, payments and support |
| `/contact` | Showroom address, hours, direct lines |
| `/payments` | Accepted channels, fraud warnings, receipts |
| `/terms` | Terms of Service |
| `/refund-policy` | Refund & Cancellation Policy |
| `/delivery` | Delivery Policy |
| `/privacy` | Privacy Policy |

`/sitemap.xml` and `/robots.txt` are generated from `src/lib/site.ts`.
