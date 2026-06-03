"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Block {
  id: string;
  title: string;
  preview: string;
  link: string;
  content: ReactNode;
}

const homeBlocks: Block[] = [
  {
    id: "mitigation-videos",
    title: "Mitigation Videos",
    preview: `Letters and sentencing memoranda can describe remorse.
A mitigation video allows the court to see and feel the human being behind the offense conduct.

Our work is built around one objective: shaping institutional perception before the PSR, prosecutorial narrative, and sentencing posture become fixed.`,
    link: "How Early Mitigation Videos Shape the PSR →",
    content: (
      <>
        <p>
          Built through structured elicitation interviews refined case-by-case
          across more than 30 federal indictments, our process develops credible
          evidence of remorse, accountability, rehabilitation, family
          responsibility, restitution efforts, and personal character the court
          can emotionally understand, not merely read.
        </p>
        <br />
        <p>
          Where relevant, the process also uncovers the developmental,
          psychological, familial, and generational factors that shaped the
          individual long before the offense conduct occurred, allowing
          probation, prosecutors, and the judge to see the individual in full
          context, not solely through the offense conduct.
        </p>
        <br />
        <p>A human being, not a file.</p>
        <br />
        <p>
          Deployed before the PSR is written, our mitigation videos reach
          probation while their understanding of your client is still forming.
          Introduced early, they humanize the defendant before prosecutorial and
          probation narratives harden into recommendation.
        </p>
        <br />
        <p>
          At sentencing, it advances every dimension of § 3553(a), including
          personal history and characteristics, rehabilitation, deterrence,
          restitution, and recidivism risk, in a way written submissions alone
          rarely achieve.
        </p>
        <br />
        <p>
          In post-case debriefs, attorneys consistently tell us the same thing:
          the video changed the outcome.
        </p>

        <p>
          E.D.N.Y. |{" "}
          <a
            href="https://www.govinfo.gov/app/details/USCOURTS-nyed-1_20-cr-00272"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:opacity-80 transition"
          >
            Case No. 20-CR-272
          </a>{" "}
          | Hon. Pamela Chen | Role: Film, Edit
        </p>
        <p>
          Including a $76 million damages award against a major construction
          company.
        </p>

        <p>
          Three co-defendants. Combined Guidelines exposure exceeding 60 years.
        </p>

        <p>
          Each received an individually tailored sentencing mitigation video.
        </p>

        <p>
          Two defendants received 6-month custodial sentences against an
          87-month guideline range. One received probation.
        </p>

        <br />

        <p>Related coverage:</p>

        <p>
          <a
            href="https://eljnlaw.com/news/jaroslaw-wins-stunningly-reduced-sentence-for-navillus-client/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:opacity-80 transition"
          >
            Edelman, Krasin & Jaye LLP Coverage
          </a>
        </p>

        <p>
          <a
            href="https://www.irishexaminer.com/news/munster/arid-41174413.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:opacity-80 transition"
          >
            Irish Examiner Coverage
          </a>
        </p>
      </>
    ),
  },

  {
    id: "testimonial-letters",
    title: "Testimonial Letters",
    preview: `Testimonial letters designed to reinforce credibility, accountability, restitution efforts, family responsibility, and the broader human context courts evaluate under § 3553(a).`,
    link: "How Judges Actually Read Testimonial Letters →",
    content: (
      <>
        <p>
          Most testimonial letters fail for the same reason: they try too hard.
        </p>

        <br />

        <p>
          Judges and probation officers read hundreds of letters filled with
          exaggeration, repetitive praise, sentencing demands, and emotional
          overreach that quietly undermine credibility rather than strengthen
          mitigation.
        </p>

        <br />

        <p>Our process helps counsel avoid that problem.</p>

        <br />

        <p>
          Built through extensive federal sentencing exposure and post-case
          attorney debriefs, our approach is grounded in what consistently
          resonates with courts: specificity, restraint, credibility, and
          authentic human detail.
        </p>

        <br />

        <p>
          The strongest letters do not argue sentencing. They reveal character
          through lived experience, measured observations, and personal truth
          without sounding strategic or performative.
        </p>

        <br />

        <p>
          Where appropriate, our process identifies developmental, familial,
          psychological, or generational factors that help explain the
          defendant’s life trajectory and broader human context while preserving
          personal accountability.
        </p>

        <br />

        <p>
          We carefully coordinate what is best conveyed through letters versus
          mitigation video so the narrative remains cohesive rather than
          repetitive.
        </p>

        <br />

        <p>
          Letters are often most effective for documenting caregiving
          responsibilities, restitution efforts, medical realities, long-term
          character observations, and factual human context.
        </p>

        <br />

        <p>
          Mitigation video more powerfully captures emotional nuance,
          accountability, remorse, rehabilitation, and lived human presence the
          court can both hear and see.
        </p>

        <br />

        <p>Less is often more.</p>

        <br />

        <p>
          While we have handled cases involving 344 testimonial letters that
          contributed to meaningful sentencing reductions, judges rarely
          remember volume. They remember credibility.
        </p>

        <br />

        <p>
          <a
            href="https://eljnlaw.com/news/jaroslaw-wins-stunningly-reduced-sentence-for-navillus-client/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:opacity-80 transition"
          >
            How 344 Mitigation Letters Influenced Sentencing →
          </a>
        </p>
      </>
    ),
  },

  {
    id: "pre-psr-documentation",
    title: "Pre-PSR Documentation",
    preview: `Pre-PSR documentation strategically curated to substantiate rehabilitation, accountability, restitution efforts, and meaningful corrective action before probation recommendations solidify under § 3553(a).`,
    link: "How Documentation Shapes the PSR →",
    content: (
      <>
        <p>
          The right documentation can materially influence how probation and the
          court evaluate credibility, rehabilitation, restitution, and future
          risk before sentencing recommendations are finalized.
        </p>

        <br />

        <p>
          Medical history, treatment records, educational achievements,
          charitable involvement, restitution evidence, community support, and
          documented post-offense conduct often carry the greatest persuasive
          value when presented with clarity, restraint, and strategic relevance.
        </p>

        <br />

        <p>
          Our process carefully coordinates supporting documentation alongside
          mitigation videos and testimonial letters so each element reinforces
          the broader mitigation narrative without unnecessary repetition.
        </p>

        <br />

        <p>
          The result is a more cohesive and credible sentencing presentation
          supported not only by emotion, but by substantiated evidence.
        </p>

        <br />

        <p>
          Precision, organization, and emotional restraint often carry greater
          persuasive value than volume alone.
        </p>
      </>
    ),
  },

  {
    id: "3553-focused",
    title: "§ 3553(a) Focused",
    preview: `Mitigation built around the factors federal judges are required to weigh under 18 U.S.C. § 3553(a), including accountability, rehabilitation, deterrence, restitution, personal history, future risk, and the need for a sentence sufficient, but not greater than necessary.`,
    link: "How § 3553(a) Shapes Sentencing →",
    content: (
      <>
        <p>
          Federal sentencing is not limited to offense conduct alone. Judges are
          required to evaluate the broader context surrounding the defendant,
          including personal history, demonstrated accountability,
          rehabilitative efforts, restitution, post-offense conduct, and the
          likelihood of recidivism.
        </p>

        <br />

        <p>
          Our work aligns mitigation strategy with the sentencing objectives
          underlying § 3553(a): not excuse-making or emotional overreach, but
          credible humanization grounded in accountability, corrective action,
          meaningful reform, and, where relevant, the deeper life circumstances
          that help explain the individual before the court.
        </p>

        <br />

        <p>
          The strongest mitigation does not ask the court to ignore the conduct.
          It demonstrates why the individual before the court should not be
          reduced to the worst decision they made, and why the risk of
          recidivism is materially lower than the offense conduct alone may
          suggest.
        </p>
      </>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ExpandableContentBlock() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="hidden md:block">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            layout
            className={`w-full ${
              selectedIndex !== null ? "lg:w-1/3" : "lg:w-full"
            }`}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            <motion.div
              layout
              className={`grid gap-4 ${
                selectedIndex !== null
                  ? "grid-cols-1"
                  : "grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {homeBlocks.map((block, index) => (
                <motion.button
                  key={block.id}
                  layout
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onClick={() =>
                    setSelectedIndex(selectedIndex === index ? null : index)
                  }
                  className={`min-h-[420px] px-6 py-6 text-left rounded-lg border-2 transition-all duration-300 flex flex-col justify-start items-start ${
                    selectedIndex === index
                      ? "border-accent bg-accent/10 shadow-lg"
                      : "border-accent/30 bg-card/60 hover:border-accent hover:bg-card"
                  }`}
                >
                  <h3
                    className={`font-bold text-2xl transition-colors ${
                      selectedIndex === index
                        ? "text-accent"
                        : "text-foreground"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {block.title}
                  </h3>

                  <p className="leading-7 mt-4 text-foreground/70 whitespace-pre-line">
                    {block.preview}
                  </p>

                  <span
                    className="mt-auto pt-6 text-accent font-medium underline-offset-4 hover:underline transition-all duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {block.link}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedIndex !== null && (
              <motion.div
                key={selectedIndex}
                layout
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.35 }}
                className="w-full lg:w-2/3"
              >
                <div className="border-2 border-accent rounded-lg bg-card p-8 min-h-96 flex flex-col">
                  <motion.div className="flex-1 text-left">
                    <h2
                      className="text-2xl lg:text-3xl font-bold text-accent mb-6"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {homeBlocks[selectedIndex]?.title}
                    </h2>

                    <div className="max-w-none lg:text-base leading-8 text-foreground/90 overflow-y-auto whitespace-pre-line text-left">
                      {homeBlocks[selectedIndex]?.content}
                    </div>
                  </motion.div>

                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="mt-8 px-4 py-2 bg-accent text-primary rounded font-semibold hover:bg-accent/90 transition-colors self-start"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
