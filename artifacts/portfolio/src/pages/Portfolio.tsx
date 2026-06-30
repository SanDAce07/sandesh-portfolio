import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/pages/HeroSection";
import { AboutSection } from "@/pages/AboutSection";
import { ProjectsSection } from "@/pages/ProjectsSection";
import { ContactSection } from "@/pages/ContactSection";
import { SiGithub } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="py-8 border-t border-white/5 bg-background relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            Sandesh Lama Tamang © 2026
          </p>
          <a 
            href="https://github.com/SanDAce07" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <SiGithub className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
