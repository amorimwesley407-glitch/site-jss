import { Wifi, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-card/50 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
          <img
            src="/logo-jss-350.webp"
            alt="JSS Telecom"
            className="h-10 w-auto"
          />
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Conectando pessoas e transformando vidas através da tecnologia.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/JSS-Telecom/61558592190500/#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              {/* Background Effects 
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="index" className="text-muted-foreground hover:text-primary transition-colors text-sm">Início</a></li>
              <li><a href="servico" className="text-muted-foreground hover:text-primary transition-colors text-sm">Serviços</a></li>
              <li><a href="planos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Planos</a></li>
              <li><a href="sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="https://jsstelecom.com.br/central_assinante_web/login" className="text-muted-foreground hover:text-primary transition-colors text-sm">Área do Cliente</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="servico" className="text-muted-foreground hover:text-primary transition-colors text-sm">Internet Fibra</a></li>
              <li><a href="servico" className="text-muted-foreground hover:text-primary transition-colors text-sm">Planos Gamer</a></li>
              <li><a href="servico" className="text-muted-foreground hover:text-primary transition-colors text-sm">Turbo</a></li>
              <li><a href="servico" className="text-muted-foreground hover:text-primary transition-colors text-sm">Combos</a></li>
              <li><a href="servico" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home Office</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://api.whatsapp.com/send/?phone=551151988001&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos+da+JSSTelecom.&type=phone_number&app_absent=0">
                  <p className="text-sm font-medium">Central de Vendas</p>
                  <p className="text-muted-foreground text-sm">(11) 5198-8001</p>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">E-mail</p>
                  <p className="text-muted-foreground text-sm">contatojsstelecom@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://maps.app.goo.gl/rf3xciy77wFMx8iM9">
                  <p className="text-sm font-medium">Endereço</p>
                  <p className="text-muted-foreground text-sm">R. Cel. Carlos Ambrogi, 389<br />São Paulo - SP</p>
                  </a>                
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 JSS TELECOM. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            JSS Telecom LTDA – CNPJ 48.311.016/0001-41 Seg a Sex – 8h às 17h | Sáb – 8h às 12h
          </p>
          <div className="flex gap-6">
            <a href="https://policies.google.com/terms?hl=pt-BR" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="https://policies.google.com/privacy?hl=pt-BR" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacidade
            </a>
            <a href="https://policies.google.com/technologies/cookies?hl=pt-BR" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
