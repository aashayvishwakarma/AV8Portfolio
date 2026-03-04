"use client"

import { ExternalLink } from "lucide-react"

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
    title: "Kappa Theta Pi Website",
    subtitle: "Website + Internal Portal",
    year: "May 2025 — Present",
    description:
      "Working on a website and internal portal for Kappa Theta Pi to help with basic communication and organization for the group. It will be a general place for members and leaders to access information, events, and connect with each other.",
    tech: ["Next.js", "JavaScript", "Supabase"],
    highlight: "Student Org",
  },
  {
    title: "Vitality",
    subtitle: "Axxess Hackathon 2026 — Hackathon Winner",
    year: "Feb 2026",
    description:
      "Vitality turns symptoms into signals by turning subjective symptom tracking into structured, clinician-ready data using an interactive 3D body map. Patients can log where it hurts and how it feels (severity, timing, notes). It supports voice-based logging, automatically extracts key details like region, severity, bleeding, fever, and onset timing, and includes cycle tracking with a transparent red-flag triage engine to help users recognize trends and monitor flare-ups.",
    tech: [
      "React",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
      "Twilio",
      "Deepgram",
      "Librosa",
    ],
    highlight: "Hackathon Winner",
  },
  {
    title: "Hydra",
    subtitle: "HackUTD: Lost in the Pages",
    year: "Nov 2025",
    description:
      "Hydra makes multi-agent complexity visual: a no-code, drag-and-drop workflow creator where each node becomes an “agent head” with its own reasoning style, memory, and tools. Connect agents in a canvas and deploy the whole system behind an API endpoint. With tool + knowledge integrations (GitHub/Jira/local endpoints) and on-the-fly orchestration, users can prototype and iterate on agent workflows quickly while keeping backend details hidden.",
    tech: [
      "Next.js",
      "React Flow",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Uvicorn",
      "Brev",
      "NVIDIA Nemotron (via MCP)",
    ],
    highlight: "HackUTD",
  },
  {
    title: "OneFace",
    subtitle: "AWS Lambda Hackathon",
    year: "Jun–Jul 2025",
    description:
      "A portal where admins create events or classes and members enroll and get checked in by scanning their face as they walk in. No forms, no hassle—just quick, seamless attendance tracking that works for everyone.",
    tech: [
      "AWS Lambda",
      "Amazon Rekognition",
      "Amazon S3",
      "Amazon DynamoDB",
      "Amazon VPC",
      "Amazon SQS",
      "Amazon API Gateway",
      "React",
      "Node.js",
      "Python",
      "JavaScript",
    ],
    link: "https://github.com/KappaThetaPiUTD/OneFace",
    highlight: "Hackathon Submission",
  },
  {
    title: "Toyota Fuel Economy Analysis",
    subtitle: "HackUTD: Ripple Effect",
    year: "Oct 2024",
    description:
      "Fuel analysis tools can be hard for regular people to use, so we built a platform that puts data from several car datasets into one place so users can explore fuel information more simply and see fuel-usage and performance trends for Toyota vehicles made between 2021 and 2025.",
    tech: ["React Native", "JavaScript", "MongoDB"],
    highlight: "HackUTD",
  },
  {
    title: "ScoreBored",
    subtitle: "ACM Projects [Fall 23]",
    year: "Sep–Dec 2023",
    description:
      "ScoreBored combats the feeling of boredom by creating an interactive “scoreboard” to track your progress over time. Set a goal (like going to the gym 4 times a week), put that into ScoreBored, and see how often you achieve your goal. Practicing a skill (like music) 2 hours a day? ScoreBored handles that as well—so you can tell if you’re on track.",
    tech: [
      "Svelte",
      "SvelteKit",
      "CSS",
      "Tailwind CSS",
      "DaisyUI",
      "Chart.js",
      "Firebase",
      "HTML",
      "TypeScript",
    ],
    link: "https://github.com/ACM-Projects/ScoreBored",
    highlight: "ACM Projects",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="liquid-glass group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
            {project.highlight && (
              <span className="liquid-glass-pill inline-flex px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                {project.highlight}
              </span>
            )}
          </div>
          <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
            {project.subtitle}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.year}
          </p>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background/30 text-primary transition-colors hover:bg-primary/10"
            aria-label={`Open ${project.title}`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="liquid-glass-pill inline-flex px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-primary"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Projects() {
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
          A collection of things I&apos;ve built while learning, collaborating, and figuring it out along the way. Some won awards, most just taught me something new.
        </p>
      </div>

      <div className="px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
