import { useState, useEffect } from 'react';

const Contact = () => {
  useEffect(() => { document.title = 'კონტაქტი | Cafe Moon'; }, []);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="py-16 container mx-auto px-6 max-w-lg">
      <h1 className="text-4xl font-bold text-center mb-8">დაგვიკავშირდით</h1>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input className="w-full p-3 border rounded-lg" placeholder="სახელი" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        <input className="w-full p-3 border rounded-lg" placeholder="ელ-ფოსტა" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        <textarea className="w-full p-3 border rounded-lg" placeholder="შეტყობინება" rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
        <button className="bg-orange-600 text-white w-full py-3 rounded-lg font-bold">გაგზავნა</button>
      </form>
    </div>
  );
};

export default Contact;