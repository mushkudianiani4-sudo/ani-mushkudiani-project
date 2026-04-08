import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { navLinks } from '../data';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      <Header links={navLinks} />
      <main className="flex-grow">
        {/* დამატებულია fade-in ეფექტი შიგთავსისთვის */}
        <div className="animate-fadeIn">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;