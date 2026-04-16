import Section from '../components/Section';
import Card from '../components/Card';

const Menu = () => {
  const menuItems = [
    { id: 1, title: 'ესპრესო', price: '5.00 ₾', category: 'ყავა', desc: 'კლასიკური ძლიერი ყავა.', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80' },
    { id: 2, title: 'კაპუჩინო', price: '7.50 ₾', category: 'ყავა', desc: 'ჰაეროვანი რძის ქაფით.', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80' },
    { id: 3, title: 'ჩიზქეიქი', price: '12.00 ₾', category: 'დესერტი', desc: 'ნიუ-იორკის სტილის დესერტი.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80' },
    { id: 4, title: 'კრუასანი', price: '6.00 ₾', category: 'დესერტი', desc: 'ფრანგული კარაქიანი კრუასანი.', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80' },
  ];

  return (
    <Section title="მენიუ" subtitle="გაეცანით ჩვენს მრავალფეროვან არჩევანს">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item) => (
          <Card 
            key={item.id}
            title={item.title}
            image={item.img}
            description={item.desc}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </Section>
  );
};

export default Menu;