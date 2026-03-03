import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-6">
          Sobre a JSS Telecom
        </h1>

        <p className="text-lg text-muted-foreground mb-4">
          A JSS Telecom é uma empresa que está a 6 anos no mercado, 
          licenciada pela Anatel, voltada a inovação e serviços de qualidade 
          no ramo de internet em Osasco e região. Atualmente, nossa empresa encontra-se 
          em expansão, pois ampliamos nossa área de cobertura e agregamos novos serviços, 
          como sempre preocupados com nosso foco principal que é a satisfação de nossos clientes.
        </p>

        <p className="text-lg text-muted-foreground">
          Desde o início, estivemos em busca de melhorias tanto em tecnologia, 
          quanto na qualificação de nossa equipe. Todas as decisões sempre foram 
          tomadas com o objetivo de sermos reconhecidos regionalmente e por oferecer serviços de qualidade.
        </p>
      </main>

    <div>
      <WhatsAppButton />
    </div>

      <Footer />
    </div>
  );
};


export default Sobre;
