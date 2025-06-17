import React, { useState } from 'react';
import './index.css'

const App = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ])

  const vote = (index) => {
    const newVotes = [...languages];
    newVotes[index].votes++;
    setLanguages(newVotes);
  };

  return (
    <>
      <div className='app'>
        <h2>Vote your language</h2>
        {languages.map((lang, index) => (
          <div className='card' key={index}>
            <div>{lang.votes}</div>
            <div>{lang.name}</div>
            <div><button onClick={() => vote(index)}>Vote</button></div>
          </div>
        ))}
      </div>


    </>
  );
};

export default App;