import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description: string;
  price?: number;
}

const Card: React.FC<CardProps> = ({ title, image, description, price }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group transition-all duration-500 hover:shadow-xl">
    <div className="h-64 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      {price && <div className="absolute top-4 right-4 bg-[#3F2F24] text-white px-4 py-1 rounded-full font-bold">{price} ₾</div>}
    </div>
    <div className="p-8">
      <h3 className="text-xl font-bold text-[#3F2F24] mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
      <button className="text-xs font-bold uppercase tracking-widest border-b border-[#D4A373] pb-1 hover:text-[#D4A373] transition-colors">დაწვრილებით</button>
    </div>
  </div>
);
export default Card;