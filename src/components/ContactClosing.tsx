import { useEffect, useRef, useState } from "react";
import { contacts } from "./ContactItems";

export function ContactClosing() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const email = useRef<HTMLAnchorElement>(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(contacts[0].value);
      setStatus("Email copied");
    } catch {
      const selection = window.getSelection();
      if (email.current && selection) { const range = document.createRange();range.selectNodeContents(email.current);selection.removeAllRanges();selection.addRange(range); }
      setStatus("Select and copy the email manually");
    }
    timer.current = setTimeout(() => setStatus(""), 3000);
  };
  return <section className="contact-closing" aria-labelledby="closing-contact-title">
    <h2 id="closing-contact-title">Let’s create something <em>meaningful.</em></h2>
    <p>Have a project in mind? Let’s start a conversation.</p>
    <div className="closing-contact-actions"><a ref={email} href={contacts[0].href}>{contacts[0].value}</a><button type="button" onClick={copy}>Copy email <span aria-hidden="true">↗</span></button><a href={contacts[1].href} target="_blank" rel="noopener noreferrer">LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span></a></div>
    <p className="copy-status" role="status" aria-live="polite">{status || "Demo contact details"}</p>
  </section>;
}
