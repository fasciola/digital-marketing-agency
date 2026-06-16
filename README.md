# Digital Marketing Agency Website

A premium React + Vite + Tailwind landing page for a digital marketing agency.

## Features

- Cinematic poster-style hero section without video background
- Video-background-ready sections after the hero
- Dark luxury visual style
- Glassmorphism cards
- Responsive mobile-first layout
- WhatsApp conversion buttons
- SEO meta title and description
- Accessible semantic HTML structure
- Reduced-motion support

## WhatsApp number

The placeholder WhatsApp link is currently:

```txt
https://wa.me/971500000000
```

To change it, edit `src/App.jsx`:

```js
const whatsappUrl = 'https://wa.me/971500000000';
```

## Video backgrounds

The code expects video files inside `public/videos/`:

- `services-bg.webm` / `services-bg.mp4`
- `strategy-bg.webm` / `strategy-bg.mp4`
- `portfolio-bg.webm` / `portfolio-bg.mp4`
- `results-bg.webm` / `results-bg.mp4`
- `cta-bg.webm` / `cta-bg.mp4`

Poster fallbacks are already included in `public/posters/`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

You can deploy this project on Netlify, Vercel, Cloudflare Pages, or GitHub Pages.

Recommended build settings:

- Build command: `npm run build`
- Output folder: `dist`
