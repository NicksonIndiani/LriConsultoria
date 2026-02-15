import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Chip } from "./Chip";

interface ContentCardProps {
  title: string;
  summary: string;
  tag: string;
}

export function ContentCard({ title, summary, tag }: ContentCardProps) {
  return (
    <motion.div
      className="p-6 rounded-2xl border border-[#D8C3A5] bg-white bg-opacity-70 backdrop-blur-sm min-w-[320px] h-full flex flex-col"
      whileHover={{ 
        scale: 1.02, 
        borderColor: "#C5A253",
        boxShadow: "0 10px 30px rgba(164, 117, 82, 0.1)" 
      }}
      transition={{ duration: 0.3 }}
    >
      <Chip className="text-xs mb-3 w-fit">{tag}</Chip>
      <h4 className="text-lg font-semibold text-[#74685A] mb-2">{title}</h4>
      <p className="text-[#403837] text-sm mb-4 opacity-80 flex-grow">{summary}</p>
      
      <div className="flex gap-2">
        <button className="flex items-center gap-1 text-sm text-[#A47552] hover:text-[#B47449] transition-colors">
          <span>Ler</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-1 text-sm text-[#A47552] hover:text-[#B47449] transition-colors">
          <span>LinkedIn</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
