import { site } from "./site";

/* ───────────────────────────── Products ─────────────────────────────
   Catalogue categories shown on /products. Prices are deliberately not
   hard-coded — stock and pricing change weekly, so the site directs the
   customer to the showroom or an agent for a current quote.
   Adjust the brands and categories here as the stock changes.
--------------------------------------------------------------------- */
export const productCategories = [
  {
    slug: "smartphones",
    name: "Smartphones",
    photo: "/products/smartphones.webp",
    photoAlt: "Infinix and Samsung Galaxy handsets shown back to back.",
    summary:
      "New and certified pre-owned handsets from the brands Ghanaian customers actually buy, each checked and IMEI-recorded before it leaves the counter.",
    items: [
      "Samsung — Galaxy A series and S series",
      "Tecno",
      "Infinix",
      "itel",
    ],
    financing: true,
  },
  {
    slug: "accessories",
    name: "Phone Accessories",
    photo: "/products/accessories.webp",
    photoAlt: "Wireless earphones and headphones laid out on a light surface.",
    summary:
      "The everyday items that keep a phone working: the ones customers replace most often, stocked in depth so you rarely leave empty-handed.",
    items: [
      "Chargers, cables and fast-charge adapters",
      "Power banks",
      "Earphones, earbuds and headsets",
      "Screen protectors and protective cases",
      "Memory cards and storage",
    ],
    financing: false,
  },
  {
    slug: "tablets",
    name: "Tablets",
    photo: "/products/tablets.webp",
    photoAlt: "A Samsung Galaxy Tab open on a desk.",
    summary:
      "Tablets for students, traders and small businesses — available outright or on the same hire purchase terms as our phones.",
    items: [
      "Samsung Galaxy Tab",
      "Tecno tablets",
      "Infinix tablets",
      "itel tablets",
    ],
    financing: true,
  },
] as const;

/* ───────────────────────────── Brands ─────────────────────────────
   Shown on /products. Adjust as the stock changes.
--------------------------------------------------------------------- */
export type PhoneBrand = {
  name: string;
  note: string;
  /** Photograph of a real handset of this brand. */
  photo: string;
  photoAlt: string;
};

export const PHONE_BRANDS: PhoneBrand[] = [
  {
    name: "Samsung",
    note: "Galaxy A and S series",
    photo: "/brands/samsung.webp",
    photoAlt: "The rear of a Samsung Galaxy S series handset.",
  },
  {
    name: "Tecno",
    note: "Spark, Camon, Pova",
    photo: "/brands/tecno.webp",
    photoAlt: "The rear of a Tecno Spark 20 Pro handset.",
  },
  {
    name: "Infinix",
    note: "Hot, Note, Smart",
    photo: "/brands/infinix.webp",
    photoAlt: "The rear of an Infinix handset.",
  },
  {
    name: "itel",
    note: "Everyday budget handsets",
    photo: "/brands/itel.webp",
    photoAlt: "The rear of an itel A50 handset.",
  },
];

/* ─────────────────────── How hire purchase works ─────────────────────
   These steps describe the process without quoting a deposit percentage or
   term length, since those have not been confirmed by the business.
--------------------------------------------------------------------- */
export const hirePurchaseSteps = [
  {
    step: "01",
    title: "Choose your device",
    body: "Visit the showroom or speak to an agent in your area. Pick the phone or tablet you want and we quote you the cash price and the hire purchase price side by side, so you can see exactly what the credit costs.",
  },
  {
    step: "02",
    title: "Register and verify",
    body: "We record your details and a valid national ID (Ghana Card, passport, voter's ID or driver's licence). Verification protects you as much as us — it is what keeps the device and the agreement in your name.",
  },
  {
    step: "03",
    title: "Pay your deposit",
    body: "You pay an initial deposit and sign the hire purchase agreement. Your agreement sets out the total price, the deposit, the instalment amount, the due dates and the full term in writing before you commit.",
  },
  {
    step: "04",
    title: "Take the device home",
    body: "The device is handed over the same day, fully set up and with its warranty documentation. Ownership passes to you once the final instalment is paid.",
  },
  {
    step: "05",
    title: "Pay your instalments",
    body: "Pay by Mobile Money, card, bank transfer or in cash at any store. You receive an SMS reminder before each due date and a receipt after every payment, and you can settle the balance early at any time.",
  },
] as const;

