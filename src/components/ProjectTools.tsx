import { Heart, PanelsTopLeft, Wrench } from "lucide-react";

function ToolIcon({ name }: { name: string }) {
  if (name === "Lovable") return <Heart fill="currentColor" strokeWidth={0} aria-hidden="true" />;
  if (name === "Claude") return <span className="project-tool-mask" style={{ maskImage: 'url("/images/claude.svg")' }} aria-hidden="true" />;
  if (name === "Figma") return <svg viewBox="0 0 24 28" aria-hidden="true" fill="currentColor"><rect x="4" y="2" width="8" height="8" rx="4" /><rect x="12" y="2" width="8" height="8" rx="4" /><rect x="4" y="10" width="8" height="8" rx="4" /><circle cx="16" cy="14" r="4" /><path d="M4 22a4 4 0 0 0 8 0v-4H8a4 4 0 0 0-4 4Z" /></svg>;
  if (name === "FigJam") return <PanelsTopLeft aria-hidden="true" />;
  if (name === "Notion") return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 17V7l8 10V7" /></svg>;
  if (name === "ChatGPT") return <span className="project-tool-mask" style={{ maskImage: 'url("/images/chatgpt.svg")' }} aria-hidden="true" />;
  return <Wrench aria-hidden="true" />;
}

export function ProjectTools({ value }: { value: string }) {
  return <ul className="project-tool-tags">{value.split(" · ").map(name => <li key={name}><ToolIcon name={name} /><span>{name}</span></li>)}</ul>;
}
