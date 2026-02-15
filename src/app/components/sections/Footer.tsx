import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/leticiaindiani/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/leticiaindiani.carreira", label: "Instagram" },
    { icon: Mail, href: "mailto:contato@lriconsultoria.com.br", label: "E-mail" },
    { icon: MessageCircle, href: `https://wa.me/5512991406108?text=${encodeURIComponent("Olá, Letícia! 👋\nVim pelo site da LRI Consultoria e gostaria de saber mais sobre a mentoria de carreira.\nPodemos conversar?")}`, label: "WhatsApp" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#74685A] text-[#D9C2A3] pt-16 pb-8 lg:pt-20 lg:pb-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <img className="w-14 mb-4 brightness-200" src="./assets/logo/Logo.svg" alt="Logo LRI" />
            <p className="text-[#D9C2A3]/90 mb-3 leading-relaxed">
              Carreira não é acaso. É construção consciente.
            </p>
            <p className="text-sm text-[#D9C2A3]/50">
              Atendimento online • Brasil e exterior
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Navegação</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Serviços", href: "#servicos" },
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Conteúdos", href: "#conteudos" },
                { label: "Sobre", href: "#sobre" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm text-[#D9C2A3]/70 hover:text-[#C5A253] transition-colors py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact Column */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">Conecte-se</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#D9C2A3] hover:bg-[#C5A253] hover:text-white transition-all"
                    aria-label={link.label}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#D9C2A3]/50">
            © {currentYear} LRI Consultoria de Carreiras. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#D9C2A3]/40 hover:text-[#C5A253] transition-colors">
              Política de privacidade
            </a>
            <a href="#" className="text-xs text-[#D9C2A3]/40 hover:text-[#C5A253] transition-colors">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
