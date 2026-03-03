import { Award, Users, Headphones, TrendingUp } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Tecnologia de Ponta",
    description: "Investimos constantemente em infraestrutura para oferecer a melhor experiência de conexão.",
    stat: "600 Mbps",
    statLabel: "Velocidade máxima",
  },
  {
    icon: Users,
    title: "Satisfação",
    description: "Milhares de famílias confiam em nós para manter suas casas conectadas todos os dias.",
    stat: "99%",
    statLabel: "Gratifação",
  },
  {
    icon: Award,
    title: "Melhor Custo-Benefício",
    description: "Planos completos com preços justos e transparentes, sem surpresas na fatura.",
    stat: "4,5★",
    statLabel: "Avaliação média",
  },
  {
    icon: Headphones,
    title: "Suporte Humanizado",
    description: "Equipe técnica especializada disponível 24/7 para resolver qualquer problema.",
    stat: "< 5min",
    statLabel: "Tempo de resposta",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Por que nos escolher</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            A escolha certa para sua{" "}
            <span className="gradient-text">conexão</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mais do que velocidade, oferecemos qualidade, confiança e um atendimento que faz a diferença
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card-hover p-6 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Stat */}
              <div className="mb-4">
                <p className="text-3xl font-display font-bold gradient-text">{feature.stat}</p>
                <p className="text-xs text-muted-foreground">{feature.statLabel}</p>
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
