import type { Metadata } from "next";
import Link from "next/link";
import { ImageBand } from "@/components/ImageBand";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { hirePurchaseSteps } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "How device financing works at Aidoo Tech Solutions: deposit, agreed instalments, written terms, and ownership on final payment.",
};

const eligibility = [
  "A valid national ID — Ghana Card, passport, voter's ID or driver's licence",
  "A phone number registered in your own name",
  "A verifiable home address or place of work",
  "Proof of income or regular trading activity, where requested",
  "A guarantor, for some devices and terms",
];

const obligations = [
  {
    title: "Your obligations",
    items: [
      "Pay each instalment on or before its due date",
      "Keep the device in reasonable condition while the balance is outstanding",
      "Tell us promptly if your phone number or address changes",
      "Contact us before a due date if you expect difficulty paying",
    ],
  },
  {
    title: "Our obligations",
    items: [
      "Give you the full terms in writing before you pay anything",
      "Hand over the device once the deposit is paid and ID verified",
      "Receipt every payment and provide a statement on request",
      "Apply no charge that was not disclosed in your agreement",
    ],
  },
];

export default function HirePurchasePage() {
  return (
    <>
      <PageHeader
        title="Take the device today, pay the balance over time."
        lede="Hire purchase is a credit sale. You pay a deposit, receive the device immediately, and clear the remaining balance in fixed instalments over an agreed period. Ownership transfers to you when the final instalment is paid."
      />

      <Section title="How it works, step by step">
        <ol className="border-t border-rule-strong">
          {hirePurchaseSteps.map((step) => (
            <li
              key={step.step}
              className="grid gap-4 border-b border-rule py-8 sm:grid-cols-12 sm:gap-8"
            >
              <span className="font-serif text-[1.125rem] text-accent sm:col-span-1">
                {step.step}
              </span>
              <h3 className="font-serif text-[1.25rem] leading-snug text-ink sm:col-span-4">
                {step.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft sm:col-span-7">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <ImageBand
        tone="raised"
        title="We work the numbers out with you, in front of you"
        image="/photos/counter.webp"
        alt="An Aidoo Tech staff member going through hire purchase terms with a customer at the counter."
      >
        <p>
          Bring the device you have in mind and roughly what you can put down.
          We will show you the cash price, the deposit, the instalment and the
          date of the final payment before anything is signed.
        </p>
        <p>
          If the numbers do not work for you, we will say so and suggest a
          device that does, rather than write an agreement you will struggle
          to keep.
        </p>
      </ImageBand>

      <Section tone="sunken">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[1.625rem] leading-tight text-ink">
              What you need to bring
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              Verification is not a formality. It is what ties the agreement and the device
              to a real, identifiable person — which protects honest customers as much as it
              protects us.
            </p>
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {eligibility.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border border-rule bg-paper px-6 py-4 text-[0.9375rem] text-ink"
              >
                <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Your responsibilities and ours">
        <div className="grid gap-px border border-rule bg-rule md:grid-cols-2">
          {obligations.map((block) => (
            <div key={block.title} className="bg-paper p-8 sm:p-10">
              <h3 className="font-serif text-[1.25rem] text-ink">{block.title}</h3>
              <ul className="mt-6 space-y-4">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule pb-4 text-[0.875rem] leading-relaxed text-ink-soft last:border-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[1.75rem] leading-tight text-paper">
              Talk to us before the due date.
            </h2>
            <div className="mt-5 max-w-xl space-y-4 text-[0.9375rem] leading-relaxed text-paper/70">
              <p>
                Incomes are uneven and we know it. If you tell us in advance that a payment
                will be late, we can usually reschedule it without any drama.
              </p>
              <p>
                Where instalments are missed without contact, we follow up by SMS and phone.
                Continued default may lead to recovery of the device under the terms of your
                agreement — which is set out plainly in the document you sign, not hidden in
                small print.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <Link
              href="/terms"
              className="inline-block bg-paper px-6 py-3.5 text-[0.875rem] font-medium text-ink hover:bg-accent-wash"
            >
              Read the full terms
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 border border-rule bg-paper-raised p-10 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="font-serif text-[1.5rem] leading-snug text-ink">
              Ready to start, or want a quote first?
            </h2>
            <p className="mt-2 max-w-lg text-[0.9375rem] text-ink-soft">
              Visit either showroom or speak to an agent in your region.
              We will work out the deposit and instalments with you before anything is signed.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/contact"
              className="w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper hover:bg-accent-deep sm:w-auto"
            >
              Get a quote
            </Link>
            <Link
              href="/faq"
              className="w-full border border-rule-strong px-6 py-3.5 text-center text-[0.875rem] font-medium text-ink hover:border-ink sm:w-auto"
            >
              FAQs
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
