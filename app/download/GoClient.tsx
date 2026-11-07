"use client";
import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import { AppStoreButton } from "@/components/Buttons";
import { storeLink } from "@/lib/config";

// TikTok / Instagram / Facebook in-app browsers: App Store links often fail there, Safari opens them fine.
const IN_APP = /musical_ly|BytedanceWebview|TikTok|Instagram|FBAN|FBAV/i;

const noop = () => () => {};
const detect = () => IN_APP.test(navigator.userAgent) || new URLSearchParams(location.search).has("inapp");

export function GoClient() {
  const inApp = useSyncExternalStore(noop, detect, () => false);
  const [hint, setHint] = useState(true);

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <Image src="/img/icon.png" alt="" width={96} height={96} className="h-24 w-24 rounded-[22px]" priority />
      <h1 className="font-display mt-6 text-5xl font-bold italic leading-none">LiftON <span className="glow-text">Gym</span></h1>
      <p className="mt-3 max-w-xs text-muted">Walk in with a plan. Not a guess.</p>

      <div className="mt-8"><AppStoreButton where="tiktok_bio" /></div>
      <p className="mt-6 max-w-xs text-sm text-muted">Or search <span className="font-semibold text-white">LiftON Gym</span> on the App Store.</p>

      {inApp && hint && (
        <div role="dialog" aria-label="Open in browser" className="fixed inset-0 z-50 flex flex-col justify-end bg-black/70 backdrop-blur-[2px]">
          <div className="relative rounded-t-[2rem] bg-white px-6 pb-10 pt-14 text-center text-black">
            <Image src="/img/icon.png" alt="" width={88} height={88} className="absolute -top-11 left-1/2 h-[88px] w-[88px] -translate-x-1/2 rounded-[20px] border-4 border-white" />
            <button onClick={() => setHint(false)} aria-label="Close" className="absolute right-5 top-5 text-2xl leading-none text-black/70">✕</button>
            <p className="text-3xl font-bold leading-tight">Open LiftON Gym</p>
            <p className="mx-auto mt-3 max-w-xs text-base leading-snug text-black/65">To download the app, hold the button below, then tap <span className="font-semibold text-black">Open Link</span>.</p>
            <a href={storeLink("tiktok_bio_hold")} rel="noopener" data-track="app_store_hold" data-where="tiktok_bio" className="mt-7 flex items-center justify-center gap-2.5 rounded-full bg-black px-6 py-4 text-white">
              <svg viewBox="0 0 384 512" className="h-6 w-6 fill-current" aria-hidden><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
              <span className="text-lg font-semibold">Hold to download LiftON Gym</span>
            </a>
            <p className="mt-4 text-sm text-black/50">The link opens the App Store page for LiftON Gym.</p>
          </div>
        </div>
      )}
    </main>
  );
}
