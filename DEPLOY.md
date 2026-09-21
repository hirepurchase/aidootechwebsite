# Deploying to DigitalOcean

The site is a **static export**. `npm run build` writes plain HTML, CSS, JS and
images to `out/` — there is no Node server at runtime, so it runs on
DigitalOcean App Platform's **Static Site** component.

## What makes it static

`next.config.ts` sets three things:

| Setting | Why |
| --- | --- |
| `output: "export"` | Emits a static site to `out/` instead of a server build |
| `trailingSlash: true` | Every page becomes `<route>/index.html`, which any static host resolves without rewrite rules |
| `images.unoptimized: true` | `next/image` optimises on demand from a server, and there isn't one. The images in `public/` are already cropped and WebP-encoded at sensible sizes |

`src/app/robots.ts` and `src/app/sitemap.ts` each set
`export const dynamic = "force-static"` so they are written out at build time
rather than served by a route handler.

## Creating the app

In the DigitalOcean control panel: **Apps → Create App → GitHub →
`hirepurchase/aidootechwebsite`**, branch `main`. DigitalOcean detects Next.js
and proposes a Web Service — **change the resource type to Static Site**, then
confirm:

- **Build command:** `npm run build`
- **Output directory:** `out`
- **Error document:** `404.html`

Or apply the spec in this repo directly:

```bash
doctl apps create --spec .do/app.yaml
```

`deploy_on_push` is on, so every push to `main` redeploys.

## Environment variables

None are required — the site builds and runs without any. Two are optional, and
both must be set **at build time** (App Platform → Settings → App-Level
Environment Variables), because `NEXT_PUBLIC_*` values are baked into the
static files during the build:

- `NEXT_PUBLIC_AGENT_FORM_ENDPOINT` — where agent applications are POSTed
- `NEXT_PUBLIC_REVIEW_FORM_ENDPOINT` — where customer reviews are POSTed

Leave them unset and both forms hand their content to WhatsApp instead, which
works. See `.env.example`.

## Custom domain

Add the domain under **Settings → Domains**; DigitalOcean issues the TLS
certificate automatically. Afterwards update `site.url` in `src/lib/site.ts` to
the live address — it is used for the sitemap, canonical URLs and the
structured data that identifies the business to search engines and Paystack.

## Checking a build locally

```bash
npm run build
cd out && python3 -m http.server 4173
```

Then open http://localhost:4173 — these are the exact files DigitalOcean serves.
