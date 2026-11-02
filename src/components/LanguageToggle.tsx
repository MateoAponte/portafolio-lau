import { setLocale, t, useLocale } from "../i18n";
import { useScrollControlsVisible } from "../hooks/useScrollControlsVisible";

export function LanguageToggle() {
  const locale = useLocale();
  const belowNav = useScrollControlsVisible();
  return <div className={`language-toggle${belowNav ? " is-below-nav" : ""}`} role="group" aria-label={t("Language")}>
    <button type="button" lang="en" aria-label={t("English")} aria-pressed={locale === "en"} onClick={() => setLocale("en")}>{t("EN")}</button>
    <button type="button" lang="es" aria-label={t("Español")} aria-pressed={locale === "es"} onClick={() => setLocale("es")}>{t("ES")}</button>
  </div>;
}
