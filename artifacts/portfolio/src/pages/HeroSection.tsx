import {
  ArrowDown,
  ArrowRight,
  Github,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { ThreeBackground } from "@/components/ThreeBackground";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/ui/button";

const ROLE_PHRASES = [
  "Evidence Builder",
  "Controls Storyteller",
  "Excel, SQL, Python & QuickBooks",
  "Audit + Accounting Systems Thinker",
];

const proofMetrics = [
  { value: "65.7%", label: "positive AR exposure tested" },
  { value: "$313,975", label: "receivable exposure analyzed" },
  { value: "4", label: "audit automation scripts" },
];

const signalItems = [
  "AR aging",
  "Audit confirmations",
  "GRC scripts",
  "SQL validation",
];

export function HeroSection() {
  const typewriterText = useTypewriter(ROLE_PHRASES);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-svh w-full flex-col items-start justify-center overflow-hidden pb-14 pt-28">
      <ParticleCanvas />
      <ThreeBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/25 bg-amber-200/10 px-4 py-2 text-sm font-semibold text-amber-50 shadow-lg shadow-amber-950/20">
            <ShieldCheck
              className="h-4 w-4 text-emerald-200"
              aria-hidden="true"
            />
            Open to accounting, audit, analytics, and systems roles
          </div>
          <p className="mb-3 text-lg font-medium tracking-wide text-stone-400 md:text-xl">
            Hi, I&apos;m
          </p>
          <h1 className="mb-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="relative group">
              Sandesh Lama Tamang
              <span className="absolute -bottom-2 left-0 h-1 w-0 bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h1>
          <div
            className="mb-6 flex min-h-12 items-center text-xl font-semibold text-stone-200 sm:text-2xl md:text-4xl"
            aria-hidden="true"
          >
            {typewriterText}
            <span className="ml-1 inline-block h-8 w-3 animate-pulse bg-gradient-to-t from-amber-300 via-emerald-300 to-cyan-300 md:h-10"></span>
          </div>
          <p className="sr-only">
            Accounting and Computer Information Systems student on the CPA
            track, specializing in Excel, SQL, QuickBooks, audit workpapers, and
            accounting analytics.
          </p>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-stone-300 md:text-xl">
            I turn accounting work into an energetic proof board: AR dashboards,
            reconciliations, audit workpapers, SQL checks, and GRC tools that
            make the control story feel clear, usable, and ready to review.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="h-14 rounded-full bg-gradient-to-r from-amber-400 via-emerald-500 to-cyan-500 px-8 text-lg text-slate-950 shadow-lg shadow-emerald-950/30 hover:opacity-90"
            >
              Explore the proof board
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="https://github.com/SanDAce07?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full border border-cyan-200/35 bg-cyan-200/5 px-8 text-lg font-semibold text-white transition-colors hover:bg-cyan-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub repos
            </a>
            <a
              href="mailto:lamatamangs@warhawks.ulm.edu?subject=Portfolio%20inquiry"
              className="inline-flex h-14 items-center justify-center rounded-full border border-amber-200/35 bg-transparent px-8 text-lg font-semibold text-amber-50 transition-colors hover:bg-amber-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email me
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {proofMetrics.map((metric) => (
              <div
                key={metric.label}
                className="stat-card border-l border-amber-200/40 bg-white/[0.03] px-4 py-3"
              >
                <p className="mb-1 font-mono text-2xl font-bold text-cyan-100">
                  {metric.value}
                </p>
                <p className="text-sm leading-snug text-stone-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex max-w-4xl flex-wrap gap-3">
            {signalItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-stone-200"
              >
                <Sparkles
                  className="h-4 w-4 text-amber-200"
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-stone-500 motion-safe:animate-bounce sm:flex">
        <span className="text-sm mb-2 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}
