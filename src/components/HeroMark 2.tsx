import { useId } from "react";
import { RING_RADII, RINGS_DARK } from "./brandMark";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * The single hero mark for the whole site.
 *
 * Every variant draws the same object: the corrected six-ring mark from
 * brandMark.ts, split on the vertical centreline, greys left and greens right.
 * What changes between pages is only how those rings behave. Nothing here
 * invents a shape, a radius or a colour.
 *
 *   rotate  Home. Rings counter-rotate against each other. The reference
 *           treatment, and the busiest.
 *   expand  Growth Program. Rings bloom outward from the centre on a stagger.
 *   align   Strategic Advisory. Two outer rings turn very slowly, everything
 *           else holds. Deliberately the quietest moving variant.
 *   trace   Case Studies. Rings draw themselves in once, outward, then stop.
 *   orbit   About. Filled mark with dashed orbiters. The most organic.
 *   still   Product pages. No motion at all.
 *
 * `rings` truncates the mark from the outside in, so a three-ring mark is the
 * real mark's outer three, not a redrawn one.
 *
 * Honours prefers-reduced-motion: every variant falls back to `still`.
 */
export type HeroMarkVariant = "rotate" | "expand" | "align" | "trace" | "orbit" | "still";

interface HeroMarkProps {
  variant?: HeroMarkVariant;
  size?: number;
  opacity?: number;
  /** How many rings to draw, outermost first. 1 to 6. Default 6. */
  rings?: number;
  /** Higher is faster. Default 1. */
  speed?: number;
  /** Stroke weight multiplier. Default 1. */
  weight?: number;
  className?: string;
}

/** Per-ring rotation for the `rotate` variant. Zero means static. */
const ROTATE_TIMING = [
  { duration: 24, reverse: false, dash: undefined, width: 1.2 },
  { duration: 36, reverse: true, dash: "6 10", width: 1.0 },
  { duration: 16, reverse: true, dash: "4 6", width: 0.9 },
  { duration: 28, reverse: false, dash: "2 5", width: 0.8 },
  { duration: 0, reverse: false, dash: undefined, width: 0.6 },
  { duration: 0, reverse: false, dash: undefined, width: 0.5 },
];

/** `align` turns only the outer two, and slowly. */
const ALIGN_TIMING = [
  { duration: 120, reverse: false, dash: undefined, width: 1.1 },
  { duration: 90, reverse: true, dash: "10 18", width: 0.9 },
  { duration: 0, reverse: false, dash: undefined, width: 0.8 },
  { duration: 0, reverse: false, dash: "2 6", width: 0.7 },
  { duration: 0, reverse: false, dash: undefined, width: 0.6 },
  { duration: 0, reverse: false, dash: undefined, width: 0.5 },
];

