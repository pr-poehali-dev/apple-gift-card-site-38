
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CheckoutForm from "./CheckoutForm";
import SuccessModal from "./SuccessModal";
import { GiftCard } from "@/types/giftCard";

// Данные о доступных подарочных картах
export const giftCards: GiftCard[] = [
  {
    id: 1,
    nominal: 1000,
    image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?q=80&w=1000",
    description: "Идеально для небольшого подарка",
  },
  {
    id: 2,
    nominal: 2500,
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000",
    description: "Отличный выбор для большинства приложений и игр",
  },
  {
    id: 3,
    nominal: 5000,
    image: "https://images.unsplash.com/photo-1628519592419-bf1b675dd9a3?q=80&w=1000",
    description: "Для настоящих ценителей Apple экосистемы",
  },
];

const GiftCardSection = () => {
  const [selectedCard, setSelectedCard] = useState<GiftCard | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCardSelect = (card: GiftCard) => {
    setSelectedCard(card);
  };

  const handleBuyNow = () => {
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  const handleCheckoutSuccess = () => {
    setShowCheckout(false);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setSelectedCard(null);
  };

  return (
    <>
      <section id="cards" className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Выберите номинал</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card 
                key={card.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  selectedCard?.id === card.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => handleCardSelect(card)}
              >
                <div className="aspect-[5/3] relative overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={`Apple Gift Card ${card.nominal} ₽`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium mb-2">{card.nominal} ₽</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  {selectedCard?.id === card.id ? (
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={handleBuyNow}
                    >
                      Купить сейчас
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900"
                      onClick={() => handleCardSelect(card)}
                    >
                      Выбрать
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showCheckout && (
        <CheckoutForm 
          selectedCard={selectedCard} 
          onClose={handleCloseCheckout} 
          onSuccess={handleCheckoutSuccess} 
        />
      )}

      {showSuccess && (
        <SuccessModal onClose={handleCloseSuccess} />
      )}
    </>
  );
};

export default GiftCardSection;
