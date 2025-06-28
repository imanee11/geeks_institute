import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks, selectFantasyBooks, selectHorrorBooks, selectScienceFictionBooks } from '../store/bookSlice';

const BookList = () => {

    const [genre, setGenre] = useState('All');

    const books = useSelector((state) => {
        if (genre === 'Horror') return selectHorrorBooks(state);
        if (genre === 'Fantasy') return selectFantasyBooks(state);
        if (genre === 'Science Fiction') return selectScienceFictionBooks(state);
        return selectBooks(state);
    })

    const genres = ['All', 'Horror', 'Fantasy', 'Science Fiction']

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Book Inventory</h1>
            <div className='flex flex-wrap gap-3 mb-6'>
                {genres.map(g => (
                    <button
                        key={g}
                        onClick={() => setGenre(g)}
                        className={`px-4 py-2 rounded-lg transition ${genre === g ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                        {g}
                    </button>
                ))}
            </div>

            <ul className="space-y-3">
                {books.map(book => (
                    <li key={book.id} className="p-4 border rounded-lg shadow hover:bg-blue-50">
                        <h2 className="text-lg font-semibold">{book.title}</h2>
                        <p className="text-gray-600">By {book.author}</p>
                        <span className="text-sm text-blue-500">{book.genre}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;