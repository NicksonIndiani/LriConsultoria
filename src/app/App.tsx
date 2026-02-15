import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ParaQuemE } from "./components/ParaQuemE";
import { Servicos } from "./components/Servicos";
import { ComoFunciona } from "./components/ComoFunciona";
import { Beneficios } from "./components/Beneficios";
import { Depoimentos } from "./components/Depoimentos";
import { Conteudos } from "./components/Conteudos";
import { Sobre } from "./components/Sobre";
import { FAQ } from "./components/FAQ";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

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
