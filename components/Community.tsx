import Image from "next/image";
import { SITE } from "@/lib/config";
import { Reveal } from "./Reveal";
import { FeedbackForm, WaitlistForm } from "./Forms";

export function TelegramButton({ className = "" }: { className?: string }) {
  const base = `inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 font-semibold ${className}`;
  const icon = (<svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden><path d="M21.9 4.1 18.7 19.3c-.2 1-.9 1.3-1.7.8l-4.8-3.6-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.5 13 1.8 11.5c-1-.3-1-1 .2-1.5L20.3 3c.9-.3 1.7.2 1.6 1.1z" /></svg>);
  if (!SITE.telegram) return <span className={`${base} cursor-default bg-white/10 text-white/60`}>{icon} Community chat opening soon</span>;
  return <a href={SITE.telegram} target="_blank" rel="noopener" className={`${base} bg-[#27a7e7] text-white transition hover:scale-[1.03]`}>{icon} Join the Telegram chat</a>;
}

export function Community() {
  return (
    <section id="community" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card h-full p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">Build it with us</p>
            <h2 className="font-display mt-2 text-5xl font-bold italic leading-none">Your feedback shapes LiftON</h2>
            <p className="mt-4 text-muted">We&apos;re a small team and we ship what lifters ask for. Chat with us and other members, report a bug or tell us what you want next.</p>
            <div className="mt-6"><TelegramButton /></div>
            <p className="mt-5 text-sm text-muted">Or email <a className="text-white underline underline-offset-4" href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card h-full p-8 md:p-10">
            <h3 className="text-2xl font-semibold">Send feedback</h3>
            <p className="mb-5 mt-1 text-sm text-muted">Takes 20 seconds. No account needed.</p>
            <FeedbackForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Waitlist() {
  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-5 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0d2a63] via-[#0a1a3d] to-[#05070d] p-8 md:p-14">
          <Image src="/img/photo-shoes.jpg" alt="" fill sizes="1152px" className="object-cover object-[80%_30%] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3d] via-[#0a1a3d]/85 to-transparent" />
          <div className="relative max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">Android</p>
            <h2 className="font-display mt-2 text-5xl font-bold italic leading-none md:text-6xl">Not on iPhone? Be first on Android.</h2>
            <p className="mb-6 mt-4 text-white/70">Leave your email and we&apos;ll tell you the day LiftON launches on Google Play. No spam, one email.</p>
            <WaitlistForm source="waitlist-section" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
