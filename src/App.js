import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import UseCases from './pages/UseCases';
import Contact from './pages/Contact';
import EntityMatching from './pages/About/EntityMatching';
import AboutMadMatcher from './pages/About/AboutMadMatcher';
import ScrollToTop from './components/ScrollToTop';
import usePageTitle from './hooks/usePageTitle';
import './App.css';

// Component to handle title updates based on route
const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToTitle = {
      '/': null, // Home page - just "MadMatcher"
      '/products': 'Products',
      '/about': 'About',
      '/use-cases': 'Use Cases',
      '/contact': 'Contact',
      '/about/entity-matching': 'Entity Matching',
      '/about/team': 'Team',
    };

    const pageName = pathToTitle[location.pathname];
    const title = pageName ? `MM | ${pageName}` : 'MadMatcher';
    document.title = title;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <TitleManager />
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/contact" element={<Contact />} />

            {/* About Routes */}
            <Route path="/about/entity-matching" element={<EntityMatching />} />
            <Route path="/about/team" element={<AboutMadMatcher />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
