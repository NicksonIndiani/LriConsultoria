import { motion } from "motion/react";
import { Button } from "../common/Button";
import { Chip } from "../common/Chip";
import { MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background with subtle gradient and noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9C2A3] via-[#D9C2A3] to-[#D8C3A5] opacity-50" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#74685A]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Carreira não é acaso. É construção consciente.
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-[#403837] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Clareza, posicionamento e plano de ação para sua próxima fase profissional — com estratégia e pé no chão.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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
                onClick={() => window.open("https://wa.me/[NUMERO]", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Chip>Atendimento online</Chip>
              <Chip>Plano prático</Chip>
              <Chip>Acompanhamento personalizado</Chip>
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
              <div className="absolute inset-0 bg-[#C5A253] opacity-20 blur-3xl scale-110 rounded-full" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-[3/4] max-w-md mx-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                  alt="[NOME DA CONSULTORA] - Consultora de Carreira"
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
