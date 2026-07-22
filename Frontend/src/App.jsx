import { useEffect, useState, Suspense } from "react";
import DeskScene from "./components/Scene/DeskScene.jsx";
import Loader from "./components/Loader.jsx";
import Panel from "./components/Panel.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import { getProjects, getAchievements } from "./lib/api.js";
import {
  profile,
  skills,
  projects as fallbackProjects,
  achievements as fallbackAchievements,
} from "./data/portfolioData.js";

const PANEL_CONTENT = {
  projects: { fileTag: "FILE_01 — PROJECTS", title: "Selected work", subtitle: "A few things I've shipped recently." },
  about: { fileTag: "FILE_02 — ABOUT & SKILLS", title: "About me", subtitle: null },
  achievements: { fileTag: "FILE_03 — ACHIEVEMENTS", title: "Achievements", subtitle: "Awards, certifications, and recognitions." },
  contact: { fileTag: "FILE_04 — CONTACT", title: "Get in touch", subtitle: "Have a project in mind? Send a message." },
};

export default function App() {
  const [activePanel, setActivePanel] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [projects, setProjects] = useState(fallbackProjects);
  const [achievements, setAchievements] = useState(fallbackAchievements);

  useEffect(() => {
    getProjects(fallbackProjects).then(setProjects);
    getAchievements(fallbackAchievements).then(setAchievements);
  }, []);

  const handleSelect = (key) => {
    setActivePanel(key);
    setHasInteracted(true);
  };

  const closePanel = () => setActivePanel(null);

  const content = activePanel ? PANEL_CONTENT[activePanel] : null;

  return (
    <div className="app-shell">
      <div className="scene-canvas">
        <Suspense fallback={null}>
          <DeskScene onSelect={handleSelect} />
        </Suspense>
        <Loader />
      </div>

      <div className="topbar">
        <div className="brand">
          <strong>{profile.name}</strong> — {profile.role}
        </div>
        <div className="topbar-hint">
          <span className="dot" />
          <span className="label">Click an object on the desk</span>
        </div>
      </div>

      <div className={`intro ${hasInteracted ? "hidden" : ""}`}>
        <p className="eyebrow">Interactive portfolio</p>
        <h1>Pull up a chair.</h1>
        <p>
          Everything on this desk opens something — the laptop holds my
          projects, the book is about me, the trophy is what I've won, and
          the notepad is how to reach me. Click around.
        </p>
      </div>

      <Panel
        open={!!activePanel}
        fileTag={content?.fileTag}
        title={content?.title}
        subtitle={content?.subtitle}
        onClose={closePanel}
      >
        {activePanel === "projects" && <Projects projects={projects} />}
        {activePanel === "about" && <About profile={profile} skills={skills} />}
        {activePanel === "achievements" && <Achievements achievements={achievements} />}
        {activePanel === "contact" && <Contact profile={profile} />}
      </Panel>
    </div>
  );
}
