import { Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-dark text-paper py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-8 w-8 text-gold" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-paper-light">
                    Karina Botti
                  </h3>
                  <p className="text-xs text-gold uppercase tracking-wider">
                    Advocacia
                  </p>
                </div>
              </div>
              <p className="text-paper/70 text-sm leading-relaxed">
                Advocacia comprometida com a excelência técnica e ética
                profissional na defesa dos seus direitos.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-paper-light mb-4">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#areas"
                    className="text-paper/70 hover:text-gold transition-colors"
                  >
                    Áreas de Atuação
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencia"
                    className="text-paper/70 hover:text-gold transition-colors"
                  >
                    Experiência
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
                <li>contato@karinabotti.adv.br</li>
                <li>(31) 99999-9999</li>
                <li>Ipatinga, MG</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-burgundy-medium pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-paper/60 text-sm text-center md:text-left">
                © {currentYear} Karina Botti Advocacia. Todos os direitos
                reservados.
              </p>
              <p className="text-paper/60 text-xs text-center md:text-right">
                Este site está em conformidade com o Código de Ética e
                Disciplina da OAB
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
