import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "The terms governing purchases, hire purchase agreements and use of the Aidoo Tech Solutions website.",
};

/* These terms should be reviewed by a Ghanaian legal practitioner before the
   site goes live — they govern binding credit agreements. */
export default function TermsPage() {
  return (
    <LegalPage
      currentHref="/terms"
      title="Terms of Service"
      lede={`These terms govern the sale of devices and accessories by ${site.legalName}, our hire purchase agreements, and your use of this website.`}
      lastUpdated=""
    >
      <h2>1. Who we are</h2>
      <p>
        This website is operated by <strong>{site.legalName}</strong> (&ldquo;Aidoo
        Tech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a business registered in{" "}
        {site.address.country}
        {site.registration.number ? ` under registration number ${site.registration.number}` : ""}
        , with its place of business at {addressLine}.
      </p>
      <p>
        We sell smartphones, tablets and related accessories, and we provide device
        financing in the form of hire purchase agreements. You can reach us at{" "}
        {site.contact.phone} or {site.contact.email}.
      </p>

      <h2>2. Acceptance of these terms</h2>
      <p>
        By buying from us, entering into a hire purchase agreement with us, or using this
        website, you accept these terms. If you do not accept them, please do not use the
        site or purchase from us.
      </p>
      <p>
        Where you sign a separate written hire purchase agreement, that agreement governs
        the credit arrangement. If anything in it conflicts with these terms, the signed
        agreement prevails for that transaction.
      </p>

      <h2>3. Eligibility</h2>
      <p>To purchase on credit from us, you must:</p>
      <ul>
        <li>be at least 18 years old;</li>
        <li>
          provide a valid national identification document (Ghana Card, passport,
          voter&apos;s ID or driver&apos;s licence);
        </li>
        <li>provide a phone number registered in your own name;</li>
        <li>provide a verifiable address or place of work; and</li>
        <li>
          provide any additional information we reasonably request in order to assess the
          application, which may include proof of income or a guarantor.
        </li>
      </ul>
      <p>
        We may decline any credit application at our discretion. Outright cash purchases do
        not require a credit assessment.
      </p>

      <h2>4. Prices and quotations</h2>
      <p>
        Prices are quoted in Ghana Cedis ({site.payments.currency}) and include any taxes
        that apply at the point of sale. Because stock and market prices change, prices
        shown or quoted verbally are valid only for the period stated at the time of
        quotation.
      </p>
      <p>
        Where a device is sold on hire purchase, we will show you both the outright cash
        price and the total hire purchase price before you commit, so that the cost of the
        credit is clear to you.
      </p>

      <h2>5. Hire purchase agreements</h2>
      <h3>5.1 How the agreement works</h3>
      <p>
        Under a hire purchase agreement you pay an initial deposit and take possession of
        the device immediately, then pay the remaining balance in instalments over an
        agreed term. <strong>Legal ownership of the device remains with us</strong> until
        the final instalment has been paid in full, at which point ownership passes to you.
      </p>

      <h3>5.2 What your agreement will state</h3>
      <p>Before you sign, your written agreement will set out:</p>
      <ul>
        <li>the device, including its IMEI or serial number;</li>
        <li>the cash price and the total hire purchase price;</li>
        <li>the deposit paid;</li>
        <li>the instalment amount, the payment frequency and the due dates;</li>
        <li>the total number of instalments and the date of the final payment; and</li>
        <li>any charge that may become payable, and in what circumstances.</li>
      </ul>
      <p>We will not apply any charge that is not disclosed in your agreement.</p>

      <h3>5.3 Your responsibilities while paying</h3>
      <ul>
        <li>Pay each instalment on or before its due date.</li>
        <li>
          Keep the device in reasonable condition, fair wear and tear excepted, while the
          balance is outstanding.
        </li>
        <li>
          Do not sell, pledge, or otherwise dispose of the device before you own it.
        </li>
        <li>Notify us promptly if your contact details change.</li>
        <li>
          Notify us immediately if the device is lost or stolen. Loss or theft does not by
          itself cancel your obligation to pay the outstanding balance.
        </li>
      </ul>

      <h3>5.4 Early settlement</h3>
      <p>
        You may settle the outstanding balance in full at any time. We do not apply an early
        settlement penalty.
      </p>

      <h3>5.5 Late or missed payments</h3>
      <p>
        If you expect difficulty meeting a payment, contact us before the due date. In most
        cases we can agree a revised schedule.
      </p>
      <p>
        Where instalments are missed without contact, we will follow up by SMS and telephone.
        Continued default entitles us to exercise the remedies set out in your agreement,
        which may include recovery of the device. Any charge for late payment will only be
        applied if it was disclosed in your signed agreement.
      </p>

      <h2>6. Payment</h2>
      <p>
        We accept card payments (processed by Paystack), Mobile Money, bank transfer and
        cash in-store. Card details are entered on the payment processor&apos;s secure page
        and are not stored by us. See our{" "}
        <Link href="/payments">payment methods page</Link> for detail on each channel.
      </p>
      <p>
        A payment is only treated as made when we have received it and issued a receipt.
        Always obtain and keep your receipt.
      </p>

      <h2>7. Delivery and collection</h2>
      <p>
        Delivery and handover arrangements, including verification on delivery of financed
        devices, are set out in our <Link href="/delivery">Delivery Policy</Link>.
      </p>

      <h2>8. Warranty and faulty devices</h2>
      <p>
        New devices carry the manufacturer&apos;s warranty. Certified pre-owned devices
        carry a limited warranty, the duration of which is stated on your receipt. Warranty
        cover does not extend to physical damage, liquid damage, unauthorised repair, or
        misuse.
      </p>
      <p>
        Your rights in respect of faulty goods, including refunds and replacements, are set
        out in our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
        Nothing in these terms limits any right you have under the consumer protection laws
        of {site.address.country}.
      </p>

      <h2>9. Agents</h2>
      <p>
        Our agents are authorised to sell devices, register customers and collect payments
        on our behalf within the scope we have given them. Payments made to an authorised
        agent against a valid receipt are treated as payments made to us.
      </p>
      <p>
        Always ask to see an agent&apos;s {site.shortName} identification and always obtain
        a receipt. We are not responsible for money handed to a person who is not an
        authorised agent, or for payments made without a receipt.
      </p>

      <h2>10. Use of this website</h2>
      <p>
        The content of this site is provided for information about our business and our
        products. We take care to keep it accurate, but stock, specifications and prices
        change, and the details confirmed to you at the point of sale prevail.
      </p>
      <p>
        You may not use this site for any unlawful purpose, attempt to gain unauthorised
        access to it, or copy its content for commercial use without our permission. The{" "}
        {site.name} name and logo are our property.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        We are responsible for losses you suffer as a direct result of our breaking these
        terms, but we are not liable for indirect or consequential losses, for loss of
        profits or business, or for loss of data stored on a device. Nothing in these terms
        excludes or limits liability that cannot lawfully be excluded, including liability
        for death or personal injury caused by our negligence, or for fraud.
      </p>

      <h2>12. Privacy</h2>
      <p>
        How we collect, use and protect your personal information is set out in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The version published on this page at
        the date of your purchase is the version that applies to it. Changes do not alter
        the terms of a hire purchase agreement you have already signed.
      </p>

      <h2>14. Governing law and disputes</h2>
      <p>
        These terms are governed by the laws of {site.address.country}, and the courts of{" "}
        {site.address.country} have jurisdiction over any dispute.
      </p>
      <p>
        We ask that you raise any complaint with us first — most matters are resolved
        quickly once we can see the account. Contact us at {site.contact.supportEmail} or{" "}
        {site.contact.phone}.
      </p>

      <h2>15. Contact</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.city}, {site.address.region}, {site.address.country}
        <br />
        Telephone: {site.contact.phone}
        <br />
        Email: {site.contact.email}
      </p>
    </LegalPage>
  );
}
