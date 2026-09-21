import type { Metadata } from "next";
import Link from "next/link";
import { ImageBand } from "@/components/ImageBand";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment Methods",
  description:
    "How to pay Aidoo Tech Solutions: card via Paystack, Mobile Money, bank transfer or cash in-store. All amounts are charged in Ghana Cedis.",
};

const channels = [
  {
    name: "Card — Visa & Mastercard",
    body: "Card payments are processed by Paystack. You are taken to Paystack's secure checkout to enter your card details; we never see or store your card number, and no charge is taken without your authorisation.",
    note: "Processed by Paystack",
  },
  {
    name: "Mobile Money",
    body: "MTN MoMo, Telecel Cash and AT Money are all accepted. Approve the prompt on your phone and keep the confirmation message — it is your proof of payment alongside our receipt.",
    note: "All networks",
  },
  {
    name: "Bank transfer",
    body: "Transfers are accepted to our business account. Always quote your customer or contract reference so the payment is applied to the right account, and send us the transfer confirmation.",
    note: "Quote your reference",
  },
  {
    name: "Cash in-store",
    body: `Cash is accepted at any ${site.shortName} store during opening hours. Never leave without a printed or SMS receipt — no receipt means no record.`,
    note: "Receipt always issued",
  },
];

export default function PaymentsPage() {
  return (
    <>
      <PageHeader
        title="Ways to pay"
        lede={`All prices, deposits and instalments are quoted and charged in Ghana Cedis (${site.payments.currency}). Every payment, by any channel, produces a receipt.`}
      />

      <Section title="Payment methods we accept">
        <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {channels.map((c) => (
            <div key={c.name} className="bg-paper p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-[1.25rem] leading-snug text-ink">{c.name}</h3>
              </div>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-soft">{c.body}</p>
              <p className="mt-6 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <ImageBand
        tone="raised"
        title="Most customers pay from the handset in their hand"
        image="/photos/customer-phone.webp"
        alt="A customer using the smartphone he bought from Aidoo Tech Solutions."
      >
        <p>
          Mobile Money is how the majority of instalments reach us. You approve
          the payment on your own handset, on your own network, and the receipt
          follows by SMS.
        </p>
        <p>
          An SMS reminder goes out before each due date, so a payment is never
          missed simply because it was forgotten.
        </p>
      </ImageBand>

      <Section tone="sunken">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[1.625rem] leading-tight text-ink">
              What we will never ask you for
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              Fraudsters impersonate retailers and finance companies. These rules make it
              easy to spot them.
            </p>
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {[
              "We will never ask for your card PIN, CVV or online banking password.",
              "We will never ask you to send money to a personal Mobile Money number — payments go to our registered business accounts or to a carded agent who issues a receipt.",
              "We will never ask for your Mobile Money PIN. You approve payments on your own handset.",
              "We will never charge a fee that is not written in your agreement or shown before checkout.",
              "If a message or call seems to come from us and something feels wrong, hang up and call the number on this site.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border border-rule bg-paper px-6 py-4 text-[0.9375rem] leading-relaxed text-ink"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Receipts and statements">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            [
              "Every payment is receipted",
              "In-store, through an agent or online — if you paid, there is a receipt. Ask for it if it is not offered.",
            ],
            [
              "Statements on request",
              "Ask at any time for a statement of your agreement showing what you have paid and what remains.",
            ],
            [
              "Check the confirmation",
              "Make sure the amount in your SMS or receipt matches what you handed over before you leave.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-rule-strong pt-6">
              <h3 className="font-serif text-[1.125rem] leading-snug text-ink">{title}</h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border border-rule bg-paper-raised p-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg font-serif text-[1.375rem] leading-snug text-ink">
            A payment missing from your account, or charged in error?
          </p>
          <Link
            href="/refund-policy"
            className="w-full shrink-0 bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper hover:bg-accent-deep sm:w-auto"
          >
            Refund &amp; Cancellation Policy
          </Link>
        </div>
      </Section>
    </>
  );
}
