import { Wifi, Tv, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  /* Background 
  {
    icon: Tv,
    title: "TV Streaming",
    description: "Centenas de canais e conteúdo on-demand. Assista onde e quando quiser em qualquer dispositivo.",
    features: ["200+ canais", "HBO Max incluso", "Replay 7 dias", "4 telas simultâneas"],
    highlight: null,
  },
  */
  {
    icon: Wifi,
    title: "Internet Fibra",
    description: "Conexão ultra veloz com fibra óptica de última geração. Ideal para streaming, games e trabalho remoto.",
    features: ["Até 600 Mbps", "Baixa latência", "Wi-Fi grátis", "Instalação grátis"],
    highlight: "Mais Popular",
  },
  /* Background 
  {
    icon: Smartphone,
    title: "Planos Móvel",
    description: "Ligações ilimitadas e internet 5G com a melhor cobertura nacional. Leve sua conexão para onde for.",
    features: ["5G Ultra", "Ligações ilimitadas", "Apps ilimitados", "Roaming grátis"],
    highlight: null,
  },
    */
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Nossos Serviços</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Soluções completas para sua{" "}
            <span className="gradient-text">conectividade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos os melhores serviços de telecomunicação para você e sua família
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover p-8 relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-blue-500 to-violet-500 text-primary-foreground text-xs font-semibold">
                  {service.highlight}
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="planos">
              <Button variant="outline" className="w-full group/btn">
                Saiba Mais
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
