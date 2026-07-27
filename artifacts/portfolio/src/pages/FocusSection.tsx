import { BarChart3, ClipboardCheck, Database, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const focusAreas = [
  {
    icon: BarChart3,
    title: "Accounting operations",
    description:
      "AR aging, cash application, bank reconciliation, and close-support tools that make exceptions visible and follow-up practical.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit and controls",
    description:
      "Workpapers, confirmations, substantive procedures, and review checkpoints with a clear trail from source data to conclusion.",
  },
  {
    icon: Database,
    title: "Data and systems",
    description:
      "Excel, SQL, Python, and accounting-system workflows that translate raw records into reliable, decision-ready information.",
  },
  {
    icon: ShieldCheck,
    title: "GRC mindset",
    description:
      "Risk scoring, access review, change sampling, framework mapping, and POA&M-style remediation tracking for IT audit context.",
  },
];

export function FocusSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="focus"
      className="relative z-20 py-24"
      aria-labelledby="focus-heading"
    >
      <div
        className="container mx-auto px-6"
        ref={sectionRef as React.RefObject<HTMLDivElement>}
      >
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-100">
            Portfolio character
          </p>
          <h2
            id="focus-heading"
            className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Energetic, practical, and built around visible proof.
          </h2>
          <p className="text-lg leading-relaxed text-stone-400">
            I build work that another person can understand, review, and use:
            the calculations, the assumptions, the checkpoints, and the
            conclusion all stay connected.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="focus-card glassmorphism rounded-lg border-emerald-200/10 p-8 transition-colors hover:border-cyan-300/40"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 via-emerald-400 to-cyan-400 shadow-lg shadow-emerald-950/30">
                <Icon className="h-6 w-6 text-slate-950" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="leading-relaxed text-stone-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
