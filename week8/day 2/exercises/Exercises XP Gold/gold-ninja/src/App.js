import React from 'react';
import AddCategory from './components/AddCategory';
import AddTodo from './components/AddTodo';
import CategoryList from './components/CategoryList';

const App = () => {
  return (
    <div>
      <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Todo List with Categories</h1>
        <AddCategory />
        <AddTodo />
        <CategoryList />
      </div>
    </div>
  );
};

export default App;