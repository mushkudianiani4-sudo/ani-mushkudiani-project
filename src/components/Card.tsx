import Badge from './Badge';

interface CardProps {
  title: string;
  image: string;
  description: string;
  price: number;
  category?: string;
}

const Card = ({ title, image, description, price, category }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#C3B1E1]/20 hover:shadow-xl transition-all duration-500 group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        {category && (
          <div className="absolute top-4 left-4">
            <Badge text={category} />
          </div>
        )}
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-[#4A0E4E] tracking-tight">{title}</h3>
          <span className="text-lg font-black text-[#4A0E4E]">{price} ₾</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
          {description}
        </p>
        <button className="w-full py-3 text-xs font-bold uppercase tracking-[0.2em] border-b border-[#4A0E4E] text-[#4A0E4E] hover:text-[#C3B1E1] hover:border-[#C3B1E1] transition-all">
          აღმოაჩინე მეტი
        </button>
      </div>
    </div>
  );
};

export default Card;