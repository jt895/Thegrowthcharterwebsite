# Open Graph share images

Drop the site-wide default here as **`default.png`** (1200×630, PNG or JPG; update the
extension in `index.html` and `scripts/prerender.mjs`'s `DEFAULT_OG_IMAGE` if you use JPG).

Anything in this folder is served verbatim from `/og/...` (Vite copies `public/` straight
to the site root, unhashed, so the URL stays stable across deploys).

## Per-page override

Add more images to this folder, then set `image: "/og/<filename>.png"` on the matching
route object in `src/routes.ts`. Falls back to `default.png` when a route has no `image`.
