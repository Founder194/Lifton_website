import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <h1 className="font-display text-6xl font-bold italic leading-none">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        <div className="mt-10 space-y-5 text-[15px] leading-7 text-white/80 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_a]:text-brand-soft [&_a]:underline [&_li]:ml-5 [&_li]:list-disc">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
