import React from 'react';
import AuthForm from './components/AuthForm';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">E-commerce App</h1>
      <AuthForm />
      <ProductListing />
      <ShoppingCart />
    </div>
  );
};

export default App;