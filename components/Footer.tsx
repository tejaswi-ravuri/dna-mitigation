"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Pages associated with criminal/sentencing work
const CRIMINAL_PAGES = [
  "/",
  "/practice-areas/federal-sentencing",
  "/practice-areas/white-collar",
  "/practice-areas/narrative-mitigation",
];

// Pages associated with civil/injury work
const INJURY_PAGES = [
  "/practice-areas/personal-injury",
  "/practice-areas/workplace-injury",
  "/practice-areas/wrongful-death",
];

// Shared pages that inherit tagline from previous page
const SHARED_PAGES = [
  "/case-studies",
  "/testimonials",
  "/contact",
  "/pay-online",
];

const CRIMINAL_TAGLINE = (
  <>
    Nothing shows the human being behind the conduct like a mitigation video.
    <br /> We make the ones that change sentences.
  </>
);

const INJURY_TAGLINE = (
  <>
    Nothing shows the human being behind the injury like a video.
    <br /> We make the ones that change verdicts.
  </>
);

export default function Footer() {
  const pathname = usePathname();
  const [tagline, setTagline] = useState<React.ReactNode>(CRIMINAL_TAGLINE);

  useEffect(() => {
    const isSharedPage = SHARED_PAGES.some((p) => pathname.startsWith(p));

    if (!isSharedPage) {
      // Not a shared page — determine tagline directly from current path
      if (INJURY_PAGES.some((p) => pathname.startsWith(p))) {
        setTagline(INJURY_TAGLINE);
        sessionStorage.setItem("dna-tagline", "injury");
      } else {
        // Defaults to criminal (home + all criminal practice area pages)
        setTagline(CRIMINAL_TAGLINE);
        sessionStorage.setItem("dna-tagline", "criminal");
      }
    } else {
      // Shared page — read the last stored tagline from sessionStorage
      const stored = sessionStorage.getItem("dna-tagline");
      if (stored === "injury") {
        setTagline(INJURY_TAGLINE);
      } else {
        setTagline(CRIMINAL_TAGLINE);
      }
    }
  }, [pathname]);

  return (
    <footer className="relative bg-primary border-t border-accent/30">
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
                {tagline}
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
                    href="/get-quote"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    Get Quote
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
                    href="tel:+13104302368"
                    className="hover:text-accent transition-colors"
                  >
                    (310) 430-2368
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
