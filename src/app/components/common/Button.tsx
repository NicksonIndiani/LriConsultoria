import { motion } from "motion/react";
import { cn } from "../ui/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium rounded-full transition-all duration-500 ease-out inline-flex items-center justify-center gap-2 relative overflow-hidden";

  const variants = {
    primary: "bg-brand-accent text-white hover:bg-brand-accent-hover hover:shadow-[0_8px_25px_-5px_rgba(164,117,82,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
    secondary: "border-2 border-brand-accent text-brand-accent hover:shadow-[0_0_20px_-5px_rgba(164,117,82,0.3)] hover:-translate-y-0.5 active:translate-y-0",
    ghost: "text-brand-accent hover:bg-brand-border/30"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const shimmer = variant === "primary" && (
    <motion.span
      className="absolute inset-0 rounded-full"
      style={{
        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
        backgroundSize: "200% 100%",
      }}
      initial={{ backgroundPosition: "200% 0" }}
      whileHover={{
        backgroundPosition: ["-100% 0", "200% 0"],
        transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] },
      }}
    />
  );

  const ButtonContent = (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
      whileTap={{ scale: 0.97, transition: { duration: 0.15 } }}
      {...props}
    >
      {shimmer}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
}
