import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-600">Cafe Moon</Link>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-gray-700 hover:text-orange-600 hover:underline font-medium transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className="text-gray-700 hover:text-orange-600 hover:underline transition-colors"
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