// src/components/sections/CampusSection.jsx
// Full-width immersive image section with scroll animation.

import { motion } from "framer-motion";
import ScrollReveal from "../animation/ScrollReveal";
import { ArrowRight } from "lucide-react";
import "./CampusSection.css";

export default function CampusSection() {
  return (
    <section className="campus" aria-labelledby="campus-heading">
      <motion.div
        className="campus__bg"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1601758124096-b97a2d3d5716?w=1600&q=80"
          alt="Tulas International School campus in Dehradun surrounded by Himalayan hills"
          loading="lazy"
        />
        <div className="campus__overlay" />
      </motion.div>

      <div className="container campus__content">
        <ScrollReveal>
          <span className="eyebrow campus__eyebrow">Campus Life</span>
          <h2 className="display-lg campus__heading" id="campus-heading">
            Discover the<br />Tulas Experience
          </h2>
          <p className="body-lg campus__sub">
            22 acres of lush, pollution-free campus nestled in the foothills of the Himalayas.
            Modern infrastructure, vibrant green spaces, and world-class facilities — all designed
            to inspire and nurture young minds.
          </p>
          <a
            href="https://tis.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary campus__cta"
          >
            Take a Virtual Tour <ArrowRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
