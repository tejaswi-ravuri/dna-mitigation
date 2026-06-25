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
          <section className="text-foreground/75">
            <h1 className="text-5xl font-bold text-accent mb-6">
              About DNA Mitigation
            </h1>
            <p className="text-lg">
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
            </p>
            <br />
            <em className="font-bold text-white">
              They come to us because they have already seen the precedent.
            </em>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">
              Built Inside Federal Mitigation
            </h2>

            <p className="text-foreground/75 leading-relaxed text-lg">
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
              matters{" "}
              <em className="font-bold text-white">
                where strategic humanization contributed to substantial
                sentencing reductions.
              </em>
              <br />
              <br />
              When Cori took a sabbatical, she entrusted Daron with
              independently managing mitigation video matters for several of the
              nation’s leading federal defense firms.
              <br />
              <br />
              Most mitigation video producers bring filmmaking skills to federal
              cases.{" "}
              <em className="font-bold text-white">
                Daron brought filmmaking experience shaped through years of
                direct federal mitigation practice.
              </em>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">
              We Enter Before Perceptions Harden
            </h2>

            <p className="text-foreground/75 leading-relaxed text-lg">
              Legal defense and human understanding are different disciplines.
              <br />
              <br />
              Our work begins before the Pre-Sentence Investigation Report is
              written, while{" "}
              <em className="font-bold text-white">
                {" "}
                institutional perceptions of the defendant are still forming.
              </em>{" "}
              Our mitigation videos reach probation officers early, shape
              prosecutorial perception of the individual behind the conduct, and
              give judges{" "}
              <em className="font-bold text-white">
                something written submissions alone rarely achieve.
              </em>
              <br />
              <br />
              <em className="font-bold text-white">
                A human being, not simply a file.
              </em>
              <br />
              <br />
              Through a structured mitigation interview process refined across
              more than 30 federal cases, clients often reach levels of candor
              rarely accessed through conventional legal preparation alone.
              <br />
              <br />
              The combination of high stakes, camera presence, and carefully
              developed elicitation techniques creates an environment where
              rehearsed narratives begin to dissolve and deeper human realities
              emerge:{" "}
              <em className="font-bold text-white">
                {" "}
                trauma, shame, psychological burden, unresolved loss,
                accountability, and personal history
              </em>{" "}
              neither counsel nor client fully understood before filming began.
              <br />
              <br />
              The result is not performance. It is
              <em className="font-bold text-white">
                {" "}
                human context revealed with an emotional clarity.
              </em>
              <br />
              <br />
              In many cases, the process itself reinforces
              <em className="font-bold text-white">
                {" "}
                accountability and reflection,
              </em>{" "}
              distinctions directly relevant to § 3553(a) considerations
              involving rehabilitation, deterrence, personal history, family
              impact, and recidivism risk.
              <br />
              <br />
              <em className="font-bold text-white">
                Judges do not respond to performance. They respond to
                authenticity.
              </em>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">
              A Strategic Advantage Counsel Controls
            </h2>

            <p className="text-foreground/75 leading-relaxed text-lg">
              Unlike live testimony, mitigation video cannot be cross-examined.
              <br />
              <br />
              It extends the power of allocution, allowing defendants to
              self-advocate before the court, express remorse, and accept
              responsibility{" "}
              <em className="font-bold text-white">
                {" "}
                without exposing themselves to unnecessary prosecutorial
                exposure.
              </em>
              <br />
              <br />
              For defense counsel,
              <em className="font-bold text-white">
                {" "}
                that distinction matters.
              </em>
              <br />
              <br />
              Defense counsel retains{" "}
              <em className="font-bold text-white">full editorial control </em>
              throughout the process.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">
              The Footage Counsel Almost Rejected
            </h2>

            <p className="text-foreground/75 leading-relaxed text-lg">
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
              one morning, I became convinced{" "}
              <em className="font-bold text-white">
                the court needed to hear directly from him.
              </em>
              <br />
              <br />
              Defense counsel agreed to let us film the interview, though
              skepticism was considerable. As counsel put it:
            </p>

            <blockquote className="border-l-4 border-accent pl-6 italic text-xl text-white my-8">
              “You’re welcome to try, but there’s a 99% chance we never use this
              footage.”
            </blockquote>

            <p className="text-foreground/75 leading-relaxed text-lg">
              Once they reviewed it,{" "}
              <em className="font-bold text-white">
                {" "}
                that calculus changed immediately.
              </em>
              <br />
              <br />
              What emerged was not excuse-making, but{" "}
              <em className="font-bold text-white">
                meaningful human context:{" "}
              </em>
              childhood trauma, emotional hardship, and the personal history
              that shaped his judgment, trust, and decision-making.
              <br />
              <br />
              The defendant spoke with unusual vulnerability about
              <em className="font-bold text-white">
                {" "}
                remorse, accountability, and the devastation caused by his
                actions.
              </em>{" "}
              His self-advocacy became the emotional and moral center of the
              mitigation presentation.
              <br />
              <br />
              <em className="font-bold text-white">
                The government sought a sentence of up to seven years.
              </em>
              <br />
              <img src="/aboutPage1.jpeg" alt="Client chat" className="w-sm" />
              <br />
              Our client ultimately received a{" "}
              <em className="font-bold text-white">
                sentence of one year and one day
              </em>{" "}
              and was released from custody roughly two months later during the
              CARES Act period.
              <br />
              <br />A few months later, Cori sent me an email I will never
              forget:
            </p>

            <blockquote className="border-l-4 border-accent pl-6 italic text-xl text-white my-8">
              “Our client is home.”
            </blockquote>
            <img src="/about2.png" alt="Client chat" className="w-xs" />
            <br />
            <p className="text-foreground/75 leading-relaxed text-lg">
              That case helped shape what has since become central to our
              practice:
              <br />
              <br />
              <em className="font-bold text-white">
                When authentically expressed, a defendant’s own voice can become
                one of the most powerful demonstrations of remorse,
                accountability, and rehabilitation that a court can encounter.
              </em>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-accent mb-6">The Record</h2>

            <p className="text-foreground/75 leading-relaxed text-lg">
              Across more than thirty federal sentencing matters, our work has
              contributed to outcomes substantially below guideline
              expectations, including{" "}
              <em className="font-bold text-white">
                probationary sentences in cases where incarceration was widely
                anticipated.
                <br />
                <br />
                The record is public. The outcomes speak for themselves.
              </em>
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
              { value: "1300+", label: "Testimonial Letters Submitted" },
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
