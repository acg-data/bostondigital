# Boston Digital Marketing — Multi-Page Agency Site

A fully programmatic, data-driven website for Boston Digital Marketing agency. Built with **Eleventy (11ty)** and **JSON data files**, making it easy to update content without touching HTML.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Local development
npm run serve

# Build for production
npm run build
```

Visit `http://localhost:8080` when running locally.

## 📁 Project Structure

```
boston-digital-marketing/
├── _data/                 # Content data files (JSON) — edit these to update the site
│   ├── site.json         # Global config: nav, footer, contact info
│   ├── services.json     # All 8 digital marketing services
│   ├── industries.json   # Industry-specific pages (roofing, home services, etc.)
│   ├── case_studies.json # Client success stories
│   ├── stats.json        # Global metrics & KPIs
│   ├── testimonials.json # Client quotes
│   └── ...
├── _layouts/             # Page layout templates
│   └── base.njk         # Main HTML structure (header, footer, CSS, JS)
├── _includes/            # Reusable partials (header, footer, etc.)
├── src/                  # Page templates (routes)
│   ├── index.njk        # Homepage
│   ├── services/
│   ├── industries/
│   ├── case-studies/
│   └── ...
├── css/
│   └── style.css        # All design system CSS & responsive styles
├── js/
│   └── main.js          # Interactions: sticky header, mobile menu, scroll reveal
└── public/
    └── images/          # Photos, logos, case study images
```

## ✏️ How to Update Content

All content lives in **`_data/` JSON files**. No HTML editing needed.

### Update the Homepage
Edit `_data/services.json` to add/modify services or `_data/case_studies.json` for case studies:

```json
{
  "slug": "seo",
  "title": "Search Engine Optimization",
  "shortDesc": "Rank higher. Get found. Drive qualified traffic."
}
```

Push to GitHub → **Netlify auto-rebuilds** → site updates instantly.

### Update Navigation & Footer
Edit `_data/site.json`:

```json
{
  "name": "Boston Digital Marketing",
  "phone": "(617) 123-4567",
  "nav": [
    { "label": "Services", "href": "/services/", "dropdown": true }
  ]
}
```

### Add a New Service or Industry Page
Add an entry to `_data/services.json` or `_data/industries.json` → Eleventy auto-generates the page at `/services/[slug]/` or `/industries/[slug]/`.

## 🎨 Design System

All colors, fonts, and responsive breakpoints are defined in `css/style.css`:

- **Colors**: `--coral:#FF4F3E`, `--lime:#C7FF3D`, `--parchment:#F4EFE7`, `--black:#111111`
- **Fonts**: Anton (headers), Archivo (body)
- **Responsive**: Mobile breakpoints at 1024px and 820px

## 🌐 Deployment

### Netlify (Recommended)
1. Push repo to GitHub
2. Connect to Netlify
3. Netlify auto-detects Eleventy + builds/deploys automatically

**Build command:** `npx @11ty/eleventy`  
**Publish directory:** `_site/`

### Vercel
Same process — Vercel also auto-detects Eleventy.

## 📝 Pages Included

- ✅ Homepage (`/`)
- ✅ Services Overview (`/services/`)
- ⏳ Service Detail Pages (auto-generated from `services.json`)
- ⏳ Industry Pages (auto-generated from `industries.json`)
- ⏳ Case Studies Index & Details
- ⏳ About, Contact, Resources pages (stubs built with same design system)

## 🔧 Development

### Add a new page
Create `.njk` file in `src/`:

```
---
layout: base.njk
title: Page Title
---

<section>...</section>
```

### Modify CSS
Edit `css/style.css` — all styles are centralized, changes apply site-wide.

### Add JavaScript
Add to `js/main.js` — runs on all pages.

## 📦 Tech Stack

- **Eleventy (11ty)** — Static site generator
- **Nunjucks** — HTML templating language
- **JSON** — Content data format
- **HTML/CSS/JS** — No framework overhead
- **Netlify/Vercel** — Hosting & deployment

## 📄 License

© 2025 Boston Digital Marketing. All rights reserved.
