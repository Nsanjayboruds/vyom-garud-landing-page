"use client"

export default function Capabilities() {
  const capabilities = [
    {
      title: "Autonomous AI Flight", 
      description:
        "Self-adaptive flight algorithms with real-time threat detection, environment analysis, and autonomous decision-making powered by advanced ML models.",
      specs: ["Real-time Processing", "Threat Detection", "Autonomous Navigation"],
    },
    {
      title: "Precision Payload Systems",
      description:
        "Secure payload delivery with millimeter-level accuracy, failsafe mechanisms, and encrypted data transmission for mission-critical operations.",
      specs: ["±5cm Accuracy", "Encrypted Comms", "Auto-Failsafe"],
    },
    {
      title: "Global Multi-Terrain",
      description:
        "Engineered for operation in extreme conditions—desert, arctic, urban, maritime—with adaptive systems for worldwide deployment.",
      specs: ["All-Terrain", "-40°C to +70°C", "IP67 Rating"],
    },
    {
      title: "Enterprise Integration",
      description:
        "Seamless integration with military command systems, advanced telemetry, real-time mission control, and secure data protocols.",
      specs: ["Military Protocols", "C4I Ready", "Live Telemetry"],
    },
  ]

  return (
    <section id="capabilities" className="w-full py-20 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Core Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade UAV systems with cutting-edge autonomy and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl border border-border glass hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {cap.specs.map((spec, sidx) => (
                  <span
                    key={sidx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
