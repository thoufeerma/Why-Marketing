import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  label?: string;
}

export function SectionHeading({
  title,
  subtitle,
  label,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {label && (
        <span className="text-gold-primary text-[13px] font-bold tracking-[0.12em] uppercase mb-2">
          {label}
        </span>
      )}
      <h2 className="text-[3rem] md:text-[3.75rem] font-serif font-medium leading-none text-noir-text tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[18px] text-noir-muted font-normal leading-[1.7] -tracking-[0.01em] max-w-[600px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
