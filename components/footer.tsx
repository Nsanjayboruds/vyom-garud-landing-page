"use client"

export default function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
                VG
              </div>
              <span className="text-lg font-bold text-foreground">VyomGarud</span>
            </div>
            <p className="text-sm text-muted-foreground">Military-grade UAV systems for global missions</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Surveillance Systems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Payload Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  AI Control
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-foreground transition">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 VyomGarud. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
