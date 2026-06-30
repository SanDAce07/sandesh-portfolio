import { BarChart3, ClipboardCheck, Workflow } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const focusAreas = [
  {
    icon: BarChart3,
    title: "Accounting operations",
    description: "AR aging, cash application, reconciliations, and close-support tools designed to make exceptions visible and follow-up practical.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit and controls",
    description: "Workpapers, confirmations, substantive procedures, and control documentation with clear evidence trails and review checkpoints.",
  },
  {
    icon: Workflow,
    title: "Data and systems",
    description: "Excel, SQL, Python, and accounting-system workflows that translate raw records into reliable information for decisions.",
  },
];

export function FocusSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="relative z-20 py-24" aria-labelledby="focus-heading">
      <div className="container mx-auto px-6" ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">How I contribute</p>
          <h2 id="focus-heading" className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Strong accounting fundamentals, strengthened by systems thinking.
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            I build work that another person can understand, review, and use—not just a polished final number.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <article key={title} className="glassmorphism rounded-3xl border-white/10 p-8 transition-colors hover:border-indigo-400/40">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/20">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="leading-relaxed text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
