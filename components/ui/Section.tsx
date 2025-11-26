import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import Container from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerSize?: "sm" | "md" | "lg" | "full";
  noPadding?: boolean;
  background?: "white" | "light" | "dark";
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    className,
    containerSize = "lg",
    noPadding = false,
    background = "white",
    children,
    ...props
  },
  ref
) {
  return (
    <section
      ref={ref}
      className={cn(
        !noPadding && "py-16 md:py-24",
        {
          "bg-white": background === "white",
          "bg-neutral-light": background === "light",
          "bg-neutral-dark text-white": background === "dark",
        },
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
});

export default Section;
