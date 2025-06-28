import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: 1, text: 'Learn Redux', completed: false },
        { id: 2, text: 'Read a book', completed: true },
    ],
    filter: 'All',
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(t => t.id !== action.payload);
        },
        
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;

export const selectVisibilityFilter = state => state.todo.filter;

export const selectTodos = createSelector(
    [(state) => state.todo.todos, selectVisibilityFilter],
    (todos, filter) => {
        if (filter === 'Active') return todos.filter(todo => !todo.completed);
        if (filter === 'Completed') return todos.filter(todo => todo.completed);
        return todos;
    }
);

export const selectFilteredTodosCount = createSelector(
    [selectTodos],
    (todos) => todos.length
);
