import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Photograph paired with a short passage of text, used to break up the longer
 * pages. The image sits on the right by default; `reverse` puts it on the left
 * so consecutive bands on a page can alternate.
 */
export function ImageBand({
  image,
  alt,
  title,
  children,
  caption,
  reverse = false,
  tone = "paper",
}: {
  image: string;
  alt: string;
  title: string;
  children: ReactNode;
  caption?: string;
  reverse?: boolean;
  tone?: "paper" | "raised" | "sunken";
}) {
  const tones = {
    paper: "bg-paper",
    raised: "bg-paper-raised border-y border-rule",
    sunken: "bg-paper-sunken border-y border-rule",
  } as const;

  return (
    <section className={`${tones[tone]} py-16 sm:py-20`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
            <h2 className="font-serif text-[1.625rem] leading-tight text-ink sm:text-[1.875rem]">
              {title}
            </h2>
            <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              {children}
            </div>
          </div>

          <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <figure className="m-0">
              <div className="overflow-hidden border border-rule">
                <Image
                  src={image}
                  alt={alt}
                  width={1300}
                  height={800}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
              {caption && (
                <figcaption className="mt-3 text-[0.75rem] text-ink-faint">
                  {caption}
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
