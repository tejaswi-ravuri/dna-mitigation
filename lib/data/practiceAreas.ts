export interface ContentSection {
  title: string;
  content: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  intro: string;
  contentSections: ContentSection[];
  faqs: { question: string; answer: string }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "federal-sentencing",
    title: "Federal Sentencing Mitigation",
    description:
      "Strategic Mitigation Videos Built Early, Before the PSR Defines Your Client",
    intro:
      "Pre-PSR video advocacy designed to shape how probation, prosecutors, and the court understand your client before sentencing narratives harden.",
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `Indictments establish allegations. Guideline calculations establish exposure. PSRs establish institutional understanding. None fully establish the human being standing before the court.

Long before sentencing, narratives are already forming through charging documents, loss calculations, PSR interviews, cooperation disputes, and prosecutorial framing designed to reduce human complexity to conduct, numbers, and guideline ranges. Our work intervenes before that understanding solidifies.

Through structured mitigation interviews, DNA Mitigation develops a cohesive human understanding of the individual: personal history, family responsibilities, psychological background, accountability, rehabilitation efforts, restitution, and life beyond the offense conduct.

Client, family, colleague, caregiver, and supporting testimony is documented early, before memory becomes litigation-conditioned or emotionally detached. Expert findings and mitigation evidence are then woven into a focused visual presentation designed to reach probation while its understanding of the defendant is still forming.

The court that sees a human being evaluates sentencing differently than the court reviewing a file. That is why timing matters.

At sentencing, the work strengthens the human dimension of § 3553(a) in ways written submissions alone rarely achieve.

At its core, the methodology exists for one purpose:

To ensure the individual is understood as a human being before they are reduced to guideline calculations and offense conduct.`,
      },
    ],
    faqs: [],
  },

  {
    slug: "white-collar",
    title: "White Collar Criminal Defense",
    description:
      "Strategic Mitigation Videos Built Early, Before the PSR Defines Your Client",
    intro:
      "Pre-PSR video advocacy designed to shape how probation, prosecutors, and the judge understand your client before sentencing narratives harden.",
    contentSections: [
      {
        title:
          "Human Narrative Built Early, Before the Government Defines the Story",
        content: `Pre-PSR mitigation videos, testimonial development, and expert-integrated narrative presentation designed to shape how probation, prosecutors, and the court understand the individual before sentencing narratives and guideline positions harden.`,
      },
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `Indictments establish allegations. Financial records establish transactions. Guideline calculations establish exposure. None fully establish the human being standing before the court.

Long before sentencing, narratives are already forming through charging documents, loss calculations, PSR interviews, cooperation disputes, and prosecutorial framing designed to reduce human complexity to conduct, numbers, and guideline ranges. Our work intervenes before that understanding solidifies.

Through structured mitigation interviews, DNA Mitigation develops a cohesive human understanding of the individual: personal history, family responsibilities, psychological background, accountability, rehabilitation efforts, restitution, and life beyond the offense conduct.

Client, family, colleague, caregiver, and supporting testimony is documented early, before memory becomes litigation-conditioned or emotionally detached. Expert findings and mitigation evidence are then woven into a focused visual presentation designed to reach probation while its understanding of the defendant is still forming.

The court that sees a human being evaluates sentencing differently than the court reviewing a file. That is why timing matters.

At sentencing, the work strengthens the human dimension of § 3553(a) in ways written submissions alone rarely achieve.

At its core, the methodology exists for one purpose:

To ensure the individual is understood as a human being before they are reduced to guideline calculations and offense conduct.`,
      },
    ],
    faqs: [],
  },

  {
    slug: "personal-injury",
    title: "Catastrophic Personal Injury",
    description:
      "Your Client's Human Story Built Early, Before the Defense Defines the Damages",
    intro:
      "Settlement mitigation videos, testimonial interviews, and expert-integrated presentations that shape how insurers, mediators, and juries understand the lived reality of catastrophic injury before litigation positions harden.",
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `Medical records document injury. They rarely communicate human loss.

Long before mediation or trial, claim value is already being shaped through reserve evaluations, IME reports, damages models, and defense narratives that reduce catastrophic injury to numbers on paper. Our work intervenes before that perception solidifies.

Through testimonial-driven mitigation interviews and expert-integrated narrative presentation, we build a clear human understanding of the injury: physical limitations, future dependency, emotional trauma, vocational loss, family burden, and daily realities no report fully captures.

Client, caregiver, and family testimony is documented early, before the impact becomes medically filtered, litigation-conditioned, or emotionally detached. The result is testimony that feels immediate, credible, and deeply human.

Life care plans, neuropsychological findings, vocational assessments, trauma evaluations, medical imaging, and expert opinions are woven into a settlement-focused visual presentation designed to help insurers, mediators, and juries fully understand the long-term human consequences behind the claim.

The adjuster who sees a human being evaluates exposure differently than the adjuster reviewing a file. That is why timing matters.

Delivered before reserve positions solidify. Before defense IMEs shape perception. Before mediation narratives become fixed.

At mediation, it increases the emotional and economic weight of catastrophic damages.

At trial, it gives jurors a human story that remains present long after expert testimony ends.`,
      },
    ],
    faqs: [],
  },

  {
    slug: "workplace-injury",
    title: "Catastrophic Workers' Injury",
    description:
      "Your Client's Human Story Built Early, Before the Defense Defines the Damages",
    intro:
      "Settlement documentaries, testimonial interviews, and expert documentation that shape how insurers, mediators, and juries see the lived reality of catastrophic workplace injury before litigation positions harden.",
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `Medical records document injury. They do not document what catastrophic workplace injury takes from a life.

Long before mediation, exposure is already being shaped through reserve figures, IME reports, return-to-work assumptions, and damages models designed to reduce permanent injury to numbers. Our work intervenes before that framing solidifies.

Through documentary filmmaking, testimonial interviews, and integrated expert presentation, we build a cohesive human narrative around the injury, physical limitations, loss of livelihood, emotional toll, disruption of family life, future uncertainty, and the deeper personal consequences no report fully captures.

Client, caregiver, and family testimony is documented while the reality remains immediate and authentic. Life care plans, vocational loss analysis, and expert findings are woven into a settlement-focused visual presentation designed for insurers, mediators, and trial teams.

The adjuster who sees a worker as a human being evaluates exposure differently than the adjuster reviewing a claim file. That is why timing matters.

Developed and delivered before reserve positions solidify. Before defense IMEs shape perception. Before mediation narratives become fixed.

At mediation, the work strengthens every dimension of catastrophic damages.

At trial, it gives jurors a human story that remains present in deliberations.`,
      },
    ],
    faqs: [],
  },

  {
    slug: "wrongful-death",
    title: "Wrongful Death Litigation",
    description:
      "Your Client's Human Story Built Early, Before the Defense Defines the Damages",
    intro:
      "Settlement documentaries, testimonial interviews, and expert documentation that shape how insurers, mediators, and juries understand the human loss behind wrongful death claims before litigation positions harden.",
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `Death certificates document cause of death. They do not document the human loss left behind.

Long before mediation or trial, claim value is already being shaped through reserve evaluations, liability assessments, economic projections, and damages models designed to reduce a human life to numbers on paper. Our work intervenes before that perception solidifies.

Through documentary filmmaking, testimonial interviews, and expert-integrated narrative presentation, we build a cohesive human narrative around the loss: the relationships broken, the parental presence gone, financial support removed, emotional devastation carried by surviving family members, and the future that no longer exists.

The adjuster who sees surviving family members as human beings evaluates exposure differently than the adjuster reviewing a file. That is why timing matters.

Developed and delivered before reserve positions solidify. Before defense narratives shape perception. Before mediation positions become fixed.

At mediation, it increases the emotional and financial gravity of wrongful death damages.

At trial, it gives jurors a human story that remains present in deliberations.`,
      },
    ],
    faqs: [],
  },

  {
    slug: "narrative-mitigation",
    title: "Narrative Mitigation Strategy",
    description:
      "Human Narrative Built Early, Before the Other Side Defines the Story",
    intro:
      "Documentary storytelling, mitigation videos, testimonial development, and expert-integrated narrative presentation designed to shape how decision-makers understand the individual before narratives, valuation, or sentencing positions harden.",
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `Documents establish facts. They rarely establish human understanding.

Long before mediation, sentencing, or trial, narratives are already forming through reports, filings, valuations, guideline calculations, and adversarial framing designed to reduce human complexity to categories, numbers, and conclusions. Our work intervenes before that narrative solidifies.

Through structured mitigation interviews and expert-integrated narrative presentation, DNA Mitigation develops a cohesive human understanding of the individual: background, circumstances, relationships, losses, limitations, accountability, rehabilitation, and lived reality beyond the paper record.

Where relevant, the process also uncovers developmental, psychological, familial, and generational context that may materially shape how decision-makers understand the individual.

Client, family, caregiver, and supporting testimony is documented early, before human experience becomes litigation-conditioned or emotionally detached. Expert findings, life history, and narrative evidence are then woven into a focused visual presentation designed for attorneys, mediators, judges, and juries.

The decision-maker who sees a human being evaluates outcomes differently than the one reviewing a file. That is why timing matters.

Before perception solidifies. Before positions harden.

At mediation, sentencing, or trial, the work strengthens the human dimension of the case in ways written submissions alone rarely achieve.

At its core, the methodology exists for one purpose:

To ensure the individual is understood as a human being before they are reduced to a case file.`,
      },
    ],
    faqs: [],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
