import { useState } from "react";
import Section from "../components/Section";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("რეგისტრაცია წარმატებით დასრულდა! თქვენი შეკვეთა მიღებულია.");
    localStorage.removeItem("cafe_moon_cart");
    window.location.href = "/";
  };

  return (
    <Section
      title="რეგისტრაცია"
      subtitle="გაიარეთ რეგისტრაცია შეკვეთის დასასრულებლად"
    >
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              სახელი და გვარი
            </label>
            <input
              type="text"
              required
              className="w-full p-4 border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              ელ-ფოსტა
            </label>
            <input
              type="email"
              required
              className="w-full p-4 border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              ტელეფონის ნომერი
            </label>
            <input
              type="tel"
              required
              className="w-full p-4 border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              მიტანის მისამართი (ქუთაისი)
            </label>
            <textarea
              required
              className="w-full p-4 border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg"
          >
            შეკვეთის გაფორმება
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Register;
