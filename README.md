# personal-site

Personal website of Kirill Potemkin — draft 01.

Plain static HTML/CSS, no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Structure

| Page | File | Section |
|---|---|---|
| 01 Index | `index.html` | home |
| 02 Work | `work.html` | work (education at the end) |
| 03 Research | `research.html` | work |
| 04 Bio | `bio.html` | life |
| 05 Field notes | `notes.html` | life |

```
assets/
  css/site.css      @font-face, links, hover states
  js/clock.js       Lecco local time in the header
  fonts/            Michelangelus (woff2)
  favicon.svg
```

## Design

- Type: **Michelangelus** for display and text, **IBM Plex Mono** (Google Fonts) for annotations.
- Palette: paper `#FBFBF9`, ink `#121212`, muted `#6B6B66`, rule `#E3E2DD`, signal `#2B39D9`.
- Philosophy: content first, typography does the work, one accent colour, no ornament.

## TODO

- Fill `[bracketed]` placeholders (photo, captions, years, personal details).
- Add real links: LinkedIn, Google Scholar, CV PDF, publication DOIs.
- Add MiLi image and portrait.
- Check the Michelangelus licence allows web embedding before making the site public.
