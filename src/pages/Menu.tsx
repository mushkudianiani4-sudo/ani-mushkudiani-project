import { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Card from '../components/Card';

const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      .then(res => res.json())
      .then(json => {
        setData(json.meals.slice(0, 6));
        setLoading(false);
      });
  }, []);

  return (
    <MainLayout>
      <div className="py-24 container mx-auto px-6">
        <h1 className="text-4xl font-serif text-center mb-16 text-[#3F2F24]">ჩვენი დესერტები</h1>
        {loading ? (
          <p className="text-center italic">იტვირთება...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {data.map((meal: any) => (
              <Card key={meal.idMeal} title={meal.strMeal} image={meal.strMealThumb} description="Moon-ის საფირმო რეცეპტით დამზადებული დესერტი." />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};
export default Menu;