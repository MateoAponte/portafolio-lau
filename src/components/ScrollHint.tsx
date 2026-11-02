import { t } from "../i18n";
import { ScrollMouse } from "./ScrollMouse";

export function ScrollHint() {
  return (
    <a className="scroll-hint" href="#about">
      <ScrollMouse />
      <span>{t("Scroll to explore")}</span>
    </a>
  );
}
