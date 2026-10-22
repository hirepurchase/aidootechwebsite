import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "How Aidoo Tech Solutions delivers devices across Ghana, what it costs, how long it takes and what identification is required on handover.",
};

/* Delivery timeframes live in src/lib/site.ts so this page, the products page
   and the FAQs always quote the same figures. Fees are still quoted by
   destination — the charge is agreed with the customer before they pay. */
export default function DeliveryPage() {
  return (
    <LegalPage
      currentHref="/delivery"
      title="Delivery Policy"
      lede={`How long delivery takes, what it costs, and how devices are handed over. In short: ${site.delivery.greaterAccraShort} within Greater Accra, and ${site.delivery.otherRegions} to other regions.`}
      lastUpdated=""
    >
      <h2>1. How long delivery takes</h2>
      <p>
        These are the timeframes we work to. Delivery days are working days —
        Monday to Friday, excluding public holidays. We confirm the expected date with
        you when the order is placed, and we tell you if anything will make it later.
      </p>

      <table>
        <thead>
          <tr>
            <th>How you receive it</th>
            <th>Estimated delivery time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Collection at either showroom</td>
            <td>{site.delivery.collection}</td>
          </tr>
          <tr>
            <td>Delivery within Greater Accra</td>
            <td>{site.delivery.greaterAccra}</td>
          </tr>
          <tr>
            <td>Delivery to all other regions</td>
            <td>{site.delivery.otherRegions}</td>
          </tr>
        </tbody>
      </table>

      <p>
        Orders confirmed after {site.delivery.cutOff}, or on a weekend or public holiday,
        are treated as received on the next working day.
      </p>

      <h2>2. How you can receive your device</h2>
      <h3>2.1 Collection in-store</h3>
      <p>
        You may collect any purchase from our showroom at {site.address.line1},{" "}
        {site.address.city}, during opening hours. Collection is free. Bring the
        identification used at the time of purchase.
      </p>

      <h3>2.2 Delivery within Greater Accra</h3>
      <p>
        We deliver within Greater Accra on working days. Orders confirmed before{" "}
        {site.delivery.cutOff} are delivered the same working day; orders confirmed after
        that are delivered the next working day. The delivery charge is agreed with you
        before you pay.
      </p>

      <h3>2.3 Delivery to other regions</h3>
      <p>
        Outside Greater Accra we deliver through our agent network and, where necessary,
        established courier partners. This normally takes {site.delivery.otherRegions},
        depending on the destination, and we give you an expected date when the order is
        placed.
      </p>
      <p>
        Where there is an agent in your area, it is usually faster — and always safer — to
        collect from the agent in person. See our <Link href="/agents">agents page</Link>.
      </p>

      <h2>3. Delivery charges</h2>
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

      <h2>4. Devices bought on hire purchase</h2>
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

      <h2>5. What to check on delivery</h2>
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

      <h2>6. Failed or missed deliveries</h2>
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

      <h2>7. Risk and ownership</h2>
      <p>
        Risk in the device passes to you on delivery or collection. For outright purchases,
        ownership passes at the same time. For hire purchase, ownership remains with us
        until the final instalment is paid, as set out in your agreement and in our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>

      <h2>8. Delays outside our control</h2>
      <p>
        We do not deliver on public holidays. Delivery timelines may be affected by weather,
        road conditions, civil disruption or courier delays. Where a delay occurs we will
        contact you with a revised estimate; if the delay is unacceptable to you, you may
        cancel and receive a full refund of what you have paid.
      </p>

      <h2>9. International delivery</h2>
      <p>We deliver only within {site.address.country}. We do not ship internationally.</p>

      <h2>10. Contact</h2>
      <p>
        For anything concerning a delivery, contact us at {site.contact.supportEmail} or{" "}
        {site.contact.phone}, quoting your receipt or order reference.
      </p>
    </LegalPage>
  );
}
