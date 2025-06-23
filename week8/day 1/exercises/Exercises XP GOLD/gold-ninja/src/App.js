import React from 'react';
import TodoList from './components/TodoList';
import { TaskProvider } from './components/TaskContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div>
      <TodoList />
      <hr />
      <TaskProvider>
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
          <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>
          <AddTask />
          <TaskList />
        </div>
      </TaskProvider>
    </div>
  );
};

export default App;