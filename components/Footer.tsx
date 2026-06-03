import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-primary border-t border-accent/30">
      {/* Schedule Booking Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          href="/schedule-consultation"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-metallic text-primary rounded-lg hover:bg-accent/90 transition-all duration-200 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105"
        >
          <span>Book Consultation</span>
        </Link>
      </div>

      <div className="pt-12 lg:pt-16 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Firm Info */}
            <div className="col-span-1 md:col-span-2">
              <h3
                className="text-accent font-bold text-lg mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                DNA Mitigation
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                Strategic sentencing advocacy focused on early mitigation
                strategy. We shape Pre-Sentence Investigation Reports through
                comprehensive planning and expert federal sentencing advocacy.
              </p>
              <p className="text-foreground/60 text-xs">
                © {new Date().getFullYear()} DNA Mitigation. All rights
                reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-accent font-semibold mb-4 text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/practice-areas"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    Practice Areas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    Case Results
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/payment"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    Pay Online
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="text-accent font-semibold mb-4 text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm text-foreground/70">
                <div className="flex gap-3 items-start">
                  <Mail
                    size={16}
                    className="mt-0.5 text-accent flex-shrink-0"
                  />
                  <a
                    href="mailto:daron@dnamitigation.com"
                    className="hover:text-accent transition-colors"
                  >
                    daron@dnamitigation.com
                  </a>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone
                    size={16}
                    className="mt-0.5 text-accent flex-shrink-0"
                  />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-accent transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-accent/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/60">
              <p>
                DNA Mitigation - Federal Sentencing Advocacy & Mitigation
                Strategy
              </p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
