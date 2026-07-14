# Grafana & Friends Mumbai Website

![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-ISC-lightgrey)

## 📌 Description

This is a **Next.js App Router** website for Grafana & Friends Mumbai events.  
It provides event landing pages, speaker/core-team sections, contests, schedule, gallery, FAQ, social links, and a badge generator.

---

## ✨ Key Features (from implementation)

- Multi-section homepage (`/`) with:
  - Hero banner + register CTA
  - About section
  - Speakers carousel + CFP link
  - Core team grid
  - Contests tabs
  - Swag carousel
  - Gallery carousel
  - FAQ accordion
- `/register` event page with:
  - Countdown timer to `2026-06-13`
  - Event details (date, venue, maps link)
  - Meetup registration CTA
  - Timeline-style schedule section
- `/join` page with community/social platform links
- `/badge` page to:
  - upload user photo
  - overlay it on badge template via `<canvas>`
  - download generated PNG badge
  - copy prebuilt social text
- Mobile-responsive navigation with drawer menu
- Vercel Analytics integration in root layout
- Genkit + Google GenAI setup file present (`src/ai/genkit.ts`) with model `googleai/gemini-2.5-flash` (no flows found)

---

## 🧰 Tech Stack

| Area | Detected |
|---|---|
| Language | TypeScript, JavaScript, CSS |
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS + custom CSS variables |
| UI Components | shadcn/ui + Radix UI primitives |
| Forms/Validation libs | react-hook-form, zod, @hookform/resolvers (imported as deps) |
| Charts | recharts (dependency present; no chart usage found in page sections reviewed) |
| Carousel | embla-carousel-react + embla-carousel-autoplay |
| Icons | lucide-react |
| AI SDK | genkit, @genkit-ai/google-genai, @genkit-ai/next |
| Hosting config | Firebase App Hosting (`apphosting.yaml`) |
| Analytics | @vercel/analytics |
| Package Manager | npm (`package-lock.json` present) |

---

## 📦 Complete Dependency Overview

### Production dependencies (`package.json`)

`@genkit-ai/google-genai`, `@genkit-ai/next`, `@hookform/resolvers`, `@radix-ui/react-accordion`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-avatar`, `@radix-ui/react-checkbox`, `@radix-ui/react-collapsible`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-label`, `@radix-ui/react-menubar`, `@radix-ui/react-popover`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-scroll-area`, `@radix-ui/react-select`, `@radix-ui/react-separator`, `@radix-ui/react-slider`, `@radix-ui/react-slot`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`, `@radix-ui/react-toast`, `@radix-ui/react-tooltip`, `@vercel/analytics`, `canvas-confetti`, `class-variance-authority`, `clsx`, `date-fns`, `dotenv`, `embla-carousel-autoplay`, `embla-carousel-react`, `firebase`, `genkit`, `lucide-react`, `next`, `patch-package`, `react`, `react-day-picker`, `react-dom`, `react-hook-form`, `recharts`, `tailwind-merge`, `tailwindcss-animate`, `zod`.

### Dev dependencies (`package.json`)

`@types/canvas-confetti`, `@types/node`, `@types/react`, `@types/react-dom`, `genkit-cli`, `postcss`, `tailwindcss`, `typescript`.

---

## 🗂️ Folder Structure

