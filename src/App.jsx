// src/App.jsx
// App root — scroll progress bar, custom cursor, navbar, page, footer.

import { useEffect } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/animation/CustomCursor";
import FloatingSupport from "./components/common/FloatingSupport";
import { initCodeProtection } from "./utils/security";
import Home from "./pages/Home";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 });

  // Initialize anti-inspect and code protection
  useEffect(() => {
    const cleanup = initCodeProtection();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Floating WhatsApp and Helpdesk support widget */}
      <FloatingSupport />

      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
