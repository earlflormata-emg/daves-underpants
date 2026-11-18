# Deploy to Cloudflare Pages

This is a static Astro site, so it runs on Cloudflare Pages with no server or extra config.
There are two ways to deploy — pick one.

---

## Option A — Direct upload (fastest, no Git)

Use the prebuilt folder. Nothing to install.

1. Go to **Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets**.
2. Name the project (e.g. `daves-underpants`).
3. Drag in the **contents of the `dist/` folder** (not the folder itself — the files inside it:
   `index.html`, `products/`, `images/`, `_astro/`, `_headers`).
4. Click **Deploy**. You'll get a `*.pages.dev` URL in a few seconds.

To update later, rebuild (`npm run build`) and upload the new `dist/` contents, or switch to Option B.

> If you were given `daves-underpants-dist.zip`, just unzip it and upload those files.

---

## Option B — Connect a Git repo (auto-deploys on push)

1. Push this project to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Set the build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `20`
4. **Save and Deploy.** Every push to the main branch redeploys automatically.

---

## Custom domain

After the first deploy: project → **Custom domains → Set up a domain** → enter
`davesunderpants.com` (or your domain) and follow the DNS steps. Cloudflare handles HTTPS.

Then update `site` in `astro.config.mjs` to your real domain and redeploy.

---

## Notes

- `public/_headers` is already included — Cloudflare applies it automatically (long cache for
  images/assets, basic security headers).
- The waitlist form is in **standalone/demo mode** (no backend). It shows the success message
  but doesn't store emails yet. When you're ready, add your GoHighLevel webhook URL in
  `src/data/site.json` (see README) and redeploy.
- Node 20 is pinned via `.node-version`; Cloudflare also respects the `NODE_VERSION` env var.
