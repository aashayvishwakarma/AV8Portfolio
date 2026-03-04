export function About() {
  return (
    <section id="about" className="relative bg-[#2B4230] py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            About
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column - Quote */}
          <div className="flex flex-col justify-center">
            <blockquote className="font-serif text-3xl font-bold leading-snug text-[#FDFFFF] md:text-4xl lg:text-5xl">
              <span className="text-pretty">
                The best part about tech?{" "}
                <span className="text-primary">
                  There{"'"}s always more to figure out.
                </span>
              </span>
            </blockquote>
          </div>

          {/* Right column - Bio */}
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-[#FDFFFF]/80 md:text-lg">
              Hey, I{"'"}m Aashay. A current senior at UT Dallas studying Computer Science.
              I spend most of my time contrubuting to my student orgs, building things and learning all the new technologies that come out every day. Lately that{"'"}s meant a lot of cloud architecture, data pipelines in Python and SQL and trying building agents.
            </p>
            <p className="text-base leading-relaxed text-[#FDFFFF]/80 md:text-lg">
              Outside of work I{"'"}m usually with friends, watching sports, driving, working out, and eating all while having great music in my ears.
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-[#FDFFFF]/10 pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-primary md:text-4xl">
                  2+
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#FDFFFF]/50">
                  Years Exp
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary md:text-4xl">
                  6+
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#FDFFFF]/50">
                  Projects
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary md:text-4xl">
                  2x
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#FDFFFF]/50">
                  AWS Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
