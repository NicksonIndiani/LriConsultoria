import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../common/Button";
import { Check } from "lucide-react";

export function ComoFunciona() {
  const [activeStep, setActiveStep] = useState(0);

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="como-funciona" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            Um processo simples, com método
          </h2>
        </motion.div>

        {/* Desktop Stepper */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#D8C3A5] -translate-y-1/2" />
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-[#C5A253] -translate-y-1/2"
              initial={{ width: "0%" }}
              whileInView={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Steps */}
            <div className="relative grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        activeStep === index
                          ? "bg-[#A47552] border-[#A47552] text-white"
                          : "bg-white border-[#D8C3A5] text-[#74685A]"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {activeStep > index ? (
                        <Check className="w-8 h-8" />
                      ) : (
                        <span className="text-xl font-semibold">{step.number}</span>
                      )}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#74685A] mb-2">{step.title}</h3>
                  <p className="text-[#403837] mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-[#403837] opacity-70">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#A47552] text-white border-2 border-[#A47552] flex-shrink-0">
                  <span className="font-semibold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-[#D8C3A5] mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-semibold text-[#74685A] mb-2">{step.title}</h3>
                <p className="text-[#403837] mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-[#403837] opacity-70">
                      • {detail}
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
