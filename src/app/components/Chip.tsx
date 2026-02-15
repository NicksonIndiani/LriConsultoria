import { cn } from "./ui/utils";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span className={cn(
      "inline-block px-4 py-1.5 rounded-full text-sm bg-[#D8C3A5] text-[#403837] border border-[#D8C3A5]",
      className
    )}>
      {children}
    </span>
  );
}
