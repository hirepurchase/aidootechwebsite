import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { PageHeader } from "./PageHeader";
import { policyLinks, site } from "@/lib/site";

/**
 * Shared shell for the policy documents (Terms, Refunds, Delivery, Privacy).
 * `lastUpdated` is shown to the reader and matters for compliance review —
 * update it whenever the wording of a policy changes.
 */
export function LegalPage({
  title,
  lede,
  lastUpdated,
  children,
  currentHref,
}: {
  title: string;
  lede: string;
  /** Effective date, once the business has set one. Hidden while empty. */
  lastUpdated: string;
  children: ReactNode;
  currentHref: string;
}) {
  return (
    <>
      <PageHeader
        title={title}
        lede={lede}
        meta={
          <p>
            {lastUpdated ? `Last updated: ${lastUpdated} · ` : ""}
            Applies to {site.legalName}, {site.address.city}, {site.address.country}
          </p>
        }
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="Policies" className="lg:sticky lg:top-32">
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                Our policies
              </h2>
              <ul className="mt-4 border-t border-rule">
                {policyLinks.map((l) => {
                  const active = l.href === currentHref;
                  return (
                    <li key={l.href} className="border-b border-rule">
                      <Link
                        href={l.href}
                        aria-current={active ? "page" : undefined}
                        className={`block py-3 text-[0.875rem] leading-snug ${
                          active
                            ? "font-medium text-accent"
                            : "text-ink-soft hover:text-ink"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 border border-rule bg-paper-raised p-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  Questions?
                </p>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft">
                  Contact us before you buy if any term here is unclear.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-block text-[0.8125rem] font-medium text-accent underline underline-offset-4"
                >
                  Contact us
                </Link>
              </div>
            </nav>
          </aside>

          <article className="prose-legal lg:col-span-9 lg:max-w-3xl">{children}</article>
        </div>
      </Container>
    </>
  );
}
