# Akapaloo Academy – School Website

A full professional school website for **Akapaloo Academy**, a premier Senior High School in Ghana.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home – hero, stats, programmes, testimonials, news preview |
| `about.html` | About – history, mission/vision, values, leadership, facilities |
| `academics.html` | Academics – programmes, tabbed curriculum, extracurricular |
| `admissions.html` | Admissions – process, key dates, requirements, fees table, online form |
| `faculty.html` | Faculty – filterable staff grid with department filter |
| `news.html` | News & Events – featured article, news grid, sidebar events |
| `contact.html` | Contact – contact form, dept contacts, address & hours |

## Tech Stack

- Pure HTML5, CSS3, and vanilla JavaScript (no build tools required)
- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations via IntersectionObserver
- Animated counters, tab switching, faculty filter, form handling
- Google Fonts (Inter)

## Deployment

The site is deployed automatically to **GitHub Pages** via `.github/workflows/deploy.yml` on every push to `main`.

**Live URL:** `https://slade-admin.github.io/School/`

To enable GitHub Pages:
1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` – the workflow will build and deploy automatically