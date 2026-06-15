export interface CoverageLink {
  label: string;
  url: string;
}

export interface CaseStudy {
  id: number;
  title: string; // bold in PDF
  meta: {
    district: string;
    caseNo: string;
    caseLink: string;
    judge: string;
    client?: string;
    role: string;
  };
  problem: string; // plain text with inline HTML for bold
  strategy: string; // plain text with inline HTML for bold
  quote?: string; // judicial impact quote
  quoteName?: string; // bold attribution in PDF
  outcome: string; // plain text with inline HTML for bold
  coverage?: CoverageLink[];
  footer?: string; // closing note (case 7)
}

export const caseStudies: CaseStudy[] = [
  // ── 01 ──────────────────────────────────────────────
  // Title: bold
  // Case No. 3:22-CR-139: hyperlink
  // Problem: "$50 million" bold
  // Strategy: "remorse, accountability, family impact, and broader § 3553(a) considerations" bold
  // Outcome: "five years probation" bold
  {
    id: 1,
    title:
      "Allocution produced 62 months. Mitigation video advocacy produced probation.",
    meta: {
      district: "D. Conn.",
      caseNo: "3:22-CR-139",
      caseLink:
        "https://www.nbcconnecticut.com/news/local/men-sentenced-for-involvement-in-hartford-mortgage-fraud-scheme/3187923/",
      judge: "Hon. Omar A. Williams",
      role: "Film, Edit",
    },
    problem: `Federal prosecutors alleged a mortgage fraud scheme tied to nearly <strong>$50 million</strong> in multifamily housing loans.`,
    strategy: `While one defendant relied primarily on personal allocution, the other approached sentencing with visible humility and entrusted his presentation to structured mitigation video advocacy centered on <strong>remorse, accountability, family impact, and broader § 3553(a) considerations</strong> before probation, prosecutors, and the judge.`,
    outcome: `Two defendants charged in the same fraud conspiracy received markedly different sentencing outcomes.\n\nCo-defendant received 62 months.\n\nOur client received <strong>five years probation</strong> and a $1 million fine.`,
  },

  // ── 02 ──────────────────────────────────────────────
  // Title: bold
  // Case No. 20-CR-272: hyperlink
  // Problem: "11-count federal indictment" bold, "$76 million damages award" bold, "70–87 months." bold
  // Strategy: plain
  // Outcome: "6-month custodial sentence" bold
  // Coverage: two hyperlinks
  {
    id: 2,
    title:
      "87 months on the table. 6 months served. A CEO who arrived before FEMA.",
    meta: {
      district: "E.D.N.Y.",
      caseNo: "20-CR-272",
      caseLink:
        "https://www.govinfo.gov/app/details/USCOURTS-nyed-1_20-cr-00272",
      judge: "Hon. Pamela Chen",
      role: "Film, Edit",
    },
    problem: `The former owner of a major New York construction company faced an <strong>11-count federal indictment</strong> tied to a union fund embezzlement scheme, a <strong>$76 million damages award</strong>, and a guideline range of <strong>70–87 months.</strong>`,
    strategy: `The sentencing video repositioned the defendant through decades of civic leadership, including deploying heavy construction machinery at his own expense to Hurricane Sandy and Katrina disaster zones before FEMA arrived.`,
    outcome: `<strong>6-month custodial sentence</strong> against an 87-month guideline range.`,
    coverage: [
      {
        label: "Edelman, Krasin & Jaye LLP Coverage",
        url: "https://eljnlaw.com/news/jaroslaw-wins-stunningly-reduced-sentence-for-navillus-client/",
      },
      {
        label: "Irish Examiner Coverage",
        url: "https://www.irishexaminer.com/news/munster/arid-41174413.html",
      },
    ],
  },

  // ── 03 ──────────────────────────────────────────────
  // Title: bold
  // Case No. 8:18-cr-00198: hyperlink  (client: Aleph Institute shown in meta)
  // Problem: "8-year federal sentence" bold, "$44 million" bold
  // Strategy: plain
  // Outcome: "approximately 4 years early" bold
  {
    id: 3,
    title: "A video opened a federal prison door. 4 years early!",
    meta: {
      district: "M.D. Fla.",
      caseNo: "8:18-cr-00198",
      caseLink:
        "https://www.courtlistener.com/docket/7967324/united-states-v-morrow/",
      judge: "",
      client: "Aleph Institute",
      role: "Film, Edit",
    },
    problem: `Client was already serving an <strong>8-year federal sentence</strong> arising from <strong>$44 million</strong> in illegal cosmetic surgery procedures, with no foreseeable path to early release.`,
    strategy: `Our compassionate release video presentation documented severe and deteriorating health conditions inside custody, humanizing the urgency of the client's circumstances in a way written submissions alone could not convey.`,
    outcome: `Client compassionately released <strong>approximately 4 years early</strong> within weeks of the mitigation video being circulated.`,
  },

  // ── 04 ──────────────────────────────────────────────
  // Title: bold
  // Case No. 21-2049: hyperlink
  // Problem: "14 years federal imprisonment" bold
  // Strategy: plain
  // Outcome: "1 year and 1 day" bold, "2 months later" bold
  {
    id: 4,
    title: "14 years of exposure. A childhood story changed everything.",
    meta: {
      district: "S.D.N.Y.",
      caseNo: "21-2049",
      caseLink:
        "https://www.casemine.com/judgement/us/6402cae168effb79be06cc5c",
      judge: "Hon. Vernon S. Broderick",
      role: "Film, Edit",
    },
    problem: `CEO faced approximately <strong>14 years federal imprisonment</strong> in a wire fraud overbilling prosecution.`,
    strategy: `Our sentencing video surfaced severe childhood trauma and personal history that had not fully translated through traditional written advocacy alone, allowing the Court to see the full human being behind the indictment.`,
    outcome: `Our client ultimately received a sentence of <strong>1 year and 1 day</strong> and was released from custody approximately <strong>2 months later</strong> during the CARES Act period.`,
  },

  // ── 05 ──────────────────────────────────────────────
  // Title: bold
  // Case No. 20-CR-272: hyperlink
  // Problem: "11 federal counts and up to 20 years in prison" bold
  // Strategy: ""Mother Teresa."" bold
  // Judicial Impact: quote plain, attribution "Hon. Pamela Chen" bold
  // Outcome: "2 years probation. No prison imposed." — entire sentence bold
  {
    id: 5,
    title: "A federal judge said society was better off with her free.",
    meta: {
      district: "E.D.N.Y.",
      caseNo: "20-CR-272",
      caseLink:
        "https://www.govinfo.gov/app/details/USCOURTS-nyed-1_20-cr-00272",
      judge: "Hon. Pamela Chen",
      role: "Film, Edit",
    },
    problem: `A payroll administrator facing <strong>11 federal counts and up to 20 years in prison</strong> for alleged participation in a fraudulent union payroll scheme.`,
    strategy: `The sentencing video documented a life defined by compassion, service, and extraordinary generosity of time, money, and care to others, giving voice to the many lives transformed by her advocacy and support. Those who knew her work firsthand often referred to her as <strong>"Mother Teresa."</strong>`,
    quote: `Illustrates an individual that's extraordinary, someone for whom society was better off if she was free. It was clear that she was a hardworking, kindhearted person.`,
    quoteName: "Hon. Pamela Chen",
    outcome: `<strong>2 years probation. No prison imposed.</strong>`,
  },

  // ── 06 ──────────────────────────────────────────────
  // Title: bold
  // Case No. 7:21-cr-00401: hyperlink
  // Problem: "unlicensed $6 million" bold, "five years imprisonment." bold
  // Strategy: "full-time caregiver to his seriously ill wife," bold
  // Outcome: "Five months home confinement and probation. Zero days incarcerated." — full sentence bold
  {
    id: 6,
    title:
      "$6 million money transmitting case. No prison. A caregiver's story became the defense.",
    meta: {
      district: "S.D.N.Y.",
      caseNo: "7:21-cr-00401",
      caseLink:
        "https://www.justice.gov/usao-sdny/pr/us-attorney-announces-arrest-3-individuals-operating-6-million-unlicensed-money",
      judge: "Hon. Paul E. Davison",
      role: "Film, Edit",
    },
    problem: `Federal prosecutors alleged the client operated an <strong>unlicensed $6 million</strong> money transmitting business carrying exposure of up to <strong>five years imprisonment.</strong>`,
    strategy: `The sentencing video documented the defendant's role as sole <strong>full-time caregiver to his seriously ill wife,</strong> allowing probation, prosecutors, and the Judge to experience the human consequences incarceration would create beyond the defendant himself.`,
    outcome: `<strong>Five months home confinement and probation. Zero days incarcerated.</strong>`,
  },

  // ── 07 ──────────────────────────────────────────────
  // Title: bold
  // Case No. 3:20-cr-00007-JCH: hyperlink
  // Problem: "7 years federal imprisonment in a $4.3 million" bold
  // Strategy: plain
  // Outcome: "2½-years" bold, "2 months later" bold
  // Footer: closing consultation note (plain)
  {
    id: 7,
    title: "A wife's voice transformed 7 years into 2 months served.",
    meta: {
      district: "D. Conn.",
      caseNo: "3:20-cr-00007-JCH",
      caseLink:
        "https://www.justice.gov/usao-ct/pr/connecticut-nursing-home-operator-sentenced-prison-embezzlement-and-tax-offenses",
      judge: "Hon. Janet Hall",
      role: "Film, Edit",
    },
    problem: `CEO of a nursing home faced approximately <strong>7 years federal imprisonment in a $4.3 million</strong> pension embezzlement prosecution.`,
    strategy: `The mitigation video centered the on-camera advocacy of the defendant's wife, communicating decades of charitable giving and caregiving in a way written submissions alone could never fully convey.`,
    outcome: `Our client ultimately received a sentence of <strong>2½-years</strong> and was released from custody approximately <strong>2 months later</strong> during the CARES Act period.`,
    footer: `Schedule a consultation to privately review selected sentencing mitigation videos from any of the matters above. Full case references and supporting materials available to verified counsel upon request.`,
  },
];
