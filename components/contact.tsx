import { ArrowUpRight } from "lucide-react"

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/aashayvishwakarma",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aashayvishwakarma/",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Connect
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column */}
          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
              Let{"'"}s <span className="text-primary">Connect</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether it{"'"}s a collaboration, opportunity, or just a
              conversation about tech, feel free to message me!
            </p>
          </div>

          {/* Right column - Social links */}
          <div className="flex flex-col justify-end gap-4">
            <a
              href="mailto:aashay.vishwakarma@example.com"
              className="group flex items-center justify-between border-b border-[#2B4230] pb-4 transition-colors hover:border-primary"
            >
              <span className="font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary md:text-2xl">
                Email
              </span>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground transition-colors group-hover:text-primary"
              />
            </a>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-[#2B4230] pb-4 transition-colors hover:border-primary"
              >
                <span className="font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {social.name}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground transition-colors group-hover:text-primary"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
