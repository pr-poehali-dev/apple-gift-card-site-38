import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import GiftCardSection from "@/components/GiftCardSection";
import InstructionSection from "@/components/InstructionSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <HeroBanner />
      <GiftCardSection />
      <InstructionSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
