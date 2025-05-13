
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-100 text-sm text-gray-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          © {currentYear} Apple Gift Cards. Все права защищены.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Условия использования</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
