import type { Metadata } from "next";
import Link from "next/link";
import { ImageBand } from "@/components/ImageBand";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Store",
  description:
    "Visit the Aidoo Tech Solutions showroom at Circle, Accra, or reach us by phone, WhatsApp or email.",
};

const reasons = [
  {
    title: "Buying a device",
    detail: "Stock, prices, and whether a specific model is available today.",
    channel: site.contact.salesEmail,
  },
  {
    title: "An existing agreement",
    detail: "Balances, due dates, receipts, statements and rescheduling.",
    channel: site.contact.supportEmail,
  },
  {
    title: "Become an agent",
    detail: "Coverage areas, stock arrangements and onboarding.",
    channel: site.contact.salesEmail,
  },
  {
    title: "Anything else",
    detail: "General enquiries, partnerships and press.",
    channel: site.contact.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Visit our store or get in touch"
        lede={`Our showroom is at ${site.address.city}. If you are outside Accra, call us and we will put you in touch with an agent in your area.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Store details */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[1.625rem] leading-tight text-ink">
              Where to find us
            </h2>

            <address className="mt-6 space-y-1 text-[1rem] not-italic leading-relaxed text-ink-soft">
              {site.address.line1 && <p>{site.address.line1}</p>}
              {site.address.line2 && <p>{site.address.line2}</p>}
              <p>{site.address.city}</p>
              <p>
                {site.address.region}, {site.address.country}
              </p>
            </address>

            {site.address.digitalAddress && (
              <p className="mt-4 text-[0.875rem] text-ink-faint">
                GhanaPost GPS: {site.address.digitalAddress}
              </p>
            )}

            {site.hours.length > 0 && (
              <>
                <h3 className="mt-10 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
                  Opening hours
                </h3>
                <dl className="mt-4 border-t border-rule-strong">
                  {site.hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline justify-between gap-6 border-b border-rule py-3.5 text-[0.9375rem]"
                    >
                      <dt className="text-ink-soft">{h.days}</dt>
                      <dd className="text-right text-ink">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}
          </div>

          {/* Payment methods */}
          <div className="lg:col-span-7">
            <div className="border border-rule bg-paper-raised p-8 sm:p-10">
              <h3 className="font-serif text-[1.0625rem] font-semibold text-ink">Contact details</h3>
              <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                    Phone
                  </dt>
                  <dd className="mt-1.5 space-y-1 text-[1rem] text-ink">
                    <a className="block hover:text-accent" href={site.contact.phoneHref}>
                      {site.contact.phone}
                    </a>
                    <a className="block hover:text-accent" href={site.contact.phoneAltHref}>
                      {site.contact.phoneAlt}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                    WhatsApp
                  </dt>
                  <dd className="mt-1.5 text-[1rem] text-ink">
                    <a
                      className="hover:text-accent"
                      href={site.contact.whatsappHref}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {site.contact.whatsapp}
                    </a>
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                    Email
                  </dt>
                  <dd className="mt-1.5 text-[1rem] text-ink">
                    <a className="hover:text-accent" href={`mailto:${site.contact.email}`}>
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <h3 className="mt-10 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
              What we can help with
            </h3>
            <div className="mt-4 border-t border-rule-strong">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="grid gap-2 border-b border-rule py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <h4 className="text-[0.9375rem] font-semibold text-ink sm:col-span-5">
                    {r.title}
                  </h4>
                  <p className="text-[0.875rem] leading-relaxed text-ink-soft sm:col-span-7">
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ImageBand
        tone="raised"
        title="Look for the Device Finance sign"
        image="/photos/storefront.webp"
        alt="The Aidoo Tech Solutions shop front at Circle, Accra."
      >
        <p>
          The showroom is on the main strip at {site.address.city}. If you are
          coming for the first time, call ahead and we will confirm the device
          you want is in stock before you travel.
        </p>
        <p>
          Walk-ins are welcome during opening hours — you do not need an
          appointment to ask about prices or hire purchase terms.
        </p>
      </ImageBand>

      <Section tone="sunken">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Outside Accra?",
              body: "Call us and we will connect you with an agent covering your district.",
              href: "/agents",
              cta: "About our agents",
            },
            {
              title: "Making a payment?",
              body: "See every channel we accept and what to keep as proof of payment.",
              href: "/payments",
              cta: "Payment methods",
            },
            {
              title: "Need the terms?",
              body: "Our published policies cover sales, credit, refunds and delivery.",
              href: "/terms",
              cta: "Terms of Service",
            },
          ].map((c) => (
            <div key={c.title} className="border-t border-rule-strong pt-6">
              <h3 className="font-serif text-[1.125rem] text-ink">{c.title}</h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-soft">{c.body}</p>
              <Link
                href={c.href}
                className="mt-4 inline-block text-[0.8125rem] font-medium text-accent underline underline-offset-4 hover:text-accent-deep"
              >
                {c.cta}
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
