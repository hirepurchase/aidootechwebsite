"use client";

import { useRef, useState } from "react";
import { Field, inputClass, selectClass } from "./Field";
import { StarRating } from "./StarRating";
import { site } from "@/lib/site";
import {
  EMPTY_REVIEW,
  PURCHASE_KINDS,
  formatReview,
  validate,
  type Review,
} from "@/lib/review-submission";

type Status = "idle" | "submitting" | "sent" | "handoff" | "error";

const ENDPOINT = process.env.NEXT_PUBLIC_REVIEW_FORM_ENDPOINT;

export function ReviewForm() {
  const [data, setData] = useState<Review>(EMPTY_REVIEW);
  const [errors, setErrors] = useState<Partial<Record<keyof Review, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const summaryRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Review>(key: K, value: Review[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(data);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        setData(EMPTY_REVIEW);
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    const message = formatReview(data);
    const whatsappNumber = site.contact.whatsapp.replace(/[^\d]/g, "").replace(/^0/, "233");

    if (whatsappNumber) {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
      setStatus("handoff");
      return;
    }

    window.location.href = `mailto:${site.contact.supportEmail}?subject=${encodeURIComponent(
      "Customer review",
    )}&body=${encodeURIComponent(message)}`;
    setStatus("handoff");
  }

  if (status === "sent") {
    return (
      <div className="border border-rule bg-paper-raised p-10 text-center sm:p-14">
        <h3 className="font-serif text-[1.5rem] leading-snug text-ink">
          Thank you — we have your review.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
          We read every one. If we publish yours on this page it will appear exactly as you
          wrote it, under the name you gave us.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border border-rule-strong px-6 py-3 text-[0.875rem] font-medium text-ink hover:border-ink"
        >
          Write another
        </button>
      </div>
    );
  }

  const errorList = Object.entries(errors).filter(([, v]) => v);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-rule bg-paper-raised p-8 shadow-[0_1px_2px_rgba(10,14,22,0.04)] sm:p-10"
    >
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-8 border-l-2 border-red-700 bg-red-50 px-5 py-4 outline-none"
        >
          <p className="text-[0.875rem] font-semibold text-red-800">
            Please check {errorList.length} {errorList.length === 1 ? "field" : "fields"}{" "}
            before sending.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="rv-name" label="Your name" error={errors.name}>
          <input
            id="rv-name"
            className={inputClass(errors.name)}
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "rv-name-error" : undefined}
            autoComplete="name"
          />
        </Field>

        <Field id="rv-location" label="Town or city" error={errors.location}>
          <input
            id="rv-location"
            className={inputClass(errors.location)}
            value={data.location}
            onChange={(e) => set("location", e.target.value)}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "rv-location-error" : undefined}
          />
        </Field>

        <Field id="rv-purchase" label="What did you buy?" error={errors.purchase}>
          <select
            id="rv-purchase"
            className={selectClass(errors.purchase)}
            value={data.purchase}
            onChange={(e) => set("purchase", e.target.value)}
            aria-invalid={Boolean(errors.purchase)}
            aria-describedby={errors.purchase ? "rv-purchase-error" : undefined}
          >
            <option value="">Select…</option>
            {PURCHASE_KINDS.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </Field>

        <Field
          id="rv-contact"
          label="Phone or email"
          optional
          hint="So we can reach you if we have a question. Never published."
        >
          <input
            id="rv-contact"
            className={inputClass()}
            value={data.contact}
            onChange={(e) => set("contact", e.target.value)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id="rv-rating" label="How would you rate us?" error={errors.rating}>
            <StarRating
              value={data.rating}
              onChange={(n) => set("rating", n)}
              invalid={Boolean(errors.rating)}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field
            id="rv-message"
            label="Your review"
            error={errors.message}
            hint="What you bought, how it went, anything another customer would want to know."
          >
            <textarea
              id="rv-message"
              rows={5}
              className={inputClass(errors.message)}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "rv-message-error" : undefined}
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 border-t border-rule pt-7">
        <label className="flex cursor-pointer items-start gap-3 text-[0.875rem] leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
          />
          <span>
            {site.shortName} may publish this review on the website with my name and town.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-2 text-[0.75rem] text-red-700">{errors.consent}</p>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="mt-5 border-l-2 border-red-700 bg-red-50 px-5 py-4 text-[0.875rem] text-red-800"
          >
            We could not send your review. Please call {site.contact.phone} instead — we
            would still like to hear from you.
          </p>
        )}

        {status === "handoff" && (
          <p
            role="status"
            className="mt-5 border-l-2 border-accent bg-accent-wash px-5 py-4 text-[0.875rem] text-ink-soft"
          >
            Your review has been prepared with your answers filled in. Send the message
            that just opened to complete it.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-7 w-full bg-accent px-6 py-3.5 text-center text-[0.875rem] font-medium text-paper transition-colors hover:bg-accent-deep disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send review"}
        </button>

        <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-faint">
          We publish reviews as they are written, and we never offer payment or a discount
          in exchange for one.
        </p>
      </div>
    </form>
  );
}
