# Boston Digital Marketing — Development & Deployment Guide

## ✅ What's Been Built

This is a **fully programmatic, data-driven Eleventy site** for Boston Digital Marketing. All content lives in JSON files — no HTML editing needed for updates.

### ✓ Completed Pages
- **Homepage** (`/`) — Hero, services grid, stats, process, case studies, testimonials
- **Services Overview** (`/services/`) — All 8 services in a grid
- **Case Studies Index** (`/case-studies/`) — All 4 case studies
- **Contact** (`/contact/`) — Contact form + business info

### ✓ Data Files (Ready to Edit)
- `_data/site.json` — Nav, footer, contact info, branding
- `_data/services.json` — 8 digital marketing services (fully detailed)
- `_data/case_studies.json` — 4 client case studies with results
- `_data/stats.json` — Global KPIs (217%, 3.6x, etc.)
- `_data/testimonials.json` — Client quotes

### ✓ Shared Components
- Header with sticky nav + mobile menu
- Footer with links, contact info, social
- Responsive CSS (mobile breakpoints at 820px, 1024px)
- JavaScript: scroll reveal, sticky header, mobile menu toggle

### 📋 Still To Build (use same design system)
- [ ] Service detail pages (auto-generate from services.json)
- [ ] Industry/niche pages (auto-generate from industries.json)
- [ ] Case study detail pages (auto-generate from case_studies.json)
- [ ] About page
- [ ] Blog/Resources index & articles
- [ ] Individual blog post template
- [ ] Location page (e.g., /boston-digital-marketing-agency/)

---

## 🚀 Local Development

### Prerequisites
- Node.js 16+ (download from nodejs.org)

### First Time Setup
```bash
cd boston-digital-marketing
npm install
npm run serve
```

Visit `http://localhost:8080` — changes reload automatically.

### Available Commands
```bash
npm run build    # One-time production build
npm run serve    # Local dev server with auto-reload
npm run watch    # Watch files and rebuild (no server)
npm run debug    # Debug mode (verbose output)
```

---

## ✏️ Editing Content

### Update Homepage Services
Edit `_data/services.json`:

```json
{
  "slug": "seo",
  "title": "Search Engine Optimization",
  "shortDesc": "Rank higher. Get found. Drive qualified traffic.",
  "hero": {
    "headline": "Your headline here",
    "lead": "Your description here"
  }
}
```

Save → page updates automatically (if running `npm run serve`).

### Update Case Studies
Edit `_data/case_studies.json`:

```json
{
  "slug": "summit-home-services",
  "client": "Summit Home Services",
  "industry": "Home Services",
  "results": [
    { "metric": "187%", "label": "Increase in Leads" },
    { "metric": "42%", "label": "Lower CPA" },
    { "metric": "3.6x", "label": "Return on Ad Spend" }
  ]
}
```

### Update Navigation & Footer
Edit `_data/site.json`:

```json
{
  "name": "Boston Digital Marketing",
  "phone": "(617) 123-4567",
  "email": "hello@bostondigitalmarketing.com",
  "nav": [
    { "label": "Services", "href": "/services/" },
    { "label": "Results", "href": "/case-studies/" }
  ]
}
```

### Add Images
Place images in `public/images/`:
- `public/images/clients/` — Client logos
- `public/images/case-studies/` — Case study screenshots
- `public/images/team/` — Team photos

Reference in HTML as `/images/clients/logo.png`

---

## 🌐 Deployment to Netlify / Vercel

### Netlify (Recommended)

1. **Push code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/boston-digital-marketing.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub, authorize, choose your repo
   - Netlify auto-detects Eleventy settings
   - **Build command:** (leave blank or `npm run build`)
   - **Publish directory:** `_site`
   - Click Deploy

3. **Custom Domain**
   - In Netlify settings → Domain management → Add custom domain
   - Update your domain's DNS to point to Netlify

### Vercel

1. **Push to GitHub** (same as above)
2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repo
   - Vercel auto-detects Eleventy
   - Click Deploy

### Environment Variables (if needed)
In Netlify/Vercel settings, add any API keys or contact form endpoints:
- `CONTACT_FORM_ENDPOINT` — if using a third-party form service
- `ANALYTICS_ID` — Google Analytics or similar

---

## 🔧 Building New Pages

### Add a Services Detail Page
Create `src/services/[slug].njk`:

```njk
---
layout: base.njk
pagination:
  data: services
  size: 1
  alias: service
permalink: /services/{{ service.slug }}/
title: "{{ service.title }} in Boston"
---

<section class="hero">
  <div class="wrap hero-inner">
    <div>
      <h1>{{ service.hero.headline }}</h1>
      <p>{{ service.hero.lead }}</p>
    </div>
  </div>
</section>
```

This auto-generates `/services/seo/`, `/services/google-ads/`, etc. from `_data/services.json`.

### Add a Blog Post Template
Create `src/resources/[article].njk`:

```njk
---
layout: base.njk
pagination:
  data: blog
  size: 1
  alias: article
permalink: /resources/{{ article.slug }}/
title: "{{ article.title }}"
---

<section style="background:var(--parchment);padding:96px 0">
  <div class="wrap">
    <h1>{{ article.title }}</h1>
    <p>Posted {{ article.date }}</p>
    {{ article.content }}
  </div>
</section>
```

Add articles to `_data/blog.json`.

---

## 📊 Build & Deploy Status

- **Git Status:** Clean (all code committed)
- **Build Status:** ✅ Passing (4 pages, 2 assets)
- **Ready for Netlify:** Yes
- **Estimated deploy time:** < 1 minute

---

## 🎨 Customizing Design

All styles are in `css/style.css`. Update colors:

```css
:root {
  --black: #111111;
  --coral: #FF4F3E;    /* Brand red */
  --lime: #C7FF3D;     /* Brand green */
  --parchment: #F4EFE7; /* Light background */
}
```

Update fonts in `_layouts/base.njk`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700;900" rel="stylesheet">
```

---

## 📚 Additional Resources

- **Eleventy Docs:** https://www.11ty.dev/
- **Nunjucks (Template Language):** https://mozilla.github.io/nunjucks/
- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs

---

## ❓ FAQ

**Q: How do I update the homepage without editing HTML?**
A: Edit the data files (`_data/services.json`, `_data/case_studies.json`, etc.). The homepage template pulls from these.

**Q: Can I add a new service?**
A: Yes! Add an entry to `_data/services.json`. If you've built service detail pages, a new route is auto-generated.

**Q: How do I add a new page type?**
A: Create a `.njk` file in `src/` with frontmatter pointing to a layout. See "Building New Pages" above.

**Q: Where do I put images?**
A: `public/images/` — reference them as `/images/filename.png` in HTML.

**Q: How do I set up a contact form?**
A: The contact page has a basic HTML form. To make it work:
- Use Netlify Forms: add `netlify` attribute to `<form>`
- Or integrate a third-party service (Formspree, Brevo, etc.)

**Q: Can I use React components?**
A: Not with the current setup. Eleventy outputs static HTML. For component logic, use vanilla JS or add a frontend framework (Next.js, Astro).

---

## 📞 Next Steps

1. **Test locally:** `npm run serve` → verify all pages load
2. **Push to GitHub:** Create your repo and push this code
3. **Connect Netlify:** Deploy and get a live URL
4. **Update content:** Edit JSON files and push to auto-deploy
5. **Build remaining pages:** Service details, blog, about, etc. (use existing patterns)

---

**Ready to deploy? Let's go!** 🚀
