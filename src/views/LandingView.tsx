import type { ReactNode } from "react";
import { SectionWave } from "../components/SectionWave";
import career from "../data/career.json";
import { CareerTimeline } from "../components/CareerTimeline";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useStarSpin } from "../hooks/useStarSpin";
import { StarParticles } from "../components/StarParticles";
import { ContactItems } from "../components/ContactItems";
import { ScrollHint } from "../components/ScrollHint";
import { CompactNavigation } from "../components/CompactNavigation";
import { ProjectList } from "../components/ProjectList";

function Sparkle({ className = "" }: { className?: string }) {
  return <svg className={`sparkle ${className}`} viewBox="0 0 40 40" aria-hidden="true"><path d="M20 0C22 13 27 18 40 20C27 22 22 27 20 40C18 27 13 22 0 20C13 18 18 13 20 0Z" fill="currentColor" /></svg>;
}

function Dots() {
  return <span className="dots" aria-hidden="true">{Array.from({ length: 15 }, (_, i) => <i key={i} />)}</span>;
}

function SectionTitle({ children, align = "left", id, reveal }: { children: ReactNode; align?: "left" | "right"; id: string; reveal?: "up" | "left" | "right" }) {
  return <div className={`section-heading section-heading--${align}`} data-reveal={reveal}><Sparkle /><h2 id={id}>{children}</h2><Dots /></div>;
}

const designTools = [
  { name: "Figma", image: "figma" },
  { name: "Webflow", image: "webflow.svg" },
  { name: "Relume", image: "relume" },
  { name: "Photoshop", image: "photoshop" },
  { name: "Illustrator", image: "illustrator" },
];
const aiTools = [
  { name: "Claude", image: "claude.svg" },
  { name: "Figma Make", image: "figma-make" },
  { name: "Lovable", image: "lovable" },
  { name: "ChatGPT", image: "chatgpt.svg" },
  { name: "Gemini", image: "gemini.svg" },
  { name: "Google Stitch", image: "google-stitch" },
];

const codingTools = [
  { name: "HTML", image: "html.svg" },
  { name: "CSS", image: "css.svg" },
  { name: "Codex", image: "codex.svg" },
];

function ToolList({ tools, ai = false }: { tools: typeof designTools; ai?: boolean }) {
  return <ul className={`tool-grid ${ai ? "tool-grid--ai" : ""}`}>{tools.map(tool => <li className="tool-card" key={tool.image}><img src={`/images/${tool.image.endsWith(".svg") ? tool.image : `${tool.image}.png`}`} width="40" height="40" alt="" loading="lazy" /><span>{tool.name}</span></li>)}</ul>;
}

export function LandingView() {
  const revealScope = useScrollReveal();
  useStarSpin(revealScope);
  return (
    <main data-view="landing" ref={revealScope}>
      <StarParticles />
      <section id="introduction" className="hero" aria-labelledby="portfolio-title">
        <Sparkle className="hero-star hero-star--one" /><Sparkle className="hero-star hero-star--two" /><Sparkle className="hero-star hero-star--three" /><Sparkle className="hero-star hero-star--four" /><Sparkle className="hero-star hero-star--five" />
        <p className="hero-role" data-reveal="up">UX/UI DESIGNER</p>
        <h1 id="portfolio-title" data-reveal="up">PORTFOLIO</h1>
        <div className="hero-year" data-reveal="up">
          <a className="hero-linkedin" href="https://www.linkedin.com/in/lauraben-uxui/" target="_blank" rel="noopener noreferrer" aria-label="Laura Benavides on LinkedIn (opens in a new tab)">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="3" y="3" width="26" height="26" rx="7" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="10" r="1.6" fill="currentColor" /><path d="M10 14v9m6 0v-9m0 4a4 4 0 0 1 8 0v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <span className="hero-name">Laura Benavides</span>
          <svg className="hero-name-star" viewBox="0 0 40 40" aria-hidden="true">
            <path d="m20 2 3.5 11.5L33 7l-6.5 9.5L38 20l-11.5 3.5L33 33l-9.5-6.5L20 38l-3.5-11.5L7 33l6.5-9.5L2 20l11.5-3.5L7 7l9.5 6.5Z" fill="currentColor" fillOpacity=".18" />
            <path d="M20 4c1.6 10.4 5.6 14.4 16 16-10.4 1.6-14.4 5.6-16 16C18.4 25.6 14.4 21.6 4 20 14.4 18.4 18.4 14.4 20 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="m20 15 5 5-5 5-5-5Z" fill="currentColor" />
          </svg>
        </div>
        <ScrollHint />
      </section>

      <CompactNavigation />
      <div className="portfolio-content">
        <section id="about" className="about" aria-labelledby="about-title">
          <SectionWave /><SectionWave bottom />
          <div className="section-band-inner">
          <div className="about-layout" data-reveal="up">
            <img className="portrait" src="/images/laura.png" alt="Laura Benavides" width="176" height="176" />
            <div className="about-copy">
              <h2 id="about-title" className="sr-only">About me</h2>
              <p>I'm a UX/UI designer, passionate about creating meaningful and intuitive digital experiences. Guided by design thinking and user research, I turn insights from interviews, empathy maps, and user journeys into wireframes, user flows, and interactive prototypes that feel effortless and human.</p>
              <p>My background in customer service taught me to truly listen — <strong>to understand needs beyond words</strong> — Experience with mobile first layouts and accessible interfaces to consistent design systems, style guides, and information architecture.</p>
              <p className="muted">I believe in iterative with agile processes, and storytelling to make technology more personal and purposeful.</p>
            </div>
          </div>
          </div>
        </section>
  
        <section id="projects" className="projects" aria-labelledby="projects-title">
          <SectionTitle id="projects-title" align="right">Case studies</SectionTitle>
          <ProjectList />
        </section>
  
        <section id="tech-stack" className="tools" aria-labelledby="tools-title">
          <SectionWave /><SectionWave bottom />
          <div className="tools-inner">
          <SectionTitle id="tools-title" align="right" reveal="left">Tools</SectionTitle>
          <div className="tool-group" data-reveal="left">
            <h3>Design</h3><ToolList tools={designTools} />
          </div>
          <div className="tool-group" data-reveal="left">
          <h3 className="ai-title">AI <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 1 3.1 7 7.6.8-5.7 5 1.7 7.5-6.7-3.9-6.7 3.9L7 13.8 1.3 8.8l7.6-.8Z" fill="currentColor" /></svg></h3><ToolList tools={aiTools} ai />
          </div>
          <div className="tool-group" data-reveal="left">
            <h3>Basic Coding</h3><ToolList tools={codingTools} />
          </div>
          </div>
        </section>
  
        <section id="background" className="background" aria-labelledby="background-title">
          <SectionTitle id="background-title" reveal="up">Background</SectionTitle>
          <CareerTimeline entries={career.background} />
        </section>

        <div className="career-divider" aria-hidden="true"><Sparkle /></div>

        <section id="cv" className="education" aria-labelledby="education-title">
          <SectionTitle id="education-title" align="right" reveal="up">Education</SectionTitle>
          <CareerTimeline entries={career.education} education />
        </section>
  

          <section id="contact" className="contact" aria-labelledby="contact-title">
            <SectionWave />
            <div className="section-band-inner">
            <SectionTitle id="contact-title" reveal="right">Contact info</SectionTitle>
            <ContactItems />
            </div>
          </section>
          <footer className="site-footer"><p>© 2025 Laura Benavides — Designed with <span className="footer-heart" aria-label="love">♥</span></p></footer>
      </div>
    </main>
  );
}
