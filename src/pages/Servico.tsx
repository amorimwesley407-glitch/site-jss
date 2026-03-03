import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wifi, Tv, Smartphone, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
const services = [
 /* Background 
  {
    icon: Tv,
    title: "TV Streaming",
    description:
      "Entretenimento completo com centenas de canais e conteúdos sob demanda para toda a família.",
    features: [
      "200+ canais HD",
      "HBO Max incluso",
      "Replay de até 7 dias",
      "4 telas simultâneas",
      "Compatível com Smart TVs",
    ],
    highlight: null,
  },
  */ 
  {
    icon: Wifi,
    title: "Internet Fibra",
    description:
      "Conexão ultra veloz com fibra óptica de última geração, perfeita para streaming, games e trabalho remoto.",
    features: [
      "Até 600 Mbps de velocidade",
      "Baixa latência para games",
      "Wi-Fi grátis",
      "Instalação 100% grátis",
      "Suporte técnico 24/7",
    ],
    highlight: "Mais Popular",
  },
   /* Background 
  {
    icon: Smartphone,
    title: "Planos Móvel",
    description:
      "Mobilidade total com internet 5G, ligações ilimitadas e a melhor cobertura nacional.",
    features: [
      "Internet 5G Ultra",
      "Ligações ilimitadas",
      "Apps sem descontar da franquia",
      "Roaming nacional grátis",
      "Portabilidade sem custo",
    ],
    highlight: null,
  },
   */ 
];

const ServicesPage = () => {
  return (
    <>
      <Header />

      <section id="servicos" className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Nossos Serviços</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Soluções completas para sua{" "}
              <span className="gradient-text">conectividade</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tecnologia, estabilidade e suporte de verdade para você, sua casa
              e seu negócio.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative glass-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Highlight */}
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-primary via-blue-500 to-violet-500 text-primary-foreground text-xs font-semibold shadow-lg">
                    {service.highlight}
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="planos">
                <Button variant="outline" size="lg" className="w-full group">
                  Contratar Serviço
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                </a>
              </div>
            ))}
          </div>

          {/* Footer text */}
          <p className="text-center text-muted-foreground text-sm mt-16">
            Consulte disponibilidade dos serviços na sua região.
          </p>
        </div>
      </section>

    <div>
      <WhatsAppButton />
    </div>

      <Footer />
    </>
  );
};

export default ServicesPage;
