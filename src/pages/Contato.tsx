import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24">
        {/* Título */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            <Phone className="w-4 h-4" />
            Contato
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fale <span className="gradient-text">Conosco</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Estamos aqui para ajudar. Entre em contato e nossa equipe
            responderá em breve.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Informações */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Informações de Contato
            </h2>

            <div className="space-y-4">
              <InfoCard
                icon={<Phone />}
                title="Telefone"
                value="(11) 5198-8001"
              />

              <InfoCard
                icon={<MessageCircle />}
                title="WhatsApp"
                value="(11) 5198-8001"
              />

              <InfoCard
                icon={<Mail />}
                title="E-mail"
                value="contatojsstelecom@gmail.com"
              />

              <InfoCard
                icon={<MapPin />}
                title="Endereço"
                value="São Paulo - SP - Brasil"
              />
            </div>
          </div>

          {/* Formulário */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Envie sua Mensagem
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-lg bg-background border border-border px-4 py-3 outline-none focus:border-primary"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full rounded-lg bg-background border border-border px-4 py-3 outline-none focus:border-primary"
                />

                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full rounded-lg bg-background border border-border px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              <textarea
                placeholder="Sua mensagem"
                rows={4}
                className="w-full rounded-lg bg-background border border-border px-4 py-3 outline-none focus:border-primary resize-none"
              />
  
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-emerald-600 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </main>

    <div>
      <WhatsAppButton />
    </div>

      <Footer />
    </div>
  );
};

const InfoCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-center gap-4 glass-card rounded-xl p-5">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      {icon}
    </div>

    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default Contato;
