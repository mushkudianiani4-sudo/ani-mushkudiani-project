import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* მთავარი გვერდი (Hero Section სტილში) */}
          <Route path="/" element={
            <div className="py-32 px-6 text-center max-w-4xl mx-auto">
              <span className="text-[#D4A373] uppercase tracking-[0.5em] text-sm mb-4 block">Welcome to</span>
              <h1 className="text-6xl md:text-8xl font-serif text-[#2D2424] mb-8 leading-tight">
                მყუდროება <br/> ყოველ ფინჯანში
              </h1>
              <div className="w-24 h-1 bg-[#D4A373] mx-auto mb-10"></div>
              <p className="text-lg text-gray-600 italic leading-relaxed">
                საუკეთესო ქართული ინგრედიენტები და არომატული ყავა Mouveline-ისგან.
              </p>
            </div>
          } />

          {/* მენიუს დროებითი გვერდი */}
          <Route path="/menu" element={
            <div className="py-20 container mx-auto px-6">
              <h2 className="text-4xl font-serif text-[#2D2424] text-center mb-16 underline decoration-[#D4A373] underline-offset-8">ჩვენი მენიუ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
                <div className="border-b border-[#D4A373]/20 pb-4">
                  <div className="flex justify-between text-xl font-medium text-[#2D2424]">
                    <span>იმერული ხაჭაპური</span>
                    <span className="text-[#D4A373]">15.00 ₾</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">კეცზე გამომცხვარი ყველიანი პური</p>
                </div>
                {/* სხვა ელემენტები... */}
              </div>
            </div>
          } />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;