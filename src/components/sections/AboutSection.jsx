// src/components/sections/AboutSection.jsx
// Editorial-style split layout with image collage and staggered text reveal.

import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer } from "../animation/ScrollReveal";
import { fadeUpItem } from "../animation/animationVariants";
import { ArrowRight } from "lucide-react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container about__inner">

        {/* Left — Image collage */}
        <div className="about__images">
          <ScrollReveal>
            <div className="about__img-primary">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700&q=80"
                alt="Students collaborating at Tulas International School"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="about__img-secondary">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80"
                alt="Teacher and students in classroom at TIS"
                loading="lazy"
              />
              <div className="about__badge">
                <span className="about__badge-year">Est.</span>
                <span className="about__badge-num">2012</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right — Text */}
        <div className="about__text">
          <StaggerContainer>
            <motion.span className="eyebrow" variants={fadeUpItem}>About TIS</motion.span>
            <motion.h2 className="display-lg about__heading" variants={fadeUpItem} id="about-heading">
              More Than a School
            </motion.h2>
            <motion.p className="body-lg about__desc" variants={fadeUpItem}>
              Tulas International School was established in 2012 under the aegis of Rishabh Educational
              Trust to impart education through seamless opportunities. Situated in the pristine foothills
              of the Himalayas, TIS is a CBSE-affiliated co-educational boarding and day school serving
              students from Class IV to XII.
            </motion.p>
            <motion.p className="body-md about__desc about__desc--muted" variants={fadeUpItem}>
              Here, every student is seen, heard, and inspired. We believe that great education goes
              beyond textbooks — it shapes character, builds resilience, fosters creativity, and develops
              leaders who will make a difference in the world.
            </motion.p>
            <motion.a
              variants={fadeUpItem}
              href="https://tis.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline--dark btn-primary about__cta"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--color-navy)", color: "#fff", borderRadius: "50px",
                padding: "0.875rem 2rem", fontWeight: 600, fontSize: "0.9375rem" }}
            >
              Discover Our Story <ArrowRight size={16} />
            </motion.a>
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
