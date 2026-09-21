import type { ReactNode } from "react";
import { Container } from "./Container";

export function PageHeader({
  title,
  lede,
  meta,
}: {
  title: string;
  lede?: string;
  meta?: ReactNode;
}) {
  return (
    <div className="border-b border-rule bg-paper-raised">
      <Container className="py-14 sm:py-20">
        <h1 className="max-w-3xl font-serif text-[2.125rem] leading-[1.12] tracking-[-0.015em] text-ink sm:text-[2.875rem]">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-soft">
            {lede}
          </p>
        )}
        {meta && <div className="mt-6 text-[0.8125rem] text-ink-faint">{meta}</div>}
      </Container>
    </div>
  );
}
