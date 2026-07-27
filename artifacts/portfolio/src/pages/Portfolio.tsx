import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/pages/HeroSection";
import { AboutSection } from "@/pages/AboutSection";
import { FocusSection } from "@/pages/FocusSection";
import { ProjectsSection } from "@/pages/ProjectsSection";
import { ContactSection } from "@/pages/ContactSection";
import { SiGithub } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-amber-300/30 selection:text-white">
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

      <footer className="relative z-20 border-t border-cyan-200/10 bg-background py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm font-medium">
            © {new Date().getFullYear()} Sandesh Lama Tamang. Built with proof,
            rhythm, and care.
          </p>
          <a
            href="https://github.com/SanDAce07"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Sandesh Lama Tamang on GitHub"
            className="text-stone-500 transition-colors hover:text-cyan-100"
          >
            <SiGithub className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
