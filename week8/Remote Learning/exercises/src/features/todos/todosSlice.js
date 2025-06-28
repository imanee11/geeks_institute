import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, title: 'Learn Redux Toolkit', completed: false },
        { id: 2, title: 'Practice Tailwind CSS', completed: true },
    ],
    filter: 'All',
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
            });
        },
        
        toggleTodo: (state, action) => {
            const todo = state.items.find(item => item.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },

        deleteTodo: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions;
export default todosSlice.reducer;
