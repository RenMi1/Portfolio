import { ReactNode } from "react";

interface ProfessionalBadgeProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  variant?: "gold" | "navy" | "premium";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProfessionalBadge({
  icon,
  title,
  subtitle,
  variant = "premium",
  size = "md",
  className = "",
}: ProfessionalBadgeProps) {
  const sizeClasses = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const variantClasses = {
    gold: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-200/60 dark:border-amber-700/40",
    navy: "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950/30 dark:to-primary-900/20 border border-primary-200/60 dark:border-primary-700/40",
    premium: "bg-gradient-to-br from-amber-50 via-primary-50 to-primary-100 dark:from-amber-950/20 dark:via-primary-950/30 dark:to-primary-900/20 border border-amber-200/40 dark:border-amber-700/30",
  };

  return (
    <div
      className={`
        flex flex-col items-center gap-2 rounded-2xl
        transition-all duration-300 hover:shadow-lg hover:scale-105
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <div className="text-2xl md:text-3xl">{icon}</div>
      <div className="text-center">
        <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">
          {title}
        </h4>
        {subtitle && (
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export function ProfessionalBadgeGrid({
  badges,
  className = "",
}: {
  badges: ProfessionalBadgeProps[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 ${className}`}
    >
      {badges.map((badge, idx) => (
        <ProfessionalBadge key={idx} {...badge} size="md" />
      ))}
    </div>
  );
}
