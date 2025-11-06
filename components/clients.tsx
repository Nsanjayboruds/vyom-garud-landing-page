"use client"

export default function Clients() {
  const clients = [
    { name: "Defense Ministry", tier: "Government" },
    { name: "Strategic Air Command", tier: "Military" },
    { name: "National Security", tier: "Government" },
    { name: "Tactical Operations", tier: "Military" },
    { name: "Border Security", tier: "Government" },
    { name: "Emergency Response", tier: "Critical Infrastructure" },
  ]

  return (
    <section className="w-full py-16 md:py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wide">
          Trusted by leading organizations worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-border glass hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-all">
                <div className="w-6 h-6 border-2 border-primary rounded group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-foreground">{client.name}</div>
                <div className="text-xs text-muted-foreground">{client.tier}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
