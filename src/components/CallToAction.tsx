
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const scrollToCards = () => {
    document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Готовы сделать подарок?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Подарочная карта Apple — отличный способ порадовать близких доступом к миллионам приложений, игр и развлечений.
        </p>
        <Button 
          className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-6 text-lg"
          onClick={scrollToCards}
        >
          Выбрать карту
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
