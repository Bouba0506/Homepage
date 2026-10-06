# Jacket Masters — colour-adaptive product hero

A single-product spotlight page built with **Next.js 16 (App Router)** and **Tailwind CSS v4**.
Picking a colourway reskins the entire page — background, panel tint, CTA, price badge,
size chips and the garment itself — from one hue.

```bash
npm run dev    # http://localhost:4310
npm run build
```

## How the recolour works

Three values are the only authored colour inputs on the page:

| Token  | Type           | Meaning                                              |
| ------ | -------------- | ---------------------------------------------------- |
| `--h`  | `<number>`     | The product's hue                                    |
| `--s`  | `<percentage>` | Saturation                                           |
| `--dl` | `<number>`     | Lightness offset in points, per hue                  |

They live in [`lib/product.ts`](lib/product.ts) and are set as inline custom properties on the
page wrapper. Everything else — `--bg-*`, `--accent*`, `--panel-*`, `--ink*`, `--prod-*` — is
computed from them in the `.theme` block of [`app/globals.css`](app/globals.css). There is no
background colour, accent or panel tint authored independently of the product.

All three are registered with `@property`, so the browser **interpolates** them. Changing `--h`
transitions the whole palette as one group over 640 ms rather than snapping, and because the
derived tokens re-resolve on every frame, the background mesh, the panel, the button fills and
the garment sweep together. Add a colourway and every surface follows it for free.

`prefers-reduced-motion` collapses the transition to 1 ms and disables the entry and float
animations.

## Structure

```
app/
  globals.css          palette engine (@property + .theme) and component classes
  layout.tsx           Archivo (display/body) + JetBrains Mono (nav, specs, chips)
  page.tsx
components/
  product-hero.tsx     layout and state — colourway index, selected size
  puffer-jacket.tsx    the garment, as SVG
  icons.tsx
lib/
  product.ts           colourways and copy
```

## Swapping in real photography

The jacket is vector so it recolours with the theme. To use cutout photos instead, add a
`photo` field per colourway in `lib/product.ts` and replace `<PufferJacket />` in
`components/product-hero.tsx` with a `next/image`. Nothing else changes — the panel, mesh and
accents still derive from that colourway's `h/s/dl`, which you keep as the photo's dominant
colour. Sample it once per photo rather than guessing; if a colourway is patterned or mostly
white, set the hue by hand.

## Adding a colourway

Append to `colorways` in `lib/product.ts`. The dock, the prev/next arrows, the announcement for
screen readers and the whole palette pick it up automatically. Keep saturation moderate for
greens and teals — that is what `dl` is for.
