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
                It doesn{"'"}t matter where you start,{" "}
                <span className="text-primary">
                  it{"'"}s how you progress from there.
                </span>
              </span>
            </blockquote>
          </div>

          {/* Right column - Bio */}
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-[#FDFFFF]/80 md:text-lg">
              I{"'"}m Aashay, a senior at UT Dallas pursuing a B.S. in Computer
              Science. I{"'"}m an aspiring software engineer with industry
              experience building Retrieval-Augmented Generation (RAG) systems on
              Azure and engineering data workflows using SQL and Python.
            </p>
            <p className="text-base leading-relaxed text-[#FDFFFF]/80 md:text-lg">
              I{"'"}m passionate about cloud-native development and have built
              multiple full-stack applications leveraging AWS and Azure, with a
              focus on ensuring scalable architecture to solve real-world problems.
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
                  2
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#FDFFFF]/50">
                  AWS Certs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
