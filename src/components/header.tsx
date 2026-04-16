// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../types'; // იმპორტი ახალი სახელით

const Header = () => {
  // 5.1 ნაბიჯის მოთხოვნა: მობილური მენიუს სთეითი
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ნავიგაციის მასივი NavItem ტიპით
  const navLinks: NavItem[] = [
    { label: 'მთავარი', path: '/' },
    { label: 'ჩვენს შესახებ', path: '/about' },
    { label: 'მენიუ', path: '/menu' },
    { label: 'კონტაქტი', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - 4.1 ნაბიჯი */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Cafe Moon
        </Link>

        {/* Desktop Menu - ჩანს მხოლოდ md ეკრანზე */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button - ჩანს მხოლოდ პატარა ეკრანზე */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu Logic */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 shadow-inner">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-orange-600 font-medium block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;