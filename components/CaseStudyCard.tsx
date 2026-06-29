"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  challenge: string;
  outcome: string;
  metrics?: {
    reduction: string;
    finalSentence: string;
    guidelineRange: string;
  };
}

export default function CaseStudyCard({
  title,
  challenge,
  outcome,
  metrics,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-primary/50 to-primary/30 border border-accent/40 rounded-xl p-8 hover:border-accent/80 transition-all duration-300 flex flex-col"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-accent mb-4">{title}</h3>

      {/* Challenge */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-2">
          Challenge
        </p>
        <p className="text-foreground leading-relaxed">{challenge}</p>
      </div>

      {/* Outcome */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-2">
          Outcome
        </p>
        <p className="leading-relaxed text-accent font-semibold">{outcome}</p>
      </div>

      {/* Metrics */}
      {metrics && (
        <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-accent/20">
          <div>
            <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
              Reduction
            </p>
            <p className="text-lg font-bold text-accent">{metrics.reduction}</p>
          </div>
          <div>
            <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
              Final Sentence
            </p>
            <p className="text-lg font-bold text-foreground/90">
              {metrics.finalSentence}
            </p>
          </div>
          <div>
            <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">
              Guideline
            </p>
            <p className="text-xs font-semibold text-foreground/70">
              {metrics.guidelineRange}
            </p>
          </div>
        </div>
      )}

      {/* Link */}
      <Link
        href="/case-results"
        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-semibold mt-auto"
      >
        View Case Studies <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
