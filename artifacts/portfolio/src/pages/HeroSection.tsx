import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { ThreeBackground } from "@/components/ThreeBackground";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/ui/button";

const ROLE_PHRASES = [
  "Accounting & CIS Student",
  "CPA-Track | 150 Credit Hours",
  "Excel, SQL & QuickBooks",
  "Audit-Ready Problem Solver",
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Open to accounting, audit, and systems opportunities
          </div>
          <p className="mb-3 text-lg font-medium tracking-wide text-slate-400 md:text-xl">Hi, I&apos;m</p>
          <h1 className="mb-6 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="relative group">
              Sandesh Lama Tamang
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-all group-hover:w-full duration-300"></span>
            </span>
          </h1>
          <div className="mb-6 flex min-h-12 items-center text-xl font-semibold text-slate-300 sm:text-2xl md:text-4xl" aria-hidden="true">
            {typewriterText}
            <span className="inline-block w-3 h-8 md:h-10 ml-1 bg-gradient-to-t from-[#6366f1] to-[#a855f7] animate-pulse"></span>
          </div>
          <p className="sr-only">Accounting and Computer Information Systems student on the CPA track, specializing in Excel, SQL, QuickBooks, audit workpapers, and accounting analytics.</p>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            I turn accounting processes into clear, controlled, and decision-ready work—from AR dashboards and reconciliations to audit workpapers and data tools.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              onClick={() => scrollTo("projects")}
              className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 text-white rounded-full px-8 text-lg h-14"
            >
              View featured work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="mailto:lamatamangs@warhawks.ulm.edu?subject=Portfolio%20inquiry"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#6366f1]/50 bg-transparent px-8 text-lg font-semibold text-white transition-colors hover:bg-[#6366f1]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-400">
            <span>Accounting + CIS double major</span>
            <span>Graduating December 2026</span>
            <span>150 credit hours at graduation</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-slate-400 motion-safe:animate-bounce sm:flex">
        <span className="text-sm mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}
