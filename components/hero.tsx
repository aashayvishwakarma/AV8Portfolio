import { Marquee } from "./marquee"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-background pb-8">
      {/* Background decorative text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className="select-none font-serif text-[20vw] font-bold uppercase leading-none text-[#2B4230]/30"
          aria-hidden="true"
        >
          AV
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-6 px-6 md:px-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Software Engineer
          </p>
          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight text-foreground">
            Aashay
            <br />
            <span className="text-primary">Vishwa</span>karma
          </h1>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            CS Senior at UT Dallas. Building scalable systems,
            cloud-native applications, and data-driven solutions.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/aashayvishwakarma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aashayvishwakarma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-8 border-t border-[#2B4230]">
        <Marquee />
      </div>
    </section>
  )
}
