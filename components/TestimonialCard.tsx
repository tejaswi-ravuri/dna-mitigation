"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
}

export default function TestimonialCard({
  quote,
  author,
  title,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-primary/40 border border-accent/40 rounded-xl p-8 hover:border-accent/80 transition-all duration-300"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Quotation Mark */}
      <div className="mb-4">
        <Quote size={32} className="text-accent/40" />
      </div>

      {/* Quote */}
      <p className="text-foreground/75 text-lg leading-relaxed mb-6 italic">
        &quot;{quote}&quot;
      </p>

      {/* Author Info */}
      <div className="border-t border-accent/20 pt-4">
        <p className="text-accent font-semibold text-sm">{author}</p>
        <p className="text-foreground/75 text-xs">{title}</p>
      </div>
    </motion.div>
  );
}
