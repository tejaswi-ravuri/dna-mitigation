'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctas?: Array<{ label: string; href: string; variant?: 'primary' | 'secondary' }>;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-courthouse-6cPHlYBWs1fAnOQj1ErKOmHZ3wKJ72.jpg',
  ctas = [],
  overlay = true,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-foreground/90 mb-8 leading-relaxed text-balance"
            >
              {subtitle}
            </motion.p>

            {ctas.length > 0 && (
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                {ctas.map((cta, index) => (
                  <Link
                    key={index}
                    href={cta.href}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-center sm:text-left ${
                      cta.variant === 'secondary'
                        ? 'border-2 border-accent text-accent hover:bg-accent/10'
                        : 'bg-accent text-primary hover:bg-accent/90'
                    }`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
