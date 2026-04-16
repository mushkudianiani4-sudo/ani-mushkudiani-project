// src/pages/Contact.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-24">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F2F24] mb-4 tracking-tighter">
            დაგვიკავშირდით
          </h1>
          <div className="w-24 h-1 bg-[#D4A373] rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-lg">
            გაგვიზიარეთ თქვენი შთაბეჭდილებები, ან დაჯავშნეთ მაგიდა **Moon Café**-ში.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 bg-white p-12 rounded-3xl shadow-sm border border-gray-50">
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#3F2F24]">ჩვენი კაფე</h3>
            <div className="flex items-start gap-4 text-gray-700">
              <span className="text-[#D4A373]">📍</span>
              <p>მისამართი: რუსთაველის გამზ. #1, თბილისი</p>
            </div>
            <div className="flex items-start gap-4 text-gray-700">
              <span className="text-[#D4A373]">📞</span>
              <p>ტელეფონი: +995 555 12 34 56</p>
            </div>
            <div className="flex items-start gap-4 text-gray-700">
              <span className="text-[#D4A373]">✉️</span>
              <p>ელ-ფოსტა: hello@moon.cafe</p>
            </div>
          </div>

          <form className="flex flex-col gap-6">
            <input type="text" placeholder="თქვენი სახელი" className="p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-1 focus:ring-[#D4A373] outline-none" />
            <input type="email" placeholder="თქვენი ელ-ფოსტა" className="p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-1 focus:ring-[#D4A373] outline-none" />
            <textarea placeholder="თქვენი შეტყობინება" rows={5} className="p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-1 focus:ring-[#D4A373] outline-none" />
            <div className="mt-4">
              <Button label="გაგზავნა" />
            </div>
          </form>

        </div>

      </div>
    </MainLayout>
  );
};

export default Contact;