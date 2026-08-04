import logo from "@/assets/mvx-esports-logo.jpeg";

export function MvxEsportsLogo({ className, alt = "MVX Esports" }: { className?: string; alt?: string }) {
  return (
    <img
      src={logo}
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
