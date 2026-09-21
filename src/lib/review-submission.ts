/**
 * Shape and validation for the "leave a review" form on /customer-feedback.
 *
 * Submission mirrors the agent application form: if
 * NEXT_PUBLIC_REVIEW_FORM_ENDPOINT is set the review is POSTed there as JSON,
 * otherwise it is handed to WhatsApp (or email) as a pre-filled message so the
 * form is useful before any backend exists.
 */

export const PURCHASE_KINDS = [
  "A phone bought outright",
  "A phone on hire purchase",
  "A tablet",
  "Accessories",
  "Something else",
] as const;

export type Review = {
  name: string;
  location: string;
  purchase: string;
  rating: number;
  message: string;
  contact: string;
  consent: boolean;
};

export const EMPTY_REVIEW: Review = {
  name: "",
  location: "",
  purchase: "",
  rating: 0,
  message: "",
  contact: "",
  consent: false,
};

export function validate(data: Review): Partial<Record<keyof Review, string>> {
  const errors: Partial<Record<keyof Review, string>> = {};

  if (!data.name.trim()) errors.name = "Tell us your name.";
  if (!data.location.trim()) errors.location = "Which town or city are you in?";
  if (!data.purchase) errors.purchase = "Tell us what you bought.";
  if (!data.rating) errors.rating = "Choose a rating.";
  if (!data.message.trim()) errors.message = "Write a few words about your experience.";
  else if (data.message.trim().length < 20)
    errors.message = "A little more detail helps other customers.";
  if (!data.consent) errors.consent = "We need your permission before we can publish it.";

  return errors;
}

/** Human-readable rendering used for the WhatsApp/email fallback. */
export function formatReview(data: Review): string {
  return [
    "CUSTOMER REVIEW — Aidoo Tech Solutions",
    "",
    `Name: ${data.name}`,
    `Town / city: ${data.location}`,
    `Bought: ${data.purchase}`,
    `Rating: ${data.rating} out of 5`,
    "",
    "Review:",
    data.message,
    data.contact.trim() ? `\nContact: ${data.contact}` : null,
    "",
    "Permission to publish: yes",
  ]
    .filter((line) => line !== null)
    .join("\n");
}
