# Michael Ezenwugo Portfolio - Project Handoff

## Project

Interactive developer portfolio for Michael Ezenwugo.

GitHub:
https://github.com/King-Mikeyz/michael-ezenwugo-portfolio

## Professional positioning

Frontend Developer evolving into AI and Data Science.

Michael is a 200-level Computer Science student.

He has completed Frontend Development training through Tech Crush and an AI Prompt Engineering course through Tech Crush.

He is currently participating in a Tech Crush Data Science scholarship program.

He is learning Python through Kaggle and is interested long-term in Data Science, Artificial Intelligence and Machine Learning.

He participates in Machine Learning Collective Africa on Discord.

Do not falsely position Michael as an established AI Engineer, ML Engineer or Data Scientist.

---

## Stack

Next.js
React
JavaScript
Tailwind CSS
Three.js
React Three Fiber
Drei
GSAP
GSAP ScrollTrigger
d3-force-3d
Supabase
PostgreSQL
Google Gemini
Lucide React
Vercel

---

## Main architecture

src/app
Application routes, layout and API endpoints.

src/components/layout
Navbar, footer, background atmosphere and scroll systems.

src/components/sections
Hero, About, Skills, Projects, Journey, AI assistant and Contact.

src/components/three
React Three Fiber / Three.js experience.

src/data
Structured profile, project, skill and knowledge graph data.

src/lib
Supabase server client, AI portfolio context and shared logic.

---

## Current experience concept

The visual identity is a dark purple technical environment.

Primary concept:

MICHAEL KNOWLEDGE GRAPH

The Three.js scene is not supposed to be a decorative random neural network.

It represents Michael's actual skills, tools, projects, learning and career direction.

Major branches include:

Frontend
Data
AI
Tools
Projects
Learning

The graph changes which labels/connections are emphasized depending on scroll position.

The intended long-term interaction is inspired by semantic knowledge graphs such as Learn Anything.

---

## Current colors

Background:
#050308

Surface:
#100A19

Primary purple:
#8B5CF6

Light purple:
#B49AFF

Deep purple:
#4C1D95

Energy cyan:
#72E7FF

Foreground:
#F7F5FB

Muted:
#91899F

---

## Current projects

### LANVINS OFC

Strongest current frontend showcase.

Stack includes React, Vite, Tailwind CSS and Framer Motion.

Has GitHub repository and live Vercel deployment.

### Unleash Tribe Check-in

Accountability/check-in application.

Uses JavaScript, Supabase, PostgreSQL and Vercel.

Useful for showing experimentation beyond static frontend development.

### VolunteerBridge

Collaborative/team capstone project.

Never present this as entirely Michael's work.

---

## Backend

Contact form:

Browser
-> /api/contact
-> Next.js Route Handler
-> Supabase
-> public.contact_messages

The Supabase table has Row Level Security enabled.

The server uses a secret Supabase key.

Never expose the Supabase secret key to browser code.

---

## AI assistant

Component:
src/components/sections/AIChat.jsx

Endpoint:
src/app/api/ask/route.js

Knowledge:
src/lib/portfolio-context.js

Provider:
Google Gemini

The assistant should only answer using publicly appropriate portfolio information.

Responses are deliberately cleaned to remove:

Markdown
asterisks
bullet symbols
numbered-list prefixes
em dashes
en dashes

The writing style should remain concise and human.

Do not send sensitive/private information through the public AI portfolio context.

---

## Environment variables

Local secrets are stored in .env.local.

Required variables:

SUPABASE_URL
SUPABASE_SECRET_KEY
GEMINI_API_KEY

Never commit .env.local.

These same variables must be configured in the production hosting environment.

---

## Important design decisions

Do not return to the old giant wireframe/genome ball.

Do not move the 3D object aggressively left and right while scrolling.

The desired motion is cinematic and controlled.

Scroll should gradually reveal or focus different parts of Michael's knowledge graph.

The graph should eventually become even more integrated with content.

Possible future behavior:

Skills section focuses frontend/data/AI clusters.

Projects section highlights technologies connected to each project.

AI responses may eventually return node IDs so relevant graph nodes illuminate.

Journey may convert part of the graph into a learning trajectory.

Contact may collapse the graph back toward the Michael node.

---

## Known unfinished items

Professional portrait is still missing.

Resume/CV needs rewriting and completion.

Phone number, professional email and LinkedIn details need final confirmation.

Custom domain is not configured yet.

Knowledge graph is scroll-reactive but not yet fully clickable.

Node hover information panels are a future enhancement.

AI-controlled graph navigation is a future enhancement.

Project screenshots may need better manually curated images.

Mobile intentionally uses a simplified non-3D experience.

Full performance/Lighthouse optimization remains a future pass.

Open Graph/social sharing image remains to be designed.

---

## Known development issue

A MetaMask browser extension previously injected an error into localhost.

The stack trace originated from chrome-extension:// rather than portfolio code.

This is not part of the application.

Test in Incognito or disable the extension when debugging if necessary.

---

## Useful commands

Development:

npm run dev

Production build:

npm run build

Production test:

npm run start

Git:

git add .
git commit -m "Human readable commit message"
git push

---

## Working style requested by Michael

Michael prefers short implementation batches rather than huge tutorials.

Give approximately five to seven clear steps per coding pass.

When folders/files need to be created, provide PowerShell commands instead of asking him to create them manually.

Commit messages should sound human.

Avoid Conventional Commit prefixes such as feat:, fix: and chore:.

Michael is learning React and JavaScript, so explain important architecture without turning every step into a long lecture.

Cross-check code before giving replacements.

---

## Recommended next session

Do not add a large new feature immediately.

First inspect the deployed V1 visually.

Priority order:

1. Improve knowledge graph composition and labels.
2. Add semantic node hover/click information.
3. Improve scroll-driven camera choreography.
4. Add professional portrait.
5. Rewrite and integrate resume.
6. Improve project screenshots and case studies.
7. Connect AI answers to graph highlighting.
8. Run full responsive/accessibility/performance pass.
9. Add custom domain, sitemap, robots and social metadata.

The portfolio should remain truthful, performant and recruiter-friendly even as the visual experience becomes more ambitious.

---

# Refinement Update

The portfolio has now completed its first major production refinement.

## Added since the original handoff

Custom ME favicon and navbar identity.

Dark purple premium visual system.

Solid high-contrast AI assistant surface.

Solid premium contact console.

Project cards upgraded into mini case studies.

LANVINS includes a working live project link.

Knowledge graph upgraded from decorative nodes into a semantic skill graph.

Skill Explorer now communicates with the Three.js graph.

Hovering skills can focus their related graph neighborhood.

Currently Learning section added.

Learning direction is shown as Now, Next and Direction rather than fake proficiency percentages.

Three.js is loaded through a client-only dynamic wrapper to reduce first-render interference.

Open Graph social sharing image added.

SEO metadata improved.

robots.txt added.

sitemap.xml added.

## Current major remaining work

Get Michael's exact professional LinkedIn URL.

Confirm Michael's public professional email.

Finish and rewrite Michael's CV/resume.

Add the finished resume PDF and a visible Resume link.

Get or create a professional portrait.

Evaluate generated King Michael / ME logo concepts against the current monogram.

Run a measured Lighthouse/Core Web Vitals audit.

Improve any remaining mobile layout issues.

Possibly connect AI answers directly to knowledge graph node highlighting.

Possibly add richer project case-study pages after more projects are completed.

Do not add new decorative effects unless they improve the portfolio's story or usability.

The next session should prioritize real professional information and measured QA rather than more feature development.
