import { useRef } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ContentCard } from "../common/ContentCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Conteudos() {
  const sliderRef = useRef<Slider>(null);

  const contents = [
    {
      title: "O que o mercado realmente espera de quem está no início da carreira?",
      summary: "Não é alguém pronto. O mercado busca iniciantes que saibam onde querem chegar e consigam se posicionar com clareza.",
      tag: "Mercado",
      platform: "linkedin" as const,
      link: "https://www.linkedin.com/posts/leticiaindiani_como-analisar-o-mercado-e-entender-onde-o-activity-7426580925104185344-iJ0M"
    },
    {
      title: "Como analisar o mercado e entender onde o seu perfil se encaixa",
      summary: "Analisar o mercado é cruzar o que as empresas pedem, o que você já construiu e onde existe espaço real para evolução.",
      tag: "Posicionamento",
      platform: "linkedin" as const,
      link: "https://www.linkedin.com/posts/leticiaindiani_como-analisar-o-mercado-e-entender-onde-o-activity-7426580925104185344-iJ0M"
    },
    {
      title: "Employee Experience (EX): o que isso tem a ver com a sua carreira?",
      summary: "Profissionais maduros aprendem a escolher ambientes, não apenas cargos. Entender EX é uma habilidade estratégica.",
      tag: "Cultura",
      platform: "linkedin" as const,
      link: "https://www.linkedin.com/posts/leticiaindiani_employeeexperience-ex-carreira-activity-7419682766415646720-LMvO"
    },
    {
      title: "Metas com Clareza: menos promessa, mais progresso",
      summary: "Metas práticas e realistas usando a técnica SMART. Comece com passos pequenos, ajuste quando necessário e celebre cada conquista.",
      tag: "Metas",
      platform: "linkedin" as const,
      link: "https://www.linkedin.com/posts/leticiaindiani_metas-com-clareza-menos-promessa-mais-activity-7417333554055065600-MIvy"
    },
    {
      title: "Alta performance e o fator humano que a sustenta",
      summary: "Engajamento e satisfação não são apenas ideias do RH — são métricas analíticas com impacto direto no financeiro e no operacional.",
      tag: "Cultura",
      platform: "linkedin" as const,
      link: "https://www.linkedin.com/posts/leticiaindiani_engajamentoestrataezgico-satisfaaexaetonotrabalho-activity-7386535573425033216-YRKv"
    },
    {
      title: "Dia Mundial de Conscientização sobre o Autismo e o mercado de trabalho",
      summary: "85% dos adultos autistas estão desempregados. A inclusão vai muito além da contratação — times diversos são mais inovadores.",
      tag: "Inclusão",
      platform: "linkedin" as const,
      link: "https://www.linkedin.com/posts/leticiaindiani_hoje-2-de-abril-%C3%A9-o-dia-mundial-de-conscientiza%C3%A7%C3%A3o-activity-7313317731083153408-ePz0"
    },
    {
      title: "Planejamento de Carreira: Comece pelo Autoconhecimento",
      summary: "Alinhar o estudo de mercado com o autoconhecimento ajuda a identificar oportunidades que se conectam ao seu propósito.",
      tag: "Autoconhecimento",
      platform: "linkedin" as const,
      link: "https://www.linkedin.com/posts/leticiaindiani_planejamento-de-carreira-comece-pelo-autoconhecimento-activity-7256779874491621376--EyI"
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
      }
    ]
  };

  return (
    <section id="conteudos" className="py-14 md:py-20 lg:py-28 relative bg-[#F5EDE3]">
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

        {/* Mobile: scroll nativo com snap */}
        <div className="md:hidden mb-10">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide">
            {contents.map((content, index) => (
              <div key={index} className="snap-center shrink-0 w-[80vw]">
                <ContentCard {...content} />
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
          className="relative px-14 mb-10 hidden md:block"
        >
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="flex absolute -left-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#D8C3A5]/60 text-[#A47552] hover:bg-[#A47552] hover:text-white hover:border-[#A47552] transition-all shadow-md"
            aria-label="Previous content"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="flex absolute -right-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-[#D8C3A5]/60 text-[#A47552] hover:bg-[#A47552] hover:text-white hover:border-[#A47552] transition-all shadow-md"
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

      </div>
    </section>
  );
}
