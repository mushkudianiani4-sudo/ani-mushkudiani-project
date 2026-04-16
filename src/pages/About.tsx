import { useEffect } from 'react';
import Section from '../components/Section';

const About = () => {
  // ნაბიჯი 5.2: გვერდის სათაურის შეცვლა
  useEffect(() => {
    document.title = 'ჩვენს შესახებ | Cafe Moon';
  }, []);

  return (
    <Section title="ჩვენს შესახებ" subtitle="Cafe Moon - ადგილი, სადაც ტრადიცია და თანამედროვეობა ხვდება ერთმანეთს.">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" 
            alt="Our Story" 
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <p>ჩვენი ისტორია 2020 წელს დაიწყო და მას შემდეგ ვემსახურებით ყავის მოყვარულებს.</p>
        </div>
      </div>
    </Section>
  );
};

export default About;