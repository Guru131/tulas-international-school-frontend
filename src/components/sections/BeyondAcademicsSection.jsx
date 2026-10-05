// src/components/sections/BeyondAcademicsSection.jsx
// Editorial grid — alternating image + text blocks.

import { Palette, Music, Star } from "lucide-react";
import { beyondAcademicsItems } from "../../data/tisData";
import ScrollReveal from "../animation/ScrollReveal";
import "./BeyondAcademicsSection.css";

// Lucide does not have a Theater icon; use a custom inline SVG
const iconMap = {
  Palette, Music, Star,
  Theater: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10c0-3.5 2.5-7 5-7s4 2 5 2 2.5-2 5-2 5 3.5 5 7-2.5 7-5 7-4-2-5-2-2.5 2-5 2-5-3.5-5-7z"/>
      <path d="M6 20c0-1.6 2-3 4-3 1.4 0 2.6 0.6 3.5 1.5"/>
      <path d="M18 20c0-1.6-2-3-4-3-1.4 0-2.6 0.6-3.5 1.5"/>
    </svg>
  ),
};

const cardImages = [
  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80",
  "https://images.unsplash.com/photo-1503095396549-807759245b35?w=500&q=80",
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&q=80",
];

export default function BeyondAcademicsSection() {
  return (
    <section className="beyond section section--navy" id="beyond" aria-labelledby="beyond-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow" style={{ color: "var(--color-gold)" }}>Beyond Academics</span>
            <h2 className="display-md" id="beyond-heading" style={{ color: "#fff" }}>
              Where Passions Come to Life
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>
              Life at TIS extends far beyond the classroom. We nurture every student's unique talents
              through a rich tapestry of creative and leadership programmes.
            </p>
          </div>
        </ScrollReveal>

        <div className="beyond__grid">
          {beyondAcademicsItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <article className="beyond-card" style={{ "--accent": item.color }}>
                  <div className="beyond-card__img">
                    <img
                      src={cardImages[i]}
                      alt={item.title + " at Tulas International School"}
                      loading="lazy"
                    />
                    <div className="beyond-card__img-overlay" />
                  </div>
                  <div className="beyond-card__body">
                    <div className="beyond-card__icon">
                      {Icon && <Icon size={22} />}
                    </div>
                    <h3 className="beyond-card__title">{item.title}</h3>
                    <p className="beyond-card__desc body-sm">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
