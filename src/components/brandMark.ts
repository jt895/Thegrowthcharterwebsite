/**
 * The corrected United Republic mark, as data.
 *
 * Geometry: six concentric circles on a x0.8 progression from a 45 mm outer
 * radius - 45.000 / 36.000 / 28.800 / 23.040 / 18.432 / 14.746 mm - split on
 * the vertical centreline, greys left, greens right, both sides lightening
 * inward. The 2020 master got the innermost circle wrong (10 mm), left ring 5
 * unsplit and inverted ring 6; those faults were corrected in August 2026.
 *
 * Colours below are the dark-surface ramp. Anything drawing the mark in code
 * reads from here so there is one source of truth. See
 * TUR-Logo-Specification.pdf and src/imports/logo/ for the artwork itself.
 */

/** Ring radii as a fraction of the outer radius. */
export const RING_RADII = [1, 0.8, 0.64, 0.512, 0.4096, 0.32768] as const;

/** Simplified three-ring mark, for small sizes. 45 / 27.9 / 15.3 mm. */
export const RING_RADII_SIMPLIFIED = [1, 0.62, 0.34] as const;

export interface RingColour {
  grey: string;
  green: string;
}

/** Ramp for use on dark surfaces, outermost ring first. */
export const RINGS_DARK: RingColour[] = [
  { grey: "#939598", green: "#086F54" },
  { grey: "#ADAFB1", green: "#2E9677" },
  { grey: "#C6C7C9", green: "#3AAC88" },
  { grey: "#DCDDDE", green: "#4FC49E" },
  { grey: "#EEEFF0", green: "#8AD0BF" },
  { grey: "#FFFFFF", green: "#C2E5DD" },
];

/** Ramp for use on light surfaces, outermost ring first. */
export const RINGS_LIGHT: RingColour[] = [
  { grey: "#7E8083", green: "#086F54" },
  { grey: "#949699", green: "#2E9677" },
  { grey: "#AAACAF", green: "#3AAC88" },
  { grey: "#BEC0C2", green: "#4FC49E" },
  { grey: "#CFD1D3", green: "#7ACDB0" },
  { grey: "#DEE0E1", green: "#A5DCC8" },
];

/** Brand colours, per the August 2026 correction. */
export const BRAND = {
  primaryGreen: "#2E9677",
  deepGreen: "#086F54",
  lightGreen: "#8AD0BF",
  midGrey: "#939598",
  ink: "#231F20",
} as const;

/** The centreline that separates the grey and green halves. */
export const SPLIT_HAIRLINE = "rgba(35,31,32,0.5)";
