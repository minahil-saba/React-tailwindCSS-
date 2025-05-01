import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
          </Routes>
        </main>
        <Footer />
        <Cart />
      </div>
    </Router>
  );
}

export default App;