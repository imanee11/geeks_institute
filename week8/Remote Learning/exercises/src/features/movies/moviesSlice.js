import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [
        { id: 1, title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi' },
        { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', genre: 'Crime' },
        { id: 3, title: 'Interstellar', director: 'Christopher Nolan', genre: 'Sci-Fi' },
    ],
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter((m) => m.id !== action.payload);
        },
    },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
