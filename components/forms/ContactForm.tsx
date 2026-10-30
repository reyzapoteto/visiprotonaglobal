"use client";

import { useState } from "react";
import { contactPage } from "@/content/pages";
import { validateContact, type ContactErrors } from "@/lib/contact";

type Status = "idle" | "sending" | "success" | "error";
type FieldName = "firstName" | "lastName" | "email" | "phone" | "message";

const fieldClass =
  "w-full rounded-card bg-white p-3 placeholder:text-black/40 focus-visible:outline-2 focus-visible:outline-brand-500 aria-[invalid=true]:outline-2 aria-[invalid=true]:outline-red-600";

type FieldProps = {
  name: FieldName;
  type?: string;
  autoComplete?: string;
  error?: string;
  multiline?: boolean;
};

function Field({
  name,
  type = "text",
  autoComplete,
  error,
  multiline,
}: FieldProps) {
  const { label, placeholder } = contactPage.form[name];
  const shared = {
    id: name,
    name,
    placeholder,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${name}-error` : undefined,
  };

  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor={name} className="text-lg">
        {label}
      </label>
      {multiline ? (
        <textarea rows={5} className={`${fieldClass} h-[132px]`} {...shared} />
      ) : (
        <input type={type} className={fieldClass} {...shared} />
      )}
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-600">
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
    <form
      id="contact-form"
      onSubmit={onSubmit}
      noValidate
      className="relative flex scroll-mt-28 flex-col gap-4 bg-brand-100 p-6"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <Field
          name="firstName"
          autoComplete="given-name"
          error={errors.firstName}
        />
        <Field
          name="lastName"
          autoComplete="family-name"
          error={errors.lastName}
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <Field
          name="email"
          type="email"
          autoComplete="email"
          error={errors.email}
        />
        <Field
          name="phone"
          type="tel"
          autoComplete="tel"
          error={errors.phone}
        />
      </div>
      <Field name="message" multiline error={errors.message} />

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
        className="h-[58px] w-full bg-brand-500 px-6 text-lg font-bold text-white transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : contactPage.form.submit}
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
