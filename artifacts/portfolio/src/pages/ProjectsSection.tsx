import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import { Search, Star, ExternalLink, Code } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

const languageColors: Record<string, string> = {
  "JavaScript": "#f1e05a",
  "TypeScript": "#3178c6", 
  "Python": "#3572A5",
  "HTML": "#e34c26",
  "CSS": "#563d7c",
  "Java": "#b07219",
  "C++": "#f34b7d",
  "C": "#555555",
  "Ruby": "#701516",
  "Go": "#00ADD8",
  "Rust": "#dea584",
  "Shell": "#89e051",
  "Vue": "#41b883",
  "Swift": "#F05138",
  "Kotlin": "#A97BFF",
  "null": "#8b949e"
};

function ProjectCard({ repo }: { repo: Repo }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  const daysAgo = Math.floor((new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 3600 * 24));
  const langColor = repo.language ? languageColors[repo.language] || languageColors["null"] : languageColors["null"];

  return (
    <a 
      href={repo.html_url} 
      target="_blank" 
      rel="noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glassmorphism p-6 rounded-2xl flex flex-col h-full border-white/10 hover:border-indigo-500/50 transition-colors group block relative z-10"
      style={{ transition: 'transform 0.1s ease, border-color 0.3s ease' }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1 flex-1 pr-4">
          {repo.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor }}></span>
          <span className="text-xs font-medium text-slate-300">{repo.language || 'Code'}</span>
        </div>
      </div>
      
      <p className="text-slate-400 text-sm flex-grow line-clamp-2 mb-6 leading-relaxed">
        {repo.description || "No description provided."}
      </p>
      
      <div className="flex items-center justify-between text-slate-400 text-sm mt-auto pt-4 border-t border-white/5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4" /> {repo.stargazers_count}
          </span>
          <span className="text-slate-500 hidden sm:inline">Updated {daysAgo} days ago</span>
        </div>
        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
      </div>
    </a>
  );
}

export function ProjectsSection() {
  const sectionRef = useScrollAnimation();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://api.github.com/users/SanDAce07/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Filter out forks if desired, or keep all
          setRepos(data.filter(r => !r.fork));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredRepos = repos.filter(repo => 
    repo.name.toLowerCase().includes(search.toLowerCase()) || 
    (repo.language && repo.language.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="projects" className="py-32 relative z-20">
      <div className="container mx-auto px-6" ref={sectionRef as React.RefObject<HTMLDivElement>}>
        
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Open Source</h2>
            <p className="text-slate-400 text-lg">My recent work, experiments, and contributions.</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <Input 
              type="text" 
              placeholder="Search projects..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 glassmorphism border-white/10 text-white placeholder:text-slate-500 rounded-xl h-12 focus-visible:ring-indigo-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="glassmorphism p-6 rounded-2xl border-white/5 h-48 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Skeleton className="h-6 w-32 bg-white/10 rounded-md" />
                    <Skeleton className="h-6 w-16 bg-white/10 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full bg-white/5 rounded mb-2" />
                  <Skeleton className="h-4 w-2/3 bg-white/5 rounded" />
                </div>
                <div className="pt-4 mt-auto">
                  <Skeleton className="h-4 w-24 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.length > 0 ? (
              filteredRepos.map(repo => (
                <ProjectCard key={repo.id} repo={repo} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center glassmorphism rounded-2xl border-white/5">
                <Code className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
                <p className="text-slate-400">Try adjusting your search query.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
