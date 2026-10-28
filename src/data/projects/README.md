# Demo case studies

Each JSON contains all project-specific copy used by the landing list and detail
view. The three files share a structure inferred by TypeScript from `luma-care.json`.
`index.ts` is the project registry; import another JSON there to add a project.

- `slug`: unique URL segment (`#/projects/<slug>`).
- `name`, `category`, `summary`, `theme`: project card and preview.
- `title`, `role`, `year`, `duration`, `audience`, `tags`: overview.
- `value`, `description`: value proposition.
- `process`: ordered stages with title and description.
- `problem`, `question`: problem statement.
- `architecture`: description and ordered destinations.
- `wireframes`: explanation and captions.
- `screens`: explanation and captions.
- `designSystem`: typography, principles and component foundations.
- `closing`: reflection, credits and tools.
- `pages`, `items`, `action`: content rendered by illustrative interface previews.

Themes supported by CSS: `rose`, `lavender`, `sand`. Previews are static, code-native
concept illustrations, not operational applications or released-product screenshots.
All projects are explicitly fictional. Replace narrative and previews before
presenting a project as real work; do not turn demo statements into client claims.

Hash navigation supports direct links and browser back/forward without requiring
server-side rewrite rules. An unrecognized project displays a recovery link.

`cover` defines the listing image: `src`, `alt`, `width`, `height`. Current local
PNGs under `public/images/projects/` show the fictional overview inside a phone
or laptop. Replace the image and its metadata together when changing project work.

Optional `prototype`: set to `{ "src": "/videos/your-walkthrough.mp4", "type":
"video/mp4" }` when a real recording is available. Current values are `null`.
The listing displays the cover image until then. Recordings use native playback
controls, a poster, inline playback, and no autoplay or forced looping. Video
controls sit outside navigation links so operating them never opens the case study.

Case study section links use `#/projects/<slug>?section=<heading-id>` and preserve
the current project; a refresh restores that destination. The process narrative
is driven by `process` entries and the existing `pages` preview data.