/* ───────────────────────────── FAQs ───────────────────────────────── */
export const faqGroups = [
  {
    heading: "Buying and hire purchase",
    items: [
      {
        q: "What exactly is hire purchase?",
        a: "Hire purchase lets you take a device home today and pay for it over an agreed period. You pay an initial deposit, then fixed instalments until the balance is cleared. You have full use of the device throughout, and legal ownership transfers to you when the final instalment is paid.",
      },
      {
        q: "How much deposit do I need?",
        a: "The deposit depends on the device and the repayment term you choose. Your agent will quote the exact figure before you commit, and it is written into your agreement. Nothing is deducted or charged until you have seen and accepted those terms.",
      },
      {
        q: "How long do I have to pay?",
        a: "Repayment terms are agreed at the point of sale based on the device price and what you can comfortably afford. Shorter terms cost less overall. You may settle the outstanding balance early at any time without penalty.",
      },
      {
        q: "What do I need to qualify?",
        a: "A valid national ID (Ghana Card, passport, voter's ID or driver's licence), a working phone number registered in your name, and a verifiable address or place of work. Some agreements may require a guarantor.",
      },
      {
        q: "Can I buy a phone outright instead?",
        a: `Yes. Every device we stock can be bought outright at the cash price, in-store or through an agent. Hire purchase is an option, never a requirement.`,
      },
      {
        q: "Are your phones new or used?",
        a: "We stock both new and certified pre-owned devices, and we always tell you which is which before you buy. Pre-owned devices are tested, and their condition and warranty terms are stated on your receipt.",
      },
    ],
  },
  {
    heading: "Payments",
    items: [
      {
        q: "How do I pay my instalments?",
        a: `You can pay by Mobile Money (MTN MoMo, Telecel Cash, AT Money), by card through Paystack, by bank transfer, or in cash at any ${site.shortName} store. Every payment is receipted.`,
      },
      {
        q: "Is it safe to pay by card on this site?",
        a: "Yes. Card payments are processed by Paystack, a licensed payment processor. Your card details are entered on Paystack's secure page and are never stored on our servers or seen by our staff.",
      },
      {
        q: "What happens if I miss a payment?",
        a: "Contact us before the due date if you expect a problem — in most cases we can reschedule. If payments are missed without contact, we follow up by SMS and phone, and persistent default may lead to recovery of the device as set out in your agreement.",
      },
      {
        q: "Will I get a receipt?",
        a: "Yes. Every payment produces a receipt, and you can request a full statement of your account at any time showing what you have paid and what remains.",
      },
      {
        q: "Do you charge in any currency other than the cedi?",
        a: `All prices, deposits and instalments are quoted and charged in Ghana Cedis (${site.payments.currency}).`,
      },
    ],
  },
  {
    heading: "Warranty, returns and support",
    items: [
      {
        q: "Do your devices come with a warranty?",
        a: "Yes. New devices carry the manufacturer's warranty, and pre-owned devices carry a limited warranty stated on your receipt. Bring the device and the receipt to any store to make a claim.",
      },
      {
        q: "Can I return a device?",
        a: "Faulty devices are covered by our Refund & Cancellation Policy. We ask you to report a fault as soon as you notice it and bring the device with its receipt, box and accessories.",
      },
      {
        q: "Do you deliver?",
        a: "Yes, within the areas set out in our Delivery Policy. Devices on hire purchase are normally handed over in person once identification has been verified.",
      },
      {
        q: "How do I reach customer support?",
        a: "Call or message us on the numbers listed on our contact page, or visit the showroom during opening hours. Our agents can also help with account questions in your area.",
      },
    ],
  },
] as const;

/* ────────────────────────── Customer feedback ────────────────────────
   ⚠  THE REVIEWS BELOW ARE SAMPLES, NOT REAL CUSTOMERS.
   They were written to show how the page reads and to give the business a
   template for collecting the real thing. Replace every one with an actual
   review, given by a named customer who has agreed to see it published, and
   then set SAMPLE_REVIEWS to false.

   Leaving invented reviews on a live site presents fiction as fact to
   customers and is a compliance risk during Paystack's review.
--------------------------------------------------------------------- */

