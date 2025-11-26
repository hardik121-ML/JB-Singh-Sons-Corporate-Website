interface FloatingOrbsProps {
  variant?: "default" | "hero" | "section";
}

/**
 * Reusable decorative floating orbs for background effects.
 * Used across hero sections and content sections for visual interest.
 */
export default function FloatingOrbs({ variant = "default" }: FloatingOrbsProps) {
  if (variant === "hero") {
    return (
      <>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-navy/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </>
    );
  }

  if (variant === "section") {
    return (
      <>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-navy/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </>
    );
  }

  // Default variant
  return (
    <>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary-navy/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </>
  );
}
