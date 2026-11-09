import { ArrowUpRight, Download, GraduationCap } from "lucide-react";
import { capabilities } from "@/content";

const responsibilities = [
  "Managed invoicing, cash receipts, vendor payments, and payroll-related financial activity across day-to-day operations.",
  "Performed reconciliations and maintained organized supporting records for reliable bookkeeping and follow-up.",
  "Developed documentation and control procedures to support consistent financial and operational processes.",
  "Supervised staff and coordinated customer communication while maintaining dependable business operations.",
];

const coursework = [
  "Auditing",
  "Accounting Information Systems",
  "Intermediate Financial Accounting I & II",
  "Income Tax",
  "Business Finance",
  "Database Application Development",
  "Information Security Assurance",
  "Technology for Accountants",
  "Cost Accounting",
  "Government & Not-for-Profit Accounting",
];

export default function ExperiencePage() {
  return (
    <main id="main-content" className="page-container inner-page">
      <header className="page-intro split-intro">
        <div>
          <p className="eyebrow">Experience</p>
          <h1>Work shaped by responsibility.</h1>
        </div>
        <p>
          My background combines hands-on business operations with a CPA-track
          accounting and information-systems education. I focus on what I did,
          how I worked, and the methods I can transfer to a professional team.
        </p>
      </header>

      <div className="experience-layout">
        <section aria-labelledby="professional-experience-heading">
          <h2 id="professional-experience-heading" className="sr-only">
            Professional experience
          </h2>
          <article className="experience-entry">
            <div className="experience-meta">
              <time>2020 — 2022</time>
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="experience-content">
              <h2>General Manager</h2>
              <p className="organization">Photo Studio</p>
              <p className="experience-summary">
                Managed operational and financial activities in a
                customer-facing business, connecting recordkeeping,
                documentation, staff coordination, and daily execution.
              </p>
              <ul className="dash-list">
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="method-block">
                <p className="mini-label">Transferable methods demonstrated</p>
                <div className="tag-row">
                  {[
                    "Operational accounting",
                    "Reconciliation",
                    "Documentation",
                    "Control awareness",
                    "Team supervision",
                    "Customer communication",
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        <aside
          className="experience-sidebar"
          aria-label="Education and qualifications"
        >
          <section>
            <p className="eyebrow">Education</p>
            <GraduationCap aria-hidden="true" className="sidebar-icon" />
            <h3>Double B.B.A.</h3>
            <p className="sidebar-lead">
              Accounting & Computer Information Systems
            </p>
            <p>University of Louisiana Monroe</p>
            <p>Expected December 2026</p>
            <p>CPA track · 150 credit hours upon graduation</p>
          </section>

          <section>
            <p className="eyebrow">Current direction</p>
            <p>
              Seeking accounting, audit, analytics, or accounting-systems
              opportunities where careful work, traceable documentation, and
              clear communication matter.
            </p>
          </section>

          <button
            className="print-button"
            type="button"
            onClick={() => window.print()}
          >
            <Download aria-hidden="true" size={17} /> Save page as PDF
          </button>
        </aside>
      </div>

      <section className="section-block experience-details">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Academic foundation</p>
            <h2>Coursework connected to the work.</h2>
          </div>
          <p>
            The curriculum supports both financial accounting and the systems,
            controls, and data environments surrounding it.
          </p>
        </div>
        <div className="course-grid">
          {coursework.map((course, index) => (
            <div key={course}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {course}
            </div>
          ))}
        </div>
      </section>

      <section className="section-block capabilities-block">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Tools and methods I bring.</h2>
          </div>
          <a
            className="text-link"
            href="https://github.com/SanDAce07"
            target="_blank"
            rel="noreferrer"
          >
            View supporting work <ArrowUpRight aria-hidden="true" size={16} />
          </a>
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
    </main>
  );
}
