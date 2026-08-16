interface HoloGlassProps {
  /** "full" for hero-level presence, "subtle" for smaller/secondary sections like the CTA. */
  intensity?: "full" | "subtle";
}

/**
 * Ambient background layer: a slow-rotating swirl of brand teal, a soft glass
 * overlay to keep foreground copy readable, and a faint light-sweep shimmer.
 * Purely decorative — absolutely positioned, no pointer events, safe to drop
 * behind any section that has `position: relative` (or is a flex container)
 * and `overflow: hidden`.
 */
export default function HoloGlass({ intensity = "full" }: HoloGlassProps) {
  const bgOpacity = intensity === "subtle" ? 0.7 : 1;

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
    >
      <div className="holo-swirl" style={{ opacity: bgOpacity }} />
      <div className="holo-field" style={{ opacity: bgOpacity }} />
      <div className="holo-glass" />
      <div className="holo-shimmer" />
      <div className="holo-grain" />
    </div>
  );
}
