# HD Compass Site — Deployment Guide

## What's in this folder
```
hdcompass-site/
├── index.html          ← Home page
├── about.html          ← About Gabriela
├── compass-ai.html     ← Compass AI product page
├── blog.html           ← Blog listing (links out to Squarespace blog posts)
├── testimonials.html   ← Client reviews
├── contact.html        ← Contact form
├── booking-policies.html
├── privacy.html
├── _redirects          ← Cloudflare Pages URL redirects
├── css/
│   └── style.css       ← All styles
└── js/
    └── site.js         ← JS (mobile nav, scroll reveal, booking buttons)
```

---

## How to deploy to Cloudflare Pages (free)

### Step 1 — Create a Cloudflare account
Go to https://pages.cloudflare.com and sign up (free).

### Step 2 — Upload the site
1. Click **Create a project**
2. Choose **Direct Upload** (no GitHub needed)
3. Name your project: `hdcompass`
4. Drag the entire `hdcompass-site` folder into the upload area
5. Click **Deploy site**

Cloudflare gives you a URL like `hdcompass.pages.dev` — your site is live immediately.

### Step 3 — Connect your domain (hdcompass.com)
1. In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Enter: `hdcompass.com` and `www.hdcompass.com`
3. Cloudflare will show you DNS records to add

### Step 4 — Update your DNS
Go to wherever your domain is registered (likely Squarespace or your registrar):
- Remove any existing A or CNAME records pointing to Squarespace
- Add the records Cloudflare tells you (usually a CNAME pointing to your pages.dev URL)

### Step 5 — Transfer Google Workspace billing
Before canceling Squarespace:
1. Go to admin.google.com
2. Billing → Payment accounts → Add a payment method
3. Remove Squarespace as billing source
Google Workspace billing transfers directly to Google — your email stays exactly the same.

### Step 6 — Cancel Squarespace
Only cancel AFTER you've confirmed everything works on the new domain. Give DNS 24–48 hours to fully propagate.

---

## Adding your photos
Look for these comments in the HTML files:
```html
<!-- PHOTO: Replace placeholder with: -->
<img src="images/gabriela-hero.jpg" alt="Gabriela Trifonova">
```
Save your photos to the `images/` folder and replace the placeholder divs.

Recommended photos:
- `images/gabriela-hero.jpg` → portrait, used on home page right panel
- `images/gabriela-about.jpg` → portrait, used on about page

---

## Making updates after launch
To update any page: edit the HTML file and re-upload to Cloudflare Pages → Deploy.
For small text changes you can use the Cloudflare Pages dashboard to edit files directly.

---

## Contact form
The contact form uses `data-netlify="true"` — if you deploy to Cloudflare instead of Netlify, you'll need to either:
- Use Formspree (free): replace `action="/contact-thanks.html"` with your Formspree endpoint
- Or I can set up a Cloudflare Worker to handle form submissions

Formspree setup: go to formspree.io, create a free form, get your endpoint URL.
