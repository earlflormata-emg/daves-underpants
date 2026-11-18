import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://davesunderpants.com',
  // Static output — deploys to Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.
  output: 'static',
});
