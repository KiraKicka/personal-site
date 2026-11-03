# personal-site

Personal website of Kirill Potemkin, revision D. A set of drawing sheets: Index, Work, Bio, Notes, plus the MiLi research attachment.

Plain static HTML, CSS and one small script. No build step, no dependencies.

## Files

```
index.html      Sheet 1, cover
work.html       Sheet 2
bio.html        Sheet 3, with the photo carousel
notes.html      Sheet 4
research.html   attachment to Sheet 2 (MiLi), linked from Work and Index
404.html        shown by GitHub Pages for unknown addresses
assets/
  site.js       Day/Night theme, email, clocks, the "A." reveal, carousel
  favicon.svg   revision triangle
  fonts/        Michelangelus (woff2)
  photos/       Bio carousel, 900 px, metadata stripped
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

The 404 page uses root paths (`/assets/...`), so it only looks right when served from the root of a domain.

## Publish on GitHub Pages with your own domain

The site is live at <https://andreevi.ch> (DNS at Infomaniak). The steps below are how it was set up.

1. Create an empty repository on GitHub (no README), then push:
   ```sh
   git remote add origin https://github.com/<user>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
2. Repository → Settings → Pages → Build and deployment: Source **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
3. Settings → Pages → Custom domain: enter your domain (for example `kirillpotemkin.com` or `www.kirillpotemkin.com`) and save. GitHub adds a `CNAME` file to the repo; pull it before your next push (`git pull`).
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
- Italian and Russian versions (Russian needs a font with Cyrillic)
