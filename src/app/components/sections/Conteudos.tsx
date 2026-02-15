import { useRef } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ContentCard } from "../common/ContentCard";
import { Button } from "../common/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Conteudos() {
  const sliderRef = useRef<Slider>(null);

  const contents = [
    {
      title: "Como construir um LinkedIn que atrai oportunidades",
      summary: "Os 5 elementos essenciais que recrutadores buscam no seu perfil.",
      tag: "LinkedIn",
      platform: "linkedin" as const
    },
    {
      title: "Storytelling em entrevistas: como contar sua história",
      summary: "A estrutura simples para responder 'fale sobre você' com confiança.",
      tag: "Entrevista",
      platform: "instagram" as const
    },
    {
      title: "Transição de carreira sem começar do zero",
      summary: "Como usar suas habilidades transferíveis de forma estratégica.",
      tag: "Transição",
      platform: "linkedin" as const
    },
    {
      title: "3 sinais de que você está pronto(a) para promoção",
      summary: "E como posicionar sua conversa com liderança.",
      tag: "Promoção",
      platform: "instagram" as const
    },
    {
      title: "Currículo que passa pelo ATS e impressiona pessoas",
      summary: "A anatomia de um currículo que funciona em 2026.",
      tag: "Currículo",
      platform: "linkedin" as const
    },
    {
      title: "Networking estratégico: qualidade sobre quantidade",
      summary: "Como criar conexões reais que geram oportunidades.",
      tag: "Networking",
      platform: "instagram" as const
    },
    {
      title: "Como se preparar para entrevistas comportamentais",
      summary: "O método STAR aplicado de forma prática e autêntica.",
      tag: "Entrevista",
      platform: "linkedin" as const
    },
    {
      title: "Sinais de que é hora de mudar de emprego",
      summary: "Quando sair não é desistir, é estratégia.",
      tag: "Carreira",
      platform: "instagram" as const
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "24px",
        }
      }
    ]
  };

  return (
    <section id="conteudos" className="py-20 lg:py-28 relative bg-[#F5EDE3]">
      {/* Gradiente de transição do Depoimentos */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/99 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            Conteúdos práticos para avançar na carreira
          </h2>
          <p className="text-lg text-[#403837]/60">
            Ideias aplicáveis — direto ao ponto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-4 md:px-14 mb-10"
        >
          {/* Custom Navigation Arrows */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="hidden md:flex absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#D8C3A5]/60 text-[#A47552] hover:bg-[#A47552] hover:text-white hover:border-[#A47552] transition-all shadow-md"
            aria-label="Previous content"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="hidden md:flex absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#D8C3A5]/60 text-[#A47552] hover:bg-[#A47552] hover:text-white hover:border-[#A47552] transition-all shadow-md"
            aria-label="Next content"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {contents.map((content, index) => (
              <div key={index} className="px-3 pb-2">
                <ContentCard {...content} />
              </div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="secondary">
            Ver todos os conteúdos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
