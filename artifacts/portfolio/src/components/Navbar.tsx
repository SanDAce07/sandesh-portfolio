import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] cursor-pointer tracking-tighter"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SLT
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => scrollTo("projects")} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Projects
          </button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Contact
          </button>
        </nav>
        <Button 
          onClick={() => scrollTo("contact")}
          className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 text-white border-0 transition-opacity rounded-full px-6"
        >
          Hire Me
        </Button>
      </div>
    </header>
  );
}
