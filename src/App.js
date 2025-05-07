import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Offres from './pages/Offres';
import Formations from './pages/Formations';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import LoadingSpinner from './components/LoadingSpinner';
import { useContext } from 'react';
import { LoadingContext } from './context/LoadingContext'; // 👈 correct import
import RouteChangeHandler from './components/RouteChangeHandler';

function App() {
  const { isLoading } = useContext(LoadingContext); // ✅ works now
  return (
    <div className="App overflow-y-scroll scrollbar-hide">
      <RouteChangeHandler />
      {isLoading && <LoadingSpinner />}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offres" element={<Offres />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
