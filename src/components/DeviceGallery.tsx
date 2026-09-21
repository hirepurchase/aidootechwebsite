import Image from "next/image";
import { Container } from "./Container";

/**
 * Mosaic of device photography. The first tile spans 2×2 on wider screens and
 * the rest fill the row; every tile crops square, so the grid stays even
 * whatever the source aspect ratio.
 */
const tiles = [
  {
    src: "/gallery/handsets.webp",
    alt: "A Samsung Galaxy and an Infinix handset side by side.",
    caption: "Smartphones",
    wide: true,
  },
  {
    src: "/gallery/tablet.webp",
    alt: "A Samsung Galaxy Tab open on a desk.",
    caption: "Tablets",
  },
  {
    src: "/gallery/charging.webp",
    alt: "A smartphone charging from a power bank.",
    caption: "Power banks",
  },
  {
    src: "/gallery/powerbank.webp",
    alt: "A customer holding a smartphone and a power bank.",
    caption: "On the move",
  },
  {
    src: "/gallery/charger.webp",
    alt: "A fast-charge adapter and cable.",
    caption: "Chargers & cables",
  },
];

export function DeviceGallery() {
  return (
    <section className="border-y border-rule bg-paper-raised py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-serif text-[1.75rem] leading-tight text-ink sm:text-[2.125rem]">
            What comes through the shop
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft">
            Phones and tablets are the bulk of what we sell, and the accessories that keep
            them running are the things customers come back for.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((tile) => (
            <figure
              key={tile.src}
              className={`group/tile relative overflow-hidden border border-rule bg-paper-sunken ${
                tile.wide ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                width={tile.wide ? 900 : 560}
                height={tile.wide ? 900 : 560}
                sizes={tile.wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover/tile:scale-[1.06]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-10">
                <span className="text-[0.8125rem] font-medium text-paper">
                  {tile.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
