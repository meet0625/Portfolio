
# Meet Kadiya — Portfolio

A dark-themed, fully responsive personal portfolio built as a code / version-control–inspired
experience: a terminal-style hero, a scroll-tracking "commit rail," and a live GitHub
contribution graph.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker&logoColor=white)
![License](https://img.shields.io/badge/license-unspecified-lightgrey)

<!-- Optional: replace with a real screenshot once you have one
![Portfolio preview](./frontend/public/preview.png)
-->

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start (Docker)](#quick-start-docker)
- [Quick Start (Local Dev)](#quick-start-local-dev-no-docker)
- [Project Structure](#project-structure)
- [Editing Content](#editing-content)
- [Replacing the Placeholder Resume](#replacing-the-placeholder-resume)
- [Contact Form](#contact-form)
- [SEO & Accessibility](#seo--accessibility)
- [Production Build Without Docker](#production-build-without-docker)
- [License](#license)

## Features

- 🖥️ Terminal-style hero section with typewriter effect
- 📊 Scroll-tracking "commit rail" as a signature navigation element
- 🐙 Live GitHub contribution graph
- 🌓 Dark theme, fully responsive layout
- 🐳 Dockerized, Nginx-served static build
- ♿ Accessible, SEO-optimized out of the box

## Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Nginx (production) · Docker / Docker Compose

## Quick Start (Docker)

```bash
cp .env.example .env      # optional — defaults work out of the box
docker compose up --build
```

Visit **http://localhost:8080**.

To use a different host port, set `PORT` in `.env` before building, e.g. `PORT=3000`.

## Quick Start (Local Dev, no Docker)

```bash
cd frontend
npm install
npm run dev
```

Visit **http://localhost:5173**.

## Project Structure

```
Portfolio/
├── docker-compose.yml       # Orchestrates the single `portfolio` service
├── .env.example             # PORT / VITE_FORM_ENDPOINT for docker-compose
├── STATE.md                 # Build progress log (safe to delete once satisfied)
└── frontend/
    ├── Dockerfile            # Multi-stage: Node build -> Nginx serve
    ├── nginx.conf            # SPA routing, gzip, cache headers, security headers
    ├── .dockerignore
    ├── .env.example           # VITE_FORM_ENDPOINT for local `npm run build`
    ├── index.html             # SEO meta tags, structured data, font loading
    ├── public/
    │   ├── resume.pdf         # PLACEHOLDER — replace with the real resume
    │   ├── favicon.svg
    │   ├── site.webmanifest
    │   ├── robots.txt
    │   └── sitemap.xml
    └── src/
        ├── data/siteData.js   # All editable content: profile, about, skills, projects, experience
        ├── hooks/             # useTypewriter, useScrollProgress, useActiveSection, useScrollReveal
        ├── components/
        │   ├── layout/        # Navbar, Footer, CommitRail (signature scroll element)
        │   ├── ui/             # SectionHeading, SocialLinks, Badge — reusable primitives
        │   └── sections/       # Hero, About, Skills, Projects, GitHubSection, Experience, Contact
        ├── App.jsx
        ├── main.jsx
        └── index.css
```

## Editing Content

Almost everything on the page is driven by **`frontend/src/data/siteData.js`** — update your
bio, skills, projects, and experience there without touching any component markup.

## Replacing the Placeholder Resume

`frontend/public/resume.pdf` is a placeholder. Replace that file with your real resume, keeping
the same filename — the Navbar's "Resume" button and the `resumeUrl` in `siteData.js` already
point to `/resume.pdf`, so no code changes are needed.

## Contact Form

The form validates input client-side. With no backend configured, it opens the visitor's email
client (`mailto:`) pre-filled with their message — so the site works out of the box with zero
setup. To wire it to a real backend (e.g. [Formspree](https://formspree.io)), set
`VITE_FORM_ENDPOINT` to an endpoint that accepts a JSON POST of `{ name, email, message }`,
either in `frontend/.env` (local dev) or the root `.env` (Docker build).

## SEO & Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`), skip-to-content link, visible focus
  rings, `aria-label`/`aria-current` on nav and interactive elements, labeled form fields with
  inline error messages.
- Meta description/keywords, Open Graph + Twitter cards, canonical URL, `Person` structured data,
  `robots.txt`, `sitemap.xml`.
- Respects `prefers-reduced-motion` (animations are disabled/instant for users who request it).
- Update the placeholder domain `https://meetkadiya.dev/` in `index.html`, `robots.txt`, and
  `sitemap.xml` once a real domain is chosen.

## Production Build Without Docker

```bash
cd frontend
npm install
npm run build      # outputs to frontend/dist
npm run preview    # serve the build locally for a final check
```

## License

This project is not currently licensed for reuse. Add a `LICENSE` file (e.g. MIT) if you'd like
others to be able to fork or reuse this code.
