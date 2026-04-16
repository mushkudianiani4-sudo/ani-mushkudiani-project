// src/pages/About.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { aboutContent } from '../data';

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-24">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2F24] mb-4 tracking-tighter">
            {aboutContent.title}
          </h1>
          <div className="w-24 h-1 bg-[#D4A373] rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 bg-white p-10 rounded-3xl shadow-sm border border-gray-50">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4A373]/30 rounded-3xl z-0"></div>
            <img 
              src={aboutContent.imageUrl} 
              alt="Moon Café Story" 
              className="relative z-10 rounded-3xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <p className="text-gray-600 leading-relaxed text-lg italic mb-8 font-light">
              "{aboutContent.description}"
            </p>
            <button className="text-[#3F2F24] font-bold border-b border-[#D4A373] pb-1 hover:text-[#D4A373] transition-colors uppercase tracking-widest text-xs">
              სრული მენიუს ნახვა
            </button>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default About;