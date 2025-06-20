import React, { useState } from 'react';
import QuotesDatabase from './components/QuotesDatabase.js'

const colors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-orange-500'
];

function App() {
  const getRandomIndex = (max, exclude) => {
    let index;
    do {
      index = Math.floor(Math.random() * max);
    } while (index === exclude);
    return index;
  };

  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * QuotesDatabase.length));
  const [colorIndex, setColorIndex] = useState(() => Math.floor(Math.random() * colors.length));

  const newQuote = () => {
    const nextQuoteIndex = getRandomIndex(QuotesDatabase.length, quoteIndex);
    const nextColorIndex = getRandomIndex(colors.length, colorIndex);

    setQuoteIndex(nextQuoteIndex);
    setColorIndex(nextColorIndex);
  };

  const { quote, author } = QuotesDatabase[quoteIndex];
  const bgColor = colors[colorIndex];

  return (
    <div className={`flex items-center justify-center min-h-screen transition-all duration-500 ${bgColor}`}>
      <div className="max-w-xl p-10 rounded-lg bg-white shadow-2xl text-center transition-all duration-500">
        <h1 className={`text-2xl font-bold mb-6 transition-all duration-500 text-${bgColor.split('-')[1]}-600`}>
          "{quote}"
        </h1>
        <p className="mb-6 font-semibold text-gray-700">- {author}</p>
        <button
          onClick={newQuote}
          className={`px-6 py-3 font-bold text-white rounded transition duration-300 hover:opacity-90 ${bgColor}`}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}


export default App;