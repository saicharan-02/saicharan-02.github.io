@AGENTS.md

# Sai Charan Hasnabad — Personal Portfolio

## Project Overview
Next.js 16 (App Router, JavaScript) personal portfolio site for Sai Charan Hasnabad, a MuleSoft Integration Developer at Capgemini. Built with Tailwind CSS v4 and Framer Motion.

## Tech Stack
- **Framework:** Next.js 16 (App Router, no `src/` dir)
- **Styling:** Tailwind CSS v4 — uses `@import "tailwindcss"` in `globals.css`, no `tailwind.config.js`
- **Animations:** Framer Motion (`motion`, `AnimatePresence`, `whileInView`)
- **Icons:** `react-icons` (`react-icons/hi`, `react-icons/fa`, `react-icons/si`)

## Critical: Tailwind v4 Gotcha
**Custom CSS classes defined in `globals.css` (e.g. `.section-container`, `.gradient-text`) are NOT picked up as Tailwind utility classes.** They work as regular CSS but cannot be used where Tailwind scans for classes. Always use explicit inline Tailwind utilities (e.g. `max-w-[1100px] mx-auto px-6`) instead of `.section-container` in JSX className strings — this was the root cause of padding/spacing bugs on the Navbar and Contact sections.

## File Structure
```
app/
  layout.js       — root layout, metadata, imports globals.css
  page.js         — assembles all section components
  globals.css     — Tailwind import, CSS variables, .gradient-text, .section-container
components/
  Navbar.js       — fixed top nav, scroll-aware bg, mobile hamburger, Resume download + Hire Me buttons
  Hero.js         — full-screen hero, name, title, CTA buttons (View Work / Get In Touch / Resume download)
  About.js        — summary, 4 highlight cards, 3 stat counters
  Skills.js       — 6 color-coded skill group cards with pill badges
  Experience.js   — timeline layout, Capgemini (2 roles) + Gainwell
  Projects.js     — cards for Charter Communications, Mercedes-Benz, KPMG
  Education.js    — B.Tech + 3 certification cards
  Contact.js      — Email / Phone / LinkedIn cards + footer
public/
  Sai_Charan_Resume.pdf  — resume file served for download
```

## Resume Location
Original PDF: `/Users/saicharan/Documents/workspaces/claude-space/portfolio/Sai_Charan_mulesoft_Resume.pdf`
Served from: `public/Sai_Charan_Resume.pdf`

## Owner Info (from resume)
- **Name:** Sai Charan Hasnabad
- **Email:** saicharanhasnabad@gmail.com
- **Phone:** +91 90590 43855
- **LinkedIn:** linkedin.com/in/sai-charan-hasnabad
- **Role:** MuleSoft Integration Developer, Associate Consultant at Capgemini
- **Experience:** 3.5+ years
- **Certifications:** MuleSoft Certified Developer Level 1 (MCD1), MuleSoft Certified Integration Associate, Salesforce AI Associate

## Dev Server
```bash
cd /Users/saicharan/Documents/workspaces/claude-space/portfolio-app
npm run dev   # starts on http://localhost:3000
```

## Design System
- **Background:** `#0a0a0f` (near black)
- **Primary accent:** Indigo (`indigo-400/500/600`)
- **Secondary accents:** Purple, Cyan, Emerald, Amber, Rose (per skill group)
- **Text:** `slate-300/400/500` hierarchy
- **Cards:** `bg-white/3 border border-white/5 rounded-2xl` with hover states
- **Gradient text:** `.gradient-text` class (indigo → purple → cyan)
- **Animations:** All sections use `whileInView` with `once: true` for scroll-triggered entry
