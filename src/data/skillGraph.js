export const skillGraphNodes = [
  // Core
  {
    id: "michael",
    label: "Michael",
    cluster: "core",
    type: "core",
    status: "current",
    major: true,
  },

  // Main branches
  {
    id: "frontend",
    label: "Frontend",
    cluster: "frontend",
    type: "hub",
    status: "current",
    major: true,
  },
  {
    id: "data",
    label: "Data",
    cluster: "data",
    type: "hub",
    status: "learning",
    major: true,
  },
  {
    id: "ai",
    label: "AI",
    cluster: "ai",
    type: "hub",
    status: "learning",
    major: true,
  },
  {
    id: "tools",
    label: "Tools",
    cluster: "tools",
    type: "hub",
    status: "current",
    major: true,
  },
  {
    id: "projects",
    label: "Projects",
    cluster: "projects",
    type: "hub",
    status: "current",
    major: true,
  },
  {
    id: "learning",
    label: "Learning",
    cluster: "learning",
    type: "hub",
    status: "current",
    major: true,
  },

  // Frontend
  { id: "html", label: "HTML", cluster: "frontend", status: "current" },
  { id: "css", label: "CSS", cluster: "frontend", status: "current" },
  {
    id: "javascript",
    label: "JavaScript",
    cluster: "frontend",
    status: "current",
  },
  { id: "react", label: "React", cluster: "frontend", status: "current" },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    cluster: "frontend",
    status: "current",
  },
  { id: "vite", label: "Vite", cluster: "frontend", status: "current" },
  {
    id: "responsive",
    label: "Responsive UI",
    cluster: "frontend",
    status: "current",
  },

  // Data
  { id: "python", label: "Python", cluster: "data", status: "learning" },
  { id: "pandas", label: "Pandas", cluster: "data", status: "learning" },
  { id: "kaggle", label: "Kaggle", cluster: "data", status: "learning" },
  {
    id: "data-analysis",
    label: "Data Analysis",
    cluster: "data",
    status: "learning",
  },
  {
    id: "data-science",
    label: "Data Science",
    cluster: "data",
    status: "learning",
  },

  // AI
  {
    id: "prompt-engineering",
    label: "Prompt Engineering",
    cluster: "ai",
    status: "current",
  },
  { id: "llms", label: "LLMs", cluster: "ai", status: "learning" },
  {
    id: "ai-automation",
    label: "AI Automation",
    cluster: "ai",
    status: "learning",
  },
  {
    id: "machine-learning",
    label: "Machine Learning",
    cluster: "ai",
    status: "learning",
  },

  // Tools / backend
  { id: "git", label: "Git", cluster: "tools", status: "current" },
  { id: "github", label: "GitHub", cluster: "tools", status: "current" },
  {
    id: "supabase",
    label: "Supabase",
    cluster: "tools",
    status: "current",
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    cluster: "tools",
    status: "developing",
  },
  { id: "vercel", label: "Vercel", cluster: "tools", status: "current" },
  { id: "vscode", label: "VS Code", cluster: "tools", status: "current" },

  // Projects
  {
    id: "lanvins",
    label: "LANVINS OFC",
    cluster: "projects",
    type: "project",
    status: "current",
  },
  {
    id: "unleash",
    label: "Unleash Tribe",
    cluster: "projects",
    type: "project",
    status: "current",
  },
  {
    id: "volunteerbridge",
    label: "VolunteerBridge",
    cluster: "projects",
    type: "project",
    status: "current",
  },

  // Learning journey
  {
    id: "computer-science",
    label: "Computer Science",
    cluster: "learning",
    status: "current",
  },
  {
    id: "tech-crush",
    label: "Tech Crush",
    cluster: "learning",
    status: "current",
  },
  {
    id: "ml-collective",
    label: "ML Collective Africa",
    cluster: "learning",
    status: "current",
  },
];

export const skillGraphLinks = [
  // Michael -> main branches
  { source: "michael", target: "frontend", kind: "root" },
  { source: "michael", target: "data", kind: "root" },
  { source: "michael", target: "ai", kind: "root" },
  { source: "michael", target: "tools", kind: "root" },
  { source: "michael", target: "projects", kind: "root" },
  { source: "michael", target: "learning", kind: "root" },

  // Frontend
  { source: "frontend", target: "html" },
  { source: "frontend", target: "css" },
  { source: "frontend", target: "javascript" },
  { source: "frontend", target: "react" },
  { source: "frontend", target: "tailwind" },
  { source: "frontend", target: "vite" },
  { source: "frontend", target: "responsive" },

  // Data
  { source: "data", target: "python" },
  { source: "data", target: "pandas" },
  { source: "data", target: "kaggle" },
  { source: "data", target: "data-analysis" },
  { source: "data", target: "data-science" },

  // AI
  { source: "ai", target: "prompt-engineering" },
  { source: "ai", target: "llms" },
  { source: "ai", target: "ai-automation" },
  { source: "ai", target: "machine-learning" },

  // Tools
  { source: "tools", target: "git" },
  { source: "tools", target: "github" },
  { source: "tools", target: "supabase" },
  { source: "tools", target: "postgresql" },
  { source: "tools", target: "vercel" },
  { source: "tools", target: "vscode" },

  // Projects
  { source: "projects", target: "lanvins" },
  { source: "projects", target: "unleash" },
  { source: "projects", target: "volunteerbridge" },

  // Skills -> projects
  { source: "react", target: "lanvins", kind: "project-skill" },
  { source: "tailwind", target: "lanvins", kind: "project-skill" },
  { source: "vite", target: "lanvins", kind: "project-skill" },

  { source: "javascript", target: "unleash", kind: "project-skill" },
  { source: "supabase", target: "unleash", kind: "project-skill" },
  { source: "postgresql", target: "unleash", kind: "project-skill" },
  { source: "vercel", target: "unleash", kind: "project-skill" },

  // Journey
  { source: "learning", target: "computer-science" },
  { source: "learning", target: "tech-crush" },
  { source: "learning", target: "kaggle" },
  { source: "learning", target: "ml-collective" },

  // Cross-connections
  { source: "javascript", target: "react" },
  { source: "python", target: "data-science" },
  { source: "python", target: "machine-learning" },
  { source: "data-science", target: "machine-learning" },
  { source: "prompt-engineering", target: "llms" },
];