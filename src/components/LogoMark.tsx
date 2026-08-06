import logoImg from "@/imports/TUR_NEW_LOGO_circle_only.png";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export default function LogoMark({ size = 36, className = "" }: LogoMarkProps) {
  return (
    <img
      src={logoImg}
      alt="The United Republic"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain", display: "block" }}
    />
  );
}
