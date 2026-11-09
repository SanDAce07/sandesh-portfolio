import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { contact, projects } from "@/content";
import { ProjectVisual } from "@/components/ProjectVisual";

const paths = [
  {
    number: "01",
    title: "Experience",
    description:
      "Operational accounting responsibilities, education, and the methods I bring to a team.",
    href: "/experience",
  },
  {
    number: "02",
    title: "Selected work",
    description:
      "Focused project stories across Power BI, accounting, audit, controls, and systems.",
    href: "/work",
  },
  {
    number: "03",
    title: "About me",
    description:
      "How I approach clarity, traceability, documentation, and continuous development.",
    href: "/about",
  },
];

export default function OverviewPage() {
  const featuredProject = projects[0];

  return (
    <main id="main-content">
      <section className="page-container hero-section">
        <div className="availability-pill">
          <span aria-hidden="true" /> Open to accounting, audit, analytics, and
          systems roles
        </div>
        <p className="eyebrow">
          Hello, I&apos;m Sandesh — Accounting + CIS student
        </p>
        <h1 className="display-heading">
          I make financial work feel <em>clear.</em>
        </h1>
        <p className="hero-summary">
          I combine accounting discipline with systems thinking to build
          organized analyses, review-ready documentation, and practical tools
          using Power BI, Excel, SQL, Python, and QuickBooks.
        </p>
        <div className="hero-actions">
          <Link href="/work" className="button button-primary">
            Explore my work <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link href="/experience" className="text-link">
            View experience <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="focus-strip" aria-label="Professional focus">
          <div>
            <strong>CPA track</strong>
            <span>Accounting foundation</span>
          </div>
          <div>
            <strong>Power BI</strong>
            <span>Data organization and presentation</span>
          </div>
          <div>
            <strong>Audit + CIS</strong>
            <span>Controls and systems perspective</span>
          </div>
        </div>
      </section>

      <section className="page-container section-block">
        <p className="eyebrow">Explore</p>
        <div className="section-heading-row">
          <h2>A quick way to know me.</h2>
          <p>
            Start with the part of my background most relevant to your hiring
            needs.
          </p>
        </div>
        <div className="path-grid">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="path-card">
              <span className="path-number">{path.number}</span>
              <div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="page-container section-block featured-overview">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Featured project</p>
            <h2>Audit information, organized visually.</h2>
          </div>
          <p>
            The project story emphasizes the work performed and the methods
            demonstrated—not figures created from classroom or simulated data.
          </p>
        </div>
        <div className="featured-project-grid">
          <ProjectVisual
            type={featuredProject.visual}
            number={featuredProject.number}
          />
          <div className="featured-project-copy">
            <p className="project-category">{featuredProject.category}</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.summary}</p>
            <ul className="clean-list">
              {featuredProject.work.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" size={17} /> {item}
                </li>
              ))}
            </ul>
            <Link className="text-link" href="/work">
              Read the project story <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="conversation-section">
        <div className="page-container conversation-inner">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>
              Looking for someone who understands both the numbers and the
              system?
            </h2>
          </div>
          <a
            className="conversation-email"
            href={`mailto:${contact.email}?subject=Portfolio%20inquiry`}
          >
            {contact.email} <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
