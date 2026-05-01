import { useEffect } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import { menuItems } from "../data/constants";

const news = [
  {
    id: 1,
    title: "ცოცხალი მუსიკის საღამო",
    date: "20 აპრილი",
    desc: "მოუსმინეთ ჯაზს ყოველ პარასკევს Cafe Moon-ში.",
  },
  {
    id: 2,
    title: "ახალი მენიუ",
    date: "15 აპრილი",
    desc: "დავაგემოვნეთ ჩვენი ახალი ფრანგული კრუასანები.",
  },
];

const Home = () => {
  useEffect(() => {
    document.title = "მთავარი | Cafe Moon";
  }, []);

  return (
    <div>
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-bg.webp"
            alt="Cafe Moon ინტერიერი"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="sync"
            width="1200"
            height="900"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="text-orange-400">Cafe Moon</span> Kutaisi
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light drop-shadow-md">
            ყველაზე მყუდრო ადგილი ქალაქის ცენტრში
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg active:scale-95"
            >
              ნახე მენიუ
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              დაგვიკავშირდი
            </Link>
          </div>
        </div>
        <div className="absolute top-24 left-10 md:left-32 animate-pulse opacity-70 pointer-events-none hidden sm:block">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="#fdb813" stroke="#fdb813" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </div>
        <div className="absolute bottom-32 right-10 md:right-32 animate-bounce opacity-50 pointer-events-none hidden sm:block" style={{ animationDuration: '4s' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#fdb813" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <div className="absolute top-40 right-20 animate-pulse opacity-40 pointer-events-none hidden sm:block" style={{ animationDuration: '2.5s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
      </div>

      <Section title="რჩეული მენიუ" subtitle="გასინჯეთ ჩვენი საუკეთესო შეთავაზებები">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              price={`${item.price.toFixed(2)} ₾`}
              category={item.category}
              image={item.imageUrl}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 px-10 py-3 rounded-full font-bold text-lg hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-all shadow-sm hover:shadow-md"
          >
            სრული მენიუს ნახვა
          </Link>
        </div>
      </Section>

      <Section title="სიახლეები" subtitle="გაიგეთ რა ხდება ჩვენს კაფეში">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="border-l-4 border-orange-600 p-6 bg-white shadow-sm dark:bg-gray-800 transition-colors duration-300"
            >
              <span className="text-sm text-orange-600 font-bold dark:text-orange-400">
                {item.date}
              </span>
              <h3 className="text-xl font-bold mt-2 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
