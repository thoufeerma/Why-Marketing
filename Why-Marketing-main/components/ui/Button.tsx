import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const variants = {
      primary: "bg-gold-primary text-noir-bg hover:bg-gold-light",
      secondary: "bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary/5",
      outline: "border border-border-white text-noir-text hover:border-gold-primary/30 hover:bg-noir-surface",
    };

    const sizes = {
      default: "h-12 px-6 py-2 text-[15px]",
      lg: "h-14 px-8 py-3 text-[16px]",
      icon: "h-12 w-12",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary disabled:opacity-50 disabled:pointer-events-none tracking-wide hover:-translate-y-[2px] hover:shadow-lg hover:shadow-gold-primary/20 active:translate-y-0 active:shadow-sm",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
