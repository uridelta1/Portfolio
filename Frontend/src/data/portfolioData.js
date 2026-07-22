// Placeholder content. Replace with your real details, or run the backend
// (see /backend, `npm run seed`) and this file becomes a fallback used only
// if the API request fails.

export const profile = {
  name: "Datta Shrirame",
  role: "Full-Stack Developer (Fresher)",
  location: "Based in Pune, IN — open to remote work",
  bio: [
    "I build products end to end: data model, API, interface, and the small interaction details in between. Most of my recent work sits on the MERN stack, with a growing habit of reaching for Three.js when a flat page won't do the idea justice.",
    "Before development I studied computer science and spent a couple of years in a support-engineering role, which is where the obsession with clear error messages and calm interfaces started.",
    "Outside of client work I maintain a couple of small open-source tools and I'm slowly writing a longer piece on rendering performance in the browser.",
  ],
  email: "uridelta1@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/uridelta1" },
    { label: "Instagram", url: "https://www.instagram.com/datta030?igsh=MWdubTdqZHVqbnpzMA==" },
    // { label: "Twitter / X", url: "https://twitter.com/example" },
  ],
};

export const skills = [
  { name: "React", level: "Advanced" },
  { name: "Node.js / Express", level: "Advanced" },
  { name: "MongoDB", level: "Advanced" },
  { name: "Three.js / R3F", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "JavaScript", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "Python", level: "Advanced" },
];

export const projects = [
  {
    _id: "p1",
    title: "Nimbus — Task Orchestration Platform",
    tagline: "Real-time kanban with automation rules",
    description:
      "A full-stack task manager with drag-and-drop boards, live presence, and rule-based automations. Built on the MERN stack with Socket.IO for live updates.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/nimbus",
  },
  {
    _id: "p2",
    title: "Aperture — Photography Marketplace",
    tagline: "Stock photo marketplace for indie photographers",
    description:
      "Marketplace where photographers upload and license work. Stripe Connect handles split payouts; a custom pipeline generates watermarked previews on upload.",
    stack: ["Next.js", "PostgreSQL", "Stripe", "AWS S3"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/aperture",
  },
  {
    _id: "p3",
    title: "Pulse — Habit Tracker",
    tagline: "A minimal habit tracker with streak visualizations",
    description:
      "Mobile-first habit tracker with heatmap streaks, offline-first storage, and gentle push-notification nudges.",
    stack: ["React Native", "SQLite", "Expo"],
    liveUrl: "",
    repoUrl: "https://github.com/example/pulse",
  },
];

export const achievements = [
  {
    _id: "a1",
    title: "1st Place — National Hackathon",
    issuer: "HackTheFuture",
    date: "2025",
    description: "Won first place among 120 teams building a disaster-response coordination tool in 36 hours.",
    icon: "trophy",
  },
  {
    _id: "a2",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Associate-level certification covering scalable, fault-tolerant system design on AWS.",
    icon: "medal",
  },
  {
    _id: "a3",
    title: "Open Source Contributor of the Month",
    issuer: "OSS Collective",
    date: "2024",
    description: "Recognized for sustained contributions to a widely used open-source charting library.",
    icon: "star",
  },
];
