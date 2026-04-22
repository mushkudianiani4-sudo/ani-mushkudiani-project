import { ReactNode } from 'react';
import Header from '../components/Header';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-sm md:text-base scroll-smooth">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-900 text-white py-10 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-orange-500">Cafe Moon</h3>
            <p className="text-gray-400 mt-2">საუკეთესო ყავა და დესერტები ქუთაისში</p>
          </div>
          <div className="border-t border-gray-800 pt-6 text-sm text-gray-500">
            © 2026 Cafe Moon. ყველა უფლება დაცულია.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;