import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import CheckoutForm from "@/components/CheckoutForm";
import SuccessModal from "@/components/SuccessModal";

// Данные о доступных подарочных картах
const giftCards = [
  {
    id: 1,
    nominal: 1000,
    image:
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?q=80&w=1000",
    description: "Идеально для небольшого подарка",
  },
  {
    id: 2,
    nominal: 2500,
    image:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000",
    description: "Отличный выбор для большинства приложений и игр",
  },
  {
    id: 3,
    nominal: 5000,
    image:
      "https://images.unsplash.com/photo-1628519592419-bf1b675dd9a3?q=80&w=1000",
    description: "Для настоящих ценителей Apple экосистемы",
  },
];

// Шаги инструкции по использованию
const instructionSteps = [
  {
    id: 1,
    title: "Выберите номинал",
    description: "Выберите подарочную карту с подходящим номиналом",
    icon: "Gift",
  },
  {
    id: 2,
    title: "Оформите заказ",
    description: "Заполните контактные данные и оплатите покупку",
    icon: "CreditCard",
  },
  {
    id: 3,
    title: "Получите код",
    description: "Вы получите код карты на указанный email или SMS",
    icon: "Mail",
  },
];

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleBuyClick = () => {
    if (selectedCard) {
      setShowCheckout(true);
    }
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  const handleSuccessfulPurchase = () => {
    setShowCheckout(false);
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setSelectedCard(null);
  };

  const selectedCardData = selectedCard
    ? giftCards.find((card) => card.id === selectedCard) || null
    : null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Навигация */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center">
          <Icon name="Apple" className="h-6 w-6 text-black" />
          <span className="ml-2 font-medium">Apple Gift Card</span>
        </div>
        <div className="flex gap-6">
          <a
            href="#cards"
            className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
          >
            Карты
          </a>
          <a
            href="#instruction"
            className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
          >
            Инструкция
          </a>
        </div>
      </nav>

      {/* Главный баннер */}
      <section className="py-20 px-6 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Apple Gift Card
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8">
          Идеальный подарок для всех, кто любит приложения, игры, музыку и
          многое другое из экосистемы Apple.
        </p>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg"
          onClick={() =>
            document
              .getElementById("cards")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Выбрать карту
        </Button>
      </section>

      {/* Секция с карточками */}
      <section id="cards" className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Выберите номинал
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card
                key={card.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  selectedCard === card.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedCard(card.id)}
              >
                <div className="aspect-[5/3] relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={`Apple Gift Card ${card.nominal} ₽`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium mb-2">
                    {card.nominal} ₽
                  </h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <Button
                    className={`w-full ${
                      selectedCard === card.id
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                    onClick={() => setSelectedCard(card.id)}
                  >
                    {selectedCard === card.id ? "Выбрано" : "Выбрать"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedCard && (
            <div className="mt-8 flex justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
                onClick={handleBuyClick}
              >
                Купить сейчас
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Секция с инструкцией */}
      <section id="instruction" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Как это работает
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {instructionSteps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name={step.icon} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Готовы сделать подарок?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Подарочная карта Apple — отличный способ порадовать близких доступом
            к миллионам приложений, игр и развлечений.
          </p>
          <Button
            className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-8 py-6 text-lg"
            onClick={() =>
              document
                .getElementById("cards")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Выбрать карту
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 px-6 border-t border-gray-100 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Apple Gift Cards. Все права защищены.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Условия использования
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>

      {/* Модальное окно оформления заказа */}
      {showCheckout && selectedCardData && (
        <CheckoutForm
          selectedCard={selectedCardData}
          onClose={handleCloseCheckout}
          onSuccess={handleSuccessfulPurchase}
        />
      )}

      {/* Модальное окно успешной покупки */}
      {showSuccessModal && <SuccessModal onClose={handleCloseSuccessModal} />}
    </div>
  );
};

export default Index;
