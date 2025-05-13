import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

interface CheckoutFormProps {
  selectedCard: {
    id: number;
    nominal: number;
    image: string;
    description: string;
  } | null;
  onClose: () => void;
  onSuccess: () => void;
}

const CheckoutForm = ({
  selectedCard,
  onClose,
  onSuccess,
}: CheckoutFormProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    deliveryMethod: "email",
    paymentMethod: "card",
  });

  // Блокировка прокрутки при открытии модального окна
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStepValid = () => {
    if (step === 1) {
      return (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.phone
      );
    }
    if (step === 2) {
      return formData.deliveryMethod;
    }
    return formData.paymentMethod;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => (prev === 1 ? 2 : 3) as 1 | 2 | 3);
    } else {
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }
  };

  if (!selectedCard) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <Card className="w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Оформление заказа</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Icon name="X" className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex items-center justify-center rounded-full h-8 w-8 text-sm font-medium ${
                    s === step
                      ? "bg-blue-600 text-white"
                      : s < step
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {s < step ? <Icon name="Check" className="h-4 w-4" /> : s}
                </div>
                <div
                  className={`ml-2 text-sm ${s === step ? "text-black font-medium" : "text-gray-500"}`}
                >
                  {s === 1
                    ? "Контактные данные"
                    : s === 2
                      ? "Способ доставки"
                      : "Оплата"}
                </div>
                {s < 3 && (
                  <div className="mx-2 border-t border-gray-200 w-8 sm:w-12 md:w-16"></div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Ваша фамилия"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Выберите способ получения подарочной карты:
                </p>
                <RadioGroup
                  value={formData.deliveryMethod}
                  onValueChange={(value) =>
                    handleRadioChange("deliveryMethod", value)
                  }
                >
                  <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="email" id="email-delivery" />
                    <Label
                      htmlFor="email-delivery"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-500">
                        Получите код моментально на указанный email
                      </div>
                    </Label>
                    <Icon name="Mail" className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="sms" id="sms-delivery" />
                    <Label
                      htmlFor="sms-delivery"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="font-medium">SMS</div>
                      <div className="text-sm text-gray-500">
                        Получите код моментально на указанный телефон
                      </div>
                    </Label>
                    <Icon
                      name="MessageSquare"
                      className="h-5 w-5 text-gray-400"
                    />
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">Выберите способ оплаты:</p>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) =>
                    handleRadioChange("paymentMethod", value)
                  }
                >
                  <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="card" id="card-payment" />
                    <Label
                      htmlFor="card-payment"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="font-medium">Банковская карта</div>
                      <div className="text-sm text-gray-500">
                        Visa, MasterCard, Мир
                      </div>
                    </Label>
                    <div className="flex space-x-1">
                      <Icon
                        name="CreditCard"
                        className="h-5 w-5 text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="apple-pay" id="apple-pay" />
                    <Label
                      htmlFor="apple-pay"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="font-medium">Apple Pay</div>
                      <div className="text-sm text-gray-500">
                        Быстрая оплата через Apple Pay
                      </div>
                    </Label>
                    <Icon name="Apple" className="h-5 w-5 text-gray-700" />
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-medium mb-4">Сводка заказа</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={selectedCard.image}
                  alt={`Apple Gift Card ${selectedCard.nominal} ₽`}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="font-medium">Apple Gift Card</h4>
                  <p className="text-gray-600">{selectedCard.nominal} ₽</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Подарочная карта:</span>
                  <span>{selectedCard.nominal} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Доставка:</span>
                  <span>Бесплатно</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Итого:</span>
                  <span>{selectedCard.nominal} ₽</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4 justify-between">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    setStep((prev) => (prev === 3 ? 2 : 1) as 1 | 2 | 3)
                  }
                >
                  Назад
                </Button>
              ) : (
                <Button type="button" variant="outline" onClick={onClose}>
                  Отмена
                </Button>
              )}
              <Button
                type="submit"
                disabled={!isStepValid()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {step === 3 ? "Оплатить" : "Продолжить"}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default CheckoutForm;
