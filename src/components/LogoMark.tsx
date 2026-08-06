import logoImg from "@/imports/TUR_NEW_LOGO_white_copy_transparent.png";

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
