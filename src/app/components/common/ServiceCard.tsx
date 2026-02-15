import { motion } from "motion/react";
import { cn } from "../ui/utils";
import { Button } from "./Button";
import { Badge } from "./Badge";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ServiceCard({
  title,
  subtitle,
  features,
  ctaText,
  featured,
  className,
  onClick
}: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "relative p-8 rounded-2xl border-2 border-[#D8C3A5] bg-white bg-opacity-60 backdrop-blur-sm transition-all duration-300",
        "hover:border-[#C5A253] hover:shadow-xl hover:-translate-y-1",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge>Mais escolhido</Badge>
        </div>
      )}
      
      <h3 className="text-2xl font-semibold text-[#74685A] mb-2">{title}</h3>
      <p className="text-[#403837] mb-6 opacity-80">{subtitle}</p>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[#C5A253] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[#403837]">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button variant="primary" className="w-full" onClick={onClick}>
        {ctaText}
      </Button>
    </motion.div>
  );
}
