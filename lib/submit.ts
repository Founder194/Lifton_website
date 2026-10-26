// Shared by /api/subscribe and /api/feedback: validation, light rate limit, Supabase insert, optional email alert.
const hits = new Map<string, number[]>();

export function limited(ip: string, max = 6, windowMs = 10 * 60_000) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > max;
}

export const isEmail = (s: unknown): s is string =>
  typeof s === "string" && s.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

export async function insertRow(table: string, row: Record<string, unknown>) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { ok: false as const, status: 503 };
  const res = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    // Legacy service_role keys are JWTs (eyJ...) and also go in Authorization; new sb_secret_ keys only use apikey.
    headers: { apikey: key, ...(key.startsWith("eyJ") ? { Authorization: `Bearer ${key}` } : {}), "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(row),
  });
  // 409 = duplicate email: treat as success so we never leak who is subscribed.
  if (res.ok || res.status === 409) return { ok: true as const };
  return { ok: false as const, status: 502 };
}

import { tgNotifyOwner } from "./telegram";

export async function notify(subject: string, text: string) {
  // Instant ping in Telegram when the bot is configured.
  await tgNotifyOwner(`${subject}\n\n${text}`);
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: "LiftON site <onboarding@resend.dev>", to, subject, text }),
    });
  } catch {}
}
