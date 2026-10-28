import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useStarSpin } from "../hooks/useStarSpin";
import { StarParticles } from "../components/StarParticles";
import { ContactItems } from "../components/ContactItems";
import { CompactNavigation } from "../components/CompactNavigation";
import { ContactClosing } from "../components/ContactClosing";
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
  { name: "Illustrator", image: "illustrator" },
  { name: "Adobe XD", image: "adobe-xd" },
  { name: "Photoshop", image: "photoshop" },
  { name: "Trello", image: "trello" },
];
const aiTools = [
  { name: "Lovable", image: "lovable" },
  { name: "Figma Make", image: "figma-make" },
  { name: "Google Stitch", image: "google-stitch" },
];

function ToolList({ tools, ai = false }: { tools: typeof designTools; ai?: boolean }) {
  return <ul className={`tool-grid ${ai ? "tool-grid--ai" : ""}`}>{tools.map(tool => <li className="tool-card" key={tool.image}>{ai && <span className="ai-badge">AI</span>}<img src={`/images/${tool.image}.png`} width="40" height="40" alt="" loading="lazy" /><span>{tool.name}</span></li>)}</ul>;
}

export function LandingView() {
  const revealScope = useScrollReveal();
  useStarSpin(revealScope);
  return (
    <main data-view="landing" ref={revealScope}>
      <StarParticles />
      <section id="introduction" className="hero" aria-labelledby="portfolio-title">
        <Sparkle className="hero-star hero-star--one" /><Sparkle className="hero-star hero-star--two" /><Sparkle className="hero-star hero-star--three" /><Sparkle className="hero-star hero-star--four" /><Sparkle className="hero-star hero-star--five" />
        <div className="hero-year" data-reveal="up"><span>2025</span><img src="/images/avatar.png" alt="" width="32" height="32" /></div>
        <h1 id="portfolio-title" data-reveal="up">PORTFOLIO</h1>
        <p className="hero-role" data-reveal="up">UX/UI DESIGNER</p>
      </section>

      <CompactNavigation />
      <div className="portfolio-content">
        <section id="about" className="about" aria-labelledby="about-title">
          <div className="about-divider"><Dots /></div>
          <div className="about-layout" data-reveal="up">
            <img className="portrait" src="/images/laura.png" alt="Laura Benavides" width="112" height="112" />
            <div className="about-copy">
              <h2 id="about-title">You can call me <strong>Laura Benavides</strong> <span aria-hidden="true">✨</span></h2>
              <p>I'm a UX/UI designer, passionate about creating meaningful and intuitive digital experiences. Guided by design thinking and user research, I turn insights from interviews, empathy maps, and user journeys into wireframes, user flows, and interactive prototypes that feel effortless and human.</p>
              <p>My background in customer service taught me to truly listen — <strong>to understand needs beyond words</strong> — Experience with mobile first layouts and accessible interfaces to consistent design systems, style guides, and information architecture.</p>
              <p className="muted">I believe in iterative with agile processes, and storytelling to make technology more personal and purposeful.</p>
            </div>
          </div>
          <section id="contact" className="contact" aria-labelledby="contact-title">
            <SectionTitle id="contact-title" reveal="right">Contact info</SectionTitle>
            <ContactItems />
          </section>
        </section>

        <section id="tech-stack" className="tools" aria-labelledby="tools-title">
          <SectionTitle id="tools-title" align="right" reveal="left">Tools</SectionTitle>
          <div data-reveal="left">
            <h3>Design</h3><ToolList tools={designTools} />
          </div>
          <div data-reveal="left">
          <h3 className="ai-title">Artificial intelligence <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 1 3.1 7 7.6.8-5.7 5 1.7 7.5-6.7-3.9-6.7 3.9L7 13.8 1.3 8.8l7.6-.8Z" fill="currentColor" /></svg></h3><ToolList tools={aiTools} ai />
          </div>
        </section>

        <section id="cv" className="education" aria-labelledby="education-title">
          <SectionTitle id="education-title" reveal="up">Education</SectionTitle>
          <ul className="education-list">
            <li data-reveal="right"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6M22 9v7" /></svg><h3>UX/UI Design Bootcamp</h3><p>BIT, Universidad Iberoamericana</p><time dateTime="2025">2025</time></li>
            <li data-reveal="right"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6M22 9v7" /></svg><h3>Web Development Course (HTML, CSS, JS)</h3><p>Tecnológico de Monterrey</p><time dateTime="2025">2025</time></li>
          </ul>
        </section>

        <section id="projects" className="projects" aria-labelledby="projects-title">
          <SectionTitle id="projects-title" align="right">Case studies</SectionTitle>
          <p className="project-demo-note">Three fictional concepts exploring everyday experiences.</p>
          <ProjectList />
        </section>
        <ContactClosing />
        <footer className="site-footer"><p>© 2025 Laura Benavides — Designed with <span className="footer-heart" aria-label="love">♥</span></p></footer>
      </div>
    </main>
  );
}
