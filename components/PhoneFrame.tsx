export function PhoneFrame({ children, className = "", notch = true }: { children: React.ReactNode; className?: string; notch?: boolean }) {
  return (
    <div className={`relative mx-auto aspect-[9/19] w-[270px] rounded-[44px] border border-white/15 bg-black p-[9px] shadow-[0_40px_120px_-20px_rgba(30,111,255,.45)] ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-[#05070d]">
        {notch && <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />}
        {children}
      </div>
    </div>
  );
}
