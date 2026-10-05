// src/components/sections/TestimonialsSection.jsx
// Clean carousel with 3 cards on desktop, 1 on mobile.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/tisData";
import ScrollReveal from "../animation/ScrollReveal";
import "./TestimonialsSection.css";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section className="testimonials section" aria-labelledby="testimonials-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow">Voices</span>
            <h2 className="display-md" id="testimonials-heading">What Our Community Says</h2>
          </div>
        </ScrollReveal>

        {/* Desktop — 3 cards */}
        <div className="testimonials__grid" aria-label="Testimonial cards">
          {testimonials.map((t, i) => (
            <article key={t.id} className={"testimonial-card" + (i === 1 ? " testimonial-card--featured" : "")}>
              <Quote className="testimonial-card__icon" size={32} aria-hidden="true" />
              <p className="testimonial-card__quote body-md">
                {t.quote}
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {t.name.split(" ").map(w => w[0]).join("").slice(0,2)}
                </div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="testimonials__mobile" aria-label="Testimonials carousel">
          <AnimatePresence mode="wait">
            <motion.article
              key={active}
              className="testimonial-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <Quote className="testimonial-card__icon" size={28} aria-hidden="true" />
              <p className="testimonial-card__quote body-md">{testimonials[active].quote}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {testimonials[active].name.split(" ").map(w => w[0]).join("").slice(0,2)}
                </div>
                <div>
                  <p className="testimonial-card__name">{testimonials[active].name}</p>
                  <p className="testimonial-card__role">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="testimonials__mobile-controls">
            <button onClick={prev} aria-label="Previous testimonial" className="testimonials__nav-btn">
              <ChevronLeft size={18} />
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={"testimonials__dot" + (i === active ? " is-active" : "")}
                  onClick={() => setActive(i)}
                  aria-label={"Testimonial " + (i + 1)}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="testimonials__nav-btn">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
