# Images — How to Add Photos to Pages

This site uses a **convention-based image system**: drop a correctly-named file in the right folder, and it appears on the matching page automatically. No JSON edits required. No image? The slot quietly disappears.

## The folders

```
public/images/
├── about/                  ← Team & company photos for /about/
├── services/               ← One photo per service (named by slug)
├── industries/             ← One photo per industry (named by slug)
├── case-studies/           ← One photo per case study (named by slug)
├── blog/                   ← One photo per blog post (named by slug)
└── clients/                ← Client logos for the marquee
```

## Naming convention

Match the page's slug. To find the slug, look at the URL:
- `/services/seo/` → slug is `seo` → file is `public/images/services/seo.jpg`
- `/industries/dental-practices/` → slug is `dental-practices` → file is `public/images/industries/dental-practices.jpg`
- `/resources/seo-strategies-2026/` → file is `public/images/blog/seo-strategies-2026.jpg`

## File specs

- **Format**: JPG (best for photos) or PNG (for graphics with transparency). WebP if you can.
- **Hero images**: 1600 × 900 px (16:9)
- **Card thumbnails**: 1200 × 800 px (3:2) — system will crop to fit
- **File size**: aim for under 250KB. 500KB is the practical ceiling.
- **About images**: `team.jpg` and `office.jpg` (specific filenames, see below)

## About page

The About page has 2 specific slots:
- `public/images/about/team.jpg` — group photo, displays above the team grid
- `public/images/about/office.jpg` — office shot, displays in mission section

## Cropping tip

If your photo is wider than 16:9, the image will be cropped from the center. Test by previewing on mobile — the focal point should still be visible after cropping.

## Mobile optimization

All images render with:
- `loading="lazy"` (only loads when scrolled near)
- `decoding="async"` (doesn't block page render)
- Explicit width/height (prevents layout shift)
- Responsive CSS (max-width: 100%, scales fluidly)

If you want to go further: convert JPGs to WebP for ~30-50% smaller files. Cloudflare Pages will edge-cache compressed versions automatically.

## What happens if I don't add an image?

The slot is removed cleanly from the page. No broken image icon, no empty box. The page just shows without it.
