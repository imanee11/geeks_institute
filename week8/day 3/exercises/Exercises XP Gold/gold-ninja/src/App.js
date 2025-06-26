import React from 'react';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import InventoryList from './components/InventoryList';
import UpdateQuantity from './components/UpdateQuantity';
import RemoveProduct from './components/RemoveProduct';

const App = () => {

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  return (
    // <div className="min-h-screen bg-gray-100 pt-10">
    //   {isAuthenticated ? <Logout/> : <Login/>}
    // </div>
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Inventory Manager</h1>
      <AddProduct />
      <InventoryList />
    </div>
  );
};

export default App;