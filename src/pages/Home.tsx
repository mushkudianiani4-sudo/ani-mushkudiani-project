import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Features Section */}
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
          <Card 
            title="მყუდრო გარემო" 
            image="https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?auto=format&fit=crop&w=600&q=80"
            description="იდეალური ადგილი მუშაობისთვის, კითხვისთვის ან მეგობრებთან შეხვედრისთვის."
          />
          <Card 
            title="გემრიელი დესერტები" 
            image="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80"
            description="ყოველდღე ახალი და ნატურალური ინგრედიენტებით მომზადებული ტკბილეული."
          />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section 
        title="რას ამბობენ ჩვენზე" 
        bgGray={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="italic text-gray-600 mb-4">"საუკეთესო ადგილია დილის ყავისთვის. პერსონალი ძალიან თბილი და მეგობრულია!"</p>
            <p className="font-bold text-orange-600">- ნინო კ.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="italic text-gray-600 mb-4">"დესერტები უბრალოდ საოცრებაა. ჩიზქეიქი აუცილებლად უნდა გასინჯოთ."</p>
            <p className="font-bold text-orange-600">- გიორგი მ.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;