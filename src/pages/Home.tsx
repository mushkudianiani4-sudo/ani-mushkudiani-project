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
      {}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {}
        <div className="absolute inset-0">
          <img 
            src="/cafe-bg.jpg" 
            alt="Cafe Moon ინტერიერი" 
            className="w-full h-full object-cover"
            fetchPriority="high"
            width="1200"
            height="900"
          />
          {}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="text-orange-400">Cafe Moon</span> Kutaisi
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light drop-shadow-md">
            ყველაზე მყუდრო ადგილი ქალაქის ცენტრში
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/menu" className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg active:scale-95">
              ნახე მენიუ
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              დაგვიკავშირდი
            </a>
          </div>
        </div>
      </div>

      {}
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