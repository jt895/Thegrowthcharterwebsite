import { useId } from "react";
import { RING_RADII, RINGS_DARK, SPLIT_HAIRLINE } from "./brandMark";

interface AnimatedHeroMarkProps {
  size?: number;
  opacity?: number;
  /** Multiplies rotation speed of orbiting rings. Default 1. Higher = faster. */
  speedMultiplier?: number;
  className?: string;
}

/**
 * About-page hero. The static rings underneath are the real mark: the x0.8
 * radius progression and the dark-surface colour ramp from the corrected
 * logo master (see brandMark.ts). The dashed orbiters sit in the gaps
 * between those rings and are decoration only.
 */
export default function AnimatedHeroMark({
  size = 560,
  opacity = 1,
  speedMultiplier = 1,
  className = "",
}: AnimatedHeroMarkProps) {
  const uid = useId().replace(/:/g, "");
  const cx = size / 2;
  const sp = speedMultiplier;

  // Orbiters ride the midpoints between consecutive brand ring radii, so the
  // animation never cuts across a ring edge.
  const midpoint = (i: number) => (RING_RADII[i] + RING_RADII[i + 1]) / 2;
  const orbiters = [
    { r: midpoint(0), duration: 32 / sp, dash: "6 14", width: 1.2, reverse: false, delay: 0 },
    { r: midpoint(1), duration: 22 / sp, dash: "3 9", width: 0.9, reverse: true, delay: -4 },
    { r: midpoint(2), duration: 40 / sp, dash: "8 20", width: 1.0, reverse: false, delay: -8 },
    { r: midpoint(3), duration: 18 / sp, dash: "2 6", width: 0.7, reverse: true, delay: -2 },
    { r: midpoint(4), duration: 28 / sp, dash: "4 10", width: 0.6, reverse: false, delay: -6 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{ opacity, display: "block" }}
      className={className}
    >
      <defs>
        {/* Greys left, greens right - the mark's split runs on the vertical centreline. */}
        <clipPath id={`${uid}-left`}>
          <rect x="0" y="0" width={cx} height={size} />
        </clipPath>
        <clipPath id={`${uid}-right`}>
          <rect x={cx} y="0" width={cx} height={size} />
        </clipPath>

        <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2E9677" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2E9677" stopOpacity="0" />
        </radialGradient>

        <radialGradient id={`${uid}-mask`} cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${uid}-fade`}>
          <rect x="0" y="0" width={size} height={size} fill={`url(#${uid}-mask)`} />
        </mask>
      </defs>

      {/* Outer glow pulse */}
      <circle cx={cx} cy={cx} r={cx * 0.98} fill={`url(#${uid}-glow)`}>
        <animate
          attributeName="opacity"
          values="0.4;0.9;0.4"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Static filled rings - the corrected mark */}
      <g mask={`url(#${uid}-fade)`}>
        {RINGS_DARK.map(({ grey, green }, i) => {
          const radius = cx * RING_RADII[i];
          return (
            <g key={i}>
              <circle cx={cx} cy={cx} r={radius} fill={grey} clipPath={`url(#${uid}-left)`} />
              <circle cx={cx} cy={cx} r={radius} fill={green} clipPath={`url(#${uid}-right)`} />
            </g>
          );
        })}

        <line
          x1={cx}
          y1={0}
          x2={cx}
          y2={size}
          stroke={SPLIT_HAIRLINE}
          strokeWidth="1.5"
        />
      </g>

      {/* Orbiting dashed rings */}
      {orbiters.map(({ r, duration, dash, width, reverse, delay }, i) => {
        const radius = cx * r;
        const from = reverse ? `360 ${cx} ${cx}` : `0 ${cx} ${cx}`;
        const to = reverse ? `0 ${cx} ${cx}` : `360 ${cx} ${cx}`;

        return (
          <g key={i} opacity={0.55}>
            <circle
              cx={cx}
              cy={cx}
              r={radius}
              stroke="#939598"
              strokeWidth={width}
              strokeDasharray={dash}
              strokeLinecap="round"
              clipPath={`url(#${uid}-left)`}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={from}
                to={to}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={cx}
              cy={cx}
              r={radius}
              stroke="#3AAC88"
              strokeWidth={width}
              strokeDasharray={dash}
              strokeLinecap="round"
              clipPath={`url(#${uid}-right)`}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={from}
                to={to}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* Slow breathe on entire mark */}
      <animateTransform
        attributeName="transform"
        type="scale"
        values="1;1.012;1"
        dur="8s"
        repeatCount="indefinite"
        additive="sum"
      />
    </svg>
  );
}
