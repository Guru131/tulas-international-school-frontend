// src/components/layout/Navbar.jsx
// Transparent on hero, solid on scroll. Mobile drawer & ScrollSpy included.

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, contactInfo } from "../../data/tisData";
import { ArrowRight, Phone } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // ScrollSpy
      const scrollPos = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const el = document.querySelector(link.href);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(link.href);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setActiveSection(href);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={"navbar" + (scrolled ? " navbar--scrolled" : "")} role="banner">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#top" className="navbar__logo" aria-label="Tulas International School Home">
          <div className="navbar__logo-mark">
            <span className="navbar__logo-tis">TIS</span>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Tulas International</span>
            <span className="navbar__logo-school">School • Dehradun</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={"navbar__link" + (activeSection === link.href ? " is-active" : "")}
              onClick={() => handleNavClick(link.href)}
              aria-current={activeSection === link.href ? "page" : undefined}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="navbar__link-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA button */}
        <div className="navbar__actions">
          <a
            href={contactInfo.admissionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary navbar__cta"
          >
            Apply Now <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={"navbar__hamburger" + (menuOpen ? " is-open" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <nav aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  className={"navbar__drawer-link" + (activeSection === link.href ? " is-active" : "")}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="navbar__drawer-footer">
              <a
                href={contactInfo.admissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary navbar__drawer-cta"
              >
                Apply Now
              </a>
              <a href={"tel:" + contactInfo.admissionsPhone} className="navbar__drawer-phone">
                <Phone size={15} />
                <span>{contactInfo.admissionsPhone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
