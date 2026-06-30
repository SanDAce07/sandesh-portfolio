import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  category: string;
  description: string;
  evidence: string;
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "AR Aging Dashboard",
    category: "Accounting analytics",
    description: "A formula-driven Excel model that classifies receivables by aging bucket, highlights concentration risk, and turns invoice detail into management-ready follow-up.",
    evidence: "Customer-level aging, exception controls, and a documented refresh workflow",
    tags: ["Excel", "Accounts Receivable", "Reconciliation"],
    href: "https://github.com/SanDAce07/accounting-projects-portfolio/tree/main/accounts-receivable/ar-aging-dashboard",
  },
  {
    title: "Cash Application Tracker",
    category: "Accounting operations",
    description: "An end-to-end receipt application workflow covering exact matches, partial payments, short pays, overpayments, missing remittance, and unidentified cash.",
    evidence: "$259,480 receipt cycle with $233,970 applied and seven passing controls",
    tags: ["Excel", "Cash Application", "Controls"],
    href: "https://github.com/SanDAce07/accounting-projects-portfolio/tree/main/accounts-receivable/cash-application-tracker",
  },
  {
    title: "AR Confirmation Simulation",
    category: "Financial statement audit",
    description: "A positive-confirmation workpaper package with sample selection, response control, alternative procedures, exception evaluation, and professional customer letters.",
    evidence: "$206,220 sample covering 65.7% of positive AR exposure",
    tags: ["Audit", "Workpapers", "Substantive Testing"],
    href: "https://github.com/SanDAce07/accounting-projects-portfolio/tree/main/audit-projects/ar-confirmation-simulation",
  },
  {
    title: "GRC & IT Audit Toolkit",
    category: "Controls and systems",
    description: "A growing collection of practical audit utilities for access reviews, change-log sampling, risk scoring, and accounting-system control analysis.",
    evidence: "Reusable analyzers with documented control objectives and review outputs",
    tags: ["Python", "IT Audit", "GRC"],
    href: "https://github.com/SanDAce07/grc-audit-toolkit",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glassmorphism group flex h-full flex-col rounded-3xl border-white/10 p-7 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-[0_24px_80px_rgba(79,70,229,0.16)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-300">{project.category}</p>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition-colors group-hover:text-indigo-300" aria-hidden="true" />
      </div>

      <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
      <p className="mb-6 flex-1 leading-relaxed text-slate-400">{project.description}</p>

      <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-300/10 bg-emerald-300/5 p-4 text-sm leading-relaxed text-emerald-100">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
        <span>{project.evidence}</span>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center font-semibold text-white underline-offset-4 hover:text-indigo-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
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
    <section id="projects" className="relative z-20 py-28" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6" ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">Selected portfolio</p>
            <h2 id="projects-heading" className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">Work built to be reviewed and used.</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Each project combines accounting judgment, traceable source data, clear controls, and practical documentation—not just a finished screenshot.
            </p>
          </div>

          <a
            href="https://github.com/SanDAce07?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 font-semibold text-white transition-colors hover:border-indigo-400/50 hover:bg-indigo-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <Github className="mr-2 h-5 w-5" aria-hidden="true" />
            All GitHub repositories
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}
