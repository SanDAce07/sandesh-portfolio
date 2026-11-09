import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <main id="main-content" className="page-container not-found-page">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page is not part of the portfolio.</h1>
      <p>
        The link may be outdated, or the address may have been entered
        incorrectly.
      </p>
      <Link href="/" className="button button-primary">
        <ArrowLeft aria-hidden="true" size={18} /> Return to overview
      </Link>
    </main>
  );
}
