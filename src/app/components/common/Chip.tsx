import { cn } from "../ui/utils";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span className={cn(
      "inline-block px-4 py-1.5 rounded-full text-sm bg-brand-border text-brand-body border border-brand-border",
      className
    )}>
      {children}
    </span>
  );
}
