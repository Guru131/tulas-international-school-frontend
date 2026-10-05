// src/components/sections/BoardingSection.jsx
// Visually rich section — large image left, feature list right.

import { ShieldCheck, Users2, Utensils, Star } from "lucide-react";
import { boardingFeatures } from "../../data/tisData";
import ScrollReveal, { StaggerContainer } from "../animation/ScrollReveal";
import { fadeUpItem } from "../animation/animationVariants";
import { motion } from "framer-motion";
import "./BoardingSection.css";

const iconMap = { community: Users2, safety: ShieldCheck, personal: Star, meals: Utensils };

export default function BoardingSection() {
  return (
    <section className="boarding section" id="boarding" aria-labelledby="boarding-heading">
      <div className="container boarding__inner">

        {/* Text side */}
        <div className="boarding__text">
          <StaggerContainer>
            <motion.span className="eyebrow" variants={fadeUpItem}>Boarding Life</motion.span>
            <motion.h2 className="display-lg boarding__heading" variants={fadeUpItem} id="boarding-heading">
              Home Away<br />From Home
            </motion.h2>
            <motion.p className="body-lg boarding__intro" variants={fadeUpItem}>
              Our boarding programme is designed to give students a safe, structured, and enriching
              residential experience. Beyond studies, boarders build character, independence, and
              friendships that last a lifetime.
            </motion.p>

            <div className="boarding__features">
              {boardingFeatures.map((feat) => {
                const Icon = iconMap[feat.id];
                return (
                  <motion.div key={feat.id} className="boarding__feature" variants={fadeUpItem}>
                    <div className="boarding__feature-icon">
                      {Icon && <Icon size={20} />}
                    </div>
                    <div>
                      <h3 className="boarding__feature-title">{feat.title}</h3>
                      <p className="body-sm boarding__feature-desc">{feat.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </StaggerContainer>
        </div>

        {/* Image side */}
        <div className="boarding__images">
          <ScrollReveal delay={0.1}>
            <div className="boarding__img-main">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=700&q=80"
                alt="Students enjoying boarding life at Tulas International School"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="boarding__img-accent">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&q=80"
                alt="Student studying in boarding residence at TIS"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <div className="boarding__stat-badge">
            <span className="boarding__stat-num">24×7</span>
            <span className="boarding__stat-label">Medical &amp; Care</span>
          </div>
        </div>

      </div>
    </section>
  );
}
