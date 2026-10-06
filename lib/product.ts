export type Colorway = {
  id: string;
  /** Shown under the swatch and in the colour line next to the price. */
  name: string;
  /** Base hue. Every colour on the page is computed from this. */
  h: number;
  /** Saturation. Greens and teals need less of it to stay wearable. */
  s: number;
  /** Lightness offset in points, to even out how hues read at the same L. */
  dl: number;
};

export const colorways: Colorway[] = [
  { id: "ember", name: "Ember", h: 22, s: 96, dl: 0 },
  { id: "cobalt", name: "Cobalt", h: 220, s: 92, dl: -4 },
  { id: "lichen", name: "Lichen", h: 84, s: 62, dl: -8 },
  { id: "orchid", name: "Orchid", h: 320, s: 82, dl: -2 },
  { id: "glacier", name: "Glacier", h: 182, s: 76, dl: -6 },
];

export const product = {
  brand: "Jacket Masters",
  line: "Puffer jacket",
  model: "Volume 03 Cropped",
  headline: ["Stand out", "Without trying"] as const,
  copy:
    "700-fill down in a recycled ripstop shell that packs down to the size of a water bottle. Light enough that you forget you put it on, warm enough that you notice when you take it off.",
  specs: ["700 fill", "-15°C", "320 g"],
  price: 149,
  wasPrice: 199,
  sizes: ["36", "38", "40", "42"],
  tagline: ["Confidence,", "wrapped in warmth"] as const,
  nav: ["Puffer jacket", "All products", "About us", "Contact"],
};
