import Image from "next/image";
import { AndroidSoon, AppStoreButton } from "./Buttons";
import { WorkoutScreen, ScanScreen } from "./AppScreens";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 md:grid-cols-[1.05fr_1fr] md:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" /> Now on iPhone · Android coming soon
          </span>
          <h1 className="font-display mt-5 text-[64px] font-bold italic leading-[0.92] sm:text-[88px] md:text-[96px]">
            Know exactly <br />
            <span className="glow-text">what to do.</span>
            <br />
            In the gym and on your plate.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            LiftON builds today&apos;s workout around how you&apos;ve recovered, scans your meals with your camera and tracks your progress. One plan for training and nutrition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AppStoreButton />
            <AndroidSoon />
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li>✓ 3 free workouts to try</li>
            <li>✓ 7-day free trial on Pro</li>
            <li>✓ No account needed</li>
          </ul>
        </div>

        <div className="relative mx-auto h-[640px] w-full max-w-[480px] md:h-[680px]">
          <div className="absolute inset-x-8 top-0 h-[430px] overflow-hidden rounded-[40px] border border-white/10">
            <Image src="/img/photo-deadlift.jpg" alt="Lifter setting up a barbell deadlift in a dark gym" fill priority sizes="460px" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/20 to-transparent" />
          </div>
          <div className="floaty absolute -left-3 top-[170px] z-10 scale-[.88] origin-top-left sm:left-0"><WorkoutScreen /></div>
          <div className="floaty absolute -right-4 top-[250px] z-20 hidden scale-[.78] origin-top-right sm:block" style={{ animationDelay: "-3s" }}><ScanScreen /></div>
        </div>
      </div>
    </section>
  );
}
