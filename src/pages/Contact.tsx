import { useEffect } from 'react';
import Section from '../components/Section';

const Contact = () => {
  useEffect(() => {
    document.title = 'კონტაქტი | Cafe Moon';
  }, []);

  return (
    <Section 
      title="დაგვიკავშირდით" 
      subtitle="გვესტუმრეთ ქუთაისის გულში, თეთრ ხიდთან"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 italic">მისამართი</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              ქუთაისი, პუშკინის ქუჩა #5 <br />
              (თეთრი ხიდის მიმდებარედ)
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 italic">კონტაქტი</h3>
            <p className="text-gray-600 text-lg">📞 +995 555 555 555</p>
            <p className="text-gray-600 text-lg">📧 hello@cafemoon.ge</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 italic">სამუშაო საათები</h3>
            <p className="text-gray-600 text-lg font-medium">ყოველდღე: 09:00 - 23:00</p>
          </div>
        </div>

        {}
        <div className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-orange-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3946445579997!2d42.703410315438514!3d42.27041597919313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8cf3500c50d5%3A0x6334520932822f36!2sWhite%20Bridge!5e0!3m2!1sen!2sge!4v1713251200000!5m2!1sen!2sge" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Cafe Moon Kutaisi Location"
          ></iframe>
        </div>

      </div>
    </Section>
  );
};

export default Contact;