import { Mail, Phone, MapPin, Check } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function ContactSection() {
  const sectionRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();
  const { toast } = useToast();

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `The ${type} has been copied to your clipboard.`,
    });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 animate-gradient-bg opacity-30 pointer-events-none" style={{ backgroundImage: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 50%, rgba(99,102,241,0.15) 100%)' }}></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm always open to discussing new opportunities, projects, or just having a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" ref={cardsRef as React.RefObject<HTMLDivElement>}>
          
          <button 
            onClick={() => handleCopy("lamatamangs@warhawks.ulm.edu", "email address")}
            className="group glassmorphism p-8 rounded-3xl border border-white/10 hover:border-[#6366f1]/50 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-slate-400 text-sm truncate group-hover:text-indigo-300 transition-colors">lamatamangs@warhawks...</p>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button 
            onClick={() => handleCopy("(318) 690-6106", "phone number")}
            className="group glassmorphism p-8 rounded-3xl border border-white/10 hover:border-[#6366f1]/50 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-slate-400 text-sm truncate group-hover:text-indigo-300 transition-colors">(318) 690-6106</p>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <div 
            className="group glassmorphism p-8 rounded-3xl border border-white/10 hover:border-[#6366f1]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
            <p className="text-slate-400 text-sm truncate group-hover:text-indigo-300 transition-colors">Monroe, LA 71203</p>
          </div>

          <a 
            href="https://github.com/SanDAce07"
            target="_blank"
            rel="noreferrer"
            className="group glassmorphism p-8 rounded-3xl border border-white/10 hover:border-[#6366f1]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)] relative overflow-hidden block"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center mb-6">
              <SiGithub className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
            <p className="text-slate-400 text-sm truncate group-hover:text-indigo-300 transition-colors">github.com/SanDAce07</p>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

        </div>
      </div>
    </section>
  );
}
