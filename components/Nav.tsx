import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/config";

const links = [
  ["Features", "/#features"],
  ["How it works", "/#how"],
  ["FAQ", "/#faq"],
  ["Support", "/support"],
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05070d]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/img/icon.png" alt="" width={36} height={36} className="h-9 w-9 rounded-[10px]" />
          <span className="font-display text-2xl font-bold italic tracking-wide">LiftON</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map(([l, h]) => (
            <Link key={l} href={h} className="transition hover:text-white">{l}</Link>
          ))}
        </nav>
        <a href={SITE.appStore} target="_blank" rel="noopener" data-track="app_store_click" data-where="nav" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105">
          Download
        </a>
      </div>
    </header>
  );
}
