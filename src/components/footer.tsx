const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10 mt-auto">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">კონტაქტი</h3>
          <p className="text-zinc-400">თბილისი, თავისუფლების მოედანი #2</p>
          <p className="text-zinc-400">ტელ: +995 555 12 34 56</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">სოც. ქსელები</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400 transition">Instagram</a>
            <a href="#" className="hover:text-orange-400 transition">Facebook</a>
          </div>
        </div>
        <div className="flex items-end">
          <p className="text-zinc-500 text-sm">
            © 2026 Cafe Aurora. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;