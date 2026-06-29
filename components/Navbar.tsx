"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const practiceAreas = [
    { label: "Federal Sentencing Mitigation", slug: "federal-sentencing" },
    { label: "White Collar Criminal Defense", slug: "white-collar" },
    { label: "Catastrophic Personal Injury", slug: "personal-injury" },
    { label: "Catastrophic Workplace Injury", slug: "workplace-injury" },
    { label: "Wrongful Death Litigation", slug: "wrongful-death" },
    { label: "Narrative Mitigation Strategy", slug: "narrative-mitigation" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Case Results", href: "/case-results" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md border-b border-accent/30 shadow-lg"
            : "bg-gradient-to-b from-primary/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="DNA Mitigation Logo"
                width={400}
                height={220}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6 items-center">
              <Link
                href="/"
                className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                href="/about"
                className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>

              {/* Practice Areas Dropdown */}
              <div className="relative group">
                <button className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium flex items-center gap-1 relative group/btn">
                  Practice Areas
                  <ChevronDown
                    size={16}
                    className="group-hover/btn:rotate-180 transition-transform"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover/btn:w-full transition-all duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-0 w-56 bg-primary/95 border border-accent/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className="block px-4 py-2.5 text-foreground hover:text-accent hover:bg-accent/10 transition-colors text-sm"
                    >
                      {area.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/case-results"
                className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium relative group"
              >
                Case Results
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                href="/testimonials"
                className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium relative group"
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>

              <Link
                href="/contact"
                className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel — slides in from right */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full sm:w-[420px] z-[70] bg-primary flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top bar inside drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-accent/20">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.png"
              alt="DNA Mitigation Logo"
              width={200}
              height={110}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center border border-accent/30 text-foreground hover:text-accent hover:border-accent transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
          {navLinks.slice(0, 2).map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-white/[0.06] text-foreground/80 hover:text-accent transition-colors duration-200"
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
            >
              <span className="text-[15px] font-medium tracking-wide">
                {link.label}
              </span>
              <span className="text-accent/40 group-hover:text-accent transition-colors text-lg">
                →
              </span>
            </Link>
          ))}

          {/* Practice Areas accordion */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between py-4 text-foreground/80 hover:text-accent transition-colors duration-200"
            >
              <span className="text-[15px] font-medium tracking-wide">
                Practice Areas
              </span>
              <ChevronDown
                size={16}
                className={`text-accent/60 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                dropdownOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-3 pl-3 flex flex-col gap-0.5 border-l border-accent/30 ml-1 mb-2">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/practice-areas/${area.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-2.5 px-3 text-[13px] text-foreground/60 hover:text-accent transition-colors duration-150"
                  >
                    {area.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.slice(2).map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-white/[0.06] text-foreground/80 hover:text-accent transition-colors duration-200"
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
            >
              <span className="text-[15px] font-medium tracking-wide">
                {link.label}
              </span>
              <span className="text-accent/40 group-hover:text-accent transition-colors text-lg">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="px-6 py-8 border-t border-accent/20">
          <Link
            href="/schedule-consultation"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-3.5 bg-gradient-to-br from-[#F4D77A] via-[#C9A84C] to-[#A07D2E] text-[#0A0A0A] text-[11px] font-bold tracking-[2px] uppercase transition-[filter] duration-200 hover:brightness-110"
          >
            Book Consultation
          </Link>
          <p className="text-center text-[11px] text-white/25 mt-4 tracking-wide">
            32-minute strategy session · Complimentary
          </p>
        </div> */}
      </div>
    </>
  );
}
