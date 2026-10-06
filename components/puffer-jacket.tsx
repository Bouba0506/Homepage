"use client";

import { useId } from "react";

/* Geometry, drawn once and reused at every size. The jacket is vector, so a
   colourway swap recolours the garment itself and not just the page around
   it. To move to real photography, swap these paths for a cutout <Image> —
   everything downstream already reads from the same --prod-* tokens. */
const BODY =
  "M230 100c34 0 52 3 62 10 12 9 19 27 22 54 5 44 5 96 0 140-3 24-14 40-33 42H179c-19-2-30-18-33-42-5-44-5-96 0-140 3-27 10-45 22-54 10-7 28-10 62-10Z";

const COLLAR =
  "M172 44c0-14 18-24 58-24s58 10 58 24c2 24 2 48 0 70-18-9-42-12-58-12s-40 3-58 12c-2-22-2-46 0-70Z";

const SLEEVE =
  "M178 104c-30 6-56 30-76 64-20 38-40 90-50 132-6 28 8 54 38 57 26 3 40-9 44-31 8-54 14-114 20-156 4-30 8-52 24-66Z";

const BODY_BAFFLES = [138, 174, 210, 246, 282, 316];

const SLEEVE_BAFFLES = [
  "M94 164c16 13 38 16 66 8",
  "M78 206c16 13 38 16 68 8",
  "M62 248c16 13 38 16 70 8",
  "M50 290c16 13 38 16 72 8",
  "M44 328c16 13 38 16 74 6",
];

const COLLAR_BAFFLES = ["M171 56c24-8 92-8 116 0", "M170 82c24-8 94-8 118 0"];

