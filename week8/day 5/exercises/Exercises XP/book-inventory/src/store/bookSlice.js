import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
        { id: 1, title: "It", author: "Stephen King", genre: "Horror" },
        { id: 2, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
        { id: 3, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
        { id: 4, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
        { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" }
    ],
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {}
});

export const selectBooks = state => state.books.books;

export const selectHorrorBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Horror')
)

export const selectFantasyBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
    [selectBooks],
    (books) => books.filter(book => book.genre === 'Science Fiction')
);


export default bookSlice.reducer;