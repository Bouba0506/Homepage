import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Archivo carries the headline: a grotesque with enough width on the caps to
   hold a two-line statement without shouting. JetBrains Mono handles the
   nav, spec and size chips — outerwear is sold on numbers, and gear labels
   are set in mono. */
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--f-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--f-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jacket Masters — Volume 03 Cropped Puffer",
  description:
    "700-fill down in a recycled ripstop shell. Pick a colourway and the whole page follows it.",
};

export const viewport: Viewport = {
  themeColor: "#170c04",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
