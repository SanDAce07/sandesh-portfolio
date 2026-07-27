import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/pages/HeroSection";
import { AboutSection } from "@/pages/AboutSection";
import { FocusSection } from "@/pages/FocusSection";
import { ProjectsSection } from "@/pages/ProjectsSection";
import { ContactSection } from "@/pages/ContactSection";
import { SiGithub } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-emerald-400/30 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded-lg bg-white px-4 py-2 font-semibold text-slate-950 shadow-xl"
      >
        Skip to main content
      </a>
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <FocusSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="py-8 border-t border-emerald-200/10 bg-background relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm font-medium">
            © {new Date().getFullYear()} Sandesh Lama Tamang. Built with clarity
            and care.
          </p>
          <a
            href="https://github.com/SanDAce07"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Sandesh Lama Tamang on GitHub"
            className="text-stone-500 hover:text-emerald-100 transition-colors"
          >
            <SiGithub className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
