import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  // Блокировка прокрутки при открытии модального окна
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <Card className="w-full max-w-md bg-white rounded-xl overflow-hidden shadow-2xl p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Icon name="Check" className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Спасибо за покупку!</h2>
        <p className="text-gray-600 mb-6">
          Код подарочной карты был отправлен на указанный вами адрес электронной
          почты.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-500 mb-1">Как активировать карту:</p>
          <ol className="text-sm text-left space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600 font-medium">1.</span>
              <span>
                Откройте App Store или iTunes Store на своем устройстве
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600 font-medium">2.</span>
              <span>
                Нажмите на свой аватар и выберите "Погасить подарочную карту или
                код"
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600 font-medium">3.</span>
              <span>Введите полученный код и нажмите "Погасить"</span>
            </li>
          </ol>
        </div>

        <Button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Вернуться на сайт
        </Button>
      </Card>
    </div>
  );
};

export default SuccessModal;
