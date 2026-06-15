"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-foreground/75 antialiased">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/payonlineBg.jpeg')" }}
        />

        {/* Overlay: dark left vignette + bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.10) 100%), linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.90) 80%, #0a0a0a 100%)",
          }}
        />

        {/* Hero content — left column */}
        <div className="relative z-10 flex flex-col justify-center flex-1 px-8 lg:px-16 pb-24 max-w-2xl">
          <motion.h1
            className="text-6xl lg:text-7xl font-bold text-[#c9a84c] mb-5 leading-tight"
            style={{ fontVariant: "small-caps", letterSpacing: "0.02em" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Service Fees
          </motion.h1>

          <motion.div
            className="w-12 h-0.5 bg-[#c9a84c] mb-6"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          <motion.p
            className="text-base font-light leading-relaxed mb-3 max-w-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Following your consultation, we recommend the scope most appropriate
            for your case and provide a flat-fee proposal.
          </motion.p>

          <motion.p
            className="text-[#c9a84c] font-semibold text-sm tracking-wide mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            No hourly billing. No hidden fees. No surprises.
          </motion.p>

          {/* <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-[#b8963e] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule Consultation
            </a>
            <p className="text-[10px] tracking-widest text-gray-400 uppercase self-center">
              🔒 Confidential. Secure. Strategic.
            </p>
          </motion.div> */}
        </div>

        {/* Mitigation Video card — anchored to hero bottom-right, overlaps next section */}
        <motion.div
          className="absolute bottom-1/3 right-8 lg:left-4/12 w-full max-w-lg translate-y-1/3 z-20"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: "33%" }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="border border-[#c9a84c]/30 rounded-xl bg-[#0a0a0a]/85 backdrop-blur-md shadow-2xl p-7 hover:border-[#c9a84c]/55 transition duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-5 text-[9px] tracking-widest text-[#c9a84c] font-bold uppercase">
              Primary Service
            </div>
            <span className="text-[9px] tracking-widest text-gray-500 uppercase font-semibold block mb-2">
              Our Core Offering
            </span>
            <h2 className="text-[#c9a84c] text-xl font-semibold tracking-wide border-b border-gray-700 pb-4 mb-4">
              Mitigation Video Production
            </h2>
            <p className="leading-relaxed text-sm mb-3">
              Letters describe remorse. A mitigation video lets the court see
              it.
            </p>
            <p className="leading-relaxed text-sm mb-3">
              We get there before the PSR, before the narrative sets. Across 30+
              federal indictments, we've built records of remorse,
              accountability, and character that paper alone can't carry.
            </p>
            <p className="leading-relaxed text-sm mb-4">
              Where it matters, we surface what shaped your client long before
              the offense.
            </p>
            <p className="font-semibold text-sm">
              The court sees a person. Not a file.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── SERVICES OVERVIEW + GETTING STARTED ── */}
      {/* Spacer to account for the overlapping card */}

      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-7">
          {/* Services list */}
          <div className="border border-gray-800/70 rounded-xl p-8 bg-[#111111]/60 flex flex-col gap-4">
            <h3 className="text-[#c9a84c] text-xs tracking-widest uppercase font-bold mb-1">
              Depending on the matter
            </h3>
            <p className="leading-relaxed text-sm">
              We may suggest one or more of the following:
            </p>
            <ul className="space-y-3">
              {[
                "Mitigation Video Production",
                "Character Testimonial Letter Procurement",
                "Allocution Statement Coaching",
                "Jury Perception Analysis",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#c9a84c] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-sm pt-2 border-t border-gray-800 text-gray-400">
              Services can be engaged individually or combined as part of a
              broader mitigation strategy.
            </p>
          </div>

          {/* Getting Started */}
          <div className="border border-[#c9a84c]/20 rounded-xl p-8 bg-[#0d0d0d] flex flex-col gap-5">
            <h3 className="text-[#c9a84c] text-xs tracking-widest uppercase font-bold">
              Getting Started
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[#c9a84c] font-semibold text-sm mb-1">
                  Flat-Fee Proposals
                </p>
                <p className="text-sm leading-relaxed text-gray-400">
                  No hourly billing. No hidden fees. Every scope is
                  custom-designed following consultation.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-[#c9a84c] font-semibold text-sm mb-1">
                  50% Deposit to Begin
                </p>
                <p className="text-sm leading-relaxed text-gray-400">
                  A deposit locks in your engagement and gets things moving
                  immediately.
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-[#c9a84c] font-semibold text-sm mb-1">
                  Video Project Balance
                </p>
                <p className="text-sm leading-relaxed text-gray-400">
                  Remaining balance is due after filming and before editing
                  begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECONDARY SERVICE CARDS ── */}
      <section className="max-w-5xl mx-auto px-6 pb-8 flex flex-col gap-7">
        {/* Character Testimonial Letters */}
        <div className="border border-gray-800/70 rounded-xl p-8 bg-[#111111]/60 hover:border-gray-700 transition duration-300 flex flex-col gap-4">
          <h3 className="text-[#c9a84c] font-semibold text-xl tracking-wide border-b border-gray-800 pb-3">
            Character Testimonial Letters
          </h3>
          <p className="leading-relaxed">
            Letters that reinforce credibility, accountability, family
            responsibility, and the human context courts weigh under
            §&nbsp;3553(a).
          </p>
          <p className="leading-relaxed">
            Most fail for the same reason: they try too hard.
          </p>
          <p className="leading-relaxed">
            Judges and probation officers have read hundreds of them, too many
            full of exaggeration, repetitive praise, and emotional overreach.
            That noise doesn't help. It quietly costs credibility.
          </p>
          <p className="leading-relaxed">
            The letters that land don't argue sentencing. They reveal human
            character. Our approach is built on federal sentencing experience
            and post-case attorney debriefs. We know what courts respond to, and
            more importantly what they tune out.
          </p>
        </div>

        {/* Allocution Statement Coaching */}
        <div className="border border-gray-800/70 rounded-xl p-8 bg-[#111111]/60 hover:border-gray-700 transition duration-300 flex flex-col gap-4">
          <h3 className="text-[#c9a84c] text-xl font-semibold tracking-wide border-b border-gray-800 pb-3">
            Allocution Statement Coaching
          </h3>
          <p className="leading-relaxed">
            Most defendants arrive at sentencing unprepared to speak. We change
            that.
          </p>
          <p className="leading-relaxed">
            We develop a statement with your client that addresses remorse,
            accountability, and § 3553(a) factors, without creating new
            exposure.
          </p>
          <p className="text-xs tracking-widest text-gray-400 uppercase">
            D. Conn.&nbsp;|&nbsp;
            <a
              href="https://www.nbcconnecticut.com/news/local/men-sentenced-for-involvement-in-hartford-mortgage-fraud-scheme/3187923/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c]/70 hover:text-[#c9a84c] underline underline-offset-2 transition"
            >
              Case No. 3:22-CR-139
            </a>
            &nbsp;|&nbsp;Hon. Omar A. Williams
          </p>
          <p className="leading-relaxed">
            Federal prosecutors alleged a mortgage fraud scheme tied to nearly
            $50 million in multifamily housing loans.
          </p>
          <div className="space-y-1">
            <p>Same judge. Same conspiracy. Same charges.</p>
            <p>One defendant allocuted. The other had us.</p>
          </div>
          <div className="flex gap-6 pt-1">
            <span>
              Co-defendant:{" "}
              <span className="font-semibold text-foreground">62 months</span>
            </span>
            <span className="text-[#c9a84c] font-semibold">
              Our client: Probation
            </span>
          </div>
        </div>

        {/* Jury Perception Analysis */}
        <div className="border border-gray-800/70 rounded-xl p-8 bg-[#111111]/60 hover:border-gray-700 transition duration-300 flex flex-col gap-4">
          <h3 className="text-[#c9a84c] text-xl font-semibold tracking-wide border-b border-gray-800 pb-3">
            Jury Perception Analysis
          </h3>
          <p className="leading-relaxed">
            Would a jury like you? Most attorneys never ask. Most jurors never
            tell.
          </p>
          <p className="leading-relaxed">
            Before you step into that courtroom, find out what a jury may
            already be deciding about you.
          </p>
          <p className="font-semibold">
            The difference between being heard and being believed may be hiding
            in plain sight.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-32 px-4 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <p className="tracking-wide italic text-base">
            Every case is different. Let's talk about yours.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-metallic text-[#0a0a0a] rounded font-semibold text-sm tracking-widest uppercase hover:bg-[#b8963e] transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
