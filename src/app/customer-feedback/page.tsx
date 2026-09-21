import type { Metadata } from "next";
import Link from "next/link";
import { ImageBand } from "@/components/ImageBand";
import { PageHeader } from "@/components/PageHeader";
import { ReviewForm } from "@/components/ReviewForm";
import { Section } from "@/components/Section";
import { StarDisplay } from "@/components/StarRating";
import { SAMPLE_REVIEWS, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Feedback",
  description:
    "What Aidoo Tech Solutions customers say about buying phones and paying on hire purchase — and how to give us feedback or raise a complaint.",
};

const complaintSteps = [
  {
    title: "Tell us first",
    body: "Call, message or visit the showroom. Most issues — a payment not showing, a faulty charger, a disputed due date — are resolved the same day once someone looks at the account.",
  },
  {
    title: "We log it",
    body: "Every complaint is recorded against your customer record with the date and what was reported, so it does not depend on one member of staff remembering it.",
  },
  {
    title: "We respond",
    body: "We aim to give you an answer within five working days. If a matter needs longer — a warranty claim sent to a supplier, for instance — we tell you that and keep you updated.",
  },
  {
    title: "Escalation",
    body: "If you are not satisfied with the response, ask for the matter to be escalated to management. Serious disputes are handled under the dispute resolution clause in our Terms of Service.",
  },
];

export default function CustomerFeedbackPage() {
  return (
    <>
      <PageHeader
        title="Customer reviews and feedback"
        lede="Reviews are published with the customer's permission and in their own words. You can add yours below, and we set out plainly how to raise a complaint — a business that sells on credit should be easy to complain to."
      />

      {testimonials.length > 0 && (
        <Section title="What our customers say">
          {SAMPLE_REVIEWS && process.env.NODE_ENV !== "production" && (
            <div className="mb-10 border-l-2 border-accent bg-accent-wash px-5 py-4">
              <p className="text-[0.8125rem] leading-relaxed text-accent-deep">
                <strong className="font-semibold">Editor notice (development only):</strong>{" "}
                the six reviews below are written samples, not real customers. Replace them
                in <code className="font-mono text-[0.75rem]">src/lib/content.ts</code> and
                set <code className="font-mono text-[0.75rem]">SAMPLE_REVIEWS</code> to{" "}
                <code className="font-mono text-[0.75rem]">false</code> before the site goes
                live. This notice never appears in a production build.
              </p>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="group/review relative flex flex-col border border-rule bg-paper-raised p-7 shadow-[0_1px_2px_rgba(10,14,22,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-rule-strong hover:shadow-[0_22px_46px_-18px_rgba(10,14,22,0.26)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover/review:scale-x-100"
                />
                <StarDisplay rating={t.rating} />
                <blockquote className="mt-4 flex-1">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-rule pt-5 text-[0.8125rem]">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="mt-1 block text-ink-faint">
                    {t.location} · {t.purchase}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 text-[0.8125rem] leading-relaxed text-ink-faint">
            We publish reviews as they were given to us, with the customer&apos;s consent and
            without editing their meaning. We do not offer payment or discounts in exchange
            for a review.
          </p>
        </Section>
      )}

      {/* ── Leave a review ───────────────────────────────────────── */}
      <Section id="write-a-review" tone="sunken" title="Write a review">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
              If you have bought from us, tell other customers how it went. Good or bad —
              we publish reviews as they are written.
            </p>
            <ul className="mt-8 space-y-4 border-t border-rule-strong pt-6 text-[0.875rem] leading-relaxed text-ink-soft">
              <li className="flex gap-4">
                <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                Nothing is published without your permission.
              </li>
              <li className="flex gap-4">
                <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                We show your first name and town, never your phone number.
              </li>
              <li className="flex gap-4">
                <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                A complaint is better raised directly — see below for that route.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <ReviewForm />
          </div>
        </div>
      </Section>

      <ImageBand
        reverse
        tone="raised"
        title="Credit is a long relationship, not a single sale"
        image="/photos/customers.webp"
        alt="Customers being served at the Aidoo Tech Solutions counter."
      >
        <p>
          A customer paying over six months deals with us long after the device
          has left the shop. That only works if problems are easy to raise and
          get answered.
        </p>
        <p>
          So we publish the complaints route in full below, and we log every
          complaint against the customer&apos;s record rather than leaving it to
          whoever happened to take the call.
        </p>
      </ImageBand>

      <Section tone="sunken" title="Send us your feedback">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
              Good or bad, we want to hear it. Feedback about a specific purchase is most
              useful when it includes the date, the store or agent you dealt with, and the
              device involved.
            </p>
            <dl className="mt-8 space-y-5 border-t border-rule-strong pt-6 text-[0.875rem]">
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  Call or WhatsApp
                </dt>
                <dd className="mt-1 text-ink">{site.contact.phone}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  Email
                </dt>
                <dd className="mt-1 text-ink">{site.contact.supportEmail}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  In person
                </dt>
                <dd className="mt-1 text-ink">
                  {site.address.line1}, {site.address.city}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
              If something has gone wrong
            </h3>
            <ol className="mt-5 border-t border-rule-strong">
              {complaintSteps.map((step, i) => (
                <li key={step.title} className="flex gap-6 border-b border-rule py-5">
                  <span className="font-serif text-[0.9375rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-[0.9375rem] font-semibold text-ink">{step.title}</h4>
                    <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 border border-rule bg-paper-raised p-10 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <p className="max-w-lg font-serif text-[1.375rem] leading-snug text-ink">
            A complaint about money or a refund? Our policy sets out exactly what you are
            entitled to.
          </p>
          <Link
            href="/refund-policy"
            className="w-full shrink-0 border border-rule-strong px-6 py-3.5 text-center text-[0.875rem] font-medium text-ink hover:border-ink sm:w-auto"
          >
            Refund &amp; Cancellation Policy
          </Link>
        </div>
      </Section>
    </>
  );
}
