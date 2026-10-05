// src/components/sections/CampusSection.jsx
// Full-width immersive image section with interactive experience tabs.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animation/ScrollReveal";
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import "./CampusSection.css";

const CAMPUS_PILLARS = [
  {
    id: "campus",
    label: "22-Acre Eco-Campus",
    tagline: "Pristine Himalayan Foothills",
    description: "Spread across 22 verdant acres in Dehradun, our pollution-free campus combines traditional tranquility with ultra-modern architectural infrastructure.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1600&q=80",
    stats: "22 Acres • 100% Green",
  },
  {
    id: "innovation",
    label: "STEM & Robotics Labs",
    tagline: "Future-Ready Learning Spaces",
    description: "Equipped with state-of-the-art AI, IoT, robotics, and integrated science laboratories fostering hands-on inquiry and scientific breakthrough.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1600&q=80",
    stats: "6+ Hi-Tech Labs • Smart Classrooms",
  },
  {
    id: "sports",
    label: "Olympic Sports Complex",
    tagline: "World-Class Athletic Arena",
    description: "Featuring an all-weather swimming pool, FIFA-size football pitch, indoor wooden badminton courts, archery ranges, and synthetic tennis courts.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80",
    stats: "16+ Sports • National Coaches",
  },
  {
    id: "boarding",
    label: "Residential Living",
    tagline: "A Safe, Warm Home Away from Home",
    description: "Air-conditioned modern dormitories with 24/7 dedicated house parents, CCTV surveillance, multi-cuisine dining hall, and 100% organic wellness.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&q=80",
    stats: "24/7 Care • On-Campus Infirmary",
  },
];

export default function CampusSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentPillar = CAMPUS_PILLARS[activeTab];

  return (
    <section className="campus" id="campus" aria-labelledby="campus-heading">
      {/* Background Image with cross-fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPillar.id}
          className="campus__bg"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={currentPillar.image}
            alt={currentPillar.label + " at Tulas International School Dehradun"}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80";
            }}
          />
          <div className="campus__overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="container campus__container">
        {/* Content Box */}
        <div className="campus__content">
          <ScrollReveal>
            <span className="eyebrow campus__eyebrow">
              <Compass size={14} style={{ display: "inline-block", marginRight: "0.4rem", verticalAlign: "middle" }} />
              Campus Experience
            </span>
            <h2 className="display-lg campus__heading" id="campus-heading">
              Discover the<br />
              <span className="campus__heading-gold">Tulas Experience</span>
            </h2>
            <p className="campus__tagline">{currentPillar.tagline}</p>
            <p className="body-lg campus__sub">
              {currentPillar.description}
            </p>

            <div className="campus__stat-badge">
              <CheckCircle2 size={16} color="var(--color-gold)" />
              <span>{currentPillar.stats}</span>
            </div>

            <div className="campus__actions">
              <a
                href="https://tis.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary campus__cta"
              >
                Take a Virtual Tour <ArrowRight size={16} />
              </a>
              <button
                className="btn-outline campus__cta-outline"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule Campus Visit
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Interactive Experience Navigator Selector */}
        <div className="campus__nav-tabs" role="tablist" aria-label="Campus experience pillars">
          <div className="campus__tabs-header">
            <Sparkles size={14} color="var(--color-gold)" />
            <span>Interactive Campus Navigator</span>
          </div>
          {CAMPUS_PILLARS.map((pillar, idx) => (
            <button
              key={pillar.id}
              role="tab"
              aria-selected={activeTab === idx}
              className={"campus__nav-btn" + (activeTab === idx ? " is-active" : "")}
              onClick={() => setActiveTab(idx)}
            >
              <span className="campus__nav-num">0{idx + 1}</span>
              <div className="campus__nav-info">
                <span className="campus__nav-title">{pillar.label}</span>
                <span className="campus__nav-desc">{pillar.tagline}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
