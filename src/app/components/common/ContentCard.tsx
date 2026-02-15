import { motion } from "motion/react";
import { ExternalLink, ArrowRight, Linkedin, Mic, ArrowLeftRight, TrendingUp, FileText, Users, MessageSquare, Briefcase, Instagram } from "lucide-react";

interface ContentCardProps {
  title: string;
  summary: string;
  tag: string;
  platform: "linkedin" | "instagram";
}

const tagConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  "LinkedIn": { icon: Linkedin, color: "text-[#0077B5]", bg: "bg-[#0077B5]/10" },
  "Entrevista": { icon: Mic, color: "text-[#A47552]", bg: "bg-[#A47552]/10" },
  "Transição": { icon: ArrowLeftRight, color: "text-[#C5A253]", bg: "bg-[#C5A253]/10" },
  "Promoção": { icon: TrendingUp, color: "text-[#2E7D32]", bg: "bg-[#2E7D32]/10" },
  "Currículo": { icon: FileText, color: "text-[#5C6BC0]", bg: "bg-[#5C6BC0]/10" },
  "Networking": { icon: Users, color: "text-[#E65100]", bg: "bg-[#E65100]/10" },
  "Carreira": { icon: Briefcase, color: "text-[#74685A]", bg: "bg-[#74685A]/10" },
};

export function ContentCard({ title, summary, tag, platform }: ContentCardProps) {
  const config = tagConfig[tag] || { icon: MessageSquare, color: "text-[#A47552]", bg: "bg-[#A47552]/10" };
  const TagIcon = config.icon;

  const platformLabel = platform === "linkedin" ? "LinkedIn" : "Instagram";
  const PlatformIcon = platform === "linkedin" ? Linkedin : Instagram;

  return (
    <motion.div
      className="p-6 rounded-2xl bg-white border border-[#D8C3A5]/50 shadow-sm h-full flex flex-col hover:shadow-md hover:border-[#C5A253]/40 transition-all duration-300"
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bg} w-fit mb-4`}>
        <TagIcon className={`w-3.5 h-3.5 ${config.color}`} />
        <span className={`text-xs font-medium ${config.color}`}>{tag}</span>
      </div>

      <h4 className="text-lg font-semibold text-[#74685A] mb-2 leading-snug">{title}</h4>
      <p className="text-[#403837]/70 text-sm mb-5 leading-relaxed flex-grow">{summary}</p>

      <div className="flex items-center gap-4 pt-4 border-t border-[#D8C3A5]/30">
        <button className="flex items-center gap-1.5 text-sm font-medium text-[#A47552] hover:text-[#2C1810] transition-colors group">
          <span>Ler</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <button className="flex items-center gap-1.5 text-sm font-medium text-[#A47552] hover:text-[#2C1810] transition-colors group">
          <PlatformIcon className="w-3.5 h-3.5" />
          <span>{platformLabel}</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </button>
      </div>
    </motion.div>
  );
}
