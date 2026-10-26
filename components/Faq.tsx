import { SITE } from "@/lib/config";
import { Reveal } from "./Reveal";

export const FAQS: [string, string][] = [
  ["Is LiftON free?", "You can start free: 3 workouts and 3 meal scans to try everything. LiftON Pro unlocks unlimited workouts, scans and full progress tracking, with a 7-day free trial. Prices depend on your region and are shown in the app before you subscribe."],
  ["Do I need to create an account?", "No. Open the app, answer a few questions and your plan is ready."],
  ["Is LiftON good for beginners?", "Yes. If you pick beginner, LiftON starts with simple machine and dumbbell exercises, suggests starting weights and keeps sessions short. It grows with you."],
  ["How does it decide today's workout?", "It looks at your goal, your schedule and which muscles you trained recently, then recommends the session with the best-recovered muscles. You can always switch the day, swap an exercise or regenerate."],
  ["How accurate is the meal scan?", "It gives a quick estimate of calories, protein, carbs and fat from your photo or description. Portions are hard to judge from a picture, so you can adjust them. It's a guide for consistency, not medical or dietary advice."],
  ["Which devices does it work on?", "iPhone today. Android is on the way: join the waitlist on this page and we'll email you the day it launches."],
  ["How do I cancel my subscription?", "On your iPhone open Settings, tap your name, then Subscriptions, choose LiftON and tap Cancel. You keep Pro until the end of the period you paid for."],
  ["How do I restore my purchase or get a refund?", "Open the paywall in LiftON and tap Restore Purchases. Refunds are handled by Apple at reportaproblem.apple.com."],
  ["What happens to my data and my meal photos?", "Your workouts, profile and progress are stored on your device. Meal photos and descriptions are sent securely to our analysis service only to estimate nutrition. Read the full details in our Privacy Policy."],
  ["Can I delete my data?", "Yes. In the app go to Profile, Data, Delete All Data. You can also email us and we'll help."],
  ["Does it support kg and lb?", "Yes. LiftON picks the right units for your region and you can switch any time."],
  ["I found a bug or have an idea. Where do I tell you?", `Use the feedback form on our Support page, message us on Telegram, or email ${SITE.supportEmail}. We read everything.`],
];

export function Faq({ limit }: { limit?: number }) {
  const list = limit ? FAQS.slice(0, limit) : FAQS;
  return (
    <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[.02]">
      {list.map(([q, a]) => (
        <details key={q} className="group px-6 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-6 text-left text-[17px] font-medium">
            {q}
            <span className="chev grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-lg transition-transform">+</span>
          </summary>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <Reveal>
        <h2 className="font-display text-center text-5xl font-bold italic leading-none md:text-7xl">Questions? <span className="glow-text">Answered.</span></h2>
        <div className="mt-10"><Faq /></div>
        <p className="mt-6 text-center text-sm text-muted">Still stuck? <a href="/support" className="text-brand-soft underline underline-offset-4">Visit the Support page</a></p>
      </Reveal>
    </section>
  );
}
