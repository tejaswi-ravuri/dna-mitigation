"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { caseStudies } from "@/lib/data/caseStudies";

function RichText({ html, className }: { html: string; className?: string }) {
  const paragraphs = html.split("\n\n");
  if (paragraphs.length > 1) {
    return (
      <div className={`space-y-3 ${className ?? ""}`}>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-foreground/75 leading-relaxed text-lg [&_strong]:text-foreground [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>
    );
  }
  return (
    <p
      className={`text-foreground/75 leading-relaxed text-lg [&_strong]:text-foreground [&_strong]:font-semibold ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />

      {/* ── Hero ── */}
      <section className="px-4 sm:px-6 lg:px-8 lg:pt-40">
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

            <p className="font-semibold text-lg text-foreground/75">
              Sentencing · Compassionate Release · Post-Conviction Advocacy
            </p>

            <p className="text-foreground/75 mt-8 max-w-4xl leading-relaxed">
              These presentations were developed to help courts see{" "}
              <strong className="text-foreground font-semibold">
                the human being before sentencing was reduced to guideline
                calculations alone.
              </strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {caseStudies.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="my-10 border-b border-accent/20 pb-10 last:border-none"
            >
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6 leading-tight">
                {String(item.id).padStart(2, "0")}.) {item.title}
              </h2>

              {/* Meta line */}
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
                {item.meta.client && (
                  <>
                    <span>|</span>
                    <span>Client: {item.meta.client}</span>
                  </>
                )}
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
                <RichText html={item.problem} />
              </div>

              {/* Strategy */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  MITIGATION STRATEGY
                </h3>
                <RichText html={item.strategy} />
              </div>

              {/* Judicial Impact */}
              {item.quote && (
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    JUDICIAL IMPACT
                  </h3>
                  <blockquote className="border-l-4 border-accent pl-6 italic text-xl text-foreground/75 leading-relaxed">
                    "{item.quote}" —{" "}
                    <strong className="not-italic text-foreground font-semibold">
                      {item.quoteName}
                    </strong>
                  </blockquote>
                </div>
              )}

              {/* Outcome */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  OUTCOME
                </h3>
                <RichText html={item.outcome} />
              </div>

              {/* Coverage */}
              {item.coverage && (
                <div className="mb-10">
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

              {/* Footer note (case 7) */}
              {item.footer && (
                <p className="text-foreground/60 leading-relaxed text-base italic mt-4">
                  {item.footer}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 md:py-20 bg-card border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "30+", label: "Federal Mitigation Matters" },
              { value: "180+", label: "Years Guideline Exposure Avoided" },
              { value: "1300+", label: "Testimonial Letters Submitted" },
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
                <p className="text-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
