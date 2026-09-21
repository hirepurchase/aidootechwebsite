import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { DeviceGallery } from "@/components/DeviceGallery";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { PHONE_BRANDS, productCategories } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Smartphones, tablets and phone accessories stocked at our Circle, Accra showroom — available for cash or on hire purchase.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Phones, tablets and accessories."
        lede="Everything below is sold over the counter at our showroom and through our agents. Devices are available for cash at the marked price, or on hire purchase with a deposit and agreed instalments."
        meta={
          <p>
            Prices move with the market, so we quote current figures in person rather than
            publish numbers that go out of date. Call ahead and we will confirm stock and
            price before you travel.
          </p>
        }
      />

      {/* ── Category cards ──────────────────────────────────────── */}
      <Section title="What we sell">
        <div className="grid gap-6 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <ProductCard
              key={cat.slug}
              slug={cat.slug}
              photo={cat.photo}
              alt={cat.photoAlt}
              name={cat.name}
              summary={cat.summary}
              financing={cat.financing}
              items={cat.items}
            />
          ))}
        </div>
      </Section>

      {/* ── Brands ──────────────────────────────────────────────── */}
      <Section
        tone="sunken"
        title="The phone brands we stock"
        lede="Every handset is checked and its IMEI recorded before sale. Tablets are available in the same brands, on the same terms."
      >
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PHONE_BRANDS.map((brand) => (
            <li
              key={brand.name}
              className="group/brand relative overflow-hidden border border-rule bg-paper-raised transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-rule-strong hover:shadow-[0_18px_38px_-16px_rgba(10,14,22,0.24)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover/brand:scale-x-100"
              />
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-sunken">
                <Image
                  src={brand.photo}
                  alt={brand.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover/brand:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <span className="block text-[0.9375rem] font-semibold text-ink">
                  {brand.name}
                </span>
                <span className="mt-1 block text-[0.75rem] leading-snug text-ink-faint">
                  {brand.note}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <DeviceGallery />

      {/* ── Showroom photograph ─────────────────────────────────── */}
      <section className="border-y border-rule bg-paper-raised">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-[1.625rem] leading-tight text-ink">
                Come and handle the phone before you buy it.
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                Our stock sits on the shelf at {site.address.city}, not only in a
                catalogue. Pick it up, check the screen, compare two models side by
                side — then decide whether to pay cash or spread it.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-block w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper transition-colors hover:bg-accent-deep sm:w-auto"
              >
                Find the store
              </Link>
            </div>
            <div className="lg:col-span-6">
              <figure className="m-0">
                <div className="overflow-hidden border border-rule">
                  <Image
                    src="/products/handsets.webp"
                    alt="A Samsung Galaxy and an Infinix handset side by side."
                    width={1100}
                    height={883}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 text-[0.75rem] text-ink-faint">
                  Samsung and Infinix handsets — two of the five brands we stock.
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="raised">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-[1.625rem] leading-tight text-ink">
              What we tell you at the counter
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-6">
            {[
              [
                "New or pre-owned",
                "We label every device honestly. Pre-owned handsets are tested before sale and their condition is stated on your receipt.",
              ],
              [
                "IMEI recorded",
                "The IMEI of every phone we sell is recorded against your purchase. It protects you if the device is ever lost or stolen.",
              ],
              [
                "Warranty",
                "New devices carry the manufacturer's warranty. Pre-owned devices carry a limited warranty, with its length written on your receipt.",
              ],
              [
                "Cash price first",
                "You always see the outright price before the financed price, so the cost of credit is visible rather than buried.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="border-l-2 border-accent pl-5">
                <h3 className="text-[0.9375rem] font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 border border-rule bg-paper-raised p-10 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="font-serif text-[1.5rem] leading-snug text-ink">
              Looking for a specific model?
            </h2>
            <p className="mt-2 max-w-md text-[0.9375rem] text-ink-soft">
              Tell us what you want and we will confirm availability at the{" "}
              {site.address.city} showroom or through an agent near you.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full shrink-0 bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper hover:bg-accent-deep sm:w-auto"
          >
            Ask about stock
          </Link>
        </div>
      </Section>
    </>
  );
}
