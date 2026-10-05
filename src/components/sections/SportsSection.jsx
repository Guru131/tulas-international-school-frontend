// src/components/sections/SportsSection.jsx
// Horizontal scrolling sports gallery with category filter and hover effects.

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, Sparkles } from "lucide-react";
import { sports } from "../../data/tisData";
import ScrollReveal from "../animation/ScrollReveal";
import "./SportsSection.css";

const CATEGORIES = ["All Sports", "Olympic", "Courts", "Outdoor", "Indoor", "Equestrian & More"];

export default function SportsSection() {
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All Sports");

  const filteredSports = useMemo(() => {
    if (selectedCategory === "All Sports") return sports;
    if (selectedCategory === "Olympic") {
      return sports.filter((s) => s.category === "Olympic" || s.category === "Aquatics");
    }
    if (selectedCategory === "Courts") {
      return sports.filter((s) => s.category === "Courts");
    }
    if (selectedCategory === "Outdoor") {
      return sports.filter((s) => s.category === "Outdoor");
    }
    if (selectedCategory === "Indoor") {
      return sports.filter((s) => s.category === "Indoor" || s.category === "Martial Arts");
    }
    if (selectedCategory === "Equestrian & More") {
      return sports.filter((s) => s.category === "Equestrian" || s.category === "Wellness");
    }
    return sports;
  }, [selectedCategory]);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = dir === "left" ? -340 : 340;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="sports section section--warm" id="sports" aria-labelledby="sports-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <Trophy size={15} color="var(--color-gold)" /> Sports at TIS
            </span>
            <h2 className="display-md" id="sports-heading">
              Sport Is Not a Facility. <br className="d-none d-md-block" />
              <span className="sports__heading-accent">It Is the Foundation.</span>
            </h2>
            <p className="body-md">
              With 16+ Olympic &amp; competitive sports disciplines, dedicated national coaches, and world-class infrastructure, we build discipline, teamwork, and resilience.
            </p>
          </div>
        </ScrollReveal>

        {/* Category filter pills */}
        <div className="sports__filter-bar" role="tablist" aria-label="Filter sports disciplines">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={"sports__filter-btn" + (selectedCategory === cat ? " is-active" : "")}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Header controls */}
      <div className="sports__controls-wrap">
        <div className="sports__count-info">
          <Sparkles size={14} color="var(--color-gold)" />
          <span>Showing <strong>{filteredSports.length}</strong> Disciplines</span>
        </div>
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
      </div>

      {/* Gallery Track */}
      <div className="sports__track" ref={scrollRef} role="list" tabIndex={0} aria-label="Sports gallery list">
        <AnimatePresence mode="popLayout">
          {filteredSports.map((sport, i) => (
            <motion.article
              key={sport.id}
              className="sport-card"
              role="listitem"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(i * 0.03, 0.3), duration: 0.35 }}
            >
              <div className="sport-card__img">
                <img
                  src={sport.image}
                  alt={sport.name + " at Tulas International School"}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=500&q=80";
                  }}
                />
                <div className="sport-card__category-badge">{sport.category}</div>
                <div className="sport-card__overlay">
                  <span className="sport-card__name">{sport.name}</span>
                  {sport.facility && (
                    <span className="sport-card__facility">{sport.facility}</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
