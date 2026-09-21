/**
 * Shape and options for the agent application form on /agents#apply.
 *
 * Submission strategy (see `AgentApplicationForm`):
 *   1. If NEXT_PUBLIC_AGENT_FORM_ENDPOINT is set, the application is POSTed
 *      there as JSON. Point it at Formspree, Getform, a Google Apps Script,
 *      or your own API — anything that accepts a JSON POST.
 *   2. Otherwise it falls back to handing the completed application to
 *      WhatsApp (or email) as a pre-filled message, so the form is useful
 *      before any backend exists.
 */

export const GHANA_REGIONS = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Western North",
  "Central",
  "Eastern",
  "Volta",
  "Oti",
  "Northern",
  "Savannah",
  "North East",
  "Upper East",
  "Upper West",
  "Bono",
  "Bono East",
  "Ahafo",
] as const;

export const ID_TYPES = [
  "Ghana Card",
  "Passport",
  "Voter's ID",
  "Driver's licence",
] as const;

export const PREMISES_OPTIONS = [
  "Yes — I have a shop or stall",
  "Yes — I trade from a market stand",
  "No — I would sell on the move",
] as const;

export const EXPERIENCE_OPTIONS = [
  "I already sell phones or electronics",
  "I have sold other goods on credit",
  "I run a different kind of business",
  "This would be new to me",
] as const;

export type AgentApplication = {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  idType: string;
  region: string;
  town: string;
  occupation: string;
  premises: string;
  experience: string;
  referees: string;
  notes: string;
  consent: boolean;
};

export const EMPTY_APPLICATION: AgentApplication = {
  fullName: "",
  phone: "",
  whatsapp: "",
  email: "",
  idType: "",
  region: "",
  town: "",
  occupation: "",
  premises: "",
  experience: "",
  referees: "",
  notes: "",
  consent: false,
};

/** Accepts 0XXXXXXXXX, 233XXXXXXXXX or +233XXXXXXXXX, spaces allowed. */
export function isValidGhanaPhone(value: string): boolean {
  const digits = value.replace(/[\s-()]/g, "");
  return /^(?:\+?233|0)\d{9}$/.test(digits);
}

export function validate(data: AgentApplication): Partial<Record<keyof AgentApplication, string>> {
  const errors: Partial<Record<keyof AgentApplication, string>> = {};

  if (!data.fullName.trim()) errors.fullName = "Tell us your full name.";
  if (!data.phone.trim()) errors.phone = "We need a phone number to reach you on.";
  else if (!isValidGhanaPhone(data.phone))
    errors.phone = "Enter a Ghanaian number, for example 024 123 4567.";
  if (data.whatsapp.trim() && !isValidGhanaPhone(data.whatsapp))
    errors.whatsapp = "Enter a Ghanaian number, or leave this blank.";
  if (data.email.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email.trim()))
    errors.email = "Check the email address.";
  if (!data.idType) errors.idType = "Choose the ID you can provide.";
  if (!data.region) errors.region = "Choose a region.";
  if (!data.town.trim()) errors.town = "Tell us the town or district you want to cover.";
  if (!data.occupation.trim()) errors.occupation = "Tell us what you do now.";
  if (!data.premises) errors.premises = "Let us know where you would sell from.";
  if (!data.experience) errors.experience = "Choose the closest description.";
  if (!data.referees.trim())
    errors.referees = "Give two referees, with a phone number for each.";
  if (!data.consent) errors.consent = "Please confirm before submitting.";

  return errors;
}

/** Human-readable rendering used for the WhatsApp/email fallback. */
export function formatApplication(data: AgentApplication): string {
  return [
    "AGENT APPLICATION — Aidoo Tech Solutions",
    "",
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    data.whatsapp.trim() ? `WhatsApp: ${data.whatsapp}` : null,
    data.email.trim() ? `Email: ${data.email}` : null,
    `ID: ${data.idType}`,
    "",
    `Region: ${data.region}`,
    `Town / district: ${data.town}`,
    "",
    `Current work: ${data.occupation}`,
    `Premises: ${data.premises}`,
    `Experience: ${data.experience}`,
    "",
    "Referees:",
    data.referees,
    data.notes.trim() ? `\nAnything else:\n${data.notes}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");
}
