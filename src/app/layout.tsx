import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { addressLine, site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Phones, Accessories & Device Financing in Ghana`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Phones, Accessories & Device Financing`,
    description: site.description,
    locale: "en_GH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Structured data helps Paystack, search engines and directories identify
  // the business correctly. Values come from src/lib/site.ts.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: [site.address.line1, site.address.line2].join(", "),
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "GH",
    },
    currenciesAccepted: site.payments.currency,
    paymentAccepted: "Cash, Mobile Money, Card, Bank Transfer",
  };

  return (
    <html lang="en-GH" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...jsonLd, addressLine }) }}
        />
      </body>
    </html>
  );
}
