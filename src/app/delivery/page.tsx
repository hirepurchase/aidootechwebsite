import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "How Aidoo Tech Solutions delivers devices across Ghana, what it costs, how long it takes and what identification is required on handover.",
};

/* Delivery days, cut-off times, windows and fees have not been supplied by the
   business yet. The policy states how delivery works and confirms the charge is
   agreed before payment, without quoting figures it might not meet. */
export default function DeliveryPage() {
  return (
    <LegalPage
      currentHref="/delivery"
      title="Delivery Policy"
      lede="How devices reach you — in-store collection, delivery within Accra, and dispatch to the regions through our agent network — including timelines, costs and the identification required on handover."
      lastUpdated=""
    >
      <h2>1. How you can receive your device</h2>
      <h3>1.1 Collection in-store</h3>
      <p>
        You may collect any purchase from our showroom at {site.address.line1},{" "}
        {site.address.city}, during opening hours. Collection is free. Bring the
        identification used at the time of purchase.
      </p>

      <h3>1.2 Delivery within Greater Accra</h3>
      <p>
        We deliver within Greater Accra on working days. When you place the order we
        confirm the delivery day and the charge with you before you pay.
      </p>

      <h3>1.3 Delivery to other regions</h3>
      <p>
        Outside Greater Accra we deliver through our agent network and, where necessary,
        established courier partners. How long this takes depends on the destination, and
        we give you an expected date when the order is placed.
      </p>
      <p>
        Where there is an agent in your area, it is usually faster — and always safer — to
        collect from the agent in person. See our <Link href="/agents">agents page</Link>.
      </p>

      <h2>2. Delivery charges</h2>
      <ul>
        <li>
          <strong>In-store collection:</strong> free.
        </li>
        <li>
          <strong>Greater Accra and other regions:</strong> quoted by destination.
        </li>
      </ul>
      <p>
        The delivery charge that applies to your order is confirmed to you before you pay.
        We do not add a delivery charge after a sale has been agreed.
      </p>

      <h2>3. Devices bought on hire purchase</h2>
      <p>
        Devices financed under a hire purchase agreement are handed over in person, either
        at the showroom or by an authorised agent. They are not left with a third party or
        dropped off unattended.
      </p>
      <p>On handover we will:</p>
      <ul>
        <li>verify the identification used in the agreement;</li>
        <li>confirm the IMEI or serial number against your agreement;</li>
        <li>record the deposit and issue a receipt; and</li>
        <li>give you a copy of the signed agreement and the warranty documentation.</li>
      </ul>
      <p>
        This is a protection for you. It is what prevents a device and a debt being
        registered in your name without you being present.
      </p>

      <h2>4. What to check on delivery</h2>
      <p>Before the delivery agent leaves, please:</p>
      <ol>
        <li>confirm the device model and colour match what you ordered;</li>
        <li>check the IMEI or serial number against your receipt or agreement;</li>
        <li>confirm the box contains the stated accessories;</li>
        <li>inspect the device for visible damage; and</li>
        <li>keep your receipt and, for financed devices, your copy of the agreement.</li>
      </ol>
      <p>
        Report any discrepancy or transit damage to us immediately, and in any event on
        the day of delivery, so that we can resolve it. See our{" "}
        <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
      </p>

      <h2>5. Failed or missed deliveries</h2>
      <p>
        If nobody is available to receive the device, or the identification required cannot
        be produced, the delivery agent will not hand over the device. We will contact you
        to arrange a second attempt.
      </p>
      <p>
        Where a delivery fails repeatedly because the address or phone number given was
        wrong, a further delivery charge may apply. We will tell you the amount before
        arranging another attempt.
      </p>

      <h2>6. Risk and ownership</h2>
      <p>
        Risk in the device passes to you on delivery or collection. For outright purchases,
        ownership passes at the same time. For hire purchase, ownership remains with us
        until the final instalment is paid, as set out in your agreement and in our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>

      <h2>7. Delays outside our control</h2>
      <p>
        We do not deliver on public holidays. Delivery timelines may be affected by weather,
        road conditions, civil disruption or courier delays. Where a delay occurs we will
        contact you with a revised estimate; if the delay is unacceptable to you, you may
        cancel and receive a full refund of what you have paid.
      </p>

      <h2>8. International delivery</h2>
      <p>We deliver only within {site.address.country}. We do not ship internationally.</p>

      <h2>9. Contact</h2>
      <p>
        For anything concerning a delivery, contact us at {site.contact.supportEmail} or{" "}
        {site.contact.phone}, quoting your receipt or order reference.
      </p>
    </LegalPage>
  );
}
