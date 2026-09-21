"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the mobile menu when navigation lands on a new route. Adjusting
  // state during render is React's recommended pattern here — an effect
  // would cause a second render pass with the menu still open.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-[2px]">
      {/* Utility strip: the two things a walk-in customer needs first. */}
      <div className="hidden border-b border-rule/70 bg-paper-sunken md:block">
        <Container className="flex h-9 items-center justify-between text-[0.75rem] text-ink-soft">
          <p>
            Showroom at {site.address.city} · Agents in every region of {site.address.country}
          </p>
          <p className="flex items-center gap-5">
            <a className="hover:text-accent" href={site.contact.phoneHref}>
              {site.contact.phone}
            </a>
            <Link className="hover:text-accent" href="/contact">
              Visit a store
            </Link>
          </p>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-[0.875rem] transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-accent px-5 py-2.5 text-[0.8125rem] font-medium text-paper transition-colors hover:bg-accent-deep sm:inline-block"
          >
            Talk to us
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center border border-rule-strong text-ink lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
              {open ? (
                <g stroke="currentColor" strokeWidth="1.5">
                  <line x1="2" y1="2" x2="16" y2="12" />
                  <line x1="16" y1="2" x2="2" y2="12" />
                </g>
              ) : (
                <g stroke="currentColor" strokeWidth="1.5">
                  <line x1="0" y1="2" x2="18" y2="2" />
                  <line x1="0" y1="7" x2="18" y2="7" />
                  <line x1="0" y1="12" x2="18" y2="12" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-rule bg-paper-raised lg:hidden">
          <Container className="py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border-b border-rule/70 py-3.5 text-[0.9375rem] text-ink-soft last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 mb-4 block bg-accent px-5 py-3 text-center text-[0.875rem] font-medium text-paper"
            >
              Talk to us
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
