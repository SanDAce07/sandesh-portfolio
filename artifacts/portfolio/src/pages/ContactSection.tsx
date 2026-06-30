import { ArrowUpRight, BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const emailHref = "mailto:lamatamangs@warhawks.ulm.edu?subject=Portfolio%20inquiry";

export function ContactSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contact" className="relative overflow-hidden py-28" aria-labelledby="contact-heading">
      <div className="absolute inset-0 animate-gradient-bg opacity-30 pointer-events-none" style={{ backgroundImage: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 50%, rgba(99,102,241,0.15) 100%)" }} />

      <div className="container relative z-10 mx-auto px-6" ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">Let&apos;s connect</p>
          <h2 id="contact-heading" className="mb-6 bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-6xl">
            Looking for someone who understands both the numbers and the system behind them?
          </h2>
          <p className="text-lg leading-relaxed text-slate-300">
            I&apos;m open to internships, entry-level opportunities, and practical accounting or data projects where careful work and clear communication matter.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <a href={emailHref} className="glassmorphism group rounded-3xl border-white/10 p-8 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-indigo-400/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500">
              <Mail className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white">Email</h3>
              <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-indigo-300" aria-hidden="true" />
            </div>
            <p className="break-all text-sm text-slate-400 group-hover:text-indigo-200">lamatamangs@warhawks.ulm.edu</p>
          </a>

          <a href="https://github.com/SanDAce07" target="_blank" rel="noreferrer" className="glassmorphism group rounded-3xl border-white/10 p-8 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-indigo-400/50">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500">
              <SiGithub className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white">GitHub</h3>
              <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-indigo-300" aria-hidden="true" />
            </div>
            <p className="text-sm text-slate-400 group-hover:text-indigo-200">github.com/SanDAce07</p>
          </a>

          <div className="glassmorphism rounded-3xl border-white/10 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500">
              <BriefcaseBusiness className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Availability</h3>
            <p className="mb-3 text-sm leading-relaxed text-slate-400">Open to accounting, audit, analytics, and accounting-systems roles.</p>
            <p className="flex items-center gap-2 text-sm font-semibold text-indigo-200">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Monroe, Louisiana
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href={emailHref} className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 text-lg font-bold text-white shadow-xl shadow-indigo-500/20 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
            Start a conversation
            <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
