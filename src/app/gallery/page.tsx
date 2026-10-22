import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { stockPhotos, STOCK_PHOTOS_TAKEN } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Photographs of the stock on the shelves at the Aidoo Tech Solutions showrooms in Kwabenya and Circle, Accra — Samsung, Tecno, Infinix, itel, Villaon and Nokia handsets, tablets and accessories.",
};

export default function GalleryPage() {
  const landscape = stockPhotos.filter((p) => p.wide);
  const portrait = stockPhotos.filter((p) => !p.wide);

  return (
    <>
      <PageHeader
        title="Our shop and our stock"
        lede={`Photographs taken inside the ${site.showrooms.join(" and ")} showrooms — the shelves, the display cases and the stockroom. Every device shown is stock we were holding on the day.`}
        meta={<p>Photographed {STOCK_PHOTOS_TAKEN}. Stock moves, so call us to confirm a particular model.</p>}
      />

      {/* The showroom itself, full width. */}
      {landscape.map((photo) => (
        <section key={photo.src} className="border-b border-rule bg-paper-raised py-12 sm:py-16">
          <Container>
            <figure className="m-0">
              <div className="overflow-hidden border border-rule">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1280}
                  height={720}
                  priority
                  sizes="(min-width: 1024px) 80vw, 100vw"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[0.8125rem] text-ink-faint">
                {photo.caption}
              </figcaption>
            </figure>
          </Container>
        </section>
      ))}

      <Section title="On the shelves">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portrait.map((photo) => (
            <figure
              key={photo.src}
              className="group/shot m-0 border border-rule bg-paper-raised transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-rule-strong hover:shadow-[0_22px_46px_-18px_rgba(10,14,22,0.26)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={720}
                  height={1280}
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover/shot:scale-[1.04]"
                />
              </div>
              <figcaption className="border-t border-rule p-5">
                <span className="block text-[0.9375rem] font-semibold text-ink">
                  {photo.caption}
                </span>
                <span className="mt-1 block text-[0.8125rem] leading-snug text-ink-soft">
                  {photo.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="sunken">
        <div className="flex flex-col gap-6 border border-rule bg-paper-raised p-10 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="font-serif text-[1.5rem] leading-snug text-ink">
              Looking for something you can see here?
            </h2>
            <p className="mt-2 max-w-lg text-[0.9375rem] text-ink-soft">
              Call {site.contact.phone} and we will confirm the model is in stock and hold
              it for you, or tell you when the next delivery lands.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/products"
              className="w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper hover:bg-accent-deep sm:w-auto"
            >
              What we sell
            </Link>
            <Link
              href="/contact"
              className="w-full border border-rule-strong px-6 py-3.5 text-center text-[0.875rem] font-medium text-ink hover:border-ink sm:w-auto"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
