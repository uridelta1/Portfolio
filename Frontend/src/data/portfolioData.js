// Placeholder content. Replace with your real details, or run the backend
// (see /backend, `npm run seed`) and this file becomes a fallback used only
// if the API request fails.

export const profile = {
  name: "Datta Shrirame",
  role: "Full-Stack Developer (Fresher)",
  location: "Based in Pune, IN — open to remote work",
  bio: [
   "I build products end to end: from the data model and API to the interface and the small interaction details in between. Most of my recent work is built around the MERN stack, with a growing habit of reaching for Three.js when a flat page doesn't do the idea justice.",

"Before getting into development, I studied computer science and spent a couple of years in a support-engineering role. That's where my obsession with clear error messages, reliable systems, and calm interfaces started.",

"Outside of client work, I maintain a couple of small open-source tools and I'm slowly writing a longer piece on rendering performance in the browser.",
  ],
  email: "uridelta1@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/uridelta1" },
    { label: "Instagram", url: "https://www.instagram.com/datta030?igsh=MWdubTdqZHVqbnpzMA==" },
    // { label: "Twitter / X", url: "https://twitter.com/example" },
  ],
};

// export const skills = [
//   { name: "React", level: "Intermediate" },
//   { name: "Node.js / Express", level: "Advanced" },
//   { name: "MongoDB", level: "Advanced" },
//   { name: "Three.js / R3F", level: "Advanced" },
//   { name: "TypeScript", level: "Intermediate" },
//   { name: "JavaScript", level: "Advanced" },
//   { name: "PostgreSQL", level: "Intermediate" },
//   { name: "Docker", level: "Intermediate" },
//   { name: "AWS", level: "Intermediate" },
//   { name: "Python", level: "Advanced" },
// ];

export const skills = [
  // Frontend
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "JavaScript", level: "Advanced" },
  { name: "HTML / CSS", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },

  // Backend
  { name: "Node.js", level: "Advanced" },
  { name: "Express.js", level: "Advanced" },
  { name: "REST APIs", level: "Advanced" },
  { name: "Django", level: "Intermediate" },

  // Databases
  { name: "MongoDB", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" },

  // AI / Machine Learning
  { name: "Python", level: "Advanced" },
  { name: "Generative AI", level: "Intermediate" },
  { name: "Google Gemini API", level: "Intermediate" },
  { name: "OpenRouter", level: "Intermediate" },
  { name: "Prompt Engineering", level: "Intermediate" },

  // 3D / Creative Development
  { name: "Three.js", level: "Advanced" },
  { name: "React Three Fiber", level: "Advanced" },
  { name: "Blender", level: "Intermediate" },
  { name: "WebGL", level: "Intermediate" },

];

export const projects = [
  {
    _id: "p1",
    title: "Face-Vault",
    tagline: "AI-powered event photo matching by face",
    description:
        "An AI-powered event photo platform where guests upload a selfie and instantly find event photos they appear in. Face detection and recognition run in the browser, while the backend handles authentication, event management, photo uploads, face descriptors, and matching.",
    stack: ["React","Node.js","Express","face-api.js","TensorFlow.js","JWT","lowdb","Tailwind CSS",],
    liveUrl: "https://facevault01.vercel.app/",
    repoUrl: "https://github.com/uridelta1/facevault01.git",
  },
  {
    _id: "p2",
    title: "Interview-Prep-AI",
    tagline: "AI-powered mock interviews with personalized feedback",
    description:
      "A full-stack AI mock interview platform that generates personalized interview questions, evaluates answers, analyzes resumes, matches candidates with job descriptions, and generates detailed performance reports. Built with React, Node.js, Express, MongoDB, and Google Gemini.",
    stack: [ "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Google Gemini",
  "JWT",
  "Cloudinary",
  "Tailwind CSS",],
    liveUrl: "https://inteview-ai-prep.vercel.app/",
    repoUrl: "https://github.com/uridelta1/Inteview-Ai-Prep.git",
  },
  {
    _id: "p3",
    title: "Cloudinary",
    tagline: "Cloud-based media management and image delivery platform",
    description:
     "A full-stack cloud media platform for uploading, managing, compress, optimizing, and delivering images and files. Built with Next.js and Prisma, with Cloudinary handling media storage and delivery, Clerk for authentication, and PostgreSQL for persistent data.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Cloudinary", "Clerk"],
    liveUrl: "https://chai-code-saas.vercel.app",
    repoUrl: "https://github.com/uridelta1/Chai-Code-Saas.git",
  },
];

export const achievements = []
//   {
//     _id: "a1",
//     title: "1st Place — National Hackathon",
//     issuer: "HackTheFuture",
//     date: "2025",
//     description: "Won first place among 120 teams building a disaster-response coordination tool in 36 hours.",
//     icon: "trophy",
//   },
//   {
//     _id: "a2",
//     title: "AWS Certified Solutions Architect",
//     issuer: "Amazon Web Services",
//     date: "2024",
//     description: "Associate-level certification covering scalable, fault-tolerant system design on AWS.",
//     icon: "medal",
//   },
//   {
//     _id: "a3",
//     title: "Open Source Contributor of the Month",
//     issuer: "OSS Collective",
//     date: "2024",
//     description: "Recognized for sustained contributions to a widely used open-source charting library.",
//     icon: "star",
//   },
// ];
