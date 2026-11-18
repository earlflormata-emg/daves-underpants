# Dave's Underpants — Astro site

A modern, fast front-end for **Dave's Underpants**, built with [Astro](https://astro.build).
Ships as a **waitlist / coming-soon** site now, with **storefront-ready** product pages
already scaffolded for when you launch.

Stack: **Astro + GoHighLevel (GHL)**. Astro is the static front-end; GHL captures the
emails and runs your launch automations.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
```

Build for production:

```bash
npm run build      # outputs static site to ./dist
npm run preview    # preview the production build locally
```

Deploy `./dist` to any static host — Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
(Drag-and-drop `dist/` into Netlify is the fastest.)

---

## Connect the waitlist to GoHighLevel

1. In GHL: **Automation → Workflows → New Workflow → add trigger "Inbound Webhook"**, then copy the webhook URL.
2. Open `src/data/site.json` and paste it:
   ```json
   { "ghlWebhookUrl": "https://services.leadconnectorhq.com/hooks/XXXX" }
   ```
3. The form POSTs JSON `{ "email": "...", "source": "daves-underpants-waitlist", "tag": "waitlist" }`.
   In your GHL workflow, map `email` to the contact's email, add the `waitlist` tag, and
   send your confirmation / launch broadcast.

Leave `ghlWebhookUrl` empty to run the form in **demo mode** (shows the success message
without sending anywhere).

> Prefer a GHL embedded form instead of the webhook? Drop the embed snippet into
> `src/components/WaitlistForm.astro` in place of the `<form>`.

---

## Edit content

All copy, pricing, and products live in **`src/data/products.json`** — edit names,
taglines, descriptions, the $64 price, sizes, and the hygiene/returns policy there.
Product images are in **`public/images/`** (swap a file, keep the name, done).

---

## Project structure

```
src/
  data/
    products.json     ← all products + brand copy (edit here)
    site.json         ← GHL webhook URL
  layouts/BaseLayout.astro
  components/
    Header.astro  Hero.astro  Footer.astro
    ProductCard.astro  ProductGrid.astro  WaitlistForm.astro
  pages/
    index.astro               ← waitlist homepage
    products/[slug].astro      ← one page per product (storefront-ready)
  styles/global.css
public/images/                 ← product photos + logo
```

---

## Going from waitlist → live store

The product pages already exist; today each shows "Join the List" instead of a buy button.
When you're ready to sell, replace that block in `src/pages/products/[slug].astro` with one of:

- **GHL + Stripe** — embed a GHL order/checkout form or link to a GHL funnel. All-in-one
  with your CRM. Note: no native print-on-demand fulfillment (bridge Printful/Contrado via
  Zapier/Make, or fulfill manually).
- **Shopify headless** — keep Shopify as the commerce engine (products, cart, checkout,
  **native Printful/Contrado POD auto-fulfillment**) and use this Astro site as the
  storefront via the Shopify Storefront API / Buy Button.
- **Stripe Checkout / Snipcart** — lightweight cart + payments for a small catalog.

Pick based on whether automated POD fulfillment matters: if yes, Shopify headless is the
least-effort path; if you'd rather keep everything in GHL, GHL + Stripe works for a small line.

---

## Source data

Product names, descriptions, pricing ($64.00), sizes (S–XXL), and the hygiene/returns
policy were carried over from the Dave's Underpants Shopify store. Images are the
AI-generated catalog shots from the brand's product development.
