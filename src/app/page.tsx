import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { productCategories } from "@/lib/content";
import { site } from "@/lib/site";

const assurances = [
  {
    title: "Written terms, before you pay",
    body: "Cash price, deposit, instalment and final date — all agreed in writing and handed to you before any money changes hands. No figure appears later that you have not already seen.",
  },
  {
    title: "Devices we check",
    body: "Every handset is checked and its IMEI recorded before sale. New stock carries the manufacturer's warranty; pre-owned stock is labelled as such, with its condition stated on your receipt.",
  },
  {
    title: "A receipt for every payment",
    body: "Pay by Mobile Money, card, transfer or cash and you get a receipt. Ask for a statement any time and we will show you what you have paid and what is left.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* ── How it works ───────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-raised">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-[1.75rem] leading-snug text-ink sm:text-[2rem]">
                Pay a deposit. Take the device home the same day. Clear the balance in
                agreed instalments.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <ul className="border-t border-rule-strong">
                {[
                  ["Deposit", "Agreed with you at the counter, in writing."],
                  ["Instalments", "Fixed amounts, fixed dates, SMS reminder before each one."],
                  ["Ownership", "Yours outright once the final instalment is paid."],
                  ["Early settlement", "Allowed at any time, with no penalty."],
                ].map(([label, detail]) => (
                  <li
                    key={label}
                    className="flex flex-col gap-1 border-b border-rule py-5 sm:flex-row sm:gap-8"
                  >
                    <span className="w-40 shrink-0 text-[0.875rem] font-semibold text-ink">
                      {label}
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-ink-soft">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Where to buy, and how to pay */}
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              ["In-store", "Circle, Accra showroom"],
              ["Nationwide", "Agents in every region"],
              ["Payments", "MoMo, card, transfer, cash"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="group/fact relative border border-rule bg-paper p-7 shadow-[0_1px_2px_rgba(10,14,22,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-rule-strong hover:shadow-[0_22px_46px_-18px_rgba(10,14,22,0.26)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover/fact:scale-x-100"
                />
                <h3 className="font-serif text-[1.25rem] leading-snug text-ink">{title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── What we sell ─────────────────────────────────────────── */}
      <Section
        title="Phones, tablets and accessories"
        lede="Stock moves weekly, so we quote current prices in the showroom or through your agent rather than listing figures that go stale."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {productCategories.map((cat) => (
            <ProductCard
              key={cat.slug}
              slug={cat.slug}
              photo={cat.photo}
              alt={cat.photoAlt}
              name={cat.name}
              summary={cat.summary}
              financing={cat.financing}
              href="/products"
            />
          ))}
        </div>
      </Section>

      {/* ── Assurances ───────────────────────────────────────────── */}
      <Section
        tone="sunken"
        title="What you can expect from us"
      >
        <div className="grid gap-10 sm:grid-cols-3">
          {assurances.map((item, i) => (
            <div key={item.title} className="border-t border-rule-strong pt-6">
              <span className="font-serif text-[0.875rem] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-[1.1875rem] leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Agents ───────────────────────────────────────────────── */}
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="max-w-xl font-serif text-[1.75rem] leading-tight text-paper sm:text-[2.125rem]">
              You do not have to be in Accra to buy from us.
            </h2>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-paper/70">
              Our agents operate across {site.address.country}. They carry stock, register
              customers, collect deposits and follow up on instalments in their own
              communities — so the person you deal with is someone you can find again.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <Link
              href="/agents"
              className="inline-block bg-paper px-6 py-3.5 text-[0.875rem] font-medium text-ink transition-colors hover:bg-accent-wash"
            >
              Find or become an agent
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Closing ──────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-10 border border-rule bg-paper-raised p-10 sm:p-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="max-w-lg font-serif text-[1.75rem] leading-tight text-ink">
              Come to the counter, or call before you come.
            </h2>
            <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-ink-soft">
              Tell us the device you have in mind and roughly what you can put down, and
              we will tell you honestly whether it works — before you travel.
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:justify-end">
            <Link
              href="/contact"
              className="w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper transition-colors hover:bg-accent-deep sm:w-auto"
            >
              Contact us
            </Link>
            <Link
              href="/faq"
              className="w-full border border-rule-strong px-6 py-3.5 text-center text-[0.875rem] font-medium text-ink transition-colors hover:border-ink sm:w-auto"
            >
              Read the FAQs
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
