import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { Meal } from '../types';

const Menu = () => {
  // 1. მდგომარეობა მონაცემებისთვის
  const [items, setItems] = useState<Meal[]>([]);
  // 2. მდგომარეობა ჩატვირთვის ინდიკატორისთვის
  const [loading, setLoading] = useState<boolean>(true);
  // 3. მდგომარეობა შეცდომის დასაჭერად
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // ნაბიჯი 5.2: გვერდის სათაურის შეცვლა
    document.title = 'მენიუ | Cafe Moon';

    // ნაბიჯი 5.3: მონაცემების წამოღების ფუნქცია
    const fetchMenu = async () => {
      try {
        setLoading(true);
        // ვიყენებთ TheMealDB API-ს დესერტების წამოსაღებად
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
        
        if (!response.ok) {
          throw new Error('სერვერიდან მონაცემების წამოღება ვერ მოხერხდა');
        }

        const data = await response.json();
        // ავიღოთ მხოლოდ პირველი 12 კერძი
        setItems(data.meals.slice(0, 12));
      } catch (err) {
        setError('შეცდომა მენიუს ჩატვირთვისას. გთხოვთ, შეამოწმოთ ინტერნეტთან კავშირი.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <Section title="ჩვენი მენიუ" subtitle="დააგემოვნეთ საუკეთესო დესერტები მთელ ქალაქში">
      
      {/* Loading UI - ნაბიჯი 5.3-ის მოთხოვნა */}
      {loading && (
        <div className="flex flex-col justify-center items-center py-24">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-600"></div>
          <p className="mt-4 text-gray-500 font-medium animate-pulse">მენიუ იტვირთება...</p>
        </div>
      )}

      {/* Error UI - ნაბიჯი 5.3-ის მოთხოვნა */}
      {error && (
        <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100">
          <p className="text-red-500 text-lg font-semibold">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all shadow-lg"
          >
            თავიდან სცადე
          </button>
        </div>
      )}

      {/* მონაცემების ჩვენება (თუ არც იტვირთება და არც შეცდომაა) */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((meal) => (
            <Card 
              key={meal.idMeal}
              title={meal.strMeal}
              image={meal.strMealThumb}
              description="ნატურალური ინგრედიენტებით მომზადებული ტკბილეული."
              price="15.00 ₾"
              category="დესერტი"
            />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Menu;