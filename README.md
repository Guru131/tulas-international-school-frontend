# Tulas International School (TIS) — Frontend Engineering Showcase

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![CSS Design System](https://img.shields.io/badge/CSS-Custom_Design_Tokens-2965F1?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> A modern, high-performance, and visually captivating frontend web application crafted for **Tulas International School (Dehradun)**. Designed to embody the school’s prestigious heritage while delivering an engaging, responsive, and accessible digital experience.

---

## 📌 Table of Contents
1. [Project Overview](#-project-overview)
2. [Tech Stack & Rationale](#-tech-stack--rationale)
3. [Component Architecture & Structure](#-component-architecture--structure)
4. [Design System & Aesthetics](#-design-system--aesthetics)
5. [Key Features & Animations](#-key-features--animations)
6. [Performance & Accessibility (a11y)](#-performance--accessibility-a11y)
7. [Getting Started Locally](#-getting-started-locally)
8. [Deployment Instructions](#-deployment-instructions)
9. [Interview Talking Points & Defense](#-interview-talking-points--defense)

---

## 🌟 Project Overview

**Tulas International School (TIS)** is one of India's premier CBSE-affiliated co-educational residential schools located amidst the scenic foothills of Dehradun, Uttarakhand. 

This project is a redesign and frontend implementation that elevates the school's digital presence:
- **School Atmosphere:** Deep Oxford Navy (`#0c1b33`), Warm Ivory (`#fbf9f4`), and Royal Gold (`#c9a84c`).
- **Target Audience:** Prospective parents, students, and evaluators looking for comprehensive insights into academics, residential boarding, sports, and extracurricular life.
- **Philosophy:** Clean, modular code without artificial complexity or bloated state management.

---

## 🛠 Tech Stack & Rationale

| Technology | Purpose | Why Chosen |
|---|---|---|
| **React 19** | Core UI Library | Component-driven architecture, latest hooks, fast concurrent rendering. |
| **Vite 8** | Build Tool & Bundler | Sub-second Hot Module Replacement (HMR) and optimized Rolldown production builds. |
| **Vanilla CSS + Tokens** | Styling System | Zero runtime overhead, full control over design tokens (`index.css`), avoids rigid utility classes. |
| **Framer Motion** | Animation Engine | Declarative scroll reveals, spring physics, and hardware-accelerated transforms. |
| **Lucide Icons** | SVG Iconography | Scalable, clean, tree-shakeable icons matching modern editorial aesthetic. |
| **Oxlint** | Linting & Code Hygiene | Blazing-fast static analysis ensuring 0 lint warnings and pure component exports. |

---

## 📁 Component Architecture & Structure

```
d:\NxtWave_Assign\
├── index.html                   # Semantic root with complete SEO & social meta tags
├── package.json                 # Clean scripts and production dependencies
├── vite.config.js               # Optimized Vite configuration
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Root layout: scroll progress, custom cursor, navbar, footer
│   ├── index.css                # Global design system: CSS custom properties, typography, reset
│   │
│   ├── data/
│   │   └── tisData.js           # Single source of truth for stats, testimonials, features & links
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Sticky glassmorphism header, active links, mobile drawer
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx       # Multi-column directory, pure year constant, social SVGs
│   │   │   └── Footer.css
│   │   │
│   │   ├── animation/
│   │   │   ├── ScrollReveal.jsx      # IntersectionObserver-based reveal & staggered container
│   │   │   ├── animationVariants.js  # Separated Framer Motion variants (Fast Refresh safe)
│   │   │   ├── CustomCursor.jsx      # Dynamic dual-ring cursor with touch-pointer fallback
│   │   │   └── CustomCursor.css
│   │   │
│   │   └── sections/
│   │       ├── HeroSection.jsx           # Full-bleed hero, dual CTAs, stats bar, quick badges
│   │       ├── HeroSection.css
│   │       ├── AboutSection.jsx          # Editorial layout, image collage, founder story
│   │       ├── AboutSection.css
│   │       ├── HighlightsSection.jsx     # Viewport-triggered animated metric counters
│   │       ├── HighlightsSection.css
│   │       ├── AcademicsSection.jsx      # Card grid covering CBSE curriculum & pedagogy
│   │       ├── AcademicsSection.css
│   │       ├── BoardingSection.jsx       # Pastoral care, dining, security & residential life
│   │       ├── BoardingSection.css
│   │       ├── SportsSection.jsx         # Horizontal smooth-scroll gallery with arrow controls
│   │       ├── SportsSection.css
│   │       ├── BeyondAcademicsSection.jsx# Co-curricular grid (Arts, Music, Clubs, Leadership)
│   │       ├── BeyondAcademicsSection.css
│   │       ├── AchievementsSection.jsx   # Legacy, accolades, and excellence highlight banner
│   │       ├── AchievementsSection.css
│   │       ├── CampusSection.jsx         # 22-acre scenic campus banner with video/tour CTA
│   │       ├── CampusSection.css
│   │       ├── TestimonialsSection.jsx   # Responsive testimonial carousel with pagination dots
│   │       ├── TestimonialsSection.css
│   │       ├── AdmissionsCTA.jsx         # Distinct high-contrast conversion banner
│   │       ├── AdmissionsCTA.css
│   │       ├── ContactSection.jsx        # Interactive admissions enquiry form with validation
│   │       └── ContactSection.css
│   │
│   └── pages/
│       └── Home.jsx             # Clean page orchestrator assembling all sections
```

---

## 🎨 Design System & Aesthetics

- **Color Palette:**
  - Primary Navy: `#0c1b33` (Deep, commanding, academic)
  - Secondary Navy: `#162846` & `#1e355b`
  - Accent Gold: `#c9a84c` & `#e4c478` (Signifies prestige, quality, and legacy)
  - Warm Canvas: `#fbf9f4` & `#f3ede2` (Soft on eyes, replaces harsh white)
  - Pure White & Dark Slate for crisp text contrast (`#1a202c`, `#4a5568`)
- **Typography:**
  - Headings: Playfair Display / Cormorant Garamond serif aesthetic for sophistication.
  - Body Copy: Inter / system sans-serif for optimal legibility at all font sizes.
- **Glassmorphism & Depth:**
  - Translucent sticky navbar with `backdrop-filter: blur(12px)`.
  - Subtle borders (`rgba(255,255,255,0.08)`) and multi-layer box shadows.

---

## ⚡ Key Features & Animations

1. **Scroll-Linked Reading Progress Bar:**
   - Framer Motion `useScroll()` and `useSpring()` create a silky 3px gold line at the top of the browser window.
2. **Animated Numerical Counters:**
   - Highlights section automatically detects viewport entry via `useInView()` and animates key statistics (`22+ Acres`, `100% Pass Rate`, `1:8 Faculty Ratio`, `15+ Sports`).
3. **Dual Interactive Custom Cursor:**
   - Features a quick-following dot and a smooth trailing spring ring. Automatically scales on hovering buttons and links, and safely deactivates on touch/mobile devices (`pointer: coarse`).
4. **Horizontal Sports Gallery:**
   - Interactive carousel displaying 8+ athletic disciplines with one-touch chevron navigation and native smooth scrolling.
5. **Interactive Admissions Form:**
   - Responsive form with input validation, class selection, message box, and visual submission confirmation.

---

## ♿ Performance & Accessibility (a11y)

- **Semantic HTML5:** Built using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags.
- **Screen Reader Support:** Accessible `aria-label`, `aria-labelledby`, and `aria-expanded` attributes on interactive elements.
- **Skip Link:** Includes a hidden `#main-content` skip-to-content anchor for keyboard navigation.
- **Zero Heavy External Dependencies:** Pure CSS animations and modular components ensure small bundle size (< 130 kB gzipped JS).
- **Responsive at All Viewports:** Fluid flexbox and CSS Grid designs tested across 320px mobile up to 4K displays.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.0+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd NxtWave_Assign

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build & Preview
```bash
# Lint code (checks with 0 warnings)
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Click **Deploy Site**.

---

## 🎓 Interview Talking Points & Defense

When explaining this project to evaluators during the technical interview, highlight these key decisions:

1. **Why not Tailwind or a heavy component library?**
   - *"I implemented a custom design token system in `index.css`. This gives complete ownership over typography, spacing, and brand colors without fighting utility class overrides or inflating CSS runtime."*
2. **How is state organized?**
   - *"Following the principle of keeping code clean and not over-engineering with unnecessary Redux or Contexts, all static data resides in a single, maintainable `tisData.js` file, and UI state (such as mobile menu toggles and active tabs) is scoped locally."*
3. **How was performance guaranteed?**
   - *"Images use native `loading='lazy'`, animations rely on CSS transforms and Framer Motion's hardware-accelerated properties, and the custom cursor automatically respects `pointer: coarse` media queries."*
4. **Code Quality & Maintainability:**
   - *"The project passes `oxlint` with 0 warnings and 0 errors, components adhere strictly to single-responsibility principles, and animation variants are decoupled for React Fast Refresh safety."*

---

*Crafted with precision for Tulas International School.*
