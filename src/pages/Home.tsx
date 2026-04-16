import { useEffect } from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';

const Home = () => {
  // ნაბიჯი 5.2: გვერდის სათაურის შეცვლა
  useEffect(() => {
    document.title = 'მთავარი | Cafe Moon';
  }, []);

  return (
    <div>
      <Hero />
      <Section 
        title="რატომ ჩვენ?" 
        subtitle="ჩვენ ვზრუნავთ თითოეულ დეტალზე, რათა თქვენი სტუმრობა დაუვიწყარი იყოს."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="საუკეთესო ყავა" 
            image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
            description="უმაღლესი ხარისხის არაბიკას მარცვლები პირდაპირ ფერმერებისგან."
          />
          {/* შეგიძლია დაამატო სხვა Card-ებიც აქ */}
        </div>
      </Section>
    </div>
  );
};

export default Home;