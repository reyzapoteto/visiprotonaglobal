export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

type ValidationResult =
  | { data: ContactInput; errors: ContactErrors }
  | { data: null; errors: ContactErrors };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+\d][\d\s()-]{5,19}$/;

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Shared by the form (client) and the API route (server). */
export function validateContact(
  input: Record<string, unknown>,
): ValidationResult {
  const data: ContactInput = {
    name: text(input.name),
    email: text(input.email),
    phone: text(input.phone),
    company: text(input.company),
    message: text(input.message),
  };
  const errors: ContactErrors = {};

  if (data.name.length < 2 || data.name.length > 100) {
    errors.name = "Please enter your name (2–100 characters).";
  }
  if (!EMAIL.test(data.email) || data.email.length > 254) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.phone && !PHONE.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (data.company.length > 100) {
    errors.company = "Company name is too long.";
  }
  if (data.message.length < 10 || data.message.length > 2000) {
    errors.message = "Please enter a message (10–2000 characters).";
  }

  return Object.keys(errors).length > 0
    ? { data: null, errors }
    : { data, errors };
}
