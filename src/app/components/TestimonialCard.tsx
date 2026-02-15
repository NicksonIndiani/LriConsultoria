import { motion } from "motion/react";
import { Chip } from "./Chip";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  tag: string;
}

export function TestimonialCard({ name, role, text, tag }: TestimonialCardProps) {
  return (
    <motion.div
      className="p-6 rounded-2xl border border-[#D8C3A5] bg-white bg-opacity-70 backdrop-blur-sm h-full"
      whileHover={{ scale: 1.02, borderColor: "#C5A253" }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-[#403837] mb-4 italic leading-relaxed">"{text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-[#74685A]">{name}</p>
          <p className="text-sm text-[#403837] opacity-70">{role}</p>
        </div>
        <Chip className="text-xs">{tag}</Chip>
      </div>
    </motion.div>
  );
}
