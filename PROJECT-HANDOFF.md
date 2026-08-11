# Michael Ezenwugo Portfolio — Project Handoff

## Project

Interactive developer portfolio for Michael Ezenwugo.

GitHub:

https://github.com/King-Mikeyz/michael-ezenwugo-portfolio

Live portfolio:

https://michael-ezenwugo-portfolio.vercel.app/

---

# Professional Positioning

Michael Ezenwugo is a Frontend Developer and Computer Science undergraduate developing toward AI and Data Science.

Current positioning:

Frontend Developer evolving into AI & Data Science.

Michael is currently a 200-level Computer Science student.

Completed training:

- Frontend Development — Tech Crush
- AI Prompt Engineering — Tech Crush

Currently developing:

- Python
- Data Science
- Artificial Intelligence
- Machine Learning

Current learning includes Kaggle and the Tech Crush Data Science scholarship program.

Michael also participates in Machine Learning Collective Africa.

Do not falsely position Michael as an established:

- AI Engineer
- Machine Learning Engineer
- Data Scientist
- Senior Software Engineer

The portfolio should remain truthful about current experience while showing ambition and technical direction.

---

# Professional Information

Name:

Michael Ezenwugo

Location:

Kano, Nigeria

Professional email:

mikelezeking@gmail.com

GitHub:

https://github.com/King-Mikeyz

LinkedIn:

https://www.linkedin.com/in/michael-ezenwugo-b293033a8/

Resume:

/Michael-Ezenwugo-CV.pdf

Portrait:

/images/profile/michael-ezenwugo.webp

---

# Stack

Core:

- Next.js
- React
- JavaScript
- Tailwind CSS

3D / Motion:

- Three.js
- React Three Fiber
- Drei
- GSAP
- GSAP ScrollTrigger
- d3-force-3d

Backend / Data:

- Supabase
- PostgreSQL

AI:

- Google Gemini

Tooling / Deployment:

- Git
- GitHub
- Lucide React
- Vercel

---

# Main Architecture

## src/app

Application routes, layout and API endpoints.

Important API routes include:

- Contact API
- Portfolio AI assistant API

## src/components/layout

Contains layout-level components including:

- Navbar
- Footer
- background atmosphere
- scroll systems

## src/components/sections

Contains the major portfolio sections including:

- Hero
- About
- Skills
- Projects
- Journey
- Currently Learning
- AI assistant
- Contact

## src/components/three

Contains the Three.js / React Three Fiber knowledge graph experience.

## src/data

Contains structured portfolio information.

Important files include:

- profile.js
- projects.js
- skills.js
- skillGraph.js

## src/lib

Contains shared logic including:

- Supabase server integration
- AI portfolio context
- other shared utilities

---

# V1 Visual Concept

The portfolio uses a dark purple technical visual environment.

Primary concept:

MICHAEL KNOWLEDGE GRAPH

The Three.js experience should represent Michael's actual skills, tools, projects, learning and technical direction.

It should not become a random decorative neural-network animation.

Major graph branches include:

- Frontend
- Data
- AI
- Tools
- Projects
- Learning

The graph can change emphasis depending on scroll position.

The long-term interaction direction is inspired by semantic knowledge graphs such as Learn Anything.

---

# Current Colors

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

# Profile Data

Main profile information lives in:

src/data/profile.js

Components should use the profile object instead of repeatedly hard-coding professional information.

Current structure:

