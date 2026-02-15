import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "[LINK_LINKEDIN]", label: "LinkedIn" },
    { icon: Instagram, href: "[LINK_INSTAGRAM]", label: "Instagram" },
    { icon: Mail, href: "mailto:[EMAIL]", label: "E-mail" },
    { icon: MessageCircle, href: "https://wa.me/[NUMERO]", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-[#74685A] text-[#D9C2A3] py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              LRI Consultoria de Carreiras
            </h3>
            <p className="text-[#D9C2A3] opacity-90 mb-4">
              Carreira não é acaso. É construção consciente.
            </p>
            <p className="text-sm text-[#D9C2A3] opacity-70">
              Atendimento online • Brasil e exterior
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Conecte-se</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#D9C2A3] hover:text-[#C5A253] transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-[#D9C2A3] hover:text-[#C5A253] transition-colors text-sm"
              >
                Política de privacidade
              </a>
              <a
                href="#"
                className="block text-[#D9C2A3] hover:text-[#C5A253] transition-colors text-sm"
              >
                Termos de uso
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8A785D] pt-8">
          <p className="text-center text-sm text-[#D9C2A3] opacity-70">
            © {currentYear} LRI Consultoria de Carreiras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
