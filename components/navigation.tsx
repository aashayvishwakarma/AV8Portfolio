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
    <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="liquid-glass">
        <div className="flex items-center justify-between gap-4 px-6 py-4 md:gap-8 md:px-10">
          <a
            href="#home"
            className="font-serif text-lg font-bold tracking-tight text-[#FDFFFF]"
          >
            AV8
          </a>

          {/* Desktop nav */}
          <div className="hidden ml-auto items-center gap-8 md:flex">
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
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#172211]/90 backdrop-blur-xl md:hidden">
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