```javascript
export const profile = {
  name: "Michael Ezenwugo",

  shortName: "Michael",

  role: "Frontend Developer",

  direction: "AI & Data Science",

  headline: "Frontend Developer evolving into AI & Data Science.",

  description:
    "Computer Science student building interactive digital experiences while developing deeper expertise in Python, data science, artificial intelligence, and machine learning.",

  location: "Kano, Nigeria",

  github: "https://github.com/King-Mikeyz",

  linkedin:
    "https://www.linkedin.com/in/michael-ezenwugo-b293033a8/",

  email: "mikelezeking@gmail.com",

  resume: "/Michael-Ezenwugo-CV.pdf",

  portrait: "/images/profile/michael-ezenwugo.webp",

  education: {
    course: "Computer Science",
    level: "200 Level",
  },

  learning: [
    "Python",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
  ],
};
---

# FUTURE PROJECT UPDATE GUIDE

This section explains how to add future completed projects without redesigning the portfolio.

The Projects section is data-driven.

Main files:

- src/data/projects.js
- src/components/sections/Projects.jsx
- src/data/skillGraph.js
- public/images/projects/

In most cases, DO NOT rewrite Projects.jsx.

Projects.jsx already loops through the projects array and automatically renders:

- project screenshot
- project type
- project title
- description
- focus
- what the project demonstrates
- technology stack
- live-project button
- source-code button

## How to add a new project

### Step 1 — Prepare the screenshot

Prefer WebP when possible.

Example:

    my-new-project.webp

Place it inside:

    public/images/projects/

Final path example:

    public/images/projects/my-new-project.webp

### Step 2 — Edit projects.js

Open:

    src/data/projects.js

Add another object before the closing ] of the projects array.

Example:

    {
      id: 4,

      title: "My New Project",

      type: "Full-stack Project",

      description:
        "A concise explanation of what the project does and why it was built.",

      focus:
        "The main product or engineering problems addressed.",

      demonstrates:
        "What this project demonstrates about Michael's current abilities.",

      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Supabase",
      ],

      github:
        "https://github.com/King-Mikeyz/repository-name",

      live:
        "https://project-name.vercel.app",

      preview:
        "/images/projects/my-new-project.webp",

      featured: true,
    },

Every project must have a unique id.

### Step 3 — Projects without deployments

If the source code exists but the project has not been deployed yet:

    live: null,

Projects.jsx will automatically hide the View Project button.

The Source Code button will remain visible.

This is currently how unfinished/non-deployed projects such as Unleash Tribe can be represented.

Once the project is deployed, replace null with the real deployment URL.

Example:

    live:
      "https://project-name.vercel.app",

No Projects.jsx rewrite should be required.

### Step 4 — Project screenshots

The preview field must match the actual image filename.

Example:

    preview:
      "/images/projects/my-new-project.webp",

If the path is wrong, the project card will not display the screenshot correctly.

### Step 5 — Technology stack

Only list technologies genuinely used in the project.

Example:

    stack: [
      "React",
      "Next.js",
      "Supabase",
      "PostgreSQL",
    ],

The existing Projects component automatically renders these technologies.

### Step 6 — Add important projects to the knowledge graph

If the project should appear inside the Michael Knowledge Graph, edit:

    src/data/skillGraph.js

Add a project node:

    {
      id: "my-new-project",
      label: "My New Project",
      cluster: "projects",
      type: "project",
      status: "current",
    },

Then connect it to the Projects hub:

    {
      source: "projects",
      target: "my-new-project",
    },

Then connect technologies genuinely used by the project.

Example:

    {
      source: "react",
      target: "my-new-project",
      kind: "project-skill",
    },

    {
      source: "supabase",
      target: "my-new-project",
      kind: "project-skill",
    },

Do not create fake skill relationships.

### Step 7 — New technologies

If the project uses a technology that does not yet exist in the portfolio skill system:

1. Decide whether Michael has enough actual experience to list it.
2. Add it to src/data/skills.js when appropriate.
3. Add a corresponding node to src/data/skillGraph.js.
4. Connect the technology to its correct cluster.
5. Connect it to relevant projects.

Do not present experimental exposure as expert-level proficiency.

### Step 8 — Test the new project

Run:

    npm run dev

Check:

- screenshot
- project title
- description
- stack
- Source Code link
- View Project link
- responsive layout
- knowledge graph if changed

Then run:

    npm run build

Only commit after the build succeeds.

---

# FUTURE V2 / REFINEMENT ROADMAP

The following items are intentionally not required for V1.

## Mobile knowledge graph

The current portfolio intentionally uses a simplified non-3D mobile experience.

A future V2 improvement can introduce a mobile-optimized knowledge graph instead of simply using the full desktop Three.js scene.

Possible approach:

- fewer nodes
- fewer labels
- lower device pixel ratio
- reduced particle/connection count
- simplified animation
- no expensive hover behavior
- touch-based interaction
- mobile-specific camera position
- respect prefers-reduced-motion

Do not simply force the full desktop Three.js scene onto small phones without performance testing.

## Knowledge graph improvements

Possible future improvements:

- clickable nodes
- hover/tap information panels
- stronger project-to-technology connections
- Skill Explorer synchronization
- AI responses highlighting graph nodes
- improved camera choreography
- section-aware node highlighting

## Project improvements

As Michael completes more work:

- replace unfinished projects with stronger completed projects when appropriate
- add live deployment links
- improve screenshots
- add richer case studies
- document the problem solved
- explain Michael's exact contribution to team projects
- show measurable outcomes when truthful and available

## Professional improvements

Possible additions:

- custom domain
- professional X account if Michael actively posts technical content
- professional social accounts only when relevant
- updated CV as experience grows
- internship/work experience
- certifications
- open-source contributions

Facebook and Instagram are intentionally not V1 priorities unless they become professionally relevant.

## Performance and QA

Future measured work may include:

- Lighthouse audit
- Core Web Vitals
- image optimization
- Three.js performance profiling
- mobile rendering profiling
- accessibility audit
- keyboard navigation
- reduced-motion verification

Do not optimize blindly. Measure first.

---

# FUTURE SESSION RULE

When returning to this project:

1. Read PROJECT-HANDOFF.md first.
2. Inspect current GitHub repository code.
3. Do not assume the portfolio is unchanged.
4. Read files before replacing them.
5. Preserve the data-driven Projects architecture.
6. Keep professional information truthful.
7. Run npm run build before committing important changes.

