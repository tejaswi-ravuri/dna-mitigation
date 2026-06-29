"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Block {
  id: string;
  title: string;
  preview: ReactNode;
  link: string;
  content: ReactNode;
}

const homeBlocks: Block[] = [
  {
    id: "mitigation-videos",
    title: "Mitigation Videos",
    preview: (
      <>
        <span>
          Letters and sentencing memoranda can describe remorse. A mitigation
          video allows the court{" "}
        </span>
        <strong className="text-foreground font-semibold">
          to see and feel the human being behind the offense conduct.
        </strong>
        <br />
        <br />
        <span>Our work is built around one objective: </span>
        <strong className="text-foreground font-semibold">
          shaping institutional perception
        </strong>
        <span>
          {" "}
          before the PSR, prosecutorial narrative, and sentencing posture become
          fixed.
        </span>
      </>
    ),
    link: "How Early Mitigation Videos Shape the PSR →",
    content: (
      <>
        <p>
          Built through structured elicitation interviews refined case-by-case
          across more than 30 federal indictments, our process develops credible
          evidence of{" "}
          <strong className="text-foreground font-semibold">
            remorse, accountability, rehabilitation, family responsibility,
            restitution efforts, and personal character
          </strong>{" "}
          the court can emotionally understand, not merely read.
        </p>
        <br />
        <p>
          Where relevant, the process also uncovers the developmental,
          psychological, familial, and generational factors that shaped the
          individual long before the offense conduct occurred, allowing
          probation, prosecutors, and the judge to see the individual in{" "}
          <strong className="text-foreground font-semibold">
            full context, not solely through the offense conduct.
          </strong>{" "}
        </p>
        <br />
        <p>
          <strong className="text-foreground font-semibold">
            A human being, not a file.
          </strong>
        </p>
        <br />
        <p>
          Deployed before the PSR is written, our mitigation videos reach
          probation while their understanding of your client is still forming.
          Introduced early,{" "}
          <strong className="text-foreground font-semibold">
            they humanize the defendant before prosecutorial and probation
            narratives harden into recommendation.
          </strong>{" "}
        </p>
        <br />
        <p>
          At sentencing, it advances every dimension of § 3553(a), including{" "}
          <strong className="text-foreground font-semibold">
            personal history and characteristics, rehabilitation, deterrence,
            restitution, and recidivism risk
          </strong>
          , in a way written submissions alone rarely achieve.
        </p>
        <br />
        <p>
          In post-case debriefs, attorneys consistently tell us the same thing:{" "}
          <strong className="text-foreground font-semibold">
            the video changed the outcome.
          </strong>
        </p>

        <p>
          <strong className="text-foreground font-semibold">
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
          </strong>
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
          <strong className="text-foreground font-semibold">
            Two defendants received 6-month custodial sentences against an
            87-month guideline range. One received probation.
          </strong>
        </p>

        <br />

        <p>
          <strong className="text-foreground font-semibold">
            Related coverage:
          </strong>
        </p>

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
    preview: (
      <>
        <span>Testimonial letters designed to reinforce </span>
        <strong className="text-foreground font-semibold">
          credibility, accountability, restitution efforts, family
          responsibility, and the broader human context{" "}
        </strong>
        <span>courts evaluate under § 3553(a).</span>
      </>
    ),
    link: "How Judges Actually Read Testimonial Letters →",
    content: (
      <>
        <p>
          Most testimonial letters fail for the same reason:{" "}
          <strong className="text-foreground font-semibold">
            they try too hard.
          </strong>
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
          resonates with courts:{" "}
          <strong className="text-foreground font-semibold">
            specificity, restraint, credibility, and authentic human detail.
          </strong>
          The strongest letters do not argue sentencing. They reveal character
          through lived experience, measured observations, and personal truth
          without sounding strategic or performative.
        </p>

        <br />

        <p>
          Where appropriate, our process identifies developmental, familial,
          psychological, or generational factors that help explain the
          defendant's life trajectory and broader human context while preserving
          personal accountability.
        </p>

        <br />

        <p>
          We carefully coordinate what is best conveyed through letters versus
          mitigation video so the narrative remains cohesive rather than
          repetitive. Letters are often most effective for documenting{" "}
          <strong className="text-foreground font-semibold">
            caregiving responsibilities, restitution efforts, medical realities,
            long-term character observations, and factual human context.
          </strong>{" "}
          Mitigation video more powerfully captures{" "}
          <strong className="text-foreground font-semibold">
            emotional nuance, accountability, remorse, rehabilitation, and lived
            human presence
          </strong>{" "}
          the court can both hear and see.
        </p>

        <br />

        <p>
          <strong className="text-foreground font-semibold">
            Less is often more.
          </strong>
        </p>

        <br />

        <p>
          While we have handled cases involving 344 testimonial letters that
          contributed to meaningful sentencing reductions, judges rarely
          remember volume.
          <strong className="text-foreground font-semibold">
            They remember credibility.
          </strong>
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
    preview: (
      <>
        <span>
          Pre-PSR documentation strategically curated to substantiate{" "}
        </span>
        <strong className="text-foreground font-semibold">
          rehabilitation, accountability, restitution efforts, and meaningful
          corrective action
        </strong>
        <span> before probation recommendations solidify under § 3553(a).</span>
      </>
    ),
    link: "How Documentation Shapes the PSR →",
    content: (
      <>
        <p>
          The right documentation can materially influence how probation and the
          court evaluate{" "}
          <strong className="text-foreground font-semibold">
            credibility, rehabilitation, restitution, and future risk
          </strong>{" "}
          before sentencing recommendations are finalized.
        </p>

        <br />

        <p>
          Medical history, treatment records, educational achievements,
          charitable involvement, restitution evidence, community support, and
          documented post-offense conduct often carry the greatest persuasive
          value when presented with{" "}
          <strong className="text-foreground font-semibold">
            clarity, restraint, and strategic relevance.
          </strong>{" "}
        </p>

        <br />

        <p>
          Our process carefully coordinates supporting documentation alongside
          mitigation videos and testimonial letters so each element reinforces
          the broader mitigation narrative without unnecessary repetition. The
          result is a more cohesive and credible sentencing presentation
          supported not only by emotion, but by{" "}
          <strong className="text-foreground font-semibold">
            substantiated evidence.
          </strong>
        </p>

        <br />

        <p>
          <strong className="text-foreground font-semibold">
            Precision, organization, and emotional restraint
          </strong>{" "}
          often carry greater persuasive value than volume alone.
        </p>
      </>
    ),
  },

  {
    id: "3553-focused",
    title: "§ 3553(a) Focused",
    preview: (
      <>
        <span>
          Mitigation built around the factors federal judges are required to
          weigh under 18 U.S.C. § 3553(a), including{" "}
        </span>
        <strong className="text-foreground font-semibold">
          accountability, rehabilitation, deterrence, restitution, personal
          history, future risk,
        </strong>
        <span>
          {" "}
          and the need for a sentence sufficient, but not greater than
          necessary.
        </span>
      </>
    ),
    link: "How § 3553(a) Shapes Sentencing →",
    content: (
      <>
        <p>
          Federal sentencing is not limited to offense conduct alone. Judges are
          required to evaluate the broader context surrounding the defendant,
          including{" "}
          <strong className="text-foreground font-semibold">
            personal history, demonstrated accountability, rehabilitative
            efforts, restitution, post-offense conduct, and the likelihood of
            recidivism.
          </strong>
        </p>

        <br />

        <p>
          Our work aligns mitigation strategy with the sentencing objectives
          underlying § 3553(a): not excuse-making or emotional overreach, but{" "}
          <strong className="text-foreground font-semibold">
            credible humanization grounded in accountability, corrective action,
            meaningful reform,
          </strong>{" "}
          and, where relevant, the deeper life circumstances that help explain
          the individual before the court.
        </p>

        <br />

        <p>
          The strongest mitigation does not ask the court to ignore the conduct.
          It demonstrates why the individual before the court should not be
          reduced to the worst decision they made, and why{" "}
          <strong className="text-foreground font-semibold">
            the risk of recidivism is materially lower
          </strong>{" "}
          than the offense conduct alone may suggest.
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
      <div className="flex flex-col gap-6">
        {/* Expanded panel — above the cards */}
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full "
            >
              <div className="border-2 border-accent  rounded-lg bg-card p-8 flex flex-col">
                <motion.div className="flex-1 text-left">
                  <h2
                    className="text-2xl lg:text-3xl font-bold text-accent mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {homeBlocks[selectedIndex]?.title}
                  </h2>

                  <div className="max-w-none lg:text-base text-foreground/75 leading-8 text-foreground overflow-y-auto whitespace-pre-line text-left">
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

        {/* Cards row */}
        <motion.div
          layout
          className={`grid gap-4 ${
            selectedIndex !== null
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
        >
          <AnimatePresence mode="popLayout">
            {homeBlocks.map((block, index) => {
              if (selectedIndex !== null && selectedIndex === index)
                return null;
              return (
                <motion.button
                  key={block.id}
                  layout
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.2 },
                  }}
                  onClick={() =>
                    setSelectedIndex(selectedIndex === index ? null : index)
                  }
                  className="min-h-[420px] px-6 py-6 text-left rounded-lg border-2 transition-all duration-300 flex flex-col justify-start items-start border-accent/30 bg-card/60 hover:border-accent hover:bg-card"
                >
                  <h3
                    className="font-bold text-2xl transition-colors text-accent"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {block.title}
                  </h3>

                  <p className="leading-7 mt-4 text-foreground/70">
                    {block.preview}
                  </p>

                  <span
                    className="mt-auto pt-6 text-accent font-medium underline-offset-4 hover:underline transition-all duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {block.link}
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
