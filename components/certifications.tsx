import { ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "Jul 2025",
    expires: "Jul 2028",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "Jan 2025",
    expires: "Jan 2028",
  },
]

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Swift", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Svelte", "SvelteKit", "Node.js"],
  },
  {
    category: "Cloud & Data",
    items: [
      "AWS Lambda",
      "S3",
      "DynamoDB",
      "Rekognition",
      "Azure AI Search",
      "Azure Functions",
      "Supabase",
      "Firebase",
    ],
  },
  {
    category: "Concepts",
    items: [
      "RAG Systems",
      "Cloud Architecture",
      "Data Engineering",
      "Serverless",
      "CI/CD",
      "Agile",
    ],
  },
]

export function Certifications() {
  return (
    <section className="bg-[#2B4230] py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Credentials & Skills
          </span>
        </div>

        <h2 className="mb-16 font-serif text-4xl font-bold uppercase tracking-tight text-[#FDFFFF] md:text-6xl">
          The <span className="text-primary">Arsenal</span>
        </h2>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Certifications */}
          <div>
            <h3 className="mb-8 text-xs uppercase tracking-[0.3em] text-[#FDFFFF]/50">
              Certifications
            </h3>
            <div className="flex flex-col gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group flex items-start justify-between rounded-lg border border-[#FDFFFF]/10 p-6 transition-colors hover:border-primary/30"
                >
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#FDFFFF] md:text-xl">
                      {cert.name}
                    </h4>
                    <p className="mt-1 text-sm text-[#FDFFFF]/50">{cert.issuer}</p>
                    <p className="mt-2 text-xs text-primary">
                      Issued {cert.issued} — Expires {cert.expires}
                    </p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="shrink-0 text-[#FDFFFF]/30 transition-colors group-hover:text-primary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="mb-8 text-xs uppercase tracking-[0.3em] text-[#FDFFFF]/50">
              Technical Skills
            </h3>
            <div className="flex flex-col gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <p className="mb-3 text-sm font-medium text-primary">
                    {skillGroup.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#FDFFFF]/10 px-3 py-1.5 text-xs text-[#FDFFFF]/70 transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
