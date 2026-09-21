import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "What personal information Aidoo Tech Solutions collects, why we collect it, who we share it with and what rights you have over it.",
};

/* If the business is not yet registered with Ghana's Data Protection
   Commission, that should be started — it is a legal obligation for anyone
   holding ID and credit data. Add the number to section 1 once it exists. */
export default function PrivacyPage() {
  return (
    <LegalPage
      currentHref="/privacy"
      title="Privacy Policy"
      lede="Selling on credit means we hold more information about you than a shop that only takes cash. This policy sets out exactly what we collect, why, who sees it and what you can ask us to do with it."
      lastUpdated=""
    >
      <h2>1. Who is responsible for your data</h2>
      <p>
        {site.legalName}, of {addressLine}, is the data controller for the personal
        information described in this policy.
      </p>
      <p>
        We process personal data in accordance with the Data Protection Act, 2012 (Act 843)
        of {site.address.country}. Data protection enquiries should be sent to{" "}
        {site.contact.supportEmail}.
      </p>

      <h2>2. What we collect</h2>
      <h3>2.1 When you buy from us</h3>
      <ul>
        <li>your name, phone number and address;</li>
        <li>
          identification details — the type and number of the national ID you present;
        </li>
        <li>details of the device purchased, including its IMEI or serial number; and</li>
        <li>payment details and receipts.</li>
      </ul>

      <h3>2.2 When you buy on hire purchase</h3>
      <p>In addition to the above, we collect:</p>
      <ul>
        <li>information supporting the credit assessment, such as your occupation, place of work or evidence of income;</li>
        <li>guarantor details, where a guarantor is required;</li>
        <li>your payment history under the agreement; and</li>
        <li>records of contact with you about the account, including SMS reminders sent.</li>
      </ul>

      <h3>2.3 When you use this website</h3>
      <p>
        This site does not require you to create an account and does not use advertising or
        tracking cookies. Our hosting provider records standard technical information — such
        as IP address, browser type and pages requested — for security and reliability.
      </p>

      <h2>3. Why we use it</h2>
      <ul>
        <li>
          <strong>To complete your purchase</strong> — supplying the device, issuing receipts
          and honouring warranties.
        </li>
        <li>
          <strong>To assess and administer credit</strong> — deciding whether to offer hire
          purchase, and managing the agreement afterwards.
        </li>
        <li>
          <strong>To collect payment</strong> — processing instalments, sending SMS reminders
          before due dates and following up on arrears.
        </li>
        <li>
          <strong>To prevent fraud</strong> — verifying identity and recording device IMEIs,
          which also helps if a device is later reported stolen.
        </li>
        <li>
          <strong>To meet legal and tax obligations</strong> — keeping the records we are
          required to keep.
        </li>
        <li>
          <strong>To support you</strong> — answering questions, handling complaints and
          producing statements on request.
        </li>
      </ul>

      <h2>4. Who we share it with</h2>
      <p>We share personal data only where it is necessary, and only with:</p>
      <ul>
        <li>
          <strong>Payment processors</strong> — Paystack and our Mobile Money and banking
          partners, to process payments and refunds;
        </li>
        <li>
          <strong>Our authorised agents</strong> — limited to the customers they serve, for
          registration, collection and follow-up;
        </li>
        <li>
          <strong>SMS providers</strong> — to deliver payment reminders and receipts;
        </li>
        <li>
          <strong>Professional advisers</strong> — accountants and lawyers, where required;
          and
        </li>
        <li>
          <strong>Public authorities</strong> — where we are required by law to disclose
          information.
        </li>
      </ul>
      <p>
        <strong>We do not sell your personal information, and we do not share it for
        third-party marketing.</strong>
      </p>

      <h2>5. How long we keep it</h2>
      <p>
        We keep customer and transaction records for as long as your agreement is active,
        and afterwards for the period required by tax and company law in{" "}
        {site.address.country}. Records no longer needed are securely destroyed.
      </p>

      <h2>6. How we protect it</h2>
      <ul>
        <li>Access to customer records is restricted to staff and agents who need it.</li>
        <li>Our systems are password-protected and access is logged.</li>
        <li>
          Card details are handled entirely by our payment processor. We never see or store
          full card numbers, PINs or CVV codes.
        </li>
        <li>Paper records are kept secured at our place of business.</li>
      </ul>

      <h2>7. Your rights</h2>
      <p>You may ask us to:</p>
      <ul>
        <li>tell you what personal data we hold about you and provide a copy;</li>
        <li>correct information that is inaccurate or out of date;</li>
        <li>
          delete information we no longer have a legal or contractual reason to keep;
        </li>
        <li>stop sending you marketing messages; and</li>
        <li>explain a decision to decline a credit application.</li>
      </ul>
      <p>
        Write to {site.contact.supportEmail} or visit the showroom with identification. We
        will respond within the period required by law.
      </p>
      <p>
        Note that while a hire purchase agreement is running, we cannot delete the records
        needed to administer it, and we are required to keep certain records after it ends.
      </p>

      <h2>8. Messages we send you</h2>
      <p>
        If you hold an agreement with us, we will send SMS messages about your account —
        payment reminders, receipts and account notices. These are part of servicing the
        agreement and cannot be switched off while it is active.
      </p>
      <p>
        Promotional messages about new stock and offers are separate. You can opt out of
        those at any time by replying to the message or telling us, without affecting your
        agreement.
      </p>

      <h2>9. Children</h2>
      <p>
        We do not sell on credit to anyone under 18 and we do not knowingly collect personal
        information from children.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy. The current version is always published on this page with
        the date it took effect. Material changes affecting existing customers will be
        communicated directly.
      </p>

      <h2>11. Contact and complaints</h2>
      <p>
        Contact us at {site.contact.supportEmail} or {site.contact.phone} with any question
        about your data. If you are not satisfied with our response, you may complain to the
        Data Protection Commission of {site.address.country}.
      </p>
      <p>
        See also our <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
