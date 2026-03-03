import Image from "next/image"
import { Marquee } from "./marquee"

export function Hero() {
  return (
    <section id="home" className="relative flex h-[calc(100vh-3.5rem)] flex-col overflow-hidden bg-background pb-2 md:pb-4">
      {/* Main content */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden px-6 md:grid md:min-h-0 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-6 md:px-10 md:items-end">
        {/* Portrait card (on top for mobile, right on desktop) */}
        <div className="order-1 flex min-h-0 flex-1 basis-0 items-end justify-center md:order-2 md:basis-auto md:justify-end">
          <div className="liquid-glass relative aspect-[3/4] h-full max-h-[38vh] w-full max-w-xs overflow-hidden md:max-h-none md:max-w-sm">
            <Image
              src="/aashay-headshot.JPG"
              alt="Portrait of Aashay Vishwakarma"
              fill
              priority
              sizes="(min-width: 1024px) 22rem, (min-width: 768px) 18rem, 70vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Text + intro */}
        <div className="order-2 flex min-h-0 flex-shrink-0 flex-col gap-2 md:order-1 md:gap-6">
          <div className="flex flex-col gap-1.5 md:gap-3">
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <p className="liquid-glass-olive inline-flex w-fit items-center px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.32em] text-foreground">
                Software Engineer
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <a
                  href="https://github.com/aashayvishwakarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                  aria-label="GitHub profile"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5 md:h-6 md:w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.12-4.56-4.98 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.38 9.38 0 0 1 12 6.84c.85 0 1.72.11 2.53.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.7 0 3.87-2.34 4.73-4.57 4.98.36.31.68.93.68 1.88 0 1.36-.01 2.46-.01 2.79 0 .26.18.57.69.47A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aashayvishwakarma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                  aria-label="LinkedIn profile"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5 md:h-6 md:w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1s2.5 1.12 2.5 2.5ZM.32 8.16h4.36V22H.32zm7.37 0h4.18v1.89h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.67V22h-4.36v-6.03c0-1.44-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2V22H7.69z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/aashayvishwakarma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                  aria-label="Instagram profile"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5 md:h-6 md:w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm10.25 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                  </svg>
                </a>
                <a
                  href="mailto:aashay.vkarma@gmail.com"
                  className="text-foreground transition-colors hover:text-primary"
                  aria-label="Send email to Aashay"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5 md:h-6 md:w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.2l8 5.3 8-5.3V6H4Zm16 2.98-7.55 5.01a1.5 1.5 0 0 1-1.7 0L3 8.98V18h17Z" />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="font-serif text-[clamp(2rem,8vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight text-foreground md:text-[clamp(3rem,10vw,8rem)]">
              Aashay
              <br />
              <span className="text-primary">
                Vishwakarma
              </span>
            </h1>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md line-clamp-2 text-sm leading-relaxed text-muted-foreground md:line-clamp-none md:text-base">
              CS at UT Dallas. Building simply to solve inconveniences, learn really cool technologies, and to have fun.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-2 shrink-0 border-t border-[#2B4230] md:mt-4">
        <Marquee />
      </div>
    </section>
  )
}
