export const contact = {
  email: "lamatamangs@warhawks.ulm.edu",
  github: "https://github.com/SanDAce07",
  linkedin: "https://www.linkedin.com/in/sandesh-lama-tamang-521410262",
};

export const capabilities = [
  "Account reconciliation",
  "Accounts receivable",
  "Cash application",
  "Audit workpapers",
  "Substantive testing",
  "Internal controls",
  "Microsoft Power BI",
  "Microsoft Excel",
  "QuickBooks",
  "SQL",
  "Python",
  "Accounting information systems",
];

export type ProjectVisual = "power-bi" | "accounting" | "grc" | "portfolio";

export interface Project {
  number: string;
  title: string;
  category: string;
  summary: string;
  work: string[];
  methods: string[];
  tools: string[];
  href: string;
  linkLabel: string;
  visual: ProjectVisual;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Louisiana Governmental Audit Dashboard",
    category: "Data visualization · Governmental audit",
    summary:
      "A Microsoft Power BI dashboard that turns governmental audit information into an organized, traceable, and readable visual resource.",
    work: [
      "Organized and classified audit information for structured analysis.",
      "Maintained traceability from the visual presentation back to source material.",
      "Designed dashboard views that make the information easier to review and communicate.",
    ],
    methods: [
      "Data organization",
      "Classification",
      "Source traceability",
      "Visual presentation",
    ],
    tools: ["Microsoft Power BI", "Audit data", "Data visualization"],
    href: "https://github.com/SanDAce07/accounting-projects-portfolio",
    linkLabel: "View related portfolio",
    visual: "power-bi",
  },
  {
    number: "02",
    title: "Accounting & Audit Projects Portfolio",
    category: "Accounting workflows · Audit documentation",
    summary:
      "A collection of practical projects that connects accounting procedures, supporting records, validation, and review-ready documentation.",
    work: [
      "Built AR aging, cash application, bank reconciliation, and variance-review workflows.",
      "Applied audit confirmation procedures and documented alternative procedures and conclusions.",
      "Developed SQL checks and reusable workpaper structures to validate and explain the work performed.",
    ],
    methods: [
      "Reconciliation",
      "Validation",
      "Audit evidence",
      "Workpaper documentation",
    ],
    tools: ["Microsoft Excel", "SQL", "QuickBooks", "Audit workpapers"],
    href: "https://github.com/SanDAce07/accounting-projects-portfolio",
    linkLabel: "View project repository",
    visual: "accounting",
  },
  {
    number: "03",
    title: "GRC & IT Audit Toolkit",
    category: "Controls · Systems · Automation",
    summary:
      "A set of documented audit utilities and templates that applies information-systems thinking to repeatable control testing.",
    work: [
      "Developed tools for access review, change-log sampling, risk assessment, and receivables aging.",
      "Tested the utilities with sample inputs and documented how reviewers can interpret the outputs.",
      "Connected ITGC concepts, control objectives, exceptions, and remediation tracking in reusable workpapers.",
    ],
    methods: [
      "Automation",
      "Repeatable testing",
      "Exception review",
      "Control documentation",
    ],
    tools: ["Python", "GRC", "ITGC", "Risk and control matrices"],
    href: "https://github.com/SanDAce07/grc-audit-toolkit",
    linkLabel: "View project repository",
    visual: "grc",
  },
  {
    number: "04",
    title: "Professional Portfolio Website",
    category: "Portfolio engineering · Content design",
    summary:
      "A recruiter-focused website that organizes accounting, audit, analytics, and systems work into a clear multi-page professional story.",
    work: [
      "Translated project documentation into concise case-study narratives.",
      "Designed responsive navigation and accessible page structures for desktop and mobile visitors.",
      "Configured production metadata, social previews, routing, and deployment for Vercel.",
    ],
    methods: [
      "Information architecture",
      "Accessible interaction",
      "Professional writing",
      "Responsive design",
    ],
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    href: "https://github.com/SanDAce07/sandesh-portfolio",
    linkLabel: "View project repository",
    visual: "portfolio",
  },
];
