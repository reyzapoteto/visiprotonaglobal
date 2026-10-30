import { validateContact } from "@/lib/contact";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const input =
    typeof body === "object" && body !== null
      ? (body as Record<string, unknown>)
      : {};

  // Honeypot: pretend success so bots learn nothing.
  if (typeof input.website === "string" && input.website !== "") {
    return Response.json({ ok: true });
  }

  const { data, errors } = validateContact(input);
  if (!data) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const sent = await sendContactEmail(data);
  return sent
    ? Response.json({ ok: true })
    : Response.json({ ok: false }, { status: 503 });
}
