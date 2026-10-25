import { insertRow, isEmail, limited, notify } from "@/lib/submit";

const TYPES = ["bug", "idea", "question", "praise"];

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (limited(ip, 4)) return Response.json({ error: "Too many messages. Please wait a few minutes." }, { status: 429 });
  const body = await req.json().catch(() => ({}));
  if (body.company) return Response.json({ ok: true });
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (message.length < 5 || message.length > 3000) return Response.json({ error: "Please write a few words (max 3000 characters)." }, { status: 400 });
  const email = isEmail(body.email) ? body.email : null;
  const type = TYPES.includes(body.type) ? body.type : "idea";
  const r = await insertRow("feedback", { type, message, email });
  if (!r.ok) return Response.json({ error: "We couldn't send that right now. Please email us instead." }, { status: r.status });
  await notify(`LiftON feedback: ${type}`, `${message}\n\nFrom: ${email ?? "anonymous"}`);
  return Response.json({ ok: true });
}
