import { useRef } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ContentCard } from "./ContentCard";
import { Button } from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Conteudos() {
  const sliderRef = useRef<Slider>(null);

  const contents = [
    {
      title: "Como construir um LinkedIn que atrai oportunidades",
      summary: "Os 5 elementos essenciais que recrutadores buscam no seu perfil.",
      tag: "LinkedIn"
    },
    {
      title: "Storytelling em entrevistas: como contar sua história",
      summary: "A estrutura simples para responder 'fale sobre você' com confiança.",
      tag: "Entrevista"
    },
    {
      title: "Transição de carreira sem começar do zero",
      summary: "Como usar suas habilidades transferíveis de forma estratégica.",
      tag: "Transição"
    },
    {
      title: "3 sinais de que você está pronto(a) para promoção",
      summary: "E como posicionar sua conversa com liderança.",
      tag: "Promoção"
    },
    {
      title: "Currículo que passa pelo ATS e impressiona pessoas",
      summary: "A anatomia de um currículo que funciona em 2026.",
      tag: "Currículo"
    },
    {
      title: "Networking estratégico: qualidade sobre quantidade",
      summary: "Como criar conexões reais que geram oportunidades.",
      tag: "Networking"
    },
    {
      title: "Como se preparar para entrevistas comportamentais",
      summary: "O método STAR aplicado de forma prática e autêntica.",
      tag: "Entrevista"
    },
    {
      title: "Sinais de que é hora de mudar de emprego",
      summary: "Quando sair não é desistir, é estratégia.",
      tag: "Carreira"
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="conteudos" className="py-20 lg:py-28 bg-white bg-opacity-40">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-4">
            Conteúdos práticos para avançar na carreira
          </h2>
          <p className="text-lg text-[#403837] opacity-80">
            Ideias aplicáveis — direto ao ponto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-4 md:px-12 mb-8"
        >
          {/* Custom Navigation Arrows */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border-2 border-[#D8C3A5] text-[#A47552] hover:bg-[#A47552] hover:text-white hover:border-[#A47552] transition-all shadow-lg"
            aria-label="Previous content"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border-2 border-[#D8C3A5] text-[#A47552] hover:bg-[#A47552] hover:text-white hover:border-[#A47552] transition-all shadow-lg"
            aria-label="Next content"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {contents.map((content, index) => (
              <div key={index} className="px-3">
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
