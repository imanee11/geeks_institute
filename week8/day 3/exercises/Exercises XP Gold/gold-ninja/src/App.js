import React from 'react';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';
import Login from './components/Login';

const App = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  return (
    <div className="min-h-screen bg-gray-100 pt-10">
      {isAuthenticated ? <Logout/> : <Login/>}
    </div>
  );
};

export default App;