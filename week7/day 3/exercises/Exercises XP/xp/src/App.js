import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyCounter from './components/BuggyCounter';
import FavoriteColor from './components/FavoriteColor';

const App = () => {
  return (
    <div>
      <h1>Exercise 1 : React Error Boundary Simulation</h1>
      <h3>Click on the numbers to increase the counters.The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h3>
      <hr/>
      <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />
      <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
      <BuggyCounter />


      <hr/>
      <h1>Exercise 2 : Lifecycle</h1>
      <FavoriteColor />

      <hr/>
      {/* <h1>Exercise 3 : Lifecycle #2</h1> */}
      


    </div>
  );
};

export default App;