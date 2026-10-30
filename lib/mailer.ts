import type { ContactInput } from "@/lib/contact";

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ");

/**
 * Sends the inquiry through Resend. Returns false when delivery is not
 * possible. Without RESEND_API_KEY it only logs, and only outside production.
 */
export async function sendContactEmail(data: ContactInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    if (process.env.NODE_ENV === "production") return false;
    console.info("[contact] email not configured, inquiry:", data);
    return true;
  }

  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: data.email,
      subject: `New inquiry from ${oneLine(fullName)}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "-"}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });

  return response.ok;
}
