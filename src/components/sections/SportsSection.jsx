// src/components/sections/SportsSection.jsx
// Horizontal scrolling sports gallery with hover effects.

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sports } from "../../data/tisData";
import ScrollReveal from "../animation/ScrollReveal";
import "./SportsSection.css";

export default function SportsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = dir === "left" ? -320 : 320;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="sports section section--warm" id="sports" aria-labelledby="sports-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow">Sports at TIS</span>
            <h2 className="display-md" id="sports-heading">
              Sport Is Not a Facility. <br className="d-none d-md-block" />
              <span className="sports__heading-accent">It Is the Foundation.</span>
            </h2>
            <p className="body-md">
              With 16+ Olympic sports, we build discipline, teamwork, and resilience alongside academic excellence.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll controls */}
      <div className="sports__scroll-controls">
        <button
          className="sports__scroll-btn"
          onClick={() => scroll("left")}
          aria-label="Scroll sports left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="sports__scroll-btn"
          onClick={() => scroll("right")}
          aria-label="Scroll sports right"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Gallery */}
      <div className="sports__track" ref={scrollRef} role="list">
        {sports.map((sport, i) => (
          <motion.article
            key={sport.id}
            className="sport-card"
            role="listitem"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.45 }}
            viewport={{ once: true }}
          >
            <div className="sport-card__img">
              <img
                src={sport.image}
                alt={sport.name + " at Tulas International School"}
                loading="lazy"
              />
              <div className="sport-card__overlay">
                <span className="sport-card__name">{sport.name}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
