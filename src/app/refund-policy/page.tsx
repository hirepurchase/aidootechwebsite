import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "When Aidoo Tech Solutions refunds, replaces or repairs a device, how to cancel an order or hire purchase agreement, and how long refunds take.",
};

/* The specific periods (return window, cooling-off, refund timelines) have not
   been supplied by the business yet, so this policy states the rights without
   committing to figures it might not meet. Add them once confirmed. */
export default function RefundPolicyPage() {
  return (
    <LegalPage
      currentHref="/refund-policy"
      title="Refund & Cancellation Policy"
      lede="What you are entitled to if a device is faulty, if you change your mind, or if you need to cancel an order or a hire purchase agreement — and how long a refund takes."
      lastUpdated=""
    >
      <h2>1. Scope</h2>
      <p>
        This policy applies to all devices and accessories sold by {site.legalName}, whether
        purchased outright or under a hire purchase agreement, and whether bought in-store,
        through an agent, or arranged online. It sits alongside our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
      <p>
        Nothing in this policy removes or limits your statutory rights under the consumer
        protection laws of {site.address.country}.
      </p>

      <h2>2. Faulty devices</h2>
      <h3>2.1 Reporting a fault</h3>
      <p>
        If a device develops a fault, stop using it and contact us as soon as you notice
        the problem. Bring or send us:
      </p>
      <ul>
        <li>the device itself;</li>
        <li>your receipt or agreement reference;</li>
        <li>the original box and accessories, where you still have them; and</li>
        <li>a short description of the fault and when it started.</li>
      </ul>

      <h3>2.2 What happens next</h3>
      <p>
        We will inspect the device. Where the fault is covered by warranty and is confirmed
        by inspection, we will, at our discretion and in this order of preference:
      </p>
      <ol>
        <li>repair the device;</li>
        <li>replace it with the same model, or an equivalent of no lesser value; or</li>
        <li>refund you.</li>
      </ol>
      <p>
        We will tell you how long the inspection will take when you hand the device
        over. Where a device must be sent to a manufacturer or supplier, we will tell you
        that and keep you informed of progress.
      </p>

      <h3>2.3 What is not covered</h3>
      <ul>
        <li>physical damage, including cracked screens and bent frames;</li>
        <li>liquid damage;</li>
        <li>damage caused by misuse, or by unauthorised repair or modification;</li>
        <li>normal battery wear over time;</li>
        <li>
          software issues caused by applications you installed, or by unlocking or rooting
          the device;
        </li>
        <li>loss or theft of the device.</li>
      </ul>

      <h2>3. Change of mind</h2>
      <p>
        We will accept the return of an unopened, unused device or accessory in its
        original sealed packaging, on presentation of the receipt, within the return period
        confirmed to you at the time of purchase. Ask at the counter and we will tell you
        exactly how long you have.
      </p>
      <p>
        Once a device has been activated, registered to an account, or used, we cannot
        accept a change-of-mind return, because we can no longer sell it as new. This does
        not affect your rights where the device is faulty.
      </p>
      <p>
        For hygiene reasons, earphones, earbuds and screen protectors cannot be returned
        once opened unless they are faulty.
      </p>

      <h2>4. Cancelling an order</h2>
      <h3>4.1 Before handover or delivery</h3>
      <p>
        You may cancel an order at any time before the device has been handed over or
        dispatched. Any amount you have paid, including a deposit, is refunded in full.
      </p>

      <h3>4.2 After handover or delivery</h3>
      <p>
        Once you have received the device, cancellation is treated as a return and section 3
        or section 2 applies, depending on whether the device is faulty.
      </p>

      <h2>5. Cancelling a hire purchase agreement</h2>
      <h3>5.1 Cooling-off</h3>
      <p>
        If you cancel a hire purchase agreement shortly after signing it and return the
        device unused, in its original condition and packaging, we will cancel the
        agreement and refund your deposit in full. The cooling-off period that applies to
        your agreement is stated in the agreement itself.
      </p>

      <h3>5.2 Cancelling later in the term</h3>
      <p>
        If you decide you can no longer continue with an agreement after the device has been
        used, contact us. We will agree one of the following with you in writing:
      </p>
      <ul>
        <li>
          <strong>Reschedule.</strong> Where the difficulty is temporary, we can usually
          revise your payment dates or instalment amounts.
        </li>
        <li>
          <strong>Early settlement.</strong> You may pay the outstanding balance in full at
          any time, with no early settlement penalty, and take ownership immediately.
        </li>
        <li>
          <strong>Voluntary return.</strong> You may return the device to us. We will assess
          its condition and market value, credit that value against what you owe, and tell
          you in writing whether a balance remains payable to us, or an amount is refundable
          to you.
        </li>
      </ul>
      <p>
        Instalments already paid cover your use of the device during the period they relate
        to and are not automatically refundable on a voluntary return. Any refund due is
        calculated and explained to you in writing before it is processed.
      </p>

      <h2>6. How refunds are paid</h2>
      <p>
        Refunds are made using the same method you used to pay, wherever possible:
      </p>
      <ul>
        <li>
          <strong>Card payments</strong> are refunded to the card used, through Paystack.
          How quickly the amount appears depends on your bank.
        </li>
        <li>
          <strong>Mobile Money</strong> is refunded to the number the payment came from.
        </li>
        <li>
          <strong>Bank transfers</strong> are refunded to the originating account.
        </li>
        <li>
          <strong>Cash payments</strong> are refunded in-store, or by Mobile Money or bank
          transfer where you prefer.
        </li>
      </ul>
      <p>
        Refunds are made only to the person named on the receipt or agreement, and only on
        presentation of identification. We do not refund to a third party.
      </p>
      <p>
        All refunds are made in Ghana Cedis ({site.payments.currency}). We do not deduct an
        administrative fee from a refund due for a faulty device.
      </p>

      <h2>7. How to make a claim</h2>
      <ol>
        <li>
          Contact us at {site.contact.supportEmail} or {site.contact.phone}, or visit the{" "}
          {site.address.city} showroom.
        </li>
        <li>
          Quote your receipt number or agreement reference and describe the problem.
        </li>
        <li>
          Bring or send the device with its accessories, where the claim concerns a fault.
        </li>
        <li>
          We will acknowledge your claim and tell you what happens next and how long it will
          take.
        </li>
      </ol>
      <p>
        We will tell you how long your claim should take when you make it, and keep you
        updated if it runs longer. If you are not satisfied with the outcome, ask for the
        matter to be escalated to management. See
        our <Link href="/customer-feedback">customer feedback page</Link> for the full
        complaints procedure.
      </p>

      <h2>8. Contact</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.line1}, {site.address.line2}
        <br />
        {site.address.city}, {site.address.country}
        <br />
        Telephone: {site.contact.phone}
        <br />
        Email: {site.contact.supportEmail}
      </p>
    </LegalPage>
  );
}
