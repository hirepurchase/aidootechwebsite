"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { heroSlides } from "@/lib/content";

const INTERVAL = 7000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);

  const count = heroSlides.length;
  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);

  // Auto-advance, unless the visitor is interacting with the slider, the tab
  // is hidden, or they have asked for reduced motion.
  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % count);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label="Aidoo Tech Solutions highlights"
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative isolate overflow-hidden bg-ink"
    >
      {/* Images. All are mounted and cross-faded so nothing reflows. */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, i) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-[1200ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Scrim: keeps the copy legible over any frame, in brand navy. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
      </div>

      <Container className="relative flex min-h-[34rem] flex-col justify-center py-16 sm:min-h-[38rem] sm:py-20 lg:min-h-[41rem]">
        <div className="relative max-w-2xl">
          {heroSlides.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={slide.image}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!active}
                className={`transition-opacity duration-700 ${
                  active
                    ? "opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0"
                }`}
              >
                <h1 className="font-serif text-[2.125rem] leading-[1.08] tracking-[-0.02em] text-paper sm:text-[3rem]">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-paper/75 sm:text-[1.0625rem]">
                  {slide.body}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href={slide.cta.href}
                    tabIndex={active ? undefined : -1}
                    className="w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper transition-colors hover:bg-accent-deep sm:w-auto"
                  >
                    {slide.cta.label}
                  </Link>
                  {slide.secondary && (
                    <Link
                      href={slide.secondary.href}
                      tabIndex={active ? undefined : -1}
                      className="w-full border border-paper/35 px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper transition-colors hover:border-paper hover:bg-paper/10 sm:w-auto"
                    >
                      {slide.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-between gap-8 sm:mt-14">
          {/* Indicators. The active bar fills over the autoplay interval. */}
          <div className="flex flex-1 items-center gap-3 sm:max-w-sm">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-current={i === index ? "true" : undefined}
                className="group relative h-6 flex-1"
              >
                <span className="sr-only">{`Go to slide ${i + 1}`}</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden bg-paper/25 transition-colors group-hover:bg-paper/45"
                >
                  {i === index && (
                    <span
                      // remount only on slide change, so the fill restarts with
                      // each slide but freezes in place on hover rather than
                      // snapping back to empty
                      key={index}
                      className="hero-progress-fill block h-full w-full bg-paper"
                      style={{
                        animationDuration: `${INTERVAL}ms`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/25 bg-paper/10 text-paper backdrop-blur-md transition-colors duration-300 hover:bg-paper hover:text-ink"
            >
              <span className="sr-only">Previous slide</span>
              <svg width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
                <path
                  d="M7 1L1 7l6 6M1 7h15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/25 bg-paper/10 text-paper backdrop-blur-md transition-colors duration-300 hover:bg-paper hover:text-ink"
            >
              <span className="sr-only">Next slide</span>
              <svg width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
                <path
                  d="M10 1l6 6-6 6M16 7H1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Announce slide changes to screen readers without moving focus. */}
      <p aria-live="polite" className="sr-only">
        {`Slide ${index + 1} of ${count}: ${heroSlides[index].title}`}
      </p>
    </section>
  );
}
