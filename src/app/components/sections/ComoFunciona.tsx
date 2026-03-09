import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Button } from "../common/Button";
import { Check } from "lucide-react";
import { scrollToSection } from "../../utils/scroll";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos seu cenário atual, objetivos e bloqueios. Mapeamos onde você está e para onde quer ir.",
    details: ["Análise de histórico", "Definição de metas", "Identificação de gaps"]
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Construímos seu posicionamento, narrativa profissional e plano estruturado de ação.",
    details: ["Posicionamento claro", "Narrativa forte", "Plano detalhado"]
  },
  {
    number: "03",
    title: "Execução",
    description: "Aplicamos o plano com acompanhamento: LinkedIn, currículo, entrevistas e ajustes contínuos.",
    details: ["Implementação assistida", "Preparação prática", "Ajustes em tempo real"]
  }
];

export function ComoFunciona() {
  const [activeStep, setActiveStep] = useState(-1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => setActiveStep(0), 400);
          setTimeout(() => setActiveStep(1), 1200);
          setTimeout(() => setActiveStep(2), 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="como-funciona" className="py-20 lg:py-28 relative bg-brand-bg-light" ref={sectionRef}>
      {/* Gradiente de transição da Servicos */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white to-brand-bg-light" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-heading mb-4">
            Um processo simples, com método
          </h2>
        </motion.div>

        {/* Desktop Stepper */}
        <div className="hidden lg:block mb-12">
          {/* Circles row with connecting line */}
          <div className="relative mb-10">
            {/* Background line */}
            <div className="absolute top-8 left-[16.67%] right-[16.67%] h-0.5 bg-brand-border" />
            {/* Active line */}
            <div
              className="absolute top-8 left-[16.67%] h-0.5 bg-brand-gold transition-all duration-700 ease-out"
              style={{ width: `${Math.max(0, (activeStep / (steps.length - 1)) * 66.67)}%` }}
            />

            <div className="relative grid grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="flex justify-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      activeStep >= index
                        ? "bg-brand-accent border-brand-accent text-white shadow-lg scale-100 opacity-100"
                        : "bg-white border-brand-border text-brand-heading scale-75 opacity-40"
                    }`}
                  >
                    {activeStep > index ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <span className="text-xl font-semibold">{step.number}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content row */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 px-2 ${
                  activeStep >= index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="text-xl lg:text-2xl font-semibold text-brand-heading mb-2">{step.title}</h3>
                <p className="text-sm lg:text-base text-brand-body/80 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs lg:text-sm text-brand-body/60">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="lg:hidden space-y-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-brand-accent text-white border-2 border-brand-accent flex-shrink-0">
                  <span className="font-semibold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-brand-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-semibold text-brand-heading mb-2">{step.title}</h3>
                <p className="text-brand-body mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-brand-body opacity-70">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button onClick={() => scrollToSection("#cta-final")}>
            Agendar conversa
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
