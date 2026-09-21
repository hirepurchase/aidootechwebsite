import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  title,
  lede,
  children,
  tone = "paper",
  className = "",
}: {
  id?: string;
  title?: string;
  lede?: string;
  children?: ReactNode;
  tone?: "paper" | "raised" | "sunken" | "ink";
  className?: string;
}) {
  const tones = {
    paper: "bg-paper",
    raised: "bg-paper-raised border-y border-rule",
    sunken: "bg-paper-sunken border-y border-rule",
    ink: "bg-ink text-paper",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <Container>
        {title && (
          <div className="max-w-2xl">
            {title && (
              <h2
                className={`font-serif text-[1.75rem] leading-tight tracking-[-0.01em] sm:text-[2.125rem] ${
                  tone === "ink" ? "text-paper" : "text-ink"
                }`}
              >
                {title}
              </h2>
            )}
            {lede && (
              <p
                className={`mt-4 text-[1rem] leading-relaxed ${
                  tone === "ink" ? "text-paper/70" : "text-ink-soft"
                }`}
              >
                {lede}
              </p>
            )}
          </div>
        )}
        {children && <div className={title ? "mt-12" : ""}>{children}</div>}
      </Container>
    </section>
  );
}
