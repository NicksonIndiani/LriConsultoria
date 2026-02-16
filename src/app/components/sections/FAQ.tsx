import { motion } from "motion/react";
import { Accordion } from "../common/AccordionFAQ";

export function FAQ() {
  const faqItems = [
    {
      question: "Serve se eu estiver empregado(a)?",
      answer: "Sim. A mentoria é voltada para profissionais que já sabem a área que escolheram, mas sentem que a carreira não está avançando como poderia — estejam empregados, estagiando ou atuando fora da área. O foco é clareza estratégica e direcionamento para evoluir."
    },
    {
      question: "Em quanto tempo vejo evolução?",
      answer: "A mentoria já entrega clareza e plano de ação ao final da sessão. A evolução prática depende da execução do plano nos 30 dias seguintes. Clareza vem na sessão; avanço vem do movimento."
    },
    {
      question: "É online?",
      answer: "Sim. As sessões são individuais e realizadas online, com duração média de 1h a 1h30, em ambiente reservado e focado."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Os serviços possuem valores definidos por formato (1 sessão, 2 sessões ou combo com currículo e LinkedIn). O pagamento é realizado antes da confirmação da agenda."
    },
    {
      question: "O que é preciso para a primeira conversa?",
      answer: "Antes da sessão, você responde a um formulário breve para contextualizar sua trajetória. No dia, é importante estar em ambiente tranquilo e com papel e caneta para anotações. O restante é abertura para reflexão e compromisso com o plano de ação."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#F5EDE3]">
      {/* Gradiente de transição do Sobre */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/99 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[900px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-[#403837]/60">
            Tire suas dúvidas antes de dar o próximo passo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
