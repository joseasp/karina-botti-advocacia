import logoHeader from "@/assets/logoheader.png";
import { Instagram } from "lucide-react";

const footerCopy = {
  description:
    "Advocacia comprometida com a excelência técnica e ética profissional na defesa dos seus direitos.",
  navigationTitle: "Navegação",
  copyright:
    "Todos os direitos reservados.",
  compliance:
    "Este site está em conformidade com o Código de Ética e Disciplina da OAB.",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-dark text-paper py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
                <li>karinabottiadv@gmail.com</li>
                <li>(33) 99816-9207</li>
                <li>Conselheiro Pena – MG</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-paper-light mb-4">Redes Sociais</h4>
              <a
                href="https://www.instagram.com/karinabottiadv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-paper/70 hover:text-gold transition-colors group"
              >
                <Instagram className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                @karinabottiadv
              </a>
            </div>
          </div>

          <div className="border-t border-burgundy-medium pt-8">
            <p className="text-paper/60 text-sm">
              &copy; {currentYear} Karina Botti Advocacia. Todos os direitos reservados.
            </p>
            <p className="text-paper/60 text-sm mt-2">
              Criado por{" "}
              <a
                href="https://wa.me/5533998572879"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-200"
              >
                José Apolinário
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
