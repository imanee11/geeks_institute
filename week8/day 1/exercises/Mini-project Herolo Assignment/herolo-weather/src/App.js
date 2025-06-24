import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 text-white p-4 flex justify-center gap-4">
        <Link to="/" className="hover:underline">Weather</Link>
        <Link to="/favorites" className="hover:underline">Favorites</Link>
      </nav>
      <div className="max-w-md mx-auto p-4">
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
