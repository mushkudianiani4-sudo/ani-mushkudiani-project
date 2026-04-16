import Section from '../components/Section';

const About = () => {
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
        <div className="md:w-1/2 space-y-6 text-gray-700 leading-relaxed">
          <p>
            ჩვენი ისტორია 2020 წელს დაიწყო, როდესაც გადავწყვიტეთ შეგვექმნა სივრცე, რომელიც ყავის მოყვარულებისთვის მეორე სახლი გახდებოდა.
          </p>
          <p>
            ჩვენ ვიყენებთ მხოლოდ პრემიუმ ხარისხის მარცვლებს და ყოველდღიურად ვაცხობთ ნატურალურ დესერტებს. ჩვენი მიზანია, თითოეულ სტუმარს ვაჩუქოთ მშვიდი და სასიამოვნო წუთები.
          </p>
          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-bold text-gray-900">ჩვენი ღირებულებები:</h4>
            <ul className="list-disc list-inside mt-2 text-orange-600">
              <li>ხარისხი უპირველეს ყოვლისა</li>
              <li>მეგობრული მომსახურება</li>
              <li>ეკოლოგიურად სუფთა პროდუქტები</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;