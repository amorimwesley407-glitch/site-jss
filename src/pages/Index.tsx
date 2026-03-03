import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Plans />
      <WhyChooseUs />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
