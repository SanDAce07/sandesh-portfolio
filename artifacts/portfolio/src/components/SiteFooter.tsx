import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div>
          <Link
            href="/"
            className="wordmark footer-mark"
            aria-label="Back to overview"
          >
            SLT<span>.</span>
          </Link>
          <p className="footer-copy">
            Accounting and Computer Information Systems student based in Monroe,
            Louisiana.
          </p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/SanDAce07"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight aria-hidden="true" size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/sandesh-lama-tamang-521410262"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
          </a>
          <a href="mailto:lamatamangs@warhawks.ulm.edu">
            Email <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
