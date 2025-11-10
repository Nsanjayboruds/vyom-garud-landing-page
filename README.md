# VyomGarud landing page  

# VyomGarud — Landing Page (v0) 

A modern, responsive single-page landing site for VyomGarud — a UAV / drone systems company with a military-grade, professional identity.  
This repository contains a Next.js + Tailwind CSS implementation focusing on a dark, confident, and precise aesthetic.

Status: Draft / v0 — single polished page.

----

## Quick preview
- Hero with bold visual, CTA
- About section with mission summary
- Capabilities / Products (3 cards)
- Highlights (3 concise bullets)
- Contact / Footer with simple form
- Dark, military-futuristic aesthetic using charcoal / white / orange (#ff7b00)
- Subtle animations (CSS)

---

## Tech stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Poppins font (Google Fonts)
- Optional: Framer Motion (if added for animations)
- Package manager: pnpm (pnpm-lock.yaml present)

---

## Colors & Typography
- Primary background / charcoal: #0f1416 (or similar)
- Accent orange: #ff7b00
- Text: white / gray scales
- Fonts: Poppins (primary), fallbacks to Inter/System UI

---

## Design notes
Goals:
- Convey reliability, precision, and advanced autonomy.
- Clean, confident layout with generous spacing and clear hierarchy.
- Slightly military / futuristic styling: strong typographic weight, constrained color palette, subtle tech-style SVG in the hero.
- Reusable components for cards, lists, and forms to keep code organized.

Accessibility:
- Sufficient contrast for primary text
- Semantic HTML sections and landmarks
- Button states and focus outlines preserved

Animations:
- Subtle micro-interactions (hover/press on CTAs)
- Decorative SVG/line animations in hero (CSS or Framer Motion can be used)

---

## Project structure (high level)
- app/               — Next.js app router pages and global layout
- components/        — Reusable UI components (Hero, Capabilities, Highlights, FooterContact, etc.)
- public/            — Static assets (images, screenshots)
- styles/ or app/globals.css — Tailwind global styles & font import
- package.json       — Scripts and dependencies

---

## Setup / Run locally

Prerequisites
- Node.js 18+ recommended
- pnpm (or use npm/yarn but pnpm is used here)

Commands
1. Install
   - pnpm install

2. Development server
   - pnpm dev
   - Open http://localhost:3000

3. Build
   - pnpm build

4. Start (production)
   - pnpm start

If you prefer npm:
- npm install
- npm run dev

---

## Deployment
This app is compatible with Vercel, Netlify, or any static hosting that supports Next.js. For Vercel:
1. Import the repo in Vercel.
2. Use the default build command (`pnpm build`) and output (Next.js).
3. Add environment variables if you wire the contact form backend.

---


Add a `public/screenshots/` folder with:

<img width="1918" height="829" alt="Screenshot 2025-11-06 182356" src="https://github.com/user-attachments/assets/207122b0-4f7b-4f68-9d27-818bc2943a92" />
<img width="1911" height="884" alt="Screenshot 2025-11-06 182407" src="https://github.com/user-attachments/assets/637efc5c-28ae-451b-a310-2cd2913914ce" />
<img width="1903" height="876" alt="Screenshot 2025-11-06 182418" src="https://github.com/user-attachments/assets/87438c45-799c-4696-b669-87e92c16648d" />



---

## Development tips / suggestions
- Sketch a wireframe before implementing new features or re-styling.
- Keep components small and reusable; use a `components/ui` folder for primitives.
- Prefer utility-first Tailwind classes for speed; extract repeating combos into component classes if they repeat often.
- Use `framer-motion` for entrance/hover micro-animations if you want smoother motion.
- Ensure responsive breakpoints (mobile-first): sm / md / lg / xl.

---

## Design decisions (short)
- Single-page focus: concentrate effort on one polished experience rather than many pages.
- Dark + orange palette: communicates seriousness with a clear accent for CTAs.
- Minimal copy: short, mission-focused language to emphasize reliability and technical capability.

---

## Example commit messages
- feat(hero): add hero section and SVG visual
- feat(capabilities): create product cards
- style(tailwind): add global theme variables & font import
- chore(readme): add README with setup and design notes

---

## Contributing
1. Fork the repository
2. Create a branch: `git checkout -b feat/my-change`
3. Commit changes: `git commit -m "feat: short description"`
4. Push and open a PR

Please keep changes small and focused. Include screenshots for any UI changes.

---

## License
Add a LICENSE file or choose a license. (MIT is common for demo projects.)

---

If you'd like, I can:
- Create or update README directly in the repository.
- Add example screenshots to `public/screenshots/`.
- Push a branch with the working landing page components and a polished README.
Tell me which of these you'd like me to do next and I'll proceed.
4. Vercel deploys the latest version from this repository
