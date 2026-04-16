import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink as NavLinkType } from '../types';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLinkType[] = [
    { label: 'მთავარი', path: '/' },
    { label: 'ჩვენს შესახებ', path: '/about' },
    { label: 'მენიუ', path: '/menu' },
    { label: 'კონტაქტი', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Cafe Moon
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-gray-700 hover:text-orange-600 transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
        </button>
      </nav>

      {}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-orange-600 font-medium"
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