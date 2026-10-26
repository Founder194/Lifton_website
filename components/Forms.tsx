"use client";
import { useState } from "react";
import { track } from "./Analytics";

type State = "idle" | "loading" | "done" | "error";

async function post(url: string, data: unknown) {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(j.error ?? "Something went wrong.");
}

const input = "w-full rounded-xl border border-white/10 bg-white/[.05] px-4 py-3 text-[15px] outline-none transition placeholder:text-white/35 focus:border-brand-soft focus:bg-white/[.08]";

export function WaitlistForm({ source = "site" }: { source?: string }) {
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState("loading");
    try {
      await post("/api/subscribe", { email: f.get("email"), company: f.get("company"), platform: "android", source });
      track("waitlist_signup", { source });
      setState("done");
    } catch (err) {
      setMsg((err as Error).message);
      setState("error");
    }
  }
  if (state === "done") return <p className="rounded-xl border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-3 text-[#4ade80]">You&apos;re on the list. We&apos;ll email you when LiftON lands on Android.</p>;
  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <input name="email" type="email" required placeholder="you@email.com" aria-label="Email" className={input} />
      <button disabled={state === "loading"} className="shrink-0 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.03] disabled:opacity-60">
        {state === "loading" ? "Joining…" : "Notify me"}
      </button>
      {state === "error" && <p className="text-sm text-red-400 sm:hidden">{msg}</p>}
    </form>
  );
}

export function FeedbackForm() {
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("idea");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState("loading");
    try {
      await post("/api/feedback", { type, message: f.get("message"), email: f.get("email"), company: f.get("company") });
      track("feedback_sent", { type });
      setState("done");
    } catch (err) {
      setMsg((err as Error).message);
      setState("error");
    }
  }
  if (state === "done") return <p className="rounded-xl border border-[#4ade80]/30 bg-[#4ade80]/10 p-5 text-[#4ade80]">Thank you! We read every message. If you left your email, we&apos;ll reply.</p>;
  const types = [["idea", "Idea"], ["bug", "Bug"], ["question", "Question"], ["praise", "Love it"]];
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {types.map(([v, l]) => (
          <button type="button" key={v} onClick={() => setType(v)} className={`rounded-full border px-4 py-1.5 text-sm transition ${type === v ? "border-brand bg-brand/20 text-white" : "border-white/10 text-muted hover:text-white"}`}>{l}</button>
        ))}
      </div>
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <textarea name="message" required minLength={5} maxLength={3000} rows={5} placeholder="Tell us what's on your mind…" className={input} />
      <input name="email" type="email" placeholder="Email (optional, only if you want a reply)" className={input} />
      <button disabled={state === "loading"} className="rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-[#3a82ff] disabled:opacity-60">{state === "loading" ? "Sending…" : "Send feedback"}</button>
      {state === "error" && <p className="text-sm text-red-400">{msg}</p>}
    </form>
  );
}
