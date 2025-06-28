import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, inStock: true },
        { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, inStock: false },
        { id: 3, name: 'Sneakers', category: 'Fashion', price: 100, inStock: true },
        { id: 4, name: 'T-shirt', category: 'Fashion', price: 25, inStock: true },
        { id: 5, name: 'Book', category: 'Books', price: 15, inStock: false },
    ],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productsSlice.reducer;
