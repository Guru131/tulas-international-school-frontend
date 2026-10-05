// src/components/sections/HighlightsSection.jsx
// Four key TIS facts with animated counters and icon cards.

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Trophy, Heart, Users } from "lucide-react";
import { highlights } from "../../data/tisData";
import { StaggerContainer } from "../animation/ScrollReveal";
import { fadeUpItem } from "../animation/animationVariants";
import "./HighlightsSection.css";

const iconMap = { Leaf, Trophy, Heart, Users };

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className="highlight-card__number">
      {count}{suffix}
    </span>
  );
}

export default function HighlightsSection() {
  return (
    <section className="highlights section--navy section" aria-labelledby="highlights-heading">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Why TIS</span>
          <h2 className="display-md" id="highlights-heading" style={{ color: "#fff" }}>Key Highlights</h2>
          <p style={{ color: "rgba(255,255,255,0.65)" }}>
            Numbers that reflect the depth of our commitment to every student.
          </p>
        </div>

        <StaggerContainer className="highlights__grid">
          {highlights.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.id}
                className="highlight-card"
                variants={fadeUpItem}
              >
                <div className="highlight-card__icon">
                  {Icon && <Icon size={28} />}
                </div>
                <AnimatedCounter target={item.number} suffix={item.suffix} />
                <h3 className="highlight-card__label">{item.label}</h3>
                <p className="highlight-card__desc">{item.description}</p>
              </motion.article>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
