import { useState } from 'react';
import { Link } from 'react-router-dom';
import { INavLink } from '../types';

interface HeaderProps {
  links: INavLink[];
}

const Header = ({ links }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ლოგო */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          ☕ Cafe Aurora
        </Link>
        
        {/* დესკტოპ მენიუ */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="font-medium hover:text-orange-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* მობილური მენიუს ღილაკი (Hamburger) */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* მობილური მენიუ (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col space-y-4 shadow-lg">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold border-b pb-2"
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