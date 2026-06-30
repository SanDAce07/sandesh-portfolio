import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
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
        <button
          type="button"
          aria-label="Back to the top"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] cursor-pointer tracking-tighter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SLT
        </button>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
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
        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollTo("contact")}
            className="hidden bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 text-white border-0 transition-opacity rounded-full px-6 sm:inline-flex"
          >
            Let&apos;s connect
          </Button>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="container mx-auto px-6 pb-3 md:hidden">
          <div className="glassmorphism mt-4 grid gap-2 rounded-2xl border-white/10 p-3 shadow-2xl">
            {[
              ["About", "about"],
              ["Projects", "projects"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button key={id} type="button" onClick={() => scrollTo(id)} className="rounded-xl px-4 py-3 text-left font-semibold text-slate-200 hover:bg-white/5 hover:text-white">
                {label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
