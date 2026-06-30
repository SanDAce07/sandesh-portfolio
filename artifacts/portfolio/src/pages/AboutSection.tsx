import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const sectionRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();

  const skills = [
    "QuickBooks", "Microsoft Excel", "SQL", "Python", 
    "Microsoft Office", "GAAP Principles", "Auditing", 
    "Financial Analysis", "Account Reconciliation", 
    "Pivot Tables", "VLOOKUP", "Financial Reporting"
  ];

  return (
    <section id="about" className="py-32 relative z-20">
      <div className="container mx-auto px-6" ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8" ref={leftRef as React.RefObject<HTMLDivElement>}>
            <div className="glassmorphism p-8 rounded-3xl inline-flex items-center justify-center bg-white/5 border-white/10">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-2xl shadow-indigo-500/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">SLT</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white tracking-tight">About Me</h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Computer Information Systems and Accounting double major at the University of Louisiana Monroe, on the CPA track. Passionate about bridging the gap between financial strategy and technology — from SQL databases to QuickBooks, from GAAP principles to Python scripts. Graduating December 2026.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={rightRef as React.RefObject<HTMLDivElement>}>
            {[
              { title: "Dual Degree", value: "Double B.B.A." },
              { title: "Accounting Focus", value: "CPA-Track" },
              { title: "Expected Graduation", value: "Dec 2026" },
              { title: "University of Louisiana Monroe", value: "Monroe, LA" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="glassmorphism p-8 rounded-2xl border-white/5 hover:border-indigo-500/30 transition-colors group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400 font-medium tracking-wide uppercase">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-white/5" ref={skillsRef as React.RefObject<HTMLDivElement>}>
          <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={skill}
                className="glassmorphism px-5 py-2.5 rounded-full text-sm font-medium text-slate-200 hover:text-white border border-white/10 hover:border-[#6366f1] transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
