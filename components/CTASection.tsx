'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title,
  description,
  buttonText = 'Schedule Consultation',
  buttonHref = '/schedule-consultation',
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border-y border-accent/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-foreground/70 mb-8">{description}</p>
          <Link
            href={buttonHref}
            className="inline-block px-8 py-3 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-all font-semibold hover:shadow-lg hover:shadow-accent/20"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
