
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
      <div className="flex items-center">
        <Icon name="Apple" className="h-6 w-6 text-black" />
        <span className="ml-2 font-medium">Apple Gift Card</span>
      </div>
      <div className="flex gap-6">
        <a href="#cards" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Карты</a>
        <a href="#instruction" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Инструкция</a>
      </div>
    </nav>
  );
};

export default Navigation;
