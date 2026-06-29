"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { practiceAreas } from "@/lib/data/practiceAreas";
import { ArrowRight } from "lucide-react";

export default function PracticeAreasPage() {
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
    <main className="min-h-screen bg-primary">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary/95">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-accent mb-4">
              Practice Areas
            </h1>
            <p className="text-lg text-foreground/75">
              Specialized federal sentencing advocacy across all key practice
              areas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-10  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {practiceAreas.map((area) => (
              <motion.div key={area.id} variants={itemVariants}>
                <Link href={`/practice-areas/${area.slug}`}>
                  <div className="h-full bg-primary/40 border-2 border-accent/40 rounded-xl p-8 hover:border-accent/80 hover:bg-primary/60 transition-all duration-300 cursor-pointer group">
                    <h3 className="text-2xl font-bold text-accent mb-3 group-hover:text-accent/80 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {area.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                      Learn More{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
