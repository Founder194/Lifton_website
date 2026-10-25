// Drawn in HTML so it always matches the current dark app. Swap for real screenshots any time.
import { PhoneFrame } from "./PhoneFrame";

const pill = "rounded-full bg-white/10 px-2 py-[3px] text-[8px] font-medium text-white/80";

export function WorkoutScreen() {
  const rows = [
    ["Lat Pulldown", "3 sets · 8-10 reps", "Start 40 kg"],
    ["Seated Cable Row", "3 sets · 10-12 reps", "Start 35 kg"],
    ["Face Pull", "2 sets · 12-15 reps", "Start 15 kg"],
  ];
  return (
    <PhoneFrame>
      <div className="h-full bg-[radial-gradient(ellipse_at_50%_-10%,rgba(30,111,255,.35),transparent_60%)] px-4 pt-11">
        <p className="text-[9px] tracking-widest text-white/50">TODAY&apos;S WORKOUT</p>
        <p className="font-display text-[26px] font-bold italic leading-none">Pull Day</p>
        <div className="mt-2 flex gap-1.5">
          <span className={pill}>45 min</span>
          <span className={pill}>4 exercises</span>
          <span className={pill}>Adapts to you</span>
        </div>
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[.04] p-3">
          <p className="text-[9px] text-white/50">Recovery status</p>
          <div className="mt-1 flex items-end justify-center gap-5">
            {[0, 1].map((i) => (
              <svg key={i} viewBox="0 0 40 80" className="h-[74px]">
                <circle cx="20" cy="7" r="5" fill="#3b4254" />
                <path d="M9 16h22l4 22-6 2-3-12v22l4 28h-7l-4-24-4 24h-7l4-28V28l-3 12-6-2z" fill={i ? "#facc15" : "#4ade80"} opacity=".85" />
                <path d="M11 17h18l2 12H9z" fill={i ? "#1e6fff" : "#ef4444"} opacity=".9" />
              </svg>
            ))}
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {rows.map(([n, s, w]) => (
            <div key={n} className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[.04] p-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-[#0b3a9a]" />
              <div className="flex-1">
                <p className="text-[11px] font-semibold">{n}</p>
                <p className="text-[9px] text-white/50">{s}</p>
              </div>
              <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[8px] text-brand-soft">{w}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-4 bottom-5 rounded-full bg-white py-2.5 text-center text-[12px] font-bold text-black">Start workout</div>
      </div>
    </PhoneFrame>
  );
}

export function ScanScreen() {
  return (
    <PhoneFrame>
      <div className="relative h-full bg-[radial-gradient(ellipse_at_50%_-10%,rgba(30,111,255,.3),transparent_60%)] px-4 pt-11">
        <p className="font-display text-[22px] font-bold italic">Scan your meal</p>
        <div className="relative mt-3 h-[190px] overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_50%_55%,#e8d9b8_0_30%,#c9b27c_31%_52%,#2b2f3a_53%)]">
          <div className="absolute inset-3 rounded-2xl border border-brand-soft/60" />
          <div className="scanline absolute inset-x-3 h-[2px] bg-brand-soft shadow-[0_0_18px_4px_rgba(76,148,255,.8)]" />
        </div>
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[.05] p-3">
          <p className="text-[12px] font-semibold">Chicken and rice</p>
          <p className="font-display text-[34px] font-bold leading-none">620 <span className="text-[13px] font-medium text-white/50">kcal</span></p>
          <div className="mt-2 flex gap-1.5 text-[9px] font-medium">
            <span className="rounded-full bg-[#4c94ff]/20 px-2 py-0.5 text-[#8bb8ff]">P 48 g</span>
            <span className="rounded-full bg-[#facc15]/15 px-2 py-0.5 text-[#facc15]">C 70 g</span>
            <span className="rounded-full bg-[#fb923c]/15 px-2 py-0.5 text-[#fb923c]">F 14 g</span>
          </div>
        </div>
        <div className="absolute inset-x-4 bottom-5 rounded-full bg-white py-2.5 text-center text-[12px] font-bold text-black">Add to today</div>
      </div>
    </PhoneFrame>
  );
}

export function ProgressScreen() {
  const bars = [30, 44, 38, 56, 62, 58, 74];
  return (
    <PhoneFrame>
      <div className="h-full bg-[radial-gradient(ellipse_at_50%_-10%,rgba(30,111,255,.3),transparent_60%)] px-4 pt-11">
        <p className="font-display text-[22px] font-bold italic">Your progress</p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[["12", "Workouts"], ["214", "Sets"], ["18.4k", "kg lifted"]].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-white/10 bg-white/[.04] py-2">
              <p className="font-display text-[22px] font-bold leading-none">{v}</p>
              <p className="text-[8px] text-white/50">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[.04] p-3">
          <div className="flex justify-between text-[9px] text-white/50"><span>Weight</span><span className="text-[#4ade80]">On track</span></div>
          <p className="font-display text-[26px] font-bold leading-none">84.2 → <span className="text-brand-soft">80 kg</span></p>
          <div className="mt-2 flex h-14 items-end gap-1.5">
            {bars.map((b, i) => (<div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand/30 to-brand-soft" style={{ height: `${b}%` }} />))}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-soft to-brand text-[16px] font-extrabold">II</div>
          <div><p className="text-[11px] font-semibold">Athlete II</p><p className="text-[9px] text-white/50">8 of 12 muscle groups ranked</p></div>
        </div>
      </div>
    </PhoneFrame>
  );
}
