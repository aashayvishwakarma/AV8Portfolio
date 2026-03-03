"use client"

import { useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"

interface Project {
  title: string
  subtitle: string
  year: string
  description: string
  tech: string[]
  link?: string
  highlight?: string
}

const projects: Project[] = [
  {
    title: "OneFace",
    subtitle: "AWS Lambda Hackathon",
    year: "2025",
    description:
      "A portal where admins create events and members get checked in by scanning their face. No forms, no hassle. Quick, seamless attendance tracking powered by serverless architecture.",
    tech: [
      "AWS Lambda",
      "Rekognition",
      "S3",
      "DynamoDB",
      "SQS",
      "API Gateway",
      "React",
      "Python",
    ],
    link: "https://github.com/aashayvishwakarma",
    highlight: "Hackathon Submission",
  },
  {
    title: "KTP Member Portal",
    subtitle: "Internal Platform",
    year: "2025",
    description:
      "A full-stack member portal for Kappa Theta Pi with merchandise sales, event management, calendar-based RSVP, and backend logic for recurring events.",
    tech: ["Next.js", "Supabase", "JavaScript"],
  },
  {
    title: "7-Eleven AI Search",
    subtitle: "Enterprise RAG System",
    year: "2025",
    description:
      "Intelligent item search service for master data management, enabling natural language queries instead of manual filters. Built with vector embeddings and RAG architecture.",
    tech: ["Python", "Azure AI Search", "Azure Functions", "RAG"],
    highlight: "Industry Project",
  },
  {
    title: "Toyota Fuel Economy Analysis",
    subtitle: "Data Visualization",
    year: "2024",
    description:
      "A unified platform aggregating multiple car datasets to visualize fuel usage and performance trends for Toyota vehicles made between 2021 and 2025.",
    tech: ["Python", "Data Analysis"],
  },
  {
    title: "ScoreBored",
    subtitle: "ACM Projects",
    year: "2023",
    description:
      "A habit-tracking web app that creates an interactive scoreboard to track progress over time. Combats boredom with engaging visualizations of goal completion.",
    tech: ["Svelte", "SvelteKit", "TypeScript", "Tailwind", "Chart.js", "Firebase"],
  },
]

function ProjectCard({
  project,
  index,
  isActive,
  onClick,
}: {
  project: Project
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div
      className={`group cursor-pointer border-b border-[#2B4230] transition-all duration-500 ${
        isActive ? "bg-[#2B4230]" : "hover:bg-[#2B4230]/20"
      }`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
    >
      <div className="flex items-center gap-4 px-6 py-6 md:gap-8 md:px-10">
        <span className="font-serif text-3xl font-bold text-primary/30 md:text-5xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3
              className={`font-serif text-xl font-bold uppercase tracking-tight transition-colors md:text-3xl ${
                isActive ? "text-primary" : "text-foreground"
              }`}
            >
              {project.title}
            </h3>
            {project.highlight && (
              <span className="hidden rounded-full bg-primary/20 px-3 py-0.5 text-[10px] uppercase tracking-widest text-primary md:inline-block">
                {project.highlight}
              </span>
            )}
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {project.subtitle} — {project.year}
          </p>
        </div>
        <ArrowRight
          size={20}
          className={`shrink-0 text-primary transition-transform duration-300 ${
            isActive ? "rotate-90" : ""
          }`}
        />
      </div>

      {/* Expanded content */}
      <div
        className={`grid transition-all duration-500 ${
          isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-8 md:px-10 md:pl-[calc(4.5rem+2.5rem)]">
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[#FDFFFF]/70 md:text-base">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-primary/30 bg-[#172211]/50 px-3 py-1 text-xs uppercase tracking-wider text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary transition-opacity hover:opacity-70"
              >
                View Project <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            Projects
          </span>
        </div>

        {/* Split header like Lando's On Track / Off Track */}
        <div className="mb-16 flex flex-col gap-2 md:flex-row md:items-end md:gap-8">
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
            Hall of
          </h2>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-primary md:text-6xl">
            Builds
          </h2>
        </div>

        <p className="mb-12 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
          From hackathon-winning serverless architectures to enterprise RAG systems, 
          each project represents a step forward in solving real-world problems through code.
        </p>
      </div>

      {/* Project List - Helmet Hall of Fame style */}
      <div>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            isActive={activeIndex === i}
            onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}
