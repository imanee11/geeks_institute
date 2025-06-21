import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Search from './pages/Search';
import ImageGrid from './components/ImageGrid';


const App = () => {

  const categories = ["Mountain", "Beaches", "Birds", "Food"];

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to="/mountain" />} />
            {categories.map((cat) => (
              <Route key={cat} path={`/${cat.toLowerCase()}`} element={<ImageGrid query={cat} />} />
            ))}
            <Route path="/search/:query" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
};

export default App;