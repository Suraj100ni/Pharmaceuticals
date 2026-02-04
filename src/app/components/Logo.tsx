import logoImage from "figma:asset/5c9a9cc8cb00b7e75f6039c9f6b2cd6d0d88d764.png";

interface LogoProps {
  variant?: "default" | "footer";
  className?: string;
}

export function Logo({
  variant = "default",
  className = "",
}: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <img
      src={logoImage}
      alt="C Life Pharmaceuticals - A Vision For Healthier Lives"
      style={{
        height: isFooter ? 'var(--logo-footer-height)' : 'var(--logo-navbar-height)',
        width: 'auto'
      }}
      className={`object-contain ${className}`}
    />
  );
}