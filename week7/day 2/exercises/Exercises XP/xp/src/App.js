import React from 'react';
import Car from './components/Car';
import Garage from './components/Garage';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';

// Exercise 1 : Car and components
const carinfo = {name: "Ford", model: "Mustang"}

const App = () => {
  
  return (
    <>
      <div>
        <h1>Exercise 1 : Car and components</h1>
        <Car model={carinfo.model}/>
        <Garage size="small" />

        <hr/>

        <h1>Exercise 2 : Events</h1>
        <Events/>

        <hr/>
        <h1>Exercise 3 : Phone and components</h1>
        <Phone/>

        <hr/>
        <h1>Exercise 4 : useEffect hook</h1>
        <Color/>

      </div>
      
    </>
  );
};

export default App;