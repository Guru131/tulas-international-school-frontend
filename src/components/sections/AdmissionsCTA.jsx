// src/components/sections/AdmissionsCTA.jsx
// Strong conversion section, visually distinct from hero.

import ScrollReveal from "../animation/ScrollReveal";
import { ArrowRight, FileText } from "lucide-react";
import { contactInfo } from "../../data/tisData";
import "./AdmissionsCTA.css";

export default function AdmissionsCTA() {
  return (
    <section className="admissions-cta section" id="admissions" aria-labelledby="admissions-heading">
      <div className="admissions-cta__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
          alt=""
          loading="lazy"
        />
        <div className="admissions-cta__overlay" />
      </div>

      <div className="container admissions-cta__inner">
        <ScrollReveal>
          <span className="eyebrow admissions-cta__eyebrow">Admissions Open</span>
          <h2 className="display-lg admissions-cta__heading" id="admissions-heading">
            Ready to Begin<br />the Journey?
          </h2>
          <p className="body-lg admissions-cta__sub">
            Join a community where your child will be challenged, supported, and inspired to become
            the best version of themselves. Classes IV to XII — boarding and day school options available.
          </p>
          <div className="admissions-cta__actions">
            <a
              href={contactInfo.admissionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary admissions-cta__btn"
            >
              Apply Now <ArrowRight size={16} />
            </a>
            <button
              className="btn-outline admissions-cta__btn"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <FileText size={16} /> Enquire Now
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
