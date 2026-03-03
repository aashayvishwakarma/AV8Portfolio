"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#home"
          className="font-serif text-lg font-bold tracking-tight text-[#FDFFFF]"
        >
          AV.
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[#FDFFFF] transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 text-[#FDFFFF] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#172211]/95 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl font-bold uppercase tracking-widest text-[#FDFFFF] transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
