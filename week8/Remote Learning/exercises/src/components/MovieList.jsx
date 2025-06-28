import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectByGenre, selectByDirector } from '../features/movies/movieSelectors';

const MovieList = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedDirector, setSelectedDirector] = useState('');

    const filteredMovies = useSelector(
        selectedGenre
            ? selectByGenre(selectedGenre)
            : selectedDirector
                ? selectByDirector(selectedDirector)
                : (state) => state.movies.movies
    );

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">🎬 Movie Collection</h1>

            <div className="flex justify-between gap-4 mb-6">
                <select
                    className="w-1/2 p-2 border rounded"
                    onChange={(e) => {
                        setSelectedGenre(e.target.value);
                        setSelectedDirector('');
                    }}
                    value={selectedGenre}
                >
                    <option value="">Filter by Genre</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Crime">Crime</option>
                </select>

                <select
                    className="w-1/2 p-2 border rounded"
                    onChange={(e) => {
                        setSelectedDirector(e.target.value);
                        setSelectedGenre('');
                    }}
                    value={selectedDirector}
                >
                    <option value="">Filter by Director</option>
                    <option value="Christopher Nolan">Christopher Nolan</option>
                    <option value="Francis Ford Coppola">Francis Ford Coppola</option>
                </select>
            </div>

            <ul className="space-y-4">
                {filteredMovies.map((movie) => (
                    <li key={movie.id} className="p-4 border rounded shadow-sm hover:shadow-lg transition">
                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                        <p className="text-sm text-gray-600">🎬 {movie.director}</p>
                        <p className="text-sm text-gray-600">🏷️ {movie.genre}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
