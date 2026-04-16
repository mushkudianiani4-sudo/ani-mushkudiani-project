const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {}
        <div>
          <h3 className="text-xl font-bold mb-4">კონტაქტი</h3>
          <p className="text-gray-400">მისამართი: ქუთაისი</p>
          <p className="text-gray-400">ტელ: +995 555 12 34 56</p>
          <p className="text-gray-400">ელ-ფოსტა: info@cafemoon.ge</p>
        </div>

        {}
        <div>
          <h3 className="text-xl font-bold mb-4">მოგვყევით</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
          </div>
        </div>

        {}
        <div>
          <h3 className="text-xl font-bold mb-4">Cafe Moon</h3>
          <p className="text-gray-400">
            © {new Date().getFullYear()} ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;