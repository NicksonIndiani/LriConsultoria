import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  tag: string;
}

export function TestimonialCard({ name, role, text, tag }: TestimonialCardProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>(0);

  // Check if text overflows
  useEffect(() => {
    const el = textRef.current;
    const container = containerRef.current;
    if (el && container) {
      setIsOverflowing(el.scrollHeight > container.clientHeight);
    }
  }, [text]);

  // Auto-scroll on hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isOverflowing || !isHovered) {
      if (container && !isHovered) {
        // Smooth scroll back to top
        container.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const maxScroll = container.scrollHeight - container.clientHeight;
    const speed = 0.5; // pixels per frame
    let scrollPos = 0;

    // Small delay before starting scroll
    const timeout = setTimeout(() => {
      const scroll = () => {
        scrollPos += speed;
        if (scrollPos >= maxScroll) {
          scrollPos = maxScroll;
          container.scrollTop = scrollPos;
          return;
        }
        container.scrollTop = scrollPos;
        animationRef.current = requestAnimationFrame(scroll);
      };
      animationRef.current = requestAnimationFrame(scroll);
    }, 600);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, isOverflowing]);

  return (
    <motion.div
      className="p-5 md:p-7 rounded-2xl bg-white border border-brand-border/50 shadow-sm h-[280px] md:h-[320px] flex flex-col hover:shadow-md hover:border-brand-gold/40 transition-all duration-300"
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="flex-1 overflow-hidden relative"
        style={{ scrollBehavior: "auto" }}
      >
        <Quote className="w-6 h-6 md:w-8 md:h-8 text-brand-gold/40 mb-3 md:mb-4 scale-x-[-1]" />
        <p
          ref={textRef}
          className="text-sm md:text-base text-brand-body leading-relaxed"
        >
          {text}
        </p>
        {/* Fade hint at bottom when text overflows and not scrolled */}
        {isOverflowing && !isHovered && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>
      <div className="flex items-center justify-between pt-4 md:pt-5 border-t border-brand-border/30 shrink-0">
        <div>
          <p className="text-sm md:text-base font-semibold text-brand-heading">{name}</p>
          <p className="text-xs md:text-sm text-brand-body/60">{role}</p>
        </div>
        <span className="inline-block px-2.5 md:px-3 py-1 rounded-full text-xs font-medium bg-brand-accent/10 text-brand-accent border border-brand-accent/20 shrink-0">
          {tag}
        </span>
      </div>
    </motion.div>
  );
}
