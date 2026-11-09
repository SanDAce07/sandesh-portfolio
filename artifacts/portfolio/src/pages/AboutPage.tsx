import { ArrowUpRight } from "lucide-react";
import { capabilities, contact } from "@/content";

const principles = [
  {
    number: "01",
    title: "Clarity over decoration",
    description:
      "Present the purpose, process, and conclusion so another person can follow the work without guessing.",
  },
  {
    number: "02",
    title: "Traceability over assumption",
    description:
      "Keep analyses and visuals connected to their source information and supporting documentation.",
  },
  {
    number: "03",
    title: "Methods over inflated metrics",
    description:
      "Describe what was built, applied, tested, validated, and documented instead of overstating sample-data results.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="page-container inner-page">
      <header className="about-intro">
        <div>
          <p className="eyebrow">About me</p>
          <h1>Accounting discipline. Systems curiosity.</h1>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m a CPA-track Accounting and Computer Information Systems
            double major at the University of Louisiana Monroe, expected to
            graduate in December 2026 with 150 credit hours.
          </p>
          <p>
            I&apos;m interested in the point where financial work, data,
            controls, and technology meet. That includes organizing audit
            information in Power BI, developing accounting workflows, testing
            controls, writing SQL checks, and documenting work so it is easier
            to review.
          </p>
          <p>
            My operational background also shaped how I work: stay organized,
            communicate clearly, take ownership of the process, and leave
            reliable records behind.
          </p>
        </div>
      </header>

      <section className="principles-section">
        <p className="eyebrow">How I work</p>
        <div className="principle-list">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <div>
                <h2>{principle.title}</h2>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <p className="eyebrow">Capabilities</p>
        <div className="section-heading-row">
          <h2>What I bring to a team.</h2>
          <p>
            A developing professional toolkit grounded in coursework, projects,
            and hands-on business responsibility.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <div key={capability}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="about-contact">
        <p className="eyebrow">Let&apos;s connect</p>
        <h2>
          I&apos;d be glad to discuss accounting, audit, analytics, or systems
          opportunities.
        </h2>
        <a
          className="button button-primary"
          href={`mailto:${contact.email}?subject=Portfolio%20inquiry`}
        >
          Send me an email <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>
    </main>
  );
}
