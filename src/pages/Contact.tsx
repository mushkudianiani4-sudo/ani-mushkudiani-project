import { useState, ChangeEvent, FormEvent } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { ContactForm as ContactFormType } from '../types';

const Contact = () => {
  // 1.useState ფორმისთვის
  const [form, setForm] = useState<ContactFormType>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('გაგზავნილი მონაცემები:', form);
    alert('მადლობა! თქვენი შეტყობინება მიღებულია.');
    // ფორმის გასუფთავება
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Section title="დაგვიკავშირდით">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">სახელი</label>
            <input 
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text" 
              className="w-full px-4 py-3 rounded-lg border focus:border-orange-500 outline-none transition-all"
              placeholder="თქვენი სახელი"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">ელ-ფოსტა</label>
            <input 
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email" 
              className="w-full px-4 py-3 rounded-lg border focus:border-orange-500 outline-none"
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">შეტყობინება</label>
            <textarea 
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border focus:border-orange-500 outline-none"
              placeholder="რით შეგვიძლია დაგეხმაროთ?"
              required
            ></textarea>
          </div>
          <Button label="გაგზავნა" variant="primary" type="submit" />
        </form>
      </div>
    </Section>
  );
};

export default Contact;