// src/components/layout/Navbar.jsx
// Transparent on hero, solid on scroll. Mobile drawer included.

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/tisData";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
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
            <span className="navbar__logo-school">School</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className="navbar__link"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://admission.tis.edu.in"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta btn-primary"
        >
          Apply Now
        </a>

        {/* Hamburger */}
        <button
          className={"navbar__hamburger" + (menuOpen ? " is-open" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="navbar__drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                className="navbar__drawer-link"
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href="https://admission.tis.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary navbar__drawer-cta"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
