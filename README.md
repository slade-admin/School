# Akapaloo Academy – School Website

A full, professional static website for **Akapaloo Academy**, a premier educational institution offering Primary, Junior Secondary, and Senior Secondary programmes.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home page – hero, about intro, stats, programmes, news, testimonials, CTA |
| `about.html` | About – mission/vision/values, history timeline, leadership team |
| `academics.html` | Academics – programme levels, curriculum table, departments, facilities |
| `admissions.html` | Admissions – application process, requirements, school fees, online form, FAQ |
| `contact.html` | Contact – contact form, departmental emails, office info, map |

## Project Structure

```
School/
├── index.html
├── about.html
├── academics.html
├── admissions.html
├── contact.html
├── css/
│   └── style.css        # Full responsive design system
├── js/
│   └── main.js          # Navigation, counters, animations, forms, FAQ
└── images/
    └── favicon.svg
```

## Features

- **Responsive design** – mobile-first layout that works on all screen sizes
- **Sticky navigation** with hamburger menu for mobile
- **Animated counters** for school statistics (Intersection Observer)
- **Scroll fade-up animations** for all major content sections
- **FAQ accordion** (Admissions page)
- **Contact & Admissions forms** with success feedback
- **SEO-friendly** semantic HTML5 with ARIA labels throughout
- **No dependencies** – pure HTML, CSS, and vanilla JavaScript

## Deployment

This is a fully static website. Deploy by uploading all files to any static host:

- **GitHub Pages**: push to `main` and enable Pages in repo settings
- **Netlify / Vercel**: drag-and-drop or connect the repository
- **Traditional hosting**: upload via FTP/SFTP

### GitHub Pages (recommended)

1. Go to **Settings → Pages** in this repository
2. Set source to **Deploy from a branch** → `main` → `/ (root)`
3. Save — the site will be live at `https://<org>.github.io/School/`
