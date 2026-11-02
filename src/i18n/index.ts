import { useSyncExternalStore } from "react";
import spanish from "./es.json";
import guides from "./es-guides.json";
import accessibility from "./es-accessibility.json";

export type Locale = "en" | "es";
const dictionary: Record<string, string> = { ...spanish, ...guides, ...accessibility };
const storageKey = "laura-portfolio-language";
let locale: Locale = "en";
try { if (localStorage.getItem(storageKey) === "es") locale = "es"; } catch { /* Storage can be unavailable in private contexts. */ }
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; };
export function setLocale(next: Locale) {
  if (next === locale) return;
  locale = next;
  try { localStorage.setItem(storageKey, next); } catch { /* Language still works without persistence. */ }
  document.documentElement.lang = next;
  listeners.forEach(listener => listener());
}
window.addEventListener("storage", event => {
  if (event.key === storageKey) setLocale(event.newValue === "es" ? "es" : "en");
});
export function useLocale() { return useSyncExternalStore(subscribe, () => locale, () => "en" as Locale); }

/** Translate copy at render time. Data, IDs, asset paths, and routing stay stable. */
export function t<T>(value: T, context?: string): T {
  if (locale !== "es" || typeof value !== "string") return value;
  const key = value.trim();
  const translated = dictionary[context ? `${context}.${key}` : key] ?? dictionary[key];
  if (translated !== undefined) return (value.slice(0, value.indexOf(key)) + translated + value.slice(value.indexOf(key) + key.length)) as T;
  // Composite labels contain values such as project names, dates, or phone numbers.
  if (value.includes(" · ")) return value.split(" · ").map(part => t(part)).join(" · ") as T;
  if (value.includes(" — ")) return value.split(" — ").map(part => t(part)).join(" — ") as T;
  const step = /^Step (\d+): (.+)$/.exec(value);
  if (step) return `Paso ${step[1]}: ${t(step[2])}` as T;
  const project = /^View (.+) case study$/.exec(value);
  if (project) return `Ver caso de estudio de ${project[1]}` as T;
  const recording = /^(.+) prototype walkthrough$/.exec(value);
  if (recording) return `Recorrido del prototipo de ${recording[1]}` as T;
  return value;
}
