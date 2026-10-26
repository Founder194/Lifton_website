import Image from "next/image";
import { Reveal } from "./Reveal";

const rows = [
  { tag: "Guided workouts", title: "Log a set in two taps", body: "Big weight and rep controls, a rest timer that starts itself and a reminder of what you lifted last time and the record to beat. Built to use mid-set, one-handed.", img: "/img/shot-workout.jpg", alt: "LiftON live workout screen with weight, reps and rest timer", flip: false },
  { tag: "Progress", title: "Streaks, records and strength trends", body: "Your weekly goal, workouts, sets and total volume, plus personal records and a strength curve that shows whether you're really getting stronger.", img: "/img/shot-progress.jpg", alt: "LiftON progress screen with weekly goal, personal records and strength chart", flip: true },
];

export function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-soft">The app</p>
        <h2 className="font-display mt-3 max-w-3xl text-5xl font-bold italic leading-none md:text-7xl">Built for the <span className="glow-text">gym floor</span></h2>
      </Reveal>
      <Reveal className="mt-10">
        <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_100px_-30px_rgba(30,111,255,.5)]">
          <Image src="/img/showcase.jpg" alt="LiftON on iPhone: today's workout, live workout and progress" width={2400} height={1029} sizes="(min-width:1152px) 1152px, 100vw" className="h-auto w-full" />
        </div>
      </Reveal>
      <div className="mt-24 space-y-24">
        {rows.map((r) => (
          <div key={r.title} className="grid items-center gap-10 md:grid-cols-2">
            <Reveal className={r.flip ? "md:order-2" : ""}>
              <div className="mx-auto max-w-[340px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_100px_-30px_rgba(30,111,255,.5)]">
                <Image src={r.img} alt={r.alt} width={1400} height={1514} sizes="340px" className="h-auto w-full" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">{r.tag}</p>
              <h3 className="font-display mt-2 text-5xl font-bold italic leading-none">{r.title}</h3>
              <p className="mt-4 max-w-md text-lg text-muted">{r.body}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