export default function HeroMark({
  variant = "rotate",
  size = 520,
  opacity = 1,
  rings = 6,
  speed = 1,
  weight = 1,
  className = "",
}: HeroMarkProps) {
  const uid = useId().replace(/:/g, "");
  const reduced = usePrefersReducedMotion();
  const mode: HeroMarkVariant = reduced ? "still" : variant;

  const cx = size / 2;
  const count = Math.max(1, Math.min(6, Math.round(rings)));
  const w = (n: number) => n * weight;

  // The outermost stroke sits just inside the edge so nothing is clipped by
  // the viewBox, and so `expand` has room to overshoot.
  const radiusOf = (i: number) => cx * RING_RADII[i] * (i === 0 ? 0.94 : 1);

  const shell = (children: React.ReactNode) => (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ opacity, display: "block", overflow: "visible" }}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={`${uid}-l`}>
          <rect x="0" y="0" width={cx} height={size} />
        </clipPath>
        <clipPath id={`${uid}-r`}>
          <rect x={cx} y="0" width={cx} height={size} />
        </clipPath>
        <radialGradient id={`${uid}-fade`} cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${uid}-m`}>
          <rect x="0" y="0" width={size} height={size} fill={`url(#${uid}-fade)`} />
        </mask>
      </defs>
      <g mask={`url(#${uid}-m)`}>
        {children}
        <line
          x1={cx}
          y1="0"
          x2={cx}
          y2={size}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.75"
        />
      </g>
    </svg>
  );

  /** A split stroke ring: grey on the left, green on the right. */
  const splitRing = (
    i: number,
    r: number,
    width: number,
    dash: string | undefined,
    extra?: React.CSSProperties,
  ) => {
    const { grey, green } = RINGS_DARK[i];
    return (
      <>
        <circle
          cx={cx}
          cy={cx}
          r={r}
          stroke={grey}
          strokeWidth={w(width)}
          strokeDasharray={dash}
          clipPath={`url(#${uid}-l)`}
          style={extra}
        />
        <circle
          cx={cx}
          cy={cx}
          r={r}
          stroke={green}
          strokeWidth={w(width)}
          strokeDasharray={dash}
          clipPath={`url(#${uid}-r)`}
          style={extra}
        />
      </>
    );
  };

  // ---- still -------------------------------------------------------------
  if (mode === "still") {
    return shell(
      Array.from({ length: count }, (_, i) => (
        <g key={i}>{splitRing(i, radiusOf(i), ROTATE_TIMING[i].width, ROTATE_TIMING[i].dash)}</g>
      )),
    );
  }

  // ---- rotate / align ----------------------------------------------------
  if (mode === "rotate" || mode === "align") {
    const timing = mode === "align" ? ALIGN_TIMING : ROTATE_TIMING;
    return shell(
      <>
        {Array.from({ length: count }, (_, i) => {
          const { duration, reverse, dash, width } = timing[i];
          const style = duration
            ? {
                transformOrigin: `${cx}px ${cx}px`,
                animation: `${reverse ? "ring-counter" : "ring-spin"} ${duration / speed}s linear infinite`,
              }
            : undefined;
          return (
            <g key={i} style={style}>
              {splitRing(i, radiusOf(i), width, dash)}
            </g>
          );
        })}
        {count >= 6 && <circle cx={cx} cy={cx} r={w(3.5)} fill={RINGS_DARK[5].green} />}
      </>,
    );
  }

  // ---- expand -----------------------------------------------------------
  // The full mark is always drawn, so the hero never looks half-finished.
  // Over the top, three rings bloom outward from the centre on a stagger,
  // reading as growth rather than rotation.
  if (mode === "expand") {
    const cycle = 8 / speed;
    const blooms = 3;
    return shell(
      <>
        {Array.from({ length: count }, (_, i) => (
          <g key={i} opacity={0.7}>
            {splitRing(i, radiusOf(i), ROTATE_TIMING[i].width, ROTATE_TIMING[i].dash)}
          </g>
        ))}
        {Array.from({ length: blooms }, (_, i) => (
          <g
            key={`b${i}`}
            style={{
              transformOrigin: `${cx}px ${cx}px`,
              animation: `mark-expand ${cycle}s ease-out ${(-i * cycle) / blooms}s infinite`,
            }}
          >
            {splitRing(Math.min(count - 1, 2), radiusOf(Math.min(count - 1, 2)), 1.1, undefined)}
          </g>
        ))}
        {count >= 6 && <circle cx={cx} cy={cx} r={w(3)} fill={RINGS_DARK[5].green} opacity={0.9} />}
      </>,
    );
  }

  // ---- trace -------------------------------------------------------------
  // Rings draw themselves in once, outermost first, then hold. No looping.
  if (mode === "trace") {
    return shell(
      Array.from({ length: count }, (_, i) => {
        const r = radiusOf(i);
        const circumference = 2 * Math.PI * r;
        const style: React.CSSProperties = {
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
          animation: `mark-trace ${1.6 / speed}s cubic-bezier(0.16,1,0.3,1) ${(0.18 * i) / speed}s forwards`,
        };
        return (
          <g key={i}>{splitRing(i, r, ROTATE_TIMING[i].width + 0.1, undefined, style)}</g>
        );
      }),
    );
  }

  // ---- orbit -------------------------------------------------------------
  // Filled mark with dashed orbiters riding the gaps between brand radii.
  const midpoint = (i: number) => (RING_RADII[i] + RING_RADII[i + 1]) / 2;
  const orbiters = [
    { r: midpoint(0), duration: 32 / speed, dash: "6 14", width: 1.2, reverse: false, delay: 0 },
    { r: midpoint(1), duration: 22 / speed, dash: "3 9", width: 0.9, reverse: true, delay: -4 },
    { r: midpoint(2), duration: 40 / speed, dash: "8 20", width: 1.0, reverse: false, delay: -8 },
    { r: midpoint(3), duration: 18 / speed, dash: "2 6", width: 0.7, reverse: true, delay: -2 },
    { r: midpoint(4), duration: 28 / speed, dash: "4 10", width: 0.6, reverse: false, delay: -6 },
  ].slice(0, Math.max(0, count - 1));

  return shell(
    <>
      {Array.from({ length: count }, (_, i) => {
        const { grey, green } = RINGS_DARK[i];
        const r = cx * RING_RADII[i];
        return (
          <g key={i}>
            <circle cx={cx} cy={cx} r={r} fill={grey} clipPath={`url(#${uid}-l)`} />
            <circle cx={cx} cy={cx} r={r} fill={green} clipPath={`url(#${uid}-r)`} />
          </g>
        );
      })}
      {orbiters.map(({ r, duration, dash, width, reverse, delay }, i) => (
        <g
          key={`o${i}`}
          opacity={0.55}
          style={{
            transformOrigin: `${cx}px ${cx}px`,
            animation: `${reverse ? "ring-counter" : "ring-spin"} ${duration}s linear ${delay}s infinite`,
          }}
        >
          <circle
            cx={cx}
            cy={cx}
            r={cx * r}
            stroke="#939598"
            strokeWidth={w(width)}
            strokeDasharray={dash}
            strokeLinecap="round"
            clipPath={`url(#${uid}-l)`}
          />
          <circle
            cx={cx}
            cy={cx}
            r={cx * r}
            stroke="#3AAC88"
            strokeWidth={w(width)}
            strokeDasharray={dash}
            strokeLinecap="round"
            clipPath={`url(#${uid}-r)`}
          />
        </g>
      ))}
    </>,
  );
}
