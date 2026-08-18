import { useId } from "react";

interface SpinningRingMarkProps {
  size?: number;
  opacity?: number;
  /** Speed multiplier - lower = faster. Default 1. */
  speed?: number;
  /** Stroke weight multiplier. Default 1. */
  weight?: number;
}

/**
 * Version-1 hero animation: stroke-only concentric rings, grey/teal split,
 * outer ring spins CW and inner ring spins CCW via CSS keyframes.
 * Extra static inner rings add depth.
 */
export default function SpinningRingMark({
  size = 520,
  opacity = 1,
  speed = 1,
  weight = 1,
}: SpinningRingMarkProps) {
  const uid = useId().replace(/:/g, "");
  const cx = size / 2;

  const outerDur = `${24 / speed}s`;
  const innerDur = `${16 / speed}s`;
  const mid1Dur  = `${36 / speed}s`;
  const mid2Dur  = `${28 / speed}s`;

  const w = (n: number) => n * weight;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ opacity, display: "block", overflow: "visible" }}
    >
      <defs>
        <clipPath id={`${uid}-l`}><rect x="0"  y="0" width={cx}   height={size} /></clipPath>
        <clipPath id={`${uid}-r`}><rect x={cx} y="0" width={cx}   height={size} /></clipPath>

        {/* Soft radial fade so it bleeds into the dark bg */}
        <radialGradient id={`${uid}-fade`} cx="50%" cy="50%" r="50%">
          <stop offset="60%"  stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${uid}-m`}>
          <rect x="0" y="0" width={size} height={size} fill={`url(#${uid}-fade)`} />
        </mask>

        {/* Keyframes injected as SVG animate - use CSS classes for CW/CCW */}
      </defs>

      <g mask={`url(#${uid}-m)`}>

        {/* ── OUTER ring: spins CW ── */}
        <g style={{ transformOrigin: `${cx}px ${cx}px`, animation: `ring-spin ${outerDur} linear infinite` }}>
          <circle cx={cx} cy={cx} r={cx * 0.96} stroke="#9B9B9B" strokeWidth={w(1.2)} clipPath={`url(#${uid}-r)`} />
          <circle cx={cx} cy={cx} r={cx * 0.96} stroke="#2A9D78" strokeWidth={w(1.2)} clipPath={`url(#${uid}-l)`} />
        </g>

        {/* ── MID-OUTER ring: spins CCW, dashed ── */}
        <g style={{ transformOrigin: `${cx}px ${cx}px`, animation: `ring-counter ${mid1Dur} linear infinite` }}>
          <circle cx={cx} cy={cx} r={cx * 0.78} stroke="#9B9B9B" strokeWidth={w(0.9)} strokeDasharray="6 10" clipPath={`url(#${uid}-r)`} />
          <circle cx={cx} cy={cx} r={cx * 0.78} stroke="#2A9D78" strokeWidth={w(0.9)} strokeDasharray="6 10" clipPath={`url(#${uid}-l)`} />
        </g>

        {/* ── INNER ring: spins CCW ── */}
        <g style={{ transformOrigin: `${cx}px ${cx}px`, animation: `ring-counter ${innerDur} linear infinite` }}>
          <circle cx={cx} cy={cx} r={cx * 0.60} stroke="#9B9B9B" strokeWidth={w(1.0)} strokeDasharray="4 6" clipPath={`url(#${uid}-r)`} />
          <circle cx={cx} cy={cx} r={cx * 0.60} stroke="#2A9D78" strokeWidth={w(1.0)} strokeDasharray="4 6" clipPath={`url(#${uid}-l)`} />
        </g>

        {/* ── MID-INNER ring: CW, tighter dash ── */}
        <g style={{ transformOrigin: `${cx}px ${cx}px`, animation: `ring-spin ${mid2Dur} linear infinite` }}>
          <circle cx={cx} cy={cx} r={cx * 0.42} stroke="#9B9B9B" strokeWidth={w(0.7)} strokeDasharray="2 5" clipPath={`url(#${uid}-r)`} />
          <circle cx={cx} cy={cx} r={cx * 0.42} stroke="#2A9D78" strokeWidth={w(0.7)} strokeDasharray="2 5" clipPath={`url(#${uid}-l)`} />
        </g>

        {/* ── Static innermost rings ── */}
        <circle cx={cx} cy={cx} r={cx * 0.26} stroke="#9B9B9B" strokeWidth={w(0.6)} clipPath={`url(#${uid}-r)`} />
        <circle cx={cx} cy={cx} r={cx * 0.26} stroke="#2A9D78" strokeWidth={w(0.6)} clipPath={`url(#${uid}-l)`} />

        <circle cx={cx} cy={cx} r={cx * 0.12} stroke="#9B9B9B" strokeWidth={w(0.5)} clipPath={`url(#${uid}-r)`} />
        <circle cx={cx} cy={cx} r={cx * 0.12} stroke="#2A9D78" strokeWidth={w(0.5)} clipPath={`url(#${uid}-l)`} />

        {/* Centre dot */}
        <circle cx={cx} cy={cx} r={w(3.5)} fill="#2A9D78" />

        {/* Vertical split hairline */}
        <line x1={cx} y1="0" x2={cx} y2={size} stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      </g>
    </svg>
  );
}
