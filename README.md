# personal-site

Personal website of Kirill Potemkin, revision D. A set of drawing sheets: Index, Work, Bio, Notes, plus the MiLi research attachment.

Plain static HTML, CSS and one small script, no dependencies. The Russian version lives in `ru/` (rules in `RUSSIAN.md`). GitHub Actions publishes the site and adds the licensed fonts from a private repo.

## Files

```
index.html      Sheet 1, cover
work.html       Sheet 2
bio.html        Sheet 3, with the photo carousel
notes.html      Sheet 4
research.html   attachment to Sheet 2 (MiLi), linked from Work and Index
404.html        shown by GitHub Pages for unknown addresses
ru/             the same five sheets in Russian
assets/
  site.js       Day/Night theme, email, clocks, carousel
  favicon.svg   revision triangle
  fonts/        Michelangelus, TT Marxiana (woff2); not in git, they come from the private repo KiraKicka/personal-site-fonts at deploy
  photos/       Bio carousel, 900 px, metadata stripped
tools/
  ru_lint.py    checks the Russian copy (python tools/ru_lint.py ru/*.html)
.github/workflows/pages.yml   the Pages deploy
CLAUDE.md, RUSSIAN.md         working notes for edits (not published on the site)
```

Page styles live in a `<style>` block in each page's `<head>`. The colour tokens are the same on every page:

| token | day | night |
|---|---|---|
| paper | `#FFFFFF` | `#0F2341` |
| ink | `#000000` | `#F2F4F8` |
| text | `#2B2B2B` | `#DCE2EC` |
| muted | `#5E5E5E` | `#A7B3C7` |
| signal | `#2B39D9` | `#9FB8FF` |

## Check locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

The fonts are not in git: copy them from the private fonts repo into `assets/fonts/` first, otherwise the pages fall back to Georgia.

The 404 page uses root paths (`/assets/...`), so it only looks right when served from the root of a domain.

## Publish on GitHub Pages with your own domain

The site is live at <https://andreevi.ch> (DNS at Infomaniak). The steps below are how it was set up.

1. Create an empty repository on GitHub (no README), then push:
   ```sh
   git remote add origin https://github.com/<user>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
2. Repository → Settings → Pages → Build and deployment: Source **GitHub Actions**. The workflow `.github/workflows/pages.yml` deploys every push to `main`. It reads the fonts from the private repo `KiraKicka/personal-site-fonts` through a read-only deploy key, whose private half is the Actions secret `FONTS_DEPLOY_KEY`.
3. Settings → Pages → Custom domain: enter your domain (for example `kirillpotemkin.com` or `www.kirillpotemkin.com`) and save. The `CNAME` file in the repo keeps it.
4. At your domain registrar, add DNS records:
   - apex domain (`example.com`): four `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and optionally `AAAA` to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`);
   - `www` subdomain: a `CNAME` record to `<user>.github.io`.
5. Wait for DNS (minutes to a few hours), then tick **Enforce HTTPS** in Settings → Pages.
6. Recommended: verify the domain in your GitHub account settings (Settings → Pages → Add a domain) so nobody else can claim it.

## Still to fill in

- Google Scholar link (the "All publications" line on `research.html`: `href="#"`)
- DOIs for the four publications on `research.html`
- MiLi CAD render and its caption on `research.html`
- Exact name of the mountain for "Above Lecco" in `bio.html`
- PhD dates after the defence in January 2027
- Italian version
