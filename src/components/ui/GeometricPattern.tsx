/**
 * GeometricPattern - Professional tech-focused geometric decorative elements
 * Renders SVG-based hexagons, grids, and circuit patterns for visual enhancement
 */

interface GeometricPatternProps {
  type?: "hexagons" | "grid" | "circuit" | "dots" | "lines";
  opacity?: number;
  className?: string;
  color?: "navy" | "gold" | "both";
}

export function GeometricPattern({
  type = "hexagons",
  opacity = 0.1,
  className = "",
  color = "navy",
}: GeometricPatternProps) {
  const baseOpacity = opacity;

  if (type === "hexagons") {
    return (
      <svg
        className={`absolute inset-0 w-full h-full ${className}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hexagon-pattern" x="0" y="0" width="120" height="100" patternUnits="userSpaceOnUse">
            <polygon
              points="60,20 100,45 100,95 60,120 20,95 20,45"
              fill="none"
              stroke={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              strokeWidth="1"
              opacity={baseOpacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
      </svg>
    );
  }

  if (type === "grid") {
    return (
      <svg
        className={`absolute inset-0 w-full h-full ${className}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              strokeWidth="0.5"
              opacity={baseOpacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    );
  }

  if (type === "circuit") {
    return (
      <svg
        className={`absolute inset-0 w-full h-full ${className}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line
              x1="0"
              y1="50"
              x2="200"
              y2="50"
              stroke={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              strokeWidth="0.5"
              opacity={baseOpacity * 0.6}
            />
            <line
              x1="0"
              y1="150"
              x2="200"
              y2="150"
              stroke={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              strokeWidth="0.5"
              opacity={baseOpacity * 0.6}
            />
            {/* Vertical lines */}
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="200"
              stroke={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              strokeWidth="0.5"
              opacity={baseOpacity * 0.6}
            />
            <line
              x1="150"
              y1="0"
              x2="150"
              y2="200"
              stroke={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              strokeWidth="0.5"
              opacity={baseOpacity * 0.6}
            />
            {/* Connection nodes */}
            <circle cx="50" cy="50" r="2" fill={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"} opacity={baseOpacity} />
            <circle cx="150" cy="50" r="2" fill={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"} opacity={baseOpacity} />
            <circle cx="50" cy="150" r="2" fill={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"} opacity={baseOpacity} />
            <circle cx="150" cy="150" r="2" fill={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"} opacity={baseOpacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    );
  }

  if (type === "dots") {
    return (
      <svg
        className={`absolute inset-0 w-full h-full ${className}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="dots-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle
              cx="20"
              cy="20"
              r="1.5"
              fill={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              opacity={baseOpacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-pattern)" />
      </svg>
    );
  }

  if (type === "lines") {
    return (
      <svg
        className={`absolute inset-0 w-full h-full ${className}`}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="lines-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line
              x1="0"
              y1="0"
              x2="80"
              y2="80"
              stroke={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              strokeWidth="0.5"
              opacity={baseOpacity}
            />
            <line
              x1="80"
              y1="0"
              x2="0"
              y2="80"
              stroke={color === "gold" ? "#d4af37" : color === "both" ? "#4b7dc9" : "#4b7dc9"}
              strokeWidth="0.5"
              opacity={baseOpacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines-pattern)" />
      </svg>
    );
  }

  return null;
}
