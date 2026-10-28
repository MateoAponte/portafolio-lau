import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./motion-tokens.css";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('No se encontró el elemento raíz "#root".');
}

createRoot(rootElement).render(<App />);
