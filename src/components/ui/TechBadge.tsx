import { ReactNode } from "react";

interface TechBadgeProps {
  icon?: ReactNode;
  label: string;
  variant?: "default" | "gold" | "outline" | "minimal";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TechBadge({
  icon,
  label,
  variant = "default",
  size = "md",
  className = "",
}: TechBadgeProps) {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const variantClasses = {
    default: "bg-primary-100/80 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 border border-primary-200/60 dark:border-primary-700/60",
    gold: "bg-amber-100/80 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-700/60",
    outline: "bg-transparent border-2 border-primary-500 dark:border-accent-gold text-primary-700 dark:text-accent-gold",
    minimal: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full font-semibold
        transition-all duration-300 hover:scale-105
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label}
    </span>
  );
}

export function TechBadgeGroup({
  badges,
  variant = "default",
  size = "md",
  className = "",
}: {
  badges: (TechBadgeProps | ReactNode)[];
  variant?: TechBadgeProps["variant"];
  size?: TechBadgeProps["size"];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {badges.map((badge, idx) => {
        if (typeof badge === "string" || typeof badge === "number") {
          return <TechBadge key={idx} label={String(badge)} variant={variant} size={size} />;
        }

        if (badge && typeof badge === "object" && "label" in badge) {
          return <TechBadge key={idx} variant={variant} size={size} {...badge} />;
        }

        return <div key={idx}>{badge}</div>;
      })}
    </div>
  );
}
