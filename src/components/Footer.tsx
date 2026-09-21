import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { navLinks, policyLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-rule bg-paper-sunken">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-ink-soft">
              {site.tagline} Serving customers from our {site.address.city} showroom and
              through agents across {site.address.country}.
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
              Company
            </h2>
            <ul className="space-y-2.5 text-[0.875rem] text-ink-soft">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
              Policies
            </h2>
            <ul className="space-y-2.5 text-[0.875rem] text-ink-soft">
              {policyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/payments" className="hover:text-accent">
                  Payment Methods
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
              Visit or call
            </h2>
            <address className="space-y-1 text-[0.875rem] not-italic leading-relaxed text-ink-soft">
              {site.address.line1 && <p>{site.address.line1}</p>}
              {site.address.line2 && <p>{site.address.line2}</p>}
              <p>
                {site.address.city}, {site.address.country}
              </p>
            </address>
            <p className="mt-4 space-y-1 text-[0.875rem] text-ink-soft">
              <a className="block hover:text-accent" href={site.contact.phoneHref}>
                {site.contact.phone}
              </a>
              <a className="block hover:text-accent" href={site.contact.phoneAltHref}>
                {site.contact.phoneAlt}
              </a>
              <a className="block hover:text-accent" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-rule-strong pt-6 text-[0.8125rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          {site.registration.number ? (
            <p>
              Registered in {site.address.country} · No. {site.registration.number}
            </p>
          ) : (
            <p>Registered in {site.address.country}</p>
          )}
        </div>
      </Container>
    </footer>
  );
}
