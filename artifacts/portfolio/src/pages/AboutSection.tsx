import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GITHUB_AVATAR_URL =
  "https://avatars.githubusercontent.com/u/171312212?v=4";

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
            <div className="profile-card max-w-md overflow-hidden rounded-lg border border-amber-200/20 bg-white/[0.055] p-4 shadow-2xl shadow-emerald-950/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-stone-950">
                <img
                  src={GITHUB_AVATAR_URL}
                  alt="Sandesh Lama Tamang GitHub profile photo"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/95 via-stone-950/65 to-transparent p-5">
                  <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-100">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub profile
                  </p>
                  <p className="text-2xl font-black tracking-tight text-white">
                    Sandesh Lama Tamang
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    Public repo signal
                  </p>
                  <p className="mt-1 text-stone-300">
                    Accounting, audit, GRC, analytics, and web projects.
                  </p>
                </div>
                <a
                  href="https://github.com/SanDAce07"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 text-sm font-bold text-white transition-colors hover:bg-cyan-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View profile
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white tracking-tight">
                About Me
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-stone-300">
                I am an Accounting and Computer Information Systems double major
                at the University of Louisiana Monroe, graduating in December
                2026 with 150 credit hours. My portfolio is built like a live
                evidence desk: reconciliations, audit testing, Excel models, SQL
                checks, GRC tooling, and clear documentation all tied back to
                visible work in GitHub.
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
                className="stat-card glassmorphism group rounded-lg border-white/5 p-8 transition-colors hover:border-cyan-300/30"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="mb-2 bg-gradient-to-r from-amber-200 via-emerald-200 to-cyan-200 bg-clip-text text-2xl font-bold text-transparent">
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
                className="proof-tile glassmorphism rounded-lg border-emerald-200/10 p-6"
              >
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-100">
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
