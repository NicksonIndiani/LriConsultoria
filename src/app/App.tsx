import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { ParaQuemE } from "./components/sections/ParaQuemE";
import { Servicos } from "./components/sections/Servicos";
import { ComoFunciona } from "./components/sections/ComoFunciona";
import { Beneficios } from "./components/sections/Beneficios";
import { Depoimentos } from "./components/sections/Depoimentos";
import { Conteudos } from "./components/sections/Conteudos";
import { Sobre } from "./components/sections/Sobre";
import { FAQ } from "./components/sections/FAQ";
import { CTAFinal } from "./components/sections/CTAFinal";
import { Footer } from "./components/sections/Footer";
import { FloatingWhatsApp } from "./components/sections/FloatingWhatsApp";
import { StarsBackground } from "./components/common/StarsBackground";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg">
      <StarsBackground
        starColor="#A47552"
        starCount={90}
        speed={0.3}
        factor={0.04}
        className="fixed inset-0 z-0"
      />

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <ParaQuemE />
          <Servicos />
          <ComoFunciona />
          <Beneficios />
          <Depoimentos />
          <Conteudos />
          <Sobre />
          <FAQ />
          <CTAFinal />
        </main>

        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  );
}
