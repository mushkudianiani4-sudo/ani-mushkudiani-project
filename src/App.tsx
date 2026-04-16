import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { useEffect } from 'react';

// დროებითი გვერდები
const Home = () => {
  useEffect(() => { document.title = 'მთავარი | Cafe Moon'; }, []);
  return <div className="py-20 text-center text-4xl font-bold">კეთილი იყოს თქვენი მობრძანება!</div>;
};

const About = () => {
  useEffect(() => { document.title = 'ჩვენს შესახებ | Cafe Moon'; }, []);
  return <div className="py-20 text-center text-4xl font-bold">ჩვენი ისტორია</div>;
};

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="py-20 text-center">404 - გვერდი ვერ მოიძებნა</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;