```text
.
├── apphosting.yaml              # Firebase App Hosting run config
├── components.json              # shadcn/ui configuration
├── docs/
│   └── blueprint.md             # currently empty
├── public/                      # static images/audio/icons
├── src/
│   ├── ai/                      # Genkit setup
│   ├── app/                     # Next.js App Router pages/layout
│   ├── components/
│   │   ├── layout/              # header/footer
│   │   ├── sections/            # homepage/register page content sections
│   │   ├── ui/                  # shadcn/radix UI primitives
│   │   └── icons/               # custom logo icon components
│   ├── hooks/                   # custom hooks (toast)
│   └── lib/                     # utility functions + placeholder image metadata
├── next.config.ts               # Next.js config (images, build checks behavior)
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🏛️ Architecture Overview

- **Frontend-only App Router site** (no API route handlers found in `src/app/**/route.ts`).
- Pages compose reusable section components.
- Most data is currently **static arrays/constants inside components** (speakers, FAQs, schedule, social links).
- Badge generation is entirely **client-side** with canvas.
- Image metadata is centralized in `src/lib/placeholder-images.json`.
- AI integration is initialized but no active flow endpoints were found.

---

## ✅ Prerequisites

- Node.js (project uses modern Next.js; Node 18+ recommended)
- npm

---

## ⚙️ Installation

```bash
npm ci
```

---

## 🔐 Environment Variables

No explicit `process.env.*` usage was found in the repository source files.

| Variable | Required | Used in source | Notes |
|---|---|---|---|
| Not found | N/A | N/A | No `.env*` files and no explicit env reads detected |

> Note: AI/Firebase dependencies exist, but required env variable names are not explicitly referenced in source code.

---

## ▶️ Running Locally

```bash
npm run dev
```

Runs on port `9002` (from `package.json` script: `next dev --turbopack -p 9002`).

---

## 🚀 Production Deployment

### Build and start

```bash
npm run build
npm run start
```

### Detected deployment config

- `apphosting.yaml` is present (Firebase App Hosting), with:
  - `runConfig.maxInstances: 1`

No Dockerfile / docker-compose files were found.

---

## 🔌 API Documentation

No backend API endpoints were found in this repository (no route handlers detected).

---

## 🗄️ Database Details

No database client usage or schema/migration files were found.

---

## 🔑 Authentication Flow

No authentication implementation (login/session/token flow) was found.

---

## 🤖 AI/ML Models or External APIs Used

- **Configured**: `googleai/gemini-2.5-flash` via Genkit (`src/ai/genkit.ts`)
- **Not found**: any implemented Genkit flows or in-app AI feature wiring

External services referenced in implementation:
- Meetup, LinkedIn, Twitter/X, Instagram, Slack links
- Google Maps link on register page
- Google Fonts
- Twitter widgets script (in `twitter-timeline.tsx`, component currently commented in page)
- Remote image hosts: `images.unsplash.com`, `images.brilliantmade.com`, `ih1.redbubble.net`, `storage.googleapis.com`, `placehold.co`

---

## 🧩 Configuration Files

- `next.config.ts` (notable: `ignoreBuildErrors: true`, `ignoreDuringBuilds: true`, remote image patterns)
- `tailwind.config.ts`
- `postcss.config.mjs`
- `tsconfig.json`
- `components.json`
- `apphosting.yaml`

---

## 🧪 Scripts and Commands

| Script | Command | Purpose |
|---|---|---|
| `dev` | `next dev --turbopack -p 9002` | local development |
| `genkit:dev` | `genkit start -- tsx src/ai/dev.ts` | start Genkit dev runtime |
| `genkit:watch` | `genkit start -- tsx --watch src/ai/dev.ts` | start Genkit in watch mode |
| `build` | `NODE_ENV=production next build` | production build |
| `start` | `next start` | run production server |
| `lint` | `next lint` | lint (currently prompts for ESLint setup in this repo) |
| `typecheck` | `tsc --noEmit` | TypeScript checks |

---

## 🧪 Testing Instructions

- No automated test framework or `test` npm script was found.
- Current available quality checks:
  - `npm run typecheck`
  - `npm run lint` (currently interactive because ESLint config is not finalized)

---

## ⚡ Performance Optimizations (implemented)

- Next.js static prerendered routes
- `next/image` used extensively for optimized image handling
- Carousel autoplay for content rotation
- Some heavy visual interactions are client-only and conditionally rendered

---

## 🛡️ Security Considerations

- External links generally use `target="_blank"` with `rel="noopener noreferrer"` (good practice).
- File upload on `/badge` is client-side only; no server upload endpoint detected.
- Build currently skips lint/type failures (`next.config.ts`), which can hide issues in production builds.
- Dependency audit during install reported vulnerabilities in transitive dependencies (`npm audit` output indicated open issues).

---

## 📸 Screenshots

> Placeholders (replace with actual screenshots)

- `![Home Page](docs/screenshots/home.png)`
- `![Register Page](docs/screenshots/register.png)`
- `![Badge Generator](docs/screenshots/badge.png)`
- `![Join Page](docs/screenshots/join.png)`

---

## 🧯 Troubleshooting

- **`npm run lint` asks setup questions**  
  This repository currently does not have a finalized ESLint setup file for non-interactive linting.

- **Typecheck errors appear**  
  Run `npm run typecheck` and address current TypeScript issues before enforcing strict CI checks.

- **Remote image errors**  
  Ensure image host is listed in `next.config.ts > images.remotePatterns`.

---

## ❓ FAQ (Repo Documentation)

**Q: Is there a backend/API in this repository?**  
A: Not found.

**Q: Is Docker setup available?**  
A: Not found.

**Q: Is CI/CD workflow configured in `.github/workflows`?**  
A: Not found in this repository snapshot.

---

## 🛣️ Roadmap

No formal roadmap document was found.  
Based on commented code blocks, there are placeholders for additional sections/features, but they are not active.

---

## 🤝 Contributing Guide

No dedicated `CONTRIBUTING.md` was found.  
Suggested contribution flow for this repo:

1. Fork/branch
2. Install dependencies with `npm ci`
3. Run `npm run typecheck` and build locally
4. Open a pull request with clear change notes

---

## 📜 License

- `package.json` declares license as **ISC**
- No standalone `LICENSE` file was found

---

## 🙌 Credits

- Grafana & Friends Mumbai team and listed contributors/core-team members in `src/components/sections/core-team.tsx`
- Built with Next.js, React, Tailwind CSS, shadcn/ui, Radix UI, and community tooling
