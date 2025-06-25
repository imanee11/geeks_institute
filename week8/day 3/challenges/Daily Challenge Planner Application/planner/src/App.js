import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DatePicker from './components/DatePicker';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
          <h1 className="text-center text-2xl font-bold mb-4">Daily Planner</h1>
          <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
          <AddTask selectedDate={selectedDate} />
          <TaskList selectedDate={selectedDate} />
        </div>
      </div>
    </Provider>
  );
};

export default App;