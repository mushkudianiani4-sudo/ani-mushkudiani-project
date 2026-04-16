import Button from './Button';
import Badge from './Badge';

interface CardProps {
  title: string;
  image: string;
  description: string;
  price?: string;
  category?: string;
}

const Card = ({ title, image, description, price, category }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      {}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {category && (
          <div className="absolute top-4 left-4">
            <Badge text={category} />
          </div>
        )}
      </div>

      {}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          {price && <span className="text-orange-600 font-bold">{price}</span>}
        </div>
        
        <p className="text-gray-600 text-sm mb-6 flex-grow">
          {description}
        </p>

        <Button label="დაწვრილებით" variant="outline" />
      </div>
    </div>
  );
};

export default Card;