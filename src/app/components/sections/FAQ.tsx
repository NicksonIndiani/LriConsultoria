import { motion } from "motion/react";
import { Accordion } from "../common/AccordionFAQ";

export function FAQ() {
  const faqItems = [
    {
      question: "Serve se eu estiver empregado(a)?",
      answer: "Sim! Na verdade, a maioria das pessoas que atendo está empregada e busca clareza para o próximo passo — seja uma promoção, transição interna ou movimento para outra empresa. Trabalhar no seu desenvolvimento enquanto está empregado(a) é estratégia, não deslealdade."
    },
    {
      question: "E se eu ainda não souber o que quero?",
      answer: "Essa é exatamente uma das razões mais comuns para buscar mentoria. O processo de diagnóstico é desenhado para trazer clareza sobre seus valores, interesses, forças e o que você realmente quer construir. Começamos por aí."
    },
    {
      question: "Em quanto tempo vejo evolução?",
      answer: "Depende do ponto de partida e do seu ritmo de execução. Clareza você ganha já nas primeiras sessões. Resultados concretos (como entrevistas, promoção ou nova posição) variam de 4 a 12 semanas, dependendo do mercado e da sua aplicação do plano."
    },
    {
      question: "O atendimento é online?",
      answer: "Sim, 100% online. Isso permite flexibilidade de agenda e atendimento para qualquer lugar do Brasil (e exterior). Usamos videoconferência com qualidade profissional e você recebe todo o material de apoio por e-mail."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é feito via transferência, PIX ou cartão (parcelamento disponível para pacotes maiores). Após a conversa inicial (gratuita), você recebe a proposta com valores, formato e condições. Só fechamos quando tudo estiver claro para você."
    },
    {
      question: "O que preciso para a primeira conversa?",
      answer: "Apenas disposição para falar sobre onde você está e onde quer chegar. Não precisa de currículo pronto, LinkedIn impecável ou clareza total. A conversa inicial é justamente para entendermos se faz sentido trabalharmos juntos(as) — e é sem compromisso."
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
