import { motion } from "motion/react";
import { ServiceCard } from "../common/ServiceCard";

export function Servicos() {

  const openWhatsApp = (servico: string) => {
    const msg = encodeURIComponent(`Olá, Letícia! 👋\nVim pelo site da LRI Consultoria e tenho interesse no serviço: *${servico}*.\nPodemos conversar sobre como funciona?`);
    window.open(`https://wa.me/5512991406108?text=${msg}`, "_blank");
  };

  const services = [
    {
      title: "Currículo + LinkedIn",
      subtitle: "Posicionamento e comunicação estratégica",
      features: [
        "Análise crítica do currículo atual",
        "Reestruturação focada em impacto e resultados",
        "Construção de narrativa profissional coerente",
        "Otimização de LinkedIn (headline, resumo e experiências)",
        "Alinhamento entre posicionamento e objetivos"
      ],
      ctaText: "Quero meu currículo",
      onClick: () => openWhatsApp("Currículo + LinkedIn")
    },
    {
      title: "Mentoria de Carreira",
      subtitle: "1 sessão + direcionamento estratégico",
      features: [
        "Análise do cenário profissional atual",
        "Mapeamento de forças e padrões de atuação",
        "Geração de hipótese prioritária de carreira",
        "Clareza sobre oportunidades reais na área",
        "Plano de ação prático para 30 dias"
      ],
      ctaText: "Quero uma sessão",
      onClick: () => openWhatsApp("Mentoria de Carreira — 1 sessão")
    },
    {
      title: "Mentoria de Carreira",
      subtitle: "2 sessões + validação e posicionamento",
      features: [
        "Diagnóstico profundo de trajetória e perfil",
        "Aplicação de SWOT de carreira",
        "Construção de 2–3 hipóteses de rota",
        "Pesquisa de campo e validação de mercado",
        "Definição de rota prioritária com critérios claros",
        "Plano estratégico de 30 dias com metas executáveis"
      ],
      ctaText: "Quero duas sessões",
      onClick: () => openWhatsApp("Mentoria de Carreira — 2 sessões")
    },
    {
      title: "Programa Completo",
      subtitle: "Da Clareza ao Posicionamento",
      features: [
        "Diagnóstico estratégico aprofundado",
        "Validação de rota profissional",
        "Plano de ação estruturado",
        "Currículo de impacto + LinkedIn otimizado",
        "Alinhamento entre direção e comunicação ao mercado",
        "Plano de 30 dias incluso"
      ],
      ctaText: "Quero o programa completo",
      featured: true,
      badgeText: "Mais completo",
      onClick: () => openWhatsApp("Programa Completo — Da Clareza ao Posicionamento")
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white relative">
      {/* Gradiente de transição da ParaQuemE */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F5EDE3] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
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

        {/* Mobile: scroll nativo com snap */}
        <div className="md:hidden mb-8">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide">
            {services.map((service, index) => (
              <div key={index} className="snap-center shrink-0 w-[85vw]">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid responsivo mostrando todos os cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-[#403837] opacity-70 mb-4">
            Todos os serviços são online e incluem material de apoio.
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
