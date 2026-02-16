import { motion } from "motion/react";
import { ExternalLink, ArrowRight, Linkedin, Mic, ArrowLeftRight, TrendingUp, FileText, Users, MessageSquare, Briefcase, Instagram, Target, Compass, Building, Heart, Search } from "lucide-react";

interface ContentCardProps {
  title: string;
  summary: string;
  tag: string;
  platform: "linkedin" | "instagram";
  link?: string;
}

const tagConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  "LinkedIn": { icon: Linkedin, color: "text-[#0077B5]", bg: "bg-[#0077B5]/10" },
  "Entrevista": { icon: Mic, color: "text-[#A47552]", bg: "bg-[#A47552]/10" },
  "Transição": { icon: ArrowLeftRight, color: "text-[#C5A253]", bg: "bg-[#C5A253]/10" },
  "Promoção": { icon: TrendingUp, color: "text-[#2E7D32]", bg: "bg-[#2E7D32]/10" },
  "Currículo": { icon: FileText, color: "text-[#5C6BC0]", bg: "bg-[#5C6BC0]/10" },
  "Networking": { icon: Users, color: "text-[#E65100]", bg: "bg-[#E65100]/10" },
  "Carreira": { icon: Briefcase, color: "text-[#74685A]", bg: "bg-[#74685A]/10" },
  "Mercado": { icon: TrendingUp, color: "text-[#2E7D32]", bg: "bg-[#2E7D32]/10" },
  "Posicionamento": { icon: Compass, color: "text-[#5C6BC0]", bg: "bg-[#5C6BC0]/10" },
  "Cultura": { icon: Building, color: "text-[#E65100]", bg: "bg-[#E65100]/10" },
  "Metas": { icon: Target, color: "text-[#C5A253]", bg: "bg-[#C5A253]/10" },
  "Inclusão": { icon: Heart, color: "text-[#E91E63]", bg: "bg-[#E91E63]/10" },
  "Autoconhecimento": { icon: Search, color: "text-[#7B1FA2]", bg: "bg-[#7B1FA2]/10" },
};

export function ContentCard({ title, summary, tag, platform, link }: ContentCardProps) {
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

      <h4 className="text-base lg:text-lg font-semibold text-[#74685A] mb-2 leading-snug line-clamp-2">{title}</h4>
      <p className="text-[#403837]/70 text-sm mb-5 leading-relaxed flex-grow line-clamp-3">{summary}</p>

      <div className="flex items-center gap-4 pt-4 border-t border-[#D8C3A5]/30">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#A47552] hover:text-[#2C1810] transition-colors group"
          >
            <PlatformIcon className="w-3.5 h-3.5" />
            <span>Ver no {platformLabel}</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        ) : (
          <span className="text-sm text-[#403837]/40 italic">Em breve</span>
        )}
      </div>
    </motion.div>
  );
}
