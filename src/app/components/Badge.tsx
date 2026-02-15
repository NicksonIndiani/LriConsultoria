import { motion } from "motion/react";
import { cn } from "./ui/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <motion.span 
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#C5A253] text-white",
        className
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {children}
    </motion.span>
  );
}
