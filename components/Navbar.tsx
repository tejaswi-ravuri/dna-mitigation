"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const theme = localStorage.getItem("theme") || "dark";
    setIsDark(theme === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    const root = document.documentElement;
    root.classList.toggle("dark", newTheme === "dark");
    root.classList.toggle("light", newTheme === "light");
  };

  const practiceAreas = [
    { label: "Federal Sentencing Mitigation", slug: "federal-sentencing" },
    { label: "White Collar Criminal Defense", slug: "white-collar" },
    { label: "Catastrophic Personal Injury", slug: "personal-injury" },
    { label: "Workplace Catastrophic Injury", slug: "workplace-injury" },
    { label: "Wrongful Death Litigation", slug: "wrongful-death" },
    { label: "Narrative Mitigation Strategy", slug: "narrative-strategy" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Case Results", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
    { label: "Pay Online", href: "/payment" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-accent/30 shadow-lg"
          : "bg-gradient-to-b from-primary/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {isMounted && (
              <Image
                src="/logo.png"
                alt="DNA Mitigation Logo"
                width={440}
                height={220}
                // className="h-10 w-auto"
                priority
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            {/* {isMounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-accent/30 hover:bg-accent/10 transition-colors text-foreground"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )} */}
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
              href="/case-studies"
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

            <Link
              href="/payment"
              className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium relative group"
            >
              Pay Online
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* {isMounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )} */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-accent/30 bg-primary/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-foreground hover:text-accent hover:bg-primary/50 rounded-lg transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Dropdown */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full text-left text-foreground hover:text-accent transition-colors text-sm font-medium flex items-center justify-between"
                >
                  Practice Areas
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="mt-2 space-y-1 pl-2 border-l border-accent/30">
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/practice-areas/${area.slug}`}
                        className="block px-3 py-2 text-foreground hover:text-accent hover:bg-primary/50 rounded-lg transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {area.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
