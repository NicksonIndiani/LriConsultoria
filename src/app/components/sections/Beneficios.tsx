import { motion } from "motion/react";
import { CheckCircle, Target, Linkedin, FileText, MessageSquare, CalendarCheck } from "lucide-react";

export function Beneficios() {
  const benefits = [
    { text: "Rumo profissional claro (com prioridades)", icon: Target },
    { text: "LinkedIn com posicionamento forte", icon: Linkedin },
    { text: "Currículo alinhado ao seu alvo (se aplicável)", icon: FileText },
    { text: "Roteiro de entrevistas + storytelling", icon: MessageSquare },
    { text: "Plano de ação de 30 dias", icon: CalendarCheck }
  ];

  const planItems = [
    { week: "Semana 1", title: "Posicionamento", description: "Definir narrativa e direção" },
    { week: "Semana 2", title: "LinkedIn e presença", description: "Otimizar perfil e visibilidade" },
    { week: "Semana 3", title: "Networking estratégico", description: "Conexões com propósito" },
    { week: "Semana 4", title: "Aplicações e follow-ups", description: "Ação e acompanhamento" }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#F5EDE3]">
      {/* Gradiente de transição do ComoFunciona */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#D9C2A3]/99 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
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
          <p className="text-lg text-[#403837]/70 max-w-xl mx-auto">
            Resultados tangíveis que transformam sua trajetória profissional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-[#D8C3A5]/50 hover:shadow-md hover:border-[#C5A253]/40 transition-all cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#A47552]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#A47552]" />
                  </div>
                  <span className="text-[#403837] font-medium">{benefit.text}</span>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 pl-2"
            >
              <p className="text-sm text-[#403837] italic opacity-60">
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
            className="bg-white rounded-3xl border border-[#D8C3A5]/60 p-8 lg:p-10 shadow-lg relative overflow-hidden"
          >
            {/* Accent decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A47552] via-[#C5A253] to-[#A47552]" />

            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C5A253] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A47552]">Roteiro incluso</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#74685A] mb-3">Plano de 30 dias</h3>

            <p className="text-[#403837]/70 mb-8 leading-relaxed">
              Um roteiro claro e executável para você começar a avançar imediatamente após nossas sessões.
            </p>

            <div className="space-y-3">
              {planItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#F5EDE3]/70 hover:bg-[#F5EDE3] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#A47552] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <span className="text-[#74685A] font-semibold text-sm">{item.week}</span>
                    <p className="text-[#403837]">{item.title}</p>
                    <p className="text-xs text-[#403837]/50">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#D8C3A5]/40">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C5A253]" />
                <p className="text-sm text-[#403837]/70">
                  + Check-ins semanais e ajustes conforme necessário
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
