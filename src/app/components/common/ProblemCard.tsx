import { motion } from "motion/react";
import { cn } from "../ui/utils";

interface ProblemCardProps {
  text: string;
  className?: string;
}

export function ProblemCard({ text, className }: ProblemCardProps) {
  return (
    <motion.div
      className={cn(
        "p-6 rounded-2xl border border-brand-border bg-white shadow-sm",
        "hover:border-brand-gold hover:shadow-md hover:-translate-y-1 transition-all duration-300",
        "cursor-default",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-brand-body font-medium text-center leading-relaxed">{text}</p>
    </motion.div>
  );
}
