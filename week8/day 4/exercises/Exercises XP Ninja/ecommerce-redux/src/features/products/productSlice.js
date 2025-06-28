import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './productThunks'

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload
                state.loading = false
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export default productSlice.reducer
