/**
 * Single source of truth for every real-world business detail on this site.
 *
 * Details still to be supplied by the business are simply absent rather than
 * shown as placeholders — the pages are written to read correctly without
 * them. See STILL-NEEDED.md at the project root for what is outstanding.
 */

export const site = {
  name: "Aidoo Tech Solutions",
  shortName: "Aidoo Tech",
  legalName: "Aidoo Tech Solutions",
  tagline: "Phones, accessories and device financing you can trust.",
  description:
    "Aidoo Tech Solutions sells smartphones and accessories from its showrooms at Kwabenya and Circle in Accra, and makes them affordable nationwide through structured hire purchase — a deposit today, the balance in agreed instalments.",

  url: "https://aidootech.com",

  /** Not yet supplied. Fill both in and they appear in the footer and Terms. */
  registration: {
    number: "",
    tin: "",
  },

  contact: {
    phone: "+233 53 978 8785",
    phoneHref: "tel:+233539788785",
    phoneAlt: "+233 24 887 9858",
    phoneAltHref: "tel:+233248879858",
    whatsapp: "+233 53 978 8785",
    whatsappHref: "https://wa.me/233539788785",
    /** One inbox handles enquiries, support and agent applications. */
    email: "aidootechsolutions@gmail.com",
    supportEmail: "aidootechsolutions@gmail.com",
    salesEmail: "aidootechsolutions@gmail.com",
  },

  /** The two showrooms, in the order they are listed across the site. */
  showrooms: ["Kwabenya", "Circle"],

  /** Street addresses for each showroom are still to be supplied; the pages
   *  omit them cleanly while they are empty. */
  address: {
    line1: "",
    line2: "",
    city: "Kwabenya & Circle, Accra",
    /** The town proper, for postal and structured-data use. */
    locality: "Accra",
    region: "Greater Accra Region",
    country: "Ghana",
    digitalAddress: "",
  },

  /** Opening times still to be supplied; the contact page hides the table
   *  while this is empty. */
  hours: [] as { days: string; time: string }[],

  /** Social profiles, once they exist. Nothing renders while this is empty. */
  socials: [] as { label: string; href: string }[],

  /** Payment channels accepted. Shown on the payments and policy pages. */
  payments: {
    methods: [
      "Card payments (Visa, Mastercard) via Paystack",
      "Mobile Money — MTN MoMo, Telecel Cash, AT Money",
      "Bank transfer",
      "Cash at any Aidoo Tech store",
    ],
    currency: "GHS",
    currencySymbol: "GH₵",
  },
} as const;

/** Convenience string used in footers and structured data. */
/** "Kwabenya and Circle" — for sentences that name the shops. */
export const showroomsLabel = site.showrooms.join(" and ");

export const addressLine = [
  site.address.line1,
  site.address.line2,
  site.address.city,
  site.address.country,
]
  .filter(Boolean)
  .join(", ");

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Phones & Accessories" },
  { href: "/hire-purchase", label: "Hire Purchase" },
  { href: "/agents", label: "Agents" },
  { href: "/customer-feedback", label: "Customer Feedback" },
  { href: "/faq", label: "FAQs" },
] as const;

export const policyLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund & Cancellation Policy" },
  { href: "/delivery", label: "Delivery Policy" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;
