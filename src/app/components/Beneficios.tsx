import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export function Beneficios() {
  const benefits = [
    "Rumo profissional claro (com prioridades)",
    "LinkedIn com posicionamento forte",
    "Currículo alinhado ao seu alvo (se aplicável)",
    "Roteiro de entrevistas + storytelling",
    "Plano de ação de 30 dias"
  ];

  const planItems = [
    "Semana 1: Posicionamento",
    "Semana 2: LinkedIn e presença",
    "Semana 3: Networking estratégico",
    "Semana 4: Aplicações e follow-ups"
  ];

  return (
    <section className="py-20 lg:py-28 bg-white bg-opacity-40">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            O que você leva
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:bg-opacity-50 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-[#C5A253] flex-shrink-0 mt-1" />
                <span className="text-lg text-[#403837]">{benefit}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-[#D8C3A5]"
            >
              <p className="text-sm text-[#403837] italic opacity-70">
                Sem promessas mágicas. Com estratégia e consistência.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - 30 Days Plan Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl border-2 border-[#D8C3A5] p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#C5A253]" />
              <h3 className="text-2xl font-semibold text-[#74685A]">Plano de 30 dias</h3>
            </div>
            
            <p className="text-[#403837] mb-6 opacity-80">
              Um roteiro claro e executável para você começar a avançar imediatamente após nossas sessões.
            </p>

            <div className="space-y-4">
              {planItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#D9C2A3] bg-opacity-30"
                >
                  <div className="w-8 h-8 rounded-full bg-[#A47552] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-[#403837]">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#D8C3A5]">
              <p className="text-sm text-[#403837] opacity-70">
                + Check-ins semanais e ajustes conforme necessário
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
