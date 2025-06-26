import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories : {
        work : [],
        personal : [],
    }
}

const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo : (state , action) => {
            const {category , text} = action.payload;
            const newTodo = {id : Date.now() , text , completed : false};
            state.categories[category].push(newTodo);
        },

        toggleTodo : (state, action) => {
            const {category , id} = action.payload;
            const todo = state.categories[category].find(t => t.id === id);
            if(todo) todo.completed = !todo.completed;
        },

        removeTodo : (state , action ) => {
            const {category , id} = action.payload;
            state.categories[category] = state.categories[category].filter(t=>t.id !== id)
        },

        addCategory : (state , action) => {
            const newCategory = action.payload;
            if (!state.categories[newCategory]) {
                state.categories[newCategory] = [];
            }
        }

    }
})

export const { addTodo, toggleTodo, removeTodo, addCategory } = todoSlice.actions;
export default todoSlice.reducer;