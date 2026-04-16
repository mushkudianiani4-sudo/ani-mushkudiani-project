import MainLayout from '../layouts/MainLayout';
import Card from '../components/Card';
import { menuItems } from '../data';

const Home = () => (
  <MainLayout>
    <section className="h-[80vh] flex items-center justify-center text-center bg-[#FAF8F5] relative overflow-hidden">
      <div className="relative z-10 px-6">
        <h1 className="text-6xl md:text-8xl font-serif text-[#3F2F24] mb-6">Welcome to Moon</h1>
        <p className="text-lg text-gray-600 italic mb-10">ყოველი ფინჯანი ყავა ახალი დასაწყისია.</p>
        <button className="bg-[#3F2F24] text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#D4A373] transition-all">მენიუს ნახვა</button>
      </div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/coffee-beans.png')]"></div>
    </section>
    
    <section className="py-24 container mx-auto px-6">
      <h2 className="text-3xl font-serif text-center mb-16 text-[#3F2F24]">პოპულარული არჩევანი</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {menuItems.map(item => <Card key={item.id} title={item.name} image={item.imageUrl} description={item.description} price={item.price} />)}
      </div>
    </section>
  </MainLayout>
);
export default Home;