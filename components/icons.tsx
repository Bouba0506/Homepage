import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export const ChevronLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </svg>
);

export const ChevronRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M9.5 5.5 16 12l-6.5 6.5" />
  </svg>
);

export const Bag = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4.6 8h14.8l-1 11.4a1.6 1.6 0 0 1-1.6 1.4H7.2a1.6 1.6 0 0 1-1.6-1.4Z" />
    <path d="M8.8 10.6V7a3.2 3.2 0 0 1 6.4 0v3.6" />
  </svg>
);

export const Heart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 20.2s-7.8-4.6-7.8-9.7A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.8 2.9c0 5.1-7.8 9.7-7.8 9.7Z" />
  </svg>
);

export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
    <circle cx="12" cy="12" r="3.9" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M14.6 21.4V13h2.7l.5-3.3h-3.2V7.6c0-.95.35-1.6 1.75-1.6H18V3.05A22 22 0 0 0 15.5 2.9c-2.6 0-4.3 1.6-4.3 4.4v2.4H8.3V13h2.9v8.4Z" />
  </svg>
);

export const Dribbble = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M3.4 9.3c5.8 1 11.7.2 15.6-2.6" />
    <path d="M3.1 14.7c5.2-1.9 11.2-.8 14.6 3.9" />
    <path d="M8.6 3.4c4.2 4.8 6.6 10.6 7 17.2" />
  </svg>
);

export const Linkedin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.4" />
    <circle cx="8" cy="8.1" r="1.15" fill="currentColor" stroke="none" />
    <path d="M8 10.9v6.4" />
    <path d="M11.6 17.3v-6.4m0 2a2.6 2.6 0 0 1 5.2 0v4.4" />
  </svg>
);
