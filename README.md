# Sandesh Lama Tamang — Portfolio

A professional portfolio focused on accounting, audit, data, and accounting information systems. The site presents selected projects with documented controls, measurable evidence, and links to supporting GitHub work.

## Highlights

- recruiter-focused accounting and CIS positioning
- curated accounting, audit, and GRC project case studies
- accessible desktop and mobile navigation
- reduced-motion support and keyboard-friendly interactions
- production SEO, structured data, favicon, and social-preview artwork
- Vercel-ready monorepo configuration with SPA routing and security headers

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- pnpm workspaces
- Vercel

## Local Development

Requirements: Node.js 20.19+ or 22+, and pnpm.

```bash
pnpm install
pnpm run dev:portfolio
```

The portfolio runs at `http://localhost:5173` by default. `PORT` and `BASE_PATH` remain optional overrides.

## Validation

```bash
pnpm run typecheck:portfolio
pnpm run build:portfolio
```

## Deploy to Vercel

1. In Vercel, choose **Add New → Project** and import `SanDAce07/sandesh-portfolio`.
2. Leave the project Root Directory at the repository root.
3. Vercel reads `vercel.json`, installs with pnpm, builds only `@workspace/portfolio`, and serves `artifacts/portfolio/dist`.
4. Deploy. Pull requests will receive preview deployments; merging to `main` will create the production deployment.

No required environment variables are needed for the portfolio deployment.

## Repository Map

- `artifacts/portfolio` — portfolio web application
- `artifacts/api-server` — optional API workspace scaffold
- `lib` — shared generated API and database packages
- `vercel.json` — production build, output, routing, caching, and security configuration

## Data and Privacy

The website displays professional portfolio information and a university email address. It intentionally omits a public phone number and exact street address.
