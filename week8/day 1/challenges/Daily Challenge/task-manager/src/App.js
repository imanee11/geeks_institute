import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <TaskProvider>
      <TaskManager />
    </TaskProvider>
  );
}

export default App;
