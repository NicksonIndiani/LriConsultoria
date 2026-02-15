import { motion } from "motion/react";
import { ProblemCard } from "../common/ProblemCard";
import { Button } from "../common/Button";

export function ParaQuemE() {
  const problems = [
    "Quero transicionar e não sei por onde começar",
    "Estou travado(a) e sem direção",
    "Meu LinkedIn não gera oportunidades",
    "Tenho entrevistas, mas não avanço",
    "Quero promoção e reconhecimento",
    "Quero voltar ao mercado com confiança"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            Se você está aqui, provavelmente é por um destes motivos
          </h2>
          <p className="text-lg text-[#403837] opacity-80 max-w-2xl mx-auto">
            Vamos organizar isso com clareza e estratégia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProblemCard text={problem} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button 
            variant="ghost"
            onClick={() => scrollToSection("#cta-final")}
          >
            Quero entender meu caminho →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
