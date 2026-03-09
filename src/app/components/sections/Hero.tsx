import { motion } from "motion/react";
import { Button } from "../common/Button";
import { MessageCircle, Monitor, ClipboardList, UserCheck } from "lucide-react";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { scrollToSection } from "../../utils/scroll";
import { openWhatsApp } from "../../utils/whatsapp";

const line1Words = ["Carreira", "não", "é", "acaso."];
const line2Words = ["É", "construção", "consciente."];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background with subtle gradient and noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg-light via-brand-bg-light to-brand-border opacity-50" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Gradiente de transição para ParaQuemE */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-brand-bg-light z-[1]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* 3D Animated Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-tight text-brand-heading" style={{ perspective: "1000px" }}>
              <span className="flex flex-wrap gap-x-[0.3em]">
                {line1Words.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block origin-bottom"
                    initial={{ opacity: 0, rotateX: 90, y: 20 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="flex flex-wrap gap-x-[0.3em]">
                {line2Words.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block origin-bottom"
                    initial={{ opacity: 0, rotateX: 90, y: 20 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + (line1Words.length + i) * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={
                      word === "consciente."
                        ? {
                            backgroundImage: "linear-gradient(135deg, var(--brand-accent), var(--brand-gold), var(--brand-accent))",
                            backgroundSize: "200% 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            animation: "shimmer 3s ease-in-out infinite",
                          }
                        : undefined
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-sm text-brand-accent font-medium"
                animate={{ opacity: [0.7, 1, 0.7], y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                Consultoria especializada em carreiras
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-brand-body/80 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Clareza, posicionamento e plano de ação para sua próxima fase profissional — com estratégia e pé no chão.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#cta-final")}
              >
                Agendar conversa
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openWhatsApp("hero")}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </motion.div>

            {/* Diferenciais */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="flex items-center gap-2.5 text-brand-body/70">
                <Monitor className="w-4.5 h-4.5 text-brand-accent" />
                <span className="text-sm">Atendimento online</span>
              </div>
              <div className="flex items-center gap-2.5 text-brand-body/70">
                <ClipboardList className="w-4.5 h-4.5 text-brand-accent" />
                <span className="text-sm">Plano prático</span>
              </div>
              <div className="flex items-center gap-2.5 text-brand-body/70">
                <UserCheck className="w-4.5 h-4.5 text-brand-accent" />
                <span className="text-sm">Acompanhamento personalizado</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-brand-gold opacity-20 blur-3xl scale-110 rounded-full" />

              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-[3/4] max-w-md mx-auto">
                <ImageWithFallback
                  src="/assets/Fotos/Leticia-indiani.png"
                  alt="Letícia Indiani - Consultora de Carreira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
