import { useId } from "react";
import { RING_RADII, RINGS_DARK } from "./brandMark";

interface SpinningRingMarkProps {
  size?: number;
  opacity?: number;
  /** Speed multiplier - higher = faster. Default 1. */
  speed?: number;
  /** Stroke weight multiplier. Default 1. */
  weight?: number;
}

/**
 * Growth Program hero. Stroke-only reading of the mark: one ring per brand
 * radius, greys left and greens right as in the logo, alternating spin
 * direction outward to inward. Radii and colours come from brandMark.ts, so
 * this stays in step with the artwork rather than drifting from it.
 *
 * Before August 2026 this component hand-coded its own radii, used the
 * pre-correction green, and drew the split mirrored - greens on the left.
 */
export default function SpinningRingMark({
  size = 520,
  opacity = 1,
  speed = 1,
  weight = 1,
}: SpinningRingMarkProps) {
  const uid = useId().replace(/:/g, "");
  const cx = size / 2;
  const w = (n: number) => n * weight;

  const rings = [
    { duration: 24 / speed, dash: undefined, width: 1.2, reverse: false },
    { duration: 36 / speed, dash: "6 10", width: 1.0, reverse: true },
    { duration: 16 / speed, dash: "4 6", width: 0.9, reverse: true },
    { duration: 28 / speed, dash: "2 5", width: 0.8, reverse: false },
    { duration: 0, dash: undefined, width: 0.6, reverse: false },
    { duration: 0, dash: undefined, width: 0.5, reverse: false },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ opacity, display: "block", overflow: "visible" }}
    >
      <defs>
        <clipPath id={`${uid}-l`}>
          <rect x="0" y="0" width={cx} height={size} />
        </clipPath>
        <clipPath id={`${uid}-r`}>
          <rect x={cx} y="0" width={cx} height={size} />
        </clipPath>

        {/* Soft radial fade so it bleeds into the dark bg */}
        <radialGradient id={`${uid}-fade`} cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${uid}-m`}>
          <rect x="0" y="0" width={size} height={size} fill={`url(#${uid}-fade)`} />
        </mask>
      </defs>

      <g mask={`url(#${uid}-m)`}>
        {rings.map(({ duration, dash, width, reverse }, i) => {
          // The outermost stroke sits just inside the edge so the round cap
          // is not clipped by the viewBox.
          const r = cx * RING_RADII[i] * (i === 0 ? 0.97 : 1);
          const { grey, green } = RINGS_DARK[i];
          const spin = duration
            ? {
                transformOrigin: `${cx}px ${cx}px`,
                animation: `${reverse ? "ring-counter" : "ring-spin"} ${duration}s linear infinite`,
              }
            : undefined;

          return (
            <g key={i} style={spin}>
              {/* Greys left */}
              <circle
                cx={cx}
                cy={cx}
                r={r}
                stroke={grey}
                strokeWidth={w(width)}
                strokeDasharray={dash}
                clipPath={`url(#${uid}-l)`}
              />
              {/* Greens right */}
              <circle
                cx={cx}
                cy={cx}
                r={r}
                stroke={green}
                strokeWidth={w(width)}
                strokeDasharray={dash}
                clipPath={`url(#${uid}-r)`}
              />
            </g>
          );
        })}

        {/* Centre dot, taken from the innermost ring's green */}
        <circle cx={cx} cy={cx} r={w(3.5)} fill={RINGS_DARK[5].green} />

        {/* Vertical split hairline */}
        <line x1={cx} y1="0" x2={cx} y2={size} stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      </g>
    </svg>
  );
}
