import { useState, useEffect } from 'react';
import Section from '../components/Section';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface CartItem extends Meal {
  quantity: number;
}

const Menu = () => {
  const [items, setItems] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCheckout, setIsCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cafe_moon_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    document.title = 'მენიუ | Cafe Moon';
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      .then(res => res.json())
      .then(data => {
        setItems(data.meals.slice(0, 9));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem('cafe_moon_cart', JSON.stringify(cart));
  }, [cart]);

  const changeQuantity = (meal: Meal, delta: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.idMeal === meal.idMeal);
      if (!existing && delta > 0) return [...prev, { ...meal, quantity: 1 }];
      if (existing) {
        const newQty = existing.quantity + delta;
        return newQty <= 0 
          ? prev.filter(i => i.idMeal !== meal.idMeal) 
          : prev.map(i => i.idMeal === meal.idMeal ? { ...i, quantity: newQty } : i);
      }
      return prev;
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.quantity * 15), 0);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`მადლობა! შეკვეთა მიღებულია. მეთოდი: ${paymentMethod === 'card' ? 'ბარათი' : 'ნაღდი'}`);
    setCart([]);
    setIsCheckout(false);
  };

  return (
    <Section title={isCheckout ? "შეკვეთის დასრულება" : "ჩვენი მენიუ"} subtitle={isCheckout ? "შეავსეთ მონაცემები" : "საუკეთესო დესერტები ქუთაისში"}>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        <div className="flex-grow w-full">
          {!isCheckout ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? <p className="col-span-full text-center py-10">იტვირთება...</p> : items.map((meal) => {
                const inCart = cart.find(i => i.idMeal === meal.idMeal);
                return (
                  <div key={meal.idMeal} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
                      <img src={meal.strMealThumb} alt="" className="w-full h-full object-cover transition-transform" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1">{meal.strMeal}</h3>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-orange-600 font-black text-lg md:text-xl">15.00 ₾</span>
                        {inCart ? (
                          <div className="flex items-center bg-gray-900 rounded-xl p-1 text-white">
                            <button onClick={() => changeQuantity(meal, -1)} className="w-8 h-8 hover:bg-gray-700 rounded-lg transition-colors">-</button>
                            <span className="px-3 font-bold text-sm">{inCart.quantity}</span>
                            <button onClick={() => changeQuantity(meal, 1)} className="w-8 h-8 hover:bg-gray-700 rounded-lg transition-colors">+</button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => changeQuantity(meal, 1)} 
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl font-bold hover:bg-blue-700 hover:text-white active:scale-95 transition-all duration-300 text-xs md:text-sm"
                          >
                            დამატება
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50">
              <button onClick={() => setIsCheckout(false)} className="mb-6 text-orange-600 font-bold flex items-center gap-2 hover:underline">← მენიუში დაბრუნება</button>
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required placeholder="თქვენი სახელი" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base transition-all" />
                  <input required placeholder="ტელეფონის ნომერი" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base transition-all" />
                </div>
                <textarea required placeholder="მიტანის მისამართი ქუთაისში" className="w-full p-4 bg-gray-50 rounded-2xl h-32 outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm md:text-base transition-all"></textarea>
                
                <div className="pt-4">
                  <h4 className="font-bold mb-4">გადახდის მეთოდი:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button type="button" onClick={() => setPaymentMethod('card')} className={`py-4 rounded-2xl font-bold border-2 transition-all active:scale-95 ${paymentMethod === 'card' ? 'border-orange-600 bg-orange-50 text-orange-600' : 'border-gray-100'}`}>💳 ბარათით</button>
                    <button type="button" onClick={() => setPaymentMethod('cash')} className={`py-4 rounded-2xl font-bold border-2 transition-all active:scale-95 ${paymentMethod === 'cash' ? 'border-orange-600 bg-orange-50 text-orange-600' : 'border-gray-100'}`}>💵 ხელზე</button>
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <div className="p-6 bg-gray-900 rounded-3xl text-white space-y-4 shadow-lg animate-fadeIn">
                    <input required placeholder="ბარათის ნომერი" className="bg-transparent border-b border-gray-700 w-full p-2 outline-none focus:border-orange-500 transition-colors" />
                    <div className="flex gap-4">
                      <input required placeholder="MM/YY" className="bg-transparent border-b border-gray-700 w-full p-2 outline-none focus:border-orange-500 transition-colors" />
                      <input required placeholder="CVC" className="bg-transparent border-b border-gray-700 w-full p-2 outline-none focus:border-orange-500 transition-colors" />
                    </div>
                  </div>
                )}
                
                <button type="submit" className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg md:text-xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all duration-300">შეკვეთის გაფორმება</button>
              </form>
            </div>
          )}
        </div>

        <aside className="lg:w-[380px] w-full lg:sticky lg:top-28">
          <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-gray-50">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 italic">შეკვეთა</h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {cart.length === 0 ? <p className="text-gray-400 text-center py-10 text-sm italic">კალათა ცარიელია</p> : cart.map(item => (
                <div key={item.idMeal} className="flex justify-between items-center bg-gray-50 p-3 rounded-2xl border border-transparent hover:border-orange-200 transition-all">
                  <div className="flex items-center gap-3">
                    <img src={item.strMealThumb} className="w-10 h-10 rounded-lg object-cover" alt="" />
                    <span className="text-xs font-bold truncate w-24 sm:w-32">{item.strMeal}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">x{item.quantity}</span>
                    <span className="text-sm font-bold">{(item.quantity * 15).toFixed(2)} ₾</span>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="mt-8 pt-6 border-t border-dashed border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 text-sm md:text-base">ჯამი:</span>
                  <span className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">{totalPrice.toFixed(2)} ₾</span>
                </div>
                {!isCheckout && (
                  <button onClick={() => setIsCheckout(true)} className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-lg">გაფორმება</button>
                )}
              </div>
            )}
          </div>
        </aside>

      </div>
    </Section>
  );
};

export default Menu;