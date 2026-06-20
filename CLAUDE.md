# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build (output in `dist/`)
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint over `src` (`.js`/`.jsx`); runs with `--max-warnings 0`, so any warning fails the lint

There is no test suite in this project.

## Architecture

Single-page React portfolio built with Vite, Tailwind CSS, Framer Motion, and Three.js (`@react-three/fiber` + `drei`). Two routes only ([src/App.jsx](src/App.jsx)): `/` (the scrolling home page) and `/resume` (full PDF resume view).

Key structural conventions:

- **Section composition.** The home page is a vertical stack of section components (`Hero`, `About`, `Experience`, `Works`, `Tech`, `Contact`, `Footer`) rendered in `HomePage` inside [src/App.jsx](src/App.jsx). Each section component is typically wrapped with the `SectionWrapper` HOC ([src/hoc/SectionWrapper.jsx](src/hoc/SectionWrapper.jsx)), which applies standard padding, the Framer Motion stagger-in animation, and an anchor `id` for navbar scroll links.

- **3D / WebGL is guarded and deferred.** Three.js canvases (`StarsCanvas`, `EarthCanvas`, `BallCanvas`, `ComputersCanvas` under [src/components/canvas/](src/components/canvas/)) are expensive and failure-prone. `HomePage` calls `checkWebGLSupport()` before rendering the stars background and delays mounting it; [src/utils/errorMonitor.js](src/utils/errorMonitor.js) attaches `webglcontextlost`/`webglcontextrestored` handlers to recover from lost contexts. When touching 3D code, preserve the support-check and context-loss recovery — don't render canvases unconditionally.

- **Data is centralized in constants.** All content shown on the site — nav links, experiences, projects, tech list, resume metadata — lives in [src/constants/index.js](src/constants/index.js), with image/asset references re-exported through [src/assets/index.js](src/assets/index.js). Content edits go here, not in the section components.

- **Styling.** Tailwind utility classes plus a centralized [src/styles.js](src/styles.js) object holding reusable class strings (typography, buttons, badges). The theme (accent colors `primary`/`secondary`/`tertiary`, custom keyframe animations like `blob`, `shine`, `float`) is defined in [tailwind.config.js](tailwind.config.js). Prefer reusing `styles.js` entries and theme tokens over ad-hoc inline class strings.

- **Animation helpers** (variants for Framer Motion) live in [src/utils/motion.js](src/utils/motion.js).

- **Barrel exports.** Components are surfaced through [src/components/index.js](src/components/index.js) and canvases through [src/components/canvas/index.js](src/components/canvas/index.js). Note re-mappings there (e.g. `Tech` is exported as `TechSection`).

## Notes

- **EmailJS** is used for the contact form ([src/components/Contact.jsx](src/components/Contact.jsx)) with the service/template/public IDs hardcoded inline. These are EmailJS browser-side public identifiers (not secrets); update them in that file if the EmailJS account changes.
- The resume PDF is served from `public/` and rendered via `react-pdf` / `pdfjs-dist`. Recent commits have repeatedly swapped the resume file — when changing it, update all path references, not just the file.
