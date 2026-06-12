# Samarth Shinde — Portfolio · SAMARTH.EXE

A scroll-driven, neon **gamer-themed** portfolio built with React + Vite. The page is a playthrough: each section is a *zone* with its own animated background scene that crossfades in as you scroll — the career as a game, the patent as a legendary drop.

## Live Demo

> https://samarthfolio.netlify.app

## The Concept — PLAYER ONE

Scrolling advances the story. A fixed full-screen canvas watches your scroll position and blends between eight procedural neon scenes, one per zone:

| Zone | Section | Background Scene |
|------|---------|------------------|
| 00 | Player One (Hero) | Aurora drift — orbiting neon blobs + dust |
| 01 | Origin Story (Career Timeline) | Warp field — hyperspace star streaks |
| 02 | Core Attributes (Strengths) | Synthwave grid — perspective floor + sun |
| 03 | Skill Tree (Skills) | Neural net — linked drifting orbs |
| 04 | Quest Log (Experience) | Night city — neon skyline + scanline sweep |
| 05 | Inventory (Projects) | Loot vault — wireframe polygons + sparkles |
| 06 | Trophy Room (Achievements) | Trophy rain — rising gold embers |
| 07 | Join Party (Contact) | Terminal rain — matrix glyph columns |

## UI/UX — reactbits.dev components

Game-feel components adapted from [reactbits.dev](https://reactbits.dev):

- **GlitchText** — RGB-split glitch headline on the hero name
- **DecryptedText** — section labels scramble-decode into view
- **SpotlightCard** — strength cards with cursor-tracked glow
- **TiltedCard** — 3D-tilting project cards (framer-motion springs)
- **StarBorder** — buttons with orbiting edge light

Plus a full game HUD: top nav with zone links, bottom **XP bar** (scroll progress), zone indicator (`ZONE 03 // SKILL TREE`), diamond side-rail, boot screen (`LOADING WORLD…` + Konami hint), typed roles, XP-style skill bars, and a gold **LEGENDARY ITEM** patent card with sheen.

## AI-generated video backgrounds (drop-in ready)

Each zone's canvas scene can be replaced by an AI-generated video (e.g. Higgsfield image→video, using consecutive keyframes so the story flows section to section — keep face details unchanged when generating):

1. Drop clips into `public/videos/`
2. Map them in `src/data/resume.js`:
   ```js
   export const sceneVideos = { hero: '/videos/hero.mp4', timeline: '/videos/timeline.mp4' };
   ```
3. Videos auto-crossfade with scroll exactly like the canvas scenes. Zones without a video keep their procedural scene.

**Hero photo:** replace `public/hero.jpg` with your preferred portrait — the neon frame, scanline and HUD plate adapt automatically.

## Tech Stack

- **React 18 + Vite 5**, `framer-motion` for scroll/in-view animation
- Canvas 2D for all eight background scenes (zero WebGL deps)
- Fonts: Orbitron · Chakra Petch · Share Tech Mono · Press Start 2P
- `prefers-reduced-motion` supported throughout; fully responsive
- Deployed via Netlify (`netlify.toml` → `npm run build` → `dist/`)

```bash
npm install
npm run dev      # local dev
npm run build    # production build
```

The previous single-file portfolio is preserved at [`/legacy.html`](public/legacy.html).

## About Me

**Samarth Shinde** — AI Analyst at Impact Analytics, Bengaluru.
BE in Electronics & Telecommunication + Minors in AI/ML from Ramaiah Institute of Technology (2021–2025).

- Filed Indian Patent: *System and Method for Detecting Seat Belt Usage in an Automobile* (App No: 202541052870)
- ML Research Intern at Stellantis — Intelli-Sensing project with RIT & IIT-Madras
- NPTEL certifications from IIT Madras, IIT Kharagpur, IIT Delhi

## Contact

- Email: [Samarth.060803@gmail.com](mailto:Samarth.060803@gmail.com)
- LinkedIn: [linkedin.com/in/samarth-shinde-79a9b4249](https://linkedin.com/in/samarth-shinde-79a9b4249)
- GitHub: [github.com/SamarthShinde](https://github.com/SamarthShinde)
- Phone: +91 97 39 53 65 05

---

*INSERT COIN TO START ▮ — "Ship fast, think deep."*
