import {
  ArrowUpRight,
  BriefcaseBusiness,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const emailHref =
  "mailto:lamatamangs@warhawks.ulm.edu?subject=Portfolio%20inquiry";
const linkedInHref =
  "https://www.linkedin.com/in/sandesh-lama-tamang-521410262";

export function ContactSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-0 animate-gradient-bg opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(251,191,36,0.12) 0%, rgba(16,185,129,0.1) 50%, rgba(34,211,238,0.12) 100%)",
        }}
      />

      <div
        className="container relative z-10 mx-auto px-6"
        ref={sectionRef as React.RefObject<HTMLDivElement>}
      >
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-100">
            Let&apos;s connect
          </p>
          <h2
            id="contact-heading"
            className="mb-6 bg-gradient-to-r from-amber-100 via-emerald-100 to-cyan-100 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-6xl"
          >
            Looking for someone who understands both the numbers and the system
            behind them?
          </h2>
          <p className="text-lg leading-relaxed text-stone-300">
            I&apos;m open to internships, entry-level opportunities, and
            practical accounting or data projects where careful work and clear
            communication matter.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          <a
            href={emailHref}
            className="proof-tile glassmorphism group rounded-lg border-white/10 p-8 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-cyan-300/50"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 via-emerald-400 to-cyan-400">
              <Mail className="h-6 w-6 text-slate-950" aria-hidden="true" />
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white">Email</h3>
              <ArrowUpRight
                className="h-4 w-4 text-stone-500 group-hover:text-cyan-200"
                aria-hidden="true"
              />
            </div>
            <p className="break-all text-sm text-stone-400 group-hover:text-cyan-100">
              lamatamangs@warhawks.ulm.edu
            </p>
          </a>

          <a
            href="https://github.com/SanDAce07"
            target="_blank"
            rel="noreferrer"
            className="proof-tile glassmorphism group rounded-lg border-white/10 p-8 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-cyan-300/50"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 via-emerald-400 to-cyan-400">
              <SiGithub className="h-6 w-6 text-slate-950" aria-hidden="true" />
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white">GitHub</h3>
              <ArrowUpRight
                className="h-4 w-4 text-stone-500 group-hover:text-cyan-200"
                aria-hidden="true"
              />
            </div>
            <p className="text-sm text-stone-400 group-hover:text-cyan-100">
              github.com/SanDAce07
            </p>
          </a>

          <a
            href={linkedInHref}
            target="_blank"
            rel="noreferrer"
            className="proof-tile glassmorphism group rounded-lg border-white/10 p-8 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-amber-200/50"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 via-emerald-400 to-amber-300">
              <Linkedin className="h-6 w-6 text-slate-950" aria-hidden="true" />
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white">LinkedIn</h3>
              <ArrowUpRight
                className="h-4 w-4 text-stone-500 group-hover:text-amber-100"
                aria-hidden="true"
              />
            </div>
            <p className="text-sm text-stone-400 group-hover:text-amber-100">
              sandesh-lama-tamang
            </p>
          </a>

          <div className="proof-tile glassmorphism rounded-lg border-white/10 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 via-emerald-400 to-cyan-400">
              <BriefcaseBusiness
                className="h-6 w-6 text-slate-950"
                aria-hidden="true"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Availability</h3>
            <p className="mb-3 text-sm leading-relaxed text-stone-400">
              Open to accounting, audit, analytics, and accounting-systems
              roles.
            </p>
            <p className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Monroe,
              Louisiana
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={emailHref}
            className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-emerald-500 to-cyan-500 px-8 text-lg font-bold text-slate-950 shadow-xl shadow-emerald-950/30 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            Start a conversation
            <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
