import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  tag: string;
}

export function TestimonialCard({ name, role, text, tag }: TestimonialCardProps) {
  return (
    <motion.div
      className="p-7 rounded-2xl bg-white border border-[#D8C3A5]/50 shadow-sm h-full flex flex-col justify-between hover:shadow-md hover:border-[#C5A253]/40 transition-all duration-300"
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <div>
        <Quote className="w-8 h-8 text-[#C5A253]/40 mb-4 scale-x-[-1]" />
        <p className="text-[#403837] leading-relaxed mb-6">{text}</p>
      </div>
      <div className="flex items-center justify-between pt-5 border-t border-[#D8C3A5]/30">
        <div>
          <p className="font-semibold text-[#74685A]">{name}</p>
          <p className="text-sm text-[#403837]/60">{role}</p>
        </div>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#A47552]/10 text-[#A47552] border border-[#A47552]/20">
          {tag}
        </span>
      </div>
    </motion.div>
  );
}
