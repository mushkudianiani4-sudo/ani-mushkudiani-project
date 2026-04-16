import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
  return (
    <Section title="დაგვიკავშირდით" subtitle="გაქვთ კითხვები? მოგვწერეთ და მალე გიპასუხებთ.">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">სახელი</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              placeholder="თქვენი სახელი"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ელ-ფოსტა</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">შეტყობინება</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              placeholder="რით შეგვიძლია დაგეხმაროთ?"
            ></textarea>
          </div>
          <Button label="გაგზავნა" variant="primary" type="submit" />
        </form>
      </div>
    </Section>
  );
};

export default Contact;