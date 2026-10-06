"use client";

import { useState, type CSSProperties } from "react";
import { colorways, product, type Colorway } from "@/lib/product";
import { PufferJacket } from "@/components/puffer-jacket";
import {
  Bag,
  ChevronLeft,
  ChevronRight,
  Dribbble,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
} from "@/components/icons";

/* The only three values anything reads. Everything visible on the page —
   background mesh, panel tint, CTA, chips, the garment itself — is derived
   from these in globals.css. */
const theme = (c: Colorway) =>
  ({
    "--h": String(c.h),
    "--s": `${c.s}%`,
    "--dl": String(c.dl),
  }) as CSSProperties;

const socials = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "Dribbble", Icon: Dribbble },
  { label: "LinkedIn", Icon: Linkedin },
];

const ghostButton =
  "grid place-items-center rounded-full text-[var(--ink-soft)] ring-1 ring-inset ring-white/20 transition duration-200 hover:bg-white hover:text-[var(--on-accent)] hover:ring-transparent";

export function ProductHero() {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(product.sizes[1]);
  const active = colorways[index];

  const step = (dir: number) =>
    setIndex((i) => (i + dir + colorways.length) % colorways.length);

  return (
    <div
      className="theme stage flex min-h-dvh items-center justify-center p-3 sm:p-6 lg:p-8"
      style={theme(active)}
    >
      <div className="relative w-full max-w-[1240px]">
        <div className="panel relative overflow-hidden rounded-[26px] px-5 pt-6 pb-8 sm:rounded-[34px] sm:px-8 sm:py-8 lg:rounded-[44px] lg:px-12 lg:py-9">
          {/* ---------------- header ---------------- */}
          <header className="relative flex flex-wrap items-center gap-x-4 gap-y-5">
            <a
              href="#"
              className="order-1 mr-auto flex items-center gap-2.5 rounded-full"
            >
              <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-white font-mono text-[10px] leading-none font-bold text-[var(--on-accent)]">
                JM
              </span>
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase">
                {product.brand}
              </span>
            </a>

            <nav
              aria-label="Primary"
              className="order-3 w-full md:absolute md:top-1/2 md:left-1/2 md:order-none md:w-auto md:-translate-x-1/2 md:-translate-y-1/2"
            >
              <ul className="well no-bar flex overflow-x-auto rounded-full p-1">
                {product.nav.map((item, i) => (
                  <li key={item} className="shrink-0">
                    <a
                      href="#"
                      aria-current={i === 0 ? "page" : undefined}
                      className={`block rounded-full px-3.5 py-2 font-mono text-[10px] tracking-[0.14em] whitespace-nowrap uppercase transition duration-200 ${
                        i === 0
                          ? "bg-white font-semibold text-[var(--on-accent)]"
                          : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="order-2 ml-auto flex gap-2 md:ml-0">
              <button
                type="button"
                aria-label="Open bag, 2 items"
                className={`${ghostButton} relative h-10 w-10`}
              >
                <Bag className="h-[18px] w-[18px]" />
                <span className="absolute -top-0.5 -right-0.5 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[var(--accent-bright)] px-1 font-mono text-[9px] font-bold text-[var(--on-accent)]">
                  2
                </span>
              </button>
              <button
                type="button"
                aria-label="Open saved items"
                className={`${ghostButton} h-10 w-10`}
              >
                <Heart className="h-[18px] w-[18px]" />
              </button>
            </div>
          </header>

          {/* ---------------- stage ---------------- */}
          <div className="mt-10 grid gap-10 lg:mt-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1.05fr)_minmax(0,0.66fr)] lg:items-center lg:gap-8">
            {/* left — the pitch */}
            <div className="rise" style={{ animationDelay: "60ms" }}>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={`Previous colourway, ${
                    colorways[(index - 1 + colorways.length) % colorways.length]
                      .name
                  }`}
                  className={`${ghostButton} h-9 w-9`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={`Next colourway, ${
                    colorways[(index + 1) % colorways.length].name
                  }`}
                  className={`${ghostButton} h-9 w-9`}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <h1
                className="mt-6 text-[clamp(2.6rem,5.4vw,3.5rem)] leading-[0.9] font-extrabold tracking-[-0.035em] text-balance"
                style={{ fontStretch: "108%" }}
              >
                {product.headline[0]}
                <br />
                {product.headline[1]}
              </h1>

              <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-[1.7] text-[var(--ink-soft)]">
                {product.copy}
              </p>

              <ul className="spec mt-5 flex flex-wrap gap-[0.85em] font-mono text-[10px] tracking-[0.18em] uppercase">
                {product.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <a
                href="#"
                className="cta mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-6 text-sm font-semibold transition duration-200"
              >
                Get the look
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--on-accent)] text-[var(--accent-bright)]">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            {/* centre — the garment */}
            <div className="relative order-first flex items-center justify-center lg:order-none">
              <div
                aria-hidden
                className="absolute h-[70%] w-[80%] rounded-full opacity-45 blur-3xl"
                style={{ background: "var(--accent-bright)" }}
              />
              <PufferJacket className="enter-float relative w-[min(78vw,400px)] lg:w-full lg:max-w-[480px]" />
            </div>

            {/* right — the deal */}
            <div className="rise" style={{ animationDelay: "180ms" }}>
              <div className="flex items-center gap-3 lg:justify-end">
                <span className="text-[clamp(2.1rem,4.4vw,2.8rem)] leading-none font-extrabold tracking-[-0.03em]">
                  ${product.price}
                </span>
                <span className="rounded-full bg-[var(--accent-bright)] px-2 py-1 font-mono text-[10px] leading-none font-bold text-[var(--on-accent)]">
                  &minus;25%
                </span>
              </div>
              <p className="mt-2 text-lg text-[var(--ink-mute)] line-through lg:text-right">
                ${product.wasPrice}
              </p>

              <p className="mt-9 font-mono text-[10px] tracking-[0.2em] text-[var(--ink-soft)] uppercase lg:text-right">
                Choose your size
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5 lg:justify-end">
                {product.sizes.map((s) => {
                  const on = s === size;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      aria-pressed={on}
                      className={`h-11 w-11 rounded-full font-mono text-xs transition duration-200 ${
                        on
                          ? "bg-white font-bold text-[var(--on-accent)] shadow-[0_0_0_4px_var(--accent-veil)]"
                          : "text-[var(--ink-soft)] ring-1 ring-inset ring-white/20 hover:ring-white/55"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ---------------- footer ---------------- */}
          <footer className="mt-12 grid gap-7 sm:grid-cols-[1fr_auto_1fr] sm:items-end lg:mt-4">
            <ul className="flex gap-1">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-mute)] transition duration-200 hover:text-[var(--ink)]"
                  >
                    <Icon className="h-[17px] w-[17px]" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-center text-[0.9375rem] leading-snug font-medium text-[var(--ink-soft)]">
              {product.tagline[0]}
              <br />
              {product.tagline[1]}
            </p>
            <div className="hidden sm:block" />
          </footer>
        </div>

        {/* ----- colourway dock: the control this whole page is built around ----- */}
        <div className="mt-4 flex justify-center lg:absolute lg:right-10 lg:-bottom-7 lg:mt-0">
          <div className="well flex items-center gap-2 rounded-[24px] p-2 backdrop-blur-md">
            <div className="hidden pr-1 pl-3 lg:block">
              <p className="font-mono text-[9px] tracking-[0.2em] text-[var(--ink-mute)] uppercase">
                Colourway
              </p>
              <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--ink)] uppercase">
                {active.name}
              </p>
            </div>
            {colorways.map((c, i) => {
              const on = i === index;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-pressed={on}
                  aria-label={`${c.name} colourway`}
                  title={c.name}
                  style={theme(c)}
                  className={`theme stage grid h-14 w-14 place-items-center rounded-[16px] transition duration-200 ${
                    on
                      ? "scale-105 ring-2 ring-white"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <PufferJacket mini className="h-11 w-11" />
                </button>
              );
            })}
          </div>
        </div>

        <p aria-live="polite" className="sr-only">
          {active.name} colourway, size {size} selected.
        </p>
      </div>
    </div>
  );
}
