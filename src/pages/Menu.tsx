
import { useFetch } from '../hooks/useFetch';
import Section from '../components/Section';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface MealResponse {
  meals: Meal[];
}

const Menu = () => {

  const { data, loading, error } = useFetch<MealResponse>(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
  );

  const items = data?.meals.slice(0, 8) || [];

  return (
    <Section title="ჩვენი მენიუ" subtitle="Custom Hook-ის გამოყენებით წამოღებული მონაცემები">
      {loading && <p className="text-center py-10">იტვირთება...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((meal) => (
          <div key={meal.idMeal} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-bold">{meal.strMeal}</h3>
              <p className="text-orange-600 font-bold mt-2">12.00 ₾</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Menu;