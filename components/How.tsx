import { Reveal } from "./Reveal";
import { Shot } from "./Shot";

const steps = [
  { n: "01", t: "Tell us about you", b: "Goal, experience, days per week and body stats. About two minutes, no account.", s: <Shot src="/img/step-plan.jpg" alt="LiftON first-week plan: three full body days" /> },
  { n: "02", t: "Train and eat with a plan", b: "Open the app, get today's workout, log your sets and scan your meals.", s: <Shot src="/img/hero-1.jpg" alt="LiftON home screen with today's workout" /> },
  { n: "03", t: "Watch it adapt", b: "Weights, workouts and targets update as you get stronger and your weight moves.", s: <Shot src="/img/hero-2.jpg" alt="LiftON training, eating and water rings" /> },
];

export function How() {
  return (
    <section id="how" className="relative overflow-hidden border-y border-white/5 bg-[#070a12] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-soft">How it works</p>
          <h2 className="font-display mt-3 text-5xl font-bold italic leading-none md:text-7xl">From first rep to <span className="glow-text">real progress</span></h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="text-center">
                <div className="mx-auto h-[540px] w-[270px] origin-top scale-[.9]">{s.s}</div>
                <p className="font-display mt-2 text-xl font-bold text-brand-soft">{s.n}</p>
                <h3 className="text-xl font-semibold">{s.t}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[15px] text-muted">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
