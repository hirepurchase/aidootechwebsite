"use client";

import { useRef, useState } from "react";
import { Field, inputClass, selectClass } from "./Field";
import { site } from "@/lib/site";
import {
  EMPTY_APPLICATION,
  EXPERIENCE_OPTIONS,
  GHANA_REGIONS,
  ID_TYPES,
  PREMISES_OPTIONS,
  formatApplication,
  validate,
  type AgentApplication,
} from "@/lib/agent-application";

type Status = "idle" | "submitting" | "sent" | "handoff" | "error";

const ENDPOINT = process.env.NEXT_PUBLIC_AGENT_FORM_ENDPOINT;

export function AgentApplicationForm() {
  const [data, setData] = useState<AgentApplication>(EMPTY_APPLICATION);
  const [errors, setErrors] = useState<Partial<Record<keyof AgentApplication, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const summaryRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof AgentApplication>(key: K, value: AgentApplication[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(data);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // Move the reader to the error summary rather than silently failing.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");

    // 1. A configured endpoint takes the application directly.
    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        setData(EMPTY_APPLICATION);
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    // 2. No endpoint configured: hand the completed application to WhatsApp,
    //    or to the mail client, with everything already filled in.
    const message = formatApplication(data);
    const whatsappNumber = site.contact.whatsapp
      .replace(/[^\d]/g, "")
      .replace(/^0/, "233");

    if (whatsappNumber) {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
      setStatus("handoff");
      return;
    }

    if (site.contact.salesEmail) {
      window.location.href = `mailto:${site.contact.salesEmail}?subject=${encodeURIComponent(
        "Agent application",
      )}&body=${encodeURIComponent(message)}`;
      setStatus("handoff");
      return;
    }

    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div className="border border-rule bg-paper-raised p-10 text-center sm:p-14">
        <h3 className="font-serif text-[1.5rem] leading-snug text-ink">
          Thank you — we have your application.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
          We review every application and will call you on the number you gave us. If we
          are already covered in your area we will tell you that plainly rather than leave
          you waiting.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border border-rule-strong px-6 py-3 text-[0.875rem] font-medium text-ink hover:border-ink"
        >
          Submit another application
        </button>
      </div>
    );
  }

  const errorList = Object.entries(errors).filter(([, v]) => v);

  return (
    <form onSubmit={onSubmit} noValidate className="border border-rule bg-paper p-8 sm:p-10">
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-8 border-l-2 border-red-700 bg-red-50 px-5 py-4 outline-none"
        >
          <p className="text-[0.875rem] font-semibold text-red-800">
            Please check {errorList.length} {errorList.length === 1 ? "field" : "fields"}{" "}
            before submitting.
          </p>
        </div>
      )}

      <fieldset className="border-0 p-0">
        <legend className="mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
          About you
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field id="fullName" label="Full name" error={errors.fullName}>
              <input
                id="fullName"
                name="fullName"
                className={inputClass(errors.fullName)}
                value={data.fullName}
                onChange={(e) => set("fullName", e.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                autoComplete="name"
              />
            </Field>
          </div>

          <Field id="phone" label="Phone number" error={errors.phone} hint="We will call you on this number.">
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="024 123 4567"
              className={inputClass(errors.phone)}
              value={data.phone}
              onChange={(e) => set("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              autoComplete="tel"
            />
          </Field>

          <Field id="whatsapp" label="WhatsApp number" error={errors.whatsapp} optional hint="If different from the above.">
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              inputMode="tel"
              className={inputClass(errors.whatsapp)}
              value={data.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              aria-invalid={Boolean(errors.whatsapp)}
              aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            />
          </Field>

          <Field id="email" label="Email address" error={errors.email} optional>
            <input
              id="email"
              name="email"
              type="email"
              className={inputClass(errors.email)}
              value={data.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              autoComplete="email"
            />
          </Field>

          <Field id="idType" label="Identification you can provide" error={errors.idType}>
            <select
              id="idType"
              name="idType"
              className={selectClass(errors.idType)}
              value={data.idType}
              onChange={(e) => set("idType", e.target.value)}
              aria-invalid={Boolean(errors.idType)}
              aria-describedby={errors.idType ? "idType-error" : undefined}
            >
              <option value="">Select…</option>
              {ID_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="mt-10 border-0 p-0">
        <legend className="mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
          Where you want to work
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="region" label="Region" error={errors.region}>
            <select
              id="region"
              name="region"
              className={selectClass(errors.region)}
              value={data.region}
              onChange={(e) => set("region", e.target.value)}
              aria-invalid={Boolean(errors.region)}
              aria-describedby={errors.region ? "region-error" : undefined}
            >
              <option value="">Select…</option>
              {GHANA_REGIONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </Field>

          <Field id="town" label="Town or district" error={errors.town}>
            <input
              id="town"
              name="town"
              className={inputClass(errors.town)}
              value={data.town}
              onChange={(e) => set("town", e.target.value)}
              aria-invalid={Boolean(errors.town)}
              aria-describedby={errors.town ? "town-error" : undefined}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="mt-10 border-0 p-0">
        <legend className="mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
          Your background
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field
              id="occupation"
              label="What do you do now?"
              error={errors.occupation}
              hint="Your current trade, business or employment."
            >
              <input
                id="occupation"
                name="occupation"
                className={inputClass(errors.occupation)}
                value={data.occupation}
                onChange={(e) => set("occupation", e.target.value)}
                aria-invalid={Boolean(errors.occupation)}
                aria-describedby={errors.occupation ? "occupation-error" : undefined}
              />
            </Field>
          </div>

          <Field id="premises" label="Where would you sell from?" error={errors.premises}>
            <select
              id="premises"
              name="premises"
              className={selectClass(errors.premises)}
              value={data.premises}
              onChange={(e) => set("premises", e.target.value)}
              aria-invalid={Boolean(errors.premises)}
              aria-describedby={errors.premises ? "premises-error" : undefined}
            >
              <option value="">Select…</option>
              {PREMISES_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>

          <Field id="experience" label="Relevant experience" error={errors.experience}>
            <select
              id="experience"
              name="experience"
              className={selectClass(errors.experience)}
              value={data.experience}
              onChange={(e) => set("experience", e.target.value)}
              aria-invalid={Boolean(errors.experience)}
              aria-describedby={errors.experience ? "experience-error" : undefined}
            >
              <option value="">Select…</option>
              {EXPERIENCE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>

          <div className="sm:col-span-2">
            <Field
              id="referees"
              label="Two referees"
              error={errors.referees}
              hint="Name and phone number for each. People who can speak to how you handle money and stock."
            >
              <textarea
                id="referees"
                name="referees"
                rows={3}
                className={inputClass(errors.referees)}
                value={data.referees}
                onChange={(e) => set("referees", e.target.value)}
                aria-invalid={Boolean(errors.referees)}
                aria-describedby={errors.referees ? "referees-error" : undefined}
              />
            </Field>
          </div>

          <div className="sm:col-span-2">
            <Field id="notes" label="Anything else we should know" optional>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className={inputClass()}
                value={data.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </fieldset>

      <div className="mt-10 border-t border-rule pt-7">
        <label className="flex cursor-pointer items-start gap-3 text-[0.875rem] leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
          />
          <span>
            The information I have given is true, and I agree that {site.shortName} may
            contact me and my referees to assess this application.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-2 text-[0.75rem] text-red-700">{errors.consent}</p>
        )}

        {status === "error" && (
          <p role="alert" className="mt-5 border-l-2 border-red-700 bg-red-50 px-5 py-4 text-[0.875rem] text-red-800">
            We could not send your application. Please call {site.contact.phone} instead —
            we would still like to hear from you.
          </p>
        )}

        {status === "handoff" && (
          <p role="status" className="mt-5 border-l-2 border-accent bg-accent-wash px-5 py-4 text-[0.875rem] text-ink-soft">
            Your application has been prepared with all your answers filled in. Send the
            message that just opened to complete it.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-7 w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper transition-colors hover:bg-accent-deep disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Submit application"}
        </button>

        <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-faint">
          We use these details only to assess your application. See our{" "}
          <a href="/privacy" className="text-accent underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
