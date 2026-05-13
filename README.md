# Instinct Electric — Website

Dark, editorial single-page site for **Instinct Electric** (Lorena, TX).
Built with **Vite + React + TypeScript + Tailwind CSS**.

> Motto: *Trust Instinct First.*

---

## Stack

- React 18 + TypeScript (strict)
- Vite 5 (fast dev + tiny prod bundle)
- Tailwind CSS 3 (custom design tokens — no default theme leakage)
- Zero runtime dependencies beyond React (no animation libs, no icon libs)
- Fonts loaded from Google Fonts: **Bricolage Grotesque**, **IBM Plex Sans**, **JetBrains Mono**

Final bundle: ~55 KB gzipped JS, ~6 KB gzipped CSS.

---

## Project structure

```
.
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── data.ts                     ← edit copy / projects / reviews here
    └── components/
        ├── TopBar.tsx
        ├── Hero.tsx
        ├── Services.tsx
        ├── Gallery.tsx             ← case-file viewer
        ├── Coverage.tsx            ← custom service-area map (SVG)
        ├── Reviews.tsx             ← irregular wall, no carousel
        ├── Contact.tsx
        ├── Footer.tsx
        └── ui/
            ├── LiveStatus.tsx      ← real-time on-call indicator
            └── MagneticButton.tsx  ← cursor-follow CTA
```

All editable copy lives in **`src/data.ts`** — phone number, hours, services, projects, reviews. You should not need to touch components to update text.

---

## Run locally (or in GitHub Codespaces)

```bash
npm install
npm run dev
```

Codespaces will auto-forward the Vite dev server (port `5173`) and offer to open it in the browser. If it doesn't, open the Ports tab and click the forwarded URL.

To check the production build:

```bash
npm run build
npm run preview
```

---

## Deploy to Cloudflare Pages

You have two paths. Pick one.

### Option A — Git integration (recommended, easiest)

1. Push this repository to GitHub.
2. Open the Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Pick the repo.
4. On the build configuration screen, enter exactly these values:

   | Field | Value |
   | --- | --- |
   | Framework preset | `Vite` (or `None`) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave blank)* |
   | Node version | `20` *(set in env vars as `NODE_VERSION=20` if needed)* |

5. Save & Deploy. The first build takes ~1 minute. Every push to `main` redeploys automatically.

### Option B — Direct upload via Wrangler

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=instinct-electric
```

Follow the prompts to authenticate. Subsequent deploys reuse the project.

### Custom domain

In the Pages project, go to **Custom domains** → **Set up a custom domain** → enter `instinctelectric.com` (or any subdomain). Cloudflare handles the SSL cert automatically.

---

## What to customize before going live

Open **`src/data.ts`** and update:

1. **`business`** block — phone, email, address, hours, coordinates. Already filled with the provided info.
2. **`services`** — eight services listed. Adjust scope or copy as needed.
3. **`projects`** — six recent jobs. **Replace the Unsplash image URLs with photos of your actual work.**
   - Drop your photos into `public/gallery/` (you'll need to create that folder)
   - Change each `image` path to e.g. `/gallery/panel-hewitt.jpg`
   - 1400px wide JPEGs around 200–400 KB each work well
4. **`reviews`** — first three are real Google-review excerpts you provided. The last three are placeholders written in the same voice; replace them with verified reviews before publishing if you want full integrity.

The **live status indicator** in the hero reads the visitor's local clock and shows whether you're currently within the 8 AM – 8 PM window. If your hours change, update `openHour` and `closeHour` on the `business` object.

---

## Design notes

A few decisions worth knowing if you ever extend this:

- **No standard hero-features-testimonials-CTA flow.** The order is intentional: bold statement → editorial service list → archive of real work → coverage map → reviews wall → direct contact card. The closing section does *not* mirror the hero — it gives full contact info instead of repeating the same CTA.
- **One glass panel only** — the live-status HUD in the hero. Everywhere else uses sharp 1px borders. Backdrop blur isn't applied to every card.
- **No 3-column icon grids, no bento boxes, no testimonial carousels, no stat counters animating up from zero.**
- **Asymmetric layouts** — most sections use a 12-column grid with deliberate imbalance (e.g. 7/5, 8/4).
- **Color discipline** — `#19fa05` (live) is reserved for *active* states (the CTA, the HQ marker, hover accents). `#0044ff` (volt) is reserved for the *secondary* schematic lines. Everything else is the bone-on-ink palette.
- **Motion budget** — page-load reveals stagger once and stop. Hover states animate. Nothing fades in on scroll. The pulsing spark in the headline is the only continuously-animating decoration.

---

## License

This repository is private to Instinct Electric. The font files are loaded from
Google Fonts at runtime (free for commercial use). The placeholder photos are
linked from Unsplash and should be replaced with your own before launch.
