# FraudStream.ai — Landing Page (Next.js + Tailwind)

A clean, conversion‑focused landing page for FraudStream.ai.

## Quick start

```bash
# 1) Install deps
npm i

# 2) Run dev server
npm run dev

# 3) Build & start
npm run build && npm start
```

## Deploy to Vercel

1. Create a new Project in Vercel, import this repo.
2. Add Environment Variable (optional for Slack lead notifications):
   - `SLACK_WEBHOOK_URL` = https://hooks.slack.com/services/...
3. Deploy.

## Customize

- Edit copy and sections in `app/page.tsx`.
- Branding colors in `tailwind.config.ts` (the `brand` palette).
- Replace `/public/logo.svg` and `/public/hero-illustration.png`.
- Logos in `/public/icons/logo*.svg`.

## Lead Form

The demo form posts to `/api/lead`.
If `SLACK_WEBHOOK_URL` is set, leads are sent to Slack; otherwise they're logged on the server.

## SEO

Metadata configured in `app/layout.tsx`. Add an OpenGraph image at `/public/og.png`.
