import { SITE } from "@/lib/config";

export function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.appStore}
      target="_blank"
      rel="noopener"
      className={`group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-black transition hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(30,111,255,.45)] ${className}`}
    >
      <svg viewBox="0 0 384 512" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[11px] font-medium opacity-70">Download on the</span>
        <span className="block text-xl font-semibold -mt-0.5">App Store</span>
      </span>
    </a>
  );
}

export function AndroidSoon({ className = "" }: { className?: string }) {
  return (
    <a
      href="#waitlist"
      className={`inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M3.6 2.3a1.5 1.5 0 0 0-.6 1.2v17a1.5 1.5 0 0 0 .6 1.2l9.5-9.7zM14.2 12.7l2.6 2.7-11.5 6.5zm0-1.4L5.3 2.1l11.5 6.5zm3.7-1.6 3 1.7a1.2 1.2 0 0 1 0 2.1l-3 1.7-2.8-3z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[11px] font-medium opacity-70">Android</span>
        <span className="block text-xl font-semibold -mt-0.5">Coming soon</span>
      </span>
    </a>
  );
}
