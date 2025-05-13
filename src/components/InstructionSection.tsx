
import Icon from "@/components/ui/icon";
import { InstructionStep } from "@/types/instruction";

// Шаги инструкции по использованию
export const instructionSteps: InstructionStep[] = [
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

const InstructionSection = () => {
  return (
    <section id="instruction" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Как это работает</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {instructionSteps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
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
  );
};

export default InstructionSection;
