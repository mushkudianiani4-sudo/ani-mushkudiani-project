import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';

const Menu = () => {
  // 5.2: გვერდის სათაური
  useEffect(() => {
    document.title = 'მენიუ | Cafe Moon';
  }, []);

  // 5.1: ფილტრაციის ლოგიკა
  const [filter, setFilter] = useState<string>('all');

  const menuItems = [
    { id: 1, title: 'ესპრესო', price: '5.00 ₾', category: 'ყავა', desc: 'კლასიკური ძლიერი ყავა.', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80' },
    { id: 2, title: 'ჩიზქეიქი', price: '12.00 ₾', category: 'დესერტი', desc: 'ნიუ-იორკის სტილის დესერტი.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80' },
  ];

  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  return (
    <Section title="მენიუ">
      <div className="flex justify-center space-x-4 mb-12">
        {['all', 'ყავა', 'დესერტი'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === cat ? 'bg-orange-600 text-white' : 'bg-gray-100'
            }`}
          >
            {cat === 'all' ? 'ყველა' : cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredItems.map(item => (
          <Card key={item.id} title={item.title} image={item.img} description={item.desc} price={item.price} category={item.category} />
        ))}
      </div>
    </Section>
  );
};

export default Menu;