export interface ContentSection {
  title: string;
  content: string; // HTML string
}

export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  intro: string; // HTML string — may contain <strong> tags
  contentSections: ContentSection[];
  faqs: { question: string; answer: string }[];
}

export const practiceAreas: PracticeArea[] = [
  // ─────────────────────────────────────────────────────────────
  // PAGE 11 — Federal Sentencing Mitigation
  // Intro bold: "probation, prosecutors, and the court"
  // Body bold:
  //   - "None fully establish the human being standing before the court."
  //   - "Our work intervenes before that understanding solidifies."
  //   - "personal history, family responsibilities, psychological background, accountability, rehabilitation efforts, restitution, and life beyond the offense conduct."
  //   - "while its understanding of the defendant is still forming."
  //   - "The court that sees a human being evaluates sentencing differently than the court reviewing a file."
  //   - "§ 3553(a)"
  //   - "To ensure the individual is understood as a human being before they are reduced to guideline calculations and offense conduct."
  // ─────────────────────────────────────────────────────────────
  {
    slug: "federal-sentencing",
    title: "Federal Sentencing Mitigation",
    description:
      "Strategic Mitigation Videos Built Early, Before the PSR Defines Your Client",
    intro: `Pre-PSR video advocacy designed to shape how <strong>probation, prosecutors, and the court</strong> understand your client before sentencing narratives harden.`,
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `
<p>Indictments establish allegations. Guideline calculations establish exposure. PSRs establish institutional understanding. <strong>None fully establish the human being standing before the court.</strong></p>

<p>Long before sentencing, narratives are already forming through charging documents, loss calculations, PSR interviews, cooperation disputes, and prosecutorial framing designed to reduce human complexity to conduct, numbers, and guideline ranges. <strong>Our work intervenes before that understanding solidifies.</strong></p>

<p>Through structured mitigation interviews, DNA Mitigation develops a cohesive human understanding of the individual: <strong>personal history, family responsibilities, psychological background, accountability, rehabilitation efforts, restitution, and life beyond the offense conduct.</strong></p>

<p>Client, family, colleague, caregiver, and supporting testimony is documented early, before memory becomes litigation-conditioned or emotionally detached. Expert findings and mitigation evidence are then woven into a focused visual presentation designed to reach probation <strong>while its understanding of the defendant is still forming.</strong></p>

<p><strong>The court that sees a human being evaluates sentencing differently than the court reviewing a file.</strong> That is why timing matters.</p>

<p>At sentencing, the work strengthens the human dimension of <strong>§ 3553(a)</strong> in ways written submissions alone rarely achieve.</p>

<p>At its core, the methodology exists for one purpose:</p>

<p><strong>To ensure the individual is understood as a human being before they are reduced to guideline calculations and offense conduct.</strong></p>
        `,
      },
    ],
    faqs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 12 — White Collar Criminal Defense
  // Intro bold: "probation, prosecutors, and the judge"
  // Section 1 body bold: "probation, prosecutors, and the court"
  // Section 2 (DNA Methodology) body bold:
  //   - "None fully establish the human being standing before the court."
  //   - "Our work intervenes before that understanding solidifies."
  //   - "personal history, family responsibilities, psychological background, accountability, rehabilitation efforts, restitution, and life beyond the offense conduct."
  //   - "its understanding of the defendant is still forming."
  //   - "The court that sees a human being evaluates sentencing differently than the court reviewing a file."
  //   - "§ 3553(a)"
  //   - "To ensure the individual is understood as a human being before they are reduced to guideline calculations and offense conduct."
  // ─────────────────────────────────────────────────────────────
  {
    slug: "white-collar",
    title: "White Collar Criminal Defense",
    description:
      "Strategic Mitigation Videos Built Early, Before the PSR Defines Your Client",
    intro: `Pre-PSR video advocacy designed to shape how <strong>probation, prosecutors, and the judge</strong> understand your client before sentencing narratives harden.`,
    contentSections: [
      {
        title:
          "Human Narrative Built Early, Before the Government Defines the Story",
        content: `
<p>Pre-PSR mitigation videos, testimonial development, and expert-integrated narrative presentation designed to shape how <strong>probation, prosecutors, and the court</strong> understand the individual before sentencing narratives and guideline positions harden.</p>
        `,
      },
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `
<p>Indictments establish allegations. Financial records establish transactions. Guideline calculations establish exposure. <strong>None fully establish the human being standing before the court.</strong></p>

<p>Long before sentencing, narratives are already forming through charging documents, loss calculations, PSR interviews, cooperation disputes, and prosecutorial framing designed to reduce human complexity to conduct, numbers, and guideline ranges. <strong>Our work intervenes before that understanding solidifies.</strong></p>

<p>Through structured mitigation interviews, DNA Mitigation develops a cohesive human understanding of the individual: <strong>personal history, family responsibilities, psychological background, accountability, rehabilitation efforts, restitution, and life beyond the offense conduct.</strong></p>

<p>Client, family, colleague, caregiver, and supporting testimony is documented early, before memory becomes litigation-conditioned or emotionally detached. Expert findings and mitigation evidence are then woven into a focused visual presentation designed to reach probation while <strong>its understanding of the defendant is still forming.</strong></p>

<p><strong>The court that sees a human being evaluates sentencing differently than the court reviewing a file.</strong> That is why timing matters.</p>

<p>At sentencing, the work strengthens the human dimension of <strong>§ 3553(a)</strong> in ways written submissions alone rarely achieve.</p>

<p>At its core, the methodology exists for one purpose:</p>

<p><strong>To ensure the individual is understood as a human being before they are reduced to guideline calculations and offense conduct.</strong></p>
        `,
      },
    ],
    faqs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 13 — Catastrophic Personal Injury
  // Intro bold: "insurers, mediators, and juries"
  // Body bold:
  //   - "Our work intervenes before that perception solidifies."
  //   - "physical limitations, future dependency, emotional trauma, vocational loss, family burden, and daily realities"
  //   - "The result is testimony that feels immediate, credible, and deeply human."
  //   - "the long-term human consequences behind the claim."
  //   - "The adjuster who sees a human being evaluates exposure differently than the adjuster reviewing a file."
  //   - "Delivered before reserve positions solidify. Before defense IMEs shape perception. Before mediation narratives become fixed."
  //   - "a human story that remains present long after expert testimony ends."
  // ─────────────────────────────────────────────────────────────
  {
    slug: "personal-injury",
    title: "Catastrophic Personal Injury",
    description:
      "Your Client's Human Story Built Early, Before the Defense Defines the Damages",
    intro: `Settlement mitigation videos, testimonial interviews, and expert-integrated presentations that shape how <strong>insurers, mediators, and juries</strong> understand the lived reality of catastrophic injury before litigation positions harden.`,
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `
<p>Medical records document injury. They rarely communicate human loss.</p>

<p>Long before mediation or trial, claim value is already being shaped through reserve evaluations, IME reports, damages models, and defense narratives that reduce catastrophic injury to numbers on paper. <strong>Our work intervenes before that perception solidifies.</strong></p>

<p>Through testimonial-driven mitigation interviews and expert-integrated narrative presentation, we build a clear human understanding of the injury: <strong>physical limitations, future dependency, emotional trauma, vocational loss, family burden, and daily realities</strong> no report fully captures.</p>

<p>Client, caregiver, and family testimony is documented early, before the impact becomes medically filtered, litigation-conditioned, or emotionally detached. <strong>The result is testimony that feels immediate, credible, and deeply human.</strong></p>

<p>Life care plans, neuropsychological findings, vocational assessments, trauma evaluations, medical imaging, and expert opinions are woven into a settlement-focused visual presentation designed to help insurers, mediators, and juries fully understand <strong>the long-term human consequences behind the claim.</strong></p>

<p><strong>The adjuster who sees a human being evaluates exposure differently than the adjuster reviewing a file.</strong> That is why timing matters.</p>

<p><strong>Delivered before reserve positions solidify. Before defense IMEs shape perception. Before mediation narratives become fixed.</strong></p>

<p>At mediation, it increases the emotional and economic weight of catastrophic damages.</p>

<p>At trial, it gives jurors <strong>a human story that remains present long after expert testimony ends.</strong></p>
        `,
      },
    ],
    faqs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 14 — Catastrophic Workers' Injury
  // Intro bold: "insurers, mediators, and juries"
  // Body bold:
  //   - "hey do not document what catastrophic workplace injury takes from a life."
  //   - "Our work intervenes before that framing solidifies."
  //   - "physical limitations, loss of livelihood, emotional toll, disruption of family life, future uncertainty, and the deeper personal consequences"
  //   - "The adjuster who sees a worker as a human being evaluates exposure differently than the adjuster reviewing a claim file. That is why timing matters."
  //   - "Developed and delivered before reserve positions solidify. Before defense IMEs shape perception. Before mediation narratives become fixed."
  //   - "every dimension of catastrophic damages."
  //   - "human story that remains present in deliberations."
  // ─────────────────────────────────────────────────────────────
  {
    slug: "workplace-injury",
    title: "Catastrophic Workers' Injury",
    description:
      "Your Client's Human Story Built Early, Before the Defense Defines the Damages",
    intro: `Settlement documentaries, testimonial interviews, and expert documentation that shape how <strong>insurers, mediators, and juries</strong> see the lived reality of catastrophic workplace injury before litigation positions harden.`,
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `
<p>Medical records document injury. <strong>They do not document what catastrophic workplace injury takes from a life.</strong></p>

<p>Long before mediation, exposure is already being shaped through reserve figures, IME reports, return-to-work assumptions, and damages models designed to reduce permanent injury to numbers. <strong>Our work intervenes before that framing solidifies.</strong></p>

<p><strong>Through testimonial interviews, and integrated expert presentation, we build a cohesive human narrative around the injury, physical limitations, loss of livelihood, the emotional toll, disruption of family life, and the future uncertainty no report fully captures.</strong></p>

<p>Client, caregiver, and family testimony is documented while the reality remains immediate and authentic. Life care plans, vocational loss analysis, and expert findings are woven into a settlement-focused visual presentation designed for insurers, mediators, and trial teams.</p>

<p><strong>The adjuster who sees a worker as a human being evaluates exposure differently than the adjuster reviewing a claim file. That is why timing matters.</strong></p>

<p><strong>Developed and delivered before reserve positions solidify. Before defense IMEs shape perception. Before mediation narratives become fixed.</strong></p>

<p>At mediation, the work strengthens <strong>every dimension of catastrophic damages.</strong></p>

<p>At trial, it gives jurors a <strong>human story that remains present in deliberations.</strong></p>
        `,
      },
    ],
    faqs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 15 — Wrongful Death Litigation
  // Intro bold: "insurers, mediators, and juries"
  // Body bold:
  //   - "They do not document the human loss left behind."
  //   - "Our work intervenes before that perception solidifies."
  //   - "the relationships broken, the parental presence gone, financial support removed, emotional devastation carried by surviving family members, and the future that no longer exists"
  //   - "The adjuster who sees surviving family members as human beings evaluates exposure differently than the adjuster reviewing a file. That is why timing matters."
  //   - "Developed and delivered before reserve positions solidify. Before defense narratives shape perception. Before mediation positions become fixed."
  //   - "the emotional and financial gravity of wrongful death damages."
  //   - "a human story that remains present in deliberations."
  // ─────────────────────────────────────────────────────────────
  {
    slug: "wrongful-death",
    title: "Wrongful Death Litigation",
    description:
      "Your Client's Human Story Built Early, Before the Defense Defines the Damages",
    intro: `Settlement documentaries, testimonial interviews, and expert documentation that shape how <strong>insurers, mediators, and juries</strong> understand the human loss behind wrongful death claims before litigation positions harden.`,
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `
<p>Death certificates document cause of death. <strong>They do not document the human loss left behind.</strong></p>

<p>Long before mediation or trial, claim value is already being shaped through reserve evaluations, liability assessments, economic projections, and damages models designed to reduce a human life to numbers on paper. <strong>Our work intervenes before that perception solidifies.</strong></p>

<p>Through documentary filmmaking, testimonial interviews, and expert-integrated narrative presentation, we build a cohesive human narrative around the loss: <strong>the relationships broken, the parental presence gone, financial support removed, emotional devastation carried by surviving family members, and the future that no longer exists</strong>.</p>

<p><strong>The adjuster who sees surviving family members as human beings evaluates exposure differently than the adjuster reviewing a file. That is why timing matters.</strong></p>

<p><strong>Developed and delivered before reserve positions solidify. Before defense narratives shape perception. Before mediation positions become fixed.</strong></p>

<p>At mediation, it increases <strong>the emotional and financial gravity of wrongful death damages.</strong></p>

<p>At trial, it gives jurors <strong>a human story that remains present in deliberations.</strong></p>
        `,
      },
    ],
    faqs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 16 — Narrative Mitigation Strategy
  // Intro bold: "decision-makers"
  // Body bold:
  //   - "They rarely establish human understanding."
  //   - "Our work intervenes before that narrative solidifies."
  //   - "background, circumstances, relationships, losses, limitations, accountability, rehabilitation, and lived reality beyond the paper record."
  //   - "developmental, psychological, familial, and generational context"
  //   - "The decision-maker who sees a human being evaluates outcomes differently than the one reviewing a file."
  //   - "Before perception solidifies. Before positions harden."
  //   - "the human dimension of the case"
  //   - "To ensure the individual is understood as a human being before they are reduced to a case file."
  // ─────────────────────────────────────────────────────────────
  {
    slug: "narrative-mitigation",
    title: "Narrative Mitigation Strategy",
    description:
      "Human Narrative Built Early, Before the Other Side Defines the Story",
    intro: `<p>Documentary storytelling, mitigation videos, testimonial development, and expert-integrated narrative presentation designed to shape how <strong>decision-makers</strong> understand the individual before narratives, valuation, or sentencing positions harden.</p>`,
    contentSections: [
      {
        title: "THE DNA MITIGATION METHODOLOGY",
        content: `
<p>Documents establish facts. <strong>They rarely establish human understanding.</strong></p>

<p>Long before mediation, sentencing, or trial, narratives are already forming through reports, filings, valuations, guideline calculations, and adversarial framing designed to reduce human complexity to categories, numbers, and conclusions. <strong>Our work intervenes before that narrative solidifies.</strong></p>

<p>Through structured mitigation interviews and expert-integrated narrative presentation, DNA Mitigation develops a cohesive human understanding of the individual: <strong>background, circumstances, relationships, losses, limitations, accountability, rehabilitation, and lived reality beyond the paper record.</strong></p>

<p>Where relevant, the process also uncovers <strong>developmental, psychological, familial, and generational context</strong> that may materially shape how decision-makers understand the individual.</p>

<p>Client, family, caregiver, and supporting testimony is documented early, before human experience becomes litigation-conditioned or emotionally detached. Expert findings, life history, and narrative evidence are then woven into a focused visual presentation designed for attorneys, mediators, judges, and juries.</p>

<p><strong>The decision-maker who sees a human being evaluates outcomes differently than the one reviewing a file.</strong> That is why timing matters.</p>

<p><strong>Before perception solidifies. Before positions harden.</strong></p>

<p>At mediation, sentencing, or trial, the work strengthens <strong>the human dimension of the case</strong> in ways written submissions alone rarely achieve.</p>

<p>At its core, the methodology exists for one purpose:</p>

<p><strong>To ensure the individual is understood as a human being before they are reduced to a case file.</strong></p>
        `,
      },
    ],
    faqs: [],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
