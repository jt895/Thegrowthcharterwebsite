import { useId } from "react";

interface AnimatedHeroMarkProps {
  size?: number;
  opacity?: number;
  /** Multiplies rotation speed of orbiting rings. Default 1. Higher = faster. */
  speedMultiplier?: number;
  className?: string;
}

export default function AnimatedHeroMark({
  size = 560,
  opacity = 1,
  speedMultiplier = 1,
  className = "",
}: AnimatedHeroMarkProps) {
  const uid = useId().replace(/:/g, "");
  const cx = size / 2;
  const sp = speedMultiplier;

  // Filled concentric rings - faithful to the real logo
  const filled = [
    { r: 0.99, grey: "#5A5A5A", teal: "#0A5240" },
    { r: 0.83, grey: "#7A7A7A", teal: "#167055" },
    { r: 0.67, grey: "#A0A0A0", teal: "#2A9D78" },
    { r: 0.51, grey: "#C0C0C0", teal: "#52B896" },
    { r: 0.35, grey: "#DEDEDE", teal: "#8FD9BE" },
    { r: 0.19, grey: "#F2F2F2", teal: "#C4EEDD" },
  ];

  // Orbiting stroke rings - duration divided by speedMultiplier = faster rotation
  const orbiters = [
    { r: 0.95, duration: 32 / sp, dash: "6 14", width: 1.2, reverse: false, delay: 0 },
    { r: 0.75, duration: 22 / sp, dash: "3 9",  width: 0.9, reverse: true,  delay: -4 },
    { r: 0.55, duration: 40 / sp, dash: "8 20", width: 1.0, reverse: false, delay: -8 },
    { r: 0.37, duration: 18 / sp, dash: "2 6",  width: 0.7, reverse: true,  delay: -2 },
    { r: 0.20, duration: 28 / sp, dash: "4 10", width: 0.6, reverse: false, delay: -6 },
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
        {/* Split clip paths for filled rings */}
        <clipPath id={`${uid}-left`}>
          <rect x="0" y="0" width={cx} height={size} />
        </clipPath>
        <clipPath id={`${uid}-right`}>
          <rect x={cx} y="0" width={cx} height={size} />
        </clipPath>

        {/* Clip paths for each orbiting ring's teal half */}
        {orbiters.map((_, i) => (
          <clipPath key={i} id={`${uid}-orb-r-${i}`}>
            <rect x={cx} y="0" width={cx} height={size} />
          </clipPath>
        ))}

        {/* Radial glow gradient */}
        <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A9D78" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2A9D78" stopOpacity="0" />
        </radialGradient>

        {/* Soft vignette mask */}
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

      {/* ─── Static filled rings (logo faithful) ─── */}
      <g mask={`url(#${uid}-fade)`}>
        {filled.map(({ r, grey, teal }, i) => {
          const radius = cx * r;
          return (
            <g key={i}>
              <circle cx={cx} cy={cx} r={radius} fill={grey} clipPath={`url(#${uid}-left)`} />
              <circle cx={cx} cy={cx} r={radius} fill={teal} clipPath={`url(#${uid}-right)`} />
            </g>
          );
        })}

        {/* Vertical split hairline */}
        <line
          x1={cx} y1={cx * 0.01} x2={cx} y2={size * 0.99}
          stroke="rgba(28,28,28,0.5)"
          strokeWidth="1.5"
        />
      </g>

      {/* ─── Orbiting dashed rings ─── */}
      {orbiters.map(({ r, duration, dash, width, reverse, delay }, i) => {
        const radius = cx * r;
        const circum = 2 * Math.PI * radius;
        const animId = `${uid}-rot-${i}`;
        const from = reverse ? "360 " + cx + " " + cx : "0 " + cx + " " + cx;
        const to   = reverse ? "0 "   + cx + " " + cx : "360 " + cx + " " + cx;

        return (
          <g key={i} opacity={0.55}>
            {/* Grey half - left */}
            <circle
              cx={cx} cy={cx} r={radius}
              stroke="#9B9B9B"
              strokeWidth={width}
              strokeDasharray={dash}
              strokeLinecap="round"
              clipPath={`url(#${uid}-left)`}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={from} to={to}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Teal half - right */}
            <circle
              cx={cx} cy={cx} r={radius}
              stroke="#2A9D78"
              strokeWidth={width}
              strokeDasharray={dash}
              strokeLinecap="round"
              clipPath={`url(#${uid}-orb-r-${i})`}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={from} to={to}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* ─── Slow breathe on entire mark ─── */}
      <animateTransform
        attributeName="transform"
        type="scale"
        values={`1;1.012;1`}
        dur="8s"
        repeatCount="indefinite"
        additive="sum"
      />
    </svg>
  );
}
