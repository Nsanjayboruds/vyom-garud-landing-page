"use client"

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About VyomGarud</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              VyomGarud represents the convergence of cutting-edge UAV technology and military-grade reliability. Our
              mission is to deliver autonomous systems that push the boundaries of precision, speed, and operational
              efficiency.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From surveillance to autonomous payload delivery, our drones are engineered for mission-critical
              deployments globally. Built with redundancy, precision control, and AI-assisted flight capabilities,
              VyomGarud systems ensure mission success.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">
                    Reliability backed by military-grade engineering standards
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Innovation through AI and autonomous systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Global support and mission-ready deployment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">VyomGarud</div>
                <p className="text-foreground text-sm">"Sky Eagle" - Taking flight beyond limits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