/** True while `testimonials` still holds the written samples. */
export const SAMPLE_REVIEWS = true;

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  purchase: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I needed a phone for my mobile money business but I could not pay everything at once. They showed me the cash price and the hire purchase price on the same paper before I signed. Six months and the phone is mine.",
    name: "Kwabena Mensah",
    location: "Kaneshie, Accra",
    purchase: "Samsung Galaxy A15 on hire purchase",
    rating: 5,
  },
  {
    quote:
      "What I liked is that the SMS comes before the due date, not after. So I am never surprised. One month I was short and I called them before the date and they moved it for me without any trouble.",
    name: "Abena Owusu",
    location: "Circle, Accra",
    purchase: "Tecno Spark on hire purchase",
    rating: 5,
  },
  {
    quote:
      "I went in thinking I would buy a bigger phone. The young man told me straight that the one I wanted would be hard to repair here and showed me another one. I respect that, because he could have just taken my money.",
    name: "Nii Armah Quaye",
    location: "Teshie, Accra",
    purchase: "Infinix Hot, bought outright",
    rating: 5,
  },
  {
    quote:
      "My daughter needed a tablet for school. The deposit was fair and the instalments were small enough that I did not feel it. They wrote the IMEI on my receipt, which helped me when I had to report it once.",
    name: "Ama Serwaa Boateng",
    location: "Adum, Kumasi",
    purchase: "Samsung Galaxy Tab on hire purchase",
    rating: 5,
  },
  {
    quote:
      "I did not travel to Accra. The agent here in Tamale registered me, took my deposit and gave me a receipt the same day. Every payment I make to him shows on my statement when I ask for it.",
    name: "Fatima Abdulai",
    location: "Tamale",
    purchase: "itel A50 through an agent",
    rating: 4,
  },
  {
    quote:
      "The screen protector they put on started lifting after two weeks. I took it back and they replaced it, no argument, no charge. Small thing but it tells you how they will behave on a big thing.",
    name: "Kojo Appiah",
    location: "Kasoa",
    purchase: "Phone case, charger and screen protector",
    rating: 4,
  },
];

/* ──────────────────────────── Hero slider ───────────────────────────
   Slides for the home page hero. Images live in `public/hero/` and were
   produced from the Aidoo Tech brand photography.
   Swap in photographs of the real showroom, staff and agents as they become
   available — real premises photograph better than stock.
--------------------------------------------------------------------- */
export type HeroSlide = {
  image: string;
  alt: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/hero/slide-1.webp",
    alt: "The Aidoo Tech Solutions team outside the device finance showroom.",
    title: "The phone you need, on terms you can actually keep.",
    body: "Smartphones, tablets and accessories for cash, or on hire purchase with a deposit today and the balance in instalments you agree to in advance.",
    cta: { href: "/hire-purchase", label: "How hire purchase works" },
    secondary: { href: "/products", label: "Browse what we stock" },
  },
  {
    image: "/hero/slide-5.webp",
    alt: "Samsung, Tecno, Infinix and itel handsets displayed on the showroom wall.",
    title: "Samsung, Tecno, Infinix and itel — checked before they leave the counter.",
    body: "New and certified pre-owned handsets, each tested and IMEI-recorded. We tell you which is which, and the condition is written on your receipt.",
    cta: { href: "/products", label: "View our products" },
    secondary: { href: "/contact", label: "Ask about stock" },
  },
  {
    image: "/hero/slide-4.webp",
    alt: "A customer reviewing hire purchase terms with an Aidoo Tech staff member at the counter.",
    title: "Cash price and credit price, side by side, before you sign.",
    body: "Deposit, instalment amount, due dates and the final payment — all agreed in writing and handed to you. No figure appears later that you have not already seen.",
    cta: { href: "/hire-purchase", label: "See the terms" },
    secondary: { href: "/faq", label: "Read the FAQs" },
  },
  {
    image: "/hero/slide-2.webp",
    alt: "An Aidoo Tech agent registering a customer outside the showroom.",
    title: "You do not have to be in Accra to buy from us.",
    body: "Our agents carry stock, register customers and collect instalments in their own communities — so the person you deal with is someone you can find again.",
    cta: { href: "/agents", label: "Find or become an agent" },
    secondary: { href: "/contact", label: "Talk to us" },
  },
  {
    image: "/hero/slide-3.webp",
    alt: "A customer using the smartphone he bought on hire purchase from Aidoo Tech.",
    title: "Yours outright on the final instalment.",
    body: "Pay by Mobile Money, card, transfer or cash. You get an SMS reminder before each due date, a receipt after every payment, and you can settle early with no penalty.",
    cta: { href: "/payments", label: "Ways to pay" },
    secondary: { href: "/hire-purchase", label: "How it works" },
  },
];
