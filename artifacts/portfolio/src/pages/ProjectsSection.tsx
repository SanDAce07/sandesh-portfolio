import { ArrowUpRight, CheckCircle2, FolderGit2, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  category: string;
  description: string;
  evidence: string[];
  metric: string;
  tags: string[];
  href: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: "Accounting & Audit Projects Portfolio",
    category: "Accounting analytics",
    description:
      "A collection of practical accounting work covering AR aging, cash application, bank reconciliation, audit confirmations, SQL financial analysis, variance review, and reusable workpaper templates.",
    evidence: [
      "AR aging dashboard analyzed $313,975 of positive receivable exposure",
      "Cash application tracker reconciled $259,480 of receipts with a 90.2% application rate",
      "SQL project validates invoice, receipt, and open-balance logic",
    ],
    metric: "8 completed project areas",
    tags: ["Excel", "SQL", "AR", "Audit", "QuickBooks"],
    href: "https://github.com/SanDAce07/accounting-projects-portfolio",
    repo: "SanDAce07/accounting-projects-portfolio",
  },
  {
    title: "GRC & IT Audit Toolkit",
    category: "Controls and systems",
    description:
      "Python audit utilities, workpaper outputs, risk and control templates, and a completed ITGC case study connecting accounting control work with information systems.",
    evidence: [
      "Access review analyzer flags terminated users, privileged access, SOD, and dormant accounts",
      "Change log sampler supports reproducible selection and exception testing",
      "Risk calculator maps inherent and residual risk with control-effectiveness review",
    ],
    metric: "4 tested audit analyzers",
    tags: ["Python", "GRC", "ITGC", "SOC 2", "Controls"],
    href: "https://github.com/SanDAce07/grc-audit-toolkit",
    repo: "SanDAce07/grc-audit-toolkit",
  },
  {
    title: "AR Confirmation Simulation",
    category: "Financial statement audit",
    description:
      "A positive-confirmation workpaper package with sample selection, response control, alternative procedures, exception evaluation, and professional customer letters.",
    evidence: [
      "Auditor-controlled confirmations and response tracking",
      "Alternative procedures for nonresponses",
      "Exception evaluation tied back to audit conclusions",
    ],
    metric: "$206,220 sample",
    tags: ["Audit", "Workpapers", "Substantive Testing"],
    href: "https://github.com/SanDAce07/accounting-projects-portfolio/tree/main/audit-projects/ar-confirmation-simulation",
    repo: "accounting-projects-portfolio",
  },
  {
    title: "Don Chuy Mexican Grill Site",
    category: "Client-style web build",
    description:
      "A polished multi-page restaurant site for Don Chuy Mexican Grill in West Monroe, Louisiana, focused on menu discovery, ordering, hours, and local visit decisions.",
    evidence: [
      "Restaurant-first navigation for favorites, menu, and visit details",
      "DoorDash-referenced menu structure and online ordering calls-to-action",
      "Original social preview and popular-dish visual direction",
    ],
    metric: "4 route content model",
    tags: ["Next.js", "Content Design", "Local Business"],
    href: "https://github.com/SanDAce07/don-chuy-site",
    repo: "SanDAce07/don-chuy-site",
  },
  {
    title: "Professional Portfolio Website",
    category: "Portfolio engineering",
    description:
      "The Vercel-connected React and TypeScript portfolio that presents accounting, audit, data, and systems projects through an accessible, recruiter-focused interface.",
    evidence: [
      "Responsive desktop and mobile navigation",
      "Reduced-motion and keyboard-friendly interactions",
      "SEO, structured metadata, and social-preview assets",
    ],
    metric: "Vercel-ready app",
    tags: ["React", "TypeScript", "Tailwind", "Vercel"],
    href: "https://github.com/SanDAce07/sandesh-portfolio",
    repo: "SanDAce07/sandesh-portfolio",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glassmorphism group flex h-full flex-col rounded-3xl border-emerald-200/10 p-7 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-[0_24px_80px_rgba(16,185,129,0.14)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
          {project.category}
        </p>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-stone-500 transition-colors group-hover:text-emerald-200"
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mb-5 leading-relaxed text-stone-400">
        {project.description}
      </p>

      <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-amber-100">
        <FolderGit2 className="h-4 w-4 text-amber-200" aria-hidden="true" />
        <span className="break-all">{project.repo}</span>
      </div>

      <p className="mb-4 border-l border-amber-200/40 pl-4 font-mono text-sm font-bold uppercase tracking-wide text-amber-100">
        {project.metric}
      </p>

      <ul className="mb-6 grid flex-1 list-none gap-3">
        {project.evidence.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-stone-300"
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-stone-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center font-semibold text-white underline-offset-4 hover:text-emerald-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        aria-label={`View ${project.title} on GitHub`}
      >
        View project
        <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}

export function ProjectsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="projects"
      className="relative z-20 py-28"
      aria-labelledby="projects-heading"
    >
      <div
        className="container mx-auto px-6"
        ref={sectionRef as React.RefObject<HTMLDivElement>}
      >
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-200">
              Selected GitHub evidence
            </p>
            <h2
              id="projects-heading"
              className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              Work built to be reviewed and used.
            </h2>
            <p className="text-lg leading-relaxed text-stone-400">
              These projects are pulled from public repos and emphasize
              measurable work: reconciliations, testing coverage, review notes,
              controls, and clear documentation.
            </p>
          </div>

          <a
            href="https://github.com/SanDAce07?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 font-semibold text-white transition-colors hover:border-emerald-300/50 hover:bg-emerald-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <Github className="mr-2 h-5 w-5" aria-hidden="true" />
            All GitHub repositories
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
