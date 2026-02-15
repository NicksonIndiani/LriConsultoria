import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { cn } from "./ui/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Conteúdos", href: "#conteudos" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-[#D9C2A3] bg-opacity-95 backdrop-blur-md shadow-lg border-b border-[#D8C3A5]" 
            : "bg-[#D9C2A3] bg-opacity-70 backdrop-blur-sm"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "py-3" : "py-4"
          )}>
            {/* Logo */}
            <a href="#hero" className="text-xl font-semibold text-[#74685A] hover:text-[#A47552] transition-colors">
              [NOME DA CONSULTORIA]
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#403837] hover:text-[#A47552] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A253] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => window.open("https://wa.me/[NUMERO]", "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button 
                size="sm"
                onClick={() => scrollToSection("#cta-final")}
              >
                Agendar conversa
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#74685A]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 lg:hidden bg-[#D9C2A3] pt-20"
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-lg text-[#403837] hover:text-[#A47552] transition-colors py-3 text-left border-b border-[#D8C3A5]"
            >
              {item.label}
            </button>
          ))}
          
          <div className="flex flex-col gap-3 mt-6">
            <Button 
              variant="secondary"
              onClick={() => {
                window.open("https://wa.me/[NUMERO]", "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button 
              onClick={() => scrollToSection("#cta-final")}
            >
              Agendar conversa
            </Button>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
