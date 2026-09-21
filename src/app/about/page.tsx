import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ImageBand } from "@/components/ImageBand";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the business",
  description:
    "Who Aidoo Tech Solutions is, what we sell, where we trade and how our hire purchase business is run.",
};

const principles = [
  {
    title: "Clear pricing",
    body: "The cash price and the hire purchase price are quoted together, before anything is signed. A customer should never discover the real cost of credit after they have committed to it.",
  },
  {
    title: "Devices we can support",
    body: "We stock brands with parts and support available in Ghana. A cheap handset nobody can repair is not a saving, and we will say so rather than make the sale.",
  },
  {
    title: "Proper records",
    body: "Every sale, deposit and instalment is recorded against the customer's account. If there is ever a dispute, both sides can look at the same record.",
  },
  {
    title: "Always reachable",
    body: "A physical showroom, named agents and a working phone number. Customers who pay over months need to know where to find us in month seven.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Aidoo Tech Solutions"
        lede={`${site.legalName} is a retailer of smartphones, tablets and accessories based at ${site.address.city}. Alongside straightforward cash sales, we operate a hire purchase business that lets customers take a device home on a deposit and pay the balance over an agreed term.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[1.625rem] leading-tight text-ink">
              What we do
            </h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-relaxed text-ink-soft">
              <p>
                The business has two halves that support each other. The first is retail:
                we buy smartphones, tablets and accessories and sell them over the counter
                at our {site.address.city} showroom, for cash or card, at the marked price.
              </p>
              <p>
                The second is device financing. A large number of our customers can afford
                a good phone over six months but not in a single payment. For them we offer
                hire purchase — an initial deposit, then fixed instalments until the balance
                is cleared, with ownership transferring on the final payment.
              </p>
              <p>
                Around both sits a network of agents working in communities across{" "}
                {site.address.country}. Agents carry stock, register customers, collect
                deposits and follow up on instalments locally, which is what allows a
                customer in another region to buy from us without travelling to Accra.
              </p>
              <p>
                We run the financing side on our own management system, so every contract,
                instalment schedule and payment is recorded, reconciled and available to the
                customer on request.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-rule bg-paper-raised p-8">
              <h3 className="font-serif text-[1.0625rem] font-semibold text-ink">Business at a glance</h3>
              <dl className="mt-6 space-y-5 text-[0.875rem]">
                {[
                  ["Trading name", site.name],
                  ["Registered name", site.legalName],
                  ["Sector", "Retail of mobile phones & consumer electronics; consumer device financing"],
                  ["Showroom", `${site.address.city}, ${site.address.country}`],
                  ["Coverage", `Agent network across ${site.address.country}`],
                  ["Currency", `Ghana Cedi (${site.payments.currency})`],
                ].map(([term, detail]) => (
                  <div key={term} className="border-b border-rule pb-4 last:border-0 last:pb-0">
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                      {term}
                    </dt>
                    <dd className="mt-1.5 leading-snug text-ink">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <ImageBand
        tone="raised"
        title="The people behind the counter"
        image="/photos/team.webp"
        alt="The Aidoo Tech Solutions team outside the Circle, Accra showroom."
      >
        <p>
          Hire purchase only works when the customer can find the same people
          again months later. Our staff are salaried and based at the showroom,
          and our agents are known in the communities they serve.
        </p>
        <p>
          Everyone who registers a customer or takes a payment is trained on the
          agreement terms first, so the answer you get at the counter is the same
          answer you get on the phone.
        </p>
      </ImageBand>

      <Section
        tone="sunken"
        title="How we do business"
      >
        <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="bg-paper-sunken p-8">
              <h3 className="font-serif text-[1.1875rem] text-ink">{p.title}</h3>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Container className="px-0">
          <div className="flex flex-col gap-6 border-t border-rule-strong pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-serif text-[1.375rem] leading-snug text-ink">
              Questions about how we work, or want to see the terms before you visit?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/hire-purchase"
                className="w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper hover:bg-accent-deep sm:w-auto"
              >
                Hire purchase terms
              </Link>
              <Link
                href="/contact"
                className="w-full border border-rule-strong px-6 py-3.5 text-center text-[0.875rem] font-medium text-ink hover:border-ink sm:w-auto"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
