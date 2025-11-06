"use client"

import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
              VG
            </div>
            <span className="text-xl font-bold text-foreground">VyomGarud</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className="text-muted-foreground hover:text-foreground transition"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("highlights")}
              className="text-muted-foreground hover:text-foreground transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5">
            <span
              className={`h-0.5 w-full bg-foreground transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span className={`h-0.5 w-full bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-full bg-foreground transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("highlights")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
