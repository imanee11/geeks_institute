import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import moviesReducer from '../features/movies/moviesSlice';
import productsReducer from '../features/products/productsSlice';


export const store = configureStore({
    reducer: {
        todos: todosReducer,
        movies: moviesReducer,
        products: productsReducer,
    },
});
