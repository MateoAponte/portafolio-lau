import type { ReactNode } from "react";

// Demo values only. Replace these four records when real contact details arrive.
export const contacts = [
  { id: "gmail", label: "Gmail", value: "laura.benavides@example.com", href: "mailto:laura.benavides@example.com", external: false },
  { id: "linkedin", label: "LinkedIn", value: "Professional profile", href: "https://example.com/linkedin", external: true },
  { id: "behance", label: "Behance", value: "Creative portfolio", href: "https://example.com/behance", external: true },
  { id: "phone", label: "Mobile", value: "+1 (202) 555-0147", href: "tel:+12025550147", external: false },
] as const;

function ContactIcon({ type }: { type: typeof contacts[number]["id"] }) {
  const shapes: Record<typeof type, ReactNode> = {
    gmail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M7.5 10v7M7.5 7v.1M11.5 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    behance: <><path d="M3 5h5a3 3 0 0 1 0 6H3m0-6v14h5a4 4 0 0 0 0-8M16 6h5m-6 8h7a4 4 0 0 0-8 0v1a4 4 0 0 0 7 2" /></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 5h4m-3 14h2" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[type]}</svg>;
}

export function ContactItems() {
  return (
    <>
      <p className="contact-demo" data-reveal="right">Demo contact details</p>
      <ul className="contact-list">
        {contacts.map(contact => (
          <li key={contact.id} className={`contact-item contact-item--${contact.id}`} data-reveal="right">
            <a
              className="contact-link"
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              aria-label={`${contact.label}: ${contact.value} (demo${contact.external ? ", opens in a new tab" : ""})`}
            >
              <span className="contact-icon"><ContactIcon type={contact.id} /></span>
              <span className="contact-copy"><span className="contact-label">{contact.label}</span><span className="contact-value">{contact.value}</span></span>
              <svg className="contact-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
