import { Link } from "react-router-dom";

import logoSpiralPath from "@/assets/logo-spiral-path.txt?raw";

import { cn } from "@/lib/utils";

/** Espiral arquimediana (~2,5 vueltas), trazada desde el centro — cercana al dibujo original */
function LogoSpiral({ className }: { className?: string }) {
  const d = logoSpiralPath.trim();

  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.08"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SiteLogoProps = {
  variant?: "hero" | "footer";
  className?: string;
};

const SiteLogo = ({ variant = "hero", className }: SiteLogoProps) => {
  const isHero = variant === "hero";

  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-0.5 md:gap-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isHero && "text-cream drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]",
        !isHero && "text-[#8a7d72]",
        className,
      )}
      aria-label="Camino Adentro — inicio"
    >
      <LogoSpiral className={cn("h-[1.85rem] w-[1.85rem] md:h-8 md:w-8", isHero && "opacity-95")} />
      <span
        className={cn(
          "font-heading font-medium tracking-[0.02em] leading-none",
          isHero ? "text-[1.3rem] md:text-[1.55rem]" : "text-xl md:text-2xl",
        )}
      >
        Camino Adentro
      </span>
    </Link>
  );
};

export default SiteLogo;
