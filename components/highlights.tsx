"use client"

export default function Highlights() {
  const highlights = [
    {
      number: "99.9%",
      label: "System Uptime",
      description: "Military-grade reliability and redundancy",
    },
    {
      number: "500km",
      label: "Global Range",
      description: "Extended operational radius with satellite link",
    },
    {
      number: "45min",
      label: "Mission Duration",
      description: "Extended flight time with optimized power systems",
    },
  ]

  return (
    <section id="highlights" className="w-full py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose VyomGarud</h2>
          <p className="text-lg text-muted-foreground">Performance metrics that speak for themselves</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-border bg-background/50 text-center hover:border-primary/50 transition-all hover:bg-background/80"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{highlight.number}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{highlight.label}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Trusted by global defense and operations teams
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {["GovernmentAgency", "DefensePartner", "TacticalUnit", "OperationsTeam"].map((org, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-background/50 border border-border rounded-lg text-muted-foreground text-sm font-medium"
              >
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
