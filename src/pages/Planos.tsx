import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Turbo",
    speed: "50 Mbps",
    price: "59",
    features: [
      "Internet Fibra 50 Mbps",
      "Wi-Fi Grátis",
      "Instalação grátis",
      "Suporte 24/7",
    ],
    popular: false,
  },
  {
    name: "Plano Gamer",
    speed: "600 Mbps",
    price: "139",
    features: [
      "Internet Fibra 600 Mbps",
      "Wi-Fi Grátis",
      "Sem limites",
      "Instalação grátis",
      "Telefonia Fixa",
    ],
    popular: true,
  },
    {
    name: "Familia",
    speed: "200 Mbps",
    price: "79",
    features: [
      "Internet Fibra 200 Mbps",
      "Wi-Fi Grátis",
      "Instalação grátis",
      "Suporte 24/7",
    ],
    popular: false,
  },
  {
    name: "Home Office",
    speed: "400 Mbps",
    price: "99",
    features: [
      "Internet Fibra 200 Mbps",
      "Wi-Fi Grátis",
      "Instalação grátis",
      "Suporte 24/7",
    ],
    popular: false,
  },
];

const Planos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">
              Planos e Preços
            </p>

            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Escolha o plano{" "}
              <span className="gradient-text">ideal para você</span>
            </h1>

            <p className="text-muted-foreground text-lg">
              Planos flexíveis que se adaptam às suas necessidades.
              Sem fidelidade.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "glass-card border-primary/50 scale-105 shadow-2xl"
                    : "glass-card hover:border-primary/30"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-primary via-blue-500 to-violet-500 text-primary-foreground text-sm font-semibold shadow-lg">
                    Mais Escolhido
                  </div>
                )}

                {/* Info */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-display font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-4">
                    {plan.speed}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-muted-foreground">R$</span>
                    <span className="text-5xl font-display font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="https://api.whatsapp.com/send/?phone=551151988001&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos+da+JSSTelecom.&type=phone_number&app_absent=0"><Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Assinar Agora
                </Button>
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-12">
            Todos os planos incluem instalação gratuita e não possuem
            fidelidade. Consulte disponibilidade na sua região.
          </p>
        </div>
      </section>

    <div>
      <WhatsAppButton />
    </div>

      <Footer />
    </div>
  );
};

export default Planos;
