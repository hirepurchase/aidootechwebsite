import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { faqGroups } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Answers to common questions about buying phones from Aidoo Tech Solutions, hire purchase terms, payments, warranty and support.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
  };

  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        lede="If your question is not answered here, call us or visit the showroom — we would rather explain it properly than have you guess."
      />

      {faqGroups.map((group, index) => (
        <Section key={group.heading} tone={index % 2 === 1 ? "sunken" : "paper"}>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-[1.5rem] leading-tight text-ink lg:sticky lg:top-32">
                {group.heading}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-rule-strong">
                {group.items.map((item) => (
                  <details key={item.q} className="group border-b border-rule">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1rem] font-medium text-ink marker:hidden hover:text-accent">
                      {item.q}
                      <span
                        aria-hidden="true"
                        className="mt-1.5 shrink-0 text-ink-faint transition-transform group-open:rotate-45"
                      >
                        <svg width="13" height="13" viewBox="0 0 13 13">
                          <g stroke="currentColor" strokeWidth="1.4">
                            <line x1="6.5" y1="0" x2="6.5" y2="13" />
                            <line x1="0" y1="6.5" x2="13" y2="6.5" />
                          </g>
                        </svg>
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-6 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <div className="flex flex-col gap-6 border border-rule bg-paper-raised p-10 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="font-serif text-[1.5rem] leading-snug text-ink">
              Still not sure?
            </h2>
            <p className="mt-2 max-w-md text-[0.9375rem] text-ink-soft">
              Call {site.contact.phone} or come into either showroom and
              ask us directly.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full shrink-0 bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper hover:bg-accent-deep sm:w-auto"
          >
            Contact us
          </Link>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
