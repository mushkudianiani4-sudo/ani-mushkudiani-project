import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { INavLink } from '../types';


const navLinks: INavLink[] = [
  { label: 'მთავარი', path: '/' },
  { label: 'მენიუ', path: '/menu' },
  { label: 'კონტაქტი', path: '/contact' },
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header links={navLinks} />
      {}
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;