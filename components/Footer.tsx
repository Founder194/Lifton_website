import Link from "next/link";
import { SITE, storeLink } from "@/lib/config";

export function Footer() {
  const social = [["Instagram", SITE.instagram], ["TikTok", SITE.tiktok], ["YouTube", SITE.youtube], ["Telegram", SITE.telegram]].filter(([, u]) => u);
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold italic">LiftON</p>
          <p className="mt-2 max-w-xs text-sm text-muted">{SITE.tagline}. Train, eat and track in one place.</p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p className="font-semibold text-white">Product</p>
          <Link className="block hover:text-white" href="/#features">Features</Link>
          <Link className="block hover:text-white" href="/#how">How it works</Link>
          <a className="block hover:text-white" href={storeLink("footer")} target="_blank" rel="noopener">App Store</a>
          <Link className="block hover:text-white" href="/#waitlist">Android waitlist</Link>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p className="font-semibold text-white">Help</p>
          <Link className="block hover:text-white" href="/support">Support</Link>
          <Link className="block hover:text-white" href="/#faq">FAQ</Link>
          <a className="block hover:text-white" href={`mailto:${SITE.supportEmail}`}>Contact</a>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p className="font-semibold text-white">Company</p>
          <Link className="block hover:text-white" href="/privacy">Privacy Policy</Link>
          <Link className="block hover:text-white" href="/terms">Terms of Use</Link>
          {social.map(([l, u]) => (<a key={l} className="block hover:text-white" href={u} target="_blank" rel="noopener">{l}</a>))}
        </div>
      </div>
      <p className="border-t border-white/5 px-5 py-6 text-center text-xs text-muted">© 2026 LiftON. Not medical advice: talk to a professional before changing your training or diet. Apple and App Store are trademarks of Apple Inc.</p>
    </footer>
  );
}
