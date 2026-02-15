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
  const baseStyles = "font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#A47552] text-white hover:bg-[#B47449] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    secondary: "border-2 border-[#A47552] text-[#A47552] hover:bg-[#D8C3A5] hover:bg-opacity-30 hover:-translate-y-0.5 active:translate-y-0",
    ghost: "text-[#A47552] hover:bg-[#D8C3A5] hover:bg-opacity-30"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const ButtonContent = (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
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
