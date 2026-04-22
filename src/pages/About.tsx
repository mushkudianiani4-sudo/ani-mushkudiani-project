import { useEffect } from 'react';
import Section from '../components/Section';

const About = () => {
  useEffect(() => {
    document.title = 'ჩვენს შესახებ | Cafe Moon';
  }, []);

  return (
    <Section title="ჩვენს შესახებ" subtitle="Cafe Moon — ადგილი, სადაც ტრადიცია და თანამედროვეობა ხვდება ერთმანეთს.">
      
      {/* ჩვენი ისტორია */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2">
          <img 
            src="/about-coffee.jpg" 
            alt="Cafe Moon ესპრესო" 
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            loading="lazy"
            decoding="async"
            width="600"
            height="400"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 italic">ჩვენი ისტორია</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            <span className="text-orange-600 font-bold">Cafe Moon</span> დაიბადა 2020 წელს, ქუთაისის ისტორიულ ცენტრში — თეთრი ხიდის მიმდებარედ. 
            ჩვენი მიზანი თავიდანვე იყო შეგვექმნა ადგილი, სადაც ყავის კულტურა და ქართული სტუმართმოყვარეობა ერთმანეთს ხვდება.
          </p>
          <p className="text-gray-600 leading-relaxed">
            პირველი ფინჯანი ყავიდან დღემდე, ჩვენ ვცდილობთ ყოველი სტუმრისთვის განსაკუთრებული გამოცდილება შევქმნათ. 
            ჩვენი ბარისტები სპეციალურ კურსებს გადიან და მუდმივად ეძებენ ახალ გემოვნებით კომბინაციებს.
          </p>
          <p className="text-gray-600 leading-relaxed">
            სახელწოდება "Moon" შემთხვევით არ არჩეულა — მთვარის სინათლე ქუთაისის ღამეულ ქუჩებში 
            განსაკუთრებულ ატმოსფეროს ქმნის, და სწორედ ამ სითბოს ვცდილობთ ჩვენს კაფეშიც შემოვიტანოთ.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-12 italic">ჩვენი გზა</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { year: "2020", title: "დაარსება", desc: "გაიხსნა პირველი Cafe Moon ქუთაისში, 15 ადგილით." },
            { year: "2021", title: "მენიუს გაფართოება", desc: "დესერტებისა და საავტორო სასმელების ხაზი დაემატა." },
            { year: "2023", title: "რენოვაცია", desc: "ინტერიერი განახლდა moon-თემატიკის დიზაინით." },
            { year: "2024", title: "ონლაინ შეკვეთა", desc: "გაეშვა ვებ-საიტი მიტანის სერვისით ქუთაისში." }
          ].map((item) => (
            <div key={item.year} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                <span className="text-orange-600 font-black text-lg group-hover:text-white transition-colors">{item.year}</span>
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* რატომ ჩვენ? */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-12 italic">რატომ Cafe Moon?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "☕", title: "ხარისხიანი ყავა", desc: "ვიყენებთ 100% არაბიკას მარცვლებს, რომლებიც სპეციალურად არის შერჩეული და მოხალული." },
            { icon: "🍰", title: "ხელნაკეთი დესერტები", desc: "ჩვენი შეფ-მზარეული ყოველდილით ამზადებს ახალ დესერტებს ნატურალური ინგრედიენტებით." },
            { icon: "🏠", title: "მყუდრო გარემო", desc: "უნიკალური ინტერიერი moon-თემატიკით, კომფორტული ადგილები მუშაობისა და დასვენებისთვის." }
          ].map((item) => (
            <div key={item.title} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-gray-800 text-xl mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* სტატისტიკა */}
      <div className="bg-gray-900 rounded-3xl p-10 md:p-14 text-white">
        <h3 className="text-2xl font-bold text-center mb-10 italic">რიცხვებში</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "5+", label: "წლის გამოცდილება" },
            { num: "10K+", label: "კმაყოფილი სტუმარი" },
            { num: "50+", label: "მენიუს პოზიცია" },
            { num: "15", label: "გუნდის წევრი" }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2">{stat.num}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </Section>
  );
};

export default About;