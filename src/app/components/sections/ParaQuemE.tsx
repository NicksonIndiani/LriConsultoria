import { motion } from "motion/react";
import { ProblemCard } from "../common/ProblemCard";
import { Button } from "../common/Button";
import { scrollToSection } from "../../utils/scroll";

const problems = [
  "Quero transicionar e não sei por onde começar",
  "Estou travado(a) e sem direção",
  "Meu LinkedIn não gera oportunidades",
  "Tenho entrevistas, mas não avanço",
  "Quero promoção e reconhecimento",
  "Quero voltar ao mercado com confiança"
];

export function ParaQuemE() {
  return (
    <section className="py-20 lg:py-28 relative bg-brand-bg-light">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-heading mb-4">
            Se você está aqui, provavelmente é por um destes motivos
          </h2>
          <p className="text-lg text-brand-body opacity-80 max-w-2xl mx-auto">
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
            variant="primary"
            size="lg"
            onClick={() => scrollToSection("#cta-final")}
          >
            Quero entender meu caminho →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
