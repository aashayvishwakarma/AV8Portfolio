"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  description: string
  tags: string[]
  type: "work" | "leadership"
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "7-Eleven",
    period: "Jun 2025 - Aug 2025",
    location: "Irving, TX",
    description:
      "Developed an intelligent item search service for master data management software, enabling users to find items using natural language instead of manual filters. Improved efficiency by leveraging Python, Azure AI Search, Azure Functions, and RAG with vector embeddings.",
    tags: ["Python", "Azure AI Search", "Azure Functions", "RAG"],
    type: "work",
  },
  {
    role: "VP of Professional Development",
    company: "Kappa Theta Pi",
    period: "May 2025 - Present",
    location: "Richardson, TX",
    description:
      "Leading initiatives to advance members' career readiness by organizing technical and professional workshops. Building corporate relationships to unlock recruiting pipelines and designing project development initiatives for hands-on experience.",
    tags: ["Leadership", "Mentorship", "Strategy"],
    type: "leadership",
  },
  {
    role: "Co-Director of Education",
    company: "ACM UTD",
    period: "May 2025 - Present",
    location: "Richardson, TX",
    description:
      "Overseeing ACM's semester-long Technical Interview Prep program. Leading a revamp of the original 10-week curriculum to emphasize critical thinking, mentorship, and interactivity with competitive elements to simulate real interview pressure.",
    tags: ["DSA", "Mentorship", "Curriculum Design"],
    type: "leadership",
  },
  {
    role: "Software Developer",
    company: "Kappa Theta Pi",
    period: "Oct 2024 - Sep 2025",
    location: "Richardson, TX",
    description:
      "Developed a member portal using Next.js, Supabase, JavaScript to streamline internal workflows. Engineered the complete user registration flow for a facial recognition attendance portal using AWS Lambda, S3, and Rekognition.",
    tags: ["Next.js", "Supabase", "AWS Lambda", "Rekognition"],
    type: "work",
  },
  {
    role: "Education Officer",
    company: "ACM UTD",
    period: "Jun 2024 - May 2025",
    location: "Richardson, TX",
    description:
      "Taught applied data structures and algorithms in ACM's Technical Interview Prep Program. Mentored groups of 3-4 students each semester, guiding them through whiteboard-style interview problems and hosting mock interviews.",
    tags: ["DSA", "Teaching", "Mock Interviews"],
    type: "leadership",
  },
]

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="group cursor-pointer border-b border-[#2B4230] py-6 transition-colors hover:bg-[#2B4230]/20"
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={(e) => e.key === "Enter" && setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      <div className="flex items-start justify-between px-6 md:px-10">
        <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-center md:gap-8">
          <p className="w-40 shrink-0 text-xs uppercase tracking-widest text-muted-foreground">
            {item.period}
          </p>
          <div className="flex-1">
            <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              {item.role}
            </h3>
            <p className="text-sm text-primary">{item.company} — {item.location}</p>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`grid transition-all duration-300 ${
          isExpanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-2 md:px-10 md:pl-[calc(10rem+2rem+2.5rem)]">
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 px-3 py-1 text-xs uppercase tracking-wider text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="bg-background py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Experience
          </span>
        </div>

        <h2 className="mb-16 font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          The <span className="text-primary">Journey</span>
          <br />
          So Far
        </h2>
      </div>

      {/* Experience list */}
      <div>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} item={exp} />
        ))}
      </div>
    </section>
  )
}
