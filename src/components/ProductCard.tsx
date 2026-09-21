import Image from "next/image";
import Link from "next/link";

export type ProductCardProps = {
  slug: string;
  photo: string;
  alt: string;
  name: string;
  summary: string;
  financing: boolean;
  items?: readonly string[];
  href?: string;
};

/**
 * Rounded card with device artwork. Lifts, deepens its shadow and brings the
 * artwork forward on hover; the whole card is one link target when `href` is
 * given. Motion is suppressed by the reduced-motion rule in globals.css.
 */
export function ProductCard({
  photo,
  alt,
  name,
  summary,
  financing,
  items,
  href,
}: ProductCardProps) {
  const card = (
    <article className="group/card relative flex h-full flex-col overflow-hidden border border-rule bg-paper-raised shadow-[0_1px_2px_rgba(10,14,22,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-rule-strong hover:shadow-[0_22px_46px_-18px_rgba(10,14,22,0.26)]">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover/card:scale-x-100"
      />
      {/* Photograph */}
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-sunken">
        <Image
          src={photo}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.05]"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-[1.25rem] leading-snug text-ink">{name}</h3>
        </div>

        <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-soft">{summary}</p>

        {items && (
          <ul className="mt-5 space-y-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.8125rem] leading-snug text-ink-soft"
              >
                <span className="mt-[0.45rem] h-1 w-1 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto border-t border-rule pt-5">
          <p className="text-[0.8125rem] text-ink-soft">
            {financing
              ? "Available for cash or on hire purchase"
              : "Sold for cash"}
          </p>
        </div>
      </div>
    </article>
  );

  if (!href) return card;

  return (
    <Link href={href} className="group/card block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
      {card}
    </Link>
  );
}
