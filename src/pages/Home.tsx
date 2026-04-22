import { useEffect } from 'react';
import Section from '../components/Section';

const news = [
  { id: 1, title: "ცოცხალი მუსიკის საღამო", date: "20 აპრილი", desc: "მოუსმინეთ ჯაზს ყოველ პარასკევს Cafe Moon-ში." },
  { id: 2, title: "ახალი მენიუ", date: "15 აპრილი", desc: "დავაგემოვნეთ ჩვენი ახალი ფრანგული კრუასანები." }
];

const Home = () => {
  useEffect(() => { document.title = 'მთავარი | Cafe Moon'; }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-orange-50 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 italic">Cafe Moon Kutaisi</h1>
        <p className="mt-4 text-xl text-gray-600">ყველაზე მყუდრო ადგილი ქალაქის ცენტრში</p>
      </div>

      {/* სიახლეები */}
      <Section title="სიახლეები" subtitle="გაიგეთ რა ხდება ჩვენს კაფეში">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map(item => (
            <div key={item.id} className="border-l-4 border-orange-600 p-6 bg-white shadow-sm">
              <span className="text-sm text-orange-600 font-bold">{item.date}</span>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;