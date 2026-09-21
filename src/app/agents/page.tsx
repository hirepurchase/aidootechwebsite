import type { Metadata } from "next";
import { AgentApplicationForm } from "@/components/AgentApplicationForm";
import { ImageBand } from "@/components/ImageBand";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Aidoo Tech Solutions works through agents across Ghana who sell devices, register customers and collect instalments locally.",
};

const agentDoes = [
  {
    title: "Sells from local stock",
    body: "Agents carry devices in their own community, so customers can see and buy a phone without travelling to Accra.",
  },
  {
    title: "Registers customers",
    body: "Identification is verified and the customer's details are recorded against their agreement at the point of sale.",
  },
  {
    title: "Collects deposits and instalments",
    body: "Payments taken by an agent are entered into our system and receipted the same way as a payment made in-store.",
  },
  {
    title: "Follows up locally",
    body: "When a payment is late, the customer hears from someone nearby who knows them — not an anonymous call centre.",
  },
];

const requirements = [
  "A valid national ID and a phone number registered in your name",
  "An established base in the community you intend to serve",
  "Two referees we can contact",
  "Willingness to account for stock and collections accurately and on time",
  "Completion of our onboarding and training before you handle customer money",
];

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        title="Agents in every region of Ghana."
        lede={`We trade from a single showroom at ${site.address.city}, but our customers are everywhere. Agents across ${site.address.country} sell our devices, register customers and collect instalments in their own communities.`}
      />

      <Section title="What our agents do">
        <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {agentDoes.map((item) => (
            <div key={item.title} className="bg-paper p-8">
              <h3 className="font-serif text-[1.1875rem] text-ink">{item.title}</h3>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <ImageBand
        reverse
        tone="raised"
        title="Someone local, who you can find again"
        image="/photos/agent.webp"
        alt="An Aidoo Tech agent registering a customer outside the showroom."
      >
        <p>
          An agent carries stock, registers customers and collects instalments
          in their own community. That means you can see a device, ask questions
          and pay without travelling to Accra.
        </p>
        <p>
          Payments taken by an authorised agent are entered into our system and
          receipted exactly as they would be in the showroom.
        </p>
      </ImageBand>

      <Section tone="sunken">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[1.625rem] leading-tight text-ink">
              Dealing with an agent safely
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              Agents act on our behalf, and every payment they take belongs to your account.
              A few habits keep it that way.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="border-t border-rule-strong">
              {[
                "Ask to see the agent's Aidoo Tech identification before you hand over money.",
                "Insist on a receipt for every payment, including your deposit.",
                "Check that the SMS confirmation you receive matches the amount you paid.",
                "Keep your signed agreement — it is the record of what you owe and when.",
                "If a receipt or confirmation does not arrive, call us directly before paying again.",
              ].map((item, i) => (
                <li key={item} className="flex gap-6 border-b border-rule py-5">
                  <span className="font-serif text-[0.9375rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section title="Become an agent">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
              We take on agents in areas where we do not yet have coverage. It is a
              commercial relationship with real responsibility attached: you will be
              handling stock and other people&apos;s money, and we vet accordingly.
            </p>
            <h3 className="mt-8 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
              What we look for
            </h3>
            <ul className="mt-4 space-y-3">
              {requirements.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-4 text-[0.9375rem] leading-relaxed text-ink-soft"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 bg-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-rule bg-paper-raised p-8 sm:p-10">
              <h3 className="font-serif text-[1.0625rem] font-semibold text-ink">What happens after you apply</h3>
              <ol className="mt-6 border-t border-rule">
                {[
                  ["We read it", "Every application is read by a person, usually within a few days."],
                  ["We call you", "A short conversation about your area, your trade and what you expect to sell."],
                  ["We check", "We speak to your referees and verify your identification."],
                  ["We train you", "Onboarding on stock, registration, collections and our system before you handle customer money."],
                ].map(([title, body], i) => (
                  <li key={title} className="flex gap-5 border-b border-rule py-4">
                    <span className="font-serif text-[0.875rem] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-[0.875rem] font-semibold text-ink">{title}</h4>
                      <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-soft">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-soft">
                If we are already covered in your area we will say so plainly rather than
                leave you waiting.
              </p>
              <a
                href="#apply"
                className="mt-7 inline-block w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper hover:bg-accent-deep sm:w-auto"
              >
                Go to the application form
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Application form ─────────────────────────────────────── */}
      <Section id="apply" tone="sunken">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[1.75rem] leading-tight text-ink">
              Apply to become an agent
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              It takes a few minutes. Everything marked optional can be left blank — we
              only ask for what we genuinely need to assess the application.
            </p>

            <dl className="mt-8 space-y-5 border-t border-rule-strong pt-6 text-[0.875rem]">
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  Prefer to call?
                </dt>
                <dd className="mt-1 text-ink">{site.contact.whatsapp}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  Or email
                </dt>
                <dd className="mt-1 text-ink">{site.contact.salesEmail}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  In person
                </dt>
                <dd className="mt-1 text-ink">
                  {site.address.line1}, {site.address.city}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            <AgentApplicationForm />
          </div>
        </div>
      </Section>

    </>
  );
}
