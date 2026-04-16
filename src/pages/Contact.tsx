import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { ContactForm as ContactFormType } from '../types';

const Contact = () => {
  // 5.2: გვერდის სათაური
  useEffect(() => {
    document.title = 'კონტაქტი | Cafe Moon';
  }, []);

  // 5.1: ფორმის მართვა
  const [form, setForm] = useState<ContactFormType>({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('შეტყობინება გაიგზავნა!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Section title="დაგვიკავშირდით">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            name="name" value={form.name} onChange={handleChange}
            type="text" className="w-full px-4 py-3 rounded-lg border outline-none focus:border-orange-500" 
            placeholder="თქვენი სახელი" required 
          />
          <input 
            name="email" value={form.email} onChange={handleChange}
            type="email" className="w-full px-4 py-3 rounded-lg border outline-none focus:border-orange-500" 
            placeholder="ელ-ფოსტა" required 
          />
          <textarea 
            name="message" value={form.message} onChange={handleChange}
            rows={4} className="w-full px-4 py-3 rounded-lg border outline-none focus:border-orange-500" 
            placeholder="შეტყობინება" required 
          ></textarea>
          <Button label="გაგზავნა" variant="primary" type="submit" />
        </form>
      </div>
    </Section>
  );
};

export default Contact;