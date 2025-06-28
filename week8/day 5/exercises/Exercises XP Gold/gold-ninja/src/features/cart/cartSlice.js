import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'T-shirt', price: 20 },
        { id: 2, name: 'Shoes', price: 50 },
        { id: 3, name: 'Hat', price: 15 },
    ],
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const exists = state.cart.find(item => item.id === product.id);
            if (exists) {
                exists.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectProducts = state => state.cart.products;

export const selectCartItems = state => state.cart.cart;

export const calculateTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
