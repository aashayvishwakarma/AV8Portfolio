export function Footer() {
  return (
    <footer className="border-t border-[#2B4230] bg-background">

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[#2B4230] px-6 py-6 md:flex-row md:px-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Aashay Vishwakarma.
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