export function PufferJacket({
  className,
  mini = false,
}: {
  className?: string;
  mini?: boolean;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const id = (name: string) => `${name}${uid}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      viewBox="0 0 460 440"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id("body")} x1="0.1" y1="0.02" x2="0.9" y2="0.98">
          <stop offset="0" stopColor="var(--prod-hi)" />
          <stop offset="0.42" stopColor="var(--prod-mid)" />
          <stop offset="1" stopColor="var(--prod-lo)" />
        </linearGradient>
        <linearGradient id={id("sleeveL")} x1="0.05" y1="0" x2="1" y2="0.9">
          <stop offset="0" stopColor="var(--prod-mid)" />
          <stop offset="1" stopColor="var(--prod-lo)" />
        </linearGradient>
        <linearGradient id={id("sleeveR")} x1="0.1" y1="0" x2="1" y2="0.9">
          <stop offset="0" stopColor="var(--prod-lo)" />
          <stop offset="1" stopColor="var(--prod-deep)" />
        </linearGradient>
        <linearGradient id={id("collar")} x1="0.12" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="var(--prod-hi)" />
          <stop offset="1" stopColor="var(--prod-mid)" />
        </linearGradient>
        <linearGradient id={id("dark")} x1="0.38" y1="0" x2="1" y2="0.85">
          <stop offset="0" stopColor="var(--prod-deep)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--prod-deep)" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id={id("floor")}>
          <stop offset="0" stopColor="var(--prod-deep)" stopOpacity="0.5" />
          <stop offset="1" stopColor="var(--prod-deep)" stopOpacity="0" />
        </radialGradient>

        <clipPath id={id("clipBody")}>
          <path d={BODY} />
        </clipPath>
        <clipPath id={id("clipSleeve")}>
          <path d={SLEEVE} />
        </clipPath>
        <clipPath id={id("clipCollar")}>
          <path d={COLLAR} />
        </clipPath>

        <filter
          id={id("soft")}
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="11" />
        </filter>
      </defs>

      {/* Ambient contact shadow — the garment floats, no box around it. */}
      <ellipse cx="230" cy="400" rx="176" ry="26" fill={url("floor")} />

      {/* Sleeves sit behind the body. */}
      {(
        [
          ["L", undefined],
          ["R", "matrix(-1 0 0 1 460 0)"],
        ] as const
      ).map(([side, transform]) => (
        <g key={side} transform={transform}>
          <path d={SLEEVE} fill={url(side === "L" ? "sleeveL" : "sleeveR")} />
          <g clipPath={url("clipSleeve")} strokeLinecap="round" fill="none">
            {SLEEVE_BAFFLES.map((d) => (
              <g key={d}>
                <path
                  d={d}
                  stroke="var(--prod-deep)"
                  strokeOpacity="0.36"
                  strokeWidth="3"
                />
                <path
                  d={d}
                  stroke="#fff"
                  strokeOpacity="0.13"
                  strokeWidth="2.5"
                  transform="translate(0 -6)"
                />
              </g>
            ))}
            {/* Elasticated cuff */}
            <path
              d="M40 336c20 19 62 23 100 8"
              stroke="var(--prod-deep)"
              strokeOpacity="0.45"
              strokeWidth="4"
            />
          </g>
        </g>
      ))}

      {/* Body */}
      <path d={BODY} fill={url("body")} />
      <g clipPath={url("clipBody")}>
        {!mini && (
          <path
            d="M172 132c-9 52-9 132-2 198 12 2 19-4 21-17-7-58-5-124 2-172-5-9-15-11-21-9Z"
            fill="#fff"
            fillOpacity="0.17"
            filter={url("soft")}
          />
        )}
        <g strokeLinecap="round" fill="none">
          {BODY_BAFFLES.map((y) => (
            <g key={y}>
              <path
                d={`M136 ${y}c42 9 146 9 188 0`}
                stroke="var(--prod-deep)"
                strokeOpacity="0.32"
                strokeWidth="3"
              />
              <path
                d={`M136 ${y - 6}c42 9 146 9 188 0`}
                stroke="#fff"
                strokeOpacity="0.13"
                strokeWidth="2.5"
              />
            </g>
          ))}
          {/* Hand-warmer welts */}
          <path
            d="M167 288c12 9 27 12 42 10"
            stroke="var(--prod-deep)"
            strokeOpacity="0.42"
            strokeWidth="3.5"
          />
          <path
            d="M293 288c-12 9-27 12-42 10"
            stroke="var(--prod-deep)"
            strokeOpacity="0.42"
            strokeWidth="3.5"
          />
          {/* Centre zip */}
          <path
            d="M230 104v240"
            stroke="var(--prod-deep)"
            strokeOpacity="0.3"
            strokeWidth="4"
          />
          <path
            d="M226 104v240"
            stroke="#fff"
            strokeOpacity="0.15"
            strokeWidth="1.5"
          />
        </g>
        {/* Elastic hem */}
        <rect
          x="120"
          y="322"
          width="220"
          height="30"
          fill="var(--prod-deep)"
          fillOpacity="0.26"
        />
        <rect x="0" y="0" width="460" height="440" fill={url("dark")} />
      </g>

      {/* Funnel collar */}
      <path d={COLLAR} fill={url("collar")} />
      <g clipPath={url("clipCollar")} fill="none" strokeLinecap="round">
        {COLLAR_BAFFLES.map((d) => (
          <g key={d}>
            <path
              d={d}
              stroke="var(--prod-deep)"
              strokeOpacity="0.32"
              strokeWidth="3"
            />
            <path
              d={d}
              stroke="#fff"
              strokeOpacity="0.13"
              strokeWidth="2.5"
              transform="translate(0 -6)"
            />
          </g>
        ))}
        <rect x="0" y="0" width="460" height="440" fill={url("dark")} />
      </g>
      <ellipse
        cx="230"
        cy="25"
        rx="53"
        ry="9"
        fill="var(--prod-deep)"
        fillOpacity="0.8"
        stroke="#fff"
        strokeOpacity="0.16"
        strokeWidth="2"
      />
    </svg>
  );
}
