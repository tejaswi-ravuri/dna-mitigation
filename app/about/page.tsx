"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />

      {/* Content */}
      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8  py-16 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <section className="">
            <h1 className="text-5xl font-bold text-accent mb-6">
              About DNA Mitigation
            </h1>
            <p className="text-lg text-foreground/80">
              We help judges, prosecutors, and probation officers understand{" "}
              <em className="font-bold text-white">
                the human being behind the conduct, not simply the worst moment
                of their life.
              </em>
              <br />
              Most clients come to DNA Mitigation through defense attorneys who
              have already seen our work shape outcomes in prior federal cases.
              Others arrive after researching similarly situated defendants and
              discovering{" "}
              <em className="font-bold text-white">
                the role mitigation videos played in those outcomes.
              </em>
              <br />
              <em className="font-bold text-white">
                They come to us because they have already seen the precedent.
              </em>
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">
              Built Inside Federal Mitigation
            </h2>

            <p className="text-foreground/80 leading-relaxed text-lg">
              DNA Mitigation was founded by Daron L. Keet, who spent years
              directing national television campaigns for brands including
              Google, Subaru, Toyota, and American Airlines before bringing
              those visual communication disciplines into federal mitigation
              practice.
              <br />
              <br />
              For five years, Daron worked alongside Cori Chertoff, one of the
              nation’s most respected mitigation specialists, collaborating with
              defense teams, forensic psychologists, and federal counsel on
              matters where strategic humanization contributed to substantial
              sentencing reductions.
              <br />
              <br />
              When Cori took a sabbatical, she entrusted Daron with
              independently managing mitigation video matters for many of the
              nation’s leading federal defense firms.
              <br />
              <br />
              Most mitigation video producers bring filmmaking skills to federal
              cases. Daron brought filmmaking experience shaped through years of
              direct federal mitigation practice.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">
              We Enter Before Perceptions Harden
            </h2>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Legal defense and human understanding are different disciplines.
              <br />
              <br />
              Our work begins before the Presentence Investigation Report is
              written, while institutional perceptions of the defendant are
              still forming. Our mitigation videos reach probation officers
              early, shape prosecutorial perception of the individual behind the
              conduct, and give judges something written submissions alone
              rarely achieve.
              <br />
              <br />
              A human being, not simply a file.
              <br />
              <br />
              Through a structured mitigation interview process refined across
              more than 30-federal cases, clients often reach levels of candor
              rarely accessed through conventional legal preparation alone.
              <br />
              <br />
              The combination of high stakes, camera presence, and carefully
              developed elicitation techniques creates an environment where
              rehearsed narratives begin to dissolve and deeper human realities
              emerge: trauma, shame, psychological burden, unresolved loss,
              accountability, and personal history neither counsel nor client
              fully understood before filming began.
              <br />
              <br />
              The result is not performance. It is human context revealed with
              an emotional clarity written submissions rarely achieve.
              <br />
              <br />
              In many cases, the process itself reinforces accountability and
              reflection, distinctions directly relevant to § 3553(a)
              considerations involving rehabilitation, deterrence, personal
              history, family impact, and recidivism risk.
              <br />
              <br />
              Judges do not respond to performance. They respond to
              authenticity.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">
              A Strategic Advantage Counsel Controls
            </h2>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Unlike live testimony, mitigation video cannot be cross-examined.
              <br />
              <br />
              It extends the power of allocution, allowing defendants to
              self-advocate before the court, express remorse, and accept
              responsibility without exposing themselves to unnecessary
              prosecutorial exposure.
              <br />
              <br />
              For defense counsel, that distinction matters.
              <br />
              <br />
              Defense counsel retains full editorial control throughout the
              process.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">
              The Footage Counsel Almost Rejected
            </h2>

            <p className="text-foreground/80 leading-relaxed text-lg">
              In the early years of federal sentencing mitigation, presentations
              traditionally relied on testimony from family members, clergy,
              psychologists, and community figures. A defendant’s own voice was
              widely considered too risky, potentially manipulative,
              strategically dangerous, and capable of backfiring before the
              court.
              <br />
              <br />
              While working alongside Cori Chertoff, I spent significant time
              with one particular defendant while filming interviews with family
              and friends in his home. After hearing his story over breakfast
              one morning, I became convinced the court needed to hear directly
              from him.
              <br />
              <br />
              Defense counsel agreed to let us film the interview, though
              skepticism was considerable. As counsel put it:
            </p>

            <blockquote className="border-l-4 border-accent pl-6 italic text-xl text-white my-8">
              “You’re welcome to try, but there’s a 99% chance we never use this
              footage.”
            </blockquote>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Once they reviewed it, that calculus changed immediately.
              <br />
              <br />
              What emerged was not excuse-making, but meaningful human context:
              childhood trauma, emotional hardship, and the personal history
              that shaped his judgment, trust, and decision-making.
              <br />
              <br />
              The defendant spoke with unusual vulnerability about remorse,
              accountability, and the devastation caused by his actions. His
              self-advocacy became the emotional and moral center of the
              mitigation presentation.
              <br />
              <br />
              The government sought a sentence of up to seven years.
              <br />
              <br />
              Our client ultimately received a sentence of one year and one day
              and was released from custody roughly two months later during the
              CARES Act period.
              <br />
              <br />A few months later, Cori sent me an email I will never
              forget:
            </p>

            <blockquote className="border-l-4 border-accent pl-6 italic text-xl text-white my-8">
              “Our client is home.”
            </blockquote>

            <p className="text-foreground/80 leading-relaxed text-lg">
              That case helped shape what has since become central to our
              practice:
              <br />
              <br />
              When authentically expressed, a defendant’s own voice can become
              one of the most powerful demonstrations of remorse,
              accountability, and rehabilitation that a court can encounter.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">The Record</h2>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Across more than thirty federal sentencing matters, our work has
              contributed to outcomes substantially below guideline
              expectations, including probationary sentences in cases where
              incarceration was widely anticipated.
              <br />
              <br />
              The record is public. The outcomes speak for themselves.
            </p>
          </section>
        </motion.div>
      </div>

      <section className="py-16 md:py-20 bg-card border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "30+", label: "Federal Mitigation Matters" },
              { value: "180+", label: "Years Guideline Exposure Avoided" },
              { value: "344+", label: "Testimonial Letters Submitted" },
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
                <p className="text-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
