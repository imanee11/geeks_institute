import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await res.json();
    return data;
});

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), title: action.payload, completed: false });
        },

        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },

        toggleTodo: (state, action) => {
            const todo = state.find(t => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
    },
    
    extraReducers: builder => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
