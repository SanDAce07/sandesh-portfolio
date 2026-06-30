# Sandesh Portfolio — Workspace Notes

This pnpm monorepo contains a public React portfolio and optional API/database scaffolding. The portfolio is the primary deployable artifact.

## Primary Commands

- `pnpm run dev:portfolio` — start the portfolio locally
- `pnpm run typecheck:portfolio` — validate portfolio TypeScript
- `pnpm run build:portfolio` — build the Vercel production artifact
- `pnpm run build` — validate and build every workspace package

## Portfolio Sources

- application: `artifacts/portfolio/src`
- static assets: `artifacts/portfolio/public`
- Vite configuration: `artifacts/portfolio/vite.config.ts`
- Vercel deployment: `vercel.json`

## Deployment Notes

Vercel deploys from the repository root using the checked-in configuration. The portfolio does not require `PORT` or `BASE_PATH`; both remain optional for alternate hosts.

## Content Guardrails

- Keep accounting and audit claims evidence-based.
- Do not imply CPA licensure; use “CPA-track.”
- Prefer curated project case studies over a live unfiltered GitHub feed.
- Do not publish personal phone numbers or exact home addresses.
