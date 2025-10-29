import logoHeader from "@/assets/logoheader.png";

const footerCopy = {
  description:
    "Advocacia comprometida com a excel\u00EAncia t\u00E9cnica e \u00E9tica profissional na defesa dos seus direitos.",
  navigationTitle: "Navega\u00E7\u00E3o",
  copyright:
    "Todos os direitos reservados.",
  compliance:
    "Este site est\u00E1 em conformidade com o C\u00F3digo de \u00C9tica e Disciplina da OAB.",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-dark text-paper py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={logoHeader}
                  alt="Karina Botti Advocacia"
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-paper/70 text-sm leading-relaxed">
                {footerCopy.description}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-paper-light mb-4">
                {footerCopy.navigationTitle}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#areas"
                    className="text-paper/70 hover:text-gold transition-colors"
                  >
                    \u00C1reas de Atua\u00E7\u00E3o
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencia"
                    className="text-paper/70 hover:text-gold transition-colors"
                  >
                    Experi\u00EAncia
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-paper/70 hover:text-gold transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-paper/70 hover:text-gold transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-paper-light mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-paper/70">
                <li>OAB/MG 111.637</li>
                <li>karinabottiadv@gmail.com</li>
                <li>(33) 99816-9207</li>
                <li>Conselheiro Pena \u2013 MG</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-burgundy-medium pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-paper/60 text-sm text-center md:text-left">
                \u00A9 {currentYear} Karina Botti Advocacia. {footerCopy.copyright}
              </p>
              <p className="text-paper/60 text-xs text-center md:text-right">
                {footerCopy.compliance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
