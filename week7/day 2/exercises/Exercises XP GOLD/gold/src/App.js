import React from 'react';
import Forms from './components/Forms';
import BookForm from './components/BookForm';
import UserForm from './components/UserForm';

const App = () => {
  return (
    <>
      <Forms/>
      <hr></hr>
      <BookForm/>
      <hr></hr>
      <UserForm/>
    </>
  );
};

export default App;