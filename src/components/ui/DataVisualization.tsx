import { ReactNode } from "react";

interface DataVisualizationProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function DataVisualization({
  label,
  value,
  icon,
  unit = "",
  trend = "neutral",
  className = "",
}: DataVisualizationProps) {
  const trendIndicator = {
    up: "text-emerald-500",
    down: "text-rose-500",
    neutral: "text-primary-500",
  };

  return (
    <div
      className={`
        flex items-center gap-4 p-4 rounded-xl
        bg-gradient-to-br from-white/50 to-slate-50/30
        dark:from-slate-900/50 dark:to-slate-800/30
        border border-slate-200/60 dark:border-slate-700/60
        transition-all duration-300 hover:shadow-lg
        ${className}
      `}
    >
      {icon && (
        <div className={`text-2xl ${trendIndicator[trend]}`}>{icon}</div>
      )}
      <div className="flex-1">
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide font-semibold">
          {label}
        </p>
        <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          {value}
          {unit && <span className="text-lg ml-1">{unit}</span>}
        </p>
      </div>
    </div>
  );
}

export function StatsGrid({
  stats,
  className = "",
}: {
  stats: DataVisualizationProps[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
    >
      {stats.map((stat, idx) => (
        <DataVisualization key={idx} {...stat} />
      ))}
    </div>
  );
}

interface SkillMetricProps {
  name: string;
  percentage: number;
  icon?: ReactNode;
  showPercentage?: boolean;
}

export function SkillMetric({
  name,
  percentage,
  icon,
  showPercentage = true,
}: SkillMetricProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {name}
          </span>
        </div>
        {showPercentage && (
          <span className="text-sm font-bold text-primary-600 dark:text-accent-gold">
            {percentage}%
          </span>
        )}
      </div>
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-gold transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface SkillMetricsGridProps {
  skills: SkillMetricProps[];
  className?: string;
}

export function SkillMetricsGrid({
  skills,
  className = "",
}: SkillMetricsGridProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {skills.map((skill, idx) => (
        <SkillMetric key={idx} {...skill} />
      ))}
    </div>
  );
}
