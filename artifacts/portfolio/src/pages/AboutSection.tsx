import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const sectionRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();

  const skillGroups = [
    {
      label: "Accounting",
      skills: [
        "Accounts Receivable",
        "Reconciliations",
        "Cash Application",
        "Variance Review",
      ],
    },
    {
      label: "Audit",
      skills: [
        "Workpapers",
        "Confirmations",
        "Substantive Testing",
        "Internal Controls",
      ],
    },
    {
      label: "Systems",
      skills: ["Excel", "SQL", "Python", "QuickBooks", "GRC"],
    },
  ];

  return (
    <section id="about" className="py-32 relative z-20">
      <div
        className="container mx-auto px-6"
        ref={sectionRef as React.RefObject<HTMLDivElement>}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="space-y-8"
            ref={leftRef as React.RefObject<HTMLDivElement>}
          >
            <div className="glassmorphism inline-flex rounded-3xl border-emerald-200/10 bg-white/5 p-8">
              <div className="flex h-32 w-32 rotate-3 items-center justify-center rounded-2xl border border-amber-200/20 bg-gradient-to-br from-emerald-600 via-teal-600 to-stone-900 shadow-2xl shadow-emerald-950/40 transition-transform duration-500 hover:rotate-0 md:h-48 md:w-48">
                <span className="text-4xl font-black tracking-tighter text-white md:text-6xl">
                  SLT
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white tracking-tight">
                About Me
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-stone-300">
                I am an Accounting and Computer Information Systems double major
                at the University of Louisiana Monroe, graduating in December
                2026 with 150 credit hours. My work sits where accounting
                discipline meets practical technology: reconciliations, audit
                evidence, Excel models, SQL analysis, GRC tooling, and clear
                documentation.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            ref={rightRef as React.RefObject<HTMLDivElement>}
          >
            {[
              { title: "Degree Path", value: "Double B.B.A." },
              { title: "Accounting Focus", value: "CPA-Track" },
              { title: "Expected Graduation", value: "Dec 2026" },
              { title: "GitHub Focus", value: "Audit + Data" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glassmorphism group rounded-2xl border-white/5 p-8 transition-colors hover:border-emerald-300/30"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="mb-2 bg-gradient-to-r from-emerald-200 to-amber-200 bg-clip-text text-2xl font-bold text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm font-medium uppercase tracking-wide text-stone-400">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-24 border-t border-emerald-200/10 pt-16"
          ref={skillsRef as React.RefObject<HTMLDivElement>}
        >
          <h3 className="mb-8 text-2xl font-bold tracking-tight text-white">
            Capabilities
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="glassmorphism rounded-2xl border-emerald-200/10 p-6"
              >
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-stone-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
