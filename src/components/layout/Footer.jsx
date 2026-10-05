// src/components/layout/Footer.jsx

import { contactInfo, navLinks } from "../../data/tisData";
import { Phone, Mail, MapPin } from "lucide-react";

// Crisp inline SVGs for social platforms
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-mark">
              <span>TIS</span>
            </div>
            <div>
              <p className="footer__logo-name">Tulas International School</p>
              <p className="footer__logo-sub">Dehradun, Uttarakhand</p>
            </div>
          </div>
          <p className="footer__tagline">
            A CBSE-affiliated co-educational boarding and day school nurturing curious minds and confident leaders since 2012.
          </p>
          <div className="footer__social">
            <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href={contactInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
            <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
            <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h3 className="footer__col-title">Quick Links</h3>
          <nav aria-label="Footer navigation">
            {navLinks.map((link) => (
              <button key={link.href} className="footer__link" onClick={() => handleNavClick(link.href)}>
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Admissions */}
        <div className="footer__col">
          <h3 className="footer__col-title">Admissions</h3>
          <a href={contactInfo.admissionsUrl} target="_blank" rel="noopener noreferrer" className="footer__link">Apply Now</a>
          <button className="footer__link" onClick={() => handleNavClick("#admissions")}>Enquire Now</button>
          <button className="footer__link" onClick={() => handleNavClick("#contact")}>Contact Us</button>
          <a href="https://tis.edu.in/" target="_blank" rel="noopener noreferrer" className="footer__link">Official Website</a>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3 className="footer__col-title">Contact</h3>
          <a href={"tel:" + contactInfo.admissionsPhone} className="footer__contact-item">
            <Phone size={14} />
            <span>{contactInfo.admissionsPhone}</span>
          </a>
          <a href={"mailto:" + contactInfo.email} className="footer__contact-item">
            <Mail size={14} />
            <span>{contactInfo.email}</span>
          </a>
          <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer__contact-item">
            <MapPin size={14} />
            <span>Dehradun, Uttarakhand – 248011</span>
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {CURRENT_YEAR} Tulas International School. All rights reserved.</p>
        <div className="footer__legal">
          <a href="https://tis.edu.in/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://tis.edu.in/" target="_blank" rel="noopener noreferrer">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
