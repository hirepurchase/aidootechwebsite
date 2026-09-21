import Link from "next/link";
import { Container } from "@/components/Container";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="max-w-xl font-serif text-[2.125rem] leading-tight text-ink sm:text-[2.75rem]">
        We could not find that page.
      </h1>
      <p className="mt-5 max-w-lg text-[1rem] leading-relaxed text-ink-soft">
        The page may have been moved or the address mistyped. These are the parts of the
        site people usually want:
      </p>

      <ul className="mt-10 max-w-xl border-t border-rule-strong">
        {[...navLinks, { href: "/contact", label: "Contact & store details" }].map((l) => (
          <li key={l.href} className="border-b border-rule">
            <Link
              href={l.href}
              className="block py-4 text-[0.9375rem] text-ink hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
