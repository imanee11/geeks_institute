import React from 'react';
import TodoList from './components/TodoList';
import MovieList from './components/MovieList';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="min-h-screen  bg-gray-100 p-6">
      <TodoList />
      <div className='pt-10'></div>
      <MovieList />
      <div className='pt-10'></div>
      <ProductList />
    </div>
  );
};

export default App;