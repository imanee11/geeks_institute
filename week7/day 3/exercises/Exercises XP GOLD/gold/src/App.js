import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary />
    </div>
  );
};

export default App;