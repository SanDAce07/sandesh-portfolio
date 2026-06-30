import { ArrowDown } from "lucide-react";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { ThreeBackground } from "@/components/ThreeBackground";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const typewriterText = useTypewriter([
    "Accounting & CIS Student",
    "CPA-Track | ULM",
    "QuickBooks & SQL",
    "Future CPA"
  ]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center items-start overflow-hidden">
      <ParticleCanvas />
      <ThreeBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-slate-400 text-xl md:text-2xl font-medium mb-4 tracking-wide">
            Hi, I'm
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
            <span className="relative group">
              Sandesh Lama Tamang
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-all group-hover:w-full duration-300"></span>
            </span>
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-slate-300 mb-12 h-12 flex items-center">
            {typewriterText}
            <span className="inline-block w-3 h-8 md:h-10 ml-1 bg-gradient-to-t from-[#6366f1] to-[#a855f7] animate-pulse"></span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              onClick={() => scrollTo("projects")}
              className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 text-white rounded-full px-8 text-lg h-14"
            >
              View My Projects
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-[#6366f1]/50 text-white hover:bg-[#6366f1]/10 rounded-full px-8 text-lg h-14 bg-transparent"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-slate-400">
        <span className="text-sm mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}
