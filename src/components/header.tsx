import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface Navlink {
  label: string;
  path: string;
}

interface HeaderProps {
  links: Navlink[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2D2424] text-[#FEFAE0] shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-[#D4A373] rounded-full flex items-center justify-center text-lg font-serif group-hover:bg-[#D4A373] group-hover:text-[#2D2424] transition-all">
            M
          </div>
          <span className="tracking-[0.3em] text-xl font-light italic">MOON</span>
        </Link>

        <nav className="hidden md:flex gap-10 items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-xs uppercase tracking-widest hover:text-[#D4A373] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-[#D4A373]" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#3D3030] border-t border-white/5 shadow-2xl">
          <nav className="flex flex-col p-8 gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-lg tracking-widest border-b border-white/5 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;