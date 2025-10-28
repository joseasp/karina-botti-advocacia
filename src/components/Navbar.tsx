import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-burgundy-dark/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-paper-light tracking-tight">
                Karina Botti
              </span>
              <span className="text-xs text-gold tracking-widest uppercase">
                Advocacia
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-paper-light hover:text-gold transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-burgundy-dark transition-all duration-300"
              asChild
            >
              <a href="#contato">Fale Conosco</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-paper-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-burgundy-dark/98 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-paper-light hover:text-gold transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="w-full border-gold text-gold hover:bg-gold hover:text-burgundy-dark"
              asChild
            >
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
