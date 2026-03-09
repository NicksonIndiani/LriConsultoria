import { useRef } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TestimonialCard } from "../common/TestimonialCard";
import { Button } from "../common/Button";
import { scrollToSection } from "../../utils/scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Analista de Marketing · São Paulo, SP",
    text: "Eu estava mandando currículo pra tudo e não recebia retorno. A Letícia me ajudou a entender o que eu realmente queria e a montar um plano de 30 dias. Em menos de dois meses, fui chamada pra três entrevistas — e aceitei uma proposta que nem imaginava conseguir.",
    tag: "Transição",
    avatar: "MC"
  },
  {
    name: "Rafael Oliveira",
    role: "Gerente de Projetos · Campinas, SP",
    text: "Meu LinkedIn era praticamente invisível. Depois que a Letícia refez meu posicionamento e otimizou meu perfil, comecei a receber mensagens de recrutadores toda semana. Em um mês já tinha três propostas na mesa. Foi surreal ver a diferença que a estratégia certa causa.",
    tag: "Reposicionamento",
    avatar: "RO"
  },
  {
    name: "Amanda Ferreira",
    role: "Coordenadora Financeira · Rio de Janeiro, RJ",
    text: "Estava travada no mesmo cargo há 3 anos e achava que o problema era o mercado. A Letícia me mostrou que eu não sabia me posicionar pro próximo nível. Seis semanas depois das sessões, veio a promoção que eu tanto esperava.",
    tag: "Promoção",
    avatar: "AF"
  },
  {
    name: "Lucas Mendes",
    role: "Analista Sênior de RH · Belo Horizonte, MG",
    text: "Eu ia bem nas entrevistas técnicas, mas sempre travava na parte comportamental. O trabalho de narrativa que fizemos juntos mudou minha forma de me apresentar. Hoje consigo falar da minha trajetória com segurança e autenticidade.",
    tag: "Entrevistas",
    avatar: "LM"
  },
  {
    name: "Camila Ribeiro",
    role: "Especialista em TI · Florianópolis, SC",
    text: "Voltei ao mercado depois de 2 anos afastada e não sabia por onde começar. O diagnóstico da Letícia me deu clareza total: o que atualizar, onde focar e como abordar o gap no currículo. Em 40 dias estava empregada de novo.",
    tag: "Retorno",
    avatar: "CR"
  },
  {
    name: "Priscila Santos",
    role: "Consultora de Vendas · Curitiba, PR",
    text: "Eu sabia que era boa no que fazia, mas não conseguia comunicar isso nas reuniões e negociações. A consultoria me ajudou a entender meu diferencial e a construir um discurso claro sobre o valor que entrego. Hoje fecho contratos com muito mais confiança e segurança.",
    tag: "Posicionamento",
    avatar: "PS"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
};

export function Depoimentos() {
  const sliderRef = useRef<Slider>(null);

  return (
    <section className="py-14 md:py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Gradiente de transição do Beneficios */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-brand-bg-light to-white" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-heading mb-4">
            O que dizem após aplicar o processo
          </h2>
          <p className="text-lg text-brand-body/60 max-w-xl mx-auto">
            Histórias reais de profissionais que transformaram suas carreiras
          </p>
        </motion.div>

        {/* Mobile: scroll nativo com snap */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-center shrink-0 w-[85vw]">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: react-slick carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-14 hidden md:block"
        >
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="flex absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-brand-border/60 text-brand-accent hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="flex absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-brand-border/60 text-brand-accent hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3 pb-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Button onClick={() => scrollToSection("#cta-final")}>
            Quero ter esse tipo de clareza
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
