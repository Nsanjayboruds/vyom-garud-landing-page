"use client"

export default function SpecsComparison() {
  const specs = [
    { label: "Max Flight Time", value: "8+ Hours", icon: "⏱️" },
    { label: "Max Range", value: "150+ km", icon: "📍" },
    { label: "Payload Capacity", value: "50 kg", icon: "📦" },
    { label: "Wind Resistance", value: "70+ kmh", icon: "💨" },
    { label: "Operating Altitude", value: "7,000 m", icon: "📈" },
    { label: "Precision Accuracy", value: "±5 cm", icon: "🎯" },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Advanced Specifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Military-grade performance metrics designed for mission-critical operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl border border-border glass hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform">{spec.icon}</div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all" />
              </div>
              <div className="text-muted-foreground text-sm mb-2">{spec.label}</div>
              <div className="text-2xl font-bold text-foreground">{spec.value}</div>

              <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary/50 w-4/5 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
