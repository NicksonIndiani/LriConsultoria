import { motion } from "motion/react";
import { Button } from "../common/Button";
import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function Sobre() {
  const principles = [
    "Estratégia com simplicidade",
    "Posicionamento com autenticidade",
    "Plano executável"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sobre" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            Sobre [NOME DA CONSULTORA]
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image and Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-[#D8C3A5] shadow-xl max-w-md mx-auto lg:mx-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                alt="[NOME DA CONSULTORA]"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>

            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl border border-[#D8C3A5] p-6 max-w-md mx-auto lg:mx-0">
              <h4 className="font-semibold text-[#74685A] mb-3">Credenciais</h4>
              <ul className="space-y-2 text-sm text-[#403837]">
                <li>• 10+ anos em RH e desenvolvimento de carreira</li>
                <li>• Certificação Internacional em Career Coaching</li>
                <li>• MBA em Gestão de Pessoas e Liderança</li>
                <li>• 300+ profissionais acompanhados</li>
              </ul>
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
              <p className="text-xl md:text-2xl text-[#403837] leading-relaxed font-medium">
                Apoio pessoas a tomarem decisões profissionais com clareza, estratégia e execução.
              </p>

              <p className="text-lg text-[#403837] leading-relaxed opacity-90">
                Meu trabalho une escuta ativa e plano prático. Não acredito em fórmulas mágicas, mas em processo, consistência e estratégia personalizada.
              </p>

              <p className="text-[#403837] leading-relaxed opacity-80">
                Ao longo de mais de uma década trabalhando com desenvolvimento profissional, aprendi que carreira não se constrói no improviso. Exige clareza de objetivo, posicionamento autêntico e, acima de tudo, ação estruturada.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#D8C3A5]">
              <h4 className="font-semibold text-[#74685A] text-lg">Meus princípios:</h4>
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#C5A253] flex-shrink-0" />
                  <span className="text-[#403837]">{principle}</span>
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
