import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OfferWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the widget after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-fadeInUp">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border-2 border-orange-100 dark:border-gray-700 flex gap-4 items-center max-w-[300px] relative hover:shadow-orange-100 dark:hover:shadow-none transition-shadow">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-3 -right-3 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 shadow-sm w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="დახურვა"
        >
          ✕
        </button>
        
        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center -mt-2 animate-pulse opacity-50 z-10 pointer-events-none">
             <span className="text-xs">♨</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=150&q=60" 
            alt="Moon ლატე" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <span className="text-[10px] uppercase font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded-full inline-block mb-1">
            ✨ დღის შეთავაზება
          </span>
          <h4 className="font-bold text-gray-800 dark:text-white text-sm">Moon ლატე</h4>
          <div className="flex justify-between items-center mt-1">
            <span className="font-black text-orange-600 dark:text-orange-400 text-sm">9.00 ₾</span>
            <Link to="/menu" className="text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              შეკვეთა →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferWidget;
