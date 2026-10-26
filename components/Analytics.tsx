"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "lifton-consent";

type G = (...a: unknown[]) => void;
const gtag = (...a: unknown[]) => (window as unknown as { gtag?: G }).gtag?.(...a);

/** Fire a GA4 event from anywhere on the client. */
export function track(name: string, params: Record<string, unknown> = {}) {
  if (GA_ID) gtag("event", name, params);
}

function readConsent(): "granted" | "denied" | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function Analytics() {
  const [choice, setChoice] = useState<"granted" | "denied" | null | "loading">("loading");

  useEffect(() => {
    const c = readConsent();
    setChoice(c);
    if (c === "granted") gtag("consent", "update", { analytics_storage: "granted" });
  }, []);

  // Count clicks on anything marked data-track="event_name" (store buttons, Telegram, etc.).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (el) track(el.dataset.track!, { location: el.dataset.where ?? "page" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  function decide(v: "granted" | "denied") {
    try { localStorage.setItem(KEY, v); } catch {}
    gtag("consent", "update", { analytics_storage: v });
    setChoice(v);
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `}</Script>
      {choice === null && (
        <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#0c1018]/95 p-4 shadow-2xl backdrop-blur-xl sm:bottom-5">
          <p className="text-sm text-white/80">
            We use privacy-friendly analytics cookies to see which pages help people. No ads, no selling data.{" "}
            <a href="/privacy" className="text-brand-soft underline underline-offset-4">Details</a>
          </p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => decide("granted")} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">Accept</button>
            <button onClick={() => decide("denied")} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5">Decline</button>
          </div>
        </div>
      )}
    </>
  );
}
