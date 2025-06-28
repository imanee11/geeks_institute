import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        { id: 1, name: "Personal" },
        { id: 2, name: "Work" }
    ]
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        }
    }
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;

export const selectCategories = state => state.categories.categories;

export const selectCategoryById = id =>
    createSelector([selectCategories], categories =>
        categories.find(c => c.id === id)
    );
