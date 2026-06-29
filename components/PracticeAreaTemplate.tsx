"use client";

import { motion } from "framer-motion";

interface ContentSection {
  title: string;
  content: string; // HTML string
}

interface FAQ {
  question: string;
  answer: string;
}

interface PracticeAreaTemplateProps {
  title: string;
  description: string;
  intro: string; // HTML string — may contain <strong> tags
  contentSections: ContentSection[];
  faqs?: FAQ[];
}

export default function PracticeAreaTemplate({
  title,
  description,
  intro,
  contentSections,
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
    <div className="min-h-screen bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Title + Description */}
        <section className="py-6 pt-32 lg:pt-40">
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

        {/* Intro / Sub-line — rendered as HTML to support <strong> */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p
            className="lg:text-lg text-foreground/75 leading-relaxed border-l-4 border-accent pl-6 [&_strong]:text-foreground [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
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
                {section.title}
              </h2>
              <div
                className="leading-relaxed space-y-4 lg:text-lg text-foreground/75 [&_strong]:text-foreground [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
