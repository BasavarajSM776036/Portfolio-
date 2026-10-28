# Basavaraj S Maneppagol — Portfolio

A premium personal portfolio website built with **React + Vite + Framer Motion**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio2/
├── public/
│   ├── favicon.svg               # Gradient BM favicon
│   └── Basavaraj_Resume.pdf      # ← ADD YOUR RESUME HERE
├── src/
│   ├── assets/
│   │   ├── profile.jpg           # Your profile photo
│   │   └── vtricks-certificate.jpg
│   ├── components/
│   │   ├── Preloader.jsx         # Animated name reveal
│   │   ├── CustomCursor.jsx      # Glowing cursor (desktop)
│   │   ├── Navbar.jsx            # Floating glass navbar
│   │   ├── Hero.jsx              # Kinetic hero section
│   │   ├── About.jsx             # About + quick facts
│   │   ├── Skills.jsx            # Marquee + bento grid
│   │   ├── Experience.jsx        # Animated timeline
│   │   ├── Projects.jsx          # 3D tilt project cards
│   │   ├── Beyond.jsx            # Achievements + CountUp
│   │   ├── Freelance.jsx         # Freelance CTA
│   │   ├── Education.jsx         # Education + certificate
│   │   ├── Contact.jsx           # Glass form + links
│   │   └── Footer.jsx            # Footer + back to top
│   ├── data.js                   # ← ALL CONTENT LIVES HERE
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
└── index.html                    # HTML + SEO meta tags
```

## ✏️ What to Replace

| Item | File | What to change |
|------|------|----------------|
| LinkedIn URL | `src/data.js` | `personal.linkedin` |
| GitHub URL | `src/data.js` | `personal.github` |
| Project GitHub links | `src/data.js` | `projects[*].github` |
| Project live links | `src/data.js` | `projects[*].live` |
| Contact form | `src/components/Contact.jsx` | Replace `YOUR_FORM_ID` with Formspree ID |
| Resume PDF | `public/` | Add `Basavaraj_Resume.pdf` |

## 📬 Contact Form Setup (Formspree — Free)

1. Go to [formspree.io](https://formspree.io/)
2. Sign up for free
3. Create a new form and copy your form ID (looks like `xabc1234`)
4. In `src/components/Contact.jsx`, replace `YOUR_FORM_ID` on line ~84

## 🌐 Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **New site from Git**
3. Connect your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy** ✅

Or drag-and-drop the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
