import { useRef } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TestimonialCard } from "../common/TestimonialCard";
import { Button } from "../common/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Depoimentos() {
  const sliderRef = useRef<Slider>(null);

  const testimonials = [
    {
      name: "M., Analista",
      role: "Analista de Marketing",
      text: "Consegui clareza sobre meu próximo passo. O plano de 30 dias me deu direção e confiança para aplicar nas vagas certas.",
      tag: "Transição"
    },
    {
      name: "R., Gerente",
      role: "Gerente de Projetos",
      text: "Meu LinkedIn mudou completamente. Comecei a receber mensagens de recrutadores pela primeira vez em anos.",
      tag: "Reposicionamento"
    },
    {
      name: "A., Coordenadora",
      role: "Coordenadora Financeira",
      text: "Estava travada há meses. Depois das sessões, tive clareza total sobre o que buscar e como me posicionar. Em 6 semanas, promoção.",
      tag: "Promoção"
    },
    {
      name: "L., Analista Sr.",
      role: "Analista Sênior de RH",
      text: "O processo de mentoria me ajudou a organizar minha narrativa e entender meu valor. As entrevistas ficaram muito mais naturais.",
      tag: "Entrevistas"
    },
    {
      name: "C., Especialista",
      role: "Especialista em TI",
      text: "Queria voltar ao mercado após um período sabático. O diagnóstico me mostrou exatamente onde focar energia e tempo.",
      tag: "Retorno"
    },
    {
      name: "P., Consultora",
      role: "Consultora de Vendas",
      text: "A clareza de posicionamento que ganhei foi transformadora. Hoje sei exatamente o que ofereço e para quem.",
      tag: "Transição"
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
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Gradiente de transição do Beneficios */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#F5EDE3]/99 to-transparent" />

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
              <Star key={i} className="w-5 h-5 fill-[#C5A253] text-[#C5A253]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            O que dizem após aplicar o processo
          </h2>
          <p className="text-lg text-[#403837]/60 max-w-xl mx-auto">
            Histórias reais de profissionais que transformaram suas carreiras
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-4 md:px-14"
        >
          {/* Custom Navigation Arrows */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="hidden md:flex absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#D8C3A5]/60 text-[#A47552] hover:bg-[#A47552] hover:text-white hover:border-[#A47552] transition-all shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="hidden md:flex absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#D8C3A5]/60 text-[#A47552] hover:bg-[#A47552] hover:text-white hover:border-[#A47552] transition-all shadow-md"
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
