import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/content";

export default function WorkPage() {
  return (
    <main id="main-content" className="page-container inner-page">
      <header className="page-intro split-intro">
        <div>
          <p className="eyebrow">Selected work</p>
          <h1>Projects built to explain the work.</h1>
        </div>
        <p>
          A focused selection presented through the skills applied, tools used,
          work performed, and transferable methods demonstrated—without treating
          classroom or simulated figures as achievement metrics.
        </p>
      </header>

      <section className="project-list" aria-label="Selected projects">
        {projects.map((project) => (
          <article className="project-story" key={project.title}>
            <ProjectVisual type={project.visual} number={project.number} />
            <div className="project-story-content">
              <p className="project-category">{project.category}</p>
              <h2>{project.title}</h2>
              <p className="project-summary">{project.summary}</p>

              <div className="project-detail-block">
                <p className="mini-label">What I did</p>
                <ul className="clean-list">
                  {project.work.map((item) => (
                    <li key={item}>
                      <CheckCircle2 aria-hidden="true" size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-detail-grid">
                <div>
                  <p className="mini-label">Methods demonstrated</p>
                  <div className="tag-row">
                    {project.methods.map((method) => (
                      <span key={method}>{method}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mini-label">Tools used</p>
                  <div className="tag-row">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                className="text-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}{" "}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
