# Refactoring Plan: Tibbiy Malaka Modernization

This document outlines the current technical state of the Tibbiy Malaka (Medical Training Center) project and provides a strategic roadmap for refactoring and enhancing the platform.

## 1. Current Codebase Analysis

### Stylesheets & Purposes
| File | Purpose |
| :--- | :--- |
| `src/app/globals.css` | Entry point for Tailwind CSS v4. Defines CSS variables for background/foreground and basic theme configuration. |
| **Inline Tailwind** | 99% of the styling is currently handled via inline Tailwind CSS classes within individual component files (`src/components/*.tsx`). |

### CSS Architecture
- **Framework**: Tailwind CSS v4 (using `@import "tailwindcss"` in `globals.css`).
- **Methodology**: Utility-first CSS within React/Next.js components.
- **Responsive Design**: Mobile-first approach using standard Tailwind breakpoints (`md:`, `lg:`).

---

## 2. Design System Documentation

### Color Palette (Corporate Medical)
| Color | Hex/Tailwind | Usage |
| :--- | :--- | :--- |
| **Corporate Navy** | `#0B1120` | Hero background, primary text, dark section backgrounds. |
| **Premium Gold** | `#C5A059` | Accents, borders, list icons, section indicators. |
| **Medical Teal** | `teal-600` | CTA buttons, active states, verified badges. |
| **Soft Slate** | `slate-50` / `slate-500` | Section backgrounds (B2B form), secondary text. |
| **Pure White** | `#FFFFFF` | Main backgrounds, cards, primary content containers. |

### Typography
- **Primary Font**: Modern Sans-Serif (Geist/Arial fallback).
- **H1/H2**: Bold weights, tight line-height (`leading-tight` or `leading-[1.1]`).
- **Subheadings**: Small uppercase with tracking (`tracking-widest`).

---

## 3. Redesign & Refactoring Priorities

### Component Status
| Component | Status | Priority | Action Needed |
| :--- | :--- | :--- | :--- |
| **Hero** | Excellent | Low | Add motion/scroll-reveal effects. |
| **Courses** | Functional | Medium | Refactor into separate `CourseCard` sub-components for reusability. |
| **Gallery** | Refined | Low | Add a lightbox or modal for viewing full-size images. |
| **License** | Solid | Medium | Make the document mockup interactive (hover detail). |
| **Team** | Clean | Medium | Add individual profile modals or social links. |
| **Contact Form** | Refined | High | Add client-side validation and a real API endpoint integration. |
| **Navbar** | Stable | Medium | Improve mobile menu transition smoothness. |

---

## 4. Priority Matrix

### Critical (Broken/Missing)
- **Form Integration**: Form currently only alerts on success; needs a backend or third-party service (e.g., Formspree/Resend).
- **Asset Integrity**: Ensure all local `/images/` paths are populated with real medical photography.

### High (UX Issues)
- **Lazy Loading**: Optimize the `Gallery` for faster initial paint on mobile.
- **Accessibility (a11y)**: Add `aria-label` attributes to all icon-only buttons.
- **Input Masking**: Add phone number masking to the Contact form (e.g., using `react-imask`).

### Medium (Visual Polish)
- **Framermotion**: Implement `framer-motion` for smoother page transitions and scroll-reveals.
- **Consistent Spacing**: Standardize vertical padding (`py-24`) across all sections.

---

## 5. Step-by-Step Roadmap

### Phase 1: Technical Stabilization (Current)
- [x] Consolidate B2B/B2C lead capture logic.
- [x] Fix external image dependency issues (switch to local assets).
- [x] Verify mobile responsiveness on all grids.

### Phase 2: UX & Performance (Next Week)
- [ ] Install `framer-motion` and add entry animations.
- [ ] Implement a reusable `Button` and `SectionHeading` component to reduce code duplication.
- [ ] Add `next-sitemap` and SEO metadata to `layout.tsx`.

### Phase 3: Feature Expansion (Future)
- [ ] Create a separate "Courses" page with detailed curriculum for each of the 26 directions.
- [ ] Add an Admin Dashboard for managing lead submissions.
- [ ] Implement a multi-language toggle (Uzbek/Russian/English).

---

*Last Updated: March 1, 2026*
