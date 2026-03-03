export function Footer() {
  return (
    <footer className="border-t border-[#2B4230] bg-background">
      {/* Large name treatment like Lando's footer */}
      <div className="overflow-hidden px-6 py-12 md:px-10 md:py-16">
        <p className="font-serif text-[clamp(3rem,12vw,10rem)] font-bold uppercase leading-none tracking-tight text-[#2B4230]">
          Aashay V.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[#2B4230] px-6 py-6 md:flex-row md:px-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Always building the next thing.
        </p>
        <div className="flex items-center gap-6">
          <span className="text-xs text-muted-foreground">
            CS @ UT Dallas
          </span>
          <span className="text-xs text-muted-foreground">
            Class of 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
