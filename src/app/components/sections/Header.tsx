import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "../common/Button";
import { cn } from "../ui/utils";
import { scrollToSection } from "../../utils/scroll";
import { openWhatsApp } from "../../utils/whatsapp";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setIsPastHero(!entry.isIntersecting);
          if (entry.isIntersecting) setActiveSection("");
        },
        { threshold: 0.1 }
      );
      heroObserver.observe(heroEl);
      return () => heroObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const sectionIds = ["servicos", "como-funciona", "conteudos", "sobre", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Conteúdos", href: "#conteudos" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" }
  ];

  const handleNav = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-brand-bg-light/95 backdrop-blur-md shadow-[0_1px_0_rgba(164,117,82,0.15)]"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "py-0.5" : "py-1"
          )}>
            {/* Logo */}
            <img className="w-24 pl-4 lg:pl-0 cursor-pointer" onClick={() => scrollToSection("#hero")} src="./assets/logo/Logo.svg" alt="Logo" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-base font-medium transition-colors relative group",
                    activeSection === item.href
                      ? "text-brand-body"
                      : "text-brand-body/80 hover:text-brand-body"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300",
                    activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </button>
              ))}
            </nav>

            {/* Desktop CTAs - aparecem após passar da Hero */}
            <motion.div
              className="hidden lg:flex items-center gap-3"
              initial={false}
              animate={{ opacity: isPastHero ? 1 : 0, x: isPastHero ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: isPastHero ? "auto" : "none" }}
            >
              <Button
                variant="secondary"
                onClick={() => openWhatsApp("header")}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button
                onClick={() => scrollToSection("#cta-final")}
              >
                Agendar conversa
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-brand-heading"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-brand-bg-light pt-20"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-lg text-brand-body hover:text-brand-accent transition-colors py-3 text-left border-b border-brand-border"
                >
                  {item.label}
                </button>
              ))}

              <div className="flex flex-col gap-3 mt-6">
                <Button
                  variant="secondary"
                  onClick={() => {
                    openWhatsApp("header");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => handleNav("#cta-final")}
                >
                  Agendar conversa
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
