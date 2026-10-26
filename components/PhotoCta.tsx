import Image from "next/image";
import { AppStoreButton } from "./Buttons";
import { Reveal } from "./Reveal";

export function PhotoCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[36px] border border-white/10">
          <Image src="/img/photo-curl.jpg" alt="" fill sizes="1152px" className="-z-10 object-cover object-right" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#05070d] via-[#05070d]/80 to-transparent" />
          <div className="max-w-xl px-8 py-20 md:px-14 md:py-28">
            <h2 className="font-display text-6xl font-bold italic leading-[0.95] md:text-7xl">Start your first <span className="glow-text">workout</span> today.</h2>
            <p className="mt-4 text-lg text-white/70">Answer a few questions and your plan is ready in about two minutes. Free to try, no account needed.</p>
            <div className="mt-8"><AppStoreButton /></div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
