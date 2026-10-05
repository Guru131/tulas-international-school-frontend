// src/components/sections/ContactSection.jsx

import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { contactInfo } from "../../data/tisData";
import ScrollReveal from "../animation/ScrollReveal";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact section section--warm" id="contact" aria-labelledby="contact-heading">
      <div className="container contact__inner">

        {/* Info */}
        <div className="contact__info">
          <ScrollReveal>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="display-md contact__heading" id="contact-heading">
              We Would Love to Hear From You
            </h2>
            <p className="body-md contact__sub">
              Whether you have questions about admissions, boarding, academics, or just want to learn
              more about Tulas International School — we are here to help.
            </p>

            <div className="contact__details">
              <a href={"tel:" + contactInfo.admissionsPhone} className="contact__detail-item">
                <div className="contact__detail-icon"><Phone size={20} /></div>
                <div>
                  <p className="contact__detail-label">Admissions Helpline</p>
                  <p className="contact__detail-value">{contactInfo.admissionsPhone}</p>
                  <p className="contact__detail-value">{contactInfo.officePhone}</p>
                </div>
              </a>

              <a href={"mailto:" + contactInfo.email} className="contact__detail-item">
                <div className="contact__detail-icon"><Mail size={20} /></div>
                <div>
                  <p className="contact__detail-label">Email</p>
                  <p className="contact__detail-value">{contactInfo.email}</p>
                </div>
              </a>

              <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="contact__detail-item">
                <div className="contact__detail-icon"><MapPin size={20} /></div>
                <div>
                  <p className="contact__detail-label">Address</p>
                  <p className="contact__detail-value">{contactInfo.address}</p>
                </div>
              </a>
            </div>

            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__maps-link"
            >
              <ExternalLink size={14} /> View on Google Maps
            </a>
          </ScrollReveal>
        </div>

        {/* Enquiry Form */}
        <ScrollReveal delay={0.15}>
          <div className="contact__form-card">
            <h3 className="contact__form-title">Send an Enquiry</h3>
            <form
              className="contact__form"
              onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will get back to you soon."); }}
              noValidate
            >
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input id="contact-name" type="text" placeholder="Your name" required />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="contact-phone">Phone *</label>
                  <input id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-class">Class Seeking Admission</label>
                <select id="contact-class">
                  <option value="">Select class</option>
                  {["IV","V","VI","VII","VIII","IX","X","XI","XII"].map(c => (
                    <option key={c} value={c}>Class {c}</option>
                  ))}
                </select>
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" placeholder="Any questions or details..." rows={4} />
              </div>
              <button type="submit" className="btn-primary contact__form-submit">
                Send Enquiry
              </button>
            </form>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
