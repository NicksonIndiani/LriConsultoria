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

export default function App() {
  return (
    <div className="min-h-screen bg-[#D9C2A3]">
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
      <FloatingWhatsApp />
    </div>
  );
}
