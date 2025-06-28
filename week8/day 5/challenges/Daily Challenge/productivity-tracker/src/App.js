import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import { useSelector } from 'react-redux';
import { selectCompletedTasks } from './features/tasks/taskSlice';

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState(1);
  const completedCount = useSelector(selectCompletedTasks);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Productivity Tracker</h1>
      <CategorySelector selected={selectedCategory} onChange={setSelectedCategory} />
      <TaskList categoryId={selectedCategory} />
      <p className="mt-6 text-sm text-gray-600">
        Completed Tasks: {completedCount}
      </p>
    </div>
  );
};

export default App;