import { Reveal } from "./Reveal";

type F = { tag: string; title: string; body: string; span?: string; visual: React.ReactNode };

const Bar = ({ w, c }: { w: string; c: string }) => (
  <div className="h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: w, background: c }} /></div>
);

const features: F[] = [
  {
    tag: "Smart training",
    title: "Today's workout, built for you",
    body: "LiftON looks at what you trained and how recovered each muscle is, then builds the session. Swap any exercise, switch the day or regenerate in one tap.",
    span: "md:col-span-2",
    visual: (
      <div className="flex flex-wrap gap-2 text-xs">
        {["Push", "Pull", "Legs", "Upper", "Full body"].map((d, i) => (
          <span key={d} className={`rounded-full border px-3 py-1.5 ${i === 1 ? "border-brand bg-brand/20 text-white" : "border-white/10 text-muted"}`}>{d}</span>
        ))}
        <span className="rounded-full border border-[#4ade80]/40 bg-[#4ade80]/10 px-3 py-1.5 text-[#4ade80]">Recommended: Pull</span>
      </div>
    ),
  },
  {
    tag: "Eat smarter",
    title: "Scan a meal, get the numbers",
    body: "Take a photo or describe what you ate. Get calories, protein, carbs and fat in seconds, then adjust the portion. Estimates, not lab results.",
    visual: (
      <div className="space-y-3">
        <p className="font-display text-5xl font-bold">620 <span className="text-base text-muted">kcal</span></p>
        <Bar w="78%" c="#4c94ff" /><Bar w="55%" c="#facc15" /><Bar w="32%" c="#fb923c" />
      </div>
    ),
  },
  {
    tag: "Your numbers",
    title: "Calories and protein, set for your goal",
    body: "Tell us your body, goal and pace. LiftON calculates daily targets and shows the path to your goal weight with a realistic date.",
    visual: (
      <svg viewBox="0 0 220 80" className="w-full"><path d="M5 12C60 14 100 38 215 66" stroke="#4c94ff" strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M5 12C60 14 100 38 215 66V80H5Z" fill="url(#g)" opacity=".5" /><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#1e6fff" stopOpacity=".5" /><stop offset="1" stopColor="#1e6fff" stopOpacity="0" /></linearGradient></defs><circle cx="215" cy="66" r="5" fill="#fff" /></svg>
    ),
  },
  {
    tag: "Progress",
    title: "See the work add up",
    body: "Weekly goal, streak, personal records, volume and weight trend. All in one place, with a clear picture of whether you're on pace.",
    visual: (
      <div className="flex items-end gap-2">
        {[35, 50, 42, 68, 60, 82, 90].map((h, i) => (<div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand/30 to-brand-soft" style={{ height: `${h}px` }} />))}
      </div>
    ),
  },
  {
    tag: "Ranks",
    title: "Earn your rank, muscle by muscle",
    body: "Every lift scores. Level up each muscle group, fill the body map and chase the next tier.",
    visual: (
      <div className="flex items-center gap-3">
        {["I", "II", "III"].map((r, i) => (
          <div key={r} className={`grid h-14 w-14 place-items-center rounded-full font-display text-2xl font-bold ${i < 2 ? "bg-gradient-to-br from-brand-soft to-brand" : "border border-dashed border-white/20 text-white/30"}`}>{r}</div>
        ))}
      </div>
    ),
  },
  {
    tag: "Exercise library",
    title: "Learn every move with video",
    body: "Hundreds of exercises with demos, target muscles and form cues, so you never guess how to set up a machine.",
    span: "md:col-span-3",
    visual: (
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {["Chest", "Back", "Legs", "Shoulders", "Arms", "Core"].map((m) => (
          <div key={m} className="rounded-2xl border border-white/10 bg-white/[.04] px-2 py-4 text-center text-xs text-muted">{m}</div>
        ))}
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-soft">Everything in one app</p>
        <h2 className="font-display mt-3 max-w-3xl text-5xl font-bold italic leading-none md:text-7xl">Train. Eat. Track. <span className="glow-text">Repeat.</span></h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 80} className={f.span ?? ""}>
            <article className="card flex h-full flex-col justify-between gap-8 p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">{f.tag}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.body}</p>
              </div>
              {f.visual}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
