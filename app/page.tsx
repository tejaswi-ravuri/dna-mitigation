"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpandableContentBlock from "@/components/ExpandableContentBlock";
import { motion } from "framer-motion";

export default function HomePage() {
  const homeBlocks = [
    {
      id: "mitigation-videos",
      title: "Mitigation Videos",
      preview: `Letters and sentencing memoranda can describe remorse.
A mitigation video allows the court to see and feel the human being behind the offense conduct.

Our work is built around one objective: shaping institutional perception before the PSR, prosecutorial narrative, and sentencing posture become fixed.`,
      link: "How Early Mitigation Videos Shape the PSR →",
    },

    {
      id: "testimonial-letters",
      title: "Testimonial Letters",
      preview: `Testimonial letters designed to reinforce credibility, accountability, restitution efforts, family responsibility, and the broader human context courts evaluate under § 3553(a).`,
      link: "How Judges Actually Read Testimonial Letters →",
    },

    {
      id: "pre-psr-documentation",
      title: "Pre-PSR Documentation",
      preview: `Pre-PSR documentation strategically curated to substantiate rehabilitation, accountability, restitution efforts, and meaningful corrective action before probation recommendations solidify under § 3553(a).`,
      link: "How Documentation Shapes the PSR →",
    },

    {
      id: "3553-focused",
      title: "§ 3553(a) Focused",
      preview: `Mitigation built around the factors federal judges are required to weigh under 18 U.S.C. § 3553(a), including accountability, rehabilitation, deterrence, restitution, personal history, future risk, and the need for a sentence sufficient, but not greater than necessary.`,
      link: "How § 3553(a) Shapes Sentencing →",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative min-h-[95vh] flex items-center pt-32 pb-48 md:pt-40 md:pb-52 overflow-hidden">
        <div className="absolute top-0 right-0 w-[62%] h-full">
          <Image
            src="/court-steps.png"
            alt="Federal Courthouse Steps"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Horizontal fade — image bleeds left into solid background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--background) 0%, var(--background) 15%, transparent 55%)",
            }}
          />
        </div>

        {/* Bottom fade — cinematic bleed into cards section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, color-mix(in srgb, var(--background) 60%, transparent) 60%, transparent 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative w-full" style={{ zIndex: 3 }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                Mitigation Videos Built Early,
                <br /> <em className="text-gold-metallic">Before the PSR</em>
                <br /> Defines Your Client
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                Pre-PSR video advocacy designed to shape how{" "}
                <span className="text-gold-metallic font-bold">
                  probation, prosecutors, and the judge
                </span>{" "}
                understand your client before sentencing narratives harden.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  href="/schedule-consultation"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gold-metallic text-primary rounded-lg hover:bg-accent/90 transition-all font-semibold"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExpandableContentBlock blocks={homeBlocks} />
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-card border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "30+", label: "Federal Mitigation Matters" },
              { value: "180+", label: "Years Guideline Exposure Avoided" },
              { value: "344+", label: "Testimonial Letters Submitted" },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={i === 2 ? "col-span-2 md:col-span-1" : ""}
              >
                <div
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <p className="text-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Shape Your Client&apos;s Narrative?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Schedule a confidential consultation to discuss how early
              mitigation strategy can impact sentencing outcomes.
            </p>
            <Link
              href="/schedule-consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-metallic text-primary rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
