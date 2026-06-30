import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const sectionRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();

  const skillGroups = [
    { label: "Accounting", skills: ["Accounts Receivable", "Reconciliations", "Financial Reporting", "GAAP"] },
    { label: "Audit", skills: ["Workpapers", "Confirmations", "Substantive Testing", "Internal Controls"] },
    { label: "Technology", skills: ["Excel", "SQL", "Python", "QuickBooks"] },
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
                I am an Accounting and Computer Information Systems double major at the University of Louisiana Monroe, graduating in December 2026 with 150 credit hours. My work sits where accounting discipline meets practical technology: reconciliations, audit evidence, Excel models, SQL analysis, and clear documentation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={rightRef as React.RefObject<HTMLDivElement>}>
            {[
              { title: "Degree Path", value: "Double B.B.A." },
              { title: "Accounting Focus", value: "CPA-Track" },
              { title: "Expected Graduation", value: "Dec 2026" },
              { title: "Credit Hours at Graduation", value: "150" }
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
          <h3 className="mb-8 text-2xl font-bold tracking-tight text-white">Capabilities</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="glassmorphism rounded-2xl border-white/10 p-6">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-indigo-300">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
