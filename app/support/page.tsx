import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { TelegramButton } from "@/components/Community";
import { FeedbackForm } from "@/components/Forms";
import { SITE } from "@/lib/config";

export const metadata: Metadata = { title: "Support & Help", description: "Get help with LiftON: FAQ, chat with the team, report a bug or share an idea." };

export default function Support() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-soft">Help center</p>
        <h1 className="font-display mt-2 text-6xl font-bold italic leading-none md:text-8xl">How can we <span className="glow-text">help?</span></h1>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="card p-6"><p className="text-2xl">💬</p><h2 className="mt-2 font-semibold">Chat with us</h2><p className="mb-4 mt-1 text-sm text-muted">Fastest way to get an answer and meet other lifters.</p><TelegramButton className="!px-4 !py-2.5 text-sm" /></div>
          <div className="card p-6"><p className="text-2xl">✉️</p><h2 className="mt-2 font-semibold">Email</h2><p className="mt-1 text-sm text-muted">Account, purchases or anything private. We reply within 1-2 days.</p><a className="mt-4 inline-block text-sm text-brand-soft underline underline-offset-4" href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></div>
          <div className="card p-6"><p className="text-2xl">🧾</p><h2 className="mt-2 font-semibold">Billing</h2><p className="mt-1 text-sm text-muted">Cancel in iOS Settings, Subscriptions. Refunds via Apple.</p><a className="mt-4 inline-block text-sm text-brand-soft underline underline-offset-4" href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a></div>
        </div>

        <h2 className="font-display mt-16 text-4xl font-bold italic">Frequently asked questions</h2>
        <div className="mt-5"><Faq /></div>

        <div id="feedback" className="card mt-16 p-8 md:p-10">
          <h2 className="font-display text-4xl font-bold italic">Report a bug or share an idea</h2>
          <p className="mb-6 mt-1 text-muted">Include your iPhone model and what you were doing if it&apos;s a bug.</p>
          <FeedbackForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
