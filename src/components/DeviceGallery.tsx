import Image from "next/image";
import { Container } from "./Container";

/**
 * Mosaic of device photography. The first tile spans 2×2 on wider screens and
 * the rest fill the row; every tile crops square, so the grid stays even
 * whatever the source aspect ratio.
 */
const tiles = [
  {
    src: "/gallery/samsung.webp",
    alt: "Samsung Galaxy Tab, S series and A series handsets in the display case.",
    caption: "Samsung",
  },
  {
    src: "/gallery/tecno.webp",
    alt: "Tecno Camon 50, Spark 50 and Camon Slim boxes on the shelf.",
    caption: "Tecno",
  },
  {
    src: "/gallery/infinix.webp",
    alt: "Infinix HOT 70, NOTE Edge and GT 50 Pro boxes on the shelf.",
    caption: "Infinix",
  },
  {
    src: "/gallery/wall.webp",
    alt: "Samsung Galaxy A series, Tecno and itel handsets across the shop wall.",
    caption: "On the wall",
  },
  {
    src: "/gallery/accessories.webp",
    alt: "Cases, chargers, cables and earphones on the accessory wall.",
    caption: "Accessories",
  },
  {
    src: "/gallery/carton.webp",
    alt: "A carton of sealed Samsung Galaxy A17 handsets, each with a 24-month warranty seal.",
    caption: "Sealed and warranted",
  },
];

export function DeviceGallery() {
  return (
    <section className="border-y border-rule bg-paper-raised py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-serif text-[1.75rem] leading-tight text-ink sm:text-[2.125rem]">
            On our shelves right now
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft">
            Photographs taken in our own showroom, not a catalogue. Stock moves, so call
            ahead if you want a particular model held for you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {tiles.map((tile) => (
            <figure
              key={tile.src}
              className="group/tile relative overflow-hidden border border-rule bg-paper-sunken"
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                width={660}
                height={880}
                sizes="(min-width: 768px) 32vw, 50vw"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover/tile:scale-[1.06]"
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
