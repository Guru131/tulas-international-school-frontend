// src/components/common/FloatingSupport.jsx
// Floating action widget: WhatsApp chat, Support Helpdesk modal, and Scroll-to-Top.
// Fully responsive with touch-optimized targets and smooth micro-interactions.

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ChevronUp, Headphones, X, ExternalLink, Send } from "lucide-react";
import { contactInfo } from "../../data/tisData";
import "./FloatingSupport.css";

// Official crisp WhatsApp SVG icon
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.182 8.182 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z" />
  </svg>
);

export default function FloatingSupport() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const modalRef = useRef(null);

  // Monitor scroll depth
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsHelpOpen(false);
    };
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsHelpOpen(false);
      }
    };
    if (isHelpOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHelpOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEnquireJump = () => {
    setIsHelpOpen(false);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const nameInput = document.querySelector("#parent-name");
      if (nameInput) setTimeout(() => nameInput.focus(), 600);
    }
  };

  const whatsappUrl = `https://wa.me/919458311000?text=${encodeURIComponent(
    "Hello Tulas International School, I would like to enquire about admissions."
  )}`;

  return (
    <>
      {/* Floating Action Buttons Container */}
      <aside className="floating-support" aria-label="Quick support and navigation">
        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              type="button"
              className="floating-btn floating-btn--scroll"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 15 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ChevronUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn--whatsapp"
          aria-label="Chat with Admissions on WhatsApp"
          title="Chat on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="floating-btn__pulse" />
          <WhatsAppIcon />
          <span className="floating-btn__tooltip">Chat on WhatsApp</span>
        </motion.a>

        {/* Help & Support Button */}
        <motion.button
          type="button"
          className={"floating-btn floating-btn--help" + (isHelpOpen ? " is-active" : "")}
          onClick={() => setIsHelpOpen((prev) => !prev)}
          aria-label={isHelpOpen ? "Close admissions helpdesk" : "Open admissions helpdesk"}
          aria-expanded={isHelpOpen}
          title="Admissions Helpdesk"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="floating-btn__badge" />
          {isHelpOpen ? <X size={22} /> : <Headphones size={22} />}
          {!isHelpOpen && <span className="floating-btn__tooltip">Need Help?</span>}
        </motion.button>
      </aside>

      {/* Support & Quick Enquiry Modal */}
      <AnimatePresence>
        {isHelpOpen && (
          <div className="helpdesk-backdrop">
            <motion.div
              ref={modalRef}
              className="helpdesk-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="helpdesk-title"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="helpdesk-modal__header">
                <div>
                  <div className="helpdesk-modal__status">
                    <span className="helpdesk-modal__dot" />
                    <span>Admissions Helpdesk • Online</span>
                  </div>
                  <h3 id="helpdesk-title" className="helpdesk-modal__title">
                    How can we assist you?
                  </h3>
                </div>
                <button
                  type="button"
                  className="helpdesk-modal__close"
                  onClick={() => setIsHelpOpen(false)}
                  aria-label="Close helpdesk modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="helpdesk-modal__body">
                <p className="helpdesk-modal__intro">
                  Connect directly with the Tulas International School admissions counselors for fee structure, campus visits, or eligibility queries.
                </p>

                {/* Quick actions */}
                <div className="helpdesk-modal__actions">
                  {/* Phone */}
                  <a href={`tel:${contactInfo.admissionsPhone}`} className="helpdesk-action-card">
                    <div className="helpdesk-action-icon helpdesk-action-icon--phone">
                      <Phone size={18} />
                    </div>
                    <div className="helpdesk-action-text">
                      <span className="helpdesk-action-label">Call Admissions</span>
                      <span className="helpdesk-action-val">{contactInfo.admissionsPhone}</span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="helpdesk-action-card"
                  >
                    <div className="helpdesk-action-icon helpdesk-action-icon--wa">
                      <WhatsAppIcon />
                    </div>
                    <div className="helpdesk-action-text">
                      <span className="helpdesk-action-label">WhatsApp Chat</span>
                      <span className="helpdesk-action-val">Instant Response</span>
                    </div>
                    <ExternalLink size={14} className="helpdesk-action-arrow" />
                  </a>

                  {/* Email */}
                  <a href={`mailto:${contactInfo.email}`} className="helpdesk-action-card">
                    <div className="helpdesk-action-icon helpdesk-action-icon--mail">
                      <Mail size={18} />
                    </div>
                    <div className="helpdesk-action-text">
                      <span className="helpdesk-action-label">Email Us</span>
                      <span className="helpdesk-action-val">{contactInfo.email}</span>
                    </div>
                  </a>
                </div>

                {/* Jump to form button */}
                <button
                  type="button"
                  className="helpdesk-modal__form-btn"
                  onClick={handleEnquireJump}
                >
                  <Send size={16} />
                  <span>Fill Online Admission Enquiry Form</span>
                </button>

                {/* Campus location note */}
                <div className="helpdesk-modal__footer-note">
                  <MapPin size={14} color="var(--color-gold)" />
                  <span>Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
