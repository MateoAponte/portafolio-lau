import { t } from "../i18n";
import type { projectDesignSystems } from "../data/projectDesignSystems";

export function DesignSystemSegments({ system }: { system: typeof projectDesignSystems[string] }) {
  const color = system.foundations[0];
  return <div className="case-design-content">
    <h3>{t(system.subtitle)}</h3>
    {system.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}
    <div className="case-design-segments">
      <section className="case-design-segment" aria-labelledby="design-color-title">
        <h3 id="design-color-title" className="case-design-segment-label"><span>01</span>{t(color.title)}</h3>
        <h4 className="case-design-segment-benefit">{t(color.benefit)}</h4>
        <div className="case-design-color-copy">{color.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}</div>
        <ul className="case-design-palette" aria-label={t("MiFarma color palette")}>{system.palette.map(color => <li key={color.hex}>
          <div className="case-design-swatch" style={{ backgroundColor: color.hex }} aria-hidden="true" />
          <span className="case-design-color-hex">{t(color.hex)}</span>
          <span className="case-design-color-usage">{t(color.usage, "palette")}</span>
        </li>)}</ul>
      </section>
      {system.templateSegments.map((segment, index) => <section className="case-design-segment" key={segment.title} aria-labelledby={`design-segment-${index + 2}`}>
        <h3 id={`design-segment-${index + 2}`} className="case-design-segment-label"><span>{String(index + 2).padStart(2, "0")}</span>{t(segment.title)}</h3>
        <h4 className="case-design-segment-benefit">{t(segment.benefit)}</h4>
        {segment.title === "Typography" && system.typographyImage && <div className="case-typography-layout">
          <div className="case-typography-specimen"><img src={system.typographyImage.src} alt={t(system.typographyImage.alt)} width={system.typographyImage.width} height={system.typographyImage.height} loading="lazy" /></div>
          <div>{system.foundations.find(foundation => foundation.title === "Typography")?.paragraphs.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}</div>
        </div>}
        {segment.title === "Iconography" && system.iconographyImage && <div className="case-iconography-specimen" role="img" aria-label={t(system.iconographyImage.alt)}>{[[3, 80.5], [154, 219]].map((rows, column) => <div className="case-iconography-half" key={column}>{rows.map(offset => <div className="case-iconography-row" key={offset}><img src={system.iconographyImage!.src} alt="" aria-hidden="true" width={system.iconographyImage!.width} height={system.iconographyImage!.height} style={{ top: `${-offset / 38 * 100}%` }} loading="lazy" /></div>)}</div>)}</div>}
        {segment.title === "Buttons" && system.buttonsImage && <div className="case-buttons-specimen"><img src={system.buttonsImage.src} alt={t(system.buttonsImage.alt)} width={system.buttonsImage.width} height={system.buttonsImage.height} loading="lazy" /></div>}
        {segment.title === "Components" && system.componentImages && <>
          <div className="case-design-color-copy"><p>{t(system.components.introduction)} {t(system.components.items.map(item => t(item)).join(", "))}.</p><p>{t(system.components.conclusion)}</p></div>
          <div className="case-components-layout">
            <div className="case-components-column">
              <figure><figcaption>{t("Navigation · Three active states")}</figcaption><img src={system.componentImages.navigation.src} alt={t(system.componentImages.navigation.alt)} width={430} height={336} loading="lazy" /></figure>
              <figure><figcaption>{t("Payment method · Card and PSE selected")}</figcaption><div className="case-components-payment-crop" role="img" aria-label={t("Payment method variants with debit or credit card and PSE selected, with size annotations.")}><img src={system.componentImages.overview.src} alt="" aria-hidden="true" width={478} height={858} loading="lazy" /></div></figure>
            </div>
            <div className="case-components-column">
              <figure><figcaption>{t("Status indicators")}</figcaption><div className="case-components-status-crop" role="img" aria-label={t("Order received, on time, on the way, cancelled, and delivered status indicators.")}><img src={system.componentImages.overview.src} alt="" aria-hidden="true" width={478} height={858} loading="lazy" /></div></figure>
              <figure><figcaption>{t("Payment method · Input states")}</figcaption><img src={system.componentImages.payment.src} alt={t(system.componentImages.payment.alt)} width={426} height={412} loading="lazy" /></figure>
            </div>
          </div>
        </>}
      </section>)}
    </div>
  </div>;
}
