// src/components/sections/HeroSection.jsx
// Full-screen hero with animated text, CTA buttons, and decorative elements.

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import "./HeroSection.css";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="top" aria-label="Hero section">
      {/* Background image */}
      <motion.div
        className="hero__bg"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=85"
          alt="Tulas International School campus — students in a modern learning environment"
          className="hero__bg-img"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero__overlay" />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="hero__decor hero__decor--circle"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        aria-hidden="true"
      />
      <motion.div
        className="hero__decor hero__decor--ring"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 1, duration: 1.4 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="hero__content container">
        <motion.span
          className="eyebrow hero__eyebrow"
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Tulas International School, Dehradun
        </motion.span>

        <motion.h1
          className="display-xl hero__heading"
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Where Curiosity
          <span className="hero__heading-accent"> Grows Into</span>
          <br />
          Possibility
        </motion.h1>

        <motion.p
          className="body-lg hero__sub"
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          A CBSE-affiliated co-educational boarding and day school in Dehradun, offering academic
          excellence, holistic development, world-class sports, and a nurturing residential community
          for students from Class IV to XII.
        </motion.p>

        <motion.div
          className="hero__actions"
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <button
            className="btn-primary hero__btn"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore TIS <ArrowRight size={16} />
          </button>
          <a
            href="https://admission.tis.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hero__btn"
          >
            Admissions
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-btn"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}
