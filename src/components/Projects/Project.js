import React, { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";
import { MdSmartToy, MdWeb } from "react-icons/md";
import styles from "./Project.module.css";

const projectsData = [
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    icon: <MdSmartToy size={22} />,
    tags: ["ai", "fullstack", "react"],
    shortDesc:
      "Full-stack app that reviews GitHub Pull Requests using Groq AI (Llama 3.3 70B). Paste any public PR link for an instant structured review, or connect it as a webhook so every new PR is reviewed and commented on automatically.",
    highlight:
      "Large PRs are split into 8 000-char chunks with 500-char overlap — so Groq always has context even when a chunk starts mid-function.",
    whatItDoes:
      "Two modes: a React dashboard where you paste any public PR URL and get a structured AI review instantly, and a webhook endpoint that auto-posts the review as a GitHub comment the moment a PR is opened. The webhook verifies every request using HMAC-SHA256 signatures to prevent spoofing, and responds to GitHub in under a second to avoid the 10-second timeout — the actual AI work happens asynchronously in the background. Users can also choose to review privately without posting a comment on the PR.",
    architecture:
      "React 19 + Vite frontend → Express 5 backend → GitHub API (Octokit) for the diff → Groq SDK (Llama 3.3 70B) for the review → optional GitHub comment post via Octokit issues API. Frontend and backend deployed independently on Netlify and Render.",
    meta: [
      { label: "Backend", value: "Node.js + Express 5" },
      { label: "AI Model", value: "Llama 3.3 70B (Groq)" },
      { label: "Frontend", value: "React 19 + Vite" },
      { label: "GitHub SDK", value: "Octokit REST" },
      { label: "Security", value: "HMAC-SHA256 webhooks" },
      { label: "Deployed on", value: "Render + Netlify" },
    ],
    tech: ["Node.js", "Express", "React 19", "Vite", "Groq AI", "Llama 3.3 70B", "Octokit", "Webhooks", "HMAC-SHA256", "dotenv", "CORS"],
    github: "https://github.com/pooja911/Ai-Code-Reviewer",
    demo: "https://auto-ai-code-review.netlify.app/",
    live: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    icon: <MdWeb size={22} />,
    tags: ["fullstack", "react"],
    shortDesc:
      "This portfolio — neon CSS keyframe animations, a typewriter effect, an interactive accordion-style experience timeline, and a fully responsive layout built with React and React Bootstrap.",
    highlight:
      "The neon flicker is pure CSS @keyframes — multiple layered text-shadow values at different radii create the bloom effect without any JS or library.",
    whatItDoes:
      "A single-page React portfolio with client-side routing via React Router DOM v6. The Home section uses the typewriter-effect library to cycle through roles. The Experience page uses a nested accordion built entirely in React useState — each company expands to reveal projects, each project expands to reveal a full description. CSS Modules keep all styles fully scoped per component with zero class name collisions.",
    architecture:
      "React 17 SPA with React Router DOM for routing, React Bootstrap for layout grid, CSS Modules for scoped styling, and react-icons for icon sets. Deployed on Vercel with automatic CI from GitHub.",
    meta: [
      { label: "Framework", value: "React 17" },
      { label: "Routing", value: "React Router DOM v6" },
      { label: "UI Library", value: "React Bootstrap 5" },
      { label: "Styling", value: "CSS Modules + @keyframes" },
      { label: "Icons", value: "react-icons" },
      { label: "Deployed on", value: "Vercel" },
    ],
    tech: ["React 17", "React Router DOM", "React Bootstrap", "CSS Modules", "CSS Animations", "typewriter-effect", "react-icons", "MUI", "Vercel"],
    github: "https://github.com/pooja911/Portfolio-PoojaG",
    demo: "https://portfolio-pooja-g.vercel.app/",
    live: true,
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai" },
  { label: "Full Stack", value: "fullstack" },
  { label: "React", value: "react" },
];

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.card} ${open ? styles.cardOpen : ""}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className={styles.topBar} />
      <div className={styles.cardInner}>
        <div className={styles.cardHead}>
          <div className={styles.cardIcon}>{project.icon}</div>
          {project.live && (
            <div className={styles.status}>
              <span className={styles.dot} />
              Live
            </div>
          )}
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.shortDesc}</p>
        <div className={styles.tags}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <div className={styles.links} onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.btn}>
              <AiOutlineGithub size={14} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className={styles.btn}>
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
        <div className={styles.expandRow}>
          <span className={styles.expandLabel}>{open ? "Collapse" : "Details"}</span>
          <FiChevronDown
            size={16}
            className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          />
        </div>
      </div>

      <div className={`${styles.detail} ${open ? styles.detailOpen : ""}`}>
        <div className={styles.detailInner}>
          <div className={styles.highlight}>{project.highlight}</div>
          <div className={styles.detailSection}>
            <div className={styles.detailTitle}>What it does</div>
            <p className={styles.detailText}>{project.whatItDoes}</p>
          </div>
          <div className={styles.detailSection}>
            <div className={styles.detailTitle}>Architecture</div>
            <p className={styles.detailText}>{project.architecture}</p>
          </div>
          <div className={styles.metaGrid}>
            {project.meta.map((m) => (
              <div key={m.label} className={styles.metaItem}>
                <div className={styles.metaLabel}>{m.label}</div>
                <div className={styles.metaVal}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = projectsData.filter(
    (p) => activeFilter === "all" || p.tags.includes(activeFilter)
  );

  return (
    <section className={`${styles.projCont} project-section`} id="projects">
      <div className={styles.inner}>
        <h1 className={`${styles.neontext} heading`} style={{ paddingBottom: "0.4rem" }}>
          My <strong className="main-name">Projects</strong>
        </h1>
        <p className={styles.subtitle}>
          Personal projects I've built outside of work. Click any card to read more.
        </p>

        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`${styles.chip} ${activeFilter === f.value ? styles.chipActive : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
