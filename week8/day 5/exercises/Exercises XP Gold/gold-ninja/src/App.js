import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <ShoppingCart />
      <TodoList />
    </div>
  );
};

export default App;