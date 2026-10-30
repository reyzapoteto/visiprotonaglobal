"use client";

import { useState } from "react";
import { validateContact, type ContactErrors } from "@/lib/contact";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-1 w-full rounded-lg border border-line px-3 py-2 focus-visible:outline-2 focus-visible:outline-brand-500 aria-[invalid=true]:border-red-600";

type FieldProps = {
  name: "name" | "email" | "phone" | "company" | "message";
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  multiline?: boolean;
};

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
  error,
  multiline,
}: FieldProps) {
  const shared = {
    id: name,
    name,
    required,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${name}-error` : undefined,
    className: fieldClass,
  };

  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {multiline ? (
        <textarea rows={5} {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    const result = validateContact(values);
    setErrors(result.errors);
    if (!result.data) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Field
        name="name"
        label="Name"
        required
        autoComplete="name"
        error={errors.name}
      />
      <Field
        name="email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        error={errors.email}
      />
      <Field
        name="phone"
        label="Phone"
        type="tel"
        autoComplete="tel"
        error={errors.phone}
      />
      <Field
        name="company"
        label="Company"
        autoComplete="organization"
        error={errors.company}
      />
      <Field
        name="message"
        label="Message"
        required
        multiline
        error={errors.message}
      />

      {/* Honeypot: hidden from people, filled by bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px]"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p role="status" className="text-sm">
        {status === "success" && "Thank you! We will get back to you soon."}
        {status === "error" && (
          <span className="text-red-600">
            Something went wrong. Please try again or email us directly.
          </span>
        )}
      </p>
    </form>
  );
}
