import { motion } from "motion/react";
import { cn } from "./ui/utils";

interface ProblemCardProps {
  text: string;
  className?: string;
}

export function ProblemCard({ text, className }: ProblemCardProps) {
  return (
    <motion.div
      className={cn(
        "p-6 rounded-2xl border border-[#D8C3A5] bg-white bg-opacity-50 backdrop-blur-sm",
        "hover:border-[#C5A253] hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        "cursor-default",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-[#403837] text-center leading-relaxed">{text}</p>
    </motion.div>
  );
}
