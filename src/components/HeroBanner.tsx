
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  const scrollToCards = () => {
    document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
        Apple Gift Card
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8">
        Идеальный подарок для всех, кто любит приложения, игры, музыку и многое другое из экосистемы Apple.
      </p>
      <Button 
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg"
        onClick={scrollToCards}
      >
        Выбрать карту
      </Button>
    </section>
  );
};

export default HeroBanner;
