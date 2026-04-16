import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { ContactForm } from '../types'; // დარწმუნდი, რომ ეს იმპორტი სწორია

const Contact = () => {
  useEffect(() => {
    document.title = 'კონტაქტი | Cafe Moon';
  }, []);

  const [form, setForm] = useState<ContactForm>({
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
    console.log(form);
    alert('შეტყობინება გაიგზავნა!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Section title="დაგვიკავშირდით">
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="თქვენი სახელი"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-orange-200"
            required
          />
          <input 
            name="email" 
            type="email"
            value={form.email} 
            onChange={handleChange} 
            placeholder="ელ-ფოსტა"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-orange-200"
            required
          />
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="შეტყობინება"
            rows={4}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-orange-200"
            required
          ></textarea>
          <Button label="გაგზავნა" variant="primary" type="submit" />
        </form>
      </div>
    </Section>
  );
};

export default Contact;