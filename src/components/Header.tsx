import { useState } from "react";
import { Menu, X, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Planos", href: "planos" },
    { label: "Serviços", href: "servico" },
    { label: "Sobre", href: "sobre" },
    { label: "Contato", href: "contato" },
    { label: "Area do Cliente", href: "https://jsstelecom.com.br/central_assinante_web/login" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/"><img
            src="/logo-jss-350.webp"
            alt="JSS Telecom"
            className="h-10 w-auto"
          />
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://api.whatsapp.com/send/?phone=551151988001&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos+da+JSSTelecom.&type=phone_number&app_absent=0">
            <Button variant="hero" size="lg">
              Assine Agora
            </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="https://api.whatsapp.com/send/?phone=551151988001&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos+da+JSSTELECOM.&type=phone_number&app_absent=0">
              <Button variant="hero" size="lg" className="mt-4">
                Assine Agora
              </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
