import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Meal from './pages/Meal';

function App() {
  return (
    <Router>
      <Header />
      <main className="container content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="meal/:id" element={<Meal />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
