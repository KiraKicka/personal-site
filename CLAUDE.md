# CLAUDE.md — Kirill Potemkin's personal site

Read this before touching anything. Talk to me (Kirill) in Russian; everything on the site is written in English.

## What this is

A personal website styled as a set of engineering drawing sheets. It's a static site served by GitHub Pages from the root of `main`, with no build step and no dependencies. This repo is the source of truth. The design was first made on a Claude Design canvas, revision D (02.11.2026).

| Sheet | File | Notes |
|---|---|---|
| 1 Index | `index.html` | Cover sheet. Giant name; a blue "A." slides in slowly on load, after the name rises (pure CSS, no JS). Clocks for Lecco and the visitor's time (the visitor's is hidden if they are in Europe/Rome). Day/Night buttons. Language row (EN active; IT and RU "coming"). |
| 2 Work | `work.html` | Revisions D→A (newest first) with blue revision triangles. Then Placements, Writing and Schooling, each marked with a detail-callout circle (P/W/S over 2). |
| — Research | `research.html` | MiLi PhD research. Off-nav; linked from Work rev. B and from Index "Before". |
| 3 Bio | `bio.html` | Photo carousel, story, datum points A–G (coordinates under the symbol), languages. |
| 4 Notes | `notes.html` | Notes and odd jobs. |
| — | `404.html` | Uses root-absolute paths (`/assets/...`). |

`assets/site.js` handles all behaviour: theme, email, clocks and the carousel. Each page keeps its CSS in a `<style>` block in `<head>`; layout styles are mostly inline.

## Hard rules

- **Never write the email address in plain text** in HTML, JS strings or anywhere else in the repo. Use `<a href="#" data-email>email</a>`; `site.js` assembles the address from parts at load.
- Do not publish a phone number, a CV/PDF, or SATELLARIO anywhere.
- Site copy is English, sentence case. Michelangelus has **no Cyrillic**, so a Russian version needs a second font first.
- Photos: strip all metadata (GPS!), max 900 px on the long side, JPEG q≈80. They are shown greyscale via CSS (`.ph img{filter:grayscale(1)}`), so keep the files themselves in colour.
- Keep `CNAME` (GitHub creates it when the custom domain is set) and `.nojekyll`.
- Don't rewrite my wording in Bio/Notes without asking. Several lines are mine verbatim.

## Design system

**Type:** Michelangelus only (regular, italic; bold exists but is unused). There is no second family and no monospace.
- Labels are small italic sentence case, `--muted`, 13–15 px.
- No ALL CAPS, no letter-spaced eyebrows, no middle-dot meta strings, no "→" decorations.
- Page headings are giant lowercase words: `work`, `bio`, `notes`. Size `clamp(64px, 13vw, 200px)`, line-height .88, letter-spacing −0.045em.

**Colour tokens.** They are repeated in every page's `<style>` and in `404.html`, so change all six files together:

| token | day | night |
|---|---|---|
| `--paper` | `#FFFFFF` | `#0F2341` |
| `--ink` | `#000000` | `#F2F4F8` |
| `--text` | `#2B2B2B` | `#DCE2EC` |
| `--muted` | `#5E5E5E` | `#A7B3C7` |
| `--faint` | `#767676` | `#8C9AB2` |
| `--signal` | `#2B39D9` | `#9FB8FF` |
| `--rule-soft` | `#BDBDBD` | `#4A5D7E` |

- Night is a blueprint navy. The theme sits on `<html data-theme="day|night">`, set by an inline script in `<head>` before paint. It is stored in `localStorage['kp-theme']`, falls back to `prefers-color-scheme`, and syncs across tabs.
- The switch between themes is instant: no transition.
- `--signal` blue is the only accent. Use it for revision marks, datum and callout symbols, the "A.", hovers and focus rings. Don't spread it further.

**Drawing-sheet grammar** (the identity; keep it consistent):

- A single frame (1 px `--ink`), with zone numbers 1–6 top and bottom and letters down the sides, set as small italic `--faint` text in the margin outside it. There is no outer trim line: the sheet edge is not drawn (the wrapper keeps a `1px solid transparent` border so the geometry stays the same).
- The header holds only the nav, top-right: Index, Work, Bio, Notes. The current page is underlined with `aria-current`. There is no name at the top left of inner pages, because the title block already carries it.
- **Title block** (штамп) at the bottom-right of every page except Index, flush with the frame's right and bottom edges. It's a grid of cells: Title, Write to, Drawn, Sheet, Revision, Date, Elsewhere, Next sheet / Back to.
- Index has its own ruled "cover" grid instead of a title block.
- **Ruled grids: draw lines with cell borders, never with the `gap:1px` + dark background trick.** Gaps render as uneven, thicker lines when scaled.
  - Pattern: each cell gets `border-left` + `border-top`.
  - The container gets `border-right` + `border-bottom`, or the frame provides those edges.
- Symbols must mean something. Use revision triangles for job revisions, datum symbols for places and detail callouts for Work categories. No decorative numbering, cards, shadows, gradients or rounded corners.
- Motion stays minimal: the name's rise on load, the slow "A." reveal right after it, and the carousel crossfade. Respect `prefers-reduced-motion`; under it the "A." is shown at once and the carousel doesn't autoplay.

## How to work on it

1. **Use the `frontend-design` skill for every visual change** (it's a standing rule). Spend boldness in one place, and before finishing remove one accessory rather than add one.
2. Serve locally: `python3 -m http.server 8000`.
3. Check every change with Playwright screenshots:
   - widths 375, 768, 1024 and 1440, in day **and** night;
   - no horizontal scroll (`scrollWidth === innerWidth`);
   - tap targets ≥ 24 px; text contrast ≥ 4.5:1;
   - heading order h1 → h2 → h3; visible keyboard focus;
   - the font actually loads (`document.fonts.check('16px Michelangelus')`).
4. Look at the screenshots yourself before saying it's done. When switching themes, wait for the layout to settle before capturing.
5. Commit in small steps with clear messages. Ask before pushing.

## Deploy

Repo: `KiraKicka/personal-site`. GitHub Pages deploys from branch `main`, folder `/ (root)`, to the custom domain **andreevi.ch** (kept in `CNAME`). DNS is managed at Infomaniak:

- apex: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and `AAAA` to `2606:50c0:8000::153` … `2606:50c0:8003::153`;
- `www`: `CNAME` to `kirakicka.github.io`.
- The `MX` and `TXT` records (Proton Mail, SPF, SimpleLogin) belong to the mail. Don't touch them.

Enforce HTTPS is on. Every page except `404.html` has an absolute `og:url` and `<link rel="canonical">` on `https://andreevi.ch/`. There is no `og:image` yet.

## Still to fill in

- Google Scholar URL (the "All publications" line on `research.html`: currently `href="#"`). Scholar lives only there, not in the title blocks or the Index footer.
- DOIs for the four publications on `research.html`
- MiLi CAD render and caption (`research.html`, figure "View A.")
- Exact mountain for "Above Lecco" in the Bio carousel (both the `data-cap` and the visible caption)
- PhD dates after the defence (January 2027)
- Italian and Russian versions; the language row on Index is ready for them
