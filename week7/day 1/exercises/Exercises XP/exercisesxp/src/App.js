import React from 'react';
import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise from './components/Exercise3';


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

const App = () => {
  // Exercise 1: with JSX
  const myelement = <h1>I Love JSX!</h1>
  const sum = 5 + 5

  return (
    <>
      {/* Exercise 1: with JSX */}
      <div>
        <h1>Exercise 1: with JSX</h1>
        <p>Hello World!</p>
        {myelement}
        <p>React is {sum} times better with JSX</p>
      </div>

      <hr/>

      {/* Exercise 2 : Object */}
      <div>
        <h1>Exercise 2 : Object</h1>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </div>

      <hr/>

      {/* Exercise 3 : HTML Tags in React */}
      <div>
        <h1>Exercise 3 : HTML Tags in React</h1>
        <Exercise/>
      </div>




    </>
  );
};

export default App;