"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Capabilities from "@/components/capabilities"
import Highlights from "@/components/highlights"
import Clients from "@/components/clients"
import SpecsComparison from "@/components/specs-comparison"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <SpecsComparison />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  )
}
