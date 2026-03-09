import { motion } from "motion/react";
import { CheckCircle, Target, Linkedin, FileText, MessageSquare, CalendarCheck } from "lucide-react";

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

export function Beneficios() {
  return (
    <section className="py-20 lg:py-28 relative bg-brand-bg-light">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-heading mb-4">
            O que você leva
          </h2>
          <p className="text-lg text-brand-body/70 max-w-xl mx-auto">
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
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-brand-border/50 hover:shadow-md hover:border-brand-gold/40 transition-all cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <span className="text-brand-body font-medium">{benefit.text}</span>
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
              <p className="text-sm text-brand-body italic opacity-60">
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
            className="bg-white rounded-3xl border border-brand-border/60 p-8 lg:p-10 shadow-lg relative overflow-hidden"
          >
            {/* Accent decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-gold to-brand-accent" />

            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">Roteiro incluso</span>
            </div>
            <h3 className="text-2xl font-semibold text-brand-heading mb-3">Plano de 30 dias</h3>

            <p className="text-brand-body/70 mb-8 leading-relaxed">
              Com base no diagnóstico de perfil, padrões identificados e pontos de atenção mapeados na mentoria, você recebe um plano estruturado para organizar prioridades, fortalecer posicionamento e avançar com estratégia.
            </p>

            <div className="space-y-3">
              {planItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-bg-light/70 hover:bg-brand-bg-light transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <span className="text-brand-heading font-semibold text-sm">{item.week}</span>
                    <p className="text-brand-body">{item.title}</p>
                    <p className="text-xs text-brand-body/50">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/40">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold" />
                <p className="text-sm text-brand-body/70">
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
