# Still needed from Aidoo Tech

Nothing on this list blocks the site from running — every page renders cleanly
without these. They are the facts the business has not supplied yet, and the
placeholders that used to stand in for them have been removed rather than left
showing to visitors.

**Supplied so far:** phone numbers, WhatsApp number and email address.

## Blocks the Paystack submission

| Needed | Where it goes | Currently |
| --- | --- | --- |
| Registered company name, registration number, TIN | Footer, Terms §1 | Footer says "Registered in Ghana" with no number; Terms omits the number |
| Shop name/number and street | Footer, Contact, Terms, Privacy | Only "Circle, Accra" shows |
| GhanaPost GPS address | Contact page | Line hidden |
| Opening hours | Contact page | Table hidden entirely |
| Effective date for each of the 4 policies | Terms, Privacy, Refund, Delivery | "Last updated" line hidden |

Set these in `src/lib/site.ts` — one file, and every page picks them up.

## Policy specifics

The Refund and Delivery policies were reworded to state the customer's rights
without committing to figures the business has not confirmed. They read
correctly as they are, but they are vaguer than a payment processor would
prefer. Supply these and the exact wording can go back in:

- Change-of-mind return window, and the cooling-off period on a hire purchase
  agreement
- How long a fault inspection takes, and the target for resolving a complaint
- Refund timelines per channel (card, Mobile Money, bank transfer)
- Delivery days, daily cut-off, delivery windows for Accra and the regions,
  and the delivery fees

## Content

- **Customer reviews.** `testimonials` in `src/lib/content.ts` is empty, so the
  reviews section is hidden and the page shows only the complaints procedure.
  Add real reviews with the customer's permission — never an invented one.
- **Photographs** of the real shop, staff, agents and stock. See
  `public/photos/CREDITS.md` and `public/products/CREDITS.md`.
- **An iMO handset photo.** The brand was removed from the site because no
  licensed photograph of one exists. `public/brands/CREDITS.md` has the steps
  to put it back.
- **Social profiles.** `socials` is empty and nothing renders.

## Decisions

- **Legal review.** The four policies create binding obligations, especially
  the hire purchase terms. They should be read by a Ghanaian legal
  practitioner before launch.
- **Data Protection Commission registration.** The business holds ID numbers,
  addresses and credit data, which normally requires registering as a data
  controller under Act 843. Add the number to `src/app/privacy/page.tsx` §1.
- **Where agent applications should go.** The form currently hands the
  completed application to WhatsApp. Set `NEXT_PUBLIC_AGENT_FORM_ENDPOINT` to
  deliver them somewhere else — see `.env.example`.
- **The live domain.** `site.url` is set to `https://aidootech.com`; confirm
  before deployment.
