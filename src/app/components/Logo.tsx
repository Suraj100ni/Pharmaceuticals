import logoImage from "@/assets/logo.png";

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
