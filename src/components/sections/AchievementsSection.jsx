// src/components/sections/AchievementsSection.jsx
// Full-width editorial achievement showcase.

import ScrollReveal from "../animation/ScrollReveal";
import "./AchievementsSection.css";

export default function AchievementsSection() {
  return (
    <section className="achievements section" id="achievements" aria-labelledby="achievements-heading">
      <div className="achievements__inner">

        {/* Left text panel */}
        <div className="achievements__text">
          <ScrollReveal>
            <span className="eyebrow">Recognition</span>
            <h2 className="display-lg achievements__heading" id="achievements-heading">
              A Legacy of Excellence
            </h2>
            <p className="body-lg achievements__desc">
              Since 2012, Tulas International School has been recognised as one of the leading
              boarding schools in Dehradun, Uttarakhand — celebrated for academic results, sporting
              achievements, and holistic student development.
            </p>
            <ul className="achievements__list">
              <li>Top-ranked CBSE boarding school in Dehradun</li>
              <li>National-level sports achievers across multiple disciplines</li>
              <li>Strong board exam performance in Class X &amp; XII</li>
              <li>State-level cultural and artistic recognition</li>
              <li>22-acre modern campus with world-class facilities</li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Right image panel */}
        <ScrollReveal className="achievements__image-col" delay={0.15}>
          <div className="achievements__img">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
              alt="Award ceremony and celebration of student achievements at TIS"
              loading="lazy"
            />
            <div className="achievements__img-overlay" />
            <div className="achievements__img-caption">
              <p className="achievements__caption-text">
                "Tulas International School — Where every student's achievement is celebrated."
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
