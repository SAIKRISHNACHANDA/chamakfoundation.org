# Chamak Foundation Website

A 7-page premium website built with plain HTML/CSS/JS — no build step required.

## How to view it
Just double-click `index.html` (or any page) to open it in a browser. Everything
— fonts, styles, scripts — loads from CDN or from the files in this folder, so
no server or `npm install` is needed.

## Pages
- `index.html` — Home
- `vision-mission.html` — Vision & Mission / Objectives
- `programmes.html` — Our Programmes
- `team.html` — Our Team
- `impact.html` — Impact
- `get-involved.html` — Get Involved
- `contact.html` — Contact

## What's real vs. placeholder
Following your brief's content rule ("don't invent facts"), everything below
was pulled directly from your logo and reference mockup, and used as-is:
- Tagline, hero copy, all 6 impact numbers (500+, 100+, 50+, 25+, 100+, 2+)
- Vision & Mission statements and the 6 objectives
- All 6 programme names + one-line descriptions
- Team names & titles (Dr. Mohammed Azam Ali, Mohammed Yousuf Ali,
  Mohammed Abdul Hadi, Syed Wajid Ali)
- Contact details (Hyderabad, Telangana, India · +91 98661 29052 ·
  chamakfoundation23@gmail.com · www.chamakfoundation.org)
- The Nelson Mandela quote on the Programmes page

Anything you hadn't supplied — team/student photographs, programme photos,
advisory board names, volunteer names, real student stories, donation
amounts/payment details, and the impact report file — is marked directly on
the page with a **[CONTENT NEEDED]** label and a styled placeholder image
block, per your instruction not to invent this information. Search
`[CONTENT NEEDED]` and `imgph__label` in the HTML/CSS to find every spot
that needs a real photo or fact.

## To finish the site
1. **Swap in real photos** — replace each `<div class="imgph">...</div>`
   block with `<img src="assets/img/your-photo.jpg" alt="...">`. Drop your
   images into `assets/img/`.
2. **Fill in [CONTENT NEEDED] sections** — programme details, advisory
   board, volunteer names, stories of change, donation info, impact report
   link.
3. **Contact form** — currently front-end only (no backend). Point the
   `<form>` in `contact.html` at your email service / form provider (e.g.
   Formspree) or wire it to a backend of your choice.
4. **Map** — the contact page has a placeholder where a real Google Maps
   embed for your verified location can go.

## Design system
- Colors: deep navy (`#0b1b38`), gold accent (`#d9af52`), warm cream
  (`#faf7ef`) — all defined as CSS variables at the top of `css/style.css`.
- Type: Playfair Display (headings) + Inter (body), loaded from Google
  Fonts.
- All animation respects `prefers-reduced-motion`.
