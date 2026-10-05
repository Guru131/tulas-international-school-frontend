// src/components/sections/AcademicsSection.jsx

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Lightbulb, Globe } from "lucide-react";
import { academicCards } from "../../data/tisData";
import ScrollReveal, { StaggerContainer } from "../animation/ScrollReveal";
import { fadeUpItem } from "../animation/animationVariants";
import "./AcademicsSection.css";

const iconMap = { GraduationCap, Sparkles, Lightbulb, Globe };

export default function AcademicsSection() {
  return (
    <section className="academics section section--warm" id="academics" aria-labelledby="academics-heading">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="eyebrow">Academics</span>
            <h2 className="display-md" id="academics-heading">Learning That Lasts a Lifetime</h2>
            <p className="body-md">
              At TIS, we follow the CBSE curriculum with a commitment to making learning engaging,
              purposeful, and deeply meaningful for every student.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="academics__grid">
          {academicCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.article key={card.id} className="academic-card" variants={fadeUpItem}>
                <div className="academic-card__icon">
                  {Icon && <Icon size={26} />}
                </div>
                <h3 className="academic-card__title">{card.title}</h3>
                <p className="academic-card__desc body-sm">{card.description}</p>
              </motion.article>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
