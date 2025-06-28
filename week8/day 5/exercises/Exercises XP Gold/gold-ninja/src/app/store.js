import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import todoReducer from '../features/todos/todoSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        todo: todoReducer,
    },
});
