import { insertRow, isEmail, limited, notify } from "@/lib/submit";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (limited(ip)) return Response.json({ error: "Too many tries. Please wait a few minutes." }, { status: 429 });
  const body = await req.json().catch(() => ({}));
  if (body.company) return Response.json({ ok: true }); // honeypot
  if (!isEmail(body.email)) return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  const platform = body.platform === "ios" ? "ios" : "android";
  const r = await insertRow("waitlist", { email: body.email.toLowerCase(), platform, source: String(body.source ?? "site").slice(0, 40) });
  if (!r.ok) return Response.json({ error: "We couldn't save that right now. Please try again later." }, { status: r.status });
  await notify("New LiftON signup", `${body.email} (${platform})`);
  return Response.json({ ok: true });
}
