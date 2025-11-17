import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          // Variants
          {
            "bg-primary-orange text-white hover:bg-primary-orange-alt shadow-md hover:shadow-lg":
              variant === "primary",
            "bg-primary-navy text-white hover:bg-opacity-90 shadow-md hover:shadow-lg":
              variant === "secondary",
            "border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white":
              variant === "outline",
          },
          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
