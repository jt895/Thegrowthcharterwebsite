import logoMark from "@/imports/logo/TUR-mark-dark.svg";
import logoMarkSimplified from "@/imports/logo/TUR-mark-simplified-dark.svg";

interface LogoMarkProps {
  size?: number;
  className?: string;
  /**
   * Below the 6-ring mark's minimum legible size the inner rings collapse
   * into each other. The corrected master ships a 3-ring simplified mark for
   * exactly this case - see TUR-Logo-Specification.pdf.
   */
  simplified?: boolean;
}

export default function LogoMark({
  size = 36,
  className = "",
  simplified,
}: LogoMarkProps) {
  const useSimplified = simplified ?? size < 28;

  return (
    <img
      src={useSimplified ? logoMarkSimplified : logoMark}
      alt="The United Republic"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain", display: "block" }}
    />
  );
}
