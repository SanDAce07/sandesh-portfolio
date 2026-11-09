import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Selected work" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <header className="site-header">
      <div className="page-container header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Sandesh Lama Tamang home"
        >
          SLT<span>.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                location === item.href ? "nav-link is-active" : "nav-link"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="talk-link desktop-talk"
          href="mailto:lamatamangs@warhawks.ulm.edu?subject=Portfolio%20inquiry"
        >
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={16} />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <div className="page-container mobile-nav-inner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  location === item.href
                    ? "mobile-nav-link is-active"
                    : "mobile-nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
            <a
              className="mobile-nav-link"
              href="mailto:lamatamangs@warhawks.ulm.edu?subject=Portfolio%20inquiry"
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
