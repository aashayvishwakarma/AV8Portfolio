import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="pt-14 md:pt-16">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
