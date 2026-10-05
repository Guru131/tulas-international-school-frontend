// src/pages/Home.jsx
// Main page — assembles all sections in order.

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import HighlightsSection from "../components/sections/HighlightsSection";
import AcademicsSection from "../components/sections/AcademicsSection";
import BoardingSection from "../components/sections/BoardingSection";
import SportsSection from "../components/sections/SportsSection";
import BeyondAcademicsSection from "../components/sections/BeyondAcademicsSection";
import AchievementsSection from "../components/sections/AchievementsSection";
import CampusSection from "../components/sections/CampusSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import AdmissionsCTA from "../components/sections/AdmissionsCTA";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <AcademicsSection />
      <BoardingSection />
      <SportsSection />
      <BeyondAcademicsSection />
      <AchievementsSection />
      <CampusSection />
      <TestimonialsSection />
      <AdmissionsCTA />
      <ContactSection />
    </main>
  );
}
