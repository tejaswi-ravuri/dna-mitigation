"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ContentSection {
  heading: string;
  content: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface PracticeAreaTemplateProps {
  title: string;
  description: string;
  intro: string;
  contentSections: ContentSection[];
  faqs: FAQ[];
}

export default function PracticeAreaTemplate({
  title,
  description,
  intro,
  contentSections,
  // faqs,
}: PracticeAreaTemplateProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Hero Section */}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 lg:pt-20 ">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-accent mb-4">
                {title}
              </h1>
              <p className="text-lg text-accent">{description}</p>
            </motion.div>
          </div>
        </section>
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground/80 leading-relaxed border-l-4 border-accent pl-6">
            {intro}
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          className="space-y-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contentSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
                THE DNA MITIGATION METHODOLOGY
              </h2>
              <div className="text-foreground/80 leading-relaxed space-y-4">
                {section.content.split("\n").map((para, pidx) => (
                  <p key={pidx}>{para}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        {/* <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-accent/30 rounded-lg overflow-hidden hover:border-accent/60 transition-all"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between bg-primary/40 hover:bg-primary/60 transition-colors"
                >
                  <h3 className="font-semibold text-foreground text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-accent flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-primary/20 border-t border-accent/30">
                    <p className="text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA */}
        {/* <motion.div
          className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/40 rounded-xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Discuss Your Case?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Early mitigation strategy makes a difference. Schedule a
            consultation to discuss how we can help.
          </p>
          <Link
            href="/schedule-consultation"
            className="inline-block px-8 py-3 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-all font-semibold"
          >
            Book Consultation
          </Link>
        </motion.div> */}
      </div>
    </div>
  );
}
