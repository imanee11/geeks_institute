import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find((p) => p.id === id);
            if (product) {
                product.quantity = quantity;
            }
        },

        removeProduct: (state, action) => {
            state.products = state.products.filter((p) => p.id !== action.payload)
        },
    }
})

export const { addProduct, updateQuantity, removeProduct } = inventorySlice.actions;
export default inventorySlice.reducer;