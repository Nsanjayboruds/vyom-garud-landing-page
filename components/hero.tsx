"use client"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      </div>

      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/5 border border-primary/40 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
                Advanced Autonomous UAV Technology
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="text-gradient">Next-Generation</span>
              <span className="block text-foreground">Drone Systems</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Enterprise-grade autonomous drone systems engineered for precision operations, AI-powered autonomy, and
              mission-critical reliability in extreme environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("capabilities")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fadeInUp"
              >
                View Systems
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border border-primary/40 text-foreground rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Request Demo
              </button>
            </div>

            <div className="flex gap-6 pt-8 text-sm">
              <div>
                <div className="text-primary font-bold text-lg">500+</div>
                <div className="text-muted-foreground">Military Units</div>
              </div>
              <div>
                <div className="text-primary font-bold text-lg">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-primary font-bold text-lg">180+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Enhanced 3D drone representation */}
          <div className="relative h-96 md:h-full min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />

            <div className="relative w-64 h-64">
              {/* Scanning effect */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-scan" />

              {/* Drone body with improved visuals */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
                {/* Central processing unit */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-lg border border-primary/50 shadow-lg shadow-primary/30 relative">
                  <div className="absolute inset-1 rounded bg-gradient-to-br from-primary/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-primary-foreground rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Rotor arms */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Top rotor */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />

                  {/* Bottom rotor */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />

                  {/* Left rotor */}
                  <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent rounded-full" />

                  {/* Right rotor */}
                  <div className="absolute top-1/2 left-16 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent rounded-full" />
                </div>

                {/* Glow rings */}
                <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-ring" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
