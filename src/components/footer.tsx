import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1717] text-[#FEFAE0]/70 py-12 border-t border-[#D4A373]/20">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl font-serif tracking-[0.4em] text-[#D4A373]">moon</div>
          <div className="w-12 h-[1px] bg-[#D4A373]/50"></div>
        </div>

        <div className="flex gap-6 text-xs uppercase tracking-widest mb-4">
          <a href="#" className="hover:text-[#D4A373]">Instagram</a>
          <a href="#" className="hover:text-[#D4A373]">Facebook</a>
        </div>

        <p className="text-[10px] tracking-widest uppercase opacity-50 text-center">
          &copy; {currentYear} moon Bakery & Cafe. დამზადებულია პრაქტიკული პროექტისთვის.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;