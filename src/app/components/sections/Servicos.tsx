import { motion } from "motion/react";
import { ServiceCard } from "../common/ServiceCard";

export function Servicos() {
  const services = [
    {
      title: "Diagnóstico de Carreira",
      subtitle: "1 sessão + direcionamento",
      features: [
        "Análise do cenário atual",
        "Identificação de bloqueios",
        "Plano inicial de ação",
        "Definição de prioridades"
      ],
      ctaText: "Quero começar",
      featured: false
    },
    {
      title: "Mentoria de Carreira",
      subtitle: "4 a 6 sessões estruturadas",
      features: [
        "Posicionamento profissional claro",
        "Otimização completa do LinkedIn",
        "Narrativa de carreira forte",
        "Plano de execução de 30 dias"
      ],
      ctaText: "Ver como funciona",
      featured: true
    },
    {
      title: "Acompanhamento",
      subtitle: "Acompanhamento contínuo",
      features: [
        "Execução assistida do plano",
        "Ajustes conforme evolução",
        "Preparação para entrevistas",
        "Suporte em negociações"
      ],
      ctaText: "Falar comigo",
      featured: false
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white bg-opacity-40">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            Como eu posso te ajudar
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-[#403837] opacity-70 mb-4">
            Todos os serviços incluem material de apoio e suporte por e-mail entre sessões.
          </p>
          <a 
            href="#faq" 
            className="text-[#A47552] hover:text-[#B47449] underline transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver FAQ para mais detalhes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
