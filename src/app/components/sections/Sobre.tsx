import { motion } from "motion/react";
import { Button } from "../common/Button";
import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { scrollToSection } from "../../utils/scroll";

const principles = [
  "Estratégia antes de volume: menos candidatura aleatória, mais aderência.",
  "Clareza vem do movimento: você não precisa de certeza, precisa de rota.",
  "Método + humanidade: questionamento inteligente, sem julgamento."
];

export function Sobre() {
  return (
    <section id="sobre" className="py-20 lg:py-28 relative bg-white">
      {/* Gradiente de transição do Conteudos */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-brand-bg-light to-white" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-heading mb-4">
            Sobre Letícia Indiani
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glow effect */}
              <div className="absolute -inset-3 bg-brand-gold/15 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <ImageWithFallback
                  src="/assets/Fotos/leticia-indiani-sobre.png"
                  alt="Letícia Indiani"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Bio and Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-brand-body leading-relaxed font-medium">
                Faço a ponte entre formação e atuação real — com clareza, posicionamento e plano prático.
              </p>

              <p className="text-lg text-brand-body/80 leading-relaxed">
                Meu trabalho é para quem já escolheu a área, mas sente que a carreira está &quot;quase lá&quot;. Eu organizo sua história, fortaleço sua narrativa profissional e transformo esforço em estratégia — pra você parar de aplicar no escuro e começar a disputar as vagas certas.
              </p>

              <p className="text-brand-body/70 leading-relaxed">
                Eu junto escuta ativa + análise crítica + método, porque dica solta não resolve travamento. Você sai com direção, clareza do que buscar e um plano de ação possível (sem promessas milagrosas, só execução inteligente).
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-brand-border/40">
              <h4 className="font-semibold text-brand-heading text-lg">Meus princípios:</h4>
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-bg-light/50 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-brand-body font-medium">{principle}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <Button onClick={() => scrollToSection("#cta-final")}>
                Agendar conversa
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
