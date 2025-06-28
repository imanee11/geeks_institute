import { createSelector } from '@reduxjs/toolkit';

export const selectAllMovies = (state) => state.movies.movies;

export const selectByGenre = (genre) =>
    createSelector([selectAllMovies], (movies) =>
        genre ? movies.filter((movie) => movie.genre === genre) : movies
    );

export const selectByDirector = (director) =>
    createSelector([selectAllMovies], (movies) =>
        director ? movies.filter((movie) => movie.director === director) : movies
    );
