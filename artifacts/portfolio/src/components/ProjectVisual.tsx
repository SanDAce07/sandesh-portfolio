import { BarChart3, Code2, FileCheck2, Table2 } from "lucide-react";
import type { ProjectVisual as ProjectVisualType } from "@/content";

export function ProjectVisual({
  type,
  number,
}: {
  type: ProjectVisualType;
  number: string;
}) {
  if (type === "power-bi") {
    return (
      <div
        className="project-visual visual-power-bi"
        aria-label="Abstract Power BI dashboard preview"
      >
        <span className="visual-number">{number}</span>
        <div className="dashboard-window">
          <div className="window-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="dashboard-grid">
            <div className="dashboard-sidebar">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-main">
              <div className="dashboard-heading">
                <span />
                <span />
              </div>
              <div className="dashboard-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="dashboard-table">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
        <div className="visual-label">
          <BarChart3 aria-hidden="true" size={18} /> Microsoft Power BI
        </div>
      </div>
    );
  }

  if (type === "accounting") {
    return (
      <div
        className="project-visual visual-accounting"
        aria-label="Abstract accounting workpaper preview"
      >
        <span className="visual-number">{number}</span>
        <div className="worksheet-stack">
          <div className="worksheet-sheet sheet-back" />
          <div className="worksheet-sheet sheet-front">
            <div className="worksheet-title">
              <span />
              <span />
            </div>
            <div className="worksheet-rows">
              {Array.from({ length: 6 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
            <FileCheck2 aria-hidden="true" className="worksheet-check" />
          </div>
        </div>
        <div className="visual-label">
          <Table2 aria-hidden="true" size={18} /> Accounting workpapers
        </div>
      </div>
    );
  }

  if (type === "grc") {
    return (
      <div
        className="project-visual visual-grc"
        aria-label="Abstract GRC toolkit preview"
      >
        <span className="visual-number">{number}</span>
        <div className="terminal-window">
          <div className="terminal-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="terminal-lines">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="terminal-status">
            <i /> checks documented
          </div>
        </div>
        <div className="visual-label">
          <Code2 aria-hidden="true" size={18} /> Controls automation
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-visual visual-portfolio"
      aria-label="Abstract portfolio website preview"
    >
      <span className="visual-number">{number}</span>
      <div className="browser-window">
        <div className="window-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="browser-layout">
          <div className="browser-copy">
            <span />
            <span />
            <span />
          </div>
          <div className="browser-panel" />
        </div>
      </div>
      <div className="visual-label">
        <Code2 aria-hidden="true" size={18} /> React + TypeScript
      </div>
    </div>
  );
}
