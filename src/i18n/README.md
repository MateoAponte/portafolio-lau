# Portfolio languages

English remains the source language. Spanish copy is maintained in these catalogs:

- `es.json`: homepage and MiFarma case-study content.
- `es-guides.json`: instructional case-study templates and other project cards.
- `es-accessibility.json`: image descriptions, accessible labels, and metadata.

Use `t(sourceText)` at the point where text or an accessible label is rendered.
Keep slugs, section IDs, class names, URLs, image paths, proper names, and data
comparisons in their original form. For contextual wording use `t(text, context)`;
for example, `palette.Background` translates the color's usage separately from
the homepage's Background section.

`useLocale()` subscribes React to language changes; the app subscribes once so
its existing component tree rerenders without remounting case studies. The
selected language is saved as `laura-portfolio-language`. Storage failure falls
back to an in-memory preference. The document language, title, and description
follow the selected language. Missing Spanish entries retain the English source.

Screenshots, diagrams, and design artifacts retain their original embedded copy.
Their alternative descriptions are translated without editing the evidence.
