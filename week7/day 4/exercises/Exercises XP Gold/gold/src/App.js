import React from 'react';
import PostForm from './components/PostForm';
import PostFormAxios from './components/PostFormAxios';

const App = () => {
  return (
    <div>
      <h1>Exercise 1: POST JSON Data</h1>
      <PostForm/>

      <hr></hr>
      <h1>Exercise 2: POST JSON Data with Axios</h1>
      <PostFormAxios/>
      
    </div>
  );
};

export default App;