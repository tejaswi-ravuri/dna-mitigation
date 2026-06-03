"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { caseStudies } from "@/lib/data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />

      {/* Hero */}
      <section className=" px-4 sm:px-6 lg:px-8 lg:pt-40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-accent mb-6">
              Case Results
            </h1>

            <p className="text-accent text-xl font-medium mb-3">
              REPRESENTATIVE FEDERAL MITIGATION OUTCOMES
            </p>

            <p className="text-foreground/70 text-lg">
              Sentencing · Compassionate Release · Post-Conviction Advocacy
            </p>

            <p className="text-foreground/80 mt-8 max-w-4xl leading-relaxed">
              These presentations were developed to help courts see the human
              being before sentencing was reduced to guideline calculations
              alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className=" px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {caseStudies.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="my-10 border-b border-accent/20 last:border-none"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6 leading-tight">
                {String(item.id).padStart(2, "0")}.) {item.title}
              </h2>

              <div className="text-sm uppercase tracking-wide text-foreground/60 mb-10 flex flex-wrap gap-2">
                <span>{item.meta.district}</span>
                <span>|</span>

                <a
                  href={item.meta.caseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Case No. {item.meta.caseNo}
                </a>

                {item.meta.judge && (
                  <>
                    <span>|</span>
                    <span>{item.meta.judge}</span>
                  </>
                )}

                <span>|</span>
                <span>Role: {item.meta.role}</span>
              </div>

              {/* Problem */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  THE PROBLEM
                </h3>

                <p className="text-foreground/80 leading-relaxed text-lg">
                  {item.problem}
                </p>
              </div>

              {/* Strategy */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  MITIGATION STRATEGY
                </h3>

                <p className="text-foreground/80 leading-relaxed text-lg">
                  {item.strategy}
                </p>
              </div>

              {/* Judicial Impact */}
              {item.quote && (
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    JUDICIAL IMPACT
                  </h3>

                  <blockquote className="border-l-4 border-accent pl-6 italic text-xl text-white leading-relaxed">
                    "{item.quote}" — Hon. Pamela Chen
                  </blockquote>
                </div>
              )}

              {/* Outcome */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  OUTCOME
                </h3>

                <p className="text-foreground/80 leading-relaxed text-lg">
                  {item.outcome}
                </p>
              </div>

              {/* Coverage */}
              {item.coverage && (
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Related Coverage
                  </h3>

                  <div className="flex flex-col gap-3">
                    {item.coverage.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>

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

      {/* <Footer /> */}
    </main>
  );
}
