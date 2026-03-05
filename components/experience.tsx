"use client"

import { useRef, useState, useEffect } from "react"
import { Briefcase, Award, Users } from "lucide-react"

interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  description: string
  tags: string[]
  type: "work" | "leadership" | "student_org"
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
    role: "Software Engineer",
    company: "Kappa Theta Pi",
    period: "Oct 2024 - Present",
    location: "Richardson, TX",
    description:
      "Developed a member portal using Next.js, Supabase, JavaScript to streamline internal workflows. Engineered the complete user registration flow for a facial recognition attendance portal using AWS Lambda, S3, and Rekognition.",
    tags: ["Next.js", "Supabase", "AWS Lambda", "Rekognition"],
    type: "student_org",
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
  {
    role: "Software Developer",
    company: "ACM Projects",
    period: "Sep 2023 - Dec 2023",
    location: "Richardson, TX",
    description:
      "Built a habit-tracking web application as part of ACM Projects (Team ScoreBored F23), collaborating in a team of five. Focused on motivating users to break bad habits or build positive ones through an interactive progress board, and implemented the frontend with SvelteKit, Tailwind CSS, DaisyUI, Chart.js, and TypeScript.",
    tags: ["Svelte", "Tailwind CSS", "SvelteKit", "TypeScript", "Chart.js"],
    type: "student_org",
  },
]

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article
      className="liquid-glass flex h-[min(75vh,520px)] w-[min(92vw,420px)] shrink-0 flex-col p-6 pb-10 md:p-8 md:pb-12"
      aria-label={`${item.role} at ${item.company}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary"
          aria-hidden
        >
          {item.type === "work" && <Briefcase className="h-5 w-5" />}
          {item.type === "leadership" && <Award className="h-5 w-5" />}
          {item.type === "student_org" && <Users className="h-5 w-5" />}
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {item.period}
        </span>
      </div>
      <h3 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
        {item.role}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">
        {item.company} <span className="text-muted-foreground">— {item.location}</span>
      </p>
      <p className="mt-4 flex-1 overflow-y-auto text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="liquid-glass-pill inline-flex px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Timeline node dot on the line */}
      <div
        className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_var(--background)]"
        aria-hidden
      />
    </article>
  )
}

const SECTION_SCROLL_HEIGHT = 4 // how many "viewport heights" the section takes to scroll through

// Keep first card fixed for this many viewport heights before horizontal scroll starts (so user can read 7-11)
const DEAD_ZONE_VIEWPORTS = 1

// Lerp factor per frame: lower = smoother but more lag (0.08–0.15 works well on mobile)
const SMOOTH_LERP = 0.12

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const targetProgressRef = useRef(0)
  const smoothProgressRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const computeTargetProgress = () => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const viewportHeight = window.innerHeight
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY
      const scrollZoneStart = sectionTop - viewportHeight
      const scrollZoneEnd = sectionTop + sectionHeight - viewportHeight
      const deadZone = DEAD_ZONE_VIEWPORTS * viewportHeight
      const zoneLength = scrollZoneEnd - scrollZoneStart - deadZone
      if (scrollY <= scrollZoneStart + deadZone) return 0
      if (scrollY >= scrollZoneEnd) return 1
      if (zoneLength <= 0) return 0
      return (scrollY - scrollZoneStart - deadZone) / zoneLength
    }

    const tick = () => {
      const target = targetProgressRef.current
      let smooth = smoothProgressRef.current
      smooth += (target - smooth) * SMOOTH_LERP
      if (Math.abs(target - smooth) < 0.001) smooth = target
      smoothProgressRef.current = smooth

      const viewportWidth = window.innerWidth
      const trackWidth = track.scrollWidth
      const max = Math.max(0, trackWidth - viewportWidth)
      setTranslateX(-smooth * max)

      if (Math.abs(target - smooth) >= 0.001) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
      }
    }

    const onScrollOrResize = () => {
      targetProgressRef.current = computeTargetProgress()
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    smoothProgressRef.current = computeTargetProgress()
    targetProgressRef.current = smoothProgressRef.current
    onScrollOrResize()

    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)
    const ro = new ResizeObserver(onScrollOrResize)
    ro.observe(track)

    return () => {
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      ro.disconnect()
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${SECTION_SCROLL_HEIGHT * 100}vh` }}
      aria-label="Experience timeline"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col px-6 pt-12 md:px-10 md:pt-16">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Experience
            </span>
          </div>
          <h2 className="mb-6 font-serif text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            The <span className="text-primary">Journey</span>
            <br />
            So Far
          </h2>
          <p className="text-sm text-muted-foreground">
            Scroll down to move through the timeline →
          </p>
        </div>

        {/* Timeline track */}
        <div className="absolute bottom-0 left-0 right-0 h-[min(75vh,520px)] pb-8 pt-4 md:pb-12">
          {/* Horizontal timeline line at bottom; cards sit above it */}
          <div
            className="absolute bottom-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent md:bottom-12"
            aria-hidden
          />

          <div
            ref={trackRef}
            className="absolute bottom-8 left-0 top-4 flex items-end gap-6 pb-4 pl-[50vw] pr-[50vw] will-change-transform md:bottom-12 md:gap-10 md:pb-5"
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <ExperienceCard item={exp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
