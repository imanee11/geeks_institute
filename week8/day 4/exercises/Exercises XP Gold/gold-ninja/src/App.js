import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { fetchTodos } from './app/todosSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Todo List (with Thunks)</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